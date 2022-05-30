/**
 * @jest-environment jsdom
 */

import { TableWidget } from "../sources/table";

test("TableWidget constructor", () => {
    const rootWidgetElement = document.createElement("div");
    rootWidgetElement.innerHTML = `<div class="abris-table-resizable-container"><div class="abris-table-scroll-container"><table class="abris-table"></div></div></div>`;
    const tableWidget = new TableWidget(<any>{ columns: [ { name: "col1" } ], getViewModelData: () => {} }, rootWidgetElement);
    // expect(result).toMatchSnapshot();
    expect(tableWidget).toBeDefined();
    expect(tableWidget.columns().length).toBe(1);
    expect(tableWidget.columns()[0].name).toBe("col1");
});

test("TableWidget pass key field", () => {
    const tableWidget = new TableWidget(<any>{ columns: [ { name: "col1" } ], getViewModelData: () => {}, keyColumn: "col1" });
    // expect(result).toMatchSnapshot();
    expect(tableWidget.keyColumn).toBe("col1");
});
