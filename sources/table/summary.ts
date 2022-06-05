import { Base } from "../core/base";
import { property } from "../core/property";
import { ITableColumn } from "./column";

import "./summary.scss";

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

export class TableSummary extends Base {
  constructor(private column: ITableColumn) {
    super();
    this.summaryItems = Functions.filter(funcDescription => {
        return !funcDescription.types || funcDescription.types.indexOf(column.type) !== -1
      }).map(funcDescription => new TableSummaryItem (funcDescription.title, funcDescription.value));
  }
  get value() {
    return this.column.summaryValue;
  }
  set value(val: any) {
    this.column.summaryValue = val;
  }
  @property({ defaultValue: null, onSet: (val, target: TableSummary) => {
    target.column.summaryParams = { func: val, field: target.column.name };
  } }) func: any;
  summaryItems: Array<TableSummaryItem>;
}
