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

export const graphChartData = {
  nodes: [
    { name: "Node 1", value: 10 },
    { name: "Node 2", value: 20 },
    { name: "Node 3", value: 30 },
    { name: "Node 4", value: 40 },
    { name: "Node 5", value: 50 },
    { name: "Node 6", value: 60 },
    { name: "Node 7", value: 70 },
    { name: "Node 8", value: 80 },
    { name: "Node 9", value: 90 },
    { name: "Node 10", value: 100 },
  ],
  links: [
    { source: "Node 1", target: "Node 2" },
    { source: "Node 2", target: "Node 3" },
    { source: "Node 3", target: "Node 4" },
    { source: "Node 4", target: "Node 5" },
    { source: "Node 5", target: "Node 6" },
    { source: "Node 6", target: "Node 7" },
    { source: "Node 7", target: "Node 8" },
    { source: "Node 8", target: "Node 9" },
    { source: "Node 9", target: "Node 10" },
  ],
};

export const pieChartData = [
  { value: 1048, name: "Search Engine" },
  { value: 735, name: "Direct" },
  { value: 580, name: "Email" },
  { value: 484, name: "Union Ads" },
  { value: 300, name: "Video Ads" },
];
