import React from "react";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import ScatterChart from "./components/ScatterChart";
import EffectScatterChart from "./components/EffectScatterChart";
import RadarChart from "./components/RadarChart";
import TreeChart from "./components/TreeChart";
import TreemapChart from "./components/TreemapChart";
import SunburstChart from "./components/SunburstChart";
import BoxplotChart from "./components/BoxplotChart";
import CandlestickChart from "./components/CandlestickChart";
import HeatmapChart from "./components/HeatmapChart";
import MapChart from "./components/MapChart";
import ParallelChart from "./components/ParallelChart";
import LinesChart from "./components/LinesChart";
import GraphChart from "./components/GraphChart";
import SankeyChart from "./components/SankeyChart";
import FunnelChart from "./components/FunnelChart";
import GaugeChart from "./components/GaugeChart";
import PictorialBarChart from "./components/PictorialBarChart";
import ThemeRiverChart from "./components/ThemeRiverChart";
import CalendarChart from "./components/CalendarChart";
import CustomChart from "./components/CustomChart";

const App = () => {
  return (
    <div className="app">
      <h1 className="text-3xl font-bold underline">
        ECharts with Tailwind CSS
      </h1>
      <LineChart />
      <BarChart />
      <PieChart />
      <ScatterChart />
      <EffectScatterChart />
      <RadarChart />
      <TreeChart />
      <TreemapChart />
      <SunburstChart />
      <BoxplotChart />
      <CandlestickChart />
      <HeatmapChart />
      <MapChart />
      <ParallelChart />
      <LinesChart />
      <GraphChart />
      <SankeyChart />
      <FunnelChart />
      <GaugeChart />
      <PictorialBarChart />
      <ThemeRiverChart />
      <CalendarChart />
      <CustomChart />
    </div>
  );
};

export default App;
