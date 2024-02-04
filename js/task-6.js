function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const markup = [];
  let boxSize = 30;
  for (let index = 1; index <= amount; index++) {
    boxSize += 10 * index - 10;
    const rndColor = getRandomHexColor();
    markup.push(
      `<div class='colorbox' style='background:${rndColor}; width:${boxSize}px; height:${boxSize}px'></div>`
    );
  }
  divBoxes.insertAdjacentHTML('beforeend', markup.join(''));
  controlPoint.firstElementChild.value = '';
}

function destroyBoxes() {
  const colorBoxes = document.querySelectorAll('.colorbox');
  controlPoint.firstElementChild.value = '';
  for (const element of colorBoxes) {
    element.remove();
  }
}

const divBoxes = document.querySelector('#boxes');
const controlPoint = document.querySelector('#controls');

controlPoint.addEventListener('click', event => {
  const quantityBoxes = controlPoint.firstElementChild.value;
  if (event.target.dataset.create === '') {
    if (document.querySelectorAll('.colorbox').length > 0) {
      destroyBoxes();
    }
    if (1 <= quantityBoxes && quantityBoxes <= 100) {
      createBoxes(quantityBoxes);
    } else {
      alert('Your number set: min="1" & max="100"');
    }
  }
  if (event.target.dataset.destroy === '') {
    destroyBoxes();
  }
});
