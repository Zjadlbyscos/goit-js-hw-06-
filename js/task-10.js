// Ten kod tworzy prostą aplikację, która umożliwia tworzenie i usuwanie boxów za pomocą przycisków.

// Przycisk "createButton" po kliknięciu tworzy określoną ilość boxów na podstawie wartości wpisanej w polu tekstowym "input". Każdy box ma zwiększające się o 10 pikseli wymiary (width i height) i losowy kolor tła generowany za pomocą funkcji getRandomHexColor(). Boxy są dodawane do kontenera o id "boxes".

// Przycisk "destroyButton" po kliknięciu usuwa wszystkie boxy z kontenera poprzez wyczyszczenie jego zawartości za pomocą boxes.innerHTML=''.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");

  // Clear the existing content
  boxesContainer.innerHTML = "";

  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    boxSize += 5;
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const amount = parseInt(document.querySelector('input').value, 10);
  createBoxes(amount);
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const obj = {
//   boxes: document.querySelector("div#boxes"),
//   input: document.querySelector('input[type="number"]'),
//   createBtn: document.querySelector("button[data-create]"),
//   destroyBtn: document.querySelector("button[data-destroy]"),
//   boxSize: 30,
// };

// const generateDiv = () => {
//   const genDiv = `<div style="background-color: ${getRandomHexColor()}; 
//   width: ${obj.boxSize}px; height: ${obj.boxSize}px; "></div>`;
//   obj.boxSize += 10;
//   return genDiv;
// };

// const createBoxes = (amount) => {
//   for (let i = 0; i < amount; i++) {
//     const newDiv = generateDiv();
//     obj.boxes.insertAdjacentHTML("beforeend", newDiv);
//   }
// };

// const destroyBoxes = (amount) => {
//   // https://stackoverflow.com/posts/40606838/revisions
//   // while (boxes.firstChild) {
//   //   obj.boxes.firstChild.remove();
//   // }

//   // feature remove selected number of items
//   for (let i = 0; i < amount; i++) {
//     if (typeof boxes.lastChild != "undefined" && boxes.lastChild != null) {
//       obj.boxes.lastChild.remove();
//       obj.boxSize -= 10;
//     }
//   }
// };

// obj.createBtn.addEventListener("click", () => {
//   createBoxes(Number(obj.input.value));
// });

// obj.destroyBtn.addEventListener("click", () =>
//   destroyBoxes(Number(obj.input.value))
// );

