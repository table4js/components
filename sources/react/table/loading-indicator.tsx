import * as React from "react";
import { Table } from "../../common/table";

export function LoadingIndicator(table: Table) {
    const visibleColumns = table.columns.filter((c) => c.visible);
    const rows = [];
    for(let i=0; i<table.loadBatchSize; i++) {
      rows.push(<tr key={"indicator_row_" + i} className="table4js__row">
      <td className="table4js-cell table4js-technical-cell">
        <div className="table4js-technical-cell__container">
          <div className="table4js__check">
            <div className="table4js-svg-icon table4js__icon-check"></div>
          </div>
        </div>
      </td>
      {visibleColumns.map((vc) => (
        <td key={vc.name} className="table4js-cell table4js-technical-cell">
          <div className="table4js-cell__container table4js-cell__container--loading"></div>
        </td>
      ))}
      <td className="table4js-cell table4js-technical-cell table4js-technical-cell--right">
        <div className="table4js-technical-cell__container">
          <div
            className="table4js-svg-icon table4js-icon-row-tools table4js__row-more-action"
            dangerouslySetInnerHTML={{ __html: table.icons.more }}
          ></div>
        </div>
      </td>
    </tr>);
    }
    return (
      <>
        {rows}
      </>
    );
  }