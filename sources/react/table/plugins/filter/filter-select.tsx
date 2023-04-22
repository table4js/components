import * as React from "react";
import { TableFilterSelect } from "../../../../common/table/plugins/filter/filter-select";
import { makeReactive } from "../../../reactivity";
import * as Icons from "../../../../common/icons";

export function Table4FilterSelect({
  viewModel,
}: {
  viewModel: TableFilterSelect;
}) {
  makeReactive(viewModel);
  return (
    <div className="table4js-filter-select abrs-filter__value">
      <div className="table4js-select-selection">
        {viewModel.selectedItems.map((i) => (
          <div className="table4js-select-selection-item" key={i.name}>
            <span className="table4js-select-item-title">{i.name}</span>
            <div
              className="table4js-svg-icon table4js-select-item-close"
              onClick={(e) => viewModel.deleteItems(i)}
              dangerouslySetInnerHTML={{
                __html: Icons.cross,
              }}
            ></div>
          </div>
        ))}
      </div>
      <div
        className="table4js-select-button table4js-svg-icon"
        title={viewModel.title}
        onClick={(e) => viewModel.toggle(null, e)}
        dangerouslySetInnerHTML={{
          __html: Icons.arrowdown,
        }}
      ></div>
      {viewModel.isOpen && (
        <ul
          className="table4js-select__dropdown-menu table4js-button-toggle__dropdown-menu"
          onClick={(e) => e.stopPropagation}
        >
          {viewModel.isFilterSearchByType && (
            <div className="table4js-select__dropdown-search-container">
              <input
                className="table4js-select__dropdown-search"
                value={viewModel.filterText}
                onChange={(v) => (viewModel.filterText = v.target.value)}
                placeholder="*"
                //   data-bind="valueUpdate: 'afterkeydown'"
              />
            </div>
          )}
          {viewModel.foundItems.map((fi, i) => (
            <div
              key={i}
              className="table4js-select__dropdown-item"
              onClick={(e) => viewModel.clickItem(fi)}
            >
              <input
                className="table4js-select__dropdown-hide-check"
                type="checkbox"
                checked={viewModel.isChecked(fi)}
                onChange={(e) => {}}
              />
              <div
                className="table4js-svg-icon table4js-select__dropdown-check"
                dangerouslySetInnerHTML={{
                  __html: Icons.check,
                }}
              ></div>
              <span className="table4js-select__dropdown-label">{fi.name}</span>
            </div>
          ))}
          {viewModel.isLoadMore && (
            <button
              className="table4js-select__dropdown-button"
              onClick={(e) => viewModel.loadMore()}
            >
              <span className="table4js-action-button__label">More</span>
            </button>
          )}
        </ul>
      )}
    </div>
  );
}
