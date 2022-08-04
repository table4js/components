import * as ko from "knockout";
import { FilterContext } from "../../table/column-filter";

var filterTemplate = require("./column-filter.html").default;

ko.components.register("abris-column-filter", {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return params.context as FilterContext;
    }
  },
  template: filterTemplate
});
