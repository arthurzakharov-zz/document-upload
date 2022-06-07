import type { ReactNode } from "react";
import type { DocumentResolutionType } from "../../types";

export type UploadWrapperType = {
  dataURL?: string;
  file?: File;
  [key: string]: any;
};

export type UploadWrapperListType = Array<UploadWrapperType>;

export type UploadWrapperErrorType = {
  maxFileSize?: boolean;
  maxNumber?: boolean;
};

export type UploadWrapperChildrenType = {
  onFileUpload: () => void;
  onFileRemove: (index: number) => void;
};

export type UploadWrapperPropsType = {
  files: UploadWrapperListType;
  fileResolutions: DocumentResolutionType[];
  maxFileSize: number;
  maxFileNumber: number;
  children: (props: UploadWrapperChildrenType) => ReactNode;
  onChange: (files: UploadWrapperListType, errors?: UploadWrapperErrorType) => void;
};
