import { Base } from "../core/base";
import { property } from "../core/property";
import { ITableCell } from "./cell";

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
    cells: Array<ITableCell>,
    /** The collection of data for a table row */
    rowData: ITableRowData,
    /**  */
    id: any,
    /**  */
    number: number,
    selected: boolean,
    color: string,
    select: (data: ITableRow, event) => void,
    click: (data: ITableRow, event) => void,
    getCellComponent(cell: ITableCell): string
}

export class TableRow extends Base implements ITableRow {
    rowData: ITableRowData;
    id: any;
    number: number;
    @property({ defaultValue: false }) selected: boolean;
    @property() color: string;
    select: (data: ITableRow, event: any) => void;
    click: (data: ITableRow, event: any) => void;
    @property({ defaultValue: [] }) cells: ITableCell[];
    public getCellComponent(cell: ITableCell): string {
        return "table4js-cell";
    }
}