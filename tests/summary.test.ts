
/**
 * @jest-environment jsdom
 */

import { Table } from "../sources/common/table";
import { FieldSummary } from "../sources/common/table/plugins/summary";

const dataProvider: any = {
    getData: (limit, offset, order, key, back, callback) => {
        callback([{ col1: 5 }]);
    },
    getSummary: function (func, field, callback) {
        callback(5);
    },
    addFilterProvider: (_: any) => { }
}

test("Summary in table", () => {
    const table = new Table(<any>{
        enableSummary: true,
        columns: [{ name: "col1", type: "number" }]
    }, undefined);
    table.dataProvider = dataProvider;

    expect(table).toBeDefined();
    expect(table.columns.length).toBe(1);
    expect(table.columns[0].name).toBe("col1");

    const summary = table.columns[0].summary as FieldSummary;
    expect(summary).toBeDefined();
    expect(summary.value).toBeUndefined();
    summary.func = summary.summaryItems[1].value;
    expect(summary.value).toBe(5);
    summary.func = summary.summaryItems[0].value;
    expect(summary.value).toBeUndefined();
});

test("Summary items", () => {
    const field: any = { name: "col1", type: "number" };
    function getSummaryTypes(summary: FieldSummary) {
        return summary.summaryItems.map(item => item.value);
    }

    const numberSummary = new FieldSummary(null, field);
    const numberSummaryTypes = getSummaryTypes(numberSummary);
    expect(numberSummaryTypes.length).toBe(7);
    expect(numberSummaryTypes.indexOf("sum")).toBe(1);

    field.type = "date";
    const dateSummary = new FieldSummary(null, field);
    const dateSummaryTypes = getSummaryTypes(dateSummary);
    expect(dateSummaryTypes.length).toBe(5);
    expect(dateSummaryTypes.indexOf("sum")).toBe(-1);
    expect(dateSummaryTypes.indexOf("min")).toBe(1);
    expect(dateSummaryTypes.indexOf("max")).toBe(2);

    field.type = "datetime";
    const datetimeSummary = new FieldSummary(null, field);
    const datetimeSummaryTypes = getSummaryTypes(datetimeSummary);
    expect(datetimeSummaryTypes.length).toBe(5);
    expect(datetimeSummaryTypes.indexOf("sum")).toBe(-1);
    expect(datetimeSummaryTypes.indexOf("min")).toBe(1);
    expect(datetimeSummaryTypes.indexOf("max")).toBe(2);

    field.type = "currency";
    const currencySummary = new FieldSummary(null, field);
    const currencySummaryTypes = getSummaryTypes(currencySummary);
    expect(currencySummaryTypes.length).toBe(7);
    expect(currencySummaryTypes.indexOf("sum")).toBe(1);
    expect(currencySummaryTypes.indexOf("avg")).toBe(2);
    expect(currencySummaryTypes.indexOf("min")).toBe(3);
    expect(currencySummaryTypes.indexOf("max")).toBe(4);
});