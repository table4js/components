import * as React from "react";
import { ITableCell } from "../../../table/cell";
import { registerComponent } from "../../abris-component";
import { makeReactive } from "../../reactivity";

export interface ITableContentCellProps {
  cell: ITableCell;
  className: string
}

export function Table4DefaultCell({ cell, className }: ITableContentCellProps) {
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: cell.text }}
    ></span>
  );
}

registerComponent("table4js-cell-default", Table4DefaultCell);