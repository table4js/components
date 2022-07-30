import * as React from "react";
import { useState } from "react";
import { TableWidget } from "../../table";
import { SearchModel } from "../../table/search";
import { makeReactive } from "../reactivity";

export interface IAbrisSearchProps {
  icon: any;
  searchModel: SearchModel;
}

export function AbrisSearch({ icon, searchModel }: IAbrisSearchProps) {
  makeReactive(searchModel);
  return (
    <div className="abris-search">
      <input
        defaultValue={searchModel.searchValue}
        onChange={(event) => {
          searchModel.searchValue = event.target.value;
        }}
        className="abris-search__value"
        placeholder="Search..."
      />
      <div
        className="abris-search__button"
        title="Search"
        onClick={(e) => searchModel.search(searchModel.searchValue)}
      >
        <div
          className="abris-svg-icon abris-search__icon"
          dangerouslySetInnerHTML={{ __html: icon }}
        ></div>
      </div>
    </div>
  );
}
