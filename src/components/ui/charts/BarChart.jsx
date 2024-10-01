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

const BarChart = ({
  labels,
  dataSets,
  backgroundColor,
  borderRadius,
  borderThickness,
  categoryPercentage,
  barPercentage,
  width,
  height,
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data",
        data: dataSets, // Example data
        backgroundColor: backgroundColor,
        borderRadius: borderRadius, // Rounded bar corners
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
        categoryPercentage: categoryPercentage, // Adjust the category (group) width
        barPercentage: barPercentage, // Adjust the width of the bars
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
