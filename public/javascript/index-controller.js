document.addEventListener('DOMContentLoaded', function () {


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
