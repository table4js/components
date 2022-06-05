import * as ko from "knockout";
import { Base } from "../core/base";
import { IAction } from "../core/action";
import { property } from "../core/property";
import { InplaceEditor } from "./cell-editor";
import { ITableCell, TableCell } from "./cell";
import { ITableColumn, ITableColumnDescription, ITableColumnOwner, TableColumn } from "./column";
import { SearchModel } from "./search";
import { ArrayDataProvider, IDataProvider } from "../utils/array-data-provider";

import "./index.scss";

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

export interface ITableConfig extends IDataProvider {
    columns: Array<ITableColumnDescription>;
    enableSearch?: boolean;
    enableSummary?: boolean;
    actions?: Array<IAction>;
    keyColumn?: string;
}

interface ITableFilter {
    value: string,
    op: string,
    field: string,
}

/**
 * Creates TableWidget class.
 * @param config - table options.
 */
export class TableWidget extends Base implements ITableColumnOwner {
    private scrollerElement: HTMLDivElement;
    private resizerElement: HTMLDivElement;
    private tableElement: HTMLTableElement;

    private innerActions: Array<IAction> = [];

    public static rowHeight = 20; // TODO: we need to calculate row height somehow beforehand

    constructor(public config: ITableConfig, element?: HTMLElement) {
        super();
        this.showSearch = config.enableSearch === true;
        this.createActions(this.config);
        this.createColumns(this.config);

        ko.computed(() => {
            const isOldFilter = (this.tableFilter && this.tableFilter.length > 0);
            this.tableFilter = [];
            if (this.searchModel.searchValue) this.tableFilter.push({value: this.searchModel.searchValue, op: "C", field: null});
            this.columns().forEach(column => {
                let columnFilterValue = column.filterContext.value;
                if(columnFilterValue) {
                    columnFilterValue.forEach(e => {
                        if ((e.op() === "EQ" && e.value()) || (e.op() === "C" && e.value()) || (e.op() === "ISN") || (e.op() === "ISNN"))
                        this.tableFilter.push({value: e.value(), op: e.op(), field: e.field()});
                    })
                }
            });
            if((this.tableFilter.length > 0) || (isOldFilter && this.tableFilter.length === 0)) {
                this.searchModel.prevSearchValue = this.searchModel.searchValue;
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
            if((self.scrollerElement.scrollTop >= self.tableElement.clientHeight - self.scrollerElement.clientHeight) && this.loadMore) {
                self.drawRows(self.partRowCount, self.lastOffset, false);
            }
        }
        this.scrollerElement.onscroll = checkLoading;
        this.resizerElement.onresize = checkLoading;
        checkLoading();

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
                        this.tableHeadHeight = entry.contentRect.height + 5;
                    }
                }
            });
            resizeObserver.observe(element.getElementsByTagName("thead")[0]);
        }
    }

    calculateSummary(column: ITableColumn): void {
        if(column.summaryParams && column.summaryParams.field === column.name && column.summaryParams.func)
            this.dataProvider.getSummary(column.summaryParams.func, column.summaryParams.field, this.tableFilter, (data) => column.summaryValue = data);
    }

    protected showDetail(rowData: any) {
        this.isShowDetail = true;
    }

    protected hideDetail() {
        this.expandedRowKey = null;
        this.isShowDetail = false;
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

    protected createColumn(column: any, model: ITableConfig): ITableColumn {
        return new TableColumn(column, this);
    }

    protected createColumns(config: ITableConfig) {
        this.columns(config.columns.map(column => 
            this.createColumn(column, config)
        ));
    }

    protected createActions(config: ITableConfig) {
        if(config.enableSummary === true) {
            this.innerActions.push({
                name: "summary-action",
                action: () => {
                    this.showTableSummary = !this.showTableSummary;
                },
                svg: "icon_equal",
                container: "top"
            });
        }
    }

    private _dataProvider: IDataProvider = undefined;
    get dataProvider() {
        return this._dataProvider || this.config;
    }
    set dataProvider(provider: IDataProvider) {
        this._dataProvider = provider;
        this.refresh();
    }

    // get data() {
    //     return [];
    // }
    set data(_data: Array<any>) {
        this.dataProvider = new ArrayDataProvider(_data);
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
            this.dataProvider.getData(
                limit, 
                offset,
                this.columns().filter(c => c.order !== undefined).map(c => <any>{field: c.name, desc: c.order}),
                this.tableFilter,
                null /*&& this.pinnedRowKey()*/, 
                back, 
                (data, newOffset: number, totalCount: number, back: boolean) => {
                    if(back) {
                        this.lastOffsetBack = this.lastOffsetBack - limit;
                    } else {
                        this.lastOffset = this.lastOffset + limit;
                    }
                    this.loadMoreBack = this.lastOffsetBack > 0;
                    this.totalCount = totalCount;
                    this.loadMore = this.lastOffset <= totalCount;
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
        column.filterContext.addItem(column);
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
        if(this.isShowDetail) {
            this.hideDetail();
        }
        var newOrder = data.order === undefined ? false : !data.order;
        if (!event.shiftKey) {
            this.columns().map((c) => c.order = undefined)
        } 
        data.order = newOrder;
        this.refresh();
    }

    protected getCellText(data: any, column: ITableColumnDescription): string {
        return data[column.name] as string;
    }

    protected createRow(data: any, num: number, back: boolean): ITableRow {
        let rowCells = [];
        let lastText = null;
        let colorCell = null, colorRow = null;
        this.columns().reverse().forEach(col => {
            let text = this.getCellText(data, col);
            text = lastText ? text + "/" + lastText : text; 
            let cell = new TableCell();
            cell.initialize(col, back, data, text, colorCell);
            if(col.visible) rowCells.push(cell);
            lastText = (col.concatPrev && !col.row_color) ? text : null;
            colorRow = (col.row_color && !col.concatPrev) ? ko.unwrap(data[col.name]) : colorRow;
            colorCell = (col.row_color && col.concatPrev) ? ko.unwrap(data[col.name]) : null;
        });
        this.columns().reverse();
        let row_id = ko.unwrap(data[this.keyColumn]);
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

    public startEditCell = (cell: ITableCell, event: MouseEvent) => {
        if (this.currentCellEditor) this.currentCellEditor.inplaceEditForm = undefined;
        cell.inplaceEditForm = new InplaceEditor(cell);
        this.currentCellEditor = cell; 
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
        if (this.getStyleVal(col,'box-sizing') == 'border-box') {
         return 0;
        }
        var padLeft = this.getStyleVal(col,'padding-left');
        var padRight = this.getStyleVal(col,'padding-right');
        return (parseInt(padLeft) + parseInt(padRight));
    }
    getStyleVal(elm,css){
        return window.getComputedStyle(elm, null).getPropertyValue(css);
    }

    protected rootLevel: any = true;
    @property({ defaultValue: false }) isNumber: boolean;
    @property({ defaultValue: true }) isMergedСells: boolean;
    loadingMutex = false;
    @property({ defaultValue: true }) loadMore: boolean;
    @property({ defaultValue: false }) loadMoreBack: boolean;
    lastOffset = 0;
    lastOffsetBack = 0;
    partRowCount = 10;
    columns = ko.observableArray<ITableColumn>();
    get keyColumn(): string {
        return this.config.keyColumn;
    }
    rows = ko.observableArray<ITableRow>();
    selectedRows = ko.computed<Array<ITableRow>>(() => this.rows().filter(r => r.selected()));
    @property({ defaultValue: false }) showTableSummary: boolean;
    @property({ defaultValue: false }) showSearch: boolean;
    @property({ onSet: (newValue: number, target: TableWidget) => {
        target.navigateTo(newValue);
    } }) startRow: number;
    lastSelectRow = null;
    @property({ defaultValue: 0 }) totalCount: number;
    @property({ defaultValue: 0 }) tableHeadHeight: number;
    @property({ defaultValue: true }) showTableFilter: boolean;
    viewFilterTable = ko.computed(() => this.columns().filter(c => c.filterContext.showFilter).length > 0); 
    tableFilter: ITableFilter[];
    currentCellEditor: ITableCell;
    @property({ defaultValue: false }) isShowDetail: boolean;
    expandedRowKey;

    searchModel = new SearchModel();

    getActions = (container?: string) => {
        const actions = [].concat(this.innerActions).concat(this.config.actions || []);
        return actions.filter(action => action.container === container);
    }
    get topActions() {
        return this.getActions('top');
    }
    get dropdownActions() {
        return this.getActions('dropdown');
    }
    get bottomActions() {
        return this.getActions('bottom');
    }
}

