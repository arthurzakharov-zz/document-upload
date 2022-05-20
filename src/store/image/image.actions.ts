import { ImageListType } from "react-images-uploading";
import { ADD_IMAGES_TO_CATEGORY, INIT_IMAGES } from "./image.types";

export const initFiles = () => ({
  type: INIT_IMAGES,
});

export const addFilesToCategory = (category: string, name: string, files: ImageListType) => ({
  type: ADD_IMAGES_TO_CATEGORY,
  payload: {
    category,
    name,
    files,
  },
});
