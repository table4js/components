import * as React from "react";
import { registerComponent } from "../abris-component";
import { Table } from "../../table";
import { ITableCell, TableCell } from "../../table/cell";
import { AbrisComponent } from "../abris-component";
import { makeReactive } from "../reactivity";
import { Editor } from "../../widgets/editor";
import { Property } from "../../widgets/property";
import { Form } from "../../widgets/form";
import { ITableRowProps, Table4Row } from "./row";
import { Form4 } from "../widgets/form";

export interface ITableRowEditorProps extends ITableRowProps {
  form: Form;
}

export function Table4RowEditor({ table, row, form }: ITableRowEditorProps) {
  makeReactive(row);

  let rowEditor = null;
  if(row.mode === "edit-row") {
    rowEditor = (
      <tr className="table4js__row" key={(row.id || row.number) + "-editor"}>
        <td className="table4js-cell" colSpan={("100%" as any)}>
          <Form4 form={form}></Form4>
        </td>
      </tr>
    );
  }

  return (
    <>
      <Table4Row key={(row.id || row.number) + "-edited"} table={table} row={row}></Table4Row>
      {rowEditor}
    </>
  );
}

registerComponent("table4js-row-editor", Table4RowEditor);