import * as ko from "knockout";
import { ITableColumn } from "./column";

export class FilterContext {
    constructor() {
        this.addItem((column: ITableColumn) => {
            this.showFilter(true);
        });
    }
    showFilter = ko.observable<boolean>(false);
    addItem = ko.observable<(column: ITableColumn) => void>();
    value = ko.observable<any>();
}