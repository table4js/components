import { ITableCellType, TableCell } from "../cell";

export class NumberCell implements ITableCellType {
    name: string = "number";
    css: string = "table4js-cell--right"
}

TableCell.registerCellType(new NumberCell());