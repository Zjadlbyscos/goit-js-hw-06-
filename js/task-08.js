const loginFrm = document.querySelector(".login-form");

const handleSubmit = (e) => {
// zapobiega odświezaniu i domyslnym przeglądarki.
  e.preventDefault(); 
// destrukturyzacja dla przejrzystosci 
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled");
  }

  const frmUser = {
    email: email.value,
    password: password.value,
  };
// wyczyszczenie form po submit
  console.log(frmUser);
  loginFrm.reset();
};

loginFrm.addEventListener("submit", handleSubmit);
// zainicjowanie działania 