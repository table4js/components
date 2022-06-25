var options = {
    enableSearch: true,
    enableSummary: true,
    keyColumn: "key",
    selectCellColor: "#ffd9d9",
    columns: [
        {   name: "key",
            visible: false,
        },
        {
            name: "color",
            visible: false,
            row_color: true,
        },
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
            name: "clnun",
            type: "bool",
            row_color: true,
            concatPrev: true,
        },
        {
            name: "text",
            title: "Text",
        },
        {
            name: "cs",
            visible: false,
            row_color: true,
            concatPrev: true,
        },
    ],
    // getData: function (limit, offset, order, filters, key, back, callback) {
    //     sampleDataProvider.getData(limit, offset, order, filters, key, back, callback);
    // },
    // getSummary: function (func, field, callback) {
    //     sampleDataProvider.getSummary(func, field, callback);
    // },
    // getColumnData: (columnName, filter, limit, offset, callback) => {
    //     sampleDataProvider.getColumnData(columnName, filter, limit, offset, callback);
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
    actions: [
        {
            name: "a2",
            // title: "test dropdown action 1",
            action: function () {
                alert(this.name);
            },
            svg: "icon_add-column",
            // cssClasses: "abris-context-button",
            // cssImage: "my-custom-class",
            // cssLabel: "my-custom-class",
            container: "bottom"
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
    ]
};

var widgetModel = new AbrisComponents.TableWidget(options);
// var sampleDataProvider = new AbrisComponents.ArrayDataProvider(sampleData);
// widgetModel.dataProvider = new AbrisComponents.ArrayDataProvider(sampleData);
widgetModel.data = sampleData;

ko.applyBindings(widgetModel);
