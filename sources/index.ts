import { TableWidget } from "./table";

export * from "./core/action";
export * from "./core/actions";
export * from "./core/icon";
export * from "./core/search";
export * from "./core/dropdown-actions";

export * from "./find";
export * from "./table";
export * from "./table/summary";
export * from "./table/number";
export * from "./table/filter";
export * from "./table/filter-default";
export * from "./table/filter-item";
export * from "./table/filter-select";

export var tableWidgetTemplate = require("text-loader!./table/index.html");

ko.components.register("abris-components-table", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            if(!!params.widgetModel) {
                const widgetModel = params.widgetModel as TableWidget;
                widgetModel.initialize(componentInfo.element);
                return widgetModel;
            }
            return new TableWidget(params, componentInfo.element);
        }
    },
    template: tableWidgetTemplate
});
