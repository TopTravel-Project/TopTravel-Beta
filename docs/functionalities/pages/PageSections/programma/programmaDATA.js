const url = "https://sheetdb.io/api/v1/ugfngdyqadjky";
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((dataJSON) => {
        dataJSON.forEach((item, index) => {
            console.log(dataJSON[index].evento);
        })
    });