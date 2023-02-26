import * as ko from "knockout";

var actionsTemplate = require("./actions.html").default;

ko.components.register("table4js-actions", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var modelValue = (params.model || {})[params.options.action];
            return {
                actions: modelValue,
                short: params.options.short,
                groupName: params.options.groupName,
                toggleChildActions: (_, event) => {
                    event.target.classList.toggle("table4js-nested-actions--open");
                }
            };
        }
    },
    template: actionsTemplate
});

export var AbrisActionsWidget;

