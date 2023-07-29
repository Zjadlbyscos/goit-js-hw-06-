const deafultValue = "Anonymous";

// Znajdujemy elementy input i span
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value;

  // Aktualizuje zawartość spana na podstawie wartości pola input.
  if (inputValue === "") {
    nameOutput.textContent = deafultValue;
  } else {
    nameOutput.textContent = inputValue;
  }
});
