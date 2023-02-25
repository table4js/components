import * as React from "react";
import { registerComponent } from "../../abris-component";
import { makeReactive } from "../../reactivity";
import { ITableContentCellProps } from "./default";

export function Table4BoolCell({ cell, className }: ITableContentCellProps) {
  return (
    <span className={className + " table4js__bool-cell"}>
      <span className="table4js__bool-cell-circle"
        style={{ backgroundColor: cell.data ? "green" : "red" }}
      ></span>
    </span>
  );
}

registerComponent("table4js-cell-bool", Table4BoolCell);