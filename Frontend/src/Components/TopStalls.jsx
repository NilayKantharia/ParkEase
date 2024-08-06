// src/TopStalls.jsx
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function TopStalls() {
  const [stalls, setStalls] = useState([]);

  useEffect(() => {
    // Fetching top 5 stalls data
    fetch("http://localhost:8000/analytics/top-5-stalls")
      .then((response) => response.json())
      .then((data) => setStalls(data))
      .catch((error) => console.error("Error fetching stalls data:", error));
  }, []);

  const sortedStalls = stalls.sort((a, b) => b.revenue - a.revenue).slice(0, 5);
  const labels = sortedStalls.map((stall) => stall.stall_name);
  const data = sortedStalls.map((stall) => stall.sales);
  const backgroundColors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
  ];

  const chartDataOfStalls = {
    labels: labels,
    datasets: [
      {
        label: "Sales",
        data: data,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const stallsOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Stalls",
        },
      },
      y: {
        title: {
          display: true,
          text: "Total Sales",
        },
      },
    },
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">Top 5 Stalls</h5>
        <div style={{ position: "relative", height: "300px", width: "100%" }}>
          <Bar data={chartDataOfStalls} options={stallsOptions} />
        </div>
      </div>
    </div>
  );
}
