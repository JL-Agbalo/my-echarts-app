import React, { useEffect } from "react";
import * as echarts from "echarts";
import { graphChartData } from "../data/chartData";

function GraphChart() {
  useEffect(() => {
    const chartDom = document.getElementById("graph-chart");
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: "Graph Chart",
      },
      tooltop: {},
      series: [
        {
          type: "graph",
          layout: "force",
          data: graphChartData.nodes,
          links: graphChartData.links,
          roam: true,
          label: {
            show: true,
          },
          force: {
            repulsion: 100,
          },
        },
      ],
    };
    myChart.setOption(option);
  }, []);
  return (
    <div id="graph-chart" style={{ width: "100%", height: "400px" }}></div>
  );
}

export default GraphChart;
