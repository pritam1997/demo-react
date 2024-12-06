import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MetricCard from "./components/MetricCard";
import Chart from "./components/Chart";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="metrics-section">
        <MetricCard
          title="Automations Executed"
          value="1M"
          trend="+25%"
          chartType="line"
        />
        <MetricCard
          title="Expenses"
          value="+189K"
          trend="+4%"
          chartType="line"
        />
        <MetricCard
          title="EBITDA"
          value="-871K"
          trend="+14%"
          chartType="line"
        />
        <MetricCard
          title="Revenue by Concept"
          value="507K"
          trend="+34%"
          chartType="pie"
        />
      </div>
      <div className="charts-section">
        <Chart title="Website Conversion Trend" chartType="line" />
        <Chart title="EBITDA Trends YTD" chartType="bar" />
      </div>
    </div>
  );
}

export default App;
