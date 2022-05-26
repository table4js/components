import * as ko from "knockout";
import { IAction } from "../core/action";
import { ITableColumn, ITableColumnDescription, ITableColumnOwner, TableColumn } from "./column";

import "./index.scss";

export interface ITableCell {

}

export interface ITableCellType {
    name: string;
    css: string;
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
    getViewModelData(limit: number, offset: number, order: any[], filters: any[], key: null, back: boolean, callback: (data: any, newOffset: number, totalCount: number, back: any) => void);
    getViewModelSummary(func: string, field: string, callback: (value: any) => void);
    getItems: (column, value, limit, offset, callback) => void;
    showTableSummary?: ko.Observable<boolean>;
    actions?: Array<IAction>;
}

export interface ITableConfig {
    options: { primaryKey: string };
    model: ITableViewModel;
}

interface ITableFilter {
    value: string,
    op: string,
    field: string,
}

export class TableWidget implements ITableColumnOwner {
    private scrollerElement: HTMLDivElement;
    private resizerElement: HTMLDivElement;
    private tableElement: HTMLTableElement;
    public static rowHeight = 20; // TODO: we need to calculate row height somehow beforehand

    public static cellTypes = {
        "default": {
            css: "abris-table-cell--left"
        },
    };
    public static registerCellType(cellType: ITableCellType) {
        TableWidget.cellTypes[cellType.name] = cellType;
    }

    constructor(private config: ITableConfig, element?: HTMLElement) {
        this.options = this.config.model;
        this.showTableSummary = this.options.showTableSummary || ko.observable(false);
        this.primaryKey = this.config.options.primaryKey;
        this.createColumns(this.config.model);

        ko.computed(() => {
            const isOldFilter = (this.tableFilter &&this.tableFilter.length > 0);
            this.tableFilter = [];
            this.columns().forEach(column => {
                let columnFilterValue = ko.unwrap(column.filterContext.value);
                if(columnFilterValue) {
                    columnFilterValue.forEach(e => {
                        if ((e.op() === "EQ" && e.value()) || (e.op() === "C" && e.value()) || (e.op() === "ISN") || (e.op() === "ISNN"))
                        this.tableFilter.push({value: e.value(), op: e.op(), field: e.field()});
                    })
                }
            });
            if((this.tableFilter.length > 0) || (isOldFilter && this.tableFilter.length === 0) ) {
                this.refresh();
            }
        });    

        if(!!element) {
            this.initialize(element);
        }
    }

    initialize(element: HTMLElement) {
        this.scrollerElement = element.getElementsByClassName("abris-table-scroll-container")[0] as HTMLDivElement;
        this.tableElement = element.getElementsByTagName("table")[0] as HTMLTableElement;
        this.resizerElement = element.getElementsByClassName("abris-table")[0] as HTMLDivElement;
        
        var checkLoading = () => {
            var self = this;
            self.partRowCount = Math.round(self.scrollerElement.clientHeight / TableWidget.rowHeight);
            if(self.scrollerElement.scrollTop < TableWidget.rowHeight && self.lastOffsetBack > 0) {
                if ((self.lastOffsetBack - self.partRowCount) < 0) {
                    self.drawRows(self.lastOffsetBack, Math.max(0, self.lastOffsetBack - self.partRowCount), true);
                } 
                else {
                    self.drawRows(self.partRowCount, Math.max(0, self.lastOffsetBack - self.partRowCount), true);
                }
            }
            if((self.scrollerElement.scrollTop >= self.tableElement.clientHeight - self.scrollerElement.clientHeight) && this.loadMore()) {
                self.drawRows(self.partRowCount, self.lastOffset, false);
            }
        }
        this.scrollerElement.onscroll = checkLoading;
        this.resizerElement.onresize = checkLoading;
        checkLoading();

        this.startRow.subscribe((newValue) => {
            this.navigateTo(newValue);
        });

        if(typeof ResizeObserver !== "undefined") {
            const resizeObserver = new ResizeObserver(entries => {
                for(let entry of entries) {
                    if (entry.target.tagName === "THEAD") {
                        if(entry.contentRect.width < 700) {
                            entry.target.parentElement.classList.add("abris-table--small");
                        }
                        else {
                            entry.target.parentElement.classList.remove("abris-table--small");
                        }
                        this.tableHeadHeight(entry.contentRect.height + 5);
                    }
                }
            });
            resizeObserver.observe(element.getElementsByTagName("thead")[0]);
        }
    }

    calculateSummary(column: ITableColumn): void {
        if(column.summaryParams() && column.summaryParams().field === column.name && column.summaryParams().func)
            this.options.getViewModelSummary(column.summaryParams().func, column.summaryParams().field, (data) => column.summaryValue(data));
    }

