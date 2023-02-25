import * as React from "react";
import { registerComponent } from "../abris-component";
import { Table } from "../../table";
import { ITableCell, TableCell } from "../../table/cell";
import { AbrisComponent } from "../abris-component";
import { makeReactive } from "../reactivity";
import { Editor } from "../../widgets/editor";
import { ITableCellProps } from "./cell";


export function Table4CellEditor({ table, cell }: ITableCellProps) {
  makeReactive(cell);

  const isMergedCell = cell.count > 1 && table.isMergedCells;
  const editor = new Editor(cell.rowData, cell.name);
  return (
    <div
      className={TableCell.getContainerCss(cell, isMergedCell)}
      style={{ top: isMergedCell ? table.tableHeadHeight - 2 + "px" : undefined }}
    >
      <AbrisComponent componentName={Editor.editors[cell.type] || Editor.editors.default} componentProps={{ model: editor, className: TableCell.getContentCss(cell, isMergedCell), inputType: Editor.getInputType(cell.type) }} />
    </div>
  );
}

registerComponent("table4js-cell-editor", Table4CellEditor);