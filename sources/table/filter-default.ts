import * as ko from "knockout";
import "./filter-default.scss";

var defaultFilterTemplate = require("./filter-default.html").default;

ko.components.register("abris-table-filter-default", {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return params;
    }
  },
  template: defaultFilterTemplate
});

