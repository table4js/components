import * as ko from "knockout";
import { ITableColumn } from "./column";

import "./summary.scss";

var summaryTemplate = require("text-loader!./summary.html");

const Functions: Array<{ title: string; value: string; hint: string, types?: string[] }> =  [
  { title: "-", value: "", hint: "" }, 
  { title: "Σ", value: "sum", hint: "Sum of cells for this table column", types: ["integer", "money", "number"] }, 
  { title: "x̄", value: "avg", hint: "Arithmetic mean in this table column", types: ["integer", "money", "number"] }, 
  { title: "min", value: "min", hint: "Minimum value in this table column", types: ["integer", "money", "date", "number"] },
  { title: "max", value: "max", hint: "Maximum value in this table column", types: ["integer", "money", "date", "number"] },
  { title: "Ν", value: "count", hint: "Number of non-blank cells in this column" },
  { title: "U", value: "unique", hint: "Number of unique cells in this column" },
];

export class TableSummaryItem {
  constructor(public title: string, public value: string ) {
  }
}

export class TableSummaryViewModel {
  constructor(private column: ITableColumn) {
    this.value = column.summaryValue;
    this.summaryItems(Functions.filter(funcDescription => {
        return !funcDescription.types || funcDescription.types.indexOf(column.type) !== -1
      }).map(funcDescription => new TableSummaryItem (funcDescription.title, funcDescription.value)));
    this.func.subscribe(v => column.summaryParams({ func: v, field: column.name, }));
  }
  value: ko.Observable;
  func = ko.observable(null);
  summaryItems = ko.observableArray<TableSummaryItem>();
}

ko.components.register("abris-table-summary", {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      return new TableSummaryViewModel(params.column);
    }
  },
  template: summaryTemplate
});

