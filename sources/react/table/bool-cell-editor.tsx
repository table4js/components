import * as React from "react";
import { registerComponent } from "../abris-component";
import { makeReactive } from "../reactivity";
import { ITableCellEditorProps } from "./cell-editor";

export function Table4BoolCellEditor({ model }: ITableCellEditorProps) {
  makeReactive(model);

  return (
    <div className="table4js__bool-cell-editor">
      <input type="checkbox"
        checked={model.value}
        onChange={(e) => {
          model.value = e.target.checked;
          model.complete(true);
        }}
      />
    </div>
  );
}

registerComponent("bool-cell-editor", Table4BoolCellEditor);