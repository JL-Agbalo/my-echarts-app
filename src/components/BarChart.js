import React, { useEffect } from "react";
import * as echarts from "echarts";
import { postData, commentData } from "../data/chartData";
import { filterDataFromPastYear } from "../utils/filterData";

function BarChart() {
  useEffect(() => {
    const filteredPostData = filterDataFromPastYear(postData);
    const filteredCommentData = filterDataFromPastYear(commentData);

    const chartDom = document.getElementById("bar-chart");
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: "Bar Chart",
      },
      tooltip: {
        trigger: "axis",
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
          name: "Posts",
          type: "bar",
          data: filteredPostData.map((item) => item.value),
        },
        {
          name: "Comments",
          type: "bar",
          data: filteredCommentData.map((item) => item.value),
        },
      ],
    };
    myChart.setOption(option);
  }, []);
  return <div id="bar-chart" style={{ width: "600px", height: "400px" }}></div>;
}

export default BarChart;
