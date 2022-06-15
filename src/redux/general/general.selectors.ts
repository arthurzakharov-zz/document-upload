import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "../store";

export const selectGeneral = (state: StateType) => state.general;

export const selectGeneralIsLoading = createSelector(selectGeneral, (general) => general.isLoading);

export const selectGeneralCaseReference = createSelector(selectGeneral, (general) => general.caseReference);

export const selectGeneralToken = createSelector(selectGeneral, (general) => general.token);
