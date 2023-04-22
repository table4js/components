import * as ko from "knockout";
import { FilterContext } from "../../../../common/table/plugins/filter/column-filter";

var filterTemplate = require("./column-filter.html").default;

ko.components.register("table4js-column-filter", {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return params.context as FilterContext;
    }
  },
  template: filterTemplate
});
