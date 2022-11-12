import * as React from "react";
import { TableWidget } from "../../table";
import { SearchModel } from "../../table/search";
import { makeReactive } from "../reactivity";
import { AbrisSearch } from "./search";

export interface ITable4TableProps {
  model: TableWidget;
}

export function Table4TablePreheader(
  props: ITable4TableProps
) {
  const searchModel = props.model.searchModel as SearchModel;
  makeReactive(searchModel);

  return (
    <div className="abris-table-preheader">
      <div className="abris-table-search-group">
        <AbrisSearch
          icon={props.model.icons.search}
          searchModel={searchModel}
        ></AbrisSearch>
      </div>
    </div>
  );
}
