import * as React from "react";
import { useState, useEffect } from "react";
import { TableWidget } from "../../table";
import { ITableCell } from "../../table/cell";
import { ITableRow } from "../../table/row";
import { TableSummary } from "../../table/summary";
import { ITableColumn } from "../../table/column";
import { makeReactive } from "../reactivity";

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

function AbrisSummary({ column }: { column: ITableColumn }) {
  const sum = new TableSummary(column);
  return (
    <>
      <span className="abris-table-summary__value">{sum.value}</span>
      <select className="abris-table-summary__select" value={sum.func}>
        {sum.summaryItems &&
          sum.summaryItems.map((s) => (
            <option value={s.value} title={s.title}>
              {s.title}
            </option>
          ))}
      </select>
    </>
  );
}

function AbrisSearch(table: TableWidget) {
  return (
    <div className="abris-search">
      <input
        className="abris-search__value"
        placeholder="Search..."
        data-bind="value: value"
      />
      <div className="abris-search__button" title="Search">
        <div
          className="abris-svg-icon abris-search__icon"
          dangerouslySetInnerHTML={{ __html: table.icons.search }}
        ></div>
      </div>
    </div>
  );
}

function AbrisAction({action}:{action: {
  icon: string;
  svg: string;
  visible: boolean;
  formId: string;
  name: string;
  title: string;
  cssLabel: string;
  cssClasses: string;
  active: boolean;}
}) {
  return (
    <button
      data-bind="click: $data.formId !== undefined ? undefined : action, 
                enable: !$data.enabled || ko.unwrap(enabled)"
      className={
        "abris-button--transparent action-button abris-action-button " +
        action.cssClasses +
        (action.active === true ? " abris-action--active" : "")
      }
      type={action.formId !== undefined ? "submit" : "button"}
      title={action.title || action.name}
      form={action.formId}
    >
      {action.svg && (
        <div
          className="abris-action-button__icon abris-button__svg-icon"
          dangerouslySetInnerHTML={{ __html: action.svg }}
        ></div>
      )}
      <span
        className={"abris-action-button__label " + action.cssLabel}
        style={{ display: action.title ? "block" : "none" }}
      >
        {action.title}
      </span>
    </button>
  );
}

function AbrisActions({
  className,
  actions,
}: {
  className: string;
  actions: any[];
}) {
  return (
    <div className={className}>
      {/* <!-- ko foreach: actions --> */}
      {/* <!-- ko ifnot: ko.unwrap($data.actions) --> */}
      {/* <!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  --> */}
      {/* <!-- ko component: { name: 'abris-action-item', params: $data } --> */}
      {actions.map((a) => ( <AbrisAction action={a}/> ))}

      {/* <!-- ko if: ko.unwrap($data.actions) && ko.unwrap($data.actions).length > 0 --> */}
      {/* <!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  --> */}
      {actions && actions.length > 0 && (
        <div className="abris-nested-actions abris-action-context-button">
          <div data-bind="html: $root.icons.paste"></div>
          <span className="abris-button__label" data-bind="text: title"></span>
          <div className="abris-nested-actions__dropdown">
            {/* <!-- ko foreach: actions --> */}
            {/* <!-- ko component: { name: 'abris-action-item', params: $data } --> */}
            {actions.map((a) => ( <AbrisAction action={a}/> ))}
          </div>
        </div>
      )}
    </div>
  );
}

function AbrisDropdownActions({
  className,
  actions,
}: {
  className: string;
  actions: any[];
}) {
  return (
    <div className={className}>
      <button
        className="abris-action-button abris-button--transparent abris-button-toggle"
        type="button"
        data-bind="click: toggle, attr: { title: title }"
      >
        <div data-bind="html: $root.icons.more_sq"></div>
        <span
          className="abris-action-button__label"
          data-bind="text: moreText"
        ></span>
      </button>
      {/* <!-- ko if: isOpen --> */}
      <ul className="abris-button-toggle__dropdown-menu">
        <AbrisActions className="abris-context-actions" actions={actions} />
      </ul>
    </div>
  );
}

