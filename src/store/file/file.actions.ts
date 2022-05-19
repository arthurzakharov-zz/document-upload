import { ImageListType } from "react-images-uploading";
import { ADD_FILES_TO_CATEGORY, INIT_FILES } from "./file.types";

export const initFiles = () => ({
  type: INIT_FILES,
});

export const addFilesToCategory = (category: string, files: ImageListType) => ({
  type: ADD_FILES_TO_CATEGORY,
  payload: {
    category,
    files,
  },
});
