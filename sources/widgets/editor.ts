import { Base } from "../core/base";
import { property } from "../core/property";

import "./editor.scss";

export class Editor extends Base {
    public static inputTypes = {
        number: "number",
    };
    public static getInputType(type: string) {
      return Editor.inputTypes[type];
    }
    public static editors = {
        default: "table4js-default-editor",
        bool: "table4js-bool-editor",
    };

    constructor(private data: any, private name: string) {
        super();
        this.value = this.data[name];
    }
    @property() value: any;
    complete(commit: boolean) {
        if(commit) {
            this.data[this.name] = this.value;
        }
    }
    processKeyUp(event: KeyboardEvent) {
        if(event.keyCode === 13 || event.keyCode === 27) {
            this.complete(event.keyCode === 13);
        }        
    }
}
