import { useEffect, useRef, KeyboardEvent, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/modal/modal.actions";
import { modal, modalBody } from "./modal.utils";
import "./modal.css";

export interface ModalProps {
  isOpened: boolean;
}

function Modal(props: ModalProps) {
  const { isOpened } = props;

  const overlayRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpened) {
      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.focus();
        }
      }, 300);
    }
  }, [isOpened]);

  const overlayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(closeModal());
  };

  const overlayPress = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.key === "Enter") {
      dispatch(closeModal());
    }
  };

  return (
    <div
      ref={overlayRef}
      tabIndex={0}
      role="button"
      className={modal(isOpened)}
      onKeyDown={overlayPress}
      onClick={overlayClick}
    >
      <div className={modalBody(isOpened)}>MODAL</div>
    </div>
  );
}

export default Modal;
