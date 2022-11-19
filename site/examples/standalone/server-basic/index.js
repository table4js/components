function getColumns(name, baseUrl) {
    Table4JS.postData(baseUrl + "getoptions", { name: name }).then((data) => {
        var options = {
            name: name,
            enableSearch: true,
            enableSummary: true,
            columns: data,
        };

        var model = new Table4JS.Table(options);
        model.dataProvider = new Table4JS.RemoteDataProvider(name, baseUrl);
        model.render("#table-container");
    });
}
getColumns("declaration", "https://abris.site:3334/");
