import Chart from 'chart.js/auto';

// Destroy the existing chart if it exists
const destroyChart = (chart) => {
  if (chart) {
    chart.destroy();
  }
};

// Create Pie Chart
export const createPieChart = (canvasId, data) => {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');

  // Destroy existing chart with the same canvas ID
  destroyChart(Chart.getChart(canvas));

  const chart = new Chart(context, {
    type: 'pie',
    data: {
      labels: data.map((item) => item.companyName),
      datasets: [
        {
          data: data.map((item) => item.shares),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9966FF', '#FF9E80'],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Upcoming IPOs',
      },
    },
  });

  return chart;
};

// Create Bar Chart
export const createBarChart = (canvasId, data) => {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');

  // Destroy existing chart with the same canvas ID
  destroyChart(Chart.getChart(canvas));

  const chart = new Chart(context, {
    type: 'bar',
    data: {
      labels: data.map((item) => item.companyName),
      datasets: [
        {
          label: 'Shares',
          data: data.map((item) => item.shares),
          backgroundColor: '#36A2EB',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Company Name',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Shares',
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  return chart;
};

// Create Line Chart
export const createLineChart = (canvasId, labels, data) => {
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext('2d');

  // Destroy existing chart with the same canvas ID
  destroyChart(Chart.getChart(canvas));

  const chart = new Chart(context, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Exchange Rates',
          data: data.map((item) => item.rate),
          fill: false,
          borderColor: '#FF6384',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Currency',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Exchange Rate',
          },
        },
      },
    },
  });

  return chart;
};
