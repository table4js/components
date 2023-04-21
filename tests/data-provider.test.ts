/**
 * @jest-environment jsdom
 */

import { ArrayDataProvider } from "../sources/common/shared/array-data-provider";

test("CRUD", () => {
    const dataProvider = new ArrayDataProvider([]);
    expect(dataProvider).toBeDefined();
    expect(dataProvider.data.length).toBe(0);
    let d = undefined;
    dataProvider.create("key", { val: 1 }, (data => d = data));
    expect(dataProvider.data.length).toBe(1);
    expect(d).toStrictEqual({
        "key": 1,
        "val": 1,
    });
    dataProvider.update("key", 1, { val: 2 }, (data => d = data));
    expect(dataProvider.data.length).toBe(1);
    expect(d).toStrictEqual({
        "val": 2,
    });
    dataProvider.get("key", 1, (data => d = data));
    expect(d).toStrictEqual({
        "key": 1,
        "val": 2,
    });
    dataProvider.delete("key", [1], (data => d = data));
    expect(dataProvider.data.length).toBe(0);
});
