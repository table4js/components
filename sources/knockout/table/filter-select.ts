import * as ko from "knockout";
import { TableFilterSelect } from "../../table/filter-select" 


var selectboxFilterTemplate = require("./filter-select.html").default;

ko.components.register("abris-filter-select", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            const viewModel = new TableFilterSelect(params.value, params.columnName, params.columnType, params.getColumnData, params.isOpen, params.title, params.moreText);
            const close = () => viewModel.isOpen = false;
            document.body.addEventListener("click", close);
            ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function() {
                document.body.removeEventListener("click", close);
            });
            return viewModel;
        }
    },
    template: selectboxFilterTemplate
});
