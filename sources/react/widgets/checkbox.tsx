import * as React from "react";
import { registerComponent } from "../abris-component";
import { makeReactive } from "../reactivity";
import { IEditorProps } from "./default";

export function Table4CheckboxEditor({ model }: IEditorProps) {
  makeReactive(model);

  return (
    <div className="table4js__checkbox-editor">
      <input type="checkbox"
        checked={model.value}
        onChange={(e) => {
          model.value = e.target.checked;
        }}
      />
    </div>
  );
}

registerComponent("table4js-checkbox-editor", Table4CheckboxEditor);