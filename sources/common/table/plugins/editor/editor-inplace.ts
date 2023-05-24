import { ITableRow, ITableRowData } from "../../row";
import { ITableCell } from "../../cell";
import { Editor } from "../../../shared/editor";
import { EditorPlugin } from "./editor";
import { Action, IAction } from "../../../shared/action";
import { Localization } from "../../../localization";

import * as Icons from "../../../icons"

export class InplaceEditorPlugin extends EditorPlugin {
    private _activeEditors: { [name: string]: Editor } = undefined;
    name: string = "inplace-editor";
    protected startEditRow(row: ITableRow) {
        super.startEditRow(row);
        this._activeEditors = {};
        row.cells.forEach(cell => {
            const column = this._table.columns.filter(c => c.name === cell.name)[0];
            this._activeEditors[cell.name] = new Editor(cell.rowData, column);
        });
        row.mode = "edit-inplace";
    }
    protected endEditRow(commit: boolean) {
        Object.keys(this._activeEditors || {}).forEach(name => {
            this._activeEditors[name].complete(commit);
        });
        this._activeEditors = undefined;
        super.endEditRow(commit);
    }
    getActions(): IAction[] {
        const actions = super.getActions();
        actions.push(new Action({
            name: "save-edit-action",
            title: Localization.getString("saveEdit"),
            action: (row: any) => {
                this.endEditRow(true);
                this.saveRow(row);
            },
            svg: Icons.save_ok,
            cssClasses: "table4js__save-edit",
            container: "row"
        }));
        actions.push(new Action({
            name: "cancel-edit-action",
            title: Localization.getString("cancelEdit"),
            action: (row: any) => {
                this.endEditRow(false);
            },
            svg: Icons.cancel,
            cssClasses: "table4js__cancel-edit",
            container: "row"
        }));
        return actions;
    }
    onRowCreated(row: ITableRow): void {
        const prev = row.getCellComponent;
        row.getCellComponent = (cell: ITableCell) => {
            if (row.mode === "edit-inplace") {
                return "table4js-cell-editor";
            }
            return prev(cell);
        }
        row.getCellComponentParams = (params: any) => {
            if (row.mode === "edit-inplace") {
                params.editor = this._activeEditors[params.cell.name];
            }
            return params;
        }
    }
}
