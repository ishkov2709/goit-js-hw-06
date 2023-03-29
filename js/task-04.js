const valueEl = document.querySelector('#value');
const operateBtnsEl = document.querySelectorAll('button[data-action]');
let counterValue = 0;

operateBtnsEl.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.dataset.action.includes('increment')
      ? (counterValue += 1)
      : (counterValue -= 1);
    valueEl.textContent = counterValue;
  });
});
