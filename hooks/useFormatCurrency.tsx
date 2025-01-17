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
