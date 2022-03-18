const url = "https://sheetdb.io/api/v1/ugfngdyqadjky";
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((dataJSON) => {
        dataJSON.forEach((item, index) => {
            /* every item, create a new html element and put the dataJSON[index].evento inside it */
            let newElement = document.createElement("div");
            newElement.innerHTML = dataJSON[index].evento;

            document.getElementById("programma-container").appendChild(newElement);

            console.log(dataJSON[index].evento);
        })
    });