const input = document.querySelector('#validation-input');
console.log(input);
console.log(input.getAttribute('data-length'));

const textInput = (Event) => {
    
    if (Event.currentTarget.value.length < input.getAttribute('data-length')) {
        input.classList.add('invalid');
    } else  {
        input.classList.replace('invalid', 'valid')
    }
    console.log(Event.currentTarget.value.length);
};

input.addEventListener("blur", textInput);



