import * as $ from "jquery";
import * as ko from "knockout";

import { Dropdown } from "./dropdown";
import "./dropdown-wrapper.scss";

ko.components.register("abris-dropdown-wrapper", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            var dropdown = new Dropdown($(componentInfo.element), params.isOpen);
            return {
                template: params.template,
                data: params.data,
                toggle: dropdown.toggle,
            };
        }
    },
    template: "<!-- ko template: { name: template, data: data }  --><!-- /ko -->"
});

export var AbrisDropdownWrapper;
