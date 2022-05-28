const http = require('http');
const CSV = require("./csv");
const Postgres = require("./postgres")

const hostname = '127.0.0.1';
const port = 3000;

/**
 * Reads a stream and converts it to a string.
 * 
 * @param stream an incomplete request whose header has already been queued..
 * @returns string containing the request body
 * 
 */
function streamToString (stream) {
    const chunks = [];
    return new Promise((resolve, reject) => {
      stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
      stream.on('error', (err) => reject(err));
      stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    })
  }
/**
 * Main Server
 */
 const server = http.createServer(async (req, res) => { 
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === "POST") {
        (async ()=>{
            let result, body = await streamToString(req);
            if (body) {
                console.log(JSON.stringify({"url":req.url.substring(1), "data":JSON.parse(body)}), ",");
                switch (req.url.substring(1)) {
                    case "getData":  result = await getData(JSON.parse(body)); break;
                    case "getModel": result = await getModel(JSON.parse(body)); break;
                    case "getSummary": result = await getSummary(JSON.parse(body)); break;
                    case "getColumnData": result = await getColumnData(JSON.parse(body)); break;
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

/**
 * Container for storing data models. They contain a declarative description of data projections for building user interface concepts.
 * 
 */
 const models = {
    /**
     * Container for storing data models. They contain a declarative description of data projections for building user interface concepts.
     * 
     * @param name projection name
     * @returns declarative description of the projection
     */
    async get (name) {
        const fs = require("fs").promises;
        if (!models[name]) {
            try {
                models[name] = JSON.parse(await fs.readFile(`./model/${name}.json`, "utf8"));
            } catch { return false;}
        }
        return models[name];
    }
}

/**
 * Container for storing pools to data sources.
 * 
 */
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

/**
 * Gets data from one column. Used to dynamically filter data.
 * 
 * @param params parameters passed in the request
 * @param params.name projection name
 * @returns an object with data prepared for sending or an object with an error description
 */
async function getColumnData(params) {
    let connector = (await models.get(params.name)).connector;
    switch(connector.type) {
        case "csv": return CSV.getColumnData(params, connector); 
        case "postgres": return await Postgres.getColumnData(params, connector, dataSourses);
        default: return {code: 501, data: JSON.stringify({err: `Incorrect model name - ${params.name}`})}; 
    }
} 

/**
 * Gets data with single column summary.
 * 
 * @param params parameters passed in the request
 * @param params.name projection name
 * @returns an object with data prepared for sending or an object with an error description
 */
 async function getSummary(params) {
    let connector = (await models.get(params.name)).connector;
    switch(connector.type) {
        case "csv": return CSV.getSummary(params, connector); 
        case "postgres": return await Postgres.getSummary(params, connector, dataSourses);
        default: return {code: 501, data: JSON.stringify({err: `Incorrect model name - ${params.name}`})}; 
    }
} 

/**
 * Gets data from the specified range.
 * 
 * @param params parameters passed in the request
 * @param params.name projection name
 * @returns an object with data prepared for sending or an object with an error description
 */
 async function getData(params) {
    let connector = (await models.get(params.name)).connector;
    switch(connector && connector.type) {
        case "csv": return CSV.getData(params, connector); 
        case "postgres": return await Postgres.getData(params, connector, dataSourses);
        default: return {code: 501, data: JSON.stringify({err: `Incorrect model name - ${params.name}`})}; 
    }
} 

/**
 * Gets a declarative description of the projection.
 * 
 * @param params parameters passed in the request
 * @param params.name projection name
 * @returns an object with data prepared for sending or an object with an error description
 */
 async function getModel(params) {
    let model = await models.get(params.name); 
    switch(model && model.connector.type) {
        case "csv": CSV.read(model.connector, model.property); break; 
        case "postgres": Postgres.createPool(dataSourses, model.connector.dataSource); model.connector.columns = model.property.map(e=>e.name);  break;
        default: return {code: 501, data: JSON.stringify({err: `Incorrect model name - ${params.name}`})}; 
    }
    return {code: 200, data: JSON.stringify(model.property)};
} 



