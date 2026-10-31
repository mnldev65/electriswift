import { state, toggleApplianceSelection, updateApplianceProperty, updateApplianceCalendar, setTariff } from './state.js';

const appliancesGrid = document.querySelector('.appliances-grid');
const btnNextStep1 = document.getElementById('btn-next-step');
const btnPrevStep1 = document.getElementById('btn-prev-step-1');
const btnNextStep3 = document.getElementById('btn-next-step-3');
const btnPrevStep2 = document.getElementById('btn-prev-step-2');
const btnRestart = document.getElementById('btn-restart');
const steps = document.querySelectorAll('.simulator-step');

// --- 1. SELEÇÃO DE APARELHOS (ETAPA 1) ---
appliancesGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.appliance-card');
  if (!card || card.id === 'btn-open-modal') return;

  const id = card.getAttribute('data-id');
  const name = card.querySelector('.appliance-name').textContent;
  const power = Number(card.getAttribute('data-power'));

  toggleApplianceSelection({ id, name, power });
  card.classList.toggle('selected');
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

// --- MODAL DE APARELHO PERSONALIZADO ---
const btnOpenModal = document.getElementById('btn-open-modal');
const modalOverlay = document.getElementById('custom-modal');
const btnCancelCustom = document.getElementById('btn-cancel-custom');
const btnSaveCustom = document.getElementById('btn-save-custom');
const inputCustomName = document.getElementById('custom-name');
const inputCustomPower = document.getElementById('custom-power');

btnOpenModal.addEventListener('click', () => {
  modalOverlay.style.display = 'flex';
  inputCustomName.value = '';
  inputCustomPower.value = '';
  inputCustomName.focus();
});

btnCancelCustom.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

btnSaveCustom.addEventListener('click', () => {
  const name = inputCustomName.value.trim();
  const power = Number(inputCustomPower.value);

  if (!name || isNaN(power) || power <= 0) {
    alert('Por favor, informe um nome válido e uma potência maior que zero.');
    return;
  }

  const customId = `custom-${Date.now()}`;

  state.selectedAppliances.push({
    id: customId,
    name: name,
    power: power,
    quantity: 1,
    dailyHours: 4,
    monthDaysCount: 30,
    selectedDays: Array.from({ length: 30 }, (_, i) => i + 1)
  });

  const newCard = document.createElement('button');
  newCard.className = 'appliance-card selected';
  newCard.setAttribute('data-id', customId);
  newCard.setAttribute('data-power', power);

  newCard.innerHTML = `
    <span class="appliance-icon">⚡</span>
    <span class="appliance-name">${name}</span>
    <span class="appliance-power">${power}W</span>
  `;

  appliancesGrid.insertBefore(newCard, btnOpenModal);
  modalOverlay.style.display = 'none';
});

btnPrevStep1.addEventListener('click', () => {
  goToStep(1);
});

// --- 2. CONFIGURAÇÃO NA ETAPA 2 ---
const renderConfigStep = () => {
  const container = document.getElementById('config-appliances-list');
  container.innerHTML = '';

  state.selectedAppliances.forEach(app => {
    const applianceHtml = `
      <div style="background: var(--card-bg); padding: 16px; border-radius: 12px; border: 2px solid var(--border-color); margin-bottom: 12px;">
        <h4 style="margin: 0 0 10px 0; color: var(--primary-color); font-size: 1.1rem;">${app.name} (${app.power}W)</h4>
        
        <!-- Quantidade -->
        <div style="margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
          <label style="font-size: 0.85rem; color: #64748B;">Quantidade:</label>
          <input type="number" min="1" max="20" value="${app.quantity}" data-id="${app.id}" data-prop="quantity" class="app-input-config" style="width: 70px; padding: 6px; border-radius: 6px; border: 1px solid var(--border-color); text-align: center;">
        </div>

        <!-- Horas de Uso Diário (Minutos em frações, ex: 0.25 = 15min) -->
        <div style="margin-bottom: 12px;">
          <label style="font-size: 0.85rem; color: #64748B; display: block; margin-bottom: 4px;">
            Horas por dia: <span id="hours-val-${app.id}" style="font-weight: bold; color: var(--accent-color);">${app.dailyHours}h</span>
          </label>
          <input type="range" min="0.25" max="24" step="0.25" value="${app.dailyHours}" data-id="${app.id}" data-prop="dailyHours" class="app-input-config hour-range-slider" style="width: 100%; accent-color: var(--accent-color); cursor: pointer;">
          <small style="font-size: 0.75rem; color: #94A3B8;">0.25h = 15min | 0.5h = 30min | 1h = 60min</small>
        </div>

        <!-- Botão do Calendário Interativo de Dias -->
        <div style="display: flex; justify-content: space-between; align-items: center; background: #F8FAFC; padding: 10px; border-radius: 8px; border: 1px solid var(--border-color);">
          <div>
            <span style="font-size: 0.8rem; color: #64748B; display: block;">Dias utilizados:</span>
            <strong id="days-badge-${app.id}" style="color: var(--primary-color); font-size: 0.9rem;">${app.selectedDays.length} dias no mês</strong>
          </div>
          <button type="button" class="btn-open-calendar" data-id="${app.id}" style="background: var(--color-primary-light); color: white; border: none; padding: 10px 12px; border-radius: 6px; font-size: 0.95rem; font-weight: bold; cursor: pointer;">
            📅 Alterar Dias
          </button>
        </div>
      </div>
    `;
    container.innerHTML += applianceHtml;
  });

  // Listener para quantidade e horas
  container.querySelectorAll('.app-input-config').forEach(input => {
    input.addEventListener('input', (e) => {
      const id = e.target.getAttribute('data-id');
      const prop = e.target.getAttribute('data-prop');
      const val = e.target.value;

      if (prop === 'dailyHours') {
        document.getElementById(`hours-val-${id}`).textContent = `${val}h`;
      }
      updateApplianceProperty(id, prop, val);
    });
  });

  // Listener para abrir o modal do calendário de cada aparelho
  container.querySelectorAll('.btn-open-calendar').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      openCalendarModal(id);
    });
  });
};

