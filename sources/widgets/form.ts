import { IAction } from "../core/action";
import { Base } from "../core/base";
import { IFieldDescription } from "../core/domain";
import { property } from "../core/property";
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
    private innerActions: Array<IAction> = []; // TODO: elimitane duplication with table object

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

    get bottomActions() {
        return this.getActions('bottom');
    }
    getActions = (container?: string) => {
        const actions = [].concat(this.innerActions);
        return actions.filter(action => action.container === container);
    }
    public addAction(action: IAction) {
        const oldOne: IAction = this.removeAction(action.name);
        this.innerActions.push(action);
        return oldOne;
    }
    public removeAction(actionName: string): IAction {
        let oldOneIndex = -1;
        for(let i=0; i<this.innerActions.length; i++) {
            if(this.innerActions[i].name === actionName) {
                oldOneIndex = i;
                break;
            }
        }
        let oldOne: IAction = undefined;
        if(oldOneIndex >= 0) {
            oldOne = this.innerActions.splice(oldOneIndex, 1)[0];
        }
        return oldOne;
    }
}