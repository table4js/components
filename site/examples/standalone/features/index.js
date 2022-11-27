var options = {
    enableSearch: true,
    enableSummary: true,
    enableMergedСellsToggle: true,
    enableMergedСells: true,
    enableEdit: true,
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

var model = new Table4JS.Table(options);
model.data = sampleData;
model.render("#table-container");
