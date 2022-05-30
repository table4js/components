
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch("http://127.0.0.1:3000/" + url, {
        //   mode: 'cors', // no-cors, *cors, same-origin
        //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //   credentials: 'same-origin', // include, *same-origin, omit
        //   redirect: 'follow', // manual, *follow, error
        //   referrerPolicy: 'no-referrer', // no-referrer, *client
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

var options = {
    enableSearch: true,
    enableSummary: true,
    columns: [],
    getViewModelData: function (limit, offset, order, filters, key, back, callback) {
        postData("getData", { name: options.name, limit: limit, offset: offset, order: order, filters: filters, key: key, }).then((data) => {
            callback(data.data, offset + limit, data.count, back);
        });
    },
    getViewModelSummary: function (func, field, filters, callback) {
        postData("getSummary", { name: options.name, func: func, field: field, filters: filters }).then((data) => {
            callback(data.data);
        });
    },
    getItems: (columnName, filter, limit, offset, callback) => {
        postData("getColumnData", { name: options.name, columnName: columnName, filter: filter, limit: limit, offset: offset }).then((data) => {
            callback(data.data);
        });
    },
    // actions: [
    //     {
    //         name: "a2",
    //         title: "test dropdown action 1",
    //         action: function () {
    //             alert(this.title);
    //         },
    //         svg: "icon_add-column",
    //         cssClasses: "abris-context-button",
    //         container: "dropdown"
    //     },
    //     {
    //         name: "a3",
    //         title: "test dropdown action 2",
    //         action: function () {
    //             alert(this.title);
    //         },
    //         svg: "icon_add-column",
    //         cssClasses: "abris-context-button",
    //         container: "dropdown"
    //     }
    // ]
};

function getColumns(name, options) {
    postData("getoptions", { name: name }).then((data) => {
        options.name = name,
            options.columns = data;

        ko.applyBindings(new AbrisComponents.TableWidget(options));
    });
}
getColumns("declaration", options);