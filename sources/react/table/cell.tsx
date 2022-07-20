import * as React from "react";
import { TableWidget } from "../../table";
import { ITableCell } from "../../table/cell";
import { makeReactive } from "../reactivity";

export interface ITableCellProps {
  table: TableWidget;
  cell: ITableCell;
}

export function AbrisTableCell({ table, cell }: ITableCellProps) {
  makeReactive(cell);

  if (!(cell.inplaceEditForm && table.config.enableEdit)) {
    if (!(cell.count > 1 && table.isMergedСells)) {
      return (
        <>
          <div
            className={cell.css || "abris-table-cell__container"}
            onClick={(e) => table.startEditCell(cell)}
          >
            <span
              className={
                cell.text !== cell.data
                  ? "abris-table-cell__text abris-table-cell__text__modified"
                  : "abris-table-cell__text"
              }
              dangerouslySetInnerHTML={{ __html: cell.text }}
            ></span>
          </div>
        </>
      );
    } else {
      return (
        <div
          className={
            "abris-table-cell__container " +
            (cell.count > 1 && table.isMergedСells
              ? "cell__sticky-text " + cell.css
              : cell.css)
          }
          style={{ top: table[1].tableHeadHeight - 2 + "px" }}
          onClick={(e) => table.startEditCell(cell)}
        >
          <span
            className="abris-table-cell__merged-text"
            dangerouslySetInnerHTML={{ __html: cell.text }}
          ></span>
        </div>
      );
    }
  }
  // return <abris-cell-editor params="model: inplaceEditForm"></abris-cell-editor>;
  return null;
}
