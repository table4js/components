/// <reference types="react" />
declare module "utils/utils" {
    export function isEmpty(obj: {}): boolean;
    export function isEqual(obj1: any, obj2: any): boolean;
}
declare module "core/dependencies" {
    import { Base } from "core/base";
    export class Dependencies {
        currentDependency: () => void;
        target: Base;
        property: string;
        private static DependenciesCount;
        constructor(currentDependency: () => void, target: Base, property: string);
        dependencies: Array<{
            obj: Base;
            prop: string;
            id: string;
        }>;
        id: string;
        addDependency(target: Base, property: string): void;
        dispose(): void;
    }
    export class ComputedUpdater<T = any> {
        private _updater;
        static readonly ComputedUpdaterType = "__dependency_computed";
        static CollectDependencies<U = any>(obj: Base, computedUpdater: ComputedUpdater<U>, propertyName: string): U;
        private dependencies;
        constructor(_updater: () => T);
        readonly type = "__dependency_computed";
        get updater(): () => T;
        setDependencies(dependencies: Dependencies): void;
        protected getDependencies(): Dependencies;
        observe(target: Base, propertyName: string): void;
        private clearDependencies;
        dispose(): any;
    }
}
declare module "core/base" {
    import { Dependencies } from "core/dependencies";
    export class HashTableStorage {
        protected hash: {};
        owner: any;
        getValue(name: string, defaultValue?: any): any;
        setValue(name: string, val: any): void;
    }
    export class Base {
        private storage;
        private propertyValueListners;
        private static currentDependencis;
        static createPropertiesStorage: () => HashTableStorage;
        static finishCollectDependencies(): Dependencies;
        static startCollectDependencies(updater: () => void, target: Base, property: string): void;
        private static collectDependency;
        constructor(storage?: HashTableStorage);
        protected onPropertyValueChanged(propertyName: string, oldValue: any, newValue: any): void;
        protected getPropertyValueCore(propertyName: string, defaultValue?: any): any;
        protected setPropertyValueCore(propertyName: string, newValue: any): void;
        getPropertyValue(propertyName: string, defaultValue?: any): any;
        setPropertyValue(propertyName: string, newValue: any, defaultValue?: any): void;
        registerPropertyValueListner(propertyName: string, listner: (oldValue: any, newValue: any) => void, key?: string): void;
        unRegisterPropertyValueListner(propertyName: string, key?: string): void;
    }
}
declare module "react/abris-component" {
    export function registerComponent(componentName: string, componentCreator: (props: any) => JSX.Element): void;
    export function unregisterComponent(componentName: string): void;
    export interface IAbrisComponentProps {
        componentName: string;
        componentProps: any;
    }
    export function AbrisComponent({ componentName, componentProps }: IAbrisComponentProps): any;
}
declare module "core/property" {
    export interface IPropertyDecoratorOptions {
        defaultValue?: any;
        onSet?: (val: any, target: any) => void;
    }
    export function property(options?: IPropertyDecoratorOptions): (target: any, key: string) => void;
}
declare module "core/action" {
    import { Base } from "core/base";
    export interface IAction {
        name: string;
        action: () => void;
        title?: string;
        visible?: boolean;
        enabled?: boolean;
        active?: boolean;
        icon?: string;
        svg?: string;
        container?: string;
        cssClasses?: string;
        cssImage?: string;
        cssLabel?: string;
    }
    export class Action extends Base implements IAction {
        constructor(source?: IAction);
        name: string;
        action: () => void;
        title: string;
        visible: boolean;
        enabled: boolean;
        active: boolean;
        icon: string;
        svg: string;
        container: string;
        cssClasses: string;
        cssImage: string;
        cssLabel: string;
    }
}
declare module "localization" {
    export class Localization {
        static englishStrings: {
            filtercontains: string;
            filterequal: string;
            filterisnull: string;
            filterisnotnull: string;
            filtergreater: string;
            filterless: string;
            filtergreaterequal: string;
            filterlessequal: string;
            filterdatenotequal: string;
            filterdateequal: string;
            filterdategreater: string;
            filterdateless: string;
            noData: string;
        };
        static getString: (stringId: string) => any;
    }
}
declare module "find" {
    type TOperation = "EQ" | "NEQ" | "G" | "L" | "GEQ" | "LEQ" | "ISN" | "ISNN" | "C";
    export interface IFindOperation {
        op: string;
        text: string;
        func?: string;
    }
    export interface IFindCompare {
        field: string;
        op: TOperation;
        value: string;
    }
    export interface IFindOperand {
        levelup: boolean;
        operand: {
            field: string;
            op: TOperation;
            value: string | Number;
            path?: string[];
            search_in_key?: boolean;
            m_order?: boolean;
            func?: string;
        };
    }
    export interface IAggregate {
        func: string;
        field: string;
    }
    export interface IFindLogic {
        strict: boolean;
        operands: IFindOperand[];
        aggregate?: IAggregate[];
    }
    export var operationsMap: {
        [index: string]: IFindOperation[];
    };
}
declare module "utils/data-provider" {
    export interface IDataProvider {
        getData(limit: number, offset: number, order: any[], filters: any[], key: null, back: boolean, callback: (data: any, newOffset: number, totalCount: number, back: any) => void): any;
        getSummary(func: string, field: string, filters: any[], callback: (value: any) => void): any;
        getColumnData: (column: any, value: any, limit: any, offset: any, callback: any) => void;
        saveData: (keyName: string, key: any, modify: {}) => boolean;
        insertData: (keyName: string, modify: {}) => boolean;
        deleteData: (keyName: string, keys: any[], callback: any) => void;
    }
    export interface IDataProviderOwner {
        get dataProvider(): IDataProvider;
    }
}
declare module "table/column-filter-item" {
    import { Base } from "core/base";
    import { IFindOperation } from "find";
    import { ITableColumn } from "table/column";
    export class FilterItemValue extends Base {
        private column;
        constructor(column: ITableColumn);
        value: any;
        op: string;
        field: string;
    }
    export class ColumnFilterItem extends Base {
        column: any;
        getColumnData: any;
        constructor(column: any, getColumnData: any);
        operations: Array<any>;
        get filterEditorName(): string;
        filterItemValue: FilterItemValue;
        operation: IFindOperation;
        showOperand: boolean;
        getFilterValue(): {
            field: string;
            op: string;
            value: any;
        };
    }
}
declare module "table/column-filter" {
    import { Base } from "core/base";
    import { IDataProviderOwner } from "utils/data-provider";
    import { ITableColumn } from "table/column";
    import { ColumnFilterItem } from "table/column-filter-item";
    import "./column-filter.scss";
    export class FilterContext extends Base {
        column: ITableColumn;
        private dataProviderOwner;
        constructor(column: ITableColumn, dataProviderOwner: IDataProviderOwner);
        showFilter: boolean;
        value: any;
        filterItems: Array<ColumnFilterItem>;
        apply(): void;
        addItem: (column: ITableColumn) => void;
        removeItem: (item: ColumnFilterItem) => void;
    }
}
declare module "table/column" {
    import { Base } from "core/base";
    import { IAggregate } from "find";
    import { IDataProviderOwner } from "utils/data-provider";
    import { ITableCell } from "table/cell";
    import { FilterContext } from "table/column-filter";
    export interface ITableColumnDescription {
        name: string;
        title: string;
        type: string;
        visible: boolean;
    }
    export interface ITableColumn extends ITableColumnDescription {
        filter: any;
        filterContext: FilterContext;
        order: boolean;
        summaryValue: any;
        summaryParams: IAggregate;
        count: number;
        prev: ITableCell;
        prevValue: any;
        concatPrev: boolean;
        last: ITableCell;
        row_color: string;
        clickFilter: (column: ITableColumn, event: MouseEvent | any) => void;
    }
    export class TableColumn extends Base implements ITableColumn {
        private table;
        constructor(columnDescription: ITableColumnDescription, table: IDataProviderOwner);
        filter: any;
        filterContext: FilterContext;
        order: boolean;
        summaryValue: any;
        summaryParams: IAggregate;
        count: number;
        prev: any;
        prevValue: any;
        concatPrev: boolean;
        last: any;
        row_color: string;
        name: string;
        title: string;
        type: string;
        visible: boolean;
        clickFilter: (column: ITableColumn, event: MouseEvent | any) => void;
        calculateSummary(column: ITableColumn): void;
        dispose(): void;
    }
}
declare module "table/cell" {
    import { Base } from "core/base";
    import { ITableColumn, ITableColumnDescription } from "table/column";
    export interface ITableCellType {
        name: string;
        css?: string;
        editor?: string;
        viewer?: string;
    }
    export interface ITableCell {
        data: any;
        name: string;
        text: string;
        count: number;
        color: string;
        css: string;
        inplaceEditor: any;
        editor?: string;
        viewer?: string;
    }
    export class TableCell extends Base implements ITableCell {
        static cellTypes: {
            default: {
                css: string;
                editor: string;
                viewer: string;
            };
        };
        static registerCellType(cellType: ITableCellType): void;
        static getContainerCss(cell: ITableCell, isMergedCell: boolean): string;
        static getContentCss(cell: ITableCell | TableCell, isMergedCell: boolean): string;
        isModified: boolean;
        data: any;
        text: string;
        count: number;
        color: string;
        name: string;
        inplaceEditor: any;
        css: string;
        editor: string;
        viewer: string;
        protected getCellTypeDescription(type: string): any;
        protected getCellCss(data: any, column: ITableColumnDescription): string;
        protected getCellEditor(data: any, column: ITableColumnDescription): string;
        protected getCellViewer(data: any, column: ITableColumnDescription): string;
        protected getCellText(val: any): string;
        initialize(col: ITableColumn, back: boolean, data: any, color: string): void;
    }
}
declare module "table/cell-editor" {
    import { Base } from "core/base";
    import { ITableCell } from "table/cell";
    import "./cell-editor.scss";
    export class InplaceEditor extends Base {
        private cell;
        constructor(cell: ITableCell);
        value: any;
        complete(commit: boolean): void;
        processKeyUp(event: KeyboardEvent): void;
    }
}
declare module "table/search" {
    import { Base } from "core/base";
    import "./search.scss";
    export class SearchModel extends Base {
        search: (text: string) => void;
        updater: () => void;
        prevSearchValue: string;
        searchValue: string;
    }
}
declare module "utils/array-data-provider" {
    import { IDataProvider } from "utils/data-provider";
    export class ArrayDataProvider implements IDataProvider {
        data: Array<any>;
        constructor(data: Array<any>);
        filtered(filters: any, data: any): any;
        getData(limit: any, offset: any, order: any, filters: any, key: any, back: any, callback: any): void;
        getSummary(func: any, field: any, filters: any, callback: any): void;
        getColumnData(columnName: any, filter: any, limit: any, offset: any, callback: any): void;
        saveData(keyName: string, key: any, modify: {}): boolean;
        insertData(keyName: string, modify: {}): boolean;
        deleteData(keyName: string, keys: any[], callback: any): void;
    }
}
declare module "table/row" {
    import { Base } from "core/base";
    import { ITableCell } from "table/cell";
    /**
     * The collection of data for a table row. The key is the name of the column. The value is the content of the table cell.
     */
    export interface ITableRowData {
        /** Table cell content */
        [key: string]: string | number;
    }
    /**
     * Information needed to render a table row
     */
    export interface ITableRow {
        /** Array containing observable table cells */
        cells: Array<ITableCell>;
        /** The collection of data for a table row */
        rowData: ITableRowData;
        /**  */
        id: any;
        /**  */
        number: number;
        selected: boolean;
        color: string;
        select: (data: ITableRow, event: any) => void;
        click: (data: ITableRow, event: any) => void;
    }
    export class TableRow extends Base implements ITableRow {
        cells: ITableCell[];
        rowData: ITableRowData;
        id: any;
        number: number;
        selected: boolean;
        color: string;
        select: (data: ITableRow, event: any) => void;
        click: (data: ITableRow, event: any) => void;
    }
}
declare module "icon" {
    export const add: any;
    export const equal: any;
    export const table: any;
    export const save: any;
    export const del: any;
    export const paste: any;
    export const more_sq: any;
    export const check: any;
    export const sortup: any;
    export const sortdown: any;
    export const filter: any;
    export const more: any;
    export const edit: any;
    export const arrowright: any;
    export const search: any;
    export const cross: any;
    export const arrowdown: any;
}
declare module "table/index" {
    import { Base } from "core/base";
    import { IAction } from "core/action";
    import { ITableCell } from "table/cell";
    import { ITableColumn, ITableColumnDescription } from "table/column";
    import { SearchModel } from "table/search";
    import { IDataProvider, IDataProviderOwner } from "utils/data-provider";
    import { ITableRow, ITableRowData } from "table/row";
    import * as Icons from "icon";
    import "./index.scss";
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
        enableMergedСellsToggle?: boolean;
        /** The primary value of the parameter for merging cells */
        enableMergedСells?: boolean;
        /** Permission to edit data */
        enableEdit?: boolean;
        /** Permission to display the table actions panel */
        actions?: Array<IAction>;
        /** The key field of the table. Needed to edit the table. */
        keyColumn?: string;
        /** Setting the color for selected cells in case the selection is set using an attached boolean column. The color is set according to the rules of CSS. */
        selectCellColor?: string;
    }
    interface ITableFilter {
        value: string;
        op: string;
        field: string;
    }
    /**
     * Creates Table class.
     * @param config - table options.
     */
    export class Table extends Base implements IDataProviderOwner {
        config: ITableConfig;
        private scrollerElement;
        private resizerElement;
        private tableElement;
        private innerActions;
        icons: typeof Icons;
        private filterUpdater;
        static rowHeight: number;
        private updateByFilter;
        constructor(config: ITableConfig, element?: HTMLElement);
        initialize(element: HTMLElement): void;
        protected showDetail(rowData: ITableRowData): void;
        protected hideDetail(): void;
        navigateTo(startRow: number): void;
        protected createColumn(column: any, model: ITableConfig): ITableColumn;
        protected createColumns(config: ITableConfig): void;
        protected createActions(config: ITableConfig): void;
        private _dataProvider;
        get dataProvider(): IDataProvider;
        set dataProvider(provider: IDataProvider);
        set data(_data: Array<any>);
        protected refresh(): void;
        drawRows(limit: number, offset: number, back?: boolean): void;
        protected clickRow(row: ITableRow, event: any): void;
        protected selectRow(row: ITableRow, event: any): void;
        clickColumn: (column: ITableColumn, event: any) => void;
        protected createRow(data: {
            [key: string]: string | number;
        }, num: number, back: boolean): ITableRow;
        protected rowExpanded(id: any): boolean;
        startEditCell: (cell: ITableCell) => void;
        completeEditCell(): void;
        protected hasActiveInplaceEditorCore(): boolean;
        get hasActiveInplaceEditor(): boolean;
        curCol: any;
        nxtCol: any;
        pageX: any;
        nxtColWidth: any;
        curColWidth: any;
        logMouseOver: (d: any, e: any) => void;
        logMouseOut: (d: any, e: any) => void;
        logMouseMove: (d: any, e: any) => void;
        logMouseDown: (d: any, e: any) => void;
        logMouseUp: (d: any, e: any) => boolean;
        paddingDiff(col: any): number;
        getStyleVal(elm: any, css: any): string;
        protected rootLevel: any;
        isNumber: boolean;
        isMergedСells: boolean;
        loadingMutex: boolean;
        loadMore: boolean;
        loadMoreBack: boolean;
        lastOffset: number;
        lastOffsetBack: number;
        partRowCount: number;
        columns: Array<ITableColumn>;
        get keyColumn(): string;
        rows: Array<ITableRow>;
        get selectedRows(): ITableRow[];
        showTableSummary: boolean;
        showSearch: boolean;
        startRow: number;
        lastSelectRow: any;
        totalCount: number;
        tableHeadHeight: number;
        showTableFilter: boolean;
        viewFilterTable: boolean;
        tableFilter: ITableFilter[];
        currentCellEditor: ITableCell;
        isShowDetail: boolean;
        expandedRowKey: any;
        searchModel: SearchModel;
        getActions: (container?: string) => any[];
        get topActions(): any[];
        get dropdownActions(): any[];
        get bottomActions(): any[];
        get noDataText(): any;
    }
}
declare module "react/reactivity" {
    export const makeReactiveModel: (model: any, val: number, updater: (val: number) => void) => () => () => void;
    export function makeReactive(model: any): void;
}
declare module "react/widgets/action" {
    import { Action } from "core/action";
    export function AbrisAction({ action }: {
        action: Action;
    }): JSX.Element;
}
declare module "react/widgets/actions" {
    export function AbrisActions({ className, actions, }: {
        className: string;
        actions: any[];
    }): JSX.Element;
}
declare module "react/widgets/dropdown-actions" {
    export function AbrisDropdownActions({ className, actions, }: {
        className: string;
        actions: any[];
    }): JSX.Element;
}
declare module "react/table/cell-editor" {
    import { InplaceEditor } from "table/cell-editor";
    export interface ITableCellEditorProps {
        model: InplaceEditor;
    }
    export function Table4CellEditor({ model }: ITableCellEditorProps): JSX.Element;
}
declare module "react/table/cell" {
    import { Table } from "table/index";
    import { ITableCell } from "table/cell";
    export interface ITableCellProps {
        table: Table;
        cell: ITableCell;
    }
    export function Table4Cell({ table, cell }: ITableCellProps): JSX.Element;
}
declare module "react/table/row" {
    import { Table } from "table/index";
    import { ITableRow } from "table/row";
    export interface ITableRowProps {
        table: Table;
        row: ITableRow;
    }
    export function TableRow({ table, row }: ITableRowProps): JSX.Element;
}
declare module "table/summary" {
    import { Base } from "core/base";
    import { ITableColumn } from "table/column";
    import "./summary.scss";
    export class TableSummaryItem {
        title: string;
        value: string;
        constructor(title: string, value: string);
    }
    export class TableSummary extends Base {
        private column;
        constructor(column: ITableColumn);
        get value(): any;
        set value(val: any);
        func: any;
        summaryItems: Array<TableSummaryItem>;
    }
}
declare module "react/table/summary" {
    import { TableSummary } from "table/summary";
    export interface ITableSummaryProps {
        summary: TableSummary;
    }
    export function Table4Summary({ summary }: ITableSummaryProps): JSX.Element;
}
declare module "react/table/search" {
    import { SearchModel } from "table/search";
    export interface IAbrisSearchProps {
        icon: any;
        searchModel: SearchModel;
    }
    export function AbrisSearch({ icon, searchModel }: IAbrisSearchProps): JSX.Element;
}
declare module "table/filter-select" {
    import { Base } from "core/base";
    import { FilterItemValue } from "table/column-filter-item";
    import "./filter-select.scss";
    export class TableFilterSelect extends Base {
        private value;
        private columnName;
        private columnType;
        private getColumnData;
        title: string;
        moreText: string;
        private limit;
        private offset;
        constructor(value: FilterItemValue, columnName: string, columnType: string, getColumnData: (name: string, filterValue: any, limit: number, offset: number, callback: (items: any[]) => void) => void, isOpen?: boolean, title?: string, moreText?: string);
        private updateFoundItems;
        loadMore(): void;
        isOpen: boolean;
        isFilterSearchByType: boolean;
        isLoadMore: boolean;
        toggle: (_: any, event: any) => void;
        selectedItems: Array<any>;
        foundItems: Array<any>;
        filterText: string;
        isChecked: (item: any) => boolean;
        clickItem: (item: any) => void;
        deleteItems: (name: any) => void;
        dispose(): void;
    }
}
declare module "react/table/filter-select" {
    import { TableFilterSelect } from "table/filter-select";
    export function AbrisFilterSelect({ viewModel, }: {
        viewModel: TableFilterSelect;
    }): JSX.Element;
}
declare module "react/table/column-filter-item" {
    import { ColumnFilterItem } from "table/column-filter-item";
    export function AbrisColumnFilterItem({ filterItem, }: {
        filterItem: ColumnFilterItem;
    }): JSX.Element;
}
declare module "react/table/column-filter" {
    import { FilterContext } from "table/column-filter";
    export function AbrisColumnFilter({ context }: {
        context: FilterContext;
    }): JSX.Element;
}
declare module "react/table/index" {
    import * as React from "react";
    import { Table } from "table/index";
    export interface ITableProps {
        model: Table;
    }
    export function Table4({ model, }: ITableProps): React.ReactNode;
}
declare module "react/table/cell-viewer" {
    import { ITableCell } from "table/cell";
    export interface ITableCellViewerProps {
        cell: ITableCell;
        className: string;
    }
    export function Table4CellViewer({ cell, className }: ITableCellViewerProps): JSX.Element;
}
declare module "react/table/bool-cell-editor" {
    import { ITableCellEditorProps } from "react/table/cell-editor";
    export function Table4BoolCellEditor({ model }: ITableCellEditorProps): JSX.Element;
}
declare module "react/table/bool-cell-viewer" {
    import { ITableCellViewerProps } from "react/table/cell-viewer";
    export function Table4BoolCellViewer({ cell, className }: ITableCellViewerProps): JSX.Element;
}
declare module "core/actions" {
    import "./actions.scss";
}
declare module "core/dropdown-actions" {
    import "./dropdown-actions.scss";
}
declare module "table/filter-default" {
    import "./filter-default.scss";
}
declare module "table/number" {
    import { ITableCellType } from "table/cell";
    export class NumberCell implements ITableCellType {
        name: string;
        css: string;
    }
}
declare module "table/bool" {
    import { ITableCellType } from "table/cell";
    import "./bool.scss";
    export class BoolCell implements ITableCellType {
        name: string;
        editor: string;
        viewer: string;
    }
}
declare module "utils/remote-data-provider" {
    import { IDataProvider } from "utils/data-provider";
    export function postData(url?: string, data?: {}): Promise<any>;
    export class RemoteDataProvider implements IDataProvider {
        name: string;
        url: string;
        constructor(name: string, url: string);
        getData(limit: number, offset: number, order: any[], filters: any[], key: any, back: boolean, callback: (data: any, start: number, coumt: number, back: boolean) => void): void;
        getSummary(func: string, field: string, filters: any[], callback: (value: any) => void): void;
        getColumnData(columnName: string, filter: any, limit: number, offset: number, callback: (value: any) => void): void;
        saveData(keyName: string, key: any, modify: {}): boolean;
        insertData(keyName: string, modify: {}): boolean;
        deleteData(keyName: string, keys: any[], callback: any): void;
    }
}
declare module "index" {
    export * from "core/action";
    export * from "core/actions";
    export * from "core/dropdown-actions";
    export * from "find";
    export * from "table/index";
    export * from "table/cell";
    export * from "table/column";
    export * from "table/summary";
    export * from "table/column-filter";
    export * from "table/column-filter-item";
    export * from "table/filter-default";
    export * from "table/filter-select";
    export * from "table/number";
    export * from "table/bool";
    export * from "utils/array-data-provider";
    export * from "utils/remote-data-provider";
    export * from "utils/utils";
    export * from "icon";
}
declare module "react/index" {
    import { HashTableStorage } from "core/base";
    export * from "react/abris-component";
    export * from "react/table/index";
    export * from "react/table/cell";
    export * from "react/table/cell-editor";
    export * from "react/table/cell-viewer";
    export * from "react/table/row";
    export * from "react/table/summary";
    export * from "react/table/search";
    export * from "react/table/column-filter";
    export * from "react/table/filter-select";
    export * from "react/widgets/action";
    export * from "react/widgets/actions";
    export * from "react/widgets/dropdown-actions";
    export * from "react/table/bool-cell-editor";
    export * from "react/table/bool-cell-viewer";
    export * from "index";
    export class ReactHashTableStorage extends HashTableStorage {
        private linkArrayToObservable;
        getValue(name: string, defaultValue?: any): any;
        setValue(name: string, val: any): void;
    }
}
declare module 'table4react' { import main = require('react/index'); export = main; }
