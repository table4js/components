import * as ko from "knockout";
import { Base, HashTableStorage } from "../core/base";
import { Table } from "../table";

export * from "./table/row";
export * from "./table/cell";
export * from "./table/cell-types/default";
export * from "./table/cell-types/indicator";
export * from "./table/cell-types/progress";
export * from "./table/summary";
export * from "./table/search";
export * from "./table/filter-default";
export * from "./table/column-filter";
export * from "./table/column-filter-item";
export * from "./table/filter-select";
export * from "./core/action";
export * from "./core/actions";
export * from "./core/dropdown-actions";
export * from "./core/icon";

export * from "./table/cell-editor";

export * from "./widgets/default";
export * from "./widgets/checkbox";

export * from "..";

export const KnockoutInstance = ko;

export class KnockoutHashTableStorage extends HashTableStorage {
    private linkArrayToObservable(observableArray: KnockoutObservableArray<any>) {
        const result = [].concat(observableArray());
        ["pop", "push", "splice", "slice", "shift", "unshift"].forEach(funcName => {
            result[funcName] = function () {
                Array.prototype[funcName].apply(result, arguments);
                return observableArray[funcName].apply(observableArray, arguments);
            }
        });
        return result;
    }
    private createObservable(value: any) {
        if(Array.isArray(value)) {
            return ko.observableArray(value);
        }
        return ko.observable(value);
    }
    public getValue(name: string, defaultValue?: any) {
        const value = super.getValue(name, defaultValue);
        if(!ko.isObservable(value)) {
            this.hash[name] = this.createObservable(value);
        }
        const observable = this.hash[name];
        if((ko as any).isObservableArray(observable)) { // TODO - remove any cast
            return this.linkArrayToObservable(observable);
        }
        return observable();
    }
    public setValue(name: string, val: any) {
        if(!ko.isObservable(this.hash[name])) {
            this.hash[name] = this.createObservable(this.hash[name]);
        }
        const observable = this.hash[name];
        this.hash[name](val);
    }
    public peekValue(name: string, defaultValue?: any) {
        const value = super.getValue(name, defaultValue);
        if(!ko.isObservable(value)) {
            this.hash[name] = this.createObservable(value);
        }
        const observable = this.hash[name];
        return observable.peek();
    }
}

Base.createPropertiesStorage = () => new KnockoutHashTableStorage();

export var tableTemplate = require("./table/index.html").default;

ko.components.register("table4", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            const model = params.model as Table;
            model.initialize(componentInfo.element);
            return model;
        }
    },
    template: tableTemplate
});

function renderTable(element: string | Element) {
    let el: Element = element as Element;
    if(typeof element === "string") {
        el = document.querySelectorAll(element)[0];
    }
    el.innerHTML = `<table4 params="{ model: $data }"></table4>`;
    ko.utils.domNodeDisposal.addDisposeCallback(el, (node: Node) => {
        ko.cleanNode(node);
        el.innerHTML = "";
    });
    ko.applyBindings(this, el);
}

Table.prototype["render"] = renderTable;