import * as ko from "knockout";
import { IAction } from "../../core/action";

var actionTemplate = require("./action.html").default;

ko.components.register("table4js-action-item", {
    viewModel: {
        createViewModel: (params: IAction, componentInfo) => {
            return params;
        }
    },
    template: actionTemplate
});

export var ActionItemWidget;
