const div = document.querySelector('#counter')
const decrementButton = div.firstElementChild;
const incrementButton = div.lastElementChild;
const span = document.querySelector('#value')

let counterValue = 0;

const adding = event => {
    counterValue += 1;
    span.textContent = counterValue;
};
   
const subtract = event => {
    counterValue -= 1;
    span.textContent = counterValue;
    };

decrementButton.addEventListener("click", subtract);

incrementButton.addEventListener("click", adding);

