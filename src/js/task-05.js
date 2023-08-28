const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const textInput = event => {
  
    if (event.currentTarget.value.length > 0) {
        spanEl.textContent = event.currentTarget.value;
    } else {
        spanEl.textContent = 'Anonymous';
    }
};

inputEl.addEventListener("input", textInput);