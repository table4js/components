var options = {
    enableSearch: true,
    enableSummary: true,
    selectCellColor: "#d4d0ff",
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
            type: "bool",
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