import * as React from "react";
import { IndicatorCell } from "../../../common/table/cell-types/indicator";
import { registerComponent } from "../../abris-component";
import { makeReactive } from "../../reactivity";
import { ITableContentCellProps } from "./default";

export function Table4ProgressCell({ cell, className }: ITableContentCellProps) {
  const value = parseFloat(cell.data);
  const precentage = (Number.isNaN(value) ? 0 : (value * 100).toFixed(2))+"%";
  return (
    <div className={className + " table4js__progress-cell"}>
      <div className="table4js__progress-cell-value" style={{ width: precentage}}>
        {precentage}
      </div>
    </div>
  );
}

registerComponent("table4js-cell-progress", Table4ProgressCell);