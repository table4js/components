import { Base } from "../shared/base";
import { property } from "../shared/property";
import { Action, IAction } from "../shared/action";
import { ComputedUpdater } from "../shared/dependencies";
import { ITableCell, TableCell } from "./cell";
import { ITableColumn, TableColumn } from "./column";
import { IDataProvider, IDataProviderOwner } from "../shared/data-provider/data-provider";
import { ArrayDataProvider } from "../shared/data-provider/array-data-provider";
import { ITableRow, ITableRowData, TableRow } from "./row";
import { Localization } from "../localization";
import { IFieldDescription } from "../shared/domain";

import { SummaryPlugin } from "./plugins/summary";
import { InplaceEditorPlugin } from "./plugins/editor/editor-inplace";
import { RowEditorPlugin } from "./plugins/editor/editor-row";
import { SearchPlugin } from "./plugins/search";
import { FilterPlugin } from "./plugins/filter/filter";

import * as Icons from "../icons";
import "./index.scss";

/**
 * Parameters for customizing the table view.
 */
export interface ITableConfig {
    /** Description of columns */
    columns: Array<IFieldDescription>;
    /** Allows display the search bar */
    enableSearch?: boolean;
    /** Allows display summary panel */
    enableSummary?: boolean;
    /** Allows display merged cells toggle */
    enableMergedCellsToggle?: boolean;
    /** The primary value of the parameter for merging cells */
    enableMergedCells?: boolean;
    /** Allows edit data */
    enableEdit?: boolean;
    /** Allows edit data */
    editMode?: "inplace" | "row" | "aside";
    /** Allows row selection */
    allowRowSelection?: boolean;
    /** Actions to display in the table actions panel */
    actions?: Array<IAction>;
    /** The key field of the table. Needed to edit the table. */
    keyColumn?: string;
    /** Setting the color for selected cells in case the selection is set using an attached boolean column. The color is set according to the rules of CSS. */
    selectCellColor?: string;
    /** Table plugins array */
    plugins?: Array<ITablePlugin>;
}

export interface ITablePlugin {
    name: string;
    init(table: Table): void;
    getActions(): Array<IAction>;
    onColumnCreated(column: ITableColumn): void;
    onRowCreated(row: ITableRow): void;
    onSelectionChanged?(): void;
    onDataProviderCreated(dataProvider: IDataProvider): void;
}

export interface ILayoutElement {
    name: string;
    container: string;
    component: string;
    data: any;
}

/**
 * Creates Table class.
 * @param config - table options.
 */
export class Table extends Base implements IDataProviderOwner {
    private element: HTMLElement;
    protected _detachHandler: () => void = undefined;
    private innerActions: Array<IAction> = [];
    public icons = Icons;

    public static rowHeight = 20; // TODO: we need to calculate row height somehow beforehand

    constructor(public config: ITableConfig, element?: HTMLElement) {
        super();
        this.plugins = config.plugins || [];

        if (config.editMode !== undefined) {
            this.editMode = config.editMode;
        }

        if (this.plugins.length === 0) {
            this.plugins.push(new FilterPlugin());
            if (config.enableSearch === true) {
                this.plugins.push(new SearchPlugin());
            }
            if (config.enableSummary === true) {
                this.plugins.push(new SummaryPlugin());
            }
            if (config.enableEdit === true) {
                if (this.editMode === "inplace") {
                    this.plugins.push(new InplaceEditorPlugin());
                }
                if (this.editMode === "row") {
                    this.plugins.push(new RowEditorPlugin());
                }
            }
        }

        this.plugins.forEach(plugin => plugin.init(this));
        if (config.enableSearch !== undefined) {
            this.showSearch = config.enableSearch === true;
        }
        if (config.allowRowSelection !== undefined) {
            this.allowRowSelection = config.allowRowSelection === true;
        }

        this.createActions(this.config);
        this.createColumns(this.config);

        this.isMergedCells = config.enableMergedCells;

        if (!!element) {
            this.attach(element);
        }
    }

