let counterValue = 0;
// Znajduje elementy przycisków z wartością
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueBtn = document.querySelector("#value");

// Osobno zdefiniowane funkcje. poprawi czytelność kodu i będzie re-używalna dla różnych elementów.
const clickAdd = () => {
  counterValue += 1;
  // Aktualizuje widok HTML nową wartością licznika
  valueBtn.textContent = counterValue;
};
const clickRed = () => {
  counterValue -= 1;
  valueBtn.textContent = counterValue;
};
decrementBtn.addEventListener("click", clickRed);
incrementBtn.addEventListener("click", clickAdd);
// Jeden element może mieć dowolną liczbę funkcji które obsługują zdarzenia, nawet zdarzenia tego samego typu. Funkcje wywołania zwrotnego będą wywoływane w kolejności ich wystąpienia w kodzie
