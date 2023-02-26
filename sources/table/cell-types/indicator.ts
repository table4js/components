import { ITableCellType, TableCell } from "../cell";

import "./indicator.scss";

export class IndicatorCell implements ITableCellType {
    name: string = "indicator";
    css: string = "table4js-cell--center"
    component: string = "table4js-cell-indicator";
    static threshold: number = 0.5;
    static greaterColor: any = "green";
    static lessColor: any = "red";
}

TableCell.registerCellType(new IndicatorCell());