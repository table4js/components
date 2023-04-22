import * as React from "react";
import { registerComponent } from "../../../abris-component";
import { Table } from "../../../../common/table";
import { ITableCell, TableCell } from "../../../../common/table/cell";
import { AbrisComponent } from "../../../abris-component";
import { makeReactive } from "../../../reactivity";
import { Editor } from "../../../../common/shared/editor";
import { ITableCellProps } from "../../cell";

export interface ITableCellEditorProps extends ITableCellProps {
  editor: Editor;
}

export function Table4CellEditor({ table, cell, editor }: ITableCellEditorProps) {
  makeReactive(cell);

  const isMergedCell = cell.count > 1 && table.isMergedCells;
  return (
    <div
      className={TableCell.getContainerCss(cell, isMergedCell)}
      style={{ top: isMergedCell ? table.tableHeadHeight - 2 + "px" : undefined }}
    >
      <AbrisComponent componentName={Editor.getComponent(cell.type)} componentProps={{ model: editor, className: TableCell.getContentCss(cell, isMergedCell), inputType: Editor.getInputType(cell.type) }} />
    </div>
  );
}

registerComponent("table4js-cell-editor", Table4CellEditor);