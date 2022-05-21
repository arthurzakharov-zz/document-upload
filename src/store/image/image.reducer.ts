import { Action, DocumentCategory, ImageRecord, Reducer } from "../../types";
import { ADD_IMAGES_TO_CATEGORY, INIT_IMAGES } from "./image.types";
import categories from "../../config/categories";

export interface ImageReducer {
  [key: string]: ImageRecord[];
}

const INITIAL_STATE: ImageReducer = {};

const imageSetName = (name: string, imageSet: ImageRecord[]): string => {
  return `${name} #${imageSet.length + 1}`;
};

/* eslint @typescript-eslint/default-param-last: "off" */
const fileReducer: Reducer<ImageReducer> = (state: ImageReducer = INITIAL_STATE, action: Action): ImageReducer => {
  switch (action.type) {
    case INIT_IMAGES:
      return categories.reduce((obj: ImageReducer, category: DocumentCategory) => {
        return { ...obj, [category.label]: [] };
      }, {});
    case ADD_IMAGES_TO_CATEGORY:
      return {
        ...state,
        [action.payload.category]: [
          ...state[action.payload.category],
          {
            name: imageSetName(action.payload.name, state[action.payload.category]),
            images: action.payload.files,
          },
        ],
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default fileReducer;
