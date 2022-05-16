import * as ko from "knockout";

var actionTemplate = require("text-loader!./action.html");

export interface IAction {
    name: string;
    action: () => void;
    title?: string;
    visible?: boolean;
    enabled?: boolean;
    active?: boolean;
    icon?: string;
    svg?: string;
    container?: string;
}

ko.components.register("abris-action-item", {
    viewModel: {
        createViewModel: (params, componentInfo) => {
            return params;
        }
    },
    template: actionTemplate
});

export var ActionItemWidget;
