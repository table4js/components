var options = {
    enableSearch: true,
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

ko.applyBindings(model);