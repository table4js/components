import { Localization } from "../../localization";
import { ITableCellType, TableCell } from "../cell";

export class BoolCell implements ITableCellType {
    name: string = "bool";
    css: string = "table4js-cell--center";
    getCellText = (val: any) => {
        if(val===true || val==="t") {
            return Localization.getString("true");
        }
        return Localization.getString("false");
    }
}

TableCell.registerCellType(new BoolCell());