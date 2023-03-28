const itemsCategoriesEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsCategoriesEl.length}`);

itemsCategoriesEl.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
