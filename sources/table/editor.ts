import { ITablePlugin, Table } from ".";
import { isEmpty } from "../utils/utils";
import { IAction, Action } from "../core/action";
import { ITableColumn } from "./column";
import { ITableRow, ITableRowData } from "./row";

import * as Icons from "../icons"

export class EditorPlugin implements ITablePlugin {
    protected _table: Table;
    protected _editedRow: ITableRow = undefined;
    name: string = "editor";
    init(table: Table): void {
      this._table = table;
    }
    protected saveRow(row: ITableRow) {
        let isInsert = false;
        let modifications = {};
        row.cells.forEach(c => (<any>c).isModified && (modifications[c.name] = c.data));
        if (!isEmpty(modifications)) {
            if (row.number > 0) {
                if (this._table.dataProvider.saveData(this._table.keyColumn, row.rowData[this._table.keyColumn], modifications)) {
                    row.cells.forEach(c => (<any>c).isModified = false);
                }
            } else {
                if (this._table.dataProvider.insertData(this._table.keyColumn, modifications)) {
                    isInsert = true;
                }
            }
        }
        return isInsert;
    }
    protected add() {
        // this.scrollerElement.scrollTop = 0;
        const newRowData: ITableRowData = {};
        this._table.columns.forEach(c => c.visible && (newRowData[c.name] = ""));
        const newRow = this._table.createRow(newRowData, -1);
        this._table.rows.unshift(newRow);
        this._table.dataProvider.insertData(this._table.keyColumn, newRowData);
        return newRow;
    }
    protected save() {
        let isInsert = false;
        this._table.rows.forEach(row => {
            isInsert = this.saveRow(row);
        });
        if(isInsert) {
            this._table.refresh();
        }
    }
    protected delete() {
        this._table.selectedRows.forEach(row => {
            if (row.number > 0) {
                this._table.rows.slice(this._table.rows.indexOf(row), 1);
            }
        });
        const keys = this._table.selectedRows.map(r => r.number > 0 && r.rowData[this._table.keyColumn]);
        this._table.dataProvider.deleteData(this._table.keyColumn, keys, (_ => this._table.refresh()));
    }
    protected startEditRow(row: ITableRow) {
    }
    protected endEditRow(commit: boolean) {
    }
    getActions(): IAction[] {
      return [
        new Action({
            name: "save-action",
            action: () => this.save(),
            svg: Icons.save,
            container: "bottom"
        }),
        new Action({
            name: "delete-action",
            action: () => this.delete(),
            svg: Icons.del,
            container: "bottom"
        }),
        new Action({
            name: "add-action",
            action: () => {
                const newRow = this.add();
                this.endEditRow(false);
                this.startEditRow(newRow);
            },
            svg: Icons.add,
            container: "bottom"
        }),
        new Action({
            name: "edit-action",
            action: (row: any) => {
                if(this._editedRow !== row) {
                    this.endEditRow(false);
                    this.startEditRow(row);
                } else {
                    this.endEditRow(true);
                }
            },
            svg: Icons.edit,
            cssClasses: "table4js__edit",
            container: "row"
        })
      ];
    }
    onColumnCreated(column: ITableColumn): void {
    }
    onRowCreated(row: ITableRow): void {
    }
}
