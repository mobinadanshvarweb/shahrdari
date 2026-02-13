// src/utils/toPersianNumber.ts
export const toPersianNumber = (num: string | number) => {
  const str = String(num);
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return str.replace(/\d/g, (d) => persianDigits[parseInt(d)]);
};
