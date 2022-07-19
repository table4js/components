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
          className="abris-action-button abris-button--transparent abris-button-toggle"
          type="button"
          data-bind="click: toggle, attr: { title: title }"
        >
          <div data-bind="html: $root.icons.more_sq"></div>
          <span
            className="abris-action-button__label"
            data-bind="text: moreText"
          ></span>
        </button>
        {/* <!-- ko if: isOpen --> */}
        <ul className="abris-button-toggle__dropdown-menu">
          <AbrisActions className="abris-context-actions" actions={actions} />
        </ul>
      </div>
    );
  }
  