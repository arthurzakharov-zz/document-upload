import cn from "classnames";

export const category = (opened: boolean): string =>
  cn("category", {
    "category--opened": opened,
  });

export const categoryArrow = (opened: boolean): string =>
  cn("category__arrow", {
    "category__arrow--opened": opened,
  });
