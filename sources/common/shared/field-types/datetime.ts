import { IFieldType } from "../domain";
import { Localization } from "../../localization";
import { Editor } from "../editor";

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

Editor.setInputType("datetime", "datetime-local");