import { TableWidget } from "./table";

export * from "./core/action";
export * from "./core/actions";
export * from "./core/icon";
export * from "./core/search";
export * from "./core/dropdown";
export * from "./core/dropdown-wrapper";
export * from "./core/dd-tree-menu";
export * from "./core/dd-tree-menu-item";
export * from "./core/dropdown-actions";

export * from "./find";
export * from "./table";
export * from "./table/summary";

export var tableWidgetTemplate = require("text-loader!./table/index.html");

ko.components.register("abris-components-table", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new TableWidget(params, componentInfo.element);
        }
    },
    template: tableWidgetTemplate
});
