import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ labels, dataSets, borderThickness, width, height }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data",
        data: dataSets, // Example data
        backgroundColor: [
          "#f2f6fad9", // April light gray
          "#f2f6fad9", // May light gray
          "#5d87ffd9", // June blue
          "#f2f6fad9", // July light gray
          "#f2f6fad9", // August light gray
          "#f2f6fad9", // September light gray
        ],
        borderRadius: 5, // Rounded bar corners
        barThickness: borderThickness, // Thickness of bars
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
        ticks: {
          color: "#6B7280", // Tailwind gray-400
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
        },
        ticks: {
          display: false, // Hide the y-axis ticks
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Show tooltips
      },
    },
  };

  return (
    <div className={`w-${width} h-${height}`}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
