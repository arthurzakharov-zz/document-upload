import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "../store";
import { CategoryNameType, FileRecordType } from "../../types";
import { isObjectEmpty } from "../../utils";

export const selectFile = (state: StateType) => state.file;

export const selectFileCategory = (label: CategoryNameType) =>
  createSelector([selectFile], (file): FileRecordType[] => {
    return isObjectEmpty(file) ? [] : file[label];
  });

export const selectFileCategoryQuantity = (label: CategoryNameType) =>
  createSelector([selectFile], (file): number => {
    return isObjectEmpty(file) ? 0 : file[label].length;
  });
