const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const loginChangeView = document.getElementById('login-change-view');
const registerChangeView = document.getElementById('register-change-view');
const loginSuccesButton = document.getElementById('login-succes-button');
const registerSuccesButton = document.getElementById('signUpBtn');

if (registerBtn && loginBtn) {
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    loginChangeView.addEventListener('click', () => {
        container.classList.add("active");
    });

    registerChangeView.addEventListener('click', () => {
        container.classList.remove("active");
    });
}

if (loginSuccesButton && registerSuccesButton) {
    loginSuccesButton.addEventListener('click', (event) => {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('password').value;

        if(email !== '' && password !== '') {
            localStorage.setItem('user', JSON.stringify({ email, password, image: null, name: email }));
            window.location.href = '/profile';
        }
    });

    registerSuccesButton.addEventListener('click', (event) => {
        event.preventDefault();
    });
}

document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

document.getElementById('togglePassword1').addEventListener('click', function () {
    const passwordField = document.getElementById('password1');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

document.getElementById('togglePassword2').addEventListener('click', function () {
    const passwordField = document.getElementById('password2');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.querySelector('i').classList.toggle('fa-eye');
    this.querySelector('i').classList.toggle('fa-eye-slash');
});

document.getElementById('signUpBtn').addEventListener('click', function (event) {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const passwordError = document.getElementById('passwordError');

    if (password1 === '' || password2 === '') {
        event.preventDefault();
        document.getElementById('password1').style.border = '2px solid red';
        document.getElementById('password2').style.border = '2px solid red';
        passwordError.textContent = 'Both password fields are required!';
        return;
    }

    if (password1 !== password2) {
        event.preventDefault();
        document.getElementById('password2').style.border = '2px solid red';
        passwordError.textContent = 'Passwords do not match!';
    } else {
        document.getElementById('password2').style.borderColor = '';
        passwordError.textContent = '';
    }

    if (password1 === password2) {
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('password1').value;

        if(name !== '' && email !== '' && password !== '') {
            localStorage.setItem('user', JSON.stringify({ email, password, image: null, name }));
            window.location.href = '/profile';
        }
    }
});
