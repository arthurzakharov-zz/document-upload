import {
  MODAL_OPEN,
  MODAL_CLOSE,
  CLEAR_MAIN,
  TOGGLE_MODAL_BUTTON_VISIBILITY,
  SET_BUTTON_CLICK_HANDLER,
} from "./modal.types";
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

export const setModalIsButtonVisible = (isVisible: boolean) => ({
  type: TOGGLE_MODAL_BUTTON_VISIBILITY,
  payload: isVisible,
});

export const setModalButtonClickHandler = (handler: () => void) => ({
  type: SET_BUTTON_CLICK_HANDLER,
  payload: handler,
});
