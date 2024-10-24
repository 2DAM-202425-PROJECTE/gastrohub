function loadNavbarFooter() {
    const navbar = document.getElementById('navbar');

    const footer = document.getElementById('footer');
    const navbarHTML = `
                <nav>
      <div class="logo-head">
        <a href="/index.html"><img src="/assets/logo.png" alt="GastroHub" /></a>
      </div>
      <div class="nav-head">
        <a href="/features.html">FEATURES</a>
        <a href="/price.html">PRICE</a>
        <a href="/news.html">NEWS</a>
        <a href="/contact.html">CONTACT</a>
      </div>
      <div class="right-head">
        <a href="/price.html" class="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group">
          Explore
          <svg
                  class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
          >
            <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    class="fill-gray-800 group-hover:fill-gray-800"
            ></path>
          </svg>
        </a>
        <img src="assets/header/account.png">
      </div>
    </nav>
            `;

    const footerHTML = `
    <footer>
    <div class="top-footer">
        <div class="info-footer">
            <img src="assets/logo.png" alt="logo">
            <p>GastroHub</p>
            <p class="title-footer">Social Media</p>
            <div class="social-links-footer">
                <div class="social-media">
                    <img src="./assets/footer/twitter.png">
                </div>
                <div class="social-media">
                    <img src="./assets/footer/facebook.png">
                </div>
                <div class="social-media">
                    <img src="./assets/footer/linkedin.png">
                </div>
            </div>
        </div>
        <div class="links-footer">
            <p class="title-footer">Useful Links</p>
            <div class="line-footer"></div>
            <div class="urls-footer">
            <div>
                <a href="/index.html">Home</a>
                <a href="/features.html">Features</a>
                <a href="/price.html">Price</a>
            </div>
            <div>
                <a href="/news.html">News</a>
                <a href="/contact.html">Contact</a>
                <a href="/privacy-policy.html">Privacy policy</a>
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
}

// Llamar a la función cuando la página esté cargada
window.onload = loadNavbarFooter;