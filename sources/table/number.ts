import { ITableCellType, TableCell } from "./cell";

export class NumberCell implements ITableCellType {
    name: string = "number";
    css: string = "abris-table-cell--right"
}

TableCell.registerCellType(new NumberCell());