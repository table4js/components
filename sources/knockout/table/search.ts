import * as ko from "knockout";
import { SearchModel } from "../../common/table/search";

export var searchTemplate = require("./search.html").default;

ko.components.register("table4js-search", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            const searchModel = ko.unwrap(params.searchModel);
            const searchText = ko.observable();
            const inputElement = componentInfo.element.nextSibling.children[0];
            const process = event => {
                if (event.keyCode === 13) searchModel.search(searchText());
            };
            inputElement.addEventListener('keyup', process);
            return {
                icon: params.icon,
                value: searchText,
                refresh: () => { searchModel.search(searchText()); },
                dispose: () => inputElement.removeEventListener('keyup', process)
            };
        }
    },
    template: searchTemplate
});

