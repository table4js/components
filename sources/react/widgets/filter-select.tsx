import * as React from "react";
import { TableFilterSelect } from "../../table/filter-select";
import { makeReactive } from "../reactivity";
import * as Icons from "../../icon";

export function AbrisFilterSelect({
  viewModel,
}: {
  viewModel: TableFilterSelect;
}) {
  makeReactive(viewModel);
  console.log("viewModel", viewModel);
  return (
    <div className="abrs-filter__value">
      <div className="abris-select-selection">
        {viewModel.selectedItems.map((i) => (
          <div className="abris-select-selection-item">
            <span className="abris-select-item-title">{i}</span>
            <div
              className="abris-svg-icon abris-select-item-close"
              onClick={(e) => viewModel.deleteItems(i)}
              dangerouslySetInnerHTML={{
                __html: Icons.cross,
              }}
            ></div>
          </div>
        ))}
      </div>
      <div
        className="abris-select-button abris-svg-icon"
        title={viewModel.title}
        onClick={(e) => viewModel.toggle(null, e)}
        dangerouslySetInnerHTML={{
          __html: Icons.arrowdown,
        }}
      ></div>
      {viewModel.isOpen && (
        <ul
          className="abris-select__dropdown-menu abris-button-toggle__dropdown-menu"
          onClick={(e) => e.stopPropagation}
        >
          <div className="abris-select__dropdown-search-container">
            <input
              className="abris-select__dropdown-search"
              value={viewModel.filterText}
              onChange={(v) => (viewModel.filterText = v.target.value)}
              placeholder="*"
              //   data-bind="valueUpdate: 'afterkeydown'"
            />
          </div>
          {viewModel.foundItems.map((fi) => (
            <div
              className="abris-select__dropdown-item"
              onClick={(e) => viewModel.clickItem(fi)}
            >
              <input
                className="abris-select__dropdown-hide-check"
                type="checkbox"
                checked={viewModel.isChecked(fi)}
              />
              <div
                className="abris-svg-icon abris-select__dropdown-check"
                dangerouslySetInnerHTML={{
                  __html: Icons.check,
                }}
              ></div>
              <span className="abris-select__dropdown-label">{fi}</span>
            </div>
          ))}
          {viewModel.isLoadMore && (
            <button
              className="abris-select__dropdown-button"
              onClick={(e) => viewModel.loadMore()}
            >
              <span className="abris-action-button__label">More</span>
            </button>
          )}
        </ul>
      )}
    </div>
  );
}
