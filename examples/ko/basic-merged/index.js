var options = {
    enableMergedСellsToggle: true,
    enableMergedСells: true,
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

var widgetModel = new Table4.TableWidget(options);
widgetModel.data = sampleData;

ko.applyBindings(widgetModel);