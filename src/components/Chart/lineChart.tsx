// components/MyChart.tsx
'use client'
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
  } from "chart.js";
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );

interface LineChartProps {
    datas: number[]; // Define the prop data as an array of numbers
    month: string[]; // Define the prop data as an array of numbers
}
const LineChart: React.FC<LineChartProps> = ({datas,month}) => {
  const data = {
    labels: month,
    datasets: [
      {
        label: 'Example Dataset',
        data: datas,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  const options = {
    elements: {
      line: {
        borderWidth: 2, // Adjust the line width as needed
      },
    },
    scales: {
      x: {
        display: false, // Hide the x-axis
      },
      y: {
        display: false, // Hide the y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
