
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

var showTableSummary = ko.observable(false);

var model = {
    showTableSummary,
    columns: [],
    getViewModelData: function (limit, offset, order, key, back, callback) {
        postData("getData", { name: model.name, limit: limit, offset: offset, order: order, key: key, }).then((data) => {
            callback(data.data, offset + limit, data.count);
        });
    },
    getViewModelSummary: function(func, field, callback ) {
        postData("getSummary", { name: model.name, func: func, field: field }).then((data) => {
            callback(data.data);
        });
    },
    actions: [
        {
            name: "summary-action",
            title: "Show/hide summary",
            cssClasses: "my-custom-class",
            cssImage: "my-custom-class",
            cssLabel: "my-custom-class",
            action: function () {
                showTableSummary(!showTableSummary());
            },
            svg: "icon_table",
            container: "top"
        },
        {
            name: "a2",
            title: "test dropdown action 1",
            action: function () {
                alert(this.title);
            },
            svg: "icon_add-column",
            cssClasses: "abris-context-button",
            container: "dropdown"
        },
        {
            name: "a3",
            title: "test dropdown action 2",
            action: function () {
                alert(this.title);
            },
            svg: "icon_add-column",
            cssClasses: "abris-context-button",
            container: "dropdown"
        }
    ]
};

function getColumns(name, model) {
    postData("getModel", { name: name }).then((data) => {
        model.name = name,
        model.columns = data;


        ko.applyBindings(model);
    });
}
getColumns(window.location.hash.substring(1), model);