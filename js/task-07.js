const rangeFontSizeEl = document.querySelector('#font-size-control');
const changedTextEl = document.querySelector('#text');

rangeFontSizeEl.addEventListener('input', fontSizeValue => {
  changedTextEl.style.fontSize = `${fontSizeValue.currentTarget.value}px`;
});
