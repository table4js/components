import * as React from "react";
import { cellEditorTemplate } from "../../knockout";
import { TableWidget } from "../../table";
import { ITableRow } from "../../table/row";
import { makeReactive } from "../reactivity";
import { AbrisTableCell } from "./cell";

export interface ITableRowProps {
  table: TableWidget;
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
          ? "abris-table__row abris-table__row--selected"
          : "abris-table__row"
      }
      style={{ background: "none" }}
    >
      <td key="technical-cell"
        className="abris-table-cell abris-table-technical-cell"
        onClick={(e) => row.select(row, e)}
      >
        <div className="abris-table-technical-cell__container">
          {table.isNumber ? (
            <div className="abris-table__number">{row.number}</div>
          ) : (
            <div className="abris-table__check">
              {row.selected && (
                <div
                  className="abris-svg-icon abris-table__icon-check"
                  dangerouslySetInnerHTML={{ __html: table.icons.check }}
                ></div>
              )}
            </div>
          )}
        </div>
      </td>
      {row.cells.map((cell) => (
          (cell.count > 0 || !table.isMergedСells) && (
            <td key={cell.name}
              className={
                "abris-table-cell " +
                (cell.count > 1 && table.isMergedСells
                  ? "abris-table-cell--merged "
                  : "")
              }
              style={{ background: cell.color }}
              rowSpan={table.isMergedСells ? cell.count : 1}
            >
              <AbrisTableCell
                key={cell.name}
                table={table}
                cell={cell}
              ></AbrisTableCell>
            </td>
          )
      ))}
      <td key="context-menu-cell"
        className="abris-table-cell abris-table-technical-cell"
        onClick={(e) => row.click(row, e)}
      >
        <div className="abris-table-technical-cell__container">
          <div
            className="abris-svg-icon abris-table-icon-row-tools abris-table__more"
            dangerouslySetInnerHTML={{ __html: table.icons.more }}
          ></div>
          <div
            className="abris-svg-icon abris-table-icon-row-tools abris-table__edit"
            dangerouslySetInnerHTML={{ __html: table.icons.edit }}
          ></div>
        </div>
        {!table.hasActiveInplaceEditor && (
          <div className="abris-table__row--select"></div>
        )}
        <div
          className="abris-table__row--colored"
          style={{ background: row.color ? row.color : "rgba(248,249,253)" }}
        ></div>
      </td>
    </tr>
  );
}
