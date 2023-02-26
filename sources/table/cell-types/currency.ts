import { ITableCellType, TableCell } from "../cell";

export class CurrencyCell implements ITableCellType {
    static prefix ="$";
    static suffix ="";
    static precision = 2;
    name: string = "currency";
    css: string = "table4js-cell--right";
    getCellText = (val: any) => {
        if(!val || Number.isNaN(val)) {
            val = 0;
        }
        let result = !!CurrencyCell.prefix ? (CurrencyCell.prefix + " ") : "";
        result += parseFloat(val).toFixed(CurrencyCell.precision).toString();
        if(!!CurrencyCell.suffix) {
            result += " " + CurrencyCell.suffix;
        }
        return result;
    }
}

TableCell.registerCellType(new CurrencyCell());