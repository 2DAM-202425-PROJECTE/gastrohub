$(document).ready(function () {
    var carousel = $(".custom-carousel");

    // Inicializar el carrusel
    carousel.owlCarousel({
        autoWidth: true,
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        startPosition: 0, // Establecer "Dota 2" como el primer item
        onInitialized: function () {
            setActiveItem();
        },
    });


    // Función para establecer el item activo
    function setActiveItem() {
        var $items = $(".custom-carousel .item");
        var activeIndex = carousel.find('.owl-item.active').index();

        // Remover la clase 'active' de todos los items
        $items.removeClass("active");

        // Agregar la clase 'active' al item actual
        $items.eq(activeIndex).addClass("active");
    }

    // Llamar a la función setActiveItem cuando el carrusel se inicializa
    carousel.on('initialized.owl.carousel', function () {
        setActiveItem();
    });

    // Llamar a la función al mover el carrusel (desplazamiento)
    carousel.on('translated.owl.carousel', function () {
        setActiveItem();
    });
});