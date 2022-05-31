import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "../index";
import { ImageRecord } from "../../types";
import { isObjectEmpty } from "../../utils";

export const selectImage = (state: StateType) => state.image;

export const selectRecordsByCategory = (label: string) =>
  createSelector([selectImage], (image): ImageRecord[] => {
    return isObjectEmpty(image) ? [] : image[label];
  });

export const selectRecordsByCategoryQuantity = (label: string) =>
  createSelector([selectImage], (image): number => {
    return isObjectEmpty(image) ? 0 : image[label].length;
  });
