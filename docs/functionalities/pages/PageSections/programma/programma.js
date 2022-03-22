let popupEvento = document.querySelector('#more-info-evento');
let popupCheckBox = document.querySelector('#info-checkbox-btn');

let overlayPopup = document.querySelector('#overlay-popup-evento');

window.addEventListener('load', () => {

    let dettagliBtn = document.querySelectorAll('.evento-info-button');

    dettagliBtn.forEach((item) => {
        item.addEventListener("mousemove", (e) => {
            let x = e.clientX - item.getBoundingClientRect().left - 40;
            let y = e.clientY - item.getBoundingClientRect().top - 30;

            item.style.setProperty("--x", x + "px");
            item.style.setProperty("--y", y + "px");
        });
    });

});