    protected showDetail(rowData: any) {
        this.isShowDetail(true);
    }

    protected hideDetail() {
        this.expandedRowKey = null;
        this.isShowDetail(false);
    }

    navigateTo(startRow: number) {
        if(startRow) {
            this.lastOffsetBack = startRow - 1;
            this.lastOffset = startRow - 1;
            this.columns().forEach(c => { c.count = null; c.prev = null; c.prevValue = undefined; c.last = null });
            this.rows.removeAll();
            this.drawRows(this.partRowCount, startRow - 1, false, true);
            this.hideDetail();
        }
    }

    protected createColumn(column: any, model: ITableViewModel): ITableColumn {
        return new TableColumn(column, this);
    }

    protected createColumns(model: ITableViewModel) {
        this.columns(model.columns.map(column => 
            this.createColumn(column, model)
        ));
    }

    protected refresh() {
        this.lastOffsetBack = 0;
        this.lastOffset = 0;
        this.columns().forEach(c => { c.count = null; c.prev = null; c.prevValue = undefined; });
        this.rows.removeAll();
        this.drawRows(this.partRowCount, 0, false, true);
        this.hideDetail();
    }

    drawRows(limit: number, offset: number, back = false, refresh = false) {
        if(!this.loadingMutex) {
            this.loadingMutex = true;
            this.options.getViewModelData(
                limit, 
                offset,
                this.columns().filter(c => c.order() !== undefined).map(c => <any>{field: c.name, desc: c.order()}),
                this.tableFilter,
                null /*&& this.pinnedRowKey()*/, 
                back, 
                (data, newOffset: number, totalCount: number, back: boolean) => {
                    if(back) {
                        this.lastOffsetBack = this.lastOffsetBack - limit;
                    } else {
                        this.lastOffset = this.lastOffset + limit;
                    }
                    this.loadMoreBack(this.lastOffsetBack > 0);
                    this.totalCount(totalCount);
                    this.loadMore(this.lastOffset <= totalCount);
                    (data || []).forEach((d, i) => {
                        var newRow = this.createRow(back ? data[data.length - 1 - Number(i)] : data[i], back?data.length - 1 - Number(i) + offset : Number(i) + offset, back);
                        if(back) { this.rows.unshift(newRow); }
                        else { this.rows.push(newRow); }
                    });
                    this.loadingMutex = false;
                });
        }
    }

    public clickFilter = (column: ITableColumn, event) => {
        column.filterContext.addItem()(column);
        event.stopPropagation();
    }

    protected clickRow(data, event) {
        this.selectedRows().map(r => r.selected(false));
        data.selected(true);
    }

    protected selectRow(data, event) {
        data.selected(!data.selected());
        event.stopPropagation();

        if (event.shiftKey && this.lastSelectRow) {
            this.rows().filter(e => e.number >= Math.min(this.lastSelectRow.number, data.number) && e.number <= Math.max(this.lastSelectRow.number, data.number))
            .forEach(e => e.selected(true));
        } 
        if (data.selected()) this.lastSelectRow = data;
        if (this.selectedRows().length !== 1) this.hideDetail();
    }

    public clickColumn = (data, event) => {
        if(this.isShowDetail()) {
            this.hideDetail();
        }
        var newOrder = data.order() === undefined ? false : !data.order();
        if (!event.shiftKey) {
            this.columns().map((c) => c.order(undefined))
        } 
        data.order(newOrder);
        this.refresh();
    }

    protected getCellText(data: any, column: ITableColumnDescription): string {
        return data[column.name] as string;
    }

    protected getCellCss(data: any, column: ITableColumnDescription): string {
        const cellTypeDescription = TableWidget.cellTypes[column.type] || TableWidget.cellTypes["default"];
        return cellTypeDescription.css;
    }

