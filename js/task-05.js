const inputNameEL = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');
const baseOutputName = outputNameEl.textContent;

inputNameEL.addEventListener('input', usrname => {
  !usrname.currentTarget.value
    ? (outputNameEl.textContent = baseOutputName)
    : (outputNameEl.textContent = usrname.currentTarget.value);
});
