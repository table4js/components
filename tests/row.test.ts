/**
 * @jest-environment jsdom
 */

import { TableCell } from "../sources/table/cell";
import { TableColumn } from "../sources/table/column";
import { TableRow } from "../sources/table/row";

test("Row update", () => {
    const row = new TableRow();
    row.rowData = {
        "f1": 0
    };
    const cell = new TableCell();
    const column = new TableColumn(<any>{ name: "f1" }, null);
    cell.initialize(column, row.rowData);
    row.cells = [cell];
    expect(cell.data).toBe(0);

    row.rowData["f1"] = 1;
    expect(cell.data).toBe(0);

    row.update();
    expect(cell.data).toBe(1);
    expect(cell.isModified).toBeFalsy();

    row.rowData["f1"] = 2;
    expect(cell.data).toBe(1);

    row.update(false);
    expect(cell.data).toBe(2);
    expect(cell.isModified).toBeTruthy();
});

test("Row css", () => {
    const row = new TableRow();

    expect(row.selected).toBeFalsy();
    expect(row.mode).toBe("default");
    expect(row.css).toBe("table4js__row table4js__row--default");

    row.selected = true;
    expect(row.css).toBe("table4js__row table4js__row--default table4js__row--selected");
});