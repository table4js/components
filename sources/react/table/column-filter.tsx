import * as React from "react";
import { FilterContext } from "../../table/column-filter";
import { makeReactive } from "../reactivity";
import { Table4ColumnFilterItem } from "./column-filter-item";
import * as Icons from "../../icons";

export function Table4ColumnFilter({ context }: { context: FilterContext }) {
  makeReactive(context);
  if (context.filterItems.length === 0) {
    return null;
  }
  return (
    <div key={context.column.name} className="table4js-filter-item">
      <div className="table4js-filter__title table4js-filter-text">
        {context.column.title + ":"}
      </div>
      {context.filterItems.map((filterItem, index) => (
        <div key={index} className="table4js-filter__content">
          {index > 0 && (
            <div className="table4js-filter__operator table4js-filter-text">&</div>
          )}
          <Table4ColumnFilterItem
            filterItem={filterItem}
          ></Table4ColumnFilterItem>
          <div
            className="table4js-filter__remove"
            data-bind="click: $parent.removeItem, clickBubble: false"
            onClick={(e) => context.removeItem(filterItem)}
          >
            <div
              className="table4js-filter__remove-icon table4js-svg-icon"
              dangerouslySetInnerHTML={{
                __html: Icons.cross,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
