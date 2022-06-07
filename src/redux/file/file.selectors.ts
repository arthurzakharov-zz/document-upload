import { createSelector } from "@reduxjs/toolkit";
import type { StateType } from "../store";
import type { DocumentLabelType } from "../../types";
import type { FileRecordType } from "./file.types";
import { isObjectEmpty } from "../../utils";

export const selectFile = (state: StateType) => state.file;

export const selectFileCategory = (label: DocumentLabelType) =>
  createSelector([selectFile], (file): FileRecordType[] => {
    return isObjectEmpty(file) ? [] : file[label];
  });

export const selectFileCategoryQuantity = (label: DocumentLabelType) =>
  createSelector([selectFile], (file): number => {
    return isObjectEmpty(file) ? 0 : file[label].length;
  });
