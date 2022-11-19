# Table4JS - JavaScript (TypeScript) Table/Grid library

## Basic functionality

![Table4](./site/img/features/4.svg)

Table widget shows data in table (grid) form. It supports infinite scrolling, array datasets, sever-side data provider, filtering, sorting and columns summary. Widget allows to modify data via inplace editing, create and delete rows. 

### Table4JS Widget

Shows data in table (grid) form. Supports infinite scrolling, array datasets, sever-side data provider, filtering, sorting and columns summary. Allows to modify data via inplace editing, create and delete rows. 

## Getting started with table4js package

Add the following scripts to HEAD part of your HTML file
```HTML
<script src="https://unpkg.com/table4js"></script>
<link href="https://unpkg.com/table4js/table4.css" rel="stylesheet">
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

var widgetModel = new Table4.TableWidget(options);

var sampleData = [
    { word: "here ", num: 5, text: "O gentlemen, there is no need for you to confess your happiness, no one requires you to confess - who does not know your modesty!" },
    { word: "there ", num: 24, text: "Their bearing, although they were not completely calm, with its ease, full of dignity and humility at the same time, aroused admiration" },
    { word: "there ", num: 18, text: "I'm to blame, I'm to blame, because I choose my own people." }
];
widgetModel.data = sampleData;

widgetModel.render("#table-container");
```

Here is the table4js [live example with the above code](https://plnkr.co/edit/wBrB0EznDixVV1ra?open=lib%2Fscript.js&preview)

## Project site and resources
Our official sie is [https://abris.site](https://abris.site)

### Online demos
[https://abris.site/examples](https://abris.site/examples)

The demos are framework-specific and you can choose your framework via selector Standalone/Knockout/React in the top left corner of the navigation panel. Each demo has html/js/css tab where you can get markup, css or JavaScript code to use in your application. Each demo also can be opened in a separate window.

### Documentation
Almost all code ralated to the Table4 widget core functionality is cross-framework and used as a model for platform-specific rendering. You need to create widget model and set it properties or subscribe events to control table widget behavior. Table4 model is described in our documentation:

[https://abris.site/docs](https://abris.site/docs)