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
  const [text, updateText] = useState<string>();

  return (
    <div className="abris-search">
      <input
        value={text}
        onChange={(event) => updateText(event.target.value)}
        className="abris-search__value"
        placeholder="Search..."
      />
      <div
        className="abris-search__button"
        title="Search"
        onClick={() => searchModel.search(text)}
      >
        <div
          className="abris-svg-icon abris-search__icon"
          dangerouslySetInnerHTML={{ __html: icon }}
        ></div>
      </div>
    </div>
  );
}
