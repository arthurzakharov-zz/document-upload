import { FileRecordType, CategoryNameType } from "../../types";
import { FileUploadType } from "../../components/file-upload/file-upload.types";

export type FileReducerType = {
  [key in CategoryNameType]: FileRecordType[];
};

export type FileAddToCategoryPayloadActionType = {
  category: CategoryNameType;
  name: string;
  files: Pick<FileUploadType, "dataURL">[];
};
