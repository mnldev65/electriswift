import { state, toggleApplianceSelection, updateApplianceHours, setTariff } from './state.js';

const applianceCards = document.querySelectorAll('.appliance-card:not(#btn-open-modal)');
const btnNextStep1 = document.getElementById('btn-next-step');
const btnPrevStep1 = document.getElementById('btn-prev-step-1');
const btnNextStep3 = document.getElementById('btn-next-step-3');
const btnPrevStep2 = document.getElementById('btn-prev-step-2');
const btnRestart = document.getElementById('btn-restart');
const steps = document.querySelectorAll('.simulator-step');

applianceCards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    const name = card.querySelector('.appliance-name').textContent;
    const power = Number(card.getAttribute('data-power'));

    toggleApplianceSelection({ id, name, power });
    card.classList.toggle('selected');
  });
});

const goToStep = (stepNumber) => {
  steps.forEach(step => {
    step.classList.remove('active');
    if (step.getAttribute('data-step') == stepNumber) {
      step.classList.add('active'); 
    }
  });
};

btnNextStep1.addEventListener('click', () => {
  if (state.selectedAppliances.length === 0) {
    alert('Por favor, selecione pelo menos um aparelho.');
    return;
  }

  goToStep(2);

  renderConfigStep();
});

btnPrevStep1.addEventListener('click', () => {
  goToStep(1);
});

const renderConfigStep = () => {
  const container = document.getElementById('config-appliances-list');
  container.innerHTML = ''; 

  state.selectedAppliances.forEach(app => {
    const applianceHtml = `
      <div style="background: var(--card-bg); padding: 14px; border-radius: 12px; border: 2px solid var(--border-color);">
        <h4 style="margin: 0 0 8px 0; color: var(--primary-color);">${app.name} (${app.power}W)</h4>
        <label style="font-size: 0.9rem; color: #64748B; display: block; margin-bottom: 4px;">
          Horas de uso diário: <span id="hours-val-${app.id}" style="font-weight: bold; color: var(--accent-color);">${app.dailyHours}h</span>
        </label>
        <input 
          type="range" 
          min="1" 
          max="24" 
          value="${app.dailyHours}" 
          data-id="${app.id}"
          class="hour-range-slider"
          style="width: 100%; accent-color: var(--accent-color); cursor: pointer;"
        >
      </div>
    `;
    container.innerHTML += applianceHtml;
  });

  
  const sliders = container.querySelectorAll('.hour-range-slider');
  sliders.forEach(slider => {
    slider.addEventListener('input', (e) => {
      const id = e.target.getAttribute('data-id');
      const val = e.target.value;
      
      document.getElementById(`hours-val-${id}`).textContent = `${val}h`;
      
      updateApplianceHours(id, val);
    });
  });
};

// Capturar alteração da tarifa global
document.addEventListener('input', (e) => {
  if (e.target && e.target.id === 'tariff-input') {
    setTariff(e.target.value);
  }
});

const calculateResults = () => {
  let totalKWh = 0;

  const evaluatedAppliances = state.selectedAppliances.map(app => {
    // Fórmula: (Watts * HorasDiárias * 30 dias * Quantidade) / 1000
    const daysInMonth = 30;
    const quantity = 1; 
    
    const kwh = (app.power * app.dailyHours * daysInMonth * quantity) / 1000;
    totalKWh += kwh;

    return {
      ...app,
      monthlyKWh: kwh
    };
  });

  const totalCost = totalKWh * state.tariff;

  return {
    evaluatedAppliances,
    totalKWh: totalKWh.toFixed(2),
    totalCost: totalCost.toFixed(2)
  };
};

btnNextStep3.addEventListener('click', () => {
  goToStep(3);
  renderResultsStep();
});

btnPrevStep2.addEventListener('click', () => {
  goToStep(2);
});

btnRestart.addEventListener('click', () => {
  state.selectedAppliances = [];
  location.reload();
});

const renderResultsStep = () => {
  const results = calculateResults();

  document.getElementById('res-total-kwh').textContent = `${results.totalKWh} kWh`;
  document.getElementById('res-total-cost').textContent = `R$ ${results.totalCost.replace('.', ',')}`;

  const breakdownContainer = document.getElementById('results-appliances-breakdown');
  breakdownContainer.innerHTML = '<h3 style="font-size: 1rem; color: var(--primary-color); margin-bottom: 8px;">Detalhamento por Aparelho:</h3>';

  results.evaluatedAppliances.forEach(app => {
    const costApp = (app.monthlyKWh * state.tariff).toFixed(2);
    
    breakdownContainer.innerHTML += `
      <div style="background: var(--card-bg); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong>${app.name}</strong><br>
          <small style="color: #64748B;">${app.dailyHours}h/dia • ${app.monthlyKWh.toFixed(1)} kWh</small>
        </div>
        <div style="text-align: right; font-weight: bold; color: var(--primary-color);">
          R$ ${costApp.replace('.', ',')}
        </div>
      </div>
    `;
  });
};