import * as ko from "knockout";
import { ITableCell } from "../../../table/cell";

export var cellIndicatorTemplate = require("./indicator.html").default;

ko.components.register("table4js-cell-indicator", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            const value = parseFloat(params.cell.data);
            return {
                ...params,
                style: { backgroundColor:  ? 'green' : 'red' }
            };
        }
    },
    template: cellIndicatorTemplate
});
