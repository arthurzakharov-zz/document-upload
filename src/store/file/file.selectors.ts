import { createSelector } from "reselect";
import { RootReducer } from "../root.reducer";
import { FileReducer } from "./file.reducer";

export const selectFile = (state: RootReducer) => state.file;

export const selectFileCategoryByName = (label: string) =>
  createSelector([selectFile], (file: FileReducer) => (file ? file[label] : []));
