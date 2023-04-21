import * as ko from "knockout";
import { IAction } from "../../common/shared/action";

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
