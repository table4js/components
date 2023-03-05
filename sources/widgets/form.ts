import { Base } from "../core/base";
import { property } from "../core/property";
import { IFieldDescription } from "../core/domain";
import { Property } from "./property";

import "./form.scss";

export interface IFormElement {
    name: string;
    title?: string;
}

export interface IFormLayout {
    elements: Array<IFormElement>;
}

export class Form extends Base {
    private _properties: {[index: string]: Property } = {};

    constructor(private fields: Array<IFieldDescription>, private layout?: IFormLayout) {
        super();
        if(!this.layout) {
            this.layout = { elements: (fields || []).filter(f => f.visible).map(f => ({ name: f.name, title: f.title })) };
        }
        this.fields.forEach(field => this._properties[field.name] = new Property(field));
    }
    
    @property({
        onSet: (val, target: Form) => {
            Object.keys(target._properties).forEach(name => target._properties[name].obj = val);
        }
    }) object: any;

    get properties(): Array<Property> {
        return this.layout.elements.map(el => this._properties[el.name]);
    }
    public complete(commit: boolean) {
        Object.keys(this._properties).forEach(name => this._properties[name].complete(commit));
    }
}