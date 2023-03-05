var options = {
    enableMergedCellsToggle: true,
    enableMergedCells: true,
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
model.dataProvider = new Table4JS.ArrayDataProvider(sampleData);

const root = ReactDOM.createRoot(document.getElementById("table-container"));
root.render(<Table4JS.Table4 model={model}/>);