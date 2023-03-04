import * as React from "react";
import { registerComponent } from "../abris-component";
import { Table } from "../../table";
import { ITableCell, TableCell } from "../../table/cell";
import { AbrisComponent } from "../abris-component";
import { makeReactive } from "../reactivity";
import { Editor } from "../../widgets/editor";
import { Property } from "../../widgets/property";
import { Form } from "../../widgets/form";

export interface IFormProps {
  form: Form;
}

export function Form4({ form }: IFormProps) {
  makeReactive(form);

  return (
    <div className="table4js-form">
      {form.properties.map(property => (
        <AbrisComponent key={property.name} componentName={"table4js-property-editor"} componentProps={{property}} />
      ))}
    </div>
  );
}

registerComponent("table4js-form", Form4);