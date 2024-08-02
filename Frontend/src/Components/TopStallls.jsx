import React, { useState, useEffect } from "react";
import stallsData from "./stalls.json";
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

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function TopStalls({ width = '100%', height = '400px' }) {
  const [stalls, setStalls] = useState([]);

  useEffect(() => {
    setStalls(stallsData);
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
    <div className="d-flex justify-content-center">
      <div style={{ width, height }}>
        <Bar
          data={chartDataOfStalls}
          options={stallsOptions}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
