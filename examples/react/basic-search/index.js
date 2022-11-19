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

var widgetModel = new Table4.TableWidget(options);
widgetModel.dataProvider = new Table4.ArrayDataProvider(sampleData);

const root = ReactDOM.createRoot(document.getElementById("table-container"));
root.render(<Table4.Table4Table model={widgetModel}/>);
