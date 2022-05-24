import * as ko from "knockout";

import "./filter-item.scss";

import { operationsMap, IFindOperation } from "../find";
import { ITableColumn } from "./column";
import { TableWidget } from ".";

var filterTemplate = require("text-loader!./filter-item.html");


export class FilterTableItem {
  constructor(
    public filterItemValue: { value: KnockoutObservable<any>; op: KnockoutObservable<string>; field: KnockoutObservable<string>; },
    public filterEditorName: string,
    public column: any,
    public getItems
  ) {
    ko.computed(() => {
      if(!!this.operation()) {
        filterItemValue.op(this.operation().id);
      }
    });
  }
  operation = ko.observable<IFindOperation>();
  showOperand = ko.computed(() => this.operation() && this.operation().id !== "ISN" && this.operation().id !== "ISNN")
}

export class FilterTableViewModel {
  constructor(
    private params: {
      model: any;
      propertyInfo: any;
      propertyPath: any;
      column: any;
      value: KnockoutObservableArray<{ value: KnockoutObservable<any>; op: KnockoutObservable<string>; field: KnockoutObservable<string>; }>;
      entityName: string;
      addItem: KnockoutObservable<any>;
      showFilter: KnockoutObservable<boolean>;
    },
    private column: ITableColumn,
    private table: TableWidget
  ) {
    params.addItem((column) => {
      let filterValue = { value: ko.observable<any>(), op: ko.observable<string>(), field: ko.observable(column.name) };
      filterValue.value.subscribe(() => this.apply());
      filterValue.op.subscribe(o => {if(o === "EQ") filterValue.value(null); this.apply()});
      this.filterItems.push(new FilterTableItem(filterValue, this.filterEditorName, this.column, (column, filter, callback) => {
        this.table.options.getItems(column, filter, callback);
      }));
      params.showFilter(!!this.filterItems().length);
    });

    if(operationsMap[this.column.type])
      this.operations = ko.observableArray(operationsMap[this.column.type]);
    else
      this.operations = ko.observableArray(operationsMap["string"]);
  }

  operations: ko.ObservableArray;
  filterItems = ko.observableArray<FilterTableItem>();

  apply() {
    this.params.value(this.filterItems().map(i =>i.filterItemValue));
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
    this.params.showFilter(!!this.filterItems().length);    
    this.params.value(this.filterItems().map(i =>i.filterItemValue));
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
