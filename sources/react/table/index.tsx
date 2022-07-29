import * as React from "react";
import { useState, useEffect } from "react";
import { TableWidget } from "../../table";
import { makeReactive } from "../reactivity";
import { AbrisActions } from "../widgets/actions";
import { AbrisFilterItem } from "../widgets/filter-item";
import { AbrisDropdownActions } from "../widgets/dropdown-actions";
import { TableRow } from "./row";
import { TableSummary } from "../../table/summary";
import { AbrisTableSummary } from "./summary";
import { AbrisSearch } from "./search";

function EmptyTable() {
  return (
    <tr className="abris-table__row">
      <td
        className="abris-table-cell"
        colSpan={"100%" as any}
        data-bind="text: noDataText"
      >
        noData
      </td>
    </tr>
  );
}

function LoadingIndicator(table: TableWidget) {
  const visibleColumns = table.columns.filter((c) => c.visible);
  return (
    <>
      {visibleColumns.map((c, index) => (
        <tr key={index} className="abris-table__row">
          <td className="abris-table-cell abris-table-technical-cell">
            <div className="abris-table-technical-cell__container">
              <div className="abris-table__check">
                <div className="abris-svg-icon abris-table__icon-check"></div>
              </div>
            </div>
          </td>
          {visibleColumns.map((vc) => (
            <td className="abris-table-cell abris-table-technical-cell">
              <div className="abris-table-cell__container abris-table-cell__container--loading"></div>
            </td>
          ))}
          <td className="abris-table-cell abris-table-technical-cell">
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
          </td>
        </tr>
      ))}
    </>
  );
}

export interface ITableWidgetProps {
  model: TableWidget;
}

export function AbrisComponentsTable({
  model,
}: ITableWidgetProps): React.ReactNode {
  const dropdownActions = model.getActions("dropdownActions");
  makeReactive(model);
  // makeReactive(model.searchModel);
  return (
    <div className="abris-table-resizable-container">
      <div className="abris-table-scroll-container">
        <table className="abris-table">
          <thead className="abris-table__header abris-table-sticky-component">
            <tr key="header-tools" className="abris-table-header-tools">
              <th
                className="abris-table-header-tools__cell"
                colSpan={"100%" as any}
              >
                <div className="abris-table-header-tools__container abris-table-group-header-technical-cell">
                  <div className="abris-table-preheader">
                    <div className="abris-table-search-group">
                      {model.showSearch ? (
                        <AbrisSearch
                          icon={model.icons.search}
                          searchModel={model.searchModel}
                        ></AbrisSearch>
                      ) : null}
                      <AbrisActions
                        className="abris-table-actions"
                        actions={model.topActions}
                      />
                      {model.dropdownActions.length > 0 && (
                        <AbrisDropdownActions
                          className="abris-table-dropdown abris-table-actions-menu"
                          actions={model.dropdownActions}
                        />
                      )}
                    </div>
                  </div>
                  {model.viewFilterTable && (
                    <div className="abris-table-filter">
                      <div className="abris-table-filter__container">
                        {model.columns.map((c) => (
                          <AbrisFilterItem
                            key={c.name}
                            filterContext={c.filterContext}
                          />
                        ))}
                        {/* <!-- ko foreach: columns -->
                            <!-- ko component: { name: 'abris-filter-item', params: { context: filterContext } } -->
                            <!-- /ko -->
                            <!-- /ko --> */}
                      </div>
                    </div>
                  )}
                </div>
              </th>
            </tr>
            <tr key="header-title" className="abris-table-header-title">
              <th
                key="row-selection-cell"
                className="abris-table-header-title__cell abris-table-switch"
              >
                <div
                  className={
                    model.isNumber
                      ? "abris-table-switch__text switch__text--selected"
                      : "abris-table-switch__text"
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
                    className="abris-table-header-title__cell"
                    onMouseOut={(e) => model.logMouseOut(c, e)}
                    onMouseMove={(e) => model.logMouseMove(c, e)}
                    onMouseUp={(e) => model.logMouseUp(c, e)}
                  >
                    <div className="abris-table-title">
                      <span
                        className="abris-table-title__text"
                        onClick={(e) => {
                          model.clickColumn(c, e);
                        }}
                      >
                        {c.title}
                      </span>
                      <div className="abris-table-title__tools">
                        <div
                          className="abris-svg-icon abris-table-title__sorter"
                          style={{
                            visibility:
                              c.order === false ? "visible" : "hidden",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: model.icons.sortup,
                          }}
                        ></div>
                        <div
                          className="abris-svg-icon abris-table-title__sorter"
                          style={{
                            visibility: c.order === true ? "visible" : "hidden",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: model.icons.sortdown,
                          }}
                        ></div>
                        <div
                          className="abris-svg-icon abris-table-title__filter"
                          onClick={(e) => c.clickFilter(c, e.nativeEvent)}
                          dangerouslySetInnerHTML={{
                            __html: model.icons.filter,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div
                      className="abris-table-title_resize"
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
                className="abris-table-header-title__cell"
              ></th>
            </tr>
          </thead>
          <tbody className="abris-table__body">
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
          <tfoot className="abris-table__footer abris-table-sticky-component">
            {model.showTableSummary && (
              <tr key="footer-summary" className="abris-table-footer-summary">
                <th
                  key="footer-tech-cell"
                  className="abris-table-cell abris-table-technical-cell abris-table-footer__cell"
                >
                  <div className="abris-table-technical-cell__container">
                    <div
                      className="abris-svg-icon abris-table-icon-equal"
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
                      className="abris-table-cell abris-table-footer__cell"
                    >
                      <AbrisTableSummary summary={new TableSummary(c)} />
                    </th>
                  ))}
                <th
                  key="footer-context-menu-cell"
                  className="abris-table-cell abris-table-technical-cell abris-table-footer__cell"
                ></th>
              </tr>
            )}
            <tr key="footer-tools" className="abris-table-footer-tools">
              <th
                className="abris-table-footer-tools__cell"
                colSpan={"100%" as any}
              >
                <div className="abris-table-footer-tools__container abris-table-group-header-technical-cell">
                  <div className="abris-table-row-management">
                    <AbrisActions
                      className="abris-table-actions"
                      actions={model.bottomActions}
                    />
                  </div>
                  <div className="abris-table-info">
                    <span className="abris-table-info__total abris-table-info__text">
                      {"Всего: " + model.totalCount}
                    </span>
                    <div className="abris-table-info__go-to">
                      <span className="abris-table-go-to__text abris-table-info__text">
                        Перейти к{" "}
                      </span>
                      <input
                        className="abris-table-go-to__value"
                        value={model.startRow}
                      />
                      <button className="abris-btn-transparent">
                        <div
                          className="abris-svg-icon abris-table-go-to__icon"
                          dangerouslySetInnerHTML={{
                            __html: model.icons.arrowright,
                          }}
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
  );
}
