var sampleData = [
    { key: 1, color: null, word: "here ", num: 5, bool: true, indicator: 0.1, currency: 12.67, text: "O gentlemen, there is no need for you to confess your happiness, no one requires you to confess - who does not know your modesty!", cs: "#d0e3e3" },
    { key: 2, color: "#dfdeaa", word: "there ", num: 24, bool: true, indicator: 0.7, currency: 122.345, text: "Their bearing, although they were not completely calm, with its ease, full of dignity and humility at the same time, aroused admiration", cs: null },
    { key: 3, color: null, word: "there ", num: 18, bool: true, text: "I'm to blame, I'm to blame, because I choose my own people.", cs: null },
    { key: 4, color: null, word: "where ", num: 34, bool: true, text: "The captain's last words were greeted with a murmur of satisfaction, and two or three heads, in a fit of rapture, poked their way between the curtains.", cs: null },
    { key: 5, color: null, word: "inside ", num: 43, bool: false, text: "The events that took place interrupted the thread of his thoughts.", cs: null },
    { key: 6, color: null, word: "above ", num: 72, bool: false, text: "Our young nobles, even the most distinguished and wealthy, often seek admission there in vain.", cs: null },
    { key: 7, color: null, word: "here ", num: 77, bool: false, text: "No matter how slowly the stranger moved, he managed to disappear from sight or go into some house.", cs: null },
    { key: 8, color: null, word: "below ", num: 86, bool: false, text: "He would have forgiven me... of course he would, if I hadn't stuck with him with that damned baldric.", cs: null },
    { key: 9, color: null, word: "below ", num: 49, bool: false, text: "And you know, I am ridiculously valuing my head.", cs: null },
    { key: 10, color: null, word: "where ", num: 54, bool: false, text: "So don't think that this will make things easier for you: I am equally free to use both hands.", cs: null },
    { key: 11, color: null, word: "nowhere", num: 35, bool: false, text: "Sir, I am very fond of people of your stock, and I see that if we do not kill each other, it will be very pleasant for me to talk with you later.", cs: null },
    { key: 12, color: null, word: "there ", num: 74, bool: false, text: "But on this audience, as it seemed to his Gascon imagination, his whole future depended.", cs: null },
    { key: 13, color: null, word: "nowhere", num: 46, bool: false, text: "The nobleman received money from the hands of the king and did not feel humiliated at all.", cs: null },
    { key: 14, color: null, word: "above ", num: 14, bool: false, text: "He therefore made every effort to surpass him even in the richness of his attire.", cs: null },
    { key: 15, color: null, word: "there ", num: 70, bool: false, text: "Otherwise, he was mute, blind and deaf, and his loyalty could withstand any test.", cs: null },
    { key: 16, color: null, word: "somewhere", num: 30, bool: false, text: "But it was never possible to find him at home, he never invited anyone to go upstairs with him.", cs: null },
    { key: 17, color: "#dfdeaa", word: "here ", num: 25, bool: false, text: "For under these nicknames they all hid their names.", cs: "#d0e3e3" },
    { key: 18, color: "#dfdeaa", word: "inside ", num: 88, bool: false, text: "Young people gradually began to live a common life.", cs: null },
    { key: 19, color: null, word: "outside ", num: 36, bool: false, text: "His preoccupied mind was active.", cs: null },
    { key: 20, color: null, word: "there ", num: 28, bool: false, text: "And in fact, four people like them, four people who are ready to sacrifice everything for each other.", cs: null },
    { key: 21, color: null, word: "somewhere", num: 92, bool: false, text: "He thought about the atom, and even quite thoroughly, racking his brains in search of ways.", cs: null },
    { key: 22, color: null, word: "below ", num: 94, bool: true, text: "You can still leave without revealing anything to me.", cs: null },
    { key: 23, color: null, word: "somewhere", num: 21, bool: true, text: "Believe me, I am full of gratitude for such treatment and consider it my duty if I can be of any help to you.", cs: null },
    { key: 24, color: null, word: "here ", num: 67, bool: false, text: "I believe only what I have seen, and since I have never seen ghosts, I do not believe in them.", cs: null },
    { key: 25, color: null, word: "here ", num: 65, bool: false, text: "The voice became more and more muffled. There was some noisy noise.", cs: "#d0e3e3" },
    { key: 26, color: null, word: "somewhere", num: 19, bool: false, text: "Struck by their example, yet muttering something to himself, he held out his hand.", cs: null },
    { key: 27, color: null, word: "below ", num: 62, bool: false, text: "I knew he was incapable of protecting me.", cs: null },
    { key: 28, color: null, word: "outside ", num: 43, bool: false, text: "I do not require promises and will honestly do everything in my power.", cs: "#d0e3e3" },
    { key: 29, color: null, word: "where ", num: 7, bool: false, text: "And besides, we are in such a position that we can neglect decorum.", cs: null },
];

