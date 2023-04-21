import * as ko from "knockout";

export var elementsContainerTemplate = require("./elements-container.html").default;

ko.components.register("table4js-elements", {
  viewModel: {
    createViewModel: function (params, componentInfo) {
      return params.elements || [];
    }
  },
  template: elementsContainerTemplate
});
