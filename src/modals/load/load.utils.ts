import cn from "classnames";

export const documentLabel = (name: string, count?: number): string => (count ? `${name} #${count}` : name);

export const buttonName = (name: string, count?: number): string =>
  count ? `${name} #${count} übermitteln` : `${name} übermitteln`;

export const loadFile = (error: boolean): string =>
  cn("load__file", {
    "load__file--error": error,
  });
