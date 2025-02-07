import React, { use, useEffect } from "react";
import * as echarts from "echarts";
import { postData } from "../data/chartData";
import { commentData } from "../data/chartData";
import { filterDataFromPastYear } from "../utils/filterData";

const LineChart = () => {
  useEffect(() => {
    const filteredPOstData = filterDataFromPastYear(postData);
    const filteredCommentData = filterDataFromPastYear(commentData);

    const chartDom = document.getElementById("line-chart");
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: "Line Chart",
      },
      tooltip: {},
      xAxis: {
        type: "category",
        data: filteredPOstData.map((item) => item.date),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Post",
          type: "line",
          data: filteredPOstData.map((item) => item.value),
        },
        {
          name: "Comment",
          type: "line",
          data: filteredCommentData.map((item) => item.value),
        },
      ],
    };
    myChart.setOption(option);
  }, []);

  return (
    <div id="line-chart" style={{ width: "600px", height: "400px" }}></div>
  );
};

export default LineChart;
