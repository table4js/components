(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Table4JS", [], factory);
	else if(typeof exports === 'object')
		exports["Table4JS"] = factory();
	else
		root["Table4JS"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/knockout/build/output/knockout-latest.js":
/*!***************************************************************!*\
  !*** ./node_modules/knockout/build/output/knockout-latest.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Knockout JavaScript library v3.5.1
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var A=this||(0,eval)("this"),w=A.document,R=A.navigator,v=A.jQuery,H=A.JSON;v||"undefined"===typeof jQuery||(v=jQuery);(function(n){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports,__webpack_require__], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})(function(S,T){function K(a,c){return null===a||typeof a in W?a===c:!1}function X(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function Y(b,c){var d;return function(){clearTimeout(d);
d=a.a.setTimeout(b,c)}}function Z(a,c){c&&"change"!==c?"beforeChange"===c?this.pc(a):this.gb(a,c):this.qc(a)}function aa(a,c){null!==c&&c.s&&c.s()}function ba(a,c){var d=this.qd,e=d[r];e.ra||(this.Qb&&this.mb[c]?(d.uc(c,a,this.mb[c]),this.mb[c]=null,--this.Qb):e.I[c]||d.uc(c,a,e.J?{da:a}:d.$c(a)),a.Ja&&a.gd())}var a="undefined"!==typeof S?S:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.L=function(a,c,d){a[c]=d};a.version="3.5.1";a.b("version",
a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1,foreachHidesDestroyed:!1};a.a=function(){function b(a,b){for(var c in a)f.call(a,c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)f.call(b,c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var l=b[c].match(q)||[];a.a.D(d.match(q),function(b){a.a.Na(l,b,e)});b[c]=l.join(" ")}var f=Object.prototype.hasOwnProperty,g={__proto__:[]}instanceof Array,h="function"===typeof Symbol,m={},k={};m[R&&/Firefox\/2/i.test(R.userAgent)?
"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];m.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(m,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)k[b[c]]=a});var l={propertychange:!0},p=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),q=/\S+/g,t;return{Jc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
D:function(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a)},A:"function"==typeof Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b)}:function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Lb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a))return a[d];return n},Pa:function(b,c){var d=a.a.A(b,c);0<d?b.splice(d,1):0===d&&b.shift()},wc:function(b){var c=[];b&&a.a.D(b,function(b){0>a.a.A(c,b)&&c.push(b)});return c},Mb:function(a,
b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)d.push(b.call(c,a[e],e));return d},jb:function(a,b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)b.call(c,a[e],e)&&d.push(a[e]);return d},Nb:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},Na:function(b,c,d){var e=a.a.A(a.a.bc(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},Ba:g,extend:c,setPrototypeOf:d,Ab:g?d:c,P:b,Ga:function(a,b,c){if(!a)return a;var d={},e;for(e in a)f.call(a,e)&&(d[e]=
b.call(c,a[e],e,a));return d},Tb:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Yb:function(b){b=a.a.la(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.oa(b[d]));return c},Ca:function(b,c){for(var d=0,e=b.length,l=[];d<e;d++){var k=b[d].cloneNode(!0);l.push(c?a.oa(k):k)}return l},va:function(b,c){a.a.Tb(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},Xc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],
l=e.parentNode,k=0,f=c.length;k<f;k++)l.insertBefore(c[k],e);k=0;for(f=d.length;k<f;k++)a.removeNode(d[k])}},Ua:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d)}}return a},Zc:function(a,b){7>p?a.setAttribute("selected",b):a.selected=b},Db:function(a){return null===a||a===n?"":a.trim?
a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ud:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},vd:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(1!==a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Sb:function(b){return a.a.vd(b,b.ownerDocument.documentElement)},kd:function(b){return!!a.a.Lb(b,a.a.Sb)},R:function(a){return a&&
a.tagName&&a.tagName.toLowerCase()},Ac:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Ac(b),c)},Gc:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},B:function(b,c,d){var e=a.a.Ac(d);d=l[c];if(a.options.useOnlyNativeEvents||d||!v)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var k=function(a){e.call(b,a)},f="on"+c;b.attachEvent(f,
k);a.a.K.za(b,function(){b.detachEvent(f,k)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else t||(t="function"==typeof v(b).on?"on":"bind"),v(b)[t](c,e)},Fb:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.R(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if("function"==typeof w.createEvent)if("function"==
typeof b.dispatchEvent)d=w.createEvent(k[c]||"HTMLEvents"),d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");else v(b).trigger(c)},f:function(b){return a.O(b)?b():b},bc:function(b){return a.O(b)?b.v():b},Eb:function(b,c,d){var l;c&&("object"===typeof b.classList?
(l=b.classList[d?"add":"remove"],a.a.D(c.match(q),function(a){l.call(b.classList,a)})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d))},Bb:function(b,c){var d=a.a.f(c);if(null===d||d===n)d="";var e=a.h.firstChild(b);!e||3!=e.nodeType||a.h.nextSibling(e)?a.h.va(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Ad(b)},Yc:function(a,b){a.name=b;if(7>=p)try{var c=a.name.replace(/[&<>'"]/g,function(a){return"&#"+a.charCodeAt(0)+";"});a.mergeAttributes(w.createElement("<input name='"+
c+"'/>"),!1)}catch(d){}},Ad:function(a){9<=p&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},wd:function(a){if(p){var b=a.style.width;a.style.width=0;a.style.width=b}},Pd:function(b,c){b=a.a.f(b);c=a.a.f(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},la:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Da:function(a){return h?Symbol(a):a},Zd:6===p,$d:7===p,W:p,Lc:function(b,c){for(var d=a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))),
e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},l=[],k=d.length-1;0<=k;k--)e(d[k])&&l.push(d[k]);return l},Nd:function(b){return"string"==typeof b&&(b=a.a.Db(b))?H&&H.parse?H.parse(b):(new Function("return "+b))():null},hc:function(b,c,d){if(!H||!H.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return H.stringify(a.a.f(b),c,d)},Od:function(c,d,e){e=e||{};var l=e.params||{},k=e.includeFields||this.Jc,f=c;if("object"==typeof c&&"form"===a.a.R(c))for(var f=c.action,h=k.length-1;0<=h;h--)for(var g=a.a.Lc(c,k[h]),m=g.length-1;0<=m;m--)l[g[m].name]=g[m].value;d=a.a.f(d);var p=w.createElement("form");p.style.display="none";p.action=f;p.method="post";for(var q in d)c=w.createElement("input"),c.type="hidden",c.name=q,c.value=a.a.hc(a.a.f(d[q])),p.appendChild(c);b(l,function(a,b){var c=w.createElement("input");
c.type="hidden";c.name=a;c.value=b;p.appendChild(c)});w.body.appendChild(p);e.submitter?e.submitter(p):p.submit();setTimeout(function(){p.parentNode.removeChild(p)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.D);a.b("utils.arrayFirst",a.a.Lb);a.b("utils.arrayFilter",a.a.jb);a.b("utils.arrayGetDistinctValues",a.a.wc);a.b("utils.arrayIndexOf",a.a.A);a.b("utils.arrayMap",a.a.Mb);a.b("utils.arrayPushAll",a.a.Nb);a.b("utils.arrayRemoveItem",a.a.Pa);a.b("utils.cloneNodes",a.a.Ca);a.b("utils.createSymbolOrString",
a.a.Da);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Jc);a.b("utils.getFormFields",a.a.Lc);a.b("utils.objectMap",a.a.Ga);a.b("utils.peekObservable",a.a.bc);a.b("utils.postJson",a.a.Od);a.b("utils.parseJson",a.a.Nd);a.b("utils.registerEventHandler",a.a.B);a.b("utils.stringifyJson",a.a.hc);a.b("utils.range",a.a.Pd);a.b("utils.toggleDomNodeCssClass",a.a.Eb);a.b("utils.triggerEvent",a.a.Fb);a.b("utils.unwrapObservable",a.a.f);a.b("utils.objectForEach",a.a.P);a.b("utils.addOrRemoveItem",
a.a.Na);a.b("utils.setTextContent",a.a.Bb);a.b("unwrap",a.a.f);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.g=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={},e,f;a.a.W?(e=function(a,e){var f=a[c];if(!f||"null"===f||!d[f]){if(!e)return n;f=a[c]="ko"+b++;d[f]=
{}}return d[f]},f=function(a){var b=a[c];return b?(delete d[b],a[c]=null,!0):!1}):(e=function(a,b){var d=a[c];!d&&b&&(d=a[c]={});return d},f=function(a){return a[c]?(delete a[c],!0):!1});return{get:function(a,b){var c=e(a,!1);return c&&c[b]},set:function(a,b,c){(a=e(a,c!==n))&&(a[b]=c)},Ub:function(a,b,c){a=e(a,!0);return a[b]||(a[b]=c)},clear:f,Z:function(){return b++ +c}}};a.b("utils.domData",a.a.g);a.b("utils.domData.clear",a.a.g.clear);a.a.K=new function(){function b(b,c){var d=a.a.g.get(b,e);
d===n&&c&&(d=[],a.a.g.set(b,e,d));return d}function c(c){var e=b(c,!1);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](c);a.a.g.clear(c);a.a.K.cleanExternalData(c);g[c.nodeType]&&d(c.childNodes,!0)}function d(b,d){for(var e=[],l,f=0;f<b.length;f++)if(!d||8===b[f].nodeType)if(c(e[e.length]=l=b[f]),b[f]!==l)for(;f--&&-1==a.a.A(e,b[f]););}var e=a.a.g.Z(),f={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{za:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},yb:function(c,
d){var f=b(c,!1);f&&(a.a.Pa(f,d),0==f.length&&a.a.g.set(c,e,n))},oa:function(b){a.u.G(function(){f[b.nodeType]&&(c(b),g[b.nodeType]&&d(b.getElementsByTagName("*")))});return b},removeNode:function(b){a.oa(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){v&&"function"==typeof v.cleanData&&v.cleanData([a])}}};a.oa=a.a.K.oa;a.removeNode=a.a.K.removeNode;a.b("cleanNode",a.oa);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.K);a.b("utils.domNodeDisposal.addDisposeCallback",
a.a.K.za);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.K.yb);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},g=8>=a.a.W;a.a.ua=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else{if((e=v.clean([c],d))&&e[0]){for(var l=e[0];l.parentNode&&11!==l.parentNode.nodeType;)l=l.parentNode;
l.parentNode&&l.parentNode.removeChild(l)}}else{(e=d)||(e=w);var l=e.parentWindow||e.defaultView||A,p=a.a.Db(c).toLowerCase(),q=e.createElement("div"),t;t=(p=p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/))&&f[p[1]]||b;p=t[0];t="ignored<div>"+t[1]+c+t[2]+"</div>";"function"==typeof l.innerShiv?q.appendChild(l.innerShiv(t)):(g&&e.body.appendChild(q),q.innerHTML=t,g&&q.parentNode.removeChild(q));for(;p--;)q=q.lastChild;e=a.a.la(q.lastChild.childNodes)}return e};a.a.Md=function(b,c){var d=a.a.ua(b,
c);return d.length&&d[0].parentElement||a.a.Yb(d)};a.a.fc=function(b,c){a.a.Tb(b);c=a.a.f(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ua(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.ua);a.b("utils.setHtml",a.a.fc);a.aa=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.aa.Uc(c.nodeValue);null!=f&&e.push({ud:c,Kd:f})}else if(1==c.nodeType)for(var f=0,g=c.childNodes,h=g.length;f<h;f++)b(g[f],
e)}var c={};return{Xb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},bd:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete c[a]}},cd:function(c,e){var f=
[];b(c,f);for(var g=0,h=f.length;g<h;g++){var m=f[g].ud,k=[m];e&&a.a.Nb(k,e);a.aa.bd(f[g].Kd,k);m.nodeValue="";m.parentNode&&m.parentNode.removeChild(m)}},Uc:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.aa);a.b("memoization.memoize",a.aa.Xb);a.b("memoization.unmemoize",a.aa.bd);a.b("memoization.parseMemoText",a.aa.Uc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.aa.cd);a.na=function(){function b(){if(f)for(var b=f,c=0,d;h<f;)if(d=e[h++]){if(h>b){if(5E3<=
++c){h=f;a.a.Gc(Error("'Too much recursion' after processing "+c+" task groups."));break}b=f}try{d()}catch(p){a.a.Gc(p)}}}function c(){b();h=f=e.length=0}var d,e=[],f=0,g=1,h=0;A.MutationObserver?d=function(a){var b=w.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo")}}(c):d=w&&"onreadystatechange"in w.createElement("script")?function(a){var b=w.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;w.documentElement.removeChild(b);
b=null;a()};w.documentElement.appendChild(b)}:function(a){setTimeout(a,0)};return{scheduler:d,zb:function(b){f||a.na.scheduler(c);e[f++]=b;return g++},cancel:function(a){a=a-(g-f);a>=h&&a<f&&(e[a]=null)},resetForTesting:function(){var a=f-h;h=f=e.length=0;return a},Sd:b}}();a.b("tasks",a.na);a.b("tasks.schedule",a.na.zb);a.b("tasks.runEarly",a.na.Sd);a.Ta={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.$({read:b,write:function(e){clearTimeout(d);d=a.a.setTimeout(function(){b(e)},
c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.Hb=!1;f="function"==typeof e?e:"notifyWhenChangesStop"==e?Y:X;a.ub(function(a){return f(a,d,c)})},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.Hb||(b.Hb=!0,b.ub(function(c){var e,f=!1;return function(){if(!f){a.na.cancel(e);e=a.na.zb(c);try{f=!0,b.notifySubscribers(n,"dirty")}finally{f=
!1}}}}))},notify:function(a,c){a.equalityComparer="always"==c?null:K}};var W={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Ta);a.ic=function(b,c,d){this.da=b;this.lc=c;this.mc=d;this.Ib=!1;this.fb=this.Jb=null;a.L(this,"dispose",this.s);a.L(this,"disposeWhenNodeIsRemoved",this.l)};a.ic.prototype.s=function(){this.Ib||(this.fb&&a.a.K.yb(this.Jb,this.fb),this.Ib=!0,this.mc(),this.da=this.lc=this.mc=this.Jb=this.fb=null)};a.ic.prototype.l=function(b){this.Jb=b;a.a.K.za(b,this.fb=this.s.bind(this))};
a.T=function(){a.a.Ab(this,D);D.qb(this)};var D={qb:function(a){a.U={change:[]};a.sc=1},subscribe:function(b,c,d){var e=this;d=d||"change";var f=new a.ic(e,c?b.bind(c):b,function(){a.a.Pa(e.U[d],f);e.hb&&e.hb(d)});e.Qa&&e.Qa(d);e.U[d]||(e.U[d]=[]);e.U[d].push(f);return f},notifySubscribers:function(b,c){c=c||"change";"change"===c&&this.Gb();if(this.Wa(c)){var d="change"===c&&this.ed||this.U[c].slice(0);try{a.u.xc();for(var e=0,f;f=d[e];++e)f.Ib||f.lc(b)}finally{a.u.end()}}},ob:function(){return this.sc},
Dd:function(a){return this.ob()!==a},Gb:function(){++this.sc},ub:function(b){var c=this,d=a.O(c),e,f,g,h,m;c.gb||(c.gb=c.notifySubscribers,c.notifySubscribers=Z);var k=b(function(){c.Ja=!1;d&&h===c&&(h=c.nc?c.nc():c());var a=f||m&&c.sb(g,h);m=f=e=!1;a&&c.gb(g=h)});c.qc=function(a,b){b&&c.Ja||(m=!b);c.ed=c.U.change.slice(0);c.Ja=e=!0;h=a;k()};c.pc=function(a){e||(g=a,c.gb(a,"beforeChange"))};c.rc=function(){m=!0};c.gd=function(){c.sb(g,c.v(!0))&&(f=!0)}},Wa:function(a){return this.U[a]&&this.U[a].length},
Bd:function(b){if(b)return this.U[b]&&this.U[b].length||0;var c=0;a.a.P(this.U,function(a,b){"dirty"!==a&&(c+=b.length)});return c},sb:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},toString:function(){return"[object Object]"},extend:function(b){var c=this;b&&a.a.P(b,function(b,e){var f=a.Ta[b];"function"==typeof f&&(c=f(c,e)||c)});return c}};a.L(D,"init",D.qb);a.L(D,"subscribe",D.subscribe);a.L(D,"extend",D.extend);a.L(D,"getSubscriptionsCount",D.Bd);a.a.Ba&&a.a.setPrototypeOf(D,
Function.prototype);a.T.fn=D;a.Qc=function(a){return null!=a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.T);a.b("isSubscribable",a.Qc);a.S=a.u=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{xc:b,end:c,cc:function(b){if(e){if(!a.Qc(b))throw Error("Only subscribable things can act as dependencies");e.od.call(e.pd,b,b.fd||(b.fd=++f))}},G:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},qa:function(){if(e)return e.o.qa()},
Va:function(){if(e)return e.o.Va()},Ya:function(){if(e)return e.Ya},o:function(){if(e)return e.o}}}();a.b("computedContext",a.S);a.b("computedContext.getDependenciesCount",a.S.qa);a.b("computedContext.getDependencies",a.S.Va);a.b("computedContext.isInitial",a.S.Ya);a.b("computedContext.registerDependency",a.S.cc);a.b("ignoreDependencies",a.Yd=a.u.G);var I=a.a.Da("_latestValue");a.ta=function(b){function c(){if(0<arguments.length)return c.sb(c[I],arguments[0])&&(c.ya(),c[I]=arguments[0],c.xa()),this;
a.u.cc(c);return c[I]}c[I]=b;a.a.Ba||a.a.extend(c,a.T.fn);a.T.fn.qb(c);a.a.Ab(c,F);a.options.deferUpdates&&a.Ta.deferred(c,!0);return c};var F={equalityComparer:K,v:function(){return this[I]},xa:function(){this.notifySubscribers(this[I],"spectate");this.notifySubscribers(this[I])},ya:function(){this.notifySubscribers(this[I],"beforeChange")}};a.a.Ba&&a.a.setPrototypeOf(F,a.T.fn);var G=a.ta.Ma="__ko_proto__";F[G]=a.ta;a.O=function(b){if((b="function"==typeof b&&b[G])&&b!==F[G]&&b!==a.o.fn[G])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
return!!b};a.Za=function(b){return"function"==typeof b&&(b[G]===F[G]||b[G]===a.o.fn[G]&&b.Nc)};a.b("observable",a.ta);a.b("isObservable",a.O);a.b("isWriteableObservable",a.Za);a.b("isWritableObservable",a.Za);a.b("observable.fn",F);a.L(F,"peek",F.v);a.L(F,"valueHasMutated",F.xa);a.L(F,"valueWillMutate",F.ya);a.Ha=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.ta(b);a.a.Ab(b,
a.Ha.fn);return b.extend({trackArrayChanges:!0})};a.Ha.fn={remove:function(b){for(var c=this.v(),d=[],e="function"!=typeof b||a.O(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];if(e(g)){0===d.length&&this.ya();if(c[f]!==g)throw Error("Array modified during remove; cannot remove item");d.push(g);c.splice(f,1);f--}}d.length&&this.xa();return d},removeAll:function(b){if(b===n){var c=this.v(),d=c.slice(0);this.ya();c.splice(0,c.length);this.xa();return d}return b?this.remove(function(c){return 0<=
a.a.A(b,c)}):[]},destroy:function(b){var c=this.v(),d="function"!=typeof b||a.O(b)?function(a){return a===b}:b;this.ya();for(var e=c.length-1;0<=e;e--){var f=c[e];d(f)&&(f._destroy=!0)}this.xa()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.A(b,c)}):[]},indexOf:function(b){var c=this();return a.a.A(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ya(),this.v()[d]=c,this.xa())},sorted:function(a){var c=this().slice(0);
return a?c.sort(a):c.sort()},reversed:function(){return this().slice(0).reverse()}};a.a.Ba&&a.a.setPrototypeOf(a.Ha.fn,a.ta.fn);a.a.D("pop push reverse shift sort splice unshift".split(" "),function(b){a.Ha.fn[b]=function(){var a=this.v();this.ya();this.zc(a,b,arguments);var d=a[b].apply(a,arguments);this.xa();return d===a?this:d}});a.a.D(["slice"],function(b){a.Ha.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.Pc=function(b){return a.O(b)&&"function"==typeof b.remove&&"function"==
typeof b.push};a.b("observableArray",a.Ha);a.b("isObservableArray",a.Pc);a.Ta.trackArrayChanges=function(b,c){function d(){function c(){if(m){var d=[].concat(b.v()||[]),e;if(b.Wa("arrayChange")){if(!f||1<m)f=a.a.Pb(k,d,b.Ob);e=f}k=d;f=null;m=0;e&&e.length&&b.notifySubscribers(e,"arrayChange")}}e?c():(e=!0,h=b.subscribe(function(){++m},null,"spectate"),k=[].concat(b.v()||[]),f=null,g=b.subscribe(c))}b.Ob={};c&&"object"==typeof c&&a.a.extend(b.Ob,c);b.Ob.sparse=!0;if(!b.zc){var e=!1,f=null,g,h,m=0,
k,l=b.Qa,p=b.hb;b.Qa=function(a){l&&l.call(b,a);"arrayChange"===a&&d()};b.hb=function(a){p&&p.call(b,a);"arrayChange"!==a||b.Wa("arrayChange")||(g&&g.s(),h&&h.s(),h=g=null,e=!1,k=n)};b.zc=function(b,c,d){function l(a,b,c){return k[k.length]={status:a,value:b,index:c}}if(e&&!m){var k=[],p=b.length,g=d.length,h=0;switch(c){case "push":h=p;case "unshift":for(c=0;c<g;c++)l("added",d[c],h+c);break;case "pop":h=p-1;case "shift":p&&l("deleted",b[h],h);break;case "splice":c=Math.min(Math.max(0,0>d[0]?p+d[0]:
d[0]),p);for(var p=1===g?p:Math.min(c+(d[1]||0),p),g=c+g-2,h=Math.max(p,g),U=[],L=[],n=2;c<h;++c,++n)c<p&&L.push(l("deleted",b[c],c)),c<g&&U.push(l("added",d[n],c));a.a.Kc(L,U);break;default:return}f=k}}}};var r=a.a.Da("_state");a.o=a.$=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.nb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}g.ra||
a.u.cc(e);(g.ka||g.J&&e.Xa())&&e.ha();return g.X}"object"===typeof b?d=b:(d=d||{},b&&(d.read=b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={X:n,sa:!0,ka:!0,rb:!1,jc:!1,ra:!1,wb:!1,J:!1,Wc:d.read,nb:c||d.owner,l:d.disposeWhenNodeIsRemoved||d.l||null,Sa:d.disposeWhen||d.Sa,Rb:null,I:{},V:0,Ic:null};e[r]=g;e.Nc="function"===typeof f;a.a.Ba||a.a.extend(e,a.T.fn);a.T.fn.qb(e);a.a.Ab(e,C);d.pure?(g.wb=!0,g.J=!0,a.a.extend(e,da)):
d.deferEvaluation&&a.a.extend(e,ea);a.options.deferUpdates&&a.Ta.deferred(e,!0);g.l&&(g.jc=!0,g.l.nodeType||(g.l=null));g.J||d.deferEvaluation||e.ha();g.l&&e.ja()&&a.a.K.za(g.l,g.Rb=function(){e.s()});return e};var C={equalityComparer:K,qa:function(){return this[r].V},Va:function(){var b=[];a.a.P(this[r].I,function(a,d){b[d.Ka]=d.da});return b},Vb:function(b){if(!this[r].V)return!1;var c=this.Va();return-1!==a.a.A(c,b)?!0:!!a.a.Lb(c,function(a){return a.Vb&&a.Vb(b)})},uc:function(a,c,d){if(this[r].wb&&
c===this)throw Error("A 'pure' computed must not be called recursively");this[r].I[a]=d;d.Ka=this[r].V++;d.La=c.ob()},Xa:function(){var a,c,d=this[r].I;for(a in d)if(Object.prototype.hasOwnProperty.call(d,a)&&(c=d[a],this.Ia&&c.da.Ja||c.da.Dd(c.La)))return!0},Jd:function(){this.Ia&&!this[r].rb&&this.Ia(!1)},ja:function(){var a=this[r];return a.ka||0<a.V},Rd:function(){this.Ja?this[r].ka&&(this[r].sa=!0):this.Hc()},$c:function(a){if(a.Hb){var c=a.subscribe(this.Jd,this,"dirty"),d=a.subscribe(this.Rd,
this);return{da:a,s:function(){c.s();d.s()}}}return a.subscribe(this.Hc,this)},Hc:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[r].Ic),this[r].Ic=a.a.setTimeout(function(){b.ha(!0)},c)):b.Ia?b.Ia(!0):b.ha(!0)},ha:function(b){var c=this[r],d=c.Sa,e=!1;if(!c.rb&&!c.ra){if(c.l&&!a.a.Sb(c.l)||d&&d()){if(!c.jc){this.s();return}}else c.jc=!1;c.rb=!0;try{e=this.zd(b)}finally{c.rb=!1}return e}},zd:function(b){var c=this[r],d=!1,e=c.wb?n:!c.V,d={qd:this,mb:c.I,Qb:c.V};a.u.xc({pd:d,
od:ba,o:this,Ya:e});c.I={};c.V=0;var f=this.yd(c,d);c.V?d=this.sb(c.X,f):(this.s(),d=!0);d&&(c.J?this.Gb():this.notifySubscribers(c.X,"beforeChange"),c.X=f,this.notifySubscribers(c.X,"spectate"),!c.J&&b&&this.notifySubscribers(c.X),this.rc&&this.rc());e&&this.notifySubscribers(c.X,"awake");return d},yd:function(b,c){try{var d=b.Wc;return b.nb?d.call(b.nb):d()}finally{a.u.end(),c.Qb&&!b.J&&a.a.P(c.mb,aa),b.sa=b.ka=!1}},v:function(a){var c=this[r];(c.ka&&(a||!c.V)||c.J&&this.Xa())&&this.ha();return c.X},
ub:function(b){a.T.fn.ub.call(this,b);this.nc=function(){this[r].J||(this[r].sa?this.ha():this[r].ka=!1);return this[r].X};this.Ia=function(a){this.pc(this[r].X);this[r].ka=!0;a&&(this[r].sa=!0);this.qc(this,!a)}},s:function(){var b=this[r];!b.J&&b.I&&a.a.P(b.I,function(a,b){b.s&&b.s()});b.l&&b.Rb&&a.a.K.yb(b.l,b.Rb);b.I=n;b.V=0;b.ra=!0;b.sa=!1;b.ka=!1;b.J=!1;b.l=n;b.Sa=n;b.Wc=n;this.Nc||(b.nb=n)}},da={Qa:function(b){var c=this,d=c[r];if(!d.ra&&d.J&&"change"==b){d.J=!1;if(d.sa||c.Xa())d.I=null,d.V=
0,c.ha()&&c.Gb();else{var e=[];a.a.P(d.I,function(a,b){e[b.Ka]=a});a.a.D(e,function(a,b){var e=d.I[a],m=c.$c(e.da);m.Ka=b;m.La=e.La;d.I[a]=m});c.Xa()&&c.ha()&&c.Gb()}d.ra||c.notifySubscribers(d.X,"awake")}},hb:function(b){var c=this[r];c.ra||"change"!=b||this.Wa("change")||(a.a.P(c.I,function(a,b){b.s&&(c.I[a]={da:b.da,Ka:b.Ka,La:b.La},b.s())}),c.J=!0,this.notifySubscribers(n,"asleep"))},ob:function(){var b=this[r];b.J&&(b.sa||this.Xa())&&this.ha();return a.T.fn.ob.call(this)}},ea={Qa:function(a){"change"!=
a&&"beforeChange"!=a||this.v()}};a.a.Ba&&a.a.setPrototypeOf(C,a.T.fn);var N=a.ta.Ma;C[N]=a.o;a.Oc=function(a){return"function"==typeof a&&a[N]===C[N]};a.Fd=function(b){return a.Oc(b)&&b[r]&&b[r].wb};a.b("computed",a.o);a.b("dependentObservable",a.o);a.b("isComputed",a.Oc);a.b("isPureComputed",a.Fd);a.b("computed.fn",C);a.L(C,"peek",C.v);a.L(C,"dispose",C.s);a.L(C,"isActive",C.ja);a.L(C,"getDependenciesCount",C.qa);a.L(C,"getDependencies",C.Va);a.xb=function(b,c){if("function"===typeof b)return a.o(b,
c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.o(b,c)};a.b("pureComputed",a.xb);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};g.save(a,h);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=d;break;case "object":case "undefined":var l=g.get(d);h[c]=l!==
n?l:b(d,f,g)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.values=[]}a.ad=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.O(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.ad(b);return a.a.hc(b,c,d)};d.prototype={constructor:d,save:function(b,c){var d=a.a.A(this.keys,
b);0<=d?this.values[d]=c:(this.keys.push(b),this.values.push(c))},get:function(b){b=a.a.A(this.keys,b);return 0<=b?this.values[b]:n}}})();a.b("toJS",a.ad);a.b("toJSON",a.toJSON);a.Wd=function(b,c,d){function e(c){var e=a.xb(b,d).extend({ma:"always"}),h=e.subscribe(function(a){a&&(h.s(),c(a))});e.notifySubscribers(e.v());return h}return"function"!==typeof Promise||c?e(c.bind(d)):new Promise(e)};a.b("when",a.Wd);(function(){a.w={M:function(b){switch(a.a.R(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?
a.a.g.get(b,a.c.options.$b):7>=a.a.W?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex]):n;default:return b.value}},cb:function(b,c,d){switch(a.a.R(b)){case "option":"string"===typeof c?(a.a.g.set(b,a.c.options.$b,n),"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__,b.value=c):(a.a.g.set(b,a.c.options.$b,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===
typeof c?c:"");break;case "select":if(""===c||null===c)c=n;for(var e=-1,f=0,g=b.options.length,h;f<g;++f)if(h=a.w.M(b.options[f]),h==c||""===h&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e,6===a.a.W&&a.a.setTimeout(function(){b.selectedIndex=e},0);break;default:if(null===c||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.w);a.b("selectExtensions.readValue",a.w.M);a.b("selectExtensions.writeValue",a.w.cb);a.m=function(){function b(b){b=a.a.Db(b);123===b.charCodeAt(0)&&(b=b.slice(1,
-1));b+="\n,";var c=[],d=b.match(e),p,q=[],h=0;if(1<d.length){for(var x=0,B;B=d[x];++x){var u=B.charCodeAt(0);if(44===u){if(0>=h){c.push(p&&q.length?{key:p,value:q.join("")}:{unknown:p||q.join("")});p=h=0;q=[];continue}}else if(58===u){if(!h&&!p&&1===q.length){p=q.pop();continue}}else if(47===u&&1<B.length&&(47===B.charCodeAt(1)||42===B.charCodeAt(1)))continue;else 47===u&&x&&1<B.length?(u=d[x-1].match(f))&&!g[u[0]]&&(b=b.substr(b.indexOf(B)+1),d=b.match(e),x=-1,B="/"):40===u||123===u||91===u?++h:
41===u||125===u||93===u?--h:p||q.length||34!==u&&39!==u||(B=B.slice(1,-1));q.push(B)}if(0<h)throw Error("Unbalanced parentheses, braces, or brackets");}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,g={"in":1,"return":1,"typeof":1},
h={};return{Ra:[],wa:h,ac:b,vb:function(e,f){function l(b,e){var f;if(!x){var k=a.getBindingHandler(b);if(k&&k.preprocess&&!(e=k.preprocess(e,b,l)))return;if(k=h[b])f=e,0<=a.a.A(c,f)?f=!1:(k=f.match(d),f=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:f),k=f;k&&q.push("'"+("string"==typeof h[b]?h[b]:b)+"':function(_z){"+f+"=_z}")}g&&(e="function(){return "+e+" }");p.push("'"+b+"':"+e)}f=f||{};var p=[],q=[],g=f.valueAccessors,x=f.bindingParams,B="string"===typeof e?b(e):e;a.a.D(B,function(a){l(a.key||a.unknown,
a.value)});q.length&&l("_ko_property_writers","{"+q.join(",")+" }");return p.join(",")},Id:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},eb:function(b,c,d,e,f){if(b&&a.O(b))!a.Za(b)||f&&b.v()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.m);a.b("expressionRewriting.bindingRewriteValidators",a.m.Ra);a.b("expressionRewriting.parseObjectLiteral",a.m.ac);a.b("expressionRewriting.preProcessBindings",a.m.vb);a.b("expressionRewriting._twoWayBindings",
a.m.wa);a.b("jsonExpressionRewriting",a.m);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.m.vb);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function d(d,e){for(var f=d,h=1,g=[];f=f.nextSibling;){if(c(f)&&(a.a.g.set(f,k,!0),h--,0===h))return g;g.push(f);b(f)&&h++}if(!e)throw Error("Cannot find closing comment tag to match: "+d.nodeValue);return null}function e(a,b){var c=d(a,b);return c?
0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,m={ul:!0,ol:!0},k="__ko_matchedEndComment__";a.h={ea:{},childNodes:function(a){return b(a)?d(a):a.childNodes},Ea:function(c){if(b(c)){c=a.h.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Tb(c)},va:function(c,d){if(b(c)){a.h.Ea(c);for(var e=
c.nextSibling,f=0,k=d.length;f<k;f++)e.parentNode.insertBefore(d[f],e)}else a.a.va(c,d)},Vc:function(a,c){var d;b(a)?(d=a.nextSibling,a=a.parentNode):d=a.firstChild;d?c!==d&&a.insertBefore(c,d):a.appendChild(c)},Wb:function(c,d,e){e?(e=e.nextSibling,b(c)&&(c=c.parentNode),e?d!==e&&c.insertBefore(d,e):c.appendChild(d)):a.h.Vc(c,d)},firstChild:function(a){if(b(a))return!a.nextSibling||c(a.nextSibling)?null:a.nextSibling;if(a.firstChild&&c(a.firstChild))throw Error("Found invalid end comment, as the first child of "+
a);return a.firstChild},nextSibling:function(d){b(d)&&(d=e(d));if(d.nextSibling&&c(d.nextSibling)){var f=d.nextSibling;if(c(f)&&!a.a.g.get(f,k))throw Error("Found end comment without a matching opening comment, as child of "+d);return null}return d.nextSibling},Cd:b,Vd:function(a){return(a=(f?a.text:a.nodeValue).match(g))?a[1]:null},Sc:function(d){if(m[a.a.R(d)]){var f=d.firstChild;if(f){do if(1===f.nodeType){var k;k=f.firstChild;var h=null;if(k){do if(h)h.push(k);else if(b(k)){var g=e(k,!0);g?k=
g:h=[k]}else c(k)&&(h=[k]);while(k=k.nextSibling)}if(k=h)for(h=f.nextSibling,g=0;g<k.length;g++)h?d.insertBefore(k[g],h):d.appendChild(k[g])}while(f=f.nextSibling)}}}}})();a.b("virtualElements",a.h);a.b("virtualElements.allowedBindings",a.h.ea);a.b("virtualElements.emptyNode",a.h.Ea);a.b("virtualElements.insertAfter",a.h.Wb);a.b("virtualElements.prepend",a.h.Vc);a.b("virtualElements.setDomNodeChildren",a.h.va);(function(){a.ga=function(){this.nd={}};a.a.extend(a.ga.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
b.getAttribute("data-bind")||a.j.getComponentNameForNode(b);case 8:return a.h.Cd(b);default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.j.tc(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.j.tc(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.h.Vd(b);default:return null}},
parseBindingsString:function(b,c,d,e){try{var f=this.nd,g=b+(e&&e.valueAccessors||""),h;if(!(h=f[g])){var m,k="with($context){with($data||{}){return{"+a.m.vb(b,e)+"}}}";m=new Function("$context","$element",k);h=f[g]=m}return h(c,d)}catch(l){throw l.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+l.message,l;}}});a.ga.instance=new a.ga})();a.b("bindingProvider",a.ga);(function(){function b(b){var c=(b=a.a.g.get(b,z))&&b.N;c&&(b.N=null,c.Tc())}function c(c,d,e){this.node=c;this.yc=
d;this.kb=[];this.H=!1;d.N||a.a.K.za(c,b);e&&e.N&&(e.N.kb.push(c),this.Kb=e)}function d(a){return function(){return a}}function e(a){return a()}function f(b){return a.a.Ga(a.u.G(b),function(a,c){return function(){return b()[c]}})}function g(b,c,e){return"function"===typeof b?f(b.bind(null,c,e)):a.a.Ga(b,d)}function h(a,b){return f(this.getBindings.bind(this,a,b))}function m(b,c){var d=a.h.firstChild(c);if(d){var e,f=a.ga.instance,l=f.preprocessNode;if(l){for(;e=d;)d=a.h.nextSibling(e),l.call(f,e);
d=a.h.firstChild(c)}for(;e=d;)d=a.h.nextSibling(e),k(b,e)}a.i.ma(c,a.i.H)}function k(b,c){var d=b,e=1===c.nodeType;e&&a.h.Sc(c);if(e||a.ga.instance.nodeHasBindings(c))d=p(c,null,b).bindingContextForDescendants;d&&!u[a.a.R(c)]&&m(d,c)}function l(b){var c=[],d={},e=[];a.a.P(b,function ca(f){if(!d[f]){var k=a.getBindingHandler(f);k&&(k.after&&(e.push(f),a.a.D(k.after,function(c){if(b[c]){if(-1!==a.a.A(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));
ca(c)}}),e.length--),c.push({key:f,Mc:k}));d[f]=!0}});return c}function p(b,c,d){var f=a.a.g.Ub(b,z,{}),k=f.hd;if(!c){if(k)throw Error("You cannot apply bindings multiple times to the same element.");f.hd=!0}k||(f.context=d);f.Zb||(f.Zb={});var g;if(c&&"function"!==typeof c)g=c;else{var p=a.ga.instance,q=p.getBindingAccessors||h,m=a.$(function(){if(g=c?c(d,b):q.call(p,b,d)){if(d[t])d[t]();if(d[B])d[B]()}return g},null,{l:b});g&&m.ja()||(m=null)}var x=d,u;if(g){var J=function(){return a.a.Ga(m?m():
g,e)},r=m?function(a){return function(){return e(m()[a])}}:function(a){return g[a]};J.get=function(a){return g[a]&&e(r(a))};J.has=function(a){return a in g};a.i.H in g&&a.i.subscribe(b,a.i.H,function(){var c=(0,g[a.i.H])();if(c){var d=a.h.childNodes(b);d.length&&c(d,a.Ec(d[0]))}});a.i.pa in g&&(x=a.i.Cb(b,d),a.i.subscribe(b,a.i.pa,function(){var c=(0,g[a.i.pa])();c&&a.h.firstChild(b)&&c(b)}));f=l(g);a.a.D(f,function(c){var d=c.Mc.init,e=c.Mc.update,f=c.key;if(8===b.nodeType&&!a.h.ea[f])throw Error("The binding '"+
f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.u.G(function(){var a=d(b,r(f),J,x.$data,x);if(a&&a.controlsDescendantBindings){if(u!==n)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof e&&a.$(function(){e(b,r(f),J,x.$data,x)},null,{l:b})}catch(k){throw k.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+k.message,
k;}})}f=u===n;return{shouldBindDescendants:f,bindingContextForDescendants:f&&x}}function q(b,c){return b&&b instanceof a.fa?b:new a.fa(b,n,n,c)}var t=a.a.Da("_subscribable"),x=a.a.Da("_ancestorBindingInfo"),B=a.a.Da("_dataDependency");a.c={};var u={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.c[b]};var J={};a.fa=function(b,c,d,e,f){function k(){var b=p?h():h,f=a.a.f(b);c?(a.a.extend(l,c),x in c&&(l[x]=c[x])):(l.$parents=[],l.$root=f,l.ko=a);l[t]=q;g?f=l.$data:(l.$rawData=
b,l.$data=f);d&&(l[d]=f);e&&e(l,c,f);if(c&&c[t]&&!a.S.o().Vb(c[t]))c[t]();m&&(l[B]=m);return l.$data}var l=this,g=b===J,h=g?n:b,p="function"==typeof h&&!a.O(h),q,m=f&&f.dataDependency;f&&f.exportDependencies?k():(q=a.xb(k),q.v(),q.ja()?q.equalityComparer=null:l[t]=n)};a.fa.prototype.createChildContext=function(b,c,d,e){!e&&c&&"object"==typeof c&&(e=c,c=e.as,d=e.extend);if(c&&e&&e.noChildContext){var f="function"==typeof b&&!a.O(b);return new a.fa(J,this,null,function(a){d&&d(a);a[c]=f?b():b},e)}return new a.fa(b,
this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)},e)};a.fa.prototype.extend=function(b,c){return new a.fa(J,this,null,function(c){a.a.extend(c,"function"==typeof b?b(c):b)},c)};var z=a.a.g.Z();c.prototype.Tc=function(){this.Kb&&this.Kb.N&&this.Kb.N.sd(this.node)};c.prototype.sd=function(b){a.a.Pa(this.kb,b);!this.kb.length&&this.H&&this.Cc()};c.prototype.Cc=function(){this.H=!0;this.yc.N&&!this.kb.length&&(this.yc.N=
null,a.a.K.yb(this.node,b),a.i.ma(this.node,a.i.pa),this.Tc())};a.i={H:"childrenComplete",pa:"descendantsComplete",subscribe:function(b,c,d,e,f){var k=a.a.g.Ub(b,z,{});k.Fa||(k.Fa=new a.T);f&&f.notifyImmediately&&k.Zb[c]&&a.u.G(d,e,[b]);return k.Fa.subscribe(d,e,c)},ma:function(b,c){var d=a.a.g.get(b,z);if(d&&(d.Zb[c]=!0,d.Fa&&d.Fa.notifySubscribers(b,c),c==a.i.H))if(d.N)d.N.Cc();else if(d.N===n&&d.Fa&&d.Fa.Wa(a.i.pa))throw Error("descendantsComplete event not supported for bindings on this node");
},Cb:function(b,d){var e=a.a.g.Ub(b,z,{});e.N||(e.N=new c(b,e,d[x]));return d[x]==e?d:d.extend(function(a){a[x]=e})}};a.Td=function(b){return(b=a.a.g.get(b,z))&&b.context};a.ib=function(b,c,d){1===b.nodeType&&a.h.Sc(b);return p(b,c,q(d))};a.ld=function(b,c,d){d=q(d);return a.ib(b,g(c,d,b),d)};a.Oa=function(a,b){1!==b.nodeType&&8!==b.nodeType||m(q(a),b)};a.vc=function(a,b,c){!v&&A.jQuery&&(v=A.jQuery);if(2>arguments.length){if(b=w.body,!b)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
}else if(!b||1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");k(q(a,c),b)};a.Dc=function(b){return!b||1!==b.nodeType&&8!==b.nodeType?n:a.Td(b)};a.Ec=function(b){return(b=a.Dc(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("bindingEvent",a.i);a.b("bindingEvent.subscribe",a.i.subscribe);a.b("bindingEvent.startPossiblyAsyncContentBinding",a.i.Cb);a.b("applyBindings",a.vc);a.b("applyBindingsToDescendants",a.Oa);
a.b("applyBindingAccessorsToNode",a.ib);a.b("applyBindingsToNode",a.ld);a.b("contextFor",a.Dc);a.b("dataFor",a.Ec)})();(function(b){function c(c,e){var k=Object.prototype.hasOwnProperty.call(f,c)?f[c]:b,l;k?k.subscribe(e):(k=f[c]=new a.T,k.subscribe(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Gd:e};delete f[c];l||e?k.notifySubscribers(b):a.na.zb(function(){k.notifySubscribers(b)})}),l=!0)}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,
c)}):b(null,null)})}function e(c,d,f,l){l||(l=a.j.loaders.slice(0));var g=l.shift();if(g){var q=g[c];if(q){var t=!1;if(q.apply(g,d.concat(function(a){t?f(null):null!==a?f(a):e(c,d,f,l)}))!==b&&(t=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,l)}else f(null)}var f={},g={};a.j={get:function(d,e){var f=Object.prototype.hasOwnProperty.call(g,d)?g[d]:b;f?f.Gd?a.u.G(function(){e(f.definition)}):
a.na.zb(function(){e(f.definition)}):c(d,e)},Bc:function(a){delete g[a]},oc:e};a.j.loaders=[];a.b("components",a.j);a.b("components.get",a.j.get);a.b("components.clearCachedDefinition",a.j.Bc)})();(function(){function b(b,c,d,e){function g(){0===--B&&e(h)}var h={},B=2,u=d.template;d=d.viewModel;u?f(c,u,function(c){a.j.oc("loadTemplate",[b,c],function(a){h.template=a;g()})}):g();d?f(c,d,function(c){a.j.oc("loadViewModel",[b,c],function(a){h[m]=a;g()})}):g()}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});
else if("function"===typeof b[m])d(b[m]);else if("instance"in b){var e=b.instance;d(function(){return e})}else"viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b)}function d(b){switch(a.a.R(b)){case "script":return a.a.ua(b.text);case "textarea":return a.a.ua(b.value);case "template":if(e(b.content))return a.a.Ca(b.content.childNodes)}return a.a.Ca(b.childNodes)}function e(a){return A.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?
T||A.require?(T||A.require)([b.require],function(a){a&&"object"===typeof a&&a.Xd&&a["default"]&&(a=a["default"]);c(a)}):a("Uses require, but no AMD loader is present"):c(b)}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.j.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.j.tb(b))throw Error("Component "+b+" is already registered");h[b]=c};a.j.tb=function(a){return Object.prototype.hasOwnProperty.call(h,a)};a.j.unregister=function(b){delete h[b];
a.j.Bc(b)};a.j.Fc={getConfig:function(b,c){c(a.j.tb(b)?h[b]:null)},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.ua(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.la(c.childNodes));else if(c.element)if(c=c.element,A.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var h=w.getElementById(c);h?f(d(h)):b("Cannot find element with ID "+c)}else b("Unknown element type: "+
c);else b("Unknown template value: "+c)},loadViewModel:function(a,b,d){c(g(a),b,d)}};var m="createViewModel";a.b("components.register",a.j.register);a.b("components.isRegistered",a.j.tb);a.b("components.unregister",a.j.unregister);a.b("components.defaultLoader",a.j.Fc);a.j.loaders.push(a.j.Fc);a.j.dd=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ga(f,function(c){return a.o(c,null,{l:b})}),g=a.a.Ga(f,
function(c){var e=c.v();return c.ja()?a.o({read:function(){return a.a.f(c())},write:a.Za(e)&&function(a){c()(a)},l:b}):e});Object.prototype.hasOwnProperty.call(g,"$raw")||(g.$raw=f);return g}return{$raw:{}}}a.j.getComponentNameForNode=function(b){var c=a.a.R(b);if(a.j.tb(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.W&&b.tagName===c))return c};a.j.tc=function(c,e,f,g){if(1===e.nodeType){var h=a.j.getComponentNameForNode(e);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
var m={name:h,params:b(e,f)};c.component=g?function(){return m}:m}}return c};var c=new a.ga;9>a.a.W&&(a.j.register=function(a){return function(b){return a.apply(this,arguments)}}(a.j.register),w.createDocumentFragment=function(b){return function(){var c=b(),f=a.j.dd,g;for(g in f);return c}}(w.createDocumentFragment))})();(function(){function b(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.Ca(c);a.h.va(d,b)}function c(a,b,c){var d=a.createViewModel;return d?d.call(a,
b,c):b}var d=0;a.c.component={init:function(e,f,g,h,m){function k(){var a=l&&l.dispose;"function"===typeof a&&a.call(l);q&&q.s();p=l=q=null}var l,p,q,t=a.a.la(a.h.childNodes(e));a.h.Ea(e);a.a.K.za(e,k);a.o(function(){var g=a.a.f(f()),h,u;"string"===typeof g?h=g:(h=a.a.f(g.name),u=a.a.f(g.params));if(!h)throw Error("No component name specified");var n=a.i.Cb(e,m),z=p=++d;a.j.get(h,function(d){if(p===z){k();if(!d)throw Error("Unknown component '"+h+"'");b(h,d,e);var f=c(d,u,{element:e,templateNodes:t});
d=n.createChildContext(f,{extend:function(a){a.$component=f;a.$componentTemplateNodes=t}});f&&f.koDescendantsComplete&&(q=a.i.subscribe(e,a.i.pa,f.koDescendantsComplete,f));l=f;a.Oa(d,e)}})},null,{l:e});return{controlsDescendantBindings:!0}}};a.h.ea.component=!0})();var V={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.f(c())||{};a.a.P(d,function(c,d){d=a.a.f(d);var g=c.indexOf(":"),g="lookupNamespaceURI"in b&&0<g&&b.lookupNamespaceURI(c.substr(0,g)),h=!1===d||null===
d||d===n;h?g?b.removeAttributeNS(g,c):b.removeAttribute(c):d=d.toString();8>=a.a.W&&c in V?(c=V[c],h?b.removeAttribute(c):b[c]=d):h||(g?b.setAttributeNS(g,c,d):b.setAttribute(c,d));"name"===c&&a.a.Yc(b,h?"":d)})}};(function(){a.c.checked={after:["value","attr"],init:function(b,c,d){function e(){var e=b.checked,f=g();if(!a.S.Ya()&&(e||!m&&!a.S.qa())){var k=a.u.G(c);if(l){var q=p?k.v():k,z=t;t=f;z!==f?e&&(a.a.Na(q,f,!0),a.a.Na(q,z,!1)):a.a.Na(q,f,e);p&&a.Za(k)&&k(q)}else h&&(f===n?f=e:e||(f=n)),a.m.eb(k,
d,"checked",f,!0)}}function f(){var d=a.a.f(c()),e=g();l?(b.checked=0<=a.a.A(d,e),t=e):b.checked=h&&e===n?!!d:g()===d}var g=a.xb(function(){if(d.has("checkedValue"))return a.a.f(d.get("checkedValue"));if(q)return d.has("value")?a.a.f(d.get("value")):b.value}),h="checkbox"==b.type,m="radio"==b.type;if(h||m){var k=c(),l=h&&a.a.f(k)instanceof Array,p=!(l&&k.push&&k.splice),q=m||l,t=l?g():n;m&&!b.name&&a.c.uniqueName.init(b,function(){return!0});a.o(e,null,{l:b});a.a.B(b,"click",e);a.o(f,null,{l:b});
k=n}}};a.m.wa.checked=!0;a.c.checkedValue={update:function(b,c){b.value=a.a.f(c())}}})();a.c["class"]={update:function(b,c){var d=a.a.Db(a.a.f(c()));a.a.Eb(b,b.__ko__cssValue,!1);b.__ko__cssValue=d;a.a.Eb(b,d,!0)}};a.c.css={update:function(b,c){var d=a.a.f(c());null!==d&&"object"==typeof d?a.a.P(d,function(c,d){d=a.a.f(d);a.a.Eb(b,c,d)}):a.c["class"].update(b,c)}};a.c.enable={update:function(b,c){var d=a.a.f(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.c.disable=
{update:function(b,c){a.c.enable.update(b,function(){return!a.a.f(c())})}};a.c.event={init:function(b,c,d,e,f){var g=c()||{};a.a.P(g,function(g){"string"==typeof g&&a.a.B(b,g,function(b){var k,l=c()[g];if(l){try{var p=a.a.la(arguments);e=f.$data;p.unshift(e);k=l.apply(e,p)}finally{!0!==k&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.c.foreach={Rc:function(b){return function(){var c=b(),d=a.a.bc(c);
if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.ba.Ma};a.a.f(c);return{foreach:d.data,as:d.as,noChildContext:d.noChildContext,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.ba.Ma}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.Rc(c))},update:function(b,c,d,e,f){return a.c.template.update(b,a.c.foreach.Rc(c),d,e,f)}};a.m.Ra.foreach=!1;a.h.ea.foreach=
!0;a.c.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(l){g=f.body}e=g===b}f=c();a.m.eb(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.B(b,"focus",f);a.a.B(b,"focusin",f);a.a.B(b,"blur",g);a.a.B(b,"focusout",g);b.__ko_hasfocusLastValue=!1},update:function(b,c){var d=!!a.a.f(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===
d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.u.G(a.a.Fb,null,[b,d?"focusin":"focusout"]))}};a.m.wa.hasfocus=!0;a.c.hasFocus=a.c.hasfocus;a.m.wa.hasFocus="hasfocus";a.c.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.fc(b,c())}};(function(){function b(b,d,e){a.c[b]={init:function(b,c,h,m,k){var l,p,q={},t,x,n;if(d){m=h.get("as");var u=h.get("noChildContext");n=!(m&&u);q={as:m,noChildContext:u,exportDependencies:n}}x=(t=
"render"==h.get("completeOn"))||h.has(a.i.pa);a.o(function(){var h=a.a.f(c()),m=!e!==!h,u=!p,r;if(n||m!==l){x&&(k=a.i.Cb(b,k));if(m){if(!d||n)q.dataDependency=a.S.o();r=d?k.createChildContext("function"==typeof h?h:c,q):a.S.qa()?k.extend(null,q):k}u&&a.S.qa()&&(p=a.a.Ca(a.h.childNodes(b),!0));m?(u||a.h.va(b,a.a.Ca(p)),a.Oa(r,b)):(a.h.Ea(b),t||a.i.ma(b,a.i.H));l=m}},null,{l:b});return{controlsDescendantBindings:!0}}};a.m.Ra[b]=!1;a.h.ea[b]=!0}b("if");b("ifnot",!1,!0);b("with",!0)})();a.c.let={init:function(b,
c,d,e,f){c=f.extend(c);a.Oa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.let=!0;var Q={};a.c.options={init:function(b){if("select"!==a.a.R(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.jb(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(c,d){if(x&&l)a.i.ma(b,a.i.H);else if(t.length){var e=
0<=a.a.A(t,a.w.M(d[0]));a.a.Zc(d[0],e);x&&!e&&a.u.G(a.a.Fb,null,[b,"change"])}}var h=b.multiple,m=0!=b.length&&h?b.scrollTop:null,k=a.a.f(c()),l=d.get("valueAllowUnset")&&d.has("value"),p=d.get("optionsIncludeDestroyed");c={};var q,t=[];l||(h?t=a.a.Mb(e(),a.w.M):0<=b.selectedIndex&&t.push(a.w.M(b.options[b.selectedIndex])));k&&("undefined"==typeof k.length&&(k=[k]),q=a.a.jb(k,function(b){return p||b===n||null===b||!a.a.f(b._destroy)}),d.has("optionsCaption")&&(k=a.a.f(d.get("optionsCaption")),null!==
k&&k!==n&&q.unshift(Q)));var x=!1;c.beforeRemove=function(a){b.removeChild(a)};k=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(k=function(b,c){g(0,c);a.u.G(d.get("optionsAfterRender"),null,[c[0],b!==Q?b:n])});a.a.ec(b,q,function(c,e,g){g.length&&(t=!l&&g[0].selected?[a.w.M(g[0])]:[],x=!0);e=b.ownerDocument.createElement("option");c===Q?(a.a.Bb(e,d.get("optionsCaption")),a.w.cb(e,n)):(g=f(c,d.get("optionsValue"),c),a.w.cb(e,a.a.f(g)),c=f(c,d.get("optionsText"),g),
a.a.Bb(e,c));return[e]},c,k);if(!l){var B;h?B=t.length&&e().length<t.length:B=t.length&&0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex])!==t[0]:t.length||0<=b.selectedIndex;B&&a.u.G(a.a.Fb,null,[b,"change"])}(l||a.S.Ya())&&a.i.ma(b,a.i.H);a.a.wd(b);m&&20<Math.abs(m-b.scrollTop)&&(b.scrollTop=m)}};a.c.options.$b=a.a.g.Z();a.c.selectedOptions={init:function(b,c,d){function e(){var e=c(),f=[];a.a.D(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.w.M(b))});a.m.eb(e,d,"selectedOptions",
f)}function f(){var d=a.a.f(c()),e=b.scrollTop;d&&"number"==typeof d.length&&a.a.D(b.getElementsByTagName("option"),function(b){var c=0<=a.a.A(d,a.w.M(b));b.selected!=c&&a.a.Zc(b,c)});b.scrollTop=e}if("select"!=a.a.R(b))throw Error("selectedOptions binding applies only to SELECT elements");var g;a.i.subscribe(b,a.i.H,function(){g?e():(a.a.B(b,"change",e),g=a.o(f,null,{l:b}))},null,{notifyImmediately:!0})},update:function(){}};a.m.wa.selectedOptions=!0;a.c.style={update:function(b,c){var d=a.a.f(c()||
{});a.a.P(d,function(c,d){d=a.a.f(d);if(null===d||d===n||!1===d)d="";if(v)v(b).css(c,d);else if(/^--/.test(c))b.style.setProperty(c,d);else{c=c.replace(/-(\w)/g,function(a,b){return b.toUpperCase()});var g=b.style[c];b.style[c]=d;d===g||b.style[c]!=g||isNaN(d)||(b.style[c]=d+"px")}})}};a.c.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.B(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?
a.preventDefault():a.returnValue=!1)}})}};a.c.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Bb(b,c())}};a.h.ea.text=!0;(function(){if(A&&A.navigator){var b=function(a){if(a)return parseFloat(a[1])},c=A.navigator.userAgent,d,e,f,g,h;(d=A.opera&&A.opera.version&&parseInt(A.opera.version()))||(h=b(c.match(/Edge\/([^ ]+)$/)))||b(c.match(/Chrome\/([^ ]+)/))||(e=b(c.match(/Version\/([^ ]+) Safari/)))||(f=b(c.match(/Firefox\/([^ ]+)/)))||(g=a.a.W||b(c.match(/MSIE ([^ ]+)/)))||
(g=b(c.match(/rv:([^ )]+)/)))}if(8<=g&&10>g)var m=a.a.g.Z(),k=a.a.g.Z(),l=function(b){var c=this.activeElement;(c=c&&a.a.g.get(c,k))&&c(b)},p=function(b,c){var d=b.ownerDocument;a.a.g.get(d,m)||(a.a.g.set(d,m,!0),a.a.B(d,"selectionchange",l));a.a.g.set(b,k,c)};a.c.textInput={init:function(b,c,k){function l(c,d){a.a.B(b,c,d)}function m(){var d=a.a.f(c());if(null===d||d===n)d="";L!==n&&d===L?a.a.setTimeout(m,4):b.value!==d&&(y=!0,b.value=d,y=!1,v=b.value)}function r(){w||(L=b.value,w=a.a.setTimeout(z,
4))}function z(){clearTimeout(w);L=w=n;var d=b.value;v!==d&&(v=d,a.m.eb(c(),k,"textInput",d))}var v=b.value,w,L,A=9==a.a.W?r:z,y=!1;g&&l("keypress",z);11>g&&l("propertychange",function(a){y||"value"!==a.propertyName||A(a)});8==g&&(l("keyup",z),l("keydown",z));p&&(p(b,A),l("dragend",r));(!g||9<=g)&&l("input",A);5>e&&"textarea"===a.a.R(b)?(l("keydown",r),l("paste",r),l("cut",r)):11>d?l("keydown",r):4>f?(l("DOMAutoComplete",z),l("dragdrop",z),l("drop",z)):h&&"number"===b.type&&l("keydown",r);l("change",
z);l("blur",z);a.o(m,null,{l:b})}};a.m.wa.textInput=!0;a.c.textinput={preprocess:function(a,b,c){c("textInput",a)}}})();a.c.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.c.uniqueName.rd;a.a.Yc(b,d)}}};a.c.uniqueName.rd=0;a.c.using={init:function(b,c,d,e,f){var g;d.has("as")&&(g={as:d.get("as"),noChildContext:d.get("noChildContext")});c=f.createChildContext(c,g);a.Oa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.using=!0;a.c.value={init:function(b,c,d){var e=a.a.R(b),f="input"==
e;if(!f||"checkbox"!=b.type&&"radio"!=b.type){var g=[],h=d.get("valueUpdate"),m=!1,k=null;h&&("string"==typeof h?g=[h]:g=a.a.wc(h),a.a.Pa(g,"change"));var l=function(){k=null;m=!1;var e=c(),f=a.w.M(b);a.m.eb(e,d,"value",f)};!a.a.W||!f||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.A(g,"propertychange")||(a.a.B(b,"propertychange",function(){m=!0}),a.a.B(b,"focus",function(){m=!1}),a.a.B(b,"blur",function(){m&&l()}));a.a.D(g,function(c){var d=l;a.a.Ud(c,"after")&&
(d=function(){k=a.w.M(b);a.a.setTimeout(l,0)},c=c.substring(5));a.a.B(b,c,d)});var p;p=f&&"file"==b.type?function(){var d=a.a.f(c());null===d||d===n||""===d?b.value="":a.u.G(l)}:function(){var f=a.a.f(c()),g=a.w.M(b);if(null!==k&&f===k)a.a.setTimeout(p,0);else if(f!==g||g===n)"select"===e?(g=d.get("valueAllowUnset"),a.w.cb(b,f,g),g||f===a.w.M(b)||a.u.G(l)):a.w.cb(b,f)};if("select"===e){var q;a.i.subscribe(b,a.i.H,function(){q?d.get("valueAllowUnset")?p():l():(a.a.B(b,"change",l),q=a.o(p,null,{l:b}))},
null,{notifyImmediately:!0})}else a.a.B(b,"change",l),a.o(p,null,{l:b})}else a.ib(b,{checkedValue:c})},update:function(){}};a.m.wa.value=!0;a.c.visible={update:function(b,c){var d=a.a.f(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};a.c.hidden={update:function(b,c){a.c.visible.update(b,function(){return!a.a.f(c())})}};(function(b){a.c[b]={init:function(c,d,e,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})("click");
a.ca=function(){};a.ca.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.ca.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.ca.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.C.F(d)}if(1==b.nodeType||8==b.nodeType)return new a.C.ia(b);throw Error("Unknown template type: "+b);};a.ca.prototype.renderTemplate=
function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d,e)};a.ca.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.ca.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.ca);a.kc=function(){function b(b,c,d,h){b=a.m.ac(b);for(var m=a.m.Ra,k=0;k<b.length;k++){var l=b[k].key;if(Object.prototype.hasOwnProperty.call(m,
l)){var p=m[l];if("function"===typeof p){if(l=p(b[k].value))throw Error(l);}else if(!p)throw Error("This template engine does not support the '"+l+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.m.vb(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{xd:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.kc.Ld(b,c)},d)},Ld:function(a,f){return a.replace(c,function(a,c,d,e,l){return b(l,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},md:function(b,c){return a.aa.Xb(function(d,h){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.ib(m,b,h)})}}}();a.b("__tr_ambtns",a.kc.md);(function(){a.C={};a.C.F=function(b){if(this.F=b){var c=
a.a.R(b);this.ab="script"===c?1:"textarea"===c?2:"template"==c&&b.content&&11===b.content.nodeType?3:4}};a.C.F.prototype.text=function(){var b=1===this.ab?"text":2===this.ab?"value":"innerHTML";if(0==arguments.length)return this.F[b];var c=arguments[0];"innerHTML"===b?a.a.fc(this.F,c):this.F[b]=c};var b=a.a.g.Z()+"_";a.C.F.prototype.data=function(c){if(1===arguments.length)return a.a.g.get(this.F,b+c);a.a.g.set(this.F,b+c,arguments[1])};var c=a.a.g.Z();a.C.F.prototype.nodes=function(){var b=this.F;
if(0==arguments.length){var e=a.a.g.get(b,c)||{},f=e.lb||(3===this.ab?b.content:4===this.ab?b:n);if(!f||e.jd){var g=this.text();g&&g!==e.bb&&(f=a.a.Md(g,b.ownerDocument),a.a.g.set(b,c,{lb:f,bb:g,jd:!0}))}return f}e=arguments[0];this.ab!==n&&this.text("");a.a.g.set(b,c,{lb:e})};a.C.ia=function(a){this.F=a};a.C.ia.prototype=new a.C.F;a.C.ia.prototype.constructor=a.C.ia;a.C.ia.prototype.text=function(){if(0==arguments.length){var b=a.a.g.get(this.F,c)||{};b.bb===n&&b.lb&&(b.bb=b.lb.innerHTML);return b.bb}a.a.g.set(this.F,
c,{bb:arguments[0]})};a.b("templateSources",a.C);a.b("templateSources.domElement",a.C.F);a.b("templateSources.anonymousTemplate",a.C.ia)})();(function(){function b(b,c,d){var e;for(c=a.h.nextSibling(c);b&&(e=b)!==c;)b=a.h.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,h=a.ga.instance,m=h.preprocessNode;if(m){b(e,f,function(a,b){var c=a.previousSibling,d=m.call(h,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):
(c.push(e,f),a.a.Ua(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.vc(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.aa.cd(b,[d])});a.a.Ua(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,m){m=m||{};var n=(b&&d(b)||f||{}).ownerDocument,B=m.templateEngine||g;a.kc.xd(f,B,n);f=B.renderTemplate(f,h,m,n);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.h.va(b,
f);n=!0;break;case "replaceNode":a.a.Xc(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(c(f,h),m.afterRender&&a.u.G(m.afterRender,null,[f,h[m.as||"$data"]]),"replaceChildren"==e&&a.i.ma(b,a.i.H));return f}function f(b,c,d){return a.O(b)?b():"function"===typeof b?b(c,d):b}var g;a.gc=function(b){if(b!=n&&!(b instanceof a.ca))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.dc=function(b,c,h,m,t){h=h||{};if((h.templateEngine||g)==
n)throw Error("Set a template engine before calling renderTemplate");t=t||"replaceChildren";if(m){var x=d(m);return a.$(function(){var g=c&&c instanceof a.fa?c:new a.fa(c,null,null,null,{exportDependencies:!0}),n=f(b,g.$data,g),g=e(m,t,n,g,h);"replaceNode"==t&&(m=g,x=d(m))},null,{Sa:function(){return!x||!a.a.Sb(x)},l:x&&"replaceNode"==t?x.parentNode:x})}return a.aa.Xb(function(d){a.dc(b,c,h,d,"replaceNode")})};a.Qd=function(b,d,g,h,m){function x(b,c){a.u.G(a.a.ec,null,[h,b,u,g,r,c]);a.i.ma(h,a.i.H)}
function r(a,b){c(b,v);g.afterRender&&g.afterRender(b,a);v=null}function u(a,c){v=m.createChildContext(a,{as:z,noChildContext:g.noChildContext,extend:function(a){a.$index=c;z&&(a[z+"Index"]=c)}});var d=f(b,a,v);return e(h,"ignoreTargetNode",d,v,g)}var v,z=g.as,w=!1===g.includeDestroyed||a.options.foreachHidesDestroyed&&!g.includeDestroyed;if(w||g.beforeRemove||!a.Pc(d))return a.$(function(){var b=a.a.f(d)||[];"undefined"==typeof b.length&&(b=[b]);w&&(b=a.a.jb(b,function(b){return b===n||null===b||
!a.a.f(b._destroy)}));x(b)},null,{l:h});x(d.v());var A=d.subscribe(function(a){x(d(),a)},null,"arrayChange");A.l(h);return A};var h=a.a.g.Z(),m=a.a.g.Z();a.c.template={init:function(b,c){var d=a.a.f(c());if("string"==typeof d||"name"in d)a.h.Ea(b);else if("nodes"in d){d=d.nodes||[];if(a.O(d))throw Error('The "nodes" option must be a plain, non-observable array.');var e=d[0]&&d[0].parentNode;e&&a.a.g.get(e,m)||(e=a.a.Yb(d),a.a.g.set(e,m,!0));(new a.C.ia(b)).nodes(e)}else if(d=a.h.childNodes(b),0<d.length)e=
a.a.Yb(d),(new a.C.ia(b)).nodes(e);else throw Error("Anonymous template defined, but no template content was provided");return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c();c=a.a.f(g);d=!0;e=null;"string"==typeof c?c={}:(g="name"in c?c.name:b,"if"in c&&(d=a.a.f(c["if"])),d&&"ifnot"in c&&(d=!a.a.f(c.ifnot)),d&&!g&&(d=!1));"foreach"in c?e=a.Qd(g,d&&c.foreach||[],c,b,f):d?(d=f,"data"in c&&(d=f.createChildContext(c.data,{as:c.as,noChildContext:c.noChildContext,exportDependencies:!0})),
e=a.dc(g,d,c,b)):a.h.Ea(b);f=e;(c=a.a.g.get(b,h))&&"function"==typeof c.s&&c.s();a.a.g.set(b,h,!f||f.ja&&!f.ja()?n:f)}};a.m.Ra.template=function(b){b=a.m.ac(b);return 1==b.length&&b[0].unknown||a.m.Id(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.h.ea.template=!0})();a.b("setTemplateEngine",a.gc);a.b("renderTemplate",a.dc);a.a.Kc=function(a,c,d){if(a.length&&c.length){var e,f,g,h,m;for(e=f=0;(!d||e<d)&&(h=a[f]);++f){for(g=0;m=c[g];++g)if(h.value===
m.value){h.moved=m.index;m.moved=h.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.Pb=function(){function b(b,d,e,f,g){var h=Math.min,m=Math.max,k=[],l,p=b.length,q,n=d.length,r=n-p||1,v=p+n+1,u,w,z;for(l=0;l<=p;l++)for(w=u,k.push(u=[]),z=h(n,l+r),q=m(0,l-1);q<=z;q++)u[q]=q?l?b[l-1]===d[q-1]?w[q-1]:h(w[q]||v,u[q-1]||v)+1:q+1:l+1;h=[];m=[];r=[];l=p;for(q=n;l||q;)n=k[l][q]-1,q&&n===k[l][q-1]?m.push(h[h.length]={status:e,value:d[--q],index:q}):l&&n===k[l-1][q]?r.push(h[h.length]={status:f,value:b[--l],index:l}):
(--q,--l,g.sparse||h.push({status:"retained",value:d[q]}));a.a.Kc(r,m,!g.dontLimitMoves&&10*p);return h.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Pb);(function(){function b(b,c,d,h,m){var k=[],l=a.$(function(){var l=c(d,m,a.a.Ua(k,b))||[];0<k.length&&(a.a.Xc(k,l),h&&a.u.G(h,null,[d,l,m]));k.length=0;a.a.Nb(k,l)},null,{l:b,Sa:function(){return!a.a.kd(k)}});
return{Y:k,$:l.ja()?l:n}}var c=a.a.g.Z(),d=a.a.g.Z();a.a.ec=function(e,f,g,h,m,k){function l(b){y={Aa:b,pb:a.ta(w++)};v.push(y);r||F.push(y)}function p(b){y=t[b];w!==y.pb.v()&&D.push(y);y.pb(w++);a.a.Ua(y.Y,e);v.push(y)}function q(b,c){if(b)for(var d=0,e=c.length;d<e;d++)a.a.D(c[d].Y,function(a){b(a,d,c[d].Aa)})}f=f||[];"undefined"==typeof f.length&&(f=[f]);h=h||{};var t=a.a.g.get(e,c),r=!t,v=[],u=0,w=0,z=[],A=[],C=[],D=[],F=[],y,I=0;if(r)a.a.D(f,l);else{if(!k||t&&t._countWaitingForRemove){var E=
a.a.Mb(t,function(a){return a.Aa});k=a.a.Pb(E,f,{dontLimitMoves:h.dontLimitMoves,sparse:!0})}for(var E=0,G,H,K;G=k[E];E++)switch(H=G.moved,K=G.index,G.status){case "deleted":for(;u<K;)p(u++);H===n&&(y=t[u],y.$&&(y.$.s(),y.$=n),a.a.Ua(y.Y,e).length&&(h.beforeRemove&&(v.push(y),I++,y.Aa===d?y=null:C.push(y)),y&&z.push.apply(z,y.Y)));u++;break;case "added":for(;w<K;)p(u++);H!==n?(A.push(v.length),p(H)):l(G.value)}for(;w<f.length;)p(u++);v._countWaitingForRemove=I}a.a.g.set(e,c,v);q(h.beforeMove,D);a.a.D(z,
h.beforeRemove?a.oa:a.removeNode);var M,O,P;try{P=e.ownerDocument.activeElement}catch(N){}if(A.length)for(;(E=A.shift())!=n;){y=v[E];for(M=n;E;)if((O=v[--E].Y)&&O.length){M=O[O.length-1];break}for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M)}for(E=0;y=v[E];E++){y.Y||a.a.extend(y,b(e,g,y.Aa,m,y.pb));for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M);!y.Ed&&m&&(m(y.Aa,y.Y,y.pb),y.Ed=!0,M=y.Y[y.Y.length-1])}P&&e.ownerDocument.activeElement!=P&&P.focus();q(h.beforeRemove,C);for(E=0;E<C.length;++E)C[E].Aa=d;q(h.afterMove,D);
q(h.afterAdd,F)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.ec);a.ba=function(){this.allowTemplateRewriting=!1};a.ba.prototype=new a.ca;a.ba.prototype.constructor=a.ba;a.ba.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.W?0:b.nodes)?b.nodes():null)return a.a.la(c.cloneNode(!0).childNodes);b=b.text();return a.a.ua(b,e)};a.ba.Ma=new a.ba;a.gc(a.ba.Ma);a.b("nativeTemplateEngine",a.ba);(function(){a.$a=function(){var a=this.Hd=function(){if(!v||!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();
this.renderTemplateSource=function(b,e,f,g){g=g||w;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=v.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(h,b,e);e.appendTo(g.createElement("div"));v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+
a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(v.tmpl.tag.ko_code={open:"__.push($1 || '');"},v.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.$a.prototype=new a.ca;a.$a.prototype.constructor=a.$a;var b=new a.$a;0<b.Hd&&a.gc(b);a.b("jqueryTmplTemplateEngine",a.$a)})()})})();})();


/***/ }),

/***/ "./sources/core/actions.scss":
/*!***********************************!*\
  !*** ./sources/core/actions.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/core/dropdown-actions.scss":
/*!********************************************!*\
  !*** ./sources/core/dropdown-actions.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/bool.scss":
/*!*********************************!*\
  !*** ./sources/table/bool.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/cell-editor.scss":
/*!****************************************!*\
  !*** ./sources/table/cell-editor.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/column-filter.scss":
/*!******************************************!*\
  !*** ./sources/table/column-filter.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/filter-default.scss":
/*!*******************************************!*\
  !*** ./sources/table/filter-default.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/filter-select.scss":
/*!******************************************!*\
  !*** ./sources/table/filter-select.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/index.scss":
/*!**********************************!*\
  !*** ./sources/table/index.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/search.scss":
/*!***********************************!*\
  !*** ./sources/table/search.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/table/summary.scss":
/*!************************************!*\
  !*** ./sources/table/summary.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sources/knockout/table/bool-cell-editor.html":
/*!******************************************************!*\
  !*** ./sources/knockout/table/bool-cell-editor.html ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-table__bool-cell-editor\">\n  <input type=\"checkbox\"\n    data-bind=\"checked: value, event: { change: function(_, e) { $data.value = e.target.checked; $data.complete(true); } }\"\n  />\n</div>");

/***/ }),

/***/ "./sources/knockout/table/bool-cell-viewer.html":
/*!******************************************************!*\
  !*** ./sources/knockout/table/bool-cell-viewer.html ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span class=\"table4js-table__bool-cell-viewer\" data-bind=\"css: className\">\n    <span class=\"table4js-table__bool-cell-viewer-circle\"\n    data-bind=\"style: { backgroundColor: cell.data ? 'green' : 'red' }\" \n    ></span>\n</span>");

/***/ }),

/***/ "./sources/knockout/table/cell-editor.html":
/*!*************************************************!*\
  !*** ./sources/knockout/table/cell-editor.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-table__cell-editor\">\n  <input data-bind=\"value: value, event: { keyup: function(_, e) { $data.processKeyUp(e); } }\" />\n</div>");

/***/ }),

/***/ "./sources/knockout/table/cell-viewer.html":
/*!*************************************************!*\
  !*** ./sources/knockout/table/cell-viewer.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span data-bind=\"html: cell.text, css: className\"></span>\n");

/***/ }),

/***/ "./sources/knockout/table/cell.html":
/*!******************************************!*\
  !*** ./sources/knockout/table/cell.html ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<td class=\"table4js-table-cell\" data-bind=\"attr: {rowspan: table.isMergedСells ? cell.count : 1},\n  css: (cell.count > 1) && table.isMergedСells ? 'table4js-table-cell--merged ' : '',\n  visible: (cell.count > 0) || !table.isMergedСells,\n  style: {'background-color': cell.color} \">\n  <!-- ko ifnot: (cell.inplaceEditor && table.config.enableEdit) -->\n    <div class=\"table4js-table-cell__container\" data-bind=\"css: containerCss, style: {top: isMergedCell() ? table.tableHeadHeight - 2 + 'px' : undefined}, click: startEdit\">\n      <!-- ko component: { name: cell.viewer, params: { cell: cell, className: contentCss } } -->\n      <!-- /ko -->\n    </div>\n  <!-- /ko -->\n  <!-- ko if: (cell.inplaceEditor && table.config.enableEdit) -->\n    <!-- ko component: { name: cell.editor, params: { model: cell.inplaceEditor } } -->\n    <!-- /ko -->\n  <!-- /ko -->\n</td>");

/***/ }),

/***/ "./sources/knockout/table/column-filter-item.html":
/*!********************************************************!*\
  !*** ./sources/knockout/table/column-filter-item.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<select class=\"table4js-filter___operation\" data-bind=\"options: operations, value: operation, optionsText: 'text'\"></select>\n<!-- ko if: showOperand -->\n  <!-- ko if: operation.op == \"EQ\" -->\n  <table4js-filter-select class=\"abrs-filter__value\"\n    params=\"value: filterItemValue, columnName: column.name, columnType: column.type, getColumnData: getColumnData\">\n  </table4js-filter-select>\n  <!-- /ko -->\n  <!-- ko if: operation.op != \"EQ\" -->\n  <div class=\"table4js-filter__operand\" data-bind=\"component: { name: filterEditorName, params: { value: filterItemValue, column: column } }\">\n  </div>\n  <!-- /ko -->\n<!-- /ko -->\n");

/***/ }),

/***/ "./sources/knockout/table/column-filter.html":
/*!***************************************************!*\
  !*** ./sources/knockout/table/column-filter.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko if: filterItems.length > 0 -->\n<div class=\"table4js-filter-item\">\n  <div class=\"table4js-filter__title table4js-filter-text\" data-bind=\"text: column.title + ':'\"></div>\n  <!-- ko foreach: filterItems -->\n    <!-- ko if: $index() > 0 -->\n    <div class=\"table4js-filter__operator table4js-filter-text\" data-bind=\"text: '&'\"></div>\n    <!-- /ko -->\n    <!-- ko component: { name: 'table4js-column-filter-item', params: { filterItem: $data } } -->\n    <!-- /ko -->\n    <div class=\"table4js-filter__remove\"\n      data-bind=\"click: $parent.removeItem, clickBubble: false\">\n      <div class=\"table4js-filter__remove-icon table4js-svg-icon\" data-bind=\"html: $root.icons.cross\"></div>\n    </div>\n  <!-- /ko -->\n</div>\n<!-- /ko -->");

/***/ }),

/***/ "./sources/knockout/table/filter-default.html":
/*!****************************************************!*\
  !*** ./sources/knockout/table/filter-default.html ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<input style=\"width: 100%;\" placeholder=\"*\" data-bind=\"value: value.value\" />");

/***/ }),

/***/ "./sources/knockout/table/filter-select.html":
/*!***************************************************!*\
  !*** ./sources/knockout/table/filter-select.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-select-selection\">\n    <!-- ko foreach: selectedItems -->\n    <div class=\"table4js-select-selection-item\">\n        <span class=\"table4js-select-item-title\" data-bind=\"text: name\"></span>\n        <div class=\"table4js-svg-icon table4js-select-item-close\" data-bind=\"click: $parent.deleteItems, html: $root.icons.cross\"></div>\n    </div>\n    <!-- /ko -->\n</div>\n<div class=\"table4js-select-button table4js-svg-icon\" data-bind=\"click: toggle, attr: { title: title }, html: $root.icons.arrowdown\"></div>\n<!-- ko if: isOpen -->\n<ul class=\"table4js-select__dropdown-menu table4js-button-toggle__dropdown-menu\" data-bind=\"click: function(_, e) { e.stopPropagation(); }\">\n    <!-- ko if: isFilterSearchByType -->\n    <div class=\"table4js-select__dropdown-search-container\">\n        <input class=\"table4js-select__dropdown-search\" placeholder=\"*\" data-bind=\"value: filterText, valueUpdate: 'afterkeydown'\" />\n    </div>\n    <!-- /ko -->\n    <!-- ko foreach: foundItems -->\n    <div class=\"table4js-select__dropdown-item\" data-bind=\"click: $parent.clickItem\">\n        <input class=\"table4js-select__dropdown-hide-check\" type=\"checkbox\" data-bind=\"checked: $parent.isChecked($data)\" />\n        <div class=\"table4js-svg-icon table4js-select__dropdown-check\" data-bind=\"html: $root.icons.check\"></div>\n        <span class=\"table4js-select__dropdown-label\" data-bind=\"text: name\"></span>\n    </div>\n    <!-- /ko -->\n    <!-- ko if: isLoadMore -->\n    <button class=\"table4js-select__dropdown-button\" data-bind=\"click: loadMore\">\n        <span class=\"table4js-action-button__label\">More</span>\n    </button>\n    <!-- /ko -->\n</ul>\n<!-- /ko -->");

/***/ }),

/***/ "./sources/knockout/table/index.html":
/*!*******************************************!*\
  !*** ./sources/knockout/table/index.html ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-table-resizable-container\">\n  <div class=\"table4js-table-scroll-container\">\n    <table class=\"table4js-table\">\n      <thead class=\"table4js-table__header table4js-table-sticky-component\">\n        <tr class=\"table4js-table-header-tools\">\n          <th class=\"table4js-table-header-tools__cell\" colspan=\"100%\">\n            <div class=\"table4js-table-header-tools__container table4js-table-group-header-technical-cell\">\n              <div class=\"table4js-table-preheader\">\n                <div class=\"table4js-table-search-group\">\n                  <!-- ko if: showSearch -->\n                  <table4js-search params=\"model: searchModel\"></table4js-search>\n                  <!-- /ko -->\n                  <table4js-actions class=\"table4js-table-actions\" params=\"model: $data, options: { action: 'topActions' }\">\n                  </table4js-actions>\n                  <!-- ko if: $data.getActions('dropdownActions').length > 0 -->\n                  <table4js-dropdown-actions class=\"table4js-table-dropdown table4js-table-actions-menu\"\n                    params=\"data: $data, actions: 'dropdownActions'\">\n                  </table4js-dropdown-actions>\n                  <!-- /ko -->\n                </div>\n              </div>\n              <!-- ko if: viewFilterTable -->\n              <div class=\"table4js-table-filter\">\n                <div class=\"table4js-table-filter__container\">\n                  <!-- ko foreach: columns -->\n                  <!-- ko component: { name: 'table4js-column-filter', params: { context: filterContext } } -->\n                  <!-- /ko -->\n                  <!-- /ko -->\n                </div>\n              </div>\n              <!-- /ko -->\n            </div>\n          </th>\n        </tr>\n        <tr class=\"table4js-table-header-title\">\n          <th class=\"table4js-table-header-title__cell table4js-table-switch\">\n            <div class=\"table4js-table-switch__text\"\n              data-bind=\"css: {'switch__text--selected': isNumber}, click: () => $data.isNumber = !$data.isNumber\">#\n            </div>\n          </th>\n          <!-- ko foreach: columns -->\n          <!-- ko if: visible -->\n          <th class=\"table4js-table-header-title__cell\"\n            data-bind=\"event: {mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp}\">\n            <div class=\"table4js-table-title\">\n              <span class=\"table4js-table-title__text\" data-bind=\"html: title, click: $parent.clickColumn\"></span>\n              <div class=\"table4js-table-title__tools\">\n                <div class=\"table4js-svg-icon table4js-table-title__sorter\" data-bind=\"visible: order === false, html: $root.icons.sortup\"></div>\n                <div class=\"table4js-svg-icon table4js-table-title__sorter\" data-bind=\"visible: order === true, html: $root.icons.sortdown\"></div>\n                <div class=\"table4js-svg-icon table4js-table-title__filter\" data-bind=\"click: clickFilter, html: $root.icons.filter\"></div>\n              </div>\n            </div>\n            <div class=\"table4js-table-title_resize\"\n              data-bind=\"event: {mouseover: $parent.logMouseOver, mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp, mousedown: $parent.logMouseDown}\">\n            </div>\n          </th>\n          <!-- /ko -->\n          <!-- /ko -->\n          <th class=\"table4js-table-header-title__cell\"></th>\n        </tr>\n      </thead>\n      <tbody class=\"table4js-table__body\">\n        <!-- ko if: rows.length == 0 && loadingMutex == false  -->\n        <tr class=\"table4js-table__row\">\n          <th class=\"table4js-table-cell\" colspan=\"100%\" data-bind=\"text: noDataText\"></th>\n        </tr>\n        <!-- /ko -->\n        <!-- ko if: loadingMutex -->\n        <!-- ko foreach: columns -->\n        <tr class=\"table4js-table__row\"></tr>\n          <td class=\"table4js-table-cell table4js-table-technical-cell\" >\n            <div class=\"table4js-table-technical-cell__container\">\n              <div class=\"table4js-table__check\">\n                <div class=\"table4js-svg-icon table4js-table__icon-check\"></div>\n              </div>\n            </div>\n          </td>\n        <!-- ko foreach: $parent.columns -->\n        <!-- ko if: visible -->\n          <td class=\"table4js-table-cell table4js-table-technical-cell\">\n            <div class=\"table4js-table-cell__container table4js-table-cell__container--loading\">\n            </div>\n          </td>\n        <!-- /ko -->\n        <!-- /ko -->\n        <td class=\"table4js-table-cell table4js-table-technical-cell\">\n          <div class=\"table4js-table-technical-cell__container\">\n            <div class=\"table4js-svg-icon table4js-table-icon-row-tools table4js-table__more\" data-bind=\"html: $root.icons.more\"></div>\n            <div class=\"table4js-svg-icon table4js-table-icon-row-tools table4js-table__edit\" data-bind=\"html: $root.icons.edit\"></div>\n          </div>\n        </td>\n        </tr>\n        <!-- /ko -->\n        <!-- /ko -->\n        <!-- ko foreach: {data: rows} -->\n        <tr class=\"table4js-table__row\" data-bind=\"css: {'table4js-table__row--selected': selected}, style: {'background-color': 'none' }\">\n          <td class=\"table4js-table-cell table4js-table-technical-cell\" data-bind=\"click: select\">\n            <div class=\"table4js-table-technical-cell__container\">\n              <!-- ko if: $parent.isNumber -->\n              <div class=\"table4js-table__number\" data-bind=\"text: number\"></div>\n              <!-- /ko -->\n              <!-- ko if: !$parent.isNumber -->\n              <div class=\"table4js-table__check\">\n                <div class=\"table4js-svg-icon table4js-table__icon-check\" data-bind=\"visible: selected, html: $root.icons.check\"></div>\n              </div>\n              <!-- /ko -->\n            </div>\n          </td>\n          <!-- ko foreach: cells -->\n          <!-- ko component: { name: 'table4js-table-cell', params: { cell: $data, table: $parents[1] } } -->\n          <!-- /ko -->\n          <!-- /ko -->\n          <td class=\"table4js-table-cell table4js-table-technical-cell\" data-bind=\"click: click\">\n            <div class=\"table4js-table-technical-cell__container\">\n              <div class=\"table4js-svg-icon table4js-table-icon-row-tools table4js-table__more\" data-bind=\"html: $root.icons.more\"></div>\n              <div class=\"table4js-svg-icon table4js-table-icon-row-tools table4js-table__edit\" data-bind=\"html: $root.icons.edit\"></div>\n            </div>\n            <div class=\"table4js-table__row--select\" data-bind=\"visible: !$parent.hasActiveInplaceEditor\"></div>\n            <div class=\"table4js-table__row--colored\" data-bind=\"style: { 'background': color ? color : 'rgba(248,249,253)' }\"></div>\n          </td>\n        </tr>\n        <!-- /ko -->\n      </tbody>\n      <tfoot class=\"table4js-table__footer table4js-table-sticky-component\">\n        <tr class=\"table4js-table-footer-summary\" data-bind=\"visible: showTableSummary\">\n          <th class=\"table4js-table-cell table4js-table-technical-cell table4js-table-footer__cell\">\n            <div class=\"table4js-table-technical-cell__container\">\n              <div class=\"table4js-svg-icon table4js-table-icon-equal\" data-bind=\"html: $root.icons.equal\"></div>\n            </div>\n          </th>\n          <!-- ko foreach: columns -->\n          <!-- ko if: visible -->\n          <th class=\"table4js-table-cell table4js-table-footer__cell\">\n            <table4js-table-summary params='column: $data'></table4js-table-summary>\n          </th>\n          <!-- /ko -->\n          <!-- /ko -->\n          <th class=\"table4js-table-cell table4js-table-technical-cell table4js-table-footer__cell\"></th>\n        </tr>\n        <tr class=\"table4js-table-footer-tools\">\n          <th class=\"table4js-table-footer-tools__cell\" colspan=\"100%\">\n            <div class=\"table4js-table-footer-tools__container table4js-table-group-header-technical-cell\">\n              <div class=\"table4js-table-row-management\">\n                <table4js-actions class=\"table4js-table-actions\" params=\"model: $data, options: { action: 'bottomActions' }\">\n                </table4js-actions>\n              </div>\n              <div class=\"table4js-table-info\">\n                <span class=\"table4js-table-info__total table4js-table-info__text\"\n                  data-bind=\"text: 'Total: ' + totalCount\"></span>\n                <div class=\"table4js-table-info__go-to\">\n                  <span class=\"table4js-table-go-to__text table4js-table-info__text\">Go to: </span>\n                  <input class=\"table4js-table-go-to__value\" data-bind=\"value: startRow\"/>\n                  <button class=\"table4js-btn-transparent\">\n                    <div class=\"table4js-svg-icon table4js-table-go-to__icon\" data-bind=\"html: $root.icons.arrowright\"></div>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </th>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>");

/***/ }),

/***/ "./sources/knockout/table/search.html":
/*!********************************************!*\
  !*** ./sources/knockout/table/search.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-search\">\n  <input class=\"table4js-search__value\" data-bind=\"value: value, attr: { placeholder: 'Search...' }\" />\n  <div class=\"table4js-search__button\" data-bind=\"click: refresh, attr: { title: 'Search' }\">\n    <div class=\"table4js-svg-icon table4js-search__icon\" data-bind=\"html: $root.icons.search\"></div>\n  </div>\n</div>");

/***/ }),

/***/ "./sources/knockout/table/summary.html":
/*!*********************************************!*\
  !*** ./sources/knockout/table/summary.html ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span class=\"table4js-table-summary__value\" data-bind=\"text: value\"></span>\n<select class=\"table4js-table-summary__select\"  data-bind=\"value: func\">\n  <!-- ko foreach: summaryItems -->\n    <option data-bind=\"text: title, value: value, attr: {title: title}\"></option>\n  <!-- /ko -->  \n</select>");

/***/ }),

/***/ "./sources/knockout/widgets/action.html":
/*!**********************************************!*\
  !*** ./sources/knockout/widgets/action.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button data-bind=\"click: $data.formId !== undefined ? undefined : action, \n                visible: !$data.visible || ko.unwrap(visible),\n                enable: !$data.enabled || ko.unwrap(enabled),\n                attr: {\n                        class: 'table4js-button--transparent action-button table4js-action-button ' + ko.unwrap($data.cssClasses) + (ko.unwrap($data.active) === true ? ' table4js-action--active' : ''),\n                        title: $data.title || $data.name, form: $data.formId,\n                        type: $data.formId !== undefined ? 'submit' : 'button'\n                    }\">\n    <!-- ko if: $data.icon -->\n    <!-- <span data-bind=\"css: ('fa icon ' + (typeof icon == 'function' ? icon() : icon))\"></span> -->\n    <!-- /ko -->\n    <!-- ko if: $data.svg -->\n    <div class=\"table4js-action-button__icon table4js-button__svg-icon\" data-bind=\"html: svg\"></div>\n    <!-- /ko -->\n    <!-- ko ifnot: $parents[1].short -->\n    <span class=\"table4js-action-button__label\" data-bind=\"text: $data.title, css: ko.unwrap($data.cssLabel), style: {'display' : $data.title ? 'block' : 'none'}\" ></span>\n    <!-- /ko -->\n</button>");

/***/ }),

/***/ "./sources/knockout/widgets/actions.html":
/*!***********************************************!*\
  !*** ./sources/knockout/widgets/actions.html ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko foreach: actions -->\n<!-- ko ifnot: ko.unwrap($data.actions) -->\n<!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  -->\n<!-- ko component: { name: 'table4js-action-item', params: $data } -->\n<!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->\n<!-- ko if: ko.unwrap($data.actions) && ko.unwrap($data.actions).length > 0 -->\n<!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  -->\n<div class=\"table4js-nested-actions table4js-action-context-button\">\n    <span class=\"table4js-button__label\" data-bind=\"text: title\"></span>\n    <div class=\"table4js-nested-actions__dropdown\">\n        <!-- ko foreach: actions -->\n        <!-- ko component: { name: 'table4js-action-item', params: $data } -->\n        <!-- /ko -->\n        <!-- /ko -->\n    </div>\n</div>\n<!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->");

/***/ }),

/***/ "./sources/knockout/widgets/dropdown-actions.html":
/*!********************************************************!*\
  !*** ./sources/knockout/widgets/dropdown-actions.html ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button class=\"table4js-action-button table4js-button--transparent table4js-button-toggle\" type=\"button\"\n    data-bind=\"click: toggle, attr: { title: title }\">\n    <div data-bind=\"html: $root.icons.more_sq\"></div>\n    <span class=\"table4js-action-button__label\" data-bind=\"text: moreText\"></span>\n</button>\n<!-- ko if: isOpen -->\n<ul class=\"table4js-button-toggle__dropdown-menu\">\n    <table4js-actions class=\"table4js-context-actions\" params=\"model: data, options: { action: actions }\">\n    </table4js-actions>\n</ul>\n<!-- /ko -->");

/***/ }),

/***/ "./sources/knockout/widgets/icon.html":
/*!********************************************!*\
  !*** ./sources/knockout/widgets/icon.html ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <svg class=\"table4js-button__svg-icon\"><use data-bind=\"attr:{'xlink:href':'spritemap.svg#sprite-icon_'+ko.unwrap(id)}\"  xlink:href=''></use></svg> -->\n");

/***/ }),

/***/ "./sources/icons/icon_arrow-down.svg":
/*!*******************************************!*\
  !*** ./sources/icons/icon_arrow-down.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M3 8.436a1.5 1.5 0 0 1 2.121.006l9.265 9.314a.865.865 0 0 0 1.228 0l9.265-9.314a1.5 1.5 0 0 1 2.121-.006 1.5 1.5 0 0 1 .006 2.121l-10.943 11a1.5 1.5 0 0 1-2.126 0l-10.943-11a1.5 1.5 0 0 1 .006-2.121z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_arrow-right.svg":
/*!********************************************!*\
  !*** ./sources/icons/icon_arrow-right.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M8.968 27a1.5 1.5 0 0 1 .005-2.121l9.315-9.265a.867.867 0 0 0 0-1.228l-9.315-9.265a1.5 1.5 0 0 1-.005-2.121 1.5 1.5 0 0 1 2.121-.006l11 10.943a1.5 1.5 0 0 1 0 2.126l-11 10.943a1.5 1.5 0 0 1-2.121-.006z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_check.svg":
/*!**************************************!*\
  !*** ./sources/icons/icon_check.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M26 8a1.5 1.5 0 0 0-2.121 0l-11.264 11.264a.869.869 0 0 1-1.23 0l-5.264-5.264a1.5 1.5 0 0 0-2.121 2.121l6.939 6.94a1.5 1.5 0 0 0 2.122 0l12.939-12.94a1.5 1.5 0 0 0 0-2.121z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_cross.svg":
/*!**************************************!*\
  !*** ./sources/icons/icon_cross.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M17.715 15l10.723-10.723a1.921 1.921 0 0 0 0-2.715 1.921 1.921 0 0 0-2.715 0l-10.723 10.723-10.723-10.723a1.92 1.92 0 0 0-2.715 2.715l10.723 10.723-10.723 10.723a1.92 1.92 0 1 0 2.715 2.715l10.723-10.723 10.723 10.723a1.92 1.92 0 1 0 2.715-2.715z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_edit.svg":
/*!*************************************!*\
  !*** ./sources/icons/icon_edit.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M21.573 29h-17.396a3.178 3.178 0 0 1-3.177-3.177v-17.146a3.178 3.178 0 0 1 3.177-3.177h7.2a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5h-7.2a.178.178 0 0 0-.177.177v17.146a.178.178 0 0 0 .177.177h17.4a.178.178 0 0 0 .178-.178v-7.072a1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1.5 1.5v7.073a3.178 3.178 0 0 1-3.182 3.177zM8.181 21.283l.619-3.473a.454.454 0 0 1 .768-.241l2.853 2.853a.453.453 0 0 1-.242.767l-3.472.621a.454.454 0 0 1-.526-.527z\"></path><rect x=\"15.405\" y=\"3.585\" width=\"5\" height=\"17\" rx=\".48\" transform=\"translate(13.79 -9.121) rotate(45)\"></rect><path d=\"M24.9 2.531h2.241a1.379 1.379 0 0 1 1.375 1.379v.919a.589.589 0 0 1-.589.589h-3.827a.589.589 0 0 1-.589-.589v-.919a1.379 1.379 0 0 1 1.389-1.379z\" transform=\"translate(10.43 -17.232) rotate(45)\"></path><path d=\"M0 30l30-30\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_equal.svg":
/*!**************************************!*\
  !*** ./sources/icons/icon_equal.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M26.3,7.531A1.883,1.883,0,0,0,28.18,5.649V1.883A1.883,1.883,0,0,0,26.3,0H3.7A1.883,1.883,0,0,0,1.82,1.883a1.862,1.862,0,0,0,.139.7l0,.011a1.887,1.887,0,0,0,.411.62h0L14.157,15,2.387,26.77l0,.006A1.882,1.882,0,0,0,3.7,30H26.3a1.883,1.883,0,0,0,1.883-1.883V24.351a1.883,1.883,0,0,0-3.766,0v1.883H8.249l9.9-9.9a1.881,1.881,0,0,0,0-2.662l-.008-.006,0-.008L8.249,3.766H24.414V5.649A1.883,1.883,0,0,0,26.3,7.531Z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_filter.svg":
/*!***************************************!*\
  !*** ./sources/icons/icon_filter.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M13.06 29.188a2.02 2.02 0 0 1-1.12-.333 2.126 2.126 0 0 1-.94-1.826v-9.272a2.015 2.015 0 0 0-.281-.835l-9.319-12.241a1.994 1.994 0 0 1-.281-2.119 2 2 0 0 1 1.852-1.062h24.058a2.014 2.014 0 0 1 1.854 1.047 2.013 2.013 0 0 1-.229 2.116l-8.743 12.207a2.193 2.193 0 0 0-.285.887v6.822a3.1 3.1 0 0 1-1.791 2.734l-3.846 1.675a2.321 2.321 0 0 1-.929.2zm-8.032-24.688l8.077 10.6a4.871 4.871 0 0 1 .895 2.657v7.954l2.637-1.149-.011-6.8a5.058 5.058 0 0 1 .846-2.634l7.609-10.628z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_item-add.svg":
/*!*****************************************!*\
  !*** ./sources/icons/icon_item-add.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 27 27\"><g id=\"Слой_44\" data-name=\"Слой 44\"><path d=\"M23.67,0H3.33A3.34,3.34,0,0,0,0,3.33V23.67A3.34,3.34,0,0,0,3.33,27H23.67A3.34,3.34,0,0,0,27,23.67V3.33A3.34,3.34,0,0,0,23.67,0ZM24,23.67a.33.33,0,0,1-.33.33H3.33A.33.33,0,0,1,3,23.67V3.33A.33.33,0,0,1,3.33,3H23.67a.33.33,0,0,1,.33.33Z\"></path><path d=\"M19.86,12H15V7.14a1.51,1.51,0,1,0-3,0V12H7.14a1.51,1.51,0,1,0,0,3H12v4.85a1.51,1.51,0,1,0,3,0V15h4.85a1.51,1.51,0,1,0,0-3Z\"></path></g></svg>"

/***/ }),

/***/ "./sources/icons/icon_item-delete.svg":
/*!********************************************!*\
  !*** ./sources/icons/icon_item-delete.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 27 27\"><g id=\"Слой_44\" data-name=\"Слой 44\"><path d=\"M23.67,0H3.33A3.34,3.34,0,0,0,0,3.33V23.67A3.34,3.34,0,0,0,3.33,27H23.67A3.34,3.34,0,0,0,27,23.67V3.33A3.34,3.34,0,0,0,23.67,0ZM24,23.67a.33.33,0,0,1-.33.33H3.33A.33.33,0,0,1,3,23.67V3.33A.33.33,0,0,1,3.33,3H23.67a.33.33,0,0,1,.33.33Z\"></path><path d=\"M20.22,6.78a1.84,1.84,0,0,0-2.59,0L13.5,10.92,9.37,6.78A1.83,1.83,0,0,0,6.78,9.37l4.14,4.13L6.78,17.63a1.83,1.83,0,0,0,2.59,2.59l4.13-4.14,4.13,4.14a1.83,1.83,0,0,0,2.59-2.59L16.08,13.5l4.14-4.13A1.84,1.84,0,0,0,20.22,6.78Z\"></path></g></svg>"

/***/ }),

/***/ "./sources/icons/icon_item-save.svg":
/*!******************************************!*\
  !*** ./sources/icons/icon_item-save.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 27 27\"><g id=\"Слой_23\" data-name=\"Слой 23\"><path d=\"M23.67,0H3.33A3.34,3.34,0,0,0,0,3.33V23.67A3.34,3.34,0,0,0,3.33,27H23.67A3.34,3.34,0,0,0,27,23.67V3.33A3.34,3.34,0,0,0,23.67,0ZM24,23.67a.33.33,0,0,1-.33.33H3.33A.33.33,0,0,1,3,23.67V3.33A.33.33,0,0,1,3.33,3H23.67a.33.33,0,0,1,.33.33Z\"></path><path d=\"M18,5.21H9A2.32,2.32,0,0,0,6.65,7.52V19.73a2.08,2.08,0,0,0,2.06,2.06A2.07,2.07,0,0,0,10,21.31l3.48-2.9L17,21.31a2.06,2.06,0,0,0,3.37-1.58V7.52A2.32,2.32,0,0,0,18,5.21Zm-.43,13.06-2.8-2.33a2,2,0,0,0-2.62,0l-2.8,2.33V8h8.22Z\"></path></g></svg>"

/***/ }),

/***/ "./sources/icons/icon_more.svg":
/*!*************************************!*\
  !*** ./sources/icons/icon_more.svg ***!
  \*************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><circle cx=\"15\" cy=\"5\" r=\"3\"></circle><circle cx=\"15\" cy=\"15\" r=\"3\"></circle><circle cx=\"15\" cy=\"25\" r=\"3\"></circle><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_more_sq.svg":
/*!****************************************!*\
  !*** ./sources/icons/icon_more_sq.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M10.5 13.5h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM25.5 13.5h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM10.5 28.5h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM25.5 28.5h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_paste.svg":
/*!**************************************!*\
  !*** ./sources/icons/icon_paste.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M3.209.75H20.678a3.2,3.2,0,0,1,3.209,3.177V5.75h2.936A3.18,3.18,0,0,1,30,8.927V26.073a3.18,3.18,0,0,1-3.177,3.177H9.322a3.2,3.2,0,0,1-3.209-3.177V24.25h-2.9A3.2,3.2,0,0,1,0,21.073V3.927A3.2,3.2,0,0,1,3.209.75Zm23.582,25.5A.2.2,0,0,0,27,26.073V8.927a.2.2,0,0,0-.209-.177H9.427a.178.178,0,0,0-.177.177V26.073a.178.178,0,0,0,.177.177ZM3,21.073a.2.2,0,0,0,.209.177H6.25V8.927A3.18,3.18,0,0,1,9.427,5.75h11.46V3.927a.2.2,0,0,0-.209-.177H3.209A.2.2,0,0,0,3,3.927Z\" style=\"fill:#092a3a\"></path><rect x=\"11.5\" y=\"10.823\" width=\"13\" height=\"3\" rx=\"1.5\" transform=\"translate(36 24.645) rotate(-180)\"></rect><rect x=\"11.5\" y=\"15.823\" width=\"13\" height=\"3\" rx=\"1.5\" transform=\"translate(36 34.645) rotate(180)\" style=\"fill:#092a3a\"></rect><rect x=\"11.5\" y=\"20.823\" width=\"13\" height=\"3\" rx=\"1.5\" transform=\"translate(36 44.645) rotate(180)\"></rect><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_search.svg":
/*!***************************************!*\
  !*** ./sources/icons/icon_search.svg ***!
  \***************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M28.25 25.629l-7.282-7.282a10.987 10.987 0 1 0-2.049 2.193l7.21 7.21a1.5 1.5 0 1 0 2.121-2.121zm-16.25-5.629a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_sort-down.svg":
/*!******************************************!*\
  !*** ./sources/icons/icon_sort-down.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M19.681 11.518h4.938v1.282h-6.881v-1.041l4.78-6.906h-4.748v-1.295h6.7v1.015zM23.344 22.647h-3.58l-.75 2.153h-1.669l3.491-9.242h1.441l3.5 9.242h-1.677zm-3.13-1.294h2.679l-1.34-3.834zM14.805 18.689a1.249 1.249 0 0 0-1.767 0l-2.156 2.156v-16.029a1.25 1.25 0 0 0-2.5 0v16.018l-2.12-2.12a1.248 1.248 0 0 0-1.766 0l-.013.013a1.248 1.248 0 0 0 0 1.766l4.276 4.276a1.249 1.249 0 0 0 1.765 0l.013-.013a.893.893 0 0 0 .06-.091l4.208-4.208a1.249 1.249 0 0 0 0-1.768z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_sort-up.svg":
/*!****************************************!*\
  !*** ./sources/icons/icon_sort-up.svg ***!
  \****************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><path d=\"M23.344 10.647h-3.58l-.75 2.153h-1.669l3.491-9.242h1.441l3.5 9.242h-1.677zm-3.13-1.294h2.679l-1.34-3.834zM19.681 23.518h4.938v1.282h-6.881v-1.041l4.78-6.906h-4.748v-1.3h6.7v1.015zM14.805 18.69a1.249 1.249 0 0 0-1.767 0l-2.156 2.155v-16.029a1.25 1.25 0 0 0-2.5 0v16.019l-2.12-2.121a1.25 1.25 0 0 0-1.766 0l-.013.013a1.248 1.248 0 0 0 0 1.766l4.276 4.276a1.249 1.249 0 0 0 1.765 0l.013-.013a1 1 0 0 0 .06-.09l4.208-4.209a1.248 1.248 0 0 0 0-1.767z\"></path><title></title></svg>"

/***/ }),

/***/ "./sources/icons/icon_table-merge.svg":
/*!********************************************!*\
  !*** ./sources/icons/icon_table-merge.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\"><g id=\"a\"></g><g id=\"b\"></g><g id=\"c\"></g><g id=\"d\"></g><g id=\"e\"></g><g id=\"f\"></g><g id=\"g\"></g><g id=\"h\"></g><g id=\"i\"></g><g id=\"j\"></g><g id=\"k\"></g><g id=\"l\"></g><g id=\"m\"></g><g id=\"n\"></g><g id=\"o\"></g><g id=\"p\"></g><g id=\"q\"></g><g id=\"r\"></g><g id=\"s\"></g><g id=\"t\"></g><g id=\"u\"></g><g id=\"v\"></g><g id=\"w\"></g><g id=\"x\"></g><g id=\"y\"></g><g id=\"a&#x60;\"></g><g id=\"aa\"></g><g id=\"ab\"></g><g id=\"ac\"></g><g id=\"ad\"></g><g id=\"ae\"></g><g id=\"af\"></g><g id=\"ag\"></g><g id=\"ah\"></g><g id=\"ai\"></g><g id=\"aj\"></g><g id=\"ak\"></g><g id=\"al\"></g><g id=\"am\"></g><g id=\"an\"></g><g id=\"ao\"></g><g id=\"ap\"></g><g id=\"aq\"></g><g id=\"ar\"></g><g id=\"as\"></g><g id=\"at\"></g><g id=\"au\"></g><g id=\"av\"></g><g id=\"aw\"></g><g id=\"ax\"></g><g id=\"ay\"></g><g id=\"b&#x60;\"></g><g id=\"ba\"></g><g id=\"bb\"></g><g id=\"bc\"></g><g id=\"bd\"></g><g id=\"be\"></g><g id=\"bf\"></g><g id=\"bg\"></g><g id=\"bh\"><path d=\"M25.73,1H4.27c-1.81,0-3.27,1.47-3.27,3.27V25.73c0,1.81,1.47,3.27,3.27,3.27H25.73c1.81,0,3.27-1.47,3.27-3.27V4.27c0-1.81-1.47-3.27-3.27-3.27ZM9,27H4.27c-.7,0-1.27-.57-1.27-1.27v-4.23h6v5.5Zm0-7.5H3v-5.5h6v5.5Zm0-7.5H3V7h6v5Zm9-3V27h-7V7h7v2Zm9,16.73c0,.7-.57,1.27-1.27,1.27h-5.73v-5.5h7v4.23Zm0-6.23h-7v-5.5h7v5.5Zm0-7.5h-7V7h7v5Z\"></path></g></svg>"

/***/ }),

/***/ "./sources/core/action.ts":
/*!********************************!*\
  !*** ./sources/core/action.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Action = void 0;
var base_1 = __webpack_require__(/*! ./base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ./property */ "./sources/core/property.ts");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(source) {
        var _this = _super.call(this) || this;
        Object.keys(source || {}).forEach(function (key) { return _this[key] = source[key]; });
        return _this;
    }
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "name", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Function)
    ], Action.prototype, "action", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "title", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Boolean)
    ], Action.prototype, "visible", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Boolean)
    ], Action.prototype, "enabled", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Boolean)
    ], Action.prototype, "active", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "icon", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "svg", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "container", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "cssClasses", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "cssImage", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], Action.prototype, "cssLabel", void 0);
    return Action;
}(base_1.Base));
exports.Action = Action;


/***/ }),

/***/ "./sources/core/actions.ts":
/*!*********************************!*\
  !*** ./sources/core/actions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./actions.scss */ "./sources/core/actions.scss");


/***/ }),

/***/ "./sources/core/base.ts":
/*!******************************!*\
  !*** ./sources/core/base.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Base = exports.HashTableStorage = void 0;
var utils_1 = __webpack_require__(/*! ../utils/utils */ "./sources/utils/utils.ts");
var dependencies_1 = __webpack_require__(/*! ./dependencies */ "./sources/core/dependencies.ts");
var HashTableStorage = (function () {
    function HashTableStorage() {
        this.hash = {};
    }
    HashTableStorage.prototype.getValue = function (name, defaultValue) {
        var value = this.hash[name];
        if (value === undefined) {
            return defaultValue;
        }
        return value;
    };
    HashTableStorage.prototype.setValue = function (name, val) {
        this.hash[name] = val;
    };
    return HashTableStorage;
}());
exports.HashTableStorage = HashTableStorage;
var Base = (function () {
    function Base(storage) {
        if (storage === void 0) { storage = Base.createPropertiesStorage(); }
        this.storage = storage;
        this.propertyValueListners = {};
        this.storage.owner = this;
    }
    Base.finishCollectDependencies = function () {
        var deps = Base.currentDependencis;
        Base.currentDependencis = undefined;
        return deps;
    };
    Base.startCollectDependencies = function (updater, target, property) {
        if (Base.currentDependencis !== undefined) {
            throw new Error("Attempt to collect nested dependencies. Nested dependencies are not supported.");
        }
        Base.currentDependencis = new dependencies_1.Dependencies(updater, target, property);
    };
    Base.collectDependency = function (target, property) {
        if (Base.currentDependencis === undefined)
            return;
        Base.currentDependencis.addDependency(target, property);
    };
    Base.prototype.onPropertyValueChanged = function (propertyName, oldValue, newValue) {
        var propertyListners = this.propertyValueListners[propertyName];
        if (!!propertyListners) {
            Object.keys(propertyListners).forEach(function (key) { return propertyListners[key](oldValue, newValue); });
        }
    };
    Base.prototype.getPropertyValueCore = function (propertyName, defaultValue) {
        Base.collectDependency(this, propertyName);
        var value = this.storage.getValue(propertyName, defaultValue);
        return value;
    };
    Base.prototype.setPropertyValueCore = function (propertyName, newValue) {
        this.storage.setValue(propertyName, newValue);
    };
    Base.prototype.getPropertyValue = function (propertyName, defaultValue) {
        return this.getPropertyValueCore(propertyName, defaultValue);
    };
    Base.prototype.setPropertyValue = function (propertyName, newValue, defaultValue) {
        var oldValue = this.getPropertyValue(propertyName, defaultValue);
        if (!(0, utils_1.isEqual)(oldValue, newValue)) {
            this.setPropertyValueCore(propertyName, newValue);
            this.onPropertyValueChanged(propertyName, oldValue, newValue);
        }
    };
    Base.prototype.registerPropertyValueListner = function (propertyName, listner, key) {
        if (key === void 0) { key = null; }
        var propertyListners = this.propertyValueListners[propertyName];
        if (!propertyListners) {
            propertyListners = {};
            this.propertyValueListners[propertyName] = propertyListners;
        }
        propertyListners[key] = listner;
    };
    Base.prototype.unRegisterPropertyValueListner = function (propertyName, key) {
        if (key === void 0) { key = null; }
        var propertyListners = this.propertyValueListners[propertyName];
        if (!!propertyListners) {
            delete propertyListners[key];
        }
    };
    Base.currentDependencis = undefined;
    Base.createPropertiesStorage = function () {
        return new HashTableStorage();
    };
    return Base;
}());
exports.Base = Base;


/***/ }),

/***/ "./sources/core/dependencies.ts":
/*!**************************************!*\
  !*** ./sources/core/dependencies.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComputedUpdater = exports.Dependencies = void 0;
var base_1 = __webpack_require__(/*! ./base */ "./sources/core/base.ts");
var Dependencies = (function () {
    function Dependencies(currentDependency, target, property) {
        this.currentDependency = currentDependency;
        this.target = target;
        this.property = property;
        this.dependencies = [];
        this.id = "" + (++Dependencies.DependenciesCount);
    }
    Dependencies.prototype.addDependency = function (target, property) {
        if (this.target === target && this.property === property)
            return;
        if (this.dependencies.some(function (dependency) { return dependency.obj === target && dependency.prop === property; }))
            return;
        this.dependencies.push({
            obj: target,
            prop: property,
            id: this.id
        });
        target.registerPropertyValueListner(property, this.currentDependency, this.id);
    };
    Dependencies.prototype.dispose = function () {
        this.dependencies.forEach(function (dependency) {
            dependency.obj.unRegisterPropertyValueListner(dependency.prop, dependency.id);
        });
    };
    Dependencies.DependenciesCount = 0;
    return Dependencies;
}());
exports.Dependencies = Dependencies;
var ComputedUpdater = (function () {
    function ComputedUpdater(_updater) {
        this._updater = _updater;
        this.dependencies = undefined;
        this.type = ComputedUpdater.ComputedUpdaterType;
    }
    ComputedUpdater.CollectDependencies = function (obj, computedUpdater, propertyName) {
        base_1.Base.startCollectDependencies(function () { return obj[propertyName] = computedUpdater.updater(); }, obj, propertyName);
        var result = computedUpdater.updater();
        var dependencies = base_1.Base.finishCollectDependencies();
        computedUpdater.setDependencies(dependencies);
        return result;
    };
    Object.defineProperty(ComputedUpdater.prototype, "updater", {
        get: function () {
            return this._updater;
        },
        enumerable: false,
        configurable: true
    });
    ComputedUpdater.prototype.setDependencies = function (dependencies) {
        this.clearDependencies();
        this.dependencies = dependencies;
    };
    ComputedUpdater.prototype.getDependencies = function () {
        return this.dependencies;
    };
    ComputedUpdater.prototype.observe = function (target, propertyName) {
        ComputedUpdater.CollectDependencies(target, this, propertyName);
    };
    ComputedUpdater.prototype.clearDependencies = function () {
        if (this.dependencies) {
            this.dependencies.dispose();
            this.dependencies = undefined;
        }
    };
    ComputedUpdater.prototype.dispose = function () {
        this.clearDependencies();
    };
    ComputedUpdater.ComputedUpdaterType = "__dependency_computed";
    return ComputedUpdater;
}());
exports.ComputedUpdater = ComputedUpdater;


/***/ }),

/***/ "./sources/core/dropdown-actions.ts":
/*!******************************************!*\
  !*** ./sources/core/dropdown-actions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./dropdown-actions.scss */ "./sources/core/dropdown-actions.scss");


/***/ }),

/***/ "./sources/core/property.ts":
/*!**********************************!*\
  !*** ./sources/core/property.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.property = void 0;
var dependencies_1 = __webpack_require__(/*! ./dependencies */ "./sources/core/dependencies.ts");
function property(options) {
    return function (target, key) {
        var processComputedUpdater = function (obj, val) {
            if (!!val && typeof val === "object" && val.type === dependencies_1.ComputedUpdater.ComputedUpdaterType) {
                return dependencies_1.ComputedUpdater.CollectDependencies(obj, val, key);
            }
            return val;
        };
        var getDefaultValue = function () {
            var defaultValue = undefined;
            if (!!options) {
                if (options.defaultValue !== undefined) {
                    defaultValue = options.defaultValue;
                    defaultValue = Array.isArray(defaultValue) ? [].concat(defaultValue) : defaultValue;
                }
            }
            return defaultValue;
        };
        Object.defineProperty(target, key, {
            get: function () {
                return this.getPropertyValue(key, getDefaultValue());
            },
            set: function (val) {
                var newValue = processComputedUpdater(this, val);
                this.setPropertyValue(key, newValue, getDefaultValue());
                if (!!options && options.onSet) {
                    options.onSet(newValue, this);
                }
            },
        });
    };
}
exports.property = property;


/***/ }),

/***/ "./sources/find.ts":
/*!*************************!*\
  !*** ./sources/find.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.operationsMap = void 0;
var localization_1 = __webpack_require__(/*! ./localization */ "./sources/localization.ts");
exports.operationsMap = {};
var defaultOperationsMap = {
    string: [
        { op: "C", text: localization_1.Localization.getString("filtercontains") },
        { op: "EQ", text: localization_1.Localization.getString("filterequal") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
    date: [
        { op: "EQ", text: localization_1.Localization.getString("filterdateequal") },
        { op: "G", text: localization_1.Localization.getString("filterdategreater") },
        { op: "L", text: localization_1.Localization.getString("filterdateless") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
    datetime: [
        { op: "G", text: localization_1.Localization.getString("filterdategreater") },
        { op: "L", text: localization_1.Localization.getString("filterdateless") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
    integer: [
        { op: "EQ", text: localization_1.Localization.getString("filterequal") },
        { op: "NEQ", text: localization_1.Localization.getString("filternotequal") },
        { op: "G", text: localization_1.Localization.getString("filtergreater") },
        { op: "L", text: localization_1.Localization.getString("filterless") },
        { op: "GEQ", text: localization_1.Localization.getString("filtergreaterequal") },
        { op: "LEQ", text: localization_1.Localization.getString("filterlessequal") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
    numeric: [
        { op: "EQ", text: localization_1.Localization.getString("filterequal") },
        { op: "NEQ", text: localization_1.Localization.getString("filternotequal") },
        { op: "G", text: localization_1.Localization.getString("filtergreater") },
        { op: "L", text: localization_1.Localization.getString("filterless") },
        { op: "GEQ", text: localization_1.Localization.getString("filtergreaterequal") },
        { op: "LEQ", text: localization_1.Localization.getString("filterlessequal") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
    bool: [
        { op: "EQ", text: localization_1.Localization.getString("filterequal") },
    ],
    money: [
        { op: "EQ", text: localization_1.Localization.getString("filterequal") },
        { op: "NEQ", text: localization_1.Localization.getString("filternotequal") },
        { op: "G", text: localization_1.Localization.getString("filtergreater") },
        { op: "L", text: localization_1.Localization.getString("filterless") },
        { op: "GEQ", text: localization_1.Localization.getString("filtergreaterequal") },
        { op: "LEQ", text: localization_1.Localization.getString("filterlessequal") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
    radiobutton: [
        { op: "EQ", text: localization_1.Localization.getString("filterequal") },
        { op: "ISN", text: localization_1.Localization.getString("filterisnull") },
        { op: "ISNN", text: localization_1.Localization.getString("filterisnotnull") },
    ],
};
Object.keys(defaultOperationsMap).forEach(function (key) { return exports.operationsMap[key] = defaultOperationsMap[key]; });


/***/ }),

/***/ "./sources/icon.ts":
/*!*************************!*\
  !*** ./sources/icon.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrowdown = exports.cross = exports.search = exports.arrowright = exports.edit = exports.more = exports.filter = exports.sortdown = exports.sortup = exports.check = exports.more_sq = exports.paste = exports.del = exports.save = exports.table = exports.equal = exports.add = void 0;
exports.add = __webpack_require__(/*! ./icons/icon_item-add.svg */ "./sources/icons/icon_item-add.svg");
exports.equal = __webpack_require__(/*! ./icons/icon_equal.svg */ "./sources/icons/icon_equal.svg");
exports.table = __webpack_require__(/*! ./icons/icon_table-merge.svg */ "./sources/icons/icon_table-merge.svg");
exports.save = __webpack_require__(/*! ./icons/icon_item-save.svg */ "./sources/icons/icon_item-save.svg");
exports.del = __webpack_require__(/*! ./icons/icon_item-delete.svg */ "./sources/icons/icon_item-delete.svg");
exports.paste = __webpack_require__(/*! ./icons/icon_paste.svg */ "./sources/icons/icon_paste.svg");
exports.more_sq = __webpack_require__(/*! ./icons/icon_more_sq.svg */ "./sources/icons/icon_more_sq.svg");
exports.check = __webpack_require__(/*! ./icons/icon_check.svg */ "./sources/icons/icon_check.svg");
exports.sortup = __webpack_require__(/*! ./icons/icon_sort-up.svg */ "./sources/icons/icon_sort-up.svg");
exports.sortdown = __webpack_require__(/*! ./icons/icon_sort-down.svg */ "./sources/icons/icon_sort-down.svg");
exports.filter = __webpack_require__(/*! ./icons/icon_filter.svg */ "./sources/icons/icon_filter.svg");
exports.more = __webpack_require__(/*! ./icons/icon_more.svg */ "./sources/icons/icon_more.svg");
exports.edit = __webpack_require__(/*! ./icons/icon_edit.svg */ "./sources/icons/icon_edit.svg");
exports.arrowright = __webpack_require__(/*! ./icons/icon_arrow-right.svg */ "./sources/icons/icon_arrow-right.svg");
exports.search = __webpack_require__(/*! ./icons/icon_search.svg */ "./sources/icons/icon_search.svg");
exports.cross = __webpack_require__(/*! ./icons/icon_cross.svg */ "./sources/icons/icon_cross.svg");
exports.arrowdown = __webpack_require__(/*! ./icons/icon_arrow-down.svg */ "./sources/icons/icon_arrow-down.svg");


/***/ }),

/***/ "./sources/index.ts":
/*!**************************!*\
  !*** ./sources/index.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./core/action */ "./sources/core/action.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/actions */ "./sources/core/actions.ts"), exports);
__exportStar(__webpack_require__(/*! ./core/dropdown-actions */ "./sources/core/dropdown-actions.ts"), exports);
__exportStar(__webpack_require__(/*! ./find */ "./sources/find.ts"), exports);
__exportStar(__webpack_require__(/*! ./table */ "./sources/table/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell */ "./sources/table/cell.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column */ "./sources/table/column.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/summary */ "./sources/table/summary.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter */ "./sources/table/column-filter.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter-item */ "./sources/table/column-filter-item.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-default */ "./sources/table/filter-default.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-select */ "./sources/table/filter-select.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/number */ "./sources/table/number.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/bool */ "./sources/table/bool.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils/array-data-provider */ "./sources/utils/array-data-provider.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils/remote-data-provider */ "./sources/utils/remote-data-provider.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils/utils */ "./sources/utils/utils.ts"), exports);
__exportStar(__webpack_require__(/*! ./icon */ "./sources/icon.ts"), exports);


/***/ }),

/***/ "./sources/knockout/index.ts":
/*!***********************************!*\
  !*** ./sources/knockout/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tableTemplate = exports.KnockoutHashTableStorage = exports.KnockoutInstance = void 0;
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var table_1 = __webpack_require__(/*! ../table */ "./sources/table/index.ts");
__exportStar(__webpack_require__(/*! ./table/cell */ "./sources/knockout/table/cell.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-editor */ "./sources/knockout/table/cell-editor.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/cell-viewer */ "./sources/knockout/table/cell-viewer.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/summary */ "./sources/knockout/table/summary.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/search */ "./sources/knockout/table/search.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-default */ "./sources/knockout/table/filter-default.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter */ "./sources/knockout/table/column-filter.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/column-filter-item */ "./sources/knockout/table/column-filter-item.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/filter-select */ "./sources/knockout/table/filter-select.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/action */ "./sources/knockout/widgets/action.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/actions */ "./sources/knockout/widgets/actions.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/dropdown-actions */ "./sources/knockout/widgets/dropdown-actions.ts"), exports);
__exportStar(__webpack_require__(/*! ./widgets/icon */ "./sources/knockout/widgets/icon.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/bool-cell-editor */ "./sources/knockout/table/bool-cell-editor.ts"), exports);
__exportStar(__webpack_require__(/*! ./table/bool-cell-viewer */ "./sources/knockout/table/bool-cell-viewer.ts"), exports);
__exportStar(__webpack_require__(/*! .. */ "./sources/index.ts"), exports);
exports.KnockoutInstance = ko;
var KnockoutHashTableStorage = (function (_super) {
    __extends(KnockoutHashTableStorage, _super);
    function KnockoutHashTableStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KnockoutHashTableStorage.prototype.linkArrayToObservable = function (observableArray) {
        var result = [].concat(observableArray());
        ["pop", "push", "splice", "slice", "shift", "unshift"].forEach(function (funcName) {
            result[funcName] = function () {
                Array.prototype[funcName].apply(result, arguments);
                return observableArray[funcName].apply(observableArray, arguments);
            };
        });
        return result;
    };
    KnockoutHashTableStorage.prototype.createObservable = function (value) {
        if (Array.isArray(value)) {
            return ko.observableArray(value);
        }
        return ko.observable(value);
    };
    KnockoutHashTableStorage.prototype.getValue = function (name, defaultValue) {
        var value = _super.prototype.getValue.call(this, name, defaultValue);
        if (!ko.isObservable(value)) {
            this.hash[name] = this.createObservable(value);
        }
        var observable = this.hash[name];
        if (ko.isObservableArray(observable)) {
            return this.linkArrayToObservable(observable);
        }
        return observable();
    };
    KnockoutHashTableStorage.prototype.setValue = function (name, val) {
        if (!ko.isObservable(this.hash[name])) {
            this.hash[name] = this.createObservable(this.hash[name]);
        }
        var observable = this.hash[name];
        this.hash[name](val);
    };
    return KnockoutHashTableStorage;
}(base_1.HashTableStorage));
exports.KnockoutHashTableStorage = KnockoutHashTableStorage;
base_1.Base.createPropertiesStorage = function () { return new KnockoutHashTableStorage(); };
exports.tableTemplate = __webpack_require__(/*! ./table/index.html */ "./sources/knockout/table/index.html")["default"];
ko.components.register("table4", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = params.model;
            model.initialize(componentInfo.element);
            return model;
        }
    },
    template: exports.tableTemplate
});
function renderTable(element) {
    var el = element;
    if (typeof element === "string") {
        el = document.querySelectorAll(element)[0];
    }
    el.innerHTML = "<table4 params=\"{ model: $data }\"></table4>";
    ko.utils.domNodeDisposal.addDisposeCallback(el, function (node) {
        ko.cleanNode(node);
        el.innerHTML = "";
    });
    ko.applyBindings(this, el);
}
table_1.Table.prototype["render"] = renderTable;


/***/ }),

/***/ "./sources/knockout/table/bool-cell-editor.ts":
/*!****************************************************!*\
  !*** ./sources/knockout/table/bool-cell-editor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.boolCellEditorTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
exports.boolCellEditorTemplate = __webpack_require__(/*! ./bool-cell-editor.html */ "./sources/knockout/table/bool-cell-editor.html")["default"];
ko.components.register("bool-cell-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = ko.unwrap(params.model);
            return model;
        }
    },
    template: exports.boolCellEditorTemplate
});


/***/ }),

/***/ "./sources/knockout/table/bool-cell-viewer.ts":
/*!****************************************************!*\
  !*** ./sources/knockout/table/bool-cell-viewer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.boolCellViewerTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
exports.boolCellViewerTemplate = __webpack_require__(/*! ./bool-cell-viewer.html */ "./sources/knockout/table/bool-cell-viewer.html")["default"];
ko.components.register("bool-cell-viewer", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: exports.boolCellViewerTemplate
});


/***/ }),

/***/ "./sources/knockout/table/cell-editor.ts":
/*!***********************************************!*\
  !*** ./sources/knockout/table/cell-editor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cellEditorTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
exports.cellEditorTemplate = __webpack_require__(/*! ./cell-editor.html */ "./sources/knockout/table/cell-editor.html")["default"];
ko.components.register("table4js-cell-editor", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var model = ko.unwrap(params.model);
            return model;
        }
    },
    template: exports.cellEditorTemplate
});


/***/ }),

/***/ "./sources/knockout/table/cell-viewer.ts":
/*!***********************************************!*\
  !*** ./sources/knockout/table/cell-viewer.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cellViewerTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
exports.cellViewerTemplate = __webpack_require__(/*! ./cell-viewer.html */ "./sources/knockout/table/cell-viewer.html")["default"];
ko.components.register("table4js-cell-viewer", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: exports.cellViewerTemplate
});


/***/ }),

/***/ "./sources/knockout/table/cell.ts":
/*!****************************************!*\
  !*** ./sources/knockout/table/cell.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cellTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var cell_1 = __webpack_require__(/*! ../../table/cell */ "./sources/table/cell.ts");
exports.cellTemplate = __webpack_require__(/*! ./cell.html */ "./sources/knockout/table/cell.html")["default"];
ko.components.register("table4js-table-cell", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var isMergedCell = ko.computed(function () { return params.cell.count > 1 && params.table.isMergedСells; });
            return __assign(__assign({}, params), { startEdit: function () { return params.table.startEditCell(params.cell); }, containerCss: ko.computed(function () { return cell_1.TableCell.getContainerCss(params.cell, isMergedCell()); }), contentCss: ko.computed(function () { return cell_1.TableCell.getContentCss(params.cell, isMergedCell()); }), isMergedCell: isMergedCell });
        }
    },
    template: exports.cellTemplate
});


/***/ }),

/***/ "./sources/knockout/table/column-filter-item.ts":
/*!******************************************************!*\
  !*** ./sources/knockout/table/column-filter-item.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var filterTemplate = (__webpack_require__(/*! ./column-filter-item.html */ "./sources/knockout/table/column-filter-item.html")["default"]);
ko.components.register("table4js-column-filter-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.filterItem;
        }
    },
    template: filterTemplate
});


/***/ }),

/***/ "./sources/knockout/table/column-filter.ts":
/*!*************************************************!*\
  !*** ./sources/knockout/table/column-filter.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var filterTemplate = (__webpack_require__(/*! ./column-filter.html */ "./sources/knockout/table/column-filter.html")["default"]);
ko.components.register("table4js-column-filter", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.context;
        }
    },
    template: filterTemplate
});


/***/ }),

/***/ "./sources/knockout/table/filter-default.ts":
/*!**************************************************!*\
  !*** ./sources/knockout/table/filter-default.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var defaultFilterTemplate = (__webpack_require__(/*! ./filter-default.html */ "./sources/knockout/table/filter-default.html")["default"]);
ko.components.register("table4js-table-filter-default", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: defaultFilterTemplate
});


/***/ }),

/***/ "./sources/knockout/table/filter-select.ts":
/*!*************************************************!*\
  !*** ./sources/knockout/table/filter-select.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var filter_select_1 = __webpack_require__(/*! ../../table/filter-select */ "./sources/table/filter-select.ts");
var selectboxFilterTemplate = (__webpack_require__(/*! ./filter-select.html */ "./sources/knockout/table/filter-select.html")["default"]);
ko.components.register("table4js-filter-select", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var viewModel = new filter_select_1.TableFilterSelect(params.value, params.columnName, params.columnType, params.getColumnData, params.isOpen, params.title, params.moreText);
            var close = function () { return viewModel.isOpen = false; };
            document.body.addEventListener("click", close);
            ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                document.body.removeEventListener("click", close);
            });
            return viewModel;
        }
    },
    template: selectboxFilterTemplate
});


/***/ }),

/***/ "./sources/knockout/table/search.ts":
/*!******************************************!*\
  !*** ./sources/knockout/table/search.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.searchTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
exports.searchTemplate = __webpack_require__(/*! ./search.html */ "./sources/knockout/table/search.html")["default"];
ko.components.register("table4js-search", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var _a, _b;
            var model = ko.unwrap(params.model);
            var searchModel = model[(_a = params.options) === null || _a === void 0 ? void 0 : _a.data] || model;
            var searchText = ((_b = params.options) === null || _b === void 0 ? void 0 : _b.text) && model[params.options.text] || ko.observable();
            var process = function (event) {
                if (event.keyCode === 13)
                    searchModel.search(searchText());
            };
            componentInfo.element.addEventListener('keyup', process);
            return {
                value: searchText,
                refresh: function () { searchModel.search(searchText()); },
                dispose: function () { return componentInfo.element.removeEventListener('keyup', process); }
            };
        }
    },
    template: exports.searchTemplate
});


/***/ }),

/***/ "./sources/knockout/table/summary.ts":
/*!*******************************************!*\
  !*** ./sources/knockout/table/summary.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summaryTemplate = void 0;
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var summary_1 = __webpack_require__(/*! ../../table/summary */ "./sources/table/summary.ts");
exports.summaryTemplate = __webpack_require__(/*! ./summary.html */ "./sources/knockout/table/summary.html")["default"];
ko.components.register("table4js-table-summary", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return new summary_1.TableSummary(params.column);
        }
    },
    template: exports.summaryTemplate
});


/***/ }),

/***/ "./sources/knockout/widgets/action.ts":
/*!********************************************!*\
  !*** ./sources/knockout/widgets/action.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionItemWidget = void 0;
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var actionTemplate = (__webpack_require__(/*! ./action.html */ "./sources/knockout/widgets/action.html")["default"]);
ko.components.register("table4js-action-item", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: actionTemplate
});


/***/ }),

/***/ "./sources/knockout/widgets/actions.ts":
/*!*********************************************!*\
  !*** ./sources/knockout/widgets/actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisActionsWidget = void 0;
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var actionsTemplate = (__webpack_require__(/*! ./actions.html */ "./sources/knockout/widgets/actions.html")["default"]);
ko.components.register("table4js-actions", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var modelValue = (params.model || {})[params.options.action];
            return {
                actions: modelValue,
                short: params.options.short,
                groupName: params.options.groupName,
                toggleChildActions: function (_, event) {
                    event.target.classList.toggle("table4js-nested-actions--open");
                }
            };
        }
    },
    template: actionsTemplate
});


/***/ }),

/***/ "./sources/knockout/widgets/dropdown-actions.ts":
/*!******************************************************!*\
  !*** ./sources/knockout/widgets/dropdown-actions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisDropdownActions = void 0;
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
var dropdownTemplate = (__webpack_require__(/*! ./dropdown-actions.html */ "./sources/knockout/widgets/dropdown-actions.html")["default"]);
ko.components.register("table4js-dropdown-actions", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var isOpen = params.isOpen || ko.observable(false);
            var close = function () { return isOpen(false); };
            document.body.addEventListener("click", close);
            ko.utils.domNodeDisposal.addDisposeCallback(componentInfo.element, function () {
                document.body.removeEventListener("click", close);
            });
            return {
                isOpen: isOpen,
                title: params.title || "",
                moreText: params.moreText || "",
                data: params.data,
                actions: params.actions,
                toggle: function (_, event) {
                    isOpen(!isOpen());
                    event.stopPropagation();
                },
            };
        }
    },
    template: dropdownTemplate
});


/***/ }),

/***/ "./sources/knockout/widgets/icon.ts":
/*!******************************************!*\
  !*** ./sources/knockout/widgets/icon.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbrisIconWidget = void 0;
var ko = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
ko.components.register("table4js-icon", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params;
        }
    },
    template: (__webpack_require__(/*! ./icon.html */ "./sources/knockout/widgets/icon.html")["default"])
});


/***/ }),

/***/ "./sources/localization.ts":
/*!*********************************!*\
  !*** ./sources/localization.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Localization = void 0;
var Localization = (function () {
    function Localization() {
    }
    var _a;
    _a = Localization;
    Localization.englishStrings = {
        filtercontains: "Contains",
        filterequal: "Equal",
        filterisnull: "Empty",
        filterisnotnull: "Not empty",
        filtergreater: "Greater",
        filterless: "Less",
        filtergreaterequal: "Greater or equal",
        filterlessequal: "Less or equal",
        filterdatenotequal: "Not equal",
        filterdateequal: "Equal",
        filterdategreater: "From",
        filterdateless: "To",
        noData: "No Data"
    };
    Localization.getString = function (stringId) {
        return _a.englishStrings[stringId];
    };
    return Localization;
}());
exports.Localization = Localization;


/***/ }),

/***/ "./sources/table/bool.ts":
/*!*******************************!*\
  !*** ./sources/table/bool.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoolCell = void 0;
var cell_1 = __webpack_require__(/*! ./cell */ "./sources/table/cell.ts");
__webpack_require__(/*! ./bool.scss */ "./sources/table/bool.scss");
var BoolCell = (function () {
    function BoolCell() {
        this.name = "bool";
        this.editor = "bool-cell-editor";
        this.viewer = "bool-cell-viewer";
    }
    return BoolCell;
}());
exports.BoolCell = BoolCell;
cell_1.TableCell.registerCellType(new BoolCell());


/***/ }),

/***/ "./sources/table/cell-editor.ts":
/*!**************************************!*\
  !*** ./sources/table/cell-editor.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InplaceEditor = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
__webpack_require__(/*! ./cell-editor.scss */ "./sources/table/cell-editor.scss");
var InplaceEditor = (function (_super) {
    __extends(InplaceEditor, _super);
    function InplaceEditor(cell) {
        var _this = _super.call(this) || this;
        _this.cell = cell;
        _this.value = _this.cell.data;
        return _this;
    }
    InplaceEditor.prototype.complete = function (commit) {
        if (commit) {
            this.cell.data = this.value;
        }
        this.cell.inplaceEditor = undefined;
    };
    InplaceEditor.prototype.processKeyUp = function (event) {
        if (event.keyCode === 13 || event.keyCode === 27) {
            this.complete(event.keyCode === 13);
        }
    };
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Object)
    ], InplaceEditor.prototype, "value", void 0);
    return InplaceEditor;
}(base_1.Base));
exports.InplaceEditor = InplaceEditor;


/***/ }),

/***/ "./sources/table/cell.ts":
/*!*******************************!*\
  !*** ./sources/table/cell.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableCell = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var TableCell = (function (_super) {
    __extends(TableCell, _super);
    function TableCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableCell.registerCellType = function (cellType) {
        TableCell.cellTypes[cellType.name] = cellType;
    };
    TableCell.getContainerCss = function (cell, isMergedCell) {
        var containerCss = "table4js-table-cell__container " + cell.css;
        if (isMergedCell) {
            containerCss += " cell__sticky-text";
        }
        return containerCss;
    };
    TableCell.getContentCss = function (cell, isMergedCell) {
        var contentCss = isMergedCell ? "table4js-table-cell__text--merged" : "table4js-table-cell__text";
        if (cell instanceof TableCell && cell.isModified) {
            contentCss += " table4js-table-cell__text--modified";
        }
        return contentCss;
    };
    TableCell.prototype.getCellTypeDescription = function (type) {
        return TableCell.cellTypes[type] || TableCell.cellTypes["default"];
    };
    TableCell.prototype.getCellCss = function (data, column) {
        return this.getCellTypeDescription(column.type).css;
    };
    TableCell.prototype.getCellEditor = function (data, column) {
        return this.getCellTypeDescription(column.type).editor || TableCell.cellTypes["default"].editor;
    };
    TableCell.prototype.getCellViewer = function (data, column) {
        return this.getCellTypeDescription(column.type).viewer || TableCell.cellTypes["default"].viewer;
    };
    TableCell.prototype.getCellText = function (val) {
        return val;
    };
    TableCell.prototype.initialize = function (col, back, data, color) {
        this.data = data[col.name],
            this.color = color;
        this.name = col.name;
        this.css = this.getCellCss(data, col);
        this.editor = this.getCellEditor(data, col);
        this.viewer = this.getCellViewer(data, col);
        if (back !== null) {
            if (back) {
                if (col.last && col.last.text === this.text) {
                    this.count = col.last.count + 1;
                    col.last.count = 0;
                    if (col.last == col.prev) {
                        col.prev = this;
                        col.count = this.count;
                    }
                }
                col.last = this;
            }
            else {
                if (col.last === null)
                    col.last = this;
                if (col.prevValue && (col.prevValue === this.text)) {
                    col.count++;
                    this.count = 0;
                    col.prev.count = col.count;
                }
                else {
                    col.count = 1;
                    col.prev = this;
                    col.prevValue = this.text;
                }
            }
        }
        this.isModified = false;
    };
    TableCell.cellTypes = {
        "default": {
            css: "table4js-table-cell--left",
            editor: "table4js-cell-editor",
            viewer: "table4js-cell-viewer"
        },
    };
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableCell.prototype, "isModified", void 0);
    __decorate([
        (0, property_1.property)({
            onSet: function (val, target) {
                if (target.text !== val) {
                    target.text = target.getCellText(val);
                    target.isModified = true;
                }
            }
        }),
        __metadata("design:type", Object)
    ], TableCell.prototype, "data", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], TableCell.prototype, "text", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: 1 }),
        __metadata("design:type", Number)
    ], TableCell.prototype, "count", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], TableCell.prototype, "color", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], TableCell.prototype, "name", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Object)
    ], TableCell.prototype, "inplaceEditor", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], TableCell.prototype, "css", void 0);
    return TableCell;
}(base_1.Base));
exports.TableCell = TableCell;


/***/ }),

/***/ "./sources/table/column-filter-item.ts":
/*!*********************************************!*\
  !*** ./sources/table/column-filter-item.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ColumnFilterItem = exports.FilterItemValue = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var find_1 = __webpack_require__(/*! ../find */ "./sources/find.ts");
var FilterItemValue = (function (_super) {
    __extends(FilterItemValue, _super);
    function FilterItemValue(column) {
        var _this = _super.call(this) || this;
        _this.column = column;
        _this.field = column.name;
        return _this;
    }
    __decorate([
        (0, property_1.property)({ onSet: function (val, target) { return target.column.filterContext.apply(); } }),
        __metadata("design:type", Object)
    ], FilterItemValue.prototype, "value", void 0);
    __decorate([
        (0, property_1.property)({ onSet: function (val, target) { return target.column.filterContext.apply(); } }),
        __metadata("design:type", String)
    ], FilterItemValue.prototype, "op", void 0);
    return FilterItemValue;
}(base_1.Base));
exports.FilterItemValue = FilterItemValue;
var ColumnFilterItem = (function (_super) {
    __extends(ColumnFilterItem, _super);
    function ColumnFilterItem(column, getColumnData) {
        var _this = _super.call(this) || this;
        _this.column = column;
        _this.getColumnData = getColumnData;
        _this.filterItemValue = new FilterItemValue(column);
        if (find_1.operationsMap[_this.column.type]) {
            _this.operations = find_1.operationsMap[_this.column.type];
        }
        else {
            _this.operations = find_1.operationsMap["string"];
        }
        _this.operation = _this.operations[0];
        return _this;
    }
    Object.defineProperty(ColumnFilterItem.prototype, "filterEditorName", {
        get: function () {
            return "table4js-table-filter-default";
        },
        enumerable: false,
        configurable: true
    });
    ColumnFilterItem.prototype.getFilterValue = function () {
        return {
            field: this.filterItemValue.field,
            op: this.filterItemValue.op,
            value: this.filterItemValue.value
        };
    };
    __decorate([
        (0, property_1.property)({
            onSet: function (val, target) {
                if (!!val) {
                    target.filterItemValue.op = val.op;
                }
                target.showOperand = val && val.op !== "ISN" && val.op !== "ISNN";
            }
        }),
        __metadata("design:type", Object)
    ], ColumnFilterItem.prototype, "operation", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: true }),
        __metadata("design:type", Boolean)
    ], ColumnFilterItem.prototype, "showOperand", void 0);
    return ColumnFilterItem;
}(base_1.Base));
exports.ColumnFilterItem = ColumnFilterItem;


/***/ }),

/***/ "./sources/table/column-filter.ts":
/*!****************************************!*\
  !*** ./sources/table/column-filter.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilterContext = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var column_filter_item_1 = __webpack_require__(/*! ./column-filter-item */ "./sources/table/column-filter-item.ts");
__webpack_require__(/*! ./column-filter.scss */ "./sources/table/column-filter.scss");
var FilterContext = (function (_super) {
    __extends(FilterContext, _super);
    function FilterContext(column, dataProviderOwner) {
        var _this = _super.call(this) || this;
        _this.column = column;
        _this.dataProviderOwner = dataProviderOwner;
        _this.addItem = function (column) {
            _this.filterItems.push(new column_filter_item_1.ColumnFilterItem(_this.column, function (column, filter, limit, offset, callback) {
                _this.dataProviderOwner.dataProvider.getColumnData(column, filter, limit, offset, callback);
            }));
            _this.showFilter = true;
        };
        _this.removeItem = function (item) {
            var currentFilterItems = _this.filterItems;
            currentFilterItems.splice(currentFilterItems.indexOf(item), 1);
            _this.showFilter = !!currentFilterItems.length;
            _this.value = currentFilterItems.map(function (i) { return i.filterItemValue; });
        };
        return _this;
    }
    FilterContext.prototype.apply = function () {
        this.value = this.filterItems.map(function (item) { return item.getFilterValue(); });
    };
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], FilterContext.prototype, "showFilter", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Object)
    ], FilterContext.prototype, "value", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: [] }),
        __metadata("design:type", Array)
    ], FilterContext.prototype, "filterItems", void 0);
    return FilterContext;
}(base_1.Base));
exports.FilterContext = FilterContext;


/***/ }),

/***/ "./sources/table/column.ts":
/*!*********************************!*\
  !*** ./sources/table/column.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableColumn = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var column_filter_1 = __webpack_require__(/*! ./column-filter */ "./sources/table/column-filter.ts");
var TableColumn = (function (_super) {
    __extends(TableColumn, _super);
    function TableColumn(columnDescription, table) {
        var _this = _super.call(this) || this;
        _this.table = table;
        _this.type = "string";
        _this.visible = true;
        _this.clickFilter = function (column, event) {
            column.filterContext.addItem(column);
            event.stopPropagation();
        };
        Object.keys(columnDescription || {}).forEach(function (key) {
            if (columnDescription[key] !== undefined) {
                _this[key] = columnDescription[key];
            }
        });
        if (_this.title === undefined) {
            _this.title = _this.name;
        }
        _this.filterContext = new column_filter_1.FilterContext(_this, table);
        return _this;
    }
    TableColumn.prototype.calculateSummary = function (column) {
        if (column.summaryParams && column.summaryParams.field === column.name && column.summaryParams.func) {
            this.table.dataProvider.getSummary(column.summaryParams.func, column.summaryParams.field, this.table["tableFilter"], function (data) { return column.summaryValue = data; });
        }
    };
    TableColumn.prototype.dispose = function () {
    };
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Boolean)
    ], TableColumn.prototype, "order", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Object)
    ], TableColumn.prototype, "summaryValue", void 0);
    __decorate([
        (0, property_1.property)({ onSet: function (val, target) {
                target.calculateSummary(target);
            } }),
        __metadata("design:type", Object)
    ], TableColumn.prototype, "summaryParams", void 0);
    return TableColumn;
}(base_1.Base));
exports.TableColumn = TableColumn;


/***/ }),

/***/ "./sources/table/filter-default.ts":
/*!*****************************************!*\
  !*** ./sources/table/filter-default.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./filter-default.scss */ "./sources/table/filter-default.scss");


/***/ }),

/***/ "./sources/table/filter-select.ts":
/*!****************************************!*\
  !*** ./sources/table/filter-select.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableFilterSelect = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
__webpack_require__(/*! ./filter-select.scss */ "./sources/table/filter-select.scss");
function conversionByType(value, columnType) {
    if (columnType === "bool")
        return value ? "Yes" : "No";
    return value;
}
function filterSearchByType(columnType) {
    if (columnType === "bool")
        return false;
    return true;
}
var TableFilterSelect = (function (_super) {
    __extends(TableFilterSelect, _super);
    function TableFilterSelect(value, columnName, columnType, getColumnData, isOpen, title, moreText) {
        if (title === void 0) { title = ""; }
        if (moreText === void 0) { moreText = ""; }
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.columnName = columnName;
        _this.columnType = columnType;
        _this.getColumnData = getColumnData;
        _this.title = title;
        _this.moreText = moreText;
        _this.limit = 10;
        _this.offset = 0;
        _this.toggle = function (_, event) {
            _this.isOpen = !_this.isOpen;
            event.stopPropagation();
        };
        _this.isChecked = function (item) {
            return _this.selectedItems.indexOf(item) !== -1;
        };
        _this.clickItem = function (item) {
            var itemIndex = _this.selectedItems.indexOf(item);
            if (itemIndex !== -1) {
                _this.deleteItems(item);
            }
            else {
                _this.selectedItems.push(item);
            }
            _this.value.value = _this.selectedItems.map(function (i) { return i.value; });
            if (Array.isArray(_this.value.value) && _this.value.value.length === 0)
                _this.value.value = undefined;
        };
        _this.deleteItems = function (name) {
            var itemIndex = _this.selectedItems.indexOf(name);
            _this.selectedItems.splice(itemIndex, 1);
        };
        if (isOpen !== undefined) {
            _this.isOpen = isOpen;
        }
        _this.updateFoundItems(null);
        _this.isFilterSearchByType = filterSearchByType(columnType);
        return _this;
    }
    TableFilterSelect.prototype.updateFoundItems = function (filterValue) {
        var _this = this;
        this.foundItems = [];
        this.offset = 0;
        this.getColumnData(this.columnName, filterValue, this.limit, this.offset, function (items) {
            _this.foundItems = items.map(function (i) { return { name: conversionByType(i, _this.columnType), value: i }; });
            _this.isLoadMore = items.length === _this.limit;
            _this.offset += 10;
        });
    };
    TableFilterSelect.prototype.loadMore = function () {
        var _this = this;
        this.getColumnData(this.columnName, this.filterText, this.limit, this.offset, function (items) {
            items.forEach(function (i) { return _this.foundItems.push(i); });
            _this.isLoadMore = items.length === _this.limit;
            _this.offset += 10;
        });
    };
    TableFilterSelect.prototype.dispose = function () {
    };
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableFilterSelect.prototype, "isOpen", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableFilterSelect.prototype, "isFilterSearchByType", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableFilterSelect.prototype, "isLoadMore", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: [], onSet: function (val, target) {
                console.log("Set filter value to " + JSON.stringify(val));
                target.value.value = target.selectedItems;
            } }),
        __metadata("design:type", Array)
    ], TableFilterSelect.prototype, "selectedItems", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: [] }),
        __metadata("design:type", Array)
    ], TableFilterSelect.prototype, "foundItems", void 0);
    __decorate([
        (0, property_1.property)({ onSet: function (val, target) {
                target.updateFoundItems(val);
            }, }),
        __metadata("design:type", String)
    ], TableFilterSelect.prototype, "filterText", void 0);
    return TableFilterSelect;
}(base_1.Base));
exports.TableFilterSelect = TableFilterSelect;


/***/ }),

/***/ "./sources/table/index.ts":
/*!********************************!*\
  !*** ./sources/table/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var action_1 = __webpack_require__(/*! ../core/action */ "./sources/core/action.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var dependencies_1 = __webpack_require__(/*! ../core/dependencies */ "./sources/core/dependencies.ts");
var cell_editor_1 = __webpack_require__(/*! ./cell-editor */ "./sources/table/cell-editor.ts");
var cell_1 = __webpack_require__(/*! ./cell */ "./sources/table/cell.ts");
var column_1 = __webpack_require__(/*! ./column */ "./sources/table/column.ts");
var search_1 = __webpack_require__(/*! ./search */ "./sources/table/search.ts");
var array_data_provider_1 = __webpack_require__(/*! ../utils/array-data-provider */ "./sources/utils/array-data-provider.ts");
var row_1 = __webpack_require__(/*! ./row */ "./sources/table/row.ts");
var utils_1 = __webpack_require__(/*! ../utils/utils */ "./sources/utils/utils.ts");
var localization_1 = __webpack_require__(/*! ../localization */ "./sources/localization.ts");
var Icons = __webpack_require__(/*! ../icon */ "./sources/icon.ts");
__webpack_require__(/*! ./index.scss */ "./sources/table/index.scss");
var Table = (function (_super) {
    __extends(Table, _super);
    function Table(config, element) {
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.innerActions = [];
        _this.icons = Icons;
        _this._dataProvider = undefined;
        _this.clickColumn = function (column, event) {
            if (_this.isShowDetail) {
                _this.hideDetail();
            }
            var newOrder = column.order === undefined ? false : !column.order;
            if (!event.shiftKey) {
                _this.columns.map(function (c) { return c.order = undefined; });
            }
            column.order = newOrder;
            _this.refresh();
        };
        _this.startEditCell = function (cell) {
            if (_this.currentCellEditor)
                _this.currentCellEditor.inplaceEditor = undefined;
            cell.inplaceEditor = new cell_editor_1.InplaceEditor(cell);
            _this.currentCellEditor = cell;
            _this.completeEditCell();
        };
        _this.curCol = undefined;
        _this.nxtCol = undefined;
        _this.pageX = undefined;
        _this.nxtColWidth = undefined;
        _this.curColWidth = undefined;
        _this.logMouseOver = function (d, e) {
            e.target.style.borderRight = '2px solid rgba(255, 255, 255, 0.5)';
        };
        _this.logMouseOut = function (d, e) {
            e.target.style.borderRight = '';
        };
        _this.logMouseMove = function (d, e) {
            if (_this.curCol && e.buttons) {
                var diffX = e.pageX - _this.pageX;
                _this.nxtCol && (_this.nxtCol.style.width = (_this.nxtColWidth - (diffX)) + 'px');
                _this.curCol.style.width = (_this.curColWidth + diffX) + 'px';
            }
        };
        _this.logMouseDown = function (d, e) {
            _this.curCol = e.target.parentElement;
            _this.nxtCol = _this.curCol.nextElementSibling.nextElementSibling ? _this.curCol.nextElementSibling : undefined;
            _this.pageX = e.pageX;
            var padding = _this.paddingDiff(_this.curCol);
            _this.curColWidth = _this.curCol.offsetWidth - padding;
            if (_this.nxtCol)
                _this.nxtColWidth = _this.nxtCol.offsetWidth - padding;
        };
        _this.logMouseUp = function (d, e) {
            _this.curCol = undefined;
            _this.nxtCol = undefined;
            _this.pageX = undefined;
            _this.nxtColWidth = undefined;
            _this.curColWidth = undefined;
            return false;
        };
        _this.rootLevel = true;
        _this.lastOffset = 0;
        _this.lastOffsetBack = 0;
        _this.partRowCount = 10;
        _this.lastSelectRow = null;
        _this.searchModel = new search_1.SearchModel();
        _this.getActions = function (container) {
            var actions = [].concat(_this.innerActions).concat(_this.config.actions || []);
            return actions.filter(function (action) { return action.container === container; });
        };
        _this.showSearch = config.enableSearch === true;
        _this.createActions(_this.config);
        _this.createColumns(_this.config);
        _this.filterUpdater = new dependencies_1.ComputedUpdater(function () { return _this.updateByFilter(); });
        _this.filterUpdater.observe(_this, "__filterUpdaterValue");
        _this.searchModel.updater = function () { return _this.updateByFilter(); };
        if (!!element) {
            _this.initialize(element);
        }
        _this.isMergedСells = config.enableMergedСells;
        return _this;
    }
    Table.prototype.updateByFilter = function () {
        var _this = this;
        var isOldFilter = (this.tableFilter && this.tableFilter.length > 0);
        this.tableFilter = [];
        if (this.searchModel.searchValue) {
            this.tableFilter.push({ value: this.searchModel.searchValue, op: "C", field: null });
        }
        this.columns.forEach(function (column) {
            var columnFilterValue = column.filterContext.value;
            if (columnFilterValue) {
                columnFilterValue.forEach(function (fiv) {
                    var op = fiv.op;
                    var val = fiv.value;
                    if ((op === "EQ" && val) || (op === "C" && val) || (op === "ISN") || (op === "ISNN"))
                        _this.tableFilter.push({ value: val, op: op, field: fiv.field });
                });
            }
        });
        if ((this.tableFilter.length > 0) || (isOldFilter && this.tableFilter.length === 0)) {
            this.searchModel.prevSearchValue = this.searchModel.searchValue;
            this.refresh();
        }
    };
    Table.prototype.initialize = function (element) {
        var _this = this;
        this.scrollerElement = element.getElementsByClassName("table4js-table-scroll-container")[0];
        this.tableElement = element.getElementsByTagName("table")[0];
        this.resizerElement = element.getElementsByClassName("table4js-table")[0];
        var checkLoading = function () {
            var self = _this;
            self.partRowCount = Math.round(self.scrollerElement.clientHeight / Table.rowHeight);
            if (self.scrollerElement.scrollTop < Table.rowHeight && self.lastOffsetBack > 0) {
                if ((self.lastOffsetBack - self.partRowCount) < 0) {
                    self.drawRows(self.lastOffsetBack, Math.max(0, self.lastOffsetBack - self.partRowCount), true);
                }
                else {
                    self.drawRows(self.partRowCount, Math.max(0, self.lastOffsetBack - self.partRowCount), true);
                }
            }
            if ((self.scrollerElement.scrollTop >= self.tableElement.clientHeight - self.scrollerElement.clientHeight) && _this.loadMore) {
                self.drawRows(self.partRowCount, self.lastOffset, false);
            }
        };
        this.scrollerElement.onscroll = checkLoading;
        this.resizerElement.onresize = checkLoading;
        checkLoading();
        if (typeof ResizeObserver !== "undefined") {
            var resizeObserver = new ResizeObserver(function (entries) {
                for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                    var entry = entries_1[_i];
                    if (entry.target.tagName === "THEAD") {
                        if (entry.contentRect.width < 700) {
                            entry.target.parentElement.classList.add("table4js-table--small");
                        }
                        else {
                            entry.target.parentElement.classList.remove("table4js-table--small");
                        }
                        _this.tableHeadHeight = entry.contentRect.height + 5;
                    }
                }
            });
            resizeObserver.observe(element.getElementsByTagName("thead")[0]);
        }
    };
    Table.prototype.showDetail = function (rowData) {
        this.isShowDetail = true;
    };
    Table.prototype.hideDetail = function () {
        this.expandedRowKey = null;
        this.isShowDetail = false;
    };
    Table.prototype.navigateTo = function (startRow) {
        if (startRow) {
            this.lastOffsetBack = startRow - 1;
            this.lastOffset = startRow - 1;
            this.columns.forEach(function (c) { c.count = null; c.prev = null; c.prevValue = undefined; c.last = null; });
            this.rows = [];
            this.drawRows(this.partRowCount, startRow - 1, false);
            this.hideDetail();
        }
    };
    Table.prototype.createColumn = function (column, model) {
        return new column_1.TableColumn(column, this);
    };
    Table.prototype.createColumns = function (config) {
        var _this = this;
        this.columns = config.columns.map(function (column) {
            return _this.createColumn(column, config);
        });
    };
    Table.prototype.createActions = function (config) {
        var _this = this;
        if (config.enableSummary === true) {
            this.innerActions.push(new action_1.Action({
                name: "summary-action",
                action: function () {
                    _this.showTableSummary = !_this.showTableSummary;
                },
                svg: this.icons.equal,
                container: "top"
            }));
        }
        if (config.enableMergedСellsToggle === true) {
            this.innerActions.push(new action_1.Action({
                name: "mergedСells-action",
                action: function () {
                    _this.isMergedСells = !_this.isMergedСells;
                },
                svg: this.icons.table,
                container: "top"
            }));
        }
        if (config.enableEdit === true) {
            this.innerActions.push(new action_1.Action({
                name: "save-action",
                action: function () {
                    var isInsert = false;
                    _this.rows.forEach(function (r) {
                        var modify = {};
                        if (r.number > 0) {
                            r.cells.forEach(function (c) { return c.text !== c.data && (modify[c.name] = c.text); });
                            if (!(0, utils_1.isEmpty)(modify)) {
                                if (_this.dataProvider.saveData(_this.keyColumn, r.rowData[_this.keyColumn], modify))
                                    r.cells.forEach(function (c) { return c.data = c.text; });
                            }
                        }
                        else {
                            r.cells.forEach(function (c) { return modify[c.name] = c.text; });
                            if (_this.dataProvider.insertData(_this.keyColumn, modify))
                                isInsert = true;
                        }
                    });
                    if (isInsert)
                        _this.refresh();
                },
                svg: this.icons.save,
                container: "bottom"
            }), new action_1.Action({
                name: "delete-action",
                action: function () {
                    _this.selectedRows.forEach(function (r) {
                        if (r.number > 0)
                            _this.rows.slice(_this.rows.indexOf(r), 1);
                    });
                    _this.dataProvider.deleteData(_this.keyColumn, _this.selectedRows.map(function (r) { return r.number > 0 && r.rowData[_this.keyColumn]; }), (function (_) { return _this.refresh(); }));
                },
                svg: this.icons.del,
                container: "bottom"
            }), new action_1.Action({
                name: "newRow-action",
                action: function () {
                    var newRow = {};
                    _this.columns.forEach(function (c) { return c.visible && (newRow[c.name] = ""); });
                    _this.rows.unshift(_this.createRow(newRow, -1, null));
                },
                svg: this.icons.add,
                container: "bottom"
            }));
        }
    };
    Object.defineProperty(Table.prototype, "dataProvider", {
        get: function () {
            return this._dataProvider || this.config;
        },
        set: function (provider) {
            this._dataProvider = provider;
            this.refresh();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "data", {
        set: function (_data) {
            this.dataProvider = new array_data_provider_1.ArrayDataProvider(_data);
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.refresh = function () {
        this.lastOffsetBack = 0;
        this.lastOffset = 0;
        this.columns.forEach(function (c) { c.count = null; c.prev = null; c.prevValue = undefined; });
        this.rows = [];
        this.drawRows(this.partRowCount, 0, false);
        this.hideDetail();
    };
    Table.prototype.drawRows = function (limit, offset, back) {
        var _this = this;
        if (back === void 0) { back = false; }
        if (!this.loadingMutex) {
            this.loadingMutex = true;
            this.dataProvider.getData(limit, offset, this.columns.filter(function (c) { return c.order !== undefined; }).map(function (c) { return ({ field: c.name, desc: c.order }); }), this.tableFilter, null, back, function (data, newOffset, totalCount, back) {
                if (back) {
                    _this.lastOffsetBack = _this.lastOffsetBack - limit;
                }
                else {
                    _this.lastOffset = _this.lastOffset + limit;
                }
                _this.loadMoreBack = _this.lastOffsetBack > 0;
                _this.totalCount = totalCount;
                _this.loadMore = _this.lastOffset <= totalCount;
                var currentRows = _this.rows;
                (data || []).forEach(function (dataItem, index) {
                    var newRow = _this.createRow(back ? data[data.length - 1 - Number(index)] : dataItem, back ? data.length - 1 - Number(index) + offset : Number(index) + offset, back);
                    if (back) {
                        currentRows.unshift(newRow);
                    }
                    else {
                        currentRows.push(newRow);
                    }
                });
                _this.loadingMutex = false;
            });
        }
    };
    Table.prototype.clickRow = function (row, event) {
        this.selectedRows.forEach(function (r) { return r.selected = false; });
        row.selected = true;
    };
    Table.prototype.selectRow = function (row, event) {
        var _this = this;
        row.selected = !row.selected;
        event.stopPropagation();
        if (event.shiftKey && this.lastSelectRow) {
            this.rows.filter(function (e) { return e.number >= Math.min(_this.lastSelectRow.number, row.number) && e.number <= Math.max(_this.lastSelectRow.number, row.number); })
                .forEach(function (e) { return e.selected = true; });
        }
        if (row.selected)
            this.lastSelectRow = row;
        if (this.selectedRows.length !== 1)
            this.hideDetail();
    };
    Table.prototype.createRow = function (data, num, back) {
        var _this = this;
        var rowCells = [];
        var lastText = null;
        var colorCell = null, colorRow = null;
        this.columns.reverse().forEach(function (col) {
            var cell = new cell_1.TableCell();
            cell.initialize(col, back, data, colorCell);
            if (!!lastText) {
                cell.text += ("/" + lastText);
            }
            lastText = (col.concatPrev && !col.row_color) ? cell.text : null;
            colorRow = (col.row_color && !col.concatPrev) ? (col.type === "bool" ? (data[col.name] ? _this.config.selectCellColor : null) : data[col.name]) : colorRow;
            colorCell = (col.row_color && col.concatPrev) ? (col.type === "bool" ? (data[col.name] ? _this.config.selectCellColor : null) : data[col.name]) : null;
            if (col.visible)
                rowCells.push(cell);
        });
        this.columns.reverse();
        var row_id = data[this.keyColumn];
        var row = new row_1.TableRow();
        row.cells = rowCells.reverse();
        row.rowData = data;
        row.id = row_id;
        row.number = num + 1;
        row.selected = row_id && (this.expandedRowKey === row_id);
        row.color = colorRow;
        row.select = function (data, event) { return _this.selectRow(data, event); },
            row.click = function (data, event) { return _this.clickRow(data, event); };
        return row;
    };
    Table.prototype.rowExpanded = function (id) {
        return false;
    };
    Table.prototype.completeEditCell = function () {
    };
    Table.prototype.hasActiveInplaceEditorCore = function () {
        return false;
    };
    Object.defineProperty(Table.prototype, "hasActiveInplaceEditor", {
        get: function () {
            return this.hasActiveInplaceEditorCore();
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.paddingDiff = function (col) {
        if (this.getStyleVal(col, 'box-sizing') == 'border-box') {
            return 0;
        }
        var padLeft = this.getStyleVal(col, 'padding-left');
        var padRight = this.getStyleVal(col, 'padding-right');
        return (parseInt(padLeft) + parseInt(padRight));
    };
    Table.prototype.getStyleVal = function (elm, css) {
        return window.getComputedStyle(elm, null).getPropertyValue(css);
    };
    Object.defineProperty(Table.prototype, "keyColumn", {
        get: function () {
            return this.config.keyColumn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "selectedRows", {
        get: function () {
            return this.rows.filter(function (r) { return r.selected; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "topActions", {
        get: function () {
            return this.getActions('top');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "dropdownActions", {
        get: function () {
            return this.getActions('dropdown');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "bottomActions", {
        get: function () {
            return this.getActions('bottom');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "noDataText", {
        get: function () {
            return localization_1.Localization.getString("noData");
        },
        enumerable: false,
        configurable: true
    });
    Table.rowHeight = 20;
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "isNumber", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "isMerged\u0421ells", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "loadingMutex", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: true }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "loadMore", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "loadMoreBack", void 0);
    __decorate([
        (0, property_1.property)({
            defaultValue: [], onSet: function (val, target) {
                target.viewFilterTable = new dependencies_1.ComputedUpdater(function () { return val.filter(function (c) { return c.filterContext.showFilter; }).length > 0; });
            }
        }),
        __metadata("design:type", Array)
    ], Table.prototype, "columns", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: [] }),
        __metadata("design:type", Array)
    ], Table.prototype, "rows", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "showTableSummary", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "showSearch", void 0);
    __decorate([
        (0, property_1.property)({
            onSet: function (newValue, target) {
                target.navigateTo(newValue);
            }
        }),
        __metadata("design:type", Number)
    ], Table.prototype, "startRow", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: 0 }),
        __metadata("design:type", Number)
    ], Table.prototype, "totalCount", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: 0 }),
        __metadata("design:type", Number)
    ], Table.prototype, "tableHeadHeight", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: true }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "showTableFilter", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "viewFilterTable", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], Table.prototype, "isShowDetail", void 0);
    return Table;
}(base_1.Base));
exports.Table = Table;


/***/ }),

/***/ "./sources/table/number.ts":
/*!*********************************!*\
  !*** ./sources/table/number.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NumberCell = void 0;
var cell_1 = __webpack_require__(/*! ./cell */ "./sources/table/cell.ts");
var NumberCell = (function () {
    function NumberCell() {
        this.name = "number";
        this.css = "table4js-table-cell--right";
    }
    return NumberCell;
}());
exports.NumberCell = NumberCell;
cell_1.TableCell.registerCellType(new NumberCell());


/***/ }),

/***/ "./sources/table/row.ts":
/*!******************************!*\
  !*** ./sources/table/row.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableRow = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var TableRow = (function (_super) {
    __extends(TableRow, _super);
    function TableRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, property_1.property)({ defaultValue: [] }),
        __metadata("design:type", Array)
    ], TableRow.prototype, "cells", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableRow.prototype, "selected", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], TableRow.prototype, "color", void 0);
    return TableRow;
}(base_1.Base));
exports.TableRow = TableRow;


/***/ }),

/***/ "./sources/table/search.ts":
/*!*********************************!*\
  !*** ./sources/table/search.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchModel = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
__webpack_require__(/*! ./search.scss */ "./sources/table/search.scss");
var SearchModel = (function (_super) {
    __extends(SearchModel, _super);
    function SearchModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.search = function (text) {
            _this.prevSearchValue = _this.searchValue;
            _this.searchValue = text;
            _this.updater && _this.updater();
        };
        return _this;
    }
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], SearchModel.prototype, "prevSearchValue", void 0);
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", String)
    ], SearchModel.prototype, "searchValue", void 0);
    return SearchModel;
}(base_1.Base));
exports.SearchModel = SearchModel;


/***/ }),

/***/ "./sources/table/summary.ts":
/*!**********************************!*\
  !*** ./sources/table/summary.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableSummary = exports.TableSummaryItem = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
__webpack_require__(/*! ./summary.scss */ "./sources/table/summary.scss");
var Functions = [
    { title: "-", value: "", hint: "" },
    { title: "Σ", value: "sum", hint: "Sum of cells for this table column", types: ["integer", "money", "number"] },
    { title: "x̄", value: "avg", hint: "Arithmetic mean in this table column", types: ["integer", "money", "number"] },
    { title: "min", value: "min", hint: "Minimum value in this table column", types: ["integer", "money", "date", "number"] },
    { title: "max", value: "max", hint: "Maximum value in this table column", types: ["integer", "money", "date", "number"] },
    { title: "Ν", value: "count", hint: "Number of non-blank cells in this column" },
    { title: "U", value: "unique", hint: "Number of unique cells in this column" },
];
var TableSummaryItem = (function () {
    function TableSummaryItem(title, value) {
        this.title = title;
        this.value = value;
    }
    return TableSummaryItem;
}());
exports.TableSummaryItem = TableSummaryItem;
var TableSummary = (function (_super) {
    __extends(TableSummary, _super);
    function TableSummary(column) {
        var _this = _super.call(this) || this;
        _this.column = column;
        _this.summaryItems = Functions.filter(function (funcDescription) {
            return !funcDescription.types || funcDescription.types.indexOf(column.type) !== -1;
        }).map(function (funcDescription) { return new TableSummaryItem(funcDescription.title, funcDescription.value); });
        return _this;
    }
    Object.defineProperty(TableSummary.prototype, "value", {
        get: function () {
            return this.column.summaryValue;
        },
        set: function (val) {
            this.column.summaryValue = val;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, property_1.property)({ defaultValue: null, onSet: function (val, target) {
                target.column.summaryParams = { func: val, field: target.column.name };
            } }),
        __metadata("design:type", Object)
    ], TableSummary.prototype, "func", void 0);
    return TableSummary;
}(base_1.Base));
exports.TableSummary = TableSummary;


/***/ }),

/***/ "./sources/utils/array-data-provider.ts":
/*!**********************************************!*\
  !*** ./sources/utils/array-data-provider.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayDataProvider = void 0;
var ArrayDataProvider = (function () {
    function ArrayDataProvider(data) {
        this.data = data;
    }
    ArrayDataProvider.prototype.filtered = function (filters, data) {
        var _a;
        return (_a = data === null || data === void 0 ? void 0 : data.filter(function (row) {
            return filters.every(function (f) {
                switch (f.op) {
                    case "EQ": return f.value.includes(row[f.field]);
                    case "C": return f.field ? ~row[f.field].toString().toUpperCase().indexOf(f.value.toUpperCase()) : Object.keys(row).some(function (k) { return !!(row[k] && row[k].toString().toUpperCase().indexOf(f.value.toUpperCase()) !== -1); });
                    case "ISN": return !(row[f.field]);
                    case "ISNN": return !!(row[f.field]);
                    default: return true;
                }
            });
        })) !== null && _a !== void 0 ? _a : [];
    };
    ArrayDataProvider.prototype.getData = function (limit, offset, order, filters, key, back, callback) {
        function sortfunc(a, b) {
            for (var i_1 = 0; i_1 < order.length; i_1++) {
                if (a[order[i_1].field] === b[order[i_1].field])
                    continue;
                return (a[order[i_1].field] > b[order[i_1].field] ? 1 : -1) * (order[i_1].desc ? -1 : 1);
            }
            return 0;
        }
        (order.length > 0) && this.data.sort(sortfunc);
        var result = [];
        var filteredData = this.filtered(filters, this.data);
        for (var i = offset > 0 ? offset : 0; i < offset + limit && filteredData && i < filteredData.length; i++) {
            result.push(filteredData[i]);
        }
        callback(result, offset + limit, filteredData.length, back);
    };
    ArrayDataProvider.prototype.getSummary = function (func, field, filters, callback) {
        var filteredData = this.filtered(filters, this.data);
        var result = filteredData.length ? filteredData[0][field] : false;
        var sum = 0, count = 0, uniques = [];
        this.data.forEach(function (row) {
            switch (func) {
                case "sum":
                    result = result + row[field];
                    break;
                case "avg":
                    sum = sum + row[field];
                    count++;
                    result = sum / count;
                    break;
                case "min":
                    result = result < row[field] ? result : row[field];
                    break;
                case "max":
                    result = result > row[field] ? result : row[field];
                    break;
                case "count":
                    if (row[field])
                        count++;
                    result = count;
                    break;
                case "unique":
                    if (!uniques.includes(row[field])) {
                        uniques.push(row[field]);
                    }
                    result = uniques.length;
                    break;
                default: break;
            }
        });
        callback(result);
    };
    ArrayDataProvider.prototype.getColumnData = function (columnName, filter, limit, offset, callback) {
        var result = [], uniques = [];
        var filteredData = this.data.map(function (row) {
            if ((!(filter) || ~row[columnName].toUpperCase().indexOf(filter.toUpperCase())) && !uniques.includes(row[columnName])) {
                uniques.push(row[columnName]);
            }
            ;
        });
        for (var i = offset > 0 ? offset : 0; i < offset + limit && uniques && i < uniques.length; i++) {
            result.push(uniques[i]);
        }
        callback(result);
    };
    ArrayDataProvider.prototype.saveData = function (keyName, key, modify) {
        var _this = this;
        Object.keys(modify).forEach(function (p) { return _this.data.find(function (r) { return r[keyName] == key; })[p] = modify[p]; });
        return true;
    };
    ArrayDataProvider.prototype.insertData = function (keyName, modify) {
        console.log(modify);
        modify[keyName] = this.data.length + 1;
        this.data.push(modify);
        return true;
    };
    ArrayDataProvider.prototype.deleteData = function (keyName, keys, callback) {
        var _this = this;
        keys.forEach(function (k) { return _this.data.find(function (r) { return _this.data.splice(_this.data.indexOf(_this.data.find(function (r) { return r[keyName] == k; })), 1); }); });
        console.log(this.data);
        callback(true);
    };
    return ArrayDataProvider;
}());
exports.ArrayDataProvider = ArrayDataProvider;


/***/ }),

/***/ "./sources/utils/remote-data-provider.ts":
/*!***********************************************!*\
  !*** ./sources/utils/remote-data-provider.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoteDataProvider = exports.postData = void 0;
function postData(url, data) {
    if (url === void 0) { url = ''; }
    if (data === void 0) { data = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })];
                case 1:
                    response = _a.sent();
                    return [4, response.json()];
                case 2: return [2, _a.sent()];
            }
        });
    });
}
exports.postData = postData;
var RemoteDataProvider = (function () {
    function RemoteDataProvider(name, url) {
        this.name = name;
        this.url = url;
    }
    RemoteDataProvider.prototype.getData = function (limit, offset, order, filters, key, back, callback) {
        postData(this.url + "getData", { name: this.name, limit: limit, offset: offset, order: order, filters: filters, key: key, }).then(function (data) {
            callback(data.data, offset + limit, data.count, back);
        });
    };
    RemoteDataProvider.prototype.getSummary = function (func, field, filters, callback) {
        postData(this.url + "getSummary", { name: this.name, func: func, field: field, filters: filters }).then(function (data) {
            callback(data.data);
        });
    };
    RemoteDataProvider.prototype.getColumnData = function (columnName, filter, limit, offset, callback) {
        postData(this.url + "getColumnData", { name: this.name, columnName: columnName, filter: filter, limit: limit, offset: offset }).then(function (data) {
            callback(data.data);
        });
    };
    RemoteDataProvider.prototype.saveData = function (keyName, key, modify) {
        console.log("".concat(keyName, " - ").concat(key, " => ").concat(modify));
        return true;
    };
    RemoteDataProvider.prototype.insertData = function (keyName, modify) {
        console.log("".concat(keyName, " => ").concat(modify));
        return true;
    };
    RemoteDataProvider.prototype.deleteData = function (keyName, keys, callback) {
        console.log("".concat(keyName, " - ").concat(keys));
        callback(true);
    };
    return RemoteDataProvider;
}());
exports.RemoteDataProvider = RemoteDataProvider;


/***/ }),

/***/ "./sources/utils/utils.ts":
/*!********************************!*\
  !*** ./sources/utils/utils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEqual = exports.isEmpty = void 0;
function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}
exports.isEmpty = isEmpty;
function isEqual(obj1, obj2) {
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length === obj2.length) {
            for (var i = 0; i < obj1.length; i++) {
                if (obj1[i] !== obj2[i])
                    return false;
            }
            return true;
        }
        return false;
    }
    return obj1 === obj2;
}
exports.isEqual = isEqual;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./sources/knockout/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDakMsSUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFBRSxPQUFPLEtBQUssQ0FBQzthQUN4QztZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNoQjtJQUNELE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQztBQUN6QixDQUFDO0FBWEQsMEJBV0M7Ozs7Ozs7VUNsQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UYWJsZTRKUy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9ub2RlX21vZHVsZXMva25vY2tvdXQvYnVpbGQvb3V0cHV0L2tub2Nrb3V0LWxhdGVzdC5qcyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9hY3Rpb25zLnNjc3M/YTlkMSIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9kcm9wZG93bi1hY3Rpb25zLnNjc3M/YjNkNyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvYm9vbC5zY3NzP2FmMzUiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NlbGwtZWRpdG9yLnNjc3M/MTA1YSIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvY29sdW1uLWZpbHRlci5zY3NzPzc5MjAiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2ZpbHRlci1kZWZhdWx0LnNjc3MiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2ZpbHRlci1zZWxlY3Quc2Nzcz9mZGZlIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9pbmRleC5zY3NzP2FhMTIiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL3NlYXJjaC5zY3NzPzJiZWUiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL3N1bW1hcnkuc2Nzcz8yMzA5Iiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9ib29sLWNlbGwtZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2Jvb2wtY2VsbC12aWV3ZXIuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY2VsbC1lZGl0b3IuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY2VsbC12aWV3ZXIuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY2VsbC5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW0uaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY29sdW1uLWZpbHRlci5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9maWx0ZXItZGVmYXVsdC5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9maWx0ZXItc2VsZWN0Lmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL3NlYXJjaC5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9zdW1tYXJ5Lmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3dpZGdldHMvYWN0aW9uLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3dpZGdldHMvYWN0aW9ucy5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC93aWRnZXRzL2Ryb3Bkb3duLWFjdGlvbnMuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvd2lkZ2V0cy9pY29uLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fYXJyb3ctZG93bi5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fYXJyb3ctcmlnaHQuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9jcm9zcy5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fZWRpdC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fZXF1YWwuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2ZpbHRlci5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25faXRlbS1hZGQuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2l0ZW0tZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9pdGVtLXNhdmUuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX21vcmUuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX21vcmVfc3Euc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX3Bhc3RlLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9zZWFyY2guc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX3NvcnQtZG93bi5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fc29ydC11cC5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fdGFibGUtbWVyZ2Uuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9jb3JlL2FjdGlvbi50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9hY3Rpb25zLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9jb3JlL2Jhc2UudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvZGVwZW5kZW5jaWVzLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9jb3JlL2Ryb3Bkb3duLWFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvcHJvcGVydHkudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ZpbmQudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb24udHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2luZGV4LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC9pbmRleC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvYm9vbC1jZWxsLWVkaXRvci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvYm9vbC1jZWxsLXZpZXdlci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY2VsbC1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2NlbGwtdmlld2VyLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jZWxsLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW0udHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2NvbHVtbi1maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2ZpbHRlci1kZWZhdWx0LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9maWx0ZXItc2VsZWN0LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL3N1bW1hcnkudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3dpZGdldHMvYWN0aW9uLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC93aWRnZXRzL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3dpZGdldHMvZHJvcGRvd24tYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvd2lkZ2V0cy9pY29uLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9sb2NhbGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2Jvb2wudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NlbGwtZWRpdG9yLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9jZWxsLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW0udHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NvbHVtbi1maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NvbHVtbi50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvZmlsdGVyLWRlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2ZpbHRlci1zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2luZGV4LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9udW1iZXIudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL3Jvdy50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvc2VhcmNoLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9zdW1tYXJ5LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy91dGlscy9hcnJheS1kYXRhLXByb3ZpZGVyLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy91dGlscy9yZW1vdGUtZGF0YS1wcm92aWRlci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdXRpbHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RhYmxlNEpTL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9UYWJsZTRKUy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL1RhYmxlNEpTL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9UYWJsZTRKUy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJUYWJsZTRKU1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJUYWJsZTRKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUYWJsZTRKU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvKiFcbiAqIEtub2Nrb3V0IEphdmFTY3JpcHQgbGlicmFyeSB2My41LjFcbiAqIChjKSBUaGUgS25vY2tvdXQuanMgdGVhbSAtIGh0dHA6Ly9rbm9ja291dGpzLmNvbS9cbiAqIExpY2Vuc2U6IE1JVCAoaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHApXG4gKi9cblxuKGZ1bmN0aW9uKCkgeyhmdW5jdGlvbihuKXt2YXIgQT10aGlzfHwoMCxldmFsKShcInRoaXNcIiksdz1BLmRvY3VtZW50LFI9QS5uYXZpZ2F0b3Isdj1BLmpRdWVyeSxIPUEuSlNPTjt2fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIGpRdWVyeXx8KHY9alF1ZXJ5KTsoZnVuY3Rpb24obil7XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiLFwicmVxdWlyZVwiXSxuKTpcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP24obW9kdWxlLmV4cG9ydHN8fGV4cG9ydHMpOm4oQS5rbz17fSl9KShmdW5jdGlvbihTLFQpe2Z1bmN0aW9uIEsoYSxjKXtyZXR1cm4gbnVsbD09PWF8fHR5cGVvZiBhIGluIFc/YT09PWM6ITF9ZnVuY3Rpb24gWChiLGMpe3ZhciBkO3JldHVybiBmdW5jdGlvbigpe2R8fChkPWEuYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZD1uO2IoKX0sYykpfX1mdW5jdGlvbiBZKGIsYyl7dmFyIGQ7cmV0dXJuIGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGQpO1xuZD1hLmEuc2V0VGltZW91dChiLGMpfX1mdW5jdGlvbiBaKGEsYyl7YyYmXCJjaGFuZ2VcIiE9PWM/XCJiZWZvcmVDaGFuZ2VcIj09PWM/dGhpcy5wYyhhKTp0aGlzLmdiKGEsYyk6dGhpcy5xYyhhKX1mdW5jdGlvbiBhYShhLGMpe251bGwhPT1jJiZjLnMmJmMucygpfWZ1bmN0aW9uIGJhKGEsYyl7dmFyIGQ9dGhpcy5xZCxlPWRbcl07ZS5yYXx8KHRoaXMuUWImJnRoaXMubWJbY10/KGQudWMoYyxhLHRoaXMubWJbY10pLHRoaXMubWJbY109bnVsbCwtLXRoaXMuUWIpOmUuSVtjXXx8ZC51YyhjLGEsZS5KP3tkYTphfTpkLiRjKGEpKSxhLkphJiZhLmdkKCkpfXZhciBhPVwidW5kZWZpbmVkXCIhPT10eXBlb2YgUz9TOnt9O2EuYj1mdW5jdGlvbihiLGMpe2Zvcih2YXIgZD1iLnNwbGl0KFwiLlwiKSxlPWEsZj0wO2Y8ZC5sZW5ndGgtMTtmKyspZT1lW2RbZl1dO2VbZFtkLmxlbmd0aC0xXV09Y307YS5MPWZ1bmN0aW9uKGEsYyxkKXthW2NdPWR9O2EudmVyc2lvbj1cIjMuNS4xXCI7YS5iKFwidmVyc2lvblwiLFxuYS52ZXJzaW9uKTthLm9wdGlvbnM9e2RlZmVyVXBkYXRlczohMSx1c2VPbmx5TmF0aXZlRXZlbnRzOiExLGZvcmVhY2hIaWRlc0Rlc3Ryb3llZDohMX07YS5hPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhLGIpe2Zvcih2YXIgYyBpbiBhKWYuY2FsbChhLGMpJiZiKGMsYVtjXSl9ZnVuY3Rpb24gYyhhLGIpe2lmKGIpZm9yKHZhciBjIGluIGIpZi5jYWxsKGIsYykmJihhW2NdPWJbY10pO3JldHVybiBhfWZ1bmN0aW9uIGQoYSxiKXthLl9fcHJvdG9fXz1iO3JldHVybiBhfWZ1bmN0aW9uIGUoYixjLGQsZSl7dmFyIGw9YltjXS5tYXRjaChxKXx8W107YS5hLkQoZC5tYXRjaChxKSxmdW5jdGlvbihiKXthLmEuTmEobCxiLGUpfSk7YltjXT1sLmpvaW4oXCIgXCIpfXZhciBmPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksZz17X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXksaD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sLG09e30saz17fTttW1ImJi9GaXJlZm94XFwvMi9pLnRlc3QoUi51c2VyQWdlbnQpP1xuXCJLZXlib2FyZEV2ZW50XCI6XCJVSUV2ZW50c1wiXT1bXCJrZXl1cFwiLFwia2V5ZG93blwiLFwia2V5cHJlc3NcIl07bS5Nb3VzZUV2ZW50cz1cImNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlXCIuc3BsaXQoXCIgXCIpO2IobSxmdW5jdGlvbihhLGIpe2lmKGIubGVuZ3RoKWZvcih2YXIgYz0wLGQ9Yi5sZW5ndGg7YzxkO2MrKylrW2JbY11dPWF9KTt2YXIgbD17cHJvcGVydHljaGFuZ2U6ITB9LHA9dyYmZnVuY3Rpb24oKXtmb3IodmFyIGE9MyxiPXcuY3JlYXRlRWxlbWVudChcImRpdlwiKSxjPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpXCIpO2IuaW5uZXJIVE1MPVwiXFx4M2MhLS1baWYgZ3QgSUUgXCIrICsrYStcIl0+PGk+PC9pPjwhW2VuZGlmXS0tXFx4M2VcIixjWzBdOyk7cmV0dXJuIDQ8YT9hOm59KCkscT0vXFxTKy9nLHQ7cmV0dXJue0pjOltcImF1dGhlbnRpY2l0eV90b2tlblwiLC9eX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4oXy4qKT8kL10sXG5EOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MCxlPWEubGVuZ3RoO2Q8ZTtkKyspYi5jYWxsKGMsYVtkXSxkLGEpfSxBOlwiZnVuY3Rpb25cIj09dHlwZW9mIEFycmF5LnByb3RvdHlwZS5pbmRleE9mP2Z1bmN0aW9uKGEsYil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoYSxiKX06ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2M8ZDtjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LExiOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MCxlPWEubGVuZ3RoO2Q8ZTtkKyspaWYoYi5jYWxsKGMsYVtkXSxkLGEpKXJldHVybiBhW2RdO3JldHVybiBufSxQYTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5BKGIsYyk7MDxkP2Iuc3BsaWNlKGQsMSk6MD09PWQmJmIuc2hpZnQoKX0sd2M6ZnVuY3Rpb24oYil7dmFyIGM9W107YiYmYS5hLkQoYixmdW5jdGlvbihiKXswPmEuYS5BKGMsYikmJmMucHVzaChiKX0pO3JldHVybiBjfSxNYjpmdW5jdGlvbihhLFxuYixjKXt2YXIgZD1bXTtpZihhKWZvcih2YXIgZT0wLGw9YS5sZW5ndGg7ZTxsO2UrKylkLnB1c2goYi5jYWxsKGMsYVtlXSxlKSk7cmV0dXJuIGR9LGpiOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXTtpZihhKWZvcih2YXIgZT0wLGw9YS5sZW5ndGg7ZTxsO2UrKyliLmNhbGwoYyxhW2VdLGUpJiZkLnB1c2goYVtlXSk7cmV0dXJuIGR9LE5iOmZ1bmN0aW9uKGEsYil7aWYoYiBpbnN0YW5jZW9mIEFycmF5KWEucHVzaC5hcHBseShhLGIpO2Vsc2UgZm9yKHZhciBjPTAsZD1iLmxlbmd0aDtjPGQ7YysrKWEucHVzaChiW2NdKTtyZXR1cm4gYX0sTmE6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEuYS5BKGEuYS5iYyhiKSxjKTswPmU/ZCYmYi5wdXNoKGMpOmR8fGIuc3BsaWNlKGUsMSl9LEJhOmcsZXh0ZW5kOmMsc2V0UHJvdG90eXBlT2Y6ZCxBYjpnP2Q6YyxQOmIsR2E6ZnVuY3Rpb24oYSxiLGMpe2lmKCFhKXJldHVybiBhO3ZhciBkPXt9LGU7Zm9yKGUgaW4gYSlmLmNhbGwoYSxlKSYmKGRbZV09XG5iLmNhbGwoYyxhW2VdLGUsYSkpO3JldHVybiBkfSxUYjpmdW5jdGlvbihiKXtmb3IoO2IuZmlyc3RDaGlsZDspYS5yZW1vdmVOb2RlKGIuZmlyc3RDaGlsZCl9LFliOmZ1bmN0aW9uKGIpe2I9YS5hLmxhKGIpO2Zvcih2YXIgYz0oYlswXSYmYlswXS5vd25lckRvY3VtZW50fHx3KS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGQ9MCxlPWIubGVuZ3RoO2Q8ZTtkKyspYy5hcHBlbmRDaGlsZChhLm9hKGJbZF0pKTtyZXR1cm4gY30sQ2E6ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoLGw9W107ZDxlO2QrKyl7dmFyIGs9YltkXS5jbG9uZU5vZGUoITApO2wucHVzaChjP2Eub2Eoayk6ayl9cmV0dXJuIGx9LHZhOmZ1bmN0aW9uKGIsYyl7YS5hLlRiKGIpO2lmKGMpZm9yKHZhciBkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWIuYXBwZW5kQ2hpbGQoY1tkXSl9LFhjOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9Yi5ub2RlVHlwZT9bYl06YjtpZigwPGQubGVuZ3RoKXtmb3IodmFyIGU9ZFswXSxcbmw9ZS5wYXJlbnROb2RlLGs9MCxmPWMubGVuZ3RoO2s8ZjtrKyspbC5pbnNlcnRCZWZvcmUoY1trXSxlKTtrPTA7Zm9yKGY9ZC5sZW5ndGg7azxmO2srKylhLnJlbW92ZU5vZGUoZFtrXSl9fSxVYTpmdW5jdGlvbihhLGIpe2lmKGEubGVuZ3RoKXtmb3IoYj04PT09Yi5ub2RlVHlwZSYmYi5wYXJlbnROb2RlfHxiO2EubGVuZ3RoJiZhWzBdLnBhcmVudE5vZGUhPT1iOylhLnNwbGljZSgwLDEpO2Zvcig7MTxhLmxlbmd0aCYmYVthLmxlbmd0aC0xXS5wYXJlbnROb2RlIT09YjspYS5sZW5ndGgtLTtpZigxPGEubGVuZ3RoKXt2YXIgYz1hWzBdLGQ9YVthLmxlbmd0aC0xXTtmb3IoYS5sZW5ndGg9MDtjIT09ZDspYS5wdXNoKGMpLGM9Yy5uZXh0U2libGluZzthLnB1c2goZCl9fXJldHVybiBhfSxaYzpmdW5jdGlvbihhLGIpezc+cD9hLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsYik6YS5zZWxlY3RlZD1ifSxEYjpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWF8fGE9PT1uP1wiXCI6YS50cmltP1xuYS50cmltKCk6YS50b1N0cmluZygpLnJlcGxhY2UoL15bXFxzXFx4YTBdK3xbXFxzXFx4YTBdKyQvZyxcIlwiKX0sVWQ6ZnVuY3Rpb24oYSxiKXthPWF8fFwiXCI7cmV0dXJuIGIubGVuZ3RoPmEubGVuZ3RoPyExOmEuc3Vic3RyaW5nKDAsYi5sZW5ndGgpPT09Yn0sdmQ6ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4hMDtpZigxMT09PWEubm9kZVR5cGUpcmV0dXJuITE7aWYoYi5jb250YWlucylyZXR1cm4gYi5jb250YWlucygxIT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YSk7aWYoYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbilyZXR1cm4gMTY9PShiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpJjE2KTtmb3IoO2EmJmEhPWI7KWE9YS5wYXJlbnROb2RlO3JldHVybiEhYX0sU2I6ZnVuY3Rpb24oYil7cmV0dXJuIGEuYS52ZChiLGIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpfSxrZDpmdW5jdGlvbihiKXtyZXR1cm4hIWEuYS5MYihiLGEuYS5TYil9LFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGEmJlxuYS50YWdOYW1lJiZhLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0sQWM6ZnVuY3Rpb24oYil7cmV0dXJuIGEub25FcnJvcj9mdW5jdGlvbigpe3RyeXtyZXR1cm4gYi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9Y2F0Y2goYyl7dGhyb3cgYS5vbkVycm9yJiZhLm9uRXJyb3IoYyksYzt9fTpifSxzZXRUaW1lb3V0OmZ1bmN0aW9uKGIsYyl7cmV0dXJuIHNldFRpbWVvdXQoYS5hLkFjKGIpLGMpfSxHYzpmdW5jdGlvbihiKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS5vbkVycm9yJiZhLm9uRXJyb3IoYik7dGhyb3cgYjt9LDApfSxCOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmEuQWMoZCk7ZD1sW2NdO2lmKGEub3B0aW9ucy51c2VPbmx5TmF0aXZlRXZlbnRzfHxkfHwhdilpZihkfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBiLmFkZEV2ZW50TGlzdGVuZXIpaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuYXR0YWNoRXZlbnQpe3ZhciBrPWZ1bmN0aW9uKGEpe2UuY2FsbChiLGEpfSxmPVwib25cIitjO2IuYXR0YWNoRXZlbnQoZixcbmspO2EuYS5LLnphKGIsZnVuY3Rpb24oKXtiLmRldGFjaEV2ZW50KGYsayl9KX1lbHNlIHRocm93IEVycm9yKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgYWRkRXZlbnRMaXN0ZW5lciBvciBhdHRhY2hFdmVudFwiKTtlbHNlIGIuYWRkRXZlbnRMaXN0ZW5lcihjLGUsITEpO2Vsc2UgdHx8KHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgdihiKS5vbj9cIm9uXCI6XCJiaW5kXCIpLHYoYilbdF0oYyxlKX0sRmI6ZnVuY3Rpb24oYixjKXtpZighYnx8IWIubm9kZVR5cGUpdGhyb3cgRXJyb3IoXCJlbGVtZW50IG11c3QgYmUgYSBET00gbm9kZSB3aGVuIGNhbGxpbmcgdHJpZ2dlckV2ZW50XCIpO3ZhciBkO1wiaW5wdXRcIj09PWEuYS5SKGIpJiZiLnR5cGUmJlwiY2xpY2tcIj09Yy50b0xvd2VyQ2FzZSgpPyhkPWIudHlwZSxkPVwiY2hlY2tib3hcIj09ZHx8XCJyYWRpb1wiPT1kKTpkPSExO2lmKGEub3B0aW9ucy51c2VPbmx5TmF0aXZlRXZlbnRzfHwhdnx8ZClpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB3LmNyZWF0ZUV2ZW50KWlmKFwiZnVuY3Rpb25cIj09XG50eXBlb2YgYi5kaXNwYXRjaEV2ZW50KWQ9dy5jcmVhdGVFdmVudChrW2NdfHxcIkhUTUxFdmVudHNcIiksZC5pbml0RXZlbnQoYywhMCwhMCxBLDAsMCwwLDAsMCwhMSwhMSwhMSwhMSwwLGIpLGIuZGlzcGF0Y2hFdmVudChkKTtlbHNlIHRocm93IEVycm9yKFwiVGhlIHN1cHBsaWVkIGVsZW1lbnQgZG9lc24ndCBzdXBwb3J0IGRpc3BhdGNoRXZlbnRcIik7ZWxzZSBpZihkJiZiLmNsaWNrKWIuY2xpY2soKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmZpcmVFdmVudCliLmZpcmVFdmVudChcIm9uXCIrYyk7ZWxzZSB0aHJvdyBFcnJvcihcIkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHRyaWdnZXJpbmcgZXZlbnRzXCIpO2Vsc2UgdihiKS50cmlnZ2VyKGMpfSxmOmZ1bmN0aW9uKGIpe3JldHVybiBhLk8oYik/YigpOmJ9LGJjOmZ1bmN0aW9uKGIpe3JldHVybiBhLk8oYik/Yi52KCk6Yn0sRWI6ZnVuY3Rpb24oYixjLGQpe3ZhciBsO2MmJihcIm9iamVjdFwiPT09dHlwZW9mIGIuY2xhc3NMaXN0P1xuKGw9Yi5jbGFzc0xpc3RbZD9cImFkZFwiOlwicmVtb3ZlXCJdLGEuYS5EKGMubWF0Y2gocSksZnVuY3Rpb24oYSl7bC5jYWxsKGIuY2xhc3NMaXN0LGEpfSkpOlwic3RyaW5nXCI9PT10eXBlb2YgYi5jbGFzc05hbWUuYmFzZVZhbD9lKGIuY2xhc3NOYW1lLFwiYmFzZVZhbFwiLGMsZCk6ZShiLFwiY2xhc3NOYW1lXCIsYyxkKSl9LEJiOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmYoYyk7aWYobnVsbD09PWR8fGQ9PT1uKWQ9XCJcIjt2YXIgZT1hLmguZmlyc3RDaGlsZChiKTshZXx8MyE9ZS5ub2RlVHlwZXx8YS5oLm5leHRTaWJsaW5nKGUpP2EuaC52YShiLFtiLm93bmVyRG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZCldKTplLmRhdGE9ZDthLmEuQWQoYil9LFljOmZ1bmN0aW9uKGEsYil7YS5uYW1lPWI7aWYoNz49cCl0cnl7dmFyIGM9YS5uYW1lLnJlcGxhY2UoL1smPD4nXCJdL2csZnVuY3Rpb24oYSl7cmV0dXJuXCImI1wiK2EuY2hhckNvZGVBdCgwKStcIjtcIn0pO2EubWVyZ2VBdHRyaWJ1dGVzKHcuY3JlYXRlRWxlbWVudChcIjxpbnB1dCBuYW1lPSdcIitcbmMrXCInLz5cIiksITEpfWNhdGNoKGQpe319LEFkOmZ1bmN0aW9uKGEpezk8PXAmJihhPTE9PWEubm9kZVR5cGU/YTphLnBhcmVudE5vZGUsYS5zdHlsZSYmKGEuc3R5bGUuem9vbT1hLnN0eWxlLnpvb20pKX0sd2Q6ZnVuY3Rpb24oYSl7aWYocCl7dmFyIGI9YS5zdHlsZS53aWR0aDthLnN0eWxlLndpZHRoPTA7YS5zdHlsZS53aWR0aD1ifX0sUGQ6ZnVuY3Rpb24oYixjKXtiPWEuYS5mKGIpO2M9YS5hLmYoYyk7Zm9yKHZhciBkPVtdLGU9YjtlPD1jO2UrKylkLnB1c2goZSk7cmV0dXJuIGR9LGxhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1bXSxjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKWIucHVzaChhW2NdKTtyZXR1cm4gYn0sRGE6ZnVuY3Rpb24oYSl7cmV0dXJuIGg/U3ltYm9sKGEpOmF9LFpkOjY9PT1wLCRkOjc9PT1wLFc6cCxMYzpmdW5jdGlvbihiLGMpe2Zvcih2YXIgZD1hLmEubGEoYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpKS5jb25jYXQoYS5hLmxhKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZXh0YXJlYVwiKSkpLFxuZT1cInN0cmluZ1wiPT10eXBlb2YgYz9mdW5jdGlvbihhKXtyZXR1cm4gYS5uYW1lPT09Y306ZnVuY3Rpb24oYSl7cmV0dXJuIGMudGVzdChhLm5hbWUpfSxsPVtdLGs9ZC5sZW5ndGgtMTswPD1rO2stLSllKGRba10pJiZsLnB1c2goZFtrXSk7cmV0dXJuIGx9LE5kOmZ1bmN0aW9uKGIpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYj1hLmEuRGIoYikpP0gmJkgucGFyc2U/SC5wYXJzZShiKToobmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiK2IpKSgpOm51bGx9LGhjOmZ1bmN0aW9uKGIsYyxkKXtpZighSHx8IUguc3RyaW5naWZ5KXRocm93IEVycm9yKFwiQ2Fubm90IGZpbmQgSlNPTi5zdHJpbmdpZnkoKS4gU29tZSBicm93c2VycyAoZS5nLiwgSUUgPCA4KSBkb24ndCBzdXBwb3J0IGl0IG5hdGl2ZWx5LCBidXQgeW91IGNhbiBvdmVyY29tZSB0aGlzIGJ5IGFkZGluZyBhIHNjcmlwdCByZWZlcmVuY2UgdG8ganNvbjIuanMsIGRvd25sb2FkYWJsZSBmcm9tIGh0dHA6Ly93d3cuanNvbi5vcmcvanNvbjIuanNcIik7XG5yZXR1cm4gSC5zdHJpbmdpZnkoYS5hLmYoYiksYyxkKX0sT2Q6ZnVuY3Rpb24oYyxkLGUpe2U9ZXx8e307dmFyIGw9ZS5wYXJhbXN8fHt9LGs9ZS5pbmNsdWRlRmllbGRzfHx0aGlzLkpjLGY9YztpZihcIm9iamVjdFwiPT10eXBlb2YgYyYmXCJmb3JtXCI9PT1hLmEuUihjKSlmb3IodmFyIGY9Yy5hY3Rpb24saD1rLmxlbmd0aC0xOzA8PWg7aC0tKWZvcih2YXIgZz1hLmEuTGMoYyxrW2hdKSxtPWcubGVuZ3RoLTE7MDw9bTttLS0pbFtnW21dLm5hbWVdPWdbbV0udmFsdWU7ZD1hLmEuZihkKTt2YXIgcD13LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO3Auc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtwLmFjdGlvbj1mO3AubWV0aG9kPVwicG9zdFwiO2Zvcih2YXIgcSBpbiBkKWM9dy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYy50eXBlPVwiaGlkZGVuXCIsYy5uYW1lPXEsYy52YWx1ZT1hLmEuaGMoYS5hLmYoZFtxXSkpLHAuYXBwZW5kQ2hpbGQoYyk7YihsLGZ1bmN0aW9uKGEsYil7dmFyIGM9dy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5jLnR5cGU9XCJoaWRkZW5cIjtjLm5hbWU9YTtjLnZhbHVlPWI7cC5hcHBlbmRDaGlsZChjKX0pO3cuYm9keS5hcHBlbmRDaGlsZChwKTtlLnN1Ym1pdHRlcj9lLnN1Ym1pdHRlcihwKTpwLnN1Ym1pdCgpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocCl9LDApfX19KCk7YS5iKFwidXRpbHNcIixhLmEpO2EuYihcInV0aWxzLmFycmF5Rm9yRWFjaFwiLGEuYS5EKTthLmIoXCJ1dGlscy5hcnJheUZpcnN0XCIsYS5hLkxiKTthLmIoXCJ1dGlscy5hcnJheUZpbHRlclwiLGEuYS5qYik7YS5iKFwidXRpbHMuYXJyYXlHZXREaXN0aW5jdFZhbHVlc1wiLGEuYS53Yyk7YS5iKFwidXRpbHMuYXJyYXlJbmRleE9mXCIsYS5hLkEpO2EuYihcInV0aWxzLmFycmF5TWFwXCIsYS5hLk1iKTthLmIoXCJ1dGlscy5hcnJheVB1c2hBbGxcIixhLmEuTmIpO2EuYihcInV0aWxzLmFycmF5UmVtb3ZlSXRlbVwiLGEuYS5QYSk7YS5iKFwidXRpbHMuY2xvbmVOb2Rlc1wiLGEuYS5DYSk7YS5iKFwidXRpbHMuY3JlYXRlU3ltYm9sT3JTdHJpbmdcIixcbmEuYS5EYSk7YS5iKFwidXRpbHMuZXh0ZW5kXCIsYS5hLmV4dGVuZCk7YS5iKFwidXRpbHMuZmllbGRzSW5jbHVkZWRXaXRoSnNvblBvc3RcIixhLmEuSmMpO2EuYihcInV0aWxzLmdldEZvcm1GaWVsZHNcIixhLmEuTGMpO2EuYihcInV0aWxzLm9iamVjdE1hcFwiLGEuYS5HYSk7YS5iKFwidXRpbHMucGVla09ic2VydmFibGVcIixhLmEuYmMpO2EuYihcInV0aWxzLnBvc3RKc29uXCIsYS5hLk9kKTthLmIoXCJ1dGlscy5wYXJzZUpzb25cIixhLmEuTmQpO2EuYihcInV0aWxzLnJlZ2lzdGVyRXZlbnRIYW5kbGVyXCIsYS5hLkIpO2EuYihcInV0aWxzLnN0cmluZ2lmeUpzb25cIixhLmEuaGMpO2EuYihcInV0aWxzLnJhbmdlXCIsYS5hLlBkKTthLmIoXCJ1dGlscy50b2dnbGVEb21Ob2RlQ3NzQ2xhc3NcIixhLmEuRWIpO2EuYihcInV0aWxzLnRyaWdnZXJFdmVudFwiLGEuYS5GYik7YS5iKFwidXRpbHMudW53cmFwT2JzZXJ2YWJsZVwiLGEuYS5mKTthLmIoXCJ1dGlscy5vYmplY3RGb3JFYWNoXCIsYS5hLlApO2EuYihcInV0aWxzLmFkZE9yUmVtb3ZlSXRlbVwiLFxuYS5hLk5hKTthLmIoXCJ1dGlscy5zZXRUZXh0Q29udGVudFwiLGEuYS5CYik7YS5iKFwidW53cmFwXCIsYS5hLmYpO0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kfHwoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ9ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcztpZigxPT09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYy5hcHBseShhLGFyZ3VtZW50cyl9O3ZhciBkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgZT1kLnNsaWNlKDApO2UucHVzaC5hcHBseShlLGFyZ3VtZW50cyk7cmV0dXJuIGMuYXBwbHkoYSxlKX19KTthLmEuZz1uZXcgZnVuY3Rpb24oKXt2YXIgYj0wLGM9XCJfX2tvX19cIisobmV3IERhdGUpLmdldFRpbWUoKSxkPXt9LGUsZjthLmEuVz8oZT1mdW5jdGlvbihhLGUpe3ZhciBmPWFbY107aWYoIWZ8fFwibnVsbFwiPT09Znx8IWRbZl0pe2lmKCFlKXJldHVybiBuO2Y9YVtjXT1cImtvXCIrYisrO2RbZl09XG57fX1yZXR1cm4gZFtmXX0sZj1mdW5jdGlvbihhKXt2YXIgYj1hW2NdO3JldHVybiBiPyhkZWxldGUgZFtiXSxhW2NdPW51bGwsITApOiExfSk6KGU9ZnVuY3Rpb24oYSxiKXt2YXIgZD1hW2NdOyFkJiZiJiYoZD1hW2NdPXt9KTtyZXR1cm4gZH0sZj1mdW5jdGlvbihhKXtyZXR1cm4gYVtjXT8oZGVsZXRlIGFbY10sITApOiExfSk7cmV0dXJue2dldDpmdW5jdGlvbihhLGIpe3ZhciBjPWUoYSwhMSk7cmV0dXJuIGMmJmNbYl19LHNldDpmdW5jdGlvbihhLGIsYyl7KGE9ZShhLGMhPT1uKSkmJihhW2JdPWMpfSxVYjpmdW5jdGlvbihhLGIsYyl7YT1lKGEsITApO3JldHVybiBhW2JdfHwoYVtiXT1jKX0sY2xlYXI6ZixaOmZ1bmN0aW9uKCl7cmV0dXJuIGIrKyArY319fTthLmIoXCJ1dGlscy5kb21EYXRhXCIsYS5hLmcpO2EuYihcInV0aWxzLmRvbURhdGEuY2xlYXJcIixhLmEuZy5jbGVhcik7YS5hLks9bmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMpe3ZhciBkPWEuYS5nLmdldChiLGUpO1xuZD09PW4mJmMmJihkPVtdLGEuYS5nLnNldChiLGUsZCkpO3JldHVybiBkfWZ1bmN0aW9uIGMoYyl7dmFyIGU9YihjLCExKTtpZihlKWZvcih2YXIgZT1lLnNsaWNlKDApLGs9MDtrPGUubGVuZ3RoO2srKyllW2tdKGMpO2EuYS5nLmNsZWFyKGMpO2EuYS5LLmNsZWFuRXh0ZXJuYWxEYXRhKGMpO2dbYy5ub2RlVHlwZV0mJmQoYy5jaGlsZE5vZGVzLCEwKX1mdW5jdGlvbiBkKGIsZCl7Zm9yKHZhciBlPVtdLGwsZj0wO2Y8Yi5sZW5ndGg7ZisrKWlmKCFkfHw4PT09YltmXS5ub2RlVHlwZSlpZihjKGVbZS5sZW5ndGhdPWw9YltmXSksYltmXSE9PWwpZm9yKDtmLS0mJi0xPT1hLmEuQShlLGJbZl0pOyk7fXZhciBlPWEuYS5nLlooKSxmPXsxOiEwLDg6ITAsOTohMH0sZz17MTohMCw5OiEwfTtyZXR1cm57emE6ZnVuY3Rpb24oYSxjKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBjKXRocm93IEVycm9yKFwiQ2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO2IoYSwhMCkucHVzaChjKX0seWI6ZnVuY3Rpb24oYyxcbmQpe3ZhciBmPWIoYywhMSk7ZiYmKGEuYS5QYShmLGQpLDA9PWYubGVuZ3RoJiZhLmEuZy5zZXQoYyxlLG4pKX0sb2E6ZnVuY3Rpb24oYil7YS51LkcoZnVuY3Rpb24oKXtmW2Iubm9kZVR5cGVdJiYoYyhiKSxnW2Iubm9kZVR5cGVdJiZkKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpKSl9KTtyZXR1cm4gYn0scmVtb3ZlTm9kZTpmdW5jdGlvbihiKXthLm9hKGIpO2IucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpfSxjbGVhbkV4dGVybmFsRGF0YTpmdW5jdGlvbihhKXt2JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB2LmNsZWFuRGF0YSYmdi5jbGVhbkRhdGEoW2FdKX19fTthLm9hPWEuYS5LLm9hO2EucmVtb3ZlTm9kZT1hLmEuSy5yZW1vdmVOb2RlO2EuYihcImNsZWFuTm9kZVwiLGEub2EpO2EuYihcInJlbW92ZU5vZGVcIixhLnJlbW92ZU5vZGUpO2EuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbFwiLGEuYS5LKTthLmIoXCJ1dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrXCIsXG5hLmEuSy56YSk7YS5iKFwidXRpbHMuZG9tTm9kZURpc3Bvc2FsLnJlbW92ZURpc3Bvc2VDYWxsYmFja1wiLGEuYS5LLnliKTsoZnVuY3Rpb24oKXt2YXIgYj1bMCxcIlwiLFwiXCJdLGM9WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxkPVszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sZT1bMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSxmPXt0aGVhZDpjLHRib2R5OmMsdGZvb3Q6Yyx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOmQsdGg6ZCxvcHRpb246ZSxvcHRncm91cDplfSxnPTg+PWEuYS5XO2EuYS51YT1mdW5jdGlvbihjLGQpe3ZhciBlO2lmKHYpaWYodi5wYXJzZUhUTUwpZT12LnBhcnNlSFRNTChjLGQpfHxbXTtlbHNle2lmKChlPXYuY2xlYW4oW2NdLGQpKSYmZVswXSl7Zm9yKHZhciBsPWVbMF07bC5wYXJlbnROb2RlJiYxMSE9PWwucGFyZW50Tm9kZS5ub2RlVHlwZTspbD1sLnBhcmVudE5vZGU7XG5sLnBhcmVudE5vZGUmJmwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsKX19ZWxzZXsoZT1kKXx8KGU9dyk7dmFyIGw9ZS5wYXJlbnRXaW5kb3d8fGUuZGVmYXVsdFZpZXd8fEEscD1hLmEuRGIoYykudG9Mb3dlckNhc2UoKSxxPWUuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0O3Q9KHA9cC5tYXRjaCgvXig/OlxceDNjIS0tLio/LS1cXHgzZVxccyo/KSo/PChbYS16XSspW1xccz5dLykpJiZmW3BbMV1dfHxiO3A9dFswXTt0PVwiaWdub3JlZDxkaXY+XCIrdFsxXStjK3RbMl0rXCI8L2Rpdj5cIjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBsLmlubmVyU2hpdj9xLmFwcGVuZENoaWxkKGwuaW5uZXJTaGl2KHQpKTooZyYmZS5ib2R5LmFwcGVuZENoaWxkKHEpLHEuaW5uZXJIVE1MPXQsZyYmcS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHEpKTtmb3IoO3AtLTspcT1xLmxhc3RDaGlsZDtlPWEuYS5sYShxLmxhc3RDaGlsZC5jaGlsZE5vZGVzKX1yZXR1cm4gZX07YS5hLk1kPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLnVhKGIsXG5jKTtyZXR1cm4gZC5sZW5ndGgmJmRbMF0ucGFyZW50RWxlbWVudHx8YS5hLlliKGQpfTthLmEuZmM9ZnVuY3Rpb24oYixjKXthLmEuVGIoYik7Yz1hLmEuZihjKTtpZihudWxsIT09YyYmYyE9PW4paWYoXCJzdHJpbmdcIiE9dHlwZW9mIGMmJihjPWMudG9TdHJpbmcoKSksdil2KGIpLmh0bWwoYyk7ZWxzZSBmb3IodmFyIGQ9YS5hLnVhKGMsYi5vd25lckRvY3VtZW50KSxlPTA7ZTxkLmxlbmd0aDtlKyspYi5hcHBlbmRDaGlsZChkW2VdKX19KSgpO2EuYihcInV0aWxzLnBhcnNlSHRtbEZyYWdtZW50XCIsYS5hLnVhKTthLmIoXCJ1dGlscy5zZXRIdG1sXCIsYS5hLmZjKTthLmFhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihjLGUpe2lmKGMpaWYoOD09Yy5ub2RlVHlwZSl7dmFyIGY9YS5hYS5VYyhjLm5vZGVWYWx1ZSk7bnVsbCE9ZiYmZS5wdXNoKHt1ZDpjLEtkOmZ9KX1lbHNlIGlmKDE9PWMubm9kZVR5cGUpZm9yKHZhciBmPTAsZz1jLmNoaWxkTm9kZXMsaD1nLmxlbmd0aDtmPGg7ZisrKWIoZ1tmXSxcbmUpfXZhciBjPXt9O3JldHVybntYYjpmdW5jdGlvbihhKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBhKXRocm93IEVycm9yKFwiWW91IGNhbiBvbmx5IHBhc3MgYSBmdW5jdGlvbiB0byBrby5tZW1vaXphdGlvbi5tZW1vaXplKClcIik7dmFyIGI9KDQyOTQ5NjcyOTYqKDErTWF0aC5yYW5kb20oKSl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKSsoNDI5NDk2NzI5NiooMStNYXRoLnJhbmRvbSgpKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO2NbYl09YTtyZXR1cm5cIlxceDNjIS0tW2tvX21lbW86XCIrYitcIl0tLVxceDNlXCJ9LGJkOmZ1bmN0aW9uKGEsYil7dmFyIGY9Y1thXTtpZihmPT09bil0aHJvdyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYW55IG1lbW8gd2l0aCBJRCBcIithK1wiLiBQZXJoYXBzIGl0J3MgYWxyZWFkeSBiZWVuIHVubWVtb2l6ZWQuXCIpO3RyeXtyZXR1cm4gZi5hcHBseShudWxsLGJ8fFtdKSwhMH1maW5hbGx5e2RlbGV0ZSBjW2FdfX0sY2Q6ZnVuY3Rpb24oYyxlKXt2YXIgZj1cbltdO2IoYyxmKTtmb3IodmFyIGc9MCxoPWYubGVuZ3RoO2c8aDtnKyspe3ZhciBtPWZbZ10udWQsaz1bbV07ZSYmYS5hLk5iKGssZSk7YS5hYS5iZChmW2ddLktkLGspO20ubm9kZVZhbHVlPVwiXCI7bS5wYXJlbnROb2RlJiZtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobSl9fSxVYzpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLm1hdGNoKC9eXFxba29fbWVtb1xcOiguKj8pXFxdJC8pKT9hWzFdOm51bGx9fX0oKTthLmIoXCJtZW1vaXphdGlvblwiLGEuYWEpO2EuYihcIm1lbW9pemF0aW9uLm1lbW9pemVcIixhLmFhLlhiKTthLmIoXCJtZW1vaXphdGlvbi51bm1lbW9pemVcIixhLmFhLmJkKTthLmIoXCJtZW1vaXphdGlvbi5wYXJzZU1lbW9UZXh0XCIsYS5hYS5VYyk7YS5iKFwibWVtb2l6YXRpb24udW5tZW1vaXplRG9tTm9kZUFuZERlc2NlbmRhbnRzXCIsYS5hYS5jZCk7YS5uYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXtpZihmKWZvcih2YXIgYj1mLGM9MCxkO2g8ZjspaWYoZD1lW2grK10pe2lmKGg+Yil7aWYoNUUzPD1cbisrYyl7aD1mO2EuYS5HYyhFcnJvcihcIidUb28gbXVjaCByZWN1cnNpb24nIGFmdGVyIHByb2Nlc3NpbmcgXCIrYytcIiB0YXNrIGdyb3Vwcy5cIikpO2JyZWFrfWI9Zn10cnl7ZCgpfWNhdGNoKHApe2EuYS5HYyhwKX19fWZ1bmN0aW9uIGMoKXtiKCk7aD1mPWUubGVuZ3RoPTB9dmFyIGQsZT1bXSxmPTAsZz0xLGg9MDtBLk11dGF0aW9uT2JzZXJ2ZXI/ZD1mdW5jdGlvbihhKXt2YXIgYj13LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7KG5ldyBNdXRhdGlvbk9ic2VydmVyKGEpKS5vYnNlcnZlKGIse2F0dHJpYnV0ZXM6ITB9KTtyZXR1cm4gZnVuY3Rpb24oKXtiLmNsYXNzTGlzdC50b2dnbGUoXCJmb29cIil9fShjKTpkPXcmJlwib25yZWFkeXN0YXRlY2hhbmdlXCJpbiB3LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik/ZnVuY3Rpb24oYSl7dmFyIGI9dy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2Iub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7Yi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbDt3LmRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZChiKTtcbmI9bnVsbDthKCl9O3cuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGIpfTpmdW5jdGlvbihhKXtzZXRUaW1lb3V0KGEsMCl9O3JldHVybntzY2hlZHVsZXI6ZCx6YjpmdW5jdGlvbihiKXtmfHxhLm5hLnNjaGVkdWxlcihjKTtlW2YrK109YjtyZXR1cm4gZysrfSxjYW5jZWw6ZnVuY3Rpb24oYSl7YT1hLShnLWYpO2E+PWgmJmE8ZiYmKGVbYV09bnVsbCl9LHJlc2V0Rm9yVGVzdGluZzpmdW5jdGlvbigpe3ZhciBhPWYtaDtoPWY9ZS5sZW5ndGg9MDtyZXR1cm4gYX0sU2Q6Yn19KCk7YS5iKFwidGFza3NcIixhLm5hKTthLmIoXCJ0YXNrcy5zY2hlZHVsZVwiLGEubmEuemIpO2EuYihcInRhc2tzLnJ1bkVhcmx5XCIsYS5uYS5TZCk7YS5UYT17dGhyb3R0bGU6ZnVuY3Rpb24oYixjKXtiLnRocm90dGxlRXZhbHVhdGlvbj1jO3ZhciBkPW51bGw7cmV0dXJuIGEuJCh7cmVhZDpiLHdyaXRlOmZ1bmN0aW9uKGUpe2NsZWFyVGltZW91dChkKTtkPWEuYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YihlKX0sXG5jKX19KX0scmF0ZUxpbWl0OmZ1bmN0aW9uKGEsYyl7dmFyIGQsZSxmO1wibnVtYmVyXCI9PXR5cGVvZiBjP2Q9YzooZD1jLnRpbWVvdXQsZT1jLm1ldGhvZCk7YS5IYj0hMTtmPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpcIm5vdGlmeVdoZW5DaGFuZ2VzU3RvcFwiPT1lP1k6WDthLnViKGZ1bmN0aW9uKGEpe3JldHVybiBmKGEsZCxjKX0pfSxkZWZlcnJlZDpmdW5jdGlvbihiLGMpe2lmKCEwIT09Yyl0aHJvdyBFcnJvcihcIlRoZSAnZGVmZXJyZWQnIGV4dGVuZGVyIG9ubHkgYWNjZXB0cyB0aGUgdmFsdWUgJ3RydWUnLCBiZWNhdXNlIGl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gdHVybiBkZWZlcnJhbCBvZmYgb25jZSBlbmFibGVkLlwiKTtiLkhifHwoYi5IYj0hMCxiLnViKGZ1bmN0aW9uKGMpe3ZhciBlLGY9ITE7cmV0dXJuIGZ1bmN0aW9uKCl7aWYoIWYpe2EubmEuY2FuY2VsKGUpO2U9YS5uYS56YihjKTt0cnl7Zj0hMCxiLm5vdGlmeVN1YnNjcmliZXJzKG4sXCJkaXJ0eVwiKX1maW5hbGx5e2Y9XG4hMX19fX0pKX0sbm90aWZ5OmZ1bmN0aW9uKGEsYyl7YS5lcXVhbGl0eUNvbXBhcmVyPVwiYWx3YXlzXCI9PWM/bnVsbDpLfX07dmFyIFc9e3VuZGVmaW5lZDoxLFwiYm9vbGVhblwiOjEsbnVtYmVyOjEsc3RyaW5nOjF9O2EuYihcImV4dGVuZGVyc1wiLGEuVGEpO2EuaWM9ZnVuY3Rpb24oYixjLGQpe3RoaXMuZGE9Yjt0aGlzLmxjPWM7dGhpcy5tYz1kO3RoaXMuSWI9ITE7dGhpcy5mYj10aGlzLkpiPW51bGw7YS5MKHRoaXMsXCJkaXNwb3NlXCIsdGhpcy5zKTthLkwodGhpcyxcImRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZFwiLHRoaXMubCl9O2EuaWMucHJvdG90eXBlLnM9ZnVuY3Rpb24oKXt0aGlzLklifHwodGhpcy5mYiYmYS5hLksueWIodGhpcy5KYix0aGlzLmZiKSx0aGlzLkliPSEwLHRoaXMubWMoKSx0aGlzLmRhPXRoaXMubGM9dGhpcy5tYz10aGlzLkpiPXRoaXMuZmI9bnVsbCl9O2EuaWMucHJvdG90eXBlLmw9ZnVuY3Rpb24oYil7dGhpcy5KYj1iO2EuYS5LLnphKGIsdGhpcy5mYj10aGlzLnMuYmluZCh0aGlzKSl9O1xuYS5UPWZ1bmN0aW9uKCl7YS5hLkFiKHRoaXMsRCk7RC5xYih0aGlzKX07dmFyIEQ9e3FiOmZ1bmN0aW9uKGEpe2EuVT17Y2hhbmdlOltdfTthLnNjPTF9LHN1YnNjcmliZTpmdW5jdGlvbihiLGMsZCl7dmFyIGU9dGhpcztkPWR8fFwiY2hhbmdlXCI7dmFyIGY9bmV3IGEuaWMoZSxjP2IuYmluZChjKTpiLGZ1bmN0aW9uKCl7YS5hLlBhKGUuVVtkXSxmKTtlLmhiJiZlLmhiKGQpfSk7ZS5RYSYmZS5RYShkKTtlLlVbZF18fChlLlVbZF09W10pO2UuVVtkXS5wdXNoKGYpO3JldHVybiBmfSxub3RpZnlTdWJzY3JpYmVyczpmdW5jdGlvbihiLGMpe2M9Y3x8XCJjaGFuZ2VcIjtcImNoYW5nZVwiPT09YyYmdGhpcy5HYigpO2lmKHRoaXMuV2EoYykpe3ZhciBkPVwiY2hhbmdlXCI9PT1jJiZ0aGlzLmVkfHx0aGlzLlVbY10uc2xpY2UoMCk7dHJ5e2EudS54YygpO2Zvcih2YXIgZT0wLGY7Zj1kW2VdOysrZSlmLklifHxmLmxjKGIpfWZpbmFsbHl7YS51LmVuZCgpfX19LG9iOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2N9LFxuRGQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub2IoKSE9PWF9LEdiOmZ1bmN0aW9uKCl7Kyt0aGlzLnNjfSx1YjpmdW5jdGlvbihiKXt2YXIgYz10aGlzLGQ9YS5PKGMpLGUsZixnLGgsbTtjLmdifHwoYy5nYj1jLm5vdGlmeVN1YnNjcmliZXJzLGMubm90aWZ5U3Vic2NyaWJlcnM9Wik7dmFyIGs9YihmdW5jdGlvbigpe2MuSmE9ITE7ZCYmaD09PWMmJihoPWMubmM/Yy5uYygpOmMoKSk7dmFyIGE9Znx8bSYmYy5zYihnLGgpO209Zj1lPSExO2EmJmMuZ2IoZz1oKX0pO2MucWM9ZnVuY3Rpb24oYSxiKXtiJiZjLkphfHwobT0hYik7Yy5lZD1jLlUuY2hhbmdlLnNsaWNlKDApO2MuSmE9ZT0hMDtoPWE7aygpfTtjLnBjPWZ1bmN0aW9uKGEpe2V8fChnPWEsYy5nYihhLFwiYmVmb3JlQ2hhbmdlXCIpKX07Yy5yYz1mdW5jdGlvbigpe209ITB9O2MuZ2Q9ZnVuY3Rpb24oKXtjLnNiKGcsYy52KCEwKSkmJihmPSEwKX19LFdhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLlVbYV0mJnRoaXMuVVthXS5sZW5ndGh9LFxuQmQ6ZnVuY3Rpb24oYil7aWYoYilyZXR1cm4gdGhpcy5VW2JdJiZ0aGlzLlVbYl0ubGVuZ3RofHwwO3ZhciBjPTA7YS5hLlAodGhpcy5VLGZ1bmN0aW9uKGEsYil7XCJkaXJ0eVwiIT09YSYmKGMrPWIubGVuZ3RoKX0pO3JldHVybiBjfSxzYjpmdW5jdGlvbihhLGMpe3JldHVybiF0aGlzLmVxdWFsaXR5Q29tcGFyZXJ8fCF0aGlzLmVxdWFsaXR5Q29tcGFyZXIoYSxjKX0sdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgT2JqZWN0XVwifSxleHRlbmQ6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcztiJiZhLmEuUChiLGZ1bmN0aW9uKGIsZSl7dmFyIGY9YS5UYVtiXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBmJiYoYz1mKGMsZSl8fGMpfSk7cmV0dXJuIGN9fTthLkwoRCxcImluaXRcIixELnFiKTthLkwoRCxcInN1YnNjcmliZVwiLEQuc3Vic2NyaWJlKTthLkwoRCxcImV4dGVuZFwiLEQuZXh0ZW5kKTthLkwoRCxcImdldFN1YnNjcmlwdGlvbnNDb3VudFwiLEQuQmQpO2EuYS5CYSYmYS5hLnNldFByb3RvdHlwZU9mKEQsXG5GdW5jdGlvbi5wcm90b3R5cGUpO2EuVC5mbj1EO2EuUWM9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGEuc3Vic2NyaWJlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLm5vdGlmeVN1YnNjcmliZXJzfTthLmIoXCJzdWJzY3JpYmFibGVcIixhLlQpO2EuYihcImlzU3Vic2NyaWJhYmxlXCIsYS5RYyk7YS5TPWEudT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSl7ZC5wdXNoKGUpO2U9YX1mdW5jdGlvbiBjKCl7ZT1kLnBvcCgpfXZhciBkPVtdLGUsZj0wO3JldHVybnt4YzpiLGVuZDpjLGNjOmZ1bmN0aW9uKGIpe2lmKGUpe2lmKCFhLlFjKGIpKXRocm93IEVycm9yKFwiT25seSBzdWJzY3JpYmFibGUgdGhpbmdzIGNhbiBhY3QgYXMgZGVwZW5kZW5jaWVzXCIpO2Uub2QuY2FsbChlLnBkLGIsYi5mZHx8KGIuZmQ9KytmKSl9fSxHOmZ1bmN0aW9uKGEsZCxlKXt0cnl7cmV0dXJuIGIoKSxhLmFwcGx5KGQsZXx8W10pfWZpbmFsbHl7YygpfX0scWE6ZnVuY3Rpb24oKXtpZihlKXJldHVybiBlLm8ucWEoKX0sXG5WYTpmdW5jdGlvbigpe2lmKGUpcmV0dXJuIGUuby5WYSgpfSxZYTpmdW5jdGlvbigpe2lmKGUpcmV0dXJuIGUuWWF9LG86ZnVuY3Rpb24oKXtpZihlKXJldHVybiBlLm99fX0oKTthLmIoXCJjb21wdXRlZENvbnRleHRcIixhLlMpO2EuYihcImNvbXB1dGVkQ29udGV4dC5nZXREZXBlbmRlbmNpZXNDb3VudFwiLGEuUy5xYSk7YS5iKFwiY29tcHV0ZWRDb250ZXh0LmdldERlcGVuZGVuY2llc1wiLGEuUy5WYSk7YS5iKFwiY29tcHV0ZWRDb250ZXh0LmlzSW5pdGlhbFwiLGEuUy5ZYSk7YS5iKFwiY29tcHV0ZWRDb250ZXh0LnJlZ2lzdGVyRGVwZW5kZW5jeVwiLGEuUy5jYyk7YS5iKFwiaWdub3JlRGVwZW5kZW5jaWVzXCIsYS5ZZD1hLnUuRyk7dmFyIEk9YS5hLkRhKFwiX2xhdGVzdFZhbHVlXCIpO2EudGE9ZnVuY3Rpb24oYil7ZnVuY3Rpb24gYygpe2lmKDA8YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gYy5zYihjW0ldLGFyZ3VtZW50c1swXSkmJihjLnlhKCksY1tJXT1hcmd1bWVudHNbMF0sYy54YSgpKSx0aGlzO1xuYS51LmNjKGMpO3JldHVybiBjW0ldfWNbSV09YjthLmEuQmF8fGEuYS5leHRlbmQoYyxhLlQuZm4pO2EuVC5mbi5xYihjKTthLmEuQWIoYyxGKTthLm9wdGlvbnMuZGVmZXJVcGRhdGVzJiZhLlRhLmRlZmVycmVkKGMsITApO3JldHVybiBjfTt2YXIgRj17ZXF1YWxpdHlDb21wYXJlcjpLLHY6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tJXX0seGE6ZnVuY3Rpb24oKXt0aGlzLm5vdGlmeVN1YnNjcmliZXJzKHRoaXNbSV0sXCJzcGVjdGF0ZVwiKTt0aGlzLm5vdGlmeVN1YnNjcmliZXJzKHRoaXNbSV0pfSx5YTpmdW5jdGlvbigpe3RoaXMubm90aWZ5U3Vic2NyaWJlcnModGhpc1tJXSxcImJlZm9yZUNoYW5nZVwiKX19O2EuYS5CYSYmYS5hLnNldFByb3RvdHlwZU9mKEYsYS5ULmZuKTt2YXIgRz1hLnRhLk1hPVwiX19rb19wcm90b19fXCI7RltHXT1hLnRhO2EuTz1mdW5jdGlvbihiKXtpZigoYj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiZiW0ddKSYmYiE9PUZbR10mJmIhPT1hLm8uZm5bR10pdGhyb3cgRXJyb3IoXCJJbnZhbGlkIG9iamVjdCB0aGF0IGxvb2tzIGxpa2UgYW4gb2JzZXJ2YWJsZTsgcG9zc2libHkgZnJvbSBhbm90aGVyIEtub2Nrb3V0IGluc3RhbmNlXCIpO1xucmV0dXJuISFifTthLlphPWZ1bmN0aW9uKGIpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGImJihiW0ddPT09RltHXXx8YltHXT09PWEuby5mbltHXSYmYi5OYyl9O2EuYihcIm9ic2VydmFibGVcIixhLnRhKTthLmIoXCJpc09ic2VydmFibGVcIixhLk8pO2EuYihcImlzV3JpdGVhYmxlT2JzZXJ2YWJsZVwiLGEuWmEpO2EuYihcImlzV3JpdGFibGVPYnNlcnZhYmxlXCIsYS5aYSk7YS5iKFwib2JzZXJ2YWJsZS5mblwiLEYpO2EuTChGLFwicGVla1wiLEYudik7YS5MKEYsXCJ2YWx1ZUhhc011dGF0ZWRcIixGLnhhKTthLkwoRixcInZhbHVlV2lsbE11dGF0ZVwiLEYueWEpO2EuSGE9ZnVuY3Rpb24oYil7Yj1ifHxbXTtpZihcIm9iamVjdFwiIT10eXBlb2YgYnx8IShcImxlbmd0aFwiaW4gYikpdGhyb3cgRXJyb3IoXCJUaGUgYXJndW1lbnQgcGFzc2VkIHdoZW4gaW5pdGlhbGl6aW5nIGFuIG9ic2VydmFibGUgYXJyYXkgbXVzdCBiZSBhbiBhcnJheSwgb3IgbnVsbCwgb3IgdW5kZWZpbmVkLlwiKTtiPWEudGEoYik7YS5hLkFiKGIsXG5hLkhhLmZuKTtyZXR1cm4gYi5leHRlbmQoe3RyYWNrQXJyYXlDaGFuZ2VzOiEwfSl9O2EuSGEuZm49e3JlbW92ZTpmdW5jdGlvbihiKXtmb3IodmFyIGM9dGhpcy52KCksZD1bXSxlPVwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fGEuTyhiKT9mdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9OmIsZj0wO2Y8Yy5sZW5ndGg7ZisrKXt2YXIgZz1jW2ZdO2lmKGUoZykpezA9PT1kLmxlbmd0aCYmdGhpcy55YSgpO2lmKGNbZl0hPT1nKXRocm93IEVycm9yKFwiQXJyYXkgbW9kaWZpZWQgZHVyaW5nIHJlbW92ZTsgY2Fubm90IHJlbW92ZSBpdGVtXCIpO2QucHVzaChnKTtjLnNwbGljZShmLDEpO2YtLX19ZC5sZW5ndGgmJnRoaXMueGEoKTtyZXR1cm4gZH0scmVtb3ZlQWxsOmZ1bmN0aW9uKGIpe2lmKGI9PT1uKXt2YXIgYz10aGlzLnYoKSxkPWMuc2xpY2UoMCk7dGhpcy55YSgpO2Muc3BsaWNlKDAsYy5sZW5ndGgpO3RoaXMueGEoKTtyZXR1cm4gZH1yZXR1cm4gYj90aGlzLnJlbW92ZShmdW5jdGlvbihjKXtyZXR1cm4gMDw9XG5hLmEuQShiLGMpfSk6W119LGRlc3Ryb3k6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcy52KCksZD1cImZ1bmN0aW9uXCIhPXR5cGVvZiBifHxhLk8oYik/ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifTpiO3RoaXMueWEoKTtmb3IodmFyIGU9Yy5sZW5ndGgtMTswPD1lO2UtLSl7dmFyIGY9Y1tlXTtkKGYpJiYoZi5fZGVzdHJveT0hMCl9dGhpcy54YSgpfSxkZXN0cm95QWxsOmZ1bmN0aW9uKGIpe3JldHVybiBiPT09bj90aGlzLmRlc3Ryb3koZnVuY3Rpb24oKXtyZXR1cm4hMH0pOmI/dGhpcy5kZXN0cm95KGZ1bmN0aW9uKGMpe3JldHVybiAwPD1hLmEuQShiLGMpfSk6W119LGluZGV4T2Y6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcygpO3JldHVybiBhLmEuQShjLGIpfSxyZXBsYWNlOmZ1bmN0aW9uKGEsYyl7dmFyIGQ9dGhpcy5pbmRleE9mKGEpOzA8PWQmJih0aGlzLnlhKCksdGhpcy52KClbZF09Yyx0aGlzLnhhKCkpfSxzb3J0ZWQ6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpcygpLnNsaWNlKDApO1xucmV0dXJuIGE/Yy5zb3J0KGEpOmMuc29ydCgpfSxyZXZlcnNlZDpmdW5jdGlvbigpe3JldHVybiB0aGlzKCkuc2xpY2UoMCkucmV2ZXJzZSgpfX07YS5hLkJhJiZhLmEuc2V0UHJvdG90eXBlT2YoYS5IYS5mbixhLnRhLmZuKTthLmEuRChcInBvcCBwdXNoIHJldmVyc2Ugc2hpZnQgc29ydCBzcGxpY2UgdW5zaGlmdFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiKXthLkhhLmZuW2JdPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy52KCk7dGhpcy55YSgpO3RoaXMuemMoYSxiLGFyZ3VtZW50cyk7dmFyIGQ9YVtiXS5hcHBseShhLGFyZ3VtZW50cyk7dGhpcy54YSgpO3JldHVybiBkPT09YT90aGlzOmR9fSk7YS5hLkQoW1wic2xpY2VcIl0sZnVuY3Rpb24oYil7YS5IYS5mbltiXT1mdW5jdGlvbigpe3ZhciBhPXRoaXMoKTtyZXR1cm4gYVtiXS5hcHBseShhLGFyZ3VtZW50cyl9fSk7YS5QYz1mdW5jdGlvbihiKXtyZXR1cm4gYS5PKGIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBiLnJlbW92ZSYmXCJmdW5jdGlvblwiPT1cbnR5cGVvZiBiLnB1c2h9O2EuYihcIm9ic2VydmFibGVBcnJheVwiLGEuSGEpO2EuYihcImlzT2JzZXJ2YWJsZUFycmF5XCIsYS5QYyk7YS5UYS50cmFja0FycmF5Q2hhbmdlcz1mdW5jdGlvbihiLGMpe2Z1bmN0aW9uIGQoKXtmdW5jdGlvbiBjKCl7aWYobSl7dmFyIGQ9W10uY29uY2F0KGIudigpfHxbXSksZTtpZihiLldhKFwiYXJyYXlDaGFuZ2VcIikpe2lmKCFmfHwxPG0pZj1hLmEuUGIoayxkLGIuT2IpO2U9Zn1rPWQ7Zj1udWxsO209MDtlJiZlLmxlbmd0aCYmYi5ub3RpZnlTdWJzY3JpYmVycyhlLFwiYXJyYXlDaGFuZ2VcIil9fWU/YygpOihlPSEwLGg9Yi5zdWJzY3JpYmUoZnVuY3Rpb24oKXsrK219LG51bGwsXCJzcGVjdGF0ZVwiKSxrPVtdLmNvbmNhdChiLnYoKXx8W10pLGY9bnVsbCxnPWIuc3Vic2NyaWJlKGMpKX1iLk9iPXt9O2MmJlwib2JqZWN0XCI9PXR5cGVvZiBjJiZhLmEuZXh0ZW5kKGIuT2IsYyk7Yi5PYi5zcGFyc2U9ITA7aWYoIWIuemMpe3ZhciBlPSExLGY9bnVsbCxnLGgsbT0wLFxuayxsPWIuUWEscD1iLmhiO2IuUWE9ZnVuY3Rpb24oYSl7bCYmbC5jYWxsKGIsYSk7XCJhcnJheUNoYW5nZVwiPT09YSYmZCgpfTtiLmhiPWZ1bmN0aW9uKGEpe3AmJnAuY2FsbChiLGEpO1wiYXJyYXlDaGFuZ2VcIiE9PWF8fGIuV2EoXCJhcnJheUNoYW5nZVwiKXx8KGcmJmcucygpLGgmJmgucygpLGg9Zz1udWxsLGU9ITEsaz1uKX07Yi56Yz1mdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gbChhLGIsYyl7cmV0dXJuIGtbay5sZW5ndGhdPXtzdGF0dXM6YSx2YWx1ZTpiLGluZGV4OmN9fWlmKGUmJiFtKXt2YXIgaz1bXSxwPWIubGVuZ3RoLGc9ZC5sZW5ndGgsaD0wO3N3aXRjaChjKXtjYXNlIFwicHVzaFwiOmg9cDtjYXNlIFwidW5zaGlmdFwiOmZvcihjPTA7YzxnO2MrKylsKFwiYWRkZWRcIixkW2NdLGgrYyk7YnJlYWs7Y2FzZSBcInBvcFwiOmg9cC0xO2Nhc2UgXCJzaGlmdFwiOnAmJmwoXCJkZWxldGVkXCIsYltoXSxoKTticmVhaztjYXNlIFwic3BsaWNlXCI6Yz1NYXRoLm1pbihNYXRoLm1heCgwLDA+ZFswXT9wK2RbMF06XG5kWzBdKSxwKTtmb3IodmFyIHA9MT09PWc/cDpNYXRoLm1pbihjKyhkWzFdfHwwKSxwKSxnPWMrZy0yLGg9TWF0aC5tYXgocCxnKSxVPVtdLEw9W10sbj0yO2M8aDsrK2MsKytuKWM8cCYmTC5wdXNoKGwoXCJkZWxldGVkXCIsYltjXSxjKSksYzxnJiZVLnB1c2gobChcImFkZGVkXCIsZFtuXSxjKSk7YS5hLktjKEwsVSk7YnJlYWs7ZGVmYXVsdDpyZXR1cm59Zj1rfX19fTt2YXIgcj1hLmEuRGEoXCJfc3RhdGVcIik7YS5vPWEuJD1mdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZSgpe2lmKDA8YXJndW1lbnRzLmxlbmd0aCl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZi5hcHBseShnLm5iLGFyZ3VtZW50cyk7ZWxzZSB0aHJvdyBFcnJvcihcIkNhbm5vdCB3cml0ZSBhIHZhbHVlIHRvIGEga28uY29tcHV0ZWQgdW5sZXNzIHlvdSBzcGVjaWZ5IGEgJ3dyaXRlJyBvcHRpb24uIElmIHlvdSB3aXNoIHRvIHJlYWQgdGhlIGN1cnJlbnQgdmFsdWUsIGRvbid0IHBhc3MgYW55IHBhcmFtZXRlcnMuXCIpO3JldHVybiB0aGlzfWcucmF8fFxuYS51LmNjKGUpOyhnLmthfHxnLkomJmUuWGEoKSkmJmUuaGEoKTtyZXR1cm4gZy5YfVwib2JqZWN0XCI9PT10eXBlb2YgYj9kPWI6KGQ9ZHx8e30sYiYmKGQucmVhZD1iKSk7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZC5yZWFkKXRocm93IEVycm9yKFwiUGFzcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGtvLmNvbXB1dGVkXCIpO3ZhciBmPWQud3JpdGUsZz17WDpuLHNhOiEwLGthOiEwLHJiOiExLGpjOiExLHJhOiExLHdiOiExLEo6ITEsV2M6ZC5yZWFkLG5iOmN8fGQub3duZXIsbDpkLmRpc3Bvc2VXaGVuTm9kZUlzUmVtb3ZlZHx8ZC5sfHxudWxsLFNhOmQuZGlzcG9zZVdoZW58fGQuU2EsUmI6bnVsbCxJOnt9LFY6MCxJYzpudWxsfTtlW3JdPWc7ZS5OYz1cImZ1bmN0aW9uXCI9PT10eXBlb2YgZjthLmEuQmF8fGEuYS5leHRlbmQoZSxhLlQuZm4pO2EuVC5mbi5xYihlKTthLmEuQWIoZSxDKTtkLnB1cmU/KGcud2I9ITAsZy5KPSEwLGEuYS5leHRlbmQoZSxkYSkpOlxuZC5kZWZlckV2YWx1YXRpb24mJmEuYS5leHRlbmQoZSxlYSk7YS5vcHRpb25zLmRlZmVyVXBkYXRlcyYmYS5UYS5kZWZlcnJlZChlLCEwKTtnLmwmJihnLmpjPSEwLGcubC5ub2RlVHlwZXx8KGcubD1udWxsKSk7Zy5KfHxkLmRlZmVyRXZhbHVhdGlvbnx8ZS5oYSgpO2cubCYmZS5qYSgpJiZhLmEuSy56YShnLmwsZy5SYj1mdW5jdGlvbigpe2UucygpfSk7cmV0dXJuIGV9O3ZhciBDPXtlcXVhbGl0eUNvbXBhcmVyOksscWE6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tyXS5WfSxWYTpmdW5jdGlvbigpe3ZhciBiPVtdO2EuYS5QKHRoaXNbcl0uSSxmdW5jdGlvbihhLGQpe2JbZC5LYV09ZC5kYX0pO3JldHVybiBifSxWYjpmdW5jdGlvbihiKXtpZighdGhpc1tyXS5WKXJldHVybiExO3ZhciBjPXRoaXMuVmEoKTtyZXR1cm4tMSE9PWEuYS5BKGMsYik/ITA6ISFhLmEuTGIoYyxmdW5jdGlvbihhKXtyZXR1cm4gYS5WYiYmYS5WYihiKX0pfSx1YzpmdW5jdGlvbihhLGMsZCl7aWYodGhpc1tyXS53YiYmXG5jPT09dGhpcyl0aHJvdyBFcnJvcihcIkEgJ3B1cmUnIGNvbXB1dGVkIG11c3Qgbm90IGJlIGNhbGxlZCByZWN1cnNpdmVseVwiKTt0aGlzW3JdLklbYV09ZDtkLkthPXRoaXNbcl0uVisrO2QuTGE9Yy5vYigpfSxYYTpmdW5jdGlvbigpe3ZhciBhLGMsZD10aGlzW3JdLkk7Zm9yKGEgaW4gZClpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZCxhKSYmKGM9ZFthXSx0aGlzLklhJiZjLmRhLkphfHxjLmRhLkRkKGMuTGEpKSlyZXR1cm4hMH0sSmQ6ZnVuY3Rpb24oKXt0aGlzLklhJiYhdGhpc1tyXS5yYiYmdGhpcy5JYSghMSl9LGphOmZ1bmN0aW9uKCl7dmFyIGE9dGhpc1tyXTtyZXR1cm4gYS5rYXx8MDxhLlZ9LFJkOmZ1bmN0aW9uKCl7dGhpcy5KYT90aGlzW3JdLmthJiYodGhpc1tyXS5zYT0hMCk6dGhpcy5IYygpfSwkYzpmdW5jdGlvbihhKXtpZihhLkhiKXt2YXIgYz1hLnN1YnNjcmliZSh0aGlzLkpkLHRoaXMsXCJkaXJ0eVwiKSxkPWEuc3Vic2NyaWJlKHRoaXMuUmQsXG50aGlzKTtyZXR1cm57ZGE6YSxzOmZ1bmN0aW9uKCl7Yy5zKCk7ZC5zKCl9fX1yZXR1cm4gYS5zdWJzY3JpYmUodGhpcy5IYyx0aGlzKX0sSGM6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLGM9Yi50aHJvdHRsZUV2YWx1YXRpb247YyYmMDw9Yz8oY2xlYXJUaW1lb3V0KHRoaXNbcl0uSWMpLHRoaXNbcl0uSWM9YS5hLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtiLmhhKCEwKX0sYykpOmIuSWE/Yi5JYSghMCk6Yi5oYSghMCl9LGhhOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXNbcl0sZD1jLlNhLGU9ITE7aWYoIWMucmImJiFjLnJhKXtpZihjLmwmJiFhLmEuU2IoYy5sKXx8ZCYmZCgpKXtpZighYy5qYyl7dGhpcy5zKCk7cmV0dXJufX1lbHNlIGMuamM9ITE7Yy5yYj0hMDt0cnl7ZT10aGlzLnpkKGIpfWZpbmFsbHl7Yy5yYj0hMX1yZXR1cm4gZX19LHpkOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXNbcl0sZD0hMSxlPWMud2I/bjohYy5WLGQ9e3FkOnRoaXMsbWI6Yy5JLFFiOmMuVn07YS51LnhjKHtwZDpkLFxub2Q6YmEsbzp0aGlzLFlhOmV9KTtjLkk9e307Yy5WPTA7dmFyIGY9dGhpcy55ZChjLGQpO2MuVj9kPXRoaXMuc2IoYy5YLGYpOih0aGlzLnMoKSxkPSEwKTtkJiYoYy5KP3RoaXMuR2IoKTp0aGlzLm5vdGlmeVN1YnNjcmliZXJzKGMuWCxcImJlZm9yZUNoYW5nZVwiKSxjLlg9Zix0aGlzLm5vdGlmeVN1YnNjcmliZXJzKGMuWCxcInNwZWN0YXRlXCIpLCFjLkomJmImJnRoaXMubm90aWZ5U3Vic2NyaWJlcnMoYy5YKSx0aGlzLnJjJiZ0aGlzLnJjKCkpO2UmJnRoaXMubm90aWZ5U3Vic2NyaWJlcnMoYy5YLFwiYXdha2VcIik7cmV0dXJuIGR9LHlkOmZ1bmN0aW9uKGIsYyl7dHJ5e3ZhciBkPWIuV2M7cmV0dXJuIGIubmI/ZC5jYWxsKGIubmIpOmQoKX1maW5hbGx5e2EudS5lbmQoKSxjLlFiJiYhYi5KJiZhLmEuUChjLm1iLGFhKSxiLnNhPWIua2E9ITF9fSx2OmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXNbcl07KGMua2EmJihhfHwhYy5WKXx8Yy5KJiZ0aGlzLlhhKCkpJiZ0aGlzLmhhKCk7cmV0dXJuIGMuWH0sXG51YjpmdW5jdGlvbihiKXthLlQuZm4udWIuY2FsbCh0aGlzLGIpO3RoaXMubmM9ZnVuY3Rpb24oKXt0aGlzW3JdLkp8fCh0aGlzW3JdLnNhP3RoaXMuaGEoKTp0aGlzW3JdLmthPSExKTtyZXR1cm4gdGhpc1tyXS5YfTt0aGlzLklhPWZ1bmN0aW9uKGEpe3RoaXMucGModGhpc1tyXS5YKTt0aGlzW3JdLmthPSEwO2EmJih0aGlzW3JdLnNhPSEwKTt0aGlzLnFjKHRoaXMsIWEpfX0sczpmdW5jdGlvbigpe3ZhciBiPXRoaXNbcl07IWIuSiYmYi5JJiZhLmEuUChiLkksZnVuY3Rpb24oYSxiKXtiLnMmJmIucygpfSk7Yi5sJiZiLlJiJiZhLmEuSy55YihiLmwsYi5SYik7Yi5JPW47Yi5WPTA7Yi5yYT0hMDtiLnNhPSExO2Iua2E9ITE7Yi5KPSExO2IubD1uO2IuU2E9bjtiLldjPW47dGhpcy5OY3x8KGIubmI9bil9fSxkYT17UWE6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcyxkPWNbcl07aWYoIWQucmEmJmQuSiYmXCJjaGFuZ2VcIj09Yil7ZC5KPSExO2lmKGQuc2F8fGMuWGEoKSlkLkk9bnVsbCxkLlY9XG4wLGMuaGEoKSYmYy5HYigpO2Vsc2V7dmFyIGU9W107YS5hLlAoZC5JLGZ1bmN0aW9uKGEsYil7ZVtiLkthXT1hfSk7YS5hLkQoZSxmdW5jdGlvbihhLGIpe3ZhciBlPWQuSVthXSxtPWMuJGMoZS5kYSk7bS5LYT1iO20uTGE9ZS5MYTtkLklbYV09bX0pO2MuWGEoKSYmYy5oYSgpJiZjLkdiKCl9ZC5yYXx8Yy5ub3RpZnlTdWJzY3JpYmVycyhkLlgsXCJhd2FrZVwiKX19LGhiOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXNbcl07Yy5yYXx8XCJjaGFuZ2VcIiE9Ynx8dGhpcy5XYShcImNoYW5nZVwiKXx8KGEuYS5QKGMuSSxmdW5jdGlvbihhLGIpe2IucyYmKGMuSVthXT17ZGE6Yi5kYSxLYTpiLkthLExhOmIuTGF9LGIucygpKX0pLGMuSj0hMCx0aGlzLm5vdGlmeVN1YnNjcmliZXJzKG4sXCJhc2xlZXBcIikpfSxvYjpmdW5jdGlvbigpe3ZhciBiPXRoaXNbcl07Yi5KJiYoYi5zYXx8dGhpcy5YYSgpKSYmdGhpcy5oYSgpO3JldHVybiBhLlQuZm4ub2IuY2FsbCh0aGlzKX19LGVhPXtRYTpmdW5jdGlvbihhKXtcImNoYW5nZVwiIT1cbmEmJlwiYmVmb3JlQ2hhbmdlXCIhPWF8fHRoaXMudigpfX07YS5hLkJhJiZhLmEuc2V0UHJvdG90eXBlT2YoQyxhLlQuZm4pO3ZhciBOPWEudGEuTWE7Q1tOXT1hLm87YS5PYz1mdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhW05dPT09Q1tOXX07YS5GZD1mdW5jdGlvbihiKXtyZXR1cm4gYS5PYyhiKSYmYltyXSYmYltyXS53Yn07YS5iKFwiY29tcHV0ZWRcIixhLm8pO2EuYihcImRlcGVuZGVudE9ic2VydmFibGVcIixhLm8pO2EuYihcImlzQ29tcHV0ZWRcIixhLk9jKTthLmIoXCJpc1B1cmVDb21wdXRlZFwiLGEuRmQpO2EuYihcImNvbXB1dGVkLmZuXCIsQyk7YS5MKEMsXCJwZWVrXCIsQy52KTthLkwoQyxcImRpc3Bvc2VcIixDLnMpO2EuTChDLFwiaXNBY3RpdmVcIixDLmphKTthLkwoQyxcImdldERlcGVuZGVuY2llc0NvdW50XCIsQy5xYSk7YS5MKEMsXCJnZXREZXBlbmRlbmNpZXNcIixDLlZhKTthLnhiPWZ1bmN0aW9uKGIsYyl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGEubyhiLFxuYyx7cHVyZTohMH0pO2I9YS5hLmV4dGVuZCh7fSxiKTtiLnB1cmU9ITA7cmV0dXJuIGEubyhiLGMpfTthLmIoXCJwdXJlQ29tcHV0ZWRcIixhLnhiKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsZixnKXtnPWd8fG5ldyBkO2E9ZihhKTtpZihcIm9iamVjdFwiIT10eXBlb2YgYXx8bnVsbD09PWF8fGE9PT1ufHxhIGluc3RhbmNlb2YgUmVnRXhwfHxhIGluc3RhbmNlb2YgRGF0ZXx8YSBpbnN0YW5jZW9mIFN0cmluZ3x8YSBpbnN0YW5jZW9mIE51bWJlcnx8YSBpbnN0YW5jZW9mIEJvb2xlYW4pcmV0dXJuIGE7dmFyIGg9YSBpbnN0YW5jZW9mIEFycmF5P1tdOnt9O2cuc2F2ZShhLGgpO2MoYSxmdW5jdGlvbihjKXt2YXIgZD1mKGFbY10pO3N3aXRjaCh0eXBlb2YgZCl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJmdW5jdGlvblwiOmhbY109ZDticmVhaztjYXNlIFwib2JqZWN0XCI6Y2FzZSBcInVuZGVmaW5lZFwiOnZhciBsPWcuZ2V0KGQpO2hbY109bCE9PVxubj9sOmIoZCxmLGcpfX0pO3JldHVybiBofWZ1bmN0aW9uIGMoYSxiKXtpZihhIGluc3RhbmNlb2YgQXJyYXkpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWIoYyk7XCJmdW5jdGlvblwiPT10eXBlb2YgYS50b0pTT04mJmIoXCJ0b0pTT05cIil9ZWxzZSBmb3IoYyBpbiBhKWIoYyl9ZnVuY3Rpb24gZCgpe3RoaXMua2V5cz1bXTt0aGlzLnZhbHVlcz1bXX1hLmFkPWZ1bmN0aW9uKGMpe2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgRXJyb3IoXCJXaGVuIGNhbGxpbmcga28udG9KUywgcGFzcyB0aGUgb2JqZWN0IHlvdSB3YW50IHRvIGNvbnZlcnQuXCIpO3JldHVybiBiKGMsZnVuY3Rpb24oYil7Zm9yKHZhciBjPTA7YS5PKGIpJiYxMD5jO2MrKyliPWIoKTtyZXR1cm4gYn0pfTthLnRvSlNPTj1mdW5jdGlvbihiLGMsZCl7Yj1hLmFkKGIpO3JldHVybiBhLmEuaGMoYixjLGQpfTtkLnByb3RvdHlwZT17Y29uc3RydWN0b3I6ZCxzYXZlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLkEodGhpcy5rZXlzLFxuYik7MDw9ZD90aGlzLnZhbHVlc1tkXT1jOih0aGlzLmtleXMucHVzaChiKSx0aGlzLnZhbHVlcy5wdXNoKGMpKX0sZ2V0OmZ1bmN0aW9uKGIpe2I9YS5hLkEodGhpcy5rZXlzLGIpO3JldHVybiAwPD1iP3RoaXMudmFsdWVzW2JdOm59fX0pKCk7YS5iKFwidG9KU1wiLGEuYWQpO2EuYihcInRvSlNPTlwiLGEudG9KU09OKTthLldkPWZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBlKGMpe3ZhciBlPWEueGIoYixkKS5leHRlbmQoe21hOlwiYWx3YXlzXCJ9KSxoPWUuc3Vic2NyaWJlKGZ1bmN0aW9uKGEpe2EmJihoLnMoKSxjKGEpKX0pO2Uubm90aWZ5U3Vic2NyaWJlcnMoZS52KCkpO3JldHVybiBofXJldHVyblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBQcm9taXNlfHxjP2UoYy5iaW5kKGQpKTpuZXcgUHJvbWlzZShlKX07YS5iKFwid2hlblwiLGEuV2QpOyhmdW5jdGlvbigpe2Eudz17TTpmdW5jdGlvbihiKXtzd2l0Y2goYS5hLlIoYikpe2Nhc2UgXCJvcHRpb25cIjpyZXR1cm4hMD09PWIuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX18/XG5hLmEuZy5nZXQoYixhLmMub3B0aW9ucy4kYik6Nz49YS5hLlc/Yi5nZXRBdHRyaWJ1dGVOb2RlKFwidmFsdWVcIikmJmIuZ2V0QXR0cmlidXRlTm9kZShcInZhbHVlXCIpLnNwZWNpZmllZD9iLnZhbHVlOmIudGV4dDpiLnZhbHVlO2Nhc2UgXCJzZWxlY3RcIjpyZXR1cm4gMDw9Yi5zZWxlY3RlZEluZGV4P2Eudy5NKGIub3B0aW9uc1tiLnNlbGVjdGVkSW5kZXhdKTpuO2RlZmF1bHQ6cmV0dXJuIGIudmFsdWV9fSxjYjpmdW5jdGlvbihiLGMsZCl7c3dpdGNoKGEuYS5SKGIpKXtjYXNlIFwib3B0aW9uXCI6XCJzdHJpbmdcIj09PXR5cGVvZiBjPyhhLmEuZy5zZXQoYixhLmMub3B0aW9ucy4kYixuKSxcIl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fXCJpbiBiJiZkZWxldGUgYi5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXyxiLnZhbHVlPWMpOihhLmEuZy5zZXQoYixhLmMub3B0aW9ucy4kYixjKSxiLl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fPSEwLGIudmFsdWU9XCJudW1iZXJcIj09PVxudHlwZW9mIGM/YzpcIlwiKTticmVhaztjYXNlIFwic2VsZWN0XCI6aWYoXCJcIj09PWN8fG51bGw9PT1jKWM9bjtmb3IodmFyIGU9LTEsZj0wLGc9Yi5vcHRpb25zLmxlbmd0aCxoO2Y8ZzsrK2YpaWYoaD1hLncuTShiLm9wdGlvbnNbZl0pLGg9PWN8fFwiXCI9PT1oJiZjPT09bil7ZT1mO2JyZWFrfWlmKGR8fDA8PWV8fGM9PT1uJiYxPGIuc2l6ZSliLnNlbGVjdGVkSW5kZXg9ZSw2PT09YS5hLlcmJmEuYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5zZWxlY3RlZEluZGV4PWV9LDApO2JyZWFrO2RlZmF1bHQ6aWYobnVsbD09PWN8fGM9PT1uKWM9XCJcIjtiLnZhbHVlPWN9fX19KSgpO2EuYihcInNlbGVjdEV4dGVuc2lvbnNcIixhLncpO2EuYihcInNlbGVjdEV4dGVuc2lvbnMucmVhZFZhbHVlXCIsYS53Lk0pO2EuYihcInNlbGVjdEV4dGVuc2lvbnMud3JpdGVWYWx1ZVwiLGEudy5jYik7YS5tPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiKXtiPWEuYS5EYihiKTsxMjM9PT1iLmNoYXJDb2RlQXQoMCkmJihiPWIuc2xpY2UoMSxcbi0xKSk7Yis9XCJcXG4sXCI7dmFyIGM9W10sZD1iLm1hdGNoKGUpLHAscT1bXSxoPTA7aWYoMTxkLmxlbmd0aCl7Zm9yKHZhciB4PTAsQjtCPWRbeF07Kyt4KXt2YXIgdT1CLmNoYXJDb2RlQXQoMCk7aWYoNDQ9PT11KXtpZigwPj1oKXtjLnB1c2gocCYmcS5sZW5ndGg/e2tleTpwLHZhbHVlOnEuam9pbihcIlwiKX06e3Vua25vd246cHx8cS5qb2luKFwiXCIpfSk7cD1oPTA7cT1bXTtjb250aW51ZX19ZWxzZSBpZig1OD09PXUpe2lmKCFoJiYhcCYmMT09PXEubGVuZ3RoKXtwPXEucG9wKCk7Y29udGludWV9fWVsc2UgaWYoNDc9PT11JiYxPEIubGVuZ3RoJiYoNDc9PT1CLmNoYXJDb2RlQXQoMSl8fDQyPT09Qi5jaGFyQ29kZUF0KDEpKSljb250aW51ZTtlbHNlIDQ3PT09dSYmeCYmMTxCLmxlbmd0aD8odT1kW3gtMV0ubWF0Y2goZikpJiYhZ1t1WzBdXSYmKGI9Yi5zdWJzdHIoYi5pbmRleE9mKEIpKzEpLGQ9Yi5tYXRjaChlKSx4PS0xLEI9XCIvXCIpOjQwPT09dXx8MTIzPT09dXx8OTE9PT11PysraDpcbjQxPT09dXx8MTI1PT09dXx8OTM9PT11Py0taDpwfHxxLmxlbmd0aHx8MzQhPT11JiYzOSE9PXV8fChCPUIuc2xpY2UoMSwtMSkpO3EucHVzaChCKX1pZigwPGgpdGhyb3cgRXJyb3IoXCJVbmJhbGFuY2VkIHBhcmVudGhlc2VzLCBicmFjZXMsIG9yIGJyYWNrZXRzXCIpO31yZXR1cm4gY312YXIgYz1bXCJ0cnVlXCIsXCJmYWxzZVwiLFwibnVsbFwiLFwidW5kZWZpbmVkXCJdLGQ9L14oPzpbJF9hLXpdWyRcXHddKnwoLispKFxcLlxccypbJF9hLXpdWyRcXHddKnxcXFsuK1xcXSkpJC9pLGU9UmVnRXhwKFwiXFxcIig/OlxcXFxcXFxcLnxbXlxcXCJdKSpcXFwifCcoPzpcXFxcXFxcXC58W14nXSkqJ3xgKD86XFxcXFxcXFwufFteYF0pKmB8L1xcXFwqKD86W14qXXxcXFxcKitbXiovXSkqXFxcXCorL3wvLy4qXFxufC8oPzpcXFxcXFxcXC58W14vXSkrL3cqfFteXFxcXHM6LC9dW14sXFxcIidge30oKS86W1xcXFxdXSpbXlxcXFxzLFxcXCInYHt9KCkvOltcXFxcXV18W15cXFxcc11cIixcImdcIiksZj0vW1xcXSlcIidBLVphLXowLTlfJF0rJC8sZz17XCJpblwiOjEsXCJyZXR1cm5cIjoxLFwidHlwZW9mXCI6MX0sXG5oPXt9O3JldHVybntSYTpbXSx3YTpoLGFjOmIsdmI6ZnVuY3Rpb24oZSxmKXtmdW5jdGlvbiBsKGIsZSl7dmFyIGY7aWYoIXgpe3ZhciBrPWEuZ2V0QmluZGluZ0hhbmRsZXIoYik7aWYoayYmay5wcmVwcm9jZXNzJiYhKGU9ay5wcmVwcm9jZXNzKGUsYixsKSkpcmV0dXJuO2lmKGs9aFtiXSlmPWUsMDw9YS5hLkEoYyxmKT9mPSExOihrPWYubWF0Y2goZCksZj1udWxsPT09az8hMTprWzFdP1wiT2JqZWN0KFwiK2tbMV0rXCIpXCIra1syXTpmKSxrPWY7ayYmcS5wdXNoKFwiJ1wiKyhcInN0cmluZ1wiPT10eXBlb2YgaFtiXT9oW2JdOmIpK1wiJzpmdW5jdGlvbihfeil7XCIrZitcIj1fen1cIil9ZyYmKGU9XCJmdW5jdGlvbigpe3JldHVybiBcIitlK1wiIH1cIik7cC5wdXNoKFwiJ1wiK2IrXCInOlwiK2UpfWY9Znx8e307dmFyIHA9W10scT1bXSxnPWYudmFsdWVBY2Nlc3NvcnMseD1mLmJpbmRpbmdQYXJhbXMsQj1cInN0cmluZ1wiPT09dHlwZW9mIGU/YihlKTplO2EuYS5EKEIsZnVuY3Rpb24oYSl7bChhLmtleXx8YS51bmtub3duLFxuYS52YWx1ZSl9KTtxLmxlbmd0aCYmbChcIl9rb19wcm9wZXJ0eV93cml0ZXJzXCIsXCJ7XCIrcS5qb2luKFwiLFwiKStcIiB9XCIpO3JldHVybiBwLmpvaW4oXCIsXCIpfSxJZDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWlmKGFbY10ua2V5PT1iKXJldHVybiEwO3JldHVybiExfSxlYjpmdW5jdGlvbihiLGMsZCxlLGYpe2lmKGImJmEuTyhiKSkhYS5aYShiKXx8ZiYmYi52KCk9PT1lfHxiKGUpO2Vsc2UgaWYoKGI9Yy5nZXQoXCJfa29fcHJvcGVydHlfd3JpdGVyc1wiKSkmJmJbZF0pYltkXShlKX19fSgpO2EuYihcImV4cHJlc3Npb25SZXdyaXRpbmdcIixhLm0pO2EuYihcImV4cHJlc3Npb25SZXdyaXRpbmcuYmluZGluZ1Jld3JpdGVWYWxpZGF0b3JzXCIsYS5tLlJhKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nLnBhcnNlT2JqZWN0TGl0ZXJhbFwiLGEubS5hYyk7YS5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5wcmVQcm9jZXNzQmluZGluZ3NcIixhLm0udmIpO2EuYihcImV4cHJlc3Npb25SZXdyaXRpbmcuX3R3b1dheUJpbmRpbmdzXCIsXG5hLm0ud2EpO2EuYihcImpzb25FeHByZXNzaW9uUmV3cml0aW5nXCIsYS5tKTthLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZy5pbnNlcnRQcm9wZXJ0eUFjY2Vzc29yc0ludG9Kc29uXCIsYS5tLnZiKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEpe3JldHVybiA4PT1hLm5vZGVUeXBlJiZnLnRlc3QoZj9hLnRleHQ6YS5ub2RlVmFsdWUpfWZ1bmN0aW9uIGMoYSl7cmV0dXJuIDg9PWEubm9kZVR5cGUmJmgudGVzdChmP2EudGV4dDphLm5vZGVWYWx1ZSl9ZnVuY3Rpb24gZChkLGUpe2Zvcih2YXIgZj1kLGg9MSxnPVtdO2Y9Zi5uZXh0U2libGluZzspe2lmKGMoZikmJihhLmEuZy5zZXQoZixrLCEwKSxoLS0sMD09PWgpKXJldHVybiBnO2cucHVzaChmKTtiKGYpJiZoKyt9aWYoIWUpdGhyb3cgRXJyb3IoXCJDYW5ub3QgZmluZCBjbG9zaW5nIGNvbW1lbnQgdGFnIHRvIG1hdGNoOiBcIitkLm5vZGVWYWx1ZSk7cmV0dXJuIG51bGx9ZnVuY3Rpb24gZShhLGIpe3ZhciBjPWQoYSxiKTtyZXR1cm4gYz9cbjA8Yy5sZW5ndGg/Y1tjLmxlbmd0aC0xXS5uZXh0U2libGluZzphLm5leHRTaWJsaW5nOm51bGx9dmFyIGY9dyYmXCJcXHgzYyEtLXRlc3QtLVxceDNlXCI9PT13LmNyZWF0ZUNvbW1lbnQoXCJ0ZXN0XCIpLnRleHQsZz1mPy9eXFx4M2MhLS1cXHMqa28oPzpcXHMrKFtcXHNcXFNdKykpP1xccyotLVxceDNlJC86L15cXHMqa28oPzpcXHMrKFtcXHNcXFNdKykpP1xccyokLyxoPWY/L15cXHgzYyEtLVxccypcXC9rb1xccyotLVxceDNlJC86L15cXHMqXFwva29cXHMqJC8sbT17dWw6ITAsb2w6ITB9LGs9XCJfX2tvX21hdGNoZWRFbmRDb21tZW50X19cIjthLmg9e2VhOnt9LGNoaWxkTm9kZXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSk/ZChhKTphLmNoaWxkTm9kZXN9LEVhOmZ1bmN0aW9uKGMpe2lmKGIoYykpe2M9YS5oLmNoaWxkTm9kZXMoYyk7Zm9yKHZhciBkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWEucmVtb3ZlTm9kZShjW2RdKX1lbHNlIGEuYS5UYihjKX0sdmE6ZnVuY3Rpb24oYyxkKXtpZihiKGMpKXthLmguRWEoYyk7Zm9yKHZhciBlPVxuYy5uZXh0U2libGluZyxmPTAsaz1kLmxlbmd0aDtmPGs7ZisrKWUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZFtmXSxlKX1lbHNlIGEuYS52YShjLGQpfSxWYzpmdW5jdGlvbihhLGMpe3ZhciBkO2IoYSk/KGQ9YS5uZXh0U2libGluZyxhPWEucGFyZW50Tm9kZSk6ZD1hLmZpcnN0Q2hpbGQ7ZD9jIT09ZCYmYS5pbnNlcnRCZWZvcmUoYyxkKTphLmFwcGVuZENoaWxkKGMpfSxXYjpmdW5jdGlvbihjLGQsZSl7ZT8oZT1lLm5leHRTaWJsaW5nLGIoYykmJihjPWMucGFyZW50Tm9kZSksZT9kIT09ZSYmYy5pbnNlcnRCZWZvcmUoZCxlKTpjLmFwcGVuZENoaWxkKGQpKTphLmguVmMoYyxkKX0sZmlyc3RDaGlsZDpmdW5jdGlvbihhKXtpZihiKGEpKXJldHVybiFhLm5leHRTaWJsaW5nfHxjKGEubmV4dFNpYmxpbmcpP251bGw6YS5uZXh0U2libGluZztpZihhLmZpcnN0Q2hpbGQmJmMoYS5maXJzdENoaWxkKSl0aHJvdyBFcnJvcihcIkZvdW5kIGludmFsaWQgZW5kIGNvbW1lbnQsIGFzIHRoZSBmaXJzdCBjaGlsZCBvZiBcIitcbmEpO3JldHVybiBhLmZpcnN0Q2hpbGR9LG5leHRTaWJsaW5nOmZ1bmN0aW9uKGQpe2IoZCkmJihkPWUoZCkpO2lmKGQubmV4dFNpYmxpbmcmJmMoZC5uZXh0U2libGluZykpe3ZhciBmPWQubmV4dFNpYmxpbmc7aWYoYyhmKSYmIWEuYS5nLmdldChmLGspKXRocm93IEVycm9yKFwiRm91bmQgZW5kIGNvbW1lbnQgd2l0aG91dCBhIG1hdGNoaW5nIG9wZW5pbmcgY29tbWVudCwgYXMgY2hpbGQgb2YgXCIrZCk7cmV0dXJuIG51bGx9cmV0dXJuIGQubmV4dFNpYmxpbmd9LENkOmIsVmQ6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9KGY/YS50ZXh0OmEubm9kZVZhbHVlKS5tYXRjaChnKSk/YVsxXTpudWxsfSxTYzpmdW5jdGlvbihkKXtpZihtW2EuYS5SKGQpXSl7dmFyIGY9ZC5maXJzdENoaWxkO2lmKGYpe2RvIGlmKDE9PT1mLm5vZGVUeXBlKXt2YXIgaztrPWYuZmlyc3RDaGlsZDt2YXIgaD1udWxsO2lmKGspe2RvIGlmKGgpaC5wdXNoKGspO2Vsc2UgaWYoYihrKSl7dmFyIGc9ZShrLCEwKTtnP2s9XG5nOmg9W2tdfWVsc2UgYyhrKSYmKGg9W2tdKTt3aGlsZShrPWsubmV4dFNpYmxpbmcpfWlmKGs9aClmb3IoaD1mLm5leHRTaWJsaW5nLGc9MDtnPGsubGVuZ3RoO2crKyloP2QuaW5zZXJ0QmVmb3JlKGtbZ10saCk6ZC5hcHBlbmRDaGlsZChrW2ddKX13aGlsZShmPWYubmV4dFNpYmxpbmcpfX19fX0pKCk7YS5iKFwidmlydHVhbEVsZW1lbnRzXCIsYS5oKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuYWxsb3dlZEJpbmRpbmdzXCIsYS5oLmVhKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuZW1wdHlOb2RlXCIsYS5oLkVhKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuaW5zZXJ0QWZ0ZXJcIixhLmguV2IpO2EuYihcInZpcnR1YWxFbGVtZW50cy5wcmVwZW5kXCIsYS5oLlZjKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMuc2V0RG9tTm9kZUNoaWxkcmVuXCIsYS5oLnZhKTsoZnVuY3Rpb24oKXthLmdhPWZ1bmN0aW9uKCl7dGhpcy5uZD17fX07YS5hLmV4dGVuZChhLmdhLnByb3RvdHlwZSx7bm9kZUhhc0JpbmRpbmdzOmZ1bmN0aW9uKGIpe3N3aXRjaChiLm5vZGVUeXBlKXtjYXNlIDE6cmV0dXJuIG51bGwhPVxuYi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJpbmRcIil8fGEuai5nZXRDb21wb25lbnROYW1lRm9yTm9kZShiKTtjYXNlIDg6cmV0dXJuIGEuaC5DZChiKTtkZWZhdWx0OnJldHVybiExfX0sZ2V0QmluZGluZ3M6ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLmdldEJpbmRpbmdzU3RyaW5nKGIsYyksZD1kP3RoaXMucGFyc2VCaW5kaW5nc1N0cmluZyhkLGMsYik6bnVsbDtyZXR1cm4gYS5qLnRjKGQsYixjLCExKX0sZ2V0QmluZGluZ0FjY2Vzc29yczpmdW5jdGlvbihiLGMpe3ZhciBkPXRoaXMuZ2V0QmluZGluZ3NTdHJpbmcoYixjKSxkPWQ/dGhpcy5wYXJzZUJpbmRpbmdzU3RyaW5nKGQsYyxiLHt2YWx1ZUFjY2Vzc29yczohMH0pOm51bGw7cmV0dXJuIGEuai50YyhkLGIsYywhMCl9LGdldEJpbmRpbmdzU3RyaW5nOmZ1bmN0aW9uKGIpe3N3aXRjaChiLm5vZGVUeXBlKXtjYXNlIDE6cmV0dXJuIGIuZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpO2Nhc2UgODpyZXR1cm4gYS5oLlZkKGIpO2RlZmF1bHQ6cmV0dXJuIG51bGx9fSxcbnBhcnNlQmluZGluZ3NTdHJpbmc6ZnVuY3Rpb24oYixjLGQsZSl7dHJ5e3ZhciBmPXRoaXMubmQsZz1iKyhlJiZlLnZhbHVlQWNjZXNzb3JzfHxcIlwiKSxoO2lmKCEoaD1mW2ddKSl7dmFyIG0saz1cIndpdGgoJGNvbnRleHQpe3dpdGgoJGRhdGF8fHt9KXtyZXR1cm57XCIrYS5tLnZiKGIsZSkrXCJ9fX1cIjttPW5ldyBGdW5jdGlvbihcIiRjb250ZXh0XCIsXCIkZWxlbWVudFwiLGspO2g9ZltnXT1tfXJldHVybiBoKGMsZCl9Y2F0Y2gobCl7dGhyb3cgbC5tZXNzYWdlPVwiVW5hYmxlIHRvIHBhcnNlIGJpbmRpbmdzLlxcbkJpbmRpbmdzIHZhbHVlOiBcIitiK1wiXFxuTWVzc2FnZTogXCIrbC5tZXNzYWdlLGw7fX19KTthLmdhLmluc3RhbmNlPW5ldyBhLmdhfSkoKTthLmIoXCJiaW5kaW5nUHJvdmlkZXJcIixhLmdhKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIpe3ZhciBjPShiPWEuYS5nLmdldChiLHopKSYmYi5OO2MmJihiLk49bnVsbCxjLlRjKCkpfWZ1bmN0aW9uIGMoYyxkLGUpe3RoaXMubm9kZT1jO3RoaXMueWM9XG5kO3RoaXMua2I9W107dGhpcy5IPSExO2QuTnx8YS5hLksuemEoYyxiKTtlJiZlLk4mJihlLk4ua2IucHVzaChjKSx0aGlzLktiPWUpfWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGF9fWZ1bmN0aW9uIGUoYSl7cmV0dXJuIGEoKX1mdW5jdGlvbiBmKGIpe3JldHVybiBhLmEuR2EoYS51LkcoYiksZnVuY3Rpb24oYSxjKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYigpW2NdfX0pfWZ1bmN0aW9uIGcoYixjLGUpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2YoYi5iaW5kKG51bGwsYyxlKSk6YS5hLkdhKGIsZCl9ZnVuY3Rpb24gaChhLGIpe3JldHVybiBmKHRoaXMuZ2V0QmluZGluZ3MuYmluZCh0aGlzLGEsYikpfWZ1bmN0aW9uIG0oYixjKXt2YXIgZD1hLmguZmlyc3RDaGlsZChjKTtpZihkKXt2YXIgZSxmPWEuZ2EuaW5zdGFuY2UsbD1mLnByZXByb2Nlc3NOb2RlO2lmKGwpe2Zvcig7ZT1kOylkPWEuaC5uZXh0U2libGluZyhlKSxsLmNhbGwoZixlKTtcbmQ9YS5oLmZpcnN0Q2hpbGQoYyl9Zm9yKDtlPWQ7KWQ9YS5oLm5leHRTaWJsaW5nKGUpLGsoYixlKX1hLmkubWEoYyxhLmkuSCl9ZnVuY3Rpb24gayhiLGMpe3ZhciBkPWIsZT0xPT09Yy5ub2RlVHlwZTtlJiZhLmguU2MoYyk7aWYoZXx8YS5nYS5pbnN0YW5jZS5ub2RlSGFzQmluZGluZ3MoYykpZD1wKGMsbnVsbCxiKS5iaW5kaW5nQ29udGV4dEZvckRlc2NlbmRhbnRzO2QmJiF1W2EuYS5SKGMpXSYmbShkLGMpfWZ1bmN0aW9uIGwoYil7dmFyIGM9W10sZD17fSxlPVtdO2EuYS5QKGIsZnVuY3Rpb24gY2EoZil7aWYoIWRbZl0pe3ZhciBrPWEuZ2V0QmluZGluZ0hhbmRsZXIoZik7ayYmKGsuYWZ0ZXImJihlLnB1c2goZiksYS5hLkQoay5hZnRlcixmdW5jdGlvbihjKXtpZihiW2NdKXtpZigtMSE9PWEuYS5BKGUsYykpdGhyb3cgRXJyb3IoXCJDYW5ub3QgY29tYmluZSB0aGUgZm9sbG93aW5nIGJpbmRpbmdzLCBiZWNhdXNlIHRoZXkgaGF2ZSBhIGN5Y2xpYyBkZXBlbmRlbmN5OiBcIitlLmpvaW4oXCIsIFwiKSk7XG5jYShjKX19KSxlLmxlbmd0aC0tKSxjLnB1c2goe2tleTpmLE1jOmt9KSk7ZFtmXT0hMH19KTtyZXR1cm4gY31mdW5jdGlvbiBwKGIsYyxkKXt2YXIgZj1hLmEuZy5VYihiLHose30pLGs9Zi5oZDtpZighYyl7aWYoayl0aHJvdyBFcnJvcihcIllvdSBjYW5ub3QgYXBwbHkgYmluZGluZ3MgbXVsdGlwbGUgdGltZXMgdG8gdGhlIHNhbWUgZWxlbWVudC5cIik7Zi5oZD0hMH1rfHwoZi5jb250ZXh0PWQpO2YuWmJ8fChmLlpiPXt9KTt2YXIgZztpZihjJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYylnPWM7ZWxzZXt2YXIgcD1hLmdhLmluc3RhbmNlLHE9cC5nZXRCaW5kaW5nQWNjZXNzb3JzfHxoLG09YS4kKGZ1bmN0aW9uKCl7aWYoZz1jP2MoZCxiKTpxLmNhbGwocCxiLGQpKXtpZihkW3RdKWRbdF0oKTtpZihkW0JdKWRbQl0oKX1yZXR1cm4gZ30sbnVsbCx7bDpifSk7ZyYmbS5qYSgpfHwobT1udWxsKX12YXIgeD1kLHU7aWYoZyl7dmFyIEo9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hLkdhKG0/bSgpOlxuZyxlKX0scj1tP2Z1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBlKG0oKVthXSl9fTpmdW5jdGlvbihhKXtyZXR1cm4gZ1thXX07Si5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGdbYV0mJmUocihhKSl9O0ouaGFzPWZ1bmN0aW9uKGEpe3JldHVybiBhIGluIGd9O2EuaS5IIGluIGcmJmEuaS5zdWJzY3JpYmUoYixhLmkuSCxmdW5jdGlvbigpe3ZhciBjPSgwLGdbYS5pLkhdKSgpO2lmKGMpe3ZhciBkPWEuaC5jaGlsZE5vZGVzKGIpO2QubGVuZ3RoJiZjKGQsYS5FYyhkWzBdKSl9fSk7YS5pLnBhIGluIGcmJih4PWEuaS5DYihiLGQpLGEuaS5zdWJzY3JpYmUoYixhLmkucGEsZnVuY3Rpb24oKXt2YXIgYz0oMCxnW2EuaS5wYV0pKCk7YyYmYS5oLmZpcnN0Q2hpbGQoYikmJmMoYil9KSk7Zj1sKGcpO2EuYS5EKGYsZnVuY3Rpb24oYyl7dmFyIGQ9Yy5NYy5pbml0LGU9Yy5NYy51cGRhdGUsZj1jLmtleTtpZig4PT09Yi5ub2RlVHlwZSYmIWEuaC5lYVtmXSl0aHJvdyBFcnJvcihcIlRoZSBiaW5kaW5nICdcIitcbmYrXCInIGNhbm5vdCBiZSB1c2VkIHdpdGggdmlydHVhbCBlbGVtZW50c1wiKTt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2YgZCYmYS51LkcoZnVuY3Rpb24oKXt2YXIgYT1kKGIscihmKSxKLHguJGRhdGEseCk7aWYoYSYmYS5jb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5ncyl7aWYodSE9PW4pdGhyb3cgRXJyb3IoXCJNdWx0aXBsZSBiaW5kaW5ncyAoXCIrdStcIiBhbmQgXCIrZitcIikgYXJlIHRyeWluZyB0byBjb250cm9sIGRlc2NlbmRhbnQgYmluZGluZ3Mgb2YgdGhlIHNhbWUgZWxlbWVudC4gWW91IGNhbm5vdCB1c2UgdGhlc2UgYmluZGluZ3MgdG9nZXRoZXIgb24gdGhlIHNhbWUgZWxlbWVudC5cIik7dT1mfX0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmEuJChmdW5jdGlvbigpe2UoYixyKGYpLEoseC4kZGF0YSx4KX0sbnVsbCx7bDpifSl9Y2F0Y2goayl7dGhyb3cgay5tZXNzYWdlPSdVbmFibGUgdG8gcHJvY2VzcyBiaW5kaW5nIFwiJytmK1wiOiBcIitnW2ZdKydcIlxcbk1lc3NhZ2U6ICcray5tZXNzYWdlLFxuazt9fSl9Zj11PT09bjtyZXR1cm57c2hvdWxkQmluZERlc2NlbmRhbnRzOmYsYmluZGluZ0NvbnRleHRGb3JEZXNjZW5kYW50czpmJiZ4fX1mdW5jdGlvbiBxKGIsYyl7cmV0dXJuIGImJmIgaW5zdGFuY2VvZiBhLmZhP2I6bmV3IGEuZmEoYixuLG4sYyl9dmFyIHQ9YS5hLkRhKFwiX3N1YnNjcmliYWJsZVwiKSx4PWEuYS5EYShcIl9hbmNlc3RvckJpbmRpbmdJbmZvXCIpLEI9YS5hLkRhKFwiX2RhdGFEZXBlbmRlbmN5XCIpO2EuYz17fTt2YXIgdT17c2NyaXB0OiEwLHRleHRhcmVhOiEwLHRlbXBsYXRlOiEwfTthLmdldEJpbmRpbmdIYW5kbGVyPWZ1bmN0aW9uKGIpe3JldHVybiBhLmNbYl19O3ZhciBKPXt9O2EuZmE9ZnVuY3Rpb24oYixjLGQsZSxmKXtmdW5jdGlvbiBrKCl7dmFyIGI9cD9oKCk6aCxmPWEuYS5mKGIpO2M/KGEuYS5leHRlbmQobCxjKSx4IGluIGMmJihsW3hdPWNbeF0pKToobC4kcGFyZW50cz1bXSxsLiRyb290PWYsbC5rbz1hKTtsW3RdPXE7Zz9mPWwuJGRhdGE6KGwuJHJhd0RhdGE9XG5iLGwuJGRhdGE9Zik7ZCYmKGxbZF09Zik7ZSYmZShsLGMsZik7aWYoYyYmY1t0XSYmIWEuUy5vKCkuVmIoY1t0XSkpY1t0XSgpO20mJihsW0JdPW0pO3JldHVybiBsLiRkYXRhfXZhciBsPXRoaXMsZz1iPT09SixoPWc/bjpiLHA9XCJmdW5jdGlvblwiPT10eXBlb2YgaCYmIWEuTyhoKSxxLG09ZiYmZi5kYXRhRGVwZW5kZW5jeTtmJiZmLmV4cG9ydERlcGVuZGVuY2llcz9rKCk6KHE9YS54YihrKSxxLnYoKSxxLmphKCk/cS5lcXVhbGl0eUNvbXBhcmVyPW51bGw6bFt0XT1uKX07YS5mYS5wcm90b3R5cGUuY3JlYXRlQ2hpbGRDb250ZXh0PWZ1bmN0aW9uKGIsYyxkLGUpeyFlJiZjJiZcIm9iamVjdFwiPT10eXBlb2YgYyYmKGU9YyxjPWUuYXMsZD1lLmV4dGVuZCk7aWYoYyYmZSYmZS5ub0NoaWxkQ29udGV4dCl7dmFyIGY9XCJmdW5jdGlvblwiPT10eXBlb2YgYiYmIWEuTyhiKTtyZXR1cm4gbmV3IGEuZmEoSix0aGlzLG51bGwsZnVuY3Rpb24oYSl7ZCYmZChhKTthW2NdPWY/YigpOmJ9LGUpfXJldHVybiBuZXcgYS5mYShiLFxudGhpcyxjLGZ1bmN0aW9uKGEsYil7YS4kcGFyZW50Q29udGV4dD1iO2EuJHBhcmVudD1iLiRkYXRhO2EuJHBhcmVudHM9KGIuJHBhcmVudHN8fFtdKS5zbGljZSgwKTthLiRwYXJlbnRzLnVuc2hpZnQoYS4kcGFyZW50KTtkJiZkKGEpfSxlKX07YS5mYS5wcm90b3R5cGUuZXh0ZW5kPWZ1bmN0aW9uKGIsYyl7cmV0dXJuIG5ldyBhLmZhKEosdGhpcyxudWxsLGZ1bmN0aW9uKGMpe2EuYS5leHRlbmQoYyxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiP2IoYyk6Yil9LGMpfTt2YXIgej1hLmEuZy5aKCk7Yy5wcm90b3R5cGUuVGM9ZnVuY3Rpb24oKXt0aGlzLktiJiZ0aGlzLktiLk4mJnRoaXMuS2IuTi5zZCh0aGlzLm5vZGUpfTtjLnByb3RvdHlwZS5zZD1mdW5jdGlvbihiKXthLmEuUGEodGhpcy5rYixiKTshdGhpcy5rYi5sZW5ndGgmJnRoaXMuSCYmdGhpcy5DYygpfTtjLnByb3RvdHlwZS5DYz1mdW5jdGlvbigpe3RoaXMuSD0hMDt0aGlzLnljLk4mJiF0aGlzLmtiLmxlbmd0aCYmKHRoaXMueWMuTj1cbm51bGwsYS5hLksueWIodGhpcy5ub2RlLGIpLGEuaS5tYSh0aGlzLm5vZGUsYS5pLnBhKSx0aGlzLlRjKCkpfTthLmk9e0g6XCJjaGlsZHJlbkNvbXBsZXRlXCIscGE6XCJkZXNjZW5kYW50c0NvbXBsZXRlXCIsc3Vic2NyaWJlOmZ1bmN0aW9uKGIsYyxkLGUsZil7dmFyIGs9YS5hLmcuVWIoYix6LHt9KTtrLkZhfHwoay5GYT1uZXcgYS5UKTtmJiZmLm5vdGlmeUltbWVkaWF0ZWx5JiZrLlpiW2NdJiZhLnUuRyhkLGUsW2JdKTtyZXR1cm4gay5GYS5zdWJzY3JpYmUoZCxlLGMpfSxtYTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5nLmdldChiLHopO2lmKGQmJihkLlpiW2NdPSEwLGQuRmEmJmQuRmEubm90aWZ5U3Vic2NyaWJlcnMoYixjKSxjPT1hLmkuSCkpaWYoZC5OKWQuTi5DYygpO2Vsc2UgaWYoZC5OPT09biYmZC5GYSYmZC5GYS5XYShhLmkucGEpKXRocm93IEVycm9yKFwiZGVzY2VuZGFudHNDb21wbGV0ZSBldmVudCBub3Qgc3VwcG9ydGVkIGZvciBiaW5kaW5ncyBvbiB0aGlzIG5vZGVcIik7XG59LENiOmZ1bmN0aW9uKGIsZCl7dmFyIGU9YS5hLmcuVWIoYix6LHt9KTtlLk58fChlLk49bmV3IGMoYixlLGRbeF0pKTtyZXR1cm4gZFt4XT09ZT9kOmQuZXh0ZW5kKGZ1bmN0aW9uKGEpe2FbeF09ZX0pfX07YS5UZD1mdW5jdGlvbihiKXtyZXR1cm4oYj1hLmEuZy5nZXQoYix6KSkmJmIuY29udGV4dH07YS5pYj1mdW5jdGlvbihiLGMsZCl7MT09PWIubm9kZVR5cGUmJmEuaC5TYyhiKTtyZXR1cm4gcChiLGMscShkKSl9O2EubGQ9ZnVuY3Rpb24oYixjLGQpe2Q9cShkKTtyZXR1cm4gYS5pYihiLGcoYyxkLGIpLGQpfTthLk9hPWZ1bmN0aW9uKGEsYil7MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlfHxtKHEoYSksYil9O2EudmM9ZnVuY3Rpb24oYSxiLGMpeyF2JiZBLmpRdWVyeSYmKHY9QS5qUXVlcnkpO2lmKDI+YXJndW1lbnRzLmxlbmd0aCl7aWYoYj13LmJvZHksIWIpdGhyb3cgRXJyb3IoXCJrby5hcHBseUJpbmRpbmdzOiBjb3VsZCBub3QgZmluZCBkb2N1bWVudC5ib2R5OyBoYXMgdGhlIGRvY3VtZW50IGJlZW4gbG9hZGVkP1wiKTtcbn1lbHNlIGlmKCFifHwxIT09Yi5ub2RlVHlwZSYmOCE9PWIubm9kZVR5cGUpdGhyb3cgRXJyb3IoXCJrby5hcHBseUJpbmRpbmdzOiBmaXJzdCBwYXJhbWV0ZXIgc2hvdWxkIGJlIHlvdXIgdmlldyBtb2RlbDsgc2Vjb25kIHBhcmFtZXRlciBzaG91bGQgYmUgYSBET00gbm9kZVwiKTtrKHEoYSxjKSxiKX07YS5EYz1mdW5jdGlvbihiKXtyZXR1cm4hYnx8MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlP246YS5UZChiKX07YS5FYz1mdW5jdGlvbihiKXtyZXR1cm4oYj1hLkRjKGIpKT9iLiRkYXRhOm59O2EuYihcImJpbmRpbmdIYW5kbGVyc1wiLGEuYyk7YS5iKFwiYmluZGluZ0V2ZW50XCIsYS5pKTthLmIoXCJiaW5kaW5nRXZlbnQuc3Vic2NyaWJlXCIsYS5pLnN1YnNjcmliZSk7YS5iKFwiYmluZGluZ0V2ZW50LnN0YXJ0UG9zc2libHlBc3luY0NvbnRlbnRCaW5kaW5nXCIsYS5pLkNiKTthLmIoXCJhcHBseUJpbmRpbmdzXCIsYS52Yyk7YS5iKFwiYXBwbHlCaW5kaW5nc1RvRGVzY2VuZGFudHNcIixhLk9hKTtcbmEuYihcImFwcGx5QmluZGluZ0FjY2Vzc29yc1RvTm9kZVwiLGEuaWIpO2EuYihcImFwcGx5QmluZGluZ3NUb05vZGVcIixhLmxkKTthLmIoXCJjb250ZXh0Rm9yXCIsYS5EYyk7YS5iKFwiZGF0YUZvclwiLGEuRWMpfSkoKTsoZnVuY3Rpb24oYil7ZnVuY3Rpb24gYyhjLGUpe3ZhciBrPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChmLGMpP2ZbY106YixsO2s/ay5zdWJzY3JpYmUoZSk6KGs9ZltjXT1uZXcgYS5ULGsuc3Vic2NyaWJlKGUpLGQoYyxmdW5jdGlvbihiLGQpe3ZhciBlPSEoIWR8fCFkLnN5bmNocm9ub3VzKTtnW2NdPXtkZWZpbml0aW9uOmIsR2Q6ZX07ZGVsZXRlIGZbY107bHx8ZT9rLm5vdGlmeVN1YnNjcmliZXJzKGIpOmEubmEuemIoZnVuY3Rpb24oKXtrLm5vdGlmeVN1YnNjcmliZXJzKGIpfSl9KSxsPSEwKX1mdW5jdGlvbiBkKGEsYil7ZShcImdldENvbmZpZ1wiLFthXSxmdW5jdGlvbihjKXtjP2UoXCJsb2FkQ29tcG9uZW50XCIsW2EsY10sZnVuY3Rpb24oYSl7YihhLFxuYyl9KTpiKG51bGwsbnVsbCl9KX1mdW5jdGlvbiBlKGMsZCxmLGwpe2x8fChsPWEuai5sb2FkZXJzLnNsaWNlKDApKTt2YXIgZz1sLnNoaWZ0KCk7aWYoZyl7dmFyIHE9Z1tjXTtpZihxKXt2YXIgdD0hMTtpZihxLmFwcGx5KGcsZC5jb25jYXQoZnVuY3Rpb24oYSl7dD9mKG51bGwpOm51bGwhPT1hP2YoYSk6ZShjLGQsZixsKX0pKSE9PWImJih0PSEwLCFnLnN1cHByZXNzTG9hZGVyRXhjZXB0aW9ucykpdGhyb3cgRXJyb3IoXCJDb21wb25lbnQgbG9hZGVycyBtdXN0IHN1cHBseSB2YWx1ZXMgYnkgaW52b2tpbmcgdGhlIGNhbGxiYWNrLCBub3QgYnkgcmV0dXJuaW5nIHZhbHVlcyBzeW5jaHJvbm91c2x5LlwiKTt9ZWxzZSBlKGMsZCxmLGwpfWVsc2UgZihudWxsKX12YXIgZj17fSxnPXt9O2Euaj17Z2V0OmZ1bmN0aW9uKGQsZSl7dmFyIGY9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGcsZCk/Z1tkXTpiO2Y/Zi5HZD9hLnUuRyhmdW5jdGlvbigpe2UoZi5kZWZpbml0aW9uKX0pOlxuYS5uYS56YihmdW5jdGlvbigpe2UoZi5kZWZpbml0aW9uKX0pOmMoZCxlKX0sQmM6ZnVuY3Rpb24oYSl7ZGVsZXRlIGdbYV19LG9jOmV9O2Euai5sb2FkZXJzPVtdO2EuYihcImNvbXBvbmVudHNcIixhLmopO2EuYihcImNvbXBvbmVudHMuZ2V0XCIsYS5qLmdldCk7YS5iKFwiY29tcG9uZW50cy5jbGVhckNhY2hlZERlZmluaXRpb25cIixhLmouQmMpfSkoKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyxkLGUpe2Z1bmN0aW9uIGcoKXswPT09LS1CJiZlKGgpfXZhciBoPXt9LEI9Mix1PWQudGVtcGxhdGU7ZD1kLnZpZXdNb2RlbDt1P2YoYyx1LGZ1bmN0aW9uKGMpe2Euai5vYyhcImxvYWRUZW1wbGF0ZVwiLFtiLGNdLGZ1bmN0aW9uKGEpe2gudGVtcGxhdGU9YTtnKCl9KX0pOmcoKTtkP2YoYyxkLGZ1bmN0aW9uKGMpe2Euai5vYyhcImxvYWRWaWV3TW9kZWxcIixbYixjXSxmdW5jdGlvbihhKXtoW21dPWE7ZygpfSl9KTpnKCl9ZnVuY3Rpb24gYyhhLGIsZCl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpZChmdW5jdGlvbihhKXtyZXR1cm4gbmV3IGIoYSl9KTtcbmVsc2UgaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGJbbV0pZChiW21dKTtlbHNlIGlmKFwiaW5zdGFuY2VcImluIGIpe3ZhciBlPWIuaW5zdGFuY2U7ZChmdW5jdGlvbigpe3JldHVybiBlfSl9ZWxzZVwidmlld01vZGVsXCJpbiBiP2MoYSxiLnZpZXdNb2RlbCxkKTphKFwiVW5rbm93biB2aWV3TW9kZWwgdmFsdWU6IFwiK2IpfWZ1bmN0aW9uIGQoYil7c3dpdGNoKGEuYS5SKGIpKXtjYXNlIFwic2NyaXB0XCI6cmV0dXJuIGEuYS51YShiLnRleHQpO2Nhc2UgXCJ0ZXh0YXJlYVwiOnJldHVybiBhLmEudWEoYi52YWx1ZSk7Y2FzZSBcInRlbXBsYXRlXCI6aWYoZShiLmNvbnRlbnQpKXJldHVybiBhLmEuQ2EoYi5jb250ZW50LmNoaWxkTm9kZXMpfXJldHVybiBhLmEuQ2EoYi5jaGlsZE5vZGVzKX1mdW5jdGlvbiBlKGEpe3JldHVybiBBLkRvY3VtZW50RnJhZ21lbnQ/YSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQ6YSYmMTE9PT1hLm5vZGVUeXBlfWZ1bmN0aW9uIGYoYSxiLGMpe1wic3RyaW5nXCI9PT10eXBlb2YgYi5yZXF1aXJlP1xuVHx8QS5yZXF1aXJlPyhUfHxBLnJlcXVpcmUpKFtiLnJlcXVpcmVdLGZ1bmN0aW9uKGEpe2EmJlwib2JqZWN0XCI9PT10eXBlb2YgYSYmYS5YZCYmYVtcImRlZmF1bHRcIl0mJihhPWFbXCJkZWZhdWx0XCJdKTtjKGEpfSk6YShcIlVzZXMgcmVxdWlyZSwgYnV0IG5vIEFNRCBsb2FkZXIgaXMgcHJlc2VudFwiKTpjKGIpfWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3Rocm93IEVycm9yKFwiQ29tcG9uZW50ICdcIithK1wiJzogXCIrYik7fX12YXIgaD17fTthLmoucmVnaXN0ZXI9ZnVuY3Rpb24oYixjKXtpZighYyl0aHJvdyBFcnJvcihcIkludmFsaWQgY29uZmlndXJhdGlvbiBmb3IgXCIrYik7aWYoYS5qLnRiKGIpKXRocm93IEVycm9yKFwiQ29tcG9uZW50IFwiK2IrXCIgaXMgYWxyZWFkeSByZWdpc3RlcmVkXCIpO2hbYl09Y307YS5qLnRiPWZ1bmN0aW9uKGEpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaCxhKX07YS5qLnVucmVnaXN0ZXI9ZnVuY3Rpb24oYil7ZGVsZXRlIGhbYl07XG5hLmouQmMoYil9O2Euai5GYz17Z2V0Q29uZmlnOmZ1bmN0aW9uKGIsYyl7YyhhLmoudGIoYik/aFtiXTpudWxsKX0sbG9hZENvbXBvbmVudDpmdW5jdGlvbihhLGMsZCl7dmFyIGU9ZyhhKTtmKGUsYyxmdW5jdGlvbihjKXtiKGEsZSxjLGQpfSl9LGxvYWRUZW1wbGF0ZTpmdW5jdGlvbihiLGMsZil7Yj1nKGIpO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYylmKGEuYS51YShjKSk7ZWxzZSBpZihjIGluc3RhbmNlb2YgQXJyYXkpZihjKTtlbHNlIGlmKGUoYykpZihhLmEubGEoYy5jaGlsZE5vZGVzKSk7ZWxzZSBpZihjLmVsZW1lbnQpaWYoYz1jLmVsZW1lbnQsQS5IVE1MRWxlbWVudD9jIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ6YyYmYy50YWdOYW1lJiYxPT09Yy5ub2RlVHlwZSlmKGQoYykpO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBjKXt2YXIgaD13LmdldEVsZW1lbnRCeUlkKGMpO2g/ZihkKGgpKTpiKFwiQ2Fubm90IGZpbmQgZWxlbWVudCB3aXRoIElEIFwiK2MpfWVsc2UgYihcIlVua25vd24gZWxlbWVudCB0eXBlOiBcIitcbmMpO2Vsc2UgYihcIlVua25vd24gdGVtcGxhdGUgdmFsdWU6IFwiK2MpfSxsb2FkVmlld01vZGVsOmZ1bmN0aW9uKGEsYixkKXtjKGcoYSksYixkKX19O3ZhciBtPVwiY3JlYXRlVmlld01vZGVsXCI7YS5iKFwiY29tcG9uZW50cy5yZWdpc3RlclwiLGEuai5yZWdpc3Rlcik7YS5iKFwiY29tcG9uZW50cy5pc1JlZ2lzdGVyZWRcIixhLmoudGIpO2EuYihcImNvbXBvbmVudHMudW5yZWdpc3RlclwiLGEuai51bnJlZ2lzdGVyKTthLmIoXCJjb21wb25lbnRzLmRlZmF1bHRMb2FkZXJcIixhLmouRmMpO2Euai5sb2FkZXJzLnB1c2goYS5qLkZjKTthLmouZGQ9aH0pKCk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGUpe3ZhciBmPWIuZ2V0QXR0cmlidXRlKFwicGFyYW1zXCIpO2lmKGYpe3ZhciBmPWMucGFyc2VCaW5kaW5nc1N0cmluZyhmLGUsYix7dmFsdWVBY2Nlc3NvcnM6ITAsYmluZGluZ1BhcmFtczohMH0pLGY9YS5hLkdhKGYsZnVuY3Rpb24oYyl7cmV0dXJuIGEubyhjLG51bGwse2w6Yn0pfSksZz1hLmEuR2EoZixcbmZ1bmN0aW9uKGMpe3ZhciBlPWMudigpO3JldHVybiBjLmphKCk/YS5vKHtyZWFkOmZ1bmN0aW9uKCl7cmV0dXJuIGEuYS5mKGMoKSl9LHdyaXRlOmEuWmEoZSkmJmZ1bmN0aW9uKGEpe2MoKShhKX0sbDpifSk6ZX0pO09iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChnLFwiJHJhd1wiKXx8KGcuJHJhdz1mKTtyZXR1cm4gZ31yZXR1cm57JHJhdzp7fX19YS5qLmdldENvbXBvbmVudE5hbWVGb3JOb2RlPWZ1bmN0aW9uKGIpe3ZhciBjPWEuYS5SKGIpO2lmKGEuai50YihjKSYmKC0xIT1jLmluZGV4T2YoXCItXCIpfHxcIltvYmplY3QgSFRNTFVua25vd25FbGVtZW50XVwiPT1cIlwiK2J8fDg+PWEuYS5XJiZiLnRhZ05hbWU9PT1jKSlyZXR1cm4gY307YS5qLnRjPWZ1bmN0aW9uKGMsZSxmLGcpe2lmKDE9PT1lLm5vZGVUeXBlKXt2YXIgaD1hLmouZ2V0Q29tcG9uZW50TmFtZUZvck5vZGUoZSk7aWYoaCl7Yz1jfHx7fTtpZihjLmNvbXBvbmVudCl0aHJvdyBFcnJvcignQ2Fubm90IHVzZSB0aGUgXCJjb21wb25lbnRcIiBiaW5kaW5nIG9uIGEgY3VzdG9tIGVsZW1lbnQgbWF0Y2hpbmcgYSBjb21wb25lbnQnKTtcbnZhciBtPXtuYW1lOmgscGFyYW1zOmIoZSxmKX07Yy5jb21wb25lbnQ9Zz9mdW5jdGlvbigpe3JldHVybiBtfTptfX1yZXR1cm4gY307dmFyIGM9bmV3IGEuZ2E7OT5hLmEuVyYmKGEuai5yZWdpc3Rlcj1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYil7cmV0dXJuIGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0oYS5qLnJlZ2lzdGVyKSx3LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQ9ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9YigpLGY9YS5qLmRkLGc7Zm9yKGcgaW4gZik7cmV0dXJuIGN9fSh3LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQpKX0pKCk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCl7Yz1jLnRlbXBsYXRlO2lmKCFjKXRocm93IEVycm9yKFwiQ29tcG9uZW50ICdcIitiK1wiJyBoYXMgbm8gdGVtcGxhdGVcIik7Yj1hLmEuQ2EoYyk7YS5oLnZhKGQsYil9ZnVuY3Rpb24gYyhhLGIsYyl7dmFyIGQ9YS5jcmVhdGVWaWV3TW9kZWw7cmV0dXJuIGQ/ZC5jYWxsKGEsXG5iLGMpOmJ9dmFyIGQ9MDthLmMuY29tcG9uZW50PXtpbml0OmZ1bmN0aW9uKGUsZixnLGgsbSl7ZnVuY3Rpb24gaygpe3ZhciBhPWwmJmwuZGlzcG9zZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSYmYS5jYWxsKGwpO3EmJnEucygpO3A9bD1xPW51bGx9dmFyIGwscCxxLHQ9YS5hLmxhKGEuaC5jaGlsZE5vZGVzKGUpKTthLmguRWEoZSk7YS5hLksuemEoZSxrKTthLm8oZnVuY3Rpb24oKXt2YXIgZz1hLmEuZihmKCkpLGgsdTtcInN0cmluZ1wiPT09dHlwZW9mIGc/aD1nOihoPWEuYS5mKGcubmFtZSksdT1hLmEuZihnLnBhcmFtcykpO2lmKCFoKXRocm93IEVycm9yKFwiTm8gY29tcG9uZW50IG5hbWUgc3BlY2lmaWVkXCIpO3ZhciBuPWEuaS5DYihlLG0pLHo9cD0rK2Q7YS5qLmdldChoLGZ1bmN0aW9uKGQpe2lmKHA9PT16KXtrKCk7aWYoIWQpdGhyb3cgRXJyb3IoXCJVbmtub3duIGNvbXBvbmVudCAnXCIraCtcIidcIik7YihoLGQsZSk7dmFyIGY9YyhkLHUse2VsZW1lbnQ6ZSx0ZW1wbGF0ZU5vZGVzOnR9KTtcbmQ9bi5jcmVhdGVDaGlsZENvbnRleHQoZix7ZXh0ZW5kOmZ1bmN0aW9uKGEpe2EuJGNvbXBvbmVudD1mO2EuJGNvbXBvbmVudFRlbXBsYXRlTm9kZXM9dH19KTtmJiZmLmtvRGVzY2VuZGFudHNDb21wbGV0ZSYmKHE9YS5pLnN1YnNjcmliZShlLGEuaS5wYSxmLmtvRGVzY2VuZGFudHNDb21wbGV0ZSxmKSk7bD1mO2EuT2EoZCxlKX19KX0sbnVsbCx7bDplfSk7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX19O2EuaC5lYS5jb21wb25lbnQ9ITB9KSgpO3ZhciBWPXtcImNsYXNzXCI6XCJjbGFzc05hbWVcIixcImZvclwiOlwiaHRtbEZvclwifTthLmMuYXR0cj17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmYoYygpKXx8e307YS5hLlAoZCxmdW5jdGlvbihjLGQpe2Q9YS5hLmYoZCk7dmFyIGc9Yy5pbmRleE9mKFwiOlwiKSxnPVwibG9va3VwTmFtZXNwYWNlVVJJXCJpbiBiJiYwPGcmJmIubG9va3VwTmFtZXNwYWNlVVJJKGMuc3Vic3RyKDAsZykpLGg9ITE9PT1kfHxudWxsPT09XG5kfHxkPT09bjtoP2c/Yi5yZW1vdmVBdHRyaWJ1dGVOUyhnLGMpOmIucmVtb3ZlQXR0cmlidXRlKGMpOmQ9ZC50b1N0cmluZygpOzg+PWEuYS5XJiZjIGluIFY/KGM9VltjXSxoP2IucmVtb3ZlQXR0cmlidXRlKGMpOmJbY109ZCk6aHx8KGc/Yi5zZXRBdHRyaWJ1dGVOUyhnLGMsZCk6Yi5zZXRBdHRyaWJ1dGUoYyxkKSk7XCJuYW1lXCI9PT1jJiZhLmEuWWMoYixoP1wiXCI6ZCl9KX19OyhmdW5jdGlvbigpe2EuYy5jaGVja2VkPXthZnRlcjpbXCJ2YWx1ZVwiLFwiYXR0clwiXSxpbml0OmZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBlKCl7dmFyIGU9Yi5jaGVja2VkLGY9ZygpO2lmKCFhLlMuWWEoKSYmKGV8fCFtJiYhYS5TLnFhKCkpKXt2YXIgaz1hLnUuRyhjKTtpZihsKXt2YXIgcT1wP2sudigpOmssej10O3Q9Zjt6IT09Zj9lJiYoYS5hLk5hKHEsZiwhMCksYS5hLk5hKHEseiwhMSkpOmEuYS5OYShxLGYsZSk7cCYmYS5aYShrKSYmayhxKX1lbHNlIGgmJihmPT09bj9mPWU6ZXx8KGY9bikpLGEubS5lYihrLFxuZCxcImNoZWNrZWRcIixmLCEwKX19ZnVuY3Rpb24gZigpe3ZhciBkPWEuYS5mKGMoKSksZT1nKCk7bD8oYi5jaGVja2VkPTA8PWEuYS5BKGQsZSksdD1lKTpiLmNoZWNrZWQ9aCYmZT09PW4/ISFkOmcoKT09PWR9dmFyIGc9YS54YihmdW5jdGlvbigpe2lmKGQuaGFzKFwiY2hlY2tlZFZhbHVlXCIpKXJldHVybiBhLmEuZihkLmdldChcImNoZWNrZWRWYWx1ZVwiKSk7aWYocSlyZXR1cm4gZC5oYXMoXCJ2YWx1ZVwiKT9hLmEuZihkLmdldChcInZhbHVlXCIpKTpiLnZhbHVlfSksaD1cImNoZWNrYm94XCI9PWIudHlwZSxtPVwicmFkaW9cIj09Yi50eXBlO2lmKGh8fG0pe3ZhciBrPWMoKSxsPWgmJmEuYS5mKGspaW5zdGFuY2VvZiBBcnJheSxwPSEobCYmay5wdXNoJiZrLnNwbGljZSkscT1tfHxsLHQ9bD9nKCk6bjttJiYhYi5uYW1lJiZhLmMudW5pcXVlTmFtZS5pbml0KGIsZnVuY3Rpb24oKXtyZXR1cm4hMH0pO2EubyhlLG51bGwse2w6Yn0pO2EuYS5CKGIsXCJjbGlja1wiLGUpO2EubyhmLG51bGwse2w6Yn0pO1xuaz1ufX19O2EubS53YS5jaGVja2VkPSEwO2EuYy5jaGVja2VkVmFsdWU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe2IudmFsdWU9YS5hLmYoYygpKX19fSkoKTthLmNbXCJjbGFzc1wiXT17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLkRiKGEuYS5mKGMoKSkpO2EuYS5FYihiLGIuX19rb19fY3NzVmFsdWUsITEpO2IuX19rb19fY3NzVmFsdWU9ZDthLmEuRWIoYixkLCEwKX19O2EuYy5jc3M9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5mKGMoKSk7bnVsbCE9PWQmJlwib2JqZWN0XCI9PXR5cGVvZiBkP2EuYS5QKGQsZnVuY3Rpb24oYyxkKXtkPWEuYS5mKGQpO2EuYS5FYihiLGMsZCl9KTphLmNbXCJjbGFzc1wiXS51cGRhdGUoYixjKX19O2EuYy5lbmFibGU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5mKGMoKSk7ZCYmYi5kaXNhYmxlZD9iLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpOmR8fGIuZGlzYWJsZWR8fChiLmRpc2FibGVkPSEwKX19O2EuYy5kaXNhYmxlPVxue3VwZGF0ZTpmdW5jdGlvbihiLGMpe2EuYy5lbmFibGUudXBkYXRlKGIsZnVuY3Rpb24oKXtyZXR1cm4hYS5hLmYoYygpKX0pfX07YS5jLmV2ZW50PXtpbml0OmZ1bmN0aW9uKGIsYyxkLGUsZil7dmFyIGc9YygpfHx7fTthLmEuUChnLGZ1bmN0aW9uKGcpe1wic3RyaW5nXCI9PXR5cGVvZiBnJiZhLmEuQihiLGcsZnVuY3Rpb24oYil7dmFyIGssbD1jKClbZ107aWYobCl7dHJ5e3ZhciBwPWEuYS5sYShhcmd1bWVudHMpO2U9Zi4kZGF0YTtwLnVuc2hpZnQoZSk7az1sLmFwcGx5KGUscCl9ZmluYWxseXshMCE9PWsmJihiLnByZXZlbnREZWZhdWx0P2IucHJldmVudERlZmF1bHQoKTpiLnJldHVyblZhbHVlPSExKX0hMT09PWQuZ2V0KGcrXCJCdWJibGVcIikmJihiLmNhbmNlbEJ1YmJsZT0hMCxiLnN0b3BQcm9wYWdhdGlvbiYmYi5zdG9wUHJvcGFnYXRpb24oKSl9fSl9KX19O2EuYy5mb3JlYWNoPXtSYzpmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1iKCksZD1hLmEuYmMoYyk7XG5pZighZHx8XCJudW1iZXJcIj09dHlwZW9mIGQubGVuZ3RoKXJldHVybntmb3JlYWNoOmMsdGVtcGxhdGVFbmdpbmU6YS5iYS5NYX07YS5hLmYoYyk7cmV0dXJue2ZvcmVhY2g6ZC5kYXRhLGFzOmQuYXMsbm9DaGlsZENvbnRleHQ6ZC5ub0NoaWxkQ29udGV4dCxpbmNsdWRlRGVzdHJveWVkOmQuaW5jbHVkZURlc3Ryb3llZCxhZnRlckFkZDpkLmFmdGVyQWRkLGJlZm9yZVJlbW92ZTpkLmJlZm9yZVJlbW92ZSxhZnRlclJlbmRlcjpkLmFmdGVyUmVuZGVyLGJlZm9yZU1vdmU6ZC5iZWZvcmVNb3ZlLGFmdGVyTW92ZTpkLmFmdGVyTW92ZSx0ZW1wbGF0ZUVuZ2luZTphLmJhLk1hfX19LGluaXQ6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jLnRlbXBsYXRlLmluaXQoYixhLmMuZm9yZWFjaC5SYyhjKSl9LHVwZGF0ZTpmdW5jdGlvbihiLGMsZCxlLGYpe3JldHVybiBhLmMudGVtcGxhdGUudXBkYXRlKGIsYS5jLmZvcmVhY2guUmMoYyksZCxlLGYpfX07YS5tLlJhLmZvcmVhY2g9ITE7YS5oLmVhLmZvcmVhY2g9XG4hMDthLmMuaGFzZm9jdXM9e2luaXQ6ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGUoZSl7Yi5fX2tvX2hhc2ZvY3VzVXBkYXRpbmc9ITA7dmFyIGY9Yi5vd25lckRvY3VtZW50O2lmKFwiYWN0aXZlRWxlbWVudFwiaW4gZil7dmFyIGc7dHJ5e2c9Zi5hY3RpdmVFbGVtZW50fWNhdGNoKGwpe2c9Zi5ib2R5fWU9Zz09PWJ9Zj1jKCk7YS5tLmViKGYsZCxcImhhc2ZvY3VzXCIsZSwhMCk7Yi5fX2tvX2hhc2ZvY3VzTGFzdFZhbHVlPWU7Yi5fX2tvX2hhc2ZvY3VzVXBkYXRpbmc9ITF9dmFyIGY9ZS5iaW5kKG51bGwsITApLGc9ZS5iaW5kKG51bGwsITEpO2EuYS5CKGIsXCJmb2N1c1wiLGYpO2EuYS5CKGIsXCJmb2N1c2luXCIsZik7YS5hLkIoYixcImJsdXJcIixnKTthLmEuQihiLFwiZm9jdXNvdXRcIixnKTtiLl9fa29faGFzZm9jdXNMYXN0VmFsdWU9ITF9LHVwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPSEhYS5hLmYoYygpKTtiLl9fa29faGFzZm9jdXNVcGRhdGluZ3x8Yi5fX2tvX2hhc2ZvY3VzTGFzdFZhbHVlPT09XG5kfHwoZD9iLmZvY3VzKCk6Yi5ibHVyKCksIWQmJmIuX19rb19oYXNmb2N1c0xhc3RWYWx1ZSYmYi5vd25lckRvY3VtZW50LmJvZHkuZm9jdXMoKSxhLnUuRyhhLmEuRmIsbnVsbCxbYixkP1wiZm9jdXNpblwiOlwiZm9jdXNvdXRcIl0pKX19O2EubS53YS5oYXNmb2N1cz0hMDthLmMuaGFzRm9jdXM9YS5jLmhhc2ZvY3VzO2EubS53YS5oYXNGb2N1cz1cImhhc2ZvY3VzXCI7YS5jLmh0bWw9e2luaXQ6ZnVuY3Rpb24oKXtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fSx1cGRhdGU6ZnVuY3Rpb24oYixjKXthLmEuZmMoYixjKCkpfX07KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGQsZSl7YS5jW2JdPXtpbml0OmZ1bmN0aW9uKGIsYyxoLG0sayl7dmFyIGwscCxxPXt9LHQseCxuO2lmKGQpe209aC5nZXQoXCJhc1wiKTt2YXIgdT1oLmdldChcIm5vQ2hpbGRDb250ZXh0XCIpO249IShtJiZ1KTtxPXthczptLG5vQ2hpbGRDb250ZXh0OnUsZXhwb3J0RGVwZW5kZW5jaWVzOm59fXg9KHQ9XG5cInJlbmRlclwiPT1oLmdldChcImNvbXBsZXRlT25cIikpfHxoLmhhcyhhLmkucGEpO2EubyhmdW5jdGlvbigpe3ZhciBoPWEuYS5mKGMoKSksbT0hZSE9PSFoLHU9IXAscjtpZihufHxtIT09bCl7eCYmKGs9YS5pLkNiKGIsaykpO2lmKG0pe2lmKCFkfHxuKXEuZGF0YURlcGVuZGVuY3k9YS5TLm8oKTtyPWQ/ay5jcmVhdGVDaGlsZENvbnRleHQoXCJmdW5jdGlvblwiPT10eXBlb2YgaD9oOmMscSk6YS5TLnFhKCk/ay5leHRlbmQobnVsbCxxKTprfXUmJmEuUy5xYSgpJiYocD1hLmEuQ2EoYS5oLmNoaWxkTm9kZXMoYiksITApKTttPyh1fHxhLmgudmEoYixhLmEuQ2EocCkpLGEuT2EocixiKSk6KGEuaC5FYShiKSx0fHxhLmkubWEoYixhLmkuSCkpO2w9bX19LG51bGwse2w6Yn0pO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19fTthLm0uUmFbYl09ITE7YS5oLmVhW2JdPSEwfWIoXCJpZlwiKTtiKFwiaWZub3RcIiwhMSwhMCk7YihcIndpdGhcIiwhMCl9KSgpO2EuYy5sZXQ9e2luaXQ6ZnVuY3Rpb24oYixcbmMsZCxlLGYpe2M9Zi5leHRlbmQoYyk7YS5PYShjLGIpO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19fTthLmguZWEubGV0PSEwO3ZhciBRPXt9O2EuYy5vcHRpb25zPXtpbml0OmZ1bmN0aW9uKGIpe2lmKFwic2VsZWN0XCIhPT1hLmEuUihiKSl0aHJvdyBFcnJvcihcIm9wdGlvbnMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpO2Zvcig7MDxiLmxlbmd0aDspYi5yZW1vdmUoMCk7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBlKCl7cmV0dXJuIGEuYS5qYihiLm9wdGlvbnMsZnVuY3Rpb24oYSl7cmV0dXJuIGEuc2VsZWN0ZWR9KX1mdW5jdGlvbiBmKGEsYixjKXt2YXIgZD10eXBlb2YgYjtyZXR1cm5cImZ1bmN0aW9uXCI9PWQ/YihhKTpcInN0cmluZ1wiPT1kP2FbYl06Y31mdW5jdGlvbiBnKGMsZCl7aWYoeCYmbClhLmkubWEoYixhLmkuSCk7ZWxzZSBpZih0Lmxlbmd0aCl7dmFyIGU9XG4wPD1hLmEuQSh0LGEudy5NKGRbMF0pKTthLmEuWmMoZFswXSxlKTt4JiYhZSYmYS51LkcoYS5hLkZiLG51bGwsW2IsXCJjaGFuZ2VcIl0pfX12YXIgaD1iLm11bHRpcGxlLG09MCE9Yi5sZW5ndGgmJmg/Yi5zY3JvbGxUb3A6bnVsbCxrPWEuYS5mKGMoKSksbD1kLmdldChcInZhbHVlQWxsb3dVbnNldFwiKSYmZC5oYXMoXCJ2YWx1ZVwiKSxwPWQuZ2V0KFwib3B0aW9uc0luY2x1ZGVEZXN0cm95ZWRcIik7Yz17fTt2YXIgcSx0PVtdO2x8fChoP3Q9YS5hLk1iKGUoKSxhLncuTSk6MDw9Yi5zZWxlY3RlZEluZGV4JiZ0LnB1c2goYS53Lk0oYi5vcHRpb25zW2Iuc2VsZWN0ZWRJbmRleF0pKSk7ayYmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBrLmxlbmd0aCYmKGs9W2tdKSxxPWEuYS5qYihrLGZ1bmN0aW9uKGIpe3JldHVybiBwfHxiPT09bnx8bnVsbD09PWJ8fCFhLmEuZihiLl9kZXN0cm95KX0pLGQuaGFzKFwib3B0aW9uc0NhcHRpb25cIikmJihrPWEuYS5mKGQuZ2V0KFwib3B0aW9uc0NhcHRpb25cIikpLG51bGwhPT1cbmsmJmshPT1uJiZxLnVuc2hpZnQoUSkpKTt2YXIgeD0hMTtjLmJlZm9yZVJlbW92ZT1mdW5jdGlvbihhKXtiLnJlbW92ZUNoaWxkKGEpfTtrPWc7ZC5oYXMoXCJvcHRpb25zQWZ0ZXJSZW5kZXJcIikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGQuZ2V0KFwib3B0aW9uc0FmdGVyUmVuZGVyXCIpJiYoaz1mdW5jdGlvbihiLGMpe2coMCxjKTthLnUuRyhkLmdldChcIm9wdGlvbnNBZnRlclJlbmRlclwiKSxudWxsLFtjWzBdLGIhPT1RP2I6bl0pfSk7YS5hLmVjKGIscSxmdW5jdGlvbihjLGUsZyl7Zy5sZW5ndGgmJih0PSFsJiZnWzBdLnNlbGVjdGVkP1thLncuTShnWzBdKV06W10seD0hMCk7ZT1iLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtjPT09UT8oYS5hLkJiKGUsZC5nZXQoXCJvcHRpb25zQ2FwdGlvblwiKSksYS53LmNiKGUsbikpOihnPWYoYyxkLmdldChcIm9wdGlvbnNWYWx1ZVwiKSxjKSxhLncuY2IoZSxhLmEuZihnKSksYz1mKGMsZC5nZXQoXCJvcHRpb25zVGV4dFwiKSxnKSxcbmEuYS5CYihlLGMpKTtyZXR1cm5bZV19LGMsayk7aWYoIWwpe3ZhciBCO2g/Qj10Lmxlbmd0aCYmZSgpLmxlbmd0aDx0Lmxlbmd0aDpCPXQubGVuZ3RoJiYwPD1iLnNlbGVjdGVkSW5kZXg/YS53Lk0oYi5vcHRpb25zW2Iuc2VsZWN0ZWRJbmRleF0pIT09dFswXTp0Lmxlbmd0aHx8MDw9Yi5zZWxlY3RlZEluZGV4O0ImJmEudS5HKGEuYS5GYixudWxsLFtiLFwiY2hhbmdlXCJdKX0obHx8YS5TLllhKCkpJiZhLmkubWEoYixhLmkuSCk7YS5hLndkKGIpO20mJjIwPE1hdGguYWJzKG0tYi5zY3JvbGxUb3ApJiYoYi5zY3JvbGxUb3A9bSl9fTthLmMub3B0aW9ucy4kYj1hLmEuZy5aKCk7YS5jLnNlbGVjdGVkT3B0aW9ucz17aW5pdDpmdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZSgpe3ZhciBlPWMoKSxmPVtdO2EuYS5EKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJvcHRpb25cIiksZnVuY3Rpb24oYil7Yi5zZWxlY3RlZCYmZi5wdXNoKGEudy5NKGIpKX0pO2EubS5lYihlLGQsXCJzZWxlY3RlZE9wdGlvbnNcIixcbmYpfWZ1bmN0aW9uIGYoKXt2YXIgZD1hLmEuZihjKCkpLGU9Yi5zY3JvbGxUb3A7ZCYmXCJudW1iZXJcIj09dHlwZW9mIGQubGVuZ3RoJiZhLmEuRChiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGIpe3ZhciBjPTA8PWEuYS5BKGQsYS53Lk0oYikpO2Iuc2VsZWN0ZWQhPWMmJmEuYS5aYyhiLGMpfSk7Yi5zY3JvbGxUb3A9ZX1pZihcInNlbGVjdFwiIT1hLmEuUihiKSl0aHJvdyBFcnJvcihcInNlbGVjdGVkT3B0aW9ucyBiaW5kaW5nIGFwcGxpZXMgb25seSB0byBTRUxFQ1QgZWxlbWVudHNcIik7dmFyIGc7YS5pLnN1YnNjcmliZShiLGEuaS5ILGZ1bmN0aW9uKCl7Zz9lKCk6KGEuYS5CKGIsXCJjaGFuZ2VcIixlKSxnPWEubyhmLG51bGwse2w6Yn0pKX0sbnVsbCx7bm90aWZ5SW1tZWRpYXRlbHk6ITB9KX0sdXBkYXRlOmZ1bmN0aW9uKCl7fX07YS5tLndhLnNlbGVjdGVkT3B0aW9ucz0hMDthLmMuc3R5bGU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5mKGMoKXx8XG57fSk7YS5hLlAoZCxmdW5jdGlvbihjLGQpe2Q9YS5hLmYoZCk7aWYobnVsbD09PWR8fGQ9PT1ufHwhMT09PWQpZD1cIlwiO2lmKHYpdihiKS5jc3MoYyxkKTtlbHNlIGlmKC9eLS0vLnRlc3QoYykpYi5zdHlsZS5zZXRQcm9wZXJ0eShjLGQpO2Vsc2V7Yz1jLnJlcGxhY2UoLy0oXFx3KS9nLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX0pO3ZhciBnPWIuc3R5bGVbY107Yi5zdHlsZVtjXT1kO2Q9PT1nfHxiLnN0eWxlW2NdIT1nfHxpc05hTihkKXx8KGIuc3R5bGVbY109ZCtcInB4XCIpfX0pfX07YS5jLnN1Ym1pdD17aW5pdDpmdW5jdGlvbihiLGMsZCxlLGYpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGMoKSl0aHJvdyBFcnJvcihcIlRoZSB2YWx1ZSBmb3IgYSBzdWJtaXQgYmluZGluZyBtdXN0IGJlIGEgZnVuY3Rpb25cIik7YS5hLkIoYixcInN1Ym1pdFwiLGZ1bmN0aW9uKGEpe3ZhciBkLGU9YygpO3RyeXtkPWUuY2FsbChmLiRkYXRhLGIpfWZpbmFsbHl7ITAhPT1kJiYoYS5wcmV2ZW50RGVmYXVsdD9cbmEucHJldmVudERlZmF1bHQoKTphLnJldHVyblZhbHVlPSExKX19KX19O2EuYy50ZXh0PXtpbml0OmZ1bmN0aW9uKCl7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7YS5hLkJiKGIsYygpKX19O2EuaC5lYS50ZXh0PSEwOyhmdW5jdGlvbigpe2lmKEEmJkEubmF2aWdhdG9yKXt2YXIgYj1mdW5jdGlvbihhKXtpZihhKXJldHVybiBwYXJzZUZsb2F0KGFbMV0pfSxjPUEubmF2aWdhdG9yLnVzZXJBZ2VudCxkLGUsZixnLGg7KGQ9QS5vcGVyYSYmQS5vcGVyYS52ZXJzaW9uJiZwYXJzZUludChBLm9wZXJhLnZlcnNpb24oKSkpfHwoaD1iKGMubWF0Y2goL0VkZ2VcXC8oW14gXSspJC8pKSl8fGIoYy5tYXRjaCgvQ2hyb21lXFwvKFteIF0rKS8pKXx8KGU9YihjLm1hdGNoKC9WZXJzaW9uXFwvKFteIF0rKSBTYWZhcmkvKSkpfHwoZj1iKGMubWF0Y2goL0ZpcmVmb3hcXC8oW14gXSspLykpKXx8KGc9YS5hLld8fGIoYy5tYXRjaCgvTVNJRSAoW14gXSspLykpKXx8XG4oZz1iKGMubWF0Y2goL3J2OihbXiApXSspLykpKX1pZig4PD1nJiYxMD5nKXZhciBtPWEuYS5nLlooKSxrPWEuYS5nLlooKSxsPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMuYWN0aXZlRWxlbWVudDsoYz1jJiZhLmEuZy5nZXQoYyxrKSkmJmMoYil9LHA9ZnVuY3Rpb24oYixjKXt2YXIgZD1iLm93bmVyRG9jdW1lbnQ7YS5hLmcuZ2V0KGQsbSl8fChhLmEuZy5zZXQoZCxtLCEwKSxhLmEuQihkLFwic2VsZWN0aW9uY2hhbmdlXCIsbCkpO2EuYS5nLnNldChiLGssYyl9O2EuYy50ZXh0SW5wdXQ9e2luaXQ6ZnVuY3Rpb24oYixjLGspe2Z1bmN0aW9uIGwoYyxkKXthLmEuQihiLGMsZCl9ZnVuY3Rpb24gbSgpe3ZhciBkPWEuYS5mKGMoKSk7aWYobnVsbD09PWR8fGQ9PT1uKWQ9XCJcIjtMIT09biYmZD09PUw/YS5hLnNldFRpbWVvdXQobSw0KTpiLnZhbHVlIT09ZCYmKHk9ITAsYi52YWx1ZT1kLHk9ITEsdj1iLnZhbHVlKX1mdW5jdGlvbiByKCl7d3x8KEw9Yi52YWx1ZSx3PWEuYS5zZXRUaW1lb3V0KHosXG40KSl9ZnVuY3Rpb24geigpe2NsZWFyVGltZW91dCh3KTtMPXc9bjt2YXIgZD1iLnZhbHVlO3YhPT1kJiYodj1kLGEubS5lYihjKCksayxcInRleHRJbnB1dFwiLGQpKX12YXIgdj1iLnZhbHVlLHcsTCxBPTk9PWEuYS5XP3I6eix5PSExO2cmJmwoXCJrZXlwcmVzc1wiLHopOzExPmcmJmwoXCJwcm9wZXJ0eWNoYW5nZVwiLGZ1bmN0aW9uKGEpe3l8fFwidmFsdWVcIiE9PWEucHJvcGVydHlOYW1lfHxBKGEpfSk7OD09ZyYmKGwoXCJrZXl1cFwiLHopLGwoXCJrZXlkb3duXCIseikpO3AmJihwKGIsQSksbChcImRyYWdlbmRcIixyKSk7KCFnfHw5PD1nKSYmbChcImlucHV0XCIsQSk7NT5lJiZcInRleHRhcmVhXCI9PT1hLmEuUihiKT8obChcImtleWRvd25cIixyKSxsKFwicGFzdGVcIixyKSxsKFwiY3V0XCIscikpOjExPmQ/bChcImtleWRvd25cIixyKTo0PmY/KGwoXCJET01BdXRvQ29tcGxldGVcIix6KSxsKFwiZHJhZ2Ryb3BcIix6KSxsKFwiZHJvcFwiLHopKTpoJiZcIm51bWJlclwiPT09Yi50eXBlJiZsKFwia2V5ZG93blwiLHIpO2woXCJjaGFuZ2VcIixcbnopO2woXCJibHVyXCIseik7YS5vKG0sbnVsbCx7bDpifSl9fTthLm0ud2EudGV4dElucHV0PSEwO2EuYy50ZXh0aW5wdXQ9e3ByZXByb2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe2MoXCJ0ZXh0SW5wdXRcIixhKX19fSkoKTthLmMudW5pcXVlTmFtZT17aW5pdDpmdW5jdGlvbihiLGMpe2lmKGMoKSl7dmFyIGQ9XCJrb191bmlxdWVfXCIrICsrYS5jLnVuaXF1ZU5hbWUucmQ7YS5hLlljKGIsZCl9fX07YS5jLnVuaXF1ZU5hbWUucmQ9MDthLmMudXNpbmc9e2luaXQ6ZnVuY3Rpb24oYixjLGQsZSxmKXt2YXIgZztkLmhhcyhcImFzXCIpJiYoZz17YXM6ZC5nZXQoXCJhc1wiKSxub0NoaWxkQ29udGV4dDpkLmdldChcIm5vQ2hpbGRDb250ZXh0XCIpfSk7Yz1mLmNyZWF0ZUNoaWxkQ29udGV4dChjLGcpO2EuT2EoYyxiKTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fX07YS5oLmVhLnVzaW5nPSEwO2EuYy52YWx1ZT17aW5pdDpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5hLlIoYiksZj1cImlucHV0XCI9PVxuZTtpZighZnx8XCJjaGVja2JveFwiIT1iLnR5cGUmJlwicmFkaW9cIiE9Yi50eXBlKXt2YXIgZz1bXSxoPWQuZ2V0KFwidmFsdWVVcGRhdGVcIiksbT0hMSxrPW51bGw7aCYmKFwic3RyaW5nXCI9PXR5cGVvZiBoP2c9W2hdOmc9YS5hLndjKGgpLGEuYS5QYShnLFwiY2hhbmdlXCIpKTt2YXIgbD1mdW5jdGlvbigpe2s9bnVsbDttPSExO3ZhciBlPWMoKSxmPWEudy5NKGIpO2EubS5lYihlLGQsXCJ2YWx1ZVwiLGYpfTshYS5hLld8fCFmfHxcInRleHRcIiE9Yi50eXBlfHxcIm9mZlwiPT1iLmF1dG9jb21wbGV0ZXx8Yi5mb3JtJiZcIm9mZlwiPT1iLmZvcm0uYXV0b2NvbXBsZXRlfHwtMSE9YS5hLkEoZyxcInByb3BlcnR5Y2hhbmdlXCIpfHwoYS5hLkIoYixcInByb3BlcnR5Y2hhbmdlXCIsZnVuY3Rpb24oKXttPSEwfSksYS5hLkIoYixcImZvY3VzXCIsZnVuY3Rpb24oKXttPSExfSksYS5hLkIoYixcImJsdXJcIixmdW5jdGlvbigpe20mJmwoKX0pKTthLmEuRChnLGZ1bmN0aW9uKGMpe3ZhciBkPWw7YS5hLlVkKGMsXCJhZnRlclwiKSYmXG4oZD1mdW5jdGlvbigpe2s9YS53Lk0oYik7YS5hLnNldFRpbWVvdXQobCwwKX0sYz1jLnN1YnN0cmluZyg1KSk7YS5hLkIoYixjLGQpfSk7dmFyIHA7cD1mJiZcImZpbGVcIj09Yi50eXBlP2Z1bmN0aW9uKCl7dmFyIGQ9YS5hLmYoYygpKTtudWxsPT09ZHx8ZD09PW58fFwiXCI9PT1kP2IudmFsdWU9XCJcIjphLnUuRyhsKX06ZnVuY3Rpb24oKXt2YXIgZj1hLmEuZihjKCkpLGc9YS53Lk0oYik7aWYobnVsbCE9PWsmJmY9PT1rKWEuYS5zZXRUaW1lb3V0KHAsMCk7ZWxzZSBpZihmIT09Z3x8Zz09PW4pXCJzZWxlY3RcIj09PWU/KGc9ZC5nZXQoXCJ2YWx1ZUFsbG93VW5zZXRcIiksYS53LmNiKGIsZixnKSxnfHxmPT09YS53Lk0oYil8fGEudS5HKGwpKTphLncuY2IoYixmKX07aWYoXCJzZWxlY3RcIj09PWUpe3ZhciBxO2EuaS5zdWJzY3JpYmUoYixhLmkuSCxmdW5jdGlvbigpe3E/ZC5nZXQoXCJ2YWx1ZUFsbG93VW5zZXRcIik/cCgpOmwoKTooYS5hLkIoYixcImNoYW5nZVwiLGwpLHE9YS5vKHAsbnVsbCx7bDpifSkpfSxcbm51bGwse25vdGlmeUltbWVkaWF0ZWx5OiEwfSl9ZWxzZSBhLmEuQihiLFwiY2hhbmdlXCIsbCksYS5vKHAsbnVsbCx7bDpifSl9ZWxzZSBhLmliKGIse2NoZWNrZWRWYWx1ZTpjfSl9LHVwZGF0ZTpmdW5jdGlvbigpe319O2EubS53YS52YWx1ZT0hMDthLmMudmlzaWJsZT17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmYoYygpKSxlPVwibm9uZVwiIT1iLnN0eWxlLmRpc3BsYXk7ZCYmIWU/Yi5zdHlsZS5kaXNwbGF5PVwiXCI6IWQmJmUmJihiLnN0eWxlLmRpc3BsYXk9XCJub25lXCIpfX07YS5jLmhpZGRlbj17dXBkYXRlOmZ1bmN0aW9uKGIsYyl7YS5jLnZpc2libGUudXBkYXRlKGIsZnVuY3Rpb24oKXtyZXR1cm4hYS5hLmYoYygpKX0pfX07KGZ1bmN0aW9uKGIpe2EuY1tiXT17aW5pdDpmdW5jdGlvbihjLGQsZSxmLGcpe3JldHVybiBhLmMuZXZlbnQuaW5pdC5jYWxsKHRoaXMsYyxmdW5jdGlvbigpe3ZhciBhPXt9O2FbYl09ZCgpO3JldHVybiBhfSxlLGYsZyl9fX0pKFwiY2xpY2tcIik7XG5hLmNhPWZ1bmN0aW9uKCl7fTthLmNhLnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbigpe3Rocm93IEVycm9yKFwiT3ZlcnJpZGUgcmVuZGVyVGVtcGxhdGVTb3VyY2VcIik7fTthLmNhLnByb3RvdHlwZS5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2s9ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcihcIk92ZXJyaWRlIGNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9ja1wiKTt9O2EuY2EucHJvdG90eXBlLm1ha2VUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbihiLGMpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtjPWN8fHc7dmFyIGQ9Yy5nZXRFbGVtZW50QnlJZChiKTtpZighZCl0aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIHRlbXBsYXRlIHdpdGggSUQgXCIrYik7cmV0dXJuIG5ldyBhLkMuRihkKX1pZigxPT1iLm5vZGVUeXBlfHw4PT1iLm5vZGVUeXBlKXJldHVybiBuZXcgYS5DLmlhKGIpO3Rocm93IEVycm9yKFwiVW5rbm93biB0ZW1wbGF0ZSB0eXBlOiBcIitiKTt9O2EuY2EucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlPVxuZnVuY3Rpb24oYSxjLGQsZSl7YT10aGlzLm1ha2VUZW1wbGF0ZVNvdXJjZShhLGUpO3JldHVybiB0aGlzLnJlbmRlclRlbXBsYXRlU291cmNlKGEsYyxkLGUpfTthLmNhLnByb3RvdHlwZS5pc1RlbXBsYXRlUmV3cml0dGVuPWZ1bmN0aW9uKGEsYyl7cmV0dXJuITE9PT10aGlzLmFsbG93VGVtcGxhdGVSZXdyaXRpbmc/ITA6dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxjKS5kYXRhKFwiaXNSZXdyaXR0ZW5cIil9O2EuY2EucHJvdG90eXBlLnJld3JpdGVUZW1wbGF0ZT1mdW5jdGlvbihhLGMsZCl7YT10aGlzLm1ha2VUZW1wbGF0ZVNvdXJjZShhLGQpO2M9YyhhLnRleHQoKSk7YS50ZXh0KGMpO2EuZGF0YShcImlzUmV3cml0dGVuXCIsITApfTthLmIoXCJ0ZW1wbGF0ZUVuZ2luZVwiLGEuY2EpO2Eua2M9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyxkLGgpe2I9YS5tLmFjKGIpO2Zvcih2YXIgbT1hLm0uUmEsaz0wO2s8Yi5sZW5ndGg7aysrKXt2YXIgbD1iW2tdLmtleTtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobSxcbmwpKXt2YXIgcD1tW2xdO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBwKXtpZihsPXAoYltrXS52YWx1ZSkpdGhyb3cgRXJyb3IobCk7fWVsc2UgaWYoIXApdGhyb3cgRXJyb3IoXCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IHRoZSAnXCIrbCtcIicgYmluZGluZyB3aXRoaW4gaXRzIHRlbXBsYXRlc1wiKTt9fWQ9XCJrby5fX3RyX2FtYnRucyhmdW5jdGlvbigkY29udGV4dCwkZWxlbWVudCl7cmV0dXJuKGZ1bmN0aW9uKCl7cmV0dXJueyBcIithLm0udmIoYix7dmFsdWVBY2Nlc3NvcnM6ITB9KStcIiB9IH0pKCl9LCdcIitkLnRvTG93ZXJDYXNlKCkrXCInKVwiO3JldHVybiBoLmNyZWF0ZUphdmFTY3JpcHRFdmFsdWF0b3JCbG9jayhkKStjfXZhciBjPS8oPChbYS16XStcXGQqKSg/OlxccysoPyFkYXRhLWJpbmRcXHMqPVxccyopW2EtejAtOVxcLV0rKD86PSg/OlxcXCJbXlxcXCJdKlxcXCJ8XFwnW15cXCddKlxcJ3xbXj5dKikpPykqXFxzKylkYXRhLWJpbmRcXHMqPVxccyooW1wiJ10pKFtcXHNcXFNdKj8pXFwzL2dpLFxuZD0vXFx4M2MhLS1cXHMqa29cXGJcXHMqKFtcXHNcXFNdKj8pXFxzKi0tXFx4M2UvZztyZXR1cm57eGQ6ZnVuY3Rpb24oYixjLGQpe2MuaXNUZW1wbGF0ZVJld3JpdHRlbihiLGQpfHxjLnJld3JpdGVUZW1wbGF0ZShiLGZ1bmN0aW9uKGIpe3JldHVybiBhLmtjLkxkKGIsYyl9LGQpfSxMZDpmdW5jdGlvbihhLGYpe3JldHVybiBhLnJlcGxhY2UoYyxmdW5jdGlvbihhLGMsZCxlLGwpe3JldHVybiBiKGwsYyxkLGYpfSkucmVwbGFjZShkLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGIoYyxcIlxceDNjIS0tIGtvIC0tXFx4M2VcIixcIiNjb21tZW50XCIsZil9KX0sbWQ6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5hYS5YYihmdW5jdGlvbihkLGgpe3ZhciBtPWQubmV4dFNpYmxpbmc7bSYmbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09YyYmYS5pYihtLGIsaCl9KX19fSgpO2EuYihcIl9fdHJfYW1idG5zXCIsYS5rYy5tZCk7KGZ1bmN0aW9uKCl7YS5DPXt9O2EuQy5GPWZ1bmN0aW9uKGIpe2lmKHRoaXMuRj1iKXt2YXIgYz1cbmEuYS5SKGIpO3RoaXMuYWI9XCJzY3JpcHRcIj09PWM/MTpcInRleHRhcmVhXCI9PT1jPzI6XCJ0ZW1wbGF0ZVwiPT1jJiZiLmNvbnRlbnQmJjExPT09Yi5jb250ZW50Lm5vZGVUeXBlPzM6NH19O2EuQy5GLnByb3RvdHlwZS50ZXh0PWZ1bmN0aW9uKCl7dmFyIGI9MT09PXRoaXMuYWI/XCJ0ZXh0XCI6Mj09PXRoaXMuYWI/XCJ2YWx1ZVwiOlwiaW5uZXJIVE1MXCI7aWYoMD09YXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5GW2JdO3ZhciBjPWFyZ3VtZW50c1swXTtcImlubmVySFRNTFwiPT09Yj9hLmEuZmModGhpcy5GLGMpOnRoaXMuRltiXT1jfTt2YXIgYj1hLmEuZy5aKCkrXCJfXCI7YS5DLkYucHJvdG90eXBlLmRhdGE9ZnVuY3Rpb24oYyl7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGEuYS5nLmdldCh0aGlzLkYsYitjKTthLmEuZy5zZXQodGhpcy5GLGIrYyxhcmd1bWVudHNbMV0pfTt2YXIgYz1hLmEuZy5aKCk7YS5DLkYucHJvdG90eXBlLm5vZGVzPWZ1bmN0aW9uKCl7dmFyIGI9dGhpcy5GO1xuaWYoMD09YXJndW1lbnRzLmxlbmd0aCl7dmFyIGU9YS5hLmcuZ2V0KGIsYyl8fHt9LGY9ZS5sYnx8KDM9PT10aGlzLmFiP2IuY29udGVudDo0PT09dGhpcy5hYj9iOm4pO2lmKCFmfHxlLmpkKXt2YXIgZz10aGlzLnRleHQoKTtnJiZnIT09ZS5iYiYmKGY9YS5hLk1kKGcsYi5vd25lckRvY3VtZW50KSxhLmEuZy5zZXQoYixjLHtsYjpmLGJiOmcsamQ6ITB9KSl9cmV0dXJuIGZ9ZT1hcmd1bWVudHNbMF07dGhpcy5hYiE9PW4mJnRoaXMudGV4dChcIlwiKTthLmEuZy5zZXQoYixjLHtsYjplfSl9O2EuQy5pYT1mdW5jdGlvbihhKXt0aGlzLkY9YX07YS5DLmlhLnByb3RvdHlwZT1uZXcgYS5DLkY7YS5DLmlhLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hLkMuaWE7YS5DLmlhLnByb3RvdHlwZS50ZXh0PWZ1bmN0aW9uKCl7aWYoMD09YXJndW1lbnRzLmxlbmd0aCl7dmFyIGI9YS5hLmcuZ2V0KHRoaXMuRixjKXx8e307Yi5iYj09PW4mJmIubGImJihiLmJiPWIubGIuaW5uZXJIVE1MKTtyZXR1cm4gYi5iYn1hLmEuZy5zZXQodGhpcy5GLFxuYyx7YmI6YXJndW1lbnRzWzBdfSl9O2EuYihcInRlbXBsYXRlU291cmNlc1wiLGEuQyk7YS5iKFwidGVtcGxhdGVTb3VyY2VzLmRvbUVsZW1lbnRcIixhLkMuRik7YS5iKFwidGVtcGxhdGVTb3VyY2VzLmFub255bW91c1RlbXBsYXRlXCIsYS5DLmlhKX0pKCk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCl7dmFyIGU7Zm9yKGM9YS5oLm5leHRTaWJsaW5nKGMpO2ImJihlPWIpIT09YzspYj1hLmgubmV4dFNpYmxpbmcoZSksZChlLGIpfWZ1bmN0aW9uIGMoYyxkKXtpZihjLmxlbmd0aCl7dmFyIGU9Y1swXSxmPWNbYy5sZW5ndGgtMV0sZz1lLnBhcmVudE5vZGUsaD1hLmdhLmluc3RhbmNlLG09aC5wcmVwcm9jZXNzTm9kZTtpZihtKXtiKGUsZixmdW5jdGlvbihhLGIpe3ZhciBjPWEucHJldmlvdXNTaWJsaW5nLGQ9bS5jYWxsKGgsYSk7ZCYmKGE9PT1lJiYoZT1kWzBdfHxiKSxhPT09ZiYmKGY9ZFtkLmxlbmd0aC0xXXx8YykpfSk7Yy5sZW5ndGg9MDtpZighZSlyZXR1cm47ZT09PWY/Yy5wdXNoKGUpOlxuKGMucHVzaChlLGYpLGEuYS5VYShjLGcpKX1iKGUsZixmdW5jdGlvbihiKXsxIT09Yi5ub2RlVHlwZSYmOCE9PWIubm9kZVR5cGV8fGEudmMoZCxiKX0pO2IoZSxmLGZ1bmN0aW9uKGIpezEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZXx8YS5hYS5jZChiLFtkXSl9KTthLmEuVWEoYyxnKX19ZnVuY3Rpb24gZChhKXtyZXR1cm4gYS5ub2RlVHlwZT9hOjA8YS5sZW5ndGg/YVswXTpudWxsfWZ1bmN0aW9uIGUoYixlLGYsaCxtKXttPW18fHt9O3ZhciBuPShiJiZkKGIpfHxmfHx7fSkub3duZXJEb2N1bWVudCxCPW0udGVtcGxhdGVFbmdpbmV8fGc7YS5rYy54ZChmLEIsbik7Zj1CLnJlbmRlclRlbXBsYXRlKGYsaCxtLG4pO2lmKFwibnVtYmVyXCIhPXR5cGVvZiBmLmxlbmd0aHx8MDxmLmxlbmd0aCYmXCJudW1iZXJcIiE9dHlwZW9mIGZbMF0ubm9kZVR5cGUpdGhyb3cgRXJyb3IoXCJUZW1wbGF0ZSBlbmdpbmUgbXVzdCByZXR1cm4gYW4gYXJyYXkgb2YgRE9NIG5vZGVzXCIpO249ITE7c3dpdGNoKGUpe2Nhc2UgXCJyZXBsYWNlQ2hpbGRyZW5cIjphLmgudmEoYixcbmYpO249ITA7YnJlYWs7Y2FzZSBcInJlcGxhY2VOb2RlXCI6YS5hLlhjKGIsZik7bj0hMDticmVhaztjYXNlIFwiaWdub3JlVGFyZ2V0Tm9kZVwiOmJyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoXCJVbmtub3duIHJlbmRlck1vZGU6IFwiK2UpO31uJiYoYyhmLGgpLG0uYWZ0ZXJSZW5kZXImJmEudS5HKG0uYWZ0ZXJSZW5kZXIsbnVsbCxbZixoW20uYXN8fFwiJGRhdGFcIl1dKSxcInJlcGxhY2VDaGlsZHJlblwiPT1lJiZhLmkubWEoYixhLmkuSCkpO3JldHVybiBmfWZ1bmN0aW9uIGYoYixjLGQpe3JldHVybiBhLk8oYik/YigpOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IoYyxkKTpifXZhciBnO2EuZ2M9ZnVuY3Rpb24oYil7aWYoYiE9biYmIShiIGluc3RhbmNlb2YgYS5jYSkpdGhyb3cgRXJyb3IoXCJ0ZW1wbGF0ZUVuZ2luZSBtdXN0IGluaGVyaXQgZnJvbSBrby50ZW1wbGF0ZUVuZ2luZVwiKTtnPWJ9O2EuZGM9ZnVuY3Rpb24oYixjLGgsbSx0KXtoPWh8fHt9O2lmKChoLnRlbXBsYXRlRW5naW5lfHxnKT09XG5uKXRocm93IEVycm9yKFwiU2V0IGEgdGVtcGxhdGUgZW5naW5lIGJlZm9yZSBjYWxsaW5nIHJlbmRlclRlbXBsYXRlXCIpO3Q9dHx8XCJyZXBsYWNlQ2hpbGRyZW5cIjtpZihtKXt2YXIgeD1kKG0pO3JldHVybiBhLiQoZnVuY3Rpb24oKXt2YXIgZz1jJiZjIGluc3RhbmNlb2YgYS5mYT9jOm5ldyBhLmZhKGMsbnVsbCxudWxsLG51bGwse2V4cG9ydERlcGVuZGVuY2llczohMH0pLG49ZihiLGcuJGRhdGEsZyksZz1lKG0sdCxuLGcsaCk7XCJyZXBsYWNlTm9kZVwiPT10JiYobT1nLHg9ZChtKSl9LG51bGwse1NhOmZ1bmN0aW9uKCl7cmV0dXJuIXh8fCFhLmEuU2IoeCl9LGw6eCYmXCJyZXBsYWNlTm9kZVwiPT10P3gucGFyZW50Tm9kZTp4fSl9cmV0dXJuIGEuYWEuWGIoZnVuY3Rpb24oZCl7YS5kYyhiLGMsaCxkLFwicmVwbGFjZU5vZGVcIil9KX07YS5RZD1mdW5jdGlvbihiLGQsZyxoLG0pe2Z1bmN0aW9uIHgoYixjKXthLnUuRyhhLmEuZWMsbnVsbCxbaCxiLHUsZyxyLGNdKTthLmkubWEoaCxhLmkuSCl9XG5mdW5jdGlvbiByKGEsYil7YyhiLHYpO2cuYWZ0ZXJSZW5kZXImJmcuYWZ0ZXJSZW5kZXIoYixhKTt2PW51bGx9ZnVuY3Rpb24gdShhLGMpe3Y9bS5jcmVhdGVDaGlsZENvbnRleHQoYSx7YXM6eixub0NoaWxkQ29udGV4dDpnLm5vQ2hpbGRDb250ZXh0LGV4dGVuZDpmdW5jdGlvbihhKXthLiRpbmRleD1jO3omJihhW3orXCJJbmRleFwiXT1jKX19KTt2YXIgZD1mKGIsYSx2KTtyZXR1cm4gZShoLFwiaWdub3JlVGFyZ2V0Tm9kZVwiLGQsdixnKX12YXIgdix6PWcuYXMsdz0hMT09PWcuaW5jbHVkZURlc3Ryb3llZHx8YS5vcHRpb25zLmZvcmVhY2hIaWRlc0Rlc3Ryb3llZCYmIWcuaW5jbHVkZURlc3Ryb3llZDtpZih3fHxnLmJlZm9yZVJlbW92ZXx8IWEuUGMoZCkpcmV0dXJuIGEuJChmdW5jdGlvbigpe3ZhciBiPWEuYS5mKGQpfHxbXTtcInVuZGVmaW5lZFwiPT10eXBlb2YgYi5sZW5ndGgmJihiPVtiXSk7dyYmKGI9YS5hLmpiKGIsZnVuY3Rpb24oYil7cmV0dXJuIGI9PT1ufHxudWxsPT09Ynx8XG4hYS5hLmYoYi5fZGVzdHJveSl9KSk7eChiKX0sbnVsbCx7bDpofSk7eChkLnYoKSk7dmFyIEE9ZC5zdWJzY3JpYmUoZnVuY3Rpb24oYSl7eChkKCksYSl9LG51bGwsXCJhcnJheUNoYW5nZVwiKTtBLmwoaCk7cmV0dXJuIEF9O3ZhciBoPWEuYS5nLlooKSxtPWEuYS5nLlooKTthLmMudGVtcGxhdGU9e2luaXQ6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZihjKCkpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBkfHxcIm5hbWVcImluIGQpYS5oLkVhKGIpO2Vsc2UgaWYoXCJub2Rlc1wiaW4gZCl7ZD1kLm5vZGVzfHxbXTtpZihhLk8oZCkpdGhyb3cgRXJyb3IoJ1RoZSBcIm5vZGVzXCIgb3B0aW9uIG11c3QgYmUgYSBwbGFpbiwgbm9uLW9ic2VydmFibGUgYXJyYXkuJyk7dmFyIGU9ZFswXSYmZFswXS5wYXJlbnROb2RlO2UmJmEuYS5nLmdldChlLG0pfHwoZT1hLmEuWWIoZCksYS5hLmcuc2V0KGUsbSwhMCkpOyhuZXcgYS5DLmlhKGIpKS5ub2RlcyhlKX1lbHNlIGlmKGQ9YS5oLmNoaWxkTm9kZXMoYiksMDxkLmxlbmd0aCllPVxuYS5hLlliKGQpLChuZXcgYS5DLmlhKGIpKS5ub2RlcyhlKTtlbHNlIHRocm93IEVycm9yKFwiQW5vbnltb3VzIHRlbXBsYXRlIGRlZmluZWQsIGJ1dCBubyB0ZW1wbGF0ZSBjb250ZW50IHdhcyBwcm92aWRlZFwiKTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQsZSxmKXt2YXIgZz1jKCk7Yz1hLmEuZihnKTtkPSEwO2U9bnVsbDtcInN0cmluZ1wiPT10eXBlb2YgYz9jPXt9OihnPVwibmFtZVwiaW4gYz9jLm5hbWU6YixcImlmXCJpbiBjJiYoZD1hLmEuZihjW1wiaWZcIl0pKSxkJiZcImlmbm90XCJpbiBjJiYoZD0hYS5hLmYoYy5pZm5vdCkpLGQmJiFnJiYoZD0hMSkpO1wiZm9yZWFjaFwiaW4gYz9lPWEuUWQoZyxkJiZjLmZvcmVhY2h8fFtdLGMsYixmKTpkPyhkPWYsXCJkYXRhXCJpbiBjJiYoZD1mLmNyZWF0ZUNoaWxkQ29udGV4dChjLmRhdGEse2FzOmMuYXMsbm9DaGlsZENvbnRleHQ6Yy5ub0NoaWxkQ29udGV4dCxleHBvcnREZXBlbmRlbmNpZXM6ITB9KSksXG5lPWEuZGMoZyxkLGMsYikpOmEuaC5FYShiKTtmPWU7KGM9YS5hLmcuZ2V0KGIsaCkpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjLnMmJmMucygpO2EuYS5nLnNldChiLGgsIWZ8fGYuamEmJiFmLmphKCk/bjpmKX19O2EubS5SYS50ZW1wbGF0ZT1mdW5jdGlvbihiKXtiPWEubS5hYyhiKTtyZXR1cm4gMT09Yi5sZW5ndGgmJmJbMF0udW5rbm93bnx8YS5tLklkKGIsXCJuYW1lXCIpP251bGw6XCJUaGlzIHRlbXBsYXRlIGVuZ2luZSBkb2VzIG5vdCBzdXBwb3J0IGFub255bW91cyB0ZW1wbGF0ZXMgbmVzdGVkIHdpdGhpbiBpdHMgdGVtcGxhdGVzXCJ9O2EuaC5lYS50ZW1wbGF0ZT0hMH0pKCk7YS5iKFwic2V0VGVtcGxhdGVFbmdpbmVcIixhLmdjKTthLmIoXCJyZW5kZXJUZW1wbGF0ZVwiLGEuZGMpO2EuYS5LYz1mdW5jdGlvbihhLGMsZCl7aWYoYS5sZW5ndGgmJmMubGVuZ3RoKXt2YXIgZSxmLGcsaCxtO2ZvcihlPWY9MDsoIWR8fGU8ZCkmJihoPWFbZl0pOysrZil7Zm9yKGc9MDttPWNbZ107KytnKWlmKGgudmFsdWU9PT1cbm0udmFsdWUpe2gubW92ZWQ9bS5pbmRleDttLm1vdmVkPWguaW5kZXg7Yy5zcGxpY2UoZywxKTtlPWc9MDticmVha31lKz1nfX19O2EuYS5QYj1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkLGUsZixnKXt2YXIgaD1NYXRoLm1pbixtPU1hdGgubWF4LGs9W10sbCxwPWIubGVuZ3RoLHEsbj1kLmxlbmd0aCxyPW4tcHx8MSx2PXArbisxLHUsdyx6O2ZvcihsPTA7bDw9cDtsKyspZm9yKHc9dSxrLnB1c2godT1bXSksej1oKG4sbCtyKSxxPW0oMCxsLTEpO3E8PXo7cSsrKXVbcV09cT9sP2JbbC0xXT09PWRbcS0xXT93W3EtMV06aCh3W3FdfHx2LHVbcS0xXXx8dikrMTpxKzE6bCsxO2g9W107bT1bXTtyPVtdO2w9cDtmb3IocT1uO2x8fHE7KW49a1tsXVtxXS0xLHEmJm49PT1rW2xdW3EtMV0/bS5wdXNoKGhbaC5sZW5ndGhdPXtzdGF0dXM6ZSx2YWx1ZTpkWy0tcV0saW5kZXg6cX0pOmwmJm49PT1rW2wtMV1bcV0/ci5wdXNoKGhbaC5sZW5ndGhdPXtzdGF0dXM6Zix2YWx1ZTpiWy0tbF0saW5kZXg6bH0pOlxuKC0tcSwtLWwsZy5zcGFyc2V8fGgucHVzaCh7c3RhdHVzOlwicmV0YWluZWRcIix2YWx1ZTpkW3FdfSkpO2EuYS5LYyhyLG0sIWcuZG9udExpbWl0TW92ZXMmJjEwKnApO3JldHVybiBoLnJldmVyc2UoKX1yZXR1cm4gZnVuY3Rpb24oYSxkLGUpe2U9XCJib29sZWFuXCI9PT10eXBlb2YgZT97ZG9udExpbWl0TW92ZXM6ZX06ZXx8e307YT1hfHxbXTtkPWR8fFtdO3JldHVybiBhLmxlbmd0aDxkLmxlbmd0aD9iKGEsZCxcImFkZGVkXCIsXCJkZWxldGVkXCIsZSk6YihkLGEsXCJkZWxldGVkXCIsXCJhZGRlZFwiLGUpfX0oKTthLmIoXCJ1dGlscy5jb21wYXJlQXJyYXlzXCIsYS5hLlBiKTsoZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsYyxkLGgsbSl7dmFyIGs9W10sbD1hLiQoZnVuY3Rpb24oKXt2YXIgbD1jKGQsbSxhLmEuVWEoayxiKSl8fFtdOzA8ay5sZW5ndGgmJihhLmEuWGMoayxsKSxoJiZhLnUuRyhoLG51bGwsW2QsbCxtXSkpO2subGVuZ3RoPTA7YS5hLk5iKGssbCl9LG51bGwse2w6YixTYTpmdW5jdGlvbigpe3JldHVybiFhLmEua2Qoayl9fSk7XG5yZXR1cm57WTprLCQ6bC5qYSgpP2w6bn19dmFyIGM9YS5hLmcuWigpLGQ9YS5hLmcuWigpO2EuYS5lYz1mdW5jdGlvbihlLGYsZyxoLG0sayl7ZnVuY3Rpb24gbChiKXt5PXtBYTpiLHBiOmEudGEodysrKX07di5wdXNoKHkpO3J8fEYucHVzaCh5KX1mdW5jdGlvbiBwKGIpe3k9dFtiXTt3IT09eS5wYi52KCkmJkQucHVzaCh5KTt5LnBiKHcrKyk7YS5hLlVhKHkuWSxlKTt2LnB1c2goeSl9ZnVuY3Rpb24gcShiLGMpe2lmKGIpZm9yKHZhciBkPTAsZT1jLmxlbmd0aDtkPGU7ZCsrKWEuYS5EKGNbZF0uWSxmdW5jdGlvbihhKXtiKGEsZCxjW2RdLkFhKX0pfWY9Znx8W107XCJ1bmRlZmluZWRcIj09dHlwZW9mIGYubGVuZ3RoJiYoZj1bZl0pO2g9aHx8e307dmFyIHQ9YS5hLmcuZ2V0KGUsYykscj0hdCx2PVtdLHU9MCx3PTAsej1bXSxBPVtdLEM9W10sRD1bXSxGPVtdLHksST0wO2lmKHIpYS5hLkQoZixsKTtlbHNle2lmKCFrfHx0JiZ0Ll9jb3VudFdhaXRpbmdGb3JSZW1vdmUpe3ZhciBFPVxuYS5hLk1iKHQsZnVuY3Rpb24oYSl7cmV0dXJuIGEuQWF9KTtrPWEuYS5QYihFLGYse2RvbnRMaW1pdE1vdmVzOmguZG9udExpbWl0TW92ZXMsc3BhcnNlOiEwfSl9Zm9yKHZhciBFPTAsRyxILEs7Rz1rW0VdO0UrKylzd2l0Y2goSD1HLm1vdmVkLEs9Ry5pbmRleCxHLnN0YXR1cyl7Y2FzZSBcImRlbGV0ZWRcIjpmb3IoO3U8SzspcCh1KyspO0g9PT1uJiYoeT10W3VdLHkuJCYmKHkuJC5zKCkseS4kPW4pLGEuYS5VYSh5LlksZSkubGVuZ3RoJiYoaC5iZWZvcmVSZW1vdmUmJih2LnB1c2goeSksSSsrLHkuQWE9PT1kP3k9bnVsbDpDLnB1c2goeSkpLHkmJnoucHVzaC5hcHBseSh6LHkuWSkpKTt1Kys7YnJlYWs7Y2FzZSBcImFkZGVkXCI6Zm9yKDt3PEs7KXAodSsrKTtIIT09bj8oQS5wdXNoKHYubGVuZ3RoKSxwKEgpKTpsKEcudmFsdWUpfWZvcig7dzxmLmxlbmd0aDspcCh1KyspO3YuX2NvdW50V2FpdGluZ0ZvclJlbW92ZT1JfWEuYS5nLnNldChlLGMsdik7cShoLmJlZm9yZU1vdmUsRCk7YS5hLkQoeixcbmguYmVmb3JlUmVtb3ZlP2Eub2E6YS5yZW1vdmVOb2RlKTt2YXIgTSxPLFA7dHJ5e1A9ZS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnR9Y2F0Y2goTil7fWlmKEEubGVuZ3RoKWZvcig7KEU9QS5zaGlmdCgpKSE9bjspe3k9dltFXTtmb3IoTT1uO0U7KWlmKChPPXZbLS1FXS5ZKSYmTy5sZW5ndGgpe009T1tPLmxlbmd0aC0xXTticmVha31mb3IoZj0wO3U9eS5ZW2ZdO009dSxmKyspYS5oLldiKGUsdSxNKX1mb3IoRT0wO3k9dltFXTtFKyspe3kuWXx8YS5hLmV4dGVuZCh5LGIoZSxnLHkuQWEsbSx5LnBiKSk7Zm9yKGY9MDt1PXkuWVtmXTtNPXUsZisrKWEuaC5XYihlLHUsTSk7IXkuRWQmJm0mJihtKHkuQWEseS5ZLHkucGIpLHkuRWQ9ITAsTT15LllbeS5ZLmxlbmd0aC0xXSl9UCYmZS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQhPVAmJlAuZm9jdXMoKTtxKGguYmVmb3JlUmVtb3ZlLEMpO2ZvcihFPTA7RTxDLmxlbmd0aDsrK0UpQ1tFXS5BYT1kO3EoaC5hZnRlck1vdmUsRCk7XG5xKGguYWZ0ZXJBZGQsRil9fSkoKTthLmIoXCJ1dGlscy5zZXREb21Ob2RlQ2hpbGRyZW5Gcm9tQXJyYXlNYXBwaW5nXCIsYS5hLmVjKTthLmJhPWZ1bmN0aW9uKCl7dGhpcy5hbGxvd1RlbXBsYXRlUmV3cml0aW5nPSExfTthLmJhLnByb3RvdHlwZT1uZXcgYS5jYTthLmJhLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hLmJhO2EuYmEucHJvdG90eXBlLnJlbmRlclRlbXBsYXRlU291cmNlPWZ1bmN0aW9uKGIsYyxkLGUpe2lmKGM9KDk+YS5hLlc/MDpiLm5vZGVzKT9iLm5vZGVzKCk6bnVsbClyZXR1cm4gYS5hLmxhKGMuY2xvbmVOb2RlKCEwKS5jaGlsZE5vZGVzKTtiPWIudGV4dCgpO3JldHVybiBhLmEudWEoYixlKX07YS5iYS5NYT1uZXcgYS5iYTthLmdjKGEuYmEuTWEpO2EuYihcIm5hdGl2ZVRlbXBsYXRlRW5naW5lXCIsYS5iYSk7KGZ1bmN0aW9uKCl7YS4kYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuSGQ9ZnVuY3Rpb24oKXtpZighdnx8IXYudG1wbClyZXR1cm4gMDt0cnl7aWYoMDw9di50bXBsLnRhZy50bXBsLm9wZW4udG9TdHJpbmcoKS5pbmRleE9mKFwiX19cIikpcmV0dXJuIDJ9Y2F0Y2goYSl7fXJldHVybiAxfSgpO1xudGhpcy5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbihiLGUsZixnKXtnPWd8fHc7Zj1mfHx7fTtpZigyPmEpdGhyb3cgRXJyb3IoXCJZb3VyIHZlcnNpb24gb2YgalF1ZXJ5LnRtcGwgaXMgdG9vIG9sZC4gUGxlYXNlIHVwZ3JhZGUgdG8galF1ZXJ5LnRtcGwgMS4wLjBwcmUgb3IgbGF0ZXIuXCIpO3ZhciBoPWIuZGF0YShcInByZWNvbXBpbGVkXCIpO2h8fChoPWIudGV4dCgpfHxcIlwiLGg9di50ZW1wbGF0ZShudWxsLFwie3trb193aXRoICRpdGVtLmtvQmluZGluZ0NvbnRleHR9fVwiK2grXCJ7ey9rb193aXRofX1cIiksYi5kYXRhKFwicHJlY29tcGlsZWRcIixoKSk7Yj1bZS4kZGF0YV07ZT12LmV4dGVuZCh7a29CaW5kaW5nQ29udGV4dDplfSxmLnRlbXBsYXRlT3B0aW9ucyk7ZT12LnRtcGwoaCxiLGUpO2UuYXBwZW5kVG8oZy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTt2LmZyYWdtZW50cz17fTtyZXR1cm4gZX07dGhpcy5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2s9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ7e2tvX2NvZGUgKChmdW5jdGlvbigpIHsgcmV0dXJuIFwiK1xuYStcIiB9KSgpKSB9fVwifTt0aGlzLmFkZFRlbXBsYXRlPWZ1bmN0aW9uKGEsYil7dy53cml0ZShcIjxzY3JpcHQgdHlwZT0ndGV4dC9odG1sJyBpZD0nXCIrYStcIic+XCIrYitcIlxceDNjL3NjcmlwdD5cIil9OzA8YSYmKHYudG1wbC50YWcua29fY29kZT17b3BlbjpcIl9fLnB1c2goJDEgfHwgJycpO1wifSx2LnRtcGwudGFnLmtvX3dpdGg9e29wZW46XCJ3aXRoKCQxKSB7XCIsY2xvc2U6XCJ9IFwifSl9O2EuJGEucHJvdG90eXBlPW5ldyBhLmNhO2EuJGEucHJvdG90eXBlLmNvbnN0cnVjdG9yPWEuJGE7dmFyIGI9bmV3IGEuJGE7MDxiLkhkJiZhLmdjKGIpO2EuYihcImpxdWVyeVRtcGxUZW1wbGF0ZUVuZ2luZVwiLGEuJGEpfSkoKX0pfSkoKTt9KSgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZV9fYm9vbC1jZWxsLWVkaXRvclxcXCI+XFxuICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxuICAgIGRhdGEtYmluZD1cXFwiY2hlY2tlZDogdmFsdWUsIGV2ZW50OiB7IGNoYW5nZTogZnVuY3Rpb24oXywgZSkgeyAkZGF0YS52YWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7ICRkYXRhLmNvbXBsZXRlKHRydWUpOyB9IH1cXFwiXFxuICAvPlxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHNwYW4gY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlX19ib29sLWNlbGwtdmlld2VyXFxcIiBkYXRhLWJpbmQ9XFxcImNzczogY2xhc3NOYW1lXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlX19ib29sLWNlbGwtdmlld2VyLWNpcmNsZVxcXCJcXG4gICAgZGF0YS1iaW5kPVxcXCJzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IGNlbGwuZGF0YSA/ICdncmVlbicgOiAncmVkJyB9XFxcIiBcXG4gICAgPjwvc3Bhbj5cXG48L3NwYW4+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZV9fY2VsbC1lZGl0b3JcXFwiPlxcbiAgPGlucHV0IGRhdGEtYmluZD1cXFwidmFsdWU6IHZhbHVlLCBldmVudDogeyBrZXl1cDogZnVuY3Rpb24oXywgZSkgeyAkZGF0YS5wcm9jZXNzS2V5VXAoZSk7IH0gfVxcXCIgLz5cXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzcGFuIGRhdGEtYmluZD1cXFwiaHRtbDogY2VsbC50ZXh0LCBjc3M6IGNsYXNzTmFtZVxcXCI+PC9zcGFuPlxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHRkIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1jZWxsXFxcIiBkYXRhLWJpbmQ9XFxcImF0dHI6IHtyb3dzcGFuOiB0YWJsZS5pc01lcmdlZNChZWxscyA/IGNlbGwuY291bnQgOiAxfSxcXG4gIGNzczogKGNlbGwuY291bnQgPiAxKSAmJiB0YWJsZS5pc01lcmdlZNChZWxscyA/ICd0YWJsZTRqcy10YWJsZS1jZWxsLS1tZXJnZWQgJyA6ICcnLFxcbiAgdmlzaWJsZTogKGNlbGwuY291bnQgPiAwKSB8fCAhdGFibGUuaXNNZXJnZWTQoWVsbHMsXFxuICBzdHlsZTogeydiYWNrZ3JvdW5kLWNvbG9yJzogY2VsbC5jb2xvcn0gXFxcIj5cXG4gIDwhLS0ga28gaWZub3Q6IChjZWxsLmlucGxhY2VFZGl0b3IgJiYgdGFibGUuY29uZmlnLmVuYWJsZUVkaXQpIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1jZWxsX19jb250YWluZXJcXFwiIGRhdGEtYmluZD1cXFwiY3NzOiBjb250YWluZXJDc3MsIHN0eWxlOiB7dG9wOiBpc01lcmdlZENlbGwoKSA/IHRhYmxlLnRhYmxlSGVhZEhlaWdodCAtIDIgKyAncHgnIDogdW5kZWZpbmVkfSwgY2xpY2s6IHN0YXJ0RWRpdFxcXCI+XFxuICAgICAgPCEtLSBrbyBjb21wb25lbnQ6IHsgbmFtZTogY2VsbC52aWV3ZXIsIHBhcmFtczogeyBjZWxsOiBjZWxsLCBjbGFzc05hbWU6IGNvbnRlbnRDc3MgfSB9IC0tPlxcbiAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8L2Rpdj5cXG4gIDwhLS0gL2tvIC0tPlxcbiAgPCEtLSBrbyBpZjogKGNlbGwuaW5wbGFjZUVkaXRvciAmJiB0YWJsZS5jb25maWcuZW5hYmxlRWRpdCkgLS0+XFxuICAgIDwhLS0ga28gY29tcG9uZW50OiB7IG5hbWU6IGNlbGwuZWRpdG9yLCBwYXJhbXM6IHsgbW9kZWw6IGNlbGwuaW5wbGFjZUVkaXRvciB9IH0gLS0+XFxuICAgIDwhLS0gL2tvIC0tPlxcbiAgPCEtLSAva28gLS0+XFxuPC90ZD5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzZWxlY3QgY2xhc3M9XFxcInRhYmxlNGpzLWZpbHRlcl9fX29wZXJhdGlvblxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBvcGVyYXRpb25zLCB2YWx1ZTogb3BlcmF0aW9uLCBvcHRpb25zVGV4dDogJ3RleHQnXFxcIj48L3NlbGVjdD5cXG48IS0tIGtvIGlmOiBzaG93T3BlcmFuZCAtLT5cXG4gIDwhLS0ga28gaWY6IG9wZXJhdGlvbi5vcCA9PSBcXFwiRVFcXFwiIC0tPlxcbiAgPHRhYmxlNGpzLWZpbHRlci1zZWxlY3QgY2xhc3M9XFxcImFicnMtZmlsdGVyX192YWx1ZVxcXCJcXG4gICAgcGFyYW1zPVxcXCJ2YWx1ZTogZmlsdGVySXRlbVZhbHVlLCBjb2x1bW5OYW1lOiBjb2x1bW4ubmFtZSwgY29sdW1uVHlwZTogY29sdW1uLnR5cGUsIGdldENvbHVtbkRhdGE6IGdldENvbHVtbkRhdGFcXFwiPlxcbiAgPC90YWJsZTRqcy1maWx0ZXItc2VsZWN0PlxcbiAgPCEtLSAva28gLS0+XFxuICA8IS0tIGtvIGlmOiBvcGVyYXRpb24ub3AgIT0gXFxcIkVRXFxcIiAtLT5cXG4gIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLWZpbHRlcl9fb3BlcmFuZFxcXCIgZGF0YS1iaW5kPVxcXCJjb21wb25lbnQ6IHsgbmFtZTogZmlsdGVyRWRpdG9yTmFtZSwgcGFyYW1zOiB7IHZhbHVlOiBmaWx0ZXJJdGVtVmFsdWUsIGNvbHVtbjogY29sdW1uIH0gfVxcXCI+XFxuICA8L2Rpdj5cXG4gIDwhLS0gL2tvIC0tPlxcbjwhLS0gL2tvIC0tPlxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPCEtLSBrbyBpZjogZmlsdGVySXRlbXMubGVuZ3RoID4gMCAtLT5cXG48ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1maWx0ZXItaXRlbVxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1maWx0ZXJfX3RpdGxlIHRhYmxlNGpzLWZpbHRlci10ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IGNvbHVtbi50aXRsZSArICc6J1xcXCI+PC9kaXY+XFxuICA8IS0tIGtvIGZvcmVhY2g6IGZpbHRlckl0ZW1zIC0tPlxcbiAgICA8IS0tIGtvIGlmOiAkaW5kZXgoKSA+IDAgLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLWZpbHRlcl9fb3BlcmF0b3IgdGFibGU0anMtZmlsdGVyLXRleHRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJyYnXFxcIj48L2Rpdj5cXG4gICAgPCEtLSAva28gLS0+XFxuICAgIDwhLS0ga28gY29tcG9uZW50OiB7IG5hbWU6ICd0YWJsZTRqcy1jb2x1bW4tZmlsdGVyLWl0ZW0nLCBwYXJhbXM6IHsgZmlsdGVySXRlbTogJGRhdGEgfSB9IC0tPlxcbiAgICA8IS0tIC9rbyAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtZmlsdGVyX19yZW1vdmVcXFwiXFxuICAgICAgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5yZW1vdmVJdGVtLCBjbGlja0J1YmJsZTogZmFsc2VcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLWZpbHRlcl9fcmVtb3ZlLWljb24gdGFibGU0anMtc3ZnLWljb25cXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMuY3Jvc3NcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwhLS0gL2tvIC0tPlxcbjwvZGl2PlxcbjwhLS0gL2tvIC0tPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGlucHV0IHN0eWxlPVxcXCJ3aWR0aDogMTAwJTtcXFwiIHBsYWNlaG9sZGVyPVxcXCIqXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiB2YWx1ZS52YWx1ZVxcXCIgLz5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXNlbGVjdC1zZWxlY3Rpb25cXFwiPlxcbiAgICA8IS0tIGtvIGZvcmVhY2g6IHNlbGVjdGVkSXRlbXMgLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXNlbGVjdC1zZWxlY3Rpb24taXRlbVxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFibGU0anMtc2VsZWN0LWl0ZW0tdGl0bGVcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbmFtZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtc2VsZWN0LWl0ZW0tY2xvc2VcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQuZGVsZXRlSXRlbXMsIGh0bWw6ICRyb290Lmljb25zLmNyb3NzXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0gL2tvIC0tPlxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXNlbGVjdC1idXR0b24gdGFibGU0anMtc3ZnLWljb25cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IHRvZ2dsZSwgYXR0cjogeyB0aXRsZTogdGl0bGUgfSwgaHRtbDogJHJvb3QuaWNvbnMuYXJyb3dkb3duXFxcIj48L2Rpdj5cXG48IS0tIGtvIGlmOiBpc09wZW4gLS0+XFxuPHVsIGNsYXNzPVxcXCJ0YWJsZTRqcy1zZWxlY3RfX2Ryb3Bkb3duLW1lbnUgdGFibGU0anMtYnV0dG9uLXRvZ2dsZV9fZHJvcGRvd24tbWVudVxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogZnVuY3Rpb24oXywgZSkgeyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9XFxcIj5cXG4gICAgPCEtLSBrbyBpZjogaXNGaWx0ZXJTZWFyY2hCeVR5cGUgLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXNlbGVjdF9fZHJvcGRvd24tc2VhcmNoLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcInRhYmxlNGpzLXNlbGVjdF9fZHJvcGRvd24tc2VhcmNoXFxcIiBwbGFjZWhvbGRlcj1cXFwiKlxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogZmlsdGVyVGV4dCwgdmFsdWVVcGRhdGU6ICdhZnRlcmtleWRvd24nXFxcIiAvPlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLSAva28gLS0+XFxuICAgIDwhLS0ga28gZm9yZWFjaDogZm91bmRJdGVtcyAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc2VsZWN0X19kcm9wZG93bi1pdGVtXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LmNsaWNrSXRlbVxcXCI+XFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcInRhYmxlNGpzLXNlbGVjdF9fZHJvcGRvd24taGlkZS1jaGVja1xcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDogJHBhcmVudC5pc0NoZWNrZWQoJGRhdGEpXFxcIiAvPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtc2VsZWN0X19kcm9wZG93bi1jaGVja1xcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiAkcm9vdC5pY29ucy5jaGVja1xcXCI+PC9kaXY+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFibGU0anMtc2VsZWN0X19kcm9wZG93bi1sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBuYW1lXFxcIj48L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tIC9rbyAtLT5cXG4gICAgPCEtLSBrbyBpZjogaXNMb2FkTW9yZSAtLT5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwidGFibGU0anMtc2VsZWN0X19kcm9wZG93bi1idXR0b25cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGxvYWRNb3JlXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWJsZTRqcy1hY3Rpb24tYnV0dG9uX19sYWJlbFxcXCI+TW9yZTwvc3Bhbj5cXG4gICAgPC9idXR0b24+XFxuICAgIDwhLS0gL2tvIC0tPlxcbjwvdWw+XFxuPCEtLSAva28gLS0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1yZXNpemFibGUtY29udGFpbmVyXFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLXNjcm9sbC1jb250YWluZXJcXFwiPlxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlXFxcIj5cXG4gICAgICA8dGhlYWQgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlX19oZWFkZXIgdGFibGU0anMtdGFibGUtc3RpY2t5LWNvbXBvbmVudFxcXCI+XFxuICAgICAgICA8dHIgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWhlYWRlci10b29sc1xcXCI+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtaGVhZGVyLXRvb2xzX19jZWxsXFxcIiBjb2xzcGFuPVxcXCIxMDAlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1oZWFkZXItdG9vbHNfX2NvbnRhaW5lciB0YWJsZTRqcy10YWJsZS1ncm91cC1oZWFkZXItdGVjaG5pY2FsLWNlbGxcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtcHJlaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtc2VhcmNoLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBzaG93U2VhcmNoIC0tPlxcbiAgICAgICAgICAgICAgICAgIDx0YWJsZTRqcy1zZWFyY2ggcGFyYW1zPVxcXCJtb2RlbDogc2VhcmNoTW9kZWxcXFwiPjwvdGFibGU0anMtc2VhcmNoPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICAgIDx0YWJsZTRqcy1hY3Rpb25zIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1hY3Rpb25zXFxcIiBwYXJhbXM9XFxcIm1vZGVsOiAkZGF0YSwgb3B0aW9uczogeyBhY3Rpb246ICd0b3BBY3Rpb25zJyB9XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlNGpzLWFjdGlvbnM+XFxuICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogJGRhdGEuZ2V0QWN0aW9ucygnZHJvcGRvd25BY3Rpb25zJykubGVuZ3RoID4gMCAtLT5cXG4gICAgICAgICAgICAgICAgICA8dGFibGU0anMtZHJvcGRvd24tYWN0aW9ucyBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtZHJvcGRvd24gdGFibGU0anMtdGFibGUtYWN0aW9ucy1tZW51XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zPVxcXCJkYXRhOiAkZGF0YSwgYWN0aW9uczogJ2Ryb3Bkb3duQWN0aW9ucydcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDwvdGFibGU0anMtZHJvcGRvd24tYWN0aW9ucz5cXG4gICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwhLS0ga28gaWY6IHZpZXdGaWx0ZXJUYWJsZSAtLT5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWZpbHRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWZpbHRlcl9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGNvbHVtbnMgLS0+XFxuICAgICAgICAgICAgICAgICAgPCEtLSBrbyBjb21wb25lbnQ6IHsgbmFtZTogJ3RhYmxlNGpzLWNvbHVtbi1maWx0ZXInLCBwYXJhbXM6IHsgY29udGV4dDogZmlsdGVyQ29udGV4dCB9IH0gLS0+XFxuICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgICAgICA8dHIgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWhlYWRlci10aXRsZVxcXCI+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtaGVhZGVyLXRpdGxlX19jZWxsIHRhYmxlNGpzLXRhYmxlLXN3aXRjaFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtc3dpdGNoX190ZXh0XFxcIlxcbiAgICAgICAgICAgICAgZGF0YS1iaW5kPVxcXCJjc3M6IHsnc3dpdGNoX190ZXh0LS1zZWxlY3RlZCc6IGlzTnVtYmVyfSwgY2xpY2s6ICgpID0+ICRkYXRhLmlzTnVtYmVyID0gISRkYXRhLmlzTnVtYmVyXFxcIj4jXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogY29sdW1ucyAtLT5cXG4gICAgICAgICAgPCEtLSBrbyBpZjogdmlzaWJsZSAtLT5cXG4gICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1oZWFkZXItdGl0bGVfX2NlbGxcXFwiXFxuICAgICAgICAgICAgZGF0YS1iaW5kPVxcXCJldmVudDoge21vdXNlb3V0OiAkcGFyZW50LmxvZ01vdXNlT3V0LCBtb3VzZW1vdmU6ICRwYXJlbnQubG9nTW91c2VNb3ZlLCBtb3VzZXVwOiAkcGFyZW50LmxvZ01vdXNlVXB9XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS10aXRsZVxcXCI+XFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtdGl0bGVfX3RleHRcXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogdGl0bGUsIGNsaWNrOiAkcGFyZW50LmNsaWNrQ29sdW1uXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS10aXRsZV9fdG9vbHNcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zdmctaWNvbiB0YWJsZTRqcy10YWJsZS10aXRsZV9fc29ydGVyXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IG9yZGVyID09PSBmYWxzZSwgaHRtbDogJHJvb3QuaWNvbnMuc29ydHVwXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtdGFibGUtdGl0bGVfX3NvcnRlclxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBvcmRlciA9PT0gdHJ1ZSwgaHRtbDogJHJvb3QuaWNvbnMuc29ydGRvd25cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zdmctaWNvbiB0YWJsZTRqcy10YWJsZS10aXRsZV9fZmlsdGVyXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBjbGlja0ZpbHRlciwgaHRtbDogJHJvb3QuaWNvbnMuZmlsdGVyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLXRpdGxlX3Jlc2l6ZVxcXCJcXG4gICAgICAgICAgICAgIGRhdGEtYmluZD1cXFwiZXZlbnQ6IHttb3VzZW92ZXI6ICRwYXJlbnQubG9nTW91c2VPdmVyLCBtb3VzZW91dDogJHBhcmVudC5sb2dNb3VzZU91dCwgbW91c2Vtb3ZlOiAkcGFyZW50LmxvZ01vdXNlTW92ZSwgbW91c2V1cDogJHBhcmVudC5sb2dNb3VzZVVwLCBtb3VzZWRvd246ICRwYXJlbnQubG9nTW91c2VEb3dufVxcXCI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1oZWFkZXItdGl0bGVfX2NlbGxcXFwiPjwvdGg+XFxuICAgICAgICA8L3RyPlxcbiAgICAgIDwvdGhlYWQ+XFxuICAgICAgPHRib2R5IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZV9fYm9keVxcXCI+XFxuICAgICAgICA8IS0tIGtvIGlmOiByb3dzLmxlbmd0aCA9PSAwICYmIGxvYWRpbmdNdXRleCA9PSBmYWxzZSAgLS0+XFxuICAgICAgICA8dHIgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlX19yb3dcXFwiPlxcbiAgICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWNlbGxcXFwiIGNvbHNwYW49XFxcIjEwMCVcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbm9EYXRhVGV4dFxcXCI+PC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwhLS0ga28gaWY6IGxvYWRpbmdNdXRleCAtLT5cXG4gICAgICAgIDwhLS0ga28gZm9yZWFjaDogY29sdW1ucyAtLT5cXG4gICAgICAgIDx0ciBjbGFzcz1cXFwidGFibGU0anMtdGFibGVfX3Jvd1xcXCI+PC90cj5cXG4gICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1jZWxsIHRhYmxlNGpzLXRhYmxlLXRlY2huaWNhbC1jZWxsXFxcIiA+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtdGVjaG5pY2FsLWNlbGxfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZV9fY2hlY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zdmctaWNvbiB0YWJsZTRqcy10YWJsZV9faWNvbi1jaGVja1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC90ZD5cXG4gICAgICAgIDwhLS0ga28gZm9yZWFjaDogJHBhcmVudC5jb2x1bW5zIC0tPlxcbiAgICAgICAgPCEtLSBrbyBpZjogdmlzaWJsZSAtLT5cXG4gICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1jZWxsIHRhYmxlNGpzLXRhYmxlLXRlY2huaWNhbC1jZWxsXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1jZWxsX19jb250YWluZXIgdGFibGU0anMtdGFibGUtY2VsbF9fY29udGFpbmVyLS1sb2FkaW5nXFxcIj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC90ZD5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8dGQgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWNlbGwgdGFibGU0anMtdGFibGUtdGVjaG5pY2FsLWNlbGxcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS10ZWNobmljYWwtY2VsbF9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zdmctaWNvbiB0YWJsZTRqcy10YWJsZS1pY29uLXJvdy10b29scyB0YWJsZTRqcy10YWJsZV9fbW9yZVxcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiAkcm9vdC5pY29ucy5tb3JlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zdmctaWNvbiB0YWJsZTRqcy10YWJsZS1pY29uLXJvdy10b29scyB0YWJsZTRqcy10YWJsZV9fZWRpdFxcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiAkcm9vdC5pY29ucy5lZGl0XFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3RkPlxcbiAgICAgICAgPC90cj5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHtkYXRhOiByb3dzfSAtLT5cXG4gICAgICAgIDx0ciBjbGFzcz1cXFwidGFibGU0anMtdGFibGVfX3Jvd1xcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IHsndGFibGU0anMtdGFibGVfX3Jvdy0tc2VsZWN0ZWQnOiBzZWxlY3RlZH0sIHN0eWxlOiB7J2JhY2tncm91bmQtY29sb3InOiAnbm9uZScgfVxcXCI+XFxuICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtY2VsbCB0YWJsZTRqcy10YWJsZS10ZWNobmljYWwtY2VsbFxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogc2VsZWN0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS10ZWNobmljYWwtY2VsbF9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgIDwhLS0ga28gaWY6ICRwYXJlbnQuaXNOdW1iZXIgLS0+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZV9fbnVtYmVyXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG51bWJlclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgIDwhLS0ga28gaWY6ICEkcGFyZW50LmlzTnVtYmVyIC0tPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGVfX2NoZWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtdGFibGVfX2ljb24tY2hlY2tcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogc2VsZWN0ZWQsIGh0bWw6ICRyb290Lmljb25zLmNoZWNrXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogY2VsbHMgLS0+XFxuICAgICAgICAgIDwhLS0ga28gY29tcG9uZW50OiB7IG5hbWU6ICd0YWJsZTRqcy10YWJsZS1jZWxsJywgcGFyYW1zOiB7IGNlbGw6ICRkYXRhLCB0YWJsZTogJHBhcmVudHNbMV0gfSB9IC0tPlxcbiAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtY2VsbCB0YWJsZTRqcy10YWJsZS10ZWNobmljYWwtY2VsbFxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogY2xpY2tcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLXRlY2huaWNhbC1jZWxsX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtdGFibGUtaWNvbi1yb3ctdG9vbHMgdGFibGU0anMtdGFibGVfX21vcmVcXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMubW9yZVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zdmctaWNvbiB0YWJsZTRqcy10YWJsZS1pY29uLXJvdy10b29scyB0YWJsZTRqcy10YWJsZV9fZWRpdFxcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiAkcm9vdC5pY29ucy5lZGl0XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZV9fcm93LS1zZWxlY3RcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogISRwYXJlbnQuaGFzQWN0aXZlSW5wbGFjZUVkaXRvclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGVfX3Jvdy0tY29sb3JlZFxcXCIgZGF0YS1iaW5kPVxcXCJzdHlsZTogeyAnYmFja2dyb3VuZCc6IGNvbG9yID8gY29sb3IgOiAncmdiYSgyNDgsMjQ5LDI1MyknIH1cXFwiPjwvZGl2PlxcbiAgICAgICAgICA8L3RkPlxcbiAgICAgICAgPC90cj5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgIDwvdGJvZHk+XFxuICAgICAgPHRmb290IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZV9fZm9vdGVyIHRhYmxlNGpzLXRhYmxlLXN0aWNreS1jb21wb25lbnRcXFwiPlxcbiAgICAgICAgPHRyIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1mb290ZXItc3VtbWFyeVxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBzaG93VGFibGVTdW1tYXJ5XFxcIj5cXG4gICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1jZWxsIHRhYmxlNGpzLXRhYmxlLXRlY2huaWNhbC1jZWxsIHRhYmxlNGpzLXRhYmxlLWZvb3Rlcl9fY2VsbFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtdGVjaG5pY2FsLWNlbGxfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zdmctaWNvbiB0YWJsZTRqcy10YWJsZS1pY29uLWVxdWFsXFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLmVxdWFsXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC90aD5cXG4gICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBjb2x1bW5zIC0tPlxcbiAgICAgICAgICA8IS0tIGtvIGlmOiB2aXNpYmxlIC0tPlxcbiAgICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWNlbGwgdGFibGU0anMtdGFibGUtZm9vdGVyX19jZWxsXFxcIj5cXG4gICAgICAgICAgICA8dGFibGU0anMtdGFibGUtc3VtbWFyeSBwYXJhbXM9J2NvbHVtbjogJGRhdGEnPjwvdGFibGU0anMtdGFibGUtc3VtbWFyeT5cXG4gICAgICAgICAgPC90aD5cXG4gICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICA8dGggY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWNlbGwgdGFibGU0anMtdGFibGUtdGVjaG5pY2FsLWNlbGwgdGFibGU0anMtdGFibGUtZm9vdGVyX19jZWxsXFxcIj48L3RoPlxcbiAgICAgICAgPC90cj5cXG4gICAgICAgIDx0ciBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtZm9vdGVyLXRvb2xzXFxcIj5cXG4gICAgICAgICAgPHRoIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1mb290ZXItdG9vbHNfX2NlbGxcXFwiIGNvbHNwYW49XFxcIjEwMCVcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWZvb3Rlci10b29sc19fY29udGFpbmVyIHRhYmxlNGpzLXRhYmxlLWdyb3VwLWhlYWRlci10ZWNobmljYWwtY2VsbFxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1yb3ctbWFuYWdlbWVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDx0YWJsZTRqcy1hY3Rpb25zIGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1hY3Rpb25zXFxcIiBwYXJhbXM9XFxcIm1vZGVsOiAkZGF0YSwgb3B0aW9uczogeyBhY3Rpb246ICdib3R0b21BY3Rpb25zJyB9XFxcIj5cXG4gICAgICAgICAgICAgICAgPC90YWJsZTRqcy1hY3Rpb25zPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy10YWJsZS1pbmZvXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWluZm9fX3RvdGFsIHRhYmxlNGpzLXRhYmxlLWluZm9fX3RleHRcXFwiXFxuICAgICAgICAgICAgICAgICAgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAnVG90YWw6ICcgKyB0b3RhbENvdW50XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWluZm9fX2dvLXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtZ28tdG9fX3RleHQgdGFibGU0anMtdGFibGUtaW5mb19fdGV4dFxcXCI+R28gdG86IDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLWdvLXRvX192YWx1ZVxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogc3RhcnRSb3dcXFwiLz5cXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ0YWJsZTRqcy1idG4tdHJhbnNwYXJlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc3ZnLWljb24gdGFibGU0anMtdGFibGUtZ28tdG9fX2ljb25cXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMuYXJyb3dyaWdodFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvdGg+XFxuICAgICAgICA8L3RyPlxcbiAgICAgIDwvdGZvb3Q+XFxuICAgIDwvdGFibGU+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLXNlYXJjaFxcXCI+XFxuICA8aW5wdXQgY2xhc3M9XFxcInRhYmxlNGpzLXNlYXJjaF9fdmFsdWVcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IHZhbHVlLCBhdHRyOiB7IHBsYWNlaG9sZGVyOiAnU2VhcmNoLi4uJyB9XFxcIiAvPlxcbiAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtc2VhcmNoX19idXR0b25cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IHJlZnJlc2gsIGF0dHI6IHsgdGl0bGU6ICdTZWFyY2gnIH1cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZTRqcy1zdmctaWNvbiB0YWJsZTRqcy1zZWFyY2hfX2ljb25cXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMuc2VhcmNoXFxcIj48L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPHNwYW4gY2xhc3M9XFxcInRhYmxlNGpzLXRhYmxlLXN1bW1hcnlfX3ZhbHVlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IHZhbHVlXFxcIj48L3NwYW4+XFxuPHNlbGVjdCBjbGFzcz1cXFwidGFibGU0anMtdGFibGUtc3VtbWFyeV9fc2VsZWN0XFxcIiAgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogZnVuY1xcXCI+XFxuICA8IS0tIGtvIGZvcmVhY2g6IHN1bW1hcnlJdGVtcyAtLT5cXG4gICAgPG9wdGlvbiBkYXRhLWJpbmQ9XFxcInRleHQ6IHRpdGxlLCB2YWx1ZTogdmFsdWUsIGF0dHI6IHt0aXRsZTogdGl0bGV9XFxcIj48L29wdGlvbj5cXG4gIDwhLS0gL2tvIC0tPiAgXFxuPC9zZWxlY3Q+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8YnV0dG9uIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRkYXRhLmZvcm1JZCAhPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogYWN0aW9uLCBcXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogISRkYXRhLnZpc2libGUgfHwga28udW53cmFwKHZpc2libGUpLFxcbiAgICAgICAgICAgICAgICBlbmFibGU6ICEkZGF0YS5lbmFibGVkIHx8IGtvLnVud3JhcChlbmFibGVkKSxcXG4gICAgICAgICAgICAgICAgYXR0cjoge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiAndGFibGU0anMtYnV0dG9uLS10cmFuc3BhcmVudCBhY3Rpb24tYnV0dG9uIHRhYmxlNGpzLWFjdGlvbi1idXR0b24gJyArIGtvLnVud3JhcCgkZGF0YS5jc3NDbGFzc2VzKSArIChrby51bndyYXAoJGRhdGEuYWN0aXZlKSA9PT0gdHJ1ZSA/ICcgdGFibGU0anMtYWN0aW9uLS1hY3RpdmUnIDogJycpLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAkZGF0YS50aXRsZSB8fCAkZGF0YS5uYW1lLCBmb3JtOiAkZGF0YS5mb3JtSWQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJGRhdGEuZm9ybUlkICE9PSB1bmRlZmluZWQgPyAnc3VibWl0JyA6ICdidXR0b24nXFxuICAgICAgICAgICAgICAgICAgICB9XFxcIj5cXG4gICAgPCEtLSBrbyBpZjogJGRhdGEuaWNvbiAtLT5cXG4gICAgPCEtLSA8c3BhbiBkYXRhLWJpbmQ9XFxcImNzczogKCdmYSBpY29uICcgKyAodHlwZW9mIGljb24gPT0gJ2Z1bmN0aW9uJyA/IGljb24oKSA6IGljb24pKVxcXCI+PC9zcGFuPiAtLT5cXG4gICAgPCEtLSAva28gLS0+XFxuICAgIDwhLS0ga28gaWY6ICRkYXRhLnN2ZyAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGU0anMtYWN0aW9uLWJ1dHRvbl9faWNvbiB0YWJsZTRqcy1idXR0b25fX3N2Zy1pY29uXFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6IHN2Z1xcXCI+PC9kaXY+XFxuICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8IS0tIGtvIGlmbm90OiAkcGFyZW50c1sxXS5zaG9ydCAtLT5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInRhYmxlNGpzLWFjdGlvbi1idXR0b25fX2xhYmVsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRkYXRhLnRpdGxlLCBjc3M6IGtvLnVud3JhcCgkZGF0YS5jc3NMYWJlbCksIHN0eWxlOiB7J2Rpc3BsYXknIDogJGRhdGEudGl0bGUgPyAnYmxvY2snIDogJ25vbmUnfVxcXCIgPjwvc3Bhbj5cXG4gICAgPCEtLSAva28gLS0+XFxuPC9idXR0b24+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8IS0tIGtvIGZvcmVhY2g6IGFjdGlvbnMgLS0+XFxuPCEtLSBrbyBpZm5vdDoga28udW53cmFwKCRkYXRhLmFjdGlvbnMpIC0tPlxcbjwhLS0ga28gaWY6ICEkZGF0YS5ncm91cE5hbWUgJiYgISRwYXJlbnQuZ3JvdXBOYW1lIHx8ICRkYXRhLmdyb3VwTmFtZSA9PSAkcGFyZW50Lmdyb3VwTmFtZSAgLS0+XFxuPCEtLSBrbyBjb21wb25lbnQ6IHsgbmFtZTogJ3RhYmxlNGpzLWFjdGlvbi1pdGVtJywgcGFyYW1zOiAkZGF0YSB9IC0tPlxcbjwhLS0gL2tvIC0tPlxcbjwhLS0gL2tvIC0tPlxcbjwhLS0gL2tvIC0tPlxcbjwhLS0ga28gaWY6IGtvLnVud3JhcCgkZGF0YS5hY3Rpb25zKSAmJiBrby51bndyYXAoJGRhdGEuYWN0aW9ucykubGVuZ3RoID4gMCAtLT5cXG48IS0tIGtvIGlmOiAhJGRhdGEuZ3JvdXBOYW1lICYmICEkcGFyZW50Lmdyb3VwTmFtZSB8fCAkZGF0YS5ncm91cE5hbWUgPT0gJHBhcmVudC5ncm91cE5hbWUgIC0tPlxcbjxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLW5lc3RlZC1hY3Rpb25zIHRhYmxlNGpzLWFjdGlvbi1jb250ZXh0LWJ1dHRvblxcXCI+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWJsZTRqcy1idXR0b25fX2xhYmVsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IHRpdGxlXFxcIj48L3NwYW4+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlNGpzLW5lc3RlZC1hY3Rpb25zX19kcm9wZG93blxcXCI+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGFjdGlvbnMgLS0+XFxuICAgICAgICA8IS0tIGtvIGNvbXBvbmVudDogeyBuYW1lOiAndGFibGU0anMtYWN0aW9uLWl0ZW0nLCBwYXJhbXM6ICRkYXRhIH0gLS0+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG48IS0tIC9rbyAtLT5cXG48IS0tIC9rbyAtLT5cXG48IS0tIC9rbyAtLT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxidXR0b24gY2xhc3M9XFxcInRhYmxlNGpzLWFjdGlvbi1idXR0b24gdGFibGU0anMtYnV0dG9uLS10cmFuc3BhcmVudCB0YWJsZTRqcy1idXR0b24tdG9nZ2xlXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiXFxuICAgIGRhdGEtYmluZD1cXFwiY2xpY2s6IHRvZ2dsZSwgYXR0cjogeyB0aXRsZTogdGl0bGUgfVxcXCI+XFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJodG1sOiAkcm9vdC5pY29ucy5tb3JlX3NxXFxcIj48L2Rpdj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInRhYmxlNGpzLWFjdGlvbi1idXR0b25fX2xhYmVsXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG1vcmVUZXh0XFxcIj48L3NwYW4+XFxuPC9idXR0b24+XFxuPCEtLSBrbyBpZjogaXNPcGVuIC0tPlxcbjx1bCBjbGFzcz1cXFwidGFibGU0anMtYnV0dG9uLXRvZ2dsZV9fZHJvcGRvd24tbWVudVxcXCI+XFxuICAgIDx0YWJsZTRqcy1hY3Rpb25zIGNsYXNzPVxcXCJ0YWJsZTRqcy1jb250ZXh0LWFjdGlvbnNcXFwiIHBhcmFtcz1cXFwibW9kZWw6IGRhdGEsIG9wdGlvbnM6IHsgYWN0aW9uOiBhY3Rpb25zIH1cXFwiPlxcbiAgICA8L3RhYmxlNGpzLWFjdGlvbnM+XFxuPC91bD5cXG48IS0tIC9rbyAtLT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjwhLS0gPHN2ZyBjbGFzcz1cXFwidGFibGU0anMtYnV0dG9uX19zdmctaWNvblxcXCI+PHVzZSBkYXRhLWJpbmQ9XFxcImF0dHI6eyd4bGluazpocmVmJzonc3ByaXRlbWFwLnN2ZyNzcHJpdGUtaWNvbl8nK2tvLnVud3JhcChpZCl9XFxcIiAgeGxpbms6aHJlZj0nJz48L3VzZT48L3N2Zz4gLS0+XFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0zIDguNDM2YTEuNSAxLjUgMCAwIDEgMi4xMjEuMDA2bDkuMjY1IDkuMzE0YS44NjUuODY1IDAgMCAwIDEuMjI4IDBsOS4yNjUtOS4zMTRhMS41IDEuNSAwIDAgMSAyLjEyMS0uMDA2IDEuNSAxLjUgMCAwIDEgLjAwNiAyLjEyMWwtMTAuOTQzIDExYTEuNSAxLjUgMCAwIDEtMi4xMjYgMGwtMTAuOTQzLTExYTEuNSAxLjUgMCAwIDEgLjAwNi0yLjEyMXpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNOC45NjggMjdhMS41IDEuNSAwIDAgMSAuMDA1LTIuMTIxbDkuMzE1LTkuMjY1YS44NjcuODY3IDAgMCAwIDAtMS4yMjhsLTkuMzE1LTkuMjY1YTEuNSAxLjUgMCAwIDEtLjAwNS0yLjEyMSAxLjUgMS41IDAgMCAxIDIuMTIxLS4wMDZsMTEgMTAuOTQzYTEuNSAxLjUgMCAwIDEgMCAyLjEyNmwtMTEgMTAuOTQzYTEuNSAxLjUgMCAwIDEtMi4xMjEtLjAwNnpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMjYgOGExLjUgMS41IDAgMCAwLTIuMTIxIDBsLTExLjI2NCAxMS4yNjRhLjg2OS44NjkgMCAwIDEtMS4yMyAwbC01LjI2NC01LjI2NGExLjUgMS41IDAgMCAwLTIuMTIxIDIuMTIxbDYuOTM5IDYuOTRhMS41IDEuNSAwIDAgMCAyLjEyMiAwbDEyLjkzOS0xMi45NGExLjUgMS41IDAgMCAwIDAtMi4xMjF6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTE3LjcxNSAxNWwxMC43MjMtMTAuNzIzYTEuOTIxIDEuOTIxIDAgMCAwIDAtMi43MTUgMS45MjEgMS45MjEgMCAwIDAtMi43MTUgMGwtMTAuNzIzIDEwLjcyMy0xMC43MjMtMTAuNzIzYTEuOTIgMS45MiAwIDAgMC0yLjcxNSAyLjcxNWwxMC43MjMgMTAuNzIzLTEwLjcyMyAxMC43MjNhMS45MiAxLjkyIDAgMSAwIDIuNzE1IDIuNzE1bDEwLjcyMy0xMC43MjMgMTAuNzIzIDEwLjcyM2ExLjkyIDEuOTIgMCAxIDAgMi43MTUtMi43MTV6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTIxLjU3MyAyOWgtMTcuMzk2YTMuMTc4IDMuMTc4IDAgMCAxLTMuMTc3LTMuMTc3di0xNy4xNDZhMy4xNzggMy4xNzggMCAwIDEgMy4xNzctMy4xNzdoNy4yYTEuNSAxLjUgMCAwIDEgMS41IDEuNSAxLjUgMS41IDAgMCAxLTEuNSAxLjVoLTcuMmEuMTc4LjE3OCAwIDAgMC0uMTc3LjE3N3YxNy4xNDZhLjE3OC4xNzggMCAwIDAgLjE3Ny4xNzdoMTcuNGEuMTc4LjE3OCAwIDAgMCAuMTc4LS4xNzh2LTcuMDcyYTEuNSAxLjUgMCAwIDEgMS41LTEuNSAxLjUgMS41IDAgMCAxIDEuNSAxLjV2Ny4wNzNhMy4xNzggMy4xNzggMCAwIDEtMy4xODIgMy4xNzd6TTguMTgxIDIxLjI4M2wuNjE5LTMuNDczYS40NTQuNDU0IDAgMCAxIC43NjgtLjI0MWwyLjg1MyAyLjg1M2EuNDUzLjQ1MyAwIDAgMS0uMjQyLjc2N2wtMy40NzIuNjIxYS40NTQuNDU0IDAgMCAxLS41MjYtLjUyN3pcXFwiPjwvcGF0aD48cmVjdCB4PVxcXCIxNS40MDVcXFwiIHk9XFxcIjMuNTg1XFxcIiB3aWR0aD1cXFwiNVxcXCIgaGVpZ2h0PVxcXCIxN1xcXCIgcng9XFxcIi40OFxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMTMuNzkgLTkuMTIxKSByb3RhdGUoNDUpXFxcIj48L3JlY3Q+PHBhdGggZD1cXFwiTTI0LjkgMi41MzFoMi4yNDFhMS4zNzkgMS4zNzkgMCAwIDEgMS4zNzUgMS4zNzl2LjkxOWEuNTg5LjU4OSAwIDAgMS0uNTg5LjU4OWgtMy44MjdhLjU4OS41ODkgMCAwIDEtLjU4OS0uNTg5di0uOTE5YTEuMzc5IDEuMzc5IDAgMCAxIDEuMzg5LTEuMzc5elxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMTAuNDMgLTE3LjIzMikgcm90YXRlKDQ1KVxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0wIDMwbDMwLTMwXFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTI2LjMsNy41MzFBMS44ODMsMS44ODMsMCwwLDAsMjguMTgsNS42NDlWMS44ODNBMS44ODMsMS44ODMsMCwwLDAsMjYuMywwSDMuN0ExLjg4MywxLjg4MywwLDAsMCwxLjgyLDEuODgzYTEuODYyLDEuODYyLDAsMCwwLC4xMzkuN2wwLC4wMTFhMS44ODcsMS44ODcsMCwwLDAsLjQxMS42MmgwTDE0LjE1NywxNSwyLjM4NywyNi43N2wwLC4wMDZBMS44ODIsMS44ODIsMCwwLDAsMy43LDMwSDI2LjNhMS44ODMsMS44ODMsMCwwLDAsMS44ODMtMS44ODNWMjQuMzUxYTEuODgzLDEuODgzLDAsMCwwLTMuNzY2LDB2MS44ODNIOC4yNDlsOS45LTkuOWExLjg4MSwxLjg4MSwwLDAsMCwwLTIuNjYybC0uMDA4LS4wMDYsMC0uMDA4TDguMjQ5LDMuNzY2SDI0LjQxNFY1LjY0OUExLjg4MywxLjg4MywwLDAsMCwyNi4zLDcuNTMxWlxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0xMy4wNiAyOS4xODhhMi4wMiAyLjAyIDAgMCAxLTEuMTItLjMzMyAyLjEyNiAyLjEyNiAwIDAgMS0uOTQtMS44MjZ2LTkuMjcyYTIuMDE1IDIuMDE1IDAgMCAwLS4yODEtLjgzNWwtOS4zMTktMTIuMjQxYTEuOTk0IDEuOTk0IDAgMCAxLS4yODEtMi4xMTkgMiAyIDAgMCAxIDEuODUyLTEuMDYyaDI0LjA1OGEyLjAxNCAyLjAxNCAwIDAgMSAxLjg1NCAxLjA0NyAyLjAxMyAyLjAxMyAwIDAgMS0uMjI5IDIuMTE2bC04Ljc0MyAxMi4yMDdhMi4xOTMgMi4xOTMgMCAwIDAtLjI4NS44ODd2Ni44MjJhMy4xIDMuMSAwIDAgMS0xLjc5MSAyLjczNGwtMy44NDYgMS42NzVhMi4zMjEgMi4zMjEgMCAwIDEtLjkyOS4yem0tOC4wMzItMjQuNjg4bDguMDc3IDEwLjZhNC44NzEgNC44NzEgMCAwIDEgLjg5NSAyLjY1N3Y3Ljk1NGwyLjYzNy0xLjE0OS0uMDExLTYuOGE1LjA1OCA1LjA1OCAwIDAgMSAuODQ2LTIuNjM0bDcuNjA5LTEwLjYyOHpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI3IDI3XFxcIj48ZyBpZD1cXFwi0KHQu9C+0LlfNDRcXFwiIGRhdGEtbmFtZT1cXFwi0KHQu9C+0LkgNDRcXFwiPjxwYXRoIGQ9XFxcIk0yMy42NywwSDMuMzNBMy4zNCwzLjM0LDAsMCwwLDAsMy4zM1YyMy42N0EzLjM0LDMuMzQsMCwwLDAsMy4zMywyN0gyMy42N0EzLjM0LDMuMzQsMCwwLDAsMjcsMjMuNjdWMy4zM0EzLjM0LDMuMzQsMCwwLDAsMjMuNjcsMFpNMjQsMjMuNjdhLjMzLjMzLDAsMCwxLS4zMy4zM0gzLjMzQS4zMy4zMywwLDAsMSwzLDIzLjY3VjMuMzNBLjMzLjMzLDAsMCwxLDMuMzMsM0gyMy42N2EuMzMuMzMsMCwwLDEsLjMzLjMzWlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOS44NiwxMkgxNVY3LjE0YTEuNTEsMS41MSwwLDEsMC0zLDBWMTJINy4xNGExLjUxLDEuNTEsMCwxLDAsMCwzSDEydjQuODVhMS41MSwxLjUxLDAsMSwwLDMsMFYxNWg0Ljg1YTEuNTEsMS41MSwwLDEsMCwwLTNaXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjcgMjdcXFwiPjxnIGlkPVxcXCLQodC70L7QuV80NFxcXCIgZGF0YS1uYW1lPVxcXCLQodC70L7QuSA0NFxcXCI+PHBhdGggZD1cXFwiTTIzLjY3LDBIMy4zM0EzLjM0LDMuMzQsMCwwLDAsMCwzLjMzVjIzLjY3QTMuMzQsMy4zNCwwLDAsMCwzLjMzLDI3SDIzLjY3QTMuMzQsMy4zNCwwLDAsMCwyNywyMy42N1YzLjMzQTMuMzQsMy4zNCwwLDAsMCwyMy42NywwWk0yNCwyMy42N2EuMzMuMzMsMCwwLDEtLjMzLjMzSDMuMzNBLjMzLjMzLDAsMCwxLDMsMjMuNjdWMy4zM0EuMzMuMzMsMCwwLDEsMy4zMywzSDIzLjY3YS4zMy4zMywwLDAsMSwuMzMuMzNaXFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTIwLjIyLDYuNzhhMS44NCwxLjg0LDAsMCwwLTIuNTksMEwxMy41LDEwLjkyLDkuMzcsNi43OEExLjgzLDEuODMsMCwwLDAsNi43OCw5LjM3bDQuMTQsNC4xM0w2Ljc4LDE3LjYzYTEuODMsMS44MywwLDAsMCwyLjU5LDIuNTlsNC4xMy00LjE0LDQuMTMsNC4xNGExLjgzLDEuODMsMCwwLDAsMi41OS0yLjU5TDE2LjA4LDEzLjVsNC4xNC00LjEzQTEuODQsMS44NCwwLDAsMCwyMC4yMiw2Ljc4WlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI3IDI3XFxcIj48ZyBpZD1cXFwi0KHQu9C+0LlfMjNcXFwiIGRhdGEtbmFtZT1cXFwi0KHQu9C+0LkgMjNcXFwiPjxwYXRoIGQ9XFxcIk0yMy42NywwSDMuMzNBMy4zNCwzLjM0LDAsMCwwLDAsMy4zM1YyMy42N0EzLjM0LDMuMzQsMCwwLDAsMy4zMywyN0gyMy42N0EzLjM0LDMuMzQsMCwwLDAsMjcsMjMuNjdWMy4zM0EzLjM0LDMuMzQsMCwwLDAsMjMuNjcsMFpNMjQsMjMuNjdhLjMzLjMzLDAsMCwxLS4zMy4zM0gzLjMzQS4zMy4zMywwLDAsMSwzLDIzLjY3VjMuMzNBLjMzLjMzLDAsMCwxLDMuMzMsM0gyMy42N2EuMzMuMzMsMCwwLDEsLjMzLjMzWlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0xOCw1LjIxSDlBMi4zMiwyLjMyLDAsMCwwLDYuNjUsNy41MlYxOS43M2EyLjA4LDIuMDgsMCwwLDAsMi4wNiwyLjA2QTIuMDcsMi4wNywwLDAsMCwxMCwyMS4zMWwzLjQ4LTIuOUwxNywyMS4zMWEyLjA2LDIuMDYsMCwwLDAsMy4zNy0xLjU4VjcuNTJBMi4zMiwyLjMyLDAsMCwwLDE4LDUuMjFabS0uNDMsMTMuMDYtMi44LTIuMzNhMiwyLDAsMCwwLTIuNjIsMGwtMi44LDIuMzNWOGg4LjIyWlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48Y2lyY2xlIGN4PVxcXCIxNVxcXCIgY3k9XFxcIjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE1XFxcIiBjeT1cXFwiMTVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjxjaXJjbGUgY3g9XFxcIjE1XFxcIiBjeT1cXFwiMjVcXFwiIHI9XFxcIjNcXFwiPjwvY2lyY2xlPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0xMC41IDEzLjVoLTZhMyAzIDAgMCAxLTMtM3YtNmEzIDMgMCAwIDEgMy0zaDZhMyAzIDAgMCAxIDMgM3Y2YTMgMyAwIDAgMS0zIDN6bS02LTEwYTEgMSAwIDAgMC0xIDF2NmExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDAtMS0xek0yNS41IDEzLjVoLTZhMyAzIDAgMCAxLTMtM3YtNmEzIDMgMCAwIDEgMy0zaDZhMyAzIDAgMCAxIDMgM3Y2YTMgMyAwIDAgMS0zIDN6bS02LTEwYTEgMSAwIDAgMC0xIDF2NmExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDAtMS0xek0xMC41IDI4LjVoLTZhMyAzIDAgMCAxLTMtM3YtNmEzIDMgMCAwIDEgMy0zaDZhMyAzIDAgMCAxIDMgM3Y2YTMgMyAwIDAgMS0zIDN6bS02LTEwYTEgMSAwIDAgMC0xIDF2NmExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDAtMS0xek0yNS41IDI4LjVoLTZhMyAzIDAgMCAxLTMtM3YtNmEzIDMgMCAwIDEgMy0zaDZhMyAzIDAgMCAxIDMgM3Y2YTMgMyAwIDAgMS0zIDN6bS02LTEwYTEgMSAwIDAgMC0xIDF2NmExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMXYtNmExIDEgMCAwIDAtMS0xelxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0zLjIwOS43NUgyMC42NzhhMy4yLDMuMiwwLDAsMSwzLjIwOSwzLjE3N1Y1Ljc1aDIuOTM2QTMuMTgsMy4xOCwwLDAsMSwzMCw4LjkyN1YyNi4wNzNhMy4xOCwzLjE4LDAsMCwxLTMuMTc3LDMuMTc3SDkuMzIyYTMuMiwzLjIsMCwwLDEtMy4yMDktMy4xNzdWMjQuMjVoLTIuOUEzLjIsMy4yLDAsMCwxLDAsMjEuMDczVjMuOTI3QTMuMiwzLjIsMCwwLDEsMy4yMDkuNzVabTIzLjU4MiwyNS41QS4yLjIsMCwwLDAsMjcsMjYuMDczVjguOTI3YS4yLjIsMCwwLDAtLjIwOS0uMTc3SDkuNDI3YS4xNzguMTc4LDAsMCwwLS4xNzcuMTc3VjI2LjA3M2EuMTc4LjE3OCwwLDAsMCwuMTc3LjE3N1pNMywyMS4wNzNhLjIuMiwwLDAsMCwuMjA5LjE3N0g2LjI1VjguOTI3QTMuMTgsMy4xOCwwLDAsMSw5LjQyNyw1Ljc1aDExLjQ2VjMuOTI3YS4yLjIsMCwwLDAtLjIwOS0uMTc3SDMuMjA5QS4yLjIsMCwwLDAsMywzLjkyN1pcXFwiIHN0eWxlPVxcXCJmaWxsOiMwOTJhM2FcXFwiPjwvcGF0aD48cmVjdCB4PVxcXCIxMS41XFxcIiB5PVxcXCIxMC44MjNcXFwiIHdpZHRoPVxcXCIxM1xcXCIgaGVpZ2h0PVxcXCIzXFxcIiByeD1cXFwiMS41XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgzNiAyNC42NDUpIHJvdGF0ZSgtMTgwKVxcXCI+PC9yZWN0PjxyZWN0IHg9XFxcIjExLjVcXFwiIHk9XFxcIjE1LjgyM1xcXCIgd2lkdGg9XFxcIjEzXFxcIiBoZWlnaHQ9XFxcIjNcXFwiIHJ4PVxcXCIxLjVcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDM2IDM0LjY0NSkgcm90YXRlKDE4MClcXFwiIHN0eWxlPVxcXCJmaWxsOiMwOTJhM2FcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxMS41XFxcIiB5PVxcXCIyMC44MjNcXFwiIHdpZHRoPVxcXCIxM1xcXCIgaGVpZ2h0PVxcXCIzXFxcIiByeD1cXFwiMS41XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgzNiA0NC42NDUpIHJvdGF0ZSgxODApXFxcIj48L3JlY3Q+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTI4LjI1IDI1LjYyOWwtNy4yODItNy4yODJhMTAuOTg3IDEwLjk4NyAwIDEgMC0yLjA0OSAyLjE5M2w3LjIxIDcuMjFhMS41IDEuNSAwIDEgMCAyLjEyMS0yLjEyMXptLTE2LjI1LTUuNjI5YTggOCAwIDEgMSA4LTggOC4wMDkgOC4wMDkgMCAwIDEtOCA4elxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0xOS42ODEgMTEuNTE4aDQuOTM4djEuMjgyaC02Ljg4MXYtMS4wNDFsNC43OC02LjkwNmgtNC43NDh2LTEuMjk1aDYuN3YxLjAxNXpNMjMuMzQ0IDIyLjY0N2gtMy41OGwtLjc1IDIuMTUzaC0xLjY2OWwzLjQ5MS05LjI0MmgxLjQ0MWwzLjUgOS4yNDJoLTEuNjc3em0tMy4xMy0xLjI5NGgyLjY3OWwtMS4zNC0zLjgzNHpNMTQuODA1IDE4LjY4OWExLjI0OSAxLjI0OSAwIDAgMC0xLjc2NyAwbC0yLjE1NiAyLjE1NnYtMTYuMDI5YTEuMjUgMS4yNSAwIDAgMC0yLjUgMHYxNi4wMThsLTIuMTItMi4xMmExLjI0OCAxLjI0OCAwIDAgMC0xLjc2NiAwbC0uMDEzLjAxM2ExLjI0OCAxLjI0OCAwIDAgMCAwIDEuNzY2bDQuMjc2IDQuMjc2YTEuMjQ5IDEuMjQ5IDAgMCAwIDEuNzY1IDBsLjAxMy0uMDEzYS44OTMuODkzIDAgMCAwIC4wNi0uMDkxbDQuMjA4LTQuMjA4YTEuMjQ5IDEuMjQ5IDAgMCAwIDAtMS43Njh6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTIzLjM0NCAxMC42NDdoLTMuNThsLS43NSAyLjE1M2gtMS42NjlsMy40OTEtOS4yNDJoMS40NDFsMy41IDkuMjQyaC0xLjY3N3ptLTMuMTMtMS4yOTRoMi42NzlsLTEuMzQtMy44MzR6TTE5LjY4MSAyMy41MThoNC45Mzh2MS4yODJoLTYuODgxdi0xLjA0MWw0Ljc4LTYuOTA2aC00Ljc0OHYtMS4zaDYuN3YxLjAxNXpNMTQuODA1IDE4LjY5YTEuMjQ5IDEuMjQ5IDAgMCAwLTEuNzY3IDBsLTIuMTU2IDIuMTU1di0xNi4wMjlhMS4yNSAxLjI1IDAgMCAwLTIuNSAwdjE2LjAxOWwtMi4xMi0yLjEyMWExLjI1IDEuMjUgMCAwIDAtMS43NjYgMGwtLjAxMy4wMTNhMS4yNDggMS4yNDggMCAwIDAgMCAxLjc2Nmw0LjI3NiA0LjI3NmExLjI0OSAxLjI0OSAwIDAgMCAxLjc2NSAwbC4wMTMtLjAxM2ExIDEgMCAwIDAgLjA2LS4wOWw0LjIwOC00LjIwOWExLjI0OCAxLjI0OCAwIDAgMCAwLTEuNzY3elxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxnIGlkPVxcXCJhXFxcIj48L2c+PGcgaWQ9XFxcImJcXFwiPjwvZz48ZyBpZD1cXFwiY1xcXCI+PC9nPjxnIGlkPVxcXCJkXFxcIj48L2c+PGcgaWQ9XFxcImVcXFwiPjwvZz48ZyBpZD1cXFwiZlxcXCI+PC9nPjxnIGlkPVxcXCJnXFxcIj48L2c+PGcgaWQ9XFxcImhcXFwiPjwvZz48ZyBpZD1cXFwiaVxcXCI+PC9nPjxnIGlkPVxcXCJqXFxcIj48L2c+PGcgaWQ9XFxcImtcXFwiPjwvZz48ZyBpZD1cXFwibFxcXCI+PC9nPjxnIGlkPVxcXCJtXFxcIj48L2c+PGcgaWQ9XFxcIm5cXFwiPjwvZz48ZyBpZD1cXFwib1xcXCI+PC9nPjxnIGlkPVxcXCJwXFxcIj48L2c+PGcgaWQ9XFxcInFcXFwiPjwvZz48ZyBpZD1cXFwiclxcXCI+PC9nPjxnIGlkPVxcXCJzXFxcIj48L2c+PGcgaWQ9XFxcInRcXFwiPjwvZz48ZyBpZD1cXFwidVxcXCI+PC9nPjxnIGlkPVxcXCJ2XFxcIj48L2c+PGcgaWQ9XFxcIndcXFwiPjwvZz48ZyBpZD1cXFwieFxcXCI+PC9nPjxnIGlkPVxcXCJ5XFxcIj48L2c+PGcgaWQ9XFxcImEmI3g2MDtcXFwiPjwvZz48ZyBpZD1cXFwiYWFcXFwiPjwvZz48ZyBpZD1cXFwiYWJcXFwiPjwvZz48ZyBpZD1cXFwiYWNcXFwiPjwvZz48ZyBpZD1cXFwiYWRcXFwiPjwvZz48ZyBpZD1cXFwiYWVcXFwiPjwvZz48ZyBpZD1cXFwiYWZcXFwiPjwvZz48ZyBpZD1cXFwiYWdcXFwiPjwvZz48ZyBpZD1cXFwiYWhcXFwiPjwvZz48ZyBpZD1cXFwiYWlcXFwiPjwvZz48ZyBpZD1cXFwiYWpcXFwiPjwvZz48ZyBpZD1cXFwiYWtcXFwiPjwvZz48ZyBpZD1cXFwiYWxcXFwiPjwvZz48ZyBpZD1cXFwiYW1cXFwiPjwvZz48ZyBpZD1cXFwiYW5cXFwiPjwvZz48ZyBpZD1cXFwiYW9cXFwiPjwvZz48ZyBpZD1cXFwiYXBcXFwiPjwvZz48ZyBpZD1cXFwiYXFcXFwiPjwvZz48ZyBpZD1cXFwiYXJcXFwiPjwvZz48ZyBpZD1cXFwiYXNcXFwiPjwvZz48ZyBpZD1cXFwiYXRcXFwiPjwvZz48ZyBpZD1cXFwiYXVcXFwiPjwvZz48ZyBpZD1cXFwiYXZcXFwiPjwvZz48ZyBpZD1cXFwiYXdcXFwiPjwvZz48ZyBpZD1cXFwiYXhcXFwiPjwvZz48ZyBpZD1cXFwiYXlcXFwiPjwvZz48ZyBpZD1cXFwiYiYjeDYwO1xcXCI+PC9nPjxnIGlkPVxcXCJiYVxcXCI+PC9nPjxnIGlkPVxcXCJiYlxcXCI+PC9nPjxnIGlkPVxcXCJiY1xcXCI+PC9nPjxnIGlkPVxcXCJiZFxcXCI+PC9nPjxnIGlkPVxcXCJiZVxcXCI+PC9nPjxnIGlkPVxcXCJiZlxcXCI+PC9nPjxnIGlkPVxcXCJiZ1xcXCI+PC9nPjxnIGlkPVxcXCJiaFxcXCI+PHBhdGggZD1cXFwiTTI1LjczLDFINC4yN2MtMS44MSwwLTMuMjcsMS40Ny0zLjI3LDMuMjdWMjUuNzNjMCwxLjgxLDEuNDcsMy4yNywzLjI3LDMuMjdIMjUuNzNjMS44MSwwLDMuMjctMS40NywzLjI3LTMuMjdWNC4yN2MwLTEuODEtMS40Ny0zLjI3LTMuMjctMy4yN1pNOSwyN0g0LjI3Yy0uNywwLTEuMjctLjU3LTEuMjctMS4yN3YtNC4yM2g2djUuNVptMC03LjVIM3YtNS41aDZ2NS41Wm0wLTcuNUgzVjdoNnY1Wm05LTNWMjdoLTdWN2g3djJabTksMTYuNzNjMCwuNy0uNTcsMS4yNy0xLjI3LDEuMjdoLTUuNzN2LTUuNWg3djQuMjNabTAtNi4yM2gtN3YtNS41aDd2NS41Wm0wLTcuNWgtN1Y3aDd2NVpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4vYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi9wcm9wZXJ0eVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpb24ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhY3Rpb246ICgpID0+IHZvaWQ7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgdmlzaWJsZT86IGJvb2xlYW47XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIHN2Zz86IHN0cmluZztcbiAgICBjb250YWluZXI/OiBzdHJpbmc7XG4gICAgY3NzQ2xhc3Nlcz86IHN0cmluZztcbiAgICBjc3NJbWFnZT86IHN0cmluZztcbiAgICBjc3NMYWJlbD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEFjdGlvbiBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihzb3VyY2U/OiBJQWN0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSB8fCB7fSkuZm9yRWFjaChrZXkgPT4gdGhpc1trZXldID0gc291cmNlW2tleV0pO1xuICAgIH1cbiAgICBAcHJvcGVydHkoKSBuYW1lOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgYWN0aW9uOiAoKSA9PiB2b2lkO1xuICAgIEBwcm9wZXJ0eSgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgdmlzaWJsZTogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSBlbmFibGVkOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSgpIGFjdGl2ZTogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSBpY29uOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgc3ZnOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgY29udGFpbmVyOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgY3NzQ2xhc3Nlczogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGNzc0ltYWdlOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgY3NzTGFiZWw6IHN0cmluZztcbn0iLCJpbXBvcnQgXCIuL2FjdGlvbnMuc2Nzc1wiO1xuXG4iLCJpbXBvcnQgeyBpc0VxdWFsIH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBEZXBlbmRlbmNpZXMgfSBmcm9tIFwiLi9kZXBlbmRlbmNpZXNcIjtcblxuZXhwb3J0IGNsYXNzIEhhc2hUYWJsZVN0b3JhZ2Uge1xuICAgIHByb3RlY3RlZCBoYXNoID0ge307XG4gICAgcHVibGljIG93bmVyOiBhbnk7XG4gICAgcHVibGljIGdldFZhbHVlKG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5oYXNoW25hbWVdO1xuICAgICAgICBpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIHNldFZhbHVlKG5hbWU6IHN0cmluZywgdmFsOiBhbnkpIHtcbiAgICAgICAgdGhpcy5oYXNoW25hbWVdID0gdmFsO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJhc2Uge1xuICAgIHByaXZhdGUgcHJvcGVydHlWYWx1ZUxpc3RuZXJzOiB7W3Byb3BlcnR5TmFtZTogc3RyaW5nXToge1trZXk6IHN0cmluZ106IChvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55KSA9PiB2b2lkIH19ID0ge307XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjdXJyZW50RGVwZW5kZW5jaXM6IERlcGVuZGVuY2llcyA9IHVuZGVmaW5lZDtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlUHJvcGVydGllc1N0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgSGFzaFRhYmxlU3RvcmFnZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGZpbmlzaENvbGxlY3REZXBlbmRlbmNpZXMoKTogRGVwZW5kZW5jaWVzIHtcbiAgICAgIGNvbnN0IGRlcHMgPSBCYXNlLmN1cnJlbnREZXBlbmRlbmNpcztcbiAgICAgIEJhc2UuY3VycmVudERlcGVuZGVuY2lzID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIGRlcHM7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgc3RhcnRDb2xsZWN0RGVwZW5kZW5jaWVzKHVwZGF0ZXI6ICgpID0+IHZvaWQsIHRhcmdldDogQmFzZSwgcHJvcGVydHk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgaWYgKEJhc2UuY3VycmVudERlcGVuZGVuY2lzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdCB0byBjb2xsZWN0IG5lc3RlZCBkZXBlbmRlbmNpZXMuIE5lc3RlZCBkZXBlbmRlbmNpZXMgYXJlIG5vdCBzdXBwb3J0ZWQuXCIpO1xuICAgICAgfVxuICAgICAgQmFzZS5jdXJyZW50RGVwZW5kZW5jaXMgPSBuZXcgRGVwZW5kZW5jaWVzKHVwZGF0ZXIsIHRhcmdldCwgcHJvcGVydHkpO1xuICAgIH1cbiAgICBwcml2YXRlIHN0YXRpYyBjb2xsZWN0RGVwZW5kZW5jeSh0YXJnZXQ6IEJhc2UsIHByb3BlcnR5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmIChCYXNlLmN1cnJlbnREZXBlbmRlbmNpcyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICBCYXNlLmN1cnJlbnREZXBlbmRlbmNpcy5hZGREZXBlbmRlbmN5KHRhcmdldCwgcHJvcGVydHkpO1xuICAgIH1cbiAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlID0gQmFzZS5jcmVhdGVQcm9wZXJ0aWVzU3RvcmFnZSgpKSB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5vd25lciA9IHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUHJvcGVydHlWYWx1ZUNoYW5nZWQocHJvcGVydHlOYW1lOiBzdHJpbmcsIG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgbGV0IHByb3BlcnR5TGlzdG5lcnMgPSB0aGlzLnByb3BlcnR5VmFsdWVMaXN0bmVyc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZighIXByb3BlcnR5TGlzdG5lcnMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnR5TGlzdG5lcnMpLmZvckVhY2goa2V5ID0+IHByb3BlcnR5TGlzdG5lcnNba2V5XShvbGRWYWx1ZSwgbmV3VmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRQcm9wZXJ0eVZhbHVlQ29yZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gICAgICAgIEJhc2UuY29sbGVjdERlcGVuZGVuY3kodGhpcywgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnN0b3JhZ2UuZ2V0VmFsdWUocHJvcGVydHlOYW1lLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXRQcm9wZXJ0eVZhbHVlQ29yZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0VmFsdWUocHJvcGVydHlOYW1lLCBuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eVZhbHVlQ29yZShwcm9wZXJ0eU5hbWUsIGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZTogc3RyaW5nLCBuZXdWYWx1ZTogYW55LCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHlOYW1lLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICBpZighaXNFcXVhbChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5VmFsdWVDb3JlKHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5vblByb3BlcnR5VmFsdWVDaGFuZ2VkKHByb3BlcnR5TmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlclByb3BlcnR5VmFsdWVMaXN0bmVyKHByb3BlcnR5TmFtZTogc3RyaW5nLCBsaXN0bmVyOiAob2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSkgPT4gdm9pZCwga2V5OiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eUxpc3RuZXJzID0gdGhpcy5wcm9wZXJ0eVZhbHVlTGlzdG5lcnNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYoIXByb3BlcnR5TGlzdG5lcnMpIHtcbiAgICAgICAgICAgIHByb3BlcnR5TGlzdG5lcnMgPSB7fVxuICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eVZhbHVlTGlzdG5lcnNbcHJvcGVydHlOYW1lXSA9IHByb3BlcnR5TGlzdG5lcnM7XG4gICAgICAgIH1cbiAgICAgICAgcHJvcGVydHlMaXN0bmVyc1trZXldID0gbGlzdG5lcjtcbiAgICB9XG4gICAgcHVibGljIHVuUmVnaXN0ZXJQcm9wZXJ0eVZhbHVlTGlzdG5lcihwcm9wZXJ0eU5hbWU6IHN0cmluZywga2V5OiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eUxpc3RuZXJzID0gdGhpcy5wcm9wZXJ0eVZhbHVlTGlzdG5lcnNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYoISFwcm9wZXJ0eUxpc3RuZXJzKSB7XG4gICAgICAgICAgICBkZWxldGUgcHJvcGVydHlMaXN0bmVyc1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2VcIjtcblxuZXhwb3J0IGNsYXNzIERlcGVuZGVuY2llcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgRGVwZW5kZW5jaWVzQ291bnQgPSAwO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjdXJyZW50RGVwZW5kZW5jeTogKCkgPT4gdm9pZCwgcHVibGljIHRhcmdldDogQmFzZSwgcHVibGljIHByb3BlcnR5OiBzdHJpbmcpIHtcbiAgICB9XG4gICAgZGVwZW5kZW5jaWVzOiBBcnJheTx7IG9iajogQmFzZSwgcHJvcDogc3RyaW5nLCBpZDogc3RyaW5nIH0+ID0gW107XG4gICAgaWQ6IHN0cmluZyA9IFwiXCIgKyAoKytEZXBlbmRlbmNpZXMuRGVwZW5kZW5jaWVzQ291bnQpO1xuICAgIGFkZERlcGVuZGVuY3kodGFyZ2V0OiBCYXNlLCBwcm9wZXJ0eTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy50YXJnZXQgPT09IHRhcmdldCAmJiB0aGlzLnByb3BlcnR5ID09PSBwcm9wZXJ0eSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMuZGVwZW5kZW5jaWVzLnNvbWUoZGVwZW5kZW5jeSA9PiBkZXBlbmRlbmN5Lm9iaiA9PT0gdGFyZ2V0ICYmIGRlcGVuZGVuY3kucHJvcCA9PT0gcHJvcGVydHkpKVxuICAgICAgICByZXR1cm47XG4gIFxuICAgICAgdGhpcy5kZXBlbmRlbmNpZXMucHVzaCh7XG4gICAgICAgIG9iajogdGFyZ2V0LFxuICAgICAgICBwcm9wOiBwcm9wZXJ0eSxcbiAgICAgICAgaWQ6IHRoaXMuaWRcbiAgICAgIH0pO1xuICAgICAgdGFyZ2V0LnJlZ2lzdGVyUHJvcGVydHlWYWx1ZUxpc3RuZXIocHJvcGVydHksIHRoaXMuY3VycmVudERlcGVuZGVuY3ksIHRoaXMuaWQpO1xuICBcbiAgICB9XG4gICAgZGlzcG9zZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGVwZW5kZW5jaWVzLmZvckVhY2goZGVwZW5kZW5jeSA9PiB7XG4gICAgICAgIGRlcGVuZGVuY3kub2JqLnVuUmVnaXN0ZXJQcm9wZXJ0eVZhbHVlTGlzdG5lcihkZXBlbmRlbmN5LnByb3AsIGRlcGVuZGVuY3kuaWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIFxuICBleHBvcnQgY2xhc3MgQ29tcHV0ZWRVcGRhdGVyPFQgPSBhbnk+IHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENvbXB1dGVkVXBkYXRlclR5cGUgPSBcIl9fZGVwZW5kZW5jeV9jb21wdXRlZFwiO1xuICAgIHB1YmxpYyBzdGF0aWMgQ29sbGVjdERlcGVuZGVuY2llczxVID0gYW55PihvYmo6IEJhc2UsIGNvbXB1dGVkVXBkYXRlcjogQ29tcHV0ZWRVcGRhdGVyPFU+LCBwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IFUge1xuICAgICAgQmFzZS5zdGFydENvbGxlY3REZXBlbmRlbmNpZXMoKCkgPT4gb2JqW3Byb3BlcnR5TmFtZV0gPSBjb21wdXRlZFVwZGF0ZXIudXBkYXRlcigpLCBvYmosIHByb3BlcnR5TmFtZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBjb21wdXRlZFVwZGF0ZXIudXBkYXRlcigpO1xuICAgICAgY29uc3QgZGVwZW5kZW5jaWVzID0gQmFzZS5maW5pc2hDb2xsZWN0RGVwZW5kZW5jaWVzKCk7XG4gICAgICBjb21wdXRlZFVwZGF0ZXIuc2V0RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llcyk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3VwZGF0ZXI6ICgpID0+IFQpIHtcbiAgICB9XG4gICAgcmVhZG9ubHkgdHlwZSA9IENvbXB1dGVkVXBkYXRlci5Db21wdXRlZFVwZGF0ZXJUeXBlO1xuICAgIHB1YmxpYyBnZXQgdXBkYXRlcigpOiAoKSA9PiBUIHtcbiAgICAgIHJldHVybiB0aGlzLl91cGRhdGVyO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0RGVwZW5kZW5jaWVzKGRlcGVuZGVuY2llczogRGVwZW5kZW5jaWVzKTogdm9pZCB7XG4gICAgICB0aGlzLmNsZWFyRGVwZW5kZW5jaWVzKCk7XG4gICAgICB0aGlzLmRlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llcztcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldERlcGVuZGVuY2llcygpOiBEZXBlbmRlbmNpZXMge1xuICAgICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jaWVzO1xuICAgIH1cbiAgICBwdWJsaWMgb2JzZXJ2ZSh0YXJnZXQ6IEJhc2UsIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XG4gICAgICBDb21wdXRlZFVwZGF0ZXIuQ29sbGVjdERlcGVuZGVuY2llcyh0YXJnZXQsIHRoaXMsIHByb3BlcnR5TmFtZSk7XG4gICAgfVxuICAgIHByaXZhdGUgY2xlYXJEZXBlbmRlbmNpZXMoKSB7XG4gICAgICBpZiAodGhpcy5kZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMuZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llcyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gICAgZGlzcG9zZSgpOiBhbnkge1xuICAgICAgdGhpcy5jbGVhckRlcGVuZGVuY2llcygpO1xuICAgIH1cbiAgfVxuICAiLCJpbXBvcnQgXCIuL2Ryb3Bkb3duLWFjdGlvbnMuc2Nzc1wiO1xuIiwiaW1wb3J0IHsgQ29tcHV0ZWRVcGRhdGVyIH0gZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BlcnR5RGVjb3JhdG9yT3B0aW9ucyB7XG4gICAgZGVmYXVsdFZhbHVlPzogYW55O1xuICAgIG9uU2V0PzogKHZhbDogYW55LCB0YXJnZXQ6IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BlcnR5KG9wdGlvbnM/OiBJUHJvcGVydHlEZWNvcmF0b3JPcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHByb2Nlc3NDb21wdXRlZFVwZGF0ZXIgPSAob2JqOiBhbnksIHZhbDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoISF2YWwgJiYgdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJiB2YWwudHlwZSA9PT0gQ29tcHV0ZWRVcGRhdGVyLkNvbXB1dGVkVXBkYXRlclR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ29tcHV0ZWRVcGRhdGVyLkNvbGxlY3REZXBlbmRlbmNpZXMob2JqLCB2YWwsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBnZXREZWZhdWx0VmFsdWUgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGVmYXVsdFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKCEhb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IG9wdGlvbnMuZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBBcnJheS5pc0FycmF5KGRlZmF1bHRWYWx1ZSkgPyBbXS5jb25jYXQoZGVmYXVsdFZhbHVlKSA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHlWYWx1ZShrZXksIGdldERlZmF1bHRWYWx1ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWw6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcHJvY2Vzc0NvbXB1dGVkVXBkYXRlcih0aGlzLCB2YWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHlWYWx1ZShrZXksIG5ld1ZhbHVlLCBnZXREZWZhdWx0VmFsdWUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKCEhb3B0aW9ucyAmJiBvcHRpb25zLm9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25TZXQobmV3VmFsdWUsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IExvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvblwiO1xuXG50eXBlICBUT3BlcmF0aW9uID0gXCJFUVwiIHwgXCJORVFcIiB8IFwiR1wiIHwgXCJMXCIgfCBcIkdFUVwiIHwgXCJMRVFcIiB8IFwiSVNOXCIgfCBcIklTTk5cIiB8IFwiQ1wiO1xuZXhwb3J0IGludGVyZmFjZSBJRmluZE9wZXJhdGlvbiB7XG4gICAgb3A6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgZnVuYz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmluZENvbXBhcmUge1xuICAgIGZpZWxkOiBzdHJpbmc7XG4gICAgb3A6IFRPcGVyYXRpb247XG4gICAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmluZE9wZXJhbmQge1xuICAgIGxldmVsdXA6IGJvb2xlYW47XG4gICAgb3BlcmFuZDoge1xuICAgICAgICBmaWVsZDogc3RyaW5nLFxuICAgICAgICBvcDogVE9wZXJhdGlvbixcbiAgICAgICAgdmFsdWU6IHN0cmluZyB8IE51bWJlcixcbiAgICAgICAgcGF0aD86IHN0cmluZ1tdLFxuICAgICAgICBzZWFyY2hfaW5fa2V5PzogYm9vbGVhbixcbiAgICAgICAgbV9vcmRlcj86IGJvb2xlYW4sXG4gICAgICAgIGZ1bmM/OiBzdHJpbmcsXG4gICAgfSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWdncmVnYXRlIHtcbiAgICBmdW5jOiBzdHJpbmcsXG4gICAgZmllbGQ6IHN0cmluZyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRmluZExvZ2ljIHtcbiAgICBzdHJpY3Q6IGJvb2xlYW47XG4gICAgb3BlcmFuZHM6IElGaW5kT3BlcmFuZFtdO1xuICAgIGFnZ3JlZ2F0ZT86IElBZ2dyZWdhdGVbXTtcbn1cblxuZXhwb3J0IHZhciBvcGVyYXRpb25zTWFwOiB7IFtpbmRleDogc3RyaW5nXTogSUZpbmRPcGVyYXRpb25bXSB9ID0ge307XG5cbnZhciBkZWZhdWx0T3BlcmF0aW9uc01hcCA9IHtcbiAgICBzdHJpbmc6IFtcbiAgICAgICAge29wOiBcIkNcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmNvbnRhaW5zXCIpfSxcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbnVsbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05OXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc25vdG51bGxcIil9LFxuICAgIF0sXG4gICAgZGF0ZTogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmRhdGVlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJHXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlZ3JlYXRlclwiKX0sXG4gICAgICAgIHtvcDogXCJMXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlbGVzc1wiKX0sXG4gICAgICAgIHtvcDogXCJJU05cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbnVsbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05OXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc25vdG51bGxcIil9LFxuICAgIF0sXG4gICAgZGF0ZXRpbWU6IFtcbiAgICAgICAge29wOiBcIkdcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmRhdGVncmVhdGVyXCIpfSxcbiAgICAgICAge29wOiBcIkxcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmRhdGVsZXNzXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbiAgICBpbnRlZ2VyOiBbXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJub3RlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJHXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyXCIpfSxcbiAgICAgICAge29wOiBcIkxcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmxlc3NcIil9LFxuICAgICAgICB7b3A6IFwiR0VRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTEVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIG51bWVyaWM6IFtcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJORVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcm5vdGVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIkdcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmdyZWF0ZXJcIil9LFxuICAgICAgICB7b3A6IFwiTFwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybGVzc1wiKX0sXG4gICAgICAgIHtvcDogXCJHRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmdyZWF0ZXJlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJMRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmxlc3NlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbnVsbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05OXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc25vdG51bGxcIil9LFxuICAgIF0sXG4gICAgYm9vbDogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICBdLFxuICAgIG1vbmV5OiBbXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJub3RlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJHXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyXCIpfSxcbiAgICAgICAge29wOiBcIkxcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmxlc3NcIil9LFxuICAgICAgICB7b3A6IFwiR0VRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTEVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIHJhZGlvYnV0dG9uOiBbXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxufVxuT2JqZWN0LmtleXMoZGVmYXVsdE9wZXJhdGlvbnNNYXApLmZvckVhY2goa2V5ID0+IG9wZXJhdGlvbnNNYXBba2V5XSA9IGRlZmF1bHRPcGVyYXRpb25zTWFwW2tleV0pO1xuIiwiZXhwb3J0IGNvbnN0IGFkZCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9pdGVtLWFkZC5zdmcnKTtcbmV4cG9ydCBjb25zdCBlcXVhbCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9lcXVhbC5zdmcnKTtcbmV4cG9ydCBjb25zdCB0YWJsZSA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl90YWJsZS1tZXJnZS5zdmcnKTtcbmV4cG9ydCBjb25zdCBzYXZlID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2l0ZW0tc2F2ZS5zdmcnKTtcbmV4cG9ydCBjb25zdCBkZWwgPSByZXF1aXJlKCcuL2ljb25zL2ljb25faXRlbS1kZWxldGUuc3ZnJyk7XG5leHBvcnQgY29uc3QgcGFzdGUgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fcGFzdGUuc3ZnJyk7XG5leHBvcnQgY29uc3QgbW9yZV9zcSA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9tb3JlX3NxLnN2ZycpO1xuZXhwb3J0IGNvbnN0IGNoZWNrID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2NoZWNrLnN2ZycpO1xuZXhwb3J0IGNvbnN0IHNvcnR1cCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9zb3J0LXVwLnN2ZycpO1xuZXhwb3J0IGNvbnN0IHNvcnRkb3duID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX3NvcnQtZG93bi5zdmcnKTtcbmV4cG9ydCBjb25zdCBmaWx0ZXIgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fZmlsdGVyLnN2ZycpO1xuZXhwb3J0IGNvbnN0IG1vcmUgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fbW9yZS5zdmcnKTtcbmV4cG9ydCBjb25zdCBlZGl0ID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2VkaXQuc3ZnJyk7XG5leHBvcnQgY29uc3QgYXJyb3dyaWdodCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9hcnJvdy1yaWdodC5zdmcnKTtcbmV4cG9ydCBjb25zdCBzZWFyY2ggPSByZXF1aXJlKCcuL2ljb25zL2ljb25fc2VhcmNoLnN2ZycpO1xuZXhwb3J0IGNvbnN0IGNyb3NzID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2Nyb3NzLnN2ZycpO1xuZXhwb3J0IGNvbnN0IGFycm93ZG93biA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9hcnJvdy1kb3duLnN2ZycpO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vY29yZS9hY3Rpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvYWN0aW9uc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29yZS9kcm9wZG93bi1hY3Rpb25zXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL2ZpbmRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jZWxsXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jb2x1bW5cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL3N1bW1hcnlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NvbHVtbi1maWx0ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NvbHVtbi1maWx0ZXItaXRlbVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvZmlsdGVyLWRlZmF1bHRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2ZpbHRlci1zZWxlY3RcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvbnVtYmVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9ib29sXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL2FycmF5LWRhdGEtcHJvdmlkZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxzL3JlbW90ZS1kYXRhLXByb3ZpZGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy91dGlsc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vaWNvblwiXG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IEJhc2UsIEhhc2hUYWJsZVN0b3JhZ2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gXCIuLi90YWJsZVwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jZWxsXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jZWxsLWVkaXRvclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY2VsbC12aWV3ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL3N1bW1hcnlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL3NlYXJjaFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvZmlsdGVyLWRlZmF1bHRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NvbHVtbi1maWx0ZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NvbHVtbi1maWx0ZXItaXRlbVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvZmlsdGVyLXNlbGVjdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vd2lkZ2V0cy9hY3Rpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dpZGdldHMvYWN0aW9uc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vd2lkZ2V0cy9kcm9wZG93bi1hY3Rpb25zXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93aWRnZXRzL2ljb25cIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvYm9vbC1jZWxsLWVkaXRvclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvYm9vbC1jZWxsLXZpZXdlclwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi5cIjtcblxuZXhwb3J0IGNvbnN0IEtub2Nrb3V0SW5zdGFuY2UgPSBrbztcblxuZXhwb3J0IGNsYXNzIEtub2Nrb3V0SGFzaFRhYmxlU3RvcmFnZSBleHRlbmRzIEhhc2hUYWJsZVN0b3JhZ2Uge1xuICAgIHByaXZhdGUgbGlua0FycmF5VG9PYnNlcnZhYmxlKG9ic2VydmFibGVBcnJheTogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8YW55Pikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXS5jb25jYXQob2JzZXJ2YWJsZUFycmF5KCkpO1xuICAgICAgICBbXCJwb3BcIiwgXCJwdXNoXCIsIFwic3BsaWNlXCIsIFwic2xpY2VcIiwgXCJzaGlmdFwiLCBcInVuc2hpZnRcIl0uZm9yRWFjaChmdW5jTmFtZSA9PiB7XG4gICAgICAgICAgICByZXN1bHRbZnVuY05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZVtmdW5jTmFtZV0uYXBwbHkocmVzdWx0LCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlQXJyYXlbZnVuY05hbWVdLmFwcGx5KG9ic2VydmFibGVBcnJheSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlT2JzZXJ2YWJsZSh2YWx1ZTogYW55KSB7XG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4ga28ub2JzZXJ2YWJsZUFycmF5KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga28ub2JzZXJ2YWJsZSh2YWx1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRWYWx1ZShuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN1cGVyLmdldFZhbHVlKG5hbWUsIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgIGlmKCFrby5pc09ic2VydmFibGUodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmhhc2hbbmFtZV0gPSB0aGlzLmNyZWF0ZU9ic2VydmFibGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSB0aGlzLmhhc2hbbmFtZV07XG4gICAgICAgIGlmKChrbyBhcyBhbnkpLmlzT2JzZXJ2YWJsZUFycmF5KG9ic2VydmFibGUpKSB7IC8vIFRPRE8gLSByZW1vdmUgYW55IGNhc3RcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtBcnJheVRvT2JzZXJ2YWJsZShvYnNlcnZhYmxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0VmFsdWUobmFtZTogc3RyaW5nLCB2YWw6IGFueSkge1xuICAgICAgICBpZigha28uaXNPYnNlcnZhYmxlKHRoaXMuaGFzaFtuYW1lXSkpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzaFtuYW1lXSA9IHRoaXMuY3JlYXRlT2JzZXJ2YWJsZSh0aGlzLmhhc2hbbmFtZV0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSB0aGlzLmhhc2hbbmFtZV07XG4gICAgICAgIHRoaXMuaGFzaFtuYW1lXSh2YWwpO1xuICAgIH1cbn1cblxuQmFzZS5jcmVhdGVQcm9wZXJ0aWVzU3RvcmFnZSA9ICgpID0+IG5ldyBLbm9ja291dEhhc2hUYWJsZVN0b3JhZ2UoKTtcblxuZXhwb3J0IHZhciB0YWJsZVRlbXBsYXRlID0gcmVxdWlyZShcIi4vdGFibGUvaW5kZXguaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwidGFibGU0XCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IHBhcmFtcy5tb2RlbCBhcyBUYWJsZTtcbiAgICAgICAgICAgIG1vZGVsLmluaXRpYWxpemUoY29tcG9uZW50SW5mby5lbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IHRhYmxlVGVtcGxhdGVcbn0pO1xuXG5mdW5jdGlvbiByZW5kZXJUYWJsZShlbGVtZW50OiBzdHJpbmcgfCBFbGVtZW50KSB7XG4gICAgbGV0IGVsOiBFbGVtZW50ID0gZWxlbWVudCBhcyBFbGVtZW50O1xuICAgIGlmKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50KVswXTtcbiAgICB9XG4gICAgZWwuaW5uZXJIVE1MID0gYDx0YWJsZTQgcGFyYW1zPVwieyBtb2RlbDogJGRhdGEgfVwiPjwvdGFibGU0PmA7XG4gICAga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjayhlbCwgKG5vZGU6IE5vZGUpID0+IHtcbiAgICAgICAga28uY2xlYW5Ob2RlKG5vZGUpO1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH0pO1xuICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcywgZWwpO1xufVxuXG5UYWJsZS5wcm90b3R5cGVbXCJyZW5kZXJcIl0gPSByZW5kZXJUYWJsZTsiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IElucGxhY2VFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdGFibGUvY2VsbC1lZGl0b3JcIjtcblxuZXhwb3J0IHZhciBib29sQ2VsbEVkaXRvclRlbXBsYXRlID0gcmVxdWlyZShcIi4vYm9vbC1jZWxsLWVkaXRvci5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJib29sLWNlbGwtZWRpdG9yXCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgICAgICAgIHZhciBtb2RlbDogSW5wbGFjZUVkaXRvciA9IGtvLnVud3JhcChwYXJhbXMubW9kZWwpO1xuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgaW5wdXQgPSBjb21wb25lbnRJbmZvLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpWzBdO1xuICAgICAgICAgICAgLy8gICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICAvLyAgICAgaW5wdXQuc2VsZWN0KCk7XG4gICAgICAgICAgICAvLyB9LCAwKTtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IGJvb2xDZWxsRWRpdG9yVGVtcGxhdGVcbn0pO1xuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsIH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NlbGxcIjtcblxuZXhwb3J0IHZhciBib29sQ2VsbFZpZXdlclRlbXBsYXRlID0gcmVxdWlyZShcIi4vYm9vbC1jZWxsLXZpZXdlci5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJib29sLWNlbGwtdmlld2VyXCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBib29sQ2VsbFZpZXdlclRlbXBsYXRlXG59KTtcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgSW5wbGFjZUVkaXRvciB9IGZyb20gXCIuLi8uLi90YWJsZS9jZWxsLWVkaXRvclwiO1xuXG5leHBvcnQgdmFyIGNlbGxFZGl0b3JUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2NlbGwtZWRpdG9yLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInRhYmxlNGpzLWNlbGwtZWRpdG9yXCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWw6IElucGxhY2VFZGl0b3IgPSBrby51bndyYXAocGFyYW1zLm1vZGVsKTtcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGlucHV0ID0gY29tcG9uZW50SW5mby5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgICAgIC8vICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgLy8gICAgIGlucHV0LnNlbGVjdCgpO1xuICAgICAgICAgICAgLy8gfSwgMCk7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBjZWxsRWRpdG9yVGVtcGxhdGVcbn0pO1xuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsIH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NlbGxcIjtcblxuZXhwb3J0IHZhciBjZWxsVmlld2VyVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9jZWxsLXZpZXdlci5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ0YWJsZTRqcy1jZWxsLXZpZXdlclwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24gKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IGNlbGxWaWV3ZXJUZW1wbGF0ZVxufSk7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IFRhYmxlQ2VsbCB9IGZyb20gXCIuLi8uLi90YWJsZS9jZWxsXCI7XG5cbmV4cG9ydCB2YXIgY2VsbFRlbXBsYXRlID0gcmVxdWlyZShcIi4vY2VsbC5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ0YWJsZTRqcy10YWJsZS1jZWxsXCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICBjb25zdCBpc01lcmdlZENlbGwgPSBrby5jb21wdXRlZCgoKSA9PiBwYXJhbXMuY2VsbC5jb3VudCA+IDEgJiYgcGFyYW1zLnRhYmxlLmlzTWVyZ2Vk0KFlbGxzKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgICAgIHN0YXJ0RWRpdDogKCkgPT4gcGFyYW1zLnRhYmxlLnN0YXJ0RWRpdENlbGwocGFyYW1zLmNlbGwpLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckNzczoga28uY29tcHV0ZWQoKCkgPT4gVGFibGVDZWxsLmdldENvbnRhaW5lckNzcyhwYXJhbXMuY2VsbCwgaXNNZXJnZWRDZWxsKCkpKSxcbiAgICAgICAgICAgICAgICBjb250ZW50Q3NzOiBrby5jb21wdXRlZCgoKSA9PiBUYWJsZUNlbGwuZ2V0Q29udGVudENzcyhwYXJhbXMuY2VsbCwgaXNNZXJnZWRDZWxsKCkpKSxcbiAgICAgICAgICAgICAgICBpc01lcmdlZENlbGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBjZWxsVGVtcGxhdGVcbn0pO1xuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBDb2x1bW5GaWx0ZXJJdGVtIH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NvbHVtbi1maWx0ZXItaXRlbVwiO1xuXG52YXIgZmlsdGVyVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9jb2x1bW4tZmlsdGVyLWl0ZW0uaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwidGFibGU0anMtY29sdW1uLWZpbHRlci1pdGVtXCIsIHtcbiAgdmlld01vZGVsOiB7XG4gICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICByZXR1cm4gcGFyYW1zLmZpbHRlckl0ZW0gYXMgQ29sdW1uRmlsdGVySXRlbTtcbiAgICB9XG4gIH0sXG4gIHRlbXBsYXRlOiBmaWx0ZXJUZW1wbGF0ZVxufSk7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vdGFibGUvY29sdW1uLWZpbHRlclwiO1xuXG52YXIgZmlsdGVyVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9jb2x1bW4tZmlsdGVyLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInRhYmxlNGpzLWNvbHVtbi1maWx0ZXJcIiwge1xuICB2aWV3TW9kZWw6IHtcbiAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgIHJldHVybiBwYXJhbXMuY29udGV4dCBhcyBGaWx0ZXJDb250ZXh0O1xuICAgIH1cbiAgfSxcbiAgdGVtcGxhdGU6IGZpbHRlclRlbXBsYXRlXG59KTtcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuXG52YXIgZGVmYXVsdEZpbHRlclRlbXBsYXRlID0gcmVxdWlyZShcIi4vZmlsdGVyLWRlZmF1bHQuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwidGFibGU0anMtdGFibGUtZmlsdGVyLWRlZmF1bHRcIiwge1xuICB2aWV3TW9kZWw6IHtcbiAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfVxuICB9LFxuICB0ZW1wbGF0ZTogZGVmYXVsdEZpbHRlclRlbXBsYXRlXG59KTtcblxuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBUYWJsZUZpbHRlclNlbGVjdCB9IGZyb20gXCIuLi8uLi90YWJsZS9maWx0ZXItc2VsZWN0XCJcblxuXG52YXIgc2VsZWN0Ym94RmlsdGVyVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9maWx0ZXItc2VsZWN0Lmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInRhYmxlNGpzLWZpbHRlci1zZWxlY3RcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IG5ldyBUYWJsZUZpbHRlclNlbGVjdChwYXJhbXMudmFsdWUsIHBhcmFtcy5jb2x1bW5OYW1lLCBwYXJhbXMuY29sdW1uVHlwZSwgcGFyYW1zLmdldENvbHVtbkRhdGEsIHBhcmFtcy5pc09wZW4sIHBhcmFtcy50aXRsZSwgcGFyYW1zLm1vcmVUZXh0KTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4gdmlld01vZGVsLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuICAgICAgICAgICAga28udXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFjayhjb21wb25lbnRJbmZvLmVsZW1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB2aWV3TW9kZWw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBzZWxlY3Rib3hGaWx0ZXJUZW1wbGF0ZVxufSk7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IFNlYXJjaE1vZGVsIH0gZnJvbSBcIi4uLy4uL3RhYmxlL3NlYXJjaFwiO1xuXG5leHBvcnQgdmFyIHNlYXJjaFRlbXBsYXRlID0gcmVxdWlyZShcIi4vc2VhcmNoLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInRhYmxlNGpzLXNlYXJjaFwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24gKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgdmFyIG1vZGVsID0ga28udW53cmFwKHBhcmFtcy5tb2RlbCk7XG4gICAgICAgICAgICB2YXIgc2VhcmNoTW9kZWw6IFNlYXJjaE1vZGVsID0gbW9kZWxbcGFyYW1zLm9wdGlvbnM/LmRhdGFdIHx8IG1vZGVsO1xuICAgICAgICAgICAgdmFyIHNlYXJjaFRleHQgPSBwYXJhbXMub3B0aW9ucz8udGV4dCAmJiBtb2RlbFtwYXJhbXMub3B0aW9ucy50ZXh0XSB8fCBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykgc2VhcmNoTW9kZWwuc2VhcmNoKHNlYXJjaFRleHQoKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29tcG9uZW50SW5mby5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgcHJvY2Vzcyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBzZWFyY2hUZXh0LFxuICAgICAgICAgICAgICAgIHJlZnJlc2g6ICgpID0+IHsgc2VhcmNoTW9kZWwuc2VhcmNoKHNlYXJjaFRleHQoKSk7IH0sXG4gICAgICAgICAgICAgICAgZGlzcG9zZTogKCkgPT4gY29tcG9uZW50SW5mby5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgcHJvY2VzcylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBzZWFyY2hUZW1wbGF0ZVxufSk7XG5cbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgVGFibGVTdW1tYXJ5IH0gZnJvbSBcIi4uLy4uL3RhYmxlL3N1bW1hcnlcIjtcblxuZXhwb3J0IHZhciBzdW1tYXJ5VGVtcGxhdGUgPSByZXF1aXJlKFwiLi9zdW1tYXJ5Lmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInRhYmxlNGpzLXRhYmxlLXN1bW1hcnlcIiwge1xuICB2aWV3TW9kZWw6IHtcbiAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgIHJldHVybiBuZXcgVGFibGVTdW1tYXJ5KHBhcmFtcy5jb2x1bW4pO1xuICAgIH1cbiAgfSxcbiAgdGVtcGxhdGU6IHN1bW1hcnlUZW1wbGF0ZVxufSk7XG5cbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgSUFjdGlvbiB9IGZyb20gXCIuLi8uLi9jb3JlL2FjdGlvblwiO1xuXG52YXIgYWN0aW9uVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9hY3Rpb24uaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwidGFibGU0anMtYWN0aW9uLWl0ZW1cIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IChwYXJhbXM6IElBY3Rpb24sIGNvbXBvbmVudEluZm8pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBhY3Rpb25UZW1wbGF0ZVxufSk7XG5cbmV4cG9ydCB2YXIgQWN0aW9uSXRlbVdpZGdldDtcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuXG52YXIgYWN0aW9uc1RlbXBsYXRlID0gcmVxdWlyZShcIi4vYWN0aW9ucy5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJ0YWJsZTRqcy1hY3Rpb25zXCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbiAocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWxWYWx1ZSA9IChwYXJhbXMubW9kZWwgfHwge30pW3BhcmFtcy5vcHRpb25zLmFjdGlvbl07XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbnM6IG1vZGVsVmFsdWUsXG4gICAgICAgICAgICAgICAgc2hvcnQ6IHBhcmFtcy5vcHRpb25zLnNob3J0LFxuICAgICAgICAgICAgICAgIGdyb3VwTmFtZTogcGFyYW1zLm9wdGlvbnMuZ3JvdXBOYW1lLFxuICAgICAgICAgICAgICAgIHRvZ2dsZUNoaWxkQWN0aW9uczogKF8sIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwidGFibGU0anMtbmVzdGVkLWFjdGlvbnMtLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IGFjdGlvbnNUZW1wbGF0ZVxufSk7XG5cbmV4cG9ydCB2YXIgQWJyaXNBY3Rpb25zV2lkZ2V0O1xuXG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcblxudmFyIGRyb3Bkb3duVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9kcm9wZG93bi1hY3Rpb25zLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInRhYmxlNGpzLWRyb3Bkb3duLWFjdGlvbnNcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uIChwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IGlzT3BlbiA9IHBhcmFtcy5pc09wZW4gfHwga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZSA9ICgpID0+IGlzT3BlbihmYWxzZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XG4gICAgICAgICAgICBrby51dGlscy5kb21Ob2RlRGlzcG9zYWwuYWRkRGlzcG9zZUNhbGxiYWNrKGNvbXBvbmVudEluZm8uZWxlbWVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpc09wZW4sXG4gICAgICAgICAgICAgICAgdGl0bGU6IHBhcmFtcy50aXRsZSB8fCBcIlwiLFxuICAgICAgICAgICAgICAgIG1vcmVUZXh0OiBwYXJhbXMubW9yZVRleHQgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBwYXJhbXMuZGF0YSxcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBwYXJhbXMuYWN0aW9ucyxcbiAgICAgICAgICAgICAgICB0b2dnbGU6IChfLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpc09wZW4oIWlzT3BlbigpKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBkcm9wZG93blRlbXBsYXRlXG59KTtcblxuZXhwb3J0IHZhciBBYnJpc0Ryb3Bkb3duQWN0aW9ucztcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwidGFibGU0anMtaWNvblwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24gKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoXCIuL2ljb24uaHRtbFwiKS5kZWZhdWx0XG59KTtcblxuZXhwb3J0IHZhciBBYnJpc0ljb25XaWRnZXQ7XG4iLCJleHBvcnQgY2xhc3MgTG9jYWxpemF0aW9uIHtcbiAgICBzdGF0aWMgZW5nbGlzaFN0cmluZ3MgPSB7XG4gICAgICAgIGZpbHRlcmNvbnRhaW5zOiBcIkNvbnRhaW5zXCIsXG4gICAgICAgIGZpbHRlcmVxdWFsOiBcIkVxdWFsXCIsXG4gICAgICAgIGZpbHRlcmlzbnVsbDogXCJFbXB0eVwiLFxuICAgICAgICBmaWx0ZXJpc25vdG51bGw6IFwiTm90IGVtcHR5XCIsXG4gICAgICAgIGZpbHRlcmdyZWF0ZXI6IFwiR3JlYXRlclwiLFxuICAgICAgICBmaWx0ZXJsZXNzOiBcIkxlc3NcIixcbiAgICAgICAgZmlsdGVyZ3JlYXRlcmVxdWFsOiBcIkdyZWF0ZXIgb3IgZXF1YWxcIixcbiAgICAgICAgZmlsdGVybGVzc2VxdWFsOiBcIkxlc3Mgb3IgZXF1YWxcIixcbiAgICAgICAgZmlsdGVyZGF0ZW5vdGVxdWFsOiBcIk5vdCBlcXVhbFwiLFxuICAgICAgICBmaWx0ZXJkYXRlZXF1YWw6IFwiRXF1YWxcIixcbiAgICAgICAgZmlsdGVyZGF0ZWdyZWF0ZXI6IFwiRnJvbVwiLFxuICAgICAgICBmaWx0ZXJkYXRlbGVzczogXCJUb1wiLFxuICAgICAgICBub0RhdGE6IFwiTm8gRGF0YVwiXG4gICAgfTtcbiAgICBzdGF0aWMgZ2V0U3RyaW5nID0gKHN0cmluZ0lkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5nbGlzaFN0cmluZ3Nbc3RyaW5nSWRdO1xuICAgIH0gXG59IiwiaW1wb3J0IHsgSVRhYmxlQ2VsbFR5cGUsIFRhYmxlQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcblxuaW1wb3J0IFwiLi9ib29sLnNjc3NcIjtcblxuZXhwb3J0IGNsYXNzIEJvb2xDZWxsIGltcGxlbWVudHMgSVRhYmxlQ2VsbFR5cGUge1xuICAgIG5hbWU6IHN0cmluZyA9IFwiYm9vbFwiO1xuICAgIGVkaXRvcjogc3RyaW5nID0gXCJib29sLWNlbGwtZWRpdG9yXCI7XG4gICAgdmlld2VyOiBzdHJpbmcgPSBcImJvb2wtY2VsbC12aWV3ZXJcIjtcbn1cblxuVGFibGVDZWxsLnJlZ2lzdGVyQ2VsbFR5cGUobmV3IEJvb2xDZWxsKCkpOyIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuXG5pbXBvcnQgXCIuL2NlbGwtZWRpdG9yLnNjc3NcIjtcblxuZXhwb3J0IGNsYXNzIElucGxhY2VFZGl0b3IgZXh0ZW5kcyBCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNlbGw6IElUYWJsZUNlbGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuY2VsbC5kYXRhO1xuICAgIH1cbiAgICBAcHJvcGVydHkoKSB2YWx1ZTogYW55O1xuICAgIGNvbXBsZXRlKGNvbW1pdDogYm9vbGVhbikge1xuICAgICAgICBpZihjb21taXQpIHtcbiAgICAgICAgICAgIHRoaXMuY2VsbC5kYXRhID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNlbGwuaW5wbGFjZUVkaXRvciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcHJvY2Vzc0tleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKGV2ZW50LmtleUNvZGUgPT09IDEzKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElUYWJsZUNvbHVtbiwgSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24gfSBmcm9tIFwiLi9jb2x1bW5cIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDZWxsVHlwZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNzcz86IHN0cmluZztcbiAgICBlZGl0b3I/OiBzdHJpbmc7XG4gICAgdmlld2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNlbGwge1xuICAgIGRhdGE6IGFueTtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGNvdW50OiBudW1iZXI7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBjc3M6IHN0cmluZztcbiAgICBpbnBsYWNlRWRpdG9yOiBhbnk7XG4gICAgZWRpdG9yPzogc3RyaW5nO1xuICAgIHZpZXdlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlQ2VsbCBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJVGFibGVDZWxsIHtcbiAgICBwdWJsaWMgc3RhdGljIGNlbGxUeXBlcyA9IHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgIGNzczogXCJ0YWJsZTRqcy10YWJsZS1jZWxsLS1sZWZ0XCIsXG4gICAgICAgICAgICBlZGl0b3I6IFwidGFibGU0anMtY2VsbC1lZGl0b3JcIixcbiAgICAgICAgICAgIHZpZXdlcjogXCJ0YWJsZTRqcy1jZWxsLXZpZXdlclwiXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBwdWJsaWMgc3RhdGljIHJlZ2lzdGVyQ2VsbFR5cGUoY2VsbFR5cGU6IElUYWJsZUNlbGxUeXBlKSB7XG4gICAgICAgIFRhYmxlQ2VsbC5jZWxsVHlwZXNbY2VsbFR5cGUubmFtZV0gPSBjZWxsVHlwZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldENvbnRhaW5lckNzcyhjZWxsOiBJVGFibGVDZWxsLCBpc01lcmdlZENlbGw6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvbnRhaW5lckNzcyA9IFwidGFibGU0anMtdGFibGUtY2VsbF9fY29udGFpbmVyIFwiICsgY2VsbC5jc3M7XG4gICAgICAgIGlmIChpc01lcmdlZENlbGwpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lckNzcyArPSBcIiBjZWxsX19zdGlja3ktdGV4dFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250YWluZXJDc3M7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29udGVudENzcyhjZWxsOiBJVGFibGVDZWxsIHwgVGFibGVDZWxsLCBpc01lcmdlZENlbGw6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IGNvbnRlbnRDc3MgPSBpc01lcmdlZENlbGwgPyBcInRhYmxlNGpzLXRhYmxlLWNlbGxfX3RleHQtLW1lcmdlZFwiIDogXCJ0YWJsZTRqcy10YWJsZS1jZWxsX190ZXh0XCI7XG4gICAgICAgIGlmIChjZWxsIGluc3RhbmNlb2YgVGFibGVDZWxsICYmIGNlbGwuaXNNb2RpZmllZCkge1xuICAgICAgICAgICAgY29udGVudENzcyArPSBcIiB0YWJsZTRqcy10YWJsZS1jZWxsX190ZXh0LS1tb2RpZmllZFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZW50Q3NzO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNNb2RpZmllZDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBvblNldDogKHZhbCwgdGFyZ2V0OiBUYWJsZUNlbGwpID0+IHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQudGV4dCAhPT0gdmFsKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnRleHQgPSB0YXJnZXQuZ2V0Q2VsbFRleHQodmFsKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSBkYXRhOiBhbnk7XG4gICAgQHByb3BlcnR5KCkgdGV4dDogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogMSB9KSBjb3VudDogbnVtYmVyO1xuICAgIEBwcm9wZXJ0eSgpIGNvbG9yOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgbmFtZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGlucGxhY2VFZGl0b3I6IGFueTtcbiAgICBAcHJvcGVydHkoKSBjc3M6IHN0cmluZztcbiAgICBlZGl0b3I6IHN0cmluZztcbiAgICB2aWV3ZXI6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCBnZXRDZWxsVHlwZURlc2NyaXB0aW9uKHR5cGU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gVGFibGVDZWxsLmNlbGxUeXBlc1t0eXBlXSB8fCBUYWJsZUNlbGwuY2VsbFR5cGVzW1wiZGVmYXVsdFwiXVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q2VsbENzcyhkYXRhOiBhbnksIGNvbHVtbjogSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxsVHlwZURlc2NyaXB0aW9uKGNvbHVtbi50eXBlKS5jc3M7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDZWxsRWRpdG9yKGRhdGE6IGFueSwgY29sdW1uOiBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENlbGxUeXBlRGVzY3JpcHRpb24oY29sdW1uLnR5cGUpLmVkaXRvciB8fCBUYWJsZUNlbGwuY2VsbFR5cGVzW1wiZGVmYXVsdFwiXS5lZGl0b3I7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDZWxsVmlld2VyKGRhdGE6IGFueSwgY29sdW1uOiBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENlbGxUeXBlRGVzY3JpcHRpb24oY29sdW1uLnR5cGUpLnZpZXdlciB8fCBUYWJsZUNlbGwuY2VsbFR5cGVzW1wiZGVmYXVsdFwiXS52aWV3ZXI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDZWxsVGV4dCh2YWw6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YWwgYXMgc3RyaW5nO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKGNvbDogSVRhYmxlQ29sdW1uLCBiYWNrOiBib29sZWFuLCBkYXRhOiBhbnksIGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVtjb2wubmFtZV0sXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMubmFtZSA9IGNvbC5uYW1lO1xuICAgICAgICB0aGlzLmNzcyA9IHRoaXMuZ2V0Q2VsbENzcyhkYXRhLCBjb2wpO1xuICAgICAgICB0aGlzLmVkaXRvciA9IHRoaXMuZ2V0Q2VsbEVkaXRvcihkYXRhLCBjb2wpO1xuICAgICAgICB0aGlzLnZpZXdlciA9IHRoaXMuZ2V0Q2VsbFZpZXdlcihkYXRhLCBjb2wpO1xuICAgICAgICBpZiAoYmFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sLmxhc3QgJiYgY29sLmxhc3QudGV4dCA9PT0gdGhpcy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnQgPSBjb2wubGFzdC5jb3VudCArIDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5sYXN0LmNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbC5sYXN0ID09IGNvbC5wcmV2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wucHJldiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wuY291bnQgPSB0aGlzLmNvdW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbC5sYXN0ID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjb2wubGFzdCA9PT0gbnVsbCkgY29sLmxhc3QgPSB0aGlzO1xuICAgICAgICAgICAgICAgIGlmIChjb2wucHJldlZhbHVlICYmIChjb2wucHJldlZhbHVlID09PSB0aGlzLnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5jb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29sLnByZXYuY291bnQgPSBjb2wuY291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb2wuY291bnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb2wucHJldiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5wcmV2VmFsdWUgPSB0aGlzLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSUZpbmRPcGVyYXRpb24sIG9wZXJhdGlvbnNNYXAgfSBmcm9tIFwiLi4vZmluZFwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uIH0gZnJvbSBcIi4vY29sdW1uXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJJdGVtVmFsdWUgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2x1bW46IElUYWJsZUNvbHVtbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5maWVsZCA9IGNvbHVtbi5uYW1lO1xuICB9XG4gIEBwcm9wZXJ0eSh7IG9uU2V0OiAodmFsLCB0YXJnZXQ6IEZpbHRlckl0ZW1WYWx1ZSkgPT4gdGFyZ2V0LmNvbHVtbi5maWx0ZXJDb250ZXh0LmFwcGx5KCkgfSkgdmFsdWU6IGFueTtcbiAgQHByb3BlcnR5KHsgb25TZXQ6ICh2YWwsIHRhcmdldDogRmlsdGVySXRlbVZhbHVlKSA9PiB0YXJnZXQuY29sdW1uLmZpbHRlckNvbnRleHQuYXBwbHkoKSB9KSBvcDogc3RyaW5nO1xuICBmaWVsZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ29sdW1uRmlsdGVySXRlbSBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29sdW1uOiBhbnksXG4gICAgcHVibGljIGdldENvbHVtbkRhdGFcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZpbHRlckl0ZW1WYWx1ZSA9IG5ldyBGaWx0ZXJJdGVtVmFsdWUoY29sdW1uKTtcbiAgICBpZiAob3BlcmF0aW9uc01hcFt0aGlzLmNvbHVtbi50eXBlXSkge1xuICAgICAgdGhpcy5vcGVyYXRpb25zID0gb3BlcmF0aW9uc01hcFt0aGlzLmNvbHVtbi50eXBlXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLm9wZXJhdGlvbnMgPSBvcGVyYXRpb25zTWFwW1wic3RyaW5nXCJdO1xuICAgIH1cbiAgICB0aGlzLm9wZXJhdGlvbiA9IHRoaXMub3BlcmF0aW9uc1swXTtcbiAgfVxuXG4gIG9wZXJhdGlvbnM6IEFycmF5PGFueT47XG5cbiAgZ2V0IGZpbHRlckVkaXRvck5hbWUoKSB7XG4gICAgLy8gaWYgKHRoaXMuY29sdW1uLnR5cGUgPT09IFwiYm9vbFwiKSB7XG4gICAgLy8gICByZXR1cm4gXCJ0YWJsZTRqcy10YWJsZS1maWx0ZXItYm9vbFwiO1xuICAgIC8vIH0gZWxzZSBpZiAoW1wic3RyaW5nXCIsIFwiY2FwdGlvblwiLCBcInBsYWluXCJdLmluZGV4T2YodGhpcy5jb2x1bW4udHlwZSkgIT09IC0xICkge1xuICAgIC8vICAgcmV0dXJuIFwidGFibGU0anMtdGFibGUtZmlsdGVyLWF1dG9jb21wbGV0ZVwiO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5jb2x1bW4udHlwZSA9PT0gXCJkYXRlXCIpIHtcbiAgICAvLyAgIHJldHVybiBcInRhYmxlNGpzLXRhYmxlLWZpbHRlci1kYXRlXCI7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmNvbHVtbi50eXBlID09PSBcImRhdGV0aW1lXCIpIHtcbiAgICAvLyAgIHJldHVybiBcInRhYmxlNGpzLXRhYmxlLWZpbHRlci1kYXRlLXRpbWVcIjtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuY29sdW1uLnR5cGUgPT09IFwicGlrZXRwb3NpdGlvblwiKSB7XG4gICAgLy8gICByZXR1cm4gXCJ0YWJsZTRqcy10YWJsZS1maWx0ZXIta21wa3RtXCI7XG4gICAgLy8gfSBlbHNlIGlmICghIXRoaXMucGFyYW1zLnByb3BlcnR5SW5mby5yZWxhdGlvbikge1xuICAgIC8vICAgcmV0dXJuIFwidGFibGU0anMtdGFibGUtZmlsdGVyLWF1dG9jb21wbGV0ZVwiO1xuICAgIC8vIH1cbiAgICByZXR1cm4gXCJ0YWJsZTRqcy10YWJsZS1maWx0ZXItZGVmYXVsdFwiO1xuICB9XG4gIHB1YmxpYyBmaWx0ZXJJdGVtVmFsdWU6IEZpbHRlckl0ZW1WYWx1ZTtcbiAgQHByb3BlcnR5KHtcbiAgICBvblNldDogKHZhbDogSUZpbmRPcGVyYXRpb24sIHRhcmdldDogQ29sdW1uRmlsdGVySXRlbSkgPT4ge1xuICAgICAgaWYgKCEhdmFsKSB7XG4gICAgICAgIHRhcmdldC5maWx0ZXJJdGVtVmFsdWUub3AgPSB2YWwub3A7XG4gICAgICB9XG4gICAgICB0YXJnZXQuc2hvd09wZXJhbmQgPSB2YWwgJiYgdmFsLm9wICE9PSBcIklTTlwiICYmIHZhbC5vcCAhPT0gXCJJU05OXCI7XG4gICAgfVxuICB9KSBvcGVyYXRpb246IElGaW5kT3BlcmF0aW9uO1xuICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IHRydWUgfSkgc2hvd09wZXJhbmQ6IGJvb2xlYW47XG5cbiAgZ2V0RmlsdGVyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkOiB0aGlzLmZpbHRlckl0ZW1WYWx1ZS5maWVsZCxcbiAgICAgIG9wOiB0aGlzLmZpbHRlckl0ZW1WYWx1ZS5vcCxcbiAgICAgIHZhbHVlOiB0aGlzLmZpbHRlckl0ZW1WYWx1ZS52YWx1ZVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElEYXRhUHJvdmlkZXIsIElEYXRhUHJvdmlkZXJPd25lciB9IGZyb20gXCIuLi91dGlscy9kYXRhLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBJVGFibGVDb2x1bW4gfSBmcm9tIFwiLi9jb2x1bW5cIjtcbmltcG9ydCB7IEZpbHRlckl0ZW1WYWx1ZSwgQ29sdW1uRmlsdGVySXRlbSB9IGZyb20gXCIuL2NvbHVtbi1maWx0ZXItaXRlbVwiO1xuXG5pbXBvcnQgXCIuL2NvbHVtbi1maWx0ZXIuc2Nzc1wiO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29udGV4dCBleHRlbmRzIEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2x1bW46IElUYWJsZUNvbHVtbiwgcHJpdmF0ZSBkYXRhUHJvdmlkZXJPd25lcjogSURhdGFQcm92aWRlck93bmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBzaG93RmlsdGVyOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSgpIHZhbHVlOiBhbnk7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBbXSB9KSBmaWx0ZXJJdGVtczogQXJyYXk8Q29sdW1uRmlsdGVySXRlbT47XG4gIFxuICAgIGFwcGx5KCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZmlsdGVySXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5nZXRGaWx0ZXJWYWx1ZSgpKTtcbiAgICB9XG4gICAgYWRkSXRlbSA9IChjb2x1bW46IElUYWJsZUNvbHVtbikgPT4ge1xuICAgICAgLy8gZmlsdGVyVmFsdWUub3Auc3Vic2NyaWJlKG8gPT4ge2lmKG8gPT09IFwiRVFcIikgZmlsdGVyVmFsdWUudmFsdWUobnVsbCk7IHRoaXMuYXBwbHkoKX0pO1xuICAgICAgdGhpcy5maWx0ZXJJdGVtcy5wdXNoKG5ldyBDb2x1bW5GaWx0ZXJJdGVtKHRoaXMuY29sdW1uLCAoY29sdW1uLCBmaWx0ZXIsIGxpbWl0LCBvZmZzZXQsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YVByb3ZpZGVyT3duZXIuZGF0YVByb3ZpZGVyLmdldENvbHVtbkRhdGEoY29sdW1uLCBmaWx0ZXIsIGxpbWl0LCBvZmZzZXQsIGNhbGxiYWNrKTtcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMuc2hvd0ZpbHRlciA9IHRydWU7XG4gICAgfTtcbiAgICByZW1vdmVJdGVtID0gKGl0ZW06IENvbHVtbkZpbHRlckl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRGaWx0ZXJJdGVtcyA9IHRoaXMuZmlsdGVySXRlbXM7XG4gICAgICBjdXJyZW50RmlsdGVySXRlbXMuc3BsaWNlKGN1cnJlbnRGaWx0ZXJJdGVtcy5pbmRleE9mKGl0ZW0pLCAxKTtcbiAgICAgIHRoaXMuc2hvd0ZpbHRlciA9ICEhY3VycmVudEZpbHRlckl0ZW1zLmxlbmd0aDsgICAgXG4gICAgICB0aGlzLnZhbHVlID0gY3VycmVudEZpbHRlckl0ZW1zLm1hcChpID0+IGkuZmlsdGVySXRlbVZhbHVlKTtcbiAgICB9ICAgIFxufSIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJQWdncmVnYXRlIH0gZnJvbSBcIi4uL2ZpbmRcIjtcbmltcG9ydCB7IElEYXRhUHJvdmlkZXJPd25lciB9IGZyb20gXCIuLi91dGlscy9kYXRhLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHsgRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuL2NvbHVtbi1maWx0ZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgLy8gZmlsdGVyOiBhbnk7XG4gICAgLy8gZmlsdGVyQ29udGV4dDogRmlsdGVyQ29udGV4dCxcbiAgICAvLyBvcmRlcjogc3RyaW5nLFxuICAgIC8vIGNvdW50OiBudW1iZXIsXG4gICAgLy8gcHJldjogSVRhYmxlQ2VsbCxcbiAgICAvLyBwcmV2VmFsdWU6IGFueSxcbiAgICAvLyBjb25jYXRQcmV2OiBib29sZWFuLFxuICAgIC8vIGxhc3Q6IElUYWJsZUNlbGwsXG4gICAgLy8gcm93X2NvbG9yOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb2x1bW4gZXh0ZW5kcyBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbiB7XG4gICAgLy8gbmFtZTogc3RyaW5nO1xuICAgIC8vIHRpdGxlOiBzdHJpbmc7XG4gICAgLy8gdHlwZTogc3RyaW5nO1xuICAgIC8vIHZpc2libGU6IGJvb2xlYW47XG4gICAgZmlsdGVyOiBhbnk7XG4gICAgZmlsdGVyQ29udGV4dDogRmlsdGVyQ29udGV4dCxcbiAgICBvcmRlcjogYm9vbGVhbixcbiAgICBzdW1tYXJ5VmFsdWU6IGFueSxcbiAgICBzdW1tYXJ5UGFyYW1zOiBJQWdncmVnYXRlLFxuICAgIGNvdW50OiBudW1iZXIsXG4gICAgcHJldjogSVRhYmxlQ2VsbCxcbiAgICBwcmV2VmFsdWU6IGFueSxcbiAgICBjb25jYXRQcmV2OiBib29sZWFuLFxuICAgIGxhc3Q6IElUYWJsZUNlbGwsXG4gICAgcm93X2NvbG9yOiBzdHJpbmcsXG4gICAgY2xpY2tGaWx0ZXI6IChjb2x1bW46IElUYWJsZUNvbHVtbiwgZXZlbnQ6IE1vdXNlRXZlbnR8YW55KSA9PiB2b2lkLFxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVDb2x1bW4gZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVRhYmxlQ29sdW1uIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbHVtbkRlc2NyaXB0aW9uOiBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbiwgcHJpdmF0ZSB0YWJsZTogSURhdGFQcm92aWRlck93bmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5rZXlzKGNvbHVtbkRlc2NyaXB0aW9uIHx8IHt9KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZihjb2x1bW5EZXNjcmlwdGlvbltrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBjb2x1bW5EZXNjcmlwdGlvbltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYodGhpcy50aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsdGVyQ29udGV4dCA9IG5ldyBGaWx0ZXJDb250ZXh0KHRoaXMsIHRhYmxlKTtcbiAgICB9XG5cbiAgICBmaWx0ZXI6IGFueTtcbiAgICBmaWx0ZXJDb250ZXh0OiBGaWx0ZXJDb250ZXh0O1xuICAgIEBwcm9wZXJ0eSgpIG9yZGVyOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSgpIHN1bW1hcnlWYWx1ZTogYW55O1xuICAgIEBwcm9wZXJ0eSh7IG9uU2V0OiAodmFsOiBJQWdncmVnYXRlLCB0YXJnZXQ6IFRhYmxlQ29sdW1uKSA9PiB7XG4gICAgICAgIHRhcmdldC5jYWxjdWxhdGVTdW1tYXJ5KHRhcmdldCk7XG4gICAgfX0pIHN1bW1hcnlQYXJhbXM6IElBZ2dyZWdhdGU7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICBwcmV2OiBhbnk7XG4gICAgcHJldlZhbHVlOiBhbnk7XG4gICAgY29uY2F0UHJldjogYm9vbGVhbjtcbiAgICBsYXN0OiBhbnk7XG4gICAgcm93X2NvbG9yOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgdHlwZTogc3RyaW5nID0gXCJzdHJpbmdcIjtcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBjbGlja0ZpbHRlciA9IChjb2x1bW46IElUYWJsZUNvbHVtbiwgZXZlbnQ6IE1vdXNlRXZlbnR8YW55KSA9PiB7XG4gICAgICAgIGNvbHVtbi5maWx0ZXJDb250ZXh0LmFkZEl0ZW0oY29sdW1uKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlU3VtbWFyeShjb2x1bW46IElUYWJsZUNvbHVtbik6IHZvaWQge1xuICAgICAgICBpZihjb2x1bW4uc3VtbWFyeVBhcmFtcyAmJiBjb2x1bW4uc3VtbWFyeVBhcmFtcy5maWVsZCA9PT0gY29sdW1uLm5hbWUgJiYgY29sdW1uLnN1bW1hcnlQYXJhbXMuZnVuYykge1xuICAgICAgICAgICAgdGhpcy50YWJsZS5kYXRhUHJvdmlkZXIuZ2V0U3VtbWFyeShjb2x1bW4uc3VtbWFyeVBhcmFtcy5mdW5jLCBjb2x1bW4uc3VtbWFyeVBhcmFtcy5maWVsZCwgdGhpcy50YWJsZVtcInRhYmxlRmlsdGVyXCJdLCAoZGF0YSkgPT4gY29sdW1uLnN1bW1hcnlWYWx1ZSA9IGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzcG9zZSgpIHtcbiAgICB9XG59IiwiaW1wb3J0IFwiLi9maWx0ZXItZGVmYXVsdC5zY3NzXCI7XG5cblxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IEZpbHRlckl0ZW1WYWx1ZSB9IGZyb20gXCIuL2NvbHVtbi1maWx0ZXItaXRlbVwiO1xuXG5pbXBvcnQgXCIuL2ZpbHRlci1zZWxlY3Quc2Nzc1wiO1xuXG5cbmZ1bmN0aW9uIGNvbnZlcnNpb25CeVR5cGUodmFsdWU6YW55LCBjb2x1bW5UeXBlOiBzdHJpbmcpOnN0cmluZ3tcbiAgICBpZihjb2x1bW5UeXBlID09PVwiYm9vbFwiKSByZXR1cm4gdmFsdWU/XCJZZXNcIjpcIk5vXCI7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJTZWFyY2hCeVR5cGUoY29sdW1uVHlwZTogc3RyaW5nKTpib29sZWFue1xuICAgIGlmKGNvbHVtblR5cGUgPT09XCJib29sXCIpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgVGFibGVGaWx0ZXJTZWxlY3QgZXh0ZW5kcyBCYXNlIHtcbiAgICBwcml2YXRlIGxpbWl0OiBudW1iZXIgPSAxMDtcbiAgICBwcml2YXRlIG9mZnNldDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdmFsdWU6IEZpbHRlckl0ZW1WYWx1ZSwgIHByaXZhdGUgY29sdW1uTmFtZTogc3RyaW5nLCBwcml2YXRlIGNvbHVtblR5cGU6IHN0cmluZywgcHJpdmF0ZSBnZXRDb2x1bW5EYXRhOiAobmFtZTogc3RyaW5nLCBmaWx0ZXJWYWx1ZTogYW55LCBsaW1pdDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY2FsbGJhY2sgOiAoaXRlbXM6IGFueVtdKSA9PiB2b2lkKSA9PiB2b2lkLCBpc09wZW4/OiBib29sZWFuLCBwdWJsaWMgdGl0bGU6IHN0cmluZyA9IFwiXCIsIHB1YmxpYyBtb3JlVGV4dDogc3RyaW5nID0gXCJcIikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZihpc09wZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBpc09wZW47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVGb3VuZEl0ZW1zKG51bGwpO1xuICAgICAgICB0aGlzLmlzRmlsdGVyU2VhcmNoQnlUeXBlID0gZmlsdGVyU2VhcmNoQnlUeXBlKGNvbHVtblR5cGUpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUZvdW5kSXRlbXMoZmlsdGVyVmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLmZvdW5kSXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xuICAgICAgICB0aGlzLmdldENvbHVtbkRhdGEodGhpcy5jb2x1bW5OYW1lLCBmaWx0ZXJWYWx1ZSwgdGhpcy5saW1pdCwgdGhpcy5vZmZzZXQsIGl0ZW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRJdGVtcyA9IGl0ZW1zLm1hcChpID0+IHtyZXR1cm4ge25hbWU6IGNvbnZlcnNpb25CeVR5cGUoaSwgdGhpcy5jb2x1bW5UeXBlKSwgdmFsdWU6IGl9fSk7XG4gICAgICAgICAgICB0aGlzLmlzTG9hZE1vcmUgPSBpdGVtcy5sZW5ndGggPT09IHRoaXMubGltaXQ7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSAxMDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRNb3JlKCkge1xuICAgICAgICB0aGlzLmdldENvbHVtbkRhdGEodGhpcy5jb2x1bW5OYW1lLCB0aGlzLmZpbHRlclRleHQsIHRoaXMubGltaXQsIHRoaXMub2Zmc2V0LCBpdGVtcyA9PiB7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGkgPT4gdGhpcy5mb3VuZEl0ZW1zLnB1c2goaSkpXG4gICAgICAgICAgICB0aGlzLmlzTG9hZE1vcmUgPSBpdGVtcy5sZW5ndGggPT09IHRoaXMubGltaXQ7XG4gICAgICAgICAgICB0aGlzLm9mZnNldCArPSAxMDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNPcGVuOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNGaWx0ZXJTZWFyY2hCeVR5cGU6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc0xvYWRNb3JlOiBib29sZWFuO1xuICAgIHRvZ2dsZSA9IChfLCBldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogW10sIG9uU2V0OiAodmFsLCB0YXJnZXQ6IFRhYmxlRmlsdGVyU2VsZWN0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2V0IGZpbHRlciB2YWx1ZSB0byBcIiArIEpTT04uc3RyaW5naWZ5KHZhbCkpO1xuICAgICAgICB0YXJnZXQudmFsdWUudmFsdWUgPSB0YXJnZXQuc2VsZWN0ZWRJdGVtcztcbiAgICB9IH0pIHNlbGVjdGVkSXRlbXM6IEFycmF5PGFueT47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBbXSB9KSBmb3VuZEl0ZW1zOiBBcnJheTxhbnk+O1xuICAgIEBwcm9wZXJ0eSh7IG9uU2V0OiAodmFsLCB0YXJnZXQ6IFRhYmxlRmlsdGVyU2VsZWN0KSA9PiB7XG4gICAgICAgIHRhcmdldC51cGRhdGVGb3VuZEl0ZW1zKHZhbCk7XG4gICAgfSwgfSkgZmlsdGVyVGV4dDogc3RyaW5nO1xuICAgIGlzQ2hlY2tlZCA9IChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihpdGVtKSAhPT0gLTE7XG4gICAgfVxuICAgIGNsaWNrSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpZihpdGVtSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUl0ZW1zKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWx1ZS52YWx1ZSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoaT0+aS52YWx1ZSk7XG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZS52YWx1ZSkgJiYgdGhpcy52YWx1ZS52YWx1ZS5sZW5ndGggPT09IDApIHRoaXMudmFsdWUudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGRlbGV0ZUl0ZW1zID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YobmFtZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IEFjdGlvbiwgSUFjdGlvbiB9IGZyb20gXCIuLi9jb3JlL2FjdGlvblwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgQ29tcHV0ZWRVcGRhdGVyIH0gZnJvbSBcIi4uL2NvcmUvZGVwZW5kZW5jaWVzXCI7XG5pbXBvcnQgeyBJbnBsYWNlRWRpdG9yIH0gZnJvbSBcIi4vY2VsbC1lZGl0b3JcIjtcbmltcG9ydCB7IElUYWJsZUNlbGwsIFRhYmxlQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCB7IElUYWJsZUNvbHVtbiwgSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24sIFRhYmxlQ29sdW1uIH0gZnJvbSBcIi4vY29sdW1uXCI7XG5pbXBvcnQgeyBTZWFyY2hNb2RlbCB9IGZyb20gXCIuL3NlYXJjaFwiO1xuaW1wb3J0IHsgSURhdGFQcm92aWRlciwgSURhdGFQcm92aWRlck93bmVyIH0gZnJvbSBcIi4uL3V0aWxzL2RhdGEtcHJvdmlkZXJcIjtcbmltcG9ydCB7IEFycmF5RGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4uL3V0aWxzL2FycmF5LWRhdGEtcHJvdmlkZXJcIjtcbmltcG9ydCB7IElUYWJsZVJvdywgSVRhYmxlUm93RGF0YSwgVGFibGVSb3cgfSBmcm9tIFwiLi9yb3dcIjtcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IExvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9sb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7IEZpbHRlckl0ZW1WYWx1ZSB9IGZyb20gXCIuL2NvbHVtbi1maWx0ZXItaXRlbVwiO1xuXG5pbXBvcnQgKiBhcyBJY29ucyBmcm9tIFwiLi4vaWNvblwiXG5pbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcblxuLyoqXG4gKiBQYXJhbWV0ZXJzIGZvciBjdXN0b21pemluZyB0aGUgdGFibGUgdmlldy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb25maWcgZXh0ZW5kcyBJRGF0YVByb3ZpZGVyIHtcbiAgICAvKiogRGVzY3JpcHRpb24gb2YgY29sdW1ucyAqL1xuICAgIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uPjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBkaXNwbGF5IHRoZSBzZWFyY2ggYmFyICovXG4gICAgZW5hYmxlU2VhcmNoPzogYm9vbGVhbjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBkaXNwbGF5IHN1bW1hcnkgcGFuZWwgKi9cbiAgICBlbmFibGVTdW1tYXJ5PzogYm9vbGVhbjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBkaXNwbGF5IG1lcmdlZCBjZWxscyB0b2dnbGUgKi9cbiAgICBlbmFibGVNZXJnZWTQoWVsbHNUb2dnbGU/OiBib29sZWFuO1xuICAgIC8qKiBUaGUgcHJpbWFyeSB2YWx1ZSBvZiB0aGUgcGFyYW1ldGVyIGZvciBtZXJnaW5nIGNlbGxzICovXG4gICAgZW5hYmxlTWVyZ2Vk0KFlbGxzPzogYm9vbGVhbjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBlZGl0IGRhdGEgKi9cbiAgICBlbmFibGVFZGl0PzogYm9vbGVhbjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBkaXNwbGF5IHRoZSB0YWJsZSBhY3Rpb25zIHBhbmVsICovXG4gICAgYWN0aW9ucz86IEFycmF5PElBY3Rpb24+O1xuICAgIC8qKiBUaGUga2V5IGZpZWxkIG9mIHRoZSB0YWJsZS4gTmVlZGVkIHRvIGVkaXQgdGhlIHRhYmxlLiAqL1xuICAgIGtleUNvbHVtbj86IHN0cmluZztcbiAgICAvKiogU2V0dGluZyB0aGUgY29sb3IgZm9yIHNlbGVjdGVkIGNlbGxzIGluIGNhc2UgdGhlIHNlbGVjdGlvbiBpcyBzZXQgdXNpbmcgYW4gYXR0YWNoZWQgYm9vbGVhbiBjb2x1bW4uIFRoZSBjb2xvciBpcyBzZXQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiBDU1MuICovXG4gICAgc2VsZWN0Q2VsbENvbG9yPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVRhYmxlRmlsdGVyIHtcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIG9wOiBzdHJpbmcsXG4gICAgZmllbGQ6IHN0cmluZyxcbn1cblxuLyoqXG4gKiBDcmVhdGVzIFRhYmxlIGNsYXNzLlxuICogQHBhcmFtIGNvbmZpZyAtIHRhYmxlIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZSBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJRGF0YVByb3ZpZGVyT3duZXIge1xuICAgIHByaXZhdGUgc2Nyb2xsZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHJlc2l6ZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHRhYmxlRWxlbWVudDogSFRNTFRhYmxlRWxlbWVudDtcblxuICAgIHByaXZhdGUgaW5uZXJBY3Rpb25zOiBBcnJheTxJQWN0aW9uPiA9IFtdO1xuICAgIHB1YmxpYyBpY29ucyA9IEljb25zO1xuICAgIHByaXZhdGUgZmlsdGVyVXBkYXRlcjogQ29tcHV0ZWRVcGRhdGVyO1xuXG4gICAgcHVibGljIHN0YXRpYyByb3dIZWlnaHQgPSAyMDsgLy8gVE9ETzogd2UgbmVlZCB0byBjYWxjdWxhdGUgcm93IGhlaWdodCBzb21laG93IGJlZm9yZWhhbmRcblxuICAgIHByaXZhdGUgdXBkYXRlQnlGaWx0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGlzT2xkRmlsdGVyID0gKHRoaXMudGFibGVGaWx0ZXIgJiYgdGhpcy50YWJsZUZpbHRlci5sZW5ndGggPiAwKTtcbiAgICAgICAgdGhpcy50YWJsZUZpbHRlciA9IFtdO1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hNb2RlbC5zZWFyY2hWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlci5wdXNoKHsgdmFsdWU6IHRoaXMuc2VhcmNoTW9kZWwuc2VhcmNoVmFsdWUsIG9wOiBcIkNcIiwgZmllbGQ6IG51bGwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goY29sdW1uID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW5GaWx0ZXJWYWx1ZSA9IGNvbHVtbi5maWx0ZXJDb250ZXh0LnZhbHVlO1xuICAgICAgICAgICAgaWYgKGNvbHVtbkZpbHRlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uRmlsdGVyVmFsdWUuZm9yRWFjaCgoZml2OiBGaWx0ZXJJdGVtVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3AgPSBmaXYub3A7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGZpdi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChvcCA9PT0gXCJFUVwiICYmIHZhbCkgfHwgKG9wID09PSBcIkNcIiAmJiB2YWwpIHx8IChvcCA9PT0gXCJJU05cIikgfHwgKG9wID09PSBcIklTTk5cIikpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRmlsdGVyLnB1c2goeyB2YWx1ZTogdmFsLCBvcDogb3AsIGZpZWxkOiBmaXYuZmllbGQgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoKHRoaXMudGFibGVGaWx0ZXIubGVuZ3RoID4gMCkgfHwgKGlzT2xkRmlsdGVyICYmIHRoaXMudGFibGVGaWx0ZXIubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC5wcmV2U2VhcmNoVmFsdWUgPSB0aGlzLnNlYXJjaE1vZGVsLnNlYXJjaFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlnOiBJVGFibGVDb25maWcsIGVsZW1lbnQ/OiBIVE1MRWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNob3dTZWFyY2ggPSBjb25maWcuZW5hYmxlU2VhcmNoID09PSB0cnVlO1xuICAgICAgICB0aGlzLmNyZWF0ZUFjdGlvbnModGhpcy5jb25maWcpO1xuICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbnModGhpcy5jb25maWcpO1xuXG4gICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlciA9IG5ldyBDb21wdXRlZFVwZGF0ZXIoKCkgPT4gdGhpcy51cGRhdGVCeUZpbHRlcigpKTtcbiAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGVyLm9ic2VydmUodGhpcywgXCJfX2ZpbHRlclVwZGF0ZXJWYWx1ZVwiKTsgLy8gVE9ETzogbWFrZSBpdCBlbGVnYW50XG4gICAgICAgIHRoaXMuc2VhcmNoTW9kZWwudXBkYXRlciA9ICgpID0+IHRoaXMudXBkYXRlQnlGaWx0ZXIoKTtcbiAgICAgICAgaWYgKCEhZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc01lcmdlZNChZWxscyA9IGNvbmZpZy5lbmFibGVNZXJnZWTQoWVsbHM7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLnNjcm9sbGVyRWxlbWVudCA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYmxlNGpzLXRhYmxlLXNjcm9sbC1jb250YWluZXJcIilbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIHRoaXMudGFibGVFbGVtZW50ID0gZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRhYmxlXCIpWzBdIGFzIEhUTUxUYWJsZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVzaXplckVsZW1lbnQgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJsZTRqcy10YWJsZVwiKVswXSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgICAgICB2YXIgY2hlY2tMb2FkaW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgc2VsZi5wYXJ0Um93Q291bnQgPSBNYXRoLnJvdW5kKHNlbGYuc2Nyb2xsZXJFbGVtZW50LmNsaWVudEhlaWdodCAvIFRhYmxlLnJvd0hlaWdodCk7XG4gICAgICAgICAgICBpZiAoc2VsZi5zY3JvbGxlckVsZW1lbnQuc2Nyb2xsVG9wIDwgVGFibGUucm93SGVpZ2h0ICYmIHNlbGYubGFzdE9mZnNldEJhY2sgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKChzZWxmLmxhc3RPZmZzZXRCYWNrIC0gc2VsZi5wYXJ0Um93Q291bnQpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRyYXdSb3dzKHNlbGYubGFzdE9mZnNldEJhY2ssIE1hdGgubWF4KDAsIHNlbGYubGFzdE9mZnNldEJhY2sgLSBzZWxmLnBhcnRSb3dDb3VudCksIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3Um93cyhzZWxmLnBhcnRSb3dDb3VudCwgTWF0aC5tYXgoMCwgc2VsZi5sYXN0T2Zmc2V0QmFjayAtIHNlbGYucGFydFJvd0NvdW50KSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChzZWxmLnNjcm9sbGVyRWxlbWVudC5zY3JvbGxUb3AgPj0gc2VsZi50YWJsZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gc2VsZi5zY3JvbGxlckVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJiB0aGlzLmxvYWRNb3JlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5kcmF3Um93cyhzZWxmLnBhcnRSb3dDb3VudCwgc2VsZi5sYXN0T2Zmc2V0LCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxlckVsZW1lbnQub25zY3JvbGwgPSBjaGVja0xvYWRpbmc7XG4gICAgICAgIHRoaXMucmVzaXplckVsZW1lbnQub25yZXNpemUgPSBjaGVja0xvYWRpbmc7XG4gICAgICAgIGNoZWNrTG9hZGluZygpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LnRhcmdldC50YWdOYW1lID09PSBcIlRIRUFEXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5jb250ZW50UmVjdC53aWR0aCA8IDcwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZTRqcy10YWJsZS0tc21hbGxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGFibGU0anMtdGFibGUtLXNtYWxsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUhlYWRIZWlnaHQgPSBlbnRyeS5jb250ZW50UmVjdC5oZWlnaHQgKyA1O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0aGVhZFwiKVswXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd0RldGFpbChyb3dEYXRhOiBJVGFibGVSb3dEYXRhKSB7XG4gICAgICAgIHRoaXMuaXNTaG93RGV0YWlsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGlkZURldGFpbCgpIHtcbiAgICAgICAgdGhpcy5leHBhbmRlZFJvd0tleSA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNTaG93RGV0YWlsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUbyhzdGFydFJvdzogbnVtYmVyKSB7XG4gICAgICAgIGlmIChzdGFydFJvdykge1xuICAgICAgICAgICAgdGhpcy5sYXN0T2Zmc2V0QmFjayA9IHN0YXJ0Um93IC0gMTtcbiAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldCA9IHN0YXJ0Um93IC0gMTtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4geyBjLmNvdW50ID0gbnVsbDsgYy5wcmV2ID0gbnVsbDsgYy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7IGMubGFzdCA9IG51bGwgfSk7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZHJhd1Jvd3ModGhpcy5wYXJ0Um93Q291bnQsIHN0YXJ0Um93IC0gMSwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5oaWRlRGV0YWlsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ29sdW1uKGNvbHVtbjogYW55LCBtb2RlbDogSVRhYmxlQ29uZmlnKTogSVRhYmxlQ29sdW1uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJsZUNvbHVtbihjb2x1bW4sIHRoaXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVDb2x1bW5zKGNvbmZpZzogSVRhYmxlQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGNvbmZpZy5jb2x1bW5zLm1hcChjb2x1bW4gPT5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29sdW1uKGNvbHVtbiwgY29uZmlnKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVBY3Rpb25zKGNvbmZpZzogSVRhYmxlQ29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcuZW5hYmxlU3VtbWFyeSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbm5lckFjdGlvbnMucHVzaChuZXcgQWN0aW9uKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInN1bW1hcnktYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RhYmxlU3VtbWFyeSA9ICF0aGlzLnNob3dUYWJsZVN1bW1hcnk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdmc6IHRoaXMuaWNvbnMuZXF1YWwsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBcInRvcFwiXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy5lbmFibGVNZXJnZWTQoWVsbHNUb2dnbGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJBY3Rpb25zLnB1c2gobmV3IEFjdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtZXJnZWTQoWVsbHMtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNZXJnZWTQoWVsbHMgPSAhdGhpcy5pc01lcmdlZNChZWxscztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN2ZzogdGhpcy5pY29ucy50YWJsZSxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwidG9wXCJcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLmVuYWJsZUVkaXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJBY3Rpb25zLnB1c2gobmV3IEFjdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzYXZlLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXNJbnNlcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kaWZ5ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5udW1iZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci5jZWxscy5mb3JFYWNoKGMgPT4gYy50ZXh0ICE9PSBjLmRhdGEgJiYgKG1vZGlmeVtjLm5hbWVdID0gYy50ZXh0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0VtcHR5KG1vZGlmeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVByb3ZpZGVyLnNhdmVEYXRhKHRoaXMua2V5Q29sdW1uLCByLnJvd0RhdGFbdGhpcy5rZXlDb2x1bW5dLCBtb2RpZnkpKSByLmNlbGxzLmZvckVhY2goYyA9PiBjLmRhdGEgPSBjLnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmNlbGxzLmZvckVhY2goYyA9PiBtb2RpZnlbYy5uYW1lXSA9IGMudGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YVByb3ZpZGVyLmluc2VydERhdGEodGhpcy5rZXlDb2x1bW4sIG1vZGlmeSkpIGlzSW5zZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luc2VydCkgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdmc6IHRoaXMuaWNvbnMuc2F2ZSxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwiYm90dG9tXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG5ldyBBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlbGV0ZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLm51bWJlciA+IDApIHRoaXMucm93cy5zbGljZSh0aGlzLnJvd3MuaW5kZXhPZihyKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXIuZGVsZXRlRGF0YSh0aGlzLmtleUNvbHVtbiwgdGhpcy5zZWxlY3RlZFJvd3MubWFwKHIgPT4gci5udW1iZXIgPiAwICYmIHIucm93RGF0YVt0aGlzLmtleUNvbHVtbl0pLCAoXyA9PiB0aGlzLnJlZnJlc2goKSkpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN2ZzogdGhpcy5pY29ucy5kZWwsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogXCJib3R0b21cIlxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG5ldyBBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5ld1Jvdy1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNjcm9sbGVyRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JvdzogSVRhYmxlUm93RGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYyA9PiBjLnZpc2libGUgJiYgKG5ld1Jvd1tjLm5hbWVdID0gXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzLnVuc2hpZnQodGhpcy5jcmVhdGVSb3cobmV3Um93LCAtMSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdmc6IHRoaXMuaWNvbnMuYWRkLFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IFwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGF0YVByb3ZpZGVyOiBJRGF0YVByb3ZpZGVyID0gdW5kZWZpbmVkO1xuICAgIGdldCBkYXRhUHJvdmlkZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhUHJvdmlkZXIgfHwgdGhpcy5jb25maWc7XG4gICAgfVxuICAgIHNldCBkYXRhUHJvdmlkZXIocHJvdmlkZXI6IElEYXRhUHJvdmlkZXIpIHtcbiAgICAgICAgdGhpcy5fZGF0YVByb3ZpZGVyID0gcHJvdmlkZXI7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIC8vIGdldCBkYXRhKCkge1xuICAgIC8vICAgICByZXR1cm4gW107XG4gICAgLy8gfVxuICAgIHNldCBkYXRhKF9kYXRhOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHRoaXMuZGF0YVByb3ZpZGVyID0gbmV3IEFycmF5RGF0YVByb3ZpZGVyKF9kYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5sYXN0T2Zmc2V0QmFjayA9IDA7XG4gICAgICAgIHRoaXMubGFzdE9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4geyBjLmNvdW50ID0gbnVsbDsgYy5wcmV2ID0gbnVsbDsgYy5wcmV2VmFsdWUgPSB1bmRlZmluZWQ7IH0pO1xuICAgICAgICB0aGlzLnJvd3MgPSBbXTtcbiAgICAgICAgdGhpcy5kcmF3Um93cyh0aGlzLnBhcnRSb3dDb3VudCwgMCwgZmFsc2UpO1xuICAgICAgICB0aGlzLmhpZGVEZXRhaWwoKTtcbiAgICB9XG5cbiAgICBkcmF3Um93cyhsaW1pdDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgYmFjayA9IGZhbHNlKSB7XG4gICAgICAgIGlmICghdGhpcy5sb2FkaW5nTXV0ZXgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ011dGV4ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVByb3ZpZGVyLmdldERhdGEoXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucy5maWx0ZXIoYyA9PiBjLm9yZGVyICE9PSB1bmRlZmluZWQpLm1hcChjID0+IDxhbnk+eyBmaWVsZDogYy5uYW1lLCBkZXNjOiBjLm9yZGVyIH0pLFxuICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIsXG4gICAgICAgICAgICAgICAgbnVsbCAvKiYmIHRoaXMucGlubmVkUm93S2V5KCkqLyxcbiAgICAgICAgICAgICAgICBiYWNrLFxuICAgICAgICAgICAgICAgIChkYXRhLCBuZXdPZmZzZXQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyLCBiYWNrOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RPZmZzZXRCYWNrID0gdGhpcy5sYXN0T2Zmc2V0QmFjayAtIGxpbWl0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0T2Zmc2V0ID0gdGhpcy5sYXN0T2Zmc2V0ICsgbGltaXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTW9yZUJhY2sgPSB0aGlzLmxhc3RPZmZzZXRCYWNrID4gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTW9yZSA9IHRoaXMubGFzdE9mZnNldCA8PSB0b3RhbENvdW50O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Um93cyA9IHRoaXMucm93cztcbiAgICAgICAgICAgICAgICAgICAgKGRhdGEgfHwgW10pLmZvckVhY2goKGRhdGFJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1JvdyA9IHRoaXMuY3JlYXRlUm93KGJhY2sgPyBkYXRhW2RhdGEubGVuZ3RoIC0gMSAtIE51bWJlcihpbmRleCldIDogZGF0YUl0ZW0sIGJhY2sgPyBkYXRhLmxlbmd0aCAtIDEgLSBOdW1iZXIoaW5kZXgpICsgb2Zmc2V0IDogTnVtYmVyKGluZGV4KSArIG9mZnNldCwgYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYmFjaykgeyBjdXJyZW50Um93cy51bnNoaWZ0KG5ld1Jvdyk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyBjdXJyZW50Um93cy5wdXNoKG5ld1Jvdyk7IH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ011dGV4ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xpY2tSb3cocm93OiBJVGFibGVSb3csIGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmZvckVhY2gociA9PiByLnNlbGVjdGVkID0gZmFsc2UpO1xuICAgICAgICByb3cuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZWxlY3RSb3cocm93OiBJVGFibGVSb3csIGV2ZW50KSB7XG4gICAgICAgIHJvdy5zZWxlY3RlZCA9ICFyb3cuc2VsZWN0ZWQ7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiB0aGlzLmxhc3RTZWxlY3RSb3cpIHtcbiAgICAgICAgICAgIHRoaXMucm93cy5maWx0ZXIoZSA9PiBlLm51bWJlciA+PSBNYXRoLm1pbih0aGlzLmxhc3RTZWxlY3RSb3cubnVtYmVyLCByb3cubnVtYmVyKSAmJiBlLm51bWJlciA8PSBNYXRoLm1heCh0aGlzLmxhc3RTZWxlY3RSb3cubnVtYmVyLCByb3cubnVtYmVyKSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChlID0+IGUuc2VsZWN0ZWQgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm93LnNlbGVjdGVkKSB0aGlzLmxhc3RTZWxlY3RSb3cgPSByb3c7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUm93cy5sZW5ndGggIT09IDEpIHRoaXMuaGlkZURldGFpbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGlja0NvbHVtbiA9IChjb2x1bW46IElUYWJsZUNvbHVtbiwgZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93RGV0YWlsKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVEZXRhaWwoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3T3JkZXIgPSBjb2x1bW4ub3JkZXIgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogIWNvbHVtbi5vcmRlcjtcbiAgICAgICAgaWYgKCFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLm1hcCgoYykgPT4gYy5vcmRlciA9IHVuZGVmaW5lZClcbiAgICAgICAgfVxuICAgICAgICBjb2x1bW4ub3JkZXIgPSBuZXdPcmRlciBhcyBhbnk7IC8vIFRPRE86IHNvbWV0aGluZyB3cm9uZyBpcyBoZXJlXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVSb3coZGF0YTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXIgfSwgbnVtOiBudW1iZXIsIGJhY2s6IGJvb2xlYW4pOiBJVGFibGVSb3cge1xuICAgICAgICBsZXQgcm93Q2VsbHMgPSBbXTtcbiAgICAgICAgbGV0IGxhc3RUZXh0ID0gbnVsbDtcbiAgICAgICAgbGV0IGNvbG9yQ2VsbCA9IG51bGwsIGNvbG9yUm93ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb2x1bW5zLnJldmVyc2UoKS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IG5ldyBUYWJsZUNlbGwoKTtcbiAgICAgICAgICAgIGNlbGwuaW5pdGlhbGl6ZShjb2wsIGJhY2ssIGRhdGEsIGNvbG9yQ2VsbCk7XG4gICAgICAgICAgICBpZiAoISFsYXN0VGV4dCkge1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dCArPSAoXCIvXCIgKyBsYXN0VGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYXN0VGV4dCA9IChjb2wuY29uY2F0UHJldiAmJiAhY29sLnJvd19jb2xvcikgPyBjZWxsLnRleHQgOiBudWxsO1xuICAgICAgICAgICAgY29sb3JSb3cgPSAoY29sLnJvd19jb2xvciAmJiAhY29sLmNvbmNhdFByZXYpID8gKGNvbC50eXBlID09PSBcImJvb2xcIiA/IChkYXRhW2NvbC5uYW1lXSA/IHRoaXMuY29uZmlnLnNlbGVjdENlbGxDb2xvciA6IG51bGwpIDogZGF0YVtjb2wubmFtZV0pIDogY29sb3JSb3c7XG4gICAgICAgICAgICBjb2xvckNlbGwgPSAoY29sLnJvd19jb2xvciAmJiBjb2wuY29uY2F0UHJldikgPyAoY29sLnR5cGUgPT09IFwiYm9vbFwiID8gKGRhdGFbY29sLm5hbWVdID8gdGhpcy5jb25maWcuc2VsZWN0Q2VsbENvbG9yIDogbnVsbCkgOiBkYXRhW2NvbC5uYW1lXSkgOiBudWxsO1xuICAgICAgICAgICAgaWYgKGNvbC52aXNpYmxlKSByb3dDZWxscy5wdXNoKGNlbGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb2x1bW5zLnJldmVyc2UoKTtcbiAgICAgICAgbGV0IHJvd19pZCA9IGRhdGFbdGhpcy5rZXlDb2x1bW5dO1xuICAgICAgICBjb25zdCByb3cgPSBuZXcgVGFibGVSb3coKTtcbiAgICAgICAgcm93LmNlbGxzID0gcm93Q2VsbHMucmV2ZXJzZSgpO1xuICAgICAgICByb3cucm93RGF0YSA9IGRhdGE7XG4gICAgICAgIHJvdy5pZCA9IHJvd19pZDtcbiAgICAgICAgcm93Lm51bWJlciA9IG51bSArIDE7XG4gICAgICAgIHJvdy5zZWxlY3RlZCA9IHJvd19pZCAmJiAodGhpcy5leHBhbmRlZFJvd0tleSA9PT0gcm93X2lkKTtcbiAgICAgICAgcm93LmNvbG9yID0gY29sb3JSb3c7XG4gICAgICAgIHJvdy5zZWxlY3QgPSAoZGF0YSwgZXZlbnQpID0+IHRoaXMuc2VsZWN0Um93KGRhdGEsIGV2ZW50KSxcbiAgICAgICAgICAgIHJvdy5jbGljayA9IChkYXRhLCBldmVudCkgPT4gdGhpcy5jbGlja1JvdyhkYXRhLCBldmVudClcbiAgICAgICAgcmV0dXJuIHJvdztcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcm93RXhwYW5kZWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydEVkaXRDZWxsID0gKGNlbGw6IElUYWJsZUNlbGwpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudENlbGxFZGl0b3IpIHRoaXMuY3VycmVudENlbGxFZGl0b3IuaW5wbGFjZUVkaXRvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgY2VsbC5pbnBsYWNlRWRpdG9yID0gbmV3IElucGxhY2VFZGl0b3IoY2VsbCk7XG4gICAgICAgIHRoaXMuY3VycmVudENlbGxFZGl0b3IgPSBjZWxsO1xuICAgICAgICB0aGlzLmNvbXBsZXRlRWRpdENlbGwoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcGxldGVFZGl0Q2VsbCgpIHtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaGFzQWN0aXZlSW5wbGFjZUVkaXRvckNvcmUoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhhc0FjdGl2ZUlucGxhY2VFZGl0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0FjdGl2ZUlucGxhY2VFZGl0b3JDb3JlKCk7XG4gICAgfVxuXG4gICAgY3VyQ29sID0gdW5kZWZpbmVkO1xuICAgIG54dENvbCA9IHVuZGVmaW5lZDtcbiAgICBwYWdlWCA9IHVuZGVmaW5lZDtcbiAgICBueHRDb2xXaWR0aCA9IHVuZGVmaW5lZDtcbiAgICBjdXJDb2xXaWR0aCA9IHVuZGVmaW5lZFxuXG4gICAgcHVibGljIGxvZ01vdXNlT3ZlciA9IChkLCBlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlclJpZ2h0ID0gJzJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknO1xuICAgIH1cbiAgICBwdWJsaWMgbG9nTW91c2VPdXQgPSAoZCwgZSkgPT4ge1xuICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJSaWdodCA9ICcnO1xuICAgIH1cbiAgICBwdWJsaWMgbG9nTW91c2VNb3ZlID0gKGQsIGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY3VyQ29sICYmIGUuYnV0dG9ucykge1xuICAgICAgICAgICAgdmFyIGRpZmZYID0gZS5wYWdlWCAtIHRoaXMucGFnZVg7XG4gICAgICAgICAgICB0aGlzLm54dENvbCAmJiAodGhpcy5ueHRDb2wuc3R5bGUud2lkdGggPSAodGhpcy5ueHRDb2xXaWR0aCAtIChkaWZmWCkpICsgJ3B4Jyk7XG4gICAgICAgICAgICB0aGlzLmN1ckNvbC5zdHlsZS53aWR0aCA9ICh0aGlzLmN1ckNvbFdpZHRoICsgZGlmZlgpICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgbG9nTW91c2VEb3duID0gKGQsIGUpID0+IHtcbiAgICAgICAgdGhpcy5jdXJDb2wgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLm54dENvbCA9IHRoaXMuY3VyQ29sLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcgPyB0aGlzLmN1ckNvbC5uZXh0RWxlbWVudFNpYmxpbmcgOiB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucGFnZVggPSBlLnBhZ2VYO1xuICAgICAgICB2YXIgcGFkZGluZyA9IHRoaXMucGFkZGluZ0RpZmYodGhpcy5jdXJDb2wpO1xuICAgICAgICB0aGlzLmN1ckNvbFdpZHRoID0gdGhpcy5jdXJDb2wub2Zmc2V0V2lkdGggLSBwYWRkaW5nO1xuICAgICAgICBpZiAodGhpcy5ueHRDb2wpIHRoaXMubnh0Q29sV2lkdGggPSB0aGlzLm54dENvbC5vZmZzZXRXaWR0aCAtIHBhZGRpbmc7XG4gICAgfVxuICAgIHB1YmxpYyBsb2dNb3VzZVVwID0gKGQsIGUpID0+IHtcbiAgICAgICAgdGhpcy5jdXJDb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubnh0Q29sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBhZ2VYID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm54dENvbFdpZHRoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmN1ckNvbFdpZHRoID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHBhZGRpbmdEaWZmKGNvbCkge1xuICAgICAgICBpZiAodGhpcy5nZXRTdHlsZVZhbChjb2wsICdib3gtc2l6aW5nJykgPT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFkTGVmdCA9IHRoaXMuZ2V0U3R5bGVWYWwoY29sLCAncGFkZGluZy1sZWZ0Jyk7XG4gICAgICAgIHZhciBwYWRSaWdodCA9IHRoaXMuZ2V0U3R5bGVWYWwoY29sLCAncGFkZGluZy1yaWdodCcpO1xuICAgICAgICByZXR1cm4gKHBhcnNlSW50KHBhZExlZnQpICsgcGFyc2VJbnQocGFkUmlnaHQpKTtcbiAgICB9XG4gICAgZ2V0U3R5bGVWYWwoZWxtLCBjc3MpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsbSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShjc3MpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByb290TGV2ZWw6IGFueSA9IHRydWU7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc051bWJlcjogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzTWVyZ2Vk0KFlbGxzOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgbG9hZGluZ011dGV4OiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogdHJ1ZSB9KSBsb2FkTW9yZTogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGxvYWRNb3JlQmFjazogYm9vbGVhbjtcbiAgICBsYXN0T2Zmc2V0ID0gMDtcbiAgICBsYXN0T2Zmc2V0QmFjayA9IDA7XG4gICAgcGFydFJvd0NvdW50ID0gMTA7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBbXSwgb25TZXQ6ICh2YWw6IElUYWJsZUNvbHVtbltdLCB0YXJnZXQ6IFRhYmxlKSA9PiB7XG4gICAgICAgICAgICB0YXJnZXQudmlld0ZpbHRlclRhYmxlID0gbmV3IENvbXB1dGVkVXBkYXRlcigoKSA9PiB2YWwuZmlsdGVyKGMgPT4gYy5maWx0ZXJDb250ZXh0LnNob3dGaWx0ZXIpLmxlbmd0aCA+IDApIGFzIGFueTtcbiAgICAgICAgfVxuICAgIH0pIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj47XG4gICAgZ2V0IGtleUNvbHVtbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcua2V5Q29sdW1uO1xuICAgIH1cbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IFtdIH0pIHJvd3M6IEFycmF5PElUYWJsZVJvdz47XG4gICAgZ2V0IHNlbGVjdGVkUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93cy5maWx0ZXIociA9PiByLnNlbGVjdGVkKTtcbiAgICB9XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBzaG93VGFibGVTdW1tYXJ5OiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgc2hvd1NlYXJjaDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBvblNldDogKG5ld1ZhbHVlOiBudW1iZXIsIHRhcmdldDogVGFibGUpID0+IHtcbiAgICAgICAgICAgIHRhcmdldC5uYXZpZ2F0ZVRvKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pIHN0YXJ0Um93OiBudW1iZXI7XG4gICAgbGFzdFNlbGVjdFJvdyA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiAwIH0pIHRvdGFsQ291bnQ6IG51bWJlcjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IDAgfSkgdGFibGVIZWFkSGVpZ2h0OiBudW1iZXI7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiB0cnVlIH0pIHNob3dUYWJsZUZpbHRlcjogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIHZpZXdGaWx0ZXJUYWJsZTogYm9vbGVhbjtcbiAgICB0YWJsZUZpbHRlcjogSVRhYmxlRmlsdGVyW107XG4gICAgY3VycmVudENlbGxFZGl0b3I6IElUYWJsZUNlbGw7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc1Nob3dEZXRhaWw6IGJvb2xlYW47XG4gICAgZXhwYW5kZWRSb3dLZXk7XG5cbiAgICBzZWFyY2hNb2RlbCA9IG5ldyBTZWFyY2hNb2RlbCgpO1xuXG4gICAgZ2V0QWN0aW9ucyA9IChjb250YWluZXI/OiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IFtdLmNvbmNhdCh0aGlzLmlubmVyQWN0aW9ucykuY29uY2F0KHRoaXMuY29uZmlnLmFjdGlvbnMgfHwgW10pO1xuICAgICAgICByZXR1cm4gYWN0aW9ucy5maWx0ZXIoYWN0aW9uID0+IGFjdGlvbi5jb250YWluZXIgPT09IGNvbnRhaW5lcik7XG4gICAgfVxuICAgIGdldCB0b3BBY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3Rpb25zKCd0b3AnKTtcbiAgICB9XG4gICAgZ2V0IGRyb3Bkb3duQWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWN0aW9ucygnZHJvcGRvd24nKTtcbiAgICB9XG4gICAgZ2V0IGJvdHRvbUFjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjdGlvbnMoJ2JvdHRvbScpO1xuICAgIH1cbiAgICBnZXQgbm9EYXRhVGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJub0RhdGFcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSVRhYmxlQ2VsbFR5cGUsIFRhYmxlQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcblxuZXhwb3J0IGNsYXNzIE51bWJlckNlbGwgaW1wbGVtZW50cyBJVGFibGVDZWxsVHlwZSB7XG4gICAgbmFtZTogc3RyaW5nID0gXCJudW1iZXJcIjtcbiAgICBjc3M6IHN0cmluZyA9IFwidGFibGU0anMtdGFibGUtY2VsbC0tcmlnaHRcIlxufVxuXG5UYWJsZUNlbGwucmVnaXN0ZXJDZWxsVHlwZShuZXcgTnVtYmVyQ2VsbCgpKTsiLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcblxuLyoqXG4gKiBUaGUgY29sbGVjdGlvbiBvZiBkYXRhIGZvciBhIHRhYmxlIHJvdy4gVGhlIGtleSBpcyB0aGUgbmFtZSBvZiB0aGUgY29sdW1uLiBUaGUgdmFsdWUgaXMgdGhlIGNvbnRlbnQgb2YgdGhlIHRhYmxlIGNlbGwuXG4gKi9cbiBleHBvcnQgaW50ZXJmYWNlIElUYWJsZVJvd0RhdGEge1xuICAgIC8qKiBUYWJsZSBjZWxsIGNvbnRlbnQgKi9cbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXJcbn1cblxuXG4vKipcbiAqIEluZm9ybWF0aW9uIG5lZWRlZCB0byByZW5kZXIgYSB0YWJsZSByb3dcbiAqL1xuIGV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlUm93IHtcbiAgICAvKiogQXJyYXkgY29udGFpbmluZyBvYnNlcnZhYmxlIHRhYmxlIGNlbGxzICovXG4gICAgY2VsbHM6IEFycmF5PElUYWJsZUNlbGw+LFxuICAgIC8qKiBUaGUgY29sbGVjdGlvbiBvZiBkYXRhIGZvciBhIHRhYmxlIHJvdyAqL1xuICAgIHJvd0RhdGE6IElUYWJsZVJvd0RhdGEsXG4gICAgLyoqICAqL1xuICAgIGlkOiBhbnksXG4gICAgLyoqICAqL1xuICAgIG51bWJlcjogbnVtYmVyLFxuICAgIHNlbGVjdGVkOiBib29sZWFuLFxuICAgIGNvbG9yOiBzdHJpbmcsXG4gICAgc2VsZWN0OiAoZGF0YTogSVRhYmxlUm93LCBldmVudCkgPT4gdm9pZCxcbiAgICBjbGljazogKGRhdGE6IElUYWJsZVJvdywgZXZlbnQpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlUm93IGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElUYWJsZVJvdyB7XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBbXSB9KSBjZWxsczogSVRhYmxlQ2VsbFtdO1xuICAgIHJvd0RhdGE6IElUYWJsZVJvd0RhdGE7XG4gICAgaWQ6IGFueTtcbiAgICBudW1iZXI6IG51bWJlcjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIHNlbGVjdGVkOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSgpIGNvbG9yOiBzdHJpbmc7XG4gICAgc2VsZWN0OiAoZGF0YTogSVRhYmxlUm93LCBldmVudDogYW55KSA9PiB2b2lkO1xuICAgIGNsaWNrOiAoZGF0YTogSVRhYmxlUm93LCBldmVudDogYW55KSA9PiB2b2lkO1xufSIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5cbmltcG9ydCBcIi4vc2VhcmNoLnNjc3NcIjtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaE1vZGVsIGV4dGVuZHMgQmFzZSB7XG4gICAgc2VhcmNoID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnByZXZTZWFyY2hWYWx1ZSA9IHRoaXMuc2VhcmNoVmFsdWU7XG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSB0ZXh0O1xuICAgICAgICB0aGlzLnVwZGF0ZXIgJiYgdGhpcy51cGRhdGVyKCk7XG4gICAgfVxuICAgIHVwZGF0ZXI6ICgpID0+IHZvaWQ7XG4gICAgQHByb3BlcnR5KCkgcHJldlNlYXJjaFZhbHVlOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgc2VhcmNoVmFsdWU6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJVGFibGVDb2x1bW4gfSBmcm9tIFwiLi9jb2x1bW5cIjtcblxuaW1wb3J0IFwiLi9zdW1tYXJ5LnNjc3NcIjtcblxuY29uc3QgRnVuY3Rpb25zOiBBcnJheTx7IHRpdGxlOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmc7IGhpbnQ6IHN0cmluZywgdHlwZXM/OiBzdHJpbmdbXSB9PiA9ICBbXG4gIHsgdGl0bGU6IFwiLVwiLCB2YWx1ZTogXCJcIiwgaGludDogXCJcIiB9LCBcbiAgeyB0aXRsZTogXCLOo1wiLCB2YWx1ZTogXCJzdW1cIiwgaGludDogXCJTdW0gb2YgY2VsbHMgZm9yIHRoaXMgdGFibGUgY29sdW1uXCIsIHR5cGVzOiBbXCJpbnRlZ2VyXCIsIFwibW9uZXlcIiwgXCJudW1iZXJcIl0gfSwgXG4gIHsgdGl0bGU6IFwieMyEXCIsIHZhbHVlOiBcImF2Z1wiLCBoaW50OiBcIkFyaXRobWV0aWMgbWVhbiBpbiB0aGlzIHRhYmxlIGNvbHVtblwiLCB0eXBlczogW1wiaW50ZWdlclwiLCBcIm1vbmV5XCIsIFwibnVtYmVyXCJdIH0sIFxuICB7IHRpdGxlOiBcIm1pblwiLCB2YWx1ZTogXCJtaW5cIiwgaGludDogXCJNaW5pbXVtIHZhbHVlIGluIHRoaXMgdGFibGUgY29sdW1uXCIsIHR5cGVzOiBbXCJpbnRlZ2VyXCIsIFwibW9uZXlcIiwgXCJkYXRlXCIsIFwibnVtYmVyXCJdIH0sXG4gIHsgdGl0bGU6IFwibWF4XCIsIHZhbHVlOiBcIm1heFwiLCBoaW50OiBcIk1heGltdW0gdmFsdWUgaW4gdGhpcyB0YWJsZSBjb2x1bW5cIiwgdHlwZXM6IFtcImludGVnZXJcIiwgXCJtb25leVwiLCBcImRhdGVcIiwgXCJudW1iZXJcIl0gfSxcbiAgeyB0aXRsZTogXCLOnVwiLCB2YWx1ZTogXCJjb3VudFwiLCBoaW50OiBcIk51bWJlciBvZiBub24tYmxhbmsgY2VsbHMgaW4gdGhpcyBjb2x1bW5cIiB9LFxuICB7IHRpdGxlOiBcIlVcIiwgdmFsdWU6IFwidW5pcXVlXCIsIGhpbnQ6IFwiTnVtYmVyIG9mIHVuaXF1ZSBjZWxscyBpbiB0aGlzIGNvbHVtblwiIH0sXG5dO1xuXG5leHBvcnQgY2xhc3MgVGFibGVTdW1tYXJ5SXRlbSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBwdWJsaWMgdmFsdWU6IHN0cmluZyApIHtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVTdW1tYXJ5IGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uOiBJVGFibGVDb2x1bW4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3VtbWFyeUl0ZW1zID0gRnVuY3Rpb25zLmZpbHRlcihmdW5jRGVzY3JpcHRpb24gPT4ge1xuICAgICAgICByZXR1cm4gIWZ1bmNEZXNjcmlwdGlvbi50eXBlcyB8fCBmdW5jRGVzY3JpcHRpb24udHlwZXMuaW5kZXhPZihjb2x1bW4udHlwZSkgIT09IC0xXG4gICAgICB9KS5tYXAoZnVuY0Rlc2NyaXB0aW9uID0+IG5ldyBUYWJsZVN1bW1hcnlJdGVtIChmdW5jRGVzY3JpcHRpb24udGl0bGUsIGZ1bmNEZXNjcmlwdGlvbi52YWx1ZSkpO1xuICB9XG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW4uc3VtbWFyeVZhbHVlO1xuICB9XG4gIHNldCB2YWx1ZSh2YWw6IGFueSkge1xuICAgIHRoaXMuY29sdW1uLnN1bW1hcnlWYWx1ZSA9IHZhbDtcbiAgfVxuICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IG51bGwsIG9uU2V0OiAodmFsLCB0YXJnZXQ6IFRhYmxlU3VtbWFyeSkgPT4ge1xuICAgIHRhcmdldC5jb2x1bW4uc3VtbWFyeVBhcmFtcyA9IHsgZnVuYzogdmFsLCBmaWVsZDogdGFyZ2V0LmNvbHVtbi5uYW1lIH07XG4gIH0gfSkgZnVuYzogYW55O1xuICBzdW1tYXJ5SXRlbXM6IEFycmF5PFRhYmxlU3VtbWFyeUl0ZW0+O1xufVxuIiwiaW1wb3J0IHsgSURhdGFQcm92aWRlciB9IGZyb20gXCIuL2RhdGEtcHJvdmlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIEFycmF5RGF0YVByb3ZpZGVyIGltcGxlbWVudHMgSURhdGFQcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGRhdGE6IEFycmF5PGFueT4pIHtcblxuICAgIH1cblxuICAgIGZpbHRlcmVkKGZpbHRlcnMsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE/LmZpbHRlcihyb3cgPT4gXG4gICAgICAgICAgICBmaWx0ZXJzLmV2ZXJ5KGYgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaChmLm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJFUVwiOiByZXR1cm4gZi52YWx1ZS5pbmNsdWRlcyhyb3dbZi5maWVsZF0pOyBcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkNcIjogcmV0dXJuIGYuZmllbGQgPyB+cm93W2YuZmllbGRdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKS5pbmRleE9mKGYudmFsdWUudG9VcHBlckNhc2UoKSkgOiBPYmplY3Qua2V5cyhyb3cpLnNvbWUoayA9PiAhIShyb3dba10gJiYgcm93W2tdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKS5pbmRleE9mKGYudmFsdWUudG9VcHBlckNhc2UoKSkgIT09IC0xKSk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJJU05cIjogIHJldHVybiAhKHJvd1tmLmZpZWxkXSk7IFxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiSVNOTlwiOiAgcmV0dXJuICEhKHJvd1tmLmZpZWxkXSk7IFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gdHJ1ZTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSA/PyBbXTtcbiAgICB9XG5cbiAgICBnZXREYXRhKGxpbWl0LCBvZmZzZXQsIG9yZGVyLCBmaWx0ZXJzLCBrZXksIGJhY2ssIGNhbGxiYWNrKSB7XG4gICAgICAgIGZ1bmN0aW9uIHNvcnRmdW5jKGEsIGIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtvcmRlcltpXS5maWVsZF0gPT09IGJbb3JkZXJbaV0uZmllbGRdKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFbb3JkZXJbaV0uZmllbGRdID4gYltvcmRlcltpXS5maWVsZF0gPyAxIDogLTEpICogKG9yZGVyW2ldLmRlc2MgPyAtMSA6IDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgKG9yZGVyLmxlbmd0aCA+IDApICYmIHRoaXMuZGF0YS5zb3J0KHNvcnRmdW5jKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0aGlzLmZpbHRlcmVkKGZpbHRlcnMsIHRoaXMuZGF0YSk7XG4gICAgICAgIGZvciAodmFyIGkgPSBvZmZzZXQgPiAwID8gb2Zmc2V0IDogMDsgaSA8IG9mZnNldCArIGxpbWl0ICYmIGZpbHRlcmVkRGF0YSAmJiBpIDwgZmlsdGVyZWREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChmaWx0ZXJlZERhdGFbaV0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCcyLdGB0LXQutGD0L3QtNC90LDRjyDQt9Cw0LTQtdGA0LbQutCwINC/0YDQvtGI0LvQsCcpO1xuICAgICAgICAvLyAgICAgY2FsbGJhY2socmVzdWx0LCBvZmZzZXQgKyBsaW1pdCwgZmlsdGVyZWREYXRhLmxlbmd0aCwgYmFjaylcbiAgICAgICAgLy8gfSwgMjAwMCk7XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCwgb2Zmc2V0ICsgbGltaXQsIGZpbHRlcmVkRGF0YS5sZW5ndGgsIGJhY2spO1xuICAgIH1cblxuICAgIGdldFN1bW1hcnkoZnVuYywgZmllbGQsIGZpbHRlcnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRoaXMuZmlsdGVyZWQoZmlsdGVycywgdGhpcy5kYXRhKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZpbHRlcmVkRGF0YS5sZW5ndGggPyBmaWx0ZXJlZERhdGFbMF1bZmllbGRdIDogZmFsc2U7XG4gICAgICAgIGxldCBzdW0gPSAwLCBjb3VudCA9IDAsIHVuaXF1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZnVuYykge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzdW1cIjogcmVzdWx0ID0gcmVzdWx0ICsgcm93W2ZpZWxkXTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImF2Z1wiOiBzdW0gPSBzdW0gKyByb3dbZmllbGRdOyBjb3VudCsrOyByZXN1bHQgPSBzdW0gLyBjb3VudDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1pblwiOiByZXN1bHQgPSByZXN1bHQgPCByb3dbZmllbGRdID8gcmVzdWx0IDogcm93W2ZpZWxkXTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIm1heFwiOiByZXN1bHQgPSByZXN1bHQgPiByb3dbZmllbGRdID8gcmVzdWx0IDogcm93W2ZpZWxkXTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNvdW50XCI6IGlmIChyb3dbZmllbGRdKSBjb3VudCsrOyByZXN1bHQgPSBjb3VudDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInVuaXF1ZVwiOiBpZiAoIXVuaXF1ZXMuaW5jbHVkZXMocm93W2ZpZWxkXSkpIHsgdW5pcXVlcy5wdXNoKHJvd1tmaWVsZF0pOyB9IHJlc3VsdCA9IHVuaXF1ZXMubGVuZ3RoOyBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG5cbiAgICBnZXRDb2x1bW5EYXRhKGNvbHVtbk5hbWUsIGZpbHRlciwgbGltaXQsIG9mZnNldCwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdLCB1bmlxdWVzID0gW107XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRoaXMuZGF0YS5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIGlmICgoIShmaWx0ZXIpIHx8IH5yb3dbY29sdW1uTmFtZV0udG9VcHBlckNhc2UoKS5pbmRleE9mKGZpbHRlci50b1VwcGVyQ2FzZSgpKSkgJiYgIXVuaXF1ZXMuaW5jbHVkZXMocm93W2NvbHVtbk5hbWVdKSkgeyB1bmlxdWVzLnB1c2gocm93W2NvbHVtbk5hbWVdKTsgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAodmFyIGkgPSBvZmZzZXQgPiAwID8gb2Zmc2V0IDogMDsgaSA8IG9mZnNldCArIGxpbWl0ICYmIHVuaXF1ZXMgJiYgaSA8IHVuaXF1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHVuaXF1ZXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgc2F2ZURhdGEoa2V5TmFtZTpzdHJpbmcsIGtleTphbnksIG1vZGlmeTp7fSkge1xuICAgICAgICBPYmplY3Qua2V5cyhtb2RpZnkpLmZvckVhY2goIHA9PiB0aGlzLmRhdGEuZmluZChyID0+IHJba2V5TmFtZV0gPT0ga2V5KVtwXSA9IG1vZGlmeVtwXSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGluc2VydERhdGEoa2V5TmFtZTpzdHJpbmcsIG1vZGlmeTp7fSkge1xuICAgICAgICBjb25zb2xlLmxvZyhtb2RpZnkpO1xuICAgICAgICBtb2RpZnlba2V5TmFtZV0gPSB0aGlzLmRhdGEubGVuZ3RoICsgMTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2gobW9kaWZ5KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZGVsZXRlRGF0YShrZXlOYW1lOnN0cmluZywga2V5czphbnlbXSwgY2FsbGJhY2spIHtcbiAgICAgICAga2V5cy5mb3JFYWNoKGsgPT4gdGhpcy5kYXRhLmZpbmQociA9PiB0aGlzLmRhdGEuc3BsaWNlKHRoaXMuZGF0YS5pbmRleE9mKHRoaXMuZGF0YS5maW5kKHIgPT4gcltrZXlOYW1lXSA9PSBrKSksMSkpKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9IFxuXG59IiwiaW1wb3J0IHsgSURhdGFQcm92aWRlciB9IGZyb20gXCIuL2RhdGEtcHJvdmlkZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3REYXRhKHVybCA9ICcnLCBkYXRhID0ge30pIHtcbiAgICAvLyBEZWZhdWx0IG9wdGlvbnMgYXJlIG1hcmtlZCB3aXRoICpcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAvLyAgIG1vZGU6ICdjb3JzJywgLy8gbm8tY29ycywgKmNvcnMsIHNhbWUtb3JpZ2luXG4gICAgICAgIC8vICAgY2FjaGU6ICduby1jYWNoZScsIC8vICpkZWZhdWx0LCBuby1jYWNoZSwgcmVsb2FkLCBmb3JjZS1jYWNoZSwgb25seS1pZi1jYWNoZWRcbiAgICAgICAgLy8gICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICAgIC8vICAgcmVkaXJlY3Q6ICdmb2xsb3cnLCAvLyBtYW51YWwsICpmb2xsb3csIGVycm9yXG4gICAgICAgIC8vICAgcmVmZXJyZXJQb2xpY3k6ICduby1yZWZlcnJlcicsIC8vIG5vLXJlZmVycmVyLCAqY2xpZW50XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLCAvLyAqR0VULCBQT1NULCBQVVQsIERFTEVURSwgZXRjLlxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpIC8vIGJvZHkgZGF0YSB0eXBlIG11c3QgbWF0Y2ggXCJDb250ZW50LVR5cGVcIiBoZWFkZXJcbiAgICB9KTtcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyBwYXJzZXMgSlNPTiByZXNwb25zZSBpbnRvIG5hdGl2ZSBKYXZhU2NyaXB0IG9iamVjdHNcbn1cblxuZXhwb3J0IGNsYXNzIFJlbW90ZURhdGFQcm92aWRlciBpbXBsZW1lbnRzIElEYXRhUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB1cmw6IHN0cmluZykge1xuXG4gICAgfVxuXG4gICAgZ2V0RGF0YShsaW1pdDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgb3JkZXI6IGFueVtdLCBmaWx0ZXJzOiBhbnlbXSwga2V5OiBhbnksIGJhY2s6IGJvb2xlYW4sIGNhbGxiYWNrOiAoZGF0YTogYW55LCBzdGFydDogbnVtYmVyLCBjb3VtdDogbnVtYmVyLCBiYWNrOiBib29sZWFuKSA9PiB2b2lkKSB7XG4gICAgICAgIHBvc3REYXRhKHRoaXMudXJsICsgXCJnZXREYXRhXCIsIHsgbmFtZTogdGhpcy5uYW1lLCBsaW1pdDogbGltaXQsIG9mZnNldDogb2Zmc2V0LCBvcmRlcjogb3JkZXIsIGZpbHRlcnM6IGZpbHRlcnMsIGtleToga2V5LCB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhLmRhdGEsIG9mZnNldCArIGxpbWl0LCBkYXRhLmNvdW50LCBiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFN1bW1hcnkoZnVuYzogc3RyaW5nLCBmaWVsZDogc3RyaW5nLCBmaWx0ZXJzOiBhbnlbXSwgY2FsbGJhY2s6ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHBvc3REYXRhKHRoaXMudXJsICsgXCJnZXRTdW1tYXJ5XCIsIHsgbmFtZTogdGhpcy5uYW1lLCBmdW5jOiBmdW5jLCBmaWVsZDogZmllbGQsIGZpbHRlcnM6IGZpbHRlcnMgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YS5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENvbHVtbkRhdGEoY29sdW1uTmFtZTogc3RyaW5nLCBmaWx0ZXI6IGFueSwgbGltaXQ6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNhbGxiYWNrOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICBwb3N0RGF0YSh0aGlzLnVybCArIFwiZ2V0Q29sdW1uRGF0YVwiLCB7IG5hbWU6IHRoaXMubmFtZSwgY29sdW1uTmFtZTogY29sdW1uTmFtZSwgZmlsdGVyOiBmaWx0ZXIsIGxpbWl0OiBsaW1pdCwgb2Zmc2V0OiBvZmZzZXQgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZGF0YS5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZURhdGEoa2V5TmFtZTpzdHJpbmcsIGtleTphbnksIG1vZGlmeTp7fSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXlOYW1lfSAtICR7a2V5fSA9PiAke21vZGlmeX1gKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaW5zZXJ0RGF0YShrZXlOYW1lOnN0cmluZywgbW9kaWZ5Ont9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleU5hbWV9ID0+ICR7bW9kaWZ5fWApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBkZWxldGVEYXRhKGtleU5hbWU6c3RyaW5nLCBrZXlzOmFueVtdLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXlOYW1lfSAtICR7a2V5c31gKTtcbiAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkob2JqOiB7fSkge1xuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXF1YWwob2JqMTogYW55LCBvYmoyOiBhbnkpIHtcbiAgICBpZihBcnJheS5pc0FycmF5KG9iajEpICYmIEFycmF5LmlzQXJyYXkob2JqMikpIHtcbiAgICAgICAgaWYob2JqMS5sZW5ndGggPT09IG9iajIubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgb2JqMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKG9iajFbaV0gIT09IG9iajJbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajEgPT09IG9iajI7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NvdXJjZXMva25vY2tvdXQvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=