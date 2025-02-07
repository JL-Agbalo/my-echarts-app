#!/bin/bash

# List of file names
files=(
  "lineChartData.js"
  "barChartData.js"
  "pieChartData.js"
  "scatterChartData.js"
  "effectScatterChartData.js"
  "radarChartData.js"
  "treeChartData.js"
  "treemapChartData.js"
  "sunburstChartData.js"
  "boxplotChartData.js"
  "candlestickChartData.js"
  "heatmapChartData.js"
  "mapChartData.js"
  "parallelChartData.js"
  "linesChartData.js"
  "graphChartData.js"
  "sankeyChartData.js"
  "funnelChartData.js"
  "gaugeChartData.js"
  "pictorialBarChartData.js"
  "themeRiverChartData.js"
  "calendarChartData.js"
  "customChartData.js"
)

# Directory where files will be created
directory="./src/data"

# Make sure the directory exists
mkdir -p "$directory"

# Loop through the list of files and create them
for file in "${files[@]}"; do
  touch "$directory/$file"
  echo "Created: $directory/$file"
done

echo "All files created successfully."
