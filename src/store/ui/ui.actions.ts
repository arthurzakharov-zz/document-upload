import { SET_IS_LOADING } from "./ui.types";

export const setIsLoading = (isLoading: boolean) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});
