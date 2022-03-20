let dettagliBtn = document.querySelectorAll('.evento-info-button');
let popupEvento = document.querySelector('#more-info-evento');
let popupCheckBox = document.querySelector('#info-checkbox-btn');

let overlayPopup = document.querySelector('#overlay-popup-evento');

popupCheckBox.addEventListener('change', (item) => {
    let removePopup = null;
    if (popupCheckBox.checked) {
        popupEvento.classList.remove('popup-close');
        popupEvento.classList.add('popup-open');
        overlayPopup.classList.remove('popup-close');
        overlayPopup.classList.add('popup-open');

        removePopup = window.addEventListener('click', (e) => {
            if (popupCheckBox.checked) {
                if (!popupEvento.contains(e.target)) {
                    popupEvento.classList.remove('popup-open');
                    popupEvento.classList.add('popup-close');
                    overlayPopup.classList.remove('popup-open');
                    overlayPopup.classList.add('popup-close');
                    popupCheckBox.checked = false;
                    console.log("false popup")
                }
            }
        });
    } else {
        popupEvento.classList.remove('popup-open');
        popupEvento.classList.add('popup-close');
        overlayPopup.classList.remove('popup-open');
        overlayPopup.classList.add('popup-close');
        /* desactive eventlistener */
        removePopup = null;
    }
});