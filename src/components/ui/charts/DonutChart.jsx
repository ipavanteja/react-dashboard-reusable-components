import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    datasets: [
      {
        data: [37, 38, 25], // Adjust these values as needed
        backgroundColor: ["#5d87ff", "#EBF2FF", "#f9f9fd"], // Light blue and blue
        borderWidth: 0, // No border around sections
      },
    ],
  };

  const options = {
    cutout: "75%", // Makes it a donut
    responsive: true,
    plugins: {
      legend: {
        display: false, // No legend display
      },
      tooltip: {
        enabled: false, // No tooltip
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
