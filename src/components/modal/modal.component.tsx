import { useEffect, useRef, KeyboardEvent, MouseEvent } from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { selectModalIsOpened, selectModalMain, selectModalMainProps } from "../../store/modal/modal.selectors";
import useCloseModal from "../../hooks/useCloseModal";
import useLockedBody from "../../hooks/useLockedBody";
import "./modal.css";

function Modal() {
  const isOpened = useSelector(selectModalIsOpened);
  const Main = useSelector(selectModalMain);
  const mainProps = useSelector(selectModalMainProps);

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = useCloseModal();

  const { setLocked } = useLockedBody();

  useEffect(() => {
    setLocked(isOpened);
    if (isOpened) {
      setTimeout(() => {
        if (modalRef.current) {
          // @ts-ignore
          modalRef.current.focus();
        }
      }, 300);
    }
  }, [isOpened, setLocked]);

  const overlayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  const overlayPress = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.target === modalRef.current && e.key === "Enter") {
      closeModal();
    }
  };

  return (
    <CSSTransition
      key={1}
      in={isOpened}
      timeout={{ enter: 300, exit: 450 }}
      nodeRef={modalRef}
      classNames="modal"
      unmountOnExit
    >
      <div ref={modalRef} tabIndex={0} role="button" className="modal" onKeyUp={overlayPress} onClick={overlayClick}>
        <div className="modal__body">{Main && <Main {...mainProps} />}</div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
