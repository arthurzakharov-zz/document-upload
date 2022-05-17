import { Action, DocumentCategory, Reducer } from "../../types";
import { INIT_FILES } from "./file.types";
import categories from "../../config/categories";

export interface FileReducer {
  [key: string]: string[];
}

const INITIAL_STATE: FileReducer = {};

/* eslint @typescript-eslint/default-param-last: "off" */
const fileReducer: Reducer<FileReducer> = (state: FileReducer = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case INIT_FILES:
      return categories.reduce((obj: FileReducer, category: DocumentCategory) => {
        return { ...obj, [category.label]: [] };
      }, {});
    default: {
      return {
        ...state,
      };
    }
  }
};

export default fileReducer;
