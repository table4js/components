import * as ko from "knockout";

var actionTemplate = require("./action.html").default;

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
    cssClasses?: string;
    cssImage?: string;
    cssLabel?: string;
}

ko.components.register("abris-action-item", {
    viewModel: {
        createViewModel: (params: IAction, componentInfo) => {
            return params;
        }
    },
    template: actionTemplate
});

export var ActionItemWidget;
