import * as React from "react";
import { registerComponent } from "../abris-component";
import { makeReactive } from "../reactivity";
import { ITableCellViewerProps } from "./cell-viewer";

export function Table4BoolCellViewer({ cell, className }: ITableCellViewerProps) {
  return (
    <span className={className + " table4js-table__bool-cell-viewer"}>
      <span className="table4js-table__bool-cell-viewer-circle"
        style={{ backgroundColor: cell.data ? "green" : "red" }}
      ></span>
    </span>
  );
}

registerComponent("bool-cell-viewer", Table4BoolCellViewer);