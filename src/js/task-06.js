const input = document.querySelector('#validation-input');

const textInput = event => {
    
    if (event.currentTarget.value.length < input.getAttribute('data-length')) {
        input.classList.add('invalid');
    } else  {
        input.classList.replace('invalid', 'valid')
    }
    
};

input.addEventListener("blur", textInput);



