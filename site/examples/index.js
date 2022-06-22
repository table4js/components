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
        file: "index.js"
    },
    {
        name: "server-basic",
        title: "Universal Declaration of Human Rights",
        description: "Universal Declaration of Human Rights description",
        file: "index.js"
    }
];

ko.applyBindings(examples);