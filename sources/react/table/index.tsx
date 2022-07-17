import * as React from "react";
import { TableWidget } from "../../table";
import { ITableCell } from "../../table/cell";
import { ITableRow } from "../../table/row";

export interface IAbrisComponentsTableProps {
    model: TableWidget;
}

function EmptyTable() {
    return (
    <tr className="abris-table__row">
        <td className="abris-table-cell" colSpan={"100%" as any} data-bind="text: noDataText"></td>
    </tr>
    );
}

function LoadingIndicator(table: TableWidget) {
    const visibleColumns = table.columns.filter(c => c.visible);
    return (<>
        {visibleColumns.map(c =>
            <tr className="abris-table__row">
                <td className="abris-table-cell abris-table-technical-cell" >
                    <div className="abris-table-technical-cell__container">
                    <div className="abris-table__check">
                        <div className="abris-svg-icon abris-table__icon-check"></div>
                    </div>
                    </div>
                </td>
                {visibleColumns.map(vc =>
                <td className="abris-table-cell abris-table-technical-cell">
                    <div className="abris-table-cell__container abris-table-cell__container--loading">
                    </div>
                </td>
                )}
                <td className="abris-table-cell abris-table-technical-cell">
                    <div className="abris-table-technical-cell__container">
                        <div className="abris-svg-icon abris-table-icon-row-tools abris-table__more" data-bind="html: $root.icons.more"></div>
                        <div className="abris-svg-icon abris-table-icon-row-tools abris-table__edit" data-bind="html: $root.icons.edit"></div>
                    </div>
                </td>
            </tr>)}
    </>
    );
}

function CellContent(table: TableWidget, row: ITableRow, cell: ITableCell) {
    if(!(cell.inplaceEditForm && table.config.enableEdit)) {
        if(!(cell.count > 1 && table.isMergedСells)) {
            return (<>
                <div className="abris-table-cell__container" data-bind="css: css, click: $parents[1].startEditCell">
                <span
                    data-bind="html: text,
                    css: text!==data? 'abris-table-cell__text abris-table-cell__text__modified' : 'abris-table-cell__text'"></span>
                </div>
            </>);
        } else {
            return <div className="abris-table-cell__container"
                data-bind="css: (count > 1) && $parents[1].isMergedСells ? 'cell__sticky-text ' + css : css, style: {top: $parents[1].tableHeadHeight - 2 + 'px'},
                    click: $parents[1].startEditCell">
                <span className="abris-table-cell__merged-text"
                    data-bind="html: text"></span>
                </div>;
        }
    }
    // return <abris-cell-editor params="model: inplaceEditForm"></abris-cell-editor>;
    return null;
}

function TableContent(table: TableWidget) {
    const visibleColumns = table.columns.filter(c => c.visible);
    return (
        <>
        {table.rows.map(r => 
            <tr className="abris-table__row" data-bind="css: {'abris-table__row--selected': selected}, style: {'background-color': 'none' }">
            <td className="abris-table-cell abris-table-technical-cell" data-bind="click: select">
                <div className="abris-table-technical-cell__container">
                {
                    table.isNumber ? <div className="abris-table__number" data-bind="text: number"></div>
                    : <div className="abris-table__check">
                        <div className="abris-svg-icon abris-table__icon-check" data-bind="visible: selected, html: $root.icons.check"></div>
                    </div>
                }
                </div>
            </td>
            {r.cells.map(cell => 
                <td className="abris-table-cell" data-bind="attr: {rowspan: $parents[1].isMergedСells ? count : 1},
                css: (count > 1) && $parents[1].isMergedСells ? 'abris-table-cell--merged ' : '',
                visible: (count > 0) || !$parents[1].isMergedСells,
                style: {'background-color': color} ">
                {CellContent(table, r, cell)}
            </td>
            )}
            <td className="abris-table-cell abris-table-technical-cell" data-bind="click: click">
                <div className="abris-table-technical-cell__container">
                <div className="abris-svg-icon abris-table-icon-row-tools abris-table__more" data-bind="html: $root.icons.more"></div>
                <div className="abris-svg-icon abris-table-icon-row-tools abris-table__edit" data-bind="html: $root.icons.edit"></div>
                </div>
                <div className="abris-table__row--select" data-bind="visible: !$parent.hasActiveInplaceEditor"></div>
                <div className="abris-table__row--colored" data-bind="style: { 'background': color ? color : 'rgba(248,249,253)' }"></div>
            </td>
            </tr>
        )}
        </>
    )
}

