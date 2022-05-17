import cn from "classnames";

export const loadSingleFiles = (open: boolean): string =>
  cn("load-single__files", {
    "load-single__files--open": open,
  });

export const loadSingleSave = (visible: boolean): string =>
  cn("load-single__save", {
    "load-single__save--visible": visible,
  });
