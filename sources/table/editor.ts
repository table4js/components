import { ITablePlugin, Table } from ".";
import { Base } from "../core/base";
import { property } from "../core/property";
import { isEmpty } from "../utils/utils";
import { IAction, Action } from "../core/action";
import { ITableColumn } from "./column";
import { ITableRow, ITableRowData } from "./row";
import { ITableCell } from "./cell";
import { Editor } from "../widgets/editor";

import * as Icons from "../icons"

export class EditorPlugin implements ITablePlugin {
    private _table: Table;
    private _editedRow: ITableRow = undefined;
    private _activeEditors: { [name: string]: Editor } = undefined;
    name: string = "editor";
    init(table: Table): void {
      this._table = table;
    }
    private saveRow(row: ITableRow) {
        let isInsert = false;
        let modifications = {};
        if (row.number > 0) {
            row.cells.forEach(c => c.text !== c.data && (modifications[c.name] = c.text));
            if (!isEmpty(modifications)) {
                if (this._table.dataProvider.saveData(this._table.keyColumn, row.rowData[this._table.keyColumn], modifications)) row.cells.forEach(c => c.data = c.text)
            }
        } else {
            row.cells.forEach(c => modifications[c.name] = c.text);
            if (this._table.dataProvider.insertData(this._table.keyColumn, modifications)) {
                isInsert = true;
            }
        }
        return isInsert;
    }
    private add() {
        // this.scrollerElement.scrollTop = 0;
        let newRow: ITableRowData = {};
        this._table.columns.forEach(c => c.visible && (newRow[c.name] = ""));
        this._table.rows.unshift(this._table.createRow(newRow, -1));
        this._table.dataProvider.insertData(this._table.keyColumn, newRow);
    }
    private save() {
        let isInsert = false;
        this._table.rows.forEach(row => {
            isInsert = this.saveRow(row);
        });
        if(isInsert) {
            this._table.refresh();
        }
    }
    private delete() {
        this._table.selectedRows.forEach(row => {
            if (row.number > 0) {
                this._table.rows.slice(this._table.rows.indexOf(row), 1);
            }
        });
        const keys = this._table.selectedRows.map(r => r.number > 0 && r.rowData[this._table.keyColumn]);
        this._table.dataProvider.deleteData(this._table.keyColumn, keys, (_ => this._table.refresh()));
    }
    private startEditRow(row: ITableRow) {
        this._activeEditors = {};
        row.cells.forEach(cell => {
            this._activeEditors[cell.name] = new Editor(cell.rowData, cell.name, (value: any, commit: boolean) => {
                if(commit) {
                    cell.data = value;
                }
            });
        });
        this._editedRow = row;
        row.mode = "edit-inplace";
    }
    private endEditRow(commit: boolean) {
        Object.keys(this._activeEditors || {}).forEach(name => {
            this._activeEditors[name].complete(commit);
        });
        if(!!this._editedRow) {
            if(commit) {
                this.saveRow(this._editedRow);
            }
            this._editedRow.mode = "default";
            this._editedRow = undefined;
        }
        this._activeEditors = undefined;
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
            action: () => this.add(),
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
        const prev = row.getCellComponent;
        row.getCellComponent = (cell: ITableCell) => {
            if(row.mode === "edit-inplace") {
                return "table4js-cell-editor";
            }
            return prev(cell);
        }
        row.getCellComponentParams = (params: any) => {
            if(row.mode === "edit-inplace") {
                params.editor = this._activeEditors[params.cell.name];
            }
            return params;
        }
    }
  }