import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { clearMain, modalClose } from "../../store/modal/modal.actions";
import { selectModalIsOpened, selectModalMain, selectModalMainProps } from "../../store/modal/modal.selectors";
import useLockedBody from "../../hooks/useLockedBody";
import SvgClose from "../../svg/Close";
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

  const close = () => {
    dispatch(modalClose());
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
      <div ref={ref} tabIndex={0} role="button" className="modal">
        <div className="modal__body">
          <button type="button" className="modal__close" onClick={close}>
            <SvgClose className="modal__icon" />
          </button>
          {Main && <Main {...mainProps} />}
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
