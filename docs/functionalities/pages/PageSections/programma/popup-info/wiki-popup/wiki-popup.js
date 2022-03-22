/* const wikiUrl = "https://en.wikipedia.org/api/rest_v1/page/summary/"; */
const wikiUrl = 'https://' +
    "it" +
    ".wikipedia.org" +
    "/w/api.php" +
    "?action=query" +
    "&format=json" +
    "&prop=extracts" +
    "&redirects=true" +
    "&explaintext" +
    "&exsectionformat=plain" +
    "&origin=*" +
    "&pageids=";
console.log("wikiUrl: " + wikiUrl);

function setWikiDataHTML(nome_query, index) {
    let wikiUrlApi = wikiUrl + nome_query;

    console.log("✅✅✅ " + wikiUrlApi);

    fetch(wikiUrlApi)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            /* let wikiTitolo = document.querySelectorAll(".wiki-titolo")[index]; */
            /*  let wikiMiniDescrizione = document.querySelectorAll(".wiki-mini-descrizione")[index]; */
            let wikiLongDescrizipone = document.querySelectorAll(".wiki-long-descrizione")[index];
            let wikiImage = document.querySelectorAll(".wiki-image")[index];
            let wikiButton = document.querySelectorAll(".wiki-button")[index];

            wikiLongDescrizipone.textContent = dataJSON.extract;
            wikiButton.href = "https://it.wikipedia.org/?curid=" + nome_query;
            /*  wikiTitolo.textContent = dataJSON.title; */
            /* wikiMiniDescrizione.textContent = dataJSON.description; */
            /* wikiImage.src = dataJSON.thumbnail.source; */
        });
}