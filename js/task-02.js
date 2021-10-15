const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector("#ingredients")

const ingredientItems = ingredients.map(item => {
  const ingItem = document.createElement("li")
  ingItem.classList.add("item")
  ingItem.textContent = item
  return ingItem
})

ingredientList.append(...ingredientItems)