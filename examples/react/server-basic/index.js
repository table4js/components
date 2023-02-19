function getColumns(name, baseUrl) {
    Table4JS.postData(baseUrl + "getoptions", { name: name }).then((data) => {
        var options = {
            name: name,
            enableSearch: true,
            enableSummary: true,
            columns: data,
        };

        const model = new Table4JS.Table(options);
        model.dataProvider = new Table4JS.RemoteDataProvider(name, baseUrl);
        // model.render("#table-container");
        const root = ReactDOM.createRoot(document.getElementById("table-container"));
        root.render(<Table4JS.Table4 model={model}/>); 
    });
}
getColumns("declaration", "/");
