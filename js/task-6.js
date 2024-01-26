function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElement = document.querySelector("input");

const createButtonElement = document.querySelector("button");

const destroyButtonElement = createButtonElement.nextElementSibling;

const divBoxes = document.querySelector("#boxes");

const arrayOfElements = [];

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = `${getRandomHexColor()}`;
    if (i === 0) {
      box.style.width = "30px";
      box.style.height = "30px";
    } else {
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      arrayOfElements.push(box);
    }
  }
  divBoxes.append(...arrayOfElements);
  arrayOfElements.length = 0;
};

createButtonElement.addEventListener("click", () => {
  const inputElementValue = parseInt(inputElement.value);

  if (inputElementValue >= 1 && inputElementValue <= 100) {
    createBoxes(inputElementValue);
    inputElementValue = "";
  }
});

const destroyBoxes = () => (divBoxes.innerHTML = "");

destroyButtonElement.addEventListener("click", destroyBoxes);
