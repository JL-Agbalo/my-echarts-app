import React from "react";
import LineChart from "./components/LineChart";
import ChartContainer from "./components/common/ChartContainer";
import ChartTitle from "./components/common/ChartTitle";
const App = () => {
  return (
    <div className="app p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">ECharts with Tailwind CSS</h1>
      <ChartContainer>
        <ChartTitle title="Custom Chart" />
        <LineChart />
      </ChartContainer>
    </div>
  );
};

export default App;
