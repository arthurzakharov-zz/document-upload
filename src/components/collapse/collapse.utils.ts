import cn from "classnames";

export const stylesCollapse = (isOpen: boolean, contentHeight: number): object => {
  if (isOpen) {
    return {
      height: `${contentHeight}px`,
    };
  }
  return {
    height: "0px",
  };
};

export const collapseContent = (isOpen: boolean): string =>
  cn("collapse__content", {
    "collapse__content--visible": isOpen,
    "collapse__content--hidden": !isOpen,
  });
