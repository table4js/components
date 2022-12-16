import * as React from "react";
import { AbrisActions } from "./actions";

export function AbrisDropdownActions({
  className,
  actions,
}: {
  className: string;
  actions: any[];
}) {
  return (
    <div className={className}>
      <button
        className="table4js-action-button table4js-button--transparent table4js-button-toggle"
        type="button"
        data-bind="click: toggle, attr: { title: title }"
      >
        <div data-bind="html: $root.icons.more_sq"></div>
        <span
          className="table4js-action-button__label"
          data-bind="text: moreText"
        ></span>
      </button>
      {/* <!-- ko if: isOpen --> */}
      <ul className="table4js-button-toggle__dropdown-menu">
        <AbrisActions className="table4js-context-actions" actions={actions} />
      </ul>
    </div>
  );
}
