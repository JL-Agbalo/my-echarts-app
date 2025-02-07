import React from "react";
import LineChart from "./components/LineChart";
import ChartContainer from "./components/common/ChartContainer";
import BarChart from "./components/BarChart";
const App = () => {
  return (
    <div className="app p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">ECharts with Tailwind CSS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartContainer>
          <LineChart />
        </ChartContainer>
        <ChartContainer>
          <BarChart />
        </ChartContainer>
      </div>
    </div>
  );
};

export default App;
