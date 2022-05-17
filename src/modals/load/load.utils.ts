import cn from "classnames";

export const loadFiles = (open: boolean): string =>
  cn("load__files", {
    "load__files--open": open,
  });

export const loadSave = (visible: boolean): string =>
  cn("load__save", {
    "load__save--visible": visible,
  });

export const documentLabel = (name: string, count: number): string => `${name} #${count}`;

export const buttonName = (name: string, count: number): string => `${name} #${count} übermitteln`;
