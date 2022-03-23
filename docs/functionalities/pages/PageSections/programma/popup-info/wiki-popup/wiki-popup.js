const wikiUrl = 'https://' +
    "it" +
    ".wikipedia.org" +
    "/w/api.php" +
    "?action=query" +
    "&format=json" +
    "&prop=extracts" + "|pageimages" + /* categories|categoryinfo|contributors|deletedrevisions|duplicatefiles|extlinks|fileusage|imageinfo|images|info|iwlinks|langlinks|links|linkshere|pageprops|redirects|revisions|stashimageinfo|templates|transcludedin */
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
                .split(".")[0]; /* get the first words in the string, so after the first . delete all the next word, so don't get me description word*/ ;

            console.log("wikiDescrizioneModified: " + wikiDescrizioneModified);
            wikiLongDescrizipone.innerHTML = wikiDescrizioneModified;

            wikiButton.href = "https://it.wikipedia.org/?curid=" + nome_query;


            let wikiImage = document.querySelectorAll(".wiki-image")[index];

            let wikiImageUrl = dataJSON
                .query
                .pages[nome_query]
                .thumbnail
                .source;

            let wikiImageUrlModified = wikiImageUrl.replace(/50px/, "1000px");

            wikiImage.src = wikiImageUrlModified;
        });

}