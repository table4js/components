import { IFieldType } from "../domain";
import { Localization } from "../../localization";

export class BoolField implements IFieldType {
    name: string = "bool";
    css: string = "table4js-cell--center";
    getText = (val: any) => {
        if(val === true || val === "t" || val === "true") {
            return Localization.getString("true");
        }
        return Localization.getString("false");
    }
}

// export const boolConverter = {
//     from: (val: any): boolean => val === true || val === "t" || val === "true",
//     to: (val: boolean): any => val === true ? true : false
// };
