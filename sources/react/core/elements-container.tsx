import * as React from "react";
import { ILayoutElement } from "../../table";
import { AbrisComponent } from "../abris-component";

export function ElementsContainer({ elements }: { elements: ILayoutElement[] }) {
  return (
    <>
      {(elements || []).map((element) => {
          return <AbrisComponent componentName={element.component} componentProps={element.data} />;
        })}
    </>
  );
}
