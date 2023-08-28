const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const galleryListEl = document.querySelector('#ingredients');

const itemАrray = [];

ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  itemАrray.push(itemEl);

});

galleryListEl.append(...itemАrray);