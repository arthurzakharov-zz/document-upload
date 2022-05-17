import { useEffect, useRef, KeyboardEvent, MouseEvent, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectModalButtonClickHandler,
  selectModalIsButtonVisible,
  selectModalMain,
} from "../../store/modal/modal.selectors";
import useCloseModal from "../../hooks/useCloseModal";
import useLockedBody from "../../hooks/useLockedBody";
import Button from "../button";
import { modal, modalButton, modalWrap } from "./modal.utils";
import "./modal.css";

export interface ModalProps {
  isOpened: boolean;
}

function Modal(props: ModalProps) {
  const { isOpened } = props;

  const [buttonVisible, setButtonVisible] = useState<boolean>(false);

  const overlayRef = useRef<HTMLDivElement>(null);

  const Main = useSelector(selectModalMain);
  const isButtonVisible = useSelector(selectModalIsButtonVisible);
  const buttonClickHandler = useSelector(selectModalButtonClickHandler);

  const closeModal = useCloseModal();

  const { setLocked } = useLockedBody();

  useEffect(() => {
    if (isButtonVisible) {
      setButtonVisible(isButtonVisible);
    } else {
      setTimeout(() => {
        setButtonVisible(isButtonVisible);
      }, 700);
    }
  }, [isButtonVisible]);

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
      <div className={modalWrap(isOpened)}>
        <div className="modal__body">
          <div className="modal__main">
            <Main />
          </div>
        </div>
        {buttonVisible && (
          <div className={modalButton(isButtonVisible)}>
            <Button text="Schreiben #1 übermitteln" onClick={buttonClickHandler} />
          </div>
        )}
      </div>
    </div>
  ) : null;
}

export default Modal;
