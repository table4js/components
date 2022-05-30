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
