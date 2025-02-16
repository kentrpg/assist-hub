type DateFormat = {
  locale?: string;
  separator?: string;
};

/**
 * 將日期格式化為 YYYY-MM-DD 格式
 * @param date - 要格式化的日期
 * @param options - 格式化選項
 * @returns 格式化後的日期字串
 * @example
 * formatDate(new Date()) // "2024-02-10"
 * formatDate(new Date(), { separator: "/" }) // "2024/02/10"
 */
export const formatDate = (date: Date, options: DateFormat = {}) => {
  const {
    locale = "zh-TW",
    separator = "-"
  } = options;

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(date)
    .split("/")
    .join(separator);
};
