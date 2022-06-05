import * as ko from "knockout";
import { TableSummaryViewModel } from "../../table/summary";

export var summaryTemplate = require("./summary.html").default;

ko.components.register("abris-table-summary", {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return new TableSummaryViewModel(params.column);
    }
  },
  template: summaryTemplate
});

