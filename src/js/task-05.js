const input = document.querySelector('#name-input');
console.log(input);

const span = document.querySelector('#name-output');
console.log(span);

const textInput = (Event) => {
    
    if (Event.currentTarget.value.length > 0) {
        span.textContent = Event.currentTarget.value;
    } else {
        span.textContent = 'Anonymous';
    }
};

input.addEventListener("input", textInput);