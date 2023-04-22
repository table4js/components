import * as React from "react";
import { useEffect, useRef } from "react";
import { SearchModel } from "../../common/table/search";
import { makeReactive } from "../reactivity";
import { registerComponent } from "../abris-component";

export interface ITable4SearchProps {
  icon: any;
  searchModel: SearchModel;
}

export function Table4Search({ icon, searchModel }: ITable4SearchProps) {
  makeReactive(searchModel);
  const inputRef = useRef(null);
  const process = event => {
      if (event.keyCode === 13) searchModel.search(inputRef.current.value);
  };
  useEffect(() => {
    inputRef.current.addEventListener('keyup', process);
    return () => inputRef.current.removeEventListener('keyup', process);
  });
  return (
    <div className="table4js-search">
      <input ref={inputRef} 
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

registerComponent("table4js-search", Table4Search);