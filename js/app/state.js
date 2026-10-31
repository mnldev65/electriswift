export const state = {
  selectedAppliances: [],
  tariff: 0.85
};

export const toggleApplianceSelection = (applianceData) => {
  const index = state.selectedAppliances.findIndex(item => item.id === applianceData.id);

  if (index > -1) {
    state.selectedAppliances.splice(index, 1);
  } else {
    const defaultDays = Array.from({ length: 30 }, (_, i) => i + 1);

    state.selectedAppliances.push({
      ...applianceData,
      quantity: 1,
      dailyHours: 4,  
      monthDaysCount: 30,     
      selectedDays: []
    });
  }
};

export const updateApplianceProperty = (id, property, value) => {
  const appliance = state.selectedAppliances.find(item => item.id === id);
  if (appliance) {
    appliance[property] = Array.isArray(value) ? value : Number(value);
  }
};

export const updateApplianceCalendar = (id, monthDaysCount, selectedDays) => {
  const appliance = state.selectedAppliances.find(item => item.id === id);
  if (appliance) {
    appliance.monthDaysCount = Number(monthDaysCount);
    appliance.selectedDays = [...selectedDays];
  }
};

export const setTariff = (newTariff) => {
  state.tariff = Number(newTariff);
};