function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControls = document.querySelector('#controls');
const inputEl = divControls.firstElementChild;
const buttonCreate = document.querySelector('[data-creaet]');
const buttonDestroy = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');
let curNum = 0;

const createBoxes = amount => {

  let elementsDiv = [];
  console.log("hi")
  for (let index = 0; index < amount; index++) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + 10 * index}px`;
    divEl.style.height = `${30 + 10 * index}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    elementsDiv.push(divEl);
      
  }

  divBoxes.append(...elementsDiv);
  return elementsDiv;
  
};

const getValue = event => {
  curNum = event.currentTarget.value; 
}

inputEl.addEventListener('input', getValue);

buttonCreate.addEventListener("click", () => createBoxes(curNum));


const destroyBoxes = () => {
	divBoxes.innerHTML = ''
}

buttonDestroy.addEventListener('click', destroyBoxes);
