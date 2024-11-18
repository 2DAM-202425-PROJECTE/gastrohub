function loadNavbarFooter() {


    const loadScript = (src, callback) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        document.head.appendChild(script);
    };

    const navbar = document.getElementById('navbar');

    const footer = document.getElementById('footer');

    const navbarHTML = `
                <header class="absolute inset-x-0 top-0 z-50" x-data="{menuOpen: false}">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="logo-head">
            <a href="/"><img src="assets/logoblack.png" alt="GastroHub"/></a>
            <p>GASTROHUB</p>
        </div>
        <div class="w-[700px] h-full flex justify-evenly items-center hidden lg:flex lg:gap-x-12 text-pblack dark:text-pwhite font-bold">
            <a class="hover:text-pteal" href="features">FEATURES</a>
            <a class="hover:text-pteal" href="price">PRICE</a>
            <a class="hover:text-pteal" href="news">NEWS</a>
            <a class="hover:text-pteal" href="contact">CONTACT</a>
        </div>

        <div id="right-head">
            <a href="/price" id="neon-btn"
               class="hidden lg:flex justify-center gap-2 items-center mx-auto shadow-lg text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 dark:border-pblack-light before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group dark:bg-pblack-light dark:text-pwhite">
                Explore
                <svg
                        class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45 dark:group-hover:bg-pblack dark:border-gray-400"
                        viewBox="0 0 16 19"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            class="fill-gray-800 group-hover:fill-gray-800 dark:fill-pwhite dark:group-hover:fill-pwhite"
                    ></path>
                </svg>
            </a>
            <button id="popover-usr" popovertarget="my-popover">
                <img alt="Account button icon" id="account-img" src="assets/header/account.png">
            </button>
            <div class="flex lg:hidden ml-12">
                <button type="button"
                        class="-m-1 inline-flex items-center justify-center rounded-md p-2 text-pwhite"
                        @click="menuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <svg class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>
            </div>


            <div id="my-popover" popover>
                <div class="container" id="container">
                    <div class="form-container sign-up">
                        <form class="bg-white flex items-center justify-center flex-col px-10 h-full">
                            <img alt="GastroHub logo" class="logo-login" src="assets/logo.png">
                            <h1>Create Account</h1>
                            <div class="social-icons">
                                <a href="#" class="icon"><i class="fa-brands fa-google"></i>Continue with Google</a>
                            </div>
                            <span>or use your email for registeration</span>
                            <input type="text" placeholder="Name" required>
                            <input type="email" placeholder="Email" required>
                            <div class="password-container">
                                <input type="password" id="password1" placeholder="Password" required>
                                <button type="button" id="togglePassword1" class="eye-button">
                                    <i class="fa fa-eye"></i>
                                </button>
                            </div>
                            <div class="password-container">
                                <input type="password" id="password2" placeholder="Confirm Password" required>
                                <button type="button" id="togglePassword2" class="eye-button">
                                    <i class="fa fa-eye"></i>
                                </button>
                            </div>
                            <div id="space">
                                <span id="passwordError" class="error-message"></span>
                            </div>
                            <button id="signUpBtn">Sign Up</button>
                            <a id="register-change-view">Don't have account? <strong>Sign up</strong></a>

                        </form>
                    </div>
                    <div class="form-container sign-in">
                        <form>
                            <img alt="GastroHub logo" class="logo-login" src="assets/logo.png">
                            <h1>Log In</h1>
                            <div class="social-icons">
                                <a href="#" class="icon"><i class="fa-brands fa-google"></i>Continue with Google</a>
                            </div>
                            <span>or use your email and password</span>
                            <input type="email" placeholder="Email" required>
                            <div class="password-container">
                                <input type="password" id="password" placeholder="Password" required>
                                <button type="button" id="togglePassword" class="eye-button">
                                    <i class="fa fa-eye"></i>
                                </button>
                            </div>
                            <a href="#" class="forget-password">Forget Your Password?</a>
                            <button>Log In</button>
                            <a id="login-change-view">Don't have account? <strong>Sign up</strong></a>
                        </form>
                    </div>
                    <div class="toggle-container">
                        <div class="toggle">
                            <div class="toggle-panel toggle-left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details to use all of site features</p>
                                <button class="hidden1" class="sign-in-btn" id="login">Log In</button>
                            </div>
                            <div class="toggle-panel toggle-right">
                                <h1>Hello, Friend!</h1>
                                <p>Register with your personal details to use all of site features</p>
                                <button class="hidden1" class="sign-up-btn" id="register">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 mt-24 pointer-events-none" role="dialog" aria-modal="true" x-show="menuOpen">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-50"></div>
        <div class="bg-white dark:bg-black w-full h-1/2 overflow-y-auto px-6 py-6 flex justify-center pointer-events-auto">
            <div class="w-full">
                <div class="flex items-center justify-between mt-24 mr-7">
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-pwhite ml-auto" @click="menuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <svg class="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="flex flex-col items-center justify-center h-full">
                        <div class="-my-6 divide-y divide-gray-500/10 w-full">
                            <div class="pt-16 pl-16 space-y-2 py-6 bt-3xl">
                                <a href="/features" class="-mx-3 block rounded-lg px-3 py-12 text-5xl font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-start">FEATURES</a>
                                <a href="/price" class="-mx-3 block rounded-lg px-3 py-12 text-5xl font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-start">PRICE</a>
                                <a href="/news" class="-mx-3 block rounded-lg px-3 py-12 text-5xl font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-start">NEWS</a>
                                <a href="/contact" class="-mx-3 block rounded-lg px-3 py-12 text-5xl font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-start">CONTACT</a>
                            </div>
<!--                            <div class="py-6 pl-16 border-t border-gray-500/10 flex">-->
<!--                                <a href="./index#contact" class="-mx-3 block rounded-lg px-3 py-12 text-5xl font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">Collaborate</a>-->
<!--                            </div>-->
                        </div>
                    </div>
                </div>
                <div class="fixed inset-x-0 bottom-80">
                    <a href="/price"
                       class="w-1/2 h-24 flex justify-center gap-2 items-center mx-auto shadow-lg text-5xl bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 dark:border-pblack-light relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group dark:bg-pblack-light dark:text-pwhite">
                        Explore
                        <svg
                                class="w-12 h-12 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45 dark:group-hover:bg-pblack dark:border-gray-400"
                                viewBox="0 0 16 19"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                                    class="fill-gray-800 group-hover:fill-gray-800 dark:fill-pwhite dark:group-hover:fill-pwhite"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>
            `;

    const footerHTML = `
    <footer>
    <div class="top-footer">
        <div class="info-footer">
            <img  src="assets/logo.png" alt="GastroHub logo">
            <p>GastroHub</p>
            <p class="title-footer">Social Media</p>
            <div class="social-links-footer">
                <div class="social-media">
                    <a href="https://x.com/GastroHubApp"><img alt="X logo" src="./assets/footer/twitter.png"></a>
                </div>
                <div class="social-media">
                    <a href="https://www.facebook.com/profile.php?id=61568532765810"><img alt="Facebook logo" src="./assets/footer/facebook.png"></a>
                </div>
                <div class="social-media">
                    <a href="https://www.instagram.com/gastrohubapp/"><img alt="Instagram logo" src="./assets/footer/instagram.webp"></a>
                </div>
                
            </div>
        </div>
        <div class="links-footer">
            <p class="title-footer">Useful Links</p>
            <div class="line-footer"></div>
            <div class="urls-footer">
            <div>
                <a href="/">Home</a>
                <a href="/features">Features</a>
                <a href="/price">Price</a>
                <a href="/news">News</a>

            </div>
            <div>
                <a href="/contact">Contact</a>
                <a href="/privacy-policy">Privacy policy</a>
                <a href="/about_us">About Us</a>
                                <a href="/legal-info">Legal Information</a>

</div>
</div>
        </div>
        <div class="news-footer">
            <p class="title-footer">Subscribe</p>
            <div class="line-footer"></div>
            <div class="subscribe-form">
                <form action="#">
                    <input type="text" placeholder="Email Address">
                    <button></button>
                </form>
            </div>
        </div>
    </div>
    <div class="bottom-footer">
        <p>Copyright© 2024, All Right Reserved <strong>GastroHub</strong></p>
    </div>
</footer>
    `;

    // Insertar el navbar en el elemento header
    navbar.innerHTML = navbarHTML;
    footer.innerHTML = footerHTML;

    const button = document.getElementById('popover-usr');
    if (button) {
        button.addEventListener('click', () => {
            loadScript('./javascript/login.js', () => {
                console.log('Script loaded successfully.');
                // Aquí puedes llamar a funciones definidas en el script cargado
            });
            // document.getElementsByTagName('body')[0].style.filter = 'blur(2px)';

        });
    }


    window.addEventListener("scroll", () => {

        window.scrollY > 0 ? navbar.classList.add("header-shadow") : navbar.classList.remove("header-shadow");
    });


}

