import { Base } from "../core/base";
import { property } from "../core/property";

import "./editor.scss";

export class Editor extends Base {
    public static inputTypes = {
        number: "number",
        currency: "number",
        indicator: "number",
    };
    public static getInputType(type: string) {
      return Editor.inputTypes[type];
    }
    public static editors = {
        default: "table4js-default-editor",
        bool: "table4js-checkbox-editor",
    };

    constructor(private data: any, private name: string, private onComplete?: (value: any, commit: boolean) => void) {
        super();
        this.value = this.data[this.name];
    }
    @property() value: any;
    complete(commit: boolean) {
        if(commit) {
            this.data[this.name] = this.value;
        }
        !!this.onComplete && this.onComplete(this.value, commit);
    }
    get isModified() {
        return this.value !== this.data[this.name];
    }
    get css() {
        let result = "table4js-editor";
        if(this.isModified) {
            result += " table4js-editor--modified";
        }
        return result;
    }
    // processKeyUp(event: KeyboardEvent) {
    //     if(event.keyCode === 13 || event.keyCode === 27) {
    //         this.complete(event.keyCode === 13);
    //     }        
    // }
}
