const categories = document.querySelectorAll('.item');

function categoriesNumber(element) {
  console.log(`Number of categories: ${element.length}`);
  element.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });
}

categoriesNumber(categories);
