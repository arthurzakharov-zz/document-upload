import { useEffect, useRef, KeyboardEvent, MouseEvent } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { clearMain, modalClose } from "../../store/modal/modal.actions";
import { selectModalIsOpened, selectModalMain, selectModalMainProps } from "../../store/modal/modal.selectors";
import useLockedBody from "../../hooks/useLockedBody";
import "./modal.css";

function Modal() {
  const isOpened = useSelector(selectModalIsOpened);
  const Main = useSelector(selectModalMain);
  const mainProps = useSelector(selectModalMainProps);

  const dispatch = useDispatch();

  const ref = useRef<HTMLDivElement>(null);

  const { setLocked } = useLockedBody();

  useEffect(() => {
    setLocked(isOpened);
  }, [isOpened, setLocked]);

  const overlayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.target === ref.current) {
      dispatch(modalClose());
    }
  };

  const overlayPress = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.target === ref.current && e.key === "Enter") {
      dispatch(modalClose());
    }
  };

  const onEntered = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const onExited = () => {
    dispatch(clearMain());
  };

  return (
    <CSSTransition
      in={isOpened}
      timeout={{ enter: 600, exit: 1050 }}
      nodeRef={ref}
      classNames="modal"
      onEntered={onEntered}
      onExited={onExited}
      unmountOnExit
    >
      <div ref={ref} tabIndex={0} role="button" className="modal" onKeyUp={overlayPress} onClick={overlayClick}>
        <div className="modal__body">{Main && <Main {...mainProps} />}</div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
