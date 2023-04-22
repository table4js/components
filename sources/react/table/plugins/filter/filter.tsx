import * as React from "react";
import { makeReactive } from "../../../reactivity";
import { registerComponent } from "../../../abris-component";
import { FilterModel } from "../../../../common/table/plugins/filter/filter";
import { Table4ColumnFilter } from "./column-filter";

export interface ITable4FilterProps {
    filterModel: FilterModel;
}

export function Table4Filter({ filterModel }: ITable4FilterProps) {
    makeReactive(filterModel);

    return (<>
        {filterModel.visible && (
            <div className="table4js-filter">
              <div className="table4js-filter__container">
                {filterModel.filters.map((f, i) => (
                  <Table4ColumnFilter
                    key={i}
                    context={f}
                  />
                ))}
              </div>
            </div>
          )}
    </>);
}

registerComponent("table4js-filter", Table4Filter);