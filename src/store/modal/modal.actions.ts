import { MODAL_OPEN, MODAL_CLOSE, CLEAR_MAIN } from "./modal.types";
import { ModalId } from "../../types";

export const openModal = (type: ModalId) => ({
  type: MODAL_OPEN,
  payload: type,
});

export const modalClose = () => ({
  type: MODAL_CLOSE,
});

export const clearMain = () => ({
  type: CLEAR_MAIN,
});
