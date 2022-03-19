let dettagliBtn = document.querySelectorAll('.evento-info-button');
let popupEvento = document.querySelector('#more-info-evento');
let popupCheckBox = document.querySelector('#info-checkbox-btn');


popupCheckBox.addEventListener('change', (item) => {
    if (popupCheckBox.checked) {
        popupEvento.classList.remove('popup-close');
        popupEvento.classList.add('popup-open');
    } else {
        popupEvento.classList.remove('popup-open');
        popupEvento.classList.add('popup-close');
    }
});