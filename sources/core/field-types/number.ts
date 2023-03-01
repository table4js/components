import { IFieldType } from "../domain";

export class NumberField implements IFieldType {
    name: string = "number";
    css: string = "table4js-cell--right"
}
