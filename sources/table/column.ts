import { Observable } from "knockout";
import { IAggregate } from "../find";
import { FilterContext } from "./filter";

export interface ITableColumnDescription {
    name: string;
    title: string;
    type: string;
    visible: boolean;
    // filter: any;
    // filterContext: any,
    // order: ko.Observable<string>,
    // count: number,
    // prev: any,
    // prevValue: any,
    // concatPrev: boolean,
    // last: any,
    // row_color: string
}

export interface ITableColumn extends ITableColumnDescription {
    // name: string;
    // title: string;
    // type: string;
    // visible: boolean;
    filter: any;
    filterContext: any,
    order: ko.Observable<string>,
    summaryValue: ko.Observable<any>,
    summaryParams: ko.Observable<IAggregate>,
    count: number,
    prev: any,
    prevValue: any,
    concatPrev: boolean,
    last: any,
    row_color: string
}

export class TableColumn implements ITableColumn {

    constructor(columnDescription: ITableColumnDescription) {
        Object.keys(columnDescription || {}).forEach(key => {
            if(columnDescription[key] !== undefined) {
                this[key] = columnDescription[key];
            }
        });
        if(this.title === undefined) {
            this.title = this.name;
        }
    }

    filter: any;
    filterContext: any = new FilterContext();
    order: Observable<string> = ko.observable<string>();
    summaryValue: Observable<any> = ko.observable();
    summaryParams: Observable<IAggregate> = ko.observable();
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
}