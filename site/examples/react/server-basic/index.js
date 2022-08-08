var widgetModel=null;

function getColumns(name, baseUrl) {
    AbrisComponents.postData(baseUrl + "getoptions", { name: name }).then((data) => {
        var options = {
            name: name,
            enableSearch: true,
            enableSummary: true,
            columns: data,
        };

        widgetModel = new AbrisComponents.TableWidget(options);
        widgetModel.dataProvider = new AbrisComponents.RemoteDataProvider(name, baseUrl);
        // widgetModel.render("#table-container");
    });
}
getColumns("declaration", "https://abris.site:3334/");


const root = ReactDOM.createRoot(document.getElementById("table-container"));
root.render(
    <>
        {widgetModel && <AbrisComponents.AbrisComponentsTable model={widgetModel}/>}
    </>
); 