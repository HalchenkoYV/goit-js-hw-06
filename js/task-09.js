function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const span = body.querySelector('span');
  
btnChangeColor.addEventListener('click', () => {
  const ranCol = getRandomHexColor();
  body.style.backgroundColor = ranCol;
  span.textContent = ranCol;


});