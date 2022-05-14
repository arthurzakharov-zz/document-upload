import { createSelector } from "reselect";
import { RootReducer } from "../root.reducer";
import { ModalReducer } from "./modal.reducer";

export const selectModal = (state: RootReducer) => state.modal;

export const selectIsOped = createSelector([selectModal], (modal: ModalReducer) => modal.isOpen);
