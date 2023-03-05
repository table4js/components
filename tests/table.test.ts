/**
 * @jest-environment jsdom
 */

import { Table } from "../sources/table";

test("Constructor", () => {
    const rootWidgetElement = document.createElement("div");
    rootWidgetElement.innerHTML = `<div class="table4js-resizable-container"><div class="table4js-scroll-container"><table class="table4js"></div></div></div>`;
    const table = new Table(<any>{ columns: [{ name: "col1" }], getData: () => { } }, rootWidgetElement);
    // expect(result).toMatchSnapshot();
    expect(table).toBeDefined();
    expect(table.columns.length).toBe(1);
    expect(table.columns[0].name).toBe("col1");
});

test("Pass key field", () => {
    const table = new Table(<any>{ columns: [{ name: "col1" }], getData: () => { }, keyColumn: "col1" });
    expect(table.keyColumn).toBe("col1");
});

test("Change order", () => {
    const table = new Table(<any>{ columns: [{ name: "col1" }, { name: "col2" }], getData: () => { }, keyColumn: "col1" });
    const col1 = table.columns[0];
    const col2 = table.columns[1];
    expect(col1.order).toBe(undefined);
    expect(col2.order).toBe(undefined);

    table.clickColumn(col1, {});
    expect(col1.order).toBe(false);
    expect(col2.order).toBe(undefined);

    table.clickColumn(col1, {});
    expect(col1.order).toBe(true);
    expect(col2.order).toBe(undefined);

    table.clickColumn(col1, {});
    expect(col1.order).toBe(undefined);
    expect(col2.order).toBe(undefined);

    table.clickColumn(col2, {});
    expect(col1.order).toBe(undefined);
    expect(col2.order).toBe(false);

    table.clickColumn(col1, { shiftKey: true });
    expect(col1.order).toBe(false);
    expect(col2.order).toBe(false);

    table.clickColumn(col1, {});
    expect(col1.order).toBe(true);
    expect(col2.order).toBe(undefined);
});