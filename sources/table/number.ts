import { ITableCellType, TableWidget } from ".";

export class NumberCell implements ITableCellType {
    name: string = "number";
    css: string = "abris-table-cell--right"
}

TableWidget.registerCellType(new NumberCell());