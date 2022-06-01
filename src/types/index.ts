import { ImageType } from "react-images-uploading";

export type ModalIdType = "general_info" | "privacy" | "impressum" | "load" | "error";

export type ModalSizeType = "xs" | "sm";

export type FooterLinkType = {
  label: string;
  id: ModalIdType;
};

export type CategoryNameType =
  | "Personalausweis"
  | "Gläubigerunterlagen"
  | "Einkommensnachweis"
  | "Arbeitsvertrag"
  | "Schufa-Auskunft"
  | "Sonstiges";

export type DocumentCategoryType = {
  label: CategoryNameType;
  uploadDescription: string;
  placeholder: string;
  fileSizeLimitInMb: number;
  fileFormats: string[];
  multiple: boolean;
};

export type ImageRecordType = {
  name: string;
  images: Pick<ImageType, "dataURL">[];
};

export type DataSizeType = "B" | "kB" | "MB";
