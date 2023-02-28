var model = new Table4JS.Table(options);
// model.dataProvider = new Table4JS.ArrayDataProvider(sampleData);
model.data = sampleData;

const root = ReactDOM.createRoot(document.getElementById("table-container"));
root.render(React.createElement(Table4JS.Table4, { model: model }));