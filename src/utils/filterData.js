export const filterDataFromPastYear = (data) => {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return data.filter((item) => new Date(item.date) >= oneYearAgo);
};