export function AbrisComponentsTable(props: IAbrisComponentsTableProps): React.ReactNode {
    const dropdownActions = props.model.getActions('dropdownActions');
    return (
        <div className="abris-table-resizable-container">
            <div className="abris-table-scroll-container">
                <table className="abris-table">
                <thead className="abris-table__header abris-table-sticky-component">
                    <tr className="abris-table-header-tools">
                    <th className="abris-table-header-tools__cell" colSpan={"100%" as any}>
                        <div className="abris-table-header-tools__container abris-table-group-header-technical-cell">
                        <div className="abris-table-preheader">
                            <div className="abris-table-search-group">
                            {/* (props.model.showSearch ? <abris-search params="model: searchModel"></abris-search> : null) */}
                            {/* <abris-actions className="abris-table-actions" params="model: $data, options: { action: 'topActions' }">
                            </abris-actions>
                            ({dropdownActions.length > 0 ?
                            <abris-dropdown-actions className="abris-table-dropdown abris-table-actions-menu"
                                params="data: $data, actions: 'dropdownActions'">
                            </abris-dropdown-actions> : null}) */}
                            </div>
                        </div>
                        <div className="abris-table-filter" data-bind="visible: viewFilterTable">
                            <div className="abris-table-filter__container">
                            {/* <!-- ko foreach: columns -->
                            <!-- ko component: { name: 'abris-filter-item', params: { context: filterContext } } -->
                            <!-- /ko -->
                            <!-- /ko --> */}
                            </div>
                        </div>
                        </div>
                    </th>
                    </tr>
                    <tr className="abris-table-header-title">
                    <th className="abris-table-header-title__cell abris-table-switch">
                        <div className="abris-table-switch__text"
                        data-bind="css: {'switch__text--selected': isNumber}, click: () => $data.isNumber = !$data.isNumber">#
                        </div>
                    </th>
                    {
                    props.model.columns.filter(c => c.visible).map(c =>
                    <th className="abris-table-header-title__cell"
                        data-bind="event: {mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp}">
                        <div className="abris-table-title">
                        <span className="abris-table-title__text" data-bind="html: title, click: $parent.clickColumn"></span>
                        <div className="abris-table-title__tools">
                            <div className="abris-svg-icon abris-table-title__sorter" data-bind="visible: order === false, html: $root.icons.sortup"></div>
                            <div className="abris-svg-icon abris-table-title__sorter" data-bind="visible: order === true, html: $root.icons.sortdown"></div>
                            <div className="abris-svg-icon abris-table-title__filter" data-bind="click: clickFilter, html: $root.icons.filter"></div>
                        </div>
                        </div>
                        <div className="abris-table-title_resize"
                        data-bind="event: {mouseover: $parent.logMouseOver, mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp, mousedown: $parent.logMouseDown}">
                        </div>
                    </th>)
                    }
                    <th className="abris-table-header-title__cell"></th>
                    </tr>
                </thead>
                <tbody className="abris-table__body">
                    { props.model.rows.length == 0 && props.model.loadingMutex == false ? EmptyTable() : null }
                    { props.model.loadingMutex ? LoadingIndicator(props.model) : TableContent(props.model) }
                </tbody>
                <tfoot className="abris-table__footer abris-table-sticky-component">
                    <tr className="abris-table-footer-summary" data-bind="visible: showTableSummary">
                    <th className="abris-table-cell abris-table-technical-cell abris-table-footer__cell">
                        <div className="abris-table-technical-cell__container">
                        <div className="abris-svg-icon abris-table-icon-equal" data-bind="html: $root.icons.equal"></div>
                        </div>
                    </th>
                    {
                    props.model.columns.filter(c => c.visible).map(c =>
                    <th className="abris-table-cell abris-table-footer__cell">
                        {/* <abris-table-summary params='column: $data'></abris-table-summary> */}
                    </th>)
                    }
                    <th className="abris-table-cell abris-table-technical-cell abris-table-footer__cell"></th>
                    </tr>
                    <tr className="abris-table-footer-tools">
                    <th className="abris-table-footer-tools__cell" colSpan={"100%" as any}>
                        <div className="abris-table-footer-tools__container abris-table-group-header-technical-cell">
                        <div className="abris-table-row-management">
                            {/* <abris-actions className="abris-table-actions" params="model: $data, options: { action: 'bottomActions' }">
                            </abris-actions> */}
                        </div>
                        <div className="abris-table-info">
                            <span className="abris-table-info__total abris-table-info__text"
                            data-bind="text: 'Всего: ' + totalCount"></span>
                            <div className="abris-table-info__go-to">
                            <span className="abris-table-go-to__text abris-table-info__text">Перейти к </span>
                            <input className="abris-table-go-to__value" data-bind="value: startRow"/>
                            <button className="abris-btn-transparent">
                                <div className="abris-svg-icon abris-table-go-to__icon" data-bind="html: $root.icons.arrowright"></div>
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