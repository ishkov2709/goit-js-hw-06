const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map(el => {
  const itemIngredientsEl = document.createElement('li');
  itemIngredientsEl.classList.add('item');
  itemIngredientsEl.textContent = el;
  return itemIngredientsEl;
});

listIngredientsEl.append(...elements);
