import React from "react";

function Chart({ title, chartType }) {
  return (
    <div className="chart">
      <h3>{title}</h3>
      <div className="chart-placeholder">{chartType} Chart</div>
    </div>
  );
}

export default Chart;
