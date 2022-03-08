let domandeArray = [
    ["ciao", "ciao a tutti", "buongiorno"],
    ["che ore sono", "ora", "ora attuale", "che ora è", "orario"],
    ["che giorno è oggi", "quando", "data", "quale data", "quale giorno"],
    ["dove siete", "mi sono perso", "che citta siete in", "la posizione", "la mappa", "posizione", "gps"],
    ["sei un robot"]
];

let orarioAttuale = new Date().getHours() + ":" + new Date().getMinutes();
let giornoAttuale = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();
let mapIframe = document.querySelector('#mappa-quadrato iframe');

let MapPosizione = mapIframe.src.split("&")[1].split("=")[1];

let risposteArray = [
    "buongiorno anche a te!",
    'adesso sono le ore ' + orarioAttuale,
    'oggi è il ' + giornoAttuale,
    'siamo in ' + MapPosizione,
    'sì sono un robot. Come posso aiutare?',
];

/* 
let chatBotJSON = {
    "saluto": {
        "domande": domandeArray[0],
        "risposte": risposteArray[0]
    },
    "ora": {
        "domande": domandeArray[1],
        "risposte": risposteArray[1]
    },
    "giorno": {
        "domande": domandeArray[2],
        "risposte": risposteArray[2]
    },
    "mappa": {
        "domande": domandeArray[3],
        "risposte": risposteArray[3]
    }
} */