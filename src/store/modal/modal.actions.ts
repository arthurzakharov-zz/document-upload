import { MODAL_VISIBILITY } from "./modal.types";

export const openModal = () => ({
  type: MODAL_VISIBILITY,
  payload: true,
});

export const closeModal = () => ({
  type: MODAL_VISIBILITY,
  payload: false,
});
