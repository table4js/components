import * as ko from "knockout";

ko.components.register("abris-icon", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            return params;     
        }
    },
    template: require("text-loader!./icon.html")
});

export var AbrisIconWidget;

