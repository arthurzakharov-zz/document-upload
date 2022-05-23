import { DataSize } from "../types";

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

export const convertDataSize = (number: number, from: DataSize = "B", to: DataSize = "MB"): number => {
  if (from === to) return number;
  const sizes: DataSize[] = ["B", "kB", "MB"];
  const fromIndex = sizes.indexOf(from);
  const toIndex = sizes.indexOf(to);
  const diff = fromIndex - toIndex;
  return diff < 0
    ? Math.round((number / 1024 ** Math.abs(diff)) * 100) / 100
    : Math.round(number * 1024 ** Math.abs(diff) * 100) / 100;
};
