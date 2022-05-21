import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../store/ui/ui.selectors";
import "./loading.css";

function Loading() {
  const ref = useRef<HTMLDivElement>(null);

  const isOpened = useSelector(selectIsLoading);

  return (
    <CSSTransition in={isOpened} timeout={{ enter: 600, exit: 1050 }} nodeRef={ref} classNames="loading" unmountOnExit>
      <div className="loading">
        <div className="loading__circle" />
      </div>
    </CSSTransition>
  );
}

export default Loading;
