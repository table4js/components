import * as ko from "knockout";
import * as Icons from "../../common/icons";

var dropdownTemplate = require("./dropdown-actions.html").default;

ko.components.register("table4js-dropdown-actions", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            const isOpen = params.isOpen || ko.observable(false);
            const close = () => isOpen(false);
            document.body.addEventListener("click", close);
            ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                document.body.removeEventListener("click", close);
            });
            return {
                isOpen,
                title: params.title || "",
                moreText: params.moreText || "",
                moreIcon: params.moreIcon || Icons.more_sq,
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
