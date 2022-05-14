import { MODAL_VISIBILITY } from "./modal.types";
import { Action, Reducer } from "../../types";

export interface ModalReducer {
  isOpen: boolean;
}

const INITIAL_STATE: ModalReducer = {
  isOpen: false,
};
/* eslint @typescript-eslint/default-param-last: "off" */
const modalReducer: Reducer<ModalReducer> = (state: ModalReducer = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case MODAL_VISIBILITY:
      return {
        ...state,
        isOpen: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default modalReducer;
