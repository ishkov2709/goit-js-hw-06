const inputCountEl = document.querySelector('#controls>input[type="number"]');
const boxCreateBtnEl = document.querySelector('[data-create]');
const boxDetroyBtnEl = document.querySelector('[data-destroy]');
const mainBoxEl = document.querySelector('#boxes');
const counterBoxArr = [];

inputCountEl.addEventListener('input', createBoxes);

boxCreateBtnEl.addEventListener('click', () => {
  counterBoxArr.map((el, i) => {
    el.style.backgroundColor = getRandomHexColor();
    if (i === 0) {
      el.style.width = '30px';
      el.style.height = '30px';
    } else {
      el.style.width = `${30 + i * 10}px`;
      el.style.height = `${30 + i * 10}px`;
    }
  });
  mainBoxEl.append(...counterBoxArr);
});

boxDetroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  if (parseInt(amount.currentTarget.value) < counterBoxArr.length + 1) {
    return counterBoxArr.splice(-1);
  }
  counterBoxArr.push(document.createElement('div'));
}

function destroyBoxes() {
  mainBoxEl.querySelectorAll('div').forEach(el => el.remove());
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
