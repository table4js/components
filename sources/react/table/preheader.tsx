import * as React from "react";
import { TableWidget } from "../../table";
import { SearchModel } from "../../table/search";
import { AbrisComponentsTableSearch } from "./search";
export interface IAbrisComponentsTableProps {
    model: TableWidget;
}
export function AbrisComponentsTablePreheader (props: IAbrisComponentsTableProps) {
    
    return (
        <div className="abris-table-preheader">
            <div className="abris-table-search-group">
                <AbrisComponentsTableSearch model={props.model.searchModel}></AbrisComponentsTableSearch>
            </div>
        </div>
    );
}