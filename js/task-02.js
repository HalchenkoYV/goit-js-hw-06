const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const array = [];

ingredients.forEach(function (ingredient, index) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add('.item')
  array.push(item);
});

const list = document.querySelector("#ingredients");
list.after(...array);