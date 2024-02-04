// create div for good style
const firstInput = document.querySelector('input');
const h1 = document.querySelector('h1');

h1.insertAdjacentHTML(
  'afterend',
  `<div class='task3-form'>${firstInput.outerHTML}${h1.outerHTML}</div>`
);
firstInput.remove();
h1.remove();

// do task
const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function greeting(event) {
  if (event.currentTarget.value.trim() !== '') {
    output.textContent = event.currentTarget.value.trim();
  } else {
    output.textContent = 'Anonymous';
  }
}
textInput.addEventListener('input', greeting);
