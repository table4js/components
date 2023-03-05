import * as React from "react";
import { registerComponent } from "../abris-component";
import { AbrisComponent } from "../abris-component";
import { makeReactive } from "../reactivity";
import { Editor } from "../../widgets/editor";
import { Property } from "../../widgets/property";

export interface IPropertyEditorProps {
  property: Property;
}

export function Table4PropertyEditor({ property }: IPropertyEditorProps) {
  makeReactive(property);

  const component = Editor.editors[property.type] || Editor.editors.default;

  return (
    <div key={property.name} className={"table4js-form__property" + (property.hasValue ? " table4js-form__property--with-value" : "")}>
      <AbrisComponent componentName={component} componentProps={{ model: property.editor, className: property.css, inputType: property.inputType }} />
      <label className="table4js-form__property-title">{property.title}</label>
    </div>
  );
}

registerComponent("table4js-property-editor", Table4PropertyEditor);