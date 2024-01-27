const itemsOfCategory = document.querySelectorAll(".item");

console.log(`Number of Categories ${itemsOfCategory.length}`);

itemsOfCategory.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll(".item li").length}`);
});
