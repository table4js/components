/**
 * @jest-environment jsdom
 */

import { Table } from "../sources/table";

test("Table constructor", () => {
    const rootWidgetElement = document.createElement("div");
    rootWidgetElement.innerHTML = `<div class="abris-table-resizable-container"><div class="abris-table-scroll-container"><table class="abris-table"></div></div></div>`;
    const table = new Table(<any>{ columns: [ { name: "col1" } ], getData: () => {} }, rootWidgetElement);
    // expect(result).toMatchSnapshot();
    expect(table).toBeDefined();
    expect(table.columns.length).toBe(1);
    expect(table.columns[0].name).toBe("col1");
});

test("Table pass key field", () => {
    const table = new Table(<any>{ columns: [ { name: "col1" } ], getData: () => {}, keyColumn: "col1" });
    // expect(result).toMatchSnapshot();
    expect(table.keyColumn).toBe("col1");
});
