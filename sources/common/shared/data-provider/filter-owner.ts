import { IFilterItem } from "../filter";

export interface IFilterOwner {
    addFilterProvider(filterProvider: IFilterProvider): void;
    updateFilter(): void;
    filter: IFilterItem[];
    onFilterChanged?: () => void;
    stopFilterUpdating();
}

export interface IFilterProvider {
    getFilter: () => IFilterItem[];
}

export class FilterOwner implements IFilterOwner {
    private _filterProviders: Array<IFilterProvider> = [];
    private _filter: IFilterItem[] = [];
    protected filterChanged() {
        if (typeof this.onFilterChanged === "function") {
            this.onFilterChanged();
        }
    }
    public addFilterProvider(filterProvider: IFilterProvider) {
        this._filterProviders.push(filterProvider);
    }
    public updateFilter() {
        let newFilterValue = [];
        this._filterProviders.forEach(filterProvider => newFilterValue = newFilterValue.concat(filterProvider.getFilter()));
        this.filter = newFilterValue;
    }
    public get filter(): IFilterItem[] {
        return this._filter;
    }
    public set filter(filter: IFilterItem[]) {
        this._filter = filter;
        this.filterChanged();
    }
    public stopFilterUpdating() {
        this.onFilterChanged = undefined;
        this._filterProviders = [];
    }
    public onFilterChanged: () => void;
}