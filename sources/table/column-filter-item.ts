import { Base } from "../core/base";
import { property } from "../core/property";
import { IFindOperation, operationsMap } from "../core/find";
import { ITableColumn } from "./column";

export class FilterItemValue extends Base {
  constructor(private column: ITableColumn) {
    super();
    this.field = column.name;
  }
  @property({ onSet: (val, target: FilterItemValue) => target.column.filterContext.apply() }) value: any;
  @property({ onSet: (val, target: FilterItemValue) => target.column.filterContext.apply() }) op: string;
  field: string;
}

export class ColumnFilterItem extends Base {
  constructor(
    public column: any,
    public getColumnData
  ) {
    super();
    this.filterItemValue = new FilterItemValue(column);
    if (operationsMap[this.column.type]) {
      this.operations = operationsMap[this.column.type];
    }
    else {
      this.operations = operationsMap["string"];
    }
    this.operation = this.operations[0];
  }

  operations: Array<any>;

  get filterEditorName() {
    // if (this.column.type === "bool") {
    //   return "table4js-filter-bool";
    // } else if (["string", "caption", "plain"].indexOf(this.column.type) !== -1 ) {
    //   return "table4js-filter-autocomplete";
    // } else if (this.column.type === "date") {
    //   return "table4js-filter-date";
    // } else if (this.column.type === "datetime") {
    //   return "table4js-filter-date-time";
    // } else if (this.column.type === "piketposition") {
    //   return "table4js-filter-kmpktm";
    // } else if (!!this.params.propertyInfo.relation) {
    //   return "table4js-filter-autocomplete";
    // }
    return "table4js-filter-default";
  }
  public filterItemValue: FilterItemValue;
  @property({
    onSet: (val: IFindOperation, target: ColumnFilterItem) => {
      if (!!val) {
        target.filterItemValue.op = val.op;
      }
      target.showOperand = val && val.op !== "ISN" && val.op !== "ISNN";
    }
  }) operation: IFindOperation;
  @property({ defaultValue: true }) showOperand: boolean;

  getFilterValue() {
    return {
      field: this.filterItemValue.field,
      op: this.filterItemValue.op,
      value: this.filterItemValue.value
    }
  }
}
