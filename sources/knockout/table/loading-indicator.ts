import * as ko from "knockout";
import { Table } from "../../common/table";
import { more } from "../../common/icons";

export var loadingIndicatorTemplate = require("./loading-indicator.html").default;

ko.components.register("table4js-loading-inducator", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            const rows = [];
            for (var i = 1; i <= params.table.loadBatchSize; i++) {
                rows.push(i);
             }
            return {
                ...params,
                iconMore: more,
                rows
            };
        }
    },
    template: loadingIndicatorTemplate
});
