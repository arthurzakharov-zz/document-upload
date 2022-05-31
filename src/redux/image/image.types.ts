import { ImageListType } from "react-images-uploading";
import { ImageRecord } from "../../types";

export type ImageReducerType = {
  [key: string]: ImageRecord[];
};

export type ImageAddToCategoryPayloadType = {
  category: string;
  name: string;
  files: ImageListType;
};
