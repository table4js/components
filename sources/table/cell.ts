import { Base } from "../core/base";
import { property } from "../core/property";
import { ITableColumn, ITableColumnDescription } from "./column";

export interface ITableCellType {
    name: string;
    css: string;
}

export interface ITableCell {
    data: any;
    name: string;
    text: string;
    count: number;
    color: string;
    css: string;
    inplaceEditor: any;
    editor?: string;
    viewer?: string;
}

export class TableCell extends Base implements ITableCell {
    public static cellTypes = {
        "default": {
            css: "abris-table-cell--left"
        },
    };
    public static registerCellType(cellType: ITableCellType) {
        TableCell.cellTypes[cellType.name] = cellType;
    }

    public static getContainerCss(cell: ITableCell, isMergedCell: boolean) {
        let containerCss = "abris-table-cell__container " + cell.css;
        if(isMergedCell) {
          containerCss += " cell__sticky-text";
        }
        return containerCss;        
    }
    public static getContentCss(cell: ITableCell, isMergedCell: boolean) {
        let contentCss = isMergedCell ? "abris-table-cell__text--merged" : "abris-table-cell__text";
        if(cell.text !== cell.data) {
          contentCss += " abris-table-cell__text--modified";
        }
        return contentCss;        
    }

    @property() data: any;
    @property() text: string; 
    @property({ defaultValue: 1 }) count: number;
    @property() color: string;
    @property() name: string;
    @property() inplaceEditor: any;
    @property() css: string;
    editor = "abris-cell-editor";
    viewer = "abris-cell-viewer";

    protected getCellCss(data: any, column: ITableColumnDescription): string {
        const cellTypeDescription = TableCell.cellTypes[column.type] || TableCell.cellTypes["default"];
        return cellTypeDescription.css;
    }

    public initialize(col: ITableColumn, back: boolean, data: any, text: string, color: string) {
        this.data = data[col.name],
        this.text = text, 
        this.color = color;
        this.name = col.name;
        this.css = this.getCellCss(data, col);
        if(back !== null) {
            if (back) {
                if (col.last && col.last.text === this.text) {
                    this.count = col.last.count + 1;
                    col.last.count = 0;
                    if (col.last == col.prev) {
                        col.prev = this;
                        col.count = this.count;
                    }
                }
                col.last = this;
            }
            else {
                if (col.last === null) col.last = this;
                if(col.prevValue && (col.prevValue === this.text)) {
                    col.count++;
                    this.count = 0;
                    col.prev.count = col.count;
                }
                else {
                    col.count = 1;
                    col.prev = this;
                    col.prevValue = this.text;
                }
            }
        }
    }
}