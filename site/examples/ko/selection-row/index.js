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
            visible: false
        },        
        {
            name: "text",
            title: "Text",
        }
    ],
};

var widgetModel = new AbrisComponents.TableWidget(options);
widgetModel.data = sampleData;

ko.applyBindings(widgetModel);