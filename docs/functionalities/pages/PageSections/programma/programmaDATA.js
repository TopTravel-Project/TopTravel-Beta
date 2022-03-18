const url = "https://sheetdb.io/api/v1/ugfngdyqadjky";
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((dataJSON) => {
        console.log(dataJSON.orario);
        let programmaOrarioArray = Object.keys(dataJSON.orario);
        console.log(programmaOrarioArray);
    });