import { ITablePlugin, Table } from "..";
import { Base } from "../../shared/base";
import { IAction, Action } from "../../shared/action";
import { property } from "../../shared/property";
import { ITableColumn } from "../column";
import { ITableRow } from "../row";
import { IFilterOwner, IFilterProvider } from "../../shared/data-provider/filter-owner";
import { IFilterItem } from "../../shared/find";
import { IDataProvider } from "../../shared/data-provider/data-provider";
import { search } from "../../icons";

import "./search.scss";

export class SearchModel extends Base implements IFilterProvider {
    private _filterOwner: IFilterOwner;
    public search = (text: string) => {
        if (this.prevSearchValue !== text) {
            this.prevSearchValue = this.searchValue;
            this.searchValue = text;
            if (!!this._filterOwner) {
                this._filterOwner.updateFilter();
            }
        }
    }
    public setFilterOwner(filterOwner: IFilterOwner) {
        this._filterOwner = filterOwner;
        !!this._filterOwner && this._filterOwner.addFilterProvider(this);
    }
    @property() public prevSearchValue: string;
    @property() public searchValue: string;
    public getFilter(): IFilterItem[] {
        if (!this.searchValue) {
            return [];
        }
        return [{ value: this.searchValue, op: "C", field: null }];
    }
}

export class SearchPlugin implements ITablePlugin {
    private _table: Table;
    private _searchModel: SearchModel;
    name: string = "search";
    init(table: Table): void {
        this._table = table;
        this._searchModel = new SearchModel();
        this._searchModel.setFilterOwner(this._table.dataProvider);
        this._table.addLayoutElement({
            name: "table-search",
            container: "preHeaderFirstRow",
            data: {
                icon: search,
                searchModel: this._searchModel,
            },
            component: "table4js-search"
        });
    }
    getActions(): IAction[] {
        return [];
    }
    onColumnCreated(column: ITableColumn): void {
    }
    onRowCreated(row: ITableRow): void {
    }
    onDataProviderCreated(dataProvider: IDataProvider): void {
        this._searchModel.setFilterOwner(dataProvider);
    }
}