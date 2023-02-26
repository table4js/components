import * as React from "react";
import { registerComponent } from "../abris-component";
import { Table } from "../../table";
import { ITableCell, TableCell } from "../../table/cell";
import { AbrisComponent } from "../abris-component";
import { makeReactive } from "../reactivity";

export interface ITableCellProps {
  table: Table;
  cell: TableCell;
}

export function Table4Cell({ table, cell }: ITableCellProps) {
  makeReactive(cell);

  const isMergedCell = cell.count > 1 && table.isMergedCells;
  return (
    <div
      className={TableCell.getContainerCss(cell, isMergedCell)}
      style={{ top: isMergedCell ? table.tableHeadHeight - 2 + "px" : undefined }}
    >
      <AbrisComponent componentName={cell.component} componentProps={{ cell: cell, className: TableCell.getContentCss(cell, isMergedCell) }} />
    </div>
  );
}

registerComponent("table4js-cell", Table4Cell);