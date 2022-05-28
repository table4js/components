
const csv = require('csv-parser');

/**
 * Filters data.
 * 
 * @param params parameters passed in the request
 * @param params.field column name
 * @param params.filters array with column values of functions and filter values
 * @param connector connected data source 
 * @returns filtered array
 */
 function filtered(params, connector) {
    return connector.dataArray?.filter(row => 
        params.filters.every(f => {
            switch(f.op) {
                case "EQ": return f.value.includes(row[f.field]); 
                case "C": return f.field ? ~row[f.field].toString().toUpperCase().indexOf(f.value.toUpperCase()) : Object.values(row).some(r=> ~r.toString().toUpperCase().indexOf(f.value.toUpperCase()));
                case "ISN":  return !(row[f.field]); 
                case "ISNN":  return !!(row[f.field]); 
                default: return true; 
            }
        })
    ) ?? [];
} 

/**
 * Gets data with single column summary.
 * 
 * @param params parameters passed in the request
 * @param params.field column name
 * @param params.func the name of the function for calculating the summary
 * @param connector connected data source 
 * @returns an object with data prepared for sending or an object with an error description
 */
 module.exports.getSummary = function (params, connector) {
    const filteredData = filtered(params, connector);
    let result = filteredData.length ? filteredData[0][params.field] : false;
    let sum = 0, count = 0, uniques = [];
    filteredData.forEach(row => {
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

/**
 * Gets data from the specified range.
 * 
 * @param params parameters passed in the request
 * @param params.order list with columns and sort direction
 * @param params.offset number of row to be skipped before starting data transfer
 * @param params.limit number of transmitted data 
 * @param connector connected data source 
 * @returns an object with data prepared for sending or an object with an error description
 */
 module.exports.getData = function (params, connector) {
    function sortfunc (a,b) {
        for (let i=0; i<params.order.length; i++) {
            if(a[params.order[i].field] === b[params.order[i].field]) continue;
            return (a[params.order[i].field] > b[params.order[i].field] ? 1 :-1) * (params.order[i].desc ? -1 : 1);
        }
        return 0;
    }
    (params.order.length > 0) && connector.dataArray?.sort(sortfunc);
    let result = [];
    const filteredData = filtered(params, connector);
    for(var i = params.offset > 0 ? params.offset : 0; i < params.offset + params.limit && filteredData && i < filteredData.length; i++) {
        result.push(filteredData[i]);
    }
    return {code: 200, data: JSON.stringify({data: result, count: filteredData.length})};
}

/**
 * Gets data from one column. Used to dynamically filter data.
 * 
 * @param params parameters passed in the request
 * @param params.columnName column name
 * @param params.filter a string containing the filter value for this column
 * @param params.offset number of row to be skipped before starting data transfer
 * @param params.limit number of transmitted data 
 * @param connector connected data source 
 * @returns an object with data prepared for sending or an object with an error description
 */
 module.exports.getColumnData = function (params, connector) {
    let result = [], uniques = [];
    const filteredData = connector.dataArray?.map(row => {
        if((!(params.filter) || ~row[params.columnName].toString().toUpperCase().indexOf(params.filter.toUpperCase())) && !uniques.includes(row[params.columnName])) {uniques.push(row[params.columnName]);};
    }) ?? [];
    for(var i = params.offset > 0 ? params.offset : 0; i < params.offset + params.limit && uniques && i < uniques.length; i++) {
        result.push(uniques[i]);
    }
    return {code: 200, data: JSON.stringify({data: result})};
}

/**
 * Reads given data from csv file.
 * 
 * @param params parameters passed in the request
 * @param connector connected data source 
 * @param property an array with a description of the properties of the projection (columns) 
 * @returns 1 on success and 0 on error
 */
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
    try{
        fs.createReadStream(`./data/${connector.fileName}`)
        .pipe(csv({separator: connector.separator, headers: connector.headers}))
        .on('data', (data) => results.push(typeCasting( Object.assign({}, connector.defaultRow, data), property)))
        .on('end', () => connector.dataArray = results);
        return 1;
    }
    catch{
        return 0;
    }
}
