document.addEventListener('DOMContentLoaded', function () {
    const user = localStorage.getItem('user');

    if (user != null) {
        const parsedUser = JSON.parse(user);

        if (parsedUser.name && parsedUser.email && parsedUser.password) {
            document.getElementById('profile__name--input').value = parsedUser.name;
            document.getElementById('profile__email--input').value = parsedUser.email;
            document.getElementById('profile__password--input').value = parsedUser.password;

            if (parsedUser.image) {
                document.getElementById('profile-img').src = parsedUser.image;
            }
        } else {
            window.location.href = '/';
        }
        console.log(parsedUser.name);
        console.log(parsedUser.email);
        console.log(parsedUser.password);
    } else {
        console.log('NO User already logged in');
        window.location.href = '/';
    }

    const profileImgContainer = document.getElementById('profile-img-container');
    const profileImg = document.getElementById('profile-img');
    const fileInput = document.getElementById('file-input');
    const chooseImageOverlay = document.getElementById('choose-image');
    let newImage = null;  

    profileImgContainer.addEventListener('click', function () {
        fileInput.click();
    });

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                profileImg.src = e.target.result;
                newImage = e.target.result;  
            };

            reader.readAsDataURL(file);
        }
    });

    document.getElementById('profile__password--eye').addEventListener('click', function () {
        const passwordField = document.getElementById('profile__password--input');
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });

    document.getElementById('save-profile-btn').addEventListener('click', function () {
        const name = document.getElementById('profile__name--input').value;
        const email = document.getElementById('profile__email--input').value;
        const password = document.getElementById('profile__password--input').value;

        if (name && email && password) {
            const user = {
                name: name,
                email: email,
                password: password
            };

            if (newImage) {
                user.image = newImage;
            }

            localStorage.setItem('user', JSON.stringify(user));
        } else {
            console.log('Please fill in all fields');
        }
    });

    document.getElementById('logout-btn').addEventListener('click', function () {
        localStorage.removeItem('user');
        window.location.href = '/';
    });
});
