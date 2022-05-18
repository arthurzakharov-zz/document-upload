import cn from "classnames";

export const modal = (isOpened: boolean): string =>
  cn("modal", "animate__animated", "animate__faster", {
    animate__fadeIn: isOpened,
    animate__fadeOut: !isOpened,
    "animate__delay-2s": !isOpened,
  });

export const modalBody = (isOpened: boolean): string =>
  cn("modal__body", "animate__animated", "animate__faster", {
    animate__fadeInDownBig: isOpened,
    "animate__delay-1s": isOpened,
    animate__fadeOutUpBig: !isOpened,
  });
