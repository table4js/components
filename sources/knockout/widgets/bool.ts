import * as ko from "knockout";
import { Editor } from "../../widgets/editor";

export var boolEditorTemplate = require("./bool.html").default;

ko.components.register("table4js-bool-editor", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            var model: Editor = ko.unwrap(params.model);
            // setTimeout(() => {
            //     const input = componentInfo.element.querySelectorAll("input")[0];
            //     input.focus();
            //     input.select();
            // }, 0);
            return model;
        }
    },
    template: boolEditorTemplate
});
