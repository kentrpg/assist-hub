const useDateFormatter = (dateString: string) => {
  if (!dateString) return "";
  return dateString.replace(/-/g, "/");
};

export default useDateFormatter;
