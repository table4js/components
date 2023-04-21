import { ITablePlugin, Table } from ".";
import { isEmpty } from "../shared/utils";
import { IAction, Action } from "../shared/action";
import { ITableColumn } from "./column";
import { ITableRow, ITableRowData } from "./row";
import { Localization } from "../localization";

import * as Icons from "../icons"
import "./editor.scss";

export class EditorPlugin implements ITablePlugin {
    protected _deleteAction: IAction;
    protected _saveAction: IAction;
    protected _table: Table;
    protected _editedRow: ITableRow = undefined;
    name: string = "editor";
    init(table: Table): void {
        this._table = table;
        this._table.allowRowSelection = true;
    }
    protected saveRow(row: ITableRow) {
        let isInsert = false;
        let modifications = {};
        row.cells.forEach(c => (<any>c).isModified && (modifications[c.name] = c.data));
        if (!isEmpty(modifications)) {
            if (row.number !== undefined) {
                this._table.dataProvider.update(this._table.keyColumn, row.rowData[this._table.keyColumn], modifications, (_: any) => {
                    row.cells.forEach(c => (<any>c).isModified = false);
                })
            } else {
                this._table.dataProvider.create(this._table.keyColumn, modifications, (data: any) => {
                    row.number = data[this._table.keyColumn];
                });
                isInsert = true;
            }
        }
        return isInsert;
    }
    protected add() {
        // this.scrollerElement.scrollTop = 0;
        const newRowData: ITableRowData = {};
        const newRow = this._table.createRow(newRowData);
        this._table.rows.unshift(newRow);
        return newRow;
    }
    protected save() {
        let isInsert = false;
        this._table.rows.forEach(row => {
            isInsert = this.saveRow(row);
        });
        if (isInsert) {
            this._table.refresh();
        }
    }
    protected delete() {
        const keysToDelete = [];
        this._table.selectedRows.forEach(row => {
            this._table.rows.splice(this._table.rows.indexOf(row), 1);
            if (row.number > 0 && row.rowData[this._table.keyColumn]) {
                keysToDelete.push(row.rowData[this._table.keyColumn])
            }
        });
        this._table.dataProvider.delete(this._table.keyColumn, keysToDelete, (_ => this._table.refresh()));
        this._deleteAction.visible = false;
    }
    protected startEditRow(row: ITableRow) {
        this._editedRow = row;
        this._saveAction.visible = true;
    }
    protected endEditRow(commit: boolean) {
        if (!commit && !!this._editedRow && this._editedRow.number === undefined) {
            this._table.rows.splice(this._table.rows.indexOf(this._editedRow), 1);
        }
        if (!!this._editedRow) {
            this._editedRow.mode = "default";
            if (commit) {
                this._editedRow.update(false);
            }
            this._editedRow = undefined;
        }
        this._saveAction.visible = false;
    }
    onSelectionChanged(): void {
        if (!!this._deleteAction) {
            this._deleteAction.visible = this._table.selectedRows.length > 0;
        }
    }
    getActions(): IAction[] {
        this._deleteAction = new Action({
            name: "delete-action",
            title: Localization.getString("deleteRow"),
            action: () => this.delete(),
            visible: this._table.selectedRows.length > 0,
            svg: Icons.del,
            container: "bottom"
        });
        this._saveAction = new Action({
            name: "save-action",
            title: Localization.getString("saveRow"),
            action: () => {
                this.endEditRow(true);
                this.save();
            },
            visible: !!this._editedRow,
            svg: Icons.save,
            container: "bottom"
        });
        return [
            new Action({
                name: "add-action",
                title: Localization.getString("addRow"),
                action: () => {
                    this.endEditRow(false);
                    const newRow = this.add();
                    this.startEditRow(newRow);
                },
                svg: Icons.add,
                container: "bottom"
            }),
            this._saveAction,
            this._deleteAction,
            new Action({
                name: "edit-action",
                title: Localization.getString("editRow"),
                action: (row: any) => {
                    const editedRow = this._editedRow;
                    this.endEditRow(false);
                    if (editedRow !== row) {
                        this.startEditRow(row);
                    }
                },
                svg: Icons.edit,
                cssClasses: "table4js__row-context-action",
                container: "row"
            })
        ];
    }
    onColumnCreated(column: ITableColumn): void {
    }
    onRowCreated(row: ITableRow): void {
    }
}
