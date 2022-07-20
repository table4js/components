import { Base } from "../core/base";
import { property } from "../core/property";
import { IAggregate } from "../find";
import { IDataProviderOwner } from "../utils/data-provider";
import { ITableCell } from "./cell";
import { FilterContext } from "./filter-context";

export interface ITableColumnDescription {
    name: string;
    title: string;
    type: string;
    visible: boolean;
    // filter: any;
    // filterContext: FilterContext,
    // order: string,
    // count: number,
    // prev: ITableCell,
    // prevValue: any,
    // concatPrev: boolean,
    // last: ITableCell,
    // row_color: string
}

export interface ITableColumn extends ITableColumnDescription {
    // name: string;
    // title: string;
    // type: string;
    // visible: boolean;
    filter: any;
    filterContext: FilterContext,
    order: boolean,
    summaryValue: any,
    summaryParams: IAggregate,
    count: number,
    prev: ITableCell,
    prevValue: any,
    concatPrev: boolean,
    last: ITableCell,
    row_color: string,
    clickFilter: (column: ITableColumn, event: MouseEvent|any) => void,
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
    @property() summaryValue: any;
    @property({ onSet: (val: IAggregate, target: TableColumn) => {
        target.calculateSummary(target);
    }}) summaryParams: IAggregate;
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

    calculateSummary(column: ITableColumn): void {
        if(column.summaryParams && column.summaryParams.field === column.name && column.summaryParams.func) {
            this.table.dataProvider.getSummary(column.summaryParams.func, column.summaryParams.field, this.table["tableFilter"], (data) => column.summaryValue = data);
        }
    }

    dispose() {
    }
}