const password_input = document.querySelector('#password-input');

function passwordToggle() {
    // check if input type is password
    if (password_input.type == 'password') return 'text'
    return 'password';
}

function revealPassword() {
    password_input.type = passwordToggle();
}

