import { useEffect, useRef, KeyboardEvent, MouseEvent } from "react";
import { useSelector } from "react-redux";
import useCloseModal from "../../hooks/useCloseModal";
import useLockedBody from "../../hooks/useLockedBody";
import { selectModalMain } from "../../store/modal/modal.selectors";
import { modal, modalBody } from "./modal.utils";
import "./modal.css";

export interface ModalProps {
  isOpened: boolean;
}

function Modal(props: ModalProps) {
  const { isOpened } = props;

  const overlayRef = useRef<HTMLDivElement>(null);

  const Main = useSelector(selectModalMain);

  const closeModal = useCloseModal();

  const { setLocked } = useLockedBody();

  useEffect(() => {
    setLocked(isOpened);
    if (isOpened) {
      setTimeout(() => {
        if (overlayRef.current) {
          // @ts-ignore
          overlayRef.current.focus();
        }
      }, 300);
    }
  }, [isOpened, setLocked]);

  const overlayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.target === overlayRef.current) {
      closeModal();
    }
  };

  const overlayPress = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.target === overlayRef.current && e.key === "Enter") {
      closeModal();
    }
  };

  return Main ? (
    <div
      ref={overlayRef}
      tabIndex={0}
      role="button"
      className={modal(isOpened)}
      onKeyUp={overlayPress}
      onClick={overlayClick}
    >
      <div className={modalBody(isOpened)}>
        <div className="modal__main">
          <Main />
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
