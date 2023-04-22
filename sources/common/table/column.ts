import { Base } from "../shared/base";
import { IFieldDescription } from "../shared/domain";
import { property } from "../shared/property";
import { IDataProviderOwner } from "../shared/data-provider/data-provider";
import { ITableCell } from "./cell";

export interface ITableColumn extends IFieldDescription {
    order: boolean,
    count: number,
    prev: ITableCell,
    prevValue: any,
    concatPrev: boolean,
    last: ITableCell,
    row_color: string,
    [name: string]: any;
}

export class TableColumn extends Base implements ITableColumn {

    constructor(columnDescription: IFieldDescription) {
        super();
        Object.keys(columnDescription || {}).forEach(key => {
            if (columnDescription[key] !== undefined) {
                this[key] = columnDescription[key];
            }
        });
        if (this.title === undefined) {
            this.title = this.name;
        }
    }

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

    dispose() {
    }
}