function LoadingIndicator(table: TableWidget) {
  const visibleColumns = table.columns.filter((c) => c.visible);
  return (
    <>
      {visibleColumns.map((c) => (
        <tr className="abris-table__row">
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

function CellContent(table: TableWidget, row: ITableRow, cell: ITableCell) {
  if (!(cell.inplaceEditForm && table.config.enableEdit)) {
    if (!(cell.count > 1 && table.isMergedСells)) {
      return (
        <>
          <div
            className={cell.css || "abris-table-cell__container"}
            data-bind="click: $parents[1].startEditCell"
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
          data-bind="click: $parents[1].startEditCell"
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

function TableContent(table: TableWidget, isNumber: boolean) {
  const visibleColumns = table.columns.filter((c) => c.visible);
  return (
    <>
      {table.rows.map((r) => (
        <tr
          className={
            r.selected
              ? "abris-table__row abris-table__row--selected"
              : "abris-table__row"
          }
          style={{ background: "none" }}
        >
          <td
            className="abris-table-cell abris-table-technical-cell"
            data-bind="click: select"
          >
            <div className="abris-table-technical-cell__container">
              {isNumber ? (
                <div className="abris-table__number">{r.number}</div>
              ) : (
                <div className="abris-table__check">
                  {r.selected && (
                    <div
                      className="abris-svg-icon abris-table__icon-check"
                      dangerouslySetInnerHTML={{ __html: table.icons.check }}
                    ></div>
                  )}
                </div>
              )}
            </div>
          </td>
          {r.cells.map((cell) => (
            <>
              {(cell.count > 0 || !table.isMergedСells) && (
                <td
                  className={
                    "abris-table-cell " +
                    (cell.count > 1 && table.isMergedСells
                      ? "abris-table-cell--merged "
                      : "")
                  }
                  style={{ background: cell.color }}
                  rowSpan={table.isMergedСells ? cell.count : 1}
                >
                  {CellContent(table, r, cell)}
                </td>
              )}
            </>
          ))}
          <td
            className="abris-table-cell abris-table-technical-cell"
            data-bind="click: click"
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
              style={{ background: r.color ? r.color : "rgba(248,249,253)" }}
            ></div>
          </td>
        </tr>
      ))}
    </>
  );
}

export function AbrisComponentsTable({model}:{model: TableWidget}): React.ReactNode {
  const dropdownActions = model.getActions("dropdownActions");
  makeReactive(model);  
  return (
    <div className="abris-table-resizable-container">
      <div className="abris-table-scroll-container">
        <table className="abris-table">
          <thead className="abris-table__header abris-table-sticky-component">
            <tr className="abris-table-header-tools">
              <th
                className="abris-table-header-tools__cell"
                colSpan={"100%" as any}
              >
                <div className="abris-table-header-tools__container abris-table-group-header-technical-cell">
                  <div className="abris-table-preheader">
                    <div className="abris-table-search-group">
                      {model.showSearch ? AbrisSearch(model) : null}
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
            <tr className="abris-table-header-title">
              <th className="abris-table-header-title__cell abris-table-switch">
                <div
                  className={
                    model.isNumber
                      ? "abris-table-switch__text switch__text--selected"
                      : "abris-table-switch__text"
                  }
                  onClick={(_) => model.isNumber = !model.isNumber}
                >
                  #
                </div>
              </th>
              {model.columns
                .filter((c) => c.visible)
                .map((c) => (
                  <th
                    className="abris-table-header-title__cell"
                    data-bind="event: {mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp}"
                  >
                    <div className="abris-table-title">
                      <span
                        className="abris-table-title__text"
                        onClick={(e) => {
                          model.clickColumn(c, e);
                        }}
                        data-bind="click: $parent.clickColumn"
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
                          data-bind="click: clickFilter"
                          dangerouslySetInnerHTML={{
                            __html: model.icons.filter,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div
                      className="abris-table-title_resize"
                      data-bind="event: {mouseover: $parent.logMouseOver, mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp, mousedown: $parent.logMouseDown}"
                    ></div>
                  </th>
                ))}
              <th className="abris-table-header-title__cell"></th>
            </tr>
          </thead>
          <tbody className="abris-table__body">
            {model.rows.length == 0 && model.loadingMutex == false
              ? EmptyTable()
              : null}
            {model.loadingMutex
              ? LoadingIndicator(model)
              : TableContent(model, model.isNumber)}
          </tbody>
          <tfoot className="abris-table__footer abris-table-sticky-component">
            {model.showTableSummary && (
              <tr className="abris-table-footer-summary">
                <th className="abris-table-cell abris-table-technical-cell abris-table-footer__cell">
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
                    <th className="abris-table-cell abris-table-footer__cell">
                      <AbrisSummary column={c} />
                    </th>
                  ))}
                <th className="abris-table-cell abris-table-technical-cell abris-table-footer__cell"></th>
              </tr>
            )}
            <tr className="abris-table-footer-tools">
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
                        data-bind="value: startRow"
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
