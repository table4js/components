import * as $ from "jquery";
import * as ko from "knockout";

import "./dd-tree-menu.scss";
import { Dropdown } from "./dropdown";


var treeMenuTemplate = require("text-loader!./dd-tree-menu.html");

ko.components.register("abrs-dropdown-menu", {
    viewModel: {
        createViewModel: (params, componentInfo) => {
            var $element = $(componentInfo.element);
            var dropdown = new Dropdown($element);

            var selectionHandler = (treeItem, event) => {
                if(typeof params.selectionHandler === "function") {
                    if(params.selectionHandler(treeItem)) {
                        dropdown.toggle({}, event);
                    }
                } else {
                    if(treeItem && treeItem.hasItems) {
                        return false;
                    }
                    else {
                        params.selectedItem(treeItem);
                        dropdown.toggle({}, event);
                    }
                }
            }

            var rootData = params.root || { name: [], isNode: true };

            var rootItems = ko.computed(() => {
                var updateTrigger = ko.unwrap(params.updateTrigger);
                var rootItem = new TreeViewItemMenu(rootData, params.getItems, null, rootData.name, rootData.title, params.clickHandler, selectionHandler);
                rootItem.toggleCollapsed();
                return rootItem.items()
            });

            return {
                toggle: dropdown.toggle,
                items: rootItems,
                selectionText: ko.computed(() => {
                    if(params.selectedItem()) {
                        return params.selectedItem().displayPath;
                    }
                    return params.emptyText
                }),
                icon: ko.computed(() => {
                    return params.icon;
                })
            }
        }
    },
    template: treeMenuTemplate
});



ko.components.register("abris-dropdown-menu", {
    viewModel: {
        createViewModel: (params, componentInfo) => {
            var $element = $(componentInfo.element);
            var dropdown = new Dropdown($element);

            var selectionHandler = (treeItem, event) => {
                if(typeof params.selectionHandler === "function") {
                    if(params.selectionHandler(treeItem)) {
                        dropdown.toggle({}, event);
                    }
                } else {
                    if(treeItem && treeItem.hasItems) {
                        return false;
                    }
                    else {
                        params.model[params.options.selectedItem](treeItem);
                        dropdown.toggle({}, event);
                    }
                }
            }

            var rootData = params.root || { name: [], isNode: true };

            var rootItems = ko.computed(() => {
                var updateTrigger = ko.unwrap(params.updateTrigger);
                var rootItem = new TreeViewItemMenu(rootData, params.model[params.options.getItems], null, rootData.name, rootData.title, params.clickHandler, selectionHandler);
                rootItem.toggleCollapsed();
                return rootItem.items()
            });

            return {
                toggle: dropdown.toggle,
                items: rootItems,
                selectionText: ko.computed(() => {
                    if(params.model[params.options.selectedItem]()) {
                        return params.model[params.options.selectedItem]().displayPath;
                    }
                    return params.options.emptyText 
                }),
                icon: ko.computed(() => {
                    return params.icon;
                })
            }
        }
    },
    template: treeMenuTemplate
});


export var DropDownTreeMenuWidget;


export interface ITreeViewItemMenuData {
    name: string;
    title?: string;
    isNode?: boolean;
    data?: any;
    template?: string;
    isRelation?: string;
    isGroup?:boolean;
    contextActions?: KnockoutObservableArray<any>;
    editMode?: KnockoutObservable<boolean>;
    icon?:string;
}

export interface ITreeViewDragHandler {
    start(model: TreeViewItemMenu, event: DragEvent);
    drag(model: TreeViewItemMenu, event: DragEvent);
    drop(model: TreeViewItemMenu, event: DragEvent);
}

export class TreeViewItemMenu {
    private _hasItems = ko.observable(false);
    private _itemsDown = ko.observable(false);

