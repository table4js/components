import * as React from "react";
import { InplaceEditor } from "../../table/cell-editor";
import { registerComponent } from "../abris-component";
import { makeReactive } from "../reactivity";

export interface ITableCellEditorProps {
  model: InplaceEditor;
}

export function AbrisTableCellEditor({ model }: ITableCellEditorProps) {
  makeReactive(model);

  return (
    <div className="abris-table__cell-editor">
      <input
        defaultValue={model.value}
        onChange={(e) => model.value = e.target.value}
        onKeyUp={e => model.processKeyUp(e.nativeEvent)}
      />
    </div>
  );
}

registerComponent("abris-cell-editor", AbrisTableCellEditor);