import React from "react";
import LineChart from "./components/LineChart";
import ChartContainer from "./components/common/ChartContainer";
import BarChart from "./components/BarChart";
import GraphChart from "./components/GraphChart";
import PieChart from "./components/PieChart";
import ScatterChart from "./components/ScatterChart";
import LineRaceChart from "./components/LineRaceChart";
import StackedBarChart from "./components/StackedBarChart";
import SquadChart from "./components/squadChart/index";

const App = () => {
  return (
    <div className="app">{/* <SquadChart /> */}</div>

    // <div className="app p-6 bg-gray-100 min-h-screen">
    //   <h1 className="text-3xl font-bold mb-6">ECharts with Tailwind CSS</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //   <ChartContainer>
    //       <LineChart />
    //     </ChartContainer>
    //     <ChartContainer>
    //       <BarChart />
    //     </ChartContainer>
    //     <ChartContainer>
    //       <GraphChart />
    //     </ChartContainer>
    //     <ChartContainer>
    //       <PieChart />
    //     </ChartContainer>
    //     <ChartContainer>
    //       <ScatterChart />
    //     </ChartContainer>
    //     <ChartContainer>
    //       <LineRaceChart />
    //     </ChartContainer>
    //     <ChartContainer>
    //       <StackedBarChart />
    //     </ChartContainer>

    //   </div>
    // </div>
  );
};

export default App;
