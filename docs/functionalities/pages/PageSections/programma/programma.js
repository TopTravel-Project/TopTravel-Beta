let eventoContainerTemplate = document.querySelectorAll(".programma-template")[0];
const url = "https://sheetdb.io/api/v1/ugfngdyqadjky";
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

            document.getElementById("programma-container").appendChild(eventoContainer);

        })
    });