import * as ko from "knockout";
import { Base, HashTableStorage } from "./core/base";
import { TableWidget } from "./table";

export * from "./core/action";
export * from "./core/actions";
export * from "./core/icon";
export * from "./core/dropdown-actions";

export * from "./find";
export * from "./table";
export * from "./table/summary";
export * from "./table/number";
export * from "./table/filter";
export * from "./table/filter-default";
export * from "./table/filter-item";
export * from "./table/filter-select";
export * from "./table/search";

export * from "./utils/array-data-provider";

export class KnockoutHashTableStorage extends HashTableStorage {
    public getValue(name: string) {
        if(!ko.isObservable(this.hash[name])) {
            this.hash[name] = ko.observable(this.hash[name]);
        }
        return this.hash[name]();
    }
    public setValue(name: string, val: any) {
        if(!ko.isObservable(this.hash[name])) {
            this.hash[name] = ko.observable(this.hash[name]);
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
