import * as React from "react";
import { Editor } from "../../common/shared/editor";
import { registerComponent } from "../abris-component";
import { makeReactive } from "../reactivity";

export interface IEditorProps {
  model: Editor;
  className: string;
  inputType?: string;
}

export function Table4DefaultCellEditor({ model, className, inputType }: IEditorProps) {
  makeReactive(model);

  return (
    <div className={"table4js__editor " + className}>
      <input
        className={model.css}
        type={inputType}
        defaultValue={model.value}
        onChange={(e) => {
          model.value = e.target.value;
        }}
      />
    </div>
  );
}

registerComponent("table4js-default-editor", Table4DefaultCellEditor);