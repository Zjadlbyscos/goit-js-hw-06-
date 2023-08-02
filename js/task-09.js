// Ten kod obsługuje zmianę koloru tła strony oraz wyświetlanie wylosowanego koloru.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector("button.change-color");
const colorSpan = document.querySelector("span.color");

const changeBgColorHandler = () => {
  const randomColor = getRandomHexColor();
  // Ustawienie stylu inline na elemencie body zmieniającego kolor tła
  document.body.style.backgroundColor = randomColor;
  // Ustawienie tekstu w elemencie span na wartość wygenerowanego koloru
  colorSpan.textContent = randomColor;
};
button.addEventListener("click", changeBgColorHandler);

//--------------------------------

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const button = document.querySelector('.change-color');
// const colorSpan = document.querySelector('.color');

// button.addEventListener('click', function() {
//   const randomColor = getRandomHexColor();
//   document.body.style.backgroundColor = randomColor;
//   colorSpan.textContent = randomColor;
// });

//----------------
