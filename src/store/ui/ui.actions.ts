import { SET_IS_LOADING } from "./ui.types";

export const openModal = (isLoading: boolean) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});
