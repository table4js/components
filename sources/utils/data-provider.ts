export interface IDataProvider {
    getData(limit: number, offset: number, order: any[], filters: any[], key: null, back: boolean, callback: (data: any, newOffset: number, totalCount: number, back: any) => void);
    getSummary(func: string, field: string, filters: any[], callback: (value: any) => void);
    getColumnData: (column, value, limit, offset, callback) => void;
    saveData: (keyName:string,  key:any, modify:{} ) => boolean;
    insertData: (keyName:string, modify:{} ) => boolean;
    deleteData: (keyName:string, keys:any[], callback) => void; 
}

export interface IDataProviderOwner {
    get dataProvider(): IDataProvider;
}