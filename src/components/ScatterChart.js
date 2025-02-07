import React, { useEffect } from "react";
import * as echarts from "echarts";
import { postData, commentData } from "../data/chartData";
import { filterDataFromPastYear } from "../utils/filterData";
import { data } from "autoprefixer";
function ScatterChart() {
  useEffect(() => {
    const filteredPostData = filterDataFromPastYear(postData);
    const filteredCommentData = filterDataFromPastYear(commentData);
    const chartDom = document.getElementById("scatter-chart");
    let myChart = echarts.getInstanceByDom(chartDom);
    if (myChart) {
      myChart.dispose();
    }
    myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: "Scatter Chart",
      },
      tooltip: {
        trigger: "item",
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
          type: "scatter",
          data: filteredPostData.map((item) => [item.date, item.value]),
        },
        {
          name: "Comment",
          type: "scatter",
          data: filteredCommentData.map((item) => [item.date, item.value]),
        },
      ],
    };
    myChart.setOption(option);
  }, []);
  return (
    <div id="scatter-chart" style={{ width: "100%", height: "400px" }}></div>
  );
}

export default ScatterChart;
