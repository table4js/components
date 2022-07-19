import { Base } from "./base";
import { property } from "./property";

export interface IAction {
    name: string;
    action: () => void;
    title?: string;
    visible?: boolean;
    enabled?: boolean;
    active?: boolean;
    icon?: string;
    svg?: string;
    container?: string;
    cssClasses?: string;
    cssImage?: string;
    cssLabel?: string;
}

export class Action extends Base implements IAction {
    constructor(source?: IAction) {
        super();
        Object.keys(source || {}).forEach(key => this[key] = source[key]);
    }
    @property() name: string;
    @property() action: () => void;
    @property() title: string;
    @property() visible: boolean;
    @property() enabled: boolean;
    @property() active: boolean;
    @property() icon: string;
    @property() svg: string;
    @property() container: string;
    @property() cssClasses: string;
    @property() cssImage: string;
    @property() cssLabel: string;
}