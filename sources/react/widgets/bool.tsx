import * as React from "react";
import { registerComponent } from "../abris-component";
import { makeReactive } from "../reactivity";
import { IEditorProps } from "./default";

export function Table4BoolCellEditor({ model }: IEditorProps) {
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

registerComponent("table4js-bool-editor", Table4BoolCellEditor);