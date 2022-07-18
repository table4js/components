import { IDataProvider } from "./data-provider";

export class ArrayDataProvider implements IDataProvider {
    constructor(public data: Array<any>) {

    }

    filtered(filters, data) {
        return data?.filter(row => 
            filters.every(f => {
                switch(f.op) {
                    case "EQ": return f.value.includes(row[f.field]); 
                    case "C": return f.field ? ~row[f.field].toString().toUpperCase().indexOf(f.value.toUpperCase()) : Object.keys(row).some(k => ~row[k].toString().toUpperCase().indexOf(f.value.toUpperCase()));
                    case "ISN":  return !(row[f.field]); 
                    case "ISNN":  return !!(row[f.field]); 
                    default: return true; 
                }
            })
        ) ?? [];
    }

    getData(limit, offset, order, filters, key, back, callback) {
        function sortfunc(a, b) {
            for (let i = 0; i < order.length; i++) {
                if (a[order[i].field] === b[order[i].field]) continue;
                return (a[order[i].field] > b[order[i].field] ? 1 : -1) * (order[i].desc ? -1 : 1);
            }
            return 0;
        }
        (order.length > 0) && this.data.sort(sortfunc);
        let result = [];
        const filteredData = this.filtered(filters, this.data);
        for (var i = offset > 0 ? offset : 0; i < offset + limit && filteredData && i < filteredData.length; i++) {
            result.push(filteredData[i]);
        }
        // setTimeout(function(){
        //     console.log('2-секундная задержка прошла');
        //     callback(result, offset + limit, filteredData.length, back)
        // }, 2000);
        callback(result, offset + limit, filteredData.length, back);
    }

    getSummary(func, field, filters, callback) {
        const filteredData = this.filtered(filters, this.data);
        let result = filteredData.length ? filteredData[0][field] : false;
        let sum = 0, count = 0, uniques = [];
        this.data.forEach(row => {
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
    }

    getColumnData(columnName, filter, limit, offset, callback) {
        let result = [], uniques = [];
        const filteredData = this.data.map(row => {
            if ((!(filter) || ~row[columnName].toUpperCase().indexOf(filter.toUpperCase())) && !uniques.includes(row[columnName])) { uniques.push(row[columnName]); };
        });
        for (var i = offset > 0 ? offset : 0; i < offset + limit && uniques && i < uniques.length; i++) {
            result.push(uniques[i]);
        }
        callback(result);
    }

    saveData(keyName:string, key:any, modify:{}) {
        Object.keys(modify).forEach( p=> this.data.find(r => r[keyName] == key)[p] = modify[p]);
        return true;
    }

    insertData(keyName:string, modify:{}) {
        console.log(modify);
        modify[keyName] = this.data.length + 1;
        this.data.push(modify);
        return true;
    }

    deleteData(keyName:string, keys:any[], callback) {
        keys.forEach(k => this.data.find(r => this.data.splice(this.data.indexOf(this.data.find(r => r[keyName] == k)),1)))
        console.log(this.data);
        callback(true);
    } 

}