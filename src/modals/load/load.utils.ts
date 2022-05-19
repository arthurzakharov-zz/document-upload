export const documentLabel = (name: string, count?: number): string => (count ? `${name} #${count}` : name);

export const buttonName = (name: string, count?: number): string =>
  count ? `${name} #${count} übermitteln` : `${name} übermitteln`;
