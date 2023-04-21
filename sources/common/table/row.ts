import { Base } from "../shared/base";
import { property } from "../shared/property";
import { ITableCell } from "./cell";

import "./row.scss";

/**
 * The collection of data for a table row. The key is the name of the column. The value is the content of the table cell.
 */
export interface ITableRowData {
    /** Table cell content */
    [key: string]: string | number
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
    select: (data: ITableRow, event) => void;
    click: (data: ITableRow, event) => void;
    getRowComponent: () => string;
    getRowComponentParams: (params: any) => any;
    getCellComponent: (cell: ITableCell) => string;
    getCellComponentParams: (params: any) => any;
    update(quiet?: boolean): void;
}

export class TableRow extends Base implements ITableRow {
    rowData: ITableRowData;
    id: any;
    number: number;
    @property({ defaultValue: "default" }) mode: string;
    @property({ defaultValue: false }) selected: boolean;
    @property() color: string;
    select: (data: ITableRow, event: any) => void;
    click: (data: ITableRow, event: any) => void;
    @property({ defaultValue: [] }) cells: ITableCell[];
    public getRowComponent(): string {
        return "table4js-row";
    }
    public getRowComponentParams(params: any): any {
        return params;
    }
    public getCellComponent(cell: ITableCell): string {
        return "table4js-cell";
    }
    public getCellComponentParams(params: any): any {
        return params;
    }
    get css() {
        let result = "table4js__row table4js__row--" + this.mode;
        if (this.selected) {
            result += " table4js__row--selected";
        }
        return result;
    }
    public update(quiet = true) {
        this.cells.forEach(cell => cell.update(quiet));
    }
}   