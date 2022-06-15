import { DataSizeType } from "../types";

export const isObjectEmpty = (obj: Object): boolean => {
  // eslint-disable-next-line no-restricted-syntax
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
};

export const get = (obj: any, ...path: string[]): any => {
  return obj && path.reduce((result, p) => (result == null ? undefined : result[p]), obj);
};

export const convertDataSize = (number: number, from: DataSizeType = "B", to: DataSizeType = "MB"): number => {
  if (from === to) return number;
  const sizes: DataSizeType[] = ["B", "kB", "MB"];
  const fromIndex = sizes.indexOf(from);
  const toIndex = sizes.indexOf(to);
  const diff = fromIndex - toIndex;
  return diff < 0
    ? Math.round((number / 1024 ** Math.abs(diff)) * 100) / 100
    : Math.round(number * 1024 ** Math.abs(diff) * 100) / 100;
};

export const getUrlParam = (paramKey: string): string => {
  const urlSearchParams = new URLSearchParams(document.location.search);
  const paramKeyValues = urlSearchParams.getAll(paramKey);
  return paramKeyValues[paramKeyValues.length - 1] || "";
};
