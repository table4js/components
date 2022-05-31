async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch("http://127.0.0.1:3000/" + url, {
        //   mode: 'cors', // no-cors, *cors, same-origin
        //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //   credentials: 'same-origin', // include, *same-origin, omit
        //   redirect: 'follow', // manual, *follow, error
        //   referrerPolicy: 'no-referrer', // no-referrer, *client
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    let res = await response.json();
    return res;
}

async function main (){
    const fs = require("fs");
    const standard = fs.readFileSync("./standard.txt", "utf8").split("\n");
    const testCollection = JSON.parse(fs.readFileSync("./testCollection.json", "utf8"));
    let rowNumber = 1;
    let isOk = true;
    fs.writeFileSync("./response.txt", "Start \n\n");
    fs.writeFileSync("difference.txt", "Start \n\n");
    for (let i=0; i<testCollection.length; i++ ){
        let t = testCollection[i];
        let res = await postData(t.url, t.data);
        let row;
        row =  `Metod -> ${t.url}`;
        if (row !== standard[++rowNumber]) {
            isOk = false;
            fs.appendFileSync("difference.txt",`Error -> ${rowNumber}\n${row}\n${standard[rowNumber]}\n\n`);
        }
        fs.appendFileSync("./response.txt", row + "\n"); 
        row =  `Data -> ${JSON.stringify(t.data)}`;
        if (row !== standard[++rowNumber]) {
            isOk = false;
            fs.appendFileSync("difference.txt",`Error -> ${rowNumber}\n${row}\n${standard[rowNumber]}\n\n`);
        }
        fs.appendFileSync("./response.txt", row + "\n"); 
        row = `Response ->${JSON.stringify(res)}`
        if (row !== standard[++rowNumber]) {
            isOk = false;
            fs.appendFileSync("difference.txt",`Error -> ${rowNumber}\n${row}\n${standard[rowNumber]}\n\n`);
        }
        fs.appendFileSync("./response.txt", row + "\n\n"); 
        rowNumber++;
    }
    return await isOk;
}

async function start (){
    console.log(await main());
}

start();
