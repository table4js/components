var showTableSummary = ko.observable(false);

var options = {
    showTableSummary,
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
    getViewModelData: function (limit, offset, order, filters, key, back, callback) {
        function sortfunc (a,b) {
            for (let i=0; i<order.length; i++) {
                if(a[order[i].field] === b[order[i].field]) continue;
                return (a[order[i].field] > b[order[i].field] ? 1 :-1) * (order[i].desc ? -1 : 1);
            }
            return 0;
        }
        (order.length > 0) && sampleData.sort(sortfunc);
        let result = [];
        const filteredData = sampleData.filter(row => {
            let ret = true;
            filters.forEach(f => {
                let accept = true; 
                switch(f.op) {
                    case "EQ": accept = f.value.includes(row[f.field]); break;
                    case "C":  accept = ~row[f.field].toUpperCase().indexOf(f.value.toUpperCase()); break;
                    case "ISN":  accept = !(row[f.field]); break;
                    case "ISNN":  accept = !!(row[f.field]); break;
                }
                if (!accept) ret = false;
            });
            return ret;
        });
        for(var i = offset > 0 ? offset : 0; i < offset + limit && filteredData && i < filteredData.length; i++) {
            result.push(filteredData[i]);
        }
        callback(result, offset + limit, filteredData.length);
    },
    getViewModelSummary: function(func, field, callback ) {
        let result = sampleData[0][field], sum = 0, count = 0, uniques = [];
        sampleData.forEach(row => {
            switch(func){
                case "sum": result = result + row[field]; break;
                case "avg": sum = sum + row[field]; count++; result = sum / count; break;
                case "min": result = result < row[field] ? result : row[field]; break;
                case "max": result = result > row[field] ? result : row[field]; break;
                case "count": if(row[field]) count++; result = count; break;
                case "unique": if(!uniques.includes(row[field])) {uniques.push(row[field]);} result = uniques.length; break; 
                default: break;
            }
        })
        callback(result);
    },
    getItems: (columnName, filter, limit, offset, callback) => {
        let result = [], uniques = [];
        const filteredData = sampleData.map(row => {
            if((!(filter) || ~row[columnName].toUpperCase().indexOf(filter.toUpperCase())) && !uniques.includes(row[columnName])) {uniques.push(row[columnName]);};
        });
        for(var i = offset > 0 ? offset : 0; i < offset + limit && uniques && i < uniques.length; i++) {
            result.push(uniques[i]);
        }
        callback(result);
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

var widgetModel = new AbrisComponents.TableWidget({ model: options, options: {} });

ko.applyBindings(widgetModel);


sampleData = [
    { word: "here ", num: 5, text: "O gentlemen, there is no need for you to confess your happiness, no one requires you to confess - who does not know your modesty!"},
    { word: "there ", num: 24, text: "Their bearing, although they were not completely calm, with its ease, full of dignity and humility at the same time, aroused admiration"},
    { word: "there ", num: 18, text: "I'm to blame, I'm to blame, because I choose my own people."},
    { word: "where ", num: 34, text: "The captain's last words were greeted with a murmur of satisfaction, and two or three heads, in a fit of rapture, poked their way between the curtains."},
    { word: "inside ", num: 43, text: "The events that took place interrupted the thread of his thoughts."},
    { word: "above ", num: 72, text: "Our young nobles, even the most distinguished and wealthy, often seek admission there in vain."},
    { word: "here ", num: 77, text: "No matter how slowly the stranger moved, he managed to disappear from sight or go into some house."},
    { word: "below ", num: 86, text: "He would have forgiven me... of course he would, if I hadn't stuck with him with that damned baldric."},
    { word: "below ", num: 49, text: "And you know, I am ridiculously valuing my head."},
    { word: "where ", num: 54, text: "So don't think that this will make things easier for you: I am equally free to use both hands."},
    { word: "nowhere", num: 35, text: "Sir, I am very fond of people of your stock, and I see that if we do not kill each other, it will be very pleasant for me to talk with you later."},
    { word: "there ", num: 74, text: "But on this audience, as it seemed to his Gascon imagination, his whole future depended."},
    { word: "nowhere", num: 46, text: "The nobleman received money from the hands of the king and did not feel humiliated at all."},
    { word: "above ", num: 14, text: "He therefore made every effort to surpass him even in the richness of his attire."},
    { word: "there ", num: 70, text: "Otherwise, he was mute, blind and deaf, and his loyalty could withstand any test."},
    { word: "somewhere", num: 30, text: "But it was never possible to find him at home, he never invited anyone to go upstairs with him."},
    { word: "here ", num: 25, text: "For under these nicknames they all hid their names."},
    { word: "inside ", num: 88, text: "Young people gradually began to live a common life."},
    { word: "outside ", num: 36, text: "His preoccupied mind was active."},
    { word: "there ", num: 28, text: "And in fact, four people like them, four people who are ready to sacrifice everything for each other."},
    { word: "somewhere", num: 92, text: "He thought about the atom, and even quite thoroughly, racking his brains in search of ways."},
    { word: "below ", num: 94, text: "You can still leave without revealing anything to me."},
    { word: "somewhere", num: 21, text: "Believe me, I am full of gratitude for such treatment and consider it my duty if I can be of any help to you."},
    { word: "here ", num: 67, text: "I believe only what I have seen, and since I have never seen ghosts, I do not believe in them."},
    { word: "here ", num: 65, text: "The voice became more and more muffled. There was some noisy noise."},
    { word: "somewhere", num: 19, text: "Struck by their example, yet muttering something to himself, he held out his hand."},
    { word: "below ", num: 62, text: "I knew he was incapable of protecting me."},
    { word: "outside ", num: 43, text: "I do not require promises and will honestly do everything in my power."},
    { word: "where ", num: 7, text: "And besides, we are in such a position that we can neglect decorum."},
]