import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = ({ labels, dataSet, width, height }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Data",
        data: dataSet,
        borderColor: "#3ABFF8",
        backgroundColor: "rgba(58, 191, 248, 0.2)",
        pointBackgroundColor: "#3ABFF8", // Point color
        fill: true, // Area fill
        tension: 0.4, // Smooth line
        pointRadius: 0, // Hide points by default
        hoverRadius: 5, // Show points on hover
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: "white", // Tooltip background
        bodyColor: "#000", // Text color inside tooltip
        titleColor: "#000", // Tooltip title color
        borderColor: "rgba(0,0,0,0.1)", // Light border for tooltip
        borderWidth: 1,
        intersect: false, // This will allow the tooltip to appear anywhere along the vertical line
        mode: "index", // Show the tooltip on the vertical axis line
        callbacks: {
          label: function (context) {
            return ` ${context.raw}`; // Tooltip text
          },
        },
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis grid
      },
      y: {
        // beginAtZero: true,
        display: false, // Hide y-axis grid
      },
    },
    elements: {
      line: {
        borderWidth: 2, // Line width
      },
    },
    interaction: {
      mode: "index",
      intersect: false, // Tooltip appears when hovering anywhere along the vertical line
    },
    hover: {
      mode: "index",
      intersect: false, // Tooltip and point on the vertical line, not just on the point itself
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  };

  return <Line data={data} options={options} width={width} height={height} />;
};

export default LineChart;
