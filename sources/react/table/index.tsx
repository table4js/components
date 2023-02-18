import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Table } from "../../table";
import { makeReactive } from "../reactivity";
import { AbrisActions } from "../widgets/actions";
import { AbrisDropdownActions } from "../widgets/dropdown-actions";
import { TableRow } from "./row";
import { TableSummary } from "../../table/summary";
import { Table4Summary } from "./summary";
import { AbrisSearch } from "./search";
import { AbrisColumnFilter } from "./column-filter";

function EmptyTable() {
  return (
    <tr className="table4js-table__row">
      <td
        className="table4js-table-cell"
        colSpan={"100%" as any}
        data-bind="text: noDataText"
      >
        noData
      </td>
    </tr>
  );
}

function LoadingIndicator(table: Table) {
  const visibleColumns = table.columns.filter((c) => c.visible);
  return (
    <>
      {visibleColumns.map((c, index) => (
        <tr key={index} className="table4js-table__row">
          <td className="table4js-table-cell table4js-table-technical-cell">
            <div className="table4js-table-technical-cell__container">
              <div className="table4js-table__check">
                <div className="table4js-svg-icon table4js-table__icon-check"></div>
              </div>
            </div>
          </td>
          {visibleColumns.map((vc) => (
            <td className="table4js-table-cell table4js-table-technical-cell">
              <div className="table4js-table-cell__container table4js-table-cell__container--loading"></div>
            </td>
          ))}
          <td className="table4js-table-cell table4js-table-technical-cell">
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
          </td>
        </tr>
      ))}
    </>
  );
}

export interface ITableProps {
  model: Table;
}

