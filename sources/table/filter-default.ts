import "./filter-default.scss";

var summaryTemplate = require("text-loader!./filter-default.html");

ko.components.register("abris-table-filter-default", {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return params;
    }
  },
  template: summaryTemplate
});