    public attach(element: HTMLElement) {
        if (this.element === element) return;
        this.detach();
        this.element = element;
        const scrollerElement = element.getElementsByClassName("table4js-scroll-container")[0] as HTMLDivElement;
        const tableElement = element.getElementsByTagName("table")[0] as HTMLTableElement;
        const resizerElement = element.getElementsByClassName("table4js")[0] as HTMLDivElement;

        var loadData2Display = () => {
            this.loadBatchSize = Math.round(scrollerElement.clientHeight / Table.rowHeight);
            if (scrollerElement.scrollTop < Table.rowHeight && this.lastOffsetBack > 0) {
                if ((this.lastOffsetBack - this.loadBatchSize) < 0) {
                    this.loadRowsBatch(this.lastOffsetBack, Math.max(0, this.lastOffsetBack - this.loadBatchSize), true);
                }
                else {
                    this.loadRowsBatch(this.loadBatchSize, Math.max(0, this.lastOffsetBack - this.loadBatchSize), true);
                }
            }
            if ((scrollerElement.scrollTop >= tableElement.clientHeight - scrollerElement.clientHeight) && this.loadMore) {
                this.loadRowsBatch(this.loadBatchSize, this.lastOffset, false);
            }
        }
        scrollerElement.onscroll = loadData2Display;
        resizerElement.onresize = loadData2Display;
        loadData2Display();

        let resizeObserver: ResizeObserver = undefined;
        if (typeof ResizeObserver !== "undefined") {
            resizeObserver = new ResizeObserver(entries => {
                for (let entry of entries) {
                    if (entry.target.tagName === "THEAD") {
                        if (entry.contentRect.width < 700) {
                            entry.target.parentElement.classList.add("table4js--small");
                        }
                        else {
                            entry.target.parentElement.classList.remove("table4js--small");
                        }
                        this.tableHeadHeight = entry.contentRect.height + 5;
                    }
                }
            });
            resizeObserver.observe(element.getElementsByTagName("thead")[0]);
        }

        this._detachHandler = () => {
            if (!!resizeObserver) {
                resizeObserver.disconnect();
            }
            scrollerElement.onscroll = undefined;
            resizerElement.onresize = undefined;
        }
    }
    public detach() {
        if (!!this._detachHandler) {
            this._detachHandler();
            this._detachHandler = undefined;
        }
        if (!!this.element) {
            this.element = undefined;
        }
    }

    navigateTo(startRow: number) {
        if (startRow) {
            this.lastOffsetBack = startRow - 1;
            this.lastOffset = startRow - 1;
            this.columns.forEach(c => { c.count = null; c.prev = null; c.prevValue = undefined; c.last = null });
            this.rows = [];
            this.loadRowsBatch(this.loadBatchSize, startRow - 1, false);
        }
    }

    protected createColumn(column: any, model: ITableConfig): ITableColumn {
        return new TableColumn(column);
    }

    protected createColumns(config: ITableConfig) {
        this.columns = config.columns.map(column => {
            const tableColumn = this.createColumn(column, config);
            this.plugins.forEach(plugin => plugin.onColumnCreated(tableColumn));
            return tableColumn;
        });
    }

    protected createActions(config: ITableConfig) {
        this.plugins.forEach(plugin => this.innerActions.push.apply(this.innerActions, plugin.getActions()));
        if (config.enableMergedCellsToggle === true) {
            this.innerActions.push(new Action({
                name: "mergedСells-action",
                title: Localization.getString("mergeCells"),
                short: true,
                action: () => {
                    this.isMergedCells = !this.isMergedCells;
                },
                svg: this.icons.table,
                container: "top"
            }));
        }
    }

    private _dataProvider: IDataProvider = undefined;
    get dataProvider(): IDataProvider {
        return this._dataProvider;
    }
    set dataProvider(provider: IDataProvider) {
        if (!!this._dataProvider) {
            this._dataProvider.stopFilterUpdating();
        }
        this._dataProvider = provider;
        this.plugins.forEach(plugin => plugin.onDataProviderCreated(this._dataProvider));
        this._dataProvider.onFilterChanged = () => this.refresh();
        this.refresh();
    }

    set data(_data: Array<any>) {
        this.dataProvider = new ArrayDataProvider(_data);
    }

    public refresh() {
        this.lastOffsetBack = 0;
        this.lastOffset = 0;
        this.columns.forEach(c => { c.count = null; c.prev = null; c.prevValue = undefined; });
        this.rows = [];
        this.loadRowsBatch(this.loadBatchSize, 0, false);
    }

