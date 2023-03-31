const inputCountEl = document.querySelector('#controls>input[type="number"]');
const boxCreateBtnEl = document.querySelector('[data-create]');
const boxDetroyBtnEl = document.querySelector('[data-destroy]');
const mainBoxEl = document.querySelector('#boxes');
const counterBoxArr = [];

inputCountEl.addEventListener('input', createBoxes);

boxCreateBtnEl.addEventListener('click', () => {
  destroyBoxes();
  mainBoxEl.append(...counterBoxArr);
  customizeBoxes();
});

boxDetroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  if (parseInt(amount.currentTarget.value) < counterBoxArr.length + 1) {
    return (counterBoxArr.length = amount.currentTarget.value);
  }
  return counterBoxArr.push(document.createElement('div'));
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
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
