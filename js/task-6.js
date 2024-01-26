function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("input");

const createButton = document.querySelector("button");

const destroyButton = createButton.nextElementSibling;

const divControls = document.querySelector("#controls");

const divBoxes = document.querySelector("#boxes");

const arrayOfElements = [];

const createBoxes = (amount) => {
  for (let i = 0; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = `${getRandomHexColor()}`;
    if (i === 0) {
      box.style.width = "30px";
      box.style.height = "30px";
    } else {
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
    }
    arrayOfElements.push(box);
  }

  arrayOfElements.map((element) => {
    divBoxes.append(element);
  });
};

createButton.addEventListener("click", () => {
  const inputValue = parseInt(inputNumber.value);

  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
  }
});

destroyButton.addEventListener("click", () => (divBoxes.innerHTML = ""));
