import * as React from "react";
import { useState } from "react";
import { Table } from "../../common/table";
import { SearchModel } from "../../common/table/search";
import { makeReactive } from "../reactivity";

export interface ITable4SearchProps {
  icon: any;
  searchModel: SearchModel;
}

export function Table4Search({ icon, searchModel }: ITable4SearchProps) {
  makeReactive(searchModel);
  return (
    <div className="table4js-search">
      <input
        defaultValue={searchModel.searchValue}
        onChange={(event) => {
          searchModel.searchValue = event.target.value;
        }}
        className="table4js-search__value"
        placeholder="Search..."
      />
      <div
        className="table4js-search__button"
        title="Search"
        onClick={(e) => searchModel.search(searchModel.searchValue)}
      >
        <div
          className="table4js-svg-icon table4js-search__icon"
          dangerouslySetInnerHTML={{ __html: icon }}
        ></div>
      </div>
    </div>
  );
}
