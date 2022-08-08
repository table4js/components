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

var widgetModel = new AbrisComponents.TableWidget(options);
widgetModel.dataProvider = new AbrisComponents.ArrayDataProvider(sampleData);

const root = ReactDOM.createRoot(document.getElementById("table-container"));
root.render(<AbrisComponents.AbrisComponentsTable model={widgetModel}/>);