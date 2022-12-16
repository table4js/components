import * as ko from "knockout";

ko.components.register("table4js-icon", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: require("./icon.html").default
});

export var AbrisIconWidget;
