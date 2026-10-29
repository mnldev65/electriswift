export const state = {
  selectedAppliances: []
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