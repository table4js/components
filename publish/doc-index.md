# abris-components
JavaScript (TypeScript) components library. Contains UI Abris components: table (grid) data widget.

## Basic functionality

### AbrisTable widget

Shows data in table (grid) form. Supports infinite scrolling, array datasets, sever-side data provider, filtering, sorting and columns summary. Allows to modify data via inplace editing, create and delete rows. 

## Getting started with AbrisTable

### Vanilla JS / jQuery / KnockoutJS - no modules

Add the following scripts to HEAD part of your HTML file
```HTML
<script src="https://unpkg.com/@abris-lab/components"></script>
<link href="https://unpkg.com/@abris-lab/components/abris-components.css" rel="stylesheet">
```

Add the following markup to BODY part of your HTML file - where you want to see a table
```HTML
<div id="table-container" style="height: 80vh;"></div>
```

Add the following script to make it work
```JS
var options = {
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

var widgetModel = new AbrisComponents.TableWidget(options);

var sampleData = [
    { word: "here ", num: 5, text: "O gentlemen, there is no need for you to confess your happiness, no one requires you to confess - who does not know your modesty!" },
    { word: "there ", num: 24, text: "Their bearing, although they were not completely calm, with its ease, full of dignity and humility at the same time, aroused admiration" },
    { word: "there ", num: 18, text: "I'm to blame, I'm to blame, because I choose my own people." }
];
widgetModel.data = sampleData;

widgetModel.render("#table-container");
```

### Angular JS

Install components package to your application from NPM via the `npm i --save @abris-lab/components` command

Add the following component wrapper
```JS
```

Add KnockoutJS script to the scripts section of an angular.json file

TODO

Use the above wrapper in your Angular application

For more advanced cases please check our [online demos](https://abris-platform.github.io/abris-components/examples) and [documentation](https://abris-platform.github.io/abris-components/docs)

## Online demos
[https://abris-platform.github.io/abris-components/examples](https://abris-platform.github.io/abris-components/examples)

## Documentation
[https://abris-platform.github.io/abris-components/](https://abris-platform.github.io/abris-components/)

## Supported frameworks
- Vanilla JS / KnockoutJS / jQuery
- in plans: React, Angular, Vue
