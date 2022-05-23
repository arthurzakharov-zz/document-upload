import cn from "classnames";
import { ImageType } from "react-images-uploading";
import { get } from "../../utils";

export const documentLabel = (name: string, count?: number): string => (count ? `${name} #${count}` : name);

export const buttonName = (name: string, count?: number): string =>
  count ? `${name} #${count} übermitteln` : `${name} übermitteln`;

export const loadFile = (error: boolean): string =>
  cn("load__file", {
    "load__file--error": error,
  });

export const imageKey = (image: ImageType): string =>
  get(image, "file", "name").concat("_", get(image, "file", "lastModified"), "_", get(image, "file", "size"));

export const allowedFilesDescription = (size: number, formats: string[]): string => {
  return `Maximale Dateigröße pro Datei: ${size}MB. Unterstützte Dateitypen: ${formats.map((f: string, index: number) =>
    f.toUpperCase().concat(formats.length > index + 1 ? ", " : ""),
  )}.`;
};
