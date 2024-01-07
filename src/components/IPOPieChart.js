import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const IPOPieChart = ({ ipoData }) => {
  useEffect(() => {
    createPieChart();
  }, [ipoData]);

  const createPieChart = () => {
    const labels = ipoData.map(ipo => ipo.companyName);
    const data = ipoData.map(ipo => ipo.shares);

    const pieChartCanvas = document.getElementById('ipoPieChart');

    // Check if the canvas already has a Chart instance
    if (pieChartCanvas) {
      const ctx = pieChartCanvas.getContext('2d');
      // Destroy the existing Chart instance
      Chart.getChart(ctx)?.destroy();
    }

    new Chart(pieChartCanvas, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8e5ea2', '#3cba9f', '#e8c3b9'],
        }],
      },
    });
  };

  return (
    <div className="chart">
      <h2>Pie Chart - IPO Shares</h2>
      <canvas id="ipoPieChart" width="400" height="400"></canvas>
    </div>
  );
};

export default IPOPieChart;
