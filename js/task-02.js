const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const igredientsElem = document.querySelector('#ingredients');

const ingredientsArray = [];

ingredients.forEach(ingredient=>{
const ingredientLi = document.createElement('li');
ingredientLi.textContent = ingredient
igredientsElem.classList.add('item')
ingredientsArray.push(ingredientLi)

})
igredientsElem.append(...ingredientsArray);