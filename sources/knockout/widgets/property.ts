import * as ko from "knockout";
import { Editor } from "../../widgets/editor";
import { Property } from "../../widgets/property";

export var propertyEditorTemplate = require("./property.html").default;

ko.components.register("table4js-property-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.property;
        }
    },
    template: propertyEditorTemplate
});
