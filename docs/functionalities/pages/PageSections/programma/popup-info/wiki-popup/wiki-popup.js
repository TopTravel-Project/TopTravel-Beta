const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/";


function setWikiDataHTML(nome_query) {
    let wikiUrlApi = wikiUrl + nome_query;

    fetch(wikiUrlApi)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            let wikiTitolo = document.querySelectorAll(".wiki-titolo")[0];
            let wikiMiniDescrizione = document.querySelectorAll(".wiki-mini-descrizione")[0];
            let wikiLongDescrizipone = document.querySelectorAll(".wiki-long-descrizione")[0];
            let wikiImage = document.querySelectorAll(".wiki-image")[0];
            let wikiButton = document.querySelectorAll(".wiki-button")[0];

            wikiTitolo.textContent = dataJSON.title;
            wikiMiniDescrizione.textContent = dataJSON.description;
            wikiLongDescrizipone.textContent = dataJSON.extract;
            wikiImage.src = dataJSON.thumbnail.source;
            wikiButton.href = dataJSON.content_urls.desktop.page;
        });
}

setWikiDataHTML("Cristiano Ronaldo");