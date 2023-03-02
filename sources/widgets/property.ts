import { Base } from "../core/base";
import { IFieldDescription, IFieldType } from "../core/domain";
import { property } from "../core/property";
import { Editor } from "./editor";

export class Property extends Base {
    private static propertyTypes: {[name: string]: IFieldType} = {
        "default": {
            name: "default",
            css: "table4js-cell--left",
            getText: (val: any): string => typeof val === "object" ? JSON.stringify(val) : val as string,
            component: "table4js-default-editor"
        },
    };
    public static registerPropertyType(propertyType: IFieldType) {
        Property.propertyTypes[propertyType.name] = propertyType;
    }
    
    constructor(private field: IFieldDescription) {
        super();
        this.editor = new Editor(this.obj, this.name, (value: any, commit: boolean) => {
            if(commit) {
                this.data = value;
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
    get data(): any {
        return this.obj??[this.name];
    }
    set data(val: any) {
        this.obj && (this.obj[this.name] = val);
    }

    @property({ defaultValue: false }) isModified: boolean;
    @property({ defaultValue: false }) isReadOnly: boolean;
    @property({
        defaultValue: {},
        onSet: (val, target: Property) => {
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
        const cellTypeDescription = this.getPropertyTypeDescription(this.type);
        if(!!cellTypeDescription && typeof cellTypeDescription.getText === "function") {
            return cellTypeDescription.getText(val);
        } 
        return this.getPropertyTypeDescription("default").getText(val);
    }

    get component() {
        const cellTypeDescription = this.getPropertyTypeDescription(this.type);
        if(!!cellTypeDescription && !!cellTypeDescription.component) {
            return cellTypeDescription.component;
        }
        return this.getPropertyTypeDescription("default").component;
    }
    get inputType() {
        return Editor.getInputType(this.type);
    }
}