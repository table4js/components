import * as React from "react";
import { ITableColumn } from "../../table/column";
import { TableSummary } from "../../table/summary";
import { makeReactive } from "../reactivity";

export interface ITableSummaryProps {
  column: ITableColumn;
}

export function Table4Summary({ column }: ITableSummaryProps) {
  const summary: TableSummary = column.summary;
  if(!summary) {
    return null;
  }
  makeReactive(summary);
  return (
    <>
      <span className="table4js-table-summary__value">{summary.value}</span>
      <select className="table4js-table-summary__select" value={summary.func} onChange={e => summary.func = e.target.value}>
        {summary.summaryItems &&
          summary.summaryItems.map((s) => (
            <option value={s.value} title={s.title}>
              {s.title}
            </option>
          ))}
      </select>
    </>
  );
}
