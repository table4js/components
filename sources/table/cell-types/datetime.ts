import { Localization } from "../../localization";
import { ITableCellType, TableCell } from "../cell";

export class DateTimeCell implements ITableCellType {
    name: string = "datetime";
    getCellText = (val: any) => {
        let result = "";
        try {
            const date = new Date(val || "");
            result = date.toLocaleString();
        } catch {
        }
        return result;
    }
}

TableCell.registerCellType(new DateTimeCell());