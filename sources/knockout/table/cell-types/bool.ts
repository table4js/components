import * as ko from "knockout";
import { ITableCell } from "../../../table/cell";

export var cellBoolTemplate = require("./bool.html").default;

ko.components.register("table4js-cell-bool", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: cellBoolTemplate
});
