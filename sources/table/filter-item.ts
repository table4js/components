import * as ko from "knockout";
import { operationsMap, IFindOperation } from "../find";
import { ITableColumn } from "./column";
import { TableWidget } from ".";
import { FilterContext } from "./filter";
import { Base } from "../core/base";
import { property } from "../core/property";

import "./filter-item.scss";

var filterTemplate = require("./filter-item.html").default;


export class FilterTableItem extends Base {
  constructor(
    public filterItemValue: { value: KnockoutObservable<any>; op: KnockoutObservable<string>; field: KnockoutObservable<string>; },
    public filterEditorName: string,
    public column: any,
    public getColumnData
  ) {
    super();
  }
  @property({ onSet: (val: IFindOperation, target: FilterTableItem) => {
    if(!!val) {
      target.filterItemValue.op(val.op);
    }
    target.showOperand = val && val.op !== "ISN" && val.op !== "ISNN";
  } }) operation: IFindOperation;
  @property({ defaultValue: false }) showOperand: boolean;
}

export class FilterTableViewModel {
  constructor(
    private filterContext: FilterContext,
    private column: ITableColumn,
    private table: TableWidget
  ) {
    filterContext.addItem = (column) => {
      let filterValue = { value: ko.observable<any>(), op: ko.observable<string>(), field: ko.observable(column.name) };
      filterValue.value.subscribe(() => this.apply());
      // filterValue.op.subscribe(o => {if(o === "EQ") filterValue.value(null); this.apply()});
      this.filterItems.push(new FilterTableItem(filterValue, this.filterEditorName, this.column, (column, filter, limit, offset, callback) => {
        this.table.dataProvider.getColumnData(column, filter, limit, offset, callback);
      }));
      filterContext.showFilter = !!this.filterItems().length;
    };

    if(operationsMap[this.column.type])
      this.operations = ko.observableArray(operationsMap[this.column.type]);
    else
      this.operations = ko.observableArray(operationsMap["string"]);
  }

  operations: ko.ObservableArray;
  filterItems = ko.observableArray<FilterTableItem>();

  apply() {
    this.filterContext.value = this.filterItems().map(i => i.filterItemValue);
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
  removeFilterItem(model: FilterTableViewModel, item: FilterTableItem) {
    this.filterItems.splice(this.filterItems.indexOf(item), 1);
    this.filterContext.showFilter = !!this.filterItems().length;    
    this.filterContext.value = this.filterItems().map(i => i.filterItemValue);
  }
}

ko.components.register("abris-filter-item", {
  viewModel: {
    createViewModel: function(params, componentInfo) {
      var viewModel = new FilterTableViewModel(params.context, params.column, params.table);
      return viewModel;
    }
  },
  template: filterTemplate
});
