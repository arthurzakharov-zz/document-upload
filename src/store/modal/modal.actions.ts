import { MODAL_OPEN, MODAL_CLOSE, CLEAR_MAIN } from "./modal.types";
import { ModalId, ModalSize } from "../../types";

export const openModal = (type: ModalId, size: ModalSize, withCloseButton: boolean, props?: Object) => ({
  type: MODAL_OPEN,
  payload: {
    type,
    size,
    withCloseButton,
    props,
  },
});

export const modalClose = () => ({
  type: MODAL_CLOSE,
});

export const clearMain = () => ({
  type: CLEAR_MAIN,
});
