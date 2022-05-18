import { useState, useEffect, useRef, KeyboardEvent, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { selectModalIsOpened, selectModalMain, selectModalMainProps } from "../../store/modal/modal.selectors";
import useCloseModal from "../../hooks/useCloseModal";
import useLockedBody from "../../hooks/useLockedBody";
import { modal, modalBody } from "./modal.utils";
import "./modal.css";

function Modal() {
  const [visible, setVisible] = useState<boolean>(false);

  const isOpened = useSelector(selectModalIsOpened);
  const Main = useSelector(selectModalMain);
  const mainProps = useSelector(selectModalMainProps);

  const overlayRef = useRef<HTMLDivElement>(null);

  const closeModal = useCloseModal();

  const { setLocked } = useLockedBody();

  useEffect(() => {
    if (overlayRef.current && visible) {
      overlayRef.current.addEventListener("animationend", () => {
        // eslint-disable-next-line no-console
        console.log("finish", isOpened);
      });
    }
  }, [visible]);

  useEffect(() => {
    setLocked(isOpened);
    if (isOpened) {
      setVisible(isOpened);
      setTimeout(() => {
        if (overlayRef.current) {
          // @ts-ignore
          overlayRef.current.focus();
        }
      }, 0);
    } else {
      setTimeout(() => {
        setVisible(isOpened);
      }, 1000);
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

  return visible ? (
    <div
      ref={overlayRef}
      tabIndex={0}
      role="button"
      className={modal(isOpened)}
      onKeyUp={overlayPress}
      onClick={overlayClick}
    >
      <div className={modalBody(isOpened)}>{Main && <Main {...mainProps} />}</div>
    </div>
  ) : null;
}

export default Modal;