    protected loadRowsBatch(limit: number, offset: number, back = false) {
        if (!!this.dataProvider && !this.loadingMutex) {
            this.loadingMutex = true;
            this.dataProvider.getData(
                limit,
                offset,
                this.columns.filter(c => c.order !== undefined).map(c => <any>{ field: c.name, desc: c.order }),
                null /*&& this.pinnedRowKey()*/,
                back,
                (data, newOffset: number, totalCount: number, back: boolean) => {
                    if (back) {
                        this.lastOffsetBack = this.lastOffsetBack - limit;
                    } else {
                        this.lastOffset = this.lastOffset + limit;
                    }
                    this.loadMoreBack = this.lastOffsetBack > 0;
                    this.totalCount = totalCount;
                    this.loadMore = this.lastOffset <= totalCount;
                    const currentRows = this.rows;
                    (data || []).forEach((dataItem, index) => {
                        var rowData = back ? data[data.length - 1 - Number(index)] : dataItem;
                        var rowNumber = back ? data.length - 1 - Number(index) + offset : Number(index) + offset;
                        var newRow = this.createRow(rowData, rowNumber, back);
                        if (back) { currentRows.unshift(newRow); }
                        else { currentRows.push(newRow); }
                    });
                    this.loadingMutex = false;
                });
        }
    }

    protected selectionChanged() {
        this.plugins.forEach(plugin => !!plugin.onSelectionChanged && plugin.onSelectionChanged());
    }

    protected clickRow(row: ITableRow, event) {
        if (!this.allowRowSelection) {
            return;
        }
        this.selectedRows.forEach(r => r.selected = false);
        row.selected = true;
        this.selectionChanged();
    }

    protected selectRow(row: ITableRow, event) {
        row.selected = !row.selected;
        event.stopPropagation();

        if (event.shiftKey && this.lastSelectRow) {
            this.rows.filter(e => e.number >= Math.min(this.lastSelectRow.number, row.number) && e.number <= Math.max(this.lastSelectRow.number, row.number))
                .forEach(e => e.selected = true);
        }
        if (row.selected) this.lastSelectRow = row;
        this.selectionChanged();
    }

    public clickColumn = (column: ITableColumn, event) => {
        var newOrder = undefined;
        if (column.order === undefined) {
            newOrder = false;
        } else if (column.order === false) {
            newOrder = true;
        }
        if (!event.shiftKey) {
            this.columns.map((c) => c.order = undefined)
        }
        column.order = newOrder as any; // TODO: something wrong is here
        this.refresh();
    }

    createRow(data: { [key: string]: string | number }, num?: number, back: boolean = false): ITableRow {
        let rowCells = [];
        let lastText = null;
        let colorCell = null, colorRow = null;
        this.columns.reverse().forEach(col => {
            let cell = new TableCell();
            cell.initialize(col, data, back, colorCell);
            if (!!lastText) {
                cell.text += ("/" + lastText);
            }
            lastText = (col.concatPrev && !col.row_color) ? cell.text : null;
            colorRow = (col.row_color && !col.concatPrev) ? (col.type === "bool" ? (data[col.name] ? this.config.selectCellColor : null) : data[col.name]) : colorRow;
            colorCell = (col.row_color && col.concatPrev) ? (col.type === "bool" ? (data[col.name] ? this.config.selectCellColor : null) : data[col.name]) : null;
            if (col.visible) rowCells.push(cell);
        });
        this.columns.reverse();
        let row_id = data[this.keyColumn];
        const row = new TableRow();
        row.cells = rowCells.reverse();
        row.rowData = data;
        row.id = row_id;
        if (num !== undefined) {
            row.number = num + 1;
        }
        // row.selected = row_id && (this.expandedRowKey === row_id);
        row.color = colorRow;
        row.select = (data, event) => this.selectRow(data, event);
        row.click = (data, event) => this.clickRow(data, event);

        this.plugins.forEach(plugin => plugin.onRowCreated(row));
        return row;
    }

    private lastOffset = 0;
    private lastOffsetBack = 0;
    private loadBatchSize = 10;

    private curCol = undefined;
    private nxtCol = undefined;
    private pageX = undefined;
    private nxtColWidth = undefined;
    private curColWidth = undefined

