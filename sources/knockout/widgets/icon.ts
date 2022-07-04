import * as ko from "knockout";

ko.components.register("abris-icon", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return params;     
        }
    },
    template: require("./icon.html").default
});

export var AbrisIconWidget;
