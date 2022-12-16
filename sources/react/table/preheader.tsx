import * as React from "react";
import { Table } from "../../table";
import { SearchModel } from "../../table/search";
import { makeReactive } from "../reactivity";
import { AbrisSearch } from "./search";

export interface ITable4Props {
  model: Table;
}

export function Table4Preheader(
  props: ITable4Props
) {
  const searchModel = props.model.searchModel as SearchModel;
  makeReactive(searchModel);

  return (
    <div className="table4js-table-preheader">
      <div className="table4js-table-search-group">
        <AbrisSearch
          icon={props.model.icons.search}
          searchModel={searchModel}
        ></AbrisSearch>
      </div>
    </div>
  );
}
