const itemsOfCategory = document.querySelectorAll(".item");

console.log(`Number of Caterories ${itemsOfCategory.length}`);

itemsOfCategory.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.getElementsByTagName("li").length}`);
});
