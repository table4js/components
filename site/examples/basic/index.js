var options = {
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

var widgetModel = new AbrisComponents.TableWidget(options);
// var sampleDataProvider = new ArrayDataProvider(sampleData);
widgetModel.data = sampleData;

ko.applyBindings(widgetModel);
