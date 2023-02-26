import { ITableCellType, TableCell } from "../cell";

import "./progress.scss";

export class ProgressCell implements ITableCellType {
    name: string = "progress";
    css: string = "table4js-cell--right"
    component: string = "table4js-cell-progress";
}

TableCell.registerCellType(new ProgressCell());