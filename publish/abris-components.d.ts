export interface IAggregate {
    func: string,
    field: string,
}

export interface ITableColumnDescription {
    name: string;
    title: string;
    type: string;
    visible: boolean;
    // filter: any;
    // filterContext: any,
    // order: ko.Observable<string>,
    // count: number,
    // prev: any,
    // prevValue: any,
    // concatPrev: boolean,
    // last: any,
    // row_color: string
}

export interface ITableColumn extends ITableColumnDescription {
    // name: string;
    // title: string;
    // type: string;
    // visible: boolean;
    filter: any;
    filterContext: any,
    order: ko.Observable<string>,
    summaryValue: ko.Observable<any>,
    summaryParams: ko.Observable<IAggregate>,
    count: number,
    prev: any,
    prevValue: any,
    concatPrev: boolean,
    last: any,
    row_color: string
}

export interface ITableCell {

}

export interface ITableRow {
    cells: ko.ObservableArray<ITableCell>,
    data: any,
    id: any,
    number: number,
    selected: ko.Observable<boolean>,
    color: any,
    select: (data: ITableRow, event) => void,
    click: (data: ITableRow, event) => void

}

export interface ITableViewModel {
    columns: Array<ITableColumnDescription>;
    getViewModelData(limit: number, offset: number, order: any[], key: null, back: boolean, callback: (data: any, newOffset: number, totalCount: number, back: any) => void);
    showTableSummary: ko.Observable<boolean>;
}

export interface ITableConfig {
    options: { primaryKey: string };
    model: ITableViewModel;
}

export declare class TableWidget {
    constructor(config: ITableConfig, element: HTMLElement);

    protected showDetail(rowData: any);

    protected hideDetail();

    navigateTo(startRow: number);

    protected createColumn(column: any, model: ITableViewModel): ITableColumn;

    protected createColumns(model: ITableViewModel);

    protected refresh();

    drawRows(limit: number, offset: number, back: boolean, refresh: boolean);

    public clickFilter: (data: ITableColumn, event) => void;

    protected clickRow(data, event);

    protected selectRow(data, event);

    public clickColumn: (data, event) => void;

    protected getCellText(data: any, column: ITableColumnDescription): string;

    protected createRow(data: any, num: number, back: boolean): ITableRow;

    protected rowExpanded(id): boolean;

    public startEditCell: (cell: any, event: MouseEvent) => void;

    public completeEditCell(): void;

    protected hasActiveInplaceEditorCore(): boolean;

    public get hasActiveInplaceEditor(): boolean;

    curCol;
    nxtCol;
    pageX;
    nxtColWidth ;
    curColWidthd

    protected logMouseOver: (d, e) => void;
    protected logMouseOut: (d, e) => void;
    protected logMouseMove: (d, e) => void;
    protected logMouseDown: (d, e) => void;
    protected logMouseUp: (d, e) => void;

    paddingDiff(col): number;
    getStyleVal(elm,css): void;

    protected rootLevel: any;
    isNumber;
    isMergedСells;
    loadingMutex;
    loadMore;
    loadMoreBack;
    lastOffset;
    lastOffsetBack;
    partRowCount;
    columns;
    primaryKey: string;
    rows;
    selectedRows;
    options: ITableViewModel;
    showTableSummary: ko.Observable<boolean>;
    startRow: ko.Observable<number>;
    lastSelectRow;
    totalCount;
    tableHeadHeight;
    showTableFilter;
    viewFilterTable; 

    isShowDetail;
    expandedRowKey;
}

export declare class Dropdown {
    constructor($element: JQuery, isOpen?: ko.Observable);
    hide: (event) => void;
    toggle: (model, event: JQueryMouseEventObject) => void;
}

export declare const tableWidgetTemplate: string;