document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('profile__password--eye').addEventListener('click', function () {
        const passwordField = document.getElementById('profile__password--input');
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
});