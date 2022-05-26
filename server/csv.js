
const csv = require('csv-parser');

module.exports.getSummary = function (params, connector) {
    let result = connector.dataArray[0][params.field], sum = 0, count = 0, uniques = [];
    connector.dataArray.forEach(row => {
        switch(params.func){
            case "sum": result = result + row[params.field]; break;
            case "avg": sum = sum + row[params.field]; count++; result = sum / count; break;
            case "min": result = result < row[params.field] ? result : row[params.field]; break;
            case "max": result = result > row[params.field] ? result : row[params.field]; break;
            case "count": if(row[params.field]) count++; result = count; break;
            case "unique": if(!uniques.includes(row[params.field])) {uniques.push(row[params.field]);} result = uniques.length; break; 
            default: break;
        }
    })
    return {code: 200, data: JSON.stringify({data: result})};
}

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
    const filteredData = connector.dataArray.filter(row => {
        let ret = true;
        params.filters.forEach(f => {
            let accept = true;
            switch(f.op) {
                case "EQ": accept = f.value.includes(row[f.field]); break;
                case "C":  accept = ~row[f.field].toUpperCase().indexOf(f.value.toUpperCase()); break;
                case "ISN":  accept = !(row[f.field]); break;
                case "ISNN":  accept = !!(row[f.field]); break;
                default: accept = true; break;
            }
            if (!accept) ret = false;
        });
        return ret;
    });
    for(var i = params.offset > 0 ? params.offset : 0; i < params.offset + params.limit && filteredData && i < filteredData.length; i++) {
        result.push(filteredData[i]);
    }
    return {code: 200, data: JSON.stringify({data: result, count: filteredData.length})};
}

module.exports.getColumnData = function (params, connector) {
    let result = [], uniques = [];
    const filteredData = connector.dataArray.map(row => {
        if((!(params.filter) || ~row[params.columnName].toUpperCase().indexOf(params.filter.toUpperCase())) && !uniques.includes(row[params.columnName])) {uniques.push(row[params.columnName]);};
    });
    for(var i = params.offset > 0 ? params.offset : 0; i < params.offset + params.limit && uniques && i < uniques.length; i++) {
        result.push(uniques[i]);
    }
    return {code: 200, data: JSON.stringify({data: result})};
}

module.exports.read = function (connector, property){
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
    fs.createReadStream(`./data/${connector.fileName}`)
    .pipe(csv({separator: connector.separator, headers: connector.headers}))
    .on('data', (data) => results.push(typeCasting( Object.assign({}, connector.defaultRow, data), property)))
    .on('end', () => connector.dataArray = results);
}
