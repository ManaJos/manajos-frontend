"use client"; // IMPORTANT: so we can use Chart.js in a client environment

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define the type for a single data point, with date formatted as "26 Feb"
interface PeakDataPoint {
  date: string; // e.g. "26 Feb"
  peak: number;  // e.g. 1300000
}

interface PeakPlayersChartProps {
  dataPoints: PeakDataPoint[];
}

export default function PeakPlayersChart({ dataPoints }: PeakPlayersChartProps) {
  // Assume dataPoints are already sorted chronologically
  const labels = dataPoints.map((dp) => dp.date);
  const peaks = dataPoints.map((dp) => dp.peak);

  // Chart.js config
  const data = {
    labels,
    datasets: [
      {
        label: "Peak Players",
        data: peaks,
        fill: false,
        borderColor: "rgb(173, 60, 196)",
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Peak Players (Last 30 Days)",
      },
    },
    scales: {
      x: {
        // x-axis uses our date strings
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-3xl">
      <Line data={data} options={options} />
    </div>
  );
}
