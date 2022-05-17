import cn from "classnames";

export const modal = (isOpened: boolean): string =>
  cn("modal", {
    "modal--opened": isOpened,
    "modal--closed": !isOpened,
  });

export const modalWrap = (isOpened: boolean): string =>
  cn("modal__wrap", {
    "modal__wrap--opened": isOpened,
    "modal__wrap--closed": !isOpened,
  });

export const modalButton = (isVisible: boolean): string =>
  cn("modal__button", {
    "modal__button--opened": isVisible,
    "modal__button--closed": !isVisible,
  });
