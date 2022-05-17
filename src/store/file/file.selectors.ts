import { createSelector } from "reselect";
import { RootReducer } from "../root.reducer";
import { FileReducer } from "./file.reducer";

export const selectFile = (state: RootReducer) => state.file;

export const selectFileCategoryByName = (name: string) =>
  createSelector([selectFile], (file: FileReducer) => file[name]);
