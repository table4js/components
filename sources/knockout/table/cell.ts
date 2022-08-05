import * as ko from "knockout";

export var cellTemplate = require("./cell.html").default;

ko.components.register("abris-table-cell", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return {
                ...params,
                startEdit: () => params.table.startEditCell(params.cell)
            };
        }
    },
    template: cellTemplate
});