    protected createRow(data: any, num: number, back: boolean): ITableRow {
        let rowCells = [];
        let lastText = null;
        let colorCell = null, colorRow = null ;
        this.columns().reverse().forEach(col => {
            let text = this.getCellText(data, col);
            text = lastText ? text + "/" + lastText : text; 
            let cell = {
                data: data[col.name],
                text:  ko.observable(text), 
                count: ko.observable(1),
                color: colorCell,
                name: col.name,
                inplaceEditForm: ko.observable(),
                css: this.getCellCss(data, col)
            }
            if (back) {
                if (col.last.text() === cell.text()) {
                    cell.count(col.last.count() + 1);
                    col.last.count(0);
                    if (col.last == col.prev) {
                        col.prev = cell;
                        col.count = cell.count();
                    }
                }
                col.last = cell;
            }
            else {
                if (col.last === null) col.last = cell;
                if(col.prevValue === cell.text()) {
                    col.count++;
                    cell.count(0);
                    col.prev.count(col.count);
                }
                else {
                    col.count = 1;
                    col.prev = cell;
                    col.prevValue = cell.text();
                }
            }
            if(col.visible) rowCells.push(cell);
            lastText = (col.concatPrev && !col.row_color) ? text : null;
            colorRow = (col.row_color && !col.concatPrev) ? ko.unwrap(data[col.name]) : colorRow;
            colorCell = (col.row_color && col.concatPrev) ? ko.unwrap(data[col.name]) : null;
        });
        this.columns().reverse();
        let row_id = ko.unwrap(data[this.primaryKey]);
        return {
            cells: ko.observableArray(rowCells.reverse()),
            data: ko.toJS(data),
            id: row_id,
            number: num + 1,
            selected: ko.observable(row_id && (this.expandedRowKey === row_id)),
            color: colorRow,
            select: (data, event) => this.selectRow(data, event),
            click: (data, event) => this.clickRow(data, event)
        };
    }

    protected rowExpanded(id) {
        return false;
    }

    public startEditCell = (cell: any, event: MouseEvent) => {
        this.completeEditCell();
    }

    public completeEditCell() {
    }

    protected hasActiveInplaceEditorCore() {
        return false;
    }

    public get hasActiveInplaceEditor() {
        return this.hasActiveInplaceEditorCore();
    }

    curCol = undefined;
    nxtCol = undefined;
    pageX = undefined;
    nxtColWidth = undefined;
    curColWidth = undefined

    protected logMouseOver = (d, e) => {
        e.target.style.borderRight = '2px solid rgba(255, 255, 255, 0.5)';
    }
    protected logMouseOut = (d, e) => {
        e.target.style.borderRight = '';
    }
    protected logMouseMove = (d, e) => {
        if (this.curCol && e.buttons) {
            var diffX = e.pageX - this.pageX;
            this.nxtCol && (this.nxtCol.style.width = (this.nxtColWidth - (diffX))+'px');
            this.curCol.style.width = (this.curColWidth + diffX)+'px';
        }
    }
    protected logMouseDown = (d, e) => {
        this.curCol = e.target.parentElement;
        this.nxtCol = this.curCol.nextElementSibling.nextElementSibling ? this.curCol.nextElementSibling : undefined;
        this.pageX = e.pageX; 
        var padding = this.paddingDiff(this.curCol);
        this.curColWidth = this.curCol.offsetWidth - padding;
        if (this.nxtCol) this.nxtColWidth = this.nxtCol.offsetWidth - padding;    
    }
    protected logMouseUp = (d, e) => {
        this.curCol = undefined;
        this.nxtCol = undefined;
        this.pageX = undefined;
        this.nxtColWidth = undefined;
        this.curColWidth = undefined;
        return false;
    }
    paddingDiff(col) {
        if (this.getStyleVal(col,'box-sizing') == 'border-box'){
         return 0;
        }
        var padLeft = this.getStyleVal(col,'padding-left');
        var padRight = this.getStyleVal(col,'padding-right');
        return (parseInt(padLeft) + parseInt(padRight));
    }
    getStyleVal(elm,css){
        return (window.getComputedStyle(elm, null).getPropertyValue(css))
    }

    protected rootLevel: any = true;
    isNumber = ko.observable(false);
    isMergedСells = ko.observable(true);
    loadingMutex = false;
    loadMore = ko.observable(true);
    loadMoreBack = ko.observable(false);
    lastOffset = 0;
    lastOffsetBack = 0;
    partRowCount = 10;
    columns = ko.observableArray<ITableColumn>();
    primaryKey: string;
    rows = ko.observableArray<ITableRow>();
    selectedRows = ko.computed<Array<ITableRow>>(() => this.rows().filter(r => r.selected()));
    options: ITableViewModel;
    showTableSummary: ko.Observable<boolean>;
    startRow: ko.Observable<number> = ko.observable(null);
    lastSelectRow = null;
    totalCount = ko.observable(0);
    tableHeadHeight = ko.observable(0);
    showTableFilter = ko.observable(true);
    viewFilterTable = ko.computed(() => this.columns().filter(c => c.filterContext.showFilter()).length > 0); 
    tableFilter: ITableFilter[];

    isShowDetail = ko.observable(false);
    expandedRowKey;

    getActions = (container?: string) => {
        const actions = this.options.actions || [];
        return actions.filter(action => action.container === container);
    }
    get topActions() {
        return this.getActions('top');
    }
    get dropdownActions() {
        return this.getActions('dropdown');
    }
}
