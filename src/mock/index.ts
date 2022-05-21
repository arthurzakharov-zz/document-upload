export const mockHttp = (success: boolean, timeout: number = 1500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(1);
      } else {
        reject(new Error("Oops!"));
      }
    }, timeout);
  });
};