// Llamar a la función cuando la página esté cargada
window.onload = loadNavbarFooter;

// Crear y agregar dinámicamente el contenido HTML
const body = document.getElementsByTagName('body')[0];

// HTML a insertar
const cookieHTML = `
  <!-- Fondo de la ventana de cookies -->
  <div id="cookieBackdrop" class="hidden fixed inset-0 bg-black bg-opacity-50 z-50" style="backdrop-filter: blur(4px)"></div>

  <!-- Alerta de cookies -->
  <div id="cookieAlert" class="hidden fixed bottom-0 left-0 right-0 p-4 shadow-lg z-50">
    <section id="cookie" class="fixed p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl">
    <h2 id="cookieTitle" class="font-semibold text-gray-800 dark:text-white">🍪 Cookie Notice</h2>
    <p id="cookieText" class="mt-4 text-sm text-gray-600 dark:text-gray-300">We use cookies to ensure that we give you the best experience on our website. <a href="cookie-page" class="text-blue-500 hover:underline">Read cookies policies</a>. </p>
    <div id="cookieButtons" class="flex items-center justify-end mt-4 gap-x-4 shrink-0">
        <a href="cookie-page" id="cookiePolicyLink" class="justify-start text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
            More Information
        </a>
        <button id="acceptCookies" class=" text-xs bg-green-700 font-medium rounded-lg hover:bg-green-800 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Accept
        </button>
        <button id="rejectCookies" class=" text-xs bg-red-800 font-medium rounded-lg hover:bg-red-900 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Reject
        </button>
    </div>
</section>
    
    
  </div>
`;

