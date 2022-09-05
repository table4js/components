import * as React from "react";
import { AbrisAction } from "./action";
import * as Icons from "../../icon";

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
          return (<div className="abris-nested-actions abris-action-context-button">
            <span className="abris-button__label" data-bind="text: title"></span>
            <div className="abris-nested-actions__dropdown">
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
