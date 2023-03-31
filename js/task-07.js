const rangeFontSizeEl = document.querySelector('#font-size-control');
const changedTextEl = document.querySelector('#text');

changedTextEl.style.fontSize = '56px';

rangeFontSizeEl.addEventListener('input', fontSizeValue => {
  changedTextEl.style.fontSize = `${fontSizeValue.currentTarget.value}px`;
});
