import { Base } from "../core/base";
import { property } from "../core/property";
import { ITableColumn } from "./column";

export class FilterContext extends Base {
    constructor() {
        super();
        this.addItem = (column: ITableColumn) => {
            this.showFilter = true;
        };
    }
    @property({ defaultValue: false }) showFilter: boolean;
    @property() addItem: (column: ITableColumn) => void;
    @property() value: any;
}