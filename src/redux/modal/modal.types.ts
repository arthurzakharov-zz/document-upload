import { ElementType } from "react";
import { ModalIdType, ModalSizeType } from "../../types";

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
