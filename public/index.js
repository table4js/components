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
            type: "number",
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
        for (var i = offset; i < offset + limit; i++) {
            result.push({ id: i, col1: "test1" + i, col2: i });
        }
        callback(result, offset + limit, limit * 1000);
    },
    actions: [
        {
            name: "a1",
            title: "test action",
            cssClasses: "my-custom-class",
            action: function () {
                alert(this.title);
            },
            svg: "icon_add-column",
            container: "top"
        },
        {
            name: "a2",
            title: "test dropdown action 1",
            action: function () {
                alert(this.title);
            },
            svg: "icon_add-column",
            container: "dropdown"
        },
        {
            name: "a3",
            title: "test dropdown action 2",
            action: function () {
                alert(this.title);
            },
            svg: "icon_add-column",
            container: "dropdown"
        }
    ]
};

ko.applyBindings(model);