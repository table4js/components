import { Base } from "../core/base";
import { property } from "../core/property";

export interface ITableCell {
    data: any;
    name: string;
    text: string;
    inplaceEditForm: any;
    count: number;
    color: string;
    css: string;
}

export class TableCell extends Base implements ITableCell {
    @property() data: any;
    @property() text: string; 
    @property({ defaultValue: 1 }) count: number;
    @property() color: string;
    @property() name: string;
    @property() inplaceEditForm: any;
    @property() css: string;
}