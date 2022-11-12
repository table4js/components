var options1 = {
    enableSearch: true,
    enableSummary: true,
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

var options2 = {
    enableSearch: true,
    enableSummary: true,
    columns: [
        {
            name: "name",
            title: "Name"
        },
        {
            name: "age",
            title: "Age",
            type: "number"
        },
        {
            name: "phone",
            title: "Phone",
        },
        {
            name: "address",
            title: "Address",
        },
        {
            name: "balance",
            title: "Balance",
        }
    ],
};

var widgetModel1 = new Table4.TableWidget(options1);
widgetModel1.dataProvider = new Table4.ArrayDataProvider(sampleData1);

var widgetModel2 = new Table4.TableWidget(options2);
widgetModel2.dataProvider = new Table4.ArrayDataProvider(sampleData2);


const root = ReactDOM.createRoot(document.getElementById("table-container"));

root.render(<>
    <div style={{clear: "both"}}>
        <h1>Table 1</h1>
    </div>
    <Table4.Table4Table model={widgetModel1}/>

    <div style={{clear: "both"}}>
        <h1>Table 2</h1>
    </div>
    <Table4.Table4Table model={widgetModel2}/>
</>
);
