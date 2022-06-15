import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { GeneralReducerType, SetCaseReferenceAndTokenPayloadActionType } from "./general.types";

const INITIAL_STATE: GeneralReducerType = {
  isLoading: false,
  caseReference: "",
  token: "",
};

const generalSlice = createSlice({
  name: "ui",
  initialState: INITIAL_STATE,
  reducers: {
    setLoadingOn(state) {
      state.isLoading = true;
    },
    setLoadingOff(state) {
      state.isLoading = false;
    },
    setCaseReferenceAndToken(state, action: PayloadAction<SetCaseReferenceAndTokenPayloadActionType>) {
      state.caseReference = action.payload.caseReference;
      state.token = action.payload.token;
    },
  },
});

export const { setLoadingOn, setLoadingOff, setCaseReferenceAndToken } = generalSlice.actions;

export default generalSlice.reducer;
