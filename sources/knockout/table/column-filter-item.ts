import * as ko from "knockout";
import { ColumnFilterItem } from "../../common/table/column-filter-item";

var filterTemplate = require("./column-filter-item.html").default;

ko.components.register("table4js-column-filter-item", {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return params.filterItem as ColumnFilterItem;
    }
  },
  template: filterTemplate
});
