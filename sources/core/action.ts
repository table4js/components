import * as ko from "knockout";

var actionTemplate = require("text-loader!./action.html");

ko.components.register("abris-action-item", {
    viewModel: {
        createViewModel: (params, componentInfo) => {
            return params;
        }
    },
    template: actionTemplate
});

export var ActionItemWidget;
