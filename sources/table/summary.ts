import { ITablePlugin, Table } from ".";
import { Base } from "../core/base";
import { property } from "../core/property";
import { IAction, Action } from "../core/action";
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
  constructor(private table: Table, private column: ITableColumn) {
    super();
    this.summaryItems = Functions.filter(funcDescription => {
        return !funcDescription.types || funcDescription.types.indexOf(column.type) !== -1
      }).map(funcDescription => new TableSummaryItem (funcDescription.title, funcDescription.value));
  }
  calculateSummary(): void {
    this.value = undefined;
    if(!!this.func) {
        this.table.dataProvider.getSummary(this.func, this.column.name, this.table["tableFilter"], (data) => this.value = data);
    }
  }
  @property() value: number;
  @property({ defaultValue: null, onSet: (val, target: TableSummary) => {
    target.calculateSummary();
  } }) func: any;
  summaryItems: Array<TableSummaryItem>;
}

export class TableSummaryPlugin implements ITablePlugin {
  private _table: Table;
  name: string = "summary";
  init(table: Table): void {
    this._table = table;
  }
  getActions(): IAction[] {
    return [new Action({
        name: "summary-action",
        action: () => {
            this._table.showTableSummary = !this._table.showTableSummary;
        },
        svg: this._table.icons.equal,
        container: "top"
    })];
  }
  onColumnCreated(column: ITableColumn): void {
    column.summary = new TableSummary(this._table, column);
  }
}