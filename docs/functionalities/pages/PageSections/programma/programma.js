let popupEvento = document.querySelector('#more-info-evento');
let popupCheckBox = document.querySelector('#info-checkbox-btn');

let overlayPopup = document.querySelector('#overlay-popup-evento');

let wikiIframe = document.querySelector("#wiki-iframe");
let wikiButton = document.querySelectorAll(".wiki-button");

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


popupCheckBox.addEventListener('change', (item) => {
    if (popupCheckBox.checked) {
        popupEvento.classList.remove('popup-close');
        popupEvento.classList.add('popup-open');
        overlayPopup.classList.remove('popup-close');
        overlayPopup.classList.add('popup-open');

        window.addEventListener('click', function removePopup(e) {
            if (popupCheckBox.checked) {
                if (!popupEvento.contains(e.target)) {
                    popupEvento.classList.remove('popup-open');
                    popupEvento.classList.add('popup-close');
                    overlayPopup.classList.remove('popup-open');
                    overlayPopup.classList.add('popup-close');
                    popupCheckBox.checked = false;
                    console.log("false popup");


                    window.removeEventListener('click', removePopup);
                }
            }
        });
    } else {
        popupEvento.classList.remove('popup-open');
        popupEvento.classList.add('popup-close');
        overlayPopup.classList.remove('popup-open');
        overlayPopup.classList.add('popup-close');
    }
});

/*  */

window.addEventListener("load", () => {
    function setOrarioProgrammaAttuale() {
        /* get actual time, and translate it to 15:00 format */
        let actualTime = new Date();
        let actualHour = actualTime.getHours();

        let actualTimeString = actualHour + ":" + "00";

        let orari = document.querySelectorAll(".orario-evento-programma");
        let orariArray = Array.from(orari);

        orariArray.forEach((item) => {
            let ora = item.textContent;

            if (ora == actualTimeString) {
                item.classList.add("evento-now");
            } else if (ora != actualTimeString) {
                item.classList.add("evento-passato");
            }
        });
    }

    setOrarioProgrammaAttuale();

    setInterval(() => {
        setOrarioProgrammaAttuale();
    }, 1000 * 60 * 60);
});