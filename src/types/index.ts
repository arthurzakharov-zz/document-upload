import { ImageListType } from "react-images-uploading";

export type ModalId = "general_info" | "privacy" | "impressum" | "load" | "error";

export type ModalSize = "xs" | "sm";

export type FooterLink = {
  label: string;
  id: ModalId;
};

export type DocumentCategory = {
  label: string;
  uploadDescription: string;
  placeholder: string;
  fileSizeLimitInMb: number;
  fileFormats: string[];
  multiple: boolean;
};

export type ImageRecord = {
  name: string;
  images: ImageListType;
};

export type DataSize = "B" | "kB" | "MB";
