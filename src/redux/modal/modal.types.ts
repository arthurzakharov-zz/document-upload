import type { ElementType } from "react";

export type ModalIdType = "general_info" | "privacy" | "impressum" | "load" | "error";

export type ModalSizeType = "xs" | "sm";

export type ModalReducerType = {
  isOpen: boolean;
  withCloseButton: boolean;
  size: ModalSizeType;
  main: ElementType | null;
  mainProps: Object;
};

export type ModalOpenActionType = {
  type: ModalIdType;
  size: ModalSizeType;
  withCloseButton: boolean;
  props?: Object;
};
