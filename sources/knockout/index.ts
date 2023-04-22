import * as ko from "knockout";
import { Base, HashTableStorage } from "../common/shared/base";
import { Table } from "../common/table";

export * from "./table/row";
export * from "./table/cell";
export * from "./table/cell-types/default";
export * from "./table/cell-types/indicator";
export * from "./table/cell-types/progress";
export * from "./shared/action";
export * from "./shared/actions";
export * from "./shared/dropdown-actions";
export * from "./shared/elements-container";
export * from "./shared/icon";

export * from "./table/plugins/summary";
export * from "./table/plugins/search";
export * from "./table/plugins/filter/filter-default";
export * from "./table/plugins/filter/column-filter";
export * from "./table/plugins/filter/column-filter-item";
export * from "./table/plugins/filter/filter-select";
export * from "./table/plugins/filter/filter";
export * from "./table/plugins/editor/cell-editor";
export * from "./table/plugins/editor/row-editor";

export * from "./widgets/default";
export * from "./widgets/checkbox";
export * from "./widgets/property";
export * from "./widgets/form";

export * from "../common";

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
        if (Array.isArray(value)) {
            return ko.observableArray(value);
        }
        return ko.observable(value);
    }
    public getValue(name: string, defaultValue?: any) {
        const value = super.getValue(name, defaultValue);
        if (!ko.isObservable(value)) {
            this.hash[name] = this.createObservable(value);
        }
        const observable = this.hash[name];
        if ((ko as any).isObservableArray(observable)) { // TODO - remove any cast
            return this.linkArrayToObservable(observable);
        }
        return observable();
    }
    public setValue(name: string, val: any) {
        if (!ko.isObservable(this.hash[name])) {
            this.hash[name] = this.createObservable(this.hash[name]);
        }
        const observable = this.hash[name];
        this.hash[name](val);
    }
    public peekValue(name: string, defaultValue?: any) {
        const value = super.getValue(name, defaultValue);
        if (!ko.isObservable(value)) {
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
            componentInfo.element.className += " table4js-root--fit-width";
            model.attach(componentInfo.element);
            return model;
        }
    },
    template: tableTemplate
});

function renderTable(element: string | Element) {
    let el: Element = element as Element;
    if (typeof element === "string") {
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