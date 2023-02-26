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
      className={row.css}
      style={{ background: "none" }}
    >
      <td
        key="technical-cell"
        className="table4js-cell table4js-technical-cell"
        onClick={(e) => row.select(row, e)}
      >
        <div className="table4js-technical-cell__container">
          {table.isNumber ? (
            <div className="table4js__number">{row.number}</div>
          ) : (
            <div className="table4js__check">
              {row.selected && (
                <div
                  className="table4js-svg-icon table4js__icon-check"
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
                "table4js-cell " +
                (cell.count > 1 && table.isMergedCells
                  ? "table4js-cell--merged "
                  : "")
              }
              style={{ background: cell.color }}
              rowSpan={table.isMergedCells ? cell.count : 1}
            >
              <AbrisComponent componentName={row.getCellComponent(cell)} componentProps={row.getCellComponentParams({ key: cell.name, table: table, cell: cell })} />
            </td>
          )
      )}
      <td
        key="context-menu-cell"
        className="table4js-cell table4js-technical-cell"
        onClick={(e) => row.click(row, e)}
      >
        <div className="table4js-technical-cell__container">
          <div
            className="table4js-svg-icon table4js-icon-row-tools table4js__more"
            dangerouslySetInnerHTML={{ __html: table.icons.more }}
          ></div>
          {
            table.rowActions.map(action => {
              return <div
                className={"table4js-svg-icon table4js-icon-row-tools " + action.cssClasses}
                dangerouslySetInnerHTML={{ __html: action.svg }}
                onClick={(e) => {
                  action.action(row);
                  e.stopPropagation();
                }}
                title={action.title}
              ></div>;
            })
          }
        </div>
        {table.allowRowSelection && (
          <div className="table4js__row--select"></div>
        )}
        <div
          className="table4js__row--colored"
          style={{ background: row.color ? row.color : "rgba(248,249,253)" }}
        ></div>
      </td>
    </tr>
  );
}
