import type { DocumentLabelType } from "../../types";
import type { FileUploadType } from "../../components/file-upload/file-upload.types";

export type FileRecordType = {
  name: string;
  files: Pick<FileUploadType, "dataURL">[];
};

export type FileReducerType = {
  [key in DocumentLabelType]: FileRecordType[];
};

export type FileAddToCategoryPayloadActionType = {
  category: DocumentLabelType;
  name: string;
  files: Pick<FileUploadType, "dataURL">[];
};
