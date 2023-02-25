import * as React from "react";
import { Editor } from "../../widgets/editor";
import { registerComponent } from "../abris-component";
import { makeReactive } from "../reactivity";

export interface IEditorProps {
  model: Editor;
}

export function Table4CellEditor({ model }: IEditorProps) {
  makeReactive(model);

  return (
    <div className="table4js__editor">
      <input
        defaultValue={model.value}
        onChange={(e) => model.value = e.target.value}
        onKeyUp={e => model.processKeyUp(e.nativeEvent)}
      />
    </div>
  );
}

registerComponent("table4js-default-editor", Table4CellEditor);