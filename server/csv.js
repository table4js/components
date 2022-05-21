
const csv = require('csv-parser');

module.exports.getData = function (params, connector) {
    function sortfunc (a,b) {
        for (let i=0; i<params.order.length; i++) {
            if(a[params.order[i].field] === b[params.order[i].field]) continue;
            return (a[params.order[i].field] > b[params.order[i].field] ? 1 :-1) * (params.order[i].desc ? -1 : 1);
        }
        return 0;
    }
    (params.order.length > 0) && connector.dataArray.sort(sortfunc);
    let result = [];
    for(var i = params.offset > 0 ? params.offset : 0; i < params.offset + params.limit && connector.dataArray && i < connector.dataArray.length; i++) {
        result.push( Object.assign({}, connector.defaultRow, connector.dataArray[i]));
    }
    return {code: 200, data: JSON.stringify({data: result, count: connector.dataArray.length})};
}

module.exports.read = function (params, property){
    function typeCasting(object, property) {
        Object.keys(object).forEach(name => {
            if(property.filter(p=>p.name === name)[0].type === "number"){
                object[name] = Number(object[name]);
            }
        });
        return object;
    }

    const results = [];
    const fs = require("fs");
    fs.createReadStream(`./data/${params.fileName}`)
    .pipe(csv({separator: params.separator, headers: params.headers}))
    .on('data', (data) => results.push(typeCasting(data, property)))
    .on('end', () => params.dataArray = results);
}
