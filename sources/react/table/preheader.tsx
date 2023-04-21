import * as React from "react";
import { ITableProps } from ".";
import { Table } from "../../common/table";
import { SearchModel } from "../../common/table/search";
import { makeReactive } from "../reactivity";
import { Table4Search } from "./search";

export function Table4Preheader(
  props: ITableProps
) {
  const searchModel = props.model.searchModel as SearchModel;
  makeReactive(searchModel);

  return (
    <div className="table4js-preheader">
      <div className="table4js-preheader__first-row">
        <Table4Search
          icon={props.model.icons.search}
          searchModel={searchModel}
        ></Table4Search>
      </div>
    </div>
  );
}
