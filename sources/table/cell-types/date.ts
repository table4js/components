import { Localization } from "../../localization";
import { ITableCellType, TableCell } from "../cell";

export class DateCell implements ITableCellType {
    name: string = "date";
    getCellText = (val: any) => {
        let result = "";
        try {
            const date = new Date((val || "").split("T")[0]);
            result = date.toLocaleDateString();
        } catch {
        }
        return result;
    }
}

TableCell.registerCellType(new DateCell());