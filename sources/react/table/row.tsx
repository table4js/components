import * as React from "react";
import { Table } from "../../table";
import { ITableRow } from "../../table/row";
import { AbrisComponent } from "../abris-component";
import { makeReactive } from "../reactivity";

export interface ITableRowProps {
  table: Table;
  row: ITableRow;
}

export function Table4Row({ table, row }: ITableRowProps) {
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
          (cell.count > 0 || !table.isMergedCells) && (
            <td
              key={cell.name}
              className={
                "table4js-table-cell " +
                (cell.count > 1 && table.isMergedCells
                  ? "table4js-table-cell--merged "
                  : "")
              }
              style={{ background: cell.color }}
              rowSpan={table.isMergedCells ? cell.count : 1}
            >
              <AbrisComponent componentName={row.getCellComponent(cell)} componentProps={{ key: cell.name, table: table, cell: cell }} />
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
