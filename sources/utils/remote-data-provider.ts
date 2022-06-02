import { IDataProvider } from "./array-data-provider";

export async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        //   mode: 'cors', // no-cors, *cors, same-origin
        //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //   credentials: 'same-origin', // include, *same-origin, omit
        //   redirect: 'follow', // manual, *follow, error
        //   referrerPolicy: 'no-referrer', // no-referrer, *client
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

export class RemoteDataProvider implements IDataProvider {
    constructor(public name: string, public url: string) {

    }

    getData(limit: number, offset: number, order: any[], filters: any[], key: any, back: boolean, callback: (data: any, start: number, coumt: number, back: boolean) => void) {
        postData(this.url + "getData", { name: this.name, limit: limit, offset: offset, order: order, filters: filters, key: key, }).then((data) => {
            callback(data.data, offset + limit, data.count, back);
        });
    }
    getSummary(func: string, field: string, filters: any[], callback: (value: any) => void) {
        postData(this.url + "getSummary", { name: this.name, func: func, field: field, filters: filters }).then((data) => {
            callback(data.data);
        });
    }
    getColumnData(columnName: string, filter: any, limit: number, offset: number, callback: (value: any) => void) {
        postData(this.url + "getColumnData", { name: this.name, columnName: columnName, filter: filter, limit: limit, offset: offset }).then((data) => {
            callback(data.data);
        });
    }
}