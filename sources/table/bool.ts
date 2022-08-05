import { ITableCellType, TableCell } from "./cell";

import "./bool.scss";

export class BoolCell implements ITableCellType {
    name: string = "bool";
    editor: string = "bool-cell-editor";
    viewer: string = "bool-cell-viewer";
}

TableCell.registerCellType(new BoolCell());