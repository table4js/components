import * as ko from "knockout";
import { Editor } from "../../widgets/editor";
import { Form } from "../../widgets/form";

export var propertyEditorTemplate = require("./form.html").default;

ko.components.register("table4js-form", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.form;
        }
    },
    template: propertyEditorTemplate
});
