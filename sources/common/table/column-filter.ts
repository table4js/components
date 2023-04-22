import { Base } from "../shared/base";
import { property } from "../shared/property";
import { IDataProvider, IDataProviderOwner } from "../shared/data-provider/data-provider";
import { ITableColumn } from "./column";
import { FilterItemValue, ColumnFilterItem } from "./column-filter-item";
import * as Icons from "../icons";

import "./column-filter.scss";

export class FilterContext extends Base {
  constructor(public column: ITableColumn, private dataProviderOwner: IDataProviderOwner) {
    super();
  }

  @property({ defaultValue: false }) showFilter: boolean;
  @property() value: any;
  @property({ defaultValue: [] }) filterItems: Array<ColumnFilterItem>;

  public apply() {
    this.value = this.filterItems.map(item => item.getFilterValue());
    this.dataProviderOwner.dataProvider.updateFilter();
  }
  public addItem = (column: ITableColumn) => {
    // filterValue.op.subscribe(o => {if(o === "EQ") filterValue.value(null); this.apply()});
    this.filterItems.push(new ColumnFilterItem(this, this.column, (column, filter, limit, offset, callback) => {
      this.dataProviderOwner.dataProvider.getColumnData(column, filter, limit, offset, callback);
    }));
    this.showFilter = true;
  };
  public removeItem = (item: ColumnFilterItem) => {
    const currentFilterItems = this.filterItems;
    currentFilterItems.splice(currentFilterItems.indexOf(item), 1);
    this.showFilter = !!currentFilterItems.length;
    this.value = currentFilterItems.map(i => i.filterItemValue);
    this.dataProviderOwner.dataProvider.updateFilter();
  }
  removeItemIcon = Icons.cross;
}