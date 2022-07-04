import { Base } from "../core/base";
import { property } from "../core/property";
import { IAggregate } from "../find";
import { ITableCell } from "./cell";
import { FilterContext } from "./filter";

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
    order: string,
    summaryValue: any,
    summaryParams: IAggregate,
    count: number,
    prev: ITableCell,
    prevValue: any,
    concatPrev: boolean,
    last: ITableCell,
    row_color: string
}

export interface ITableColumnOwner {
    calculateSummary(column: ITableColumn): void;
}

export class TableColumn extends Base implements ITableColumn {

    constructor(columnDescription: ITableColumnDescription, private owner) {
        super();
        Object.keys(columnDescription || {}).forEach(key => {
            if(columnDescription[key] !== undefined) {
                this[key] = columnDescription[key];
            }
        });
        if(this.title === undefined) {
            this.title = this.name;
        }
    }

    get filterComponentName() {
        return "abris-table-filter-default";
    }

    filter: any;
    filterContext = new FilterContext();
    @property() order: string;
    @property() summaryValue: any;
    @property({ onSet: (val: IAggregate, target: TableColumn) => {
        target.owner.calculateSummary(target);
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

    dispose() {
    }
}