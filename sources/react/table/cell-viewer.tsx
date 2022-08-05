import * as React from "react";
import { ITableCell } from "../../table/cell";
import { registerComponent } from "../abris-component";
import { makeReactive } from "../reactivity";

export interface ITableCellViewerProps {
  cell: ITableCell;
  className: string
}

export function AbrisTableCellViewer({ cell, className }: ITableCellViewerProps) {
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: cell.text }}
    ></span>
  );
}

registerComponent("abris-cell-viewer", AbrisTableCellViewer);