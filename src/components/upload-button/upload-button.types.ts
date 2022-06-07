import type { MouseEvent } from "react";

export type UploadButtonPropsType = {
  loaded: boolean;
  multiple: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
