const changeColorBtnEl = document.querySelector('.change-color');
const colorValueEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', () => {
  colorValueEl.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorValueEl.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
