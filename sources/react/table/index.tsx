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
        <td className="abris-table-cell" colSpan={"100%" as any} data-bind="text: noDataText">noData</td>
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
                        <div className="abris-svg-icon abris-table-icon-row-tools abris-table__more" dangerouslySetInnerHTML={{__html: table.icons.more}} ></div>
                        <div className="abris-svg-icon abris-table-icon-row-tools abris-table__edit" dangerouslySetInnerHTML={{__html: table.icons.edit}} ></div>
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
                <div className={cell.css || "abris-table-cell__container"} data-bind="click: $parents[1].startEditCell">
                <span
                    className={cell.text!==cell.data? 'abris-table-cell__text abris-table-cell__text__modified' : 'abris-table-cell__text'}
                    dangerouslySetInnerHTML={{__html: cell.text}}></span>
                </div>
            </>);
        } else {
            return <div className={(cell.count > 1) && table.isMergedСells ? 'cell__sticky-text ' + cell.css : cell.css}    //"abris-table-cell__container"
                style={{top: table[1].tableHeadHeight - 2 + 'px'}}
                data-bind="click: $parents[1].startEditCell">
                <span className="abris-table-cell__merged-text"
                    dangerouslySetInnerHTML={{__html: cell.text}}></span>
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
            <tr className={r.selected?'abris-table__row--selected':"abris-table__row"} style={{background: "none" }}>
            <td className="abris-table-cell abris-table-technical-cell" data-bind="click: select">
                <div className="abris-table-technical-cell__container">
                {
                    table.isNumber ? <div className="abris-table__number">{r.number}</div>
                    : <div className="abris-table__check">
                        {r.selected &&<div className="abris-svg-icon abris-table__icon-check" dangerouslySetInnerHTML={{__html: table.icons.check}}></div>}
                    </div>
                }
                </div>
            </td>
            {r.cells.map(cell => <>
                { ((cell.count > 0) || !table.isMergedСells) && 
                <td className="abris-table-cell" 
                style = {{background: cell.color}}
                data-bind="attr: {rowspan: $parents[1].isMergedСells ? count : 1},
                css: (count > 1) && $parents[1].isMergedСells ? 'abris-table-cell--merged ' : ''">
                {CellContent(table, r, cell)}
                </td> }
            </>
            )}
            <td className="abris-table-cell abris-table-technical-cell" data-bind="click: click">
                <div className="abris-table-technical-cell__container">
                <div className="abris-svg-icon abris-table-icon-row-tools abris-table__more" dangerouslySetInnerHTML={{__html: table.icons.more}}></div>
                <div className="abris-svg-icon abris-table-icon-row-tools abris-table__edit" dangerouslySetInnerHTML={{__html: table.icons.edit}}></div>
                </div>
                {!table.hasActiveInplaceEditor && <div className="abris-table__row--select" ></div>}
                <div className="abris-table__row--colored" style = {{ 'background': r.color ? r.color : 'rgba(248,249,253)' }}></div>
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
                        {props.model.viewFilterTable && <div className="abris-table-filter" >
                            <div className="abris-table-filter__container">
                            {/* <!-- ko foreach: columns -->
                            <!-- ko component: { name: 'abris-filter-item', params: { context: filterContext } } -->
                            <!-- /ko -->
                            <!-- /ko --> */}
                            </div>
                        </div>}
                        </div>
                    </th>
                    </tr>
                    <tr className="abris-table-header-title">
                    <th className="abris-table-header-title__cell abris-table-switch">
                        <div className={props.model.isNumber?'switch__text--selected':"abris-table-switch__text"}
                        data-bind="click: () => $data.isNumber = !$data.isNumber">#
                        </div>
                    </th>
                    {
                    props.model.columns.filter(c => c.visible).map(c =>
                    <th className="abris-table-header-title__cell"
                        data-bind="event: {mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp}">
                        <div className="abris-table-title">
                        <span className="abris-table-title__text" onClick={(e)=>{props.model.clickColumn(c, e)}} data-bind="click: $parent.clickColumn">{c.title}</span>
                        <div className="abris-table-title__tools">
                            <div className="abris-svg-icon abris-table-title__sorter"  style={{visibility:  (c.order === false)?"visible":"hidden"}}  dangerouslySetInnerHTML={{__html: props.model.icons.sortup}} ></div>
                            <div className="abris-svg-icon abris-table-title__sorter" style={{visibility:  (c.order === true)?"visible":"hidden"}} dangerouslySetInnerHTML={{__html: props.model.icons.sortdown}}></div>
                            <div className="abris-svg-icon abris-table-title__filter" data-bind="click: clickFilter" dangerouslySetInnerHTML={{__html: props.model.icons.filter}}></div>
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
                    {props.model.showTableSummary && <tr className="abris-table-footer-summary" >
                    <th className="abris-table-cell abris-table-technical-cell abris-table-footer__cell">
                        <div className="abris-table-technical-cell__container">
                        <div className="abris-svg-icon abris-table-icon-equal" dangerouslySetInnerHTML={{__html: props.model.icons.equal}}></div>
                        </div>
                    </th>
                    {
                    props.model.columns.filter(c => c.visible).map(c =>
                    <th className="abris-table-cell abris-table-footer__cell">
                        {/* <abris-table-summary params='column: $data'></abris-table-summary> */}
                    </th>)
                    }
                    <th className="abris-table-cell abris-table-technical-cell abris-table-footer__cell"></th>
                    </tr>}
                    <tr className="abris-table-footer-tools">
                    <th className="abris-table-footer-tools__cell" colSpan={"100%" as any}>
                        <div className="abris-table-footer-tools__container abris-table-group-header-technical-cell">
                        <div className="abris-table-row-management">
                            {/* <abris-actions className="abris-table-actions" params="model: $data, options: { action: 'bottomActions' }">
                            </abris-actions> */}
                        </div>
                        <div className="abris-table-info">
                            <span className="abris-table-info__total abris-table-info__text">{'Всего: ' + props.model.totalCount}</span>
                            <div className="abris-table-info__go-to">
                            <span className="abris-table-go-to__text abris-table-info__text">Перейти к </span>
                            <input className="abris-table-go-to__value" data-bind="value: startRow"/>
                            <button className="abris-btn-transparent">
                                <div className="abris-svg-icon abris-table-go-to__icon" dangerouslySetInnerHTML={{__html: props.model.icons.arrowright}}></div>
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