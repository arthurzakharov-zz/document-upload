import cn from "classnames";

export const modal = (isOpened: boolean): string =>
  cn("modal", {
    "modal--opened": isOpened,
    "modal--closed": !isOpened,
  });

export const modalBody = (isOpened: boolean): string =>
  cn("modal__body", {
    "modal__body--opened": isOpened,
    "modal__body--closed": !isOpened,
  });
