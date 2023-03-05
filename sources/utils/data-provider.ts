import { IFilterItem } from "../core/find";

export interface IListDataProvider {
    getData(limit: number, offset: number, order: any[], key: null, back: boolean, callback: (data: any, newOffset: number, totalCount: number, back: any) => void);
    getSummary(func: string, field: string, callback: (value: any) => void);
    getColumnData: (column, value, limit, offset, callback) => void;
    filter: IFilterItem[];
}
export interface ICRUDDataProvider {
    saveData: (keyName: string,  key: any, modify: { } ) => boolean;
    insertData: (keyName: string, modify: {} ) => boolean;
    deleteData: (keyName: string, keys: any[], callback) => void;
}

export interface IDataProvider extends IListDataProvider, ICRUDDataProvider {
}

export interface IDataProviderOwner {
    get dataProvider(): IDataProvider;
}