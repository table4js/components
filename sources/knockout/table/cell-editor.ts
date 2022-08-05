import * as ko from "knockout";
import { InplaceEditor } from "../../table/cell-editor";

export var cellEditorTemplate = require("./cell-editor.html").default;

ko.components.register("abris-cell-editor", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            var model: InplaceEditor = ko.unwrap(params.model);
            // setTimeout(() => {
            //     const input = componentInfo.element.querySelectorAll("input")[0];
            //     input.focus();
            //     input.select();
            // }, 0);
            return model;
        }
    },
    template: cellEditorTemplate
});
