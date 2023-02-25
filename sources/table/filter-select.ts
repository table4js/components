import { Base } from "../core/base";
import { property } from "../core/property";
import { FilterItemValue } from "./column-filter-item";

import "./filter-select.scss";


function conversionByType(value:any, columnType: string):string{
    if(columnType ==="bool") return value? "Yes" : "No";
    return value;
}

function filterSearchByType(columnType: string):boolean{
    if(columnType ==="bool") return false;
    return true;
}


export class TableFilterSelect extends Base {
    private limit: number = 10;
    private offset: number = 0;

    constructor(private value: FilterItemValue,  private columnName: string, private columnType: string, private getColumnData: (name: string, filterValue: any, limit: number, offset: number, callback : (items: any[]) => void) => void, isOpen?: boolean, public title: string = "", public moreText: string = "") {
        super();
        if(isOpen !== undefined) {
            this.isOpen = isOpen;
        }
        this.updateFoundItems(null);
        this.isFilterSearchByType = filterSearchByType(columnType);
    }
    private updateFoundItems(filterValue: any) {
        this.foundItems = [];
        this.offset = 0;
        this.getColumnData(this.columnName, filterValue, this.limit, this.offset, items => {
            this.foundItems = items.map(i => {return {name: conversionByType(i, this.columnType), value: i}});
            this.isLoadMore = items.length === this.limit;
            this.offset += 10;
        });
    }
    loadMore() {
        this.getColumnData(this.columnName, this.filterText, this.limit, this.offset, items => {
            items.forEach(i => this.foundItems.push(i))
            this.isLoadMore = items.length === this.limit;
            this.offset += 10;
        });
    }
    @property({ defaultValue: false }) isOpen: boolean;
    @property({ defaultValue: false }) isFilterSearchByType: boolean;
    @property({ defaultValue: false }) isLoadMore: boolean;
    toggle = (_, event) => {
        this.isOpen = !this.isOpen;
        event.stopPropagation();
    }
    @property({ defaultValue: [], onSet: (val, target: TableFilterSelect) => {
        // console.log("Set filter value to " + JSON.stringify(val));
        target.value.value = target.selectedItems;
    } }) selectedItems: Array<any>;
    @property({ defaultValue: [] }) foundItems: Array<any>;
    @property({ onSet: (val, target: TableFilterSelect) => {
        target.updateFoundItems(val);
    }, }) filterText: string;
    isChecked = (item) => {
        return this.selectedItems.indexOf(item) !== -1;
    }
    clickItem = (item) => {
        const itemIndex = this.selectedItems.indexOf(item);
        if(itemIndex !== -1) {
            this.deleteItems(item);
        } else {
            this.selectedItems.push(item);
        }
        this.value.value = this.selectedItems.map(i=>i.value);
        if(Array.isArray(this.value.value) && this.value.value.length === 0) this.value.value = undefined;
    }
    deleteItems = (name) => {
        const itemIndex = this.selectedItems.indexOf(name);
        this.selectedItems.splice(itemIndex, 1);
    }

    dispose() {
    }
}

