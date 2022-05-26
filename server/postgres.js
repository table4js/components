const Pool = require('pg').Pool;

module.exports.getSummary = async function (params, connector, dataSourses) {
    let result
    result = (params.func === "unique")
        ? await dataSourses.pool(connector.dataSource).query(`SELECT count(DISTINCT "${params.field.replace('"', '""')}") as value FROM (${connector.templateSQL}) t `)
        : await dataSourses.pool(connector.dataSource).query(`SELECT ${params.func}("${params.field.replace('"', '""')}") as value FROM (${connector.templateSQL}) t `);
    return {code: 200, data: JSON.stringify({data: result.rows[0].value})};
}

module.exports.getData = async function (params, connector, dataSourses){
    function arrayStringify(arr){
        let ret = "";
        arr.forEach(e => ret = (ret ? `${ret}, '${e}'`: `'${e}'`));
        return `(${ret})`;
    }
    let order = null;
    params.order.reverse().forEach(e => {
        order = (order ? order + ", " : " ORDER BY ") + e.field + (e.desc ? " desc " : " asc ");
    });
    let tableFilter = "";
    params.filters.forEach(f => {
        tableFilter = (tableFilter ? tableFilter + " AND " : "" );
        switch(f.op) {
            case "EQ": tableFilter = tableFilter + ` "${f.field.replace('"', '""')}" IN ${arrayStringify(f.value)} `; break;
            case "C": tableFilter = tableFilter + ` "${f.field.replace('"', '""')}" ILIKE '%${f.value.replace("'", "''")}%' `; break;
            case "ISN":  tableFilter = tableFilter + ` "${f.field.replace('"', '""')}" IS NULL `; break;
            case "ISNN":  tableFilter = tableFilter + ` "${f.field.replace('"', '""')}" IS NOT NULL `; break;
        }
    })
    tableFilter = (tableFilter ? " WHERE " + tableFilter : "" );
    console.log (`SELECT * FROM (${connector.templateSQL}) t ${tableFilter} LIMIT $1 OFFSET $2`);
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
