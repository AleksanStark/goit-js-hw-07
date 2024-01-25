const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  }

  console.log({ email: email, password: password });
  event.target.reset();
});
