import * as ko from "knockout";
import { FilterContext } from "../../table/filter-context";

var filterTemplate = require("./filter-item.html").default;

ko.components.register("abris-filter-item", {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return params.context as FilterContext;
    }
  },
  template: filterTemplate
});
