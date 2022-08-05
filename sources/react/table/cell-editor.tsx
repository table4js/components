import * as React from "react";
import { InplaceEditor } from "../../table/cell-editor";
import { makeReactive } from "../reactivity";

export interface ITableCellEditorProps {
  model: InplaceEditor;
}

export function AbrisTableCellEditor({ model }: ITableCellEditorProps) {
  makeReactive(model);

  const CustomTag = `abris-cell-editor` as keyof JSX.IntrinsicElements;  
  const process = event => {
    if(event.nativeEvent.keyCode === 13 || event.nativeEvent.keyCode === 27) model.complete(event.nativeEvent.keyCode === 13);
  };

  return (
    <CustomTag>
      <div className="abris-table__sell-editor">
        <input
          defaultValue={model.value}
          onChange={(e) => model.value = e.target.value}
          onKeyUp={process}
        />
      </div>
    </CustomTag>
  );
}
