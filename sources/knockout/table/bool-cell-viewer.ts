import * as ko from "knockout";
import { ITableCell } from "../../table/cell";

export var boolCellViewerTemplate = require("./bool-cell-viewer.html").default;

ko.components.register("bool-cell-viewer", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return params;
        }
    },
    template: boolCellViewerTemplate
});
