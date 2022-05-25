var showTableSummary = ko.observable(false);

var options = {
    showTableSummary,
    columns: [
        {
            name: "col1",
            title: "Column 1"
        },
        {
            name: "col2",
            title: "Column 2",
            type: "number"
        }
    ],
    getViewModelData: function (limit, offset, order, filters, key, back, callback) {
        var result = [];
        for (var i = offset; i < offset + limit; i++) {
            result.push({ id: i, col1: "test1" + i, col2: i });
        }
        callback(result, offset + limit, limit * 1000);
    },
    actions: [
        {
            name: "summary-action",
            title: "Show/hide summary",
            cssClasses: "my-custom-class",
            cssImage: "my-custom-class",
            cssLabel: "my-custom-class",
            action: function () {
                showTableSummary(!showTableSummary());
            },
            svg: "icon_table",
            container: "top"
        },
        {
            name: "a2",
            title: "test dropdown action 1",
            action: function () {
                alert(this.title);
            },
            svg: "icon_add-column",
            cssClasses: "abris-context-button",
            container: "dropdown"
        },
        {
            name: "a3",
            title: "test dropdown action 2",
            action: function () {
                alert(this.title);
            },
            svg: "icon_add-column",
            cssClasses: "abris-context-button",
            container: "dropdown"
        }
    ],
    getItems: (column, filter, limit, offset, callback) => {
        setTimeout(() => callback(["1 "+offset, "2 "+offset, "3 "+offset, "4 "+offset, "5 "+offset, "t6 "+offset, "t7 "+offset, "t8 "+offset, "t9 "+offset, "t10 "+offset]), 500);
    }
};

var widgetModel = new AbrisComponents.TableWidget({ model: options, options: {} });

ko.applyBindings(widgetModel);