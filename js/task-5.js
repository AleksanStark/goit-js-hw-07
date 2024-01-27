function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const body = document.body;
const span = document.querySelector(".color");

changeColorButton.addEventListener("click", () => {
  const bodyColor = (body.style.backgroundColor = getRandomHexColor());
  span.textContent = bodyColor;
});
