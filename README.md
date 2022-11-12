[![Build Project](https://github.com/abris-platform/abris-components/actions/workflows/webpack.yml/badge.svg)](https://github.com/abris-platform/abris-components/actions/workflows/webpack.yml)
[![npm version](https://badge.fury.io/js/@abris-lab%2Fcomponents.svg)](https://badge.fury.io/js/@abris-lab%2Fcomponents)

<a href="https://github.com/abris-platform/abris-components/pulse" alt="Activity">
<img src="https://img.shields.io/github/commit-activity/m/abris-platform/abris-components" /></a>
<a href="https://github.com/abris-platform/abris-components/issues">
<img alt="Issues" title="Open Issues" src="https://img.shields.io/github/issues/abris-platform/abris-components.svg">
</a>
<a href="https://github.com/abris-platform/abris-components/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aclosed+">
<img alt="Closed issues" title="Closed Issues" src="https://img.shields.io/github/issues-closed/abris-platform/abris-components.svg">
</a>

# abris-components
JavaScript (TypeScript) components library. Contains UI Abris components: table (grid) data widget.

## Basic functionality

![Table4](./site/img/features/4.svg)

### Table4 widget

Shows data in table (grid) form. Supports infinite scrolling, array datasets, sever-side data provider, filtering, sorting and columns summary. Allows to modify data via inplace editing, create and delete rows. 

## Getting started with Table4

### Vanilla JS / jQuery / KnockoutJS - no modules

Add the following scripts to HEAD part of your HTML file
```HTML
<script src="https://unpkg.com/@abris-lab/components"></script>
<link href="https://unpkg.com/@abris-lab/components/table4.css" rel="stylesheet">
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
- KnockoutJS / jQuery / Vanilla JS
- something other in plans

## How to compile this repo
 - git clone https://github.com/abris-platform/abris-components.git
 - cd abris-components
 - npm i
 - npm test
 - npm run build
