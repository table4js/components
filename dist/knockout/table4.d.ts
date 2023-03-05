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
        peekValue(name: string, defaultValue?: any): any;
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
        action: (context?: any) => void;
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
        action: (context?: any) => void;
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
declare module "core/domain" {
    export interface IFieldDescription {
        name: string;
        title: string;
        type: string;
        visible: boolean;
    }
    export interface IFieldType {
        name: string;
        css?: string;
        component?: string;
        getText?: (val: any) => string;
    }
}
declare module "utils/data-provider" {
    export interface IListDataProvider {
        getData(limit: number, offset: number, order: any[], filters: any[], key: null, back: boolean, callback: (data: any, newOffset: number, totalCount: number, back: any) => void): any;
        getSummary(func: string, field: string, filters: any[], callback: (value: any) => void): any;
        getColumnData: (column: any, value: any, limit: any, offset: any, callback: any) => void;
    }
    export interface ICRUDDataProvider {
        saveData: (keyName: string, key: any, modify: {}) => boolean;
        insertData: (keyName: string, modify: {}) => boolean;
        deleteData: (keyName: string, keys: any[], callback: any) => void;
    }
    export interface IDataProvider extends IListDataProvider, ICRUDDataProvider {
    }
    export interface IDataProviderOwner {
        get dataProvider(): IDataProvider;
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
            true: string;
            false: string;
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
        clickFilter: (column: ITableColumn, event: MouseEvent | any) => void;
    }
}
declare module "table/column" {
    import { Base } from "core/base";
    import { IFieldDescription } from "core/domain";
    import { IDataProviderOwner } from "utils/data-provider";
    import { ITableCell } from "table/cell";
    import { FilterContext } from "table/column-filter";
    export interface ITableColumn extends IFieldDescription {
        filterContext: FilterContext;
        order: boolean;
        count: number;
        prev: ITableCell;
        prevValue: any;
        concatPrev: boolean;
        last: ITableCell;
        row_color: string;
        [name: string]: any;
    }
    export class TableColumn extends Base implements ITableColumn {
        private table;
        constructor(columnDescription: IFieldDescription, table: IDataProviderOwner);
        filterContext: FilterContext;
        order: boolean;
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
        dispose(): void;
    }
}
declare module "table/cell" {
    import { Base } from "core/base";
    import { IFieldDescription, IFieldType } from "core/domain";
    import { ITableColumn } from "table/column";
    export interface ITableCell {
        rowData: any;
        data: any;
        name: string;
        text: string;
        count: number;
        color: string;
        css: string;
        update(): void;
    }
    export class TableCell extends Base implements ITableCell {
        private static cellTypes;
        static registerCellType(cellType: IFieldType): void;
        static getContainerCss(cell: ITableCell, isMergedCell: boolean): string;
        static getContentCss(cell: ITableCell | TableCell, isMergedCell: boolean): string;
        private _isUpdating;
        type: string;
        rowData: {};
        isModified: boolean;
        data: any;
        text: string;
        count: number;
        color: string;
        name: string;
        css: string;
        protected getCellTypeDescription(type: string): IFieldType;
        protected getCellCss(data: any, column: IFieldDescription): string;
        protected getCellText(val: any): string;
        get component(): string;
        initialize(col: ITableColumn, back: boolean, rowData: any, color: string): void;
        update(): void;
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
        mode: string;
        css: string;
        select: (data: ITableRow, event: any) => void;
        click: (data: ITableRow, event: any) => void;
        getRowComponent: () => string;
        getRowComponentParams: (params: any) => any;
        getCellComponent: (cell: ITableCell) => string;
        getCellComponentParams: (params: any) => any;
        update(): void;
    }
    export class TableRow extends Base implements ITableRow {
        rowData: ITableRowData;
        id: any;
        number: number;
        mode: string;
        selected: boolean;
        color: string;
        select: (data: ITableRow, event: any) => void;
        click: (data: ITableRow, event: any) => void;
        cells: ITableCell[];
        getRowComponent(): string;
        getRowComponentParams(params: any): any;
        getCellComponent(cell: ITableCell): string;
        getCellComponentParams(params: any): any;
        get css(): string;
        update(): void;
    }
}
declare module "table/summary" {
    import { ITablePlugin, Table } from "table/index";
    import { Base } from "core/base";
    import { IAction } from "core/action";
    import { ITableColumn } from "table/column";
    import { ITableRow } from "table/row";
    import { IFieldDescription } from "core/domain";
    import "./summary.scss";
    export class SummaryItem {
        title: string;
        value: string;
        constructor(title: string, value: string);
    }
    export class FieldSummary extends Base {
        private table;
        private field;
        constructor(table: Table, field: IFieldDescription);
        calculateSummary(): void;
        value: number;
        func: any;
        summaryItems: Array<SummaryItem>;
    }
    export class SummaryPlugin implements ITablePlugin {
        private _table;
        name: string;
        init(table: Table): void;
        getActions(): IAction[];
        onColumnCreated(column: ITableColumn): void;
        onRowCreated(row: ITableRow): void;
    }
}
declare module "widgets/editor" {
    import { Base } from "core/base";
    import "./editor.scss";
    export class Editor extends Base {
        private _data;
        private name;
        private onComplete?;
        static inputTypes: {
            number: string;
            currency: string;
            indicator: string;
            progress: string;
            date: string;
            datetime: string;
        };
        static getInputType(type: string): any;
        static editors: {
            default: string;
            bool: string;
        };
        constructor(_data: any, name: string, onComplete?: (value: any, commit: boolean) => void);
        value: any;
        get isModified(): boolean;
        get css(): string;
        get data(): any;
        set data(val: any);
        complete(commit: boolean): void;
    }
}
declare module "icons/index" {
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
declare module "table/editor" {
    import { ITablePlugin, Table } from "table/index";
    import { IAction } from "core/action";
    import { ITableColumn } from "table/column";
    import { ITableRow } from "table/row";
    export class EditorPlugin implements ITablePlugin {
        protected _table: Table;
        protected _editedRow: ITableRow;
        name: string;
        init(table: Table): void;
        protected saveRow(row: ITableRow): boolean;
        protected add(): ITableRow;
        protected save(): void;
        protected delete(): void;
        protected startEditRow(row: ITableRow): void;
        protected endEditRow(commit: boolean): void;
        getActions(): IAction[];
        onColumnCreated(column: ITableColumn): void;
        onRowCreated(row: ITableRow): void;
    }
}
declare module "table/editor-inplace" {
    import { ITableRow } from "table/row";
    import { EditorPlugin } from "table/editor";
    export class InplaceEditorPlugin extends EditorPlugin {
        private _activeEditors;
        name: string;
        protected startEditRow(row: ITableRow): void;
        protected endEditRow(commit: boolean): void;
        onRowCreated(row: ITableRow): void;
    }
}
declare module "widgets/property" {
    import { Base } from "core/base";
    import { IFieldDescription, IFieldType } from "core/domain";
    import { Editor } from "widgets/editor";
    import "./property.scss";
    export class Property extends Base {
        private field;
        private static propertyTypes;
        static registerPropertyType(propertyType: IFieldType): void;
        constructor(field: IFieldDescription);
        editor: Editor;
        get type(): string;
        get name(): string;
        get value(): any;
        set value(val: any);
        get hasValue(): boolean;
        title: string;
        isModified: boolean;
        isReadOnly: boolean;
        obj: any;
        get css(): string;
        protected getPropertyTypeDescription(type: string): IFieldType;
        protected getPropertyCss(data: any, field: IFieldDescription): string;
        protected getText(val: any): string;
        get component(): string;
        get inputType(): any;
        complete(commit: boolean): void;
    }
}
declare module "widgets/form" {
    import { Base } from "core/base";
    import { IFieldDescription } from "knockout/index";
    import { Property } from "widgets/property";
    import "./form.scss";
    export interface IFormElement {
        name: string;
        title?: string;
    }
    export interface IFormLayout {
        elements: Array<IFormElement>;
    }
    export class Form extends Base {
        private fields;
        private layout?;
        private _properties;
        constructor(fields: Array<IFieldDescription>, layout?: IFormLayout);
        object: any;
        get properties(): Array<Property>;
        complete(commit: boolean): void;
    }
}
declare module "table/editor-row" {
    import { ITableRow } from "table/row";
    import { EditorPlugin } from "table/editor";
    export class RowEditorPlugin extends EditorPlugin {
        private _form;
        name: string;
        protected startEditRow(row: ITableRow): void;
        protected endEditRow(commit: boolean): void;
        onRowCreated(row: ITableRow): void;
    }
}
declare module "table/index" {
    import { Base } from "core/base";
    import { IAction } from "core/action";
    import { ITableColumn } from "table/column";
    import { SearchModel } from "table/search";
    import { IDataProvider, IDataProviderOwner } from "utils/data-provider";
    import { ITableRow } from "table/row";
    import * as Icons from "icons/index";
    import "./index.scss";
    import { IFieldDescription } from "core/domain";
    /**
     * Parameters for customizing the table view.
     */
    export interface ITableConfig extends IDataProvider {
        /** Description of columns */
        columns: Array<IFieldDescription>;
        /** Permission to display the search bar */
        enableSearch?: boolean;
        /** Permission to display summary panel */
        enableSummary?: boolean;
        /** Permission to display merged cells toggle */
        enableMergedCellsToggle?: boolean;
        /** The primary value of the parameter for merging cells */
        enableMergedCells?: boolean;
        /** Permission to edit data */
        enableEdit?: boolean;
        /** Actions to display in the table actions panel */
        actions?: Array<IAction>;
        /** The key field of the table. Needed to edit the table. */
        keyColumn?: string;
        /** Setting the color for selected cells in case the selection is set using an attached boolean column. The color is set according to the rules of CSS. */
        selectCellColor?: string;
        /** Table plugins array */
        plugins?: Array<ITablePlugin>;
    }
    export interface ITableFilter {
        value: string;
        op: string;
        field: string;
    }
    export interface ITablePlugin {
        name: string;
        init(table: Table): void;
        getActions(): Array<IAction>;
        onColumnCreated(column: ITableColumn): void;
        onRowCreated(row: ITableRow): void;
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
        navigateTo(startRow: number): void;
        protected createColumn(column: any, model: ITableConfig): ITableColumn;
        protected createColumns(config: ITableConfig): void;
        protected createActions(config: ITableConfig): void;
        private _dataProvider;
        get dataProvider(): IDataProvider;
        set dataProvider(provider: IDataProvider);
        set data(_data: Array<any>);
        refresh(): void;
        drawRows(limit: number, offset: number, back?: boolean): void;
        protected clickRow(row: ITableRow, event: any): void;
        protected selectRow(row: ITableRow, event: any): void;
        clickColumn: (column: ITableColumn, event: any) => void;
        createRow(data: {
            [key: string]: string | number;
        }, num: number, back?: boolean): ITableRow;
        get allowRowSelection(): boolean;
        private curCol;
        private nxtCol;
        private pageX;
        private nxtColWidth;
        private curColWidth;
        logMouseOver: (d: any, e: any) => void;
        logMouseOut: (d: any, e: any) => void;
        logMouseMove: (d: any, e: any) => void;
        logMouseDown: (d: any, e: any) => void;
        logMouseUp: (d: any, e: any) => boolean;
        paddingDiff(col: any): number;
        getStyleVal(elm: any, css: any): string;
        protected rootLevel: any;
        isNumber: boolean;
        isMergedCells: boolean;
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
        searchModel: SearchModel;
        getActions: (container?: string) => any[];
        get topActions(): any[];
        get dropdownActions(): any[];
        get bottomActions(): any[];
        get rowActions(): any[];
        get noDataText(): any;
        private plugins;
        registerPlugin(plugin: ITablePlugin): ITablePlugin;
        unregisterPlugin(pluginName: string): ITablePlugin;
    }
}
declare module "knockout/table/row" {
    export var rowTemplate: any;
}
declare module "knockout/table/cell" {
    export var cellTemplate: any;
}
declare module "knockout/table/cell-types/default" {
    export var cellDefaultTemplate: any;
}
declare module "table/cell-types/indicator" {
    import { IFieldType } from "core/domain";
    import "./indicator.scss";
    export class IndicatorCell implements IFieldType {
        name: string;
        css: string;
        component: string;
        static threshold: number;
        static greaterColor: any;
        static lessColor: any;
    }
}
declare module "knockout/table/cell-types/indicator" {
    export var cellIndicatorTemplate: any;
}
declare module "table/cell-types/progress" {
    import { IFieldType } from "core/domain";
    import "./progress.scss";
    export class ProgressCell implements IFieldType {
        name: string;
        css: string;
        component: string;
    }
}
declare module "knockout/table/cell-types/progress" {
    export var cellProgressTemplate: any;
}
declare module "knockout/table/summary" {
    export var summaryTemplate: any;
}
declare module "knockout/table/search" {
    export var searchTemplate: any;
}
declare module "knockout/table/filter-default" { }
declare module "knockout/table/column-filter" { }
declare module "knockout/table/column-filter-item" { }
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
declare module "knockout/table/filter-select" { }
declare module "knockout/core/action" {
    export var ActionItemWidget: any;
}
declare module "knockout/core/actions" {
    export var AbrisActionsWidget: any;
}
declare module "knockout/core/dropdown-actions" {
    export var AbrisDropdownActions: any;
}
declare module "knockout/core/icon" {
    export var AbrisIconWidget: any;
}
declare module "knockout/table/cell-editor" {
    export var cellEditorTemplate: any;
}
declare module "knockout/table/row-editor" {
    export var rowEditorTemplate: any;
}
declare module "knockout/widgets/default" {
    export var defaultEditorTemplate: any;
}
declare module "knockout/widgets/checkbox" {
    export var boolEditorTemplate: any;
}
declare module "knockout/widgets/property" {
    export var propertyEditorTemplate: any;
}
declare module "knockout/widgets/form" {
    export var formEditorTemplate: any;
}
declare module "core/actions" {
    import "./actions.scss";
}
declare module "core/dropdown-actions" {
    import "./dropdown-actions.scss";
}
declare module "core/field-types/bool" {
    import { IFieldType } from "core/domain";
    export class BoolField implements IFieldType {
        name: string;
        css: string;
        getText: (val: any) => any;
    }
}
declare module "core/field-types/currency" {
    import { IFieldType } from "core/domain";
    export class CurrencyField implements IFieldType {
        static prefix: string;
        static suffix: string;
        static precision: number;
        name: string;
        css: string;
        getText: (val: any) => string;
    }
}
declare module "core/field-types/date" {
    import { IFieldType } from "core/domain";
    export class DateField implements IFieldType {
        name: string;
        getText: (val: any) => string;
    }
}
declare module "core/field-types/datetime" {
    import { IFieldType } from "core/domain";
    export class DateTimeField implements IFieldType {
        name: string;
        getText: (val: any) => string;
    }
}
declare module "core/field-types/number" {
    import { IFieldType } from "core/domain";
    export class NumberField implements IFieldType {
        name: string;
        css: string;
    }
}
declare module "table/filter-default" {
    import "./filter-default.scss";
}
declare module "table/cell-types/bool" { }
declare module "table/cell-types/currency" { }
declare module "table/cell-types/date" { }
declare module "table/cell-types/datetime" { }
declare module "table/cell-types/number" { }
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
    export * from "core/domain";
    export * from "core/field-types/bool";
    export * from "core/field-types/currency";
    export * from "core/field-types/date";
    export * from "core/field-types/datetime";
    export * from "core/field-types/number";
    export * from "find";
    export * from "table/index";
    export * from "table/cell";
    export * from "table/column";
    export * from "table/summary";
    export * from "table/column-filter";
    export * from "table/column-filter-item";
    export * from "table/filter-default";
    export * from "table/filter-select";
    export * from "table/cell-types/bool";
    export * from "table/cell-types/currency";
    export * from "table/cell-types/date";
    export * from "table/cell-types/datetime";
    export * from "table/cell-types/indicator";
    export * from "table/cell-types/number";
    export * from "table/cell-types/progress";
    export * from "widgets/editor";
    export * from "table/editor";
    export * from "table/editor-inplace";
    export * from "table/editor-row";
    export * from "utils/array-data-provider";
    export * from "utils/remote-data-provider";
    export * from "utils/utils";
    export * from "icons/index";
}
declare module "knockout/index" {
    import * as ko from "knockout";
    import { HashTableStorage } from "core/base";
    export * from "knockout/table/row";
    export * from "knockout/table/cell";
    export * from "knockout/table/cell-types/default";
    export * from "knockout/table/cell-types/indicator";
    export * from "knockout/table/cell-types/progress";
    export * from "knockout/table/summary";
    export * from "knockout/table/search";
    export * from "knockout/table/filter-default";
    export * from "knockout/table/column-filter";
    export * from "knockout/table/column-filter-item";
    export * from "knockout/table/filter-select";
    export * from "knockout/core/action";
    export * from "knockout/core/actions";
    export * from "knockout/core/dropdown-actions";
    export * from "knockout/core/icon";
    export * from "knockout/table/cell-editor";
    export * from "knockout/table/row-editor";
    export * from "knockout/widgets/default";
    export * from "knockout/widgets/checkbox";
    export * from "knockout/widgets/property";
    export * from "knockout/widgets/form";
    export * from "index";
    export const KnockoutInstance: typeof ko;
    export class KnockoutHashTableStorage extends HashTableStorage {
        private linkArrayToObservable;
        private createObservable;
        getValue(name: string, defaultValue?: any): any;
        setValue(name: string, val: any): void;
        peekValue(name: string, defaultValue?: any): any;
    }
    export var tableTemplate: any;
}
declare module 'table4ko' { import main = require('knockout/index'); export = main; }
