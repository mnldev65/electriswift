import { state, toggleApplianceSelection } from './state.js';

const applianceCards = document.querySelectorAll('.appliance-card:not(#btn-open-modal)');
const btnNextStep = document.getElementById('btn-next-step');

applianceCards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    const name = card.querySelector('.appliance-name').textContent;
    const power = Number(card.getAttribute('data-power'));

    toggleApplianceSelection({ id, name, power });

    card.classList.toggle('selected');

    console.log("Aparelhos selecionados atualmente:", state.selectedAppliances);
  });
});

btnNextStep.addEventListener('click', () => {
  if (state.selectedAppliances.length === 0) {
    alert('Por favor, selecione pelo menos um aparelho antes de continuar.');
    return;
  }

  alert(`Avançando com ${state.selectedAppliances.length} aparelho(s) selecionado(s)!`);
});