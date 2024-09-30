import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const CustomBarChart = () => {
  // Data
  const data = {
    labels: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08"],
    datasets: [
      {
        label: "Earnings",
        data: [1.5, 2.7, 2.2, 3.6, 1.5, 1.0], // Positive values (earnings)
        backgroundColor: "#5d87ffd9", // Color for earnings (positive)
        borderRadius: 10,
        borderSkipped: false,
        borderWidth: 0,
        hoverBackgroundColor: "#4A70D6", // Darker color on hover
        barThickness: 11,
      },
      {
        label: "Expenses",
        data: [-1.8, -1.1, -2.5, -1.5, -0.6, -1.8], // Negative values (expenses)
        backgroundColor: "#49beff", // Color for expenses (negative)
        borderRadius: 10,
        borderSkipped: false,
        borderWidth: 0,
        hoverBackgroundColor: "#00B0E6", // Darker color on hover
        barThickness: 11,
      },
    ],
  };

  // Options for customization
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true, // Stack bars on the x-axis
        grid: {
          drawBorder: false,
          display: false, // Hide vertical grid lines
        },
        ticks: {
          color: "#8E8E8E", // Color for x-axis labels
        },
      },
      y: {
        stacked: true, // Stack bars on the y-axis
        min: -5.0,
        max: 5.0,
        ticks: {
          stepSize: 2.5, // Same as in the image
          color: "#8E8E8E", // Color for y-axis labels
        },
        grid: {
          drawBorder: false,
          color: "#EFEFEF", // Light color for horizontal grid lines
          borderDash: [5, 5], // Make the lines dashed. First value: length of dash, second: length of gap
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#4A4A4A",
        bodyColor: "#4A4A4A",
        borderColor: "#E5E5E5",
        borderWidth: 1,
        bodySpacing: 5,
        cornerRadius: 6,
        caretSize: 5,
        padding: 10,
        titleFont: {
          weight: "bold",
        },
        displayColors: true, // Show legend color box in tooltip
        callbacks: {
          title: (tooltipItem) => tooltipItem[0].label, // Custom tooltip title format
          label: (tooltipItem) => {
            const value = tooltipItem.raw;
            return value > 0
              ? `Earnings this month: +${value}`
              : `Expense this month: ${value}`; // Custom label for positive/negative values
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-[350px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default CustomBarChart;
