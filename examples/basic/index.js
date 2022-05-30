

var options = {
    enableSearch: true,
    enableSummary: true,
    columns: [
        {
            name: "word",
            title: "Word"
        },
        {
            name: "num",
            title: "Number",
            type: "number"
        },
        {
            name: "text",
            title: "Text",
        }
    ],
    // getViewModelData: function (limit, offset, order, filters, key, back, callback) {
    //     sampleDataProvider.getViewModelData(limit, offset, order, filters, key, back, callback);
    // },
    // getViewModelSummary: function (func, field, callback) {
    //     sampleDataProvider.getViewModelSummary(func, field, callback);
    // },
    // getItems: (columnName, filter, limit, offset, callback) => {
    //     sampleDataProvider.getItems(columnName, filter, limit, offset, callback);
    // },
    // actions: [
    //     {
    //         name: "summary-action",
    //         action: function () {
    //             showTableSummary(!showTableSummary());
    //         },
    //         svg: "icon_equal",
    //         container: "top"
    //     },
    //     {
    //         name: "a2",
    //         title: "test dropdown action 1",
    //         action: function () {
    //             alert(this.title);
    //         },
    //         svg: "icon_add-column",
    //         cssClasses: "abris-context-button",
    //         cssImage: "my-custom-class",
    //         cssLabel: "my-custom-class",
    //         container: "dropdown"
    //     },
    //     {
    //         name: "a3",
    //         title: "test dropdown action 2",
    //         action: function () {
    //             alert(this.title);
    //         },
    //         svg: "icon_add-column",
    //         cssClasses: "abris-context-button",
    //         container: "dropdown"
    //     }
    // ]
};

var widgetModel = new AbrisComponents.TableWidget(options);
// var sampleDataProvider = new ArrayDataProvider(sampleData);
widgetModel.data = sampleData;

ko.applyBindings(widgetModel);
