function ArrayDataProvider(data) {

    this.getViewModelData = function (limit, offset, order, filters, key, back, callback) {
        function sortfunc(a, b) {
            for (let i = 0; i < order.length; i++) {
                if (a[order[i].field] === b[order[i].field]) continue;
                return (a[order[i].field] > b[order[i].field] ? 1 : -1) * (order[i].desc ? -1 : 1);
            }
            return 0;
        }
        (order.length > 0) && data.sort(sortfunc);
        let result = [];
        const filteredData = data.filter(row => {
            let ret = true;
            filters.forEach(f => {
                let accept = true;
                switch (f.op) {
                    case "EQ": accept = f.value.includes(row[f.field]); break;
                    case "C": accept = ~row[f.field].toUpperCase().indexOf(f.value.toUpperCase()); break;
                    case "ISN": accept = !(row[f.field]); break;
                    case "ISNN": accept = !!(row[f.field]); break;
                }
                if (!accept) ret = false;
            });
            return ret;
        });
        for (var i = offset > 0 ? offset : 0; i < offset + limit && filteredData && i < filteredData.length; i++) {
            result.push(filteredData[i]);
        }
        callback(result, offset + limit, filteredData.length);
    };

    this.getViewModelSummary = function (func, field, callback) {
        let result = data[0][field], sum = 0, count = 0, uniques = [];
        data.forEach(row => {
            switch (func) {
                case "sum": result = result + row[field]; break;
                case "avg": sum = sum + row[field]; count++; result = sum / count; break;
                case "min": result = result < row[field] ? result : row[field]; break;
                case "max": result = result > row[field] ? result : row[field]; break;
                case "count": if (row[field]) count++; result = count; break;
                case "unique": if (!uniques.includes(row[field])) { uniques.push(row[field]); } result = uniques.length; break;
                default: break;
            }
        })
        callback(result);
    };

    this.getItems = (columnName, filter, limit, offset, callback) => {
        let result = [], uniques = [];
        const filteredData = data.map(row => {
            if ((!(filter) || ~row[columnName].toUpperCase().indexOf(filter.toUpperCase())) && !uniques.includes(row[columnName])) { uniques.push(row[columnName]); };
        });
        for (var i = offset > 0 ? offset : 0; i < offset + limit && uniques && i < uniques.length; i++) {
            result.push(uniques[i]);
        }
        callback(result);
    };
}