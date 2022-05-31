import { ElementType } from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ModalReducerType } from "./modal.types";
import { ModalId } from "../../types";
import ErrorModal from "../../modals/error/error.modal";
import GeneralInfoModal from "../../modals/general-info";
import ImpressumModal from "../../modals/impressum";
import LoadModal from "../../modals/load";
import PrivacyModal from "../../modals/privacy";
import { ModalOpenActionType } from "./modal.types";

const INITIAL_STATE: ModalReducerType = {
  isOpen: false,
  withCloseButton: false,
  size: "xs",
  main: null,
  mainProps: {},
};

const main = (id: ModalId): ElementType | null => {
  switch (id) {
    case "error":
      return ErrorModal;
    case "general_info":
      return GeneralInfoModal;
    case "impressum":
      return ImpressumModal;
    case "load":
      return LoadModal;
    case "privacy":
      return PrivacyModal;
    default:
      return null;
  }
};

const modalSlice = createSlice({
  name: "modal",
  initialState: INITIAL_STATE,
  reducers: {
    modalOpen(state, action: PayloadAction<ModalOpenActionType>) {
      state.size = action.payload.size;
      state.isOpen = true;
      state.withCloseButton = action.payload.withCloseButton;
      state.main = main(action.payload.type);
      state.mainProps = action.payload.props || {};
    },
    modalClose(state) {
      state.isOpen = false;
    },
    modalClear(state) {
      state.withCloseButton = modalSlice.getInitialState().withCloseButton;
      state.size = modalSlice.getInitialState().size;
      state.main = modalSlice.getInitialState().main;
      state.mainProps = modalSlice.getInitialState().mainProps;
    },
  },
});

export const { modalOpen, modalClose, modalClear } = modalSlice.actions;

export default modalSlice.reducer;
