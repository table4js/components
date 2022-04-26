import * as ko from "knockout";

var treeMenuItemTemplate = require("text-loader!./dd-tree-menu-item.html");

ko.components.register("abris-dropdown-menu-item", {
    viewModel: {
        createViewModel: (params, componentInfo) => {
            return params;
        }
    },
    template: treeMenuItemTemplate
});

export var DropDownTreeMenuItemWidget;
