import cn from "classnames";

export const uploadButton = (loaded: boolean): string =>
  cn("upload-button", {
    "upload-button--loaded": loaded,
  });
