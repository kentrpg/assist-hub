/**
 * 將數值格式化為台幣格式
 * @param amount - 要格式化的數值
 * @returns 格式化後的台幣字串
 * @example
 *  整數金額: formatCurrency(3000)     // 回傳: NT$3,000
 *  小數金額: formatCurrency(2550.5)   // 回傳: NT$2,550.50
 */
export const formatCurrency = (amount: number): string => {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "TWD",
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  };

  return amount.toLocaleString("zh-TW", options);
};