var options = {
    enableSearch: true,
    enableSummary: true,
    enableMergedCellsToggle: true,
    enableMergedCells: false,
    keyColumn: "key",
    selectCellColor: "#ffd9d9",
    enableEdit: true,
    columns: [
        {   name: "key",
            visible: false,
        },
        {
            name: "color",
            visible: false,
            row_color: true,
        },
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
            name: "bool",
            type: "bool",
            title: "Boolean",
            row_color: true,
            concatPrev: true,
        },
        {
            name: "indicator",
            type: "indicator",
            title: "Indicator",
        },
        {
            name: "currency",
            type: "currency",
            title: "Currency",
        },
        {
            name: "text",
            title: "Text",
        },
        {
            name: "cs",
            visible: false,
            row_color: true,
            concatPrev: true,
        },
    ],
    // getData: function (limit, offset, order, filters, key, back, callback) {
    //     sampleDataProvider.getData(limit, offset, order, filters, key, back, callback);
    // },
    // getSummary: function (func, field, callback) {
    //     sampleDataProvider.getSummary(func, field, callback);
    // },
    // getColumnData: (columnName, filter, limit, offset, callback) => {
    //     sampleDataProvider.getColumnData(columnName, filter, limit, offset, callback);
    // },
    // actions: [
    //     {
    //         name: "summary-action",
    //         action: function () {
    //             showTableSummary(!showTableSummary());
    //         },
    //         svg: "icon_equal",
    //         container: "top"
    //     },
    //     {
    //         name: "a2",
    //         title: "test dropdown action 1",
    //         action: function () {
    //             alert(this.title);
    //         },
    //         svg: "icon_add-column",
    //         cssClasses: "table4js-context-button",
    //         cssImage: "my-custom-class",
    //         cssLabel: "my-custom-class",
    //         container: "dropdown"
    //     },
    //     {
    //         name: "a3",
    //         title: "test dropdown action 2",
    //         action: function () {
    //             alert(this.title);
    //         },
    //         svg: "icon_add-column",
    //         cssClasses: "table4js-context-button",
    //         container: "dropdown"
    //     }
    // ]
    actions: [
        // {
        //     name: "a2",
        //     // title: "test dropdown action 1",
        //     action: function () {
        //         alert(this.name);
        //     },
        //     svg: "icon_add-column",
        //     // cssClasses: "table4js-context-button",
        //     // cssImage: "my-custom-class",
        //     // cssLabel: "my-custom-class",
        //     container: "bottom"
        // },
        // {
        //     name: "a3",
        //     title: "test dropdown action 2",
        //     action: function () {
        //         alert(this.title);
        //     },
        //     svg: "icon_add-column",
        //     cssClasses: "table4js-context-button",
        //     container: "dropdown"
        // }
    ],
    // plugins: [ new Table4JS.TableSummaryPlugin() ]
};

var model = new Table4JS.Table(options);
// var sampleDataProvider = new Table4JS.ArrayDataProvider(sampleData);
// model.dataProvider = new Table4JS.ArrayDataProvider(sampleData);
model.data = sampleData;
model.render("#table-container");
