import * as React from "react";
import { registerComponent } from "../abris-component";
import { Table } from "../../table";
import { ITableCell, TableCell } from "../../table/cell";
import { AbrisComponent } from "../abris-component";
import { makeReactive } from "../reactivity";
import { Table4CellEditor } from "./cell-editor";

export interface ITableCellProps {
  table: Table;
  cell: ITableCell;
}

export function Table4Cell({ table, cell }: ITableCellProps) {
  makeReactive(cell);

  const isEditMode = !!cell.inplaceEditor && table.config.enableEdit;
  const isMergedCell = cell.count > 1 && table.isMergedCells;

  if (!isEditMode) {
    return (
      <div
        className={TableCell.getContainerCss(cell, isMergedCell)}
        style={{ top: isMergedCell ? table.tableHeadHeight - 2 + "px" : undefined }}
        onClick={(e) => table.startEditCell(cell)}
      >
        <AbrisComponent componentName={cell.viewer} componentProps={{ cell: cell, className: TableCell.getContentCss(cell, isMergedCell) }} />
      </div>
    );

  } else {
    return (
      <div
        className={TableCell.getContainerCss(cell, isMergedCell)}
        style={{ top: isMergedCell ? table.tableHeadHeight - 2 + "px" : undefined }}
      >
        <AbrisComponent componentName={cell.editor} componentProps={{ model: cell.inplaceEditor }} />
      </div>
    );
  }
}

registerComponent("table4js-cell", Table4Cell);