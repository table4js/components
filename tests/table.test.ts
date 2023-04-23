/**
 * @jest-environment jsdom
 */

import { Table } from "../sources/common/table";

const dataProvider: any = {
    getData: (limit, offset, order, key, back, callback) => {
        callback([]);
    }
}

test("Constructor", () => {
    const rootWidgetElement = document.createElement("div");
    rootWidgetElement.innerHTML = `<div class="table4js-resizable-container"><div class="table4js-scroll-container"><table class="table4js"></div></div></div>`;
    const table = new Table(<any>{ columns: [{ name: "col1" }] }, rootWidgetElement);
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
    const table = new Table(<any>{ columns: [{ name: "col1" }, { name: "col2" }], keyColumn: "col1" });
    (<any>table)["element"] = {};
    let orderLog = "";
    table.dataProvider = <any>{
        getData: (limit, offset, order, key, back, callback) => {
            orderLog = JSON.stringify(order);
            callback([]);
        },
        addFilterProvider: (_: any) => { }
    };
    const col1 = table.columns[0];
    const col2 = table.columns[1];
    expect(col1.order).toBe(undefined);
    expect(col2.order).toBe(undefined);
    expect(orderLog).toBe("[]");

    table.clickColumn(col1, {});
    expect(col1.order).toBe(false);
    expect(col2.order).toBe(undefined);
    expect(orderLog).toBe("[{\"field\":\"col1\",\"desc\":false}]");

    table.clickColumn(col1, {});
    expect(col1.order).toBe(true);
    expect(col2.order).toBe(undefined);
    expect(orderLog).toBe("[{\"field\":\"col1\",\"desc\":true}]");

    table.clickColumn(col1, {});
    expect(col1.order).toBe(undefined);
    expect(col2.order).toBe(undefined);
    expect(orderLog).toBe("[]");

    table.clickColumn(col2, {});
    expect(col1.order).toBe(undefined);
    expect(col2.order).toBe(false);
    expect(orderLog).toBe("[{\"field\":\"col2\",\"desc\":false}]");

    table.clickColumn(col1, { shiftKey: true });
    expect(col1.order).toBe(false);
    expect(col2.order).toBe(false);
    expect(orderLog).toBe("[{\"field\":\"col1\",\"desc\":false},{\"field\":\"col2\",\"desc\":false}]");

    table.clickColumn(col1, {});
    expect(col1.order).toBe(true);
    expect(col2.order).toBe(undefined);
    expect(orderLog).toBe("[{\"field\":\"col1\",\"desc\":true}]");
});

test("Initialize once for the same element", () => {
    const rootWidgetElement = document.createElement("div");
    rootWidgetElement.innerHTML = `<div class="table4js-resizable-container"><div class="table4js-scroll-container"><table class="table4js"></div></div></div>`;
    const table = new Table(<any>{ columns: [{ name: "col1" }] });

    expect(table["_detachHandler"]).toBeUndefined();
    table.attach(rootWidgetElement);
    const _detachHandler = table["_detachHandler"];
    expect(_detachHandler).toBeDefined();
    table.attach(rootWidgetElement);
    expect(table["_detachHandler"]).toBe(_detachHandler);
    table.detach();
    expect(table["_detachHandler"]).toBeUndefined();
});