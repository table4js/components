import * as ko from "knockout";

import "./filter-select.scss";

export class TableFilterSelect {
    private subscriptionFilterText: ko.Subscription;
    private subscriptionSelection: ko.Subscription;
    private limit: number = 10;
    private offset: number = 0;

    constructor(private value: ko.Observable,  private columnName: string, private getColumnData, isOpen?: ko.Observable<boolean>, public title: string = "", public moreText: string = "") {
        if(isOpen !== undefined) {
            this.isOpen = isOpen;
        }
        this.subscriptionFilterText = this.filterText.subscribe((filterValue) => {
            this.foundItems([]);
            this.offset = 0;
            this.getColumnData(this.columnName, filterValue, this.limit, this.offset, items => {
                this.foundItems(items);
                this.isLoadMore(items.length === this.limit);
                this.offset += 10;
            });
        });
        this.subscriptionSelection = this.selectedItems.subscribe((value) => {
            console.log("Set filter value to " + JSON.stringify(value));
            this.value(this.selectedItems());

        });
        this.filterText.notifySubscribers(null)
    }
    loadMore() {
        this.getColumnData(this.columnName, this.filterText(), this.limit, this.offset, items => {
            items.forEach(i => this.foundItems.push(i))
            this.isLoadMore(items.length === this.limit);
            this.offset += 10;
        });
    }
    isOpen = ko.observable(false);
    isLoadMore = ko.observable(false);
    toggle = (_, event) => {
        this.isOpen(!this.isOpen());
        event.stopPropagation();
    }
    selectedItems = ko.observableArray();
    foundItems = ko.observableArray();
    filterText = ko.observable();
    isChecked = (item) => {
        return this.selectedItems().indexOf(item) !== -1;
    }
    clickItem = (item, event) => {
        const itemIndex = this.selectedItems().indexOf(item);
        if(itemIndex !== -1) {
            this.selectedItems.splice(itemIndex, 1);
        } else {
            this.selectedItems.push(item);
        }
    }
    deleteItems = (name) => {
        const itemIndex = this.selectedItems().indexOf(name);
        this.selectedItems.splice(itemIndex, 1);
    }

    dispose() {
        this.subscriptionFilterText.dispose();
        this.subscriptionSelection.dispose();
    }
}