export function Table4({
  model,
}: ITableProps): React.ReactNode {
  const dropdownActions = model.getActions("dropdownActions");
  const [startRow, setStartRow] = useState<number | undefined>(undefined);
  const rootRef = useRef(null);
  makeReactive(model);
  // makeReactive(model.searchModel);
  useEffect(() => {
    model.initialize(rootRef.current.parentElement);
  });
  return (
    <div className="table4js-table">
      <div ref={rootRef} className="table4js-table-resizable-container">
        <div className="table4js-table-scroll-container">
          <table className="table4js-table">
            <thead className="table4js-table__header table4js-table-sticky-component">
              <tr key="header-tools" className="table4js-table-header-tools">
                <th
                  className="table4js-table-header-tools__cell"
                  colSpan={"100%" as any}
                >
                  <div className="table4js-table-header-tools__container table4js-table-group-header-technical-cell">
                    <div className="table4js-table-preheader">
                      <div className="table4js-table-search-group">
                        {model.showSearch ? (
                          <AbrisSearch
                            icon={model.icons.search}
                            searchModel={model.searchModel}
                          ></AbrisSearch>
                        ) : null}
                        <AbrisActions
                          className="table4js-table-actions"
                          actions={model.topActions}
                        />
                        {model.dropdownActions.length > 0 && (
                          <AbrisDropdownActions
                            className="table4js-table-dropdown table4js-table-actions-menu"
                            actions={model.dropdownActions}
                          />
                        )}
                      </div>
                    </div>
                    {model.viewFilterTable && (
                      <div className="table4js-table-filter">
                        <div className="table4js-table-filter__container">
                          {model.columns.map((c) => (
                            <AbrisColumnFilter
                              key={c.name}
                              context={c.filterContext}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </th>
              </tr>
              <tr key="header-title" className="table4js-table-header-title">
                <th
                  key="row-selection-cell"
                  className="table4js-table-header-title__cell table4js-table-switch"
                >
                  <div
                    className={
                      model.isNumber
                        ? "table4js-table-switch__text switch__text--selected"
                        : "table4js-table-switch__text"
                    }
                    onClick={(_) => (model.isNumber = !model.isNumber)}
                  >
                    #
                  </div>
                </th>
                {model.columns
                  .filter((c) => c.visible)
                  .map((c) => (
                    <th
                      key={c.name}
                      className="table4js-table-header-title__cell"
                      onMouseOut={(e) => model.logMouseOut(c, e)}
                      onMouseMove={(e) => model.logMouseMove(c, e)}
                      onMouseUp={(e) => model.logMouseUp(c, e)}
                    >
                      <div className="table4js-table-title">
                        <span
                          className="table4js-table-title__text"
                          onClick={(e) => {
                            model.clickColumn(c, e);
                          }}
                        >
                          {c.title}
                        </span>
                        <div className="table4js-table-title__tools">
                          <div
                            className="table4js-svg-icon table4js-table-title__sorter"
                            style={{
                              visibility:
                                c.order === false ? "visible" : "hidden",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: model.icons.sortup,
                            }}
                          ></div>
                          <div
                            className="table4js-svg-icon table4js-table-title__sorter"
                            style={{
                              visibility:
                                c.order === true ? "visible" : "hidden",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: model.icons.sortdown,
                            }}
                          ></div>
                          <div
                            className="table4js-svg-icon table4js-table-title__filter"
                            onClick={(e) => c.clickFilter(c, e.nativeEvent)}
                            dangerouslySetInnerHTML={{
                              __html: model.icons.filter,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div
                        className="table4js-table-title_resize"
                        onMouseOver={(e) => model.logMouseOver(c, e)}
                        onMouseOut={(e) => model.logMouseOut(c, e)}
                        onMouseMove={(e) => model.logMouseMove(c, e)}
                        onMouseUp={(e) => model.logMouseUp(c, e)}
                        onMouseDown={(e) => model.logMouseDown(c, e)}
                      ></div>
                    </th>
                  ))}
                <th
                  key="row-context-menu-cell"
                  className="table4js-table-header-title__cell"
                ></th>
              </tr>
            </thead>
            <tbody className="table4js-table__body">
              {model.rows.length == 0 && model.loadingMutex == false
                ? EmptyTable()
                : null}
              {model.loadingMutex
                ? LoadingIndicator(model)
                : model.rows.map((r) => (
                  <TableRow
                    key={r.id || r.number}
                    table={model}
                    row={r}
                  ></TableRow>
                ))}
            </tbody>
            <tfoot className="table4js-table__footer table4js-table-sticky-component">
              {model.showTableSummary && (
                <tr key="footer-summary" className="table4js-table-footer-summary">
                  <th
                    key="footer-tech-cell"
                    className="table4js-table-cell table4js-table-technical-cell table4js-table-footer__cell"
                  >
                    <div className="table4js-table-technical-cell__container">
                      <div
                        className="table4js-svg-icon table4js-table-icon-equal"
                        dangerouslySetInnerHTML={{
                          __html: model.icons.equal,
                        }}
                      ></div>
                    </div>
                  </th>
                  {model.columns
                    .filter((c) => c.visible)
                    .map((c) => (
                      <th
                        key={c.name}
                        className="table4js-table-cell table4js-table-footer__cell"
                      >
                        <Table4Summary column={c} />
                      </th>
                    ))}
                  <th
                    key="footer-context-menu-cell"
                    className="table4js-table-cell table4js-table-technical-cell table4js-table-footer__cell"
                  ></th>
                </tr>
              )}
              <tr key="footer-tools" className="table4js-table-footer-tools">
                <th
                  className="table4js-table-footer-tools__cell"
                  colSpan={"100%" as any}
                >
                  <div className="table4js-table-footer-tools__container table4js-table-group-header-technical-cell">
                    <div className="table4js-table-row-management">
                      <AbrisActions
                        className="table4js-table-actions"
                        actions={model.bottomActions}
                      />
                    </div>
                    <div className="table4js-table-info">
                      <span className="table4js-table-info__total table4js-table-info__text">
                        {"Total: " + model.totalCount}
                      </span>
                      <div className="table4js-table-info__go-to">
                        <span className="table4js-table-go-to__text table4js-table-info__text">
                          Go to:
                        </span>
                        <input
                          className="table4js-table-go-to__value"
                          defaultValue={model.startRow}
                          onChange={(e) => setStartRow(+e.target.value)}
                          onKeyDown={(e) => {
                            if (e.code === "Enter") {
                              model.startRow = +e.target.value;
                            }
                          }}
                        />
                        <button className="table4js-btn-transparent">
                          <div
                            className="table4js-svg-icon table4js-table-go-to__icon"
                            dangerouslySetInnerHTML={{
                              __html: model.icons.arrowright,
                            }}
                            onClick={(_) => (model.startRow = startRow)}
                          ></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
