import type { DocumentLabelType } from "../../types";
import type { UploadWrapperType } from "../../components/upload-wrapper/upload-wrapper.types";

export type FileRecordType = {
  name: string;
  files: Pick<UploadWrapperType, "dataURL">[];
};

export type FileReducerType = {
  [key in DocumentLabelType]: FileRecordType[];
};

export type FileAddToCategoryPayloadActionType = {
  category: DocumentLabelType;
  name: string;
  files: Pick<UploadWrapperType, "dataURL">[];
};
