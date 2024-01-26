const textInput = document.querySelector("#name-input");

const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const textInputValue = event.currentTarget.value.trim();
  if (textInputValue === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = textInputValue;
    console.log(textInputValue);
  }
});
