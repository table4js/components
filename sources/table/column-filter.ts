import { Base } from "../core/base";
import { property } from "../core/property";
import { operationsMap } from "../find";
import { IDataProvider, IDataProviderOwner } from "../utils/data-provider";
import { ITableColumn } from "./column";
import { FilterItemValue, ColumnFilterItem } from "./column-filter-item";

import "./column-filter.scss";

export class FilterContext extends Base {
    constructor(public column: ITableColumn, private dataProviderOwner: IDataProviderOwner) {
        super();
    
        if(operationsMap[this.column.type]) {
          this.operations = operationsMap[this.column.type];
        }
        else {
          this.operations = operationsMap["string"];
        }
    }
    operations: Array<any>;

    @property({ defaultValue: false }) showFilter: boolean;
    @property() value: any;
    @property({ defaultValue: [] }) filterItems: Array<ColumnFilterItem>;
  
    apply() {
      this.value = this.filterItems.map(item => item.getFilterValue());
    }
    addItem = (column: ITableColumn) => {
      // filterValue.op.subscribe(o => {if(o === "EQ") filterValue.value(null); this.apply()});
      this.filterItems.push(new ColumnFilterItem(this.column, (column, filter, limit, offset, callback) => {
        this.dataProviderOwner.dataProvider.getColumnData(column, filter, limit, offset, callback);
      }));
      this.showFilter = true;
    };
    removeItem = (item: ColumnFilterItem) => {
      const currentFilterItems = this.filterItems;
      currentFilterItems.splice(currentFilterItems.indexOf(item), 1);
      this.showFilter = !!currentFilterItems.length;    
      this.value = currentFilterItems.map(i => i.filterItemValue);
    }    
}