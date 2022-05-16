const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

function streamToString (stream) {
    const chunks = [];
    return new Promise((resolve, reject) => {
      stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      stream.on('error', (err) => reject(err));
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    })
  }

const server = http.createServer((req, res) => { 
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === "POST") {
        (async ()=>{
            let body = await streamToString(req);
            let result = "";
            if (body) {
                switch (req.url.substring(1)) {
                    case "getData":  result = getData(JSON.parse(body)); break;
                    case "getModel": result = getModel(JSON.parse(body)); break;
                    default: result = `{"err": "Incorrect method name"}`; break;
                }
            }
            res.setHeader('Content-Type', 'application/json');
            res.end(result);
        })();
    }
    else {
        res.end();
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


function getData(params) {
    let result = [];
    for(var i = params.offset > 0 ? params.offset : 0; i < params.offset + params.limit && i < dataArray.length; i++) {
        let row = dataArray[i].split(";");
        result.push({ id: i, col1: row[0], col2: row[1] });
    }
    return JSON.stringify({data: result, count: dataArray.length});
} 

function getModel(name) {
    const fs = require("fs");
    readTestCsv();
    let buffer = fs.readFileSync("./model/test.jsonc", "utf8");
    const re = new RegExp("\/\/(.*)","g");
    buffer = buffer.replace(re,'');    
    let model  = JSON.parse(buffer);
    let property = model.property;
    return JSON.stringify(property);
} 

var dataArray = [];
function readTestCsv(){
    const fs = require("fs");
    let csv = fs.readFileSync("./data/test.csv", "utf8");
    dataArray = csv.split(/\r?\n/);
}