    public logMouseOver = (d, e) => {
        e.target.style.borderRight = '2px solid rgba(255, 255, 255, 0.5)';
    }
    public logMouseOut = (d, e) => {
        e.target.style.borderRight = '';
    }
    public logMouseMove = (d, e) => {
        if (this.curCol && e.buttons) {
            var diffX = e.pageX - this.pageX;
            this.nxtCol && (this.nxtCol.style.width = (this.nxtColWidth - (diffX)) + 'px');
            this.curCol.style.width = (this.curColWidth + diffX) + 'px';
        }
    }
    public logMouseDown = (d, e) => {
        this.curCol = e.target.parentElement;
        this.nxtCol = this.curCol.nextElementSibling.nextElementSibling ? this.curCol.nextElementSibling : undefined;
        this.pageX = e.pageX;
        var padding = this.paddingDiff(this.curCol);
        this.curColWidth = this.curCol.offsetWidth - padding;
        if (this.nxtCol) this.nxtColWidth = this.nxtCol.offsetWidth - padding;
    }
    public logMouseUp = (d, e) => {
        this.curCol = undefined;
        this.nxtCol = undefined;
        this.pageX = undefined;
        this.nxtColWidth = undefined;
        this.curColWidth = undefined;
        return false;
    }
    paddingDiff(col) {
        if (this.getStyleVal(col, 'box-sizing') == 'border-box') {
            return 0;
        }
        var padLeft = this.getStyleVal(col, 'padding-left');
        var padRight = this.getStyleVal(col, 'padding-right');
        return (parseInt(padLeft) + parseInt(padRight));
    }
    getStyleVal(elm, css) {
        return window.getComputedStyle(elm, null).getPropertyValue(css);
    }

    @property({ defaultValue: false }) isNumber: boolean;
    @property({ defaultValue: false }) isMergedCells: boolean;
    @property({ defaultValue: false }) loadingMutex: boolean;
    @property({ defaultValue: true }) loadMore: boolean;
    @property({ defaultValue: false }) loadMoreBack: boolean;

    @property({ defaultValue: [] }) columns: Array<ITableColumn>;
    get keyColumn(): string {
        return this.config.keyColumn;
    }
    @property({ defaultValue: [] }) rows: Array<ITableRow>;
    get selectedRows() {
        return this.rows.filter(r => r.selected);
    }
    @property({ defaultValue: false }) showTableSummary: boolean;
    @property({ defaultValue: false }) showSearch: boolean;
    @property({
        onSet: (newValue: number, target: Table) => {
            target.navigateTo(newValue);
        }
    }) startRow: number;
    lastSelectRow = null;
    @property({ defaultValue: 0 }) totalCount: number;
    @property({ defaultValue: 0 }) tableHeadHeight: number;
    @property({ defaultValue: true }) allowRowSelection: boolean;
    // expandedRowKey;
    editMode: "inplace" | "row" | "aside" = "inplace";

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
    get columnHeaderActions() {
        return this.getActions('header');
    }
    get rowActions() {
        return this.getActions('row');
    }
    get bottomActions() {
        return this.getActions('bottom');
    }

    get noDataText() {
        return Localization.getString("noData");
    }

    private plugins: Array<ITablePlugin> = [];
    public registerPlugin(plugin: ITablePlugin): ITablePlugin {
        const oldOne: ITablePlugin = this.unregisterPlugin(plugin.name);
        plugin.init(this);
        this.plugins.push(plugin);
        return oldOne;
    }
    public unregisterPlugin(pluginName: string): ITablePlugin {
        let oldOneIndex = -1;
        for (let i = 0; i < this.plugins.length; i++) {
            if (this.plugins[i].name === pluginName) {
                oldOneIndex = i;
                break;
            }
        }
        let oldOne: ITablePlugin = undefined;
        if (oldOneIndex >= 0) {
            oldOne = this.plugins.splice(oldOneIndex, 1)[0];
        }
        return oldOne;
    }

    private layoutElemets: Array<ILayoutElement> = [];
    public removeLayoutElement(elementName: string): ILayoutElement {
        let prevElement: ILayoutElement = undefined;
        for (let i = 0; i < this.layoutElemets.length; i++) {
            if (this.layoutElemets[i].name === elementName) {
                prevElement = this.layoutElemets.splice(i, 1)[0];
                break;
            }
        }
        return prevElement;
    }
    public addLayoutElement(element: ILayoutElement): ILayoutElement {
        let prevElement = this.removeLayoutElement(element.name);
        this.layoutElemets.push(element);
        return prevElement;
    }
    getLayoutElements = (container?: string) => {
        return this.layoutElemets.filter(element => element.container === container);
    }

    dispose() {
        this.detach();
    }
}
