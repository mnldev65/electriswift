let comparisonChartInstance = null;

export const renderComparisonChart = (scenarioData) => {
  const canvasElement = document.getElementById('comparison-chart');
  if (!canvasElement) return;

  const ctx = canvasElement.getContext('2d');

  if (comparisonChartInstance) {
    comparisonChartInstance.destroy();
  }

  const labels = scenarioData.scenarioA.appliances.map(app => app.name);
  const dataA = scenarioData.scenarioA.appliances.map(app => app.monthlyKWh);
  const dataB = scenarioData.scenarioB.appliances.map(app => app.monthlyKWh);

  comparisonChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Cenário A (Atual)',
          data: dataA,
          backgroundColor: '#0B3B24', 
          borderRadius: 6
        },
        {
          label: 'Cenário B (Otimizado)',
          data: dataB,
          backgroundColor: '#10B981', 
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Consumo (kWh)'
          }
        }
      }
    }
  });
};