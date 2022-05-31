import { ElementType } from "react";
import { ModalId, ModalSize } from "../../types";

export type ModalReducerType = {
  isOpen: boolean;
  withCloseButton: boolean;
  size: ModalSize;
  main: ElementType | null;
  mainProps: Object;
};

export type ModalOpenActionType = {
  type: ModalId;
  size: ModalSize;
  withCloseButton: boolean;
  props?: Object;
};
