import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ImageAddToCategoryPayloadType, ImageReducerType } from "./image.types";
import { DocumentCategory, ImageRecord } from "../../types";
import categories from "../../config/categories";

const imageSetName = (name: string, imageSet: ImageRecord[]): string => {
  return `${name} #${imageSet.length + 1}`;
};

const INITIAL_STATE: ImageReducerType = categories.reduce((obj: ImageReducerType, category: DocumentCategory) => {
  return { ...obj, [category.label]: [] };
}, {});

const imageSlice = createSlice({
  name: "image",
  initialState: INITIAL_STATE,
  reducers: {
    imageAddToCategory(state, action: PayloadAction<ImageAddToCategoryPayloadType>) {
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
