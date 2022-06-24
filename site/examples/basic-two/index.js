var options1 = {
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
};

var table1 = new AbrisComponents.TableWidget(options1);
table1.data = sampleData1;

var options2 = {
    enableSearch: true,
    enableSummary: true,
    columns: [
        {
            name: "name",
            title: "Name"
        },
        {
            name: "age",
            title: "Age",
            type: "number"
        },
        {
            name: "phone",
            title: "Phone",
        },
        {
            name: "address",
            title: "Address",
        },
        {
            name: "balance",
            title: "Balance",
        }
    ],
};

var table2 = new AbrisComponents.TableWidget(options2);
table2.data = sampleData2;

ko.applyBindings({ table_top: table1, table_down: table2 });
