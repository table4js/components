import { Base } from "../core/base";
import { IAction } from "../core/action";
import { property } from "../core/property";
import { ComputedUpdater } from "../core/dependencies";
import { InplaceEditor } from "./cell-editor";
import { ITableCell, TableCell } from "./cell";
import { ITableColumn, ITableColumnDescription, ITableColumnOwner, TableColumn } from "./column";
import { SearchModel } from "./search";
import { ArrayDataProvider, IDataProvider } from "../utils/array-data-provider";
import { ITableRow, ITableRowData, TableRow } from "./row";
import { isEmpty } from "../utils/utils";
import { Localization } from "../localization";

import * as Icons from "../icon"
import "./index.scss";
import { FilterItemValue } from "./filter-item";

/**
 * Parameters for customizing the table view.
 */
 export interface ITableConfig extends IDataProvider {
    /** Description of columns */
    columns: Array<ITableColumnDescription>;
    /** Permission to display the search bar */
    enableSearch?: boolean;
    /** Permission to display summary panel */
    enableSummary?: boolean;
    /** Permission to display merged cells toggle */
    enableMergedСellsToggle ?: boolean;
    /** The primary value of the parameter for merging cells */
    enableMergedСells ?: boolean;
    /** Permission to edit data */
    enableEdit ?: boolean;
    /** Permission to display the table actions panel */
    actions?: Array<IAction>;
    /** The key field of the table. Needed to edit the table. */
    keyColumn?: string;
    /** Setting the color for selected cells in case the selection is set using an attached boolean column. The color is set according to the rules of CSS. */
    selectCellColor?: string;
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
    private icons = Icons;
    private filterUpdater: ComputedUpdater;

    public static rowHeight = 20; // TODO: we need to calculate row height somehow beforehand

    private updateByFilter() {
        const isOldFilter = (this.tableFilter && this.tableFilter.length > 0);
        this.tableFilter = [];
        if (this.searchModel.searchValue) {
            this.tableFilter.push({value: this.searchModel.searchValue, op: "C", field: null});
        }
        this.columns.forEach(column => {
            let columnFilterValue = column.filterContext.value;
            if(columnFilterValue) {
                columnFilterValue.forEach((fiv: FilterItemValue) => {
                    const op = fiv.op;
                    const val = fiv.value;
                    if ((op === "EQ" && val) || (op === "C" && val) || (op === "ISN") || (op === "ISNN"))
                    this.tableFilter.push({value: val, op: op, field: fiv.field});
                })
            }
        });
        if((this.tableFilter.length > 0) || (isOldFilter && this.tableFilter.length === 0)) {
            this.searchModel.prevSearchValue = this.searchModel.searchValue;
            this.refresh();
        }
    }

    constructor(public config: ITableConfig, element?: HTMLElement) {
        super();
        this.showSearch = config.enableSearch === true;
        this.createActions(this.config);
        this.createColumns(this.config);

        this.filterUpdater = new ComputedUpdater(() => this.updateByFilter());
        this.filterUpdater.observe(this, "__filterUpdaterValue"); // TODO: make it elegant

        if(!!element) {
            this.initialize(element);
        }

        this.isMergedСells = config.enableMergedСells;
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
        if(column.summaryParams && column.summaryParams.field === column.name && column.summaryParams.func) {
            this.dataProvider.getSummary(column.summaryParams.func, column.summaryParams.field, this.tableFilter, (data) => column.summaryValue = data);
        }
    }

    protected showDetail(rowData: ITableRowData) {
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
            this.columns.forEach(c => { c.count = null; c.prev = null; c.prevValue = undefined; c.last = null });
            this.rows = [];
            this.drawRows(this.partRowCount, startRow - 1, false);
            this.hideDetail();
        }
    }

    protected createColumn(column: any, model: ITableConfig): ITableColumn {
        return new TableColumn(column, this);
    }

    protected createColumns(config: ITableConfig) {
        this.columns = config.columns.map(column => 
            this.createColumn(column, config)
        );
    }

    protected createActions(config: ITableConfig) {
        if(config.enableSummary === true) {
            this.innerActions.push({
                name: "summary-action",
                action: () => {
                    this.showTableSummary = !this.showTableSummary;
                },
                svg: this.icons.equal,
                container: "top"
            });
        }
        if(config.enableMergedСellsToggle === true) {
            this.innerActions.push({
                name: "mergedСells-action",
                action: () => {
                    this.isMergedСells = !this.isMergedСells;
                },
                svg: this.icons.table,
                container: "top"
            });
        }
        if(config.enableEdit === true){
            this.innerActions.push({
                name: "save-action",
                action: () => {
                    let isInsert = false;
                    this.rows.forEach(r => {
                        let modify = {};
                        if(r.number>0) {
                            r.cells.forEach(c => c.text !== c.data && (modify[c.name] = c.text)); 
                            if(!isEmpty(modify)) {
                                if(this.dataProvider.saveData(this.keyColumn, r.rowData[this.keyColumn], modify)) r.cells.forEach(c => c.data = c.text)
                            }
                        } else {
                            r.cells.forEach(c => modify[c.name] = c.text); 
                            if(this.dataProvider.insertData(this.keyColumn, modify)) isInsert = true;
                        }
                    });
                    if (isInsert) this.refresh();
                },
                svg: this.icons.save,
                container: "bottom"
            },
            {
                name: "delete-action",
                action: () => {
                    this.selectedRows.forEach(r => {
                        if (r.number>0) this.rows.slice(this.rows.indexOf(r), 1);
                    })
                    this.dataProvider.deleteData(this.keyColumn, this.selectedRows.map(r => r.number>0 && r.rowData[this.keyColumn]), (_ => this.refresh()))
                },
                svg: this.icons.del,
                container: "bottom"
            },
            {
                name: "newRow-action",
                action: () => {
                    this.scrollerElement.scrollTop = 0;
                    let newRow:ITableRowData = {};
                    this.columns.forEach(c => c.visible && (newRow[c.name]=""));
                    this.rows.unshift(this.createRow(newRow, -1, null));
                },
                svg: this.icons.add,
                container: "bottom"
            }
        )}
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
        this.columns.forEach(c => { c.count = null; c.prev = null; c.prevValue = undefined; });
        this.rows = [];
        this.drawRows(this.partRowCount, 0, false);
        this.hideDetail();
    }

    drawRows(limit: number, offset: number, back = false) {
        if(!this.loadingMutex) {
            this.loadingMutex = true;
            this.dataProvider.getData(
                limit, 
                offset,
                this.columns.filter(c => c.order !== undefined).map(c => <any>{field: c.name, desc: c.order}),
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
                    const currentRows = this.rows;
                    (data || []).forEach((dataItem, index) => {
                        var newRow = this.createRow(back ? data[data.length - 1 - Number(index)] : dataItem, back ? data.length - 1 - Number(index) + offset : Number(index) + offset, back);
                        if(back) { currentRows.unshift(newRow); }
                        else { currentRows.push(newRow); }
                    });
                    this.loadingMutex = false;
                });
        }
    }

    public clickFilter = (column: ITableColumn, event) => {
        column.filterContext.addItem(column);
        event.stopPropagation();
    }

    protected clickRow(row: ITableRow, event) {
        this.selectedRows.forEach(r => r.selected = false);
        row.selected = true;
    }

    protected selectRow(row: ITableRow, event) {
        row.selected = !row.selected;
        event.stopPropagation();

        if (event.shiftKey && this.lastSelectRow) {
            this.rows.filter(e => e.number >= Math.min(this.lastSelectRow.number, row.number) && e.number <= Math.max(this.lastSelectRow.number, row.number))
            .forEach(e => e.selected = true);
        } 
        if (row.selected) this.lastSelectRow = row;
        if (this.selectedRows.length !== 1) this.hideDetail();
    }

    public clickColumn = (column: ITableColumn, event) => {
        if(this.isShowDetail) {
            this.hideDetail();
        }
        var newOrder = column.order === undefined ? false : !column.order;
        if (!event.shiftKey) {
            this.columns.map((c) => c.order = undefined)
        } 
        column.order = newOrder as any; // TODO: something wrong is here
        this.refresh();
    }

    protected getCellText(data: any, column: ITableColumnDescription): string {
        return data[column.name] as string;
    }


    protected createRow(data: {[key: string]: string|number}, num: number, back: boolean): ITableRow {
        let rowCells = [];
        let lastText = null;
        let colorCell = null, colorRow = null;
        this.columns.reverse().forEach(col => {
            let text = this.getCellText(data, col);
            text = lastText ? text + "/" + lastText : text; 
            let cell = new TableCell();
            if(col.visible) cell.initialize(col, back, data, text, colorCell);
            lastText = (col.concatPrev && !col.row_color) ? text : null;
            colorRow = (col.row_color && !col.concatPrev) ? (col.type === "bool" ? ( data[col.name] ? this.config.selectCellColor : null) : data[col.name]) : colorRow;
            colorCell = (col.row_color && col.concatPrev) ? (col.type === "bool" ? ( data[col.name] ? this.config.selectCellColor : null) : data[col.name]) : null;
            if(col.visible) rowCells.push(cell);
        });
        let row_id = data[this.keyColumn];
        const row = new TableRow();
        row.cells = rowCells.reverse();
        row.rowData = data;
        row.id = row_id;
        row.number = num + 1;
        row.selected = row_id && (this.expandedRowKey === row_id);
        row.color = colorRow;
        row.select = (data, event) => this.selectRow(data, event),
        row.click = (data, event) => this.clickRow(data, event)
        return row;
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
    @property({ defaultValue: false }) isMergedСells: boolean;
    @property({ defaultValue: false }) loadingMutex: boolean;
    @property({ defaultValue: true }) loadMore: boolean;
    @property({ defaultValue: false }) loadMoreBack: boolean;
    lastOffset = 0;
    lastOffsetBack = 0;
    partRowCount = 10;
    @property({ defaultValue: [], onSet: (val, target: TableWidget) => {
        target.viewFilterTable = new ComputedUpdater(() => val.filter(c => c.filterContext.showFilter).length > 0) as any;
    } }) columns: Array<ITableColumn>;
    get keyColumn(): string {
        return this.config.keyColumn;
    }
    @property({ defaultValue: [] }) rows: Array<ITableRow>;
    get selectedRows() {
        return this.rows.filter(r => r.selected);
    }
    @property({ defaultValue: false }) showTableSummary: boolean;
    @property({ defaultValue: false }) showSearch: boolean;
    @property({ onSet: (newValue: number, target: TableWidget) => {
        target.navigateTo(newValue);
    } }) startRow: number;
    lastSelectRow = null;
    @property({ defaultValue: 0 }) totalCount: number;
    @property({ defaultValue: 0 }) tableHeadHeight: number;
    @property({ defaultValue: true }) showTableFilter: boolean;
    @property({ defaultValue: false }) viewFilterTable: boolean;
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
    get noDataText() {
        return Localization.getString("noData");
    }
}
