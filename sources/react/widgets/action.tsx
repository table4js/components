import * as React from "react";
import { Action } from "../../core/action";
import { makeReactive } from "../reactivity";

export function AbrisAction({ action }: { action: Action }) {
  makeReactive(action);
  return (
    <button
      key={action.name}
      data-bind="click: $data.formId !== undefined ? undefined : action, 
                  enable: !$data.enabled || ko.unwrap(enabled)"
      onClick={() => action.action()}
      // disabled={!action.enabled}
      className={
        "abris-button--transparent action-button abris-action-button " +
        action.cssClasses +
        (action.active === true ? " abris-action--active" : "")
      }
      // type={action.formId !== undefined ? "submit" : "button"}
      title={action.title || action.name}
      // form={action.formId}
    >
      {action.svg && (
        <div
          className="abris-action-button__icon abris-button__svg-icon"
          dangerouslySetInnerHTML={{ __html: action.svg }}
        ></div>
      )}
      <span
        className={"abris-action-button__label " + action.cssLabel}
        style={{ display: action.title ? "block" : "none" }}
      >
        {action.title}
      </span>
    </button>
  );
}
