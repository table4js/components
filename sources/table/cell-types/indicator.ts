import { IFieldType } from "../../core/domain";
import { Editor } from "../../core/editor";
import { TableCell } from "../cell";

import "./indicator.scss";

export class IndicatorCell implements IFieldType {
    name: string = "indicator";
    css: string = "table4js-cell--center"
    component: string = "table4js-cell-indicator";
    static threshold: number = 0.5;
    static greaterColor: any = "lightgreen";
    static lessColor: any = "pink";
}

Editor.setInputType("indicator", "number");

TableCell.registerCellType(new IndicatorCell());