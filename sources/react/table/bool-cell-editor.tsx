import * as React from "react";
import { registerComponent } from "../abris-component";
import { makeReactive } from "../reactivity";
import { ITableCellEditorProps } from "./cell-editor";

export function AbrisTableBoolCellEditor({ model }: ITableCellEditorProps) {
  makeReactive(model);

  return (
    <div className="abris-table__bool-cell-editor">
      <input type="checkbox"
        checked={model.value}
        onChange={(e) => {
          model.value = e.target.value;
          model.complete(true);
        }}
      />
    </div>
  );
}

registerComponent("bool-cell-editor", AbrisTableBoolCellEditor);