import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "../store";
import { CategoryNameType, ImageRecordType } from "../../types";
import { isObjectEmpty } from "../../utils";

export const selectImage = (state: StateType) => state.image;

export const selectRecordsByCategory = (label: CategoryNameType) =>
  createSelector([selectImage], (image): ImageRecordType[] => {
    return isObjectEmpty(image) ? [] : image[label];
  });

export const selectRecordsByCategoryQuantity = (label: CategoryNameType) =>
  createSelector([selectImage], (image): number => {
    return isObjectEmpty(image) ? 0 : image[label].length;
  });
