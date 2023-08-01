const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const handler = () => {
  const fontSize = fontSizeControl.value;
  text.style.fontSize = fontSize + "px";
};
fontSizeControl.addEventListener("input", handler);

// albo
// fontSizeControl.addEventListener("input", () => {
//   const fontSize = fontSizeControl.value;
//   text.style.fontSize = fontSize + "px";
// });

// albo
// text.style.fontSize = fontSizeControl.value + "px";
// fontSizeControl.addEventListener("input", () => (text.style.fontSize = `${fontSizeControl.value}px`));
