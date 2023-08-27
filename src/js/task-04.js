const div = document.querySelector('#counter')
console.log(div);

const decrementButton = div.firstElementChild;
console.log(decrementButton);

const incrementButton = div.lastElementChild;
console.log(incrementButton);

const span = document.querySelector('#value')
console.log(span);

let counterValue = 0;

const adding = event => {
    counterValue += 1;
    span.textContent = counterValue;
    console.log(counterValue)
};
const subtract = event => {
    counterValue -= 1;
    span.textContent = counterValue;
    console.log(counterValue)
};


decrementButton.addEventListener("click", subtract);

incrementButton.addEventListener("click", adding);

