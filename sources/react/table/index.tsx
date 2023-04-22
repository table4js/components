import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Table } from "../../common/table";
import { makeReactive } from "../reactivity";
import { AbrisActions } from "../shared/actions";
import { AbrisDropdownActions } from "../shared/dropdown-actions";
import { Table4Row } from "./row";
import { AbrisComponent } from "../abris-component";
import { Table4RowWrapper } from "./row-wrapper";
import { Table4Summary } from "./plugins/summary";
import { Table4Search } from "./plugins/search";
import { Table4ColumnFilter } from "./plugins/filter/column-filter";
import { ElementsContainer } from "../shared/elements-container";

function EmptyTable() {
  return (
    <tr className="table4js__row">
      <td
        className="table4js-cell"
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
        <tr key={index} className="table4js__row">
          <td className="table4js-cell table4js-technical-cell">
            <div className="table4js-technical-cell__container">
              <div className="table4js__check">
                <div className="table4js-svg-icon table4js__icon-check"></div>
              </div>
            </div>
          </td>
          {visibleColumns.map((vc) => (
            <td className="table4js-cell table4js-technical-cell">
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
        </tr>
      ))}
    </>
  );
}

export interface ITableProps {
  model: Table;
}

export function Table4({ model }: ITableProps) {
  const dropdownActions = model.getActions("dropdownActions");
  const [startRow, setStartRow] = useState<number | undefined>(undefined);
  const rootRef = useRef(null);
  makeReactive(model);
  // makeReactive(model.searchModel);
  useEffect(() => {
    model.attach(rootRef.current.parentElement);
  });
  return (
    <div className="table4js-root table4js-root--fit-width">
      <div ref={rootRef} className="table4js-resizable-container">
        <div className="table4js-scroll-container">
          <table className="table4js">
            <thead className="table4js__header table4js-sticky-component">
              <tr key="header-tools" className="table4js-header-tools">
                <th
                  className="table4js-header-tools__cell"
                  colSpan={"100%" as any}
                >
                  <div className="table4js-header-tools__container table4js-group-header-technical-cell">
                    <div className="table4js-preheader__first-row">
                      <ElementsContainer elements={model.getLayoutElements("preHeaderFirstRow")}></ElementsContainer>
                      <AbrisActions
                        className="table4js-actions"
                        actions={model.topActions}
                      />
                      {model.dropdownActions.length > 0 && (
                        <AbrisDropdownActions
                          title=""
                          className="table4js-dropdown table4js-actions-menu"
                          actions={model.dropdownActions}
                        />
                      )}
                    </div>
                    <div className="table4js-preheader__second-row">
                      <ElementsContainer elements={model.getLayoutElements("preHeaderSecondRow")}></ElementsContainer>
                    </div>
                  </div>
                </th>
              </tr>
              <tr key="header-title" className="table4js-header-title">
                <th
                  key="row-selection-cell"
                  className="table4js-header-title__cell table4js-switch"
                >
                  <div
                    className={
                      model.isNumber
                        ? "table4js-switch__text switch__text--selected"
                        : "table4js-switch__text"
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
                      className="table4js-header-title__cell"
                      onMouseOut={(e) => model.logMouseOut(c, e)}
                      onMouseMove={(e) => model.logMouseMove(c, e)}
                      onMouseUp={(e) => model.logMouseUp(c, e)}
                    >
                      <div className="table4js-title">
                        <span
                          className="table4js-title__text"
                          onClick={(e) => {
                            model.clickColumn(c, e);
                          }}
                        >
                          {c.title}
                        </span>
                        <div className="table4js-title__tools">
                          <div
                            className="table4js-svg-icon table4js-title__sorter"
                            style={{
                              visibility:
                                c.order === false ? "visible" : "hidden",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: model.icons.sortup,
                            }}
                          ></div>
                          <div
                            className="table4js-svg-icon table4js-title__sorter"
                            style={{
                              visibility:
                                c.order === true ? "visible" : "hidden",
                            }}
                            dangerouslySetInnerHTML={{
                              __html: model.icons.sortdown,
                            }}
                          ></div>
                          {
                            model.columnHeaderActions.map(action => {
                              return <div key={action.name}
                                className={"table4js-svg-icon " + action.cssClasses}
                                dangerouslySetInnerHTML={{ __html: action.svg }}
                                onClick={(e) => {
                                  action.action(c);
                                  e.stopPropagation();
                                }}
                                title={action.title}
                              ></div>;
                            })
                          }
                        </div>
                      </div>
                      <div
                        className="table4js-title_resize"
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
                  className="table4js-header-title__cell table4js-header-title__technical-cell--right"
                ></th>
              </tr>
            </thead>
            <tbody className="table4js__body">
              {model.rows.length == 0 && model.loadingMutex == false
                ? EmptyTable()
                : null}
              {model.loadingMutex
                ? LoadingIndicator(model)
                : model.rows.map((row, index) => (
                  <Table4RowWrapper key={"row" + index + "_" + (row.id || row.number)} table={model} row={row} />
                ))}
            </tbody>
            <tfoot className="table4js__footer table4js-sticky-component">
              {model.showTableSummary && (
                <tr key="footer-summary" className="table4js-footer-summary">
                  <th
                    key="footer-tech-cell"
                    className="table4js-cell table4js-technical-cell table4js-footer__cell"
                  >
                    <div className="table4js-technical-cell__container">
                      <div
                        className="table4js-svg-icon table4js-icon-equal"
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
                        className="table4js-cell table4js-footer__cell"
                      >
                        <Table4Summary column={c} />
                      </th>
                    ))}
                  <th
                    key="footer-context-menu-cell"
                    className="table4js-cell table4js-footer__cell table4js-technical-cell table4js-technical-cell--right"
                  ></th>
                </tr>
              )}
              <tr key="footer-tools" className="table4js-footer-tools">
                <th
                  className="table4js-footer-tools__cell"
                  colSpan={"100%" as any}
                >
                  <div className="table4js-footer-tools__container table4js-group-header-technical-cell">
                    <div className="table4js-row-management">
                      <AbrisActions
                        className="table4js-actions"
                        actions={model.bottomActions}
                      />
                    </div>
                    <div className="table4js-info">
                      <span className="table4js-info__total table4js-info__text">
                        {"Total: " + model.totalCount}
                      </span>
                      <div className="table4js-info__go-to">
                        <span className="table4js-go-to__text table4js-info__text">
                          Go to:
                        </span>
                        <input
                          className="table4js-go-to__value"
                          defaultValue={model.startRow}
                          onChange={(e) => setStartRow(+e.target.value)}
                          onKeyDown={(e) => {
                            if (e.code === "Enter") {
                              model.startRow = +((e.target as any).value);
                            }
                          }}
                        />
                        <button className="table4js-btn-transparent">
                          <div
                            className="table4js-svg-icon table4js-go-to__icon"
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
