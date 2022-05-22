const http = require('http');
const CSS = require("./csv");
const Postgres = require("./postgres")

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

const server = http.createServer(async (req, res) => { 
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === "POST") {
        (async ()=>{
            let result, body = await streamToString(req);
            if (body) {
                switch (req.url.substring(1)) {
                    case "getData":  result = await getData(JSON.parse(body)); break;
                    case "getModel": result = await getModel(JSON.parse(body)); break;
                    case "getSummary": result = await getSummary(JSON.parse(body)); break;
                    default: result = {code: 405, data: `{"err": "Incorrect method name"}`}; break;
                }
            }
            res.statusCode = result.code;
            res.setHeader('Content-Type', 'application/json');
            res.end(result.data);
        })();
    }
    else {
        res.end();
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const models = {
    async get (name) {
        const fs = require("fs").promises;
        if (!models[name]) {
            models[name] = JSON.parse(await fs.readFile(`./model/${name}.json`, "utf8"));
        }
        return models[name];
    }
}


const dataSourses = {
    list: {},
    pools: {},
    async load () {
        const fs = require("fs").promises;
        dataSourses.list =  JSON.parse(await fs.readFile("./model/data_sources.json", "utf8"));
    },
    pool (name) {
        return this.pools[name];
    } 
};
dataSourses.load();

async function getSummary(params) {
    let connector = (await models.get(params.name)).connector;
    switch(connector.type) {
        case "csv": return CSS.getSummary(params, connector); 
        case "postgres": return await Postgres.getSummary(params, connector, dataSourses);
        default: return {code: 501, data: "{'err': 'Incorrect connector type'}"}; 
    }
} 

async function getData(params) {
    let connector = (await models.get(params.name)).connector;
    switch(connector.type) {
        case "csv": return CSS.getData(params, connector); 
        case "postgres": return await Postgres.getData(params, connector, dataSourses);
        default: return {code: 501, data: "{'err': 'Incorrect connector type'}"}; 
    }
} 


async function getModel(params) {
    let model = await models.get(params.name); 
    switch(model.connector.type) {
        case "csv": CSS.read(model.connector, model.property); break; 
        case "postgres": Postgres.createPool(dataSourses, model.connector.dataSource); break;
        default: return {code: 501, data: "{'err': 'Incorrect model name'}"}; 
    }
    return {code: 200, data: JSON.stringify(model.property)};
} 



