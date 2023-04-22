import * as ko from "knockout";
import { TableCell } from "../../../../common/table/cell";
import { Editor } from "../../../../common/shared/editor";

export var cellEditorTemplate = require("./cell-editor.html").default;

ko.components.register("table4js-cell-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            const isMergedCell = ko.computed(() => params.cell.count > 1 && params.table.isMergedСells);
            const editor = params.editor;
            return {
                ...params,
                editor,
                inputType: Editor.getInputType(params.cell.type),
                component: Editor.getComponent(params.cell.type),
                containerCss: ko.computed(() => TableCell.getContainerCss(params.cell, isMergedCell())),
                contentCss: ko.computed(() => TableCell.getContentCss(params.cell, isMergedCell())),
                isMergedCell
            };
        }
    },
    template: cellEditorTemplate
});
