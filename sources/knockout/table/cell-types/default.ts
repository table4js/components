import * as ko from "knockout";
import { ITableCell } from "../../../common/table/cell";

export var cellDefaultTemplate = require("./default.html").default;

ko.components.register("table4js-cell-default", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: cellDefaultTemplate
});
