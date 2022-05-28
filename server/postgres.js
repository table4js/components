const Pool = require('pg').Pool;

/**
 * Filters data.
 * 
 * @param params parameters passed in the request
 * @param params.field column name
 * @param params.filters array with column values of functions and filter values
 * @param connector connected data source 
 * @returns query filter substring
 */
 function createFilter(params, connector){
    function arrayStringify(arr){
        let ret = "";
        arr.forEach(e => ret = (ret ? `${ret}, '${e}'`: `'${e}'`));
        return `(${ret})`;
    }
    let tableFilter = "";
    params.filters.forEach(f => {
        tableFilter = (tableFilter ? tableFilter + " AND " : "" );
        switch(f.op) {
            case "EQ": tableFilter = tableFilter + ` "${f.field.replace('"', '""')}" IN ${arrayStringify(f.value)} `; break;
            case "C":
                if (f.field) tableFilter = tableFilter + ` "${f.field.replace('"', '""')}" ILIKE '%${f.value.replace("'", "''")}%' `;
                else  {
                    tableFilter = tableFilter + "(";
                    connector.columns.forEach((c, i, a)=> tableFilter = tableFilter + ` "${c.replace('"', '""')}"::TEXT ILIKE '%${f.value.replace("'", "''")}%' ${i<a.length-1? " OR ": ""} `);
                    tableFilter = tableFilter + ")";
                }
                break;
            case "ISN":  tableFilter = tableFilter + ` "${f.field.replace('"', '""')}" IS NULL `; break;
            case "ISNN":  tableFilter = tableFilter + ` "${f.field.replace('"', '""')}" IS NOT NULL `; break;
        }
    })
    return (tableFilter ? " WHERE " + tableFilter : "" );
}

/**
 * Gets data with single column summary.
 * 
 * @param params parameters passed in the request
 * @param params.field column name
 * @param params.func the name of the function for calculating the summary
 * @param connector connected data source 
 * @param dataSourses data source
 * @returns an object with data prepared for sending or an object with an error description
 */
 module.exports.getSummary = async function (params, connector, dataSourses) {
    let result
    let tableFilter = createFilter(params, connector);
    result = (params.func === "unique")
        ? await dataSourses.pool(connector.dataSource).query(`SELECT count(DISTINCT "${params.field.replace('"', '""')}") as value FROM (${connector.templateSQL}) t ${tableFilter}`)
        : await dataSourses.pool(connector.dataSource).query(`SELECT ${params.func}("${params.field.replace('"', '""')}") as value FROM (${connector.templateSQL}) t ${tableFilter}`);
    return {code: 200, data: JSON.stringify({data: result.rows[0].value})};
}

/**
 * Gets data from the specified range.
 * 
 * @param params parameters passed in the request
 * @param params.order list with columns and sort direction
 * @param params.offset number of row to be skipped before starting data transfer
 * @param params.limit number of transmitted data 
 * @param connector connected data source 
 * @param dataSourses data source
 * @returns an object with data prepared for sending or an object with an error description
 */
 module.exports.getData = async function (params, connector, dataSourses){
    let order = null;
    params.order.reverse().forEach(e => {
        order = (order ? order + ", " : " ORDER BY ") + e.field + (e.desc ? " desc " : " asc ");
    });
    let tableFilter = createFilter(params, connector);
    // console.log (`SELECT * FROM (${connector.templateSQL}) t ${tableFilter} LIMIT $1 OFFSET $2`);
    try {
        let result = await dataSourses.pool(connector.dataSource).query(`SELECT * FROM (${connector.templateSQL}) t ${tableFilter}  LIMIT $1 OFFSET $2`, [params.limit, params.offset]);
        let count = await dataSourses.pool(connector.dataSource).query(`SELECT count(*) as value from (${connector.templateSQL}) t ${tableFilter}`);
        return {code: 200, data: JSON.stringify({data: result.rows, count: count.rows[0].value})};
    }
    catch(err){
        console.log("ERROR -> ", err.message);
        return {code: 501, data: JSON.stringify({err: err.message})};
    }
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
 * @param dataSourses data source
 * @returns an object with data prepared for sending or an object with an error description
 */
 module.exports.getColumnData = async function (params, connector, dataSourses) {
    const tableFilter =params.filter ? ` WHERE "${params.columnName.replace('"', '""')}" ILIKE '%${params.filter.replace("'", "''")}%' ` : "";
    try {
        let result = await dataSourses.pool(connector.dataSource).query(`SELECT DISTINCT "${params.columnName}" AS value FROM (${connector.templateSQL}) t ${tableFilter}  LIMIT $1 OFFSET $2`, [params.limit, params.offset]);
        return {code: 200, data: JSON.stringify({data: result.rows.map(r => r.value)})};
    }
    catch(err){
        console.log("ERROR -> ", err.message);
        return {code: 501, data: JSON.stringify({err: err.message})};
    }
}

/**
 * creates a database connection.
 * 
 * @param dataSourses data source
 * @param name projection name
 */
 module.exports.createPool = function (dataSourses, name) {
    if (!dataSourses.pools[name]) {
        dataSourses.pools[name] = new Pool({
            user: dataSourses.list[name].user,
            password: dataSourses.list[name].password,
            port: dataSourses.list[name].port,
            host: dataSourses.list[name].host,
            database: dataSourses.list[name].database
        })
    }
}
