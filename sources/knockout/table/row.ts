import * as ko from "knockout";
import { TableRow } from "../../common/table/row";

export var rowTemplate = require("./row.html").default;

ko.components.register("table4js-row", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: rowTemplate
});
