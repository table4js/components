function getColumns(name, baseUrl) {
    Table4.postData(baseUrl + "getoptions", { name: name }).then((data) => {
        var options = {
            name: name,
            enableSearch: true,
            enableSummary: true,
            columns: data,
        };

        var widgetModel = new Table4.TableWidget(options);
        widgetModel.dataProvider = new Table4.RemoteDataProvider(name, baseUrl);
        widgetModel.render("#table-container");
    });
}
getColumns("declaration", "https://abris.site:3334/");
