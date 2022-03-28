let serviziPosizioneContainer = document.querySelector("#servizi-posizione");
let mappaContainer = document.querySelector("#mappa-container");

let ServiziHeight = serviziPosizioneContainer.offsetHeight;
mappaContainer.style.setProperty("--servizi-height", ServiziHeight + "px");

window.addEventListener("load", () => {
    ServiziHeight = serviziPosizioneContainer.offsetHeight;
    mappaContainer.style.setProperty("--servizi-height", ServiziHeight + "px");
});

window.addEventListener("resize", () => {
    ServiziHeight = serviziPosizioneContainer.offsetHeight;
    mappaContainer.style.setProperty("--servizi-height", ServiziHeight + "px");
});