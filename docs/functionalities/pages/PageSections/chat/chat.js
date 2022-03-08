let chatForm = document.querySelector('#chat-form');
let submitButton = chatForm.querySelector('input[type=submit]');

let inviatoTemplate = document.querySelector("#inviato-template");
let ricevutoTemplate = document.querySelector("#ricevuto-template");

let chatContainer = document.querySelector('#chat-container #chat-inner-messaggi');
let indexDomanda;
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let messaggioString = chatForm.querySelector('input[type=text]').value;
    inviaMessaggio(messaggioString);
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
        messaggioRicevutoComponent.querySelector('.ricevuto-messaggio').innerHTML = answerString;

        document.querySelector('#chat-inner-messaggi').appendChild(messaggioRicevutoComponent);

        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
    }
}

function findAnswerIndexBot(messaggioInviatoDalUtente) {
    let bestResult;
    indexDomanda = null;

    function bestSimilarQuestion(messaggioInviatoDalUtente) {
        let score = -9999;
        console.clear();
        domandeArray.forEach((tipologia, index) => {
            console.log("loop iniziato " + index)
            let results = fuzzysort.go(messaggioInviatoDalUtente, tipologia);
            console.log('results:', results)
            if (results.length != 0) {
                console.log(index + ' result.score: ' + results.score);
                console.log(index + ' result.index: ' + results.index);
                console.log(index + ' result.target: ' + results.target);
                bestResult = results[0];

                console.log("bestResult.score: " + bestResult.score);
                if (bestResult.score > score) {
                    score = bestResult.score;
                    console.log("index" + index);
                    indexDomanda = index;
                    console.log("ho scelto la " + index + " perchè è la migliore, con il risultato " + bestResult.score);
                    console.log("inoltre bestResult.score: " + bestResult.score);
                }
            }
        });
    }

    bestSimilarQuestion(messaggioInviatoDalUtente);
}