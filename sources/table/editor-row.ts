
import { ITableRow, ITableRowData } from "./row";
import { Form } from "../widgets/form";
import { EditorPlugin } from "./editor";


export class RowEditorPlugin extends EditorPlugin {
    private _form: Form = undefined;
    name: string = "row-editor";
    protected startEditRow(row: ITableRow) {
        this._form = new Form(this._table.columns);
        this._form.object = row.rowData;
        this._editedRow = row;
        row.mode = "edit-row";
    }
    protected endEditRow(commit: boolean) {
        if(!!this._form) {
            this._form.complete(commit);
            this._form = undefined;
        }
        if(!!this._editedRow) {
            if(commit) {
                this.saveRow(this._editedRow);
            }
            this._editedRow.mode = "default";
            this._editedRow.update();
            this._editedRow = undefined;
        }
    }
    onRowCreated(row: ITableRow): void {
        row.getRowComponent = () => {
            if(row.mode === "edit-row") {
                return "table4js-row-editor";
            }
            return "table4js-row";
        }
        row.getRowComponentParams = (params: any) => {
            if(row.mode === "edit-row") {
                params.form = this._form;
            }
            return params;
        }
    }
}
