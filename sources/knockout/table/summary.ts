import * as ko from "knockout";
import { TableSummary } from "../../table/summary";

export var summaryTemplate = require("./summary.html").default;

ko.components.register("table4js-table-summary", {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return params.column.summary;
    }
  },
  template: summaryTemplate
});

