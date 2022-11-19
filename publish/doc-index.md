# Table4 Widget Model Classes and Objects
It is JavaScript (TypeScript) Table/Grid library.

Almost all code ralated to the Table4 widget core functionality is cross-framework and used as a model for platform-specific rendering. You need to create widget model and set it properties or subscribe events to control table widget behavior.

Created table widget model is passed as a parameter to the presentation layer (React, Knockout). Presentation layer contains framework-specific rendering code and controlled by model objects.

Please select class in the right navigation panel to explore properties and methods of a corresponding model class.

## Getting started with Table4

### Vanilla JS - non-modular web application

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

### React

Please check [table4react](https://www.npmjs.com/package/table4react) package readme file

### Knockout

Please check [table4knockout](https://www.npmjs.com/package/table4knockout) package readme file
