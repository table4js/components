import { ITablePlugin, Table } from ".";
import { Base } from "../shared/base";
import { IAction, Action } from "../shared/action";
import { property } from "../shared/property";
import { ITableColumn } from "./column";
import { ITableRow } from "./row";
import { IFilterOwner, IFilterProvider } from "../shared/data-provider/filter-owner";
import { IFilterItem } from "../shared/find";
import { IDataProvider } from "../shared/data-provider/data-provider";
import { FilterContext } from "./column-filter";
import { FilterItemValue } from "./column-filter-item";

export class FilterModel implements IFilterProvider {
    private _filterOwner: IFilterOwner;
    constructor(private _table: Table) {
    }
    public setFilterOwner(filterOwner: IFilterOwner) {
        this._filterOwner = filterOwner;
    }
    public getFilter(): IFilterItem[] {
        const newFilter = [];
        this._table.columns.forEach(column => {
            let columnFilterValue = column.filterContext.value;
            if (columnFilterValue) {
                columnFilterValue.forEach((fiv: FilterItemValue) => {
                    const op = fiv.op;
                    const val = fiv.value;
                    if ((op === "EQ" && val) || (op === "C" && val) || (op === "ISN") || (op === "ISNN")) {
                        newFilter.push({ value: val, op: op, field: fiv.field });
                    }
                });
            }
        });
        return newFilter;
    }
}

export class FilterPlugin implements ITablePlugin {
    private _table: Table;
    private _filterModel: FilterModel;
    name: string = "search";
    init(table: Table): void {
        this._table = table;
        this._filterModel = new FilterModel(this._table);
        this._filterModel.setFilterOwner(this._table.dataProvider);
        this._table.addLayoutElement({
            name: "table-filter",
            container: "preHeaderSecondRow",
            data: this._filterModel,
            component: "table4-filter-addon"
        });
    }
    getActions(): IAction[] {
        return [];
    }
    onColumnCreated(column: ITableColumn): void {
        column.filterContext = new FilterContext(column, this._table);
    }
    onRowCreated(row: ITableRow): void {
    }
    onDataProviderCreated(dataProvider: IDataProvider): void {
        this._filterModel.setFilterOwner(dataProvider);
    }
}