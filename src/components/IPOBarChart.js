import React from 'react';
import { Bar } from 'react-chartjs-2';

const IPOBarChart = ({ ipoData }) => {
  const chartData = {
    labels: ipoData.map(ipo => ipo.companyName),
    datasets: [
      {
        label: 'Price Range (High)',
        backgroundColor: 'rgba(255,99,132,0.6)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.8)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: ipoData.map(ipo => ipo.priceRangeHigh),
      },
      {
        label: 'Price Range (Low)',
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.8)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: ipoData.map(ipo => ipo.priceRangeLow),
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  return (
    <div className="chart-container">
      <h2>Price Range Bar Chart</h2>
      <h2>---------------------</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default IPOBarChart;
