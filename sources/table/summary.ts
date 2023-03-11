import { ITablePlugin, Table } from ".";
import { Base } from "../core/base";
import { property } from "../core/property";
import { IAction, Action } from "../core/action";
import { ITableColumn } from "./column";
import { ITableRow } from "./row";
import { IFieldDescription } from "../core/domain";
import { Localization } from "../localization";

import "./summary.scss";

const Functions: Array<{ title: string; value: string; hint: string, types?: string[] }> =  [
  { title: "-", value: "", hint: "" }, 
  { title: "Σ", value: "sum", hint: "Sum of cells for this table column", types: ["integer", "money", "currency", "progress", "number"] }, 
  { title: "x̄", value: "avg", hint: "Arithmetic mean in this table column", types: ["integer", "money", "currency", "progress", "number"] }, 
  { title: "min", value: "min", hint: "Minimum value in this table column", types: ["integer", "money", "currency", "progress", "number", "date", "datetime"] },
  { title: "max", value: "max", hint: "Maximum value in this table column", types: ["integer", "money", "currency", "progress", "number", "date", "datetime"] },
  { title: "N", value: "count", hint: "Number of non-blank cells in this column" },
  { title: "U", value: "unique", hint: "Number of unique cells in this column" },
];

export class SummaryItem {
  constructor(public title: string, public value: string ) {
  }
}

export class FieldSummary extends Base {
  constructor(private table: Table, private field: IFieldDescription) {
    super();
    this.summaryItems = Functions.filter(funcDescription => {
        return !funcDescription.types || funcDescription.types.indexOf(field.type) !== -1
      }).map(funcDescription => new SummaryItem (funcDescription.title, funcDescription.value));
  }
  calculateSummary(): void {
    this.value = undefined;
    if(!!this.func) {
        this.table.dataProvider.getSummary(this.func, this.field.name, (data) => this.value = data);
    }
  }
  @property() value: number;
  @property({ defaultValue: null, onSet: (val, target: FieldSummary) => {
    target.calculateSummary();
  } }) func: any;
  summaryItems: Array<SummaryItem>;
}

export class SummaryPlugin implements ITablePlugin {
  private _table: Table;
  name: string = "summary";
  init(table: Table): void {
    this._table = table;
  }
  getActions(): IAction[] {
    return [new Action({
        name: "summary-action",
        title: Localization.getString("summary"),
        short: true,
        action: () => {
            this._table.showTableSummary = !this._table.showTableSummary;
        },
        svg: this._table.icons.equal,
        container: "top"
    })];
  }
  onColumnCreated(column: ITableColumn): void {
    column.summary = new FieldSummary(this._table, column);
  }
  onRowCreated(row: ITableRow): void {
  }
}