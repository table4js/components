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

var widgetModel = new AbrisComponents.TableWidget(options);
widgetModel.dataProvider = new AbrisComponents.ArrayDataProvider(sampleData);

const root = ReactDOM.createRoot(document.getElementById("table-container"));
root.render(<AbrisComponents.AbrisComponentsTable model={widgetModel}/>);