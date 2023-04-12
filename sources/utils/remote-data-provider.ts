import { IFilterItem } from "../core/find";
import { IDataProvider } from "./data-provider";

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

    getData(limit: number, offset: number, order: any[], key: any, back: boolean, callback: (data: any, start: number, coumt: number, back: boolean) => void) {
        postData(this.url + "getData", { name: this.name, limit: limit, offset: offset, order: order, filters: this.filter, key: key, }).then((data) => {
            callback(data.data, offset + limit, data.count, back);
        });
    }
    getSummary(func: string, field: string, callback: (value: any) => void) {
        postData(this.url + "getSummary", { name: this.name, func: func, field: field, filters: this.filter }).then((data) => {
            callback(data.data);
        });
    }
    getColumnData(columnName: string, filter: any, limit: number, offset: number, callback: (value: any) => void) {
        postData(this.url + "getColumnData", { name: this.name, columnName: columnName, filter: filter, limit: limit, offset: offset }).then((data) => {
            callback(data.data);
        });
    }

    get(keyName: string,  key: any, callback: (data: any) => void): void {
        postData(this.url + "get", { name: this.name, keyName: keyName, key: key }).then((data) => {
            callback(data.data);
        });
    }
    update(keyName: string,  key: any, modify: { }, callback: (data: any) => void): void {
        postData(this.url + "update", { name: this.name, keyName: keyName, key: key, modify: modify }).then((data) => {
            callback(data.data);
        });
    }
    create(keyName: string, modify: {}, callback: (data: any) => void): void {
        postData(this.url + "create", { name: this.name, keyName: keyName, modify: modify }).then((data) => {
            callback(data.data);
        });
    }
    delete(keyName: string, keys: any[], callback: (data: any) => void): void {
        postData(this.url + "delete", { name: this.name, keyName: keyName, keys: keys }).then((data) => {
            callback(data.data);
        });
    }

    filter: IFilterItem[] = [];
}