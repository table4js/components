import * as React from "react";
import { registerComponent } from "../abris-component";
import { makeReactive } from "../reactivity";
import { IEditorProps } from "./default";
import { ReferenceField } from "../../common/shared/field-types/reference";

export function Table4ReferenceEditor({ model }: IEditorProps) {
  makeReactive(model);
  const field: ReferenceField = model.field as any;
  const options = [];
  if(!!model.value) {
    options.push(model.value);
  }
  return (
    <div className="table4js__reference-editor">
      <select className="table4js__reference-editor-select" onChange={e => { debugger; }} value={model.value?.id}>
        {options.map(option => (<option value={option.id}>{option.title}</option>))}
      </select>
    </div>
  );
}

registerComponent("table4js-reference-editor", Table4ReferenceEditor);