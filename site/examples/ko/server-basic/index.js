

function getColumns(name, baseUrl) {
    AbrisComponents.postData(baseUrl + "getoptions", { name: name }).then((data) => {
        var options = {
            name: name,
            enableSearch: true,
            enableSummary: true,
            columns: data,
        };

        var widgetModel = new AbrisComponents.TableWidget(options);
        widgetModel.dataProvider = new AbrisComponents.RemoteDataProvider(name, baseUrl);
        ko.applyBindings(widgetModel);
    });
}
getColumns("declaration", "https://abris.site:3334/");

