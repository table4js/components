import { ITableRow, ITableRowData } from "./row";
import { ITableCell } from "./cell";
import { Editor } from "../widgets/editor";
import { EditorPlugin } from "./editor";


export class InplaceEditorPlugin extends EditorPlugin {
    private _activeEditors: { [name: string]: Editor } = undefined;
    name: string = "inplace-editor";
    protected startEditRow(row: ITableRow) {
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
    protected endEditRow(commit: boolean) {
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