    constructor(public itemData: ITreeViewItemMenuData, private _getItems: (path: Array<string>, loadedCount: number, group: boolean) => Array<any> | JQueryPromise<Array<any> | { totalCount: number, data: Array<any> }>, _parentItem: TreeViewItemMenu, _parentPath: Array<string> = [], _parentDisplayPath: string, private _clickHandler: (item: TreeViewItemMenu) => void, private _selectionHandler: (item: TreeViewItemMenu, event?: MouseEvent) => void, public level: number = 0, showFolder = true, public dragHandler: ITreeViewDragHandler = undefined) {
        this.onItemClick = _clickHandler;
        this.parent = _parentItem;
        this.text(itemData.title || itemData.name);
        this.path = itemData.name ? _parentPath.concat(itemData.name) : _parentPath;
        if (_parentDisplayPath !== undefined)
            this.displayPath = _parentDisplayPath === "" ? this.text() : "... →&nbsp;" +   this.text() ;
        else
            this.displayPath = "";
        this._hasItems(!!itemData.isNode);
        this.showFolder(showFolder);
        this._itemsDown(!!itemData.isRelation);
    }
    get hasItems() {
        return this._hasItems();
    }
    get itemsDown() {
        return this._itemsDown();
    }
    parent: TreeViewItemMenu;
    path: Array<string>;
    displayPath: string;
    text = ko.observable<string>();
    items = ko.observableArray<TreeViewItemMenu>();
    get contentTemplate() { 
        return this.itemData.template;
    }

    showFolder = ko.observable(true);
    collapsed = ko.observable(true);
    loading = ko.observable(false);
    selected = ko.observable(false);
    featured = ko.computed(() => {
        return this.itemData.data && ko.unwrap(this.itemData.data.row["uncomplete"]);
    });
    info = ko.computed(() => {

        if(!this.itemData.data)
            return [];

        var row = (this.itemData.data && this.itemData.data.row) || {};
        var model = this.itemData.data && this.itemData.data.model;
        

        var titlePropertyName = Object.keys(model.model[model.typeName].properties).filter((p) => { return model.model[model.typeName].properties[p].show_in_refs; })[0];
        
        return model && Object.keys(row).filter(r => model.titlePropertyNames.indexOf(r) === -1 && model.model[model.typeName].properties[r].type !== "invisible").map(function(key) {
            return {key: key, data: row[key], hint: model.model[model.typeName].properties[key].hint};
            });
        
        ;
    });

    update(callback = () => {}) {
        this.items([]);
        this.loadItems(callback);
    }
    loadItems = (callback = () => {}) => {
        this.loading(true);
        var items = this._getItems(this.path, this.items().length, this.itemData.isGroup);
        var processItems = itemsToProcess => {
            (itemsToProcess || []).forEach(item => {
                this.items.push(new TreeViewItemMenu(item, this._getItems, this, this.path, this.displayPath, this._clickHandler, this._selectionHandler, this.level + 1, !item.isGroup, this.dragHandler));
            });
            this.loading(false);
            this._hasItems(this.items().length > 0);
            callback();
        };
        if(Array.isArray(items)) {
            processItems(items);
        } 
        else {
            (<any>items).done(result => {
                if(Array.isArray(result)) {
                    processItems(result);
                }
                else {
                    this.itemsCount(result.totalCount);
                    processItems(result.data);
                }
            });
        }
    }
    toggleCollapsed = () => {
        this.collapsed(!this.collapsed());
        if(!this.collapsed() && this.items().length === 0) {
            this.loadItems();
        }
    }
    collapserClick = (item: TreeViewItemMenu, event: MouseEvent) => {
        if(item.hasItems) {
            this.toggleCollapsed();
        }
    }
    itemClick = (item: TreeViewItemMenu) => {
        if(item.hasItems) {
            this.toggleCollapsed();
        }
        else {
            if(!!this.onItemClick) {
                this.onItemClick(item);
            }
        }
    }
    itemSelect = (item: TreeViewItemMenu, event: MouseEvent) => {
        if(!!this._selectionHandler) {
            this._selectionHandler(item, event);
            event.stopPropagation();
        }
    }
    onItemClick: (item: TreeViewItemMenu) => void;
    itemsCount = ko.observable(0);
    
    itemIconClass = ko.computed(() => {
        if(!this.itemsDown && !this.showFolder()) 
            return "fa-cubes";
        
            return ko.unwrap(this.itemData.icon)|| "";
    });
    
    collapserSvg = ko.computed(() => {
        if(this.hasItems) {
            if(this.collapsed()) {
                    return "icon_arrow-right";
            }
            else {
                    return "icon_arrow-down";
            }
            /*
            if(this.collapsed()) {
                if(this.itemsDown) {
                    return "far fa-folder fa-basic";
                } else if(this.showFolder()) {
                    return "fas fa-folder fa-basic";
                } else {
                    return "fa-angle-right";
                }
            }
            else {
                if(this.itemsDown) {
                    return "far fa-folder-open fa-basic";
                } else if(this.showFolder()) {
                    return "fas fa-folder-open fa-basic";
                } else {
                    return "fa-angle-down";
                }
            }
            */
        }
        return "";
    });
}
