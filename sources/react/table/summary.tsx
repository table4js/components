import * as React from "react";
import { TableSummary } from "../../table/summary";
import { makeReactive } from "../reactivity";

export interface ITableSummaryProps {
  summary: TableSummary;
}

export function AbrisTableSummary({ summary }: ITableSummaryProps) {
  makeReactive(summary);
  return (
    <>
      <span className="abris-table-summary__value">{summary.value}</span>
      <select className="abris-table-summary__select" value={summary.func}>
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
