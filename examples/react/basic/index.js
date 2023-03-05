var options = {
    columns: [
        {   name: "id",
            visible: false,
        },
        {
            name: "color_hex",
            visible: false,
            // row_color: true,
        },
        {
            name: "first_name",
            title: "First Name"
        },
        {
            name: "last_name",
            title: "Last Name"
        },
        {
            name: "int16",
            title: "Number",
            type: "number"
        },
        {
            name: "bool",
            type: "bool",
            title: "Boolean",
            row_color: true,
            concatPrev: true,
        },
        {
            name: "iso-8601_date",
            type: "date",
            title: "Date",
        },
        {
            name: "float",
            type: "indicator",
            title: "Indicator",
        },
        {
            name: "uint16",
            type: "currency",
            title: "Currency",
        },
        {
            name: "progress",
            type: "progress",
            title: "Progress",
        },
        {
            name: "iso-8601",
            type: "datetime",
            title: "Datetime",
        }
    ],
};



var model = new Table4JS.Table(options);
model.dataProvider = new Table4JS.ArrayDataProvider(sampleData);

const root = ReactDOM.createRoot(document.getElementById("table-container"));
root.render(<Table4JS.Table4 model={model}/>);