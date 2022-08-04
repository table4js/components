import * as React from "react";
import { FilterContext } from "../../table/column-filter";
import { makeReactive } from "../reactivity";
import * as Icons from "../../icon";
import { AbrisFilterSelect } from "./filter-select";
import { TableFilterSelect } from "../../table/filter-select";
import { ColumnFilterItem } from "../../table/column-filter-item";

export function AbrisColumnFilterItem({
  filterItem
}: {
  filterItem: ColumnFilterItem
}) {
  makeReactive(filterItem);
  return (
    <>
      <select
        className="abris-filter___operation"
        value={filterItem.operation?.text}
        onChange={(e) => {
          filterItem.operation = filterItem.operations.find(
            (o) => o.text === e.target.value
          );
        }}
      >
        {filterItem.operations.map((s) => (
          <option key={s.op} title={s.text}>
            {s.text}
          </option>
        ))}
      </select>
      {
        filterItem.showOperand && filterItem.operation.op == "EQ" && (
          <AbrisFilterSelect
            viewModel={
              new TableFilterSelect(
                filterItem.filterItemValue,
                filterItem.column.name,
                filterItem.getColumnData
              )
            }
          />
        )

        /* <abris-filter-select class="abrs-filter__value"
params="value: filterItemValue, columnName: column.name, getColumnData: getColumnData">
</abris-filter-select> */
      }
      {filterItem.showOperand && filterItem.operation.op != "EQ" && (
        <div
          className="abris-filter__operand"
          data-bind="component: { name: filterEditorName, params: { value: filterItemValue, column: column } }"
        >
          <input
            style={{ width: "100%" }}
            placeholder="*"
            defaultValue={filterItem.filterItemValue.value}
            onChange={(e) => (filterItem.filterItemValue.value = e.target.value)}
          />
        </div>
      )}
    </>
  );
}
