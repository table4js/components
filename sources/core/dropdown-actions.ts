import * as $ from "jquery";
import * as ko from "knockout";

import { Dropdown } from "./dropdown";
import "./dropdown-actions.scss";

var dropdownTemplate = require("text-loader!./dropdown-actions.html");

ko.components.register("abris-dropdown-actions", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            const isOpen = params.isOpen || ko.observable(false);
            return {
                isOpen,
                title: params.title || "",
                moreText: params.moreText || "",
                data: params.data,
                action: params.action,
                toggle: () =>  isOpen(!isOpen()),
            };
        }
    },
    template: dropdownTemplate
});

export var AbrisDropdownActions;
