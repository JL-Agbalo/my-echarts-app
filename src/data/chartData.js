export const postData = [];
export const commentData = [];

const generateRandomValue = () => Math.floor(Math.random() * 100);

// Generate data for the year 2024
for (let i = 0; i < 12; i++) {
  const date = `2024-${String(i + 1).padStart(2, "0")}-01`;
  postData.push({
    date,
    value: generateRandomValue(),
  });
  commentData.push({
    date,
    value: generateRandomValue(),
  });
}

// Generate data for the years 2025 and 2026
for (let i = 0; i < 24; i++) {
  const month = (i % 12) + 1;
  const year = 2025 + Math.floor(i / 12);
  const date = `${year}-${String(month).padStart(2, "0")}-01`;
  postData.push({
    date,
    value: generateRandomValue(),
  });
  commentData.push({
    date,
    value: generateRandomValue(),
  });
}
