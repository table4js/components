function populatePre(url, id) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById(id).textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}

var examples = [
    {
        name: "basic",
        title: "TableWidget basic usage",
        description: "TableWidget basic usage description",
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js"
            },
            {
                name: "index.html"
            },
            {
                name: "data.js"
            }
        ]
    },
    {
        name: "server-basic",
        title: "Universal Declaration of Human Rights",
        description: "Universal Declaration of Human Rights description",
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js"
            },
            {
                name: "index.html"
            }
        ]
    },
    {
        name: "basic-two",
        title: "Two tables on the same page",
        description: "Two tables on the same page",
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js"
            },
            {
                name: "index.html"
            },
            {
                name: "data1.js"
            },
            {
                name: "data2.js"
            }
        ]
    }
];


ko.applyBindings(examples);