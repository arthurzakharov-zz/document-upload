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
