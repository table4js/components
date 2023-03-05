import { IFieldType } from "../domain";

export class CurrencyField implements IFieldType {
    static prefix ="$";
    static suffix ="";
    static precision = 2;
    name: string = "currency";
    css: string = "table4js-cell--right";
    getText = (val: any) => {
        if(!val || Number.isNaN(val)) {
            val = 0;
        }
        let result = !!CurrencyField.prefix ? (CurrencyField.prefix + " ") : "";
        result += parseFloat(val).toFixed(CurrencyField.precision).toString();
        if(!!CurrencyField.suffix) {
            result += " " + CurrencyField.suffix;
        }
        return result;
    }
}
