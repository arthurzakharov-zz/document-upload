import cn from "classnames";

export const category = (opened: boolean): string =>
  cn("category", {
    "category--opened": opened,
  });
