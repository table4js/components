import * as ko from "knockout";
import { Base, HashTableStorage } from "../core/base";
import { TableWidget } from "../table";

export * from "./table/cell-editor";
export * from "./table/summary";
export * from "./table/search";
export * from "./table/filter-default";
export * from "./table/filter-item";
export * from "./table/filter-select";
export * from "./widgets/action";
export * from "./widgets/actions";
export * from "./widgets/dropdown-actions";
export * from "./widgets/icon";


export * from "..";

export const KnockoutInstance = ko;

export class KnockoutHashTableStorage extends HashTableStorage {
    private linkArrayToObservable(observableArray: ko.ObservableArray) {
        const result = [].concat(observableArray());
        ["pop", "push", "splice", "slice", "shift", "unshift"].forEach(funcName => result[funcName] = function () { return observableArray[funcName].apply(observableArray, arguments); });
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
        if(ko.isObservableArray(observable)) {
            return this.linkArrayToObservable(observable);
        }
        return observable();
    }
    public setValue(name: string, val: any) {
        if(!ko.isObservable(this.hash[name])) {
            this.hash[name] = this.createObservable(this.hash[name]);
        }
        this.hash[name](val);
    }
}

Base.createPropertiesStorage = () => new KnockoutHashTableStorage();

export var tableWidgetTemplate = require("./table/index.html").default;

ko.components.register("abris-components-table", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            const widgetModel = params.model as TableWidget;
            widgetModel.initialize(componentInfo.element);
            return widgetModel;
        }
    },
    template: tableWidgetTemplate
});

function renderTableWidget(element: string | Element) {
    let el: Element = element as Element;
    if(typeof element === "string") {
        el = document.querySelectorAll(element)[0];
    }
    el.innerHTML = `<abris-components-table params="{ model: $data }"></abris-components-table>`;
    ko.utils.domNodeDisposal.addDisposeCallback(el, (node: Node) => {
        ko.cleanNode(node);
        el.innerHTML = "";
    });
    ko.applyBindings(this, el);
}

TableWidget.prototype["render"] = renderTableWidget;