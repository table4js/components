import * as React from "react";
import { AbrisAction } from "./action";
import * as Icons from "../../icons";

export function AbrisActions({
  className,
  actions,
}: {
  className: string;
  actions: any[];
}) {
  return (
    <div className={className}>
      {actions.map((action) => {
        if(!action.actions) {
          return <AbrisAction key={action.name} action={action} />
        }
        if(action.actions && action.actions.length > 0) {
          return (<div className="table4js-nested-actions table4js-action-context-button">
            <span className="table4js-button__label" data-bind="text: title"></span>
            <div className="table4js-nested-actions__dropdown">
              {action.actions.map((a) => (
                <AbrisAction key={a.name} action={a} />
              ))}
            </div>
          </div>);
        }
      })}
    </div>
  );
}
