import { createSelector } from "reselect";
import { ImageRecord } from "../../types";
import { RootReducer } from "../root.reducer";
import { ImageReducer } from "./image.reducer";
import { isObjectEmpty } from "../../utils";

export const selectImage = (state: RootReducer) => state.image;

export const selectRecordsByCategory = (label: string) =>
  createSelector([selectImage], (image: ImageReducer): ImageRecord[] => {
    return isObjectEmpty(image) ? [] : image[label];
  });

export const selectRecordsByCategoryQuantity = (label: string) =>
  createSelector([selectImage], (image: ImageReducer): number => {
    return isObjectEmpty(image) ? 0 : image[label].length;
  });
