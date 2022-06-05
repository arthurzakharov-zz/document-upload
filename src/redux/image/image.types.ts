import { ImageRecordType, CategoryNameType, ImageType } from "../../types";

export type ImageReducerType = {
  [key in CategoryNameType]: ImageRecordType[];
};

export type ImageAddToCategoryPayloadActionType = {
  category: CategoryNameType;
  name: string;
  files: Pick<ImageType, "dataURL">[];
};
