
/**
 * @jest-environment jsdom
 */

import { Table } from "../sources/table";
import { TableSummary } from "../sources/table/summary";

test("Table summary", () => {
    const table = new Table(<any>{
            enableSummary: true,
            columns: [{ name: "col1", type: "number" }],
            getData: (limit, offset, order, filters, key, back, callback) => {
                callback([{col1: 5}]);
            },
            getSummary: function (func, field, filter, callback) {
                callback(5);
            }
        }, undefined);

    expect(table).toBeDefined();
    expect(table.columns.length).toBe(1);
    expect(table.columns[0].name).toBe("col1");

    const summary = table.columns[0].summary as TableSummary;
    expect(summary).toBeDefined();
    expect(summary.value).toBeUndefined();
    summary.func = summary.summaryItems[1].value;
    expect(summary.value).toBe(5);
    summary.func = summary.summaryItems[0].value;
    expect(summary.value).toBeUndefined();
});
