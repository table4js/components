import { ITablePlugin, Table } from "../..";
import { Base } from "../../../shared/base";
import { IAction, Action } from "../../../shared/action";
import { property } from "../../../shared/property";
import { ITableColumn } from "../../column";
import { ITableRow } from "../../row";
import { IFilterOwner, IFilterProvider } from "../../../shared/data-provider/filter-owner";
import { IFilterItem } from "../../../shared/filter";
import { IDataProvider } from "../../../shared/data-provider/data-provider";
import { ColumnFilter } from "./column-filter";
import { FilterItemValue } from "./column-filter-item";
import { Localization } from "../../../localization";
import { filter } from "../../../icons";
import { ComputedUpdater } from "../../../shared/dependencies";

export class FilterModel extends Base implements IFilterProvider {
    private _filterOwner: IFilterOwner;
    constructor(private _table: Table) {
        super();
    }
    public setFilterOwner(filterOwner: IFilterOwner) {
        this._filterOwner = filterOwner;
        !!this._filterOwner && this._filterOwner.addFilterProvider(this);
    }
    public getFilter(): IFilterItem[] {
        const newFilter = [];
        this.filters.forEach(filterContext => {
            let columnFilterValue = filterContext.value;
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

    @property({ defaultValue: false }) visible: boolean;
    filters: Array<ColumnFilter> = [];
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
            data: {
                filterModel: this._filterModel
            },
            component: "table4js-filter"
        });
    }
    getActions(): IAction[] {
        return [new Action({
            name: "filter-action",
            title: Localization.getString("filter"),
            cssClasses: "table4js-title__filter",
            short: true,
            action: (column) => {
                const filterContext = this._filterModel.filters.filter(f => f.column.name === column.name)[0];
                if(!!filterContext) {
                    filterContext.addItem(column);
                }
            },
            svg: filter,
            container: "header"
          })];
    }
    onColumnCreated(column: ITableColumn): void {
        this._filterModel.filters.push(new ColumnFilter(column, this._table));
        this._filterModel.visible = <any>new ComputedUpdater(() => this._filterModel.filters.some(f => f.showFilter));
    }
    onRowCreated(row: ITableRow): void {
    }
    onDataProviderCreated(dataProvider: IDataProvider): void {
        this._filterModel.setFilterOwner(dataProvider);
    }
}