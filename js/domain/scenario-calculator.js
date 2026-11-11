export const calculateScenarioComparison = (appliances, tariff) => {
  let totalKWhA = 0;

  const evaluatedA = appliances.map(app => {
    const daysCount = app.selectedDays && app.selectedDays.length > 0 ? app.selectedDays.length : 30;
    const kwh = (app.power * app.dailyHours * daysCount * app.quantity) / 1000;
    totalKWhA += kwh;
    return { ...app, monthlyKWh: kwh };
  });
  const costA = totalKWhA * tariff;

  let totalKWhB = 0;
  const evaluatedB = appliances.map(app => {
    const daysCount = app.selectedDays && app.selectedDays.length > 0 ? app.selectedDays.length : 30;
    
    const optimizedHours = Math.max(0.25, app.dailyHours - 1);
    
    const kwh = (app.power * optimizedHours * daysCount * app.quantity) / 1000;
    totalKWhB += kwh;
    return { ...app, dailyHours: optimizedHours, monthlyKWh: kwh };
  });
  const costB = totalKWhB * tariff;

  const diffKWh = totalKWhA - totalKWhB;
  const diffCost = costA - costB;
  const percentageReduction = totalKWhA > 0 ? (diffKWh / totalKWhA) * 100 : 0;

  return {
    scenarioA: {
      name: "Uso Atual",
      monthlyKWh: Number(totalKWhA.toFixed(2)),
      estimatedCost: Number(costA.toFixed(2)),
      appliances: evaluatedA
    },
    scenarioB: {
      name: "Uso Otimizado",
      monthlyKWh: Number(totalKWhB.toFixed(2)),
      estimatedCost: Number(costB.toFixed(2)),
      appliances: evaluatedB
    },
    economy: {
      kwhSaved: Number(diffKWh.toFixed(2)),
      costSaved: Number(diffCost.toFixed(2)),
      percentage: Number(percentageReduction.toFixed(1))
    }
  };
};