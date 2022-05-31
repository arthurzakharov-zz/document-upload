import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { StateType, DispatchType } from "../redux/store";

const useReactRedux = () => {
  const useAppDispatch = () => useDispatch<DispatchType>();
  const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;

  const dispatch = useAppDispatch();

  return {
    dispatch,
    useSelector: useAppSelector,
  };
};

export default useReactRedux;
