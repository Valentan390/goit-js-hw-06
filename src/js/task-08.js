const form = document.querySelector('.login-form');
console.log(form);


const handleSubmit = (event) => {
    event.preventDefault()
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    };
    const user = { Email: email.value, password: Password.value };
    
    console.log(user);
    event.currentTarget.reset();
}

form.addEventListener('submit', handleSubmit);