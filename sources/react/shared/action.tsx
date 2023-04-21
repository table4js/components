import * as React from "react";
import { Action } from "../../common/shared/action";
import { makeReactive } from "../reactivity";

export function AbrisAction({ action }: { action: Action }) {
  makeReactive(action);
  if(!action.visible) {
    return null;
  }
  return (
    <button
      key={action.name}
      // disabled={action.enabled === false}
      onClick={() => action.action()}
      className={
        "table4js-button--transparent action-button table4js-action-button " +
        action.cssClasses +
        (action.active === true ? " table4js-action--active" : "")
      }
      type="button"
      title={action.title || action.name}
    >
      {action.svg && (
        <div
          className="table4js-action-button__icon table4js-button__svg-icon"
          dangerouslySetInnerHTML={{ __html: action.svg }}
        ></div>
      )}
      {!action.short && (
      <span
        className={"table4js-action-button__label " + action.cssLabel}
        style={{ display: action.title ? "block" : "none" }}
      >
        {action.title}
      </span>
      )}
    </button>
  );
}
