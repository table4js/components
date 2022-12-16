var model=null;

function getColumns(name, baseUrl) {
    Table4JS.postData(baseUrl + "getoptions", { name: name }).then((data) => {
        var options = {
            name: name,
            enableSearch: true,
            enableSummary: true,
            columns: data,
        };

        model = new Table4JS.Table(options);
        model.dataProvider = new Table4JS.RemoteDataProvider(name, baseUrl);
        // model.render("#table-container");
    });
}
getColumns("declaration", "https://table4js.com:3334/");


const root = ReactDOM.createRoot(document.getElementById("table-container"));
root.render(
    <>
        {model && <Table4JS.Table4 model={model}/>}
    </>
); 