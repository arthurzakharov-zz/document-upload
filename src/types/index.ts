export interface ImageType {
  dataURL?: string;
  file?: File;
  [key: string]: any;
}

export type ImageListType = Array<ImageType>;

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
  tooltip?: string;
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
