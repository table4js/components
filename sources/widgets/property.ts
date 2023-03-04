import { Base } from "../core/base";
import { IFieldDescription, IFieldType } from "../core/domain";
import { property } from "../core/property";
import { Editor } from "./editor";

import "./property.scss";

export class Property extends Base {
    private static propertyTypes: {[name: string]: IFieldType} = {
        "default": {
            name: "default",
            css: "table4js-cell--left",
            getText: (val: any): string => typeof val === "object" ? JSON.stringify(val) : val as string,
            component: "table4js-property-editor"
        },
    };
    public static registerPropertyType(propertyType: IFieldType) {
        Property.propertyTypes[propertyType.name] = propertyType;
    }
    
    constructor(private field: IFieldDescription) {
        super();
        this.title = field.title || field.name;
        this.editor = new Editor(this.obj, this.name, (value: any, commit: boolean) => {
            if(commit) {
                this.value = value;
            }
        });
    }
    
    public editor: Editor;
    get type(): string {
        return this.field?.type || "default";
    }
    get name(): string {
        return this.field.name;
    }
    get value(): any {
        return this.editor.value;
    }
    set value(val: any) {
        this.editor.value = val;
    }

    get hasValue(): boolean {
        return this.editor.value !== undefined;
    }

    @property() title: string;
    @property({ defaultValue: false }) isModified: boolean;
    @property({ defaultValue: false }) isReadOnly: boolean;
    @property({
        defaultValue: {},
        onSet: (val, target: Property) => {
            target.editor.data = val;
            target.isModified = false;
        }
    }) obj: any;
    get css(): string {
        return this.getPropertyCss(this.obj, this.field);
    }

    protected getPropertyTypeDescription(type: string) {
        return Property.propertyTypes[type] || Property.propertyTypes["default"]
    }
    protected getPropertyCss(data: any, field: IFieldDescription): string {
        return this.getPropertyTypeDescription(field.type).css;
    }
    protected getText(val: any): string {
        const propertyTypeDescription = this.getPropertyTypeDescription(this.type);
        if(!!propertyTypeDescription && typeof propertyTypeDescription.getText === "function") {
            return propertyTypeDescription.getText(val);
        } 
        return this.getPropertyTypeDescription("default").getText(val);
    }

    get component() {
        const propertyTypeDescription = this.getPropertyTypeDescription(this.type);
        if(!!propertyTypeDescription && !!propertyTypeDescription.component) {
            return propertyTypeDescription.component;
        }
        return this.getPropertyTypeDescription("default").component;
    }
    get inputType() {
        return Editor.getInputType(this.type);
    }

    complete(commit: boolean): void {
        this.editor.complete(commit);
    }
}