const Pool = require('pg').Pool;

module.exports.getSummary = async function (params, connector, dataSourses) {
    let result = await dataSourses.pool(connector.dataSource).query(`SELECT ${params.func}(${params.field}) as value from (${connector.templateSQL}) t `);
    return {code: 200, data: JSON.stringify({data: result.rows[0].value})};
}

module.exports.getData = async function (params, connector, dataSourses){
    let order = null;
    params.order.reverse().forEach(e => {
        order = (order ? order + ", " : " ORDER BY ") + e.field + (e.desc ? " desc " : " asc ");
    });
    let result = await dataSourses.pool(connector.dataSource).query(connector.templateSQL + (order ? order : " ") +  " LIMIT $1 OFFSET $2", [params.limit, params.offset]);
    let count = await dataSourses.pool(connector.dataSource).query(connector.countSQL);
    return {code: 200, data: JSON.stringify({data: result.rows, count: count.rows[0].count})};
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
