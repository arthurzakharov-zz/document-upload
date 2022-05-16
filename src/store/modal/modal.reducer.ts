import { ElementType } from "react";
import GeneralInfoModal from "../../modals/general-info";
import ImpressumModal from "../../modals/impressum";
import LoadSingleModal from "../../modals/load-single";
import PrivacyModal from "../../modals/privacy";
import {
  MODAL_OPEN,
  MODAL_CLOSE,
  CLEAR_MAIN,
  TOGGLE_MODAL_BUTTON_VISIBILITY,
  SET_BUTTON_CLICK_HANDLER,
} from "./modal.types";
import { Action, ModalId, Reducer } from "../../types";

export interface ModalReducer {
  isOpen: boolean;
  isButtonVisible: boolean;
  buttonClickHandler: () => void;
  main: ElementType | null;
}

const INITIAL_STATE: ModalReducer = {
  isOpen: false,
  isButtonVisible: false,
  buttonClickHandler: () => {},
  main: null,
};

const main = (id: ModalId) => {
  switch (id) {
    case "general_info":
      return GeneralInfoModal;
    case "impressum":
      return ImpressumModal;
    case "load-single":
      return LoadSingleModal;
    case "privacy":
      return PrivacyModal;
    default:
      return null;
  }
};

/* eslint @typescript-eslint/default-param-last: "off" */
const modalReducer: Reducer<ModalReducer> = (state: ModalReducer = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
        main: main(action.payload),
      };
    case MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    case CLEAR_MAIN:
      return {
        ...state,
        isButtonVisible: false,
        buttonClickHandler: () => {},
        main: null,
      };
    case TOGGLE_MODAL_BUTTON_VISIBILITY:
      return {
        ...state,
        isButtonVisible: action.payload,
      };
    case SET_BUTTON_CLICK_HANDLER:
      return {
        ...state,
        buttonClickHandler: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default modalReducer;
