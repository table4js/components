import * as React from "react";
import { AbrisActions } from "./actions";
import * as Icons from "../../common/icons";

export function AbrisDropdownActions({
  title,
  className,
  actions,
  moreText,
  moreIcon
}: {
  title: string;
  className: string;
  actions: any[];
  moreText?: string;
  moreIcon?: any;
}) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className={className}>
      <button
        className="table4js-action-button table4js-button--transparent table4js-button-toggle"
        type="button"
        title={title || ""}
        onClick={e => { setIsOpen(!isOpen); e.nativeEvent.stopPropagation(); }}
      >
        <div dangerouslySetInnerHTML={{ __html: moreIcon || Icons.more_sq }}></div>
        <span className="table4js-action-button__label">{moreText || ""}</span>
      </button>
      {isOpen ?
      <ul className="table4js-button-toggle__dropdown-menu">
        <AbrisActions className="table4js-context-actions" actions={actions} />
      </ul>
      : null}
    </div>
  );
}
