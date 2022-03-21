let eventoContainerTemplate = document.querySelectorAll(".programma-template")[0];
/* const url = "https://sheetdb.io/api/v1/ugfngdyqadjky";
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((dataJSON) => {
        dataJSON.forEach((item, index) => {
            let eventoContainer = eventoContainerTemplate.content.cloneNode(true);

            let orarioSpan = eventoContainer.querySelectorAll(".orario-evento-programma")[0];
            let descrizioneSpan = eventoContainer.querySelectorAll(".descrizione-evento-programma")[0];

            orarioSpan.textContent = dataJSON[index].orario;
            descrizioneSpan.textContent = dataJSON[index].evento;

            document.getElementById("programma-table-container").appendChild(eventoContainer);
        })
    }); */

const ExcelUrlApi = "https://gsx2json.com/api?id=14uIKI2cUcjHNnQYxGMLArBByRnJIImOps-kPk6ugZNw&sheet=Foglio1";
fetch(ExcelUrlApi)
    .then((response) => {
        return response.json();
    })
    .then((dataJSON) => {
        dataJSON.columns.orario.forEach((item, index) => {
            let eventoContainer = eventoContainerTemplate.content.cloneNode(true);

            let orarioSpan = eventoContainer.querySelectorAll(".orario-evento-programma")[0];
            let descrizioneSpan = eventoContainer.querySelectorAll(".descrizione-evento-programma")[0];

            let ora = dataJSON.columns.orario[index];

            let oraTranslated;

            // se l'ora/minuti è meno di 10, allora si aggiunge uno 0 prima
            if (ora < 10) {
                oraTranslated = "0" + ora + ":" + "00";
            } else {
                oraTranslated = ora + ":" + "00";
            }

            orarioSpan.textContent = oraTranslated; /* dataJSON.columns.orario[index]; */
            descrizioneSpan.textContent = dataJSON.columns.evento[index];

            document.getElementById("programma-table-container").appendChild(eventoContainer);
        });
    });

const WikiUrlApi = "https://en.wikipedia.org/api/rest_v1/page/summary/Stack_Overflow";

fetch(WikiUrlApi)
    .then((response) => {
        return response.json();
    })
    .then((dataJSON) => {
        console.log(dataJSON);
    });