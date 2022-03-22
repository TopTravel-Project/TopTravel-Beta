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

function setWikiDataHTML(nome_query, index) {
    let wikiUrlApi = wikiUrl + nome_query;

    console.log("✅✅✅ " + wikiUrlApi);

    fetch(wikiUrlApi)
        .then((response) => {
            return response.json();
        })
        .then((dataJSON) => {
            console.log(dataJSON);
            let wikiLongDescrizipone = document.querySelectorAll(".wiki-long-descrizione")[index];
            let wikiButton = document.querySelectorAll(".wiki-button")[index];


            let wikiDescrizioneModified = dataJSON
                .query
                .pages[nome_query]
                .extract
                .replace(/\./g, ".<br>");
            wikiLongDescrizipone.innerHTML = wikiDescrizioneModified;

            wikiButton.href = "https://it.wikipedia.org/?curid=" + nome_query;
        });



    let wikiImageUrlApi = "https://it.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&redirects=true&origin=*&pageids=" +
        nome_query;

    fetch(wikiImageUrlApi)
        .then((response) => {
            return response.json();
        }).then((dataJSON) => {
            let wikiImage = document.querySelectorAll(".wiki-image")[index];

            let wikiImageUrl = dataJSON
                .query
                .pages[nome_query]
                .thumbnail
                .source;

            wikiImage.src = wikiImageUrl;
        })
}