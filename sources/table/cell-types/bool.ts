import { ITableCellType, TableCell } from "../cell";

import "./bool.scss";

export class BoolCell implements ITableCellType {
    name: string = "bool";
    css: string = "table4js-cell--center"
    component: string = "table4js-cell-bool";
}

TableCell.registerCellType(new BoolCell());