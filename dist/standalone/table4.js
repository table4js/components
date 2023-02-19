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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko if: filterItems.length > 0 -->\n<div class=\"table4js-filter-item\">\n  <div class=\"table4js-filter__title table4js-filter-text\" data-bind=\"text: column.title + ':'\"></div>\n  <!-- ko foreach: filterItems -->\n  <div class=\"table4js-filter__content\">\n    <!-- ko if: $index() > 0 -->\n    <div class=\"table4js-filter__operator table4js-filter-text\" data-bind=\"text: '&'\"></div>\n    <!-- /ko -->\n    <!-- ko component: { name: 'table4js-column-filter-item', params: { filterItem: $data } } -->\n    <!-- /ko -->\n    <div class=\"table4js-filter__remove\"\n      data-bind=\"click: $parent.removeItem, clickBubble: false\">\n      <div class=\"table4js-filter__remove-icon table4js-svg-icon\" data-bind=\"html: $root.icons.cross\"></div>\n    </div>\n  </div>\n  <!-- /ko -->\n</div>\n<!-- /ko -->");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-table-resizable-container\">\n  <div class=\"table4js-table-scroll-container\">\n    <table class=\"table4js-table\">\n      <thead class=\"table4js-table__header table4js-table-sticky-component\">\n        <tr class=\"table4js-table-header-tools\">\n          <th class=\"table4js-table-header-tools__cell\" colspan=\"100%\">\n            <div class=\"table4js-table-header-tools__container table4js-table-group-header-technical-cell\">\n              <div class=\"table4js-table-preheader\">\n                <div class=\"table4js-table-search-group\">\n                  <!-- ko if: showSearch -->\n                  <table4js-search params=\"model: searchModel, icon: icons.search\"></table4js-search>\n                  <!-- /ko -->\n                  <table4js-actions class=\"table4js-table-actions\" params=\"model: $data, options: { action: 'topActions' }\">\n                  </table4js-actions>\n                  <!-- ko if: $data.getActions('dropdownActions').length > 0 -->\n                  <table4js-dropdown-actions class=\"table4js-table-dropdown table4js-table-actions-menu\"\n                    params=\"data: $data, actions: 'dropdownActions'\">\n                  </table4js-dropdown-actions>\n                  <!-- /ko -->\n                </div>\n              </div>\n              <!-- ko if: viewFilterTable -->\n              <div class=\"table4js-table-filter\">\n                <div class=\"table4js-table-filter__container\">\n                  <!-- ko foreach: columns -->\n                  <!-- ko component: { name: 'table4js-column-filter', params: { context: filterContext } } -->\n                  <!-- /ko -->\n                  <!-- /ko -->\n                </div>\n              </div>\n              <!-- /ko -->\n            </div>\n          </th>\n        </tr>\n        <tr class=\"table4js-table-header-title\">\n          <th class=\"table4js-table-header-title__cell table4js-table-switch\">\n            <div class=\"table4js-table-switch__text\"\n              data-bind=\"css: {'switch__text--selected': isNumber}, click: () => $data.isNumber = !$data.isNumber\">#\n            </div>\n          </th>\n          <!-- ko foreach: columns -->\n          <!-- ko if: visible -->\n          <th class=\"table4js-table-header-title__cell\"\n            data-bind=\"event: {mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp}\">\n            <div class=\"table4js-table-title\">\n              <span class=\"table4js-table-title__text\" data-bind=\"html: title, click: $parent.clickColumn\"></span>\n              <div class=\"table4js-table-title__tools\">\n                <div class=\"table4js-svg-icon table4js-table-title__sorter\" data-bind=\"visible: order === false, html: $parent.icons.sortup\"></div>\n                <div class=\"table4js-svg-icon table4js-table-title__sorter\" data-bind=\"visible: order === true, html: $parent.icons.sortdown\"></div>\n                <div class=\"table4js-svg-icon table4js-table-title__filter\" data-bind=\"click: clickFilter, html: $parent.icons.filter\"></div>\n              </div>\n            </div>\n            <div class=\"table4js-table-title_resize\"\n              data-bind=\"event: {mouseover: $parent.logMouseOver, mouseout: $parent.logMouseOut, mousemove: $parent.logMouseMove, mouseup: $parent.logMouseUp, mousedown: $parent.logMouseDown}\">\n            </div>\n          </th>\n          <!-- /ko -->\n          <!-- /ko -->\n          <th class=\"table4js-table-header-title__cell\"></th>\n        </tr>\n      </thead>\n      <tbody class=\"table4js-table__body\">\n        <!-- ko if: rows.length == 0 && loadingMutex == false  -->\n        <tr class=\"table4js-table__row\">\n          <th class=\"table4js-table-cell\" colspan=\"100%\" data-bind=\"text: noDataText\"></th>\n        </tr>\n        <!-- /ko -->\n        <!-- ko if: loadingMutex -->\n        <!-- ko foreach: columns -->\n        <tr class=\"table4js-table__row\"></tr>\n          <td class=\"table4js-table-cell table4js-table-technical-cell\" >\n            <div class=\"table4js-table-technical-cell__container\">\n              <div class=\"table4js-table__check\">\n                <div class=\"table4js-svg-icon table4js-table__icon-check\"></div>\n              </div>\n            </div>\n          </td>\n        <!-- ko foreach: $parent.columns -->\n        <!-- ko if: visible -->\n          <td class=\"table4js-table-cell table4js-table-technical-cell\">\n            <div class=\"table4js-table-cell__container table4js-table-cell__container--loading\">\n            </div>\n          </td>\n        <!-- /ko -->\n        <!-- /ko -->\n        <td class=\"table4js-table-cell table4js-table-technical-cell\">\n          <div class=\"table4js-table-technical-cell__container\">\n            <div class=\"table4js-svg-icon table4js-table-icon-row-tools table4js-table__more\" data-bind=\"html: $parent.icons.more\"></div>\n            <div class=\"table4js-svg-icon table4js-table-icon-row-tools table4js-table__edit\" data-bind=\"html: $parent.icons.edit\"></div>\n          </div>\n        </td>\n        </tr>\n        <!-- /ko -->\n        <!-- /ko -->\n        <!-- ko foreach: { data: rows } -->\n        <tr class=\"table4js-table__row\" data-bind=\"css: {'table4js-table__row--selected': selected}, style: {'background-color': 'none' }\">\n          <td class=\"table4js-table-cell table4js-table-technical-cell\" data-bind=\"click: select\">\n            <div class=\"table4js-table-technical-cell__container\">\n              <!-- ko if: $parent.isNumber -->\n              <div class=\"table4js-table__number\" data-bind=\"text: number\"></div>\n              <!-- /ko -->\n              <!-- ko if: !$parent.isNumber -->\n              <div class=\"table4js-table__check\">\n                <div class=\"table4js-svg-icon table4js-table__icon-check\" data-bind=\"visible: selected, html: $parent.icons.check\"></div>\n              </div>\n              <!-- /ko -->\n            </div>\n          </td>\n          <!-- ko foreach: cells -->\n          <!-- ko component: { name: 'table4js-table-cell', params: { cell: $data, table: $parents[1] } } -->\n          <!-- /ko -->\n          <!-- /ko -->\n          <td class=\"table4js-table-cell table4js-table-technical-cell\" data-bind=\"click: click\">\n            <div class=\"table4js-table-technical-cell__container\">\n              <div class=\"table4js-svg-icon table4js-table-icon-row-tools table4js-table__more\" data-bind=\"html: $parent.icons.more\"></div>\n              <div class=\"table4js-svg-icon table4js-table-icon-row-tools table4js-table__edit\" data-bind=\"html: $parent.icons.edit\"></div>\n            </div>\n            <div class=\"table4js-table__row--select\" data-bind=\"visible: !$parent.hasActiveInplaceEditor\"></div>\n            <div class=\"table4js-table__row--colored\" data-bind=\"style: { 'background': color ? color : 'rgba(248,249,253)' }\"></div>\n          </td>\n        </tr>\n        <!-- /ko -->\n      </tbody>\n      <tfoot class=\"table4js-table__footer table4js-table-sticky-component\">\n        <tr class=\"table4js-table-footer-summary\" data-bind=\"visible: showTableSummary\">\n          <th class=\"table4js-table-cell table4js-table-technical-cell table4js-table-footer__cell\">\n            <div class=\"table4js-table-technical-cell__container\">\n              <div class=\"table4js-svg-icon table4js-table-icon-equal\" data-bind=\"html: icons.equal\"></div>\n            </div>\n          </th>\n          <!-- ko foreach: columns -->\n          <!-- ko if: visible -->\n          <th class=\"table4js-table-cell table4js-table-footer__cell\">\n            <table4js-table-summary params='column: $data'></table4js-table-summary>\n          </th>\n          <!-- /ko -->\n          <!-- /ko -->\n          <th class=\"table4js-table-cell table4js-table-technical-cell table4js-table-footer__cell\"></th>\n        </tr>\n        <tr class=\"table4js-table-footer-tools\">\n          <th class=\"table4js-table-footer-tools__cell\" colspan=\"100%\">\n            <div class=\"table4js-table-footer-tools__container table4js-table-group-header-technical-cell\">\n              <div class=\"table4js-table-row-management\">\n                <table4js-actions class=\"table4js-table-actions\" params=\"model: $data, options: { action: 'bottomActions' }\">\n                </table4js-actions>\n              </div>\n              <div class=\"table4js-table-info\">\n                <span class=\"table4js-table-info__total table4js-table-info__text\"\n                  data-bind=\"text: 'Total: ' + totalCount\"></span>\n                <div class=\"table4js-table-info__go-to\">\n                  <span class=\"table4js-table-go-to__text table4js-table-info__text\">Go to: </span>\n                  <input class=\"table4js-table-go-to__value\" data-bind=\"value: startRow\"/>\n                  <button class=\"table4js-btn-transparent\">\n                    <div class=\"table4js-svg-icon table4js-table-go-to__icon\" data-bind=\"html: icons.arrowright\"></div>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </th>\n        </tr>\n      </tfoot>\n    </table>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"table4js-search\">\n  <input class=\"table4js-search__value\" data-bind=\"value: value, attr: { placeholder: 'Search...' }\" />\n  <div class=\"table4js-search__button\" data-bind=\"click: refresh, attr: { title: 'Search' }\">\n    <div class=\"table4js-svg-icon table4js-search__icon\" data-bind=\"html: icon\"></div>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ko if: $data -->\n<span class=\"table4js-table-summary__value\" data-bind=\"text: $data.value\"></span>\n<select class=\"table4js-table-summary__select\"  data-bind=\"value: func\">\n  <!-- ko foreach: summaryItems -->\n    <option data-bind=\"text: title, value: value, attr: { title: title }\"></option>\n  <!-- /ko -->  \n</select>\n<!-- /ko -->");

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
                icon: params.icon,
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
exports.summaryTemplate = __webpack_require__(/*! ./summary.html */ "./sources/knockout/table/summary.html")["default"];
ko.components.register("table4js-table-summary", {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            return params.column.summary;
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
    TableColumn.prototype.dispose = function () {
    };
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Boolean)
    ], TableColumn.prototype, "order", void 0);
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
var summary_1 = __webpack_require__(/*! ./summary */ "./sources/table/summary.ts");
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
        _this.plugins = [];
        _this.plugins = config.plugins || [];
        if (config.enableSummary === true) {
            if (_this.plugins.length === 0) {
                _this.plugins.push(new summary_1.TableSummaryPlugin());
            }
        }
        _this.plugins.forEach(function (plugin) { return plugin.init(_this); });
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
            var tableColumn = _this.createColumn(column, config);
            _this.plugins.forEach(function (plugin) { return plugin.onColumnCreated(tableColumn); });
            return tableColumn;
        });
    };
    Table.prototype.createActions = function (config) {
        var _this = this;
        this.plugins.forEach(function (plugin) { return _this.innerActions.push.apply(_this.innerActions, plugin.getActions()); });
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
    Table.prototype.registerPlugin = function (plugin) {
        var oldOne = this.unregisterPlugin(plugin.name);
        plugin.init(this);
        this.plugins.push(plugin);
        return oldOne;
    };
    Table.prototype.unregisterPlugin = function (pluginName) {
        var oldOneIndex = -1;
        for (var i = 0; i < this.plugins.length; i++) {
            if (this.plugins[i].name === pluginName) {
                oldOneIndex = i;
                break;
            }
        }
        var oldOne = undefined;
        if (oldOneIndex >= 0) {
            oldOne = this.plugins.splice(oldOneIndex, 1)[0];
        }
        return oldOne;
    };
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
exports.TableSummaryPlugin = exports.TableSummary = exports.TableSummaryItem = void 0;
var base_1 = __webpack_require__(/*! ../core/base */ "./sources/core/base.ts");
var property_1 = __webpack_require__(/*! ../core/property */ "./sources/core/property.ts");
var action_1 = __webpack_require__(/*! ../core/action */ "./sources/core/action.ts");
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
    function TableSummary(table, column) {
        var _this = _super.call(this) || this;
        _this.table = table;
        _this.column = column;
        _this.summaryItems = Functions.filter(function (funcDescription) {
            return !funcDescription.types || funcDescription.types.indexOf(column.type) !== -1;
        }).map(function (funcDescription) { return new TableSummaryItem(funcDescription.title, funcDescription.value); });
        return _this;
    }
    TableSummary.prototype.calculateSummary = function () {
        var _this = this;
        this.value = undefined;
        if (!!this.func) {
            this.table.dataProvider.getSummary(this.func, this.column.name, this.table["tableFilter"], function (data) { return _this.value = data; });
        }
    };
    __decorate([
        (0, property_1.property)(),
        __metadata("design:type", Number)
    ], TableSummary.prototype, "value", void 0);
    __decorate([
        (0, property_1.property)({ defaultValue: null, onSet: function (val, target) {
                target.calculateSummary();
            } }),
        __metadata("design:type", Object)
    ], TableSummary.prototype, "func", void 0);
    return TableSummary;
}(base_1.Base));
exports.TableSummary = TableSummary;
var TableSummaryPlugin = (function () {
    function TableSummaryPlugin() {
        this.name = "summary";
    }
    TableSummaryPlugin.prototype.init = function (table) {
        this._table = table;
    };
    TableSummaryPlugin.prototype.getActions = function () {
        var _this = this;
        return [new action_1.Action({
                name: "summary-action",
                action: function () {
                    _this._table.showTableSummary = !_this._table.showTableSummary;
                },
                svg: this._table.icons.equal,
                container: "top"
            })];
    };
    TableSummaryPlugin.prototype.onColumnCreated = function (column) {
        column.summary = new TableSummary(this._table, column);
    };
    return TableSummaryPlugin;
}());
exports.TableSummaryPlugin = TableSummaryPlugin;


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
//# sourceMappingURL=table4.js.map