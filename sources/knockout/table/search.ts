import * as ko from "knockout";
import { SearchModel } from "../../table/search";

export var searchTemplate = require("./search.html").default;

ko.components.register("table4js-search", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = ko.unwrap(params.model);
            var searchModel: SearchModel = model[params.options?.data] || model;
            var searchText = params.options?.text && model[params.options.text] || ko.observable();
            const process = event => {
                if (event.keyCode === 13) searchModel.search(searchText());
            };
            componentInfo.element.addEventListener('keyup', process);
            return {
                value: searchText,
                refresh: () => { searchModel.search(searchText()); },
                dispose: () => componentInfo.element.removeEventListener('keyup', process)
            };
        }
    },
    template: searchTemplate
});

