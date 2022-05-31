import cn from "classnames";
import { ImageType } from "react-images-uploading";
import { get } from "../../utils";

export const documentLabel = (label: string, title: string, count?: number): string => {
  if (count) {
    return label === title ? `${label} #${count}` : title;
  }
  return label;
};

export const buttonName = (label: string, title: string, count?: number): string => {
  if (count) {
    return label === title ? `${label} #${count} übermitteln` : `"${title}" übermitteln`;
  }
  return label;
};

export const loadFile = (error: boolean): string =>
  cn("load__file", {
    "load__file--error": error,
  });

export const imageKey = (image: ImageType): string =>
  get(image, "file", "name").concat("_", get(image, "file", "lastModified"), "_", get(image, "file", "size"));

export const allowedFilesDescription = (size: number, formats: string[]): string => {
  const allowedFormats = formats
    .map((f: string, index: number) => {
      return f.toUpperCase().concat(formats.length > index + 1 ? ", " : "-");
    })
    .join("");
  return `Maximale Dateigröße pro Datei: ${size}MB. Unterstützte Dateitypen: ${allowedFormats}.`;
};
