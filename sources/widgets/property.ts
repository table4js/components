import { Base } from "../core/base";
import { IFieldDescription, IFieldType } from "../core/domain";
import { property } from "../core/property";

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

    type: string = "default";
    public obj = {};

    @property({ defaultValue: false }) isModified: boolean;
    @property({ defaultValue: false }) isReadOnly: boolean;
    @property() name: string;
    @property() css: string;

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

    public initialize(field: IFieldDescription, obj: any) {
        this.type = field.type;
        this.obj = obj;
        this.name = field.name;
        this.css = this.getPropertyCss(obj, field);
        this.isModified = false;
    }
}