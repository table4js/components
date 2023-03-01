import { IFieldType } from "../domain";
import { Localization } from "../../localization";

export class DateField implements IFieldType {
    name: string = "date";
    getText = (val: any) => {
        let result = "";
        try {
            const date = new Date((val || "").split("T")[0]);
            result = date.toLocaleDateString();
        } catch {
        }
        return result;
    }
}
