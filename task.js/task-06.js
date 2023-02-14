const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', event => {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)
    ) {
        inputElement.classList.add('valid');
        inputElement.classList.remove('invalid');
    } else {
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
    }
});