// Insertar el HTML antes de cerrar la etiqueta <body>
body.insertAdjacentHTML('beforeend', cookieHTML);

// Función para establecer una cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Expira en X días
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(name + "=") === 0) {
            return c.substring(name.length + 1);
        }
    }
    return null;
}

// Función para verificar la existencia de una cookie
function checkCookie(name) {
    return getCookie(name) !== null;
}

// Función para generar un identificador único (SSID simulado)
function generateSSID() {
    return 'SSID-' + Math.random().toString(36).substring(2, 15) + Date.now();
}

// Función para mostrar la alerta de cookies
function showCookieAlert() {
    const cookieAlert = document.getElementById('cookieAlert');
    const cookieBackdrop = document.getElementById('cookieBackdrop');
    cookieAlert.classList.remove('hidden');
    cookieBackdrop.classList.remove('hidden'); // Muestra el fondo borroso
}

// Gestor de eventos para aceptar cookies
document.getElementById('acceptCookies').addEventListener('click', function() {
    setCookie('cookiesAccepted', 'true', 7); // Guardar la preferencia durante 1 año
    console.log('Cookies aceptadas');
    document.getElementById('cookieAlert').classList.add('hidden');
    document.getElementById('cookieBackdrop').classList.add('hidden'); // Oculta el fondo
    enableCookies();
    manageSSID(); // Generar y guardar el SSID solo si se aceptan las cookies
});

// Gestor de eventos para rechazar cookies
document.getElementById('rejectCookies').addEventListener('click', function() {
    setCookie('cookiesAccepted', 'false', 7); // Guardar la preferencia durante 1 año
    console.log('Cookies rechazadas');
    document.getElementById('cookieAlert').classList.add('hidden');
    document.getElementById('cookieBackdrop').classList.add('hidden'); // Oculta el fondo
    disableCookies();
});

// Comprueba si el usuario ya ha tomado una decisión sobre las cookies
if (!checkCookie('cookiesAccepted')) {
    showCookieAlert(); // Muestra la alerta si no hay cookie guardada
} else {
    const cookiesAccepted = getCookie('cookiesAccepted');
    if (cookiesAccepted === 'false') {
        disableCookies(); // Desactivar cookies no esenciales si el usuario las rechazó
    } else {
        enableCookies(); // Habilitar cookies si las aceptó
        manageSSID(); // Generar y guardar el SSID solo si las cookies fueron aceptadas
    }
}

// Función para gestionar el SSID
function manageSSID() {
    if (!checkCookie('ssid') && getCookie('cookiesAccepted') === 'true') {
        const ssid = generateSSID(); // Genera un SSID único
        setCookie('ssid', ssid, 7); // Guarda el SSID en una cookie durante 1 año
        console.log('SSID generado y guardado:', ssid);
    } else if (getCookie('cookiesAccepted') === 'false') {
        console.log('El SSID no se guarda ya que las cookies fueron rechazadas');
    }
}

// Función para habilitar cookies no esenciales (como Google Analytics) - Opcional
function enableCookies() {
    console.log("Cookies aceptadas. Cargando cookies no esenciales...");
    // Aquí podrías cargar otras funcionalidades como Analytics o publicidad si lo deseas
}

// Función para deshabilitar cookies no esenciales
function disableCookies() {
    console.log("Cookies rechazadas. Bloqueando cookies no esenciales.");
    // Aquí podrías asegurarte de no cargar ningún script adicional
}
