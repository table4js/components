import * as React from "react";
import { Table } from "../../table";
import { ITableRow } from "../../table/row";
import { makeReactive } from "../reactivity";
import { Table4Cell } from "./cell";

export interface ITableRowProps {
  table: Table;
  row: ITableRow;
}

export function TableRow({ table, row }: ITableRowProps) {
  makeReactive(row);
  const visibleColumns = table.columns.filter((c) => c.visible);
  return (
    <tr
      key={row.id || row.number}
      className={
        row.selected
          ? "table4js-table__row table4js-table__row--selected"
          : "table4js-table__row"
      }
      style={{ background: "none" }}
    >
      <td
        key="technical-cell"
        className="table4js-table-cell table4js-table-technical-cell"
        onClick={(e) => row.select(row, e)}
      >
        <div className="table4js-table-technical-cell__container">
          {table.isNumber ? (
            <div className="table4js-table__number">{row.number}</div>
          ) : (
            <div className="table4js-table__check">
              {row.selected && (
                <div
                  className="table4js-svg-icon table4js-table__icon-check"
                  dangerouslySetInnerHTML={{ __html: table.icons.check }}
                ></div>
              )}
            </div>
          )}
        </div>
      </td>
      {row.cells.map(
        (cell) =>
          (cell.count > 0 || !table.isMergedСells) && (
            <td
              key={cell.name}
              className={
                "table4js-table-cell " +
                (cell.count > 1 && table.isMergedСells
                  ? "table4js-table-cell--merged "
                  : "")
              }
              style={{ background: cell.color }}
              rowSpan={table.isMergedСells ? cell.count : 1}
            >
              <Table4Cell
                key={cell.name}
                table={table}
                cell={cell}
              ></Table4Cell>
            </td>
          )
      )}
      <td
        key="context-menu-cell"
        className="table4js-table-cell table4js-table-technical-cell"
        onClick={(e) => row.click(row, e)}
      >
        <div className="table4js-table-technical-cell__container">
          <div
            className="table4js-svg-icon table4js-table-icon-row-tools table4js-table__more"
            dangerouslySetInnerHTML={{ __html: table.icons.more }}
          ></div>
          <div
            className="table4js-svg-icon table4js-table-icon-row-tools table4js-table__edit"
            dangerouslySetInnerHTML={{ __html: table.icons.edit }}
          ></div>
        </div>
        {!table.hasActiveInplaceEditor && (
          <div className="table4js-table__row--select"></div>
        )}
        <div
          className="table4js-table__row--colored"
          style={{ background: row.color ? row.color : "rgba(248,249,253)" }}
        ></div>
      </td>
    </tr>
  );
}
