import { Base } from "../core/base";
import { property } from "../core/property";
import { ITableColumn, ITableColumnDescription } from "./column";

export interface ITableCellType {
    name: string;
    css?: string;
    component?: string;
    getCellText?: (val: any) => string;
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
    private static cellTypes: {[name: string]: ITableCellType} = {
        "default": {
            name: "default",
            css: "table4js-cell--left",
            getCellText: (val: any): string => typeof val === "object" ? JSON.stringify(val) : val as string,
            component: "table4js-cell-default"
        },
    };
    public static registerCellType(cellType: ITableCellType) {
        TableCell.cellTypes[cellType.name] = cellType;
    }

    public static getContainerCss(cell: ITableCell, isMergedCell: boolean) {
        let containerCss = "table4js-cell__container " + cell.css;
        if (isMergedCell) {
            containerCss += " cell__sticky-text";
        }
        return containerCss;
    }
    public static getContentCss(cell: ITableCell | TableCell, isMergedCell: boolean) {
        let contentCss = isMergedCell ? "table4js-cell__text--merged" : "table4js-cell__text";
        if (cell instanceof TableCell && cell.isModified) {
            contentCss += " table4js-cell__text--modified";
        }
        return contentCss;
    }

    type: string = "default";

    public rowData = {};

    @property({ defaultValue: false }) isModified: boolean;
    @property({
        onSet: (val, target: TableCell) => {
            if (target.text !== val) {
                target.text = target.getCellText(val);
                target.isModified = true;
            }
        }
    }) data: any;
    @property() text: string;
    @property({ defaultValue: 1 }) count: number;
    @property() color: string;
    @property() name: string;
    @property() inplaceEditor: any;
    @property() css: string;

    protected getCellTypeDescription(type: string) {
        return TableCell.cellTypes[type] || TableCell.cellTypes["default"]
    }
    protected getCellCss(data: any, column: ITableColumnDescription): string {
        return this.getCellTypeDescription(column.type).css;
    }
    protected getCellText(val: any): string {
        const cellTypeDescription = this.getCellTypeDescription(this.type);
        if(!!cellTypeDescription && typeof cellTypeDescription.getCellText === "function") {
            return cellTypeDescription.getCellText(val);
        } 
        return this.getCellTypeDescription("default").getCellText(val);
    }

    get component() {
        const cellTypeDescription = this.getCellTypeDescription(this.type);
        if(!!cellTypeDescription && !!cellTypeDescription.component) {
            return cellTypeDescription.component;
        }
        return this.getCellTypeDescription("default").component;
    }

    public initialize(col: ITableColumn, back: boolean, rowData: any, color: string) {
        this.type = col.type;
        this.rowData = rowData;
        this.data = rowData[col.name];
        this.color = color;
        this.name = col.name;
        this.css = this.getCellCss(rowData, col);
        if (back !== null) {
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
                if (col.prevValue && (col.prevValue === this.text)) {
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
        this.isModified = false;
    }
}