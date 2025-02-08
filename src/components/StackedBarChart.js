import React, { useEffect } from "react";
import * as echarts from "echarts";
import { filterDataFromPastYear } from "../utils/filterData";
import { commentData, postData } from "../data/chartData";

function StackedBarChart() {
  useEffect(() => {
    const filteredPostData = filterDataFromPastYear(postData);
    const filteredCommentData = filterDataFromPastYear(commentData);
    const chartDom = document.getElementById("stacked-bar-chart");
    let myChart = echarts.init(chartDom);
    if (myChart) {
      myChart.dispose();
    }
    myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: "Stacked Bar Chart",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["Post", "Comment"],
      },
      xAxis: {
        type: "category",
        data: filteredPostData.map((item) => item.date),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Post",
          type: "bar",
          stack: "total",
          data: filteredPostData.map((item) => item.value),
        },
        {
          name: "Comment",
          type: "bar",
          stack: "total",
          data: filteredCommentData.map((item) => item.value),
        },
      ],
    };
    myChart.setOption(option);
  }, []);

  return (
    <div
      id="stacked-bar-chart"
      style={{ width: "100%", height: "400px" }}
    ></div>
  );
}

export default StackedBarChart;
