const loginFrm = document.querySelector(".login-form");

const handleSubmit = (e) => {
  e.preventDefault(); 
// destrukturyzacja dla przejrzystosci 
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled");
  }

  const formUser = {
    email: email.value,
    password: password.value,
  };
// wyczyszczenie form po submit
  console.log(formUser);
  loginFrm.reset();
};

loginFrm.addEventListener("submit", handleSubmit);
// zainicjowanie działania 

//-----------------------------------------------------------
// Ten kod obsługuje zdarzenie wysłania formularza logowania. Po wciśnięciu przycisku "submit" na formularzu, kod wykonuje następujące czynności:

// Zatrzymuje domyślne zachowanie formularza, czyli przeładowanie strony.
// Pobiera wartości wpisane w pola formularza (email i password).
// Sprawdza, czy oba pola są wypełnione, wyświetla alert z informacją o konieczności wypełnienia wszystkich pól i przerywa dalsze działanie kodu.
// Jeśli oba pola są wypełnione, tworzy obiekt formUser zawierający email i password.
// Wyświetla zawartość obiektu formUser w konsoli.
// Czyści pola formularza.