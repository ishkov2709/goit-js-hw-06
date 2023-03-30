const validInputEl = document.querySelector('#validation-input');
const validInputLength = parseInt(validInputEl.dataset.length);

validInputEl.addEventListener('blur', inputText => {
  validInputEl.removeAttribute('class');
  inputText.currentTarget.value.length >= validInputLength
    ? validInputEl.classList.add('valid')
    : validInputEl.classList.add('invalid');
});
