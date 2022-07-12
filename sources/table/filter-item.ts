import { Base } from "../core/base";
import { property } from "../core/property";
import { IFindOperation } from "../find";
import { ITableColumn } from "./column";

import "./filter-item.scss";

export class FilterItemValue extends Base {
  constructor(private column: ITableColumn) {
    super();
    this.field = column.name;
  }
  @property({ onSet: (val, target: FilterItemValue) => target.column.filterContext.apply() }) value: any;
  @property() op: string;
  @property() field: string;
}

export class TableFilterItem extends Base {
  constructor(
    public column: any,
    public getColumnData
  ) {
    super();
    this.filterItemValue = new FilterItemValue(column);
  }
  get filterEditorName() {
    // if (this.column.type === "bool") {
    //   return "abris-table-filter-bool";
    // } else if (["string", "caption", "plain"].indexOf(this.column.type) !== -1 ) {
    //   return "abris-table-filter-autocomplete";
    // } else if (this.column.type === "date") {
    //   return "abris-table-filter-date";
    // } else if (this.column.type === "datetime") {
    //   return "abris-table-filter-date-time";
    // } else if (this.column.type === "piketposition") {
    //   return "abris-table-filter-kmpktm";
    // } else if (!!this.params.propertyInfo.relation) {
    //   return "abris-table-filter-autocomplete";
    // }
    return "abris-table-filter-default";
  }
  public filterItemValue: FilterItemValue;
  @property({ onSet: (val: IFindOperation, target: TableFilterItem) => {
    if(!!val) {
      target.filterItemValue.op = val.op;
    }
    target.showOperand = val && val.op !== "ISN" && val.op !== "ISNN";
  } }) operation: IFindOperation;
  @property({ defaultValue: false }) showOperand: boolean;
}
