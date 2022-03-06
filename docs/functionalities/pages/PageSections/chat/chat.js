let chatForm = document.querySelector('#chat-form');
let submitButton = chatForm.querySelector('input[type=submit]');

let inviatoTemplate = document.querySelector("#inviato-template");
let ricevutoTemplate = document.querySelector("#ricevuto-template");

let chatContainer = document.querySelector('#chat-container #chat-inner-messaggi');

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
        let messaggioRicevutoComponent = ricevutoTemplate.content.cloneNode(true);
        messaggioRicevutoComponent.querySelector('.ricevuto-messaggio').textContent = "hello world";
        document.querySelector('#chat-inner-messaggi').appendChild(messaggioRicevutoComponent);
        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });

        function findAnswerBot(messaggioInviatoDalUtente) {
            let score;
            let bestResult;

            function bestSimilarQuestion(messaggioInviatoDalUtente) {
                let score = -9999;

                domandeArray.forEach((tipologia, index) => {
                    console.log("loop iniziato" + index)
                    let results = fuzzysort.go(messaggioInviatoDalUtente, tipologia);

                    if (results.length != 0) {
                        bestResult = results[0];

                        console.log("index:" + index);
                        console.log(score);
                        console.log(bestResult);
                        console.log(" ");

                        if (bestResult.score > score) {
                            score = bestResult.score;
                            console.log("index");
                            return index;
                        }
                    }

                    return 'errore';
                });
            }

            bestSimilarQuestion(messaggioInviatoDalUtente);
        }

        findAnswerBot(messaggioInviatoDalUtente);
    }
}