// --- LÓGICA DO MODAL DO CALENDÁRIO ---
let currentApplianceIdForCalendar = null;
let tempSelectedDays = [];

const calendarModal = document.getElementById('calendar-modal');
const calendarGridDays = document.getElementById('calendar-grid-days');
const selectMonthType = document.getElementById('select-month-type');
const calendarSelectedCount = document.getElementById('calendar-selected-count');
const btnCancelCalendar = document.getElementById('btn-cancel-calendar');
const btnSaveCalendar = document.getElementById('btn-save-calendar');
const btnSelectAllDays = document.getElementById('btn-select-all-days');

const openCalendarModal = (applianceId) => {
  currentApplianceIdForCalendar = applianceId;
  const app = state.selectedAppliances.find(item => item.id === applianceId);
  if (!app) return;

  selectMonthType.value = app.monthDaysCount || 30;
  tempSelectedDays = [...app.selectedDays];

  renderCalendarDays(Number(selectMonthType.value));
  calendarModal.style.display = 'flex';
};

const renderCalendarDays = (totalDays) => {
  calendarGridDays.innerHTML = '';

  for (let day = 1; day <= totalDays; day++) {
    const isSelected = tempSelectedDays.includes(day);

    const dayBtn = document.createElement('button');
    dayBtn.type = 'button';
    dayBtn.className = `calendar-day-btn ${isSelected ? 'active' : ''}`;
    dayBtn.textContent = day;
    dayBtn.setAttribute('data-day', day);

    dayBtn.addEventListener('click', () => {
      const dayNum = Number(dayBtn.getAttribute('data-day'));
      const index = tempSelectedDays.indexOf(dayNum);

      if (index > -1) {
        tempSelectedDays.splice(index, 1);
        dayBtn.classList.remove('active');
      } else {
        tempSelectedDays.push(dayNum);
        dayBtn.classList.add('active');
      }
      updateCalendarCounter();
    });

    calendarGridDays.appendChild(dayBtn);
  }
  updateCalendarCounter();
};

const updateCalendarCounter = () => {
  calendarSelectedCount.textContent = `Total: ${tempSelectedDays.length} dias selecionados`;
};

selectMonthType.addEventListener('change', (e) => {
  const newTotal = Number(e.target.value);
  tempSelectedDays = tempSelectedDays.filter(d => d <= newTotal);
  renderCalendarDays(newTotal);
});

btnSelectAllDays.addEventListener('click', () => {
  const totalDays = Number(selectMonthType.value);
  tempSelectedDays = Array.from({ length: totalDays }, (_, i) => i + 1);
  renderCalendarDays(totalDays);
});

btnCancelCalendar.addEventListener('click', () => {
  calendarModal.style.display = 'none';
});

btnSaveCalendar.addEventListener('click', () => {
  updateApplianceCalendar(currentApplianceIdForCalendar, selectMonthType.value, tempSelectedDays);

  document.getElementById(`days-badge-${currentApplianceIdForCalendar}`).textContent = `${tempSelectedDays.length} dias no mês`;
  calendarModal.style.display = 'none';
});

// Capturar alteração da tarifa global
document.addEventListener('input', (e) => {
  if (e.target && e.target.id === 'tariff-input') {
    setTariff(e.target.value);
  }
});

// --- 3. MOTOR DE CÁLCULO ---
const calculateResults = () => {
  let totalKWh = 0;

  const evaluatedAppliances = state.selectedAppliances.map(app => {
    const daysUsedCount = app.selectedDays.length; 
    const kwh = (app.power * app.dailyHours * daysUsedCount * app.quantity) / 1000;
    totalKWh += kwh;

    return {
      ...app,
      monthlyKWh: kwh,
      effectiveDays: daysUsedCount
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
      <div style="background: var(--card-bg); padding: 12px; border-radius: 8px; border: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <div>
          <strong>${app.name}</strong> (${app.quantity}x)<br>
          <small style="color: #64748B;">${app.dailyHours}h/dia • ${app.effectiveDays} dias • ${app.monthlyKWh.toFixed(1)} kWh</small>
        </div>
        <div style="text-align: right; font-weight: bold; color: var(--primary-color);">
          R$ ${costApp.replace('.', ',')}
        </div>
      </div>
    `;
  });
};