import React from "react";

function MetricCard({ title, value, trend, chartType }) {
  return (
    <div className="metric-card">
      <h3>{title}</h3>
      <p className="metric-value">{value}</p>
      <p className="metric-trend">{trend}</p>
      <div className="chart-placeholder">{chartType} Chart</div>
    </div>
  );
}

export default MetricCard;
