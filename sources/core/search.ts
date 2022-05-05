import * as $ from "jquery";
import * as ko from "knockout";

import "./search.scss";

var searchTemplate = require("text-loader!./search.html");

ko.components.register("abris-search", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            var model = ko.unwrap(params.model);
            var filterModel = model[params.options.data] || model;
            var searchText = params.options.text && model[params.options.text] || ko.observable();
            $(componentInfo.element).on("keyup", ".abris-search input", event => {
                if(event.keyCode === 13) filterModel.search(searchText());
            });
            return {
                value: searchText,
                refresh: () => { filterModel.search(searchText()); },
            };
        }
    },
    template: searchTemplate
});

export var AbrisSearchWidget;
