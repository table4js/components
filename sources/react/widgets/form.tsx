import * as React from "react";
import { registerComponent } from "../abris-component";
import { AbrisComponent } from "../abris-component";
import { makeReactive } from "../reactivity";
import { Editor } from "../../common/shared/editor";
import { Property } from "../../common/widgets/property";
import { Form } from "../../common/widgets/form";
import { AbrisActions } from "../shared/actions";

export interface IFormProps {
  form: Form;
}

export function Form4({ form }: IFormProps) {
  makeReactive(form);

  return (
    <div className="table4js-form">
      <div className="table4js-form__header">
      </div>
      {form.properties.map(property => (
        <AbrisComponent key={property.name} componentName={"table4js-property-editor"} componentProps={{property}} />
      ))}
      <div className="table4js-form__footer">
        <AbrisActions
          className="table4js-actions"
          actions={form.bottomActions}
        />
      </div>
    </div>
  );
}

registerComponent("table4js-form", Form4);