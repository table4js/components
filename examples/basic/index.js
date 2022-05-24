var model = {
    columns: [
        {
            name: "col1",
            title: "Column 1"
        },
        {
            name: "col2",
            title: "Column 2"
        }
    ],
    getViewModelData: function (limit, offset, order, filters, key, back, callback) {
        var result = [];
        for (var i = offset; i < offset + limit; i++) {
            result.push({ id: i, col1: "test1" + i, col2: "test2" + i });
        }
        callback(result, offset + limit, limit * 1000);
    }
};

ko.applyBindings(model);