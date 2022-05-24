import * as ko from "knockout";

import "./filter-select.scss";

import { IFindLogic } from "../find";
import { ITableColumn } from "./column";

var selectboxFilterTemplate = require("text-loader!./filter-select.html");

export class TableFilterSelect {
    private subscriptionFilterText: ko.Subscription;
    private subscriptionSelection: ko.Subscription;

    constructor(private column: ITableColumn, private getItems, isOpen?: ko.Observable<boolean>, public title: string = "", public moreText: string = "") {
        if(isOpen !== undefined) {
            this.isOpen = isOpen;
        }
        this.subscriptionFilterText = this.filterText.subscribe((filterValue) => {
            this.foundItems([]);
            this.getItems(this.column, filterValue, items => this.foundItems(items));
        });
        this.subscriptionSelection = this.selectedItems.subscribe((value) => {
            console.log("Set filter value to " + JSON.stringify(value));
            // this.column.filterContext.value(this.selectedItems());
        });
    }
    isOpen = ko.observable(false);
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

    dispose() {
        this.subscriptionFilterText.dispose();
        this.subscriptionSelection.dispose();
    }
}

ko.components.register("abris-filter-select", {
    viewModel: {
        createViewModel: function(params, componentInfo) {
            const viewModel = new TableFilterSelect(params.column, params.getItems, params.isOpen, params.title, params.moreText);
            const close = () => viewModel.isOpen(false);
            document.body.addEventListener("click", close);
            ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function() {
                document.body.removeEventListener("click", close);
            });
            return viewModel;
        }
    },
    template: selectboxFilterTemplate
});
