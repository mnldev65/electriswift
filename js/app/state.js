export const state = {
  selectedAppliances: [],
  tariff: 0.85
};

export const toggleApplianceSelection = (applianceData) => {
  const index = state.selectedAppliances.findIndex(item => item.id === applianceData.id);

  if (index > -1) {
    state.selectedAppliances.splice(index, 1);
  } else {
    state.selectedAppliances.push({
      ...applianceData,
      quantity: 1,
      dailyHours: 4,  
      daysInMonth: 30
    });
  }
};

export const updateApplianceHours = (id, newHours) => {
  const appliance = state.selectedAppliances.find(item => item.id === id);
  if (appliance) {
    appliance.dailyHours = Number(newHours);
  }
};

export const setTariff = (newTariff) => {
  state.tariff = Number(newTariff);
};