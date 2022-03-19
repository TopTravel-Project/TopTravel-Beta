let dettagliBtn = document.querySelectorAll('.evento-info-button');
let popupEvento = document.querySelector('#more-info-evento');

dettagliBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (checkBox.checked) {
            popupEvento.classList.remove('popup-close');
            popupEvento.classList.add('popup-open');
        } else {
            popupEvento.classList.remove('popup-open');
            popupEvento.classList.add('popup-close');

        }
    });
});