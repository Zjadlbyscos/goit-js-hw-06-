const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// znajduje listę
const igredientsElem = document.querySelector("#ingredients");

// tworzę stałą w której będę "zbierać" dane do tego,aby potem zrobić "append" do html
const ingredientsArray = [];

ingredients.forEach((ingredient) => {
  // iteruję po liście, dodając "li" kazdemu ingredients
  const ingredientLi = document.createElement("li");
  // nadaję textContent, bez tego bęfdzie tylko <li>
  ingredientLi.textContent = ingredient;
  // dodaję klasy
  igredientsElem.classList.add("item");
  // robię "push" do listy którą potem zrobię "append"
  ingredientsArray.push(ingredientLi);
});
igredientsElem.append(...ingredientsArray);
