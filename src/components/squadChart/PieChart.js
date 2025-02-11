import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart
    const chart = echarts.init(chartRef.current);
    // Define the chart options
    const option = {
      title: {
        text: "Items Sold by Category",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "Sold",
          type: "pie",
          radius: "50%",
          data: data.map((item) => ({ value: item.sold, name: item.name })),
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    // Set the chart options
    chart.setOption(option);
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default PieChart;
