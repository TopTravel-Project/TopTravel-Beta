let eventoContainerTemplate = document.querySelectorAll(".programma-template")[0];
let wikiContainerTemplate = document.querySelectorAll(".programma-template")[1];

const ExcelUrlApi = "https://gsx2json.com/api?id=14uIKI2cUcjHNnQYxGMLArBByRnJIImOps-kPk6ugZNw&sheet=Foglio1";
fetch(ExcelUrlApi)
    .then((response) => {
        return response.json();
    })
    .then((dataJSON) => {
        console.log(dataJSON);
        dataJSON.columns.orario.forEach((item, index) => {
            let eventoContainer = eventoContainerTemplate.content.cloneNode(true);
            let wikiContainer = wikiContainerTemplate.content.cloneNode(true);

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

            let wikiString = dataJSON.columns.wiki[index];

            if (wikiString != "FALSE") {
                document.getElementById("programma-table-container").appendChild(wikiContainer);
                document.querySelectorAll(".wikipedia-evento-container")[index].style.display = "grid";
                setWikiDataHTML(wikiString, index);

                document.querySelectorAll(".evento-first-component")[index].classList.add("has-wiki");
            } else {
                document.getElementById("programma-table-container").appendChild(wikiContainer);
                document.querySelectorAll(".evento-first-component")[index].classList.remove("has-wiki");

            }
        });
    });