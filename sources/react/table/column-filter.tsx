import * as React from "react";
import { FilterContext } from "../../table/column-filter";
import { makeReactive } from "../reactivity";
import * as Icons from "../../icon";
import { AbrisFilterSelect } from "./filter-select";
import { TableFilterSelect } from "../../table/filter-select";
import { AbrisColumnFilterItem } from "./column-filter-item";

export function AbrisColumnFilter({
  context,
}: {
  context: FilterContext;
}) {
  makeReactive(context);
  if(context.filterItems.length === 0) {
    return null;
  }
  return (
    <div key={context.column.name} className="abris-filter-item">
      <div className="abris-filter__title abris-filter-text">
        {context.column.title + ":"}
      </div>
      {context.filterItems.map((filterItem, index) => (
        <div key={index} className="abris-filter__content">
          {index > 0 && (
            <div className="abris-filter__operator abris-filter-text">
              &
            </div>
          )}
          <AbrisColumnFilterItem filterItem={filterItem}></AbrisColumnFilterItem>
          <div
            className="abris-filter__remove"
            data-bind="click: $parent.removeItem, clickBubble: false"
            onClick={(e) => context.removeItem(filterItem)}
          >
            <div
              className="abris-filter__remove-icon abris-svg-icon"
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
