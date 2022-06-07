import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { FileAddToCategoryPayloadActionType, FileReducerType, FileRecordType } from "./file.types";
import categories from "../../config/categories";

const fileGroupName = (name: string, fileGroup: FileRecordType[]): string => {
  return `${name} #${fileGroup.length + 1}`;
};

const INITIAL_STATE: FileReducerType = categories.reduce((obj, category) => {
  obj[category.label] = [];
  return obj;
}, {} as FileReducerType);

const fileSlice = createSlice({
  name: "file",
  initialState: INITIAL_STATE,
  reducers: {
    fileAddToCategory(state, action: PayloadAction<FileAddToCategoryPayloadActionType>) {
      state[action.payload.category] = [
        ...state[action.payload.category],
        {
          name: fileGroupName(action.payload.name, state[action.payload.category]),
          files: action.payload.files,
        },
      ];
    },
  },
});

export const { fileAddToCategory } = fileSlice.actions;

export default fileSlice.reducer;
