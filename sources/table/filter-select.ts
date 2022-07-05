import { Base } from "../core/base";
import { property } from "../core/property";

import "./filter-select.scss";

export class TableFilterSelect extends Base {
    private limit: number = 10;
    private offset: number = 0;

    constructor(private value: (val?: any) => any,  private columnName: string, private getColumnData: (name: string, filterValue: any, limit: number, offset: number, callback : (items: any[]) => void) => void, isOpen?: boolean, public title: string = "", public moreText: string = "") {
        super();
        if(isOpen !== undefined) {
            this.isOpen = isOpen;
        }
        this.updateFoundItems(null)
    }
    private updateFoundItems(filterValue: any) {
        this.foundItems = [];
        this.offset = 0;
        this.getColumnData(this.columnName, filterValue, this.limit, this.offset, items => {
            this.foundItems = items;
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
    @property({ defaultValue: false }) isLoadMore: boolean;
    toggle = (_, event) => {
        this.isOpen = !this.isOpen;
        event.stopPropagation();
    }
    @property({ defaultValue: [], onSet: (val, target: TableFilterSelect) => {
        console.log("Set filter value to " + JSON.stringify(val));
        target.value(target.selectedItems);
    } }) selectedItems: Array<any>;
    @property({ defaultValue: [] }) foundItems: Array<any>;
    @property({ onSet: (val, target: TableFilterSelect) => {
        target.updateFoundItems(val);
    }, }) filterText: string;
    isChecked = (item) => {
        return this.selectedItems.indexOf(item) !== -1;
    }
    clickItem = (item, event) => {
        const currentSelectedItems = [].concat(this.selectedItems);
        const itemIndex = currentSelectedItems.indexOf(item);
        if(itemIndex !== -1) {
            currentSelectedItems.splice(itemIndex, 1);
        } else {
            currentSelectedItems.push(item);
        }
        this.selectedItems = currentSelectedItems;
    }
    deleteItems = (name) => {
        const itemIndex = this.selectedItems.indexOf(name);
        this.selectedItems.splice(itemIndex, 1);
    }

    dispose() {
    }
}

