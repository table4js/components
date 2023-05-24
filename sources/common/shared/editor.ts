import { IFieldDescription } from "../shared/domain";
import { Base } from "../shared/base";
import { property } from "../shared/property";

import "./editor.scss";

export class Editor extends Base {
    public static inputTypes = {
    };
    public static setInputType(typeName: string, inputType: string) {
        return Editor.inputTypes[typeName] = inputType;
    }
    public static getInputType(typeName: string) {
        return Editor.inputTypes[typeName];
    }
    public static editors = {
        default: "table4js-default-editor",
    };
    public static setComponent(typeName: string, componentName: string) {
        return Editor.editors[typeName] = componentName;
    }
    public static getComponent(typeName: string) {
        return Editor.editors[typeName] || Editor.editors.default;
    }

    constructor(private _data: any, public readonly field: IFieldDescription) {
        super();
        this.value = _data[this.name];
    }
    get name() {
        return this.field.name
    }
    @property() value: any;
    get isModified() {
        return this.value !== this.data[this.name];
    }
    get css() {
        let result = "table4js-editor";
        if (this.isModified) {
            result += " table4js-editor--modified";
        }
        return result;
    }
    get data(): any {
        return this._data;
    }
    set data(val: any) {
        this._data = val;
        this.value = val[this.name];
    }
    public complete(commit: boolean) {
        if (commit) {
            this.data[this.name] = this.value;
        }
    }

    // processKeyUp(event: KeyboardEvent) {
    //     if(event.keyCode === 13 || event.keyCode === 27) {
    //         this.complete(event.keyCode === 13);
    //     }        
    // }
}
