import "./filter-default.scss";

var summaryTemplate = require("./filter-default.html").default;

ko.components.register("abris-table-filter-default", {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return params;
    }
  },
  template: summaryTemplate
});

