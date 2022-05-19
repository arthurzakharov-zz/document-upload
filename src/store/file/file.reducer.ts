import { ImageListType } from "react-images-uploading";
import { Action, DocumentCategory, Reducer } from "../../types";
import { ADD_FILES_TO_CATEGORY, INIT_FILES } from "./file.types";
import categories from "../../config/categories";

export interface FileReducer {
  [key: string]: ImageListType;
}

const INITIAL_STATE: FileReducer = {};

/* eslint @typescript-eslint/default-param-last: "off" */
const fileReducer: Reducer<FileReducer> = (state: FileReducer = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case INIT_FILES:
      return categories.reduce((obj: FileReducer, category: DocumentCategory) => {
        return { ...obj, [category.label]: [] };
      }, {});
    case ADD_FILES_TO_CATEGORY:
      return {
        ...state,
        [action.payload.category]: action.payload.files,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default fileReducer;
