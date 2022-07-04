import { TableWidget } from ".";
import { Base } from "../core/base";
import { property } from "../core/property";
import { IFindOperation, operationsMap } from "../find";
import { ITableColumn } from "./column";
import { FilterContext } from "./filter";

import "./filter-item.scss";

export class FilterItemValue extends Base {
    constructor(field: string, private owner: TableFilter) {
      super();
      this.field = field;
    }
    @property({ onSet: (val, target: FilterItemValue) => target.owner.apply() }) value: any;
    @property() op: string;
    @property() field: string;
  }
  
  export class TableFilterItem extends Base {
    constructor(
      public filterItemValue: FilterItemValue,
      public filterEditorName: string,
      public column: any,
      public getColumnData
    ) {
      super();
    }
    @property({ onSet: (val: IFindOperation, target: TableFilterItem) => {
      if(!!val) {
        target.filterItemValue.op = val.op;
      }
      target.showOperand = val && val.op !== "ISN" && val.op !== "ISNN";
    } }) operation: IFindOperation;
    @property({ defaultValue: false }) showOperand: boolean;
  }
  
  export class TableFilter extends Base {
    constructor(
      private filterContext: FilterContext,
      private column: ITableColumn,
      private table: TableWidget
    ) {
      super();
      filterContext.addItem = (column) => {
        // filterValue.op.subscribe(o => {if(o === "EQ") filterValue.value(null); this.apply()});
        this.filterItems.push(new TableFilterItem(new FilterItemValue(this.column.name, this), this.filterEditorName, this.column, (column, filter, limit, offset, callback) => {
          this.table.dataProvider.getColumnData(column, filter, limit, offset, callback);
        }));
        filterContext.showFilter = !!this.filterItems.length;
      };
  
      if(operationsMap[this.column.type])
        this.operations = operationsMap[this.column.type];
      else
        this.operations = operationsMap["string"];
    }
  
    @property({ defaultValue: [] }) operations: Array<any>;
    @property({ defaultValue: [] }) filterItems: Array<TableFilterItem>;
  
    apply() {
      this.filterContext.value = this.filterItems.map(i => i.filterItemValue);
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
      // return "abris-table-filter-default";
      return this.column["filterComponentName"];
    }
    removeFilterItem(model: TableFilter, item: TableFilterItem) {
      const currentFilterItems = this.filterItems;
      currentFilterItems.splice(currentFilterItems.indexOf(item), 1);
      this.filterContext.showFilter = !!currentFilterItems.length;    
      this.filterContext.value = currentFilterItems.map(i => i.filterItemValue);
    }
  }
  