import * as ko from "knockout";

import "./dropdown-actions.scss";

var dropdownTemplate = require("text-loader!./dropdown-actions.html");

ko.components.register("abris-dropdown-actions", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            const isOpen = params.isOpen || ko.observable(false);
            const close = () => isOpen(false);
            document.body.addEventListener("click", close);
            ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function() {
                document.body.removeEventListener("click", close);
            });
            return {
                isOpen,
                title: params.title || "",
                moreText: params.moreText || "",
                data: params.data,
                actions: params.actions,
                toggle: (_, event) => {
                    isOpen(!isOpen());
                    event.stopPropagation();
                },
            };
        }
    },
    template: dropdownTemplate
});

export var AbrisDropdownActions;
