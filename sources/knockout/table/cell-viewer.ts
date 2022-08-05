import * as ko from "knockout";
import { ITableCell } from "../../table/cell";

export var cellViewerTemplate = require("./cell-viewer.html").default;

ko.components.register("abris-cell-viewer", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return params;
        }
    },
    template: cellViewerTemplate
});
