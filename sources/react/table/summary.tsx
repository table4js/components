import * as React from "react";
import { ITableColumn } from "../../common/table/column";
import { FieldSummary } from "../../common/table/summary";
import { makeReactive } from "../reactivity";

export interface ITableSummaryProps {
  column: ITableColumn;
}

export function Table4Summary({ column }: ITableSummaryProps) {
  const summary: FieldSummary = column.summary;
  if(!summary) {
    return null;
  }
  makeReactive(summary);
  return (
    <>
      <span className="table4js-summary__value">{summary.value}</span>
      <select className="table4js-summary__select" value={summary.func} onChange={e => summary.func = e.target.value}>
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
