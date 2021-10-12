const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.querySelector("#ingredients")

for (const ingredient of ingredients) {
  const ingItem = document.createElement("li")
  ingItem.classList.add("item")
  ingItem.textContent = ingredient
  ingredientList.appendChild(ingItem)
}