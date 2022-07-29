import * as React from "react";
import { FilterContext } from "../../table/filter-context";
import { makeReactive } from "../reactivity";
import * as Icons from "../../icon";
import { AbrisFilterSelect } from "./filter-select";
import { TableFilterSelect } from "../../table/filter-select";

export function AbrisFilterItem({
  filterContext,
}: {
  filterContext: FilterContext;
}) {
  makeReactive(filterContext);
  return (
    <>
      {filterContext.filterItems.length > 0 && (
        <div key={filterContext.column.name} className="abris-filter-item">
          <div className="abris-filter__title abris-filter-text">
            {filterContext.column.title + ":"}
          </div>
          {filterContext.filterItems.map((f, index) => (
            <div key={index} className="abris-filter__content">
              {/* <!-- ko foreach: filterItems --> */}
              {index > 0 && (
                <div className="abris-filter__operator abris-filter-text">
                  &
                </div>
              )}
              <select
                className="abris-filter___operation"
                value={f.operation?.text}
                onChange={e=>{f.operation=filterContext.operations.find((o)=>o.text === e.target.value)}}
              >
                {filterContext.operations.map((s) => (
                  <option key={s.op} title={s.text}>
                    {s.text}
                  </option>
                ))}
              </select>
              {
                f.showOperand && f.operation.op == "EQ" && (
                  <AbrisFilterSelect
                    viewModel={
                      new TableFilterSelect(
                        f.filterItemValue,
                        f.column.name,
                        f.getColumnData
                      )
                    }
                  />
                )

                /* <abris-filter-select class="abrs-filter__value"
      params="value: filterItemValue, columnName: column.name, getColumnData: getColumnData">
    </abris-filter-select> */
              }
              {f.showOperand && f.operation.op != "EQ" && (
                <div
                  className="abris-filter__operand"
                  data-bind="component: { name: filterEditorName, params: { value: filterItemValue, column: column } }"
                >
                  <input style={{width: "100%"}} placeholder="*" defaultValue={f.filterItemValue.value} onChange={(e)=>f.filterItemValue.value=e.target.value}/>

                </div>
              )}
              <div
                className="abris-filter__remove"
                data-bind="click: $parent.removeItem, clickBubble: false"
                onClick={(e) => filterContext.removeItem(f)}
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
      )}
    </>
  );
}
