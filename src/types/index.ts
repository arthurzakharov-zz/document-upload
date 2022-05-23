import { ImageListType } from "react-images-uploading";

export interface Action {
  type: string;
  payload?: any;
}

export type Reducer<T> = (state: T, action: Action) => T;

export type ModalId = "general_info" | "privacy" | "impressum" | "load" | "error";

export type FooterLink = {
  label: string;
  id: ModalId;
};

export type DocumentCategory = {
  label: string;
  placeholder: string;
  fileSizeLimitInMb: number;
  fileFormats: string[];
  multi: boolean;
};

export type ImageRecord = {
  name: string;
  images: ImageListType;
};

export type DataSize = "B" | "kB" | "MB";
