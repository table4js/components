import { IFilterItem } from "../shared/find";

export interface IListDataProvider {
    getData(limit: number, offset: number, order: any[], key: null, back: boolean, callback: (data: any, newOffset: number, totalCount: number, back: any) => void);
    getSummary(func: string, field: string, callback: (value: any) => void);
    getColumnData: (column, value, limit, offset, callback) => void;
    filter: IFilterItem[];
}
export interface ICRUDDataProvider {
    get: (keyName: string, key: any, callback: (data: any) => void) => void;
    update: (keyName: string, key: any, modify: {}, callback: (data: any) => void) => void;
    create: (keyName: string, modify: {}, callback: (data: any) => void) => void;
    delete: (keyName: string, keys: any[], callback: (data: any) => void) => void;
}

export interface IDataProvider extends IListDataProvider, ICRUDDataProvider {
}

export interface IDataProviderOwner {
    get dataProvider(): IDataProvider;
}