import * as ko from "knockout";
import { ColumnFilterItem } from "../../table/column-filter-item";

var filterTemplate = require("./column-filter-item.html").default;

ko.components.register("abris-column-filter-item", {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return params;
    }
  },
  template: filterTemplate
});
