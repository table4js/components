
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


var model = {
    showTableSummary: ko.observable(false),
    columns: [],
    getViewModelData: function (limit, offset, order, key, back, callback) {
        postData("getData", { limit: limit, offset: offset, order: order, key: key, }).then((data) => {
            callback(data.data, offset + limit, data.count);
        });
    }
};

function getColumns(name, model) {
    postData("getModel", { name: name }).then((data) => {
        model.columns = data;
        model.columns.forEach(column => {
            column.order = ko.observable();
            column.filterContext = { showFilter: ko.observable() };
            column.summaryParams = ko.observableArray();
        });

        ko.applyBindings(model);
    });
}
getColumns("name", model);