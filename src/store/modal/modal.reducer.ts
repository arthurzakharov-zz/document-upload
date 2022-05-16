import { ElementType } from "react";
import GeneralInfoModal from "../../modals/general-info";
import ImpressumModal from "../../modals/impressum";
import PrivacyModal from "../../modals/privacy";
import { MODAL_OPEN, MODAL_CLOSE, CLEAR_MAIN } from "./modal.types";
import { Action, ModalId, Reducer } from "../../types";

export interface ModalReducer {
  isOpen: boolean;
  main: ElementType | null;
}

const INITIAL_STATE: ModalReducer = {
  isOpen: false,
  main: null,
};

const main = (id: ModalId) => {
  switch (id) {
    case "general_info":
      return GeneralInfoModal;
    case "impressum":
      return ImpressumModal;
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
        main: null,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default modalReducer;
