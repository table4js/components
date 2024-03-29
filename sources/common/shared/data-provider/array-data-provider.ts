import { IFilterItem } from "../filter";
import { IDataProvider } from "./data-provider";
import { FilterOwner } from "./filter-owner";

export class ArrayDataProvider extends FilterOwner implements IDataProvider {
    constructor(private _data: Array<any>) {
        super();
    }

    ordered(order: Array<any>, data: Array<any> = []): Array<any> {
        function sortfunc(a, b) {
            for (let i = 0; i < order.length; i++) {
                if (a[order[i].field] === b[order[i].field]) continue;
                return (a[order[i].field] > b[order[i].field] ? 1 : -1) * (order[i].desc ? -1 : 1);
            }
            return 0;
        }
        const ordered = [].concat(data);
        if (order.length > 0) {
            ordered.sort(sortfunc);
        }
        return ordered;
    }

    filtered(filters: Array<IFilterItem>, data: Array<any> = []): Array<any> {
        return data.filter(row =>
            filters.every(f => {
                switch (f.op) {
                    case "EQ": return f.value.includes(row[f.field]);
                    case "C": return f.field ? ~row[f.field].toString().toUpperCase().indexOf(f.value.toUpperCase()) : Object.keys(row).some(k => !!(row[k] && row[k].toString().toUpperCase().indexOf(f.value.toUpperCase()) !== -1));
                    case "ISN": return !(row[f.field]);
                    case "ISNN": return !!(row[f.field]);
                    default: return true;
                }
            })
        ) ?? [];
    }

    getData(limit, offset, order, key, back, callback) {
        let result = this.ordered(order, this._data);
        const filtered = this.filtered(this.filter, result);
        result = filtered.slice(offset, offset + limit);
        callback(result, offset + limit, filtered.length, back);
    }

    getSummary(func, field, callback) {
        const filteredData = this.filtered(this.filter, this._data);
        let result = filteredData.length ? filteredData[0][field] : false;
        let sum = 0, count = 0, uniques = [];
        this._data.forEach(row => {
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
        const filteredData = this._data.map(row => {
            if ((!(filter) || ~row[columnName].toUpperCase().indexOf(filter.toUpperCase())) && !uniques.includes(row[columnName])) { uniques.push(row[columnName]); };
        });
        for (var i = offset > 0 ? offset : 0; i < offset + limit && uniques && i < uniques.length; i++) {
            result.push(uniques[i]);
        }
        callback(result);
    }

    get(keyName: string, key: any, callback: (data: any) => void): void {
        callback(this._data.filter(r => r[keyName] == key)[0]);
    }
    update(keyName: string, key: any, modify: {}, callback: (data: any) => void): void {
        Object.keys(modify).forEach(p => this._data.find(r => r[keyName] == key)[p] = modify[p]);
        callback(modify);
    }
    create(keyName: string, modify: {}, callback: (data: any) => void): void {
        modify[keyName] = this._data.length + 1;
        this._data.push(modify);
        callback(modify);
    }
    delete(keyName: string, keys: any[], callback: (data: any) => void): void {
        keys.forEach(k => this._data.find(r => this._data.splice(this._data.indexOf(this._data.find(r => r[keyName] == k)), 1)));
        callback(true);
    }

    get data(): Array<any> {
        return this._data;
    }
}