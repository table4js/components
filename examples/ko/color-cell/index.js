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
            name: "color",
            row_color: true,
            visible: false,
            concatPrev: true,
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