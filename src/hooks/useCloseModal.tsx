import { useDispatch } from "react-redux";
import { clearMain, modalClose } from "../store/modal/modal.actions";

function useCloseModal() {
  const dispatch = useDispatch();

  return () => {
    dispatch(modalClose());
    setTimeout(() => {
      // TODO: think of replacing setTimeout with some more elegant way
      // Main content should be cleared once animation is played.
      dispatch(clearMain());
    }, 600);
  };
}

export default useCloseModal;
