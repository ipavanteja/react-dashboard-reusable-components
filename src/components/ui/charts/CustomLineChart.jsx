import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import "tailwindcss/tailwind.css";

// Register the components for Chart.js
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

const CustomLineChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Stats",
        data: [12, 19, 3, 5, 2, 3, 7],
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          // Create a gradient
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          gradient.addColorStop(0, "rgba(54, 162, 235, 0.5)"); // Start color
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)"); // End color

          return gradient;
        },
        borderColor: "#4285F4",
        borderWidth: 2,
        pointBackgroundColor: "#4285F4",
        pointBorderColor: "#fff",
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#4285F4",
        pointHoverBorderColor: "#fff",
        pointRadius: 5,
        pointHitRadius: 10,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Weekly Stats: ${context.raw}`;
          },
        },
        displayColors: false,
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#4285F4",
        borderWidth: 1,
        padding: 8,
      },
    },
    elements: {
      line: {
        tension: 0.4, // Adjust curve
      },
    },
  };

  return (
    <div className="w-full h-64 p-4">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default CustomLineChart;
