export const getExtendedSearchKeyword = (keyword: string): string => {
  const globalKeywords = ["ドライバー", "ドライバー求人", "みんなのドライバー"];

  if (globalKeywords.includes(keyword)) {
    return "ドライバー";
  }

  return keyword;
};
