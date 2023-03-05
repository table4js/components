import { IFieldType } from "../domain";
import { Localization } from "../../localization";

export class DateTimeField implements IFieldType {
    name: string = "datetime";
    getText = (val: any) => {
        let result = "";
        try {
            const date = new Date(val || "");
            result = date.toLocaleString();
        } catch {
        }
        return result;
    }
}
