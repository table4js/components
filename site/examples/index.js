function populatePre(url, id) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        let text = this.responseText;

        document.getElementById("text").text = text;

        el = document.getElementById(id);
        el.textContent = document.getElementById("text").text;
        hljs.highlightElement(el);
    };
    xhr.open('GET', url);
    xhr.send();
}

var framework = ko.observable('react');


var examples = ko.observableArray([
    {
        name: "basic",
        title: "Basic usage",
        description: "Basic usage description",
        show: ko.observable(false),
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name: "index.js",
                lang: "language-js" 
            },
            {
                name: "index.html",
                lang: "lang-html"
            },
            {
                name: "data.js",
                lang: "language-js"
            }
        ]
    },
    {
        name: "basic-merged",
        title: "Сell merging",
        description: "Enabling/hidden mode of merging cells with the same values.",
        show: ko.observable(false),
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js",
                lang: "language-js" 
            },
            {
                name: "index.html",
                lang: "lang-html"
            },
            {
                name: "data.js",
                lang: "language-js"
            }
        ]
    },
    {
        name: "basic-edit",
        title: "Inplace editing",
        description: "Inplace editing.",
        show: ko.observable(false),
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js",
                lang: "language-js" 
            },
            {
                name: "index.html",
                lang: "lang-html"
            },
            {
                name: "data.js",
                lang: "language-js"
            }
        ]
    },
    {
        name: "basic-search",
        title: "Search and filtering",
        description: `Display the data search bar. Allows you to filter the data in the table by all columns.\
        <br>Set by the 'enableSearch' option to true`,
        show: ko.observable(false),
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js",
                lang: "language-js" 
            },
            {
                name: "index.html",
                lang: "lang-html"
            },
            {
                name: "data.js",
                lang: "language-js"
            }
        ]
    },
    {
        name: "basic-summary",
        title: "Summary",
        description: `Displays a switch that shows/hides the column totals calculation panel.\
        <br>Set by the 'enableSummary' option to true`,
        show: ko.observable(false),
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js",
                lang: "language-js" 
            },
            {
                name: "index.html",
                lang: "lang-html"
            },
            {
                name: "data.js",
                lang: "language-js"
            }
        ]
    },
    {
        name: "server-basic",
        title: "Getting data from the server",
        description: "Universal Declaration of Human Rights description",
        show: ko.observable(false),
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js",
                lang: "language-js"
            },
            {
                name: "index.html",
                lang: "lang-html"
            }
        ]
    },
    {
        name: "basic-two",
        title: "Two tables on the same page",
        description: `Two tables on the same page\
        Variables options1 and options2 are used to describe tables.\
        <br><br>The data is stored in the variables "sampleData1" and "sampleData2" files "data1.js" and "data2.js"`,
        show: ko.observable(false),
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js",
                lang: "language-js"
            },
            {
                name: "index.html",
                lang: "lang-html"
            },
            {
                name: "data1.js",
                lang: "language-js"
            },
            {
                name: "data2.js",
                lang: "language-js"
            }
        ]
    },
    {
        name: "color-row",
        title: "Highlight rows",
        description: `Highlight rows in different colors depending on the column with the row color.\
        There is a color column in the 'data.js' file, in which the color value of the line is stored in the html specification.\
        The table options contain the following description.\
        <br>
        <br>{\
        <br>&nbsp;&nbsp;&nbsp;&nbsp;name: "color",\
        <br>&nbsp;&nbsp;&nbsp;&nbsp;row_color: true, //Indicates that this is the color of the row \
        <br>&nbsp;&nbsp;&nbsp;&nbsp;visible: false, //Hides this column in the table \
        <br>}\
        <br>
        <br>The column name can be anything.`,
        show: ko.observable(false),
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js",
                lang: "language-js" 
            },
            {
                name: "index.html",
                lang: "lang-html"
            },
            {
                name: "data.js",
                lang: "language-js"
            }
        ]
    },
    {
        name: "color-cell",
        title: "Highlight cells",
        description: `Highlight cells in different colors depending on the column with the cell color.\
        There is a color column in the 'data.js' file, in which the color value of the line is stored in the html specification.\
        The table options contain the following description.\
        <br>
        <br>{\
        <br>&nbsp;&nbsp;&nbsp;&nbsp;name: "color",\
        <br>&nbsp;&nbsp;&nbsp;&nbsp;row_color: true, //Indicates that this is the color of the row \
        <br>&nbsp;&nbsp;&nbsp;&nbsp;visible: false, //Hides this column in the table \
        <br>&nbsp;&nbsp;&nbsp;&nbsp;concatPrev: true, //Highlight previous column \
        <br>}\
        <br>
        <br>The column name can be anything.`,
        show: ko.observable(false),
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js",
                lang: "language-js" 
            },
            {
                name: "index.html",
                lang: "lang-html"
            },
            {
                name: "data.js",
                lang: "language-js"
            }
        ]
    },
    {
        name: "selection-row",
        title: "Rows selection",
        description: `The rows of the table are highlighted depending on the column with the sign of the need for highlighting.\
        There is a column in the data.js file that stores the highlight sign (true).
        The "selectCellColor" option stores the color value in the html specification.\
        <br>
        <br>{\
        <br>&nbsp;&nbsp;&nbsp;&nbsp;name: "color",\
        <br>&nbsp;&nbsp;&nbsp;&nbsp;row_color: true, //Indicates that this is the color of the row \
        <br>&nbsp;&nbsp;&nbsp;&nbsp;visible: false, //Hides this column in the table \
        <br>}\
        <br>
        <br>The column name can be anything.`,
        show: ko.observable(false),
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js",
                lang: "language-js" 
            },
            {
                name: "index.html",
                lang: "lang-html"
            },
            {
                name: "data.js",
                lang: "language-js"
            }
        ]
    },
    {
        name: "selection-cell",
        title: "Selection table cells",
        description: `Table cells are highlighted depending on the column with the highlight flag.\
        In the data.js file, there is a flag column in which the value true indicates that the cell should be highlighted.\
        The "selectCellColor" option stores the color value in the html specification.\
        The table options contain the following description.\
        <br>
        <br>{\
        <br>&nbsp;&nbsp;&nbsp;&nbsp;name: "color",\
        <br>&nbsp;&nbsp;&nbsp;&nbsp;row_color: true, //Indicates that this is the color of the row \
        <br>&nbsp;&nbsp;&nbsp;&nbsp;visible: false, //Hides this column in the table \
        <br>&nbsp;&nbsp;&nbsp;&nbsp;concatPrev: true, //selection previous column \
        <br>}\
        <br>
        <br>The column name can be anything.`,
        show: ko.observable(false),
        current_tab_file: ko.observable("index.js"),
        files: [ 
            {
                name:"index.js",
                lang: "language-js" 
            },
            {
                name: "index.html",
                lang: "lang-html"
            },
            {
                name: "data.js",
                lang: "language-js"
            }
        ]
    }

]);

var examplesViewModel = {
    list: examples,
    framework: framework
};

ko.applyBindings(examplesViewModel);

setTimeout(function() {
    document.querySelectorAll('.sample__container').forEach(function(element) {
        var intersectionObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.intersectionRatio <= 0) return;
                ko.dataFor(entry.target).show(true);
                intersectionObserver.disconnect();
            });
        });
        intersectionObserver.observe(element);
    });
}, 100);
