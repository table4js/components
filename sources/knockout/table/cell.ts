import * as ko from "knockout";
import { TableCell } from "../../table/cell";

export var cellTemplate = require("./cell.html").default;

ko.components.register("table4js-table-cell", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            const isMergedCell = ko.computed(() => params.cell.count > 1 && params.table.isMergedСells);
            return {
                ...params,
                startEdit: () => params.table.startEditCell(params.cell),
                containerCss: ko.computed(() => TableCell.getContainerCss(params.cell, isMergedCell())),
                contentCss: ko.computed(() => TableCell.getContentCss(params.cell, isMergedCell())),
                isMergedCell
            };
        }
    },
    template: cellTemplate
});
