import * as React from "react";
import { ILayoutElement } from "../../common/table";
import { AbrisComponent } from "../abris-component";

export function ElementsContainer({ elements }: { elements: ILayoutElement[] }) {
  return (
    <>
      {(elements || []).map((element) => {
          return <AbrisComponent key={element.name} componentName={element.component} componentProps={element.data} />;
        })}
    </>
  );
}
