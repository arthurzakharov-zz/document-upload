import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ImageAddToCategoryPayloadActionType, ImageReducerType } from "./image.types";
import { DocumentCategoryType, ImageRecordType } from "../../types";
import categories from "../../config/categories";

const imageSetName = (name: string, imageSet: ImageRecordType[]): string => {
  return `${name} #${imageSet.length + 1}`;
};

const INITIAL_STATE: ImageReducerType = categories.reduce((obj: ImageReducerType, category: DocumentCategoryType) => {
  obj[category.label] = [];
  return obj;
}, {} as ImageReducerType);

const imageSlice = createSlice({
  name: "image",
  initialState: INITIAL_STATE,
  reducers: {
    imageAddToCategory(state, action: PayloadAction<ImageAddToCategoryPayloadActionType>) {
      state[action.payload.category] = [
        ...state[action.payload.category],
        {
          name: imageSetName(action.payload.name, state[action.payload.category]),
          images: action.payload.files,
        },
      ];
    },
  },
});

export const { imageAddToCategory } = imageSlice.actions;

export default imageSlice.reducer;
