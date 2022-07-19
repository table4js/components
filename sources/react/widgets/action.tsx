import * as React from "react";

export function AbrisAction({action}:{action: {
    icon: string;
    svg: string;
    visible: boolean;
    formId: string;
    name: string;
    title: string;
    cssLabel: string;
    cssClasses: string;
    active: boolean;}
  }) {
    return (
      <button
        data-bind="click: $data.formId !== undefined ? undefined : action, 
                  enable: !$data.enabled || ko.unwrap(enabled)"
        className={
          "abris-button--transparent action-button abris-action-button " +
          action.cssClasses +
          (action.active === true ? " abris-action--active" : "")
        }
        type={action.formId !== undefined ? "submit" : "button"}
        title={action.title || action.name}
        form={action.formId}
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
  