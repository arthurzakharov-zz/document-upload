export type DocumentResolutionType = "pdf" | "png" | "jpg" | "jpeg" | "heic" | "gif";

export type DocumentLabelType =
  | "Personalausweis"
  | "Gläubigerunterlagen"
  | "Einkommensnachweis"
  | "Arbeitsvertrag"
  | "Schufa-Auskunft"
  | "Sonstiges";

export type DocumentCategoryType = {
  label: DocumentLabelType;
  tooltip?: string;
  uploadDescription: string;
  placeholder: string;
  sizeLimit: number;
  resolution: DocumentResolutionType[];
  multiple: boolean;
};

export type DataSizeType = "B" | "kB" | "MB";
