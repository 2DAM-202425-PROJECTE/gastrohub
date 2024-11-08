document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('carousel-track');
    const reviews = document.querySelectorAll('.review');
    const totalReviews = reviews.length;
    let reviewsToShow = 3;
    let currentIndex = 0;

    // Clona los primeros elementos y agrégalos al final del track
    for (let i = 0; i < reviewsToShow; i++) {
        const clone = reviews[i].cloneNode(true);
        track.appendChild(clone);
    }

    function showNextReview() {
        currentIndex++;

        // Calcula el desplazamiento
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(-${currentIndex * (100 / reviewsToShow)}%)`;

        // Reinicia el índice cuando llega al último clon para una transición infinita
        if (currentIndex === totalReviews) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = 0;
                track.style.transform = `translateX(0)`;
            }, 500); // Tiempo de transición en milisegundos
        }
    }

    setInterval(showNextReview, 3000); // Cambia cada 3 segundos


    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;

            // Si la respuesta ya está abierta, la cierra
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null; // Cierra
            } else {
                // Cierra otras respuestas
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.style.maxHeight = null;
                });
                // Abre la respuesta actual
                answer.style.maxHeight = answer.scrollHeight + "px"; // Abre
            }
        });
    });
});
