import * as React from "react";
import { useState } from "react";
import { makeReactive } from "../../../reactivity";
import { Table4FilterSelect } from "./filter-select";
import { TableFilterSelect } from "../../../../common/table/plugins/filter/filter-select";
import { ColumnFilterItem } from "../../../../common/table/plugins/filter/column-filter-item";

export function Table4ColumnFilterItem({
  filterItem,
}: {
  filterItem: ColumnFilterItem;
}) {
  makeReactive(filterItem);
  const [tableFilterSelect, seTableFilterSelect] = useState<TableFilterSelect>(
    new TableFilterSelect(
      filterItem.filterItemValue,
      filterItem.column.name,
      filterItem.column.type,
      filterItem.getColumnData
    )
  );

  return (
    <>
      <select
        className="table4js-filter___operation"
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
          <Table4FilterSelect viewModel={tableFilterSelect} />
        )

        /* <table4js-filter-select class="abrs-filter__value"
params="value: filterItemValue, columnName: column.name, getColumnData: getColumnData">
</table4js-filter-select> */
      }
      {filterItem.showOperand && filterItem.operation.op != "EQ" && (
        <div
          className="table4js-filter__operand"
          data-bind="component: { name: filterEditorName, params: { value: filterItemValue, column: column } }"
        >
          <input
            style={{ width: "100%" }}
            placeholder="*"
            defaultValue={filterItem.filterItemValue.value}
            onChange={(e) =>
              (filterItem.filterItemValue.value = e.target.value)
            }
          />
        </div>
      )}
    </>
  );
}
