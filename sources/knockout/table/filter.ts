import * as ko from "knockout";
import { FilterModel } from "../../common/table/filter";

export var filterTemplate = require("./filter.html").default;

ko.components.register("table4js-filter", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: filterTemplate
});
