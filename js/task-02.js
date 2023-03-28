const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('#ingredients');

ingredients.map((el, i, arr) => {
  const itemIngredientsEl = document.createElement('li');
  itemIngredientsEl.classList.add('item');
  itemIngredientsEl.textContent = el;
  arr.splice(i, 1, itemIngredientsEl);
});

listIngredientsEl.append(...ingredients);
