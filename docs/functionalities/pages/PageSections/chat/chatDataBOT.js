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

console.log(fuzzysort)
    /* const result = fuzzysort.single('query', 'some string that contains my query.')
        // exact match returns a score of 0. lower is worse
    result.score // -59
    console.log('result:', result)
    result.indexes // [29, 30, 31, 32, 33]
    console.log(result)
    result.target // some string that contains my query.
    console.log(result)
    result.obj // reference to your original obj when using options.key
    console.log(result)
    fuzzysort.highlight(result, '<b>', '</b>') // some string that contains my <b>query</b>. */