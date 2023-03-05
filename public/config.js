var options = {
    enableSearch: true,
    enableSummary: true,
    enableMergedCellsToggle: true,
    enableMergedCells: false,
    keyColumn: "id",
    selectCellColor: "#ffd9d9",
    enableEdit: true,
    columns: [
        {   name: "id",
            visible: false,
        },
        {
            name: "color_hex",
            visible: false,
            // row_color: true,
        },
        {
            name: "first_name",
            title: "First Name"
        },
        {
            name: "last_name",
            title: "Last Name"
        },
        {
            name: "int16",
            title: "Number",
            type: "number"
        },
        {
            name: "bool",
            type: "bool",
            title: "Boolean",
            row_color: true,
            concatPrev: true,
        },
        {
            name: "iso-8601_date",
            type: "date",
            title: "Date",
        },
        {
            name: "float",
            type: "indicator",
            title: "Indicator",
        },
        {
            name: "uint16",
            type: "currency",
            title: "Currency",
        },
        {
            name: "iso-8601",
            type: "datetime",
            title: "Datetime",
        },
        {
            name: "progress",
            type: "progress",
            title: "Progress",
        },
        {
            name: "paragraph",
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
    //         cssClasses: "table4js-context-button",
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
    //         cssClasses: "table4js-context-button",
    //         container: "dropdown"
    //     }
    // ]
    actions: [
        // {
        //     name: "a2",
        //     // title: "test dropdown action 1",
        //     action: function () {
        //         alert(this.name);
        //     },
        //     svg: "icon_add-column",
        //     // cssClasses: "table4js-context-button",
        //     // cssImage: "my-custom-class",
        //     // cssLabel: "my-custom-class",
        //     container: "bottom"
        // },
        // {
        //     name: "a3",
        //     title: "test dropdown action 2",
        //     action: function () {
        //         alert(this.title);
        //     },
        //     svg: "icon_add-column",
        //     cssClasses: "table4js-context-button",
        //     container: "dropdown"
        // }
    ],
    // plugins: [ new Table4JS.SummaryPlugin() ]
};
