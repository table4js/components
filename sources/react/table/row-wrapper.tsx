import * as React from "react";
import { registerComponent } from "../abris-component";
import { AbrisComponent } from "../abris-component";
import { makeReactive } from "../reactivity";

export function Table4RowWrapper(props: any) {
  makeReactive(props.row);
  return (
    <AbrisComponent componentName={props.row.getRowComponent()} componentProps={props.row.getRowComponentParams({...props})} />
    );
}

registerComponent("table4js-row-wrapper", Table4RowWrapper);