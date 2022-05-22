import { ElementType } from "react";
import ErrorModal from "../../modals/error";
import GeneralInfoModal from "../../modals/general-info";
import ImpressumModal from "../../modals/impressum";
import LoadModal from "../../modals/load";
import PrivacyModal from "../../modals/privacy";
import { MODAL_OPEN, MODAL_CLOSE, CLEAR_MAIN } from "./modal.types";
import { Action, ModalId, Reducer } from "../../types";

export interface ModalReducer {
  isOpen: boolean;
  main: ElementType | null;
  mainProps: Object;
}

const INITIAL_STATE: ModalReducer = {
  isOpen: false,
  main: null,
  mainProps: {},
};

const main = (id: ModalId): ElementType | null => {
  switch (id) {
    case "error":
      return ErrorModal;
    case "general_info":
      return GeneralInfoModal;
    case "impressum":
      return ImpressumModal;
    case "load":
      return LoadModal;
    case "privacy":
      return PrivacyModal;
    default:
      return null;
  }
};

/* eslint @typescript-eslint/default-param-last: "off" */
const modalReducer: Reducer<ModalReducer> = (state: ModalReducer = INITIAL_STATE, action: Action): ModalReducer => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
        main: main(action.payload.type),
        mainProps: action.payload.props,
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
