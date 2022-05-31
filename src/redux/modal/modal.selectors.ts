import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "../store";

export const selectModal = (state: StateType) => state.modal;

export const selectModalIsOpen = createSelector(selectModal, (modal) => modal.isOpen);

export const selectModalWithCloseButton = createSelector(selectModal, (modal) => modal.withCloseButton);

export const selectModalSize = createSelector(selectModal, (modal) => modal.size);

export const selectModalMain = createSelector(selectModal, (modal) => modal.main);

export const selectModalMainProps = createSelector(selectModal, (modal) => modal.mainProps);
