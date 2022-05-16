export interface Action {
  type: string;
  payload?: any;
}

export type Reducer<T> = (state: T, action: Action) => T;

export type ModalId = "general_info" | "privacy" | "impressum" | "load-single";

export type FooterLink = {
  label: string;
  id: ModalId;
};
