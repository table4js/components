import { IFieldType } from "../../core/domain";
import { Editor } from "../../core/editor";
import { TableCell } from "../cell";

import "./progress.scss";

export class ProgressCell implements IFieldType {
    name: string = "progress";
    css: string = "table4js-cell--right"
    component: string = "table4js-cell-progress";
}

Editor.setInputType("progress", "number");

TableCell.registerCellType(new ProgressCell());