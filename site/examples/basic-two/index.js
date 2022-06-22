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
};

var table1 = new AbrisComponents.TableWidget(options);
table1.data = sampleData;

var table2 = new AbrisComponents.TableWidget(options);
table2.data = sampleData;

ko.applyBindings({ table1: table1, table2: table2 });
