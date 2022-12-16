import * as React from "react";
import { FilterContext } from "../../table/column-filter";
import { makeReactive } from "../reactivity";
import * as Icons from "../../icon";
import { AbrisFilterSelect } from "./filter-select";
import { TableFilterSelect } from "../../table/filter-select";
import { AbrisColumnFilterItem } from "./column-filter-item";

export function AbrisColumnFilter({ context }: { context: FilterContext }) {
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
          <AbrisColumnFilterItem
            filterItem={filterItem}
          ></AbrisColumnFilterItem>
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
