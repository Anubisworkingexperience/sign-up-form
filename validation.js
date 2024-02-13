// password validation:
// Minimum eight characters,
// at least one uppercase letter,
// one lowercase letter,
// one number and
// one special character
// --applied in html pattern

// password confirmation
const password = document.querySelector('.pass');
const confirm = document.querySelector('.confirm');
const submit = document.querySelector('.submit');
const message = document.querySelector('.message');

submit.addEventListener('click', () => {
    if (password.value != "" && confirm.value != "") {
        if (password.value != confirm.value) {
            confirm.setCustomValidity("Passwords don't match");
        }
        else {
            confirm.setCustomValidity("")
        }
    }
});