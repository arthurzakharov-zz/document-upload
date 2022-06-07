import { createSlice } from "@reduxjs/toolkit";
import type { UiReducerType } from "./ui.types";

const INITIAL_STATE: UiReducerType = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: INITIAL_STATE,
  reducers: {
    isLoadingOn(state) {
      state.isLoading = true;
    },
    isLoadingOff(state) {
      state.isLoading = false;
    },
  },
});

export const { isLoadingOn, isLoadingOff } = uiSlice.actions;

export default uiSlice.reducer;
