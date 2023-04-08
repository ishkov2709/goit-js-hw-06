const inputCountEl = document.querySelector('#controls>input[type="number"]');
const boxCreateBtnEl = document.querySelector('[data-create]');
const boxDetroyBtnEl = document.querySelector('[data-destroy]');
const mainBoxEl = document.querySelector('#boxes');
const counterBoxArr = [];

inputCountEl.addEventListener('input', () => {});

boxCreateBtnEl.addEventListener('click', () => {
  createBoxes();
  mainBoxEl.append(...counterBoxArr);
  customizeBoxes();
});

boxDetroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  counterBoxArr.splice(0);
  for (let i = 0; i < parseInt(inputCountEl.value); i += 1) {
    counterBoxArr.push(document.createElement('div'));
  }
}

function customizeBoxes() {
  mainBoxEl.querySelectorAll('div').forEach((el, i) => {
    if (i === 0) {
      el.style.width = '30px';
      el.style.height = '30px';
    } else {
      el.style.width = `${30 + i * 10}px`;
      el.style.height = `${30 + i * 10}px`;
    }
    if (el.style.backgroundColor === '') {
      el.style.backgroundColor = getRandomHexColor();
    }
  });
}

function destroyBoxes() {
  mainBoxEl.querySelectorAll('div').forEach(el => el.remove());
  inputCountEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
