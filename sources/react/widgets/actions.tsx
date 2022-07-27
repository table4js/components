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
      {/* <!-- ko foreach: actions --> */}
      {/* <!-- ko ifnot: ko.unwrap($data.actions) --> */}
      {/* <!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  --> */}
      {/* <!-- ko component: { name: 'abris-action-item', params: $data } --> */}
      {actions.map((a) => (
        <AbrisAction key={a.name} action={a} />
      ))}

      {/* <!-- ko if: ko.unwrap($data.actions) && ko.unwrap($data.actions).length > 0 --> */}
      {/* <!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  --> */}
      {actions && actions.length > 0 && (
        <div className="abris-nested-actions abris-action-context-button">
          <div
            dangerouslySetInnerHTML={{
              __html: Icons.paste,
            }}
          ></div>
          <span className="abris-button__label" data-bind="text: title"></span>
          <div className="abris-nested-actions__dropdown">
            {/* <!-- ko foreach: actions --> */}
            {/* <!-- ko component: { name: 'abris-action-item', params: $data } --> */}
            {actions.map((a) => (
              <AbrisAction key={a.name} action={a} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
