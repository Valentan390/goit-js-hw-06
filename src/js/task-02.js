const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const galleryListEl = document.querySelector('#ingredients');

const galleryItemEl = ingredients.map((ingredient => {
  const ItemEl = document.createElement('li');
  ItemEl.classList.add('item');
  ItemEl.textContent = ingredient;
  return ItemEl;
}))

console.log(galleryItemEl);
galleryListEl.append(...galleryItemEl);