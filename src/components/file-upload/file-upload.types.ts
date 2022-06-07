import { ReactNode } from "react";
import { FileResolutionType } from "../../types";

export type FileUploadType = {
  dataURL?: string;
  file?: File;
  [key: string]: any;
};

export type FileUploadListType = Array<FileUploadType>;

export type FileUploadErrorType = {
  maxFileSize?: boolean;
  maxNumber?: boolean;
};

export type FileUploadChildrenType = {
  onFileUpload: () => void;
  onFileRemove: (index: number) => void;
};

export type FileUploadPropsType = {
  files: FileUploadListType;
  fileResolutions: FileResolutionType[];
  maxFileSize: number;
  maxFileNumber: number;
  children: (props: FileUploadChildrenType) => ReactNode;
  onChange: (files: FileUploadListType, errors?: FileUploadErrorType) => void;
};
