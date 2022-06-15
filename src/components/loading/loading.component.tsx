import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useReactRedux } from "../../hooks";
import { selectGeneralIsLoading } from "../../redux/general/general.selectors";
import "./loading.css";

function Loading() {
  const ref = useRef<HTMLDivElement>(null);

  const { useSelector } = useReactRedux();

  const isLoading = useSelector(selectGeneralIsLoading);

  return (
    <CSSTransition in={isLoading} timeout={{ enter: 600, exit: 1050 }} nodeRef={ref} classNames="loading" unmountOnExit>
      <div className="loading">
        <div className="loading__circle" />
      </div>
    </CSSTransition>
  );
}

export default Loading;
