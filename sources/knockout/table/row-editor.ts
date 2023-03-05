import * as ko from "knockout";
import { TableCell } from "../../table/cell";
import { Editor } from "../../widgets/editor";

export var rowEditorTemplate = require("./row-editor.html").default;

ko.components.register("table4js-row-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return {
                ...params,
                isEditMode: ko.computed(() => params.row.mode === "edit-row")
            };
        }
    },
    template: rowEditorTemplate
});
