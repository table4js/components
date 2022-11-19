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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"abris-table__bool-cell-editor\">\n  <input type=\"checkbox\"\n    data-bind=\"checked: value, event: { change: function(_, e) { $data.value = e.target.checked; $data.complete(true); } }\"\n  />\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span class=\"abris-table__bool-cell-viewer\" data-bind=\"css: className\">\n    <span class=\"abris-table__bool-cell-viewer-circle\"\n    data-bind=\"style: { backgroundColor: cell.data ? 'green' : 'red' }\" \n    ></span>\n</span>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"abris-table__cell-editor\">\n  <input data-bind=\"value: value, event: { keyup: function(_, e) { $data.processKeyUp(e); } }\" />\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<td class=\"abris-table-cell\" data-bind=\"attr: {rowspan: table.isMergedСells ? cell.count : 1},\n  css: (cell.count > 1) && table.isMergedСells ? 'abris-table-cell--merged ' : '',\n  visible: (cell.count > 0) || !table.isMergedСells,\n  style: {'background-color': cell.color} \">\n  <!-- ko ifnot: (cell.inplaceEditor && table.config.enableEdit) -->\n    <div class=\"abris-table-cell__container\" data-bind=\"css: containerCss, style: {top: isMergedCell() ? table.tableHeadHeight - 2 + 'px' : undefined}, click: startEdit\">\n      <!-- ko component: { name: cell.viewer, params: { cell: cell, className: contentCss } } -->\n      <!-- /ko -->\n    </div>\n  <!-- /ko -->\n  <!-- ko if: (cell.inplaceEditor && table.config.enableEdit) -->\n    <!-- ko component: { name: cell.editor, params: { model: cell.inplaceEditor } } -->\n    <!-- /ko -->\n  <!-- /ko -->\n</td>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<select class=\"abris-filter___operation\" data-bind=\"options: operations, value: operation, optionsText: 'text'\"></select>\n<!-- ko if: showOperand -->\n  <!-- ko if: operation.op == \"EQ\" -->\n  <abris-filter-select class=\"abrs-filter__value\"\n    params=\"value: filterItemValue, columnName: column.name, columnType: column.type, getColumnData: getColumnData\">\n  </abris-filter-select>\n  <!-- /ko -->\n  <!-- ko if: operation.op != \"EQ\" -->\n  <div class=\"abris-filter__operand\" data-bind=\"component: { name: filterEditorName, params: { value: filterItemValue, column: column } }\">\n  </div>\n  <!-- /ko -->\n<!-- /ko -->\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko if: filterItems.length > 0 -->\n<div class=\"abris-filter-item\">\n  <div class=\"abris-filter__title abris-filter-text\" data-bind=\"text: column.title + ':'\"></div>\n  <!-- ko foreach: filterItems -->\n    <!-- ko if: $index() > 0 -->\n    <div class=\"abris-filter__operator abris-filter-text\" data-bind=\"text: '&'\"></div>\n    <!-- /ko -->\n    <!-- ko component: { name: 'abris-column-filter-item', params: { filterItem: $data } } -->\n    <!-- /ko -->\n    <div class=\"abris-filter__remove\"\n      data-bind=\"click: $parent.removeItem, clickBubble: false\">\n      <div class=\"abris-filter__remove-icon abris-svg-icon\" data-bind=\"html: $root.icons.cross\"></div>\n    </div>\n  <!-- /ko -->\n</div>\n<!-- /ko -->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"abris-select-selection\">\n    <!-- ko foreach: selectedItems -->\n    <div class=\"abris-select-selection-item\">\n        <span class=\"abris-select-item-title\" data-bind=\"text: name\"></span>\n        <div class=\"abris-svg-icon abris-select-item-close\" data-bind=\"click: $parent.deleteItems, html: $root.icons.cross\"></div>\n    </div>\n    <!-- /ko -->\n</div>\n<div class=\"abris-select-button abris-svg-icon\" data-bind=\"click: toggle, attr: { title: title }, html: $root.icons.arrowdown\"></div>\n<!-- ko if: isOpen -->\n<ul class=\"abris-select__dropdown-menu abris-button-toggle__dropdown-menu\" data-bind=\"click: function(_, e) { e.stopPropagation(); }\">\n    <!-- ko if: isFilterSearchByType -->\n    <div class=\"abris-select__dropdown-search-container\">\n        <input class=\"abris-select__dropdown-search\" placeholder=\"*\" data-bind=\"value: filterText, valueUpdate: 'afterkeydown'\" />\n    </div>\n    <!-- /ko -->\n    <!-- ko foreach: foundItems -->\n    <div class=\"abris-select__dropdown-item\" data-bind=\"click: $parent.clickItem\">\n        <input class=\"abris-select__dropdown-hide-check\" type=\"checkbox\" data-bind=\"checked: $parent.isChecked($data)\" />\n        <div class=\"abris-svg-icon abris-select__dropdown-check\" data-bind=\"html: $root.icons.check\"></div>\n        <span class=\"abris-select__dropdown-label\" data-bind=\"text: name\"></span>\n    </div>\n    <!-- /ko -->\n    <!-- ko if: isLoadMore -->\n    <button class=\"abris-select__dropdown-button\" data-bind=\"click: loadMore\">\n        <span class=\"abris-action-button__label\">More</span>\n    </button>\n    <!-- /ko -->\n</ul>\n<!-- /ko -->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"abris-table-resizable-container\">\n  <div class=\"abris-table-scroll-container\">\n    <table class=\"abris-table\">\n      <thead class=\"abris-table__header abris-table-sticky-component\">\n        <tr class=\"abris-table-header-tools\">\n          <th class=\"abris-table-header-tools__cell\" colspan=\"100%\">\n            <div class=\"abris-table-header-tools__container abris-table-group-header-technical-cell\">\n              <div class=\"abris-table-preheader\">\n                <div class=\"abris-table-search-group\">\n                  <!-- ko if: showSearch -->\n                  <abris-search params=\"model: searchModel\"></abris-search>\n                  <!-- /ko -->\n                  <abris-actions class=\"abris-table-actions\" params=\"model: $data, options: { action: 'topActions' }\">\n                  </abris-actions>\n                  <!-- ko if: $data.getActions('dropdownActions').length > 0 -->\n                  <abris-dropdown-actions class=\"abris-table-dropdown abris-table-actions-menu\"\n                    params=\"data: $data, actions: 'dropdownActions'\">\n                  </abris-dropdown-actions>\n                  <!-- /ko -->\n                </div>\n              </div>\n              <!-- ko if: viewFilterTable -->\n              <div class=\"abris-table-filter\">\n                <div class=\"abris-table-filter__container\">\n                  <!-- ko foreach: columns -->\n                  <!-- ko component: { name: 'abris-column-filter', params: { context: filterContext } } -->\n                  <!-- /ko -->\n                  <!-- /ko -->\n                </div>\n              </div>\n              <!-- /ko -->\n            </div>\n          </th>\n        </tr>\n        <tr class=\"abris-table-header-title\">\n          <th class=\"abris-table-header-title__cell abris-table-switch\">\n            <div class=\"abris-table-switch__text\"\n              data-bind=\"css: {'switch__text--selected': isNumber}, click: () => $data.isNumber = !$data.isNumber\">#\n            </div>\n          </th>\n          <!-- ko foreach: columns -->\n          <!-- ko if: visible -->\n          <th class=\"abris-table-header-title__cell\"\n            data-bind=\"event: {mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp}\">\n            <div class=\"abris-table-title\">\n              <span class=\"abris-table-title__text\" data-bind=\"html: title, click: $parent.clickColumn\"></span>\n              <div class=\"abris-table-title__tools\">\n                <div class=\"abris-svg-icon abris-table-title__sorter\" data-bind=\"visible: order === false, html: $root.icons.sortup\"></div>\n                <div class=\"abris-svg-icon abris-table-title__sorter\" data-bind=\"visible: order === true, html: $root.icons.sortdown\"></div>\n                <div class=\"abris-svg-icon abris-table-title__filter\" data-bind=\"click: clickFilter, html: $root.icons.filter\"></div>\n              </div>\n            </div>\n            <div class=\"abris-table-title_resize\"\n              data-bind=\"event: {mouseover: $parent.logMouseOver, mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp, mousedown: $parent.logMouseDown}\">\n            </div>\n          </th>\n          <!-- /ko -->\n          <!-- /ko -->\n          <th class=\"abris-table-header-title__cell\"></th>\n        </tr>\n      </thead>\n      <tbody class=\"abris-table__body\">\n        <!-- ko if: rows.length == 0 && loadingMutex == false  -->\n        <tr class=\"abris-table__row\">\n          <th class=\"abris-table-cell\" colspan=\"100%\" data-bind=\"text: noDataText\"></th>\n        </tr>\n        <!-- /ko -->\n        <!-- ko if: loadingMutex -->\n        <!-- ko foreach: columns -->\n        <tr class=\"abris-table__row\"></tr>\n          <td class=\"abris-table-cell abris-table-technical-cell\" >\n            <div class=\"abris-table-technical-cell__container\">\n              <div class=\"abris-table__check\">\n                <div class=\"abris-svg-icon abris-table__icon-check\"></div>\n              </div>\n            </div>\n          </td>\n        <!-- ko foreach: $parent.columns -->\n        <!-- ko if: visible -->\n          <td class=\"abris-table-cell abris-table-technical-cell\">\n            <div class=\"abris-table-cell__container abris-table-cell__container--loading\">\n            </div>\n          </td>\n        <!-- /ko -->\n        <!-- /ko -->\n        <td class=\"abris-table-cell abris-table-technical-cell\">\n          <div class=\"abris-table-technical-cell__container\">\n            <div class=\"abris-svg-icon abris-table-icon-row-tools abris-table__more\" data-bind=\"html: $root.icons.more\"></div>\n            <div class=\"abris-svg-icon abris-table-icon-row-tools abris-table__edit\" data-bind=\"html: $root.icons.edit\"></div>\n          </div>\n        </td>\n        </tr>\n        <!-- /ko -->\n        <!-- /ko -->\n        <!-- ko foreach: {data: rows} -->\n        <tr class=\"abris-table__row\" data-bind=\"css: {'abris-table__row--selected': selected}, style: {'background-color': 'none' }\">\n          <td class=\"abris-table-cell abris-table-technical-cell\" data-bind=\"click: select\">\n            <div class=\"abris-table-technical-cell__container\">\n              <!-- ko if: $parent.isNumber -->\n              <div class=\"abris-table__number\" data-bind=\"text: number\"></div>\n              <!-- /ko -->\n              <!-- ko if: !$parent.isNumber -->\n              <div class=\"abris-table__check\">\n                <div class=\"abris-svg-icon abris-table__icon-check\" data-bind=\"visible: selected, html: $root.icons.check\"></div>\n              </div>\n              <!-- /ko -->\n            </div>\n          </td>\n          <!-- ko foreach: cells -->\n          <!-- ko component: { name: 'abris-table-cell', params: { cell: $data, table: $parents[1] } } -->\n          <!-- /ko -->\n          <!-- /ko -->\n          <td class=\"abris-table-cell abris-table-technical-cell\" data-bind=\"click: click\">\n            <div class=\"abris-table-technical-cell__container\">\n              <div class=\"abris-svg-icon abris-table-icon-row-tools abris-table__more\" data-bind=\"html: $root.icons.more\"></div>\n              <div class=\"abris-svg-icon abris-table-icon-row-tools abris-table__edit\" data-bind=\"html: $root.icons.edit\"></div>\n            </div>\n            <div class=\"abris-table__row--select\" data-bind=\"visible: !$parent.hasActiveInplaceEditor\"></div>\n            <div class=\"abris-table__row--colored\" data-bind=\"style: { 'background': color ? color : 'rgba(248,249,253)' }\"></div>\n          </td>\n        </tr>\n        <!-- /ko -->\n      </tbody>\n      <tfoot class=\"abris-table__footer abris-table-sticky-component\">\n        <tr class=\"abris-table-footer-summary\" data-bind=\"visible: showTableSummary\">\n          <th class=\"abris-table-cell abris-table-technical-cell abris-table-footer__cell\">\n            <div class=\"abris-table-technical-cell__container\">\n              <div class=\"abris-svg-icon abris-table-icon-equal\" data-bind=\"html: $root.icons.equal\"></div>\n            </div>\n          </th>\n          <!-- ko foreach: columns -->\n          <!-- ko if: visible -->\n          <th class=\"abris-table-cell abris-table-footer__cell\">\n            <abris-table-summary params='column: $data'></abris-table-summary>\n          </th>\n          <!-- /ko -->\n          <!-- /ko -->\n          <th class=\"abris-table-cell abris-table-technical-cell abris-table-footer__cell\"></th>\n        </tr>\n        <tr class=\"abris-table-footer-tools\">\n          <th class=\"abris-table-footer-tools__cell\" colspan=\"100%\">\n            <div class=\"abris-table-footer-tools__container abris-table-group-header-technical-cell\">\n              <div class=\"abris-table-row-management\">\n                <abris-actions class=\"abris-table-actions\" params=\"model: $data, options: { action: 'bottomActions' }\">\n                </abris-actions>\n              </div>\n              <div class=\"abris-table-info\">\n                <span class=\"abris-table-info__total abris-table-info__text\"\n                  data-bind=\"text: 'Total: ' + totalCount\"></span>\n                <div class=\"abris-table-info__go-to\">\n                  <span class=\"abris-table-go-to__text abris-table-info__text\">Go to: </span>\n                  <input class=\"abris-table-go-to__value\" data-bind=\"value: startRow\"/>\n                  <button class=\"abris-btn-transparent\">\n                    <div class=\"abris-svg-icon abris-table-go-to__icon\" data-bind=\"html: $root.icons.arrowright\"></div>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </th>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"abris-search\">\n  <input class=\"abris-search__value\" data-bind=\"value: value, attr: { placeholder: 'Search...' }\" />\n  <div class=\"abris-search__button\" data-bind=\"click: refresh, attr: { title: 'Search' }\">\n    <div class=\"abris-svg-icon abris-search__icon\" data-bind=\"html: $root.icons.search\"></div>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span class=\"abris-table-summary__value\" data-bind=\"text: value\"></span>\n<select class=\"abris-table-summary__select\"  data-bind=\"value: func\">\n  <!-- ko foreach: summaryItems -->\n    <option data-bind=\"text: title, value: value, attr: {title: title}\"></option>\n  <!-- /ko -->  \n</select>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button data-bind=\"click: $data.formId !== undefined ? undefined : action, \n                visible: !$data.visible || ko.unwrap(visible),\n                enable: !$data.enabled || ko.unwrap(enabled),\n                attr: {\n                        class: 'abris-button--transparent action-button abris-action-button ' + ko.unwrap($data.cssClasses) + (ko.unwrap($data.active) === true ? ' abris-action--active' : ''),\n                        title: $data.title || $data.name, form: $data.formId,\n                        type: $data.formId !== undefined ? 'submit' : 'button'\n                    }\">\n    <!-- ko if: $data.icon -->\n    <!-- <span data-bind=\"css: ('fa icon ' + (typeof icon == 'function' ? icon() : icon))\"></span> -->\n    <!-- /ko -->\n    <!-- ko if: $data.svg -->\n    <div class=\"abris-action-button__icon abris-button__svg-icon\" data-bind=\"html: svg\"></div>\n    <!-- /ko -->\n    <!-- ko ifnot: $parents[1].short -->\n    <span class=\"abris-action-button__label\" data-bind=\"text: $data.title, css: ko.unwrap($data.cssLabel), style: {'display' : $data.title ? 'block' : 'none'}\" ></span>\n    <!-- /ko -->\n</button>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko foreach: actions -->\n<!-- ko ifnot: ko.unwrap($data.actions) -->\n<!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  -->\n<!-- ko component: { name: 'abris-action-item', params: $data } -->\n<!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->\n<!-- ko if: ko.unwrap($data.actions) && ko.unwrap($data.actions).length > 0 -->\n<!-- ko if: !$data.groupName && !$parent.groupName || $data.groupName == $parent.groupName  -->\n<div class=\"abris-nested-actions abris-action-context-button\">\n    <span class=\"abris-button__label\" data-bind=\"text: title\"></span>\n    <div class=\"abris-nested-actions__dropdown\">\n        <!-- ko foreach: actions -->\n        <!-- ko component: { name: 'abris-action-item', params: $data } -->\n        <!-- /ko -->\n        <!-- /ko -->\n    </div>\n</div>\n<!-- /ko -->\n<!-- /ko -->\n<!-- /ko -->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<button class=\"abris-action-button abris-button--transparent abris-button-toggle\" type=\"button\"\n    data-bind=\"click: toggle, attr: { title: title }\">\n    <div data-bind=\"html: $root.icons.more_sq\"></div>\n    <span class=\"abris-action-button__label\" data-bind=\"text: moreText\"></span>\n</button>\n<!-- ko if: isOpen -->\n<ul class=\"abris-button-toggle__dropdown-menu\">\n    <abris-actions class=\"abris-context-actions\" params=\"model: data, options: { action: actions }\">\n    </abris-actions>\n</ul>\n<!-- /ko -->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <svg class=\"abris-button__svg-icon\"><use data-bind=\"attr:{'xlink:href':'spritemap.svg#sprite-icon_'+ko.unwrap(id)}\"  xlink:href=''></use></svg> -->\n");

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
ko.components.register("abris-cell-editor", {
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
ko.components.register("abris-cell-viewer", {
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
ko.components.register("abris-table-cell", {
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
ko.components.register("abris-column-filter-item", {
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
ko.components.register("abris-column-filter", {
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
ko.components.register("abris-table-filter-default", {
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
ko.components.register("abris-filter-select", {
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
ko.components.register("abris-search", {
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
ko.components.register("abris-table-summary", {
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
ko.components.register("abris-action-item", {
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
ko.components.register("abris-actions", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var modelValue = (params.model || {})[params.options.action];
            return {
                actions: modelValue,
                short: params.options.short,
                groupName: params.options.groupName,
                toggleChildActions: function (_, event) {
                    event.target.classList.toggle("abris-nested-actions--open");
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
ko.components.register("abris-dropdown-actions", {
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
ko.components.register("abris-icon", {
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
        var containerCss = "abris-table-cell__container " + cell.css;
        if (isMergedCell) {
            containerCss += " cell__sticky-text";
        }
        return containerCss;
    };
    TableCell.getContentCss = function (cell, isMergedCell) {
        var contentCss = isMergedCell ? "abris-table-cell__text--merged" : "abris-table-cell__text";
        if (cell instanceof TableCell && cell.isModified) {
            contentCss += " abris-table-cell__text--modified";
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
            css: "abris-table-cell--left",
            editor: "abris-cell-editor",
            viewer: "abris-cell-viewer"
        },
    };
    __decorate([
        (0, property_1.property)({ defaultValue: false }),
        __metadata("design:type", Boolean)
    ], TableCell.prototype, "isModified", void 0);
    __decorate([
        (0, property_1.property)({ onSet: function (val, target) {
                if (target.text !== val) {
                    target.text = target.getCellText(val);
                    target.isModified = true;
                }
            } }),
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
            return "abris-table-filter-default";
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
        (0, property_1.property)({ onSet: function (val, target) {
                if (!!val) {
                    target.filterItemValue.op = val.op;
                }
                target.showOperand = val && val.op !== "ISN" && val.op !== "ISNN";
            } }),
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
        this.scrollerElement = element.getElementsByClassName("abris-table-scroll-container")[0];
        this.tableElement = element.getElementsByTagName("table")[0];
        this.resizerElement = element.getElementsByClassName("abris-table")[0];
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
                            entry.target.parentElement.classList.add("abris-table--small");
                        }
                        else {
                            entry.target.parentElement.classList.remove("abris-table--small");
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
        (0, property_1.property)({ defaultValue: [], onSet: function (val, target) {
                target.viewFilterTable = new dependencies_1.ComputedUpdater(function () { return val.filter(function (c) { return c.filterContext.showFilter; }).length > 0; });
            } }),
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
        (0, property_1.property)({ onSet: function (newValue, target) {
                target.navigateTo(newValue);
            } }),
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
        this.css = "abris-table-cell--right";
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
        while (_) try {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGU0LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsYUFBYSw0RUFBNEUsMkNBQTJDLGFBQWEsS0FBc0MsQ0FBQyxpQ0FBTyxDQUFDLE9BQVMsQ0FBQyxtQkFBUyxDQUFDLG9DQUFDLENBQUM7QUFBQTtBQUFBO0FBQUEsa0dBQUMsQ0FBQyxDQUF5RixDQUFDLGdCQUFnQixnQkFBZ0Isd0NBQXdDLGdCQUFnQixNQUFNLGtCQUFrQixnQ0FBZ0MsSUFBSSxJQUFJLE1BQU0sZ0JBQWdCLE1BQU0sa0JBQWtCO0FBQ3JnQix1QkFBdUIsZ0JBQWdCLHNFQUFzRSxpQkFBaUIscUJBQXFCLGlCQUFpQixxQkFBcUIsa0dBQWtHLEtBQUssd0JBQXdCLGtDQUFrQyxrQkFBa0IsK0JBQStCLGFBQWEsY0FBYyxvQkFBb0Isb0JBQW9CLFFBQVEsa0JBQWtCO0FBQ3hlLFdBQVcsV0FBVyxpRUFBaUUsZUFBZSxnQkFBZ0Isc0NBQXNDLGdCQUFnQiw2Q0FBNkMsU0FBUyxnQkFBZ0IsY0FBYyxTQUFTLG9CQUFvQix3QkFBd0IsNkJBQTZCLGNBQWMsRUFBRSxpQkFBaUIseUNBQXlDLGFBQWEsa0RBQWtELE1BQU07QUFDamUsMkRBQTJELCtHQUErRyxrQkFBa0IsbUNBQW1DLElBQUksY0FBYyxFQUFFLE9BQU8sa0JBQWtCLGlCQUFpQixtRUFBbUUscUVBQXFFLEVBQUUsZUFBZSxjQUFjLE9BQU87QUFDM2Msa0JBQWtCLHVCQUF1QixJQUFJLHVCQUF1Qiw0REFBNEQseUNBQXlDLGVBQWUsdUJBQXVCLElBQUkseUJBQXlCLFNBQVMsb0JBQW9CLHVCQUF1QixJQUFJLHNDQUFzQyxTQUFTLGtCQUFrQixpQkFBaUIsbUNBQW1DLGdCQUFnQixTQUFTLHVCQUF1Qix3QkFBd0IsRUFBRSxTQUFTO0FBQzVlLEtBQUssU0FBUyw0QkFBNEIsSUFBSSw2QkFBNkIsU0FBUyxvQkFBb0IsU0FBUyw0QkFBNEIsSUFBSSxtQ0FBbUMsU0FBUyxrQkFBa0Isd0NBQXdDLDRCQUE0QixJQUFJLGlCQUFpQixTQUFTLG9CQUFvQix5QkFBeUIsa0NBQWtDLGdFQUFnRSxlQUFlLFFBQVEsR0FBRztBQUMxZCxvQkFBb0IsU0FBUyxnQkFBZ0IsS0FBSyxhQUFhLDRCQUE0QixnQkFBZ0IsWUFBWSw0RUFBNEUsSUFBSSw4QkFBOEIsU0FBUyxrQkFBa0IsNEJBQTRCLElBQUksS0FBSyx5QkFBeUIsb0JBQW9CLFNBQVMsa0JBQWtCLFVBQVUsNEJBQTRCLElBQUksd0JBQXdCLGtCQUFrQix1QkFBdUIsZUFBZTtBQUN2ZSw4QkFBOEIsSUFBSSwyQkFBMkIsSUFBSSxlQUFlLElBQUksd0JBQXdCLGtCQUFrQixhQUFhLHNDQUFzQyw4QkFBOEIsZUFBZSxLQUFLLHlDQUF5QyxZQUFZLGVBQWUsMkJBQTJCLGVBQWUsTUFBTSwyQkFBMkIsV0FBVyxTQUFTLGtCQUFrQiw4Q0FBOEMsZ0JBQWdCO0FBQ3RkLDJEQUEyRCxrQkFBa0IsUUFBUSx3REFBd0Qsa0JBQWtCLGtCQUFrQiw0QkFBNEIsK0RBQStELDBFQUEwRSxLQUFLLFFBQVEsZ0JBQWdCLFVBQVUsZ0JBQWdCLGlEQUFpRCxnQkFBZ0IseUJBQXlCLGVBQWU7QUFDdGYsbUNBQW1DLGdCQUFnQiw0QkFBNEIsSUFBSSwrQkFBK0IsU0FBUyxrQ0FBa0MsR0FBRywwQkFBMEIsK0JBQStCLGdCQUFnQixzQkFBc0Isd0JBQXdCLFNBQVMsSUFBSSxtQkFBbUIsZ0JBQWdCLE9BQU8sMEhBQTBILGtCQUFrQixZQUFZLFVBQVU7QUFDaGYsR0FBRyxzQkFBc0IsbUJBQW1CLEVBQUUsNEVBQTRFLGdDQUFnQyxnRUFBZ0Usa0JBQWtCLHVGQUF1RixNQUFNLGlHQUFpRztBQUMxYSwrSEFBK0gsdUVBQXVFLDZCQUE2Qiw0REFBNEQsOERBQThELHFCQUFxQixlQUFlLG9CQUFvQixnQkFBZ0Isc0JBQXNCLG9CQUFvQixNQUFNO0FBQ3JkLDhEQUE4RCxzQkFBc0IsNEZBQTRGLGtCQUFrQixlQUFlLHdCQUF3Qix3QkFBd0IsNkZBQTZGLFVBQVUsa0JBQWtCLFNBQVMsWUFBWSw0Q0FBNEMsNkJBQTZCLEVBQUUsRUFBRTtBQUM1ZCxhQUFhLFdBQVcsZ0JBQWdCLDRFQUE0RSxnQkFBZ0IsTUFBTSxvQkFBb0IsZ0JBQWdCLGlCQUFpQixrQkFBa0IsV0FBVyxXQUFXLGlCQUFpQixLQUFLLGNBQWMsU0FBUyxnQkFBZ0IsNEJBQTRCLElBQUksaUJBQWlCLFNBQVMsZ0JBQWdCLHFCQUFxQix3Q0FBd0M7QUFDM2EsaUNBQWlDLGtCQUFrQixhQUFhLHNCQUFzQixtQkFBbUIsS0FBSywwQkFBMEIsU0FBUyxnQkFBZ0IsaUdBQWlHLG9CQUFvQjtBQUN0UixpQ0FBaUMsb0JBQW9CLFFBQVEsa0JBQWtCLGdDQUFnQyx5RUFBeUUsS0FBSywwQ0FBMEMsS0FBSyw0QkFBNEIsV0FBVyw4QkFBOEIsdUJBQXVCLFdBQVcsZ0JBQWdCLGdIQUFnSCxrQkFBa0I7QUFDcmUsZ0JBQWdCLFNBQVMsVUFBVSxpQkFBaUIsRUFBRSxzQkFBc0Isc0NBQXNDLHNCQUFzQiw0QkFBNEIsTUFBTSxHQUFHLGlCQUFpQixnQ0FBZ0MsK0JBQStCLGdDQUFnQywyQ0FBMkMsZ0NBQWdDLDZCQUE2QixpQ0FBaUMsb0NBQW9DLCtCQUErQjtBQUN6ZSxRQUFRLCtCQUErQiwrQ0FBK0Msa0NBQWtDLDhCQUE4QixtQ0FBbUMsNkJBQTZCLDhCQUE4Qix3Q0FBd0Msa0NBQWtDLDBCQUEwQiwwQ0FBMEMsaUNBQWlDLG9DQUFvQyxpQ0FBaUM7QUFDeGUsUUFBUSxtQ0FBbUMsb0JBQW9CLDhEQUE4RCxXQUFXLDBDQUEwQyw2QkFBNkIsOENBQThDLGtCQUFrQixpQkFBaUIsMEJBQTBCLHFCQUFxQixFQUFFLHFCQUFxQiw0Q0FBNEMsS0FBSyx1QkFBdUIsV0FBVywwQkFBMEIsZUFBZSxnQkFBZ0I7QUFDbGYsR0FBRyxZQUFZLGVBQWUsV0FBVyx1Q0FBdUMsbUJBQW1CLFdBQVcsaUJBQWlCLEVBQUUsU0FBUyxlQUFlLGdDQUFnQyxFQUFFLE9BQU8sa0JBQWtCLGNBQWMsZUFBZSxxQkFBcUIseUJBQXlCLG9CQUFvQixVQUFVLHNCQUFzQixzQkFBc0IsaUJBQWlCLDJCQUEyQix1Q0FBdUMscUJBQXFCLGdCQUFnQjtBQUNqZSxrQ0FBa0MsU0FBUyxjQUFjLGNBQWMsOEJBQThCLFdBQVcsWUFBWSxlQUFlLDJCQUEyQixrQ0FBa0MsZ0JBQWdCLG1CQUFtQixXQUFXLG9FQUFvRSx1QkFBdUIsR0FBRyxtQkFBbUIsZUFBZSxJQUFJLFdBQVcsT0FBTyxpQkFBaUIsbUVBQW1FLGdCQUFnQjtBQUNoZixHQUFHLGNBQWMsK0NBQStDLGdCQUFnQixpQkFBaUIsb0VBQW9FLEVBQUUsU0FBUyx3QkFBd0IsUUFBUSwwQ0FBMEMsK0JBQStCLHVEQUF1RCxjQUFjLDhCQUE4QixzQkFBc0IsK0JBQStCLG1DQUFtQztBQUNwZCxVQUFVLDREQUE0RCxZQUFZLGtKQUFrSixpR0FBaUcsWUFBWSxxQkFBcUIsTUFBTSwyQ0FBMkMsS0FBSyw2QkFBNkIsZUFBZSx5Q0FBeUM7QUFDamYsMkNBQTJDLEtBQUssYUFBYSw0RkFBNEYsdUVBQXVFLE9BQU8sc0NBQXNDLHFJQUFxSSxLQUFLLElBQUksZUFBZSxpQ0FBaUMsVUFBVSxxQkFBcUI7QUFDMWUsR0FBRyxnREFBZ0QscUJBQXFCLFVBQVUsV0FBVywwRUFBMEUsNkNBQTZDLFdBQVcseUJBQXlCLElBQUksc0NBQXNDLDRCQUE0QixnQkFBZ0IsZ0JBQWdCLHVCQUF1QiwyQkFBMkIsaUJBQWlCLFVBQVUsRUFBRSw0REFBNEQsSUFBSTtBQUM3ZSxHQUFHLFNBQVMsT0FBTyxlQUFlLGdHQUFnRyw0SEFBNEgsT0FBTyxxQ0FBcUMsa0JBQWtCLFdBQVcsb0dBQW9HLElBQUksOEJBQThCLFFBQVEsYUFBYSxrQkFBa0I7QUFDcGYsR0FBRyxPQUFPLHVCQUF1QixJQUFJLEtBQUssb0JBQW9CLGVBQWUsbUJBQW1CLGVBQWUsMkNBQTJDLGdCQUFnQixzREFBc0QsR0FBRyx3QkFBd0IsbUNBQW1DLHFDQUFxQyx5Q0FBeUMsMERBQTBELGdCQUFnQixhQUFhLHVCQUF1QixJQUFJLGNBQWMsUUFBUTtBQUNwZixLQUFLLElBQUksMEVBQTBFLE1BQU0sSUFBSSxJQUFJLElBQUksU0FBUyxZQUFZLGFBQWEsSUFBSSxlQUFlLHVCQUF1QixpQ0FBaUMsNkJBQTZCLHFDQUFxQyxjQUFjLEVBQUUsa0JBQWtCLDJCQUEyQixzRUFBc0UsZ0NBQWdDLGdDQUFnQywwQkFBMEI7QUFDamYsT0FBTyxLQUFLLGlDQUFpQyxhQUFhLGlCQUFpQixPQUFPLDJCQUEyQixxQkFBcUIsU0FBUyxXQUFXLG9CQUFvQixVQUFVLHVCQUF1Qiw0QkFBNEIsVUFBVSxlQUFlLFNBQVMsT0FBTyxHQUFHLGtCQUFrQiw4QkFBOEIsOEJBQThCLE1BQU0sdUJBQXVCLHVCQUF1QixXQUFXLFlBQVkseUJBQXlCLGdCQUFnQiw0QkFBNEIsS0FBSztBQUN0ZixJQUFJLEVBQUUseUJBQXlCLFVBQVUsZ0RBQWdELFFBQVEsd0RBQXdELGlCQUFpQixnQkFBZ0IsRUFBRSx3QkFBd0IsK0lBQStJLGdDQUFnQyxXQUFXLGtCQUFrQixPQUFPLGVBQWUsYUFBYSxJQUFJLG9DQUFvQyxRQUFRO0FBQ25mLE1BQU0sR0FBRyxzQkFBc0Isd0NBQXdDLE9BQU8sMkNBQTJDLHNCQUFzQixxQkFBcUIsVUFBVSxVQUFVLFVBQVUsV0FBVyxxQkFBcUIsMkJBQTJCLDZDQUE2Qyw0QkFBNEIsaUhBQWlILDZCQUE2QixVQUFVO0FBQzlkLGVBQWUsZUFBZSxZQUFZLE9BQU8sZUFBZSxLQUFLLFdBQVcsT0FBTywyQkFBMkIsV0FBVyxjQUFjLDBDQUEwQyxpQkFBaUIsY0FBYyxFQUFFLGNBQWMsb0JBQW9CLGVBQWUsU0FBUyxpQ0FBaUMsY0FBYyx3QkFBd0IsZUFBZSxnREFBZ0QsSUFBSSxTQUFTLGNBQWMsT0FBTyxrQkFBa0IsUUFBUSxZQUFZLGVBQWUsZUFBZTtBQUM1ZixlQUFlLHFCQUFxQixlQUFlLFVBQVUsZ0JBQWdCLDhCQUE4Qix1REFBdUQsbUJBQW1CLFFBQVEsOEJBQThCLHNCQUFzQixTQUFTLGFBQWEsRUFBRSxtQkFBbUIsZ0JBQWdCLHlCQUF5QixVQUFVLElBQUksS0FBSyxpQkFBaUIsaUNBQWlDLGdCQUFnQixNQUFNLGdCQUFnQix5QkFBeUIsZ0JBQWdCLG1DQUFtQztBQUM1ZixlQUFlLDJDQUEyQyxRQUFRLDJCQUEyQiwyQkFBMkIsRUFBRSxTQUFTLGtCQUFrQiwwREFBMEQscUJBQXFCLHdCQUF3QixvQkFBb0IsV0FBVyx5QkFBeUIsY0FBYyxvQ0FBb0MsRUFBRSxXQUFXLG1CQUFtQiwrQkFBK0IseUJBQXlCLG9DQUFvQztBQUNsZSxvQkFBb0IsU0FBUyxpQkFBaUIsd0ZBQXdGLHdCQUF3QiwyQkFBMkIsbUJBQW1CLGNBQWMsVUFBVSxJQUFJLGFBQWEsVUFBVSxlQUFlLE9BQU8sMEJBQTBCLE1BQU0sNEVBQTRFLG9DQUFvQyxtQkFBbUIsSUFBSSw0QkFBNEIsUUFBUSxLQUFLLGVBQWUscUJBQXFCO0FBQ3pnQixjQUFjLHFCQUFxQixlQUFlLGlCQUFpQixjQUFjLGtCQUFrQixHQUFHLDJCQUEyQixtREFBbUQsOENBQThDLHdDQUF3QyxpREFBaUQscUNBQXFDLDZCQUE2QixpQkFBaUIsYUFBYTtBQUMzWixVQUFVLFlBQVksT0FBTyw2QkFBNkIsYUFBYSxZQUFZLDRDQUE0QyxVQUFVLE9BQU8sZ0NBQWdDLGVBQWUsZUFBZSwyQ0FBMkMsZ0NBQWdDLGVBQWUsaURBQWlELHFDQUFxQyw2QkFBNkIsVUFBVSxnQkFBZ0Isc0hBQXNIO0FBQzNpQixXQUFXLGlCQUFpQixtRUFBbUUsdUJBQXVCLHdCQUF3QixrQ0FBa0MsaUNBQWlDLHVCQUF1QixrQkFBa0IsOEJBQThCLDhCQUE4QixpQkFBaUIsUUFBUSx5SkFBeUosVUFBVTtBQUNsZixTQUFTLGlCQUFpQixxQkFBcUIsR0FBRyxTQUFTLG1CQUFtQixtRUFBbUUsYUFBYSxPQUFPLFdBQVcsS0FBSyxXQUFXLFNBQVMsd0JBQXdCLHVEQUF1RCxxQkFBcUIsVUFBVSxjQUFjLEtBQUssb0JBQW9CLFNBQVMsdUJBQXVCLFVBQVUsNEJBQTRCLFVBQVUscUJBQXFCLFVBQVUsU0FBUyxpQ0FBaUM7QUFDdmYsV0FBVyxLQUFLLHFCQUFxQiwwREFBMEQsYUFBYSxHQUFHLFVBQVUscUJBQXFCLEtBQUssS0FBSyxXQUFXLHNCQUFzQixVQUFVLHdCQUF3QixxQ0FBcUMsU0FBUyw2QkFBNkIscUJBQXFCLEtBQUsscUJBQXFCLGFBQWEsa0JBQWtCLHVCQUF1QixzQkFBc0IsMENBQTBDLG9CQUFvQjtBQUMvZCw0QkFBNEIscUJBQXFCLG1DQUFtQyw0Q0FBNEMsMEVBQTBFLHNCQUFzQixlQUFlLFVBQVUsdUJBQXVCLDhCQUE4QixVQUFVLHFCQUFxQixFQUFFLDRCQUE0QixzQkFBc0IsYUFBYSxnQ0FBZ0MsRUFBRSxpQkFBaUI7QUFDamMsZUFBZSw0QkFBNEIsOEJBQThCLHFDQUFxQyxhQUFhLGFBQWEsTUFBTSw2QkFBNkIsd0JBQXdCLDhCQUE4QixJQUFJLElBQUksT0FBTyxJQUFJLG1EQUFtRCxxQ0FBcUMsSUFBSSxrRUFBa0UsUUFBUSwwQ0FBMEMsZUFBZSxVQUFVO0FBQzdkLGdCQUFnQixpQkFBaUIsZUFBZSx3QkFBd0IsaUJBQWlCLGVBQWUsK0VBQStFLHFCQUFxQixrQkFBa0Isb0JBQW9CLDBCQUEwQixVQUFVLG1DQUFtQyxVQUFVLGdCQUFnQix1QkFBdUIsSUFBSSx3QkFBd0IsTUFBTSxpQkFBaUIsb0NBQW9DLE1BQU07QUFDdmMsU0FBUyxnRkFBZ0YsSUFBSSx3RUFBd0UsWUFBWSxNQUFNLGVBQWUsUUFBUSx1QkFBdUIsd0JBQXdCLGFBQWEsdUJBQXVCLGlEQUFpRCxpS0FBaUssWUFBWTtBQUMvZixVQUFVLDRCQUE0QixXQUFXLGdDQUFnQyxnQkFBZ0Isc0dBQXNHLGlCQUFpQixnSkFBZ0osY0FBYyxPQUFPLDJCQUEyQiw2QkFBNkIsYUFBYSxZQUFZO0FBQzljLG9DQUFvQyw0Q0FBNEMsd0NBQXdDLCtCQUErQiwwQ0FBMEMsTUFBTSxFQUFFLFVBQVUsT0FBTyxpQ0FBaUMsaUJBQWlCLGVBQWUsU0FBUyw4QkFBOEIsYUFBYSxFQUFFLFNBQVMsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsZ0RBQWdELHFCQUFxQixFQUFFLG9CQUFvQjtBQUM1ZSx5RUFBeUUsZUFBZSxpQkFBaUIsWUFBWSxlQUFlLG9CQUFvQiwyR0FBMkcsZUFBZSxrQ0FBa0MsZUFBZSxjQUFjLG1CQUFtQixlQUFlLDhDQUE4QyxnQkFBZ0IsU0FBUztBQUMxYixNQUFNLE9BQU8sa0JBQWtCLE1BQU0sUUFBUSxpQ0FBaUMsZUFBZSxrQ0FBa0MsdUVBQXVFLFNBQVMsNEJBQTRCLGdCQUFnQiwwQkFBMEIsaUJBQWlCLDhCQUE4QixVQUFVLFNBQVMsUUFBUSxhQUFhLFFBQVEsSUFBSSxhQUFhLFFBQVEsUUFBUSxVQUFVLGdCQUFnQixvQ0FBb0MsdUJBQXVCLFFBQVE7QUFDbGYsa0JBQWtCLEVBQUUsT0FBTyxNQUFNLG1CQUFtQixxQ0FBcUMsbUtBQW1LLHVDQUF1QyxTQUFTLGtCQUFrQixJQUFJLFdBQVcsNkJBQTZCLFFBQVEsbURBQW1ELGVBQWUsY0FBYyw2Q0FBNkMsV0FBVztBQUMxZixlQUFlLHVCQUF1QixtQkFBbUIsZ0RBQWdELGtCQUFrQixvQkFBb0IsbUJBQW1CLGNBQWMsbUJBQW1CLGtCQUFrQixjQUFjLGNBQWMsbUNBQW1DLFdBQVcsRUFBRSw4QkFBOEIsTUFBTSxNQUFNLFFBQVEsUUFBUSxRQUFRLE9BQU8sTUFBTSxPQUFPLE9BQU8sbUJBQW1CLEtBQUssZUFBZSxrQkFBa0IsNEJBQTRCLE9BQU87QUFDMWQsaUJBQWlCLEtBQUssU0FBUyx3QkFBd0IsVUFBVSxFQUFFLHNCQUFzQiwwQkFBMEIsT0FBTyxVQUFVLFNBQVMsRUFBRSx1QkFBdUIsd0NBQXdDLGdCQUFnQixjQUFjLCtEQUErRCxjQUFjLHdCQUF3QixRQUFRLDZDQUE2QyxlQUFlLGNBQWMsa0NBQWtDLDZCQUE2QixLQUFLLGVBQWU7QUFDdGYsaUNBQWlDLHFDQUFxQyxjQUFjLFNBQVMsaUJBQWlCLHlDQUF5QyxpQkFBaUIsK0JBQStCLG9CQUFvQiwrQkFBK0IsdUJBQXVCLDJCQUEyQixxQkFBcUIsa0JBQWtCLHFCQUFxQix1QkFBdUIsbUNBQW1DLDhCQUE4QixtQkFBbUI7QUFDbmQsR0FBRyxRQUFRLEVBQUUsZUFBZSxJQUFJLFVBQVUsaUJBQWlCLHlCQUF5QixZQUFZLGtCQUFrQixXQUFXLE9BQU8sd0pBQXdKLCtCQUErQixZQUFZLGdCQUFnQixjQUFjLGlCQUFpQixrRUFBa0UsTUFBTSw4Q0FBOEM7QUFDNWUsY0FBYyxFQUFFLFNBQVMsZ0JBQWdCLHVCQUF1QixZQUFZLFdBQVcsU0FBUyx5Q0FBeUMscUJBQXFCLGFBQWEsYUFBYSxlQUFlLGlCQUFpQixpR0FBaUcsdUJBQXVCLFlBQVksYUFBYSxVQUFVLFNBQVMsR0FBRyx5QkFBeUIsVUFBVSxzQkFBc0IsYUFBYSxpQ0FBaUM7QUFDdGUsR0FBRyw4REFBOEQsaUJBQWlCLHFCQUFxQiwrQkFBK0IsSUFBSSxpQkFBaUIsdUJBQXVCLHFCQUFxQixjQUFjLHdCQUF3QixZQUFZLDRCQUE0QixnQkFBZ0IsRUFBRSwyQkFBMkIsU0FBUyxrRUFBa0UsaUJBQWlCLFlBQVksS0FBSyxjQUFjLGlCQUFpQjtBQUM5YywrSEFBK0gsNEVBQTRFLHdCQUF3QixvQkFBb0IsaUJBQWlCO0FBQ3hRLGVBQWUsTUFBTSxzQ0FBc0Msc0NBQXNDLElBQUksa0RBQWtELElBQUksTUFBTSxtRkFBbUYsa0JBQWtCLElBQUksTUFBTSxnQ0FBZ0MsYUFBYSxJQUFJLDRCQUE0Qix3Q0FBd0MsMENBQTBDLGVBQWUsY0FBYyxZQUFZO0FBQ3hkLEtBQUssU0FBUyxpQ0FBaUMsZUFBZSxjQUFjLE9BQU8sS0FBSyxzQkFBc0IsV0FBVyxTQUFTLG9CQUFvQix1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLEtBQUssVUFBVSxnQkFBZ0IseUJBQXlCLFVBQVUsVUFBVSxrRkFBa0Y7QUFDM1csMkVBQTJFLFVBQVUsbUVBQW1FLFNBQVMsZ1BBQWdQLHNCQUFzQixtREFBbUQsNkJBQTZCO0FBQ3ZmLEtBQUssT0FBTyxpQ0FBaUMsZ0JBQWdCLE1BQU0sT0FBTyw2QkFBNkIsb0RBQW9ELGlHQUFpRyw2REFBNkQsU0FBUyxHQUFHLGtCQUFrQixjQUFjLEdBQUcscUJBQXFCLFFBQVEsZ0ZBQWdGLG9CQUFvQjtBQUN6ZSxTQUFTLEVBQUUscUNBQXFDLGlCQUFpQixHQUFHLG1CQUFtQixrQkFBa0IsWUFBWSxXQUFXLDRCQUE0QixTQUFTLHdCQUF3QiwwQ0FBMEMsMERBQTBELEdBQUcsK0JBQStCLDJEQUEyRCxxREFBcUQscURBQXFEO0FBQ3hlLFFBQVEsbUNBQW1DLHNFQUFzRSxZQUFZLGNBQWMsbURBQW1ELGNBQWMsbURBQW1ELGdCQUFnQixxQkFBcUIsZ0JBQWdCLEVBQUUsZ0RBQWdELFVBQVUsVUFBVSw0RUFBNEUsWUFBWSxnQkFBZ0IsYUFBYTtBQUMvZSx3REFBd0QsMkxBQTJMLFlBQVksOEJBQThCLEtBQUssS0FBSyx3QkFBd0IsOEJBQThCLGdCQUFnQixTQUFTLG9CQUFvQix1QkFBdUIsSUFBSSx1QkFBdUIsZUFBZSxrQkFBa0IsU0FBUyxVQUFVO0FBQ2hmLDZCQUE2QixJQUFJLHNDQUFzQyxpQkFBaUIsa0JBQWtCLE1BQU0scURBQXFELDhDQUE4QyxvQkFBb0IscUdBQXFHLHdCQUF3QixrRUFBa0U7QUFDdGEsR0FBRyxvQkFBb0IseUJBQXlCLGVBQWUsb0NBQW9DLG9CQUFvQiw2R0FBNkcsWUFBWSxxQkFBcUIscUJBQXFCLG9EQUFvRCxnQkFBZ0IsZ0JBQWdCLG1CQUFtQixNQUFNLHNCQUFzQixNQUFNLGVBQWUsV0FBVyxNQUFNLGtCQUFrQixjQUFjLGNBQWM7QUFDamYsUUFBUSxtQkFBbUIsdUJBQXVCLCtCQUErQixXQUFXLGlEQUFpRCwyQkFBMkIsSUFBSSwyQkFBMkIsOENBQThDLHdDQUF3QywwQ0FBMEMsc0NBQXNDLGlEQUFpRCxZQUFZLGdCQUFnQixZQUFZLDJCQUEyQiw0QkFBNEIsbUJBQW1CO0FBQ2hoQiw0REFBNEQsd0JBQXdCLGtCQUFrQiwyQkFBMkIsMkVBQTJFLHdCQUF3QixtQ0FBbUMsc0VBQXNFLGtCQUFrQixPQUFPLHdCQUF3QiwrQkFBK0IsbUJBQW1CLDBDQUEwQyx3QkFBd0IscUJBQXFCO0FBQ3ZnQixzQ0FBc0MsSUFBSSw4Q0FBOEMsY0FBYyx3QkFBd0IsY0FBYyxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsd0NBQXdDLFNBQVMsY0FBYyxTQUFTLDZGQUE2RixFQUFFLHVCQUF1QixJQUFJLDRCQUE0QixZQUFZLGNBQWMsOEJBQThCLHFCQUFxQixrQkFBa0IsWUFBWTtBQUNsZixFQUFFLFdBQVcsVUFBVSxtQkFBbUIsbUNBQW1DLGNBQWMsa0JBQWtCLFVBQVUsY0FBYyxXQUFXLGNBQWMscUNBQXFDLGtCQUFrQixlQUFlLEVBQUUsa0JBQWtCLDREQUE0RCxnQkFBZ0IsMENBQTBDLGdCQUFnQix3QkFBd0IsTUFBTSx5Q0FBeUMsTUFBTSxLQUFLLElBQUk7QUFDcGQsb0JBQW9CLEtBQUssSUFBSSw2QkFBNkIsZ0JBQWdCLGdCQUFnQix5QkFBeUIsYUFBYSxrRkFBa0Ysd0JBQXdCLGNBQWMsYUFBYSxNQUFNLHVCQUF1QixVQUFVLDZCQUE2QixrREFBa0QsU0FBUztBQUNwWSxPQUFPLHNCQUFzQixXQUFXLEdBQUcsU0FBUyxFQUFFLFNBQVMsa0JBQWtCLHFCQUFxQixTQUFTLE9BQU8sa0ZBQWtGLFFBQVEsaUJBQWlCLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxLQUFLLGdFQUFnRSw2QkFBNkIsZUFBZSxlQUFlLFNBQVMsT0FBTyxJQUFJLEVBQUUsb0JBQW9CLFVBQVUsTUFBTSxpQkFBaUI7QUFDbGUsS0FBSyxpQkFBaUIsa0JBQWtCLGtCQUFrQixhQUFhLGFBQWEsa0JBQWtCLHNCQUFzQixrQkFBa0IsZUFBZSw2Q0FBNkMscUJBQXFCLE1BQU0sd0JBQXdCLDJCQUEyQixFQUFFLDhEQUE4RCxzQkFBc0IsMkJBQTJCLEdBQUcsT0FBTyxvQkFBb0Isc0NBQXNDO0FBQzdjLDRDQUE0QyxJQUFJLHVDQUF1Qyw0QkFBNEIsb0NBQW9DLHVMQUF1TCxLQUFLLHVDQUF1QyxzQkFBc0IsT0FBTyxJQUFJLEVBQUUsU0FBUztBQUN0YSxJQUFJLEVBQUUsUUFBUSxPQUFPLDJEQUEyRCxnQkFBZ0IsZ0RBQWdELDJGQUEyRixPQUFPLE9BQU8sbUNBQW1DLGdDQUFnQyxlQUFlLFNBQVMseUJBQXlCLGFBQWEseUJBQXlCLHlFQUF5RSxPQUFPO0FBQ25lLGFBQWEsWUFBWSxZQUFZLHFDQUFxQyxZQUFZLGVBQWUsbUZBQW1GLHFGQUFxRixvREFBb0QsbURBQW1ELDJCQUEyQixvQ0FBb0Msd0NBQXdDLFFBQVEsYUFBYSxJQUFJO0FBQ3BmLHFCQUFxQixtQkFBbUIsa0JBQWtCLHFDQUFxQyw4QkFBOEIsUUFBUSxLQUFLLG9DQUFvQyx3Q0FBd0MsMENBQTBDLEtBQUssZ0JBQWdCLDBCQUEwQiw2Q0FBNkMsMkJBQTJCLGtCQUFrQixvQ0FBb0MsMEJBQTBCLFVBQVU7QUFDamQsZ0VBQWdFLEtBQUssNEVBQTRFLHFCQUFxQixFQUFFLHFCQUFxQixnREFBZ0QsNkJBQTZCLGtCQUFrQixxQkFBcUIsOEVBQThFO0FBQy9YLENBQUMsa0JBQWtCLHFCQUFxQixFQUFFLDJCQUEyQixzQ0FBc0MsT0FBTyxJQUFJLGlCQUFpQixxQ0FBcUMscUJBQXFCLDBCQUEwQixvQkFBb0IscUJBQXFCLE9BQU8sMkJBQTJCLG1CQUFtQiwyQ0FBMkMscUJBQXFCLDJCQUEyQix1QkFBdUIsNEVBQTRFO0FBQ3ZmLENBQUMscUhBQXFILHdDQUF3QyxhQUFhLGlCQUFpQixvREFBb0QsaUJBQWlCLDZCQUE2QiwyQkFBMkIsd0JBQXdCLDRDQUE0Qyw0REFBNEQsMEJBQTBCO0FBQ25kLHdDQUF3QyxnQ0FBZ0MsdUJBQXVCLG9CQUFvQixJQUFJLGFBQWEsZ0JBQWdCLHlEQUF5RCxrRUFBa0UsNEJBQTRCLE1BQU0sbUJBQW1CLFlBQVksK0NBQStDLHVCQUF1QixFQUFFLFFBQVEsZ0JBQWdCLDhCQUE4QixzQ0FBc0M7QUFDcGYsR0FBRyxlQUFlLEVBQUUsb0JBQW9CLDRCQUE0QixnQkFBZ0IsTUFBTSxXQUFXLE1BQU0sU0FBUyxrQ0FBa0MsbUNBQW1DLGlLQUFpSyxnQkFBZ0IsYUFBYSxRQUFRLE1BQU0sS0FBSyxrQkFBa0IsdURBQXVELHdCQUF3QixnQkFBZ0I7QUFDM2YsbUJBQW1CLGdCQUFnQixTQUFTLGdCQUFnQixZQUFZLE9BQU8sZUFBZSxzQkFBc0IsOEJBQThCLCtDQUErQyxJQUFJLFlBQVksb0JBQW9CLGFBQWEsY0FBYyxRQUFRLGtCQUFrQixjQUFjLG9CQUFvQix3Q0FBd0MsYUFBYSxJQUFJLEVBQUUsTUFBTSxvQkFBb0IseUNBQXlDLE9BQU8sSUFBSSxFQUFFLE1BQU0sa0JBQWtCLHVDQUF1QyxnQkFBZ0I7QUFDdGhCLHlDQUF5Qyx3QkFBd0IsaUJBQWlCLGFBQWEsU0FBUyxFQUFFLHdFQUF3RSxjQUFjLGlCQUFpQixvQ0FBb0MsdUNBQXVDLG9FQUFvRSw0QkFBNEIsY0FBYywyRUFBMkUsa0JBQWtCO0FBQ3ZlLG9EQUFvRCw2REFBNkQsS0FBSyx1REFBdUQsY0FBYyxtQkFBbUIsdUNBQXVDLFNBQVMsMkJBQTJCLGtEQUFrRCxrRUFBa0UsUUFBUSxtQkFBbUIsa0RBQWtELDJCQUEyQjtBQUNyZixXQUFXLFFBQVEsd0JBQXdCLHVCQUF1QiwrQkFBK0IsV0FBVyxrQkFBa0IsV0FBVyxFQUFFLDhCQUE4QixPQUFPLG9DQUFvQyxnQ0FBZ0MscUNBQXFDLDZHQUE2Ryw2QkFBNkIsMEJBQTBCLDhDQUE4QztBQUMzZSxHQUFHLHFDQUFxQywrQkFBK0IsY0FBYyx3QkFBd0Isd0NBQXdDLHNDQUFzQyw0Q0FBNEMsdUNBQXVDLHlCQUF5QixTQUFTLElBQUksWUFBWSxnQkFBZ0IsK0JBQStCLE1BQU0sbUNBQW1DLG1DQUFtQyx5QkFBeUIsbUJBQW1CLElBQUksRUFBRTtBQUM3ZSxZQUFZLFlBQVksbUJBQW1CLGdCQUFnQixrQkFBa0IsNEJBQTRCLE9BQU8sS0FBSyxJQUFJLEVBQUUsMkRBQTJELFNBQVMsT0FBTyxTQUFTLHdDQUF3QyxlQUFlLDJHQUEyRyx5QkFBeUIsbUJBQW1CLHFDQUFxQyxNQUFNLFFBQVE7QUFDaGQsT0FBTyxzQkFBc0IseUJBQXlCLFNBQVMsSUFBSSxVQUFVLGVBQWUsbUNBQW1DLG1CQUFtQixnQ0FBZ0Msb0RBQW9ELGtCQUFrQixxQkFBcUIsWUFBWSxVQUFVLDRCQUE0QixJQUFJLFlBQVksa0JBQWtCLGFBQWEsdURBQXVELFlBQVksWUFBWSxrQkFBa0Isd0JBQXdCO0FBQ3ZlLE9BQU8sUUFBUSxlQUFlLHlCQUF5QixhQUFhLG1CQUFtQixpQ0FBaUMsU0FBUyxXQUFXLHNDQUFzQyxVQUFVLGNBQWMsZUFBZSxxQkFBcUIsNERBQTRELGlEQUFpRCwwQkFBMEIsc0JBQXNCLFVBQVUsSUFBSSwrQ0FBK0MsU0FBUyxhQUFhLDBCQUEwQjtBQUN4ZiwwQkFBMEIsbUJBQW1CLGVBQWUsNkJBQTZCLEVBQUUsa0ZBQWtGLElBQUksV0FBVyxFQUFFLE9BQU8sSUFBSSxFQUFFLE9BQU8saUNBQWlDLG9CQUFvQixJQUFJLE9BQU8scUNBQXFDLFVBQVUscUJBQXFCLHFCQUFxQixzQkFBc0IsV0FBVztBQUM1WSxTQUFTLGlFQUFpRSwyR0FBMkcsNkJBQTZCLElBQUksWUFBWSxhQUFhLDRDQUE0QyxhQUFhLHNCQUFzQixrQ0FBa0MsZUFBZSxNQUFNLG9CQUFvQixJQUFJLHVEQUF1RCxpQkFBaUI7QUFDcmQsbUJBQW1CLGFBQWEsdUJBQXVCLCtEQUErRCxzQkFBc0IsNkRBQTZELHlEQUF5RCx5Q0FBeUMsU0FBUyxrRkFBa0YsNkNBQTZDLFNBQVMsRUFBRSxZQUFZLElBQUksRUFBRSxtQkFBbUIsWUFBWSxJQUFJO0FBQ25mLE9BQU8sa0JBQWtCLGtCQUFrQixxQkFBcUIscUJBQXFCLElBQUksY0FBYyxxQkFBcUIseUJBQXlCLDhCQUE4QixtQkFBbUIsaUJBQWlCLFNBQVMscUJBQXFCLGlCQUFpQixtREFBbUQsV0FBVyxjQUFjLDZCQUE2QixZQUFZLHFCQUFxQixpQkFBaUIsNkVBQTZFO0FBQzllLENBQUMscUJBQXFCLCtCQUErQixrQkFBa0IsSUFBSSxXQUFXLHlCQUF5QixjQUFjLG9CQUFvQiwwQ0FBMEMsZUFBZSxNQUFNLElBQUksd0JBQXdCLFVBQVUsYUFBYSxlQUFlLFFBQVEsK0RBQStELG9GQUFvRixFQUFFLElBQUksYUFBYSxlQUFlLGtCQUFrQjtBQUNqZSx3Q0FBd0Msa0NBQWtDLFNBQVMsT0FBTyw0T0FBNE8sb0JBQW9CLDhDQUE4Qyw0QkFBNEIsd0RBQXdELGtCQUFrQjtBQUM5ZSxHQUFHLGNBQWMscUJBQXFCLGNBQWMsMkJBQTJCLHNCQUFzQix3QkFBd0IsTUFBTSxJQUFJLGtCQUFrQixTQUFTLFNBQVMsUUFBUSxNQUFNLDRCQUE0QiwyQkFBMkIsMkJBQTJCLHdDQUF3QyxtQkFBbUIscUJBQXFCLGtCQUFrQixzQkFBc0IsNEJBQTRCLHNCQUFzQixtQkFBbUI7QUFDeGMscUlBQXFJLG1CQUFtQiwwQkFBMEIsMkJBQTJCLFVBQVUsZ0JBQWdCLE9BQU8sK0JBQStCLHNCQUFzQixnQkFBZ0IsWUFBWSxrQkFBa0IsUUFBUSx5QkFBeUIsWUFBWSxPQUFPLE1BQU0sY0FBYyw4QkFBOEIsVUFBVSxHQUFHLDRDQUE0QztBQUNoZiw4Q0FBOEMsZUFBZSxrQ0FBa0MsYUFBYSxtQkFBbUIsTUFBTSxrQ0FBa0MsaUZBQWlGLDhDQUE4QyxvRUFBb0UsS0FBSyxPQUFPLElBQUksRUFBRSxPQUFPLGlDQUFpQyxhQUFhLGFBQWEsUUFBUSxpQkFBaUIsYUFBYSxJQUFJLFNBQVM7QUFDamYsU0FBUyxjQUFjLFVBQVUsT0FBTyxpQ0FBaUMsY0FBYyxTQUFTLGFBQWEsaUJBQWlCLHNGQUFzRixLQUFLLFdBQVcsYUFBYSxPQUFPLCtCQUErQix3QkFBd0IsYUFBYSxvQ0FBb0Msa0JBQWtCLEVBQUUsa0JBQWtCLGVBQWUsNENBQTRDLGdCQUFnQix3QkFBd0Isa0JBQWtCO0FBQzNmLHdCQUF3QixlQUFlLHdDQUF3Qyw4SUFBOEksS0FBSyxXQUFXLHlGQUF5RixpRUFBaUUsOENBQThDO0FBQ3JiLHlCQUF5QixTQUFTLDJCQUEyQixrQkFBa0IsSUFBSSw4RkFBOEYsT0FBTyx5REFBeUQsRUFBRSwyQkFBMkIsc0RBQXNELDBDQUEwQztBQUM5VyxhQUFhLFVBQVUsTUFBTSxPQUFPLE1BQU0sdUlBQXVJLG1DQUFtQywrQkFBK0IsVUFBVSxpREFBaUQseUJBQXlCLHFCQUFxQixxQkFBcUIsYUFBYSxlQUFlLG1EQUFtRCw2QkFBNkIsRUFBRTtBQUMvZCxHQUFHLGFBQWEsK0JBQStCLGlGQUFpRiwyQkFBMkIsMkJBQTJCLEVBQUUsY0FBYyw2RkFBNkYsTUFBTSxpQ0FBaUMseUNBQXlDLElBQUksR0FBRyxPQUFPLHFCQUFxQixFQUFFLHNCQUFzQiwwQkFBMEIsV0FBVyxxQkFBcUI7QUFDeGUsRUFBRSxFQUFFLHNCQUFzQixXQUFXLGdDQUFnQyxtQkFBbUIsK0NBQStDLEtBQUssbUNBQW1DLHVCQUF1QixFQUFFLGlCQUFpQixhQUFhLHFEQUFxRCxJQUFJLFlBQVkseUJBQXlCLDJGQUEyRiw2QkFBNkIsWUFBWSxJQUFJLG9CQUFvQixRQUFRO0FBQ3hlLHNDQUFzQyxJQUFJLFVBQVUsZ0JBQWdCLE9BQU8sK0JBQStCLHNCQUFzQixnQkFBZ0IsZUFBZSxZQUFZLG1CQUFtQixrQkFBa0IsNkJBQTZCLG1DQUFtQztBQUNoUiw4QkFBOEIsd0RBQXdELHlCQUF5Qiw0QkFBNEIsaUJBQWlCLHNCQUFzQixpRUFBaUUsa0JBQWtCLGVBQWUscUJBQXFCLGdCQUFnQixhQUFhLGFBQWEsaUJBQWlCLHdCQUF3Qiw4RUFBOEUsYUFBYTtBQUN2ZCxJQUFJLGFBQWEsZ0JBQWdCLE1BQU0sY0FBYyx5Q0FBeUMsc0NBQXNDLG1CQUFtQixxQ0FBcUMsa0NBQWtDLEVBQUUsb0NBQW9DLDJCQUEyQix5QkFBeUIsc0xBQXNMO0FBQzllLEdBQUcsWUFBWSxZQUFZLElBQUksSUFBSSxvQkFBb0IsZUFBZSwyQkFBMkIsbUJBQW1CLElBQUksZ0JBQWdCLG1CQUFtQixRQUFRLHdDQUF3QyxlQUFlLG9CQUFvQixXQUFXLHlCQUF5QixNQUFNLGlCQUFpQixzREFBc0QsRUFBRSw0QkFBNEIsVUFBVSxPQUFPLGlDQUFpQyxnQkFBZ0IsV0FBVyxxQkFBcUI7QUFDL2QsRUFBRSw0Q0FBNEMsNENBQTRDLDZEQUE2RCxpQkFBaUIsT0FBTyxLQUFLLHFCQUFxQix1QkFBdUIsMkpBQTJKLEtBQUssNkJBQTZCLEtBQUssNEJBQTRCLE9BQU8sR0FBRyxvQkFBb0IsUUFBUTtBQUNwZSxjQUFjLFdBQVcsb0JBQW9CLG1CQUFtQixhQUFhLEVBQUUsTUFBTSwrQkFBK0IsaUJBQWlCLDRDQUE0QyxZQUFZLDRCQUE0Qix1Q0FBdUMsb0hBQW9ILGlCQUFpQixNQUFNLGlDQUFpQyxzRUFBc0UsSUFBSSxHQUFHO0FBQ3pmLE1BQU0scUJBQXFCLEVBQUUscUNBQXFDLElBQUksRUFBRSxhQUFhLGVBQWUsRUFBRSxzQkFBc0IsZ0JBQWdCLGFBQWEscUJBQXFCLDJDQUEyQywyREFBMkQsWUFBWSxxQkFBcUIsZ0NBQWdDLGtCQUFrQixJQUFJLGFBQWEsUUFBUSx5QkFBeUIsNkNBQTZDLFNBQVMsU0FBUyxTQUFTLFVBQVU7QUFDM2Usa0JBQWtCLCtDQUErQywrQ0FBK0MseURBQXlELHlEQUF5RCxnREFBZ0QsdUJBQXVCLE9BQU8sMEJBQTBCLHFEQUFxRCxvQkFBb0IscURBQXFELDJDQUEyQztBQUNuZixrQkFBa0IsK0JBQStCLDJDQUEyQyxpREFBaUQsNEZBQTRGLCtDQUErQywrQkFBK0IsY0FBYyxVQUFVLDBCQUEwQiwyQkFBMkIsZ0JBQWdCLG9CQUFvQixZQUFZLHFCQUFxQixXQUFXLEtBQUssZUFBZTtBQUN4ZSxJQUFJLFdBQVcsMEJBQTBCLG1DQUFtQywyR0FBMkcsOENBQThDLGtCQUFrQixRQUFRLFlBQVksa0JBQWtCLE9BQU8sSUFBSSx5QkFBeUIsNkNBQTZDO0FBQzlXLDBDQUEwQyxPQUFPLG1CQUFtQiw0REFBNEQsb0JBQW9CLElBQUksa0JBQWtCLHVDQUF1QyxrQkFBa0IsMEJBQTBCLDZDQUE2QyxFQUFFLGtCQUFrQiw2QkFBNkIsb0JBQW9CLDZDQUE2QyxJQUFJLEdBQUcsMkJBQTJCLFlBQVksT0FBTyxrQkFBa0IsYUFBYTtBQUNoZixTQUFTLGdHQUFnRyxnQ0FBZ0MseURBQXlELHdDQUF3QyxtQkFBbUIsOENBQThDLG9CQUFvQixpQ0FBaUMscURBQXFELG9DQUFvQyxnQkFBZ0IsaUNBQWlDO0FBQzFlLHdCQUF3Qix3QkFBd0IsaURBQWlELGFBQWEsa0JBQWtCLHlEQUF5RCxnQkFBZ0IsR0FBRyxTQUFTLGVBQWUsMkJBQTJCLGVBQWUsS0FBSyxHQUFHLG1CQUFtQixVQUFVLDJCQUEyQixvQ0FBb0MsaUNBQWlDLHdCQUF3Qiw4QkFBOEIsc0NBQXNDLFlBQVk7QUFDM2YsR0FBRyxnQkFBZ0IsR0FBRywyQkFBMkIsd0NBQXdDLGdEQUFnRCxJQUFJLFlBQVksa0JBQWtCLE1BQU0seUJBQXlCLGFBQWEsNkJBQTZCLGdCQUFnQixhQUFhLDZFQUE2RSxNQUFNLG9CQUFvQixzQ0FBc0Msb0RBQW9ELEVBQUUsV0FBVyxhQUFhO0FBQzVlLDBCQUEwQixrQkFBa0IsMENBQTBDLEVBQUUsa0JBQWtCLCtDQUErQyxFQUFFLGFBQWEsY0FBYyx5Q0FBeUMsc0JBQXNCLFFBQVEscUJBQXFCLHNDQUFzQyxlQUFlLDRCQUE0QiwwSUFBMEksS0FBSyxVQUFVO0FBQzVmLEdBQUcsS0FBSyxNQUFNLCtCQUErQixLQUFLLE1BQU0sOEJBQThCLCtDQUErQyxnSEFBZ0gsU0FBUyxrQkFBa0IsaURBQWlELE1BQU0saUJBQWlCLGdHQUFnRyxLQUFLLHlCQUF5QixRQUFRO0FBQzlkLHFFQUFxRSx1QkFBdUIsTUFBTSxXQUFXLHNCQUFzQix3REFBd0Qsc0JBQXNCLGtDQUFrQywrQkFBK0IsT0FBTyxjQUFjLHFCQUFxQixzQ0FBc0MsRUFBRSwyQkFBMkIsNEJBQTRCLEdBQUcseUJBQXlCLGdCQUFnQixpQ0FBaUM7QUFDeGUsZ0JBQWdCLE9BQU8sa0NBQWtDLE9BQU8sZ0JBQWdCLDBCQUEwQix3REFBd0QsV0FBVyxxQkFBcUIsRUFBRSxlQUFlLHFDQUFxQyw2RkFBNkYscURBQXFELG1CQUFtQixzQ0FBc0MsMkJBQTJCO0FBQzlkLG1CQUFtQixHQUFHLEtBQUssT0FBTyxJQUFJLEVBQUUsU0FBUyw4QkFBOEIsU0FBUyxxQkFBcUIsT0FBTyxVQUFVLDRCQUE0QixjQUFjLG1CQUFtQixpQkFBaUIsNENBQTRDLHFCQUFxQixjQUFjLG1GQUFtRiw0QkFBNEIsbURBQW1ELHlCQUF5QjtBQUN0ZCxtQ0FBbUMscUZBQXFGLE9BQU8sK0JBQStCLDRCQUE0QixVQUFVLFdBQVcsS0FBSyxPQUFPLHVCQUF1Qix3R0FBd0csa0dBQWtHLDhEQUE4RDtBQUMxZiwyQkFBMkIsSUFBSSxrREFBa0QsdUNBQXVDLDRCQUE0QixZQUFZLGlKQUFpSixtQkFBbUIsSUFBSSw4QkFBOEIsMkJBQTJCLHVCQUF1Qix1QkFBdUIsY0FBYyxVQUFVLG9CQUFvQixLQUFLLFFBQVEsT0FBTztBQUMvZSxTQUFTLGdCQUFnQixnQkFBZ0IsY0FBYyxNQUFNLE1BQU0sUUFBUSxrQkFBa0Isc0JBQXNCLGdGQUFnRixRQUFRLEtBQUssK0NBQStDLEtBQUssbUVBQW1FLEtBQUssS0FBSyxLQUFLLElBQUksUUFBUSxLQUFLLGtEQUFrRCw4QkFBOEIsdUNBQXVDLDhCQUE4QjtBQUM1ZiwyQkFBMkIsNkJBQTZCLEdBQUcsb0NBQW9DLG1CQUFtQix1QkFBdUIsd0JBQXdCLGlCQUFpQixPQUFPLFFBQVEsUUFBUSxnRkFBZ0YsR0FBRyxrQ0FBa0MsWUFBWSxzQkFBc0IsMEJBQTBCLDZCQUE2QixtREFBbUQsV0FBVyxZQUFZLE9BQU8sa0JBQWtCLGtCQUFrQjtBQUM1Z0IsT0FBTyxrQkFBa0IsNEJBQTRCLDZCQUE2QixjQUFjLEdBQUcsbUJBQW1CLFVBQVUsYUFBYSxjQUFjLE9BQU8sd0JBQXdCLFVBQVUsY0FBYyxVQUFVLGdCQUFnQiw0QkFBNEIsSUFBSSw2QkFBNkIsZUFBZSxFQUFFLFFBQVEsc0NBQXNDLFFBQVEsc0VBQXNFLGdCQUFnQixLQUFLLG9DQUFvQztBQUMvZSxxQkFBcUIsWUFBWSxFQUFFLGNBQWMsMENBQTBDLEVBQUUsa0JBQWtCLE9BQU8seUNBQXlDLG9CQUFvQixJQUFJLFFBQVEsOElBQThJLElBQUksTUFBTSxrQkFBa0IsSUFBSSxRQUFRLHlDQUF5QyxLQUFLLFdBQVcsUUFBUSwyQkFBMkIsaUJBQWlCLGtCQUFrQjtBQUNwZixrQ0FBa0MsVUFBVSxJQUFJLGdDQUFnQyxVQUFVLGlCQUFpQixpQkFBaUIsRUFBRSxPQUFPLFFBQVEsRUFBRSw0QkFBNEIsZ0JBQWdCLE1BQU0sUUFBUSxTQUFTLHNCQUFzQixRQUFRLE9BQU8sS0FBSyxzQ0FBc0MsUUFBUSxTQUFTLHNCQUFzQix5REFBeUQsK0NBQStDLG9CQUFvQixRQUFRLFdBQVcsY0FBYztBQUN0ZSxpQkFBaUIsSUFBSSx1REFBdUQsZ0JBQWdCLGdDQUFnQyx3QkFBd0IsZ0NBQWdDLHNEQUFzRCxrRkFBa0YsV0FBVyxvQkFBb0IsaUJBQWlCLGNBQWMsaUNBQWlDLFlBQVksZ0JBQWdCLHlCQUF5Qix3QkFBd0IsSUFBSSw2REFBNkQsVUFBVSxTQUFTO0FBQzVqQiw0Q0FBNEMsT0FBTyxRQUFRLCtHQUErRyw0QkFBNEIsd0NBQXdDLGdDQUFnQyxPQUFPLFVBQVUsNEJBQTRCLFlBQVksWUFBWSxtQkFBbUIsb0JBQW9CLGdCQUFnQixtQ0FBbUMsZUFBZSxVQUFVLGdEQUFnRCxTQUFTLHVCQUF1QjtBQUN0aEIsS0FBSyxPQUFPLEdBQUcsK0JBQStCLGtFQUFrRSwwQkFBMEIsd0JBQXdCLEVBQUUscUJBQXFCLGdCQUFnQixXQUFXLEVBQUUsR0FBRyx3QkFBd0IsZ0NBQWdDLGVBQWUsZ0JBQWdCLHFDQUFxQyxJQUFJLEVBQUUsS0FBSzs7Ozs7Ozs7Ozs7OztBQzFJaFc7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZSxxSEFBcUgseUJBQXlCLGdDQUFnQyx5QkFBeUIsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUNBdk8saUVBQWUsaUtBQWlLLDhDQUE4QywyQkFBMkI7Ozs7Ozs7Ozs7Ozs7OztBQ0F6UCxpRUFBZSx1RkFBdUYsd0JBQXdCLDBCQUEwQixjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNBdEssaUVBQWUsK0RBQStEOzs7Ozs7Ozs7Ozs7Ozs7QUNBOUUsaUVBQWUsbURBQW1ELDhDQUE4Qyx1SkFBdUosZ0NBQWdDLGlLQUFpSyxtRUFBbUUsa0RBQWtELDZCQUE2QixzQ0FBc0MsaUpBQWlKLDZCQUE2Qiw4QkFBOEIsNkNBQTZDOzs7Ozs7Ozs7Ozs7Ozs7QUNBejNCLGlFQUFlLHdnQkFBd2dCLGtDQUFrQywwQ0FBMEMsOENBQThDOzs7Ozs7Ozs7Ozs7Ozs7QUNBanBCLGlFQUFlLCtYQUErWCw0Q0FBNEMsc0JBQXNCLGlTQUFpUzs7Ozs7Ozs7Ozs7Ozs7O0FDQWp2QixpRUFBZSw0QkFBNEIseURBQXlEOzs7Ozs7Ozs7Ozs7Ozs7QUNBcEcsaUVBQWUsdWRBQXVkLGNBQWMsaUxBQWlMLHNCQUFzQixpK0JBQWkrQjs7Ozs7Ozs7Ozs7Ozs7O0FDQTVwRCxpRUFBZSxneUJBQWd5QixzQkFBc0IseXBCQUF5cEIsdUNBQXVDLDJCQUEyQixxWkFBcVosbUNBQW1DLDZQQUE2UCw0RkFBNEYsZ3hCQUFneEIsOEpBQThKLDB0REFBMHRELFlBQVksOERBQThELHVDQUF1QyxVQUFVLDRCQUE0QixndEJBQWd0QixvQ0FBb0Msb0NBQW9DLHNyQkFBc3JCLG1EQUFtRCw4ekNBQTh6Qyx5QkFBeUIsaTJCQUFpMkI7Ozs7Ozs7Ozs7Ozs7OztBQ0F6d1IsaUVBQWUsd0dBQXdHLDBCQUEwQixpRkFBaUYsaUJBQWlCLDBIQUEwSDs7Ozs7Ozs7Ozs7Ozs7O0FDQTdXLGlFQUFlLHlQQUF5UCxhQUFhLDBDQUEwQzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9ULGlFQUFlLHFPQUFxTyx3WEFBd1gsc2RBQXNkLDJDQUEyQyx5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7OztBQ0F0cEMsaUVBQWUsa01BQWtNLDJDQUEyQyxxZUFBcWUsMkNBQTJDLDhHQUE4Rzs7Ozs7Ozs7Ozs7Ozs7O0FDQTEzQixpRUFBZSw2SUFBNkksY0FBYyw2VEFBNlQsaUJBQWlCLCtDQUErQzs7Ozs7Ozs7Ozs7Ozs7O0FDQXZpQixpRUFBZSxtRUFBbUUsd0RBQXdELHFDQUFxQzs7Ozs7Ozs7OztBQ0EvSzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBLGlmQUFpZiwrYkFBK2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWg3Qix5RUFBOEI7QUFDOUIscUZBQXNDO0FBaUJ0QztJQUE0QiwwQkFBSTtJQUM1QixnQkFBWSxNQUFnQjtRQUE1QixZQUNJLGlCQUFPLFNBRVY7UUFERyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBRyxJQUFJLFlBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQzs7SUFDdEUsQ0FBQztJQUNXO1FBQVgsdUJBQVEsR0FBRTs7d0NBQWM7SUFDYjtRQUFYLHVCQUFRLEdBQUU7OzBDQUFvQjtJQUNuQjtRQUFYLHVCQUFRLEdBQUU7O3lDQUFlO0lBQ2Q7UUFBWCx1QkFBUSxHQUFFOzsyQ0FBa0I7SUFDakI7UUFBWCx1QkFBUSxHQUFFOzsyQ0FBa0I7SUFDakI7UUFBWCx1QkFBUSxHQUFFOzswQ0FBaUI7SUFDaEI7UUFBWCx1QkFBUSxHQUFFOzt3Q0FBYztJQUNiO1FBQVgsdUJBQVEsR0FBRTs7dUNBQWE7SUFDWjtRQUFYLHVCQUFRLEdBQUU7OzZDQUFtQjtJQUNsQjtRQUFYLHVCQUFRLEdBQUU7OzhDQUFvQjtJQUNuQjtRQUFYLHVCQUFRLEdBQUU7OzRDQUFrQjtJQUNqQjtRQUFYLHVCQUFRLEdBQUU7OzRDQUFrQjtJQUNqQyxhQUFDO0NBQUEsQ0FqQjJCLFdBQUksR0FpQi9CO0FBakJZLHdCQUFNOzs7Ozs7Ozs7Ozs7OztBQ2xCbkIseUVBQXdCOzs7Ozs7Ozs7Ozs7Ozs7QUNBeEIsb0ZBQXlDO0FBQ3pDLGlHQUE4QztBQUU5QztJQUFBO1FBQ2MsU0FBSSxHQUFHLEVBQUUsQ0FBQztJQVl4QixDQUFDO0lBVlUsbUNBQVEsR0FBZixVQUFnQixJQUFZLEVBQUUsWUFBa0I7UUFDNUMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFHLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDcEIsT0FBTyxZQUFZLENBQUM7U0FDdkI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ00sbUNBQVEsR0FBZixVQUFnQixJQUFZLEVBQUUsR0FBUTtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUMxQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDO0FBYlksNENBQWdCO0FBZTdCO0lBd0JJLGNBQW9CLE9BQXdDO1FBQXhDLG9DQUFVLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtRQUF4QyxZQUFPLEdBQVAsT0FBTyxDQUFpQztRQXZCcEQsMEJBQXFCLEdBQXVGLEVBQUUsQ0FBQztRQXdCbkgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFsQmEsOEJBQXlCLEdBQXZDO1FBQ0UsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ2EsNkJBQXdCLEdBQXRDLFVBQXVDLE9BQW1CLEVBQUUsTUFBWSxFQUFFLFFBQWdCO1FBQ3hGLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLGdGQUFnRixDQUFDLENBQUM7U0FDbkc7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSwyQkFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNjLHNCQUFpQixHQUFoQyxVQUFpQyxNQUFZLEVBQUUsUUFBZ0I7UUFDN0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssU0FBUztZQUFFLE9BQU87UUFDbEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQU1TLHFDQUFzQixHQUFoQyxVQUFpQyxZQUFvQixFQUFFLFFBQWEsRUFBRSxRQUFhO1FBQy9FLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLElBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBRyxJQUFJLHVCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO1NBQzNGO0lBQ0wsQ0FBQztJQUVTLG1DQUFvQixHQUE5QixVQUErQixZQUFvQixFQUFFLFlBQWtCO1FBQ25FLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDM0MsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDUyxtQ0FBb0IsR0FBOUIsVUFBK0IsWUFBb0IsRUFBRSxRQUFhO1FBQzlELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sK0JBQWdCLEdBQXZCLFVBQXdCLFlBQW9CLEVBQUUsWUFBa0I7UUFDNUQsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDTSwrQkFBZ0IsR0FBdkIsVUFBd0IsWUFBb0IsRUFBRSxRQUFhLEVBQUUsWUFBa0I7UUFDM0UsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNuRSxJQUFHLENBQUMsbUJBQU8sRUFBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNqRTtJQUNMLENBQUM7SUFFTSwyQ0FBNEIsR0FBbkMsVUFBb0MsWUFBb0IsRUFBRSxPQUErQyxFQUFFLEdBQWtCO1FBQWxCLGdDQUFrQjtRQUN6SCxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRSxJQUFHLENBQUMsZ0JBQWdCLEVBQUU7WUFDbEIsZ0JBQWdCLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7U0FDL0Q7UUFDRCxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDcEMsQ0FBQztJQUNNLDZDQUE4QixHQUFyQyxVQUFzQyxZQUFvQixFQUFFLEdBQWtCO1FBQWxCLGdDQUFrQjtRQUMxRSxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRSxJQUFHLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNuQixPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQWpFYyx1QkFBa0IsR0FBaUIsU0FBUyxDQUFDO0lBRTlDLDRCQUF1QixHQUFHO1FBQ3BDLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUErREwsV0FBQztDQUFBO0FBdEVZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNsQmpCLHlFQUE4QjtBQUU5QjtJQUVJLHNCQUFtQixpQkFBNkIsRUFBUyxNQUFZLEVBQVMsUUFBZ0I7UUFBM0Usc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBTTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7UUFFOUYsaUJBQVksR0FBbUQsRUFBRSxDQUFDO1FBQ2xFLE9BQUUsR0FBVyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRnJELENBQUM7SUFHRCxvQ0FBYSxHQUFiLFVBQWMsTUFBWSxFQUFFLFFBQWdCO1FBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRO1lBQ3RELE9BQU87UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG9CQUFVLElBQUksaUJBQVUsQ0FBQyxHQUFHLEtBQUssTUFBTSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUF6RCxDQUF5RCxDQUFDO1lBQ2pHLE9BQU87UUFFVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNyQixHQUFHLEVBQUUsTUFBTTtZQUNYLElBQUksRUFBRSxRQUFRO1lBQ2QsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1NBQ1osQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLDRCQUE0QixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRWpGLENBQUM7SUFDRCw4QkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsb0JBQVU7WUFDbEMsVUFBVSxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoRixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF2QmMsOEJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBd0J2QyxtQkFBQztDQUFBO0FBekJVLG9DQUFZO0FBMkJ2QjtJQVVFLHlCQUFvQixRQUFpQjtRQUFqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBRDdCLGlCQUFZLEdBQWlCLFNBQVMsQ0FBQztRQUd0QyxTQUFJLEdBQUcsZUFBZSxDQUFDLG1CQUFtQixDQUFDO0lBRHBELENBQUM7SUFUYSxtQ0FBbUIsR0FBakMsVUFBMkMsR0FBUyxFQUFFLGVBQW1DLEVBQUUsWUFBb0I7UUFDN0csV0FBSSxDQUFDLHdCQUF3QixDQUFDLGNBQU0sVUFBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLGVBQWUsQ0FBQyxPQUFPLEVBQUUsRUFBN0MsQ0FBNkMsRUFBRSxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdEcsSUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pDLElBQU0sWUFBWSxHQUFHLFdBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1FBQ3RELGVBQWUsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUtELHNCQUFXLG9DQUFPO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ00seUNBQWUsR0FBdEIsVUFBdUIsWUFBMEI7UUFDL0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbkMsQ0FBQztJQUNTLHlDQUFlLEdBQXpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDTSxpQ0FBTyxHQUFkLFVBQWUsTUFBWSxFQUFFLFlBQW9CO1FBQy9DLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDTywyQ0FBaUIsR0FBekI7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFDRCxpQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQWpDc0IsbUNBQW1CLEdBQUcsdUJBQXVCLENBQUM7SUFrQ3ZFLHNCQUFDO0NBQUE7QUFuQ1ksMENBQWU7Ozs7Ozs7Ozs7Ozs7O0FDN0I5QiwyRkFBaUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FqQyxpR0FBaUQ7QUFPakQsU0FBZ0IsUUFBUSxDQUFDLE9BQW1DO0lBQ3hELE9BQU8sVUFBVSxNQUFXLEVBQUUsR0FBVztRQUNyQyxJQUFJLHNCQUFzQixHQUFHLFVBQUMsR0FBUSxFQUFFLEdBQVE7WUFDNUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLDhCQUFlLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ3RGLE9BQU8sOEJBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzdEO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDZixDQUFDLENBQUM7UUFDRixJQUFNLGVBQWUsR0FBRztZQUNwQixJQUFJLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDN0IsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO2dCQUNYLElBQUksT0FBTyxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7b0JBQ3BDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO29CQUNwQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO2lCQUN2RjthQUNKO1lBQ0QsT0FBTyxZQUFZLENBQUM7UUFDeEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUMvQixHQUFHLEVBQUU7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFDekQsQ0FBQztZQUNELEdBQUcsRUFBRSxVQUFVLEdBQVE7Z0JBQ25CLElBQU0sUUFBUSxHQUFHLHNCQUFzQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7b0JBQzVCLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNqQztZQUNMLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0FBQ0wsQ0FBQztBQS9CRCw0QkErQkM7Ozs7Ozs7Ozs7Ozs7OztBQ3RDRCw0RkFBOEM7QUF1Q25DLHFCQUFhLEdBQTBDLEVBQUUsQ0FBQztBQUVyRSxJQUFJLG9CQUFvQixHQUFHO0lBQ3ZCLE1BQU0sRUFBRTtRQUNKLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBQztRQUN6RCxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFDO1FBQ3ZELEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUM7UUFDekQsRUFBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO0tBQ2hFO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO1FBQzNELEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsRUFBQztRQUM1RCxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEVBQUM7UUFDekQsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBQztRQUN6RCxFQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUM7S0FDaEU7SUFDRCxRQUFRLEVBQUU7UUFDTixFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLEVBQUM7UUFDNUQsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO1FBQ3pELEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUM7UUFDekQsRUFBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO0tBQ2hFO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBQztRQUN2RCxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEVBQUM7UUFDM0QsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBQztRQUN4RCxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFDO1FBQ3JELEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsRUFBQztRQUMvRCxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUM7UUFDNUQsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBQztRQUN6RCxFQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUM7S0FDaEU7SUFDRCxPQUFPLEVBQUU7UUFDTCxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFDO1FBQ3ZELEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBQztRQUMzRCxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFDO1FBQ3hELEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUM7UUFDckQsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFDO1FBQy9ELEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBQztRQUM1RCxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFDO1FBQ3pELEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBQztLQUNoRTtJQUNELElBQUksRUFBRTtRQUNGLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUM7S0FDMUQ7SUFDRCxLQUFLLEVBQUU7UUFDSCxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFDO1FBQ3ZELEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsRUFBQztRQUMzRCxFQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFDO1FBQ3hELEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUM7UUFDckQsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFDO1FBQy9ELEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBQztRQUM1RCxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFDO1FBQ3pELEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBQztLQUNoRTtJQUNELFdBQVcsRUFBRTtRQUNULEVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUM7UUFDdkQsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSwyQkFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsRUFBQztRQUN6RCxFQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLDJCQUFZLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQUM7S0FDaEU7Q0FDSjtBQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBRyxJQUFJLDRCQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEdwRix1R0FBMEMsQ0FBQztBQUMzQyxtR0FBeUMsQ0FBQztBQUMxQywrR0FBK0MsQ0FBQztBQUNoRCwwR0FBNEMsQ0FBQztBQUM3Qyw2R0FBNkMsQ0FBQztBQUM5QyxtR0FBeUMsQ0FBQztBQUMxQyx5R0FBNkMsQ0FBQztBQUM5QyxtR0FBeUMsQ0FBQztBQUMxQyx3R0FBNEMsQ0FBQztBQUM3Qyw4R0FBZ0QsQ0FBQztBQUNqRCxzR0FBMkMsQ0FBQztBQUM1QyxnR0FBdUMsQ0FBQztBQUN4QyxnR0FBdUMsQ0FBQztBQUN4QyxvSEFBb0QsQ0FBQztBQUNyRCxzR0FBMkMsQ0FBQztBQUM1QyxtR0FBeUMsQ0FBQztBQUMxQyxpSEFBa0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCaEUsNEZBQThCO0FBQzlCLDhGQUErQjtBQUMvQixnSEFBd0M7QUFFeEMsOEVBQXVCO0FBQ3ZCLHNGQUF3QjtBQUN4QiwwRkFBNkI7QUFDN0IsOEZBQStCO0FBQy9CLGdHQUFnQztBQUNoQyw0R0FBc0M7QUFDdEMsc0hBQTJDO0FBQzNDLDhHQUF1QztBQUN2Qyw0R0FBc0M7QUFFdEMsOEZBQStCO0FBQy9CLDBGQUE2QjtBQUU3Qix3SEFBNEM7QUFDNUMsMEhBQTZDO0FBQzdDLDRGQUE4QjtBQUM5Qiw4RUFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ0Qix3R0FBK0I7QUFDL0IsK0VBQXNEO0FBQ3RELDhFQUFpQztBQUVqQyxtR0FBNkI7QUFDN0IsaUhBQW9DO0FBQ3BDLGlIQUFvQztBQUNwQyx5R0FBZ0M7QUFDaEMsdUdBQStCO0FBQy9CLHVIQUF1QztBQUN2QyxxSEFBc0M7QUFDdEMsK0hBQTJDO0FBQzNDLHFIQUFzQztBQUN0QywyR0FBaUM7QUFDakMsNkdBQWtDO0FBQ2xDLCtIQUEyQztBQUMzQyx1R0FBK0I7QUFFL0IsMkhBQXlDO0FBQ3pDLDJIQUF5QztBQUV6QywyRUFBbUI7QUFFTix3QkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFFbkM7SUFBOEMsNENBQWdCO0lBQTlEOztJQW1DQSxDQUFDO0lBbENXLHdEQUFxQixHQUE3QixVQUE4QixlQUE2QztRQUN2RSxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBUTtZQUNuRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUc7Z0JBQ2YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRCxPQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZFLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTyxtREFBZ0IsR0FBeEIsVUFBeUIsS0FBVTtRQUMvQixJQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckIsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsT0FBTyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTSwyQ0FBUSxHQUFmLFVBQWdCLElBQVksRUFBRSxZQUFrQjtRQUM1QyxJQUFNLEtBQUssR0FBRyxpQkFBTSxRQUFRLFlBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2pELElBQUcsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLEVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMxQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNqRDtRQUNELE9BQU8sVUFBVSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNNLDJDQUFRLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLEdBQVE7UUFDbEMsSUFBRyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsK0JBQUM7QUFBRCxDQUFDLENBbkM2Qyx1QkFBZ0IsR0FtQzdEO0FBbkNZLDREQUF3QjtBQXFDckMsV0FBSSxDQUFDLHVCQUF1QixHQUFHLGNBQU0sV0FBSSx3QkFBd0IsRUFBRSxFQUE5QixDQUE4QixDQUFDO0FBRXpELHVIQUFxRCxDQUFDO0FBRWpFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtJQUM3QixTQUFTLEVBQUU7UUFDUCxlQUFlLEVBQUUsVUFBVSxNQUFNLEVBQUUsYUFBYTtZQUM1QyxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBYyxDQUFDO1lBQ3BDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7S0FDSjtJQUNELFFBQVEsRUFBRSxxQkFBYTtDQUMxQixDQUFDLENBQUM7QUFFSCxTQUFTLFdBQVcsQ0FBQyxPQUF5QjtJQUMxQyxJQUFJLEVBQUUsR0FBWSxPQUFrQixDQUFDO0lBQ3JDLElBQUcsT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1FBQzVCLEVBQUUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDOUM7SUFDRCxFQUFFLENBQUMsU0FBUyxHQUFHLCtDQUE2QyxDQUFDO0lBQzdELEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxVQUFDLElBQVU7UUFDdkQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLENBQUM7QUFFRCxhQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUZ4Qyx3R0FBK0I7QUFHcEIsZ0pBQW1FLENBQUM7QUFFL0UsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUU7SUFDdkMsU0FBUyxFQUFFO1FBQ1AsZUFBZSxFQUFFLFVBQVMsTUFBTSxFQUFFLGFBQWE7WUFDM0MsSUFBSSxLQUFLLEdBQWtCLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBTW5ELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7S0FDSjtJQUNELFFBQVEsRUFBRSw4QkFBc0I7Q0FDbkMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkgsd0dBQStCO0FBR3BCLGdKQUFtRSxDQUFDO0FBRS9FLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO0lBQ3ZDLFNBQVMsRUFBRTtRQUNQLGVBQWUsRUFBRSxVQUFTLE1BQU0sRUFBRSxhQUFhO1lBQzNDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FDSjtJQUNELFFBQVEsRUFBRSw4QkFBc0I7Q0FDbkMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNaSCx3R0FBK0I7QUFHcEIsa0lBQTBELENBQUM7QUFFdEUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDeEMsU0FBUyxFQUFFO1FBQ1AsZUFBZSxFQUFFLFVBQVMsTUFBTSxFQUFFLGFBQWE7WUFDM0MsSUFBSSxLQUFLLEdBQWtCLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBTW5ELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7S0FDSjtJQUNELFFBQVEsRUFBRSwwQkFBa0I7Q0FDL0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkgsd0dBQStCO0FBR3BCLGtJQUEwRCxDQUFDO0FBRXRFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBQ3hDLFNBQVMsRUFBRTtRQUNQLGVBQWUsRUFBRSxVQUFTLE1BQU0sRUFBRSxhQUFhO1lBQzNDLE9BQU8sTUFBTSxDQUFDO1FBQ2xCLENBQUM7S0FDSjtJQUNELFFBQVEsRUFBRSwwQkFBa0I7Q0FDL0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pILHdHQUErQjtBQUMvQixvRkFBNkM7QUFFbEMsOEdBQTZDLENBQUM7QUFFekQsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUU7SUFDdkMsU0FBUyxFQUFFO1FBQ1AsZUFBZSxFQUFFLFVBQVMsTUFBTSxFQUFFLGFBQWE7WUFDM0MsSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFNLGFBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBbkQsQ0FBbUQsQ0FBQyxDQUFDO1lBQzVGLDZCQUNPLE1BQU0sS0FDVCxTQUFTLEVBQUUsY0FBTSxhQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQXZDLENBQXVDLEVBQ3hELFlBQVksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQU0sdUJBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLEVBQ3ZGLFVBQVUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQU0sdUJBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFwRCxDQUFvRCxDQUFDLEVBQ25GLFlBQVksa0JBQ2Q7UUFDTixDQUFDO0tBQ0o7SUFDRCxRQUFRLEVBQUUsb0JBQVk7Q0FDekIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ25CSCx3R0FBK0I7QUFHL0IsSUFBSSxjQUFjLEdBQUcscUhBQTRDLENBQUM7QUFFbEUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLEVBQUU7SUFDakQsU0FBUyxFQUFFO1FBQ1QsZUFBZSxFQUFFLFVBQVMsTUFBTSxFQUFFLGFBQWE7WUFDN0MsT0FBTyxNQUFNLENBQUMsVUFBOEIsQ0FBQztRQUMvQyxDQUFDO0tBQ0Y7SUFDRCxRQUFRLEVBQUUsY0FBYztDQUN6QixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDWkgsd0dBQStCO0FBRy9CLElBQUksY0FBYyxHQUFHLDJHQUF1QyxDQUFDO0FBRTdELEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFO0lBQzVDLFNBQVMsRUFBRTtRQUNULGVBQWUsRUFBRSxVQUFTLE1BQU0sRUFBRSxhQUFhO1lBQzdDLE9BQU8sTUFBTSxDQUFDLE9BQXdCLENBQUM7UUFDekMsQ0FBQztLQUNGO0lBQ0QsUUFBUSxFQUFFLGNBQWM7Q0FDekIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1pILHdHQUErQjtBQUUvQixJQUFJLHFCQUFxQixHQUFHLDZHQUF3QyxDQUFDO0FBRXJFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ25ELFNBQVMsRUFBRTtRQUNULGVBQWUsRUFBRSxVQUFTLE1BQU0sRUFBRSxhQUFhO1lBQzdDLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FDRjtJQUNELFFBQVEsRUFBRSxxQkFBcUI7Q0FDaEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1hILHdHQUErQjtBQUMvQiwrR0FBNkQ7QUFHN0QsSUFBSSx1QkFBdUIsR0FBRywyR0FBdUMsQ0FBQztBQUV0RSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUMxQyxTQUFTLEVBQUU7UUFDUCxlQUFlLEVBQUUsVUFBUyxNQUFNLEVBQUUsYUFBYTtZQUMzQyxJQUFNLFNBQVMsR0FBRyxJQUFJLGlDQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoSyxJQUFNLEtBQUssR0FBRyxjQUFNLGdCQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBeEIsQ0FBd0IsQ0FBQztZQUM3QyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMvQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO2dCQUMvRCxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sU0FBUyxDQUFDO1FBQ3JCLENBQUM7S0FDSjtJQUNELFFBQVEsRUFBRSx1QkFBdUI7Q0FDcEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkgsd0dBQStCO0FBR3BCLG9IQUFpRCxDQUFDO0FBRTdELEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUNuQyxTQUFTLEVBQUU7UUFDUCxlQUFlLEVBQUUsVUFBUyxNQUFNLEVBQUUsYUFBYTs7WUFDM0MsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDcEMsSUFBSSxXQUFXLEdBQWdCLEtBQUssQ0FBQyxZQUFNLENBQUMsT0FBTywwQ0FBRSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUM7WUFDcEUsSUFBSSxVQUFVLEdBQUcsYUFBTSxDQUFDLE9BQU8sMENBQUUsSUFBSSxLQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2RixJQUFNLE9BQU8sR0FBRyxlQUFLO2dCQUNqQixJQUFHLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRTtvQkFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDOUQsQ0FBQyxDQUFDO1lBQ0YsYUFBYSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDekQsT0FBTztnQkFDSCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsT0FBTyxFQUFFLGNBQVEsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsT0FBTyxFQUFFLGNBQU0sb0JBQWEsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUEzRCxDQUEyRDthQUM3RSxDQUFDO1FBQ04sQ0FBQztLQUNKO0lBQ0QsUUFBUSxFQUFFLHNCQUFjO0NBQzNCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJILHdHQUErQjtBQUMvQiw2RkFBbUQ7QUFFeEMsdUhBQW1ELENBQUM7QUFFL0QsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFDNUMsU0FBUyxFQUFFO1FBQ1QsZUFBZSxFQUFFLFVBQVMsTUFBTSxFQUFFLGFBQWE7WUFDN0MsT0FBTyxJQUFJLHNCQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLENBQUM7S0FDRjtJQUNELFFBQVEsRUFBRSx1QkFBZTtDQUMxQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1pILHdHQUErQjtBQUcvQixJQUFJLGNBQWMsR0FBRywrRkFBZ0MsQ0FBQztBQUV0RCxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtJQUN4QyxTQUFTLEVBQUU7UUFDUCxlQUFlLEVBQUUsVUFBQyxNQUFlLEVBQUUsYUFBYTtZQUM1QyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQ0o7SUFDRCxRQUFRLEVBQUUsY0FBYztDQUMzQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1pILHdHQUErQjtBQUUvQixJQUFJLGVBQWUsR0FBRyxpR0FBaUMsQ0FBQztBQUV4RCxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFDcEMsU0FBUyxFQUFFO1FBQ1AsZUFBZSxFQUFFLFVBQVMsTUFBTSxFQUFFLGFBQWE7WUFDM0MsSUFBSSxVQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0QsT0FBTztnQkFDSCxPQUFPLEVBQUUsVUFBVTtnQkFDbkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDM0IsU0FBUyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUztnQkFDbkMsa0JBQWtCLEVBQUUsVUFBQyxDQUFDLEVBQUUsS0FBSztvQkFDekIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBQ2hFLENBQUM7YUFDSixDQUFDO1FBQ04sQ0FBQztLQUNKO0lBQ0QsUUFBUSxFQUFFLGVBQWU7Q0FDNUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkgsd0dBQStCO0FBRS9CLElBQUksZ0JBQWdCLEdBQUcsbUhBQTBDLENBQUM7QUFFbEUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLEVBQUU7SUFDN0MsU0FBUyxFQUFFO1FBQ1AsZUFBZSxFQUFFLFVBQVMsTUFBTSxFQUFFLGFBQWE7WUFDM0MsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JELElBQU0sS0FBSyxHQUFHLGNBQU0sYUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFiLENBQWEsQ0FBQztZQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMvQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO2dCQUMvRCxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU87Z0JBQ0gsTUFBTTtnQkFDTixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN6QixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFO2dCQUMvQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7Z0JBQ2pCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztnQkFDdkIsTUFBTSxFQUFFLFVBQUMsQ0FBQyxFQUFFLEtBQUs7b0JBQ2IsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDbEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUM1QixDQUFDO2FBQ0osQ0FBQztRQUNOLENBQUM7S0FDSjtJQUNELFFBQVEsRUFBRSxnQkFBZ0I7Q0FDN0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkgsd0dBQStCO0FBRS9CLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUNqQyxTQUFTLEVBQUU7UUFDUCxlQUFlLEVBQUUsVUFBUyxNQUFNLEVBQUUsYUFBYTtZQUMzQyxPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQ0o7SUFDRCxRQUFRLEVBQUUsMkZBQThCO0NBQzNDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDVEg7SUFBQTtJQW1CQSxDQUFDOzs7SUFsQlUsMkJBQWMsR0FBRztRQUNwQixjQUFjLEVBQUUsVUFBVTtRQUMxQixXQUFXLEVBQUUsT0FBTztRQUNwQixZQUFZLEVBQUUsT0FBTztRQUNyQixlQUFlLEVBQUUsV0FBVztRQUM1QixhQUFhLEVBQUUsU0FBUztRQUN4QixVQUFVLEVBQUUsTUFBTTtRQUNsQixrQkFBa0IsRUFBRSxrQkFBa0I7UUFDdEMsZUFBZSxFQUFFLGVBQWU7UUFDaEMsa0JBQWtCLEVBQUUsV0FBVztRQUMvQixlQUFlLEVBQUUsT0FBTztRQUN4QixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLGNBQWMsRUFBRSxJQUFJO1FBQ3BCLE1BQU0sRUFBRSxTQUFTO0tBQ3BCLENBQUM7SUFDSyxzQkFBUyxHQUFHLFVBQUMsUUFBZ0I7UUFDaEMsT0FBTyxFQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxtQkFBQztDQUFBO0FBbkJZLG9DQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUNBekIsMEVBQW1EO0FBRW5ELG9FQUFxQjtBQUVyQjtJQUFBO1FBQ0ksU0FBSSxHQUFXLE1BQU0sQ0FBQztRQUN0QixXQUFNLEdBQVcsa0JBQWtCLENBQUM7UUFDcEMsV0FBTSxHQUFXLGtCQUFrQixDQUFDO0lBQ3hDLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQztBQUpZLDRCQUFRO0FBTXJCLGdCQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWM0MsK0VBQW9DO0FBQ3BDLDJGQUE0QztBQUc1QyxrRkFBNEI7QUFFNUI7SUFBbUMsaUNBQUk7SUFDbkMsdUJBQW9CLElBQWdCO1FBQXBDLFlBQ0ksaUJBQU8sU0FFVjtRQUhtQixVQUFJLEdBQUosSUFBSSxDQUFZO1FBRWhDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O0lBQ2hDLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsTUFBZTtRQUNwQixJQUFHLE1BQU0sRUFBRTtZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUNELG9DQUFZLEdBQVosVUFBYSxLQUFvQjtRQUM3QixJQUFHLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFYVztRQUFYLHVCQUFRLEdBQUU7O2dEQUFZO0lBWTNCLG9CQUFDO0NBQUEsQ0FqQmtDLFdBQUksR0FpQnRDO0FBakJZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMUIsK0VBQW9DO0FBQ3BDLDJGQUE0QztBQXNCNUM7SUFBK0IsNkJBQUk7SUFBbkM7O0lBOEZBLENBQUM7SUF0RmlCLDBCQUFnQixHQUE5QixVQUErQixRQUF3QjtRQUNuRCxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDbEQsQ0FBQztJQUVhLHlCQUFlLEdBQTdCLFVBQThCLElBQWdCLEVBQUUsWUFBcUI7UUFDakUsSUFBSSxZQUFZLEdBQUcsOEJBQThCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUM3RCxJQUFHLFlBQVksRUFBRTtZQUNmLFlBQVksSUFBSSxvQkFBb0IsQ0FBQztTQUN0QztRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFDYSx1QkFBYSxHQUEzQixVQUE0QixJQUE0QixFQUFFLFlBQXFCO1FBQzNFLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO1FBQzVGLElBQUcsSUFBSSxZQUFZLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQy9DLFVBQVUsSUFBSSxtQ0FBbUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFrQlMsMENBQXNCLEdBQWhDLFVBQWlDLElBQVk7UUFDekMsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQ3RFLENBQUM7SUFDUyw4QkFBVSxHQUFwQixVQUFxQixJQUFTLEVBQUUsTUFBK0I7UUFDM0QsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN4RCxDQUFDO0lBQ1MsaUNBQWEsR0FBdkIsVUFBd0IsSUFBUyxFQUFFLE1BQStCO1FBQzlELE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDcEcsQ0FBQztJQUNTLGlDQUFhLEdBQXZCLFVBQXdCLElBQVMsRUFBRSxNQUErQjtRQUM5RCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3BHLENBQUM7SUFDUywrQkFBVyxHQUFyQixVQUFzQixHQUFRO1FBQzFCLE9BQU8sR0FBYSxDQUFDO0lBQ3pCLENBQUM7SUFFTSw4QkFBVSxHQUFqQixVQUFrQixHQUFpQixFQUFFLElBQWEsRUFBRSxJQUFTLEVBQUUsS0FBYTtRQUN4RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFHLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDZCxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ2hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDbkIsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7d0JBQ3RCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO3dCQUNoQixHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7cUJBQzFCO2lCQUNKO2dCQUNELEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ25CO2lCQUNJO2dCQUNELElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJO29CQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUN2QyxJQUFHLEdBQUcsQ0FBQyxTQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDL0MsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7aUJBQzlCO3FCQUNJO29CQUNELEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUNkLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUNoQixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQzdCO2FBQ0o7U0FDSjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUE1RmEsbUJBQVMsR0FBRztRQUN0QixTQUFTLEVBQUU7WUFDUCxHQUFHLEVBQUUsd0JBQXdCO1lBQzdCLE1BQU0sRUFBRSxtQkFBbUI7WUFDM0IsTUFBTSxFQUFFLG1CQUFtQjtTQUM5QjtLQUNKLENBQUM7SUFvQmlDO1FBQWxDLHVCQUFRLEVBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7O2lEQUFxQjtJQU1sRDtRQUxKLHVCQUFRLEVBQUMsRUFBRSxLQUFLLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBaUI7Z0JBQ3RDLElBQUcsTUFBTSxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUU7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQzVCO1lBQ0wsQ0FBQyxFQUFFLENBQUM7OzJDQUFXO0lBQ0g7UUFBWCx1QkFBUSxHQUFFOzsyQ0FBYztJQUNNO1FBQTlCLHVCQUFRLEVBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUM7OzRDQUFlO0lBQ2pDO1FBQVgsdUJBQVEsR0FBRTs7NENBQWU7SUFDZDtRQUFYLHVCQUFRLEdBQUU7OzJDQUFjO0lBQ2I7UUFBWCx1QkFBUSxHQUFFOztvREFBb0I7SUFDbkI7UUFBWCx1QkFBUSxHQUFFOzswQ0FBYTtJQXVENUIsZ0JBQUM7Q0FBQSxDQTlGOEIsV0FBSSxHQThGbEM7QUE5RlksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCdEIsK0VBQW9DO0FBQ3BDLDJGQUE0QztBQUM1QyxxRUFBd0Q7QUFHeEQ7SUFBcUMsbUNBQUk7SUFDdkMseUJBQW9CLE1BQW9CO1FBQXhDLFlBQ0UsaUJBQU8sU0FFUjtRQUhtQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBRXRDLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzs7SUFDM0IsQ0FBQztJQUMyRjtRQUEzRix1QkFBUSxFQUFDLEVBQUUsS0FBSyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQXVCLElBQUssYUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQW5DLENBQW1DLEVBQUUsQ0FBQzs7a0RBQVk7SUFDWDtRQUEzRix1QkFBUSxFQUFDLEVBQUUsS0FBSyxFQUFFLFVBQUMsR0FBRyxFQUFFLE1BQXVCLElBQUssYUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQW5DLENBQW1DLEVBQUUsQ0FBQzs7K0NBQVk7SUFFekcsc0JBQUM7Q0FBQSxDQVJvQyxXQUFJLEdBUXhDO0FBUlksMENBQWU7QUFVNUI7SUFBc0Msb0NBQUk7SUFDeEMsMEJBQ1MsTUFBVyxFQUNYLGFBQWE7UUFGdEIsWUFJRSxpQkFBTyxTQVNSO1FBWlEsWUFBTSxHQUFOLE1BQU0sQ0FBSztRQUNYLG1CQUFhLEdBQWIsYUFBYTtRQUdwQixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUcsb0JBQWEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLEtBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQWEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25EO2FBQ0k7WUFDSCxLQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0M7UUFDRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBQ3RDLENBQUM7SUFJRCxzQkFBSSw4Q0FBZ0I7YUFBcEI7WUFjRSxPQUFPLDRCQUE0QixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBVUQseUNBQWMsR0FBZDtRQUNFLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLO1lBQ2pDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDM0IsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSztTQUNsQztJQUNILENBQUM7SUFURztRQUxILHVCQUFRLEVBQUMsRUFBRSxLQUFLLEVBQUUsVUFBQyxHQUFtQixFQUFFLE1BQXdCO2dCQUMvRCxJQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7b0JBQ1IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztpQkFDcEM7Z0JBQ0QsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxLQUFLLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUM7WUFDcEUsQ0FBQyxFQUFDLENBQUM7O3VEQUEyQjtJQUNJO1FBQWpDLHVCQUFRLEVBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7O3lEQUFzQjtJQVN6RCx1QkFBQztDQUFBLENBbERxQyxXQUFJLEdBa0R6QztBQWxEWSw0Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y3QiwrRUFBb0M7QUFDcEMsMkZBQTRDO0FBRzVDLG9IQUF5RTtBQUV6RSxzRkFBOEI7QUFFOUI7SUFBbUMsaUNBQUk7SUFDbkMsdUJBQW1CLE1BQW9CLEVBQVUsaUJBQXFDO1FBQXRGLFlBQ0ksaUJBQU8sU0FDVjtRQUZrQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBQVUsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQVd0RixhQUFPLEdBQUcsVUFBQyxNQUFvQjtZQUU3QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLHFDQUFnQixDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUTtnQkFDOUYsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzdGLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDSixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUM7UUFDRixnQkFBVSxHQUFHLFVBQUMsSUFBc0I7WUFDbEMsSUFBTSxrQkFBa0IsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO1lBQzVDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0QsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1lBQzlDLEtBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsZUFBZSxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFDOUQsQ0FBQzs7SUFyQkQsQ0FBQztJQU1ELDZCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsY0FBYyxFQUFFLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBTmtDO1FBQWxDLHVCQUFRLEVBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7O3FEQUFxQjtJQUMzQztRQUFYLHVCQUFRLEdBQUU7O2dEQUFZO0lBQ1M7UUFBL0IsdUJBQVEsRUFBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQztrQ0FBYyxLQUFLO3NEQUFtQjtJQWtCekUsb0JBQUM7Q0FBQSxDQXpCa0MsV0FBSSxHQXlCdEM7QUF6Qlksc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1IxQiwrRUFBb0M7QUFDcEMsMkZBQTRDO0FBSTVDLHFHQUFnRDtBQXFDaEQ7SUFBaUMsK0JBQUk7SUFFakMscUJBQVksaUJBQTBDLEVBQVUsS0FBeUI7UUFBekYsWUFDSSxpQkFBTyxTQVVWO1FBWCtELFdBQUssR0FBTCxLQUFLLENBQW9CO1FBNEJ6RixVQUFJLEdBQVcsUUFBUSxDQUFDO1FBQ3hCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFakIsaUJBQVcsR0FBRyxVQUFDLE1BQW9CLEVBQUUsS0FBcUI7WUFDN0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFoQ0csTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBRztZQUM1QyxJQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDckMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFHLEtBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztTQUMxQjtRQUNELEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLEtBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFDeEQsQ0FBQztJQXlCRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsTUFBb0I7UUFDakMsSUFBRyxNQUFNLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDaEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUUsVUFBQyxJQUFJLElBQUssYUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQTFCLENBQTBCLENBQUMsQ0FBQztTQUM5SjtJQUNMLENBQUM7SUFFRCw2QkFBTyxHQUFQO0lBQ0EsQ0FBQztJQTVCVztRQUFYLHVCQUFRLEdBQUU7OzhDQUFnQjtJQUNmO1FBQVgsdUJBQVEsR0FBRTs7cURBQW1CO0lBRzFCO1FBRkgsdUJBQVEsRUFBQyxFQUFFLEtBQUssRUFBRSxVQUFDLEdBQWUsRUFBRSxNQUFtQjtnQkFDcEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBQyxDQUFDOztzREFBMkI7SUF5QmxDLGtCQUFDO0NBQUEsQ0E5Q2dDLFdBQUksR0E4Q3BDO0FBOUNZLGtDQUFXOzs7Ozs7Ozs7Ozs7OztBQzFDeEIsd0ZBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBL0IsK0VBQW9DO0FBQ3BDLDJGQUE0QztBQUc1QyxzRkFBOEI7QUFHOUIsU0FBUyxnQkFBZ0IsQ0FBQyxLQUFTLEVBQUUsVUFBa0I7SUFDbkQsSUFBRyxVQUFVLEtBQUksTUFBTTtRQUFFLE9BQU8sS0FBSyxFQUFDLE1BQUssRUFBQyxLQUFJLENBQUM7SUFDakQsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsVUFBa0I7SUFDMUMsSUFBRyxVQUFVLEtBQUksTUFBTTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQ3RDLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFHRDtJQUF1QyxxQ0FBSTtJQUl2QywyQkFBb0IsS0FBc0IsRUFBVyxVQUFrQixFQUFVLFVBQWtCLEVBQVUsYUFBeUgsRUFBRSxNQUFnQixFQUFTLEtBQWtCLEVBQVMsUUFBcUI7UUFBaEQsa0NBQWtCO1FBQVMsd0NBQXFCO1FBQWpULFlBQ0ksaUJBQU8sU0FNVjtRQVBtQixXQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUFXLGdCQUFVLEdBQVYsVUFBVSxDQUFRO1FBQVUsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFBVSxtQkFBYSxHQUFiLGFBQWEsQ0FBNEc7UUFBMkIsV0FBSyxHQUFMLEtBQUssQ0FBYTtRQUFTLGNBQVEsR0FBUixRQUFRLENBQWE7UUFIelMsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBNkIzQixZQUFNLEdBQUcsVUFBQyxDQUFDLEVBQUUsS0FBSztZQUNkLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBU0QsZUFBUyxHQUFHLFVBQUMsSUFBSTtZQUNiLE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELGVBQVMsR0FBRyxVQUFDLElBQUk7WUFDYixJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxJQUFHLFNBQVMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDakIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQjtpQkFBTTtnQkFDSCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQztZQUNELEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBRSxRQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxDQUFDO1lBQ3RELElBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUN0RyxDQUFDO1FBQ0QsaUJBQVcsR0FBRyxVQUFDLElBQUk7WUFDZixJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQXJERyxJQUFHLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDckIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDeEI7UUFDRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsS0FBSSxDQUFDLG9CQUFvQixHQUFHLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDOztJQUMvRCxDQUFDO0lBQ08sNENBQWdCLEdBQXhCLFVBQXlCLFdBQWdCO1FBQXpDLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBSztZQUMzRSxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFLLE9BQU8sRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQ2xHLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsS0FBSyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELG9DQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxlQUFLO1lBQy9FLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLFlBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUF2QixDQUF1QixDQUFDO1lBQzNDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsS0FBSyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWtDRCxtQ0FBTyxHQUFQO0lBQ0EsQ0FBQztJQWxDa0M7UUFBbEMsdUJBQVEsRUFBQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7cURBQWlCO0lBQ2hCO1FBQWxDLHVCQUFRLEVBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7O21FQUErQjtJQUM5QjtRQUFsQyx1QkFBUSxFQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOzt5REFBcUI7SUFRbEQ7UUFISix1QkFBUSxFQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBeUI7Z0JBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQzlDLENBQUMsRUFBRSxDQUFDO2tDQUFnQixLQUFLOzREQUFNO0lBQ0M7UUFBL0IsdUJBQVEsRUFBQyxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsQ0FBQztrQ0FBYSxLQUFLO3lEQUFNO0lBR2pEO1FBRkwsdUJBQVEsRUFBQyxFQUFFLEtBQUssRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUF5QjtnQkFDOUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsR0FBRyxDQUFDOzt5REFBb0I7SUFxQjdCLHdCQUFDO0NBQUEsQ0EvRHNDLFdBQUksR0ErRDFDO0FBL0RZLDhDQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEI5QiwrRUFBb0M7QUFDcEMscUZBQWlEO0FBQ2pELDJGQUE0QztBQUM1Qyx1R0FBdUQ7QUFDdkQsK0ZBQThDO0FBQzlDLDBFQUErQztBQUMvQyxnRkFBOEU7QUFDOUUsZ0ZBQXVDO0FBRXZDLDhIQUFpRTtBQUNqRSx1RUFBMkQ7QUFDM0Qsb0ZBQXlDO0FBQ3pDLDZGQUErQztBQUcvQyxvRUFBZ0M7QUFDaEMsc0VBQXNCO0FBb0N0QjtJQUEyQix5QkFBSTtJQWtDM0IsZUFBbUIsTUFBb0IsRUFBRSxPQUFxQjtRQUE5RCxZQUNJLGlCQUFPLFNBYVY7UUFka0IsWUFBTSxHQUFOLE1BQU0sQ0FBYztRQTdCL0Isa0JBQVksR0FBbUIsRUFBRSxDQUFDO1FBQ25DLFdBQUssR0FBRyxLQUFLLENBQUM7UUF3TGIsbUJBQWEsR0FBa0IsU0FBUyxDQUFDO1FBd0UxQyxpQkFBVyxHQUFHLFVBQUMsTUFBb0IsRUFBRSxLQUFLO1lBQzdDLElBQUcsS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDbEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUNqQixLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxRQUFDLENBQUMsS0FBSyxHQUFHLFNBQVMsRUFBbkIsQ0FBbUIsQ0FBQzthQUMvQztZQUNELE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBZSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBbUNNLG1CQUFhLEdBQUcsVUFBQyxJQUFnQjtZQUNwQyxJQUFJLEtBQUksQ0FBQyxpQkFBaUI7Z0JBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDN0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDJCQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUM5QixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBYUQsWUFBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQixZQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ25CLFdBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsaUJBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEIsaUJBQVcsR0FBRyxTQUFTO1FBRWhCLGtCQUFZLEdBQUcsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsb0NBQW9DLENBQUM7UUFDdEUsQ0FBQztRQUNNLGlCQUFXLEdBQUcsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3BDLENBQUM7UUFDTSxrQkFBWSxHQUFHLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkIsSUFBSSxLQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7Z0JBQzFCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQztnQkFDakMsS0FBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3RSxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxHQUFDLElBQUksQ0FBQzthQUM3RDtRQUNMLENBQUM7UUFDTSxrQkFBWSxHQUFHLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUNyQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM3RyxLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDckIsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFDckQsSUFBSSxLQUFJLENBQUMsTUFBTTtnQkFBRSxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMxRSxDQUFDO1FBQ00sZ0JBQVUsR0FBRyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFhUyxlQUFTLEdBQVEsSUFBSSxDQUFDO1FBTWhDLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2Ysb0JBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFnQmxCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBVXJCLGlCQUFXLEdBQUcsSUFBSSxvQkFBVyxFQUFFLENBQUM7UUFFaEMsZ0JBQVUsR0FBRyxVQUFDLFNBQWtCO1lBQzVCLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMvRSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUF2WEcsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQztRQUMvQyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoQyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksOEJBQWUsQ0FBQyxjQUFNLFlBQUksQ0FBQyxjQUFjLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQ3RFLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUksRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3pELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLGNBQU0sWUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFyQixDQUFxQixDQUFDO1FBQ3ZELElBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUNWLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUI7UUFFRCxLQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQzs7SUFDbEQsQ0FBQztJQXJDTyw4QkFBYyxHQUF0QjtRQUFBLGlCQXFCQztRQXBCRyxJQUFNLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTtZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1NBQ3RGO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZ0JBQU07WUFDdkIsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNuRCxJQUFHLGlCQUFpQixFQUFFO2dCQUNsQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFvQjtvQkFDM0MsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDbEIsSUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDdEIsSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQzt3QkFDcEYsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDLENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDaEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7WUFDaEUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQWtCRCwwQkFBVSxHQUFWLFVBQVcsT0FBb0I7UUFBL0IsaUJBd0NDO1FBdkNHLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQyxDQUFtQixDQUFDO1FBQzNHLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBcUIsQ0FBQztRQUNqRixJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQW1CLENBQUM7UUFFekYsSUFBSSxZQUFZLEdBQUc7WUFDZixJQUFJLElBQUksR0FBRyxLQUFJLENBQUM7WUFDaEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwRixJQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUU7Z0JBQzVFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDbEc7cUJBQ0k7b0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNoRzthQUNKO1lBQ0QsSUFBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDeEgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDNUQ7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUM1QyxZQUFZLEVBQUUsQ0FBQztRQUVmLElBQUcsT0FBTyxjQUFjLEtBQUssV0FBVyxFQUFFO1lBQ3RDLElBQU0sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLGlCQUFPO2dCQUM3QyxLQUFpQixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtvQkFBdEIsSUFBSSxLQUFLO29CQUNULElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO3dCQUNsQyxJQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRTs0QkFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3lCQUNsRTs2QkFDSTs0QkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7eUJBQ3JFO3dCQUNELEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3FCQUN2RDtpQkFDSjtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTtJQUNMLENBQUM7SUFFUywwQkFBVSxHQUFwQixVQUFxQixPQUFzQjtRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRVMsMEJBQVUsR0FBcEI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRUQsMEJBQVUsR0FBVixVQUFXLFFBQWdCO1FBQ3ZCLElBQUcsUUFBUSxFQUFFO1lBQ1QsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFDLElBQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckcsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBRVMsNEJBQVksR0FBdEIsVUFBdUIsTUFBVyxFQUFFLEtBQW1CO1FBQ25ELE9BQU8sSUFBSSxvQkFBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRVMsNkJBQWEsR0FBdkIsVUFBd0IsTUFBb0I7UUFBNUMsaUJBSUM7UUFIRyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFNO1lBQ3BDLFlBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUFqQyxDQUFpQyxDQUNwQyxDQUFDO0lBQ04sQ0FBQztJQUVTLDZCQUFhLEdBQXZCLFVBQXdCLE1BQW9CO1FBQTVDLGlCQWtFQztRQWpFRyxJQUFHLE1BQU0sQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksZUFBTSxDQUFDO2dCQUM5QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixNQUFNLEVBQUU7b0JBQ0osS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDO2dCQUNuRCxDQUFDO2dCQUNELEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7Z0JBQ3JCLFNBQVMsRUFBRSxLQUFLO2FBQ25CLENBQUMsQ0FBQyxDQUFDO1NBQ1A7UUFDRCxJQUFHLE1BQU0sQ0FBQyx1QkFBdUIsS0FBSyxJQUFJLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFNLENBQUM7Z0JBQzlCLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLE1BQU0sRUFBRTtvQkFDSixLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2dCQUNyQixTQUFTLEVBQUUsS0FBSzthQUNuQixDQUFDLENBQUMsQ0FBQztTQUNQO1FBQ0QsSUFBRyxNQUFNLENBQUMsVUFBVSxLQUFLLElBQUksRUFBQztZQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLGVBQU0sQ0FBQztnQkFDOUIsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLE1BQU0sRUFBRTtvQkFDSixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQUM7d0JBQ2YsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO3dCQUNoQixJQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFOzRCQUNYLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDOzRCQUNyRSxJQUFHLENBQUMsbUJBQU8sRUFBQyxNQUFNLENBQUMsRUFBRTtnQ0FDakIsSUFBRyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztvQ0FBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQzs2QkFDMUg7eUJBQ0o7NkJBQU07NEJBQ0gsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBQyxJQUFJLGFBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDOzRCQUM5QyxJQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO2dDQUFFLFFBQVEsR0FBRyxJQUFJLENBQUM7eUJBQzVFO29CQUNMLENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksUUFBUTt3QkFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2pDLENBQUM7Z0JBQ0QsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtnQkFDcEIsU0FBUyxFQUFFLFFBQVE7YUFDdEIsQ0FBQyxFQUNGLElBQUksZUFBTSxDQUFDO2dCQUNQLElBQUksRUFBRSxlQUFlO2dCQUNyQixNQUFNLEVBQUU7b0JBQ0osS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBQzt3QkFDdkIsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFDLENBQUM7NEJBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzdELENBQUMsQ0FBQztvQkFDRixLQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxFQUFFLENBQUMsV0FBQyxJQUFJLFlBQUksQ0FBQyxPQUFPLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQztnQkFDNUksQ0FBQztnQkFDRCxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO2dCQUNuQixTQUFTLEVBQUUsUUFBUTthQUN0QixDQUFDLEVBQ0YsSUFBSSxlQUFNLENBQUM7Z0JBQ1AsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLE1BQU0sRUFBRTtvQkFFSixJQUFJLE1BQU0sR0FBaUIsRUFBRSxDQUFDO29CQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUMsRUFBRSxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztvQkFDNUQsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztnQkFDRCxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO2dCQUNuQixTQUFTLEVBQUUsUUFBUTthQUN0QixDQUFDLENBQ0w7U0FBQztJQUNOLENBQUM7SUFHRCxzQkFBSSwrQkFBWTthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdDLENBQUM7YUFDRCxVQUFpQixRQUF1QjtZQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQzs7O09BSkE7SUFTRCxzQkFBSSx1QkFBSTthQUFSLFVBQVMsS0FBaUI7WUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHVDQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBRVMsdUJBQU8sR0FBakI7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFDLElBQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsd0JBQVEsR0FBUixVQUFTLEtBQWEsRUFBRSxNQUFjLEVBQUUsSUFBWTtRQUFwRCxpQkE0QkM7UUE1QnVDLG1DQUFZO1FBQ2hELElBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUNyQixLQUFLLEVBQ0wsTUFBTSxFQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBSyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFDLEdBQW5DLENBQW1DLENBQUMsRUFDN0YsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxFQUNKLElBQUksRUFDSixVQUFDLElBQUksRUFBRSxTQUFpQixFQUFFLFVBQWtCLEVBQUUsSUFBYTtnQkFDdkQsSUFBRyxJQUFJLEVBQUU7b0JBQ0wsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztpQkFDckQ7cUJBQU07b0JBQ0gsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztpQkFDN0M7Z0JBQ0QsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFDNUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUM7Z0JBQzlDLElBQU0sV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzlCLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVEsRUFBRSxLQUFLO29CQUNqQyxJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNySyxJQUFHLElBQUksRUFBRTt3QkFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUFFO3lCQUNwQzt3QkFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUFFO2dCQUN0QyxDQUFDLENBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztTQUNWO0lBQ0wsQ0FBQztJQUVTLHdCQUFRLEdBQWxCLFVBQW1CLEdBQWMsRUFBRSxLQUFLO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ25ELEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFUyx5QkFBUyxHQUFuQixVQUFvQixHQUFjLEVBQUUsS0FBSztRQUF6QyxpQkFVQztRQVRHLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUExSCxDQUEwSCxDQUFDO2lCQUNoSixPQUFPLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFqQixDQUFpQixDQUFDLENBQUM7U0FDcEM7UUFDRCxJQUFJLEdBQUcsQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFjUyx5QkFBUyxHQUFuQixVQUFvQixJQUFvQyxFQUFFLEdBQVcsRUFBRSxJQUFhO1FBQXBGLGlCQTJCQztRQTFCRyxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksU0FBUyxHQUFHLElBQUksRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQUc7WUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxnQkFBUyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM1QyxJQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQzthQUNqQztZQUNELFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqRSxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDM0osU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2SixJQUFHLEdBQUcsQ0FBQyxPQUFPO2dCQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxjQUFRLEVBQUUsQ0FBQztRQUMzQixHQUFHLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQixHQUFHLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUNoQixHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDckIsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQzFELEdBQUcsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBQyxJQUFJLEVBQUUsS0FBSyxJQUFLLFlBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUEzQixDQUEyQjtZQUN6RCxHQUFHLENBQUMsS0FBSyxHQUFHLFVBQUMsSUFBSSxFQUFFLEtBQUssSUFBSyxZQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBMUIsQ0FBMEI7UUFDdkQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRVMsMkJBQVcsR0FBckIsVUFBc0IsRUFBRTtRQUNwQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBU00sZ0NBQWdCLEdBQXZCO0lBQ0EsQ0FBQztJQUVTLDBDQUEwQixHQUFwQztRQUNJLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxzQkFBVyx5Q0FBc0I7YUFBakM7WUFDSSxPQUFPLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBcUNELDJCQUFXLEdBQVgsVUFBWSxHQUFHO1FBQ1gsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBQyxZQUFZLENBQUMsSUFBSSxZQUFZLEVBQUU7WUFDdkQsT0FBTyxDQUFDLENBQUM7U0FDVDtRQUNELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELDJCQUFXLEdBQVgsVUFBWSxHQUFHLEVBQUMsR0FBRztRQUNmLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBY0Qsc0JBQUksNEJBQVM7YUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBWTthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDN0MsQ0FBQzs7O09BQUE7SUFzQkQsc0JBQUksNkJBQVU7YUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLGtDQUFlO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksZ0NBQWE7YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSw2QkFBVTthQUFkO1lBQ0ksT0FBTywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQTlaYSxlQUFTLEdBQUcsRUFBRSxDQUFDO0lBNFdNO1FBQWxDLHVCQUFRLEVBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7OzJDQUFtQjtJQUNsQjtRQUFsQyx1QkFBUSxFQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOztxREFBd0I7SUFDdkI7UUFBbEMsdUJBQVEsRUFBQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7K0NBQXVCO0lBQ3ZCO1FBQWpDLHVCQUFRLEVBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUM7OzJDQUFtQjtJQUNqQjtRQUFsQyx1QkFBUSxFQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOzsrQ0FBdUI7SUFNcEQ7UUFGSix1QkFBUSxFQUFDLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBQyxHQUFtQixFQUFFLE1BQWE7Z0JBQ3BFLE1BQU0sQ0FBQyxlQUFlLEdBQUcsSUFBSSw4QkFBZSxDQUFDLGNBQU0sVUFBRyxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQTFCLENBQTBCLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUF0RCxDQUFzRCxDQUFRLENBQUM7WUFDdEgsQ0FBQyxFQUFFLENBQUM7a0NBQVUsS0FBSzswQ0FBZTtJQUlGO1FBQS9CLHVCQUFRLEVBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUM7a0NBQU8sS0FBSzt1Q0FBWTtJQUlwQjtRQUFsQyx1QkFBUSxFQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOzttREFBMkI7SUFDMUI7UUFBbEMsdUJBQVEsRUFBQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7NkNBQXFCO0lBR2xEO1FBRkosdUJBQVEsRUFBQyxFQUFFLEtBQUssRUFBRSxVQUFDLFFBQWdCLEVBQUUsTUFBYTtnQkFDL0MsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoQyxDQUFDLEVBQUUsQ0FBQzs7MkNBQWtCO0lBRVM7UUFBOUIsdUJBQVEsRUFBQyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQzs7NkNBQW9CO0lBQ25CO1FBQTlCLHVCQUFRLEVBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUM7O2tEQUF5QjtJQUNyQjtRQUFqQyx1QkFBUSxFQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDOztrREFBMEI7SUFDeEI7UUFBbEMsdUJBQVEsRUFBQyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQzs7a0RBQTBCO0lBR3pCO1FBQWxDLHVCQUFRLEVBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUM7OytDQUF1QjtJQXFCN0QsWUFBQztDQUFBLENBeGEwQixXQUFJLEdBd2E5QjtBQXhhWSxzQkFBSzs7Ozs7Ozs7Ozs7Ozs7O0FDcERsQiwwRUFBbUQ7QUFFbkQ7SUFBQTtRQUNJLFNBQUksR0FBVyxRQUFRLENBQUM7UUFDeEIsUUFBRyxHQUFXLHlCQUF5QjtJQUMzQyxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDO0FBSFksZ0NBQVU7QUFLdkIsZ0JBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A3QywrRUFBb0M7QUFDcEMsMkZBQTRDO0FBOEI1QztJQUE4Qiw0QkFBSTtJQUFsQzs7SUFTQSxDQUFDO0lBUm1DO1FBQS9CLHVCQUFRLEVBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUM7OzJDQUFxQjtJQUlqQjtRQUFsQyx1QkFBUSxFQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDOzs4Q0FBbUI7SUFDekM7UUFBWCx1QkFBUSxHQUFFOzsyQ0FBZTtJQUc5QixlQUFDO0NBQUEsQ0FUNkIsV0FBSSxHQVNqQztBQVRZLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQnJCLCtFQUFvQztBQUNwQywyRkFBNEM7QUFFNUMsd0VBQXVCO0FBRXZCO0lBQWlDLCtCQUFJO0lBQXJDO1FBQUEscUVBU0M7UUFSRyxZQUFNLEdBQUcsVUFBQyxJQUFZO1lBQ2xCLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztZQUN4QyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixLQUFJLENBQUMsT0FBTyxJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxDQUFDOztJQUlMLENBQUM7SUFGZTtRQUFYLHVCQUFRLEdBQUU7O3dEQUF5QjtJQUN4QjtRQUFYLHVCQUFRLEdBQUU7O29EQUFxQjtJQUNwQyxrQkFBQztDQUFBLENBVGdDLFdBQUksR0FTcEM7QUFUWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHhCLCtFQUFvQztBQUNwQywyRkFBNEM7QUFHNUMsMEVBQXdCO0FBRXhCLElBQU0sU0FBUyxHQUE2RTtJQUMxRixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO0lBQ25DLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxvQ0FBb0MsRUFBRSxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO0lBQy9HLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxzQ0FBc0MsRUFBRSxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO0lBQ2xILEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxvQ0FBb0MsRUFBRSxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRTtJQUN6SCxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsb0NBQW9DLEVBQUUsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUU7SUFDekgsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLDBDQUEwQyxFQUFFO0lBQ2hGLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSx1Q0FBdUMsRUFBRTtDQUMvRSxDQUFDO0FBRUY7SUFDRSwwQkFBbUIsS0FBYSxFQUFTLEtBQWE7UUFBbkMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7SUFDdEQsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQztBQUhZLDRDQUFnQjtBQUs3QjtJQUFrQyxnQ0FBSTtJQUNwQyxzQkFBb0IsTUFBb0I7UUFBeEMsWUFDRSxpQkFBTyxTQUlSO1FBTG1CLFlBQU0sR0FBTixNQUFNLENBQWM7UUFFdEMsS0FBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLHlCQUFlO1lBQ2hELE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEYsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLHlCQUFlLElBQUksV0FBSSxnQkFBZ0IsQ0FBRSxlQUFlLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBbkUsQ0FBbUUsQ0FBQyxDQUFDOztJQUNuRyxDQUFDO0lBQ0Qsc0JBQUksK0JBQUs7YUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDbEMsQ0FBQzthQUNELFVBQVUsR0FBUTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDakMsQ0FBQzs7O09BSEE7SUFNSTtRQUZKLHVCQUFRLEVBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFvQjtnQkFDL0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pFLENBQUMsRUFBRSxDQUFDOzs4Q0FBVztJQUVqQixtQkFBQztDQUFBLENBakJpQyxXQUFJLEdBaUJyQztBQWpCWSxvQ0FBWTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ6QjtJQUNJLDJCQUFtQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBRW5DLENBQUM7SUFFRCxvQ0FBUSxHQUFSLFVBQVMsT0FBTyxFQUFFLElBQUk7O1FBQ2xCLE9BQU8sVUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLE1BQU0sQ0FBQyxhQUFHO1lBQ25CLGNBQU8sQ0FBQyxLQUFLLENBQUMsV0FBQztnQkFDWCxRQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDakQsS0FBSyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQW5GLENBQW1GLENBQUMsQ0FBQztvQkFDbk4sS0FBSyxLQUFLLENBQUMsQ0FBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLEtBQUssTUFBTSxDQUFDLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDO2lCQUN4QjtZQUNMLENBQUMsQ0FBQztRQVJGLENBUUUsQ0FDTCxtQ0FBSSxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVE7UUFDdEQsU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEIsS0FBSyxJQUFJLEdBQUMsR0FBRyxDQUFDLEVBQUUsR0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBQyxFQUFFLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFBRSxTQUFTO2dCQUN0RCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEY7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNiLENBQUM7UUFDRCxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsS0FBSyxJQUFJLFlBQVksSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0RyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hDO1FBS0QsUUFBUSxDQUFDLE1B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LEVBQUU7Z0JBQ2pDLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQUUsT0FBTyxLQUFLLENBQUM7YUFDeEM7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7S0FDaEI7SUFDRCxPQUFPLElBQUksS0FBSyxJQUFJLENBQUM7QUFDekIsQ0FBQztBQVhELDBCQVdDOzs7Ozs7O1VDbEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1RhYmxlNEpTLy4vbm9kZV9tb2R1bGVzL2tub2Nrb3V0L2J1aWxkL291dHB1dC9rbm9ja291dC1sYXRlc3QuanMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvYWN0aW9ucy5zY3NzP2E5ZDEiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvZHJvcGRvd24tYWN0aW9ucy5zY3NzP2IzZDciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2Jvb2wuc2Nzcz9hZjM1Iiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9jZWxsLWVkaXRvci5zY3NzPzEwNWEiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2NvbHVtbi1maWx0ZXIuc2Nzcz83OTIwIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9maWx0ZXItZGVmYXVsdC5zY3NzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9maWx0ZXItc2VsZWN0LnNjc3M/ZmRmZSIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvaW5kZXguc2Nzcz9hYTEyIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9zZWFyY2guc2Nzcz8yYmVlIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9zdW1tYXJ5LnNjc3M/MjMwOSIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvYm9vbC1jZWxsLWVkaXRvci5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9ib29sLWNlbGwtdmlld2VyLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2NlbGwtZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2NlbGwtdmlld2VyLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2NlbGwuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY29sdW1uLWZpbHRlci1pdGVtLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2NvbHVtbi1maWx0ZXIuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvZmlsdGVyLWRlZmF1bHQuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvZmlsdGVyLXNlbGVjdC5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9pbmRleC5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9zZWFyY2guaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvc3VtbWFyeS5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC93aWRnZXRzL2FjdGlvbi5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC93aWRnZXRzL2FjdGlvbnMuaHRtbCIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvd2lkZ2V0cy9kcm9wZG93bi1hY3Rpb25zLmh0bWwiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3dpZGdldHMvaWNvbi5odG1sIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2Fycm93LWRvd24uc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2Fycm93LXJpZ2h0LnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9jaGVjay5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fY3Jvc3Muc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2VkaXQuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2VxdWFsLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9maWx0ZXIuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX2l0ZW0tYWRkLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9pdGVtLWRlbGV0ZS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25faXRlbS1zYXZlLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9tb3JlLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9tb3JlX3NxLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9wYXN0ZS5zdmciLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2ljb25zL2ljb25fc2VhcmNoLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvaWNvbnMvaWNvbl9zb3J0LWRvd24uc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX3NvcnQtdXAuc3ZnIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29ucy9pY29uX3RhYmxlLW1lcmdlLnN2ZyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2NvcmUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9iYXNlLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9jb3JlL2RlcGVuZGVuY2llcy50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvY29yZS9kcm9wZG93bi1hY3Rpb25zLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9jb3JlL3Byb3BlcnR5LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9maW5kLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pY29uLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2Jvb2wtY2VsbC1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2Jvb2wtY2VsbC12aWV3ZXIudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3RhYmxlL2NlbGwtZWRpdG9yLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jZWxsLXZpZXdlci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY2VsbC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvY29sdW1uLWZpbHRlci1pdGVtLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9jb2x1bW4tZmlsdGVyLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9maWx0ZXItZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvZmlsdGVyLXNlbGVjdC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvdGFibGUvc2VhcmNoLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC90YWJsZS9zdW1tYXJ5LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC93aWRnZXRzL2FjdGlvbi50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMva25vY2tvdXQvd2lkZ2V0cy9hY3Rpb25zLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy9rbm9ja291dC93aWRnZXRzL2Ryb3Bkb3duLWFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL2tub2Nrb3V0L3dpZGdldHMvaWNvbi50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvbG9jYWxpemF0aW9uLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9ib29sLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9jZWxsLWVkaXRvci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvY2VsbC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvY29sdW1uLWZpbHRlci1pdGVtLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9jb2x1bW4tZmlsdGVyLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9jb2x1bW4udHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL2ZpbHRlci1kZWZhdWx0LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9maWx0ZXItc2VsZWN0LnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvbnVtYmVyLnRzIiwid2VicGFjazovL1RhYmxlNEpTLy4vc291cmNlcy90YWJsZS9yb3cudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3RhYmxlL3NlYXJjaC50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdGFibGUvc3VtbWFyeS50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdXRpbHMvYXJyYXktZGF0YS1wcm92aWRlci50cyIsIndlYnBhY2s6Ly9UYWJsZTRKUy8uL3NvdXJjZXMvdXRpbHMvcmVtb3RlLWRhdGEtcHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvLi9zb3VyY2VzL3V0aWxzL3V0aWxzLnRzIiwid2VicGFjazovL1RhYmxlNEpTL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RhYmxlNEpTL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UYWJsZTRKUy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RhYmxlNEpTL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9UYWJsZTRKUy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vVGFibGU0SlMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiVGFibGU0SlNcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVGFibGU0SlNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVGFibGU0SlNcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiLyohXG4gKiBLbm9ja291dCBKYXZhU2NyaXB0IGxpYnJhcnkgdjMuNS4xXG4gKiAoYykgVGhlIEtub2Nrb3V0LmpzIHRlYW0gLSBodHRwOi8va25vY2tvdXRqcy5jb20vXG4gKiBMaWNlbnNlOiBNSVQgKGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwKVxuICovXG5cbihmdW5jdGlvbigpIHsoZnVuY3Rpb24obil7dmFyIEE9dGhpc3x8KDAsZXZhbCkoXCJ0aGlzXCIpLHc9QS5kb2N1bWVudCxSPUEubmF2aWdhdG9yLHY9QS5qUXVlcnksSD1BLkpTT047dnx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBqUXVlcnl8fCh2PWpRdWVyeSk7KGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIixcInJlcXVpcmVcIl0sbik6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9uKG1vZHVsZS5leHBvcnRzfHxleHBvcnRzKTpuKEEua289e30pfSkoZnVuY3Rpb24oUyxUKXtmdW5jdGlvbiBLKGEsYyl7cmV0dXJuIG51bGw9PT1hfHx0eXBlb2YgYSBpbiBXP2E9PT1jOiExfWZ1bmN0aW9uIFgoYixjKXt2YXIgZDtyZXR1cm4gZnVuY3Rpb24oKXtkfHwoZD1hLmEuc2V0VGltZW91dChmdW5jdGlvbigpe2Q9bjtiKCl9LGMpKX19ZnVuY3Rpb24gWShiLGMpe3ZhciBkO3JldHVybiBmdW5jdGlvbigpe2NsZWFyVGltZW91dChkKTtcbmQ9YS5hLnNldFRpbWVvdXQoYixjKX19ZnVuY3Rpb24gWihhLGMpe2MmJlwiY2hhbmdlXCIhPT1jP1wiYmVmb3JlQ2hhbmdlXCI9PT1jP3RoaXMucGMoYSk6dGhpcy5nYihhLGMpOnRoaXMucWMoYSl9ZnVuY3Rpb24gYWEoYSxjKXtudWxsIT09YyYmYy5zJiZjLnMoKX1mdW5jdGlvbiBiYShhLGMpe3ZhciBkPXRoaXMucWQsZT1kW3JdO2UucmF8fCh0aGlzLlFiJiZ0aGlzLm1iW2NdPyhkLnVjKGMsYSx0aGlzLm1iW2NdKSx0aGlzLm1iW2NdPW51bGwsLS10aGlzLlFiKTplLklbY118fGQudWMoYyxhLGUuSj97ZGE6YX06ZC4kYyhhKSksYS5KYSYmYS5nZCgpKX12YXIgYT1cInVuZGVmaW5lZFwiIT09dHlwZW9mIFM/Uzp7fTthLmI9ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9Yi5zcGxpdChcIi5cIiksZT1hLGY9MDtmPGQubGVuZ3RoLTE7ZisrKWU9ZVtkW2ZdXTtlW2RbZC5sZW5ndGgtMV1dPWN9O2EuTD1mdW5jdGlvbihhLGMsZCl7YVtjXT1kfTthLnZlcnNpb249XCIzLjUuMVwiO2EuYihcInZlcnNpb25cIixcbmEudmVyc2lvbik7YS5vcHRpb25zPXtkZWZlclVwZGF0ZXM6ITEsdXNlT25seU5hdGl2ZUV2ZW50czohMSxmb3JlYWNoSGlkZXNEZXN0cm95ZWQ6ITF9O2EuYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYSxiKXtmb3IodmFyIGMgaW4gYSlmLmNhbGwoYSxjKSYmYihjLGFbY10pfWZ1bmN0aW9uIGMoYSxiKXtpZihiKWZvcih2YXIgYyBpbiBiKWYuY2FsbChiLGMpJiYoYVtjXT1iW2NdKTtyZXR1cm4gYX1mdW5jdGlvbiBkKGEsYil7YS5fX3Byb3RvX189YjtyZXR1cm4gYX1mdW5jdGlvbiBlKGIsYyxkLGUpe3ZhciBsPWJbY10ubWF0Y2gocSl8fFtdO2EuYS5EKGQubWF0Y2gocSksZnVuY3Rpb24oYil7YS5hLk5hKGwsYixlKX0pO2JbY109bC5qb2luKFwiIFwiKX12YXIgZj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LGc9e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5LGg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCxtPXt9LGs9e307bVtSJiYvRmlyZWZveFxcLzIvaS50ZXN0KFIudXNlckFnZW50KT9cblwiS2V5Ym9hcmRFdmVudFwiOlwiVUlFdmVudHNcIl09W1wia2V5dXBcIixcImtleWRvd25cIixcImtleXByZXNzXCJdO20uTW91c2VFdmVudHM9XCJjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZVwiLnNwbGl0KFwiIFwiKTtiKG0sZnVuY3Rpb24oYSxiKXtpZihiLmxlbmd0aClmb3IodmFyIGM9MCxkPWIubGVuZ3RoO2M8ZDtjKyspa1tiW2NdXT1hfSk7dmFyIGw9e3Byb3BlcnR5Y2hhbmdlOiEwfSxwPXcmJmZ1bmN0aW9uKCl7Zm9yKHZhciBhPTMsYj13LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYz1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaVwiKTtiLmlubmVySFRNTD1cIlxceDNjIS0tW2lmIGd0IElFIFwiKyArK2ErXCJdPjxpPjwvaT48IVtlbmRpZl0tLVxceDNlXCIsY1swXTspO3JldHVybiA0PGE/YTpufSgpLHE9L1xcUysvZyx0O3JldHVybntKYzpbXCJhdXRoZW50aWNpdHlfdG9rZW5cIiwvXl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuKF8uKik/JC9dLFxuRDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWIuY2FsbChjLGFbZF0sZCxhKX0sQTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZj9mdW5jdGlvbihhLGIpe3JldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGEsYil9OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtjPGQ7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxMYjpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7ZCsrKWlmKGIuY2FsbChjLGFbZF0sZCxhKSlyZXR1cm4gYVtkXTtyZXR1cm4gbn0sUGE6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuQShiLGMpOzA8ZD9iLnNwbGljZShkLDEpOjA9PT1kJiZiLnNoaWZ0KCl9LHdjOmZ1bmN0aW9uKGIpe3ZhciBjPVtdO2ImJmEuYS5EKGIsZnVuY3Rpb24oYil7MD5hLmEuQShjLGIpJiZjLnB1c2goYil9KTtyZXR1cm4gY30sTWI6ZnVuY3Rpb24oYSxcbmIsYyl7dmFyIGQ9W107aWYoYSlmb3IodmFyIGU9MCxsPWEubGVuZ3RoO2U8bDtlKyspZC5wdXNoKGIuY2FsbChjLGFbZV0sZSkpO3JldHVybiBkfSxqYjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9W107aWYoYSlmb3IodmFyIGU9MCxsPWEubGVuZ3RoO2U8bDtlKyspYi5jYWxsKGMsYVtlXSxlKSYmZC5wdXNoKGFbZV0pO3JldHVybiBkfSxOYjpmdW5jdGlvbihhLGIpe2lmKGIgaW5zdGFuY2VvZiBBcnJheSlhLnB1c2guYXBwbHkoYSxiKTtlbHNlIGZvcih2YXIgYz0wLGQ9Yi5sZW5ndGg7YzxkO2MrKylhLnB1c2goYltjXSk7cmV0dXJuIGF9LE5hOmZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmEuQShhLmEuYmMoYiksYyk7MD5lP2QmJmIucHVzaChjKTpkfHxiLnNwbGljZShlLDEpfSxCYTpnLGV4dGVuZDpjLHNldFByb3RvdHlwZU9mOmQsQWI6Zz9kOmMsUDpiLEdhOmZ1bmN0aW9uKGEsYixjKXtpZighYSlyZXR1cm4gYTt2YXIgZD17fSxlO2ZvcihlIGluIGEpZi5jYWxsKGEsZSkmJihkW2VdPVxuYi5jYWxsKGMsYVtlXSxlLGEpKTtyZXR1cm4gZH0sVGI6ZnVuY3Rpb24oYil7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlTm9kZShiLmZpcnN0Q2hpbGQpfSxZYjpmdW5jdGlvbihiKXtiPWEuYS5sYShiKTtmb3IodmFyIGM9KGJbMF0mJmJbMF0ub3duZXJEb2N1bWVudHx8dykuY3JlYXRlRWxlbWVudChcImRpdlwiKSxkPTAsZT1iLmxlbmd0aDtkPGU7ZCsrKWMuYXBwZW5kQ2hpbGQoYS5vYShiW2RdKSk7cmV0dXJuIGN9LENhOmZ1bmN0aW9uKGIsYyl7Zm9yKHZhciBkPTAsZT1iLmxlbmd0aCxsPVtdO2Q8ZTtkKyspe3ZhciBrPWJbZF0uY2xvbmVOb2RlKCEwKTtsLnB1c2goYz9hLm9hKGspOmspfXJldHVybiBsfSx2YTpmdW5jdGlvbihiLGMpe2EuYS5UYihiKTtpZihjKWZvcih2YXIgZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKyliLmFwcGVuZENoaWxkKGNbZF0pfSxYYzpmdW5jdGlvbihiLGMpe3ZhciBkPWIubm9kZVR5cGU/W2JdOmI7aWYoMDxkLmxlbmd0aCl7Zm9yKHZhciBlPWRbMF0sXG5sPWUucGFyZW50Tm9kZSxrPTAsZj1jLmxlbmd0aDtrPGY7aysrKWwuaW5zZXJ0QmVmb3JlKGNba10sZSk7az0wO2ZvcihmPWQubGVuZ3RoO2s8ZjtrKyspYS5yZW1vdmVOb2RlKGRba10pfX0sVWE6ZnVuY3Rpb24oYSxiKXtpZihhLmxlbmd0aCl7Zm9yKGI9OD09PWIubm9kZVR5cGUmJmIucGFyZW50Tm9kZXx8YjthLmxlbmd0aCYmYVswXS5wYXJlbnROb2RlIT09YjspYS5zcGxpY2UoMCwxKTtmb3IoOzE8YS5sZW5ndGgmJmFbYS5sZW5ndGgtMV0ucGFyZW50Tm9kZSE9PWI7KWEubGVuZ3RoLS07aWYoMTxhLmxlbmd0aCl7dmFyIGM9YVswXSxkPWFbYS5sZW5ndGgtMV07Zm9yKGEubGVuZ3RoPTA7YyE9PWQ7KWEucHVzaChjKSxjPWMubmV4dFNpYmxpbmc7YS5wdXNoKGQpfX1yZXR1cm4gYX0sWmM6ZnVuY3Rpb24oYSxiKXs3PnA/YS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLGIpOmEuc2VsZWN0ZWQ9Yn0sRGI6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hfHxhPT09bj9cIlwiOmEudHJpbT9cbmEudHJpbSgpOmEudG9TdHJpbmcoKS5yZXBsYWNlKC9eW1xcc1xceGEwXSt8W1xcc1xceGEwXSskL2csXCJcIil9LFVkOmZ1bmN0aW9uKGEsYil7YT1hfHxcIlwiO3JldHVybiBiLmxlbmd0aD5hLmxlbmd0aD8hMTphLnN1YnN0cmluZygwLGIubGVuZ3RoKT09PWJ9LHZkOmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuITA7aWYoMTE9PT1hLm5vZGVUeXBlKXJldHVybiExO2lmKGIuY29udGFpbnMpcmV0dXJuIGIuY29udGFpbnMoMSE9PWEubm9kZVR5cGU/YS5wYXJlbnROb2RlOmEpO2lmKGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24pcmV0dXJuIDE2PT0oYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKSYxNik7Zm9yKDthJiZhIT1iOylhPWEucGFyZW50Tm9kZTtyZXR1cm4hIWF9LFNiOmZ1bmN0aW9uKGIpe3JldHVybiBhLmEudmQoYixiLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KX0sa2Q6ZnVuY3Rpb24oYil7cmV0dXJuISFhLmEuTGIoYixhLmEuU2IpfSxSOmZ1bmN0aW9uKGEpe3JldHVybiBhJiZcbmEudGFnTmFtZSYmYS50YWdOYW1lLnRvTG93ZXJDYXNlKCl9LEFjOmZ1bmN0aW9uKGIpe3JldHVybiBhLm9uRXJyb3I/ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIGIuYXBwbHkodGhpcyxhcmd1bWVudHMpfWNhdGNoKGMpe3Rocm93IGEub25FcnJvciYmYS5vbkVycm9yKGMpLGM7fX06Yn0sc2V0VGltZW91dDpmdW5jdGlvbihiLGMpe3JldHVybiBzZXRUaW1lb3V0KGEuYS5BYyhiKSxjKX0sR2M6ZnVuY3Rpb24oYil7c2V0VGltZW91dChmdW5jdGlvbigpe2Eub25FcnJvciYmYS5vbkVycm9yKGIpO3Rocm93IGI7fSwwKX0sQjpmdW5jdGlvbihiLGMsZCl7dmFyIGU9YS5hLkFjKGQpO2Q9bFtjXTtpZihhLm9wdGlvbnMudXNlT25seU5hdGl2ZUV2ZW50c3x8ZHx8IXYpaWYoZHx8XCJmdW5jdGlvblwiIT10eXBlb2YgYi5hZGRFdmVudExpc3RlbmVyKWlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmF0dGFjaEV2ZW50KXt2YXIgaz1mdW5jdGlvbihhKXtlLmNhbGwoYixhKX0sZj1cIm9uXCIrYztiLmF0dGFjaEV2ZW50KGYsXG5rKTthLmEuSy56YShiLGZ1bmN0aW9uKCl7Yi5kZXRhY2hFdmVudChmLGspfSl9ZWxzZSB0aHJvdyBFcnJvcihcIkJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGFkZEV2ZW50TGlzdGVuZXIgb3IgYXR0YWNoRXZlbnRcIik7ZWxzZSBiLmFkZEV2ZW50TGlzdGVuZXIoYyxlLCExKTtlbHNlIHR8fCh0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHYoYikub24/XCJvblwiOlwiYmluZFwiKSx2KGIpW3RdKGMsZSl9LEZiOmZ1bmN0aW9uKGIsYyl7aWYoIWJ8fCFiLm5vZGVUeXBlKXRocm93IEVycm9yKFwiZWxlbWVudCBtdXN0IGJlIGEgRE9NIG5vZGUgd2hlbiBjYWxsaW5nIHRyaWdnZXJFdmVudFwiKTt2YXIgZDtcImlucHV0XCI9PT1hLmEuUihiKSYmYi50eXBlJiZcImNsaWNrXCI9PWMudG9Mb3dlckNhc2UoKT8oZD1iLnR5cGUsZD1cImNoZWNrYm94XCI9PWR8fFwicmFkaW9cIj09ZCk6ZD0hMTtpZihhLm9wdGlvbnMudXNlT25seU5hdGl2ZUV2ZW50c3x8IXZ8fGQpaWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygdy5jcmVhdGVFdmVudClpZihcImZ1bmN0aW9uXCI9PVxudHlwZW9mIGIuZGlzcGF0Y2hFdmVudClkPXcuY3JlYXRlRXZlbnQoa1tjXXx8XCJIVE1MRXZlbnRzXCIpLGQuaW5pdEV2ZW50KGMsITAsITAsQSwwLDAsMCwwLDAsITEsITEsITEsITEsMCxiKSxiLmRpc3BhdGNoRXZlbnQoZCk7ZWxzZSB0aHJvdyBFcnJvcihcIlRoZSBzdXBwbGllZCBlbGVtZW50IGRvZXNuJ3Qgc3VwcG9ydCBkaXNwYXRjaEV2ZW50XCIpO2Vsc2UgaWYoZCYmYi5jbGljayliLmNsaWNrKCk7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5maXJlRXZlbnQpYi5maXJlRXZlbnQoXCJvblwiK2MpO2Vsc2UgdGhyb3cgRXJyb3IoXCJCcm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0cmlnZ2VyaW5nIGV2ZW50c1wiKTtlbHNlIHYoYikudHJpZ2dlcihjKX0sZjpmdW5jdGlvbihiKXtyZXR1cm4gYS5PKGIpP2IoKTpifSxiYzpmdW5jdGlvbihiKXtyZXR1cm4gYS5PKGIpP2IudigpOmJ9LEViOmZ1bmN0aW9uKGIsYyxkKXt2YXIgbDtjJiYoXCJvYmplY3RcIj09PXR5cGVvZiBiLmNsYXNzTGlzdD9cbihsPWIuY2xhc3NMaXN0W2Q/XCJhZGRcIjpcInJlbW92ZVwiXSxhLmEuRChjLm1hdGNoKHEpLGZ1bmN0aW9uKGEpe2wuY2FsbChiLmNsYXNzTGlzdCxhKX0pKTpcInN0cmluZ1wiPT09dHlwZW9mIGIuY2xhc3NOYW1lLmJhc2VWYWw/ZShiLmNsYXNzTmFtZSxcImJhc2VWYWxcIixjLGQpOmUoYixcImNsYXNzTmFtZVwiLGMsZCkpfSxCYjpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5mKGMpO2lmKG51bGw9PT1kfHxkPT09bilkPVwiXCI7dmFyIGU9YS5oLmZpcnN0Q2hpbGQoYik7IWV8fDMhPWUubm9kZVR5cGV8fGEuaC5uZXh0U2libGluZyhlKT9hLmgudmEoYixbYi5vd25lckRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpXSk6ZS5kYXRhPWQ7YS5hLkFkKGIpfSxZYzpmdW5jdGlvbihhLGIpe2EubmFtZT1iO2lmKDc+PXApdHJ5e3ZhciBjPWEubmFtZS5yZXBsYWNlKC9bJjw+J1wiXS9nLGZ1bmN0aW9uKGEpe3JldHVyblwiJiNcIithLmNoYXJDb2RlQXQoMCkrXCI7XCJ9KTthLm1lcmdlQXR0cmlidXRlcyh3LmNyZWF0ZUVsZW1lbnQoXCI8aW5wdXQgbmFtZT0nXCIrXG5jK1wiJy8+XCIpLCExKX1jYXRjaChkKXt9fSxBZDpmdW5jdGlvbihhKXs5PD1wJiYoYT0xPT1hLm5vZGVUeXBlP2E6YS5wYXJlbnROb2RlLGEuc3R5bGUmJihhLnN0eWxlLnpvb209YS5zdHlsZS56b29tKSl9LHdkOmZ1bmN0aW9uKGEpe2lmKHApe3ZhciBiPWEuc3R5bGUud2lkdGg7YS5zdHlsZS53aWR0aD0wO2Euc3R5bGUud2lkdGg9Yn19LFBkOmZ1bmN0aW9uKGIsYyl7Yj1hLmEuZihiKTtjPWEuYS5mKGMpO2Zvcih2YXIgZD1bXSxlPWI7ZTw9YztlKyspZC5wdXNoKGUpO3JldHVybiBkfSxsYTpmdW5jdGlvbihhKXtmb3IodmFyIGI9W10sYz0wLGQ9YS5sZW5ndGg7YzxkO2MrKyliLnB1c2goYVtjXSk7cmV0dXJuIGJ9LERhOmZ1bmN0aW9uKGEpe3JldHVybiBoP1N5bWJvbChhKTphfSxaZDo2PT09cCwkZDo3PT09cCxXOnAsTGM6ZnVuY3Rpb24oYixjKXtmb3IodmFyIGQ9YS5hLmxhKGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbnB1dFwiKSkuY29uY2F0KGEuYS5sYShiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGV4dGFyZWFcIikpKSxcbmU9XCJzdHJpbmdcIj09dHlwZW9mIGM/ZnVuY3Rpb24oYSl7cmV0dXJuIGEubmFtZT09PWN9OmZ1bmN0aW9uKGEpe3JldHVybiBjLnRlc3QoYS5uYW1lKX0sbD1bXSxrPWQubGVuZ3RoLTE7MDw9aztrLS0pZShkW2tdKSYmbC5wdXNoKGRba10pO3JldHVybiBsfSxOZDpmdW5jdGlvbihiKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGI9YS5hLkRiKGIpKT9IJiZILnBhcnNlP0gucGFyc2UoYik6KG5ldyBGdW5jdGlvbihcInJldHVybiBcIitiKSkoKTpudWxsfSxoYzpmdW5jdGlvbihiLGMsZCl7aWYoIUh8fCFILnN0cmluZ2lmeSl0aHJvdyBFcnJvcihcIkNhbm5vdCBmaW5kIEpTT04uc3RyaW5naWZ5KCkuIFNvbWUgYnJvd3NlcnMgKGUuZy4sIElFIDwgOCkgZG9uJ3Qgc3VwcG9ydCBpdCBuYXRpdmVseSwgYnV0IHlvdSBjYW4gb3ZlcmNvbWUgdGhpcyBieSBhZGRpbmcgYSBzY3JpcHQgcmVmZXJlbmNlIHRvIGpzb24yLmpzLCBkb3dubG9hZGFibGUgZnJvbSBodHRwOi8vd3d3Lmpzb24ub3JnL2pzb24yLmpzXCIpO1xucmV0dXJuIEguc3RyaW5naWZ5KGEuYS5mKGIpLGMsZCl9LE9kOmZ1bmN0aW9uKGMsZCxlKXtlPWV8fHt9O3ZhciBsPWUucGFyYW1zfHx7fSxrPWUuaW5jbHVkZUZpZWxkc3x8dGhpcy5KYyxmPWM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGMmJlwiZm9ybVwiPT09YS5hLlIoYykpZm9yKHZhciBmPWMuYWN0aW9uLGg9ay5sZW5ndGgtMTswPD1oO2gtLSlmb3IodmFyIGc9YS5hLkxjKGMsa1toXSksbT1nLmxlbmd0aC0xOzA8PW07bS0tKWxbZ1ttXS5uYW1lXT1nW21dLnZhbHVlO2Q9YS5hLmYoZCk7dmFyIHA9dy5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtwLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7cC5hY3Rpb249ZjtwLm1ldGhvZD1cInBvc3RcIjtmb3IodmFyIHEgaW4gZCljPXcuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGMudHlwZT1cImhpZGRlblwiLGMubmFtZT1xLGMudmFsdWU9YS5hLmhjKGEuYS5mKGRbcV0pKSxwLmFwcGVuZENoaWxkKGMpO2IobCxmdW5jdGlvbihhLGIpe3ZhciBjPXcuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuYy50eXBlPVwiaGlkZGVuXCI7Yy5uYW1lPWE7Yy52YWx1ZT1iO3AuYXBwZW5kQ2hpbGQoYyl9KTt3LmJvZHkuYXBwZW5kQ2hpbGQocCk7ZS5zdWJtaXR0ZXI/ZS5zdWJtaXR0ZXIocCk6cC5zdWJtaXQoKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApfSwwKX19fSgpO2EuYihcInV0aWxzXCIsYS5hKTthLmIoXCJ1dGlscy5hcnJheUZvckVhY2hcIixhLmEuRCk7YS5iKFwidXRpbHMuYXJyYXlGaXJzdFwiLGEuYS5MYik7YS5iKFwidXRpbHMuYXJyYXlGaWx0ZXJcIixhLmEuamIpO2EuYihcInV0aWxzLmFycmF5R2V0RGlzdGluY3RWYWx1ZXNcIixhLmEud2MpO2EuYihcInV0aWxzLmFycmF5SW5kZXhPZlwiLGEuYS5BKTthLmIoXCJ1dGlscy5hcnJheU1hcFwiLGEuYS5NYik7YS5iKFwidXRpbHMuYXJyYXlQdXNoQWxsXCIsYS5hLk5iKTthLmIoXCJ1dGlscy5hcnJheVJlbW92ZUl0ZW1cIixhLmEuUGEpO2EuYihcInV0aWxzLmNsb25lTm9kZXNcIixhLmEuQ2EpO2EuYihcInV0aWxzLmNyZWF0ZVN5bWJvbE9yU3RyaW5nXCIsXG5hLmEuRGEpO2EuYihcInV0aWxzLmV4dGVuZFwiLGEuYS5leHRlbmQpO2EuYihcInV0aWxzLmZpZWxkc0luY2x1ZGVkV2l0aEpzb25Qb3N0XCIsYS5hLkpjKTthLmIoXCJ1dGlscy5nZXRGb3JtRmllbGRzXCIsYS5hLkxjKTthLmIoXCJ1dGlscy5vYmplY3RNYXBcIixhLmEuR2EpO2EuYihcInV0aWxzLnBlZWtPYnNlcnZhYmxlXCIsYS5hLmJjKTthLmIoXCJ1dGlscy5wb3N0SnNvblwiLGEuYS5PZCk7YS5iKFwidXRpbHMucGFyc2VKc29uXCIsYS5hLk5kKTthLmIoXCJ1dGlscy5yZWdpc3RlckV2ZW50SGFuZGxlclwiLGEuYS5CKTthLmIoXCJ1dGlscy5zdHJpbmdpZnlKc29uXCIsYS5hLmhjKTthLmIoXCJ1dGlscy5yYW5nZVwiLGEuYS5QZCk7YS5iKFwidXRpbHMudG9nZ2xlRG9tTm9kZUNzc0NsYXNzXCIsYS5hLkViKTthLmIoXCJ1dGlscy50cmlnZ2VyRXZlbnRcIixhLmEuRmIpO2EuYihcInV0aWxzLnVud3JhcE9ic2VydmFibGVcIixhLmEuZik7YS5iKFwidXRpbHMub2JqZWN0Rm9yRWFjaFwiLGEuYS5QKTthLmIoXCJ1dGlscy5hZGRPclJlbW92ZUl0ZW1cIixcbmEuYS5OYSk7YS5iKFwidXRpbHMuc2V0VGV4dENvbnRlbnRcIixhLmEuQmIpO2EuYihcInVud3JhcFwiLGEuYS5mKTtGdW5jdGlvbi5wcm90b3R5cGUuYmluZHx8KEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kPWZ1bmN0aW9uKGEpe3ZhciBjPXRoaXM7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGMuYXBwbHkoYSxhcmd1bWVudHMpfTt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGU9ZC5zbGljZSgwKTtlLnB1c2guYXBwbHkoZSxhcmd1bWVudHMpO3JldHVybiBjLmFwcGx5KGEsZSl9fSk7YS5hLmc9bmV3IGZ1bmN0aW9uKCl7dmFyIGI9MCxjPVwiX19rb19fXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksZD17fSxlLGY7YS5hLlc/KGU9ZnVuY3Rpb24oYSxlKXt2YXIgZj1hW2NdO2lmKCFmfHxcIm51bGxcIj09PWZ8fCFkW2ZdKXtpZighZSlyZXR1cm4gbjtmPWFbY109XCJrb1wiK2IrKztkW2ZdPVxue319cmV0dXJuIGRbZl19LGY9ZnVuY3Rpb24oYSl7dmFyIGI9YVtjXTtyZXR1cm4gYj8oZGVsZXRlIGRbYl0sYVtjXT1udWxsLCEwKTohMX0pOihlPWZ1bmN0aW9uKGEsYil7dmFyIGQ9YVtjXTshZCYmYiYmKGQ9YVtjXT17fSk7cmV0dXJuIGR9LGY9ZnVuY3Rpb24oYSl7cmV0dXJuIGFbY10/KGRlbGV0ZSBhW2NdLCEwKTohMX0pO3JldHVybntnZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz1lKGEsITEpO3JldHVybiBjJiZjW2JdfSxzZXQ6ZnVuY3Rpb24oYSxiLGMpeyhhPWUoYSxjIT09bikpJiYoYVtiXT1jKX0sVWI6ZnVuY3Rpb24oYSxiLGMpe2E9ZShhLCEwKTtyZXR1cm4gYVtiXXx8KGFbYl09Yyl9LGNsZWFyOmYsWjpmdW5jdGlvbigpe3JldHVybiBiKysgK2N9fX07YS5iKFwidXRpbHMuZG9tRGF0YVwiLGEuYS5nKTthLmIoXCJ1dGlscy5kb21EYXRhLmNsZWFyXCIsYS5hLmcuY2xlYXIpO2EuYS5LPW5ldyBmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjKXt2YXIgZD1hLmEuZy5nZXQoYixlKTtcbmQ9PT1uJiZjJiYoZD1bXSxhLmEuZy5zZXQoYixlLGQpKTtyZXR1cm4gZH1mdW5jdGlvbiBjKGMpe3ZhciBlPWIoYywhMSk7aWYoZSlmb3IodmFyIGU9ZS5zbGljZSgwKSxrPTA7azxlLmxlbmd0aDtrKyspZVtrXShjKTthLmEuZy5jbGVhcihjKTthLmEuSy5jbGVhbkV4dGVybmFsRGF0YShjKTtnW2Mubm9kZVR5cGVdJiZkKGMuY2hpbGROb2RlcywhMCl9ZnVuY3Rpb24gZChiLGQpe2Zvcih2YXIgZT1bXSxsLGY9MDtmPGIubGVuZ3RoO2YrKylpZighZHx8OD09PWJbZl0ubm9kZVR5cGUpaWYoYyhlW2UubGVuZ3RoXT1sPWJbZl0pLGJbZl0hPT1sKWZvcig7Zi0tJiYtMT09YS5hLkEoZSxiW2ZdKTspO312YXIgZT1hLmEuZy5aKCksZj17MTohMCw4OiEwLDk6ITB9LGc9ezE6ITAsOTohMH07cmV0dXJue3phOmZ1bmN0aW9uKGEsYyl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgYyl0aHJvdyBFcnJvcihcIkNhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvblwiKTtiKGEsITApLnB1c2goYyl9LHliOmZ1bmN0aW9uKGMsXG5kKXt2YXIgZj1iKGMsITEpO2YmJihhLmEuUGEoZixkKSwwPT1mLmxlbmd0aCYmYS5hLmcuc2V0KGMsZSxuKSl9LG9hOmZ1bmN0aW9uKGIpe2EudS5HKGZ1bmN0aW9uKCl7ZltiLm5vZGVUeXBlXSYmKGMoYiksZ1tiLm5vZGVUeXBlXSYmZChiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSkpfSk7cmV0dXJuIGJ9LHJlbW92ZU5vZGU6ZnVuY3Rpb24oYil7YS5vYShiKTtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKX0sY2xlYW5FeHRlcm5hbERhdGE6ZnVuY3Rpb24oYSl7diYmXCJmdW5jdGlvblwiPT10eXBlb2Ygdi5jbGVhbkRhdGEmJnYuY2xlYW5EYXRhKFthXSl9fX07YS5vYT1hLmEuSy5vYTthLnJlbW92ZU5vZGU9YS5hLksucmVtb3ZlTm9kZTthLmIoXCJjbGVhbk5vZGVcIixhLm9hKTthLmIoXCJyZW1vdmVOb2RlXCIsYS5yZW1vdmVOb2RlKTthLmIoXCJ1dGlscy5kb21Ob2RlRGlzcG9zYWxcIixhLmEuSyk7YS5iKFwidXRpbHMuZG9tTm9kZURpc3Bvc2FsLmFkZERpc3Bvc2VDYWxsYmFja1wiLFxuYS5hLksuemEpO2EuYihcInV0aWxzLmRvbU5vZGVEaXNwb3NhbC5yZW1vdmVEaXNwb3NlQ2FsbGJhY2tcIixhLmEuSy55Yik7KGZ1bmN0aW9uKCl7dmFyIGI9WzAsXCJcIixcIlwiXSxjPVsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sZD1bMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLGU9WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sZj17dGhlYWQ6Yyx0Ym9keTpjLHRmb290OmMsdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpkLHRoOmQsb3B0aW9uOmUsb3B0Z3JvdXA6ZX0sZz04Pj1hLmEuVzthLmEudWE9ZnVuY3Rpb24oYyxkKXt2YXIgZTtpZih2KWlmKHYucGFyc2VIVE1MKWU9di5wYXJzZUhUTUwoYyxkKXx8W107ZWxzZXtpZigoZT12LmNsZWFuKFtjXSxkKSkmJmVbMF0pe2Zvcih2YXIgbD1lWzBdO2wucGFyZW50Tm9kZSYmMTEhPT1sLnBhcmVudE5vZGUubm9kZVR5cGU7KWw9bC5wYXJlbnROb2RlO1xubC5wYXJlbnROb2RlJiZsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobCl9fWVsc2V7KGU9ZCl8fChlPXcpO3ZhciBsPWUucGFyZW50V2luZG93fHxlLmRlZmF1bHRWaWV3fHxBLHA9YS5hLkRiKGMpLnRvTG93ZXJDYXNlKCkscT1lLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdDt0PShwPXAubWF0Y2goL14oPzpcXHgzYyEtLS4qPy0tXFx4M2VcXHMqPykqPzwoW2Etel0rKVtcXHM+XS8pKSYmZltwWzFdXXx8YjtwPXRbMF07dD1cImlnbm9yZWQ8ZGl2PlwiK3RbMV0rYyt0WzJdK1wiPC9kaXY+XCI7XCJmdW5jdGlvblwiPT10eXBlb2YgbC5pbm5lclNoaXY/cS5hcHBlbmRDaGlsZChsLmlubmVyU2hpdih0KSk6KGcmJmUuYm9keS5hcHBlbmRDaGlsZChxKSxxLmlubmVySFRNTD10LGcmJnEucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChxKSk7Zm9yKDtwLS07KXE9cS5sYXN0Q2hpbGQ7ZT1hLmEubGEocS5sYXN0Q2hpbGQuY2hpbGROb2Rlcyl9cmV0dXJuIGV9O2EuYS5NZD1mdW5jdGlvbihiLGMpe3ZhciBkPWEuYS51YShiLFxuYyk7cmV0dXJuIGQubGVuZ3RoJiZkWzBdLnBhcmVudEVsZW1lbnR8fGEuYS5ZYihkKX07YS5hLmZjPWZ1bmN0aW9uKGIsYyl7YS5hLlRiKGIpO2M9YS5hLmYoYyk7aWYobnVsbCE9PWMmJmMhPT1uKWlmKFwic3RyaW5nXCIhPXR5cGVvZiBjJiYoYz1jLnRvU3RyaW5nKCkpLHYpdihiKS5odG1sKGMpO2Vsc2UgZm9yKHZhciBkPWEuYS51YShjLGIub3duZXJEb2N1bWVudCksZT0wO2U8ZC5sZW5ndGg7ZSsrKWIuYXBwZW5kQ2hpbGQoZFtlXSl9fSkoKTthLmIoXCJ1dGlscy5wYXJzZUh0bWxGcmFnbWVudFwiLGEuYS51YSk7YS5iKFwidXRpbHMuc2V0SHRtbFwiLGEuYS5mYyk7YS5hYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYyxlKXtpZihjKWlmKDg9PWMubm9kZVR5cGUpe3ZhciBmPWEuYWEuVWMoYy5ub2RlVmFsdWUpO251bGwhPWYmJmUucHVzaCh7dWQ6YyxLZDpmfSl9ZWxzZSBpZigxPT1jLm5vZGVUeXBlKWZvcih2YXIgZj0wLGc9Yy5jaGlsZE5vZGVzLGg9Zy5sZW5ndGg7ZjxoO2YrKyliKGdbZl0sXG5lKX12YXIgYz17fTtyZXR1cm57WGI6ZnVuY3Rpb24oYSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgYSl0aHJvdyBFcnJvcihcIllvdSBjYW4gb25seSBwYXNzIGEgZnVuY3Rpb24gdG8ga28ubWVtb2l6YXRpb24ubWVtb2l6ZSgpXCIpO3ZhciBiPSg0Mjk0OTY3Mjk2KigxK01hdGgucmFuZG9tKCkpfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSkrKDQyOTQ5NjcyOTYqKDErTWF0aC5yYW5kb20oKSl8MCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtjW2JdPWE7cmV0dXJuXCJcXHgzYyEtLVtrb19tZW1vOlwiK2IrXCJdLS1cXHgzZVwifSxiZDpmdW5jdGlvbihhLGIpe3ZhciBmPWNbYV07aWYoZj09PW4pdGhyb3cgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGFueSBtZW1vIHdpdGggSUQgXCIrYStcIi4gUGVyaGFwcyBpdCdzIGFscmVhZHkgYmVlbiB1bm1lbW9pemVkLlwiKTt0cnl7cmV0dXJuIGYuYXBwbHkobnVsbCxifHxbXSksITB9ZmluYWxseXtkZWxldGUgY1thXX19LGNkOmZ1bmN0aW9uKGMsZSl7dmFyIGY9XG5bXTtiKGMsZik7Zm9yKHZhciBnPTAsaD1mLmxlbmd0aDtnPGg7ZysrKXt2YXIgbT1mW2ddLnVkLGs9W21dO2UmJmEuYS5OYihrLGUpO2EuYWEuYmQoZltnXS5LZCxrKTttLm5vZGVWYWx1ZT1cIlwiO20ucGFyZW50Tm9kZSYmbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG0pfX0sVWM6ZnVuY3Rpb24oYSl7cmV0dXJuKGE9YS5tYXRjaCgvXlxcW2tvX21lbW9cXDooLio/KVxcXSQvKSk/YVsxXTpudWxsfX19KCk7YS5iKFwibWVtb2l6YXRpb25cIixhLmFhKTthLmIoXCJtZW1vaXphdGlvbi5tZW1vaXplXCIsYS5hYS5YYik7YS5iKFwibWVtb2l6YXRpb24udW5tZW1vaXplXCIsYS5hYS5iZCk7YS5iKFwibWVtb2l6YXRpb24ucGFyc2VNZW1vVGV4dFwiLGEuYWEuVWMpO2EuYihcIm1lbW9pemF0aW9uLnVubWVtb2l6ZURvbU5vZGVBbmREZXNjZW5kYW50c1wiLGEuYWEuY2QpO2EubmE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKCl7aWYoZilmb3IodmFyIGI9ZixjPTAsZDtoPGY7KWlmKGQ9ZVtoKytdKXtpZihoPmIpe2lmKDVFMzw9XG4rK2Mpe2g9ZjthLmEuR2MoRXJyb3IoXCInVG9vIG11Y2ggcmVjdXJzaW9uJyBhZnRlciBwcm9jZXNzaW5nIFwiK2MrXCIgdGFzayBncm91cHMuXCIpKTticmVha31iPWZ9dHJ5e2QoKX1jYXRjaChwKXthLmEuR2MocCl9fX1mdW5jdGlvbiBjKCl7YigpO2g9Zj1lLmxlbmd0aD0wfXZhciBkLGU9W10sZj0wLGc9MSxoPTA7QS5NdXRhdGlvbk9ic2VydmVyP2Q9ZnVuY3Rpb24oYSl7dmFyIGI9dy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyhuZXcgTXV0YXRpb25PYnNlcnZlcihhKSkub2JzZXJ2ZShiLHthdHRyaWJ1dGVzOiEwfSk7cmV0dXJuIGZ1bmN0aW9uKCl7Yi5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vXCIpfX0oYyk6ZD13JiZcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiaW4gdy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpP2Z1bmN0aW9uKGEpe3ZhciBiPXcuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtiLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2Iub25yZWFkeXN0YXRlY2hhbmdlPW51bGw7dy5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYik7XG5iPW51bGw7YSgpfTt3LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChiKX06ZnVuY3Rpb24oYSl7c2V0VGltZW91dChhLDApfTtyZXR1cm57c2NoZWR1bGVyOmQsemI6ZnVuY3Rpb24oYil7Znx8YS5uYS5zY2hlZHVsZXIoYyk7ZVtmKytdPWI7cmV0dXJuIGcrK30sY2FuY2VsOmZ1bmN0aW9uKGEpe2E9YS0oZy1mKTthPj1oJiZhPGYmJihlW2FdPW51bGwpfSxyZXNldEZvclRlc3Rpbmc6ZnVuY3Rpb24oKXt2YXIgYT1mLWg7aD1mPWUubGVuZ3RoPTA7cmV0dXJuIGF9LFNkOmJ9fSgpO2EuYihcInRhc2tzXCIsYS5uYSk7YS5iKFwidGFza3Muc2NoZWR1bGVcIixhLm5hLnpiKTthLmIoXCJ0YXNrcy5ydW5FYXJseVwiLGEubmEuU2QpO2EuVGE9e3Rocm90dGxlOmZ1bmN0aW9uKGIsYyl7Yi50aHJvdHRsZUV2YWx1YXRpb249Yzt2YXIgZD1udWxsO3JldHVybiBhLiQoe3JlYWQ6Yix3cml0ZTpmdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZCk7ZD1hLmEuc2V0VGltZW91dChmdW5jdGlvbigpe2IoZSl9LFxuYyl9fSl9LHJhdGVMaW1pdDpmdW5jdGlvbihhLGMpe3ZhciBkLGUsZjtcIm51bWJlclwiPT10eXBlb2YgYz9kPWM6KGQ9Yy50aW1lb3V0LGU9Yy5tZXRob2QpO2EuSGI9ITE7Zj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6XCJub3RpZnlXaGVuQ2hhbmdlc1N0b3BcIj09ZT9ZOlg7YS51YihmdW5jdGlvbihhKXtyZXR1cm4gZihhLGQsYyl9KX0sZGVmZXJyZWQ6ZnVuY3Rpb24oYixjKXtpZighMCE9PWMpdGhyb3cgRXJyb3IoXCJUaGUgJ2RlZmVycmVkJyBleHRlbmRlciBvbmx5IGFjY2VwdHMgdGhlIHZhbHVlICd0cnVlJywgYmVjYXVzZSBpdCBpcyBub3Qgc3VwcG9ydGVkIHRvIHR1cm4gZGVmZXJyYWwgb2ZmIG9uY2UgZW5hYmxlZC5cIik7Yi5IYnx8KGIuSGI9ITAsYi51YihmdW5jdGlvbihjKXt2YXIgZSxmPSExO3JldHVybiBmdW5jdGlvbigpe2lmKCFmKXthLm5hLmNhbmNlbChlKTtlPWEubmEuemIoYyk7dHJ5e2Y9ITAsYi5ub3RpZnlTdWJzY3JpYmVycyhuLFwiZGlydHlcIil9ZmluYWxseXtmPVxuITF9fX19KSl9LG5vdGlmeTpmdW5jdGlvbihhLGMpe2EuZXF1YWxpdHlDb21wYXJlcj1cImFsd2F5c1wiPT1jP251bGw6S319O3ZhciBXPXt1bmRlZmluZWQ6MSxcImJvb2xlYW5cIjoxLG51bWJlcjoxLHN0cmluZzoxfTthLmIoXCJleHRlbmRlcnNcIixhLlRhKTthLmljPWZ1bmN0aW9uKGIsYyxkKXt0aGlzLmRhPWI7dGhpcy5sYz1jO3RoaXMubWM9ZDt0aGlzLkliPSExO3RoaXMuZmI9dGhpcy5KYj1udWxsO2EuTCh0aGlzLFwiZGlzcG9zZVwiLHRoaXMucyk7YS5MKHRoaXMsXCJkaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWRcIix0aGlzLmwpfTthLmljLnByb3RvdHlwZS5zPWZ1bmN0aW9uKCl7dGhpcy5JYnx8KHRoaXMuZmImJmEuYS5LLnliKHRoaXMuSmIsdGhpcy5mYiksdGhpcy5JYj0hMCx0aGlzLm1jKCksdGhpcy5kYT10aGlzLmxjPXRoaXMubWM9dGhpcy5KYj10aGlzLmZiPW51bGwpfTthLmljLnByb3RvdHlwZS5sPWZ1bmN0aW9uKGIpe3RoaXMuSmI9YjthLmEuSy56YShiLHRoaXMuZmI9dGhpcy5zLmJpbmQodGhpcykpfTtcbmEuVD1mdW5jdGlvbigpe2EuYS5BYih0aGlzLEQpO0QucWIodGhpcyl9O3ZhciBEPXtxYjpmdW5jdGlvbihhKXthLlU9e2NoYW5nZTpbXX07YS5zYz0xfSxzdWJzY3JpYmU6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPXRoaXM7ZD1kfHxcImNoYW5nZVwiO3ZhciBmPW5ldyBhLmljKGUsYz9iLmJpbmQoYyk6YixmdW5jdGlvbigpe2EuYS5QYShlLlVbZF0sZik7ZS5oYiYmZS5oYihkKX0pO2UuUWEmJmUuUWEoZCk7ZS5VW2RdfHwoZS5VW2RdPVtdKTtlLlVbZF0ucHVzaChmKTtyZXR1cm4gZn0sbm90aWZ5U3Vic2NyaWJlcnM6ZnVuY3Rpb24oYixjKXtjPWN8fFwiY2hhbmdlXCI7XCJjaGFuZ2VcIj09PWMmJnRoaXMuR2IoKTtpZih0aGlzLldhKGMpKXt2YXIgZD1cImNoYW5nZVwiPT09YyYmdGhpcy5lZHx8dGhpcy5VW2NdLnNsaWNlKDApO3RyeXthLnUueGMoKTtmb3IodmFyIGU9MCxmO2Y9ZFtlXTsrK2UpZi5JYnx8Zi5sYyhiKX1maW5hbGx5e2EudS5lbmQoKX19fSxvYjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNjfSxcbkRkOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9iKCkhPT1hfSxHYjpmdW5jdGlvbigpeysrdGhpcy5zY30sdWI6ZnVuY3Rpb24oYil7dmFyIGM9dGhpcyxkPWEuTyhjKSxlLGYsZyxoLG07Yy5nYnx8KGMuZ2I9Yy5ub3RpZnlTdWJzY3JpYmVycyxjLm5vdGlmeVN1YnNjcmliZXJzPVopO3ZhciBrPWIoZnVuY3Rpb24oKXtjLkphPSExO2QmJmg9PT1jJiYoaD1jLm5jP2MubmMoKTpjKCkpO3ZhciBhPWZ8fG0mJmMuc2IoZyxoKTttPWY9ZT0hMTthJiZjLmdiKGc9aCl9KTtjLnFjPWZ1bmN0aW9uKGEsYil7YiYmYy5KYXx8KG09IWIpO2MuZWQ9Yy5VLmNoYW5nZS5zbGljZSgwKTtjLkphPWU9ITA7aD1hO2soKX07Yy5wYz1mdW5jdGlvbihhKXtlfHwoZz1hLGMuZ2IoYSxcImJlZm9yZUNoYW5nZVwiKSl9O2MucmM9ZnVuY3Rpb24oKXttPSEwfTtjLmdkPWZ1bmN0aW9uKCl7Yy5zYihnLGMudighMCkpJiYoZj0hMCl9fSxXYTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5VW2FdJiZ0aGlzLlVbYV0ubGVuZ3RofSxcbkJkOmZ1bmN0aW9uKGIpe2lmKGIpcmV0dXJuIHRoaXMuVVtiXSYmdGhpcy5VW2JdLmxlbmd0aHx8MDt2YXIgYz0wO2EuYS5QKHRoaXMuVSxmdW5jdGlvbihhLGIpe1wiZGlydHlcIiE9PWEmJihjKz1iLmxlbmd0aCl9KTtyZXR1cm4gY30sc2I6ZnVuY3Rpb24oYSxjKXtyZXR1cm4hdGhpcy5lcXVhbGl0eUNvbXBhcmVyfHwhdGhpcy5lcXVhbGl0eUNvbXBhcmVyKGEsYyl9LHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IE9iamVjdF1cIn0sZXh0ZW5kOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXM7YiYmYS5hLlAoYixmdW5jdGlvbihiLGUpe3ZhciBmPWEuVGFbYl07XCJmdW5jdGlvblwiPT10eXBlb2YgZiYmKGM9ZihjLGUpfHxjKX0pO3JldHVybiBjfX07YS5MKEQsXCJpbml0XCIsRC5xYik7YS5MKEQsXCJzdWJzY3JpYmVcIixELnN1YnNjcmliZSk7YS5MKEQsXCJleHRlbmRcIixELmV4dGVuZCk7YS5MKEQsXCJnZXRTdWJzY3JpcHRpb25zQ291bnRcIixELkJkKTthLmEuQmEmJmEuYS5zZXRQcm90b3R5cGVPZihELFxuRnVuY3Rpb24ucHJvdG90eXBlKTthLlQuZm49RDthLlFjPWZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLnN1YnNjcmliZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5ub3RpZnlTdWJzY3JpYmVyc307YS5iKFwic3Vic2NyaWJhYmxlXCIsYS5UKTthLmIoXCJpc1N1YnNjcmliYWJsZVwiLGEuUWMpO2EuUz1hLnU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEpe2QucHVzaChlKTtlPWF9ZnVuY3Rpb24gYygpe2U9ZC5wb3AoKX12YXIgZD1bXSxlLGY9MDtyZXR1cm57eGM6YixlbmQ6YyxjYzpmdW5jdGlvbihiKXtpZihlKXtpZighYS5RYyhiKSl0aHJvdyBFcnJvcihcIk9ubHkgc3Vic2NyaWJhYmxlIHRoaW5ncyBjYW4gYWN0IGFzIGRlcGVuZGVuY2llc1wiKTtlLm9kLmNhbGwoZS5wZCxiLGIuZmR8fChiLmZkPSsrZikpfX0sRzpmdW5jdGlvbihhLGQsZSl7dHJ5e3JldHVybiBiKCksYS5hcHBseShkLGV8fFtdKX1maW5hbGx5e2MoKX19LHFhOmZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4gZS5vLnFhKCl9LFxuVmE6ZnVuY3Rpb24oKXtpZihlKXJldHVybiBlLm8uVmEoKX0sWWE6ZnVuY3Rpb24oKXtpZihlKXJldHVybiBlLllhfSxvOmZ1bmN0aW9uKCl7aWYoZSlyZXR1cm4gZS5vfX19KCk7YS5iKFwiY29tcHV0ZWRDb250ZXh0XCIsYS5TKTthLmIoXCJjb21wdXRlZENvbnRleHQuZ2V0RGVwZW5kZW5jaWVzQ291bnRcIixhLlMucWEpO2EuYihcImNvbXB1dGVkQ29udGV4dC5nZXREZXBlbmRlbmNpZXNcIixhLlMuVmEpO2EuYihcImNvbXB1dGVkQ29udGV4dC5pc0luaXRpYWxcIixhLlMuWWEpO2EuYihcImNvbXB1dGVkQ29udGV4dC5yZWdpc3RlckRlcGVuZGVuY3lcIixhLlMuY2MpO2EuYihcImlnbm9yZURlcGVuZGVuY2llc1wiLGEuWWQ9YS51LkcpO3ZhciBJPWEuYS5EYShcIl9sYXRlc3RWYWx1ZVwiKTthLnRhPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoKXtpZigwPGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGMuc2IoY1tJXSxhcmd1bWVudHNbMF0pJiYoYy55YSgpLGNbSV09YXJndW1lbnRzWzBdLGMueGEoKSksdGhpcztcbmEudS5jYyhjKTtyZXR1cm4gY1tJXX1jW0ldPWI7YS5hLkJhfHxhLmEuZXh0ZW5kKGMsYS5ULmZuKTthLlQuZm4ucWIoYyk7YS5hLkFiKGMsRik7YS5vcHRpb25zLmRlZmVyVXBkYXRlcyYmYS5UYS5kZWZlcnJlZChjLCEwKTtyZXR1cm4gY307dmFyIEY9e2VxdWFsaXR5Q29tcGFyZXI6Syx2OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbSV19LHhhOmZ1bmN0aW9uKCl7dGhpcy5ub3RpZnlTdWJzY3JpYmVycyh0aGlzW0ldLFwic3BlY3RhdGVcIik7dGhpcy5ub3RpZnlTdWJzY3JpYmVycyh0aGlzW0ldKX0seWE6ZnVuY3Rpb24oKXt0aGlzLm5vdGlmeVN1YnNjcmliZXJzKHRoaXNbSV0sXCJiZWZvcmVDaGFuZ2VcIil9fTthLmEuQmEmJmEuYS5zZXRQcm90b3R5cGVPZihGLGEuVC5mbik7dmFyIEc9YS50YS5NYT1cIl9fa29fcHJvdG9fX1wiO0ZbR109YS50YTthLk89ZnVuY3Rpb24oYil7aWYoKGI9XCJmdW5jdGlvblwiPT10eXBlb2YgYiYmYltHXSkmJmIhPT1GW0ddJiZiIT09YS5vLmZuW0ddKXRocm93IEVycm9yKFwiSW52YWxpZCBvYmplY3QgdGhhdCBsb29rcyBsaWtlIGFuIG9ic2VydmFibGU7IHBvc3NpYmx5IGZyb20gYW5vdGhlciBLbm9ja291dCBpbnN0YW5jZVwiKTtcbnJldHVybiEhYn07YS5aYT1mdW5jdGlvbihiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiYoYltHXT09PUZbR118fGJbR109PT1hLm8uZm5bR10mJmIuTmMpfTthLmIoXCJvYnNlcnZhYmxlXCIsYS50YSk7YS5iKFwiaXNPYnNlcnZhYmxlXCIsYS5PKTthLmIoXCJpc1dyaXRlYWJsZU9ic2VydmFibGVcIixhLlphKTthLmIoXCJpc1dyaXRhYmxlT2JzZXJ2YWJsZVwiLGEuWmEpO2EuYihcIm9ic2VydmFibGUuZm5cIixGKTthLkwoRixcInBlZWtcIixGLnYpO2EuTChGLFwidmFsdWVIYXNNdXRhdGVkXCIsRi54YSk7YS5MKEYsXCJ2YWx1ZVdpbGxNdXRhdGVcIixGLnlhKTthLkhhPWZ1bmN0aW9uKGIpe2I9Ynx8W107aWYoXCJvYmplY3RcIiE9dHlwZW9mIGJ8fCEoXCJsZW5ndGhcImluIGIpKXRocm93IEVycm9yKFwiVGhlIGFyZ3VtZW50IHBhc3NlZCB3aGVuIGluaXRpYWxpemluZyBhbiBvYnNlcnZhYmxlIGFycmF5IG11c3QgYmUgYW4gYXJyYXksIG9yIG51bGwsIG9yIHVuZGVmaW5lZC5cIik7Yj1hLnRhKGIpO2EuYS5BYihiLFxuYS5IYS5mbik7cmV0dXJuIGIuZXh0ZW5kKHt0cmFja0FycmF5Q2hhbmdlczohMH0pfTthLkhhLmZuPXtyZW1vdmU6ZnVuY3Rpb24oYil7Zm9yKHZhciBjPXRoaXMudigpLGQ9W10sZT1cImZ1bmN0aW9uXCIhPXR5cGVvZiBifHxhLk8oYik/ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1ifTpiLGY9MDtmPGMubGVuZ3RoO2YrKyl7dmFyIGc9Y1tmXTtpZihlKGcpKXswPT09ZC5sZW5ndGgmJnRoaXMueWEoKTtpZihjW2ZdIT09Zyl0aHJvdyBFcnJvcihcIkFycmF5IG1vZGlmaWVkIGR1cmluZyByZW1vdmU7IGNhbm5vdCByZW1vdmUgaXRlbVwiKTtkLnB1c2goZyk7Yy5zcGxpY2UoZiwxKTtmLS19fWQubGVuZ3RoJiZ0aGlzLnhhKCk7cmV0dXJuIGR9LHJlbW92ZUFsbDpmdW5jdGlvbihiKXtpZihiPT09bil7dmFyIGM9dGhpcy52KCksZD1jLnNsaWNlKDApO3RoaXMueWEoKTtjLnNwbGljZSgwLGMubGVuZ3RoKTt0aGlzLnhhKCk7cmV0dXJuIGR9cmV0dXJuIGI/dGhpcy5yZW1vdmUoZnVuY3Rpb24oYyl7cmV0dXJuIDA8PVxuYS5hLkEoYixjKX0pOltdfSxkZXN0cm95OmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMudigpLGQ9XCJmdW5jdGlvblwiIT10eXBlb2YgYnx8YS5PKGIpP2Z1bmN0aW9uKGEpe3JldHVybiBhPT09Yn06Yjt0aGlzLnlhKCk7Zm9yKHZhciBlPWMubGVuZ3RoLTE7MDw9ZTtlLS0pe3ZhciBmPWNbZV07ZChmKSYmKGYuX2Rlc3Ryb3k9ITApfXRoaXMueGEoKX0sZGVzdHJveUFsbDpmdW5jdGlvbihiKXtyZXR1cm4gYj09PW4/dGhpcy5kZXN0cm95KGZ1bmN0aW9uKCl7cmV0dXJuITB9KTpiP3RoaXMuZGVzdHJveShmdW5jdGlvbihjKXtyZXR1cm4gMDw9YS5hLkEoYixjKX0pOltdfSxpbmRleE9mOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMoKTtyZXR1cm4gYS5hLkEoYyxiKX0scmVwbGFjZTpmdW5jdGlvbihhLGMpe3ZhciBkPXRoaXMuaW5kZXhPZihhKTswPD1kJiYodGhpcy55YSgpLHRoaXMudigpW2RdPWMsdGhpcy54YSgpKX0sc29ydGVkOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMoKS5zbGljZSgwKTtcbnJldHVybiBhP2Muc29ydChhKTpjLnNvcnQoKX0scmV2ZXJzZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcygpLnNsaWNlKDApLnJldmVyc2UoKX19O2EuYS5CYSYmYS5hLnNldFByb3RvdHlwZU9mKGEuSGEuZm4sYS50YS5mbik7YS5hLkQoXCJwb3AgcHVzaCByZXZlcnNlIHNoaWZ0IHNvcnQgc3BsaWNlIHVuc2hpZnRcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYil7YS5IYS5mbltiXT1mdW5jdGlvbigpe3ZhciBhPXRoaXMudigpO3RoaXMueWEoKTt0aGlzLnpjKGEsYixhcmd1bWVudHMpO3ZhciBkPWFbYl0uYXBwbHkoYSxhcmd1bWVudHMpO3RoaXMueGEoKTtyZXR1cm4gZD09PWE/dGhpczpkfX0pO2EuYS5EKFtcInNsaWNlXCJdLGZ1bmN0aW9uKGIpe2EuSGEuZm5bYl09ZnVuY3Rpb24oKXt2YXIgYT10aGlzKCk7cmV0dXJuIGFbYl0uYXBwbHkoYSxhcmd1bWVudHMpfX0pO2EuUGM9ZnVuY3Rpb24oYil7cmV0dXJuIGEuTyhiKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYi5yZW1vdmUmJlwiZnVuY3Rpb25cIj09XG50eXBlb2YgYi5wdXNofTthLmIoXCJvYnNlcnZhYmxlQXJyYXlcIixhLkhhKTthLmIoXCJpc09ic2VydmFibGVBcnJheVwiLGEuUGMpO2EuVGEudHJhY2tBcnJheUNoYW5nZXM9ZnVuY3Rpb24oYixjKXtmdW5jdGlvbiBkKCl7ZnVuY3Rpb24gYygpe2lmKG0pe3ZhciBkPVtdLmNvbmNhdChiLnYoKXx8W10pLGU7aWYoYi5XYShcImFycmF5Q2hhbmdlXCIpKXtpZighZnx8MTxtKWY9YS5hLlBiKGssZCxiLk9iKTtlPWZ9az1kO2Y9bnVsbDttPTA7ZSYmZS5sZW5ndGgmJmIubm90aWZ5U3Vic2NyaWJlcnMoZSxcImFycmF5Q2hhbmdlXCIpfX1lP2MoKTooZT0hMCxoPWIuc3Vic2NyaWJlKGZ1bmN0aW9uKCl7KyttfSxudWxsLFwic3BlY3RhdGVcIiksaz1bXS5jb25jYXQoYi52KCl8fFtdKSxmPW51bGwsZz1iLnN1YnNjcmliZShjKSl9Yi5PYj17fTtjJiZcIm9iamVjdFwiPT10eXBlb2YgYyYmYS5hLmV4dGVuZChiLk9iLGMpO2IuT2Iuc3BhcnNlPSEwO2lmKCFiLnpjKXt2YXIgZT0hMSxmPW51bGwsZyxoLG09MCxcbmssbD1iLlFhLHA9Yi5oYjtiLlFhPWZ1bmN0aW9uKGEpe2wmJmwuY2FsbChiLGEpO1wiYXJyYXlDaGFuZ2VcIj09PWEmJmQoKX07Yi5oYj1mdW5jdGlvbihhKXtwJiZwLmNhbGwoYixhKTtcImFycmF5Q2hhbmdlXCIhPT1hfHxiLldhKFwiYXJyYXlDaGFuZ2VcIil8fChnJiZnLnMoKSxoJiZoLnMoKSxoPWc9bnVsbCxlPSExLGs9bil9O2IuemM9ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGwoYSxiLGMpe3JldHVybiBrW2subGVuZ3RoXT17c3RhdHVzOmEsdmFsdWU6YixpbmRleDpjfX1pZihlJiYhbSl7dmFyIGs9W10scD1iLmxlbmd0aCxnPWQubGVuZ3RoLGg9MDtzd2l0Y2goYyl7Y2FzZSBcInB1c2hcIjpoPXA7Y2FzZSBcInVuc2hpZnRcIjpmb3IoYz0wO2M8ZztjKyspbChcImFkZGVkXCIsZFtjXSxoK2MpO2JyZWFrO2Nhc2UgXCJwb3BcIjpoPXAtMTtjYXNlIFwic2hpZnRcIjpwJiZsKFwiZGVsZXRlZFwiLGJbaF0saCk7YnJlYWs7Y2FzZSBcInNwbGljZVwiOmM9TWF0aC5taW4oTWF0aC5tYXgoMCwwPmRbMF0/cCtkWzBdOlxuZFswXSkscCk7Zm9yKHZhciBwPTE9PT1nP3A6TWF0aC5taW4oYysoZFsxXXx8MCkscCksZz1jK2ctMixoPU1hdGgubWF4KHAsZyksVT1bXSxMPVtdLG49MjtjPGg7KytjLCsrbiljPHAmJkwucHVzaChsKFwiZGVsZXRlZFwiLGJbY10sYykpLGM8ZyYmVS5wdXNoKGwoXCJhZGRlZFwiLGRbbl0sYykpO2EuYS5LYyhMLFUpO2JyZWFrO2RlZmF1bHQ6cmV0dXJufWY9a319fX07dmFyIHI9YS5hLkRhKFwiX3N0YXRlXCIpO2Eubz1hLiQ9ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGUoKXtpZigwPGFyZ3VtZW50cy5sZW5ndGgpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBmKWYuYXBwbHkoZy5uYixhcmd1bWVudHMpO2Vsc2UgdGhyb3cgRXJyb3IoXCJDYW5ub3Qgd3JpdGUgYSB2YWx1ZSB0byBhIGtvLmNvbXB1dGVkIHVubGVzcyB5b3Ugc3BlY2lmeSBhICd3cml0ZScgb3B0aW9uLiBJZiB5b3Ugd2lzaCB0byByZWFkIHRoZSBjdXJyZW50IHZhbHVlLCBkb24ndCBwYXNzIGFueSBwYXJhbWV0ZXJzLlwiKTtyZXR1cm4gdGhpc31nLnJhfHxcbmEudS5jYyhlKTsoZy5rYXx8Zy5KJiZlLlhhKCkpJiZlLmhhKCk7cmV0dXJuIGcuWH1cIm9iamVjdFwiPT09dHlwZW9mIGI/ZD1iOihkPWR8fHt9LGImJihkLnJlYWQ9YikpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGQucmVhZCl0aHJvdyBFcnJvcihcIlBhc3MgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBrby5jb21wdXRlZFwiKTt2YXIgZj1kLndyaXRlLGc9e1g6bixzYTohMCxrYTohMCxyYjohMSxqYzohMSxyYTohMSx3YjohMSxKOiExLFdjOmQucmVhZCxuYjpjfHxkLm93bmVyLGw6ZC5kaXNwb3NlV2hlbk5vZGVJc1JlbW92ZWR8fGQubHx8bnVsbCxTYTpkLmRpc3Bvc2VXaGVufHxkLlNhLFJiOm51bGwsSTp7fSxWOjAsSWM6bnVsbH07ZVtyXT1nO2UuTmM9XCJmdW5jdGlvblwiPT09dHlwZW9mIGY7YS5hLkJhfHxhLmEuZXh0ZW5kKGUsYS5ULmZuKTthLlQuZm4ucWIoZSk7YS5hLkFiKGUsQyk7ZC5wdXJlPyhnLndiPSEwLGcuSj0hMCxhLmEuZXh0ZW5kKGUsZGEpKTpcbmQuZGVmZXJFdmFsdWF0aW9uJiZhLmEuZXh0ZW5kKGUsZWEpO2Eub3B0aW9ucy5kZWZlclVwZGF0ZXMmJmEuVGEuZGVmZXJyZWQoZSwhMCk7Zy5sJiYoZy5qYz0hMCxnLmwubm9kZVR5cGV8fChnLmw9bnVsbCkpO2cuSnx8ZC5kZWZlckV2YWx1YXRpb258fGUuaGEoKTtnLmwmJmUuamEoKSYmYS5hLksuemEoZy5sLGcuUmI9ZnVuY3Rpb24oKXtlLnMoKX0pO3JldHVybiBlfTt2YXIgQz17ZXF1YWxpdHlDb21wYXJlcjpLLHFhOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbcl0uVn0sVmE6ZnVuY3Rpb24oKXt2YXIgYj1bXTthLmEuUCh0aGlzW3JdLkksZnVuY3Rpb24oYSxkKXtiW2QuS2FdPWQuZGF9KTtyZXR1cm4gYn0sVmI6ZnVuY3Rpb24oYil7aWYoIXRoaXNbcl0uVilyZXR1cm4hMTt2YXIgYz10aGlzLlZhKCk7cmV0dXJuLTEhPT1hLmEuQShjLGIpPyEwOiEhYS5hLkxiKGMsZnVuY3Rpb24oYSl7cmV0dXJuIGEuVmImJmEuVmIoYil9KX0sdWM6ZnVuY3Rpb24oYSxjLGQpe2lmKHRoaXNbcl0ud2ImJlxuYz09PXRoaXMpdGhyb3cgRXJyb3IoXCJBICdwdXJlJyBjb21wdXRlZCBtdXN0IG5vdCBiZSBjYWxsZWQgcmVjdXJzaXZlbHlcIik7dGhpc1tyXS5JW2FdPWQ7ZC5LYT10aGlzW3JdLlYrKztkLkxhPWMub2IoKX0sWGE6ZnVuY3Rpb24oKXt2YXIgYSxjLGQ9dGhpc1tyXS5JO2ZvcihhIGluIGQpaWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGQsYSkmJihjPWRbYV0sdGhpcy5JYSYmYy5kYS5KYXx8Yy5kYS5EZChjLkxhKSkpcmV0dXJuITB9LEpkOmZ1bmN0aW9uKCl7dGhpcy5JYSYmIXRoaXNbcl0ucmImJnRoaXMuSWEoITEpfSxqYTpmdW5jdGlvbigpe3ZhciBhPXRoaXNbcl07cmV0dXJuIGEua2F8fDA8YS5WfSxSZDpmdW5jdGlvbigpe3RoaXMuSmE/dGhpc1tyXS5rYSYmKHRoaXNbcl0uc2E9ITApOnRoaXMuSGMoKX0sJGM6ZnVuY3Rpb24oYSl7aWYoYS5IYil7dmFyIGM9YS5zdWJzY3JpYmUodGhpcy5KZCx0aGlzLFwiZGlydHlcIiksZD1hLnN1YnNjcmliZSh0aGlzLlJkLFxudGhpcyk7cmV0dXJue2RhOmEsczpmdW5jdGlvbigpe2MucygpO2QucygpfX19cmV0dXJuIGEuc3Vic2NyaWJlKHRoaXMuSGMsdGhpcyl9LEhjOmZ1bmN0aW9uKCl7dmFyIGI9dGhpcyxjPWIudGhyb3R0bGVFdmFsdWF0aW9uO2MmJjA8PWM/KGNsZWFyVGltZW91dCh0aGlzW3JdLkljKSx0aGlzW3JdLkljPWEuYS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi5oYSghMCl9LGMpKTpiLklhP2IuSWEoITApOmIuaGEoITApfSxoYTpmdW5jdGlvbihiKXt2YXIgYz10aGlzW3JdLGQ9Yy5TYSxlPSExO2lmKCFjLnJiJiYhYy5yYSl7aWYoYy5sJiYhYS5hLlNiKGMubCl8fGQmJmQoKSl7aWYoIWMuamMpe3RoaXMucygpO3JldHVybn19ZWxzZSBjLmpjPSExO2MucmI9ITA7dHJ5e2U9dGhpcy56ZChiKX1maW5hbGx5e2MucmI9ITF9cmV0dXJuIGV9fSx6ZDpmdW5jdGlvbihiKXt2YXIgYz10aGlzW3JdLGQ9ITEsZT1jLndiP246IWMuVixkPXtxZDp0aGlzLG1iOmMuSSxRYjpjLlZ9O2EudS54Yyh7cGQ6ZCxcbm9kOmJhLG86dGhpcyxZYTplfSk7Yy5JPXt9O2MuVj0wO3ZhciBmPXRoaXMueWQoYyxkKTtjLlY/ZD10aGlzLnNiKGMuWCxmKToodGhpcy5zKCksZD0hMCk7ZCYmKGMuSj90aGlzLkdiKCk6dGhpcy5ub3RpZnlTdWJzY3JpYmVycyhjLlgsXCJiZWZvcmVDaGFuZ2VcIiksYy5YPWYsdGhpcy5ub3RpZnlTdWJzY3JpYmVycyhjLlgsXCJzcGVjdGF0ZVwiKSwhYy5KJiZiJiZ0aGlzLm5vdGlmeVN1YnNjcmliZXJzKGMuWCksdGhpcy5yYyYmdGhpcy5yYygpKTtlJiZ0aGlzLm5vdGlmeVN1YnNjcmliZXJzKGMuWCxcImF3YWtlXCIpO3JldHVybiBkfSx5ZDpmdW5jdGlvbihiLGMpe3RyeXt2YXIgZD1iLldjO3JldHVybiBiLm5iP2QuY2FsbChiLm5iKTpkKCl9ZmluYWxseXthLnUuZW5kKCksYy5RYiYmIWIuSiYmYS5hLlAoYy5tYixhYSksYi5zYT1iLmthPSExfX0sdjpmdW5jdGlvbihhKXt2YXIgYz10aGlzW3JdOyhjLmthJiYoYXx8IWMuVil8fGMuSiYmdGhpcy5YYSgpKSYmdGhpcy5oYSgpO3JldHVybiBjLlh9LFxudWI6ZnVuY3Rpb24oYil7YS5ULmZuLnViLmNhbGwodGhpcyxiKTt0aGlzLm5jPWZ1bmN0aW9uKCl7dGhpc1tyXS5KfHwodGhpc1tyXS5zYT90aGlzLmhhKCk6dGhpc1tyXS5rYT0hMSk7cmV0dXJuIHRoaXNbcl0uWH07dGhpcy5JYT1mdW5jdGlvbihhKXt0aGlzLnBjKHRoaXNbcl0uWCk7dGhpc1tyXS5rYT0hMDthJiYodGhpc1tyXS5zYT0hMCk7dGhpcy5xYyh0aGlzLCFhKX19LHM6ZnVuY3Rpb24oKXt2YXIgYj10aGlzW3JdOyFiLkomJmIuSSYmYS5hLlAoYi5JLGZ1bmN0aW9uKGEsYil7Yi5zJiZiLnMoKX0pO2IubCYmYi5SYiYmYS5hLksueWIoYi5sLGIuUmIpO2IuST1uO2IuVj0wO2IucmE9ITA7Yi5zYT0hMTtiLmthPSExO2IuSj0hMTtiLmw9bjtiLlNhPW47Yi5XYz1uO3RoaXMuTmN8fChiLm5iPW4pfX0sZGE9e1FhOmZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMsZD1jW3JdO2lmKCFkLnJhJiZkLkomJlwiY2hhbmdlXCI9PWIpe2QuSj0hMTtpZihkLnNhfHxjLlhhKCkpZC5JPW51bGwsZC5WPVxuMCxjLmhhKCkmJmMuR2IoKTtlbHNle3ZhciBlPVtdO2EuYS5QKGQuSSxmdW5jdGlvbihhLGIpe2VbYi5LYV09YX0pO2EuYS5EKGUsZnVuY3Rpb24oYSxiKXt2YXIgZT1kLklbYV0sbT1jLiRjKGUuZGEpO20uS2E9YjttLkxhPWUuTGE7ZC5JW2FdPW19KTtjLlhhKCkmJmMuaGEoKSYmYy5HYigpfWQucmF8fGMubm90aWZ5U3Vic2NyaWJlcnMoZC5YLFwiYXdha2VcIil9fSxoYjpmdW5jdGlvbihiKXt2YXIgYz10aGlzW3JdO2MucmF8fFwiY2hhbmdlXCIhPWJ8fHRoaXMuV2EoXCJjaGFuZ2VcIil8fChhLmEuUChjLkksZnVuY3Rpb24oYSxiKXtiLnMmJihjLklbYV09e2RhOmIuZGEsS2E6Yi5LYSxMYTpiLkxhfSxiLnMoKSl9KSxjLko9ITAsdGhpcy5ub3RpZnlTdWJzY3JpYmVycyhuLFwiYXNsZWVwXCIpKX0sb2I6ZnVuY3Rpb24oKXt2YXIgYj10aGlzW3JdO2IuSiYmKGIuc2F8fHRoaXMuWGEoKSkmJnRoaXMuaGEoKTtyZXR1cm4gYS5ULmZuLm9iLmNhbGwodGhpcyl9fSxlYT17UWE6ZnVuY3Rpb24oYSl7XCJjaGFuZ2VcIiE9XG5hJiZcImJlZm9yZUNoYW5nZVwiIT1hfHx0aGlzLnYoKX19O2EuYS5CYSYmYS5hLnNldFByb3RvdHlwZU9mKEMsYS5ULmZuKTt2YXIgTj1hLnRhLk1hO0NbTl09YS5vO2EuT2M9ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYVtOXT09PUNbTl19O2EuRmQ9ZnVuY3Rpb24oYil7cmV0dXJuIGEuT2MoYikmJmJbcl0mJmJbcl0ud2J9O2EuYihcImNvbXB1dGVkXCIsYS5vKTthLmIoXCJkZXBlbmRlbnRPYnNlcnZhYmxlXCIsYS5vKTthLmIoXCJpc0NvbXB1dGVkXCIsYS5PYyk7YS5iKFwiaXNQdXJlQ29tcHV0ZWRcIixhLkZkKTthLmIoXCJjb21wdXRlZC5mblwiLEMpO2EuTChDLFwicGVla1wiLEMudik7YS5MKEMsXCJkaXNwb3NlXCIsQy5zKTthLkwoQyxcImlzQWN0aXZlXCIsQy5qYSk7YS5MKEMsXCJnZXREZXBlbmRlbmNpZXNDb3VudFwiLEMucWEpO2EuTChDLFwiZ2V0RGVwZW5kZW5jaWVzXCIsQy5WYSk7YS54Yj1mdW5jdGlvbihiLGMpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXJldHVybiBhLm8oYixcbmMse3B1cmU6ITB9KTtiPWEuYS5leHRlbmQoe30sYik7Yi5wdXJlPSEwO3JldHVybiBhLm8oYixjKX07YS5iKFwicHVyZUNvbXB1dGVkXCIsYS54Yik7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhLGYsZyl7Zz1nfHxuZXcgZDthPWYoYSk7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGF8fG51bGw9PT1hfHxhPT09bnx8YSBpbnN0YW5jZW9mIFJlZ0V4cHx8YSBpbnN0YW5jZW9mIERhdGV8fGEgaW5zdGFuY2VvZiBTdHJpbmd8fGEgaW5zdGFuY2VvZiBOdW1iZXJ8fGEgaW5zdGFuY2VvZiBCb29sZWFuKXJldHVybiBhO3ZhciBoPWEgaW5zdGFuY2VvZiBBcnJheT9bXTp7fTtnLnNhdmUoYSxoKTtjKGEsZnVuY3Rpb24oYyl7dmFyIGQ9ZihhW2NdKTtzd2l0Y2godHlwZW9mIGQpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJzdHJpbmdcIjpjYXNlIFwiZnVuY3Rpb25cIjpoW2NdPWQ7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJ1bmRlZmluZWRcIjp2YXIgbD1nLmdldChkKTtoW2NdPWwhPT1cbm4/bDpiKGQsZixnKX19KTtyZXR1cm4gaH1mdW5jdGlvbiBjKGEsYil7aWYoYSBpbnN0YW5jZW9mIEFycmF5KXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyliKGMpO1wiZnVuY3Rpb25cIj09dHlwZW9mIGEudG9KU09OJiZiKFwidG9KU09OXCIpfWVsc2UgZm9yKGMgaW4gYSliKGMpfWZ1bmN0aW9uIGQoKXt0aGlzLmtleXM9W107dGhpcy52YWx1ZXM9W119YS5hZD1mdW5jdGlvbihjKXtpZigwPT1hcmd1bWVudHMubGVuZ3RoKXRocm93IEVycm9yKFwiV2hlbiBjYWxsaW5nIGtvLnRvSlMsIHBhc3MgdGhlIG9iamVjdCB5b3Ugd2FudCB0byBjb252ZXJ0LlwiKTtyZXR1cm4gYihjLGZ1bmN0aW9uKGIpe2Zvcih2YXIgYz0wO2EuTyhiKSYmMTA+YztjKyspYj1iKCk7cmV0dXJuIGJ9KX07YS50b0pTT049ZnVuY3Rpb24oYixjLGQpe2I9YS5hZChiKTtyZXR1cm4gYS5hLmhjKGIsYyxkKX07ZC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmQsc2F2ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5BKHRoaXMua2V5cyxcbmIpOzA8PWQ/dGhpcy52YWx1ZXNbZF09YzoodGhpcy5rZXlzLnB1c2goYiksdGhpcy52YWx1ZXMucHVzaChjKSl9LGdldDpmdW5jdGlvbihiKXtiPWEuYS5BKHRoaXMua2V5cyxiKTtyZXR1cm4gMDw9Yj90aGlzLnZhbHVlc1tiXTpufX19KSgpO2EuYihcInRvSlNcIixhLmFkKTthLmIoXCJ0b0pTT05cIixhLnRvSlNPTik7YS5XZD1mdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZShjKXt2YXIgZT1hLnhiKGIsZCkuZXh0ZW5kKHttYTpcImFsd2F5c1wifSksaD1lLnN1YnNjcmliZShmdW5jdGlvbihhKXthJiYoaC5zKCksYyhhKSl9KTtlLm5vdGlmeVN1YnNjcmliZXJzKGUudigpKTtyZXR1cm4gaH1yZXR1cm5cImZ1bmN0aW9uXCIhPT10eXBlb2YgUHJvbWlzZXx8Yz9lKGMuYmluZChkKSk6bmV3IFByb21pc2UoZSl9O2EuYihcIndoZW5cIixhLldkKTsoZnVuY3Rpb24oKXthLnc9e006ZnVuY3Rpb24oYil7c3dpdGNoKGEuYS5SKGIpKXtjYXNlIFwib3B0aW9uXCI6cmV0dXJuITA9PT1iLl9fa29fX2hhc0RvbURhdGFPcHRpb25WYWx1ZV9fP1xuYS5hLmcuZ2V0KGIsYS5jLm9wdGlvbnMuJGIpOjc+PWEuYS5XP2IuZ2V0QXR0cmlidXRlTm9kZShcInZhbHVlXCIpJiZiLmdldEF0dHJpYnV0ZU5vZGUoXCJ2YWx1ZVwiKS5zcGVjaWZpZWQ/Yi52YWx1ZTpiLnRleHQ6Yi52YWx1ZTtjYXNlIFwic2VsZWN0XCI6cmV0dXJuIDA8PWIuc2VsZWN0ZWRJbmRleD9hLncuTShiLm9wdGlvbnNbYi5zZWxlY3RlZEluZGV4XSk6bjtkZWZhdWx0OnJldHVybiBiLnZhbHVlfX0sY2I6ZnVuY3Rpb24oYixjLGQpe3N3aXRjaChhLmEuUihiKSl7Y2FzZSBcIm9wdGlvblwiOlwic3RyaW5nXCI9PT10eXBlb2YgYz8oYS5hLmcuc2V0KGIsYS5jLm9wdGlvbnMuJGIsbiksXCJfX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfX1wiaW4gYiYmZGVsZXRlIGIuX19rb19faGFzRG9tRGF0YU9wdGlvblZhbHVlX18sYi52YWx1ZT1jKTooYS5hLmcuc2V0KGIsYS5jLm9wdGlvbnMuJGIsYyksYi5fX2tvX19oYXNEb21EYXRhT3B0aW9uVmFsdWVfXz0hMCxiLnZhbHVlPVwibnVtYmVyXCI9PT1cbnR5cGVvZiBjP2M6XCJcIik7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmlmKFwiXCI9PT1jfHxudWxsPT09YyljPW47Zm9yKHZhciBlPS0xLGY9MCxnPWIub3B0aW9ucy5sZW5ndGgsaDtmPGc7KytmKWlmKGg9YS53Lk0oYi5vcHRpb25zW2ZdKSxoPT1jfHxcIlwiPT09aCYmYz09PW4pe2U9ZjticmVha31pZihkfHwwPD1lfHxjPT09biYmMTxiLnNpemUpYi5zZWxlY3RlZEluZGV4PWUsNj09PWEuYS5XJiZhLmEuc2V0VGltZW91dChmdW5jdGlvbigpe2Iuc2VsZWN0ZWRJbmRleD1lfSwwKTticmVhaztkZWZhdWx0OmlmKG51bGw9PT1jfHxjPT09biljPVwiXCI7Yi52YWx1ZT1jfX19fSkoKTthLmIoXCJzZWxlY3RFeHRlbnNpb25zXCIsYS53KTthLmIoXCJzZWxlY3RFeHRlbnNpb25zLnJlYWRWYWx1ZVwiLGEudy5NKTthLmIoXCJzZWxlY3RFeHRlbnNpb25zLndyaXRlVmFsdWVcIixhLncuY2IpO2EubT1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYil7Yj1hLmEuRGIoYik7MTIzPT09Yi5jaGFyQ29kZUF0KDApJiYoYj1iLnNsaWNlKDEsXG4tMSkpO2IrPVwiXFxuLFwiO3ZhciBjPVtdLGQ9Yi5tYXRjaChlKSxwLHE9W10saD0wO2lmKDE8ZC5sZW5ndGgpe2Zvcih2YXIgeD0wLEI7Qj1kW3hdOysreCl7dmFyIHU9Qi5jaGFyQ29kZUF0KDApO2lmKDQ0PT09dSl7aWYoMD49aCl7Yy5wdXNoKHAmJnEubGVuZ3RoP3trZXk6cCx2YWx1ZTpxLmpvaW4oXCJcIil9Ont1bmtub3duOnB8fHEuam9pbihcIlwiKX0pO3A9aD0wO3E9W107Y29udGludWV9fWVsc2UgaWYoNTg9PT11KXtpZighaCYmIXAmJjE9PT1xLmxlbmd0aCl7cD1xLnBvcCgpO2NvbnRpbnVlfX1lbHNlIGlmKDQ3PT09dSYmMTxCLmxlbmd0aCYmKDQ3PT09Qi5jaGFyQ29kZUF0KDEpfHw0Mj09PUIuY2hhckNvZGVBdCgxKSkpY29udGludWU7ZWxzZSA0Nz09PXUmJngmJjE8Qi5sZW5ndGg/KHU9ZFt4LTFdLm1hdGNoKGYpKSYmIWdbdVswXV0mJihiPWIuc3Vic3RyKGIuaW5kZXhPZihCKSsxKSxkPWIubWF0Y2goZSkseD0tMSxCPVwiL1wiKTo0MD09PXV8fDEyMz09PXV8fDkxPT09dT8rK2g6XG40MT09PXV8fDEyNT09PXV8fDkzPT09dT8tLWg6cHx8cS5sZW5ndGh8fDM0IT09dSYmMzkhPT11fHwoQj1CLnNsaWNlKDEsLTEpKTtxLnB1c2goQil9aWYoMDxoKXRocm93IEVycm9yKFwiVW5iYWxhbmNlZCBwYXJlbnRoZXNlcywgYnJhY2VzLCBvciBicmFja2V0c1wiKTt9cmV0dXJuIGN9dmFyIGM9W1widHJ1ZVwiLFwiZmFsc2VcIixcIm51bGxcIixcInVuZGVmaW5lZFwiXSxkPS9eKD86WyRfYS16XVskXFx3XSp8KC4rKShcXC5cXHMqWyRfYS16XVskXFx3XSp8XFxbLitcXF0pKSQvaSxlPVJlZ0V4cChcIlxcXCIoPzpcXFxcXFxcXC58W15cXFwiXSkqXFxcInwnKD86XFxcXFxcXFwufFteJ10pKid8YCg/OlxcXFxcXFxcLnxbXmBdKSpgfC9cXFxcKig/OlteKl18XFxcXCorW14qL10pKlxcXFwqKy98Ly8uKlxcbnwvKD86XFxcXFxcXFwufFteL10pKy93KnxbXlxcXFxzOiwvXVteLFxcXCInYHt9KCkvOltcXFxcXV0qW15cXFxccyxcXFwiJ2B7fSgpLzpbXFxcXF1dfFteXFxcXHNdXCIsXCJnXCIpLGY9L1tcXF0pXCInQS1aYS16MC05XyRdKyQvLGc9e1wiaW5cIjoxLFwicmV0dXJuXCI6MSxcInR5cGVvZlwiOjF9LFxuaD17fTtyZXR1cm57UmE6W10sd2E6aCxhYzpiLHZiOmZ1bmN0aW9uKGUsZil7ZnVuY3Rpb24gbChiLGUpe3ZhciBmO2lmKCF4KXt2YXIgaz1hLmdldEJpbmRpbmdIYW5kbGVyKGIpO2lmKGsmJmsucHJlcHJvY2VzcyYmIShlPWsucHJlcHJvY2VzcyhlLGIsbCkpKXJldHVybjtpZihrPWhbYl0pZj1lLDA8PWEuYS5BKGMsZik/Zj0hMTooaz1mLm1hdGNoKGQpLGY9bnVsbD09PWs/ITE6a1sxXT9cIk9iamVjdChcIitrWzFdK1wiKVwiK2tbMl06Ziksaz1mO2smJnEucHVzaChcIidcIisoXCJzdHJpbmdcIj09dHlwZW9mIGhbYl0/aFtiXTpiKStcIic6ZnVuY3Rpb24oX3ope1wiK2YrXCI9X3p9XCIpfWcmJihlPVwiZnVuY3Rpb24oKXtyZXR1cm4gXCIrZStcIiB9XCIpO3AucHVzaChcIidcIitiK1wiJzpcIitlKX1mPWZ8fHt9O3ZhciBwPVtdLHE9W10sZz1mLnZhbHVlQWNjZXNzb3JzLHg9Zi5iaW5kaW5nUGFyYW1zLEI9XCJzdHJpbmdcIj09PXR5cGVvZiBlP2IoZSk6ZTthLmEuRChCLGZ1bmN0aW9uKGEpe2woYS5rZXl8fGEudW5rbm93bixcbmEudmFsdWUpfSk7cS5sZW5ndGgmJmwoXCJfa29fcHJvcGVydHlfd3JpdGVyc1wiLFwie1wiK3Euam9pbihcIixcIikrXCIgfVwiKTtyZXR1cm4gcC5qb2luKFwiLFwiKX0sSWQ6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZihhW2NdLmtleT09YilyZXR1cm4hMDtyZXR1cm4hMX0sZWI6ZnVuY3Rpb24oYixjLGQsZSxmKXtpZihiJiZhLk8oYikpIWEuWmEoYil8fGYmJmIudigpPT09ZXx8YihlKTtlbHNlIGlmKChiPWMuZ2V0KFwiX2tvX3Byb3BlcnR5X3dyaXRlcnNcIikpJiZiW2RdKWJbZF0oZSl9fX0oKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nXCIsYS5tKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nLmJpbmRpbmdSZXdyaXRlVmFsaWRhdG9yc1wiLGEubS5SYSk7YS5iKFwiZXhwcmVzc2lvblJld3JpdGluZy5wYXJzZU9iamVjdExpdGVyYWxcIixhLm0uYWMpO2EuYihcImV4cHJlc3Npb25SZXdyaXRpbmcucHJlUHJvY2Vzc0JpbmRpbmdzXCIsYS5tLnZiKTthLmIoXCJleHByZXNzaW9uUmV3cml0aW5nLl90d29XYXlCaW5kaW5nc1wiLFxuYS5tLndhKTthLmIoXCJqc29uRXhwcmVzc2lvblJld3JpdGluZ1wiLGEubSk7YS5iKFwianNvbkV4cHJlc3Npb25SZXdyaXRpbmcuaW5zZXJ0UHJvcGVydHlBY2Nlc3NvcnNJbnRvSnNvblwiLGEubS52Yik7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihhKXtyZXR1cm4gOD09YS5ub2RlVHlwZSYmZy50ZXN0KGY/YS50ZXh0OmEubm9kZVZhbHVlKX1mdW5jdGlvbiBjKGEpe3JldHVybiA4PT1hLm5vZGVUeXBlJiZoLnRlc3QoZj9hLnRleHQ6YS5ub2RlVmFsdWUpfWZ1bmN0aW9uIGQoZCxlKXtmb3IodmFyIGY9ZCxoPTEsZz1bXTtmPWYubmV4dFNpYmxpbmc7KXtpZihjKGYpJiYoYS5hLmcuc2V0KGYsaywhMCksaC0tLDA9PT1oKSlyZXR1cm4gZztnLnB1c2goZik7YihmKSYmaCsrfWlmKCFlKXRocm93IEVycm9yKFwiQ2Fubm90IGZpbmQgY2xvc2luZyBjb21tZW50IHRhZyB0byBtYXRjaDogXCIrZC5ub2RlVmFsdWUpO3JldHVybiBudWxsfWZ1bmN0aW9uIGUoYSxiKXt2YXIgYz1kKGEsYik7cmV0dXJuIGM/XG4wPGMubGVuZ3RoP2NbYy5sZW5ndGgtMV0ubmV4dFNpYmxpbmc6YS5uZXh0U2libGluZzpudWxsfXZhciBmPXcmJlwiXFx4M2MhLS10ZXN0LS1cXHgzZVwiPT09dy5jcmVhdGVDb21tZW50KFwidGVzdFwiKS50ZXh0LGc9Zj8vXlxceDNjIS0tXFxzKmtvKD86XFxzKyhbXFxzXFxTXSspKT9cXHMqLS1cXHgzZSQvOi9eXFxzKmtvKD86XFxzKyhbXFxzXFxTXSspKT9cXHMqJC8saD1mPy9eXFx4M2MhLS1cXHMqXFwva29cXHMqLS1cXHgzZSQvOi9eXFxzKlxcL2tvXFxzKiQvLG09e3VsOiEwLG9sOiEwfSxrPVwiX19rb19tYXRjaGVkRW5kQ29tbWVudF9fXCI7YS5oPXtlYTp7fSxjaGlsZE5vZGVzOmZ1bmN0aW9uKGEpe3JldHVybiBiKGEpP2QoYSk6YS5jaGlsZE5vZGVzfSxFYTpmdW5jdGlvbihjKXtpZihiKGMpKXtjPWEuaC5jaGlsZE5vZGVzKGMpO2Zvcih2YXIgZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKylhLnJlbW92ZU5vZGUoY1tkXSl9ZWxzZSBhLmEuVGIoYyl9LHZhOmZ1bmN0aW9uKGMsZCl7aWYoYihjKSl7YS5oLkVhKGMpO2Zvcih2YXIgZT1cbmMubmV4dFNpYmxpbmcsZj0wLGs9ZC5sZW5ndGg7ZjxrO2YrKyllLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRbZl0sZSl9ZWxzZSBhLmEudmEoYyxkKX0sVmM6ZnVuY3Rpb24oYSxjKXt2YXIgZDtiKGEpPyhkPWEubmV4dFNpYmxpbmcsYT1hLnBhcmVudE5vZGUpOmQ9YS5maXJzdENoaWxkO2Q/YyE9PWQmJmEuaW5zZXJ0QmVmb3JlKGMsZCk6YS5hcHBlbmRDaGlsZChjKX0sV2I6ZnVuY3Rpb24oYyxkLGUpe2U/KGU9ZS5uZXh0U2libGluZyxiKGMpJiYoYz1jLnBhcmVudE5vZGUpLGU/ZCE9PWUmJmMuaW5zZXJ0QmVmb3JlKGQsZSk6Yy5hcHBlbmRDaGlsZChkKSk6YS5oLlZjKGMsZCl9LGZpcnN0Q2hpbGQ6ZnVuY3Rpb24oYSl7aWYoYihhKSlyZXR1cm4hYS5uZXh0U2libGluZ3x8YyhhLm5leHRTaWJsaW5nKT9udWxsOmEubmV4dFNpYmxpbmc7aWYoYS5maXJzdENoaWxkJiZjKGEuZmlyc3RDaGlsZCkpdGhyb3cgRXJyb3IoXCJGb3VuZCBpbnZhbGlkIGVuZCBjb21tZW50LCBhcyB0aGUgZmlyc3QgY2hpbGQgb2YgXCIrXG5hKTtyZXR1cm4gYS5maXJzdENoaWxkfSxuZXh0U2libGluZzpmdW5jdGlvbihkKXtiKGQpJiYoZD1lKGQpKTtpZihkLm5leHRTaWJsaW5nJiZjKGQubmV4dFNpYmxpbmcpKXt2YXIgZj1kLm5leHRTaWJsaW5nO2lmKGMoZikmJiFhLmEuZy5nZXQoZixrKSl0aHJvdyBFcnJvcihcIkZvdW5kIGVuZCBjb21tZW50IHdpdGhvdXQgYSBtYXRjaGluZyBvcGVuaW5nIGNvbW1lbnQsIGFzIGNoaWxkIG9mIFwiK2QpO3JldHVybiBudWxsfXJldHVybiBkLm5leHRTaWJsaW5nfSxDZDpiLFZkOmZ1bmN0aW9uKGEpe3JldHVybihhPShmP2EudGV4dDphLm5vZGVWYWx1ZSkubWF0Y2goZykpP2FbMV06bnVsbH0sU2M6ZnVuY3Rpb24oZCl7aWYobVthLmEuUihkKV0pe3ZhciBmPWQuZmlyc3RDaGlsZDtpZihmKXtkbyBpZigxPT09Zi5ub2RlVHlwZSl7dmFyIGs7az1mLmZpcnN0Q2hpbGQ7dmFyIGg9bnVsbDtpZihrKXtkbyBpZihoKWgucHVzaChrKTtlbHNlIGlmKGIoaykpe3ZhciBnPWUoaywhMCk7Zz9rPVxuZzpoPVtrXX1lbHNlIGMoaykmJihoPVtrXSk7d2hpbGUoaz1rLm5leHRTaWJsaW5nKX1pZihrPWgpZm9yKGg9Zi5uZXh0U2libGluZyxnPTA7ZzxrLmxlbmd0aDtnKyspaD9kLmluc2VydEJlZm9yZShrW2ddLGgpOmQuYXBwZW5kQ2hpbGQoa1tnXSl9d2hpbGUoZj1mLm5leHRTaWJsaW5nKX19fX19KSgpO2EuYihcInZpcnR1YWxFbGVtZW50c1wiLGEuaCk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmFsbG93ZWRCaW5kaW5nc1wiLGEuaC5lYSk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmVtcHR5Tm9kZVwiLGEuaC5FYSk7YS5iKFwidmlydHVhbEVsZW1lbnRzLmluc2VydEFmdGVyXCIsYS5oLldiKTthLmIoXCJ2aXJ0dWFsRWxlbWVudHMucHJlcGVuZFwiLGEuaC5WYyk7YS5iKFwidmlydHVhbEVsZW1lbnRzLnNldERvbU5vZGVDaGlsZHJlblwiLGEuaC52YSk7KGZ1bmN0aW9uKCl7YS5nYT1mdW5jdGlvbigpe3RoaXMubmQ9e319O2EuYS5leHRlbmQoYS5nYS5wcm90b3R5cGUse25vZGVIYXNCaW5kaW5nczpmdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBudWxsIT1cbmIuZ2V0QXR0cmlidXRlKFwiZGF0YS1iaW5kXCIpfHxhLmouZ2V0Q29tcG9uZW50TmFtZUZvck5vZGUoYik7Y2FzZSA4OnJldHVybiBhLmguQ2QoYik7ZGVmYXVsdDpyZXR1cm4hMX19LGdldEJpbmRpbmdzOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9dGhpcy5nZXRCaW5kaW5nc1N0cmluZyhiLGMpLGQ9ZD90aGlzLnBhcnNlQmluZGluZ3NTdHJpbmcoZCxjLGIpOm51bGw7cmV0dXJuIGEuai50YyhkLGIsYywhMSl9LGdldEJpbmRpbmdBY2Nlc3NvcnM6ZnVuY3Rpb24oYixjKXt2YXIgZD10aGlzLmdldEJpbmRpbmdzU3RyaW5nKGIsYyksZD1kP3RoaXMucGFyc2VCaW5kaW5nc1N0cmluZyhkLGMsYix7dmFsdWVBY2Nlc3NvcnM6ITB9KTpudWxsO3JldHVybiBhLmoudGMoZCxiLGMsITApfSxnZXRCaW5kaW5nc1N0cmluZzpmdW5jdGlvbihiKXtzd2l0Y2goYi5ub2RlVHlwZSl7Y2FzZSAxOnJldHVybiBiLmdldEF0dHJpYnV0ZShcImRhdGEtYmluZFwiKTtjYXNlIDg6cmV0dXJuIGEuaC5WZChiKTtkZWZhdWx0OnJldHVybiBudWxsfX0sXG5wYXJzZUJpbmRpbmdzU3RyaW5nOmZ1bmN0aW9uKGIsYyxkLGUpe3RyeXt2YXIgZj10aGlzLm5kLGc9YisoZSYmZS52YWx1ZUFjY2Vzc29yc3x8XCJcIiksaDtpZighKGg9ZltnXSkpe3ZhciBtLGs9XCJ3aXRoKCRjb250ZXh0KXt3aXRoKCRkYXRhfHx7fSl7cmV0dXJue1wiK2EubS52YihiLGUpK1wifX19XCI7bT1uZXcgRnVuY3Rpb24oXCIkY29udGV4dFwiLFwiJGVsZW1lbnRcIixrKTtoPWZbZ109bX1yZXR1cm4gaChjLGQpfWNhdGNoKGwpe3Rocm93IGwubWVzc2FnZT1cIlVuYWJsZSB0byBwYXJzZSBiaW5kaW5ncy5cXG5CaW5kaW5ncyB2YWx1ZTogXCIrYitcIlxcbk1lc3NhZ2U6IFwiK2wubWVzc2FnZSxsO319fSk7YS5nYS5pbnN0YW5jZT1uZXcgYS5nYX0pKCk7YS5iKFwiYmluZGluZ1Byb3ZpZGVyXCIsYS5nYSk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiKXt2YXIgYz0oYj1hLmEuZy5nZXQoYix6KSkmJmIuTjtjJiYoYi5OPW51bGwsYy5UYygpKX1mdW5jdGlvbiBjKGMsZCxlKXt0aGlzLm5vZGU9Yzt0aGlzLnljPVxuZDt0aGlzLmtiPVtdO3RoaXMuSD0hMTtkLk58fGEuYS5LLnphKGMsYik7ZSYmZS5OJiYoZS5OLmtiLnB1c2goYyksdGhpcy5LYj1lKX1mdW5jdGlvbiBkKGEpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBhfX1mdW5jdGlvbiBlKGEpe3JldHVybiBhKCl9ZnVuY3Rpb24gZihiKXtyZXR1cm4gYS5hLkdhKGEudS5HKGIpLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGIoKVtjXX19KX1mdW5jdGlvbiBnKGIsYyxlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9mKGIuYmluZChudWxsLGMsZSkpOmEuYS5HYShiLGQpfWZ1bmN0aW9uIGgoYSxiKXtyZXR1cm4gZih0aGlzLmdldEJpbmRpbmdzLmJpbmQodGhpcyxhLGIpKX1mdW5jdGlvbiBtKGIsYyl7dmFyIGQ9YS5oLmZpcnN0Q2hpbGQoYyk7aWYoZCl7dmFyIGUsZj1hLmdhLmluc3RhbmNlLGw9Zi5wcmVwcm9jZXNzTm9kZTtpZihsKXtmb3IoO2U9ZDspZD1hLmgubmV4dFNpYmxpbmcoZSksbC5jYWxsKGYsZSk7XG5kPWEuaC5maXJzdENoaWxkKGMpfWZvcig7ZT1kOylkPWEuaC5uZXh0U2libGluZyhlKSxrKGIsZSl9YS5pLm1hKGMsYS5pLkgpfWZ1bmN0aW9uIGsoYixjKXt2YXIgZD1iLGU9MT09PWMubm9kZVR5cGU7ZSYmYS5oLlNjKGMpO2lmKGV8fGEuZ2EuaW5zdGFuY2Uubm9kZUhhc0JpbmRpbmdzKGMpKWQ9cChjLG51bGwsYikuYmluZGluZ0NvbnRleHRGb3JEZXNjZW5kYW50cztkJiYhdVthLmEuUihjKV0mJm0oZCxjKX1mdW5jdGlvbiBsKGIpe3ZhciBjPVtdLGQ9e30sZT1bXTthLmEuUChiLGZ1bmN0aW9uIGNhKGYpe2lmKCFkW2ZdKXt2YXIgaz1hLmdldEJpbmRpbmdIYW5kbGVyKGYpO2smJihrLmFmdGVyJiYoZS5wdXNoKGYpLGEuYS5EKGsuYWZ0ZXIsZnVuY3Rpb24oYyl7aWYoYltjXSl7aWYoLTEhPT1hLmEuQShlLGMpKXRocm93IEVycm9yKFwiQ2Fubm90IGNvbWJpbmUgdGhlIGZvbGxvd2luZyBiaW5kaW5ncywgYmVjYXVzZSB0aGV5IGhhdmUgYSBjeWNsaWMgZGVwZW5kZW5jeTogXCIrZS5qb2luKFwiLCBcIikpO1xuY2EoYyl9fSksZS5sZW5ndGgtLSksYy5wdXNoKHtrZXk6ZixNYzprfSkpO2RbZl09ITB9fSk7cmV0dXJuIGN9ZnVuY3Rpb24gcChiLGMsZCl7dmFyIGY9YS5hLmcuVWIoYix6LHt9KSxrPWYuaGQ7aWYoIWMpe2lmKGspdGhyb3cgRXJyb3IoXCJZb3UgY2Fubm90IGFwcGx5IGJpbmRpbmdzIG11bHRpcGxlIHRpbWVzIHRvIHRoZSBzYW1lIGVsZW1lbnQuXCIpO2YuaGQ9ITB9a3x8KGYuY29udGV4dD1kKTtmLlpifHwoZi5aYj17fSk7dmFyIGc7aWYoYyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGMpZz1jO2Vsc2V7dmFyIHA9YS5nYS5pbnN0YW5jZSxxPXAuZ2V0QmluZGluZ0FjY2Vzc29yc3x8aCxtPWEuJChmdW5jdGlvbigpe2lmKGc9Yz9jKGQsYik6cS5jYWxsKHAsYixkKSl7aWYoZFt0XSlkW3RdKCk7aWYoZFtCXSlkW0JdKCl9cmV0dXJuIGd9LG51bGwse2w6Yn0pO2cmJm0uamEoKXx8KG09bnVsbCl9dmFyIHg9ZCx1O2lmKGcpe3ZhciBKPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYS5HYShtP20oKTpcbmcsZSl9LHI9bT9mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZShtKClbYV0pfX06ZnVuY3Rpb24oYSl7cmV0dXJuIGdbYV19O0ouZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBnW2FdJiZlKHIoYSkpfTtKLmhhcz1mdW5jdGlvbihhKXtyZXR1cm4gYSBpbiBnfTthLmkuSCBpbiBnJiZhLmkuc3Vic2NyaWJlKGIsYS5pLkgsZnVuY3Rpb24oKXt2YXIgYz0oMCxnW2EuaS5IXSkoKTtpZihjKXt2YXIgZD1hLmguY2hpbGROb2RlcyhiKTtkLmxlbmd0aCYmYyhkLGEuRWMoZFswXSkpfX0pO2EuaS5wYSBpbiBnJiYoeD1hLmkuQ2IoYixkKSxhLmkuc3Vic2NyaWJlKGIsYS5pLnBhLGZ1bmN0aW9uKCl7dmFyIGM9KDAsZ1thLmkucGFdKSgpO2MmJmEuaC5maXJzdENoaWxkKGIpJiZjKGIpfSkpO2Y9bChnKTthLmEuRChmLGZ1bmN0aW9uKGMpe3ZhciBkPWMuTWMuaW5pdCxlPWMuTWMudXBkYXRlLGY9Yy5rZXk7aWYoOD09PWIubm9kZVR5cGUmJiFhLmguZWFbZl0pdGhyb3cgRXJyb3IoXCJUaGUgYmluZGluZyAnXCIrXG5mK1wiJyBjYW5ub3QgYmUgdXNlZCB3aXRoIHZpcnR1YWwgZWxlbWVudHNcIik7dHJ5e1wiZnVuY3Rpb25cIj09dHlwZW9mIGQmJmEudS5HKGZ1bmN0aW9uKCl7dmFyIGE9ZChiLHIoZiksSix4LiRkYXRhLHgpO2lmKGEmJmEuY29udHJvbHNEZXNjZW5kYW50QmluZGluZ3Mpe2lmKHUhPT1uKXRocm93IEVycm9yKFwiTXVsdGlwbGUgYmluZGluZ3MgKFwiK3UrXCIgYW5kIFwiK2YrXCIpIGFyZSB0cnlpbmcgdG8gY29udHJvbCBkZXNjZW5kYW50IGJpbmRpbmdzIG9mIHRoZSBzYW1lIGVsZW1lbnQuIFlvdSBjYW5ub3QgdXNlIHRoZXNlIGJpbmRpbmdzIHRvZ2V0aGVyIG9uIHRoZSBzYW1lIGVsZW1lbnQuXCIpO3U9Zn19KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZhLiQoZnVuY3Rpb24oKXtlKGIscihmKSxKLHguJGRhdGEseCl9LG51bGwse2w6Yn0pfWNhdGNoKGspe3Rocm93IGsubWVzc2FnZT0nVW5hYmxlIHRvIHByb2Nlc3MgYmluZGluZyBcIicrZitcIjogXCIrZ1tmXSsnXCJcXG5NZXNzYWdlOiAnK2subWVzc2FnZSxcbms7fX0pfWY9dT09PW47cmV0dXJue3Nob3VsZEJpbmREZXNjZW5kYW50czpmLGJpbmRpbmdDb250ZXh0Rm9yRGVzY2VuZGFudHM6ZiYmeH19ZnVuY3Rpb24gcShiLGMpe3JldHVybiBiJiZiIGluc3RhbmNlb2YgYS5mYT9iOm5ldyBhLmZhKGIsbixuLGMpfXZhciB0PWEuYS5EYShcIl9zdWJzY3JpYmFibGVcIikseD1hLmEuRGEoXCJfYW5jZXN0b3JCaW5kaW5nSW5mb1wiKSxCPWEuYS5EYShcIl9kYXRhRGVwZW5kZW5jeVwiKTthLmM9e307dmFyIHU9e3NjcmlwdDohMCx0ZXh0YXJlYTohMCx0ZW1wbGF0ZTohMH07YS5nZXRCaW5kaW5nSGFuZGxlcj1mdW5jdGlvbihiKXtyZXR1cm4gYS5jW2JdfTt2YXIgSj17fTthLmZhPWZ1bmN0aW9uKGIsYyxkLGUsZil7ZnVuY3Rpb24gaygpe3ZhciBiPXA/aCgpOmgsZj1hLmEuZihiKTtjPyhhLmEuZXh0ZW5kKGwsYykseCBpbiBjJiYobFt4XT1jW3hdKSk6KGwuJHBhcmVudHM9W10sbC4kcm9vdD1mLGwua289YSk7bFt0XT1xO2c/Zj1sLiRkYXRhOihsLiRyYXdEYXRhPVxuYixsLiRkYXRhPWYpO2QmJihsW2RdPWYpO2UmJmUobCxjLGYpO2lmKGMmJmNbdF0mJiFhLlMubygpLlZiKGNbdF0pKWNbdF0oKTttJiYobFtCXT1tKTtyZXR1cm4gbC4kZGF0YX12YXIgbD10aGlzLGc9Yj09PUosaD1nP246YixwPVwiZnVuY3Rpb25cIj09dHlwZW9mIGgmJiFhLk8oaCkscSxtPWYmJmYuZGF0YURlcGVuZGVuY3k7ZiYmZi5leHBvcnREZXBlbmRlbmNpZXM/aygpOihxPWEueGIoaykscS52KCkscS5qYSgpP3EuZXF1YWxpdHlDb21wYXJlcj1udWxsOmxbdF09bil9O2EuZmEucHJvdG90eXBlLmNyZWF0ZUNoaWxkQ29udGV4dD1mdW5jdGlvbihiLGMsZCxlKXshZSYmYyYmXCJvYmplY3RcIj09dHlwZW9mIGMmJihlPWMsYz1lLmFzLGQ9ZS5leHRlbmQpO2lmKGMmJmUmJmUubm9DaGlsZENvbnRleHQpe3ZhciBmPVwiZnVuY3Rpb25cIj09dHlwZW9mIGImJiFhLk8oYik7cmV0dXJuIG5ldyBhLmZhKEosdGhpcyxudWxsLGZ1bmN0aW9uKGEpe2QmJmQoYSk7YVtjXT1mP2IoKTpifSxlKX1yZXR1cm4gbmV3IGEuZmEoYixcbnRoaXMsYyxmdW5jdGlvbihhLGIpe2EuJHBhcmVudENvbnRleHQ9YjthLiRwYXJlbnQ9Yi4kZGF0YTthLiRwYXJlbnRzPShiLiRwYXJlbnRzfHxbXSkuc2xpY2UoMCk7YS4kcGFyZW50cy51bnNoaWZ0KGEuJHBhcmVudCk7ZCYmZChhKX0sZSl9O2EuZmEucHJvdG90eXBlLmV4dGVuZD1mdW5jdGlvbihiLGMpe3JldHVybiBuZXcgYS5mYShKLHRoaXMsbnVsbCxmdW5jdGlvbihjKXthLmEuZXh0ZW5kKGMsXCJmdW5jdGlvblwiPT10eXBlb2YgYj9iKGMpOmIpfSxjKX07dmFyIHo9YS5hLmcuWigpO2MucHJvdG90eXBlLlRjPWZ1bmN0aW9uKCl7dGhpcy5LYiYmdGhpcy5LYi5OJiZ0aGlzLktiLk4uc2QodGhpcy5ub2RlKX07Yy5wcm90b3R5cGUuc2Q9ZnVuY3Rpb24oYil7YS5hLlBhKHRoaXMua2IsYik7IXRoaXMua2IubGVuZ3RoJiZ0aGlzLkgmJnRoaXMuQ2MoKX07Yy5wcm90b3R5cGUuQ2M9ZnVuY3Rpb24oKXt0aGlzLkg9ITA7dGhpcy55Yy5OJiYhdGhpcy5rYi5sZW5ndGgmJih0aGlzLnljLk49XG5udWxsLGEuYS5LLnliKHRoaXMubm9kZSxiKSxhLmkubWEodGhpcy5ub2RlLGEuaS5wYSksdGhpcy5UYygpKX07YS5pPXtIOlwiY2hpbGRyZW5Db21wbGV0ZVwiLHBhOlwiZGVzY2VuZGFudHNDb21wbGV0ZVwiLHN1YnNjcmliZTpmdW5jdGlvbihiLGMsZCxlLGYpe3ZhciBrPWEuYS5nLlViKGIseix7fSk7ay5GYXx8KGsuRmE9bmV3IGEuVCk7ZiYmZi5ub3RpZnlJbW1lZGlhdGVseSYmay5aYltjXSYmYS51LkcoZCxlLFtiXSk7cmV0dXJuIGsuRmEuc3Vic2NyaWJlKGQsZSxjKX0sbWE6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZy5nZXQoYix6KTtpZihkJiYoZC5aYltjXT0hMCxkLkZhJiZkLkZhLm5vdGlmeVN1YnNjcmliZXJzKGIsYyksYz09YS5pLkgpKWlmKGQuTilkLk4uQ2MoKTtlbHNlIGlmKGQuTj09PW4mJmQuRmEmJmQuRmEuV2EoYS5pLnBhKSl0aHJvdyBFcnJvcihcImRlc2NlbmRhbnRzQ29tcGxldGUgZXZlbnQgbm90IHN1cHBvcnRlZCBmb3IgYmluZGluZ3Mgb24gdGhpcyBub2RlXCIpO1xufSxDYjpmdW5jdGlvbihiLGQpe3ZhciBlPWEuYS5nLlViKGIseix7fSk7ZS5OfHwoZS5OPW5ldyBjKGIsZSxkW3hdKSk7cmV0dXJuIGRbeF09PWU/ZDpkLmV4dGVuZChmdW5jdGlvbihhKXthW3hdPWV9KX19O2EuVGQ9ZnVuY3Rpb24oYil7cmV0dXJuKGI9YS5hLmcuZ2V0KGIseikpJiZiLmNvbnRleHR9O2EuaWI9ZnVuY3Rpb24oYixjLGQpezE9PT1iLm5vZGVUeXBlJiZhLmguU2MoYik7cmV0dXJuIHAoYixjLHEoZCkpfTthLmxkPWZ1bmN0aW9uKGIsYyxkKXtkPXEoZCk7cmV0dXJuIGEuaWIoYixnKGMsZCxiKSxkKX07YS5PYT1mdW5jdGlvbihhLGIpezEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZXx8bShxKGEpLGIpfTthLnZjPWZ1bmN0aW9uKGEsYixjKXshdiYmQS5qUXVlcnkmJih2PUEualF1ZXJ5KTtpZigyPmFyZ3VtZW50cy5sZW5ndGgpe2lmKGI9dy5ib2R5LCFiKXRocm93IEVycm9yKFwia28uYXBwbHlCaW5kaW5nczogY291bGQgbm90IGZpbmQgZG9jdW1lbnQuYm9keTsgaGFzIHRoZSBkb2N1bWVudCBiZWVuIGxvYWRlZD9cIik7XG59ZWxzZSBpZighYnx8MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlKXRocm93IEVycm9yKFwia28uYXBwbHlCaW5kaW5nczogZmlyc3QgcGFyYW1ldGVyIHNob3VsZCBiZSB5b3VyIHZpZXcgbW9kZWw7IHNlY29uZCBwYXJhbWV0ZXIgc2hvdWxkIGJlIGEgRE9NIG5vZGVcIik7ayhxKGEsYyksYil9O2EuRGM9ZnVuY3Rpb24oYil7cmV0dXJuIWJ8fDEhPT1iLm5vZGVUeXBlJiY4IT09Yi5ub2RlVHlwZT9uOmEuVGQoYil9O2EuRWM9ZnVuY3Rpb24oYil7cmV0dXJuKGI9YS5EYyhiKSk/Yi4kZGF0YTpufTthLmIoXCJiaW5kaW5nSGFuZGxlcnNcIixhLmMpO2EuYihcImJpbmRpbmdFdmVudFwiLGEuaSk7YS5iKFwiYmluZGluZ0V2ZW50LnN1YnNjcmliZVwiLGEuaS5zdWJzY3JpYmUpO2EuYihcImJpbmRpbmdFdmVudC5zdGFydFBvc3NpYmx5QXN5bmNDb250ZW50QmluZGluZ1wiLGEuaS5DYik7YS5iKFwiYXBwbHlCaW5kaW5nc1wiLGEudmMpO2EuYihcImFwcGx5QmluZGluZ3NUb0Rlc2NlbmRhbnRzXCIsYS5PYSk7XG5hLmIoXCJhcHBseUJpbmRpbmdBY2Nlc3NvcnNUb05vZGVcIixhLmliKTthLmIoXCJhcHBseUJpbmRpbmdzVG9Ob2RlXCIsYS5sZCk7YS5iKFwiY29udGV4dEZvclwiLGEuRGMpO2EuYihcImRhdGFGb3JcIixhLkVjKX0pKCk7KGZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoYyxlKXt2YXIgaz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZixjKT9mW2NdOmIsbDtrP2suc3Vic2NyaWJlKGUpOihrPWZbY109bmV3IGEuVCxrLnN1YnNjcmliZShlKSxkKGMsZnVuY3Rpb24oYixkKXt2YXIgZT0hKCFkfHwhZC5zeW5jaHJvbm91cyk7Z1tjXT17ZGVmaW5pdGlvbjpiLEdkOmV9O2RlbGV0ZSBmW2NdO2x8fGU/ay5ub3RpZnlTdWJzY3JpYmVycyhiKTphLm5hLnpiKGZ1bmN0aW9uKCl7ay5ub3RpZnlTdWJzY3JpYmVycyhiKX0pfSksbD0hMCl9ZnVuY3Rpb24gZChhLGIpe2UoXCJnZXRDb25maWdcIixbYV0sZnVuY3Rpb24oYyl7Yz9lKFwibG9hZENvbXBvbmVudFwiLFthLGNdLGZ1bmN0aW9uKGEpe2IoYSxcbmMpfSk6YihudWxsLG51bGwpfSl9ZnVuY3Rpb24gZShjLGQsZixsKXtsfHwobD1hLmoubG9hZGVycy5zbGljZSgwKSk7dmFyIGc9bC5zaGlmdCgpO2lmKGcpe3ZhciBxPWdbY107aWYocSl7dmFyIHQ9ITE7aWYocS5hcHBseShnLGQuY29uY2F0KGZ1bmN0aW9uKGEpe3Q/ZihudWxsKTpudWxsIT09YT9mKGEpOmUoYyxkLGYsbCl9KSkhPT1iJiYodD0hMCwhZy5zdXBwcmVzc0xvYWRlckV4Y2VwdGlvbnMpKXRocm93IEVycm9yKFwiQ29tcG9uZW50IGxvYWRlcnMgbXVzdCBzdXBwbHkgdmFsdWVzIGJ5IGludm9raW5nIHRoZSBjYWxsYmFjaywgbm90IGJ5IHJldHVybmluZyB2YWx1ZXMgc3luY2hyb25vdXNseS5cIik7fWVsc2UgZShjLGQsZixsKX1lbHNlIGYobnVsbCl9dmFyIGY9e30sZz17fTthLmo9e2dldDpmdW5jdGlvbihkLGUpe3ZhciBmPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChnLGQpP2dbZF06YjtmP2YuR2Q/YS51LkcoZnVuY3Rpb24oKXtlKGYuZGVmaW5pdGlvbil9KTpcbmEubmEuemIoZnVuY3Rpb24oKXtlKGYuZGVmaW5pdGlvbil9KTpjKGQsZSl9LEJjOmZ1bmN0aW9uKGEpe2RlbGV0ZSBnW2FdfSxvYzplfTthLmoubG9hZGVycz1bXTthLmIoXCJjb21wb25lbnRzXCIsYS5qKTthLmIoXCJjb21wb25lbnRzLmdldFwiLGEuai5nZXQpO2EuYihcImNvbXBvbmVudHMuY2xlYXJDYWNoZWREZWZpbml0aW9uXCIsYS5qLkJjKX0pKCk7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCxlKXtmdW5jdGlvbiBnKCl7MD09PS0tQiYmZShoKX12YXIgaD17fSxCPTIsdT1kLnRlbXBsYXRlO2Q9ZC52aWV3TW9kZWw7dT9mKGMsdSxmdW5jdGlvbihjKXthLmoub2MoXCJsb2FkVGVtcGxhdGVcIixbYixjXSxmdW5jdGlvbihhKXtoLnRlbXBsYXRlPWE7ZygpfSl9KTpnKCk7ZD9mKGMsZCxmdW5jdGlvbihjKXthLmoub2MoXCJsb2FkVmlld01vZGVsXCIsW2IsY10sZnVuY3Rpb24oYSl7aFttXT1hO2coKX0pfSk6ZygpfWZ1bmN0aW9uIGMoYSxiLGQpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKWQoZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBiKGEpfSk7XG5lbHNlIGlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiW21dKWQoYlttXSk7ZWxzZSBpZihcImluc3RhbmNlXCJpbiBiKXt2YXIgZT1iLmluc3RhbmNlO2QoZnVuY3Rpb24oKXtyZXR1cm4gZX0pfWVsc2VcInZpZXdNb2RlbFwiaW4gYj9jKGEsYi52aWV3TW9kZWwsZCk6YShcIlVua25vd24gdmlld01vZGVsIHZhbHVlOiBcIitiKX1mdW5jdGlvbiBkKGIpe3N3aXRjaChhLmEuUihiKSl7Y2FzZSBcInNjcmlwdFwiOnJldHVybiBhLmEudWEoYi50ZXh0KTtjYXNlIFwidGV4dGFyZWFcIjpyZXR1cm4gYS5hLnVhKGIudmFsdWUpO2Nhc2UgXCJ0ZW1wbGF0ZVwiOmlmKGUoYi5jb250ZW50KSlyZXR1cm4gYS5hLkNhKGIuY29udGVudC5jaGlsZE5vZGVzKX1yZXR1cm4gYS5hLkNhKGIuY2hpbGROb2Rlcyl9ZnVuY3Rpb24gZShhKXtyZXR1cm4gQS5Eb2N1bWVudEZyYWdtZW50P2EgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50OmEmJjExPT09YS5ub2RlVHlwZX1mdW5jdGlvbiBmKGEsYixjKXtcInN0cmluZ1wiPT09dHlwZW9mIGIucmVxdWlyZT9cblR8fEEucmVxdWlyZT8oVHx8QS5yZXF1aXJlKShbYi5yZXF1aXJlXSxmdW5jdGlvbihhKXthJiZcIm9iamVjdFwiPT09dHlwZW9mIGEmJmEuWGQmJmFbXCJkZWZhdWx0XCJdJiYoYT1hW1wiZGVmYXVsdFwiXSk7YyhhKX0pOmEoXCJVc2VzIHJlcXVpcmUsIGJ1dCBubyBBTUQgbG9hZGVyIGlzIHByZXNlbnRcIik6YyhiKX1mdW5jdGlvbiBnKGEpe3JldHVybiBmdW5jdGlvbihiKXt0aHJvdyBFcnJvcihcIkNvbXBvbmVudCAnXCIrYStcIic6IFwiK2IpO319dmFyIGg9e307YS5qLnJlZ2lzdGVyPWZ1bmN0aW9uKGIsYyl7aWYoIWMpdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGNvbmZpZ3VyYXRpb24gZm9yIFwiK2IpO2lmKGEuai50YihiKSl0aHJvdyBFcnJvcihcIkNvbXBvbmVudCBcIitiK1wiIGlzIGFscmVhZHkgcmVnaXN0ZXJlZFwiKTtoW2JdPWN9O2Euai50Yj1mdW5jdGlvbihhKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGgsYSl9O2Euai51bnJlZ2lzdGVyPWZ1bmN0aW9uKGIpe2RlbGV0ZSBoW2JdO1xuYS5qLkJjKGIpfTthLmouRmM9e2dldENvbmZpZzpmdW5jdGlvbihiLGMpe2MoYS5qLnRiKGIpP2hbYl06bnVsbCl9LGxvYWRDb21wb25lbnQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlPWcoYSk7ZihlLGMsZnVuY3Rpb24oYyl7YihhLGUsYyxkKX0pfSxsb2FkVGVtcGxhdGU6ZnVuY3Rpb24oYixjLGYpe2I9ZyhiKTtpZihcInN0cmluZ1wiPT09dHlwZW9mIGMpZihhLmEudWEoYykpO2Vsc2UgaWYoYyBpbnN0YW5jZW9mIEFycmF5KWYoYyk7ZWxzZSBpZihlKGMpKWYoYS5hLmxhKGMuY2hpbGROb2RlcykpO2Vsc2UgaWYoYy5lbGVtZW50KWlmKGM9Yy5lbGVtZW50LEEuSFRNTEVsZW1lbnQ/YyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50OmMmJmMudGFnTmFtZSYmMT09PWMubm9kZVR5cGUpZihkKGMpKTtlbHNlIGlmKFwic3RyaW5nXCI9PT10eXBlb2YgYyl7dmFyIGg9dy5nZXRFbGVtZW50QnlJZChjKTtoP2YoZChoKSk6YihcIkNhbm5vdCBmaW5kIGVsZW1lbnQgd2l0aCBJRCBcIitjKX1lbHNlIGIoXCJVbmtub3duIGVsZW1lbnQgdHlwZTogXCIrXG5jKTtlbHNlIGIoXCJVbmtub3duIHRlbXBsYXRlIHZhbHVlOiBcIitjKX0sbG9hZFZpZXdNb2RlbDpmdW5jdGlvbihhLGIsZCl7YyhnKGEpLGIsZCl9fTt2YXIgbT1cImNyZWF0ZVZpZXdNb2RlbFwiO2EuYihcImNvbXBvbmVudHMucmVnaXN0ZXJcIixhLmoucmVnaXN0ZXIpO2EuYihcImNvbXBvbmVudHMuaXNSZWdpc3RlcmVkXCIsYS5qLnRiKTthLmIoXCJjb21wb25lbnRzLnVucmVnaXN0ZXJcIixhLmoudW5yZWdpc3Rlcik7YS5iKFwiY29tcG9uZW50cy5kZWZhdWx0TG9hZGVyXCIsYS5qLkZjKTthLmoubG9hZGVycy5wdXNoKGEuai5GYyk7YS5qLmRkPWh9KSgpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixlKXt2YXIgZj1iLmdldEF0dHJpYnV0ZShcInBhcmFtc1wiKTtpZihmKXt2YXIgZj1jLnBhcnNlQmluZGluZ3NTdHJpbmcoZixlLGIse3ZhbHVlQWNjZXNzb3JzOiEwLGJpbmRpbmdQYXJhbXM6ITB9KSxmPWEuYS5HYShmLGZ1bmN0aW9uKGMpe3JldHVybiBhLm8oYyxudWxsLHtsOmJ9KX0pLGc9YS5hLkdhKGYsXG5mdW5jdGlvbihjKXt2YXIgZT1jLnYoKTtyZXR1cm4gYy5qYSgpP2Eubyh7cmVhZDpmdW5jdGlvbigpe3JldHVybiBhLmEuZihjKCkpfSx3cml0ZTphLlphKGUpJiZmdW5jdGlvbihhKXtjKCkoYSl9LGw6Yn0pOmV9KTtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZyxcIiRyYXdcIil8fChnLiRyYXc9Zik7cmV0dXJuIGd9cmV0dXJueyRyYXc6e319fWEuai5nZXRDb21wb25lbnROYW1lRm9yTm9kZT1mdW5jdGlvbihiKXt2YXIgYz1hLmEuUihiKTtpZihhLmoudGIoYykmJigtMSE9Yy5pbmRleE9mKFwiLVwiKXx8XCJbb2JqZWN0IEhUTUxVbmtub3duRWxlbWVudF1cIj09XCJcIitifHw4Pj1hLmEuVyYmYi50YWdOYW1lPT09YykpcmV0dXJuIGN9O2Euai50Yz1mdW5jdGlvbihjLGUsZixnKXtpZigxPT09ZS5ub2RlVHlwZSl7dmFyIGg9YS5qLmdldENvbXBvbmVudE5hbWVGb3JOb2RlKGUpO2lmKGgpe2M9Y3x8e307aWYoYy5jb21wb25lbnQpdGhyb3cgRXJyb3IoJ0Nhbm5vdCB1c2UgdGhlIFwiY29tcG9uZW50XCIgYmluZGluZyBvbiBhIGN1c3RvbSBlbGVtZW50IG1hdGNoaW5nIGEgY29tcG9uZW50Jyk7XG52YXIgbT17bmFtZTpoLHBhcmFtczpiKGUsZil9O2MuY29tcG9uZW50PWc/ZnVuY3Rpb24oKXtyZXR1cm4gbX06bX19cmV0dXJuIGN9O3ZhciBjPW5ldyBhLmdhOzk+YS5hLlcmJihhLmoucmVnaXN0ZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KGEuai5yZWdpc3Rlciksdy5jcmVhdGVEb2N1bWVudEZyYWdtZW50PWZ1bmN0aW9uKGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBjPWIoKSxmPWEuai5kZCxnO2ZvcihnIGluIGYpO3JldHVybiBjfX0ody5jcmVhdGVEb2N1bWVudEZyYWdtZW50KSl9KSgpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGQpe2M9Yy50ZW1wbGF0ZTtpZighYyl0aHJvdyBFcnJvcihcIkNvbXBvbmVudCAnXCIrYitcIicgaGFzIG5vIHRlbXBsYXRlXCIpO2I9YS5hLkNhKGMpO2EuaC52YShkLGIpfWZ1bmN0aW9uIGMoYSxiLGMpe3ZhciBkPWEuY3JlYXRlVmlld01vZGVsO3JldHVybiBkP2QuY2FsbChhLFxuYixjKTpifXZhciBkPTA7YS5jLmNvbXBvbmVudD17aW5pdDpmdW5jdGlvbihlLGYsZyxoLG0pe2Z1bmN0aW9uIGsoKXt2YXIgYT1sJiZsLmRpc3Bvc2U7XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJmEuY2FsbChsKTtxJiZxLnMoKTtwPWw9cT1udWxsfXZhciBsLHAscSx0PWEuYS5sYShhLmguY2hpbGROb2RlcyhlKSk7YS5oLkVhKGUpO2EuYS5LLnphKGUsayk7YS5vKGZ1bmN0aW9uKCl7dmFyIGc9YS5hLmYoZigpKSxoLHU7XCJzdHJpbmdcIj09PXR5cGVvZiBnP2g9ZzooaD1hLmEuZihnLm5hbWUpLHU9YS5hLmYoZy5wYXJhbXMpKTtpZighaCl0aHJvdyBFcnJvcihcIk5vIGNvbXBvbmVudCBuYW1lIHNwZWNpZmllZFwiKTt2YXIgbj1hLmkuQ2IoZSxtKSx6PXA9KytkO2Euai5nZXQoaCxmdW5jdGlvbihkKXtpZihwPT09eil7aygpO2lmKCFkKXRocm93IEVycm9yKFwiVW5rbm93biBjb21wb25lbnQgJ1wiK2grXCInXCIpO2IoaCxkLGUpO3ZhciBmPWMoZCx1LHtlbGVtZW50OmUsdGVtcGxhdGVOb2Rlczp0fSk7XG5kPW4uY3JlYXRlQ2hpbGRDb250ZXh0KGYse2V4dGVuZDpmdW5jdGlvbihhKXthLiRjb21wb25lbnQ9ZjthLiRjb21wb25lbnRUZW1wbGF0ZU5vZGVzPXR9fSk7ZiYmZi5rb0Rlc2NlbmRhbnRzQ29tcGxldGUmJihxPWEuaS5zdWJzY3JpYmUoZSxhLmkucGEsZi5rb0Rlc2NlbmRhbnRzQ29tcGxldGUsZikpO2w9ZjthLk9hKGQsZSl9fSl9LG51bGwse2w6ZX0pO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19fTthLmguZWEuY29tcG9uZW50PSEwfSkoKTt2YXIgVj17XCJjbGFzc1wiOlwiY2xhc3NOYW1lXCIsXCJmb3JcIjpcImh0bWxGb3JcIn07YS5jLmF0dHI9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5mKGMoKSl8fHt9O2EuYS5QKGQsZnVuY3Rpb24oYyxkKXtkPWEuYS5mKGQpO3ZhciBnPWMuaW5kZXhPZihcIjpcIiksZz1cImxvb2t1cE5hbWVzcGFjZVVSSVwiaW4gYiYmMDxnJiZiLmxvb2t1cE5hbWVzcGFjZVVSSShjLnN1YnN0cigwLGcpKSxoPSExPT09ZHx8bnVsbD09PVxuZHx8ZD09PW47aD9nP2IucmVtb3ZlQXR0cmlidXRlTlMoZyxjKTpiLnJlbW92ZUF0dHJpYnV0ZShjKTpkPWQudG9TdHJpbmcoKTs4Pj1hLmEuVyYmYyBpbiBWPyhjPVZbY10saD9iLnJlbW92ZUF0dHJpYnV0ZShjKTpiW2NdPWQpOmh8fChnP2Iuc2V0QXR0cmlidXRlTlMoZyxjLGQpOmIuc2V0QXR0cmlidXRlKGMsZCkpO1wibmFtZVwiPT09YyYmYS5hLlljKGIsaD9cIlwiOmQpfSl9fTsoZnVuY3Rpb24oKXthLmMuY2hlY2tlZD17YWZ0ZXI6W1widmFsdWVcIixcImF0dHJcIl0saW5pdDpmdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZSgpe3ZhciBlPWIuY2hlY2tlZCxmPWcoKTtpZighYS5TLllhKCkmJihlfHwhbSYmIWEuUy5xYSgpKSl7dmFyIGs9YS51LkcoYyk7aWYobCl7dmFyIHE9cD9rLnYoKTprLHo9dDt0PWY7eiE9PWY/ZSYmKGEuYS5OYShxLGYsITApLGEuYS5OYShxLHosITEpKTphLmEuTmEocSxmLGUpO3AmJmEuWmEoaykmJmsocSl9ZWxzZSBoJiYoZj09PW4/Zj1lOmV8fChmPW4pKSxhLm0uZWIoayxcbmQsXCJjaGVja2VkXCIsZiwhMCl9fWZ1bmN0aW9uIGYoKXt2YXIgZD1hLmEuZihjKCkpLGU9ZygpO2w/KGIuY2hlY2tlZD0wPD1hLmEuQShkLGUpLHQ9ZSk6Yi5jaGVja2VkPWgmJmU9PT1uPyEhZDpnKCk9PT1kfXZhciBnPWEueGIoZnVuY3Rpb24oKXtpZihkLmhhcyhcImNoZWNrZWRWYWx1ZVwiKSlyZXR1cm4gYS5hLmYoZC5nZXQoXCJjaGVja2VkVmFsdWVcIikpO2lmKHEpcmV0dXJuIGQuaGFzKFwidmFsdWVcIik/YS5hLmYoZC5nZXQoXCJ2YWx1ZVwiKSk6Yi52YWx1ZX0pLGg9XCJjaGVja2JveFwiPT1iLnR5cGUsbT1cInJhZGlvXCI9PWIudHlwZTtpZihofHxtKXt2YXIgaz1jKCksbD1oJiZhLmEuZihrKWluc3RhbmNlb2YgQXJyYXkscD0hKGwmJmsucHVzaCYmay5zcGxpY2UpLHE9bXx8bCx0PWw/ZygpOm47bSYmIWIubmFtZSYmYS5jLnVuaXF1ZU5hbWUuaW5pdChiLGZ1bmN0aW9uKCl7cmV0dXJuITB9KTthLm8oZSxudWxsLHtsOmJ9KTthLmEuQihiLFwiY2xpY2tcIixlKTthLm8oZixudWxsLHtsOmJ9KTtcbms9bn19fTthLm0ud2EuY2hlY2tlZD0hMDthLmMuY2hlY2tlZFZhbHVlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXtiLnZhbHVlPWEuYS5mKGMoKSl9fX0pKCk7YS5jW1wiY2xhc3NcIl09e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5EYihhLmEuZihjKCkpKTthLmEuRWIoYixiLl9fa29fX2Nzc1ZhbHVlLCExKTtiLl9fa29fX2Nzc1ZhbHVlPWQ7YS5hLkViKGIsZCwhMCl9fTthLmMuY3NzPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZihjKCkpO251bGwhPT1kJiZcIm9iamVjdFwiPT10eXBlb2YgZD9hLmEuUChkLGZ1bmN0aW9uKGMsZCl7ZD1hLmEuZihkKTthLmEuRWIoYixjLGQpfSk6YS5jW1wiY2xhc3NcIl0udXBkYXRlKGIsYyl9fTthLmMuZW5hYmxlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZihjKCkpO2QmJmIuZGlzYWJsZWQ/Yi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTpkfHxiLmRpc2FibGVkfHwoYi5kaXNhYmxlZD0hMCl9fTthLmMuZGlzYWJsZT1cbnt1cGRhdGU6ZnVuY3Rpb24oYixjKXthLmMuZW5hYmxlLnVwZGF0ZShiLGZ1bmN0aW9uKCl7cmV0dXJuIWEuYS5mKGMoKSl9KX19O2EuYy5ldmVudD17aW5pdDpmdW5jdGlvbihiLGMsZCxlLGYpe3ZhciBnPWMoKXx8e307YS5hLlAoZyxmdW5jdGlvbihnKXtcInN0cmluZ1wiPT10eXBlb2YgZyYmYS5hLkIoYixnLGZ1bmN0aW9uKGIpe3ZhciBrLGw9YygpW2ddO2lmKGwpe3RyeXt2YXIgcD1hLmEubGEoYXJndW1lbnRzKTtlPWYuJGRhdGE7cC51bnNoaWZ0KGUpO2s9bC5hcHBseShlLHApfWZpbmFsbHl7ITAhPT1rJiYoYi5wcmV2ZW50RGVmYXVsdD9iLnByZXZlbnREZWZhdWx0KCk6Yi5yZXR1cm5WYWx1ZT0hMSl9ITE9PT1kLmdldChnK1wiQnViYmxlXCIpJiYoYi5jYW5jZWxCdWJibGU9ITAsYi5zdG9wUHJvcGFnYXRpb24mJmIuc3RvcFByb3BhZ2F0aW9uKCkpfX0pfSl9fTthLmMuZm9yZWFjaD17UmM6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9YigpLGQ9YS5hLmJjKGMpO1xuaWYoIWR8fFwibnVtYmVyXCI9PXR5cGVvZiBkLmxlbmd0aClyZXR1cm57Zm9yZWFjaDpjLHRlbXBsYXRlRW5naW5lOmEuYmEuTWF9O2EuYS5mKGMpO3JldHVybntmb3JlYWNoOmQuZGF0YSxhczpkLmFzLG5vQ2hpbGRDb250ZXh0OmQubm9DaGlsZENvbnRleHQsaW5jbHVkZURlc3Ryb3llZDpkLmluY2x1ZGVEZXN0cm95ZWQsYWZ0ZXJBZGQ6ZC5hZnRlckFkZCxiZWZvcmVSZW1vdmU6ZC5iZWZvcmVSZW1vdmUsYWZ0ZXJSZW5kZXI6ZC5hZnRlclJlbmRlcixiZWZvcmVNb3ZlOmQuYmVmb3JlTW92ZSxhZnRlck1vdmU6ZC5hZnRlck1vdmUsdGVtcGxhdGVFbmdpbmU6YS5iYS5NYX19fSxpbml0OmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuYy50ZW1wbGF0ZS5pbml0KGIsYS5jLmZvcmVhY2guUmMoYykpfSx1cGRhdGU6ZnVuY3Rpb24oYixjLGQsZSxmKXtyZXR1cm4gYS5jLnRlbXBsYXRlLnVwZGF0ZShiLGEuYy5mb3JlYWNoLlJjKGMpLGQsZSxmKX19O2EubS5SYS5mb3JlYWNoPSExO2EuaC5lYS5mb3JlYWNoPVxuITA7YS5jLmhhc2ZvY3VzPXtpbml0OmZ1bmN0aW9uKGIsYyxkKXtmdW5jdGlvbiBlKGUpe2IuX19rb19oYXNmb2N1c1VwZGF0aW5nPSEwO3ZhciBmPWIub3duZXJEb2N1bWVudDtpZihcImFjdGl2ZUVsZW1lbnRcImluIGYpe3ZhciBnO3RyeXtnPWYuYWN0aXZlRWxlbWVudH1jYXRjaChsKXtnPWYuYm9keX1lPWc9PT1ifWY9YygpO2EubS5lYihmLGQsXCJoYXNmb2N1c1wiLGUsITApO2IuX19rb19oYXNmb2N1c0xhc3RWYWx1ZT1lO2IuX19rb19oYXNmb2N1c1VwZGF0aW5nPSExfXZhciBmPWUuYmluZChudWxsLCEwKSxnPWUuYmluZChudWxsLCExKTthLmEuQihiLFwiZm9jdXNcIixmKTthLmEuQihiLFwiZm9jdXNpblwiLGYpO2EuYS5CKGIsXCJibHVyXCIsZyk7YS5hLkIoYixcImZvY3Vzb3V0XCIsZyk7Yi5fX2tvX2hhc2ZvY3VzTGFzdFZhbHVlPSExfSx1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD0hIWEuYS5mKGMoKSk7Yi5fX2tvX2hhc2ZvY3VzVXBkYXRpbmd8fGIuX19rb19oYXNmb2N1c0xhc3RWYWx1ZT09PVxuZHx8KGQ/Yi5mb2N1cygpOmIuYmx1cigpLCFkJiZiLl9fa29faGFzZm9jdXNMYXN0VmFsdWUmJmIub3duZXJEb2N1bWVudC5ib2R5LmZvY3VzKCksYS51LkcoYS5hLkZiLG51bGwsW2IsZD9cImZvY3VzaW5cIjpcImZvY3Vzb3V0XCJdKSl9fTthLm0ud2EuaGFzZm9jdXM9ITA7YS5jLmhhc0ZvY3VzPWEuYy5oYXNmb2N1czthLm0ud2EuaGFzRm9jdXM9XCJoYXNmb2N1c1wiO2EuYy5odG1sPXtpbml0OmZ1bmN0aW9uKCl7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyl7YS5hLmZjKGIsYygpKX19OyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkLGUpe2EuY1tiXT17aW5pdDpmdW5jdGlvbihiLGMsaCxtLGspe3ZhciBsLHAscT17fSx0LHgsbjtpZihkKXttPWguZ2V0KFwiYXNcIik7dmFyIHU9aC5nZXQoXCJub0NoaWxkQ29udGV4dFwiKTtuPSEobSYmdSk7cT17YXM6bSxub0NoaWxkQ29udGV4dDp1LGV4cG9ydERlcGVuZGVuY2llczpufX14PSh0PVxuXCJyZW5kZXJcIj09aC5nZXQoXCJjb21wbGV0ZU9uXCIpKXx8aC5oYXMoYS5pLnBhKTthLm8oZnVuY3Rpb24oKXt2YXIgaD1hLmEuZihjKCkpLG09IWUhPT0haCx1PSFwLHI7aWYobnx8bSE9PWwpe3gmJihrPWEuaS5DYihiLGspKTtpZihtKXtpZighZHx8bilxLmRhdGFEZXBlbmRlbmN5PWEuUy5vKCk7cj1kP2suY3JlYXRlQ2hpbGRDb250ZXh0KFwiZnVuY3Rpb25cIj09dHlwZW9mIGg/aDpjLHEpOmEuUy5xYSgpP2suZXh0ZW5kKG51bGwscSk6a311JiZhLlMucWEoKSYmKHA9YS5hLkNhKGEuaC5jaGlsZE5vZGVzKGIpLCEwKSk7bT8odXx8YS5oLnZhKGIsYS5hLkNhKHApKSxhLk9hKHIsYikpOihhLmguRWEoYiksdHx8YS5pLm1hKGIsYS5pLkgpKTtsPW19fSxudWxsLHtsOmJ9KTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fX07YS5tLlJhW2JdPSExO2EuaC5lYVtiXT0hMH1iKFwiaWZcIik7YihcImlmbm90XCIsITEsITApO2IoXCJ3aXRoXCIsITApfSkoKTthLmMubGV0PXtpbml0OmZ1bmN0aW9uKGIsXG5jLGQsZSxmKXtjPWYuZXh0ZW5kKGMpO2EuT2EoYyxiKTtyZXR1cm57Y29udHJvbHNEZXNjZW5kYW50QmluZGluZ3M6ITB9fX07YS5oLmVhLmxldD0hMDt2YXIgUT17fTthLmMub3B0aW9ucz17aW5pdDpmdW5jdGlvbihiKXtpZihcInNlbGVjdFwiIT09YS5hLlIoYikpdGhyb3cgRXJyb3IoXCJvcHRpb25zIGJpbmRpbmcgYXBwbGllcyBvbmx5IHRvIFNFTEVDVCBlbGVtZW50c1wiKTtmb3IoOzA8Yi5sZW5ndGg7KWIucmVtb3ZlKDApO3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19LHVwZGF0ZTpmdW5jdGlvbihiLGMsZCl7ZnVuY3Rpb24gZSgpe3JldHVybiBhLmEuamIoYi5vcHRpb25zLGZ1bmN0aW9uKGEpe3JldHVybiBhLnNlbGVjdGVkfSl9ZnVuY3Rpb24gZihhLGIsYyl7dmFyIGQ9dHlwZW9mIGI7cmV0dXJuXCJmdW5jdGlvblwiPT1kP2IoYSk6XCJzdHJpbmdcIj09ZD9hW2JdOmN9ZnVuY3Rpb24gZyhjLGQpe2lmKHgmJmwpYS5pLm1hKGIsYS5pLkgpO2Vsc2UgaWYodC5sZW5ndGgpe3ZhciBlPVxuMDw9YS5hLkEodCxhLncuTShkWzBdKSk7YS5hLlpjKGRbMF0sZSk7eCYmIWUmJmEudS5HKGEuYS5GYixudWxsLFtiLFwiY2hhbmdlXCJdKX19dmFyIGg9Yi5tdWx0aXBsZSxtPTAhPWIubGVuZ3RoJiZoP2Iuc2Nyb2xsVG9wOm51bGwsaz1hLmEuZihjKCkpLGw9ZC5nZXQoXCJ2YWx1ZUFsbG93VW5zZXRcIikmJmQuaGFzKFwidmFsdWVcIikscD1kLmdldChcIm9wdGlvbnNJbmNsdWRlRGVzdHJveWVkXCIpO2M9e307dmFyIHEsdD1bXTtsfHwoaD90PWEuYS5NYihlKCksYS53Lk0pOjA8PWIuc2VsZWN0ZWRJbmRleCYmdC5wdXNoKGEudy5NKGIub3B0aW9uc1tiLnNlbGVjdGVkSW5kZXhdKSkpO2smJihcInVuZGVmaW5lZFwiPT10eXBlb2Ygay5sZW5ndGgmJihrPVtrXSkscT1hLmEuamIoayxmdW5jdGlvbihiKXtyZXR1cm4gcHx8Yj09PW58fG51bGw9PT1ifHwhYS5hLmYoYi5fZGVzdHJveSl9KSxkLmhhcyhcIm9wdGlvbnNDYXB0aW9uXCIpJiYoaz1hLmEuZihkLmdldChcIm9wdGlvbnNDYXB0aW9uXCIpKSxudWxsIT09XG5rJiZrIT09biYmcS51bnNoaWZ0KFEpKSk7dmFyIHg9ITE7Yy5iZWZvcmVSZW1vdmU9ZnVuY3Rpb24oYSl7Yi5yZW1vdmVDaGlsZChhKX07az1nO2QuaGFzKFwib3B0aW9uc0FmdGVyUmVuZGVyXCIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkLmdldChcIm9wdGlvbnNBZnRlclJlbmRlclwiKSYmKGs9ZnVuY3Rpb24oYixjKXtnKDAsYyk7YS51LkcoZC5nZXQoXCJvcHRpb25zQWZ0ZXJSZW5kZXJcIiksbnVsbCxbY1swXSxiIT09UT9iOm5dKX0pO2EuYS5lYyhiLHEsZnVuY3Rpb24oYyxlLGcpe2cubGVuZ3RoJiYodD0hbCYmZ1swXS5zZWxlY3RlZD9bYS53Lk0oZ1swXSldOltdLHg9ITApO2U9Yi5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7Yz09PVE/KGEuYS5CYihlLGQuZ2V0KFwib3B0aW9uc0NhcHRpb25cIikpLGEudy5jYihlLG4pKTooZz1mKGMsZC5nZXQoXCJvcHRpb25zVmFsdWVcIiksYyksYS53LmNiKGUsYS5hLmYoZykpLGM9ZihjLGQuZ2V0KFwib3B0aW9uc1RleHRcIiksZyksXG5hLmEuQmIoZSxjKSk7cmV0dXJuW2VdfSxjLGspO2lmKCFsKXt2YXIgQjtoP0I9dC5sZW5ndGgmJmUoKS5sZW5ndGg8dC5sZW5ndGg6Qj10Lmxlbmd0aCYmMDw9Yi5zZWxlY3RlZEluZGV4P2Eudy5NKGIub3B0aW9uc1tiLnNlbGVjdGVkSW5kZXhdKSE9PXRbMF06dC5sZW5ndGh8fDA8PWIuc2VsZWN0ZWRJbmRleDtCJiZhLnUuRyhhLmEuRmIsbnVsbCxbYixcImNoYW5nZVwiXSl9KGx8fGEuUy5ZYSgpKSYmYS5pLm1hKGIsYS5pLkgpO2EuYS53ZChiKTttJiYyMDxNYXRoLmFicyhtLWIuc2Nyb2xsVG9wKSYmKGIuc2Nyb2xsVG9wPW0pfX07YS5jLm9wdGlvbnMuJGI9YS5hLmcuWigpO2EuYy5zZWxlY3RlZE9wdGlvbnM9e2luaXQ6ZnVuY3Rpb24oYixjLGQpe2Z1bmN0aW9uIGUoKXt2YXIgZT1jKCksZj1bXTthLmEuRChiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGIpe2Iuc2VsZWN0ZWQmJmYucHVzaChhLncuTShiKSl9KTthLm0uZWIoZSxkLFwic2VsZWN0ZWRPcHRpb25zXCIsXG5mKX1mdW5jdGlvbiBmKCl7dmFyIGQ9YS5hLmYoYygpKSxlPWIuc2Nyb2xsVG9wO2QmJlwibnVtYmVyXCI9PXR5cGVvZiBkLmxlbmd0aCYmYS5hLkQoYi5nZXRFbGVtZW50c0J5VGFnTmFtZShcIm9wdGlvblwiKSxmdW5jdGlvbihiKXt2YXIgYz0wPD1hLmEuQShkLGEudy5NKGIpKTtiLnNlbGVjdGVkIT1jJiZhLmEuWmMoYixjKX0pO2Iuc2Nyb2xsVG9wPWV9aWYoXCJzZWxlY3RcIiE9YS5hLlIoYikpdGhyb3cgRXJyb3IoXCJzZWxlY3RlZE9wdGlvbnMgYmluZGluZyBhcHBsaWVzIG9ubHkgdG8gU0VMRUNUIGVsZW1lbnRzXCIpO3ZhciBnO2EuaS5zdWJzY3JpYmUoYixhLmkuSCxmdW5jdGlvbigpe2c/ZSgpOihhLmEuQihiLFwiY2hhbmdlXCIsZSksZz1hLm8oZixudWxsLHtsOmJ9KSl9LG51bGwse25vdGlmeUltbWVkaWF0ZWx5OiEwfSl9LHVwZGF0ZTpmdW5jdGlvbigpe319O2EubS53YS5zZWxlY3RlZE9wdGlvbnM9ITA7YS5jLnN0eWxlPXt1cGRhdGU6ZnVuY3Rpb24oYixjKXt2YXIgZD1hLmEuZihjKCl8fFxue30pO2EuYS5QKGQsZnVuY3Rpb24oYyxkKXtkPWEuYS5mKGQpO2lmKG51bGw9PT1kfHxkPT09bnx8ITE9PT1kKWQ9XCJcIjtpZih2KXYoYikuY3NzKGMsZCk7ZWxzZSBpZigvXi0tLy50ZXN0KGMpKWIuc3R5bGUuc2V0UHJvcGVydHkoYyxkKTtlbHNle2M9Yy5yZXBsYWNlKC8tKFxcdykvZyxmdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9KTt2YXIgZz1iLnN0eWxlW2NdO2Iuc3R5bGVbY109ZDtkPT09Z3x8Yi5zdHlsZVtjXSE9Z3x8aXNOYU4oZCl8fChiLnN0eWxlW2NdPWQrXCJweFwiKX19KX19O2EuYy5zdWJtaXQ9e2luaXQ6ZnVuY3Rpb24oYixjLGQsZSxmKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBjKCkpdGhyb3cgRXJyb3IoXCJUaGUgdmFsdWUgZm9yIGEgc3VibWl0IGJpbmRpbmcgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO2EuYS5CKGIsXCJzdWJtaXRcIixmdW5jdGlvbihhKXt2YXIgZCxlPWMoKTt0cnl7ZD1lLmNhbGwoZi4kZGF0YSxiKX1maW5hbGx5eyEwIT09ZCYmKGEucHJldmVudERlZmF1bHQ/XG5hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMSl9fSl9fTthLmMudGV4dD17aW5pdDpmdW5jdGlvbigpe3JldHVybntjb250cm9sc0Rlc2NlbmRhbnRCaW5kaW5nczohMH19LHVwZGF0ZTpmdW5jdGlvbihiLGMpe2EuYS5CYihiLGMoKSl9fTthLmguZWEudGV4dD0hMDsoZnVuY3Rpb24oKXtpZihBJiZBLm5hdmlnYXRvcil7dmFyIGI9ZnVuY3Rpb24oYSl7aWYoYSlyZXR1cm4gcGFyc2VGbG9hdChhWzFdKX0sYz1BLm5hdmlnYXRvci51c2VyQWdlbnQsZCxlLGYsZyxoOyhkPUEub3BlcmEmJkEub3BlcmEudmVyc2lvbiYmcGFyc2VJbnQoQS5vcGVyYS52ZXJzaW9uKCkpKXx8KGg9YihjLm1hdGNoKC9FZGdlXFwvKFteIF0rKSQvKSkpfHxiKGMubWF0Y2goL0Nocm9tZVxcLyhbXiBdKykvKSl8fChlPWIoYy5tYXRjaCgvVmVyc2lvblxcLyhbXiBdKykgU2FmYXJpLykpKXx8KGY9YihjLm1hdGNoKC9GaXJlZm94XFwvKFteIF0rKS8pKSl8fChnPWEuYS5XfHxiKGMubWF0Y2goL01TSUUgKFteIF0rKS8pKSl8fFxuKGc9YihjLm1hdGNoKC9ydjooW14gKV0rKS8pKSl9aWYoODw9ZyYmMTA+Zyl2YXIgbT1hLmEuZy5aKCksaz1hLmEuZy5aKCksbD1mdW5jdGlvbihiKXt2YXIgYz10aGlzLmFjdGl2ZUVsZW1lbnQ7KGM9YyYmYS5hLmcuZ2V0KGMsaykpJiZjKGIpfSxwPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9Yi5vd25lckRvY3VtZW50O2EuYS5nLmdldChkLG0pfHwoYS5hLmcuc2V0KGQsbSwhMCksYS5hLkIoZCxcInNlbGVjdGlvbmNoYW5nZVwiLGwpKTthLmEuZy5zZXQoYixrLGMpfTthLmMudGV4dElucHV0PXtpbml0OmZ1bmN0aW9uKGIsYyxrKXtmdW5jdGlvbiBsKGMsZCl7YS5hLkIoYixjLGQpfWZ1bmN0aW9uIG0oKXt2YXIgZD1hLmEuZihjKCkpO2lmKG51bGw9PT1kfHxkPT09bilkPVwiXCI7TCE9PW4mJmQ9PT1MP2EuYS5zZXRUaW1lb3V0KG0sNCk6Yi52YWx1ZSE9PWQmJih5PSEwLGIudmFsdWU9ZCx5PSExLHY9Yi52YWx1ZSl9ZnVuY3Rpb24gcigpe3d8fChMPWIudmFsdWUsdz1hLmEuc2V0VGltZW91dCh6LFxuNCkpfWZ1bmN0aW9uIHooKXtjbGVhclRpbWVvdXQodyk7TD13PW47dmFyIGQ9Yi52YWx1ZTt2IT09ZCYmKHY9ZCxhLm0uZWIoYygpLGssXCJ0ZXh0SW5wdXRcIixkKSl9dmFyIHY9Yi52YWx1ZSx3LEwsQT05PT1hLmEuVz9yOnoseT0hMTtnJiZsKFwia2V5cHJlc3NcIix6KTsxMT5nJiZsKFwicHJvcGVydHljaGFuZ2VcIixmdW5jdGlvbihhKXt5fHxcInZhbHVlXCIhPT1hLnByb3BlcnR5TmFtZXx8QShhKX0pOzg9PWcmJihsKFwia2V5dXBcIix6KSxsKFwia2V5ZG93blwiLHopKTtwJiYocChiLEEpLGwoXCJkcmFnZW5kXCIscikpOyghZ3x8OTw9ZykmJmwoXCJpbnB1dFwiLEEpOzU+ZSYmXCJ0ZXh0YXJlYVwiPT09YS5hLlIoYik/KGwoXCJrZXlkb3duXCIsciksbChcInBhc3RlXCIsciksbChcImN1dFwiLHIpKToxMT5kP2woXCJrZXlkb3duXCIscik6ND5mPyhsKFwiRE9NQXV0b0NvbXBsZXRlXCIseiksbChcImRyYWdkcm9wXCIseiksbChcImRyb3BcIix6KSk6aCYmXCJudW1iZXJcIj09PWIudHlwZSYmbChcImtleWRvd25cIixyKTtsKFwiY2hhbmdlXCIsXG56KTtsKFwiYmx1clwiLHopO2EubyhtLG51bGwse2w6Yn0pfX07YS5tLndhLnRleHRJbnB1dD0hMDthLmMudGV4dGlucHV0PXtwcmVwcm9jZXNzOmZ1bmN0aW9uKGEsYixjKXtjKFwidGV4dElucHV0XCIsYSl9fX0pKCk7YS5jLnVuaXF1ZU5hbWU9e2luaXQ6ZnVuY3Rpb24oYixjKXtpZihjKCkpe3ZhciBkPVwia29fdW5pcXVlX1wiKyArK2EuYy51bmlxdWVOYW1lLnJkO2EuYS5ZYyhiLGQpfX19O2EuYy51bmlxdWVOYW1lLnJkPTA7YS5jLnVzaW5nPXtpbml0OmZ1bmN0aW9uKGIsYyxkLGUsZil7dmFyIGc7ZC5oYXMoXCJhc1wiKSYmKGc9e2FzOmQuZ2V0KFwiYXNcIiksbm9DaGlsZENvbnRleHQ6ZC5nZXQoXCJub0NoaWxkQ29udGV4dFwiKX0pO2M9Zi5jcmVhdGVDaGlsZENvbnRleHQoYyxnKTthLk9hKGMsYik7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX19O2EuaC5lYS51c2luZz0hMDthLmMudmFsdWU9e2luaXQ6ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEuYS5SKGIpLGY9XCJpbnB1dFwiPT1cbmU7aWYoIWZ8fFwiY2hlY2tib3hcIiE9Yi50eXBlJiZcInJhZGlvXCIhPWIudHlwZSl7dmFyIGc9W10saD1kLmdldChcInZhbHVlVXBkYXRlXCIpLG09ITEsaz1udWxsO2gmJihcInN0cmluZ1wiPT10eXBlb2YgaD9nPVtoXTpnPWEuYS53YyhoKSxhLmEuUGEoZyxcImNoYW5nZVwiKSk7dmFyIGw9ZnVuY3Rpb24oKXtrPW51bGw7bT0hMTt2YXIgZT1jKCksZj1hLncuTShiKTthLm0uZWIoZSxkLFwidmFsdWVcIixmKX07IWEuYS5XfHwhZnx8XCJ0ZXh0XCIhPWIudHlwZXx8XCJvZmZcIj09Yi5hdXRvY29tcGxldGV8fGIuZm9ybSYmXCJvZmZcIj09Yi5mb3JtLmF1dG9jb21wbGV0ZXx8LTEhPWEuYS5BKGcsXCJwcm9wZXJ0eWNoYW5nZVwiKXx8KGEuYS5CKGIsXCJwcm9wZXJ0eWNoYW5nZVwiLGZ1bmN0aW9uKCl7bT0hMH0pLGEuYS5CKGIsXCJmb2N1c1wiLGZ1bmN0aW9uKCl7bT0hMX0pLGEuYS5CKGIsXCJibHVyXCIsZnVuY3Rpb24oKXttJiZsKCl9KSk7YS5hLkQoZyxmdW5jdGlvbihjKXt2YXIgZD1sO2EuYS5VZChjLFwiYWZ0ZXJcIikmJlxuKGQ9ZnVuY3Rpb24oKXtrPWEudy5NKGIpO2EuYS5zZXRUaW1lb3V0KGwsMCl9LGM9Yy5zdWJzdHJpbmcoNSkpO2EuYS5CKGIsYyxkKX0pO3ZhciBwO3A9ZiYmXCJmaWxlXCI9PWIudHlwZT9mdW5jdGlvbigpe3ZhciBkPWEuYS5mKGMoKSk7bnVsbD09PWR8fGQ9PT1ufHxcIlwiPT09ZD9iLnZhbHVlPVwiXCI6YS51LkcobCl9OmZ1bmN0aW9uKCl7dmFyIGY9YS5hLmYoYygpKSxnPWEudy5NKGIpO2lmKG51bGwhPT1rJiZmPT09aylhLmEuc2V0VGltZW91dChwLDApO2Vsc2UgaWYoZiE9PWd8fGc9PT1uKVwic2VsZWN0XCI9PT1lPyhnPWQuZ2V0KFwidmFsdWVBbGxvd1Vuc2V0XCIpLGEudy5jYihiLGYsZyksZ3x8Zj09PWEudy5NKGIpfHxhLnUuRyhsKSk6YS53LmNiKGIsZil9O2lmKFwic2VsZWN0XCI9PT1lKXt2YXIgcTthLmkuc3Vic2NyaWJlKGIsYS5pLkgsZnVuY3Rpb24oKXtxP2QuZ2V0KFwidmFsdWVBbGxvd1Vuc2V0XCIpP3AoKTpsKCk6KGEuYS5CKGIsXCJjaGFuZ2VcIixsKSxxPWEubyhwLG51bGwse2w6Yn0pKX0sXG5udWxsLHtub3RpZnlJbW1lZGlhdGVseTohMH0pfWVsc2UgYS5hLkIoYixcImNoYW5nZVwiLGwpLGEubyhwLG51bGwse2w6Yn0pfWVsc2UgYS5pYihiLHtjaGVja2VkVmFsdWU6Y30pfSx1cGRhdGU6ZnVuY3Rpb24oKXt9fTthLm0ud2EudmFsdWU9ITA7YS5jLnZpc2libGU9e3VwZGF0ZTpmdW5jdGlvbihiLGMpe3ZhciBkPWEuYS5mKGMoKSksZT1cIm5vbmVcIiE9Yi5zdHlsZS5kaXNwbGF5O2QmJiFlP2Iuc3R5bGUuZGlzcGxheT1cIlwiOiFkJiZlJiYoYi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiKX19O2EuYy5oaWRkZW49e3VwZGF0ZTpmdW5jdGlvbihiLGMpe2EuYy52aXNpYmxlLnVwZGF0ZShiLGZ1bmN0aW9uKCl7cmV0dXJuIWEuYS5mKGMoKSl9KX19OyhmdW5jdGlvbihiKXthLmNbYl09e2luaXQ6ZnVuY3Rpb24oYyxkLGUsZixnKXtyZXR1cm4gYS5jLmV2ZW50LmluaXQuY2FsbCh0aGlzLGMsZnVuY3Rpb24oKXt2YXIgYT17fTthW2JdPWQoKTtyZXR1cm4gYX0sZSxmLGcpfX19KShcImNsaWNrXCIpO1xuYS5jYT1mdW5jdGlvbigpe307YS5jYS5wcm90b3R5cGUucmVuZGVyVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oKXt0aHJvdyBFcnJvcihcIk92ZXJyaWRlIHJlbmRlclRlbXBsYXRlU291cmNlXCIpO307YS5jYS5wcm90b3R5cGUuY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrPWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoXCJPdmVycmlkZSBjcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2tcIik7fTthLmNhLnByb3RvdHlwZS5tYWtlVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYixjKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7Yz1jfHx3O3ZhciBkPWMuZ2V0RWxlbWVudEJ5SWQoYik7aWYoIWQpdGhyb3cgRXJyb3IoXCJDYW5ub3QgZmluZCB0ZW1wbGF0ZSB3aXRoIElEIFwiK2IpO3JldHVybiBuZXcgYS5DLkYoZCl9aWYoMT09Yi5ub2RlVHlwZXx8OD09Yi5ub2RlVHlwZSlyZXR1cm4gbmV3IGEuQy5pYShiKTt0aHJvdyBFcnJvcihcIlVua25vd24gdGVtcGxhdGUgdHlwZTogXCIrYik7fTthLmNhLnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZT1cbmZ1bmN0aW9uKGEsYyxkLGUpe2E9dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxlKTtyZXR1cm4gdGhpcy5yZW5kZXJUZW1wbGF0ZVNvdXJjZShhLGMsZCxlKX07YS5jYS5wcm90b3R5cGUuaXNUZW1wbGF0ZVJld3JpdHRlbj1mdW5jdGlvbihhLGMpe3JldHVybiExPT09dGhpcy5hbGxvd1RlbXBsYXRlUmV3cml0aW5nPyEwOnRoaXMubWFrZVRlbXBsYXRlU291cmNlKGEsYykuZGF0YShcImlzUmV3cml0dGVuXCIpfTthLmNhLnByb3RvdHlwZS5yZXdyaXRlVGVtcGxhdGU9ZnVuY3Rpb24oYSxjLGQpe2E9dGhpcy5tYWtlVGVtcGxhdGVTb3VyY2UoYSxkKTtjPWMoYS50ZXh0KCkpO2EudGV4dChjKTthLmRhdGEoXCJpc1Jld3JpdHRlblwiLCEwKX07YS5iKFwidGVtcGxhdGVFbmdpbmVcIixhLmNhKTthLmtjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCxoKXtiPWEubS5hYyhiKTtmb3IodmFyIG09YS5tLlJhLGs9MDtrPGIubGVuZ3RoO2srKyl7dmFyIGw9YltrXS5rZXk7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG0sXG5sKSl7dmFyIHA9bVtsXTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgcCl7aWYobD1wKGJba10udmFsdWUpKXRocm93IEVycm9yKGwpO31lbHNlIGlmKCFwKXRocm93IEVycm9yKFwiVGhpcyB0ZW1wbGF0ZSBlbmdpbmUgZG9lcyBub3Qgc3VwcG9ydCB0aGUgJ1wiK2wrXCInIGJpbmRpbmcgd2l0aGluIGl0cyB0ZW1wbGF0ZXNcIik7fX1kPVwia28uX190cl9hbWJ0bnMoZnVuY3Rpb24oJGNvbnRleHQsJGVsZW1lbnQpe3JldHVybihmdW5jdGlvbigpe3JldHVybnsgXCIrYS5tLnZiKGIse3ZhbHVlQWNjZXNzb3JzOiEwfSkrXCIgfSB9KSgpfSwnXCIrZC50b0xvd2VyQ2FzZSgpK1wiJylcIjtyZXR1cm4gaC5jcmVhdGVKYXZhU2NyaXB0RXZhbHVhdG9yQmxvY2soZCkrY312YXIgYz0vKDwoW2Etel0rXFxkKikoPzpcXHMrKD8hZGF0YS1iaW5kXFxzKj1cXHMqKVthLXowLTlcXC1dKyg/Oj0oPzpcXFwiW15cXFwiXSpcXFwifFxcJ1teXFwnXSpcXCd8W14+XSopKT8pKlxccyspZGF0YS1iaW5kXFxzKj1cXHMqKFtcIiddKShbXFxzXFxTXSo/KVxcMy9naSxcbmQ9L1xceDNjIS0tXFxzKmtvXFxiXFxzKihbXFxzXFxTXSo/KVxccyotLVxceDNlL2c7cmV0dXJue3hkOmZ1bmN0aW9uKGIsYyxkKXtjLmlzVGVtcGxhdGVSZXdyaXR0ZW4oYixkKXx8Yy5yZXdyaXRlVGVtcGxhdGUoYixmdW5jdGlvbihiKXtyZXR1cm4gYS5rYy5MZChiLGMpfSxkKX0sTGQ6ZnVuY3Rpb24oYSxmKXtyZXR1cm4gYS5yZXBsYWNlKGMsZnVuY3Rpb24oYSxjLGQsZSxsKXtyZXR1cm4gYihsLGMsZCxmKX0pLnJlcGxhY2UoZCxmdW5jdGlvbihhLGMpe3JldHVybiBiKGMsXCJcXHgzYyEtLSBrbyAtLVxceDNlXCIsXCIjY29tbWVudFwiLGYpfSl9LG1kOmZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuYWEuWGIoZnVuY3Rpb24oZCxoKXt2YXIgbT1kLm5leHRTaWJsaW5nO20mJm0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWMmJmEuaWIobSxiLGgpfSl9fX0oKTthLmIoXCJfX3RyX2FtYnRuc1wiLGEua2MubWQpOyhmdW5jdGlvbigpe2EuQz17fTthLkMuRj1mdW5jdGlvbihiKXtpZih0aGlzLkY9Yil7dmFyIGM9XG5hLmEuUihiKTt0aGlzLmFiPVwic2NyaXB0XCI9PT1jPzE6XCJ0ZXh0YXJlYVwiPT09Yz8yOlwidGVtcGxhdGVcIj09YyYmYi5jb250ZW50JiYxMT09PWIuY29udGVudC5ub2RlVHlwZT8zOjR9fTthLkMuRi5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe3ZhciBiPTE9PT10aGlzLmFiP1widGV4dFwiOjI9PT10aGlzLmFiP1widmFsdWVcIjpcImlubmVySFRNTFwiO2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuRltiXTt2YXIgYz1hcmd1bWVudHNbMF07XCJpbm5lckhUTUxcIj09PWI/YS5hLmZjKHRoaXMuRixjKTp0aGlzLkZbYl09Y307dmFyIGI9YS5hLmcuWigpK1wiX1wiO2EuQy5GLnByb3RvdHlwZS5kYXRhPWZ1bmN0aW9uKGMpe2lmKDE9PT1hcmd1bWVudHMubGVuZ3RoKXJldHVybiBhLmEuZy5nZXQodGhpcy5GLGIrYyk7YS5hLmcuc2V0KHRoaXMuRixiK2MsYXJndW1lbnRzWzFdKX07dmFyIGM9YS5hLmcuWigpO2EuQy5GLnByb3RvdHlwZS5ub2Rlcz1mdW5jdGlvbigpe3ZhciBiPXRoaXMuRjtcbmlmKDA9PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBlPWEuYS5nLmdldChiLGMpfHx7fSxmPWUubGJ8fCgzPT09dGhpcy5hYj9iLmNvbnRlbnQ6ND09PXRoaXMuYWI/YjpuKTtpZighZnx8ZS5qZCl7dmFyIGc9dGhpcy50ZXh0KCk7ZyYmZyE9PWUuYmImJihmPWEuYS5NZChnLGIub3duZXJEb2N1bWVudCksYS5hLmcuc2V0KGIsYyx7bGI6ZixiYjpnLGpkOiEwfSkpfXJldHVybiBmfWU9YXJndW1lbnRzWzBdO3RoaXMuYWIhPT1uJiZ0aGlzLnRleHQoXCJcIik7YS5hLmcuc2V0KGIsYyx7bGI6ZX0pfTthLkMuaWE9ZnVuY3Rpb24oYSl7dGhpcy5GPWF9O2EuQy5pYS5wcm90b3R5cGU9bmV3IGEuQy5GO2EuQy5pYS5wcm90b3R5cGUuY29uc3RydWN0b3I9YS5DLmlhO2EuQy5pYS5wcm90b3R5cGUudGV4dD1mdW5jdGlvbigpe2lmKDA9PWFyZ3VtZW50cy5sZW5ndGgpe3ZhciBiPWEuYS5nLmdldCh0aGlzLkYsYyl8fHt9O2IuYmI9PT1uJiZiLmxiJiYoYi5iYj1iLmxiLmlubmVySFRNTCk7cmV0dXJuIGIuYmJ9YS5hLmcuc2V0KHRoaXMuRixcbmMse2JiOmFyZ3VtZW50c1swXX0pfTthLmIoXCJ0ZW1wbGF0ZVNvdXJjZXNcIixhLkMpO2EuYihcInRlbXBsYXRlU291cmNlcy5kb21FbGVtZW50XCIsYS5DLkYpO2EuYihcInRlbXBsYXRlU291cmNlcy5hbm9ueW1vdXNUZW1wbGF0ZVwiLGEuQy5pYSl9KSgpOyhmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixjLGQpe3ZhciBlO2ZvcihjPWEuaC5uZXh0U2libGluZyhjKTtiJiYoZT1iKSE9PWM7KWI9YS5oLm5leHRTaWJsaW5nKGUpLGQoZSxiKX1mdW5jdGlvbiBjKGMsZCl7aWYoYy5sZW5ndGgpe3ZhciBlPWNbMF0sZj1jW2MubGVuZ3RoLTFdLGc9ZS5wYXJlbnROb2RlLGg9YS5nYS5pbnN0YW5jZSxtPWgucHJlcHJvY2Vzc05vZGU7aWYobSl7YihlLGYsZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnByZXZpb3VzU2libGluZyxkPW0uY2FsbChoLGEpO2QmJihhPT09ZSYmKGU9ZFswXXx8YiksYT09PWYmJihmPWRbZC5sZW5ndGgtMV18fGMpKX0pO2MubGVuZ3RoPTA7aWYoIWUpcmV0dXJuO2U9PT1mP2MucHVzaChlKTpcbihjLnB1c2goZSxmKSxhLmEuVWEoYyxnKSl9YihlLGYsZnVuY3Rpb24oYil7MSE9PWIubm9kZVR5cGUmJjghPT1iLm5vZGVUeXBlfHxhLnZjKGQsYil9KTtiKGUsZixmdW5jdGlvbihiKXsxIT09Yi5ub2RlVHlwZSYmOCE9PWIubm9kZVR5cGV8fGEuYWEuY2QoYixbZF0pfSk7YS5hLlVhKGMsZyl9fWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGEubm9kZVR5cGU/YTowPGEubGVuZ3RoP2FbMF06bnVsbH1mdW5jdGlvbiBlKGIsZSxmLGgsbSl7bT1tfHx7fTt2YXIgbj0oYiYmZChiKXx8Znx8e30pLm93bmVyRG9jdW1lbnQsQj1tLnRlbXBsYXRlRW5naW5lfHxnO2Eua2MueGQoZixCLG4pO2Y9Qi5yZW5kZXJUZW1wbGF0ZShmLGgsbSxuKTtpZihcIm51bWJlclwiIT10eXBlb2YgZi5sZW5ndGh8fDA8Zi5sZW5ndGgmJlwibnVtYmVyXCIhPXR5cGVvZiBmWzBdLm5vZGVUeXBlKXRocm93IEVycm9yKFwiVGVtcGxhdGUgZW5naW5lIG11c3QgcmV0dXJuIGFuIGFycmF5IG9mIERPTSBub2Rlc1wiKTtuPSExO3N3aXRjaChlKXtjYXNlIFwicmVwbGFjZUNoaWxkcmVuXCI6YS5oLnZhKGIsXG5mKTtuPSEwO2JyZWFrO2Nhc2UgXCJyZXBsYWNlTm9kZVwiOmEuYS5YYyhiLGYpO249ITA7YnJlYWs7Y2FzZSBcImlnbm9yZVRhcmdldE5vZGVcIjpicmVhaztkZWZhdWx0OnRocm93IEVycm9yKFwiVW5rbm93biByZW5kZXJNb2RlOiBcIitlKTt9biYmKGMoZixoKSxtLmFmdGVyUmVuZGVyJiZhLnUuRyhtLmFmdGVyUmVuZGVyLG51bGwsW2YsaFttLmFzfHxcIiRkYXRhXCJdXSksXCJyZXBsYWNlQ2hpbGRyZW5cIj09ZSYmYS5pLm1hKGIsYS5pLkgpKTtyZXR1cm4gZn1mdW5jdGlvbiBmKGIsYyxkKXtyZXR1cm4gYS5PKGIpP2IoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGMsZCk6Yn12YXIgZzthLmdjPWZ1bmN0aW9uKGIpe2lmKGIhPW4mJiEoYiBpbnN0YW5jZW9mIGEuY2EpKXRocm93IEVycm9yKFwidGVtcGxhdGVFbmdpbmUgbXVzdCBpbmhlcml0IGZyb20ga28udGVtcGxhdGVFbmdpbmVcIik7Zz1ifTthLmRjPWZ1bmN0aW9uKGIsYyxoLG0sdCl7aD1ofHx7fTtpZigoaC50ZW1wbGF0ZUVuZ2luZXx8Zyk9PVxubil0aHJvdyBFcnJvcihcIlNldCBhIHRlbXBsYXRlIGVuZ2luZSBiZWZvcmUgY2FsbGluZyByZW5kZXJUZW1wbGF0ZVwiKTt0PXR8fFwicmVwbGFjZUNoaWxkcmVuXCI7aWYobSl7dmFyIHg9ZChtKTtyZXR1cm4gYS4kKGZ1bmN0aW9uKCl7dmFyIGc9YyYmYyBpbnN0YW5jZW9mIGEuZmE/YzpuZXcgYS5mYShjLG51bGwsbnVsbCxudWxsLHtleHBvcnREZXBlbmRlbmNpZXM6ITB9KSxuPWYoYixnLiRkYXRhLGcpLGc9ZShtLHQsbixnLGgpO1wicmVwbGFjZU5vZGVcIj09dCYmKG09Zyx4PWQobSkpfSxudWxsLHtTYTpmdW5jdGlvbigpe3JldHVybiF4fHwhYS5hLlNiKHgpfSxsOngmJlwicmVwbGFjZU5vZGVcIj09dD94LnBhcmVudE5vZGU6eH0pfXJldHVybiBhLmFhLlhiKGZ1bmN0aW9uKGQpe2EuZGMoYixjLGgsZCxcInJlcGxhY2VOb2RlXCIpfSl9O2EuUWQ9ZnVuY3Rpb24oYixkLGcsaCxtKXtmdW5jdGlvbiB4KGIsYyl7YS51LkcoYS5hLmVjLG51bGwsW2gsYix1LGcscixjXSk7YS5pLm1hKGgsYS5pLkgpfVxuZnVuY3Rpb24gcihhLGIpe2MoYix2KTtnLmFmdGVyUmVuZGVyJiZnLmFmdGVyUmVuZGVyKGIsYSk7dj1udWxsfWZ1bmN0aW9uIHUoYSxjKXt2PW0uY3JlYXRlQ2hpbGRDb250ZXh0KGEse2FzOnosbm9DaGlsZENvbnRleHQ6Zy5ub0NoaWxkQ29udGV4dCxleHRlbmQ6ZnVuY3Rpb24oYSl7YS4kaW5kZXg9Yzt6JiYoYVt6K1wiSW5kZXhcIl09Yyl9fSk7dmFyIGQ9ZihiLGEsdik7cmV0dXJuIGUoaCxcImlnbm9yZVRhcmdldE5vZGVcIixkLHYsZyl9dmFyIHYsej1nLmFzLHc9ITE9PT1nLmluY2x1ZGVEZXN0cm95ZWR8fGEub3B0aW9ucy5mb3JlYWNoSGlkZXNEZXN0cm95ZWQmJiFnLmluY2x1ZGVEZXN0cm95ZWQ7aWYod3x8Zy5iZWZvcmVSZW1vdmV8fCFhLlBjKGQpKXJldHVybiBhLiQoZnVuY3Rpb24oKXt2YXIgYj1hLmEuZihkKXx8W107XCJ1bmRlZmluZWRcIj09dHlwZW9mIGIubGVuZ3RoJiYoYj1bYl0pO3cmJihiPWEuYS5qYihiLGZ1bmN0aW9uKGIpe3JldHVybiBiPT09bnx8bnVsbD09PWJ8fFxuIWEuYS5mKGIuX2Rlc3Ryb3kpfSkpO3goYil9LG51bGwse2w6aH0pO3goZC52KCkpO3ZhciBBPWQuc3Vic2NyaWJlKGZ1bmN0aW9uKGEpe3goZCgpLGEpfSxudWxsLFwiYXJyYXlDaGFuZ2VcIik7QS5sKGgpO3JldHVybiBBfTt2YXIgaD1hLmEuZy5aKCksbT1hLmEuZy5aKCk7YS5jLnRlbXBsYXRlPXtpbml0OmZ1bmN0aW9uKGIsYyl7dmFyIGQ9YS5hLmYoYygpKTtpZihcInN0cmluZ1wiPT10eXBlb2YgZHx8XCJuYW1lXCJpbiBkKWEuaC5FYShiKTtlbHNlIGlmKFwibm9kZXNcImluIGQpe2Q9ZC5ub2Rlc3x8W107aWYoYS5PKGQpKXRocm93IEVycm9yKCdUaGUgXCJub2Rlc1wiIG9wdGlvbiBtdXN0IGJlIGEgcGxhaW4sIG5vbi1vYnNlcnZhYmxlIGFycmF5LicpO3ZhciBlPWRbMF0mJmRbMF0ucGFyZW50Tm9kZTtlJiZhLmEuZy5nZXQoZSxtKXx8KGU9YS5hLlliKGQpLGEuYS5nLnNldChlLG0sITApKTsobmV3IGEuQy5pYShiKSkubm9kZXMoZSl9ZWxzZSBpZihkPWEuaC5jaGlsZE5vZGVzKGIpLDA8ZC5sZW5ndGgpZT1cbmEuYS5ZYihkKSwobmV3IGEuQy5pYShiKSkubm9kZXMoZSk7ZWxzZSB0aHJvdyBFcnJvcihcIkFub255bW91cyB0ZW1wbGF0ZSBkZWZpbmVkLCBidXQgbm8gdGVtcGxhdGUgY29udGVudCB3YXMgcHJvdmlkZWRcIik7cmV0dXJue2NvbnRyb2xzRGVzY2VuZGFudEJpbmRpbmdzOiEwfX0sdXBkYXRlOmZ1bmN0aW9uKGIsYyxkLGUsZil7dmFyIGc9YygpO2M9YS5hLmYoZyk7ZD0hMDtlPW51bGw7XCJzdHJpbmdcIj09dHlwZW9mIGM/Yz17fTooZz1cIm5hbWVcImluIGM/Yy5uYW1lOmIsXCJpZlwiaW4gYyYmKGQ9YS5hLmYoY1tcImlmXCJdKSksZCYmXCJpZm5vdFwiaW4gYyYmKGQ9IWEuYS5mKGMuaWZub3QpKSxkJiYhZyYmKGQ9ITEpKTtcImZvcmVhY2hcImluIGM/ZT1hLlFkKGcsZCYmYy5mb3JlYWNofHxbXSxjLGIsZik6ZD8oZD1mLFwiZGF0YVwiaW4gYyYmKGQ9Zi5jcmVhdGVDaGlsZENvbnRleHQoYy5kYXRhLHthczpjLmFzLG5vQ2hpbGRDb250ZXh0OmMubm9DaGlsZENvbnRleHQsZXhwb3J0RGVwZW5kZW5jaWVzOiEwfSkpLFxuZT1hLmRjKGcsZCxjLGIpKTphLmguRWEoYik7Zj1lOyhjPWEuYS5nLmdldChiLGgpKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYy5zJiZjLnMoKTthLmEuZy5zZXQoYixoLCFmfHxmLmphJiYhZi5qYSgpP246Zil9fTthLm0uUmEudGVtcGxhdGU9ZnVuY3Rpb24oYil7Yj1hLm0uYWMoYik7cmV0dXJuIDE9PWIubGVuZ3RoJiZiWzBdLnVua25vd258fGEubS5JZChiLFwibmFtZVwiKT9udWxsOlwiVGhpcyB0ZW1wbGF0ZSBlbmdpbmUgZG9lcyBub3Qgc3VwcG9ydCBhbm9ueW1vdXMgdGVtcGxhdGVzIG5lc3RlZCB3aXRoaW4gaXRzIHRlbXBsYXRlc1wifTthLmguZWEudGVtcGxhdGU9ITB9KSgpO2EuYihcInNldFRlbXBsYXRlRW5naW5lXCIsYS5nYyk7YS5iKFwicmVuZGVyVGVtcGxhdGVcIixhLmRjKTthLmEuS2M9ZnVuY3Rpb24oYSxjLGQpe2lmKGEubGVuZ3RoJiZjLmxlbmd0aCl7dmFyIGUsZixnLGgsbTtmb3IoZT1mPTA7KCFkfHxlPGQpJiYoaD1hW2ZdKTsrK2Ype2ZvcihnPTA7bT1jW2ddOysrZylpZihoLnZhbHVlPT09XG5tLnZhbHVlKXtoLm1vdmVkPW0uaW5kZXg7bS5tb3ZlZD1oLmluZGV4O2Muc3BsaWNlKGcsMSk7ZT1nPTA7YnJlYWt9ZSs9Z319fTthLmEuUGI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGIsZCxlLGYsZyl7dmFyIGg9TWF0aC5taW4sbT1NYXRoLm1heCxrPVtdLGwscD1iLmxlbmd0aCxxLG49ZC5sZW5ndGgscj1uLXB8fDEsdj1wK24rMSx1LHcsejtmb3IobD0wO2w8PXA7bCsrKWZvcih3PXUsay5wdXNoKHU9W10pLHo9aChuLGwrcikscT1tKDAsbC0xKTtxPD16O3ErKyl1W3FdPXE/bD9iW2wtMV09PT1kW3EtMV0/d1txLTFdOmgod1txXXx8dix1W3EtMV18fHYpKzE6cSsxOmwrMTtoPVtdO209W107cj1bXTtsPXA7Zm9yKHE9bjtsfHxxOyluPWtbbF1bcV0tMSxxJiZuPT09a1tsXVtxLTFdP20ucHVzaChoW2gubGVuZ3RoXT17c3RhdHVzOmUsdmFsdWU6ZFstLXFdLGluZGV4OnF9KTpsJiZuPT09a1tsLTFdW3FdP3IucHVzaChoW2gubGVuZ3RoXT17c3RhdHVzOmYsdmFsdWU6YlstLWxdLGluZGV4Omx9KTpcbigtLXEsLS1sLGcuc3BhcnNlfHxoLnB1c2goe3N0YXR1czpcInJldGFpbmVkXCIsdmFsdWU6ZFtxXX0pKTthLmEuS2MocixtLCFnLmRvbnRMaW1pdE1vdmVzJiYxMCpwKTtyZXR1cm4gaC5yZXZlcnNlKCl9cmV0dXJuIGZ1bmN0aW9uKGEsZCxlKXtlPVwiYm9vbGVhblwiPT09dHlwZW9mIGU/e2RvbnRMaW1pdE1vdmVzOmV9OmV8fHt9O2E9YXx8W107ZD1kfHxbXTtyZXR1cm4gYS5sZW5ndGg8ZC5sZW5ndGg/YihhLGQsXCJhZGRlZFwiLFwiZGVsZXRlZFwiLGUpOmIoZCxhLFwiZGVsZXRlZFwiLFwiYWRkZWRcIixlKX19KCk7YS5iKFwidXRpbHMuY29tcGFyZUFycmF5c1wiLGEuYS5QYik7KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gYihiLGMsZCxoLG0pe3ZhciBrPVtdLGw9YS4kKGZ1bmN0aW9uKCl7dmFyIGw9YyhkLG0sYS5hLlVhKGssYikpfHxbXTswPGsubGVuZ3RoJiYoYS5hLlhjKGssbCksaCYmYS51LkcoaCxudWxsLFtkLGwsbV0pKTtrLmxlbmd0aD0wO2EuYS5OYihrLGwpfSxudWxsLHtsOmIsU2E6ZnVuY3Rpb24oKXtyZXR1cm4hYS5hLmtkKGspfX0pO1xucmV0dXJue1k6aywkOmwuamEoKT9sOm59fXZhciBjPWEuYS5nLlooKSxkPWEuYS5nLlooKTthLmEuZWM9ZnVuY3Rpb24oZSxmLGcsaCxtLGspe2Z1bmN0aW9uIGwoYil7eT17QWE6YixwYjphLnRhKHcrKyl9O3YucHVzaCh5KTtyfHxGLnB1c2goeSl9ZnVuY3Rpb24gcChiKXt5PXRbYl07dyE9PXkucGIudigpJiZELnB1c2goeSk7eS5wYih3KyspO2EuYS5VYSh5LlksZSk7di5wdXNoKHkpfWZ1bmN0aW9uIHEoYixjKXtpZihiKWZvcih2YXIgZD0wLGU9Yy5sZW5ndGg7ZDxlO2QrKylhLmEuRChjW2RdLlksZnVuY3Rpb24oYSl7YihhLGQsY1tkXS5BYSl9KX1mPWZ8fFtdO1widW5kZWZpbmVkXCI9PXR5cGVvZiBmLmxlbmd0aCYmKGY9W2ZdKTtoPWh8fHt9O3ZhciB0PWEuYS5nLmdldChlLGMpLHI9IXQsdj1bXSx1PTAsdz0wLHo9W10sQT1bXSxDPVtdLEQ9W10sRj1bXSx5LEk9MDtpZihyKWEuYS5EKGYsbCk7ZWxzZXtpZigha3x8dCYmdC5fY291bnRXYWl0aW5nRm9yUmVtb3ZlKXt2YXIgRT1cbmEuYS5NYih0LGZ1bmN0aW9uKGEpe3JldHVybiBhLkFhfSk7az1hLmEuUGIoRSxmLHtkb250TGltaXRNb3ZlczpoLmRvbnRMaW1pdE1vdmVzLHNwYXJzZTohMH0pfWZvcih2YXIgRT0wLEcsSCxLO0c9a1tFXTtFKyspc3dpdGNoKEg9Ry5tb3ZlZCxLPUcuaW5kZXgsRy5zdGF0dXMpe2Nhc2UgXCJkZWxldGVkXCI6Zm9yKDt1PEs7KXAodSsrKTtIPT09biYmKHk9dFt1XSx5LiQmJih5LiQucygpLHkuJD1uKSxhLmEuVWEoeS5ZLGUpLmxlbmd0aCYmKGguYmVmb3JlUmVtb3ZlJiYodi5wdXNoKHkpLEkrKyx5LkFhPT09ZD95PW51bGw6Qy5wdXNoKHkpKSx5JiZ6LnB1c2guYXBwbHkoeix5LlkpKSk7dSsrO2JyZWFrO2Nhc2UgXCJhZGRlZFwiOmZvcig7dzxLOylwKHUrKyk7SCE9PW4/KEEucHVzaCh2Lmxlbmd0aCkscChIKSk6bChHLnZhbHVlKX1mb3IoO3c8Zi5sZW5ndGg7KXAodSsrKTt2Ll9jb3VudFdhaXRpbmdGb3JSZW1vdmU9SX1hLmEuZy5zZXQoZSxjLHYpO3EoaC5iZWZvcmVNb3ZlLEQpO2EuYS5EKHosXG5oLmJlZm9yZVJlbW92ZT9hLm9hOmEucmVtb3ZlTm9kZSk7dmFyIE0sTyxQO3RyeXtQPWUub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50fWNhdGNoKE4pe31pZihBLmxlbmd0aClmb3IoOyhFPUEuc2hpZnQoKSkhPW47KXt5PXZbRV07Zm9yKE09bjtFOylpZigoTz12Wy0tRV0uWSkmJk8ubGVuZ3RoKXtNPU9bTy5sZW5ndGgtMV07YnJlYWt9Zm9yKGY9MDt1PXkuWVtmXTtNPXUsZisrKWEuaC5XYihlLHUsTSl9Zm9yKEU9MDt5PXZbRV07RSsrKXt5Lll8fGEuYS5leHRlbmQoeSxiKGUsZyx5LkFhLG0seS5wYikpO2ZvcihmPTA7dT15LllbZl07TT11LGYrKylhLmguV2IoZSx1LE0pOyF5LkVkJiZtJiYobSh5LkFhLHkuWSx5LnBiKSx5LkVkPSEwLE09eS5ZW3kuWS5sZW5ndGgtMV0pfVAmJmUub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50IT1QJiZQLmZvY3VzKCk7cShoLmJlZm9yZVJlbW92ZSxDKTtmb3IoRT0wO0U8Qy5sZW5ndGg7KytFKUNbRV0uQWE9ZDtxKGguYWZ0ZXJNb3ZlLEQpO1xucShoLmFmdGVyQWRkLEYpfX0pKCk7YS5iKFwidXRpbHMuc2V0RG9tTm9kZUNoaWxkcmVuRnJvbUFycmF5TWFwcGluZ1wiLGEuYS5lYyk7YS5iYT1mdW5jdGlvbigpe3RoaXMuYWxsb3dUZW1wbGF0ZVJld3JpdGluZz0hMX07YS5iYS5wcm90b3R5cGU9bmV3IGEuY2E7YS5iYS5wcm90b3R5cGUuY29uc3RydWN0b3I9YS5iYTthLmJhLnByb3RvdHlwZS5yZW5kZXJUZW1wbGF0ZVNvdXJjZT1mdW5jdGlvbihiLGMsZCxlKXtpZihjPSg5PmEuYS5XPzA6Yi5ub2Rlcyk/Yi5ub2RlcygpOm51bGwpcmV0dXJuIGEuYS5sYShjLmNsb25lTm9kZSghMCkuY2hpbGROb2Rlcyk7Yj1iLnRleHQoKTtyZXR1cm4gYS5hLnVhKGIsZSl9O2EuYmEuTWE9bmV3IGEuYmE7YS5nYyhhLmJhLk1hKTthLmIoXCJuYXRpdmVUZW1wbGF0ZUVuZ2luZVwiLGEuYmEpOyhmdW5jdGlvbigpe2EuJGE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLkhkPWZ1bmN0aW9uKCl7aWYoIXZ8fCF2LnRtcGwpcmV0dXJuIDA7dHJ5e2lmKDA8PXYudG1wbC50YWcudG1wbC5vcGVuLnRvU3RyaW5nKCkuaW5kZXhPZihcIl9fXCIpKXJldHVybiAyfWNhdGNoKGEpe31yZXR1cm4gMX0oKTtcbnRoaXMucmVuZGVyVGVtcGxhdGVTb3VyY2U9ZnVuY3Rpb24oYixlLGYsZyl7Zz1nfHx3O2Y9Znx8e307aWYoMj5hKXRocm93IEVycm9yKFwiWW91ciB2ZXJzaW9uIG9mIGpRdWVyeS50bXBsIGlzIHRvbyBvbGQuIFBsZWFzZSB1cGdyYWRlIHRvIGpRdWVyeS50bXBsIDEuMC4wcHJlIG9yIGxhdGVyLlwiKTt2YXIgaD1iLmRhdGEoXCJwcmVjb21waWxlZFwiKTtofHwoaD1iLnRleHQoKXx8XCJcIixoPXYudGVtcGxhdGUobnVsbCxcInt7a29fd2l0aCAkaXRlbS5rb0JpbmRpbmdDb250ZXh0fX1cIitoK1wie3sva29fd2l0aH19XCIpLGIuZGF0YShcInByZWNvbXBpbGVkXCIsaCkpO2I9W2UuJGRhdGFdO2U9di5leHRlbmQoe2tvQmluZGluZ0NvbnRleHQ6ZX0sZi50ZW1wbGF0ZU9wdGlvbnMpO2U9di50bXBsKGgsYixlKTtlLmFwcGVuZFRvKGcuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7di5mcmFnbWVudHM9e307cmV0dXJuIGV9O3RoaXMuY3JlYXRlSmF2YVNjcmlwdEV2YWx1YXRvckJsb2NrPWZ1bmN0aW9uKGEpe3JldHVyblwie3trb19jb2RlICgoZnVuY3Rpb24oKSB7IHJldHVybiBcIitcbmErXCIgfSkoKSkgfX1cIn07dGhpcy5hZGRUZW1wbGF0ZT1mdW5jdGlvbihhLGIpe3cud3JpdGUoXCI8c2NyaXB0IHR5cGU9J3RleHQvaHRtbCcgaWQ9J1wiK2ErXCInPlwiK2IrXCJcXHgzYy9zY3JpcHQ+XCIpfTswPGEmJih2LnRtcGwudGFnLmtvX2NvZGU9e29wZW46XCJfXy5wdXNoKCQxIHx8ICcnKTtcIn0sdi50bXBsLnRhZy5rb193aXRoPXtvcGVuOlwid2l0aCgkMSkge1wiLGNsb3NlOlwifSBcIn0pfTthLiRhLnByb3RvdHlwZT1uZXcgYS5jYTthLiRhLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1hLiRhO3ZhciBiPW5ldyBhLiRhOzA8Yi5IZCYmYS5nYyhiKTthLmIoXCJqcXVlcnlUbXBsVGVtcGxhdGVFbmdpbmVcIixhLiRhKX0pKCl9KX0pKCk7fSkoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGVfX2Jvb2wtY2VsbC1lZGl0b3JcXFwiPlxcbiAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcbiAgICBkYXRhLWJpbmQ9XFxcImNoZWNrZWQ6IHZhbHVlLCBldmVudDogeyBjaGFuZ2U6IGZ1bmN0aW9uKF8sIGUpIHsgJGRhdGEudmFsdWUgPSBlLnRhcmdldC5jaGVja2VkOyAkZGF0YS5jb21wbGV0ZSh0cnVlKTsgfSB9XFxcIlxcbiAgLz5cXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzcGFuIGNsYXNzPVxcXCJhYnJpcy10YWJsZV9fYm9vbC1jZWxsLXZpZXdlclxcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IGNsYXNzTmFtZVxcXCI+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJhYnJpcy10YWJsZV9fYm9vbC1jZWxsLXZpZXdlci1jaXJjbGVcXFwiXFxuICAgIGRhdGEtYmluZD1cXFwic3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBjZWxsLmRhdGEgPyAnZ3JlZW4nIDogJ3JlZCcgfVxcXCIgXFxuICAgID48L3NwYW4+XFxuPC9zcGFuPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGVfX2NlbGwtZWRpdG9yXFxcIj5cXG4gIDxpbnB1dCBkYXRhLWJpbmQ9XFxcInZhbHVlOiB2YWx1ZSwgZXZlbnQ6IHsga2V5dXA6IGZ1bmN0aW9uKF8sIGUpIHsgJGRhdGEucHJvY2Vzc0tleVVwKGUpOyB9IH1cXFwiIC8+XFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3BhbiBkYXRhLWJpbmQ9XFxcImh0bWw6IGNlbGwudGV4dCwgY3NzOiBjbGFzc05hbWVcXFwiPjwvc3Bhbj5cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjx0ZCBjbGFzcz1cXFwiYWJyaXMtdGFibGUtY2VsbFxcXCIgZGF0YS1iaW5kPVxcXCJhdHRyOiB7cm93c3BhbjogdGFibGUuaXNNZXJnZWTQoWVsbHMgPyBjZWxsLmNvdW50IDogMX0sXFxuICBjc3M6IChjZWxsLmNvdW50ID4gMSkgJiYgdGFibGUuaXNNZXJnZWTQoWVsbHMgPyAnYWJyaXMtdGFibGUtY2VsbC0tbWVyZ2VkICcgOiAnJyxcXG4gIHZpc2libGU6IChjZWxsLmNvdW50ID4gMCkgfHwgIXRhYmxlLmlzTWVyZ2Vk0KFlbGxzLFxcbiAgc3R5bGU6IHsnYmFja2dyb3VuZC1jb2xvcic6IGNlbGwuY29sb3J9IFxcXCI+XFxuICA8IS0tIGtvIGlmbm90OiAoY2VsbC5pbnBsYWNlRWRpdG9yICYmIHRhYmxlLmNvbmZpZy5lbmFibGVFZGl0KSAtLT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtY2VsbF9fY29udGFpbmVyXFxcIiBkYXRhLWJpbmQ9XFxcImNzczogY29udGFpbmVyQ3NzLCBzdHlsZToge3RvcDogaXNNZXJnZWRDZWxsKCkgPyB0YWJsZS50YWJsZUhlYWRIZWlnaHQgLSAyICsgJ3B4JyA6IHVuZGVmaW5lZH0sIGNsaWNrOiBzdGFydEVkaXRcXFwiPlxcbiAgICAgIDwhLS0ga28gY29tcG9uZW50OiB7IG5hbWU6IGNlbGwudmlld2VyLCBwYXJhbXM6IHsgY2VsbDogY2VsbCwgY2xhc3NOYW1lOiBjb250ZW50Q3NzIH0gfSAtLT5cXG4gICAgICA8IS0tIC9rbyAtLT5cXG4gICAgPC9kaXY+XFxuICA8IS0tIC9rbyAtLT5cXG4gIDwhLS0ga28gaWY6IChjZWxsLmlucGxhY2VFZGl0b3IgJiYgdGFibGUuY29uZmlnLmVuYWJsZUVkaXQpIC0tPlxcbiAgICA8IS0tIGtvIGNvbXBvbmVudDogeyBuYW1lOiBjZWxsLmVkaXRvciwgcGFyYW1zOiB7IG1vZGVsOiBjZWxsLmlucGxhY2VFZGl0b3IgfSB9IC0tPlxcbiAgICA8IS0tIC9rbyAtLT5cXG4gIDwhLS0gL2tvIC0tPlxcbjwvdGQ+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8c2VsZWN0IGNsYXNzPVxcXCJhYnJpcy1maWx0ZXJfX19vcGVyYXRpb25cXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczogb3BlcmF0aW9ucywgdmFsdWU6IG9wZXJhdGlvbiwgb3B0aW9uc1RleHQ6ICd0ZXh0J1xcXCI+PC9zZWxlY3Q+XFxuPCEtLSBrbyBpZjogc2hvd09wZXJhbmQgLS0+XFxuICA8IS0tIGtvIGlmOiBvcGVyYXRpb24ub3AgPT0gXFxcIkVRXFxcIiAtLT5cXG4gIDxhYnJpcy1maWx0ZXItc2VsZWN0IGNsYXNzPVxcXCJhYnJzLWZpbHRlcl9fdmFsdWVcXFwiXFxuICAgIHBhcmFtcz1cXFwidmFsdWU6IGZpbHRlckl0ZW1WYWx1ZSwgY29sdW1uTmFtZTogY29sdW1uLm5hbWUsIGNvbHVtblR5cGU6IGNvbHVtbi50eXBlLCBnZXRDb2x1bW5EYXRhOiBnZXRDb2x1bW5EYXRhXFxcIj5cXG4gIDwvYWJyaXMtZmlsdGVyLXNlbGVjdD5cXG4gIDwhLS0gL2tvIC0tPlxcbiAgPCEtLSBrbyBpZjogb3BlcmF0aW9uLm9wICE9IFxcXCJFUVxcXCIgLS0+XFxuICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1maWx0ZXJfX29wZXJhbmRcXFwiIGRhdGEtYmluZD1cXFwiY29tcG9uZW50OiB7IG5hbWU6IGZpbHRlckVkaXRvck5hbWUsIHBhcmFtczogeyB2YWx1ZTogZmlsdGVySXRlbVZhbHVlLCBjb2x1bW46IGNvbHVtbiB9IH1cXFwiPlxcbiAgPC9kaXY+XFxuICA8IS0tIC9rbyAtLT5cXG48IS0tIC9rbyAtLT5cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjwhLS0ga28gaWY6IGZpbHRlckl0ZW1zLmxlbmd0aCA+IDAgLS0+XFxuPGRpdiBjbGFzcz1cXFwiYWJyaXMtZmlsdGVyLWl0ZW1cXFwiPlxcbiAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtZmlsdGVyX190aXRsZSBhYnJpcy1maWx0ZXItdGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBjb2x1bW4udGl0bGUgKyAnOidcXFwiPjwvZGl2PlxcbiAgPCEtLSBrbyBmb3JlYWNoOiBmaWx0ZXJJdGVtcyAtLT5cXG4gICAgPCEtLSBrbyBpZjogJGluZGV4KCkgPiAwIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1maWx0ZXJfX29wZXJhdG9yIGFicmlzLWZpbHRlci10ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICcmJ1xcXCI+PC9kaXY+XFxuICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8IS0tIGtvIGNvbXBvbmVudDogeyBuYW1lOiAnYWJyaXMtY29sdW1uLWZpbHRlci1pdGVtJywgcGFyYW1zOiB7IGZpbHRlckl0ZW06ICRkYXRhIH0gfSAtLT5cXG4gICAgPCEtLSAva28gLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLWZpbHRlcl9fcmVtb3ZlXFxcIlxcbiAgICAgIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQucmVtb3ZlSXRlbSwgY2xpY2tCdWJibGU6IGZhbHNlXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1maWx0ZXJfX3JlbW92ZS1pY29uIGFicmlzLXN2Zy1pY29uXFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLmNyb3NzXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8IS0tIC9rbyAtLT5cXG48L2Rpdj5cXG48IS0tIC9rbyAtLT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxpbnB1dCBzdHlsZT1cXFwid2lkdGg6IDEwMCU7XFxcIiBwbGFjZWhvbGRlcj1cXFwiKlxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTogdmFsdWUudmFsdWVcXFwiIC8+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJhYnJpcy1zZWxlY3Qtc2VsZWN0aW9uXFxcIj5cXG4gICAgPCEtLSBrbyBmb3JlYWNoOiBzZWxlY3RlZEl0ZW1zIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW1cXFwiPlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImFicmlzLXNlbGVjdC1pdGVtLXRpdGxlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5hbWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXNlbGVjdC1pdGVtLWNsb3NlXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LmRlbGV0ZUl0ZW1zLCBodG1sOiAkcm9vdC5pY29ucy5jcm9zc1xcXCI+PC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tIC9rbyAtLT5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVxcXCJhYnJpcy1zZWxlY3QtYnV0dG9uIGFicmlzLXN2Zy1pY29uXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiB0b2dnbGUsIGF0dHI6IHsgdGl0bGU6IHRpdGxlIH0sIGh0bWw6ICRyb290Lmljb25zLmFycm93ZG93blxcXCI+PC9kaXY+XFxuPCEtLSBrbyBpZjogaXNPcGVuIC0tPlxcbjx1bCBjbGFzcz1cXFwiYWJyaXMtc2VsZWN0X19kcm9wZG93bi1tZW51IGFicmlzLWJ1dHRvbi10b2dnbGVfX2Ryb3Bkb3duLW1lbnVcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGZ1bmN0aW9uKF8sIGUpIHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfVxcXCI+XFxuICAgIDwhLS0ga28gaWY6IGlzRmlsdGVyU2VhcmNoQnlUeXBlIC0tPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1zZWxlY3RfX2Ryb3Bkb3duLXNlYXJjaC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJhYnJpcy1zZWxlY3RfX2Ryb3Bkb3duLXNlYXJjaFxcXCIgcGxhY2Vob2xkZXI9XFxcIipcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGZpbHRlclRleHQsIHZhbHVlVXBkYXRlOiAnYWZ0ZXJrZXlkb3duJ1xcXCIgLz5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8IS0tIGtvIGZvcmVhY2g6IGZvdW5kSXRlbXMgLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXNlbGVjdF9fZHJvcGRvd24taXRlbVxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5jbGlja0l0ZW1cXFwiPlxcbiAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJhYnJpcy1zZWxlY3RfX2Ryb3Bkb3duLWhpZGUtY2hlY2tcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLWJpbmQ9XFxcImNoZWNrZWQ6ICRwYXJlbnQuaXNDaGVja2VkKCRkYXRhKVxcXCIgLz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXNlbGVjdF9fZHJvcGRvd24tY2hlY2tcXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMuY2hlY2tcXFwiPjwvZGl2PlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImFicmlzLXNlbGVjdF9fZHJvcGRvd24tbGFiZWxcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogbmFtZVxcXCI+PC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLSAva28gLS0+XFxuICAgIDwhLS0ga28gaWY6IGlzTG9hZE1vcmUgLS0+XFxuICAgIDxidXR0b24gY2xhc3M9XFxcImFicmlzLXNlbGVjdF9fZHJvcGRvd24tYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBsb2FkTW9yZVxcXCI+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYWJyaXMtYWN0aW9uLWJ1dHRvbl9fbGFiZWxcXFwiPk1vcmU8L3NwYW4+XFxuICAgIDwvYnV0dG9uPlxcbiAgICA8IS0tIC9rbyAtLT5cXG48L3VsPlxcbjwhLS0gL2tvIC0tPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtcmVzaXphYmxlLWNvbnRhaW5lclxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZS1zY3JvbGwtY29udGFpbmVyXFxcIj5cXG4gICAgPHRhYmxlIGNsYXNzPVxcXCJhYnJpcy10YWJsZVxcXCI+XFxuICAgICAgPHRoZWFkIGNsYXNzPVxcXCJhYnJpcy10YWJsZV9faGVhZGVyIGFicmlzLXRhYmxlLXN0aWNreS1jb21wb25lbnRcXFwiPlxcbiAgICAgICAgPHRyIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1oZWFkZXItdG9vbHNcXFwiPlxcbiAgICAgICAgICA8dGggY2xhc3M9XFxcImFicmlzLXRhYmxlLWhlYWRlci10b29sc19fY2VsbFxcXCIgY29sc3Bhbj1cXFwiMTAwJVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtaGVhZGVyLXRvb2xzX19jb250YWluZXIgYWJyaXMtdGFibGUtZ3JvdXAtaGVhZGVyLXRlY2huaWNhbC1jZWxsXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLXByZWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLXNlYXJjaC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgPCEtLSBrbyBpZjogc2hvd1NlYXJjaCAtLT5cXG4gICAgICAgICAgICAgICAgICA8YWJyaXMtc2VhcmNoIHBhcmFtcz1cXFwibW9kZWw6IHNlYXJjaE1vZGVsXFxcIj48L2FicmlzLXNlYXJjaD5cXG4gICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICA8YWJyaXMtYWN0aW9ucyBjbGFzcz1cXFwiYWJyaXMtdGFibGUtYWN0aW9uc1xcXCIgcGFyYW1zPVxcXCJtb2RlbDogJGRhdGEsIG9wdGlvbnM6IHsgYWN0aW9uOiAndG9wQWN0aW9ucycgfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPC9hYnJpcy1hY3Rpb25zPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6ICRkYXRhLmdldEFjdGlvbnMoJ2Ryb3Bkb3duQWN0aW9ucycpLmxlbmd0aCA+IDAgLS0+XFxuICAgICAgICAgICAgICAgICAgPGFicmlzLWRyb3Bkb3duLWFjdGlvbnMgY2xhc3M9XFxcImFicmlzLXRhYmxlLWRyb3Bkb3duIGFicmlzLXRhYmxlLWFjdGlvbnMtbWVudVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcz1cXFwiZGF0YTogJGRhdGEsIGFjdGlvbnM6ICdkcm9wZG93bkFjdGlvbnMnXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8L2FicmlzLWRyb3Bkb3duLWFjdGlvbnM+XFxuICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8IS0tIGtvIGlmOiB2aWV3RmlsdGVyVGFibGUgLS0+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZS1maWx0ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZS1maWx0ZXJfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBjb2x1bW5zIC0tPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0ga28gY29tcG9uZW50OiB7IG5hbWU6ICdhYnJpcy1jb2x1bW4tZmlsdGVyJywgcGFyYW1zOiB7IGNvbnRleHQ6IGZpbHRlckNvbnRleHQgfSB9IC0tPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvdGg+XFxuICAgICAgICA8L3RyPlxcbiAgICAgICAgPHRyIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1oZWFkZXItdGl0bGVcXFwiPlxcbiAgICAgICAgICA8dGggY2xhc3M9XFxcImFicmlzLXRhYmxlLWhlYWRlci10aXRsZV9fY2VsbCBhYnJpcy10YWJsZS1zd2l0Y2hcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLXN3aXRjaF9fdGV4dFxcXCJcXG4gICAgICAgICAgICAgIGRhdGEtYmluZD1cXFwiY3NzOiB7J3N3aXRjaF9fdGV4dC0tc2VsZWN0ZWQnOiBpc051bWJlcn0sIGNsaWNrOiAoKSA9PiAkZGF0YS5pc051bWJlciA9ICEkZGF0YS5pc051bWJlclxcXCI+I1xcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGNvbHVtbnMgLS0+XFxuICAgICAgICAgIDwhLS0ga28gaWY6IHZpc2libGUgLS0+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwiYWJyaXMtdGFibGUtaGVhZGVyLXRpdGxlX19jZWxsXFxcIlxcbiAgICAgICAgICAgIGRhdGEtYmluZD1cXFwiZXZlbnQ6IHttb3VzZW91dDogJHBhcmVudC5sb2dNb3VzZU91dCwgbW91c2Vtb3ZlOiAkcGFyZW50LmxvZ01vdXNlTW92ZSwgbW91c2V1cDogJHBhcmVudC5sb2dNb3VzZVVwfVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtdGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImFicmlzLXRhYmxlLXRpdGxlX190ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6IHRpdGxlLCBjbGljazogJHBhcmVudC5jbGlja0NvbHVtblxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtdGl0bGVfX3Rvb2xzXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtdGl0bGVfX3NvcnRlclxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBvcmRlciA9PT0gZmFsc2UsIGh0bWw6ICRyb290Lmljb25zLnNvcnR1cFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLXRpdGxlX19zb3J0ZXJcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogb3JkZXIgPT09IHRydWUsIGh0bWw6ICRyb290Lmljb25zLnNvcnRkb3duXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtdGl0bGVfX2ZpbHRlclxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogY2xpY2tGaWx0ZXIsIGh0bWw6ICRyb290Lmljb25zLmZpbHRlclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZS10aXRsZV9yZXNpemVcXFwiXFxuICAgICAgICAgICAgICBkYXRhLWJpbmQ9XFxcImV2ZW50OiB7bW91c2VvdmVyOiAkcGFyZW50LmxvZ01vdXNlT3ZlciwgbW91c2VvdXQ6ICRwYXJlbnQubG9nTW91c2VPdXQsIG1vdXNlbW92ZTogJHBhcmVudC5sb2dNb3VzZU1vdmUsIG1vdXNldXA6ICRwYXJlbnQubG9nTW91c2VVcCwgbW91c2Vkb3duOiAkcGFyZW50LmxvZ01vdXNlRG93bn1cXFwiPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwiYWJyaXMtdGFibGUtaGVhZGVyLXRpdGxlX19jZWxsXFxcIj48L3RoPlxcbiAgICAgICAgPC90cj5cXG4gICAgICA8L3RoZWFkPlxcbiAgICAgIDx0Ym9keSBjbGFzcz1cXFwiYWJyaXMtdGFibGVfX2JvZHlcXFwiPlxcbiAgICAgICAgPCEtLSBrbyBpZjogcm93cy5sZW5ndGggPT0gMCAmJiBsb2FkaW5nTXV0ZXggPT0gZmFsc2UgIC0tPlxcbiAgICAgICAgPHRyIGNsYXNzPVxcXCJhYnJpcy10YWJsZV9fcm93XFxcIj5cXG4gICAgICAgICAgPHRoIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1jZWxsXFxcIiBjb2xzcGFuPVxcXCIxMDAlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6IG5vRGF0YVRleHRcXFwiPjwvdGg+XFxuICAgICAgICA8L3RyPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8IS0tIGtvIGlmOiBsb2FkaW5nTXV0ZXggLS0+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGNvbHVtbnMgLS0+XFxuICAgICAgICA8dHIgY2xhc3M9XFxcImFicmlzLXRhYmxlX19yb3dcXFwiPjwvdHI+XFxuICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiYWJyaXMtdGFibGUtY2VsbCBhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbFxcXCIgPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGVfX2NoZWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGVfX2ljb24tY2hlY2tcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvdGQ+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6ICRwYXJlbnQuY29sdW1ucyAtLT5cXG4gICAgICAgIDwhLS0ga28gaWY6IHZpc2libGUgLS0+XFxuICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiYWJyaXMtdGFibGUtY2VsbCBhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtY2VsbF9fY29udGFpbmVyIGFicmlzLXRhYmxlLWNlbGxfX2NvbnRhaW5lci0tbG9hZGluZ1xcXCI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvdGQ+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgPHRkIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1jZWxsIGFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsXFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtdGVjaG5pY2FsLWNlbGxfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtaWNvbi1yb3ctdG9vbHMgYWJyaXMtdGFibGVfX21vcmVcXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMubW9yZVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtaWNvbi1yb3ctdG9vbHMgYWJyaXMtdGFibGVfX2VkaXRcXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMuZWRpdFxcXCI+PC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC90ZD5cXG4gICAgICAgIDwvdHI+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiB7ZGF0YTogcm93c30gLS0+XFxuICAgICAgICA8dHIgY2xhc3M9XFxcImFicmlzLXRhYmxlX19yb3dcXFwiIGRhdGEtYmluZD1cXFwiY3NzOiB7J2FicmlzLXRhYmxlX19yb3ctLXNlbGVjdGVkJzogc2VsZWN0ZWR9LCBzdHlsZTogeydiYWNrZ3JvdW5kLWNvbG9yJzogJ25vbmUnIH1cXFwiPlxcbiAgICAgICAgICA8dGQgY2xhc3M9XFxcImFicmlzLXRhYmxlLWNlbGwgYWJyaXMtdGFibGUtdGVjaG5pY2FsLWNlbGxcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IHNlbGVjdFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtdGVjaG5pY2FsLWNlbGxfX2NvbnRhaW5lclxcXCI+XFxuICAgICAgICAgICAgICA8IS0tIGtvIGlmOiAkcGFyZW50LmlzTnVtYmVyIC0tPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGVfX251bWJlclxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBudW1iZXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICA8IS0tIGtvIGlmOiAhJHBhcmVudC5pc051bWJlciAtLT5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlX19jaGVja1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlX19pY29uLWNoZWNrXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHNlbGVjdGVkLCBodG1sOiAkcm9vdC5pY29ucy5jaGVja1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGNlbGxzIC0tPlxcbiAgICAgICAgICA8IS0tIGtvIGNvbXBvbmVudDogeyBuYW1lOiAnYWJyaXMtdGFibGUtY2VsbCcsIHBhcmFtczogeyBjZWxsOiAkZGF0YSwgdGFibGU6ICRwYXJlbnRzWzFdIH0gfSAtLT5cXG4gICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICA8dGQgY2xhc3M9XFxcImFicmlzLXRhYmxlLWNlbGwgYWJyaXMtdGFibGUtdGVjaG5pY2FsLWNlbGxcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGNsaWNrXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbF9fY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLWljb24tcm93LXRvb2xzIGFicmlzLXRhYmxlX19tb3JlXFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLm1vcmVcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtaWNvbi1yb3ctdG9vbHMgYWJyaXMtdGFibGVfX2VkaXRcXFwiIGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMuZWRpdFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGVfX3Jvdy0tc2VsZWN0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICEkcGFyZW50Lmhhc0FjdGl2ZUlucGxhY2VFZGl0b3JcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlX19yb3ctLWNvbG9yZWRcXFwiIGRhdGEtYmluZD1cXFwic3R5bGU6IHsgJ2JhY2tncm91bmQnOiBjb2xvciA/IGNvbG9yIDogJ3JnYmEoMjQ4LDI0OSwyNTMpJyB9XFxcIj48L2Rpdj5cXG4gICAgICAgICAgPC90ZD5cXG4gICAgICAgIDwvdHI+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICA8L3Rib2R5PlxcbiAgICAgIDx0Zm9vdCBjbGFzcz1cXFwiYWJyaXMtdGFibGVfX2Zvb3RlciBhYnJpcy10YWJsZS1zdGlja3ktY29tcG9uZW50XFxcIj5cXG4gICAgICAgIDx0ciBjbGFzcz1cXFwiYWJyaXMtdGFibGUtZm9vdGVyLXN1bW1hcnlcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogc2hvd1RhYmxlU3VtbWFyeVxcXCI+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwiYWJyaXMtdGFibGUtY2VsbCBhYnJpcy10YWJsZS10ZWNobmljYWwtY2VsbCBhYnJpcy10YWJsZS1mb290ZXJfX2NlbGxcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsX19jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtc3ZnLWljb24gYWJyaXMtdGFibGUtaWNvbi1lcXVhbFxcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiAkcm9vdC5pY29ucy5lcXVhbFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogY29sdW1ucyAtLT5cXG4gICAgICAgICAgPCEtLSBrbyBpZjogdmlzaWJsZSAtLT5cXG4gICAgICAgICAgPHRoIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1jZWxsIGFicmlzLXRhYmxlLWZvb3Rlcl9fY2VsbFxcXCI+XFxuICAgICAgICAgICAgPGFicmlzLXRhYmxlLXN1bW1hcnkgcGFyYW1zPSdjb2x1bW46ICRkYXRhJz48L2FicmlzLXRhYmxlLXN1bW1hcnk+XFxuICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgPHRoIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1jZWxsIGFicmlzLXRhYmxlLXRlY2huaWNhbC1jZWxsIGFicmlzLXRhYmxlLWZvb3Rlcl9fY2VsbFxcXCI+PC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgICAgICA8dHIgY2xhc3M9XFxcImFicmlzLXRhYmxlLWZvb3Rlci10b29sc1xcXCI+XFxuICAgICAgICAgIDx0aCBjbGFzcz1cXFwiYWJyaXMtdGFibGUtZm9vdGVyLXRvb2xzX19jZWxsXFxcIiBjb2xzcGFuPVxcXCIxMDAlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZS1mb290ZXItdG9vbHNfX2NvbnRhaW5lciBhYnJpcy10YWJsZS1ncm91cC1oZWFkZXItdGVjaG5pY2FsLWNlbGxcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtcm93LW1hbmFnZW1lbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8YWJyaXMtYWN0aW9ucyBjbGFzcz1cXFwiYWJyaXMtdGFibGUtYWN0aW9uc1xcXCIgcGFyYW1zPVxcXCJtb2RlbDogJGRhdGEsIG9wdGlvbnM6IHsgYWN0aW9uOiAnYm90dG9tQWN0aW9ucycgfVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvYWJyaXMtYWN0aW9ucz5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtdGFibGUtaW5mb1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1pbmZvX190b3RhbCBhYnJpcy10YWJsZS1pbmZvX190ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgIGRhdGEtYmluZD1cXFwidGV4dDogJ1RvdGFsOiAnICsgdG90YWxDb3VudFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy10YWJsZS1pbmZvX19nby10b1xcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImFicmlzLXRhYmxlLWdvLXRvX190ZXh0IGFicmlzLXRhYmxlLWluZm9fX3RleHRcXFwiPkdvIHRvOiA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJhYnJpcy10YWJsZS1nby10b19fdmFsdWVcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IHN0YXJ0Um93XFxcIi8+XFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYWJyaXMtYnRuLXRyYW5zcGFyZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLXN2Zy1pY29uIGFicmlzLXRhYmxlLWdvLXRvX19pY29uXFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLmFycm93cmlnaHRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L3RoPlxcbiAgICAgICAgPC90cj5cXG4gICAgICA8L3Rmb290PlxcbiAgICA8L3RhYmxlPlxcbiAgPC9kaXY+XFxuPC9kaXY+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJhYnJpcy1zZWFyY2hcXFwiPlxcbiAgPGlucHV0IGNsYXNzPVxcXCJhYnJpcy1zZWFyY2hfX3ZhbHVlXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiB2YWx1ZSwgYXR0cjogeyBwbGFjZWhvbGRlcjogJ1NlYXJjaC4uLicgfVxcXCIgLz5cXG4gIDxkaXYgY2xhc3M9XFxcImFicmlzLXNlYXJjaF9fYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiByZWZyZXNoLCBhdHRyOiB7IHRpdGxlOiAnU2VhcmNoJyB9XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYWJyaXMtc3ZnLWljb24gYWJyaXMtc2VhcmNoX19pY29uXFxcIiBkYXRhLWJpbmQ9XFxcImh0bWw6ICRyb290Lmljb25zLnNlYXJjaFxcXCI+PC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzcGFuIGNsYXNzPVxcXCJhYnJpcy10YWJsZS1zdW1tYXJ5X192YWx1ZVxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiB2YWx1ZVxcXCI+PC9zcGFuPlxcbjxzZWxlY3QgY2xhc3M9XFxcImFicmlzLXRhYmxlLXN1bW1hcnlfX3NlbGVjdFxcXCIgIGRhdGEtYmluZD1cXFwidmFsdWU6IGZ1bmNcXFwiPlxcbiAgPCEtLSBrbyBmb3JlYWNoOiBzdW1tYXJ5SXRlbXMgLS0+XFxuICAgIDxvcHRpb24gZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZSwgdmFsdWU6IHZhbHVlLCBhdHRyOiB7dGl0bGU6IHRpdGxlfVxcXCI+PC9vcHRpb24+XFxuICA8IS0tIC9rbyAtLT4gIFxcbjwvc2VsZWN0PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGJ1dHRvbiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkZGF0YS5mb3JtSWQgIT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGFjdGlvbiwgXFxuICAgICAgICAgICAgICAgIHZpc2libGU6ICEkZGF0YS52aXNpYmxlIHx8IGtvLnVud3JhcCh2aXNpYmxlKSxcXG4gICAgICAgICAgICAgICAgZW5hYmxlOiAhJGRhdGEuZW5hYmxlZCB8fCBrby51bndyYXAoZW5hYmxlZCksXFxuICAgICAgICAgICAgICAgIGF0dHI6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogJ2FicmlzLWJ1dHRvbi0tdHJhbnNwYXJlbnQgYWN0aW9uLWJ1dHRvbiBhYnJpcy1hY3Rpb24tYnV0dG9uICcgKyBrby51bndyYXAoJGRhdGEuY3NzQ2xhc3NlcykgKyAoa28udW53cmFwKCRkYXRhLmFjdGl2ZSkgPT09IHRydWUgPyAnIGFicmlzLWFjdGlvbi0tYWN0aXZlJyA6ICcnKSxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJGRhdGEudGl0bGUgfHwgJGRhdGEubmFtZSwgZm9ybTogJGRhdGEuZm9ybUlkLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICRkYXRhLmZvcm1JZCAhPT0gdW5kZWZpbmVkID8gJ3N1Ym1pdCcgOiAnYnV0dG9uJ1xcbiAgICAgICAgICAgICAgICAgICAgfVxcXCI+XFxuICAgIDwhLS0ga28gaWY6ICRkYXRhLmljb24gLS0+XFxuICAgIDwhLS0gPHNwYW4gZGF0YS1iaW5kPVxcXCJjc3M6ICgnZmEgaWNvbiAnICsgKHR5cGVvZiBpY29uID09ICdmdW5jdGlvbicgPyBpY29uKCkgOiBpY29uKSlcXFwiPjwvc3Bhbj4gLS0+XFxuICAgIDwhLS0gL2tvIC0tPlxcbiAgICA8IS0tIGtvIGlmOiAkZGF0YS5zdmcgLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImFicmlzLWFjdGlvbi1idXR0b25fX2ljb24gYWJyaXMtYnV0dG9uX19zdmctaWNvblxcXCIgZGF0YS1iaW5kPVxcXCJodG1sOiBzdmdcXFwiPjwvZGl2PlxcbiAgICA8IS0tIC9rbyAtLT5cXG4gICAgPCEtLSBrbyBpZm5vdDogJHBhcmVudHNbMV0uc2hvcnQgLS0+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJhYnJpcy1hY3Rpb24tYnV0dG9uX19sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkZGF0YS50aXRsZSwgY3NzOiBrby51bndyYXAoJGRhdGEuY3NzTGFiZWwpLCBzdHlsZTogeydkaXNwbGF5JyA6ICRkYXRhLnRpdGxlID8gJ2Jsb2NrJyA6ICdub25lJ31cXFwiID48L3NwYW4+XFxuICAgIDwhLS0gL2tvIC0tPlxcbjwvYnV0dG9uPlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPCEtLSBrbyBmb3JlYWNoOiBhY3Rpb25zIC0tPlxcbjwhLS0ga28gaWZub3Q6IGtvLnVud3JhcCgkZGF0YS5hY3Rpb25zKSAtLT5cXG48IS0tIGtvIGlmOiAhJGRhdGEuZ3JvdXBOYW1lICYmICEkcGFyZW50Lmdyb3VwTmFtZSB8fCAkZGF0YS5ncm91cE5hbWUgPT0gJHBhcmVudC5ncm91cE5hbWUgIC0tPlxcbjwhLS0ga28gY29tcG9uZW50OiB7IG5hbWU6ICdhYnJpcy1hY3Rpb24taXRlbScsIHBhcmFtczogJGRhdGEgfSAtLT5cXG48IS0tIC9rbyAtLT5cXG48IS0tIC9rbyAtLT5cXG48IS0tIC9rbyAtLT5cXG48IS0tIGtvIGlmOiBrby51bndyYXAoJGRhdGEuYWN0aW9ucykgJiYga28udW53cmFwKCRkYXRhLmFjdGlvbnMpLmxlbmd0aCA+IDAgLS0+XFxuPCEtLSBrbyBpZjogISRkYXRhLmdyb3VwTmFtZSAmJiAhJHBhcmVudC5ncm91cE5hbWUgfHwgJGRhdGEuZ3JvdXBOYW1lID09ICRwYXJlbnQuZ3JvdXBOYW1lICAtLT5cXG48ZGl2IGNsYXNzPVxcXCJhYnJpcy1uZXN0ZWQtYWN0aW9ucyBhYnJpcy1hY3Rpb24tY29udGV4dC1idXR0b25cXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwiYWJyaXMtYnV0dG9uX19sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZVxcXCI+PC9zcGFuPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhYnJpcy1uZXN0ZWQtYWN0aW9uc19fZHJvcGRvd25cXFwiPlxcbiAgICAgICAgPCEtLSBrbyBmb3JlYWNoOiBhY3Rpb25zIC0tPlxcbiAgICAgICAgPCEtLSBrbyBjb21wb25lbnQ6IHsgbmFtZTogJ2FicmlzLWFjdGlvbi1pdGVtJywgcGFyYW1zOiAkZGF0YSB9IC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPCEtLSAva28gLS0+XFxuPCEtLSAva28gLS0+XFxuPCEtLSAva28gLS0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8YnV0dG9uIGNsYXNzPVxcXCJhYnJpcy1hY3Rpb24tYnV0dG9uIGFicmlzLWJ1dHRvbi0tdHJhbnNwYXJlbnQgYWJyaXMtYnV0dG9uLXRvZ2dsZVxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIlxcbiAgICBkYXRhLWJpbmQ9XFxcImNsaWNrOiB0b2dnbGUsIGF0dHI6IHsgdGl0bGU6IHRpdGxlIH1cXFwiPlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwiaHRtbDogJHJvb3QuaWNvbnMubW9yZV9zcVxcXCI+PC9kaXY+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJhYnJpcy1hY3Rpb24tYnV0dG9uX19sYWJlbFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiBtb3JlVGV4dFxcXCI+PC9zcGFuPlxcbjwvYnV0dG9uPlxcbjwhLS0ga28gaWY6IGlzT3BlbiAtLT5cXG48dWwgY2xhc3M9XFxcImFicmlzLWJ1dHRvbi10b2dnbGVfX2Ryb3Bkb3duLW1lbnVcXFwiPlxcbiAgICA8YWJyaXMtYWN0aW9ucyBjbGFzcz1cXFwiYWJyaXMtY29udGV4dC1hY3Rpb25zXFxcIiBwYXJhbXM9XFxcIm1vZGVsOiBkYXRhLCBvcHRpb25zOiB7IGFjdGlvbjogYWN0aW9ucyB9XFxcIj5cXG4gICAgPC9hYnJpcy1hY3Rpb25zPlxcbjwvdWw+XFxuPCEtLSAva28gLS0+XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8IS0tIDxzdmcgY2xhc3M9XFxcImFicmlzLWJ1dHRvbl9fc3ZnLWljb25cXFwiPjx1c2UgZGF0YS1iaW5kPVxcXCJhdHRyOnsneGxpbms6aHJlZic6J3Nwcml0ZW1hcC5zdmcjc3ByaXRlLWljb25fJytrby51bndyYXAoaWQpfVxcXCIgIHhsaW5rOmhyZWY9Jyc+PC91c2U+PC9zdmc+IC0tPlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMyA4LjQzNmExLjUgMS41IDAgMCAxIDIuMTIxLjAwNmw5LjI2NSA5LjMxNGEuODY1Ljg2NSAwIDAgMCAxLjIyOCAwbDkuMjY1LTkuMzE0YTEuNSAxLjUgMCAwIDEgMi4xMjEtLjAwNiAxLjUgMS41IDAgMCAxIC4wMDYgMi4xMjFsLTEwLjk0MyAxMWExLjUgMS41IDAgMCAxLTIuMTI2IDBsLTEwLjk0My0xMWExLjUgMS41IDAgMCAxIC4wMDYtMi4xMjF6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTguOTY4IDI3YTEuNSAxLjUgMCAwIDEgLjAwNS0yLjEyMWw5LjMxNS05LjI2NWEuODY3Ljg2NyAwIDAgMCAwLTEuMjI4bC05LjMxNS05LjI2NWExLjUgMS41IDAgMCAxLS4wMDUtMi4xMjEgMS41IDEuNSAwIDAgMSAyLjEyMS0uMDA2bDExIDEwLjk0M2ExLjUgMS41IDAgMCAxIDAgMi4xMjZsLTExIDEwLjk0M2ExLjUgMS41IDAgMCAxLTIuMTIxLS4wMDZ6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PHBhdGggZD1cXFwiTTI2IDhhMS41IDEuNSAwIDAgMC0yLjEyMSAwbC0xMS4yNjQgMTEuMjY0YS44NjkuODY5IDAgMCAxLTEuMjMgMGwtNS4yNjQtNS4yNjRhMS41IDEuNSAwIDAgMC0yLjEyMSAyLjEyMWw2LjkzOSA2Ljk0YTEuNSAxLjUgMCAwIDAgMi4xMjIgMGwxMi45MzktMTIuOTRhMS41IDEuNSAwIDAgMCAwLTIuMTIxelxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0xNy43MTUgMTVsMTAuNzIzLTEwLjcyM2ExLjkyMSAxLjkyMSAwIDAgMCAwLTIuNzE1IDEuOTIxIDEuOTIxIDAgMCAwLTIuNzE1IDBsLTEwLjcyMyAxMC43MjMtMTAuNzIzLTEwLjcyM2ExLjkyIDEuOTIgMCAwIDAtMi43MTUgMi43MTVsMTAuNzIzIDEwLjcyMy0xMC43MjMgMTAuNzIzYTEuOTIgMS45MiAwIDEgMCAyLjcxNSAyLjcxNWwxMC43MjMtMTAuNzIzIDEwLjcyMyAxMC43MjNhMS45MiAxLjkyIDAgMSAwIDIuNzE1LTIuNzE1elxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yMS41NzMgMjloLTE3LjM5NmEzLjE3OCAzLjE3OCAwIDAgMS0zLjE3Ny0zLjE3N3YtMTcuMTQ2YTMuMTc4IDMuMTc4IDAgMCAxIDMuMTc3LTMuMTc3aDcuMmExLjUgMS41IDAgMCAxIDEuNSAxLjUgMS41IDEuNSAwIDAgMS0xLjUgMS41aC03LjJhLjE3OC4xNzggMCAwIDAtLjE3Ny4xNzd2MTcuMTQ2YS4xNzguMTc4IDAgMCAwIC4xNzcuMTc3aDE3LjRhLjE3OC4xNzggMCAwIDAgLjE3OC0uMTc4di03LjA3MmExLjUgMS41IDAgMCAxIDEuNS0xLjUgMS41IDEuNSAwIDAgMSAxLjUgMS41djcuMDczYTMuMTc4IDMuMTc4IDAgMCAxLTMuMTgyIDMuMTc3ek04LjE4MSAyMS4yODNsLjYxOS0zLjQ3M2EuNDU0LjQ1NCAwIDAgMSAuNzY4LS4yNDFsMi44NTMgMi44NTNhLjQ1My40NTMgMCAwIDEtLjI0Mi43NjdsLTMuNDcyLjYyMWEuNDU0LjQ1NCAwIDAgMS0uNTI2LS41Mjd6XFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiMTUuNDA1XFxcIiB5PVxcXCIzLjU4NVxcXCIgd2lkdGg9XFxcIjVcXFwiIGhlaWdodD1cXFwiMTdcXFwiIHJ4PVxcXCIuNDhcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDEzLjc5IC05LjEyMSkgcm90YXRlKDQ1KVxcXCI+PC9yZWN0PjxwYXRoIGQ9XFxcIk0yNC45IDIuNTMxaDIuMjQxYTEuMzc5IDEuMzc5IDAgMCAxIDEuMzc1IDEuMzc5di45MTlhLjU4OS41ODkgMCAwIDEtLjU4OS41ODloLTMuODI3YS41ODkuNTg5IDAgMCAxLS41ODktLjU4OXYtLjkxOWExLjM3OSAxLjM3OSAwIDAgMSAxLjM4OS0xLjM3OXpcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDEwLjQzIC0xNy4yMzIpIHJvdGF0ZSg0NSlcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMCAzMGwzMC0zMFxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yNi4zLDcuNTMxQTEuODgzLDEuODgzLDAsMCwwLDI4LjE4LDUuNjQ5VjEuODgzQTEuODgzLDEuODgzLDAsMCwwLDI2LjMsMEgzLjdBMS44ODMsMS44ODMsMCwwLDAsMS44MiwxLjg4M2ExLjg2MiwxLjg2MiwwLDAsMCwuMTM5LjdsMCwuMDExYTEuODg3LDEuODg3LDAsMCwwLC40MTEuNjJoMEwxNC4xNTcsMTUsMi4zODcsMjYuNzdsMCwuMDA2QTEuODgyLDEuODgyLDAsMCwwLDMuNywzMEgyNi4zYTEuODgzLDEuODgzLDAsMCwwLDEuODgzLTEuODgzVjI0LjM1MWExLjg4MywxLjg4MywwLDAsMC0zLjc2NiwwdjEuODgzSDguMjQ5bDkuOS05LjlhMS44ODEsMS44ODEsMCwwLDAsMC0yLjY2MmwtLjAwOC0uMDA2LDAtLjAwOEw4LjI0OSwzLjc2NkgyNC40MTRWNS42NDlBMS44ODMsMS44ODMsMCwwLDAsMjYuMyw3LjUzMVpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMTMuMDYgMjkuMTg4YTIuMDIgMi4wMiAwIDAgMS0xLjEyLS4zMzMgMi4xMjYgMi4xMjYgMCAwIDEtLjk0LTEuODI2di05LjI3MmEyLjAxNSAyLjAxNSAwIDAgMC0uMjgxLS44MzVsLTkuMzE5LTEyLjI0MWExLjk5NCAxLjk5NCAwIDAgMS0uMjgxLTIuMTE5IDIgMiAwIDAgMSAxLjg1Mi0xLjA2MmgyNC4wNThhMi4wMTQgMi4wMTQgMCAwIDEgMS44NTQgMS4wNDcgMi4wMTMgMi4wMTMgMCAwIDEtLjIyOSAyLjExNmwtOC43NDMgMTIuMjA3YTIuMTkzIDIuMTkzIDAgMCAwLS4yODUuODg3djYuODIyYTMuMSAzLjEgMCAwIDEtMS43OTEgMi43MzRsLTMuODQ2IDEuNjc1YTIuMzIxIDIuMzIxIDAgMCAxLS45MjkuMnptLTguMDMyLTI0LjY4OGw4LjA3NyAxMC42YTQuODcxIDQuODcxIDAgMCAxIC44OTUgMi42NTd2Ny45NTRsMi42MzctMS4xNDktLjAxMS02LjhhNS4wNTggNS4wNTggMCAwIDEgLjg0Ni0yLjYzNGw3LjYwOS0xMC42Mjh6XFxcIj48L3BhdGg+PHRpdGxlPjwvdGl0bGU+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNyAyN1xcXCI+PGcgaWQ9XFxcItCh0LvQvtC5XzQ0XFxcIiBkYXRhLW5hbWU9XFxcItCh0LvQvtC5IDQ0XFxcIj48cGF0aCBkPVxcXCJNMjMuNjcsMEgzLjMzQTMuMzQsMy4zNCwwLDAsMCwwLDMuMzNWMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDMuMzMsMjdIMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDI3LDIzLjY3VjMuMzNBMy4zNCwzLjM0LDAsMCwwLDIzLjY3LDBaTTI0LDIzLjY3YS4zMy4zMywwLDAsMS0uMzMuMzNIMy4zM0EuMzMuMzMsMCwwLDEsMywyMy42N1YzLjMzQS4zMy4zMywwLDAsMSwzLjMzLDNIMjMuNjdhLjMzLjMzLDAsMCwxLC4zMy4zM1pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTkuODYsMTJIMTVWNy4xNGExLjUxLDEuNTEsMCwxLDAtMywwVjEySDcuMTRhMS41MSwxLjUxLDAsMSwwLDAsM0gxMnY0Ljg1YTEuNTEsMS41MSwwLDEsMCwzLDBWMTVoNC44NWExLjUxLDEuNTEsMCwxLDAsMC0zWlxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI3IDI3XFxcIj48ZyBpZD1cXFwi0KHQu9C+0LlfNDRcXFwiIGRhdGEtbmFtZT1cXFwi0KHQu9C+0LkgNDRcXFwiPjxwYXRoIGQ9XFxcIk0yMy42NywwSDMuMzNBMy4zNCwzLjM0LDAsMCwwLDAsMy4zM1YyMy42N0EzLjM0LDMuMzQsMCwwLDAsMy4zMywyN0gyMy42N0EzLjM0LDMuMzQsMCwwLDAsMjcsMjMuNjdWMy4zM0EzLjM0LDMuMzQsMCwwLDAsMjMuNjcsMFpNMjQsMjMuNjdhLjMzLjMzLDAsMCwxLS4zMy4zM0gzLjMzQS4zMy4zMywwLDAsMSwzLDIzLjY3VjMuMzNBLjMzLjMzLDAsMCwxLDMuMzMsM0gyMy42N2EuMzMuMzMsMCwwLDEsLjMzLjMzWlxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk0yMC4yMiw2Ljc4YTEuODQsMS44NCwwLDAsMC0yLjU5LDBMMTMuNSwxMC45Miw5LjM3LDYuNzhBMS44MywxLjgzLDAsMCwwLDYuNzgsOS4zN2w0LjE0LDQuMTNMNi43OCwxNy42M2ExLjgzLDEuODMsMCwwLDAsMi41OSwyLjU5bDQuMTMtNC4xNCw0LjEzLDQuMTRhMS44MywxLjgzLDAsMCwwLDIuNTktMi41OUwxNi4wOCwxMy41bDQuMTQtNC4xM0ExLjg0LDEuODQsMCwwLDAsMjAuMjIsNi43OFpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNyAyN1xcXCI+PGcgaWQ9XFxcItCh0LvQvtC5XzIzXFxcIiBkYXRhLW5hbWU9XFxcItCh0LvQvtC5IDIzXFxcIj48cGF0aCBkPVxcXCJNMjMuNjcsMEgzLjMzQTMuMzQsMy4zNCwwLDAsMCwwLDMuMzNWMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDMuMzMsMjdIMjMuNjdBMy4zNCwzLjM0LDAsMCwwLDI3LDIzLjY3VjMuMzNBMy4zNCwzLjM0LDAsMCwwLDIzLjY3LDBaTTI0LDIzLjY3YS4zMy4zMywwLDAsMS0uMzMuMzNIMy4zM0EuMzMuMzMsMCwwLDEsMywyMy42N1YzLjMzQS4zMy4zMywwLDAsMSwzLjMzLDNIMjMuNjdhLjMzLjMzLDAsMCwxLC4zMy4zM1pcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMTgsNS4yMUg5QTIuMzIsMi4zMiwwLDAsMCw2LjY1LDcuNTJWMTkuNzNhMi4wOCwyLjA4LDAsMCwwLDIuMDYsMi4wNkEyLjA3LDIuMDcsMCwwLDAsMTAsMjEuMzFsMy40OC0yLjlMMTcsMjEuMzFhMi4wNiwyLjA2LDAsMCwwLDMuMzctMS41OFY3LjUyQTIuMzIsMi4zMiwwLDAsMCwxOCw1LjIxWm0tLjQzLDEzLjA2LTIuOC0yLjMzYTIsMiwwLDAsMC0yLjYyLDBsLTIuOCwyLjMzVjhoOC4yMlpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAzMCAzMFxcXCI+PGNpcmNsZSBjeD1cXFwiMTVcXFwiIGN5PVxcXCI1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNVxcXCIgY3k9XFxcIjE1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48Y2lyY2xlIGN4PVxcXCIxNVxcXCIgY3k9XFxcIjI1XFxcIiByPVxcXCIzXFxcIj48L2NpcmNsZT48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMTAuNSAxMy41aC02YTMgMyAwIDAgMS0zLTN2LTZhMyAzIDAgMCAxIDMtM2g2YTMgMyAwIDAgMSAzIDN2NmEzIDMgMCAwIDEtMyAzem0tNi0xMGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTZhMSAxIDAgMCAwLTEtMXpNMjUuNSAxMy41aC02YTMgMyAwIDAgMS0zLTN2LTZhMyAzIDAgMCAxIDMtM2g2YTMgMyAwIDAgMSAzIDN2NmEzIDMgMCAwIDEtMyAzem0tNi0xMGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTZhMSAxIDAgMCAwLTEtMXpNMTAuNSAyOC41aC02YTMgMyAwIDAgMS0zLTN2LTZhMyAzIDAgMCAxIDMtM2g2YTMgMyAwIDAgMSAzIDN2NmEzIDMgMCAwIDEtMyAzem0tNi0xMGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTZhMSAxIDAgMCAwLTEtMXpNMjUuNSAyOC41aC02YTMgMyAwIDAgMS0zLTN2LTZhMyAzIDAgMCAxIDMtM2g2YTMgMyAwIDAgMSAzIDN2NmEzIDMgMCAwIDEtMyAzem0tNi0xMGExIDEgMCAwIDAtMSAxdjZhMSAxIDAgMCAwIDEgMWg2YTEgMSAwIDAgMCAxLTF2LTZhMSAxIDAgMCAwLTEtMXpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMy4yMDkuNzVIMjAuNjc4YTMuMiwzLjIsMCwwLDEsMy4yMDksMy4xNzdWNS43NWgyLjkzNkEzLjE4LDMuMTgsMCwwLDEsMzAsOC45MjdWMjYuMDczYTMuMTgsMy4xOCwwLDAsMS0zLjE3NywzLjE3N0g5LjMyMmEzLjIsMy4yLDAsMCwxLTMuMjA5LTMuMTc3VjI0LjI1aC0yLjlBMy4yLDMuMiwwLDAsMSwwLDIxLjA3M1YzLjkyN0EzLjIsMy4yLDAsMCwxLDMuMjA5Ljc1Wm0yMy41ODIsMjUuNUEuMi4yLDAsMCwwLDI3LDI2LjA3M1Y4LjkyN2EuMi4yLDAsMCwwLS4yMDktLjE3N0g5LjQyN2EuMTc4LjE3OCwwLDAsMC0uMTc3LjE3N1YyNi4wNzNhLjE3OC4xNzgsMCwwLDAsLjE3Ny4xNzdaTTMsMjEuMDczYS4yLjIsMCwwLDAsLjIwOS4xNzdINi4yNVY4LjkyN0EzLjE4LDMuMTgsMCwwLDEsOS40MjcsNS43NWgxMS40NlYzLjkyN2EuMi4yLDAsMCwwLS4yMDktLjE3N0gzLjIwOUEuMi4yLDAsMCwwLDMsMy45MjdaXFxcIiBzdHlsZT1cXFwiZmlsbDojMDkyYTNhXFxcIj48L3BhdGg+PHJlY3QgeD1cXFwiMTEuNVxcXCIgeT1cXFwiMTAuODIzXFxcIiB3aWR0aD1cXFwiMTNcXFwiIGhlaWdodD1cXFwiM1xcXCIgcng9XFxcIjEuNVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMzYgMjQuNjQ1KSByb3RhdGUoLTE4MClcXFwiPjwvcmVjdD48cmVjdCB4PVxcXCIxMS41XFxcIiB5PVxcXCIxNS44MjNcXFwiIHdpZHRoPVxcXCIxM1xcXCIgaGVpZ2h0PVxcXCIzXFxcIiByeD1cXFwiMS41XFxcIiB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgzNiAzNC42NDUpIHJvdGF0ZSgxODApXFxcIiBzdHlsZT1cXFwiZmlsbDojMDkyYTNhXFxcIj48L3JlY3Q+PHJlY3QgeD1cXFwiMTEuNVxcXCIgeT1cXFwiMjAuODIzXFxcIiB3aWR0aD1cXFwiMTNcXFwiIGhlaWdodD1cXFwiM1xcXCIgcng9XFxcIjEuNVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMzYgNDQuNjQ1KSByb3RhdGUoMTgwKVxcXCI+PC9yZWN0Pjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yOC4yNSAyNS42MjlsLTcuMjgyLTcuMjgyYTEwLjk4NyAxMC45ODcgMCAxIDAtMi4wNDkgMi4xOTNsNy4yMSA3LjIxYTEuNSAxLjUgMCAxIDAgMi4xMjEtMi4xMjF6bS0xNi4yNS01LjYyOWE4IDggMCAxIDEgOC04IDguMDA5IDguMDA5IDAgMCAxLTggOHpcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48cGF0aCBkPVxcXCJNMTkuNjgxIDExLjUxOGg0LjkzOHYxLjI4MmgtNi44ODF2LTEuMDQxbDQuNzgtNi45MDZoLTQuNzQ4di0xLjI5NWg2Ljd2MS4wMTV6TTIzLjM0NCAyMi42NDdoLTMuNThsLS43NSAyLjE1M2gtMS42NjlsMy40OTEtOS4yNDJoMS40NDFsMy41IDkuMjQyaC0xLjY3N3ptLTMuMTMtMS4yOTRoMi42NzlsLTEuMzQtMy44MzR6TTE0LjgwNSAxOC42ODlhMS4yNDkgMS4yNDkgMCAwIDAtMS43NjcgMGwtMi4xNTYgMi4xNTZ2LTE2LjAyOWExLjI1IDEuMjUgMCAwIDAtMi41IDB2MTYuMDE4bC0yLjEyLTIuMTJhMS4yNDggMS4yNDggMCAwIDAtMS43NjYgMGwtLjAxMy4wMTNhMS4yNDggMS4yNDggMCAwIDAgMCAxLjc2Nmw0LjI3NiA0LjI3NmExLjI0OSAxLjI0OSAwIDAgMCAxLjc2NSAwbC4wMTMtLjAxM2EuODkzLjg5MyAwIDAgMCAuMDYtLjA5MWw0LjIwOC00LjIwOGExLjI0OSAxLjI0OSAwIDAgMCAwLTEuNzY4elxcXCI+PC9wYXRoPjx0aXRsZT48L3RpdGxlPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMzAgMzBcXFwiPjxwYXRoIGQ9XFxcIk0yMy4zNDQgMTAuNjQ3aC0zLjU4bC0uNzUgMi4xNTNoLTEuNjY5bDMuNDkxLTkuMjQyaDEuNDQxbDMuNSA5LjI0MmgtMS42Nzd6bS0zLjEzLTEuMjk0aDIuNjc5bC0xLjM0LTMuODM0ek0xOS42ODEgMjMuNTE4aDQuOTM4djEuMjgyaC02Ljg4MXYtMS4wNDFsNC43OC02LjkwNmgtNC43NDh2LTEuM2g2Ljd2MS4wMTV6TTE0LjgwNSAxOC42OWExLjI0OSAxLjI0OSAwIDAgMC0xLjc2NyAwbC0yLjE1NiAyLjE1NXYtMTYuMDI5YTEuMjUgMS4yNSAwIDAgMC0yLjUgMHYxNi4wMTlsLTIuMTItMi4xMjFhMS4yNSAxLjI1IDAgMCAwLTEuNzY2IDBsLS4wMTMuMDEzYTEuMjQ4IDEuMjQ4IDAgMCAwIDAgMS43NjZsNC4yNzYgNC4yNzZhMS4yNDkgMS4yNDkgMCAwIDAgMS43NjUgMGwuMDEzLS4wMTNhMSAxIDAgMCAwIC4wNi0uMDlsNC4yMDgtNC4yMDlhMS4yNDggMS4yNDggMCAwIDAgMC0xLjc2N3pcXFwiPjwvcGF0aD48dGl0bGU+PC90aXRsZT48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDMwIDMwXFxcIj48ZyBpZD1cXFwiYVxcXCI+PC9nPjxnIGlkPVxcXCJiXFxcIj48L2c+PGcgaWQ9XFxcImNcXFwiPjwvZz48ZyBpZD1cXFwiZFxcXCI+PC9nPjxnIGlkPVxcXCJlXFxcIj48L2c+PGcgaWQ9XFxcImZcXFwiPjwvZz48ZyBpZD1cXFwiZ1xcXCI+PC9nPjxnIGlkPVxcXCJoXFxcIj48L2c+PGcgaWQ9XFxcImlcXFwiPjwvZz48ZyBpZD1cXFwialxcXCI+PC9nPjxnIGlkPVxcXCJrXFxcIj48L2c+PGcgaWQ9XFxcImxcXFwiPjwvZz48ZyBpZD1cXFwibVxcXCI+PC9nPjxnIGlkPVxcXCJuXFxcIj48L2c+PGcgaWQ9XFxcIm9cXFwiPjwvZz48ZyBpZD1cXFwicFxcXCI+PC9nPjxnIGlkPVxcXCJxXFxcIj48L2c+PGcgaWQ9XFxcInJcXFwiPjwvZz48ZyBpZD1cXFwic1xcXCI+PC9nPjxnIGlkPVxcXCJ0XFxcIj48L2c+PGcgaWQ9XFxcInVcXFwiPjwvZz48ZyBpZD1cXFwidlxcXCI+PC9nPjxnIGlkPVxcXCJ3XFxcIj48L2c+PGcgaWQ9XFxcInhcXFwiPjwvZz48ZyBpZD1cXFwieVxcXCI+PC9nPjxnIGlkPVxcXCJhJiN4NjA7XFxcIj48L2c+PGcgaWQ9XFxcImFhXFxcIj48L2c+PGcgaWQ9XFxcImFiXFxcIj48L2c+PGcgaWQ9XFxcImFjXFxcIj48L2c+PGcgaWQ9XFxcImFkXFxcIj48L2c+PGcgaWQ9XFxcImFlXFxcIj48L2c+PGcgaWQ9XFxcImFmXFxcIj48L2c+PGcgaWQ9XFxcImFnXFxcIj48L2c+PGcgaWQ9XFxcImFoXFxcIj48L2c+PGcgaWQ9XFxcImFpXFxcIj48L2c+PGcgaWQ9XFxcImFqXFxcIj48L2c+PGcgaWQ9XFxcImFrXFxcIj48L2c+PGcgaWQ9XFxcImFsXFxcIj48L2c+PGcgaWQ9XFxcImFtXFxcIj48L2c+PGcgaWQ9XFxcImFuXFxcIj48L2c+PGcgaWQ9XFxcImFvXFxcIj48L2c+PGcgaWQ9XFxcImFwXFxcIj48L2c+PGcgaWQ9XFxcImFxXFxcIj48L2c+PGcgaWQ9XFxcImFyXFxcIj48L2c+PGcgaWQ9XFxcImFzXFxcIj48L2c+PGcgaWQ9XFxcImF0XFxcIj48L2c+PGcgaWQ9XFxcImF1XFxcIj48L2c+PGcgaWQ9XFxcImF2XFxcIj48L2c+PGcgaWQ9XFxcImF3XFxcIj48L2c+PGcgaWQ9XFxcImF4XFxcIj48L2c+PGcgaWQ9XFxcImF5XFxcIj48L2c+PGcgaWQ9XFxcImImI3g2MDtcXFwiPjwvZz48ZyBpZD1cXFwiYmFcXFwiPjwvZz48ZyBpZD1cXFwiYmJcXFwiPjwvZz48ZyBpZD1cXFwiYmNcXFwiPjwvZz48ZyBpZD1cXFwiYmRcXFwiPjwvZz48ZyBpZD1cXFwiYmVcXFwiPjwvZz48ZyBpZD1cXFwiYmZcXFwiPjwvZz48ZyBpZD1cXFwiYmdcXFwiPjwvZz48ZyBpZD1cXFwiYmhcXFwiPjxwYXRoIGQ9XFxcIk0yNS43MywxSDQuMjdjLTEuODEsMC0zLjI3LDEuNDctMy4yNywzLjI3VjI1LjczYzAsMS44MSwxLjQ3LDMuMjcsMy4yNywzLjI3SDI1LjczYzEuODEsMCwzLjI3LTEuNDcsMy4yNy0zLjI3VjQuMjdjMC0xLjgxLTEuNDctMy4yNy0zLjI3LTMuMjdaTTksMjdINC4yN2MtLjcsMC0xLjI3LS41Ny0xLjI3LTEuMjd2LTQuMjNoNnY1LjVabTAtNy41SDN2LTUuNWg2djUuNVptMC03LjVIM1Y3aDZ2NVptOS0zVjI3aC03VjdoN3YyWm05LDE2LjczYzAsLjctLjU3LDEuMjctMS4yNywxLjI3aC01Ljczdi01LjVoN3Y0LjIzWm0wLTYuMjNoLTd2LTUuNWg3djUuNVptMC03LjVoLTdWN2g3djVaXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4vcHJvcGVydHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQWN0aW9uIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWN0aW9uOiAoKSA9PiB2b2lkO1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIHZpc2libGU/OiBib29sZWFuO1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgaWNvbj86IHN0cmluZztcbiAgICBzdmc/OiBzdHJpbmc7XG4gICAgY29udGFpbmVyPzogc3RyaW5nO1xuICAgIGNzc0NsYXNzZXM/OiBzdHJpbmc7XG4gICAgY3NzSW1hZ2U/OiBzdHJpbmc7XG4gICAgY3NzTGFiZWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSUFjdGlvbiB7XG4gICAgY29uc3RydWN0b3Ioc291cmNlPzogSUFjdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UgfHwge30pLmZvckVhY2goa2V5ID0+IHRoaXNba2V5XSA9IHNvdXJjZVtrZXldKTtcbiAgICB9XG4gICAgQHByb3BlcnR5KCkgbmFtZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGFjdGlvbjogKCkgPT4gdm9pZDtcbiAgICBAcHJvcGVydHkoKSB0aXRsZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIHZpc2libGU6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgZW5hYmxlZDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoKSBhY3RpdmU6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgaWNvbjogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIHN2Zzogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGNvbnRhaW5lcjogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGNzc0NsYXNzZXM6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBjc3NJbWFnZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGNzc0xhYmVsOiBzdHJpbmc7XG59IiwiaW1wb3J0IFwiLi9hY3Rpb25zLnNjc3NcIjtcblxuIiwiaW1wb3J0IHsgaXNFcXVhbCB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgRGVwZW5kZW5jaWVzIH0gZnJvbSBcIi4vZGVwZW5kZW5jaWVzXCI7XG5cbmV4cG9ydCBjbGFzcyBIYXNoVGFibGVTdG9yYWdlIHtcbiAgICBwcm90ZWN0ZWQgaGFzaCA9IHt9O1xuICAgIHB1YmxpYyBvd25lcjogYW55O1xuICAgIHB1YmxpYyBnZXRWYWx1ZShuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuaGFzaFtuYW1lXTtcbiAgICAgICAgaWYodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMuaGFzaFtuYW1lXSA9IHZhbDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlIHtcbiAgICBwcml2YXRlIHByb3BlcnR5VmFsdWVMaXN0bmVyczoge1twcm9wZXJ0eU5hbWU6IHN0cmluZ106IHtba2V5OiBzdHJpbmddOiAob2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSkgPT4gdm9pZCB9fSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3VycmVudERlcGVuZGVuY2lzOiBEZXBlbmRlbmNpZXMgPSB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVByb3BlcnRpZXNTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IEhhc2hUYWJsZVN0b3JhZ2UoKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBmaW5pc2hDb2xsZWN0RGVwZW5kZW5jaWVzKCk6IERlcGVuZGVuY2llcyB7XG4gICAgICBjb25zdCBkZXBzID0gQmFzZS5jdXJyZW50RGVwZW5kZW5jaXM7XG4gICAgICBCYXNlLmN1cnJlbnREZXBlbmRlbmNpcyA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiBkZXBzO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0Q29sbGVjdERlcGVuZGVuY2llcyh1cGRhdGVyOiAoKSA9PiB2b2lkLCB0YXJnZXQ6IEJhc2UsIHByb3BlcnR5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmIChCYXNlLmN1cnJlbnREZXBlbmRlbmNpcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHQgdG8gY29sbGVjdCBuZXN0ZWQgZGVwZW5kZW5jaWVzLiBOZXN0ZWQgZGVwZW5kZW5jaWVzIGFyZSBub3Qgc3VwcG9ydGVkLlwiKTtcbiAgICAgIH1cbiAgICAgIEJhc2UuY3VycmVudERlcGVuZGVuY2lzID0gbmV3IERlcGVuZGVuY2llcyh1cGRhdGVyLCB0YXJnZXQsIHByb3BlcnR5KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzdGF0aWMgY29sbGVjdERlcGVuZGVuY3kodGFyZ2V0OiBCYXNlLCBwcm9wZXJ0eTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBpZiAoQmFzZS5jdXJyZW50RGVwZW5kZW5jaXMgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgQmFzZS5jdXJyZW50RGVwZW5kZW5jaXMuYWRkRGVwZW5kZW5jeSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICB9XG4gIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmFnZSA9IEJhc2UuY3JlYXRlUHJvcGVydGllc1N0b3JhZ2UoKSkge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uub3duZXIgPSB0aGlzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblByb3BlcnR5VmFsdWVDaGFuZ2VkKHByb3BlcnR5TmFtZTogc3RyaW5nLCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eUxpc3RuZXJzID0gdGhpcy5wcm9wZXJ0eVZhbHVlTGlzdG5lcnNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYoISFwcm9wZXJ0eUxpc3RuZXJzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0eUxpc3RuZXJzKS5mb3JFYWNoKGtleSA9PiBwcm9wZXJ0eUxpc3RuZXJzW2tleV0ob2xkVmFsdWUsIG5ld1ZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0UHJvcGVydHlWYWx1ZUNvcmUocHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSkge1xuICAgICAgICBCYXNlLmNvbGxlY3REZXBlbmRlbmN5KHRoaXMsIHByb3BlcnR5TmFtZSk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zdG9yYWdlLmdldFZhbHVlKHByb3BlcnR5TmFtZSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0UHJvcGVydHlWYWx1ZUNvcmUocHJvcGVydHlOYW1lOiBzdHJpbmcsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldFZhbHVlKHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvcGVydHlWYWx1ZUNvcmUocHJvcGVydHlOYW1lLCBkZWZhdWx0VmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgbmV3VmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlPzogYW55KSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5nZXRQcm9wZXJ0eVZhbHVlKHByb3BlcnR5TmFtZSwgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgaWYoIWlzRXF1YWwob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eVZhbHVlQ29yZShwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZChwcm9wZXJ0eU5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJQcm9wZXJ0eVZhbHVlTGlzdG5lcihwcm9wZXJ0eU5hbWU6IHN0cmluZywgbGlzdG5lcjogKG9sZFZhbHVlOiBhbnksIG5ld1ZhbHVlOiBhbnkpID0+IHZvaWQsIGtleTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBsZXQgcHJvcGVydHlMaXN0bmVycyA9IHRoaXMucHJvcGVydHlWYWx1ZUxpc3RuZXJzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGlmKCFwcm9wZXJ0eUxpc3RuZXJzKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eUxpc3RuZXJzID0ge31cbiAgICAgICAgICAgIHRoaXMucHJvcGVydHlWYWx1ZUxpc3RuZXJzW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0eUxpc3RuZXJzO1xuICAgICAgICB9XG4gICAgICAgIHByb3BlcnR5TGlzdG5lcnNba2V5XSA9IGxpc3RuZXI7XG4gICAgfVxuICAgIHB1YmxpYyB1blJlZ2lzdGVyUHJvcGVydHlWYWx1ZUxpc3RuZXIocHJvcGVydHlOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBsZXQgcHJvcGVydHlMaXN0bmVycyA9IHRoaXMucHJvcGVydHlWYWx1ZUxpc3RuZXJzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGlmKCEhcHJvcGVydHlMaXN0bmVycykge1xuICAgICAgICAgICAgZGVsZXRlIHByb3BlcnR5TGlzdG5lcnNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi9iYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBEZXBlbmRlbmNpZXMge1xuICAgIHByaXZhdGUgc3RhdGljIERlcGVuZGVuY2llc0NvdW50ID0gMDtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY3VycmVudERlcGVuZGVuY3k6ICgpID0+IHZvaWQsIHB1YmxpYyB0YXJnZXQ6IEJhc2UsIHB1YmxpYyBwcm9wZXJ0eTogc3RyaW5nKSB7XG4gICAgfVxuICAgIGRlcGVuZGVuY2llczogQXJyYXk8eyBvYmo6IEJhc2UsIHByb3A6IHN0cmluZywgaWQ6IHN0cmluZyB9PiA9IFtdO1xuICAgIGlkOiBzdHJpbmcgPSBcIlwiICsgKCsrRGVwZW5kZW5jaWVzLkRlcGVuZGVuY2llc0NvdW50KTtcbiAgICBhZGREZXBlbmRlbmN5KHRhcmdldDogQmFzZSwgcHJvcGVydHk6IHN0cmluZyk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSB0YXJnZXQgJiYgdGhpcy5wcm9wZXJ0eSA9PT0gcHJvcGVydHkpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmICh0aGlzLmRlcGVuZGVuY2llcy5zb21lKGRlcGVuZGVuY3kgPT4gZGVwZW5kZW5jeS5vYmogPT09IHRhcmdldCAmJiBkZXBlbmRlbmN5LnByb3AgPT09IHByb3BlcnR5KSlcbiAgICAgICAgcmV0dXJuO1xuICBcbiAgICAgIHRoaXMuZGVwZW5kZW5jaWVzLnB1c2goe1xuICAgICAgICBvYmo6IHRhcmdldCxcbiAgICAgICAgcHJvcDogcHJvcGVydHksXG4gICAgICAgIGlkOiB0aGlzLmlkXG4gICAgICB9KTtcbiAgICAgIHRhcmdldC5yZWdpc3RlclByb3BlcnR5VmFsdWVMaXN0bmVyKHByb3BlcnR5LCB0aGlzLmN1cnJlbnREZXBlbmRlbmN5LCB0aGlzLmlkKTtcbiAgXG4gICAgfVxuICAgIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmRlcGVuZGVuY2llcy5mb3JFYWNoKGRlcGVuZGVuY3kgPT4ge1xuICAgICAgICBkZXBlbmRlbmN5Lm9iai51blJlZ2lzdGVyUHJvcGVydHlWYWx1ZUxpc3RuZXIoZGVwZW5kZW5jeS5wcm9wLCBkZXBlbmRlbmN5LmlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGNsYXNzIENvbXB1dGVkVXBkYXRlcjxUID0gYW55PiB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDb21wdXRlZFVwZGF0ZXJUeXBlID0gXCJfX2RlcGVuZGVuY3lfY29tcHV0ZWRcIjtcbiAgICBwdWJsaWMgc3RhdGljIENvbGxlY3REZXBlbmRlbmNpZXM8VSA9IGFueT4ob2JqOiBCYXNlLCBjb21wdXRlZFVwZGF0ZXI6IENvbXB1dGVkVXBkYXRlcjxVPiwgcHJvcGVydHlOYW1lOiBzdHJpbmcpOiBVIHtcbiAgICAgIEJhc2Uuc3RhcnRDb2xsZWN0RGVwZW5kZW5jaWVzKCgpID0+IG9ialtwcm9wZXJ0eU5hbWVdID0gY29tcHV0ZWRVcGRhdGVyLnVwZGF0ZXIoKSwgb2JqLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gY29tcHV0ZWRVcGRhdGVyLnVwZGF0ZXIoKTtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY2llcyA9IEJhc2UuZmluaXNoQ29sbGVjdERlcGVuZGVuY2llcygpO1xuICAgICAgY29tcHV0ZWRVcGRhdGVyLnNldERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXMpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBkZXBlbmRlbmNpZXM6IERlcGVuZGVuY2llcyA9IHVuZGVmaW5lZDtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91cGRhdGVyOiAoKSA9PiBUKSB7XG4gICAgfVxuICAgIHJlYWRvbmx5IHR5cGUgPSBDb21wdXRlZFVwZGF0ZXIuQ29tcHV0ZWRVcGRhdGVyVHlwZTtcbiAgICBwdWJsaWMgZ2V0IHVwZGF0ZXIoKTogKCkgPT4gVCB7XG4gICAgICByZXR1cm4gdGhpcy5fdXBkYXRlcjtcbiAgICB9XG4gICAgcHVibGljIHNldERlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXM6IERlcGVuZGVuY2llcyk6IHZvaWQge1xuICAgICAgdGhpcy5jbGVhckRlcGVuZGVuY2llcygpO1xuICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBkZXBlbmRlbmNpZXM7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXREZXBlbmRlbmNpZXMoKTogRGVwZW5kZW5jaWVzIHtcbiAgICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY2llcztcbiAgICB9XG4gICAgcHVibGljIG9ic2VydmUodGFyZ2V0OiBCYXNlLCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xuICAgICAgQ29tcHV0ZWRVcGRhdGVyLkNvbGxlY3REZXBlbmRlbmNpZXModGFyZ2V0LCB0aGlzLCBwcm9wZXJ0eU5hbWUpO1xuICAgIH1cbiAgICBwcml2YXRlIGNsZWFyRGVwZW5kZW5jaWVzKCkge1xuICAgICAgaWYgKHRoaXMuZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgIHRoaXMuZGVwZW5kZW5jaWVzLmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICAgIGRpc3Bvc2UoKTogYW55IHtcbiAgICAgIHRoaXMuY2xlYXJEZXBlbmRlbmNpZXMoKTtcbiAgICB9XG4gIH1cbiAgIiwiaW1wb3J0IFwiLi9kcm9wZG93bi1hY3Rpb25zLnNjc3NcIjtcbiIsImltcG9ydCB7IENvbXB1dGVkVXBkYXRlciB9IGZyb20gXCIuL2RlcGVuZGVuY2llc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wZXJ0eURlY29yYXRvck9wdGlvbnMge1xuICAgIGRlZmF1bHRWYWx1ZT86IGFueTtcbiAgICBvblNldD86ICh2YWw6IGFueSwgdGFyZ2V0OiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eShvcHRpb25zPzogSVByb3BlcnR5RGVjb3JhdG9yT3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBwcm9jZXNzQ29tcHV0ZWRVcGRhdGVyID0gKG9iajogYW55LCB2YWw6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsICYmIHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgdmFsLnR5cGUgPT09IENvbXB1dGVkVXBkYXRlci5Db21wdXRlZFVwZGF0ZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENvbXB1dGVkVXBkYXRlci5Db2xsZWN0RGVwZW5kZW5jaWVzKG9iaiwgdmFsLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZ2V0RGVmYXVsdFZhbHVlID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICghIW9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBvcHRpb25zLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpID8gW10uY29uY2F0KGRlZmF1bHRWYWx1ZSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFByb3BlcnR5VmFsdWUoa2V5LCBnZXREZWZhdWx0VmFsdWUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHByb2Nlc3NDb21wdXRlZFVwZGF0ZXIodGhpcywgdmFsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByb3BlcnR5VmFsdWUoa2V5LCBuZXdWYWx1ZSwgZ2V0RGVmYXVsdFZhbHVlKCkpO1xuICAgICAgICAgICAgICAgIGlmICghIW9wdGlvbnMgJiYgb3B0aW9ucy5vblNldCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uU2V0KG5ld1ZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25cIjtcblxudHlwZSAgVE9wZXJhdGlvbiA9IFwiRVFcIiB8IFwiTkVRXCIgfCBcIkdcIiB8IFwiTFwiIHwgXCJHRVFcIiB8IFwiTEVRXCIgfCBcIklTTlwiIHwgXCJJU05OXCIgfCBcIkNcIjtcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRPcGVyYXRpb24ge1xuICAgIG9wOiBzdHJpbmc7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGZ1bmM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRDb21wYXJlIHtcbiAgICBmaWVsZDogc3RyaW5nO1xuICAgIG9wOiBUT3BlcmF0aW9uO1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRPcGVyYW5kIHtcbiAgICBsZXZlbHVwOiBib29sZWFuO1xuICAgIG9wZXJhbmQ6IHtcbiAgICAgICAgZmllbGQ6IHN0cmluZyxcbiAgICAgICAgb3A6IFRPcGVyYXRpb24sXG4gICAgICAgIHZhbHVlOiBzdHJpbmcgfCBOdW1iZXIsXG4gICAgICAgIHBhdGg/OiBzdHJpbmdbXSxcbiAgICAgICAgc2VhcmNoX2luX2tleT86IGJvb2xlYW4sXG4gICAgICAgIG1fb3JkZXI/OiBib29sZWFuLFxuICAgICAgICBmdW5jPzogc3RyaW5nLFxuICAgIH0sXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFnZ3JlZ2F0ZSB7XG4gICAgZnVuYzogc3RyaW5nLFxuICAgIGZpZWxkOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZpbmRMb2dpYyB7XG4gICAgc3RyaWN0OiBib29sZWFuO1xuICAgIG9wZXJhbmRzOiBJRmluZE9wZXJhbmRbXTtcbiAgICBhZ2dyZWdhdGU/OiBJQWdncmVnYXRlW107XG59XG5cbmV4cG9ydCB2YXIgb3BlcmF0aW9uc01hcDogeyBbaW5kZXg6IHN0cmluZ106IElGaW5kT3BlcmF0aW9uW10gfSA9IHt9O1xuXG52YXIgZGVmYXVsdE9wZXJhdGlvbnNNYXAgPSB7XG4gICAgc3RyaW5nOiBbXG4gICAgICAgIHtvcDogXCJDXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJjb250YWluc1wiKX0sXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIGRhdGU6IFtcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiR1wiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZGF0ZWdyZWF0ZXJcIil9LFxuICAgICAgICB7b3A6IFwiTFwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZGF0ZWxlc3NcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIGRhdGV0aW1lOiBbXG4gICAgICAgIHtvcDogXCJHXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlZ3JlYXRlclwiKX0sXG4gICAgICAgIHtvcDogXCJMXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJkYXRlbGVzc1wiKX0sXG4gICAgICAgIHtvcDogXCJJU05cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbnVsbFwiKX0sXG4gICAgICAgIHtvcDogXCJJU05OXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc25vdG51bGxcIil9LFxuICAgIF0sXG4gICAgaW50ZWdlcjogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIk5FUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybm90ZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiR1wiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlclwiKX0sXG4gICAgICAgIHtvcDogXCJMXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzXCIpfSxcbiAgICAgICAge29wOiBcIkdFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIkxFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybGVzc2VxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbiAgICBudW1lcmljOiBbXG4gICAgICAgIHtvcDogXCJFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJub3RlcXVhbFwiKX0sXG4gICAgICAgIHtvcDogXCJHXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyXCIpfSxcbiAgICAgICAge29wOiBcIkxcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmxlc3NcIil9LFxuICAgICAgICB7b3A6IFwiR0VRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJncmVhdGVyZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiTEVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJpc251bGxcIil9LFxuICAgICAgICB7b3A6IFwiSVNOTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNub3RudWxsXCIpfSxcbiAgICBdLFxuICAgIGJvb2w6IFtcbiAgICAgICAge29wOiBcIkVRXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJlcXVhbFwiKX0sXG4gICAgXSxcbiAgICBtb25leTogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIk5FUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybm90ZXF1YWxcIil9LFxuICAgICAgICB7b3A6IFwiR1wiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlclwiKX0sXG4gICAgICAgIHtvcDogXCJMXCIsIHRleHQ6IExvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJmaWx0ZXJsZXNzXCIpfSxcbiAgICAgICAge29wOiBcIkdFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyZ3JlYXRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIkxFUVwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVybGVzc2VxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbiAgICByYWRpb2J1dHRvbjogW1xuICAgICAgICB7b3A6IFwiRVFcIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmVxdWFsXCIpfSxcbiAgICAgICAge29wOiBcIklTTlwiLCB0ZXh0OiBMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZmlsdGVyaXNudWxsXCIpfSxcbiAgICAgICAge29wOiBcIklTTk5cIiwgdGV4dDogTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImZpbHRlcmlzbm90bnVsbFwiKX0sXG4gICAgXSxcbn1cbk9iamVjdC5rZXlzKGRlZmF1bHRPcGVyYXRpb25zTWFwKS5mb3JFYWNoKGtleSA9PiBvcGVyYXRpb25zTWFwW2tleV0gPSBkZWZhdWx0T3BlcmF0aW9uc01hcFtrZXldKTtcbiIsImV4cG9ydCBjb25zdCBhZGQgPSByZXF1aXJlKCcuL2ljb25zL2ljb25faXRlbS1hZGQuc3ZnJyk7XG5leHBvcnQgY29uc3QgZXF1YWwgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fZXF1YWwuc3ZnJyk7XG5leHBvcnQgY29uc3QgdGFibGUgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fdGFibGUtbWVyZ2Uuc3ZnJyk7XG5leHBvcnQgY29uc3Qgc2F2ZSA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9pdGVtLXNhdmUuc3ZnJyk7XG5leHBvcnQgY29uc3QgZGVsID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2l0ZW0tZGVsZXRlLnN2ZycpO1xuZXhwb3J0IGNvbnN0IHBhc3RlID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX3Bhc3RlLnN2ZycpO1xuZXhwb3J0IGNvbnN0IG1vcmVfc3EgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fbW9yZV9zcS5zdmcnKTtcbmV4cG9ydCBjb25zdCBjaGVjayA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9jaGVjay5zdmcnKTtcbmV4cG9ydCBjb25zdCBzb3J0dXAgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fc29ydC11cC5zdmcnKTtcbmV4cG9ydCBjb25zdCBzb3J0ZG93biA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9zb3J0LWRvd24uc3ZnJyk7XG5leHBvcnQgY29uc3QgZmlsdGVyID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX2ZpbHRlci5zdmcnKTtcbmV4cG9ydCBjb25zdCBtb3JlID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX21vcmUuc3ZnJyk7XG5leHBvcnQgY29uc3QgZWRpdCA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9lZGl0LnN2ZycpO1xuZXhwb3J0IGNvbnN0IGFycm93cmlnaHQgPSByZXF1aXJlKCcuL2ljb25zL2ljb25fYXJyb3ctcmlnaHQuc3ZnJyk7XG5leHBvcnQgY29uc3Qgc2VhcmNoID0gcmVxdWlyZSgnLi9pY29ucy9pY29uX3NlYXJjaC5zdmcnKTtcbmV4cG9ydCBjb25zdCBjcm9zcyA9IHJlcXVpcmUoJy4vaWNvbnMvaWNvbl9jcm9zcy5zdmcnKTtcbmV4cG9ydCBjb25zdCBhcnJvd2Rvd24gPSByZXF1aXJlKCcuL2ljb25zL2ljb25fYXJyb3ctZG93bi5zdmcnKTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL2NvcmUvYWN0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb3JlL2FjdGlvbnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NvcmUvZHJvcGRvd24tYWN0aW9uc1wiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi9maW5kXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY2VsbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY29sdW1uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9zdW1tYXJ5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jb2x1bW4tZmlsdGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2ZpbHRlci1kZWZhdWx0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9maWx0ZXItc2VsZWN0XCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL251bWJlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvYm9vbFwiO1xuXG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9hcnJheS1kYXRhLXByb3ZpZGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi91dGlscy9yZW1vdGUtZGF0YS1wcm92aWRlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdXRpbHMvdXRpbHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2ljb25cIlxuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBCYXNlLCBIYXNoVGFibGVTdG9yYWdlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwiLi4vdGFibGVcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY2VsbFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUvY2VsbC1lZGl0b3JcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2NlbGwtdmlld2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9zdW1tYXJ5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9zZWFyY2hcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2ZpbHRlci1kZWZhdWx0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jb2x1bW4tZmlsdGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2ZpbHRlci1zZWxlY3RcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dpZGdldHMvYWN0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93aWRnZXRzL2FjdGlvbnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dpZGdldHMvZHJvcGRvd24tYWN0aW9uc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vd2lkZ2V0cy9pY29uXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2Jvb2wtY2VsbC1lZGl0b3JcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlL2Jvb2wtY2VsbC12aWV3ZXJcIjtcblxuZXhwb3J0ICogZnJvbSBcIi4uXCI7XG5cbmV4cG9ydCBjb25zdCBLbm9ja291dEluc3RhbmNlID0ga287XG5cbmV4cG9ydCBjbGFzcyBLbm9ja291dEhhc2hUYWJsZVN0b3JhZ2UgZXh0ZW5kcyBIYXNoVGFibGVTdG9yYWdlIHtcbiAgICBwcml2YXRlIGxpbmtBcnJheVRvT2JzZXJ2YWJsZShvYnNlcnZhYmxlQXJyYXk6IEtub2Nrb3V0T2JzZXJ2YWJsZUFycmF5PGFueT4pIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW10uY29uY2F0KG9ic2VydmFibGVBcnJheSgpKTtcbiAgICAgICAgW1wicG9wXCIsIFwicHVzaFwiLCBcInNwbGljZVwiLCBcInNsaWNlXCIsIFwic2hpZnRcIiwgXCJ1bnNoaWZ0XCJdLmZvckVhY2goZnVuY05hbWUgPT4ge1xuICAgICAgICAgICAgcmVzdWx0W2Z1bmNOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGVbZnVuY05hbWVdLmFwcGx5KHJlc3VsdCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZUFycmF5W2Z1bmNOYW1lXS5hcHBseShvYnNlcnZhYmxlQXJyYXksIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZU9ic2VydmFibGUodmFsdWU6IGFueSkge1xuICAgICAgICBpZihBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGtvLm9ic2VydmFibGVBcnJheSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtvLm9ic2VydmFibGUodmFsdWUpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0VmFsdWUobmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdXBlci5nZXRWYWx1ZShuYW1lLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICBpZigha28uaXNPYnNlcnZhYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5oYXNoW25hbWVdID0gdGhpcy5jcmVhdGVPYnNlcnZhYmxlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gdGhpcy5oYXNoW25hbWVdO1xuICAgICAgICBpZigoa28gYXMgYW55KS5pc09ic2VydmFibGVBcnJheShvYnNlcnZhYmxlKSkgeyAvLyBUT0RPIC0gcmVtb3ZlIGFueSBjYXN0XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rQXJyYXlUb09ic2VydmFibGUob2JzZXJ2YWJsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUoKTtcbiAgICB9XG4gICAgcHVibGljIHNldFZhbHVlKG5hbWU6IHN0cmluZywgdmFsOiBhbnkpIHtcbiAgICAgICAgaWYoIWtvLmlzT2JzZXJ2YWJsZSh0aGlzLmhhc2hbbmFtZV0pKSB7XG4gICAgICAgICAgICB0aGlzLmhhc2hbbmFtZV0gPSB0aGlzLmNyZWF0ZU9ic2VydmFibGUodGhpcy5oYXNoW25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gdGhpcy5oYXNoW25hbWVdO1xuICAgICAgICB0aGlzLmhhc2hbbmFtZV0odmFsKTtcbiAgICB9XG59XG5cbkJhc2UuY3JlYXRlUHJvcGVydGllc1N0b3JhZ2UgPSAoKSA9PiBuZXcgS25vY2tvdXRIYXNoVGFibGVTdG9yYWdlKCk7XG5cbmV4cG9ydCB2YXIgdGFibGVUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL3RhYmxlL2luZGV4Lmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcInRhYmxlNFwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24gKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBwYXJhbXMubW9kZWwgYXMgVGFibGU7XG4gICAgICAgICAgICBtb2RlbC5pbml0aWFsaXplKGNvbXBvbmVudEluZm8uZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiB0YWJsZVRlbXBsYXRlXG59KTtcblxuZnVuY3Rpb24gcmVuZGVyVGFibGUoZWxlbWVudDogc3RyaW5nIHwgRWxlbWVudCkge1xuICAgIGxldCBlbDogRWxlbWVudCA9IGVsZW1lbnQgYXMgRWxlbWVudDtcbiAgICBpZih0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudClbMF07XG4gICAgfVxuICAgIGVsLmlubmVySFRNTCA9IGA8dGFibGU0IHBhcmFtcz1cInsgbW9kZWw6ICRkYXRhIH1cIj48L3RhYmxlND5gO1xuICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2soZWwsIChub2RlOiBOb2RlKSA9PiB7XG4gICAgICAgIGtvLmNsZWFuTm9kZShub2RlKTtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9KTtcbiAgICBrby5hcHBseUJpbmRpbmdzKHRoaXMsIGVsKTtcbn1cblxuVGFibGUucHJvdG90eXBlW1wicmVuZGVyXCJdID0gcmVuZGVyVGFibGU7IiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBJbnBsYWNlRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NlbGwtZWRpdG9yXCI7XG5cbmV4cG9ydCB2YXIgYm9vbENlbGxFZGl0b3JUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2Jvb2wtY2VsbC1lZGl0b3IuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiYm9vbC1jZWxsLWVkaXRvclwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWw6IElucGxhY2VFZGl0b3IgPSBrby51bndyYXAocGFyYW1zLm1vZGVsKTtcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGlucHV0ID0gY29tcG9uZW50SW5mby5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgICAgIC8vICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgLy8gICAgIGlucHV0LnNlbGVjdCgpO1xuICAgICAgICAgICAgLy8gfSwgMCk7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBib29sQ2VsbEVkaXRvclRlbXBsYXRlXG59KTtcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCB9IGZyb20gXCIuLi8uLi90YWJsZS9jZWxsXCI7XG5cbmV4cG9ydCB2YXIgYm9vbENlbGxWaWV3ZXJUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2Jvb2wtY2VsbC12aWV3ZXIuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiYm9vbC1jZWxsLXZpZXdlclwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYm9vbENlbGxWaWV3ZXJUZW1wbGF0ZVxufSk7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IElucGxhY2VFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdGFibGUvY2VsbC1lZGl0b3JcIjtcblxuZXhwb3J0IHZhciBjZWxsRWRpdG9yVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9jZWxsLWVkaXRvci5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJhYnJpcy1jZWxsLWVkaXRvclwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWw6IElucGxhY2VFZGl0b3IgPSBrby51bndyYXAocGFyYW1zLm1vZGVsKTtcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGlucHV0ID0gY29tcG9uZW50SW5mby5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKVswXTtcbiAgICAgICAgICAgIC8vICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICAgICAgLy8gICAgIGlucHV0LnNlbGVjdCgpO1xuICAgICAgICAgICAgLy8gfSwgMCk7XG4gICAgICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBjZWxsRWRpdG9yVGVtcGxhdGVcbn0pO1xuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsIH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NlbGxcIjtcblxuZXhwb3J0IHZhciBjZWxsVmlld2VyVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9jZWxsLXZpZXdlci5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJhYnJpcy1jZWxsLXZpZXdlclwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogY2VsbFZpZXdlclRlbXBsYXRlXG59KTtcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgVGFibGVDZWxsIH0gZnJvbSBcIi4uLy4uL3RhYmxlL2NlbGxcIjtcblxuZXhwb3J0IHZhciBjZWxsVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9jZWxsLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImFicmlzLXRhYmxlLWNlbGxcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgY29uc3QgaXNNZXJnZWRDZWxsID0ga28uY29tcHV0ZWQoKCkgPT4gcGFyYW1zLmNlbGwuY291bnQgPiAxICYmIHBhcmFtcy50YWJsZS5pc01lcmdlZNChZWxscyk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgICAgICBzdGFydEVkaXQ6ICgpID0+IHBhcmFtcy50YWJsZS5zdGFydEVkaXRDZWxsKHBhcmFtcy5jZWxsKSxcbiAgICAgICAgICAgICAgICBjb250YWluZXJDc3M6IGtvLmNvbXB1dGVkKCgpID0+IFRhYmxlQ2VsbC5nZXRDb250YWluZXJDc3MocGFyYW1zLmNlbGwsIGlzTWVyZ2VkQ2VsbCgpKSksXG4gICAgICAgICAgICAgICAgY29udGVudENzczoga28uY29tcHV0ZWQoKCkgPT4gVGFibGVDZWxsLmdldENvbnRlbnRDc3MocGFyYW1zLmNlbGwsIGlzTWVyZ2VkQ2VsbCgpKSksXG4gICAgICAgICAgICAgICAgaXNNZXJnZWRDZWxsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogY2VsbFRlbXBsYXRlXG59KTtcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgQ29sdW1uRmlsdGVySXRlbSB9IGZyb20gXCIuLi8uLi90YWJsZS9jb2x1bW4tZmlsdGVyLWl0ZW1cIjtcblxudmFyIGZpbHRlclRlbXBsYXRlID0gcmVxdWlyZShcIi4vY29sdW1uLWZpbHRlci1pdGVtLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImFicmlzLWNvbHVtbi1maWx0ZXItaXRlbVwiLCB7XG4gIHZpZXdNb2RlbDoge1xuICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICByZXR1cm4gcGFyYW1zLmZpbHRlckl0ZW0gYXMgQ29sdW1uRmlsdGVySXRlbTtcbiAgICB9XG4gIH0sXG4gIHRlbXBsYXRlOiBmaWx0ZXJUZW1wbGF0ZVxufSk7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IEZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vdGFibGUvY29sdW1uLWZpbHRlclwiO1xuXG52YXIgZmlsdGVyVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9jb2x1bW4tZmlsdGVyLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImFicmlzLWNvbHVtbi1maWx0ZXJcIiwge1xuICB2aWV3TW9kZWw6IHtcbiAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgcmV0dXJuIHBhcmFtcy5jb250ZXh0IGFzIEZpbHRlckNvbnRleHQ7XG4gICAgfVxuICB9LFxuICB0ZW1wbGF0ZTogZmlsdGVyVGVtcGxhdGVcbn0pO1xuIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5cbnZhciBkZWZhdWx0RmlsdGVyVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9maWx0ZXItZGVmYXVsdC5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJhYnJpcy10YWJsZS1maWx0ZXItZGVmYXVsdFwiLCB7XG4gIHZpZXdNb2RlbDoge1xuICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH1cbiAgfSxcbiAgdGVtcGxhdGU6IGRlZmF1bHRGaWx0ZXJUZW1wbGF0ZVxufSk7XG5cbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgVGFibGVGaWx0ZXJTZWxlY3QgfSBmcm9tIFwiLi4vLi4vdGFibGUvZmlsdGVyLXNlbGVjdFwiIFxuXG5cbnZhciBzZWxlY3Rib3hGaWx0ZXJUZW1wbGF0ZSA9IHJlcXVpcmUoXCIuL2ZpbHRlci1zZWxlY3QuaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiYWJyaXMtZmlsdGVyLXNlbGVjdFwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSBuZXcgVGFibGVGaWx0ZXJTZWxlY3QocGFyYW1zLnZhbHVlLCBwYXJhbXMuY29sdW1uTmFtZSwgcGFyYW1zLmNvbHVtblR5cGUsIHBhcmFtcy5nZXRDb2x1bW5EYXRhLCBwYXJhbXMuaXNPcGVuLCBwYXJhbXMudGl0bGUsIHBhcmFtcy5tb3JlVGV4dCk7XG4gICAgICAgICAgICBjb25zdCBjbG9zZSA9ICgpID0+IHZpZXdNb2RlbC5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICAgICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2soY29tcG9uZW50SW5mby5lbGVtZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB2aWV3TW9kZWw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBzZWxlY3Rib3hGaWx0ZXJUZW1wbGF0ZVxufSk7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IFNlYXJjaE1vZGVsIH0gZnJvbSBcIi4uLy4uL3RhYmxlL3NlYXJjaFwiO1xuXG5leHBvcnQgdmFyIHNlYXJjaFRlbXBsYXRlID0gcmVxdWlyZShcIi4vc2VhcmNoLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImFicmlzLXNlYXJjaFwiLCB7XG4gICAgdmlld01vZGVsOiB7XG4gICAgICAgIGNyZWF0ZVZpZXdNb2RlbDogZnVuY3Rpb24ocGFyYW1zLCBjb21wb25lbnRJbmZvKSB7XG4gICAgICAgICAgICB2YXIgbW9kZWwgPSBrby51bndyYXAocGFyYW1zLm1vZGVsKTtcbiAgICAgICAgICAgIHZhciBzZWFyY2hNb2RlbDogU2VhcmNoTW9kZWwgPSBtb2RlbFtwYXJhbXMub3B0aW9ucz8uZGF0YV0gfHwgbW9kZWw7XG4gICAgICAgICAgICB2YXIgc2VhcmNoVGV4dCA9IHBhcmFtcy5vcHRpb25zPy50ZXh0ICYmIG1vZGVsW3BhcmFtcy5vcHRpb25zLnRleHRdIHx8IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3MgPSBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHNlYXJjaE1vZGVsLnNlYXJjaChzZWFyY2hUZXh0KCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbXBvbmVudEluZm8uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHByb2Nlc3MpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2VhcmNoVGV4dCxcbiAgICAgICAgICAgICAgICByZWZyZXNoOiAoKSA9PiB7IHNlYXJjaE1vZGVsLnNlYXJjaChzZWFyY2hUZXh0KCkpOyB9LFxuICAgICAgICAgICAgICAgIGRpc3Bvc2U6ICgpID0+IGNvbXBvbmVudEluZm8uZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHByb2Nlc3MpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogc2VhcmNoVGVtcGxhdGVcbn0pO1xuXG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7IFRhYmxlU3VtbWFyeSB9IGZyb20gXCIuLi8uLi90YWJsZS9zdW1tYXJ5XCI7XG5cbmV4cG9ydCB2YXIgc3VtbWFyeVRlbXBsYXRlID0gcmVxdWlyZShcIi4vc3VtbWFyeS5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJhYnJpcy10YWJsZS1zdW1tYXJ5XCIsIHtcbiAgdmlld01vZGVsOiB7XG4gICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgIHJldHVybiBuZXcgVGFibGVTdW1tYXJ5KHBhcmFtcy5jb2x1bW4pO1xuICAgIH1cbiAgfSxcbiAgdGVtcGxhdGU6IHN1bW1hcnlUZW1wbGF0ZVxufSk7XG5cbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHsgSUFjdGlvbiB9IGZyb20gXCIuLi8uLi9jb3JlL2FjdGlvblwiO1xuXG52YXIgYWN0aW9uVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9hY3Rpb24uaHRtbFwiKS5kZWZhdWx0O1xuXG5rby5jb21wb25lbnRzLnJlZ2lzdGVyKFwiYWJyaXMtYWN0aW9uLWl0ZW1cIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IChwYXJhbXM6IElBY3Rpb24sIGNvbXBvbmVudEluZm8pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRlbXBsYXRlOiBhY3Rpb25UZW1wbGF0ZVxufSk7XG5cbmV4cG9ydCB2YXIgQWN0aW9uSXRlbVdpZGdldDtcbiIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuXG52YXIgYWN0aW9uc1RlbXBsYXRlID0gcmVxdWlyZShcIi4vYWN0aW9ucy5odG1sXCIpLmRlZmF1bHQ7XG5cbmtvLmNvbXBvbmVudHMucmVnaXN0ZXIoXCJhYnJpcy1hY3Rpb25zXCIsIHtcbiAgICB2aWV3TW9kZWw6IHtcbiAgICAgICAgY3JlYXRlVmlld01vZGVsOiBmdW5jdGlvbihwYXJhbXMsIGNvbXBvbmVudEluZm8pIHtcbiAgICAgICAgICAgIHZhciBtb2RlbFZhbHVlID0gKHBhcmFtcy5tb2RlbCB8fCB7fSlbcGFyYW1zLm9wdGlvbnMuYWN0aW9uXTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uczogbW9kZWxWYWx1ZSxcbiAgICAgICAgICAgICAgICBzaG9ydDogcGFyYW1zLm9wdGlvbnMuc2hvcnQsXG4gICAgICAgICAgICAgICAgZ3JvdXBOYW1lOiBwYXJhbXMub3B0aW9ucy5ncm91cE5hbWUsIFxuICAgICAgICAgICAgICAgIHRvZ2dsZUNoaWxkQWN0aW9uczogKF8sIGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwiYWJyaXMtbmVzdGVkLWFjdGlvbnMtLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGxhdGU6IGFjdGlvbnNUZW1wbGF0ZVxufSk7XG5cbmV4cG9ydCB2YXIgQWJyaXNBY3Rpb25zV2lkZ2V0O1xuXG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcblxudmFyIGRyb3Bkb3duVGVtcGxhdGUgPSByZXF1aXJlKFwiLi9kcm9wZG93bi1hY3Rpb25zLmh0bWxcIikuZGVmYXVsdDtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImFicmlzLWRyb3Bkb3duLWFjdGlvbnNcIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgY29uc3QgaXNPcGVuID0gcGFyYW1zLmlzT3BlbiB8fCBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4gaXNPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICAgICAgICAgIGtvLnV0aWxzLmRvbU5vZGVEaXNwb3NhbC5hZGREaXNwb3NlQ2FsbGJhY2soY29tcG9uZW50SW5mby5lbGVtZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaXNPcGVuLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBwYXJhbXMudGl0bGUgfHwgXCJcIixcbiAgICAgICAgICAgICAgICBtb3JlVGV4dDogcGFyYW1zLm1vcmVUZXh0IHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogcGFyYW1zLmRhdGEsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogcGFyYW1zLmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgdG9nZ2xlOiAoXywgZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuKCFpc09wZW4oKSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogZHJvcGRvd25UZW1wbGF0ZVxufSk7XG5cbmV4cG9ydCB2YXIgQWJyaXNEcm9wZG93bkFjdGlvbnM7XG4iLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcblxua28uY29tcG9uZW50cy5yZWdpc3RlcihcImFicmlzLWljb25cIiwge1xuICAgIHZpZXdNb2RlbDoge1xuICAgICAgICBjcmVhdGVWaWV3TW9kZWw6IGZ1bmN0aW9uKHBhcmFtcywgY29tcG9uZW50SW5mbykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtczsgICAgIFxuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZShcIi4vaWNvbi5odG1sXCIpLmRlZmF1bHRcbn0pO1xuXG5leHBvcnQgdmFyIEFicmlzSWNvbldpZGdldDtcbiIsImV4cG9ydCBjbGFzcyBMb2NhbGl6YXRpb24ge1xuICAgIHN0YXRpYyBlbmdsaXNoU3RyaW5ncyA9IHtcbiAgICAgICAgZmlsdGVyY29udGFpbnM6IFwiQ29udGFpbnNcIixcbiAgICAgICAgZmlsdGVyZXF1YWw6IFwiRXF1YWxcIixcbiAgICAgICAgZmlsdGVyaXNudWxsOiBcIkVtcHR5XCIsXG4gICAgICAgIGZpbHRlcmlzbm90bnVsbDogXCJOb3QgZW1wdHlcIixcbiAgICAgICAgZmlsdGVyZ3JlYXRlcjogXCJHcmVhdGVyXCIsXG4gICAgICAgIGZpbHRlcmxlc3M6IFwiTGVzc1wiLFxuICAgICAgICBmaWx0ZXJncmVhdGVyZXF1YWw6IFwiR3JlYXRlciBvciBlcXVhbFwiLFxuICAgICAgICBmaWx0ZXJsZXNzZXF1YWw6IFwiTGVzcyBvciBlcXVhbFwiLFxuICAgICAgICBmaWx0ZXJkYXRlbm90ZXF1YWw6IFwiTm90IGVxdWFsXCIsXG4gICAgICAgIGZpbHRlcmRhdGVlcXVhbDogXCJFcXVhbFwiLFxuICAgICAgICBmaWx0ZXJkYXRlZ3JlYXRlcjogXCJGcm9tXCIsXG4gICAgICAgIGZpbHRlcmRhdGVsZXNzOiBcIlRvXCIsXG4gICAgICAgIG5vRGF0YTogXCJObyBEYXRhXCJcbiAgICB9O1xuICAgIHN0YXRpYyBnZXRTdHJpbmcgPSAoc3RyaW5nSWQ6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmdsaXNoU3RyaW5nc1tzdHJpbmdJZF07XG4gICAgfSBcbn0iLCJpbXBvcnQgeyBJVGFibGVDZWxsVHlwZSwgVGFibGVDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuXG5pbXBvcnQgXCIuL2Jvb2wuc2Nzc1wiO1xuXG5leHBvcnQgY2xhc3MgQm9vbENlbGwgaW1wbGVtZW50cyBJVGFibGVDZWxsVHlwZSB7XG4gICAgbmFtZTogc3RyaW5nID0gXCJib29sXCI7XG4gICAgZWRpdG9yOiBzdHJpbmcgPSBcImJvb2wtY2VsbC1lZGl0b3JcIjtcbiAgICB2aWV3ZXI6IHN0cmluZyA9IFwiYm9vbC1jZWxsLXZpZXdlclwiO1xufVxuXG5UYWJsZUNlbGwucmVnaXN0ZXJDZWxsVHlwZShuZXcgQm9vbENlbGwoKSk7IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElUYWJsZUNlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5cbmltcG9ydCBcIi4vY2VsbC1lZGl0b3Iuc2Nzc1wiO1xuXG5leHBvcnQgY2xhc3MgSW5wbGFjZUVkaXRvciBleHRlbmRzIEJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2VsbDogSVRhYmxlQ2VsbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5jZWxsLmRhdGE7XG4gICAgfVxuICAgIEBwcm9wZXJ0eSgpIHZhbHVlOiBhbnk7XG4gICAgY29tcGxldGUoY29tbWl0OiBib29sZWFuKSB7XG4gICAgICAgIGlmKGNvbW1pdCkge1xuICAgICAgICAgICAgdGhpcy5jZWxsLmRhdGEgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2VsbC5pbnBsYWNlRWRpdG9yID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBwcm9jZXNzS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUoZXZlbnQua2V5Q29kZSA9PT0gMTMpO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uLCBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbiB9IGZyb20gXCIuL2NvbHVtblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNlbGxUeXBlIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY3NzPzogc3RyaW5nO1xuICAgIGVkaXRvcj86IHN0cmluZztcbiAgICB2aWV3ZXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ2VsbCB7XG4gICAgZGF0YTogYW55O1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGNzczogc3RyaW5nO1xuICAgIGlucGxhY2VFZGl0b3I6IGFueTtcbiAgICBlZGl0b3I/OiBzdHJpbmc7XG4gICAgdmlld2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVGFibGVDZWxsIGV4dGVuZHMgQmFzZSBpbXBsZW1lbnRzIElUYWJsZUNlbGwge1xuICAgIHB1YmxpYyBzdGF0aWMgY2VsbFR5cGVzID0ge1xuICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgICAgY3NzOiBcImFicmlzLXRhYmxlLWNlbGwtLWxlZnRcIixcbiAgICAgICAgICAgIGVkaXRvcjogXCJhYnJpcy1jZWxsLWVkaXRvclwiLFxuICAgICAgICAgICAgdmlld2VyOiBcImFicmlzLWNlbGwtdmlld2VyXCJcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJDZWxsVHlwZShjZWxsVHlwZTogSVRhYmxlQ2VsbFR5cGUpIHtcbiAgICAgICAgVGFibGVDZWxsLmNlbGxUeXBlc1tjZWxsVHlwZS5uYW1lXSA9IGNlbGxUeXBlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Q29udGFpbmVyQ3NzKGNlbGw6IElUYWJsZUNlbGwsIGlzTWVyZ2VkQ2VsbDogYm9vbGVhbikge1xuICAgICAgICBsZXQgY29udGFpbmVyQ3NzID0gXCJhYnJpcy10YWJsZS1jZWxsX19jb250YWluZXIgXCIgKyBjZWxsLmNzcztcbiAgICAgICAgaWYoaXNNZXJnZWRDZWxsKSB7XG4gICAgICAgICAgY29udGFpbmVyQ3NzICs9IFwiIGNlbGxfX3N0aWNreS10ZXh0XCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckNzczsgICAgICAgIFxuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldENvbnRlbnRDc3MoY2VsbDogSVRhYmxlQ2VsbCB8IFRhYmxlQ2VsbCwgaXNNZXJnZWRDZWxsOiBib29sZWFuKSB7XG4gICAgICAgIGxldCBjb250ZW50Q3NzID0gaXNNZXJnZWRDZWxsID8gXCJhYnJpcy10YWJsZS1jZWxsX190ZXh0LS1tZXJnZWRcIiA6IFwiYWJyaXMtdGFibGUtY2VsbF9fdGV4dFwiO1xuICAgICAgICBpZihjZWxsIGluc3RhbmNlb2YgVGFibGVDZWxsICYmIGNlbGwuaXNNb2RpZmllZCkge1xuICAgICAgICAgIGNvbnRlbnRDc3MgKz0gXCIgYWJyaXMtdGFibGUtY2VsbF9fdGV4dC0tbW9kaWZpZWRcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udGVudENzczsgICAgICAgIFxuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNNb2RpZmllZDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBvblNldDogKHZhbCwgdGFyZ2V0OiBUYWJsZUNlbGwpID0+IHsgXG4gICAgICAgIGlmKHRhcmdldC50ZXh0ICE9PSB2YWwpIHtcbiAgICAgICAgICAgIHRhcmdldC50ZXh0ID0gdGFyZ2V0LmdldENlbGxUZXh0KHZhbCk7XG4gICAgICAgICAgICB0YXJnZXQuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9IH0pIGRhdGE6IGFueTtcbiAgICBAcHJvcGVydHkoKSB0ZXh0OiBzdHJpbmc7IFxuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogMSB9KSBjb3VudDogbnVtYmVyO1xuICAgIEBwcm9wZXJ0eSgpIGNvbG9yOiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KCkgbmFtZTogc3RyaW5nO1xuICAgIEBwcm9wZXJ0eSgpIGlucGxhY2VFZGl0b3I6IGFueTtcbiAgICBAcHJvcGVydHkoKSBjc3M6IHN0cmluZztcbiAgICBlZGl0b3I6IHN0cmluZztcbiAgICB2aWV3ZXI6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCBnZXRDZWxsVHlwZURlc2NyaXB0aW9uKHR5cGU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gVGFibGVDZWxsLmNlbGxUeXBlc1t0eXBlXSB8fCBUYWJsZUNlbGwuY2VsbFR5cGVzW1wiZGVmYXVsdFwiXVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0Q2VsbENzcyhkYXRhOiBhbnksIGNvbHVtbjogSVRhYmxlQ29sdW1uRGVzY3JpcHRpb24pOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDZWxsVHlwZURlc2NyaXB0aW9uKGNvbHVtbi50eXBlKS5jc3M7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDZWxsRWRpdG9yKGRhdGE6IGFueSwgY29sdW1uOiBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENlbGxUeXBlRGVzY3JpcHRpb24oY29sdW1uLnR5cGUpLmVkaXRvciB8fCBUYWJsZUNlbGwuY2VsbFR5cGVzW1wiZGVmYXVsdFwiXS5lZGl0b3I7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDZWxsVmlld2VyKGRhdGE6IGFueSwgY29sdW1uOiBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbik6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENlbGxUeXBlRGVzY3JpcHRpb24oY29sdW1uLnR5cGUpLnZpZXdlciB8fCBUYWJsZUNlbGwuY2VsbFR5cGVzW1wiZGVmYXVsdFwiXS52aWV3ZXI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDZWxsVGV4dCh2YWw6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB2YWwgYXMgc3RyaW5nO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0aWFsaXplKGNvbDogSVRhYmxlQ29sdW1uLCBiYWNrOiBib29sZWFuLCBkYXRhOiBhbnksIGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YVtjb2wubmFtZV0sXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5uYW1lID0gY29sLm5hbWU7XG4gICAgICAgIHRoaXMuY3NzID0gdGhpcy5nZXRDZWxsQ3NzKGRhdGEsIGNvbCk7XG4gICAgICAgIHRoaXMuZWRpdG9yID0gdGhpcy5nZXRDZWxsRWRpdG9yKGRhdGEsIGNvbCk7XG4gICAgICAgIHRoaXMudmlld2VyID0gdGhpcy5nZXRDZWxsVmlld2VyKGRhdGEsIGNvbCk7XG4gICAgICAgIGlmKGJhY2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbC5sYXN0ICYmIGNvbC5sYXN0LnRleHQgPT09IHRoaXMudGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gY29sLmxhc3QuY291bnQgKyAxO1xuICAgICAgICAgICAgICAgICAgICBjb2wubGFzdC5jb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2wubGFzdCA9PSBjb2wucHJldikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sLnByZXYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sLmNvdW50ID0gdGhpcy5jb3VudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2wubGFzdCA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sLmxhc3QgPT09IG51bGwpIGNvbC5sYXN0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZihjb2wucHJldlZhbHVlICYmIChjb2wucHJldlZhbHVlID09PSB0aGlzLnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5jb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29sLnByZXYuY291bnQgPSBjb2wuY291bnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb2wuY291bnQgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb2wucHJldiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbC5wcmV2VmFsdWUgPSB0aGlzLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSUZpbmRPcGVyYXRpb24sIG9wZXJhdGlvbnNNYXAgfSBmcm9tIFwiLi4vZmluZFwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uIH0gZnJvbSBcIi4vY29sdW1uXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJJdGVtVmFsdWUgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2x1bW46IElUYWJsZUNvbHVtbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5maWVsZCA9IGNvbHVtbi5uYW1lO1xuICB9XG4gIEBwcm9wZXJ0eSh7IG9uU2V0OiAodmFsLCB0YXJnZXQ6IEZpbHRlckl0ZW1WYWx1ZSkgPT4gdGFyZ2V0LmNvbHVtbi5maWx0ZXJDb250ZXh0LmFwcGx5KCkgfSkgdmFsdWU6IGFueTtcbiAgQHByb3BlcnR5KHsgb25TZXQ6ICh2YWwsIHRhcmdldDogRmlsdGVySXRlbVZhbHVlKSA9PiB0YXJnZXQuY29sdW1uLmZpbHRlckNvbnRleHQuYXBwbHkoKSB9KSBvcDogc3RyaW5nO1xuICBmaWVsZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ29sdW1uRmlsdGVySXRlbSBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29sdW1uOiBhbnksXG4gICAgcHVibGljIGdldENvbHVtbkRhdGFcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmZpbHRlckl0ZW1WYWx1ZSA9IG5ldyBGaWx0ZXJJdGVtVmFsdWUoY29sdW1uKTtcbiAgICBpZihvcGVyYXRpb25zTWFwW3RoaXMuY29sdW1uLnR5cGVdKSB7XG4gICAgICB0aGlzLm9wZXJhdGlvbnMgPSBvcGVyYXRpb25zTWFwW3RoaXMuY29sdW1uLnR5cGVdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMub3BlcmF0aW9ucyA9IG9wZXJhdGlvbnNNYXBbXCJzdHJpbmdcIl07XG4gICAgfVxuICAgIHRoaXMub3BlcmF0aW9uID0gdGhpcy5vcGVyYXRpb25zWzBdO1xuICB9XG5cbiAgb3BlcmF0aW9uczogQXJyYXk8YW55PjtcbiAgXG4gIGdldCBmaWx0ZXJFZGl0b3JOYW1lKCkge1xuICAgIC8vIGlmICh0aGlzLmNvbHVtbi50eXBlID09PSBcImJvb2xcIikge1xuICAgIC8vICAgcmV0dXJuIFwiYWJyaXMtdGFibGUtZmlsdGVyLWJvb2xcIjtcbiAgICAvLyB9IGVsc2UgaWYgKFtcInN0cmluZ1wiLCBcImNhcHRpb25cIiwgXCJwbGFpblwiXS5pbmRleE9mKHRoaXMuY29sdW1uLnR5cGUpICE9PSAtMSApIHtcbiAgICAvLyAgIHJldHVybiBcImFicmlzLXRhYmxlLWZpbHRlci1hdXRvY29tcGxldGVcIjtcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuY29sdW1uLnR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgLy8gICByZXR1cm4gXCJhYnJpcy10YWJsZS1maWx0ZXItZGF0ZVwiO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy5jb2x1bW4udHlwZSA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgLy8gICByZXR1cm4gXCJhYnJpcy10YWJsZS1maWx0ZXItZGF0ZS10aW1lXCI7XG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLmNvbHVtbi50eXBlID09PSBcInBpa2V0cG9zaXRpb25cIikge1xuICAgIC8vICAgcmV0dXJuIFwiYWJyaXMtdGFibGUtZmlsdGVyLWttcGt0bVwiO1xuICAgIC8vIH0gZWxzZSBpZiAoISF0aGlzLnBhcmFtcy5wcm9wZXJ0eUluZm8ucmVsYXRpb24pIHtcbiAgICAvLyAgIHJldHVybiBcImFicmlzLXRhYmxlLWZpbHRlci1hdXRvY29tcGxldGVcIjtcbiAgICAvLyB9XG4gICAgcmV0dXJuIFwiYWJyaXMtdGFibGUtZmlsdGVyLWRlZmF1bHRcIjtcbiAgfVxuICBwdWJsaWMgZmlsdGVySXRlbVZhbHVlOiBGaWx0ZXJJdGVtVmFsdWU7XG4gIEBwcm9wZXJ0eSh7IG9uU2V0OiAodmFsOiBJRmluZE9wZXJhdGlvbiwgdGFyZ2V0OiBDb2x1bW5GaWx0ZXJJdGVtKSA9PiB7XG4gICAgaWYoISF2YWwpIHtcbiAgICAgIHRhcmdldC5maWx0ZXJJdGVtVmFsdWUub3AgPSB2YWwub3A7XG4gICAgfVxuICAgIHRhcmdldC5zaG93T3BlcmFuZCA9IHZhbCAmJiB2YWwub3AgIT09IFwiSVNOXCIgJiYgdmFsLm9wICE9PSBcIklTTk5cIjtcbiAgfX0pIG9wZXJhdGlvbjogSUZpbmRPcGVyYXRpb247XG4gIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogdHJ1ZSB9KSBzaG93T3BlcmFuZDogYm9vbGVhbjtcblxuICBnZXRGaWx0ZXJWYWx1ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGQ6IHRoaXMuZmlsdGVySXRlbVZhbHVlLmZpZWxkLFxuICAgICAgb3A6IHRoaXMuZmlsdGVySXRlbVZhbHVlLm9wLFxuICAgICAgdmFsdWU6IHRoaXMuZmlsdGVySXRlbVZhbHVlLnZhbHVlXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgSURhdGFQcm92aWRlciwgSURhdGFQcm92aWRlck93bmVyIH0gZnJvbSBcIi4uL3V0aWxzL2RhdGEtcHJvdmlkZXJcIjtcbmltcG9ydCB7IElUYWJsZUNvbHVtbiB9IGZyb20gXCIuL2NvbHVtblwiO1xuaW1wb3J0IHsgRmlsdGVySXRlbVZhbHVlLCBDb2x1bW5GaWx0ZXJJdGVtIH0gZnJvbSBcIi4vY29sdW1uLWZpbHRlci1pdGVtXCI7XG5cbmltcG9ydCBcIi4vY29sdW1uLWZpbHRlci5zY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJDb250ZXh0IGV4dGVuZHMgQmFzZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbHVtbjogSVRhYmxlQ29sdW1uLCBwcml2YXRlIGRhdGFQcm92aWRlck93bmVyOiBJRGF0YVByb3ZpZGVyT3duZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIHNob3dGaWx0ZXI6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgdmFsdWU6IGFueTtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IFtdIH0pIGZpbHRlckl0ZW1zOiBBcnJheTxDb2x1bW5GaWx0ZXJJdGVtPjtcbiAgXG4gICAgYXBwbHkoKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5maWx0ZXJJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmdldEZpbHRlclZhbHVlKCkpO1xuICAgIH1cbiAgICBhZGRJdGVtID0gKGNvbHVtbjogSVRhYmxlQ29sdW1uKSA9PiB7XG4gICAgICAvLyBmaWx0ZXJWYWx1ZS5vcC5zdWJzY3JpYmUobyA9PiB7aWYobyA9PT0gXCJFUVwiKSBmaWx0ZXJWYWx1ZS52YWx1ZShudWxsKTsgdGhpcy5hcHBseSgpfSk7XG4gICAgICB0aGlzLmZpbHRlckl0ZW1zLnB1c2gobmV3IENvbHVtbkZpbHRlckl0ZW0odGhpcy5jb2x1bW4sIChjb2x1bW4sIGZpbHRlciwgbGltaXQsIG9mZnNldCwgY2FsbGJhY2spID0+IHtcbiAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXJPd25lci5kYXRhUHJvdmlkZXIuZ2V0Q29sdW1uRGF0YShjb2x1bW4sIGZpbHRlciwgbGltaXQsIG9mZnNldCwgY2FsbGJhY2spO1xuICAgICAgfSkpO1xuICAgICAgdGhpcy5zaG93RmlsdGVyID0gdHJ1ZTtcbiAgICB9O1xuICAgIHJlbW92ZUl0ZW0gPSAoaXRlbTogQ29sdW1uRmlsdGVySXRlbSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudEZpbHRlckl0ZW1zID0gdGhpcy5maWx0ZXJJdGVtcztcbiAgICAgIGN1cnJlbnRGaWx0ZXJJdGVtcy5zcGxpY2UoY3VycmVudEZpbHRlckl0ZW1zLmluZGV4T2YoaXRlbSksIDEpO1xuICAgICAgdGhpcy5zaG93RmlsdGVyID0gISFjdXJyZW50RmlsdGVySXRlbXMubGVuZ3RoOyAgICBcbiAgICAgIHRoaXMudmFsdWUgPSBjdXJyZW50RmlsdGVySXRlbXMubWFwKGkgPT4gaS5maWx0ZXJJdGVtVmFsdWUpO1xuICAgIH0gICAgXG59IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElBZ2dyZWdhdGUgfSBmcm9tIFwiLi4vZmluZFwiO1xuaW1wb3J0IHsgSURhdGFQcm92aWRlck93bmVyIH0gZnJvbSBcIi4uL3V0aWxzL2RhdGEtcHJvdmlkZXJcIjtcbmltcG9ydCB7IElUYWJsZUNlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgeyBGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4vY29sdW1uLWZpbHRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICAvLyBmaWx0ZXI6IGFueTtcbiAgICAvLyBmaWx0ZXJDb250ZXh0OiBGaWx0ZXJDb250ZXh0LFxuICAgIC8vIG9yZGVyOiBzdHJpbmcsXG4gICAgLy8gY291bnQ6IG51bWJlcixcbiAgICAvLyBwcmV2OiBJVGFibGVDZWxsLFxuICAgIC8vIHByZXZWYWx1ZTogYW55LFxuICAgIC8vIGNvbmNhdFByZXY6IGJvb2xlYW4sXG4gICAgLy8gbGFzdDogSVRhYmxlQ2VsbCxcbiAgICAvLyByb3dfY29sb3I6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYWJsZUNvbHVtbiBleHRlbmRzIElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uIHtcbiAgICAvLyBuYW1lOiBzdHJpbmc7XG4gICAgLy8gdGl0bGU6IHN0cmluZztcbiAgICAvLyB0eXBlOiBzdHJpbmc7XG4gICAgLy8gdmlzaWJsZTogYm9vbGVhbjtcbiAgICBmaWx0ZXI6IGFueTtcbiAgICBmaWx0ZXJDb250ZXh0OiBGaWx0ZXJDb250ZXh0LFxuICAgIG9yZGVyOiBib29sZWFuLFxuICAgIHN1bW1hcnlWYWx1ZTogYW55LFxuICAgIHN1bW1hcnlQYXJhbXM6IElBZ2dyZWdhdGUsXG4gICAgY291bnQ6IG51bWJlcixcbiAgICBwcmV2OiBJVGFibGVDZWxsLFxuICAgIHByZXZWYWx1ZTogYW55LFxuICAgIGNvbmNhdFByZXY6IGJvb2xlYW4sXG4gICAgbGFzdDogSVRhYmxlQ2VsbCxcbiAgICByb3dfY29sb3I6IHN0cmluZyxcbiAgICBjbGlja0ZpbHRlcjogKGNvbHVtbjogSVRhYmxlQ29sdW1uLCBldmVudDogTW91c2VFdmVudHxhbnkpID0+IHZvaWQsXG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUNvbHVtbiBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJVGFibGVDb2x1bW4ge1xuXG4gICAgY29uc3RydWN0b3IoY29sdW1uRGVzY3JpcHRpb246IElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uLCBwcml2YXRlIHRhYmxlOiBJRGF0YVByb3ZpZGVyT3duZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoY29sdW1uRGVzY3JpcHRpb24gfHwge30pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmKGNvbHVtbkRlc2NyaXB0aW9uW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGNvbHVtbkRlc2NyaXB0aW9uW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZih0aGlzLnRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aGlzLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWx0ZXJDb250ZXh0ID0gbmV3IEZpbHRlckNvbnRleHQodGhpcywgdGFibGUpO1xuICAgIH1cblxuICAgIGZpbHRlcjogYW55O1xuICAgIGZpbHRlckNvbnRleHQ6IEZpbHRlckNvbnRleHQ7XG4gICAgQHByb3BlcnR5KCkgb3JkZXI6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgc3VtbWFyeVZhbHVlOiBhbnk7XG4gICAgQHByb3BlcnR5KHsgb25TZXQ6ICh2YWw6IElBZ2dyZWdhdGUsIHRhcmdldDogVGFibGVDb2x1bW4pID0+IHtcbiAgICAgICAgdGFyZ2V0LmNhbGN1bGF0ZVN1bW1hcnkodGFyZ2V0KTtcbiAgICB9fSkgc3VtbWFyeVBhcmFtczogSUFnZ3JlZ2F0ZTtcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIHByZXY6IGFueTtcbiAgICBwcmV2VmFsdWU6IGFueTtcbiAgICBjb25jYXRQcmV2OiBib29sZWFuO1xuICAgIGxhc3Q6IGFueTtcbiAgICByb3dfY29sb3I6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICB0eXBlOiBzdHJpbmcgPSBcInN0cmluZ1wiO1xuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHVibGljIGNsaWNrRmlsdGVyID0gKGNvbHVtbjogSVRhYmxlQ29sdW1uLCBldmVudDogTW91c2VFdmVudHxhbnkpID0+IHtcbiAgICAgICAgY29sdW1uLmZpbHRlckNvbnRleHQuYWRkSXRlbShjb2x1bW4pO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTdW1tYXJ5KGNvbHVtbjogSVRhYmxlQ29sdW1uKTogdm9pZCB7XG4gICAgICAgIGlmKGNvbHVtbi5zdW1tYXJ5UGFyYW1zICYmIGNvbHVtbi5zdW1tYXJ5UGFyYW1zLmZpZWxkID09PSBjb2x1bW4ubmFtZSAmJiBjb2x1bW4uc3VtbWFyeVBhcmFtcy5mdW5jKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlLmRhdGFQcm92aWRlci5nZXRTdW1tYXJ5KGNvbHVtbi5zdW1tYXJ5UGFyYW1zLmZ1bmMsIGNvbHVtbi5zdW1tYXJ5UGFyYW1zLmZpZWxkLCB0aGlzLnRhYmxlW1widGFibGVGaWx0ZXJcIl0sIChkYXRhKSA9PiBjb2x1bW4uc3VtbWFyeVZhbHVlID0gZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwb3NlKCkge1xuICAgIH1cbn0iLCJpbXBvcnQgXCIuL2ZpbHRlci1kZWZhdWx0LnNjc3NcIjtcblxuXG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgcHJvcGVydHkgfSBmcm9tIFwiLi4vY29yZS9wcm9wZXJ0eVwiO1xuaW1wb3J0IHsgRmlsdGVySXRlbVZhbHVlIH0gZnJvbSBcIi4vY29sdW1uLWZpbHRlci1pdGVtXCI7XG5cbmltcG9ydCBcIi4vZmlsdGVyLXNlbGVjdC5zY3NzXCI7XG5cblxuZnVuY3Rpb24gY29udmVyc2lvbkJ5VHlwZSh2YWx1ZTphbnksIGNvbHVtblR5cGU6IHN0cmluZyk6c3RyaW5ne1xuICAgIGlmKGNvbHVtblR5cGUgPT09XCJib29sXCIpIHJldHVybiB2YWx1ZT9cIlllc1wiOlwiTm9cIjtcbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGZpbHRlclNlYXJjaEJ5VHlwZShjb2x1bW5UeXBlOiBzdHJpbmcpOmJvb2xlYW57XG4gICAgaWYoY29sdW1uVHlwZSA9PT1cImJvb2xcIikgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBUYWJsZUZpbHRlclNlbGVjdCBleHRlbmRzIEJhc2Uge1xuICAgIHByaXZhdGUgbGltaXQ6IG51bWJlciA9IDEwO1xuICAgIHByaXZhdGUgb2Zmc2V0OiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWx1ZTogRmlsdGVySXRlbVZhbHVlLCAgcHJpdmF0ZSBjb2x1bW5OYW1lOiBzdHJpbmcsIHByaXZhdGUgY29sdW1uVHlwZTogc3RyaW5nLCBwcml2YXRlIGdldENvbHVtbkRhdGE6IChuYW1lOiBzdHJpbmcsIGZpbHRlclZhbHVlOiBhbnksIGxpbWl0OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjYWxsYmFjayA6IChpdGVtczogYW55W10pID0+IHZvaWQpID0+IHZvaWQsIGlzT3Blbj86IGJvb2xlYW4sIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gXCJcIiwgcHVibGljIG1vcmVUZXh0OiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGlmKGlzT3BlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGlzT3BlbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUZvdW5kSXRlbXMobnVsbCk7XG4gICAgICAgIHRoaXMuaXNGaWx0ZXJTZWFyY2hCeVR5cGUgPSBmaWx0ZXJTZWFyY2hCeVR5cGUoY29sdW1uVHlwZSk7XG4gICAgfVxuICAgIHByaXZhdGUgdXBkYXRlRm91bmRJdGVtcyhmaWx0ZXJWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuZm91bmRJdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgICAgIHRoaXMuZ2V0Q29sdW1uRGF0YSh0aGlzLmNvbHVtbk5hbWUsIGZpbHRlclZhbHVlLCB0aGlzLmxpbWl0LCB0aGlzLm9mZnNldCwgaXRlbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3VuZEl0ZW1zID0gaXRlbXMubWFwKGkgPT4ge3JldHVybiB7bmFtZTogY29udmVyc2lvbkJ5VHlwZShpLCB0aGlzLmNvbHVtblR5cGUpLCB2YWx1ZTogaX19KTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkTW9yZSA9IGl0ZW1zLmxlbmd0aCA9PT0gdGhpcy5saW1pdDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDEwO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZE1vcmUoKSB7XG4gICAgICAgIHRoaXMuZ2V0Q29sdW1uRGF0YSh0aGlzLmNvbHVtbk5hbWUsIHRoaXMuZmlsdGVyVGV4dCwgdGhpcy5saW1pdCwgdGhpcy5vZmZzZXQsIGl0ZW1zID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goaSA9PiB0aGlzLmZvdW5kSXRlbXMucHVzaChpKSlcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkTW9yZSA9IGl0ZW1zLmxlbmd0aCA9PT0gdGhpcy5saW1pdDtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ICs9IDEwO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc09wZW46IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc0ZpbHRlclNlYXJjaEJ5VHlwZTogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzTG9hZE1vcmU6IGJvb2xlYW47XG4gICAgdG9nZ2xlID0gKF8sIGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBbXSwgb25TZXQ6ICh2YWwsIHRhcmdldDogVGFibGVGaWx0ZXJTZWxlY3QpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZXQgZmlsdGVyIHZhbHVlIHRvIFwiICsgSlNPTi5zdHJpbmdpZnkodmFsKSk7XG4gICAgICAgIHRhcmdldC52YWx1ZS52YWx1ZSA9IHRhcmdldC5zZWxlY3RlZEl0ZW1zO1xuICAgIH0gfSkgc2VsZWN0ZWRJdGVtczogQXJyYXk8YW55PjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IFtdIH0pIGZvdW5kSXRlbXM6IEFycmF5PGFueT47XG4gICAgQHByb3BlcnR5KHsgb25TZXQ6ICh2YWwsIHRhcmdldDogVGFibGVGaWx0ZXJTZWxlY3QpID0+IHtcbiAgICAgICAgdGFyZ2V0LnVwZGF0ZUZvdW5kSXRlbXModmFsKTtcbiAgICB9LCB9KSBmaWx0ZXJUZXh0OiBzdHJpbmc7XG4gICAgaXNDaGVja2VkID0gKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5pbmRleE9mKGl0ZW0pICE9PSAtMTtcbiAgICB9XG4gICAgY2xpY2tJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmKGl0ZW1JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlSXRlbXMoaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhbHVlLnZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcChpPT5pLnZhbHVlKTtcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlLnZhbHVlKSAmJiB0aGlzLnZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMCkgdGhpcy52YWx1ZS52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZGVsZXRlSXRlbXMgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLnNlbGVjdGVkSXRlbXMuaW5kZXhPZihuYW1lKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGRpc3Bvc2UoKSB7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSBcIi4uL2NvcmUvYmFzZVwiO1xuaW1wb3J0IHsgQWN0aW9uLCBJQWN0aW9uIH0gZnJvbSBcIi4uL2NvcmUvYWN0aW9uXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBDb21wdXRlZFVwZGF0ZXIgfSBmcm9tIFwiLi4vY29yZS9kZXBlbmRlbmNpZXNcIjtcbmltcG9ydCB7IElucGxhY2VFZGl0b3IgfSBmcm9tIFwiLi9jZWxsLWVkaXRvclwiO1xuaW1wb3J0IHsgSVRhYmxlQ2VsbCwgVGFibGVDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHsgSVRhYmxlQ29sdW1uLCBJVGFibGVDb2x1bW5EZXNjcmlwdGlvbiwgVGFibGVDb2x1bW4gfSBmcm9tIFwiLi9jb2x1bW5cIjtcbmltcG9ydCB7IFNlYXJjaE1vZGVsIH0gZnJvbSBcIi4vc2VhcmNoXCI7XG5pbXBvcnQgeyBJRGF0YVByb3ZpZGVyLCBJRGF0YVByb3ZpZGVyT3duZXIgfSBmcm9tIFwiLi4vdXRpbHMvZGF0YS1wcm92aWRlclwiO1xuaW1wb3J0IHsgQXJyYXlEYXRhUHJvdmlkZXIgfSBmcm9tIFwiLi4vdXRpbHMvYXJyYXktZGF0YS1wcm92aWRlclwiO1xuaW1wb3J0IHsgSVRhYmxlUm93LCBJVGFibGVSb3dEYXRhLCBUYWJsZVJvdyB9IGZyb20gXCIuL3Jvd1wiO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xuaW1wb3J0IHsgTG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL2xvY2FsaXphdGlvblwiO1xuaW1wb3J0IHsgRmlsdGVySXRlbVZhbHVlIH0gZnJvbSBcIi4vY29sdW1uLWZpbHRlci1pdGVtXCI7XG5cbmltcG9ydCAqIGFzIEljb25zIGZyb20gXCIuLi9pY29uXCJcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG4vKipcbiAqIFBhcmFtZXRlcnMgZm9yIGN1c3RvbWl6aW5nIHRoZSB0YWJsZSB2aWV3LlxuICovXG4gZXhwb3J0IGludGVyZmFjZSBJVGFibGVDb25maWcgZXh0ZW5kcyBJRGF0YVByb3ZpZGVyIHtcbiAgICAvKiogRGVzY3JpcHRpb24gb2YgY29sdW1ucyAqL1xuICAgIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbkRlc2NyaXB0aW9uPjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBkaXNwbGF5IHRoZSBzZWFyY2ggYmFyICovXG4gICAgZW5hYmxlU2VhcmNoPzogYm9vbGVhbjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBkaXNwbGF5IHN1bW1hcnkgcGFuZWwgKi9cbiAgICBlbmFibGVTdW1tYXJ5PzogYm9vbGVhbjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBkaXNwbGF5IG1lcmdlZCBjZWxscyB0b2dnbGUgKi9cbiAgICBlbmFibGVNZXJnZWTQoWVsbHNUb2dnbGUgPzogYm9vbGVhbjtcbiAgICAvKiogVGhlIHByaW1hcnkgdmFsdWUgb2YgdGhlIHBhcmFtZXRlciBmb3IgbWVyZ2luZyBjZWxscyAqL1xuICAgIGVuYWJsZU1lcmdlZNChZWxscyA/OiBib29sZWFuO1xuICAgIC8qKiBQZXJtaXNzaW9uIHRvIGVkaXQgZGF0YSAqL1xuICAgIGVuYWJsZUVkaXQgPzogYm9vbGVhbjtcbiAgICAvKiogUGVybWlzc2lvbiB0byBkaXNwbGF5IHRoZSB0YWJsZSBhY3Rpb25zIHBhbmVsICovXG4gICAgYWN0aW9ucz86IEFycmF5PElBY3Rpb24+O1xuICAgIC8qKiBUaGUga2V5IGZpZWxkIG9mIHRoZSB0YWJsZS4gTmVlZGVkIHRvIGVkaXQgdGhlIHRhYmxlLiAqL1xuICAgIGtleUNvbHVtbj86IHN0cmluZztcbiAgICAvKiogU2V0dGluZyB0aGUgY29sb3IgZm9yIHNlbGVjdGVkIGNlbGxzIGluIGNhc2UgdGhlIHNlbGVjdGlvbiBpcyBzZXQgdXNpbmcgYW4gYXR0YWNoZWQgYm9vbGVhbiBjb2x1bW4uIFRoZSBjb2xvciBpcyBzZXQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiBDU1MuICovXG4gICAgc2VsZWN0Q2VsbENvbG9yPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVRhYmxlRmlsdGVyIHtcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIG9wOiBzdHJpbmcsXG4gICAgZmllbGQ6IHN0cmluZyxcbn1cblxuLyoqXG4gKiBDcmVhdGVzIFRhYmxlIGNsYXNzLlxuICogQHBhcmFtIGNvbmZpZyAtIHRhYmxlIG9wdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWJsZSBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBJRGF0YVByb3ZpZGVyT3duZXIge1xuICAgIHByaXZhdGUgc2Nyb2xsZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHJlc2l6ZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHRhYmxlRWxlbWVudDogSFRNTFRhYmxlRWxlbWVudDtcblxuICAgIHByaXZhdGUgaW5uZXJBY3Rpb25zOiBBcnJheTxJQWN0aW9uPiA9IFtdO1xuICAgIHB1YmxpYyBpY29ucyA9IEljb25zO1xuICAgIHByaXZhdGUgZmlsdGVyVXBkYXRlcjogQ29tcHV0ZWRVcGRhdGVyO1xuXG4gICAgcHVibGljIHN0YXRpYyByb3dIZWlnaHQgPSAyMDsgLy8gVE9ETzogd2UgbmVlZCB0byBjYWxjdWxhdGUgcm93IGhlaWdodCBzb21laG93IGJlZm9yZWhhbmRcblxuICAgIHByaXZhdGUgdXBkYXRlQnlGaWx0ZXIoKSB7XG4gICAgICAgIGNvbnN0IGlzT2xkRmlsdGVyID0gKHRoaXMudGFibGVGaWx0ZXIgJiYgdGhpcy50YWJsZUZpbHRlci5sZW5ndGggPiAwKTtcbiAgICAgICAgdGhpcy50YWJsZUZpbHRlciA9IFtdO1xuICAgICAgICBpZiAodGhpcy5zZWFyY2hNb2RlbC5zZWFyY2hWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy50YWJsZUZpbHRlci5wdXNoKHt2YWx1ZTogdGhpcy5zZWFyY2hNb2RlbC5zZWFyY2hWYWx1ZSwgb3A6IFwiQ1wiLCBmaWVsZDogbnVsbH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uRmlsdGVyVmFsdWUgPSBjb2x1bW4uZmlsdGVyQ29udGV4dC52YWx1ZTtcbiAgICAgICAgICAgIGlmKGNvbHVtbkZpbHRlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uRmlsdGVyVmFsdWUuZm9yRWFjaCgoZml2OiBGaWx0ZXJJdGVtVmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3AgPSBmaXYub3A7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGZpdi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChvcCA9PT0gXCJFUVwiICYmIHZhbCkgfHwgKG9wID09PSBcIkNcIiAmJiB2YWwpIHx8IChvcCA9PT0gXCJJU05cIikgfHwgKG9wID09PSBcIklTTk5cIikpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIucHVzaCh7dmFsdWU6IHZhbCwgb3A6IG9wLCBmaWVsZDogZml2LmZpZWxkfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZigodGhpcy50YWJsZUZpbHRlci5sZW5ndGggPiAwKSB8fCAoaXNPbGRGaWx0ZXIgJiYgdGhpcy50YWJsZUZpbHRlci5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaE1vZGVsLnByZXZTZWFyY2hWYWx1ZSA9IHRoaXMuc2VhcmNoTW9kZWwuc2VhcmNoVmFsdWU7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWc6IElUYWJsZUNvbmZpZywgZWxlbWVudD86IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hvd1NlYXJjaCA9IGNvbmZpZy5lbmFibGVTZWFyY2ggPT09IHRydWU7XG4gICAgICAgIHRoaXMuY3JlYXRlQWN0aW9ucyh0aGlzLmNvbmZpZyk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ29sdW1ucyh0aGlzLmNvbmZpZyk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGVyID0gbmV3IENvbXB1dGVkVXBkYXRlcigoKSA9PiB0aGlzLnVwZGF0ZUJ5RmlsdGVyKCkpO1xuICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZXIub2JzZXJ2ZSh0aGlzLCBcIl9fZmlsdGVyVXBkYXRlclZhbHVlXCIpOyAvLyBUT0RPOiBtYWtlIGl0IGVsZWdhbnRcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RlbC51cGRhdGVyID0gKCkgPT4gdGhpcy51cGRhdGVCeUZpbHRlcigpO1xuICAgICAgICBpZighIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZShlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNNZXJnZWTQoWVsbHMgPSBjb25maWcuZW5hYmxlTWVyZ2Vk0KFlbGxzO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxlckVsZW1lbnQgPSBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhYnJpcy10YWJsZS1zY3JvbGwtY29udGFpbmVyXCIpWzBdIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgICAgICB0aGlzLnRhYmxlRWxlbWVudCA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0YWJsZVwiKVswXSBhcyBIVE1MVGFibGVFbGVtZW50O1xuICAgICAgICB0aGlzLnJlc2l6ZXJFbGVtZW50ID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWJyaXMtdGFibGVcIilbMF0gYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgIFxuICAgICAgICB2YXIgY2hlY2tMb2FkaW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgc2VsZi5wYXJ0Um93Q291bnQgPSBNYXRoLnJvdW5kKHNlbGYuc2Nyb2xsZXJFbGVtZW50LmNsaWVudEhlaWdodCAvIFRhYmxlLnJvd0hlaWdodCk7XG4gICAgICAgICAgICBpZihzZWxmLnNjcm9sbGVyRWxlbWVudC5zY3JvbGxUb3AgPCBUYWJsZS5yb3dIZWlnaHQgJiYgc2VsZi5sYXN0T2Zmc2V0QmFjayA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoKHNlbGYubGFzdE9mZnNldEJhY2sgLSBzZWxmLnBhcnRSb3dDb3VudCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZHJhd1Jvd3Moc2VsZi5sYXN0T2Zmc2V0QmFjaywgTWF0aC5tYXgoMCwgc2VsZi5sYXN0T2Zmc2V0QmFjayAtIHNlbGYucGFydFJvd0NvdW50KSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kcmF3Um93cyhzZWxmLnBhcnRSb3dDb3VudCwgTWF0aC5tYXgoMCwgc2VsZi5sYXN0T2Zmc2V0QmFjayAtIHNlbGYucGFydFJvd0NvdW50KSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoKHNlbGYuc2Nyb2xsZXJFbGVtZW50LnNjcm9sbFRvcCA+PSBzZWxmLnRhYmxlRWxlbWVudC5jbGllbnRIZWlnaHQgLSBzZWxmLnNjcm9sbGVyRWxlbWVudC5jbGllbnRIZWlnaHQpICYmIHRoaXMubG9hZE1vcmUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmRyYXdSb3dzKHNlbGYucGFydFJvd0NvdW50LCBzZWxmLmxhc3RPZmZzZXQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbGVyRWxlbWVudC5vbnNjcm9sbCA9IGNoZWNrTG9hZGluZztcbiAgICAgICAgdGhpcy5yZXNpemVyRWxlbWVudC5vbnJlc2l6ZSA9IGNoZWNrTG9hZGluZztcbiAgICAgICAgY2hlY2tMb2FkaW5nKCk7XG5cbiAgICAgICAgaWYodHlwZW9mIFJlc2l6ZU9ic2VydmVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LnRhcmdldC50YWdOYW1lID09PSBcIlRIRUFEXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVudHJ5LmNvbnRlbnRSZWN0LndpZHRoIDwgNzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFicmlzLXRhYmxlLS1zbWFsbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhYnJpcy10YWJsZS0tc21hbGxcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlSGVhZEhlaWdodCA9IGVudHJ5LmNvbnRlbnRSZWN0LmhlaWdodCArIDU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRoZWFkXCIpWzBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzaG93RGV0YWlsKHJvd0RhdGE6IElUYWJsZVJvd0RhdGEpIHtcbiAgICAgICAgdGhpcy5pc1Nob3dEZXRhaWwgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoaWRlRGV0YWlsKCkge1xuICAgICAgICB0aGlzLmV4cGFuZGVkUm93S2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc1Nob3dEZXRhaWwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKHN0YXJ0Um93OiBudW1iZXIpIHtcbiAgICAgICAgaWYoc3RhcnRSb3cpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldEJhY2sgPSBzdGFydFJvdyAtIDE7XG4gICAgICAgICAgICB0aGlzLmxhc3RPZmZzZXQgPSBzdGFydFJvdyAtIDE7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IHsgYy5jb3VudCA9IG51bGw7IGMucHJldiA9IG51bGw7IGMucHJldlZhbHVlID0gdW5kZWZpbmVkOyBjLmxhc3QgPSBudWxsIH0pO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gW107XG4gICAgICAgICAgICB0aGlzLmRyYXdSb3dzKHRoaXMucGFydFJvd0NvdW50LCBzdGFydFJvdyAtIDEsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZURldGFpbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNvbHVtbihjb2x1bW46IGFueSwgbW9kZWw6IElUYWJsZUNvbmZpZyk6IElUYWJsZUNvbHVtbiB7XG4gICAgICAgIHJldHVybiBuZXcgVGFibGVDb2x1bW4oY29sdW1uLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ29sdW1ucyhjb25maWc6IElUYWJsZUNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb25maWcuY29sdW1ucy5tYXAoY29sdW1uID0+IFxuICAgICAgICAgICAgdGhpcy5jcmVhdGVDb2x1bW4oY29sdW1uLCBjb25maWcpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUFjdGlvbnMoY29uZmlnOiBJVGFibGVDb25maWcpIHtcbiAgICAgICAgaWYoY29uZmlnLmVuYWJsZVN1bW1hcnkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJBY3Rpb25zLnB1c2gobmV3IEFjdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzdW1tYXJ5LWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUYWJsZVN1bW1hcnkgPSAhdGhpcy5zaG93VGFibGVTdW1tYXJ5O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3ZnOiB0aGlzLmljb25zLmVxdWFsLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogXCJ0b3BcIlxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNvbmZpZy5lbmFibGVNZXJnZWTQoWVsbHNUb2dnbGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJBY3Rpb25zLnB1c2gobmV3IEFjdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtZXJnZWTQoWVsbHMtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNZXJnZWTQoWVsbHMgPSAhdGhpcy5pc01lcmdlZNChZWxscztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN2ZzogdGhpcy5pY29ucy50YWJsZSxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwidG9wXCJcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZihjb25maWcuZW5hYmxlRWRpdCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICB0aGlzLmlubmVyQWN0aW9ucy5wdXNoKG5ldyBBY3Rpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2F2ZS1hY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzSW5zZXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93cy5mb3JFYWNoKHIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGlmeSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoci5udW1iZXI+MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIuY2VsbHMuZm9yRWFjaChjID0+IGMudGV4dCAhPT0gYy5kYXRhICYmIChtb2RpZnlbYy5uYW1lXSA9IGMudGV4dCkpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighaXNFbXB0eShtb2RpZnkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YVByb3ZpZGVyLnNhdmVEYXRhKHRoaXMua2V5Q29sdW1uLCByLnJvd0RhdGFbdGhpcy5rZXlDb2x1bW5dLCBtb2RpZnkpKSByLmNlbGxzLmZvckVhY2goYyA9PiBjLmRhdGEgPSBjLnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLmNlbGxzLmZvckVhY2goYyA9PiBtb2RpZnlbYy5uYW1lXSA9IGMudGV4dCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YVByb3ZpZGVyLmluc2VydERhdGEodGhpcy5rZXlDb2x1bW4sIG1vZGlmeSkpIGlzSW5zZXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luc2VydCkgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdmc6IHRoaXMuaWNvbnMuc2F2ZSxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwiYm90dG9tXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbmV3IEFjdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJkZWxldGUtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5udW1iZXI+MCkgdGhpcy5yb3dzLnNsaWNlKHRoaXMucm93cy5pbmRleE9mKHIpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXIuZGVsZXRlRGF0YSh0aGlzLmtleUNvbHVtbiwgdGhpcy5zZWxlY3RlZFJvd3MubWFwKHIgPT4gci5udW1iZXI+MCAmJiByLnJvd0RhdGFbdGhpcy5rZXlDb2x1bW5dKSwgKF8gPT4gdGhpcy5yZWZyZXNoKCkpKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3ZnOiB0aGlzLmljb25zLmRlbCxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IFwiYm90dG9tXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbmV3IEFjdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJuZXdSb3ctYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2Nyb2xsZXJFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdSb3c6SVRhYmxlUm93RGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IGMudmlzaWJsZSAmJiAobmV3Um93W2MubmFtZV09XCJcIikpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3MudW5zaGlmdCh0aGlzLmNyZWF0ZVJvdyhuZXdSb3csIC0xLCBudWxsKSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdmc6IHRoaXMuaWNvbnMuYWRkLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogXCJib3R0b21cIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgKX1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9kYXRhUHJvdmlkZXI6IElEYXRhUHJvdmlkZXIgPSB1bmRlZmluZWQ7XG4gICAgZ2V0IGRhdGFQcm92aWRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFQcm92aWRlciB8fCB0aGlzLmNvbmZpZztcbiAgICB9XG4gICAgc2V0IGRhdGFQcm92aWRlcihwcm92aWRlcjogSURhdGFQcm92aWRlcikge1xuICAgICAgICB0aGlzLl9kYXRhUHJvdmlkZXIgPSBwcm92aWRlcjtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGRhdGEoKSB7XG4gICAgLy8gICAgIHJldHVybiBbXTtcbiAgICAvLyB9XG4gICAgc2V0IGRhdGEoX2RhdGE6IEFycmF5PGFueT4pIHtcbiAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXIgPSBuZXcgQXJyYXlEYXRhUHJvdmlkZXIoX2RhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLmxhc3RPZmZzZXRCYWNrID0gMDtcbiAgICAgICAgdGhpcy5sYXN0T2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYyA9PiB7IGMuY291bnQgPSBudWxsOyBjLnByZXYgPSBudWxsOyBjLnByZXZWYWx1ZSA9IHVuZGVmaW5lZDsgfSk7XG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xuICAgICAgICB0aGlzLmRyYXdSb3dzKHRoaXMucGFydFJvd0NvdW50LCAwLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuaGlkZURldGFpbCgpO1xuICAgIH1cblxuICAgIGRyYXdSb3dzKGxpbWl0OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBiYWNrID0gZmFsc2UpIHtcbiAgICAgICAgaWYoIXRoaXMubG9hZGluZ011dGV4KSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdNdXRleCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRhdGFQcm92aWRlci5nZXREYXRhKFxuICAgICAgICAgICAgICAgIGxpbWl0LCBcbiAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZpbHRlcihjID0+IGMub3JkZXIgIT09IHVuZGVmaW5lZCkubWFwKGMgPT4gPGFueT57ZmllbGQ6IGMubmFtZSwgZGVzYzogYy5vcmRlcn0pLFxuICAgICAgICAgICAgICAgIHRoaXMudGFibGVGaWx0ZXIsXG4gICAgICAgICAgICAgICAgbnVsbCAvKiYmIHRoaXMucGlubmVkUm93S2V5KCkqLywgXG4gICAgICAgICAgICAgICAgYmFjaywgXG4gICAgICAgICAgICAgICAgKGRhdGEsIG5ld09mZnNldDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIsIGJhY2s6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0T2Zmc2V0QmFjayA9IHRoaXMubGFzdE9mZnNldEJhY2sgLSBsaW1pdDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE9mZnNldCA9IHRoaXMubGFzdE9mZnNldCArIGxpbWl0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1vcmVCYWNrID0gdGhpcy5sYXN0T2Zmc2V0QmFjayA+IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1vcmUgPSB0aGlzLmxhc3RPZmZzZXQgPD0gdG90YWxDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJvd3MgPSB0aGlzLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgIChkYXRhIHx8IFtdKS5mb3JFYWNoKChkYXRhSXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdSb3cgPSB0aGlzLmNyZWF0ZVJvdyhiYWNrID8gZGF0YVtkYXRhLmxlbmd0aCAtIDEgLSBOdW1iZXIoaW5kZXgpXSA6IGRhdGFJdGVtLCBiYWNrID8gZGF0YS5sZW5ndGggLSAxIC0gTnVtYmVyKGluZGV4KSArIG9mZnNldCA6IE51bWJlcihpbmRleCkgKyBvZmZzZXQsIGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYmFjaykgeyBjdXJyZW50Um93cy51bnNoaWZ0KG5ld1Jvdyk7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgeyBjdXJyZW50Um93cy5wdXNoKG5ld1Jvdyk7IH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ011dGV4ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xpY2tSb3cocm93OiBJVGFibGVSb3csIGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmZvckVhY2gociA9PiByLnNlbGVjdGVkID0gZmFsc2UpO1xuICAgICAgICByb3cuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZWxlY3RSb3cocm93OiBJVGFibGVSb3csIGV2ZW50KSB7XG4gICAgICAgIHJvdy5zZWxlY3RlZCA9ICFyb3cuc2VsZWN0ZWQ7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSAmJiB0aGlzLmxhc3RTZWxlY3RSb3cpIHtcbiAgICAgICAgICAgIHRoaXMucm93cy5maWx0ZXIoZSA9PiBlLm51bWJlciA+PSBNYXRoLm1pbih0aGlzLmxhc3RTZWxlY3RSb3cubnVtYmVyLCByb3cubnVtYmVyKSAmJiBlLm51bWJlciA8PSBNYXRoLm1heCh0aGlzLmxhc3RTZWxlY3RSb3cubnVtYmVyLCByb3cubnVtYmVyKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGUgPT4gZS5zZWxlY3RlZCA9IHRydWUpO1xuICAgICAgICB9IFxuICAgICAgICBpZiAocm93LnNlbGVjdGVkKSB0aGlzLmxhc3RTZWxlY3RSb3cgPSByb3c7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUm93cy5sZW5ndGggIT09IDEpIHRoaXMuaGlkZURldGFpbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGlja0NvbHVtbiA9IChjb2x1bW46IElUYWJsZUNvbHVtbiwgZXZlbnQpID0+IHtcbiAgICAgICAgaWYodGhpcy5pc1Nob3dEZXRhaWwpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZURldGFpbCgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdPcmRlciA9IGNvbHVtbi5vcmRlciA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhY29sdW1uLm9yZGVyO1xuICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubWFwKChjKSA9PiBjLm9yZGVyID0gdW5kZWZpbmVkKVxuICAgICAgICB9IFxuICAgICAgICBjb2x1bW4ub3JkZXIgPSBuZXdPcmRlciBhcyBhbnk7IC8vIFRPRE86IHNvbWV0aGluZyB3cm9uZyBpcyBoZXJlXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVSb3coZGF0YToge1trZXk6IHN0cmluZ106IHN0cmluZ3xudW1iZXJ9LCBudW06IG51bWJlciwgYmFjazogYm9vbGVhbik6IElUYWJsZVJvdyB7XG4gICAgICAgIGxldCByb3dDZWxscyA9IFtdO1xuICAgICAgICBsZXQgbGFzdFRleHQgPSBudWxsO1xuICAgICAgICBsZXQgY29sb3JDZWxsID0gbnVsbCwgY29sb3JSb3cgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbHVtbnMucmV2ZXJzZSgpLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gbmV3IFRhYmxlQ2VsbCgpO1xuICAgICAgICAgICAgY2VsbC5pbml0aWFsaXplKGNvbCwgYmFjaywgZGF0YSwgY29sb3JDZWxsKTtcbiAgICAgICAgICAgIGlmKCEhbGFzdFRleHQpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHQgKz0gKFwiL1wiICsgbGFzdFRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdFRleHQgPSAoY29sLmNvbmNhdFByZXYgJiYgIWNvbC5yb3dfY29sb3IpID8gY2VsbC50ZXh0IDogbnVsbDtcbiAgICAgICAgICAgIGNvbG9yUm93ID0gKGNvbC5yb3dfY29sb3IgJiYgIWNvbC5jb25jYXRQcmV2KSA/IChjb2wudHlwZSA9PT0gXCJib29sXCIgPyAoIGRhdGFbY29sLm5hbWVdID8gdGhpcy5jb25maWcuc2VsZWN0Q2VsbENvbG9yIDogbnVsbCkgOiBkYXRhW2NvbC5uYW1lXSkgOiBjb2xvclJvdztcbiAgICAgICAgICAgIGNvbG9yQ2VsbCA9IChjb2wucm93X2NvbG9yICYmIGNvbC5jb25jYXRQcmV2KSA/IChjb2wudHlwZSA9PT0gXCJib29sXCIgPyAoIGRhdGFbY29sLm5hbWVdID8gdGhpcy5jb25maWcuc2VsZWN0Q2VsbENvbG9yIDogbnVsbCkgOiBkYXRhW2NvbC5uYW1lXSkgOiBudWxsO1xuICAgICAgICAgICAgaWYoY29sLnZpc2libGUpIHJvd0NlbGxzLnB1c2goY2VsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbHVtbnMucmV2ZXJzZSgpO1xuICAgICAgICBsZXQgcm93X2lkID0gZGF0YVt0aGlzLmtleUNvbHVtbl07XG4gICAgICAgIGNvbnN0IHJvdyA9IG5ldyBUYWJsZVJvdygpO1xuICAgICAgICByb3cuY2VsbHMgPSByb3dDZWxscy5yZXZlcnNlKCk7XG4gICAgICAgIHJvdy5yb3dEYXRhID0gZGF0YTtcbiAgICAgICAgcm93LmlkID0gcm93X2lkO1xuICAgICAgICByb3cubnVtYmVyID0gbnVtICsgMTtcbiAgICAgICAgcm93LnNlbGVjdGVkID0gcm93X2lkICYmICh0aGlzLmV4cGFuZGVkUm93S2V5ID09PSByb3dfaWQpO1xuICAgICAgICByb3cuY29sb3IgPSBjb2xvclJvdztcbiAgICAgICAgcm93LnNlbGVjdCA9IChkYXRhLCBldmVudCkgPT4gdGhpcy5zZWxlY3RSb3coZGF0YSwgZXZlbnQpLFxuICAgICAgICByb3cuY2xpY2sgPSAoZGF0YSwgZXZlbnQpID0+IHRoaXMuY2xpY2tSb3coZGF0YSwgZXZlbnQpXG4gICAgICAgIHJldHVybiByb3c7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJvd0V4cGFuZGVkKGlkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRFZGl0Q2VsbCA9IChjZWxsOiBJVGFibGVDZWxsKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRDZWxsRWRpdG9yKSB0aGlzLmN1cnJlbnRDZWxsRWRpdG9yLmlucGxhY2VFZGl0b3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNlbGwuaW5wbGFjZUVkaXRvciA9IG5ldyBJbnBsYWNlRWRpdG9yKGNlbGwpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDZWxsRWRpdG9yID0gY2VsbDsgXG4gICAgICAgIHRoaXMuY29tcGxldGVFZGl0Q2VsbCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wbGV0ZUVkaXRDZWxsKCkge1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBoYXNBY3RpdmVJbnBsYWNlRWRpdG9yQ29yZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgaGFzQWN0aXZlSW5wbGFjZUVkaXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQWN0aXZlSW5wbGFjZUVkaXRvckNvcmUoKTtcbiAgICB9XG5cbiAgICBjdXJDb2wgPSB1bmRlZmluZWQ7XG4gICAgbnh0Q29sID0gdW5kZWZpbmVkO1xuICAgIHBhZ2VYID0gdW5kZWZpbmVkO1xuICAgIG54dENvbFdpZHRoID0gdW5kZWZpbmVkO1xuICAgIGN1ckNvbFdpZHRoID0gdW5kZWZpbmVkXG5cbiAgICBwdWJsaWMgbG9nTW91c2VPdmVyID0gKGQsIGUpID0+IHtcbiAgICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyUmlnaHQgPSAnMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSc7XG4gICAgfVxuICAgIHB1YmxpYyBsb2dNb3VzZU91dCA9IChkLCBlKSA9PiB7XG4gICAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlclJpZ2h0ID0gJyc7XG4gICAgfVxuICAgIHB1YmxpYyBsb2dNb3VzZU1vdmUgPSAoZCwgZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jdXJDb2wgJiYgZS5idXR0b25zKSB7XG4gICAgICAgICAgICB2YXIgZGlmZlggPSBlLnBhZ2VYIC0gdGhpcy5wYWdlWDtcbiAgICAgICAgICAgIHRoaXMubnh0Q29sICYmICh0aGlzLm54dENvbC5zdHlsZS53aWR0aCA9ICh0aGlzLm54dENvbFdpZHRoIC0gKGRpZmZYKSkrJ3B4Jyk7XG4gICAgICAgICAgICB0aGlzLmN1ckNvbC5zdHlsZS53aWR0aCA9ICh0aGlzLmN1ckNvbFdpZHRoICsgZGlmZlgpKydweCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGxvZ01vdXNlRG93biA9IChkLCBlKSA9PiB7XG4gICAgICAgIHRoaXMuY3VyQ29sID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5ueHRDb2wgPSB0aGlzLmN1ckNvbC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nID8gdGhpcy5jdXJDb2wubmV4dEVsZW1lbnRTaWJsaW5nIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBhZ2VYID0gZS5wYWdlWDsgXG4gICAgICAgIHZhciBwYWRkaW5nID0gdGhpcy5wYWRkaW5nRGlmZih0aGlzLmN1ckNvbCk7XG4gICAgICAgIHRoaXMuY3VyQ29sV2lkdGggPSB0aGlzLmN1ckNvbC5vZmZzZXRXaWR0aCAtIHBhZGRpbmc7XG4gICAgICAgIGlmICh0aGlzLm54dENvbCkgdGhpcy5ueHRDb2xXaWR0aCA9IHRoaXMubnh0Q29sLm9mZnNldFdpZHRoIC0gcGFkZGluZzsgICAgXG4gICAgfVxuICAgIHB1YmxpYyBsb2dNb3VzZVVwID0gKGQsIGUpID0+IHtcbiAgICAgICAgdGhpcy5jdXJDb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubnh0Q29sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnBhZ2VYID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm54dENvbFdpZHRoID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmN1ckNvbFdpZHRoID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHBhZGRpbmdEaWZmKGNvbCkge1xuICAgICAgICBpZiAodGhpcy5nZXRTdHlsZVZhbChjb2wsJ2JveC1zaXppbmcnKSA9PSAnYm9yZGVyLWJveCcpIHtcbiAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYWRMZWZ0ID0gdGhpcy5nZXRTdHlsZVZhbChjb2wsJ3BhZGRpbmctbGVmdCcpO1xuICAgICAgICB2YXIgcGFkUmlnaHQgPSB0aGlzLmdldFN0eWxlVmFsKGNvbCwncGFkZGluZy1yaWdodCcpO1xuICAgICAgICByZXR1cm4gKHBhcnNlSW50KHBhZExlZnQpICsgcGFyc2VJbnQocGFkUmlnaHQpKTtcbiAgICB9XG4gICAgZ2V0U3R5bGVWYWwoZWxtLGNzcyl7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbG0sIG51bGwpLmdldFByb3BlcnR5VmFsdWUoY3NzKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcm9vdExldmVsOiBhbnkgPSB0cnVlO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgaXNOdW1iZXI6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBpc01lcmdlZNChZWxsczogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGxvYWRpbmdNdXRleDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IHRydWUgfSkgbG9hZE1vcmU6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBsb2FkTW9yZUJhY2s6IGJvb2xlYW47XG4gICAgbGFzdE9mZnNldCA9IDA7XG4gICAgbGFzdE9mZnNldEJhY2sgPSAwO1xuICAgIHBhcnRSb3dDb3VudCA9IDEwO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogW10sIG9uU2V0OiAodmFsOiBJVGFibGVDb2x1bW5bXSwgdGFyZ2V0OiBUYWJsZSkgPT4ge1xuICAgICAgICB0YXJnZXQudmlld0ZpbHRlclRhYmxlID0gbmV3IENvbXB1dGVkVXBkYXRlcigoKSA9PiB2YWwuZmlsdGVyKGMgPT4gYy5maWx0ZXJDb250ZXh0LnNob3dGaWx0ZXIpLmxlbmd0aCA+IDApIGFzIGFueTtcbiAgICB9IH0pIGNvbHVtbnM6IEFycmF5PElUYWJsZUNvbHVtbj47XG4gICAgZ2V0IGtleUNvbHVtbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcua2V5Q29sdW1uO1xuICAgIH1cbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IFtdIH0pIHJvd3M6IEFycmF5PElUYWJsZVJvdz47XG4gICAgZ2V0IHNlbGVjdGVkUm93cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm93cy5maWx0ZXIociA9PiByLnNlbGVjdGVkKTtcbiAgICB9XG4gICAgQHByb3BlcnR5KHsgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KSBzaG93VGFibGVTdW1tYXJ5OiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgc2hvd1NlYXJjaDogYm9vbGVhbjtcbiAgICBAcHJvcGVydHkoeyBvblNldDogKG5ld1ZhbHVlOiBudW1iZXIsIHRhcmdldDogVGFibGUpID0+IHtcbiAgICAgICAgdGFyZ2V0Lm5hdmlnYXRlVG8obmV3VmFsdWUpO1xuICAgIH0gfSkgc3RhcnRSb3c6IG51bWJlcjtcbiAgICBsYXN0U2VsZWN0Um93ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IDAgfSkgdG90YWxDb3VudDogbnVtYmVyO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogMCB9KSB0YWJsZUhlYWRIZWlnaHQ6IG51bWJlcjtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IHRydWUgfSkgc2hvd1RhYmxlRmlsdGVyOiBib29sZWFuO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgdmlld0ZpbHRlclRhYmxlOiBib29sZWFuO1xuICAgIHRhYmxlRmlsdGVyOiBJVGFibGVGaWx0ZXJbXTtcbiAgICBjdXJyZW50Q2VsbEVkaXRvcjogSVRhYmxlQ2VsbDtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pIGlzU2hvd0RldGFpbDogYm9vbGVhbjtcbiAgICBleHBhbmRlZFJvd0tleTtcblxuICAgIHNlYXJjaE1vZGVsID0gbmV3IFNlYXJjaE1vZGVsKCk7XG5cbiAgICBnZXRBY3Rpb25zID0gKGNvbnRhaW5lcj86IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gW10uY29uY2F0KHRoaXMuaW5uZXJBY3Rpb25zKS5jb25jYXQodGhpcy5jb25maWcuYWN0aW9ucyB8fCBbXSk7XG4gICAgICAgIHJldHVybiBhY3Rpb25zLmZpbHRlcihhY3Rpb24gPT4gYWN0aW9uLmNvbnRhaW5lciA9PT0gY29udGFpbmVyKTtcbiAgICB9XG4gICAgZ2V0IHRvcEFjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEFjdGlvbnMoJ3RvcCcpO1xuICAgIH1cbiAgICBnZXQgZHJvcGRvd25BY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBY3Rpb25zKCdkcm9wZG93bicpO1xuICAgIH1cbiAgICBnZXQgYm90dG9tQWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QWN0aW9ucygnYm90dG9tJyk7XG4gICAgfVxuICAgIGdldCBub0RhdGFUZXh0KCkge1xuICAgICAgICByZXR1cm4gTG9jYWxpemF0aW9uLmdldFN0cmluZyhcIm5vRGF0YVwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJVGFibGVDZWxsVHlwZSwgVGFibGVDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuXG5leHBvcnQgY2xhc3MgTnVtYmVyQ2VsbCBpbXBsZW1lbnRzIElUYWJsZUNlbGxUeXBlIHtcbiAgICBuYW1lOiBzdHJpbmcgPSBcIm51bWJlclwiO1xuICAgIGNzczogc3RyaW5nID0gXCJhYnJpcy10YWJsZS1jZWxsLS1yaWdodFwiXG59XG5cblRhYmxlQ2VsbC5yZWdpc3RlckNlbGxUeXBlKG5ldyBOdW1iZXJDZWxsKCkpOyIsImltcG9ydCB7IEJhc2UgfSBmcm9tIFwiLi4vY29yZS9iYXNlXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gXCIuLi9jb3JlL3Byb3BlcnR5XCI7XG5pbXBvcnQgeyBJVGFibGVDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuXG4vKipcbiAqIFRoZSBjb2xsZWN0aW9uIG9mIGRhdGEgZm9yIGEgdGFibGUgcm93LiBUaGUga2V5IGlzIHRoZSBuYW1lIG9mIHRoZSBjb2x1bW4uIFRoZSB2YWx1ZSBpcyB0aGUgY29udGVudCBvZiB0aGUgdGFibGUgY2VsbC5cbiAqL1xuIGV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlUm93RGF0YSB7XG4gICAgLyoqIFRhYmxlIGNlbGwgY29udGVudCAqL1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlclxufVxuXG5cbi8qKlxuICogSW5mb3JtYXRpb24gbmVlZGVkIHRvIHJlbmRlciBhIHRhYmxlIHJvd1xuICovXG4gZXhwb3J0IGludGVyZmFjZSBJVGFibGVSb3cge1xuICAgIC8qKiBBcnJheSBjb250YWluaW5nIG9ic2VydmFibGUgdGFibGUgY2VsbHMgKi9cbiAgICBjZWxsczogQXJyYXk8SVRhYmxlQ2VsbD4sXG4gICAgLyoqIFRoZSBjb2xsZWN0aW9uIG9mIGRhdGEgZm9yIGEgdGFibGUgcm93ICovXG4gICAgcm93RGF0YTogSVRhYmxlUm93RGF0YSxcbiAgICAvKiogICovXG4gICAgaWQ6IGFueSxcbiAgICAvKiogICovXG4gICAgbnVtYmVyOiBudW1iZXIsXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW4sXG4gICAgY29sb3I6IHN0cmluZyxcbiAgICBzZWxlY3Q6IChkYXRhOiBJVGFibGVSb3csIGV2ZW50KSA9PiB2b2lkLFxuICAgIGNsaWNrOiAoZGF0YTogSVRhYmxlUm93LCBldmVudCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVSb3cgZXh0ZW5kcyBCYXNlIGltcGxlbWVudHMgSVRhYmxlUm93IHtcbiAgICBAcHJvcGVydHkoeyBkZWZhdWx0VmFsdWU6IFtdIH0pIGNlbGxzOiBJVGFibGVDZWxsW107XG4gICAgcm93RGF0YTogSVRhYmxlUm93RGF0YTtcbiAgICBpZDogYW55O1xuICAgIG51bWJlcjogbnVtYmVyO1xuICAgIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogZmFsc2UgfSkgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgQHByb3BlcnR5KCkgY29sb3I6IHN0cmluZztcbiAgICBzZWxlY3Q6IChkYXRhOiBJVGFibGVSb3csIGV2ZW50OiBhbnkpID0+IHZvaWQ7XG4gICAgY2xpY2s6IChkYXRhOiBJVGFibGVSb3csIGV2ZW50OiBhbnkpID0+IHZvaWQ7XG59IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcblxuaW1wb3J0IFwiLi9zZWFyY2guc2Nzc1wiO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kZWwgZXh0ZW5kcyBCYXNlIHtcbiAgICBzZWFyY2ggPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucHJldlNlYXJjaFZhbHVlID0gdGhpcy5zZWFyY2hWYWx1ZTtcbiAgICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHRleHQ7XG4gICAgICAgIHRoaXMudXBkYXRlciAmJiB0aGlzLnVwZGF0ZXIoKTtcbiAgICB9XG4gICAgdXBkYXRlcjogKCkgPT4gdm9pZDtcbiAgICBAcHJvcGVydHkoKSBwcmV2U2VhcmNoVmFsdWU6IHN0cmluZztcbiAgICBAcHJvcGVydHkoKSBzZWFyY2hWYWx1ZTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi9jb3JlL2Jhc2VcIjtcbmltcG9ydCB7IHByb3BlcnR5IH0gZnJvbSBcIi4uL2NvcmUvcHJvcGVydHlcIjtcbmltcG9ydCB7IElUYWJsZUNvbHVtbiB9IGZyb20gXCIuL2NvbHVtblwiO1xuXG5pbXBvcnQgXCIuL3N1bW1hcnkuc2Nzc1wiO1xuXG5jb25zdCBGdW5jdGlvbnM6IEFycmF5PHsgdGl0bGU6IHN0cmluZzsgdmFsdWU6IHN0cmluZzsgaGludDogc3RyaW5nLCB0eXBlcz86IHN0cmluZ1tdIH0+ID0gIFtcbiAgeyB0aXRsZTogXCItXCIsIHZhbHVlOiBcIlwiLCBoaW50OiBcIlwiIH0sIFxuICB7IHRpdGxlOiBcIs6jXCIsIHZhbHVlOiBcInN1bVwiLCBoaW50OiBcIlN1bSBvZiBjZWxscyBmb3IgdGhpcyB0YWJsZSBjb2x1bW5cIiwgdHlwZXM6IFtcImludGVnZXJcIiwgXCJtb25leVwiLCBcIm51bWJlclwiXSB9LCBcbiAgeyB0aXRsZTogXCJ4zIRcIiwgdmFsdWU6IFwiYXZnXCIsIGhpbnQ6IFwiQXJpdGhtZXRpYyBtZWFuIGluIHRoaXMgdGFibGUgY29sdW1uXCIsIHR5cGVzOiBbXCJpbnRlZ2VyXCIsIFwibW9uZXlcIiwgXCJudW1iZXJcIl0gfSwgXG4gIHsgdGl0bGU6IFwibWluXCIsIHZhbHVlOiBcIm1pblwiLCBoaW50OiBcIk1pbmltdW0gdmFsdWUgaW4gdGhpcyB0YWJsZSBjb2x1bW5cIiwgdHlwZXM6IFtcImludGVnZXJcIiwgXCJtb25leVwiLCBcImRhdGVcIiwgXCJudW1iZXJcIl0gfSxcbiAgeyB0aXRsZTogXCJtYXhcIiwgdmFsdWU6IFwibWF4XCIsIGhpbnQ6IFwiTWF4aW11bSB2YWx1ZSBpbiB0aGlzIHRhYmxlIGNvbHVtblwiLCB0eXBlczogW1wiaW50ZWdlclwiLCBcIm1vbmV5XCIsIFwiZGF0ZVwiLCBcIm51bWJlclwiXSB9LFxuICB7IHRpdGxlOiBcIs6dXCIsIHZhbHVlOiBcImNvdW50XCIsIGhpbnQ6IFwiTnVtYmVyIG9mIG5vbi1ibGFuayBjZWxscyBpbiB0aGlzIGNvbHVtblwiIH0sXG4gIHsgdGl0bGU6IFwiVVwiLCB2YWx1ZTogXCJ1bmlxdWVcIiwgaGludDogXCJOdW1iZXIgb2YgdW5pcXVlIGNlbGxzIGluIHRoaXMgY29sdW1uXCIgfSxcbl07XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVN1bW1hcnlJdGVtIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRpdGxlOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogc3RyaW5nICkge1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVN1bW1hcnkgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2x1bW46IElUYWJsZUNvbHVtbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdW1tYXJ5SXRlbXMgPSBGdW5jdGlvbnMuZmlsdGVyKGZ1bmNEZXNjcmlwdGlvbiA9PiB7XG4gICAgICAgIHJldHVybiAhZnVuY0Rlc2NyaXB0aW9uLnR5cGVzIHx8IGZ1bmNEZXNjcmlwdGlvbi50eXBlcy5pbmRleE9mKGNvbHVtbi50eXBlKSAhPT0gLTFcbiAgICAgIH0pLm1hcChmdW5jRGVzY3JpcHRpb24gPT4gbmV3IFRhYmxlU3VtbWFyeUl0ZW0gKGZ1bmNEZXNjcmlwdGlvbi50aXRsZSwgZnVuY0Rlc2NyaXB0aW9uLnZhbHVlKSk7XG4gIH1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbi5zdW1tYXJ5VmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKHZhbDogYW55KSB7XG4gICAgdGhpcy5jb2x1bW4uc3VtbWFyeVZhbHVlID0gdmFsO1xuICB9XG4gIEBwcm9wZXJ0eSh7IGRlZmF1bHRWYWx1ZTogbnVsbCwgb25TZXQ6ICh2YWwsIHRhcmdldDogVGFibGVTdW1tYXJ5KSA9PiB7XG4gICAgdGFyZ2V0LmNvbHVtbi5zdW1tYXJ5UGFyYW1zID0geyBmdW5jOiB2YWwsIGZpZWxkOiB0YXJnZXQuY29sdW1uLm5hbWUgfTtcbiAgfSB9KSBmdW5jOiBhbnk7XG4gIHN1bW1hcnlJdGVtczogQXJyYXk8VGFibGVTdW1tYXJ5SXRlbT47XG59XG4iLCJpbXBvcnQgeyBJRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4vZGF0YS1wcm92aWRlclwiO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlEYXRhUHJvdmlkZXIgaW1wbGVtZW50cyBJRGF0YVByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0YTogQXJyYXk8YW55Pikge1xuXG4gICAgfVxuXG4gICAgZmlsdGVyZWQoZmlsdGVycywgZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YT8uZmlsdGVyKHJvdyA9PiBcbiAgICAgICAgICAgIGZpbHRlcnMuZXZlcnkoZiA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoKGYub3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkVRXCI6IHJldHVybiBmLnZhbHVlLmluY2x1ZGVzKHJvd1tmLmZpZWxkXSk7IFxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ1wiOiByZXR1cm4gZi5maWVsZCA/IH5yb3dbZi5maWVsZF0udG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZi52YWx1ZS50b1VwcGVyQ2FzZSgpKSA6IE9iamVjdC5rZXlzKHJvdykuc29tZShrID0+ICEhKHJvd1trXSAmJiByb3dba10udG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZi52YWx1ZS50b1VwcGVyQ2FzZSgpKSAhPT0gLTEpKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIklTTlwiOiAgcmV0dXJuICEocm93W2YuZmllbGRdKTsgXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJJU05OXCI6ICByZXR1cm4gISEocm93W2YuZmllbGRdKTsgXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiB0cnVlOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApID8/IFtdO1xuICAgIH1cblxuICAgIGdldERhdGEobGltaXQsIG9mZnNldCwgb3JkZXIsIGZpbHRlcnMsIGtleSwgYmFjaywgY2FsbGJhY2spIHtcbiAgICAgICAgZnVuY3Rpb24gc29ydGZ1bmMoYSwgYikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChhW29yZGVyW2ldLmZpZWxkXSA9PT0gYltvcmRlcltpXS5maWVsZF0pIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiAoYVtvcmRlcltpXS5maWVsZF0gPiBiW29yZGVyW2ldLmZpZWxkXSA/IDEgOiAtMSkgKiAob3JkZXJbaV0uZGVzYyA/IC0xIDogMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICAob3JkZXIubGVuZ3RoID4gMCkgJiYgdGhpcy5kYXRhLnNvcnQoc29ydGZ1bmMpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRoaXMuZmlsdGVyZWQoZmlsdGVycywgdGhpcy5kYXRhKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IG9mZnNldCA+IDAgPyBvZmZzZXQgOiAwOyBpIDwgb2Zmc2V0ICsgbGltaXQgJiYgZmlsdGVyZWREYXRhICYmIGkgPCBmaWx0ZXJlZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZpbHRlcmVkRGF0YVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJzIt0YHQtdC60YPQvdC00L3QsNGPINC30LDQtNC10YDQttC60LAg0L/RgNC+0YjQu9CwJyk7XG4gICAgICAgIC8vICAgICBjYWxsYmFjayhyZXN1bHQsIG9mZnNldCArIGxpbWl0LCBmaWx0ZXJlZERhdGEubGVuZ3RoLCBiYWNrKVxuICAgICAgICAvLyB9LCAyMDAwKTtcbiAgICAgICAgY2FsbGJhY2socmVzdWx0LCBvZmZzZXQgKyBsaW1pdCwgZmlsdGVyZWREYXRhLmxlbmd0aCwgYmFjayk7XG4gICAgfVxuXG4gICAgZ2V0U3VtbWFyeShmdW5jLCBmaWVsZCwgZmlsdGVycywgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXJlZChmaWx0ZXJzLCB0aGlzLmRhdGEpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmlsdGVyZWREYXRhLmxlbmd0aCA/IGZpbHRlcmVkRGF0YVswXVtmaWVsZF0gOiBmYWxzZTtcbiAgICAgICAgbGV0IHN1bSA9IDAsIGNvdW50ID0gMCwgdW5pcXVlcyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChmdW5jKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInN1bVwiOiByZXN1bHQgPSByZXN1bHQgKyByb3dbZmllbGRdOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXZnXCI6IHN1bSA9IHN1bSArIHJvd1tmaWVsZF07IGNvdW50Kys7IHJlc3VsdCA9IHN1bSAvIGNvdW50OyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWluXCI6IHJlc3VsdCA9IHJlc3VsdCA8IHJvd1tmaWVsZF0gPyByZXN1bHQgOiByb3dbZmllbGRdOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibWF4XCI6IHJlc3VsdCA9IHJlc3VsdCA+IHJvd1tmaWVsZF0gPyByZXN1bHQgOiByb3dbZmllbGRdOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiY291bnRcIjogaWYgKHJvd1tmaWVsZF0pIGNvdW50Kys7IHJlc3VsdCA9IGNvdW50OyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidW5pcXVlXCI6IGlmICghdW5pcXVlcy5pbmNsdWRlcyhyb3dbZmllbGRdKSkgeyB1bmlxdWVzLnB1c2gocm93W2ZpZWxkXSk7IH0gcmVzdWx0ID0gdW5pcXVlcy5sZW5ndGg7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH1cblxuICAgIGdldENvbHVtbkRhdGEoY29sdW1uTmFtZSwgZmlsdGVyLCBsaW1pdCwgb2Zmc2V0LCBjYWxsYmFjaykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gW10sIHVuaXF1ZXMgPSBbXTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGhpcy5kYXRhLm1hcChyb3cgPT4ge1xuICAgICAgICAgICAgaWYgKCghKGZpbHRlcikgfHwgfnJvd1tjb2x1bW5OYW1lXS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoZmlsdGVyLnRvVXBwZXJDYXNlKCkpKSAmJiAhdW5pcXVlcy5pbmNsdWRlcyhyb3dbY29sdW1uTmFtZV0pKSB7IHVuaXF1ZXMucHVzaChyb3dbY29sdW1uTmFtZV0pOyB9O1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IG9mZnNldCA+IDAgPyBvZmZzZXQgOiAwOyBpIDwgb2Zmc2V0ICsgbGltaXQgJiYgdW5pcXVlcyAmJiBpIDwgdW5pcXVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godW5pcXVlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG5cbiAgICBzYXZlRGF0YShrZXlOYW1lOnN0cmluZywga2V5OmFueSwgbW9kaWZ5Ont9KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKG1vZGlmeSkuZm9yRWFjaCggcD0+IHRoaXMuZGF0YS5maW5kKHIgPT4gcltrZXlOYW1lXSA9PSBrZXkpW3BdID0gbW9kaWZ5W3BdKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaW5zZXJ0RGF0YShrZXlOYW1lOnN0cmluZywgbW9kaWZ5Ont9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGlmeSk7XG4gICAgICAgIG1vZGlmeVtrZXlOYW1lXSA9IHRoaXMuZGF0YS5sZW5ndGggKyAxO1xuICAgICAgICB0aGlzLmRhdGEucHVzaChtb2RpZnkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBkZWxldGVEYXRhKGtleU5hbWU6c3RyaW5nLCBrZXlzOmFueVtdLCBjYWxsYmFjaykge1xuICAgICAgICBrZXlzLmZvckVhY2goayA9PiB0aGlzLmRhdGEuZmluZChyID0+IHRoaXMuZGF0YS5zcGxpY2UodGhpcy5kYXRhLmluZGV4T2YodGhpcy5kYXRhLmZpbmQociA9PiByW2tleU5hbWVdID09IGspKSwxKSkpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YSk7XG4gICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH0gXG5cbn0iLCJpbXBvcnQgeyBJRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4vZGF0YS1wcm92aWRlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdERhdGEodXJsID0gJycsIGRhdGEgPSB7fSkge1xuICAgIC8vIERlZmF1bHQgb3B0aW9ucyBhcmUgbWFya2VkIHdpdGggKlxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIC8vICAgbW9kZTogJ2NvcnMnLCAvLyBuby1jb3JzLCAqY29ycywgc2FtZS1vcmlnaW5cbiAgICAgICAgLy8gICBjYWNoZTogJ25vLWNhY2hlJywgLy8gKmRlZmF1bHQsIG5vLWNhY2hlLCByZWxvYWQsIGZvcmNlLWNhY2hlLCBvbmx5LWlmLWNhY2hlZFxuICAgICAgICAvLyAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBpbmNsdWRlLCAqc2FtZS1vcmlnaW4sIG9taXRcbiAgICAgICAgLy8gICByZWRpcmVjdDogJ2ZvbGxvdycsIC8vIG1hbnVhbCwgKmZvbGxvdywgZXJyb3JcbiAgICAgICAgLy8gICByZWZlcnJlclBvbGljeTogJ25vLXJlZmVycmVyJywgLy8gbm8tcmVmZXJyZXIsICpjbGllbnRcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSkgLy8gYm9keSBkYXRhIHR5cGUgbXVzdCBtYXRjaCBcIkNvbnRlbnQtVHlwZVwiIGhlYWRlclxuICAgIH0pO1xuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7IC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xufVxuXG5leHBvcnQgY2xhc3MgUmVtb3RlRGF0YVByb3ZpZGVyIGltcGxlbWVudHMgSURhdGFQcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHVybDogc3RyaW5nKSB7XG5cbiAgICB9XG5cbiAgICBnZXREYXRhKGxpbWl0OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBvcmRlcjogYW55W10sIGZpbHRlcnM6IGFueVtdLCBrZXk6IGFueSwgYmFjazogYm9vbGVhbiwgY2FsbGJhY2s6IChkYXRhOiBhbnksIHN0YXJ0OiBudW1iZXIsIGNvdW10OiBudW1iZXIsIGJhY2s6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgICAgICAgcG9zdERhdGEodGhpcy51cmwgKyBcImdldERhdGFcIiwgeyBuYW1lOiB0aGlzLm5hbWUsIGxpbWl0OiBsaW1pdCwgb2Zmc2V0OiBvZmZzZXQsIG9yZGVyOiBvcmRlciwgZmlsdGVyczogZmlsdGVycywga2V5OiBrZXksIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEuZGF0YSwgb2Zmc2V0ICsgbGltaXQsIGRhdGEuY291bnQsIGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0U3VtbWFyeShmdW5jOiBzdHJpbmcsIGZpZWxkOiBzdHJpbmcsIGZpbHRlcnM6IGFueVtdLCBjYWxsYmFjazogKHZhbHVlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgcG9zdERhdGEodGhpcy51cmwgKyBcImdldFN1bW1hcnlcIiwgeyBuYW1lOiB0aGlzLm5hbWUsIGZ1bmM6IGZ1bmMsIGZpZWxkOiBmaWVsZCwgZmlsdGVyczogZmlsdGVycyB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q29sdW1uRGF0YShjb2x1bW5OYW1lOiBzdHJpbmcsIGZpbHRlcjogYW55LCBsaW1pdDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY2FsbGJhY2s6ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHBvc3REYXRhKHRoaXMudXJsICsgXCJnZXRDb2x1bW5EYXRhXCIsIHsgbmFtZTogdGhpcy5uYW1lLCBjb2x1bW5OYW1lOiBjb2x1bW5OYW1lLCBmaWx0ZXI6IGZpbHRlciwgbGltaXQ6IGxpbWl0LCBvZmZzZXQ6IG9mZnNldCB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlRGF0YShrZXlOYW1lOnN0cmluZywga2V5OmFueSwgbW9kaWZ5Ont9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleU5hbWV9IC0gJHtrZXl9ID0+ICR7bW9kaWZ5fWApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpbnNlcnREYXRhKGtleU5hbWU6c3RyaW5nLCBtb2RpZnk6e30pIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5TmFtZX0gPT4gJHttb2RpZnl9YCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGRlbGV0ZURhdGEoa2V5TmFtZTpzdHJpbmcsIGtleXM6YW55W10sIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleU5hbWV9IC0gJHtrZXlzfWApO1xuICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gaXNFbXB0eShvYmo6IHt9KSB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iaikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbChvYmoxOiBhbnksIG9iajI6IGFueSkge1xuICAgIGlmKEFycmF5LmlzQXJyYXkob2JqMSkgJiYgQXJyYXkuaXNBcnJheShvYmoyKSkge1xuICAgICAgICBpZihvYmoxLmxlbmd0aCA9PT0gb2JqMi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvYmoxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYob2JqMVtpXSAhPT0gb2JqMltpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqMSA9PT0gb2JqMjtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc291cmNlcy9rbm9ja291dC9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==