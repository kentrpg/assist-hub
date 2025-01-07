// TBD: 確認 custom hook 的命名規則以及匯出格式，以及 .toLocaleString 加上 currency 金額符號

const useFormatCurrency = (amount: number): string => {
  if (Number.isInteger(amount)) {
    return amount.toLocaleString("zh-TW", {
      style: "currency",
      currency: "TWD",
      minimumFractionDigits: 0,
    });
  } else {
    return amount.toLocaleString("zh-TW", {
      style: "currency",
      currency: "TWD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
};

export default useFormatCurrency;
