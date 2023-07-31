const input = document.querySelector("#validation-input");

function validateByLength() {
  const inputLength = this.value.length;
  const requiredLength = this.getAttribute("data-length");

  if (inputLength == requiredLength) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.add("invalid");
    this.classList.remove("valid");
  }
}
input.addEventListener("blur", validateByLength);
