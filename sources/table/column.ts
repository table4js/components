import { Base } from "../core/base";
import { property } from "../core/property";
import { IDataProviderOwner } from "../utils/data-provider";
import { ITableCell } from "./cell";
import { FilterContext } from "./column-filter";

export interface ITableColumnDescription {
    name: string;
    title: string;
    type: string;
    visible: boolean;
}

export interface ITableColumn extends ITableColumnDescription {
    filter: any;
    filterContext: FilterContext,
    order: boolean,
    count: number,
    prev: ITableCell,
    prevValue: any,
    concatPrev: boolean,
    last: ITableCell,
    row_color: string,
    clickFilter: (column: ITableColumn, event: MouseEvent|any) => void,
    [name: string]: any;
}

export class TableColumn extends Base implements ITableColumn {

    constructor(columnDescription: ITableColumnDescription, private table: IDataProviderOwner) {
        super();
        Object.keys(columnDescription || {}).forEach(key => {
            if(columnDescription[key] !== undefined) {
                this[key] = columnDescription[key];
            }
        });
        if(this.title === undefined) {
            this.title = this.name;
        }
        this.filterContext = new FilterContext(this, table);
    }

    filter: any;
    filterContext: FilterContext;
    @property() order: boolean;
    count: number;
    prev: any;
    prevValue: any;
    concatPrev: boolean;
    last: any;
    row_color: string;
    name: string;
    title: string;
    type: string = "string";
    visible: boolean = true;

    public clickFilter = (column: ITableColumn, event: MouseEvent|any) => {
        column.filterContext.addItem(column);
        event.stopPropagation();
    }

    dispose() {
    }
}