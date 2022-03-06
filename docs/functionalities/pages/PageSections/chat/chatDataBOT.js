let domandeArray = [
    ["ciao", "ciao a tutti", "buongiorno"],
    ["che ore sono", "ora", "ora attaule", "che ora è?"],
    ["che giorno è oggi", "quando è oggi", "quando è oggi?"],
    ["dove siete", "che citta siete in", "la posizione?", "la mappa"],
];

let orarioAttuale = new Date().getHours() + ":" + new Date().getMinutes();
let giornoAttuale = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear();
let mapIframe = document.querySelector('#mappa-quadrato iframe');

let MapPosizione = mapIframe.src.split("&")[1].split("=")[1];

let risposteArray = [
    ["ciao anche a te", "buongiorno", "buona giornata!"],
    ['adesso sono le ore ${orarioAttuale}'],
    ['oggi è il ${giornoAttuale}'],
    ['siete in ${MapPosizione} \n tra poco ti apro la mappa']
]

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
}

function checkMessaggio(messaggioString) {
    const result = fuzzysort.go(messaggioString, domandeArray);
    console.log(result.score);
}

checkMessaggio("ciao");