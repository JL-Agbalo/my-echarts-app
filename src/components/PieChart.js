import React, { useEffect } from "react";
import * as echarts from "echarts";
import { pieChartData } from "../data/chartData";

function PieChart() {
  useEffect(() => {
    const chartDom = document.getElementById("pie-chart");
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: "Pie Chart",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: pieChartData,
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
    myChart.setOption(option);
  }, []);
  return <div id="pie-chart" style={{ width: "100%", height: "400px" }}></div>;
}

export default PieChart;
