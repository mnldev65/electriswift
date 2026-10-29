import { state, toggleApplianceSelection, updateApplianceHours, setTariff } from './state.js';

const applianceCards = document.querySelectorAll('.appliance-card:not(#btn-open-modal)');
const btnNextStep1 = document.getElementById('btn-next-step');
const btnPrevStep1 = document.getElementById('btn-prev-step-1');
const btnNextStep3 = document.getElementById('btn-next-step-3');
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