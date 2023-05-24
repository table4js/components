import { Editor } from "../editor";
import { IFieldType } from "../domain";

export class ReferenceField implements IFieldType {
    name: string = "reference";
    entity: string;
    getText = (val: any) => {
        const date = new Date(val || "");
        return !!val && (val.title || val.id || JSON.stringify(val));
    }
}

Editor.setComponent("reference", "table4js-reference-editor");