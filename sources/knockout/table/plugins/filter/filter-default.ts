import * as ko from "knockout";

var defaultFilterTemplate = require("./filter-default.html").default;

ko.components.register("table4js-filter-default", {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return params;
    }
  },
  template: defaultFilterTemplate
});

