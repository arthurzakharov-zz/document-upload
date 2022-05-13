export const companyName = (name: string): string => {
  const currentYear = new Date().getFullYear();
  return `© ${currentYear} ${name}`;
};
