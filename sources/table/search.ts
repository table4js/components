import * as ko from "knockout";

import "./search.scss";

var searchTemplate = require("./search.html").default;

ko.components.register("abris-search", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            var model = ko.unwrap(params.model);
            var filterModel = model[params.options?.data] || model;
            var searchText = params.options?.text && model[params.options.text] || ko.observable();
            const process = event => {
                if(event.keyCode === 13) filterModel.search(searchText());
            };
            componentInfo.element.addEventListener('keyup', process);
            return {
                value: searchText,
                refresh: () => { filterModel.search(searchText()); },
                dispose: () => componentInfo.element.removeEventListener('keyup', process)
            };
        }
    },
    template: searchTemplate
});

export var AbrisSearchWidget;
