import { createSelector } from "reselect";
import { RootReducer } from "../root.reducer";
import { UiReducer } from "./ui.reducer";

export const selectModal = (state: RootReducer) => state.ui;

export const selectIsLoading = createSelector([selectModal], (ui: UiReducer) => ui.isLoading);
