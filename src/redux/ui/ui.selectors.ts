import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "../store";

export const selectUi = (state: StateType) => state.ui;

export const selectUiIsLoading = createSelector(selectUi, (ui) => ui.isLoading);
