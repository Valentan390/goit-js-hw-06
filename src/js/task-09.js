function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector('button.change-color');
const body = document.querySelector('body');
const colorValue = document.querySelector('span.color');
console.log(changeButton);
console.log(body);
console.log(colorValue);


changeButton.addEventListener('click', e => {
  let color = getRandomHexColor();
  console.log(color);
  body.style.backgroundColor = color;
  colorValue.textContent = color;
})
