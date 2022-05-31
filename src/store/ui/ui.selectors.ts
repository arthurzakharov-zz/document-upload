import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "../index";

export const selectUi = (state: StateType) => state.ui;

export const selectUiIsLoading = createSelector(selectUi, (ui) => ui.isLoading);
