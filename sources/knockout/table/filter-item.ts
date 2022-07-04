import * as ko from "knockout";
import { TableFilter } from "../../table/filter-item";

var filterTemplate = require("./filter-item.html").default;

ko.components.register("abris-filter-item", {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      var viewModel = new TableFilter(params.context, params.column, params.table);
      return viewModel;
    }
  },
  template: filterTemplate
});
