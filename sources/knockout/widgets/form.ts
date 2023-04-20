import * as ko from "knockout";
import { Editor } from "../../core/editor";
import { Form } from "../../widgets/form";

export var formEditorTemplate = require("./form.html").default;

ko.components.register("table4js-form", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.form;
        }
    },
    template: formEditorTemplate
});
