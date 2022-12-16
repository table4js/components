import * as React from "react";
import { TableSummary } from "../../table/summary";
import { makeReactive } from "../reactivity";

export interface ITableSummaryProps {
  summary: TableSummary;
}

export function Table4Summary({ summary }: ITableSummaryProps) {
  makeReactive(summary);
  return (
    <>
      <span className="table4js-table-summary__value">{summary.value}</span>
      <select className="table4js-table-summary__select" value={summary.func}>
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
