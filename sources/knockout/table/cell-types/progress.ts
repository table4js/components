import * as ko from "knockout";
import { ITableCell } from "../../../table/cell";
import { ProgressCell } from "../../../table/cell-types/progress";

export var cellProgressTemplate = require("./progress.html").default;

ko.components.register("table4js-cell-progress", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            const value = parseFloat(params.cell.data);
            return {
                ...params,
                value: (Number.isNaN(value) ? 0 : (value * 100).toFixed(2))+"%"
            };
        }
    },
    template: cellProgressTemplate
});
