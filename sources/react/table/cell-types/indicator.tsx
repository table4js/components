import * as React from "react";
import { IndicatorCell } from "../../../table/cell-types/indicator";
import { registerComponent } from "../../abris-component";
import { makeReactive } from "../../reactivity";
import { ITableContentCellProps } from "./default";

export function Table4IndicatorCell({ cell, className }: ITableContentCellProps) {
  const value = parseFloat(cell.data);
  return (
    <span className={className + " table4js__indicator-cell"}>
      <span className="table4js__indicator-cell-circle"
        style={{ backgroundColor: value > IndicatorCell.threshold ? IndicatorCell.greaterColor : IndicatorCell.lessColor }}
      ></span>
    </span>
  );
}

registerComponent("table4js-cell-indicator", Table4IndicatorCell);