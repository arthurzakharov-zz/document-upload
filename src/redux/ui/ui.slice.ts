import { createSlice } from "@reduxjs/toolkit";
import type { UiReducerType } from "./ui.types";

const INITIAL_STATE: UiReducerType = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: INITIAL_STATE,
  reducers: {
    uiIsLoadingOn(state) {
      state.isLoading = true;
    },
    uiIsLoadingOff(state) {
      state.isLoading = false;
    },
  },
});

export const { uiIsLoadingOn, uiIsLoadingOff } = uiSlice.actions;

export default uiSlice.reducer;
