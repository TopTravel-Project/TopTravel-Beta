let chatForm = document.querySelector('#chat-form');
let submitButton = chatForm.querySelector('input[type=submit]');

let inviatoTemplate = document.querySelector("#inviato-template");
let ricevutoTemplate = document.querySelector("#ricevuto-template");

let chatContainer = document.querySelector('#chat-container #chat-inner-messaggi');
let indexDomanda;

let bugError = 0;


chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let messaggioString = chatForm.querySelector('input[type=text]').value;

    inviaMessaggio(messaggioString);

    messaggioString = messaggioString.toLowerCase();
    // i simboli vengono cancellati
    messaggioString = messaggioString.replace(/[?.,!]/g, '');
    // se l'ultima lettera è spazio, diventa vuota
    messaggioString = messaggioString.replace(/\s+$/, '');

    setTimeout(() => {
        riceviMessaggio(messaggioString);
    }, 100);

    chatForm.querySelector('input[type=text]').value = '';
});

function inviaMessaggio(messaggioString) {
    let messaggio = {
        testo: messaggioString
    };
    if (messaggio.testo.length > 0) {
        let messaggioInviatoComponent = inviatoTemplate.content.cloneNode(true);
        messaggioInviatoComponent.querySelector('.inviato-messaggio').textContent = messaggio.testo;
        document.querySelector('#chat-inner-messaggi').appendChild(messaggioInviatoComponent);
        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
    }
}

/* rispondi all'utente con questa funzione */
function riceviMessaggio(messaggioInviatoDalUtente) {
    if (messaggioInviatoDalUtente.length > 0) {
        // clona il messaggio
        let messaggioRicevutoComponent = ricevutoTemplate.content.cloneNode(true);

        findAnswerIndexBot(messaggioInviatoDalUtente);
        let answerString = risposteArray[indexDomanda];

        if (answerString != undefined || answerString != null) {
            bugError = 0;
            messaggioRicevutoComponent.querySelector('.ricevuto-messaggio').innerHTML = answerString;
        } else {
            bugError++;
            if (bugError >= 2) {
                messaggioRicevutoComponent.querySelector('.ricevuto-messaggio').innerHTML = 'Non ho capito, riprova...' +
                    '<br> il mio programma non è ancora completo' +
                    '<br><br>' +
                    'se vuoi, puoi contattarmi tramite email:' +
                    '<br> <a href = "mailto:progetto.turismo.2022@gmail.com">progetto.turismo.2022@gmail.com</a>' +
                    '<br><br>' + 'scrivi il messaggio che hai inviato per ottenere l\'errore';
            } else {
                messaggioRicevutoComponent.querySelector('.ricevuto-messaggio').innerHTML = "Non ho capito, riprova";
            }
        }

        document.querySelector('#chat-inner-messaggi').appendChild(messaggioRicevutoComponent);

        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
    }
}

function findAnswerIndexBot(messaggioInviatoDalUtente) {
    let bestResult;
    indexDomanda = null;

    function bestSimilarQuestion(messaggioInviatoDalUtente) {
        let score = -9999;

        domandeArray.forEach((tipologia, index) => {

            let results = fuzzysort.go(messaggioInviatoDalUtente, tipologia);

            console.log(results.length);
            if (results.length != 0) {

                bestResult = results[0];

                if (bestResult.score > score) {
                    score = bestResult.score;
                    indexDomanda = index;
                }
            }
        });
    }

    bestSimilarQuestion(messaggioInviatoDalUtente);
}