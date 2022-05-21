import { SET_IS_LOADING } from "./ui.types";
import { Action, Reducer } from "../../types";

export interface UiReducer {
  isLoading: boolean;
}

const INITIAL_STATE: UiReducer = {
  isLoading: false,
};

/* eslint @typescript-eslint/default-param-last: "off" */
const uiReducer: Reducer<UiReducer> = (state: UiReducer = INITIAL_STATE, action: Action): UiReducer => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default uiReducer;
