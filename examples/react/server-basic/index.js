var widgetModel=null;

function getColumns(name, baseUrl) {
    Table4.postData(baseUrl + "getoptions", { name: name }).then((data) => {
        var options = {
            name: name,
            enableSearch: true,
            enableSummary: true,
            columns: data,
        };

        widgetModel = new Table4.TableWidget(options);
        widgetModel.dataProvider = new Table4.RemoteDataProvider(name, baseUrl);
        // widgetModel.render("#table-container");
    });
}
getColumns("declaration", "https://abris.site:3334/");


const root = ReactDOM.createRoot(document.getElementById("table-container"));
root.render(
    <>
        {widgetModel && <Table4.Table4Table model={widgetModel}/>}
    </>
); 