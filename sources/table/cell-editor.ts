import { Base } from "../core/base";
import { property } from "../core/property";
import { ITableCell } from "./cell";

import "./cell-editor.scss";

export class InplaceEditor extends Base {
    constructor(private cell: ITableCell) {
        super();
        this.value = this.cell.data;
    }
    @property() value: any;
    complete(commit: boolean) {
        if(commit) {
            this.cell.data = this.value;
        }
        this.cell.inplaceEditor = undefined;
    }
    processKeyUp(event: KeyboardEvent) {
        if(event.keyCode === 13 || event.keyCode === 27) {
            this.complete(event.keyCode === 13);
        }        
    }
}
