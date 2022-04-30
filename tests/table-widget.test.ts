/**
 * @jest-environment jsdom
 */

import { TableWidget } from "../sources/table";

test("TableWidget constructor", () => {
    const rootWidgetElement = document.createElement("div");
    rootWidgetElement.innerHTML = `<div class="resizableContainer"><div class="scrollContainer"><table class="abris-dataTable"></div></div></div>`;
    const tableWidget = new TableWidget(<any>{ model: { columns: [], getViewModelData: () => {} }, options: { } }, rootWidgetElement);
    // expect(result).toMatchSnapshot();
    expect(tableWidget).toBeDefined();
});
