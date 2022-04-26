var model = {
    showTableSummary: ko.observable(false),
    columns: [
        {
            name: "col1",
            title: "Column 1",
            type: "string",
            visible: true,
            order: ko.observable(),
            filterContext: {
                showFilter: ko.observable()
            },
            summaryParams: ko.observableArray()
        },
        {
            name: "col2",
            title: "Column 2",
            type: "string",
            visible: true,
            order: ko.observable(),
            filterContext: {
                showFilter: ko.observable()
            },
            summaryParams: ko.observableArray()
        }
    ],
    getViewModelData: function (limit, offset, order, key, back, callback) {
        var result = [];
        for(var i = offset; i < offset + limit; i++) {
            result.push({ id: i, col1: "test1" + i, col2: "test2" + i });
        }
        callback(result, offset + limit, limit * 1000);
    }
};

ko.applyBindings(model);