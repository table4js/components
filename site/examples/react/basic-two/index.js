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

var model1 = new Table4JS.Table(options1);
model1.dataProvider = new Table4JS.ArrayDataProvider(sampleData1);

var model2 = new Table4JS.Table(options2);
model2.dataProvider = new Table4JS.ArrayDataProvider(sampleData2);


const root = ReactDOM.createRoot(document.getElementById("table-container"));

root.render(<>
    <div style={{clear: "both"}}>
        <h1>Table 1</h1>
    </div>
    <Table4JS.Table4 model={model1}/>

    <div style={{clear: "both"}}>
        <h1>Table 2</h1>
    </div>
    <Table4JS.Table4 model={model2}/>
</>
);
