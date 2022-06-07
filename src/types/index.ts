import type { FileUploadType } from "../components/file-upload/file-upload.types";

export type FileResolutionType = "pdf" | "png" | "jpg" | "jpeg" | "heic" | "gif";

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
  fileFormats: FileResolutionType[];
  multiple: boolean;
};

export type FileRecordType = {
  name: string;
  files: Pick<FileUploadType, "dataURL">[];
};

export type DataSizeType = "B" | "kB" | "MB";
