import React, { useEffect } from "react";
import * as echarts from "echarts";
import { postData, commentData } from "../data/chartData";
import { filterDataFromPastYear } from "../utils/filterData";
function LineRaceChart() {
  useEffect(() => {
    const filteredPostData = filterDataFromPastYear(postData);
    const filteredCommentData = filterDataFromPastYear(commentData);
    const chartDom = document.getElementById("line-race-chart");
    let myChart = echarts.getInstanceByDom(chartDom);
    if (myChart) {
      myChart.dispose();
    }
    myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: "Line Race Chart",
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
          type: "line",
          data: filteredPostData.map((item) => item.value),
        },
        {
          name: "Comments",
          type: "line",
          data: filteredCommentData.map((item) => item.value),
        },
      ],
    };
    myChart.setOption(option);
  }, []);
  return (
    <div id="line-race-chart" style={{ width: "100%", height: "400px" }}></div>
  );
}

export default LineRaceChart;
