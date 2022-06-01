import { ImageType } from "react-images-uploading";
import { ImageRecordType, CategoryNameType } from "../../types";

export type ImageReducerType = {
  [key in CategoryNameType]: ImageRecordType[];
};

export type ImageAddToCategoryPayloadActionType = {
  category: CategoryNameType;
  name: string;
  files: Pick<ImageType, "dataURL">[];
};
