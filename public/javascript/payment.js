// Guarda el manejador original de window.onload
const originalOnLoad = window.onload;

// Combina ambos manejadores de eventos
window.onload = function() {
    // Llama al manejador original si existe
    if (originalOnLoad) {
        originalOnLoad(); // Ejecuta la función anterior
    }

    // Tu código que quieres añadir
    const urlParams = new URLSearchParams(window.location.search);
    const numero = urlParams.get('price');
    try {
        if (numero) {
            if (isNaN((parseInt(numero) + 2.99))) {
                console.log('No price found');
                window.location.href = '/price';
            }
            document.getElementById('final-order-price').innerHTML = "<strong>" + (parseInt(numero) + 2.99) + " €</strong>";
        } else {
            console.log('No price found');
            window.location.href = '/price';
        }
    } catch (e) {
        console.log(e);
        window.location.href = '/price';
    }
};

document.querySelectorAll('.input-cart-number').forEach(function (input, index, inputs) {
    input.addEventListener('keyup', function () {
        if (input.value.length > 3 && inputs[index + 1]) {
            inputs[index + 1].focus();
        }

        let cardNumber = '';
        inputs.forEach(function (inp) {
            cardNumber += inp.value + ' ';
            if (inp.value.length === 4 && inputs[index + 1]) {
                inputs[index + 1].focus();
            }
        });

        document.querySelector('.credit-card-box .number').textContent = cardNumber.trim();
    });

    input.addEventListener('change', function () {
        if (input.value.length > 3 && inputs[index + 1]) {
            inputs[index + 1].focus();
        }
    });
});

document.getElementById('card-holder').addEventListener('keyup', function () {
    const value = this.value;
    document.querySelector('.credit-card-box .card-holder div').textContent = value;
});

document.getElementById('card-holder').addEventListener('change', function () {
    const value = this.value;
    document.querySelector('.credit-card-box .card-holder div').textContent = value;
});

document.getElementById('card-expiration-month').addEventListener('change', updateExpirationDate);
document.getElementById('card-expiration-year').addEventListener('change', updateExpirationDate);

function updateExpirationDate() {
    const monthSelect = document.getElementById('card-expiration-month');
    const yearSelect = document.getElementById('card-expiration-year');

    const monthIndex = monthSelect.selectedIndex;
    const month = monthIndex < 10 ? '0' + monthIndex : monthIndex;
    const year = yearSelect.value.slice(-2);

    document.querySelector('.card-expiration-date div').textContent = month + '/' + year;
}

const ccvInput = document.getElementById('card-ccv');
ccvInput.addEventListener('focus', function () {
    document.querySelector('.credit-card-box').classList.add('hover');
});

ccvInput.addEventListener('blur', function () {
    document.querySelector('.credit-card-box').classList.remove('hover');
});

ccvInput.addEventListener('keyup', function () {
    document.querySelector('.ccv div').textContent = this.value;
});

ccvInput.addEventListener('change', function () {
    document.querySelector('.ccv div').textContent = this.value;
});

/*--------------------
CodePen Tile Preview
--------------------*/
setTimeout(function () {
    ccvInput.focus();
    setTimeout(function () {
        ccvInput.blur();
    }, 1000);
}, 500);

/*function getCreditCardType(accountNumber) {
    if (/^5[1-5]/.test(accountNumber)) {
        return 'mastercard';
    } else if (/^4/.test(accountNumber)) {
        return 'visa';
    } else if (/^(5018|5020|5038|6304|6759|676[1-3])/.test(accountNumber)) {
        return 'maestro';
    } else {
        return 'unknown';
    }
}

document.getElementById('card-number').addEventListener('change', function() {
    console.log(getCreditCardType(this.value));
});*/
