!function(A){function e(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:!1};return A[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var t={};return e.m=A,e.c=t,e.p="./",e(0)}([function(A,e,t){"use strict";function n(A){return A&&A.__esModule?A:{"default":A}}t(2),t(3),t(1);var r=t(4),o=n(r),i=document.getElementById("music");if(Modernizr.audio){var d=new Audio(o["default"]);d.controls="controls",i.appendChild(d)}else{var a=document.createElement("p");a.textContent="史琪特·戴维丝 1963 年演唱的《The End Of The World》（世界末日）被评为当年最受欢迎的歌曲，被无数人翻唱过，但无人能及她原唱的魅力，这首歌也是她唯一的传世之作。",i.appendChild(a)}},function(module,exports){!function(window,document,undefined){function is(A,e){return typeof A===e}function testRunner(){var A,e,t,n,r,o,i;for(var d in tests)if(tests.hasOwnProperty(d)){if(A=[],e=tests[d],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(t=0;t<e.options.aliases.length;t++)A.push(e.options.aliases[t].toLowerCase());for(n=is(e.fn,"function")?e.fn():e.fn,r=0;r<A.length;r++)o=A[r],i=o.split("."),1===i.length?Modernizr[i[0]]=n:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=n),classes.push((n?"":"no-")+i.join("-"))}}function setClasses(A){var e=docElement.className,t=Modernizr._config.classPrefix||"";if(isSVG&&(e=e.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");e=e.replace(n,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e+=" "+t+A.join(" "+t),isSVG?docElement.className.baseVal=e:docElement.className=e)}function addTest(A,e){if("object"==typeof A)for(var t in A)hasOwnProp(A,t)&&addTest(t,A[t]);else{A=A.toLowerCase();var n=A.split("."),r=Modernizr[n[0]];if(2==n.length&&(r=r[n[1]]),"undefined"!=typeof r)return Modernizr;e="function"==typeof e?e():e,1==n.length?Modernizr[n[0]]=e:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=e),setClasses([(e&&0!=e?"":"no-")+n.join("-")]),Modernizr._trigger(A,e)}return Modernizr}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function getBody(){var A=document.body;return A||(A=createElement(isSVG?"svg":"body"),A.fake=!0),A}function injectElementWithStyles(A,e,t,n){var r,o,i,d,a="modernizr",s=createElement("div"),l=getBody();if(parseInt(t,10))for(;t--;)i=createElement("div"),i.id=n?n[t]:a+(t+1),s.appendChild(i);return r=createElement("style"),r.type="text/css",r.id="s"+a,(l.fake?l:s).appendChild(r),l.appendChild(s),r.styleSheet?r.styleSheet.cssText=A:r.appendChild(document.createTextNode(A)),s.id=a,l.fake&&(l.style.background="",l.style.overflow="hidden",d=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(l)),o=e(s,A),l.fake?(l.parentNode.removeChild(l),docElement.style.overflow=d,docElement.offsetHeight):s.parentNode.removeChild(s),!!o}function contains(A,e){return!!~(""+A).indexOf(e)}function domToCSS(A){return A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}function nativeTestProps(A,e){var t=A.length;if("CSS"in window&&"supports"in window.CSS){for(;t--;)if(window.CSS.supports(domToCSS(A[t]),e))return!0;return!1}if("CSSSupportsRule"in window){for(var n=[];t--;)n.push("("+domToCSS(A[t])+":"+e+")");return n=n.join(" or "),injectElementWithStyles("@supports ("+n+") { #modernizr { position: absolute; } }",function(A){return"absolute"==getComputedStyle(A,null).position})}return undefined}function cssToDOM(A){return A.replace(/([a-z])-([a-z])/g,function(A,e,t){return e+t.toUpperCase()}).replace(/^-/,"")}function testProps(A,e,t,n){function r(){i&&(delete mStyle.style,delete mStyle.modElem)}if(n=!is(n,"undefined")&&n,!is(t,"undefined")){var o=nativeTestProps(A,t);if(!is(o,"undefined"))return o}for(var i,d,a,s,l,c=["modernizr","tspan"];!mStyle.style;)i=!0,mStyle.modElem=createElement(c.shift()),mStyle.style=mStyle.modElem.style;for(a=A.length,d=0;d<a;d++)if(s=A[d],l=mStyle.style[s],contains(s,"-")&&(s=cssToDOM(s)),mStyle.style[s]!==undefined){if(n||is(t,"undefined"))return r(),"pfx"!=e||s;try{mStyle.style[s]=t}catch(u){}if(mStyle.style[s]!=l)return r(),"pfx"!=e||s}return r(),!1}function fnBind(A,e){return function(){return A.apply(e,arguments)}}function testDOMProps(A,e,t){var n;for(var r in A)if(A[r]in e)return t===!1?A[r]:(n=e[A[r]],is(n,"function")?fnBind(n,t||e):n);return!1}function testPropsAll(A,e,t,n,r){var o=A.charAt(0).toUpperCase()+A.slice(1),i=(A+" "+cssomPrefixes.join(o+" ")+o).split(" ");return is(e,"string")||is(e,"undefined")?testProps(i,e,n,r):(i=(A+" "+domPrefixes.join(o+" ")+o).split(" "),testDOMProps(i,e,t))}function testAllProps(A,e,t){return testPropsAll(A,undefined,undefined,e,t)}function roundedEquals(A,e){return A-1===e||A===e||A+1===e}var tests=[],ModernizrProto={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var t=this;setTimeout(function(){e(t[A])},0)},addTest:function(A,e,t){tests.push({name:A,fn:e,options:t})},addAsyncTest:function(A){tests.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr;var classes=[],docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase(),hasOwnProp;!function(){var A={}.hasOwnProperty;hasOwnProp=is(A,"undefined")||is(A.call,"undefined")?function(A,e){return e in A&&is(A.constructor.prototype[e],"undefined")}:function(e,t){return A.call(e,t)}}(),ModernizrProto._l={},ModernizrProto.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},ModernizrProto._trigger=function(A,e){if(this._l[A]){var t=this._l[A];setTimeout(function(){var A,n;for(A=0;A<t.length;A++)(n=t[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest});var omPrefixes="Moz O ms Webkit",cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(A){var e,t=prefixes.length,n=window.CSSRule;if("undefined"==typeof n)return undefined;if(!A)return!1;if(A=A.replace(/^@/,""),e=A.replace(/-/g,"_").toUpperCase()+"_RULE",e in n)return"@"+A;for(var r=0;r<t;r++){var o=prefixes[r],i=o.toUpperCase()+"_"+e;if(i in n)return"@-"+o.toLowerCase()+"-"+A}return!1};ModernizrProto.atRule=atRule;var domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;var hasEvent=function(){function A(A,t){var n;return!!A&&(t&&"string"!=typeof t||(t=createElement(t||"div")),A="on"+A,n=A in t,!n&&e&&(t.setAttribute||(t=createElement("div")),t.setAttribute(A,""),n="function"==typeof t[A],t[A]!==undefined&&(t[A]=undefined),t.removeAttribute(A)),n)}var e=!("onblur"in document.documentElement);return A}();ModernizrProto.hasEvent=hasEvent;var html5;isSVG||!function(A,e){function t(A,e){var t=A.createElement("p"),n=A.getElementsByTagName("head")[0]||A.documentElement;return t.innerHTML="x<style>"+e+"</style>",n.insertBefore(t.lastChild,n.firstChild)}function n(){var A=D.elements;return"string"==typeof A?A.split(" "):A}function r(A,e){var t=D.elements;"string"!=typeof t&&(t=t.join(" ")),"string"!=typeof A&&(A=A.join(" ")),D.elements=t+" "+A,s(e)}function o(A){var e=y[A[M]];return e||(e={},P++,A[M]=P,y[P]=e),e}function i(A,t,n){if(t||(t=e),f)return t.createElement(A);n||(n=o(t));var r;return r=n.cache[A]?n.cache[A].cloneNode():v.test(A)?(n.cache[A]=n.createElem(A)).cloneNode():n.createElem(A),!r.canHaveChildren||h.test(A)||r.tagUrn?r:n.frag.appendChild(r)}function d(A,t){if(A||(A=e),f)return A.createDocumentFragment();t=t||o(A);for(var r=t.frag.cloneNode(),i=0,d=n(),a=d.length;i<a;i++)r.createElement(d[i]);return r}function a(A,e){e.cache||(e.cache={},e.createElem=A.createElement,e.createFrag=A.createDocumentFragment,e.frag=e.createFrag()),A.createElement=function(t){return D.shivMethods?i(t,A,e):e.createElem(t)},A.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(A){return e.createElem(A),e.frag.createElement(A),'c("'+A+'")'})+");return n}")(D,e.frag)}function s(A){A||(A=e);var n=o(A);return!D.shivCSS||m||n.hasCSS||(n.hasCSS=!!t(A,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||a(A,n),A}function l(A){for(var e,t=A.getElementsByTagName("*"),r=t.length,o=RegExp("^(?:"+n().join("|")+")$","i"),i=[];r--;)e=t[r],o.test(e.nodeName)&&i.push(e.applyElement(c(e)));return i}function c(A){for(var e,t=A.attributes,n=t.length,r=A.ownerDocument.createElement(b+":"+A.nodeName);n--;)e=t[n],e.specified&&r.setAttribute(e.nodeName,e.nodeValue);return r.style.cssText=A.style.cssText,r}function u(A){for(var e,t=A.split("{"),r=t.length,o=RegExp("(^|[\\s,>+~])("+n().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+b+"\\:$2";r--;)e=t[r]=t[r].split("}"),e[e.length-1]=e[e.length-1].replace(o,i),t[r]=e.join("}");return t.join("{")}function p(A){for(var e=A.length;e--;)A[e].removeNode()}function w(A){function e(){clearTimeout(i._removeSheetTimer),n&&n.removeNode(!0),n=null}var n,r,i=o(A),d=A.namespaces,a=A.parentWindow;return!z||A.printShived?A:("undefined"==typeof d[b]&&d.add(b),a.attachEvent("onbeforeprint",function(){e();for(var o,i,d,a=A.styleSheets,s=[],c=a.length,p=Array(c);c--;)p[c]=a[c];for(;d=p.pop();)if(!d.disabled&&B.test(d.media)){try{o=d.imports,i=o.length}catch(w){i=0}for(c=0;c<i;c++)p.push(o[c]);try{s.push(d.cssText)}catch(w){}}s=u(s.reverse().join("")),r=l(A),n=t(A,s)}),a.attachEvent("onafterprint",function(){p(r),clearTimeout(i._removeSheetTimer),i._removeSheetTimer=setTimeout(e,500)}),A.printShived=!0,A)}var m,f,g="3.7.3",E=A.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,v=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,M="_html5shiv",P=0,y={};!function(){try{var A=e.createElement("a");A.innerHTML="<xyz></xyz>",m="hidden"in A,f=1==A.childNodes.length||function(){e.createElement("a");var A=e.createDocumentFragment();return"undefined"==typeof A.cloneNode||"undefined"==typeof A.createDocumentFragment||"undefined"==typeof A.createElement}()}catch(t){m=!0,f=!0}}();var D={elements:E.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:E.shivCSS!==!1,supportsUnknownElements:f,shivMethods:E.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:d,addElements:r};A.html5=D,s(e);var B=/^$|\b(?:all|print)\b/,b="html5shiv",z=!f&&function(){var t=e.documentElement;return!("undefined"==typeof e.namespaces||"undefined"==typeof e.parentWindow||"undefined"==typeof t.applyElement||"undefined"==typeof t.removeNode||"undefined"==typeof A.attachEvent)}();D.type+=" print",D.shivPrint=w,w(e),"object"==typeof module&&module.exports&&(module.exports=D)}("undefined"!=typeof window?window:this,document);var err=function(){},warn=function(){};window.console&&(err=function(){var A=console.error?"error":"log";window.console[A].apply(window.console,Array.prototype.slice.call(arguments))},warn=function(){var A=console.warn?"warn":"log";window.console[A].apply(window.console,Array.prototype.slice.call(arguments))}),ModernizrProto.load=function(){"yepnope"in window?(warn("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so we’ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."),window.yepnope.apply(window,[].slice.call(arguments,0))):err("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")};var mq=function(){var A=window.matchMedia||window.msMatchMedia;return A?function(e){var t=A(e);return t&&t.matches||!1}:function(A){var e=!1;return injectElementWithStyles("@media "+A+" { #modernizr { position: absolute; } }",function(A){e="absolute"==(window.getComputedStyle?window.getComputedStyle(A,null):A.currentStyle).position}),e}}();ModernizrProto.mq=mq;var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style}),ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(A,e,t){return 0===A.indexOf("@")?atRule(A):(A.indexOf("-")!=-1&&(A=cssToDOM(A)),e?testPropsAll(A,e,t):testPropsAll(A,"pfx"))},prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];ModernizrProto._prefixes=prefixes;var prefixedCSS=ModernizrProto.prefixedCSS=function(A){var e=prefixed(A);return e&&domToCSS(e)};ModernizrProto.testAllProps=testAllProps;var testProp=ModernizrProto.testProp=function(A,e,t){return testProps([A],undefined,e,t)},testStyles=ModernizrProto.testStyles=injectElementWithStyles;/*!
	{
	  "name": "a[download] Attribute",
	  "property": "adownload",
	  "caniuse" : "download",
	  "tags": ["media", "attribute"],
	  "builderAliases": ["a_download"],
	  "notes": [{
	    "name": "WhatWG Reference",
	    "href": "https://developers.whatwg.org/links.html#downloading-resources"
	  }]
	}
	!*/
Modernizr.addTest("adownload",!window.externalHost&&"download"in createElement("a")),/*!
	{
	  "name": "Ambient Light Events",
	  "property": "ambientlight",
	  "notes": [{
	    "name": "W3C Ambient Light Events",
	    "href": "https://www.w3.org/TR/ambient-light/"
	  }]
	}
	!*/
Modernizr.addTest("ambientlight",hasEvent("devicelight",window)),/*!
	{
	  "name": "Application Cache",
	  "property": "applicationcache",
	  "caniuse": "offline-apps",
	  "tags": ["storage", "offline"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"
	  }],
	  "polyfills": ["html5gears"]
	}
	!*/
Modernizr.addTest("applicationcache","applicationCache"in window),/*!
	{
	  "name" : "HTML5 Audio Element",
	  "property": "audio",
	  "tags" : ["html5", "audio", "media"]
	}
	!*/
Modernizr.addTest("audio",function(){var A=createElement("audio"),e=!1;try{(e=!!A.canPlayType)&&(e=new Boolean(e),e.ogg=A.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),e.mp3=A.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),e.opus=A.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),e.wav=A.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),e.m4a=(A.canPlayType("audio/x-m4a;")||A.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return e}),/*!
	{
	  "name": "Audio Loop Attribute",
	  "property": "audioloop",
	  "tags": ["audio", "media"]
	}
	!*/
Modernizr.addTest("audioloop","loop"in createElement("audio")),/*!
	{
	  "name": "Audio Preload",
	  "property": "audiopreload",
	  "tags": ["audio", "media"],
	  "async" : true,
	  "warnings": ["This test is very large – only include it if you absolutely need it"]
	}
	!*/
Modernizr.addAsyncTest(function(){function A(t){clearTimeout(e);var r=t!==undefined&&"loadeddata"===t.type;n.removeEventListener("loadeddata",A,!1),addTest("audiopreload",r),n.parentNode.removeChild(n)}var e,t=300,n=createElement("audio"),r=n.style;if(!(Modernizr.audio&&"preload"in n))return void addTest("audiopreload",!1);r.position="absolute",r.height=0,r.width=0;try{if(Modernizr.audio.mp3)n.src="data:audio/mpeg;base64,//MUxAAB6AXgAAAAAPP+c6nf//yi/6f3//MUxAMAAAIAAAjEcH//0fTX6C9Lf//0//MUxA4BeAIAAAAAAKX2/6zv//+IlR4f//MUxBMCMAH8AAAAABYWalVMQU1FMy45//MUxBUB0AH0AAAAADkuM1VVVVVVVVVV//MUxBgBUATowAAAAFVVVVVVVVVVVVVV";else if(Modernizr.audio.m4a)n.src="data:audio/x-m4a;base64,AAAAGGZ0eXBNNEEgAAACAGlzb21pc28yAAAACGZyZWUAAAAfbWRhdN4EAABsaWJmYWFjIDEuMjgAAAFoAQBHAAACiG1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAYAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAG0dHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAYAAAAAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAABUG1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAArEQAAAQAVcQAAAAAAC1oZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU291bmRIYW5kbGVyAAAAAPttaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAL9zdGJsAAAAW3N0c2QAAAAAAAAAAQAAAEttcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAACdlc2RzAAAAAAMZAAEABBFAFQAAAAABftAAAAAABQISCAYBAgAAABhzdHRzAAAAAAAAAAEAAAABAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAXAAAAAQAAABRzdGNvAAAAAAAAAAEAAAAoAAAAYHVkdGEAAABYbWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAraWxzdAAAACOpdG9vAAAAG2RhdGEAAAABAAAAAExhdmY1Mi42NC4y";else if(Modernizr.audio.ogg)n.src="data:audio/ogg;base64,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lFJKKaWUUkoppZRSSimllFJKKaWUUkqppJRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoplVJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSCgCQinAAkHowoQwUGrISAEgFAACMUUopxpyDEDHmGGPQSSgpYsw5xhyUklLlHIQQUmktt8o5CCGk1FJtmXNSWosx5hgz56SkFFvNOYdSUoux5ppr7qS0VmuuNedaWqs115xzzbm0FmuuOdecc8sx15xzzjnnGHPOOeecc84FAOA0OACAHtiwOsJJ0VhgoSErAYBUAAACGaUYc8456BBSjDnnHIQQIoUYc845CCFUjDnnHHQQQqgYc8w5CCGEkDnnHIQQQgghcw466CCEEEIHHYQQQgihlM5BCCGEEEooIYQQQgghhBA6CCGEEEIIIYQQQgghhFJKCCGEEEIJoZRQAABggQMAQIANqyOcFI0FFhqyEgAAAgCAHJagUs6EQY5Bjw1BylEzDUJMOdGZYk5qMxVTkDkQnXQSGWpB2V4yCwAAgCAAIMAEEBggKPhCCIgxAABBiMwQCYVVsMCgDBoc5gHAA0SERACQmKBIu7iALgNc0MVdB0IIQhCCWBxAAQk4OOGGJ97whBucoFNU6iAAAAAAAAwA4AEA4KAAIiKaq7C4wMjQ2ODo8AgAAAAAABYA+AAAOD6AiIjmKiwuMDI0Njg6PAIAAAAAAAAAAICAgAAAAAAAQAAAAICAT2dnUwAE7AwAAAAAAAD/QwAAAgAAADuydfsFAQEBAQEACg4ODg==";else{if(!Modernizr.audio.wav)return void addTest("audiopreload",!1);n.src="data:audio/wav;base64,UklGRvwZAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YdgZAAAAAAEA/v8CAP//AAABAP////8DAPz/BAD9/wEAAAAAAAAAAAABAP7/AgD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAAD//wIA/v8BAAAA//8BAAAA//8BAP//AQAAAP//AQD//wEAAAD//wEA//8BAP//AQD//wEA//8BAP//AQD+/wMA/f8DAP3/AgD+/wIA/////wMA/f8CAP7/AgD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAQD+/wIA/v8CAP7/AwD9/wIA/v8BAAEA/v8CAP7/AQAAAAAAAAD//wEAAAD//wIA/f8DAP7/AQD//wEAAAD//wEA//8CAP7/AQD//wIA/v8CAP7/AQAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD9/wQA+/8FAPz/AgAAAP//AgD+/wEAAAD//wIA/v8CAP3/BAD8/wQA/P8DAP7/AwD8/wQA/P8DAP7/AQAAAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAP//AQD//wEAAAD//wEA//8BAAAAAAAAAP//AgD+/wEAAAAAAAAAAAD//wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AgD+/wIA/v8BAP//AQABAP7/AQD//wIA/v8CAP3/AwD/////AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AAABAP//AAABAP//AQD//wAAAAACAP3/AwD9/wIA//8BAP//AQD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8CAAAA/v8EAPv/BAD9/wIAAAD+/wQA+v8HAPr/BAD+/wEAAAD//wIA/f8EAPz/BAD7/wUA/P8EAPz/AwD+/wEAAAD//wEAAAAAAP//AgD8/wUA+/8FAPz/AwD9/wIA//8AAAEA/v8CAP//AQD//wAAAAABAP//AgD9/wMA/f8EAPz/AwD+/wAAAwD7/wUA/P8DAP7/AQAAAP//AgD+/wEAAQD+/wIA/v8BAAEA/v8CAP7/AQAAAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA//8AAAEA/v8DAP3/AgD//wEA//8BAP7/AwD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AgD+/wEAAQD+/wIA/////wIA//8AAAEA/f8DAP//AAABAP////8DAP3/AwD+/wEA//8BAP//AQAAAAAA//8BAP//AQD//wEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAAAAAAAAAAD//wIA/v8BAAAA//8BAAEA/v8BAAAA//8DAPz/AwD+/wIA/v8CAP3/AwD+/wEAAAD//wEA//8BAAAA//8BAAAA/v8EAPv/BAD+/wAAAAABAP7/AgD//wAAAAABAP7/AgD//wAAAAAAAAAAAAABAP3/BAD8/wQA/f8BAAAAAAABAP7/AgD+/wIA/v8CAP7/AgD+/wIA/v8BAAAAAAD//wIA/f8DAP7/AAABAP//AAACAPz/BAD9/wIA//8AAP//AwD9/wMA/P8EAP3/AwD9/wIA//8BAP//AQD+/wMA/f8DAP7/AAABAP//AQAAAP//AQD//wIA/f8DAP7/AQAAAP//AQAAAAAA//8CAP7/AQABAP7/AgD+/wEAAQD+/wIA/v8CAP////8CAP7/AgD//wAAAAABAP7/AwD9/wIAAAD+/wMA/f8CAP//AQD+/wMA/f8CAP//AAACAPz/BQD6/wUA/v///wIA/v8CAP3/BAD7/wYA+v8FAPz/AwD/////AgD+/wEAAAD//wEAAAD//wIA/f8DAP7/AQAAAP//AgD//wAA//8BAAAAAAAAAP//AQD//wEA//8AAAIA/f8DAP3/AgAAAP//AQD//wEA//8AAAEA//8BAP////8CAP//AAABAP3/BAD9/wIA/v8BAAEA//8BAP7/AgD//wEA//8AAAEA//8BAP//AAAAAAEA//8BAP7/AgD//wEA//8AAAAAAQD+/wIA/v8BAAAAAAD//wIA/v8BAAAAAAAAAAAAAQD+/wMA/f8CAP//AQD//wIA/f8DAP7/AQD//wEA//8CAP7/AAABAP7/AwD9/wMA/v8AAAEA//8BAAAAAAD//wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP7/AgD//wAAAAAAAAAAAQD//wEA/v8DAPz/BQD8/wIA//8AAAEAAAD//wEA//8BAP//AQAAAAAA//8BAP//AgD+/wEAAAAAAP//AQD+/wMA/////wEA/v8CAP//AQD//wEA//8AAAEA//8BAAAA/v8EAPz/AwD+/wEAAAAAAAAA//8CAP7/AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AQD//wEA//8AAAEA/v8EAPv/BAD9/wIA//8BAP7/AwD9/wIA//8AAAEA//8BAP//AQD//wAAAQD//wEAAAD+/wMA/v8AAAIA/f8DAP7/AQD//wAAAQD+/wMA/f8CAP//AAABAP7/AgD+/wMA/f8CAP7/AQABAP7/AgD+/wIA/v8CAP7/AwD8/wMA//8AAAEA//8AAAAAAAABAP//AQD//wAAAQD//wIA/f8DAP3/AwD+/wAAAgD9/wIA//8AAAEAAAD+/wMA/P8FAPv/BAD9/wIA//8AAP//AgD+/wIA/v8BAAAAAAD//wEAAAAAAP//AQD//wEA//8BAP//AAABAP7/AwD9/wIA//8BAP//AAABAP//AQD//wAAAQD//wEA//8BAP//AAABAAAA//8BAP7/AwD9/wMA/f8DAP3/AgD//wEA//8BAP7/AgD//wAAAgD8/wQA/f8CAP//AQD+/wMA/f8CAP7/AgD//wAAAAAAAAAAAAABAP7/AwD9/wIA/v8DAP3/AwD9/wIA/v8DAPz/BQD7/wQA/f8CAP7/AwD9/wMA/f8CAP//AQAAAP7/AwD+/wEA//8AAAEAAAAAAP//AAABAP//AQAAAP7/AwD9/wMA/f8CAP//AQD//wEA//8AAAIA/f8CAAAA//8BAAAA//8BAAAA/v8EAPv/BAD9/wIA//8AAAEA/v8CAP//AAABAP//AAABAP//AAABAP7/AwD8/wQA/f8CAAAA/v8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAAAAAAAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AgD//wAAAQD//wAAAQD//wAAAQD//wAAAQD+/wIA//8AAAAAAQD+/wMA/f8CAP//AQD//wEA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD9/wIA//8AAAEA/v8DAP3/AgD//wAAAAABAP7/AwD8/wMA/v8CAP//AAD//wIA/v8CAP7/AQABAP7/AQAAAP//AgD/////AQD//wEAAAD//wEA/v8EAPv/BAD9/wMA/v8BAAAA//8BAAEA/P8GAPr/BQD8/wMA/v8BAAAA//8CAP7/AQABAP3/BAD7/wYA+/8EAPz/AwD//wEA//8BAP7/BAD8/wMA/v8AAAIA/v8BAAAA//8BAAAA//8BAAAA//8CAP3/AwD+/wAAAgD8/wUA/P8DAP7/AAABAAAAAAD//wEAAAD//wIA/f8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/f8EAPz/AwD/////AgD+/wIA/f8DAP7/AgD+/wEA//8CAP7/AQD//wEAAAAAAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAP//AQAAAP//AAACAP3/BAD7/wQA/v8BAAAA//8BAP//AQAAAP//AQAAAP7/BAD7/wUA+/8EAP3/AgD//wAAAQD+/wIA//8AAAEA/v8CAP//AQD+/wEAAAAAAAAAAAD//wEA//8CAP3/AwD9/wIA//8AAAAAAAAAAAAA//8BAP//AgD+/wEA//8CAP7/AQAAAP//AgD/////AgD/////AgD+/wIA//8AAP//AQABAP7/AgD9/wMA/v8CAP////8BAAAAAAAAAAAA//8CAP////8DAPz/AwD+/wEAAAAAAP//AQD//wEAAAD//wEAAAD+/wQA+/8FAPz/AgAAAP//AgD9/wMA/v8BAAAAAAD//wEAAAD//wIA/v8BAAAAAAD//wIA/v8BAAAA//8BAAAA//8CAP7/AQD//wEA//8BAAAA//8BAP//AAABAP//AQAAAP7/AgD//wEA//8AAAAAAQD+/wMA/P8EAP7///8DAPz/BQD8/wEAAQD+/wMA/v8AAAEA//8BAP//AQD//wEA/v8CAP//AQD//wAAAAABAAAA//8BAP//AQAAAAAA//8BAP//AgD+/wAAAQD//wIA/f8CAP//AQAAAP7/AwD9/wMA/v8BAP//AAABAP//AgD9/wIA//8BAAAA//8BAAAA//8CAP3/AwD+/wEAAAD+/wQA/P8DAP7/AAACAP7/AQAAAP//AQAAAP//AQAAAP//AgD9/wIAAAD//wIA/f8DAP7/AQD//wEA//8CAP7/AQD//wAAAQD//wEA//8AAAAAAQD//wEAAAD9/wUA+/8FAPz/AgD//wAAAQD//wAAAQD+/wMA/f8BAAEA/v8CAP7/AgD+/wIA/v8BAAAAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP7/AQAAAP//AQAAAP//AQD//wAAAQD//wAAAQD+/wMA/f8CAAAA/v8DAP3/AgAAAP//AQAAAP7/AwD9/wMA/v8BAP//AQD//wEAAAD+/wMA/f8CAAAA/v8CAP//AAAAAAEA//8AAAEA/v8DAP3/AwD9/wIA//8BAP//AgD8/wQA/v8BAAAA/v8CAP//AQD//wAAAAAAAAEA/f8EAPz/BAD9/wIA//8AAAAAAAABAP//AAAAAAAAAAABAP3/BAD9/wIA/v8BAAEA//8AAAAA//8CAP7/AgD9/wQA+/8FAPv/BQD8/wMA/f8DAP3/AwD+/wAAAgD9/wMA/f8CAAAA/v8EAPv/BQD7/wUA/P8DAP///v8DAP3/BAD8/wMA/f8DAP7/AQD//wEAAAD//wEA/v8CAAAA/v8CAP7/AgD//wAAAAAAAAAAAQD+/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAP//AgD//wEA/v8BAAAAAQD//wAAAAAAAAEA//8AAAEA//8BAP//AAABAP//AQD+/wIA/v8DAPz/BAD8/wQA/f8BAAAAAQD+/wMA/P8DAP//AAAAAAAAAAD//wMA+/8FAP3/AQABAP3/BAD8/wMA/v8BAAAA//8CAP3/AwD+/wEAAQD9/wMA/f8EAPz/BAD7/wQA/v8BAAEA/f8DAP7/AQAAAP//AgD+/wEAAAD//wIA/v8CAP7/AgD+/wEAAQD//wEA/v8CAP7/BAD7/wQA/f8CAAAA//8AAAAAAAABAP//AQD+/wEAAQD+/wMA/f8BAAEA/v8DAPz/AwD/////AwD8/wQA/P8DAP7/AgD//wAA//8BAAAAAAAAAP//AgD+/wEAAAD//wIA/v8BAAAA//8CAP3/AgD//wAAAQD+/wIA/v8BAAAA//8CAP7/AgD+/wEA//8CAP3/BAD7/wQA/v8BAAAA//8AAAEAAAD//wIA/f8DAP7/AgD+/wIA/v8CAP7/AgD+/wEAAAAAAP//AgD9/wMA/v8BAP//AgD9/wMA/v8AAAEA//8BAP//AQD//wEA//8AAAEA/v8EAPz/AgD//wAAAQAAAP//AAABAP//AQD//wEAAAD//wEA//8BAAEA/f8DAP7/AQABAP3/AwD+/wIA/////wEAAAAAAAAAAAD//wIA/v8CAP////8CAP7/AgD//wAA//8CAP3/BAD9/wAAAgD9/wMA/v8BAP//AQAAAP//AQAAAP//AgD9/wMA/f8EAPz/AwD+/wEAAAAAAAAAAAD//wIA/f8EAP3/AAABAAAA//8CAP7/AQAAAP//AQAAAAAA//8BAP//AQAAAP//AQAAAP//AQAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wIA/v8CAP3/BAD9/wEAAAD//wEAAQD9/wMA/f8CAAAA/v8DAP3/AgD//wAAAQD+/wIA/v8CAP7/AQAAAP//AgD+/wEAAAAAAP//AwD7/wUA/f8BAAEA/v8BAAEA/v8DAP3/AgD//wEA//8BAP//AQD//wEA//8CAP3/BAD7/wQA/////wIA/v8AAAIA/v8CAP3/BAD7/wUA/P8DAP3/AwD9/wMA/v8AAAIA/v8CAP7/AgD+/wIA//8AAAEA/v8CAP7/AgD//wAAAAD//wEAAAAAAAAA//8BAP7/BAD7/wUA/P8CAAAA//8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD+/wEA//8CAP3/AwD+/wAAAwD8/wIAAAD//wIA/////wIA/v8CAP7/AgD+/wEAAAAAAAAAAAAAAP//AgD+/wIA//8AAAAA//8CAP7/AgD+/wEA//8CAP3/AwD9/wMA/v8BAP7/AwD9/wMA/f8CAP//AQD+/wIA//8BAP//AQD+/wMA/v8BAAAA//8BAAAA//8CAP7/AQAAAP//AgD+/wIA/v8CAP//AAAAAAEA//8BAP//AAABAAAA//8BAP//AQD//wEA//8BAP//AQAAAP//AQD//wEAAAD//wIA/f8CAAAA//8BAAAA//8BAP//AAABAP//AQD//wAAAAAAAAEA/v8CAP//AQD//wAAAAABAP7/AwD9/wIAAAD+/wIA//8BAP//AgD9/wMA/f8DAP7/AgD+/wEAAAAAAAEA/v8CAP7/AgD//wAAAAAAAAAAAAAAAP//AgD/////AgD9/wQA/f8BAAAAAAAAAAEA/f8DAP////8DAP3/AQABAP7/AgD//wAAAQD+/wMA/f8CAP7/AQABAP7/AwD7/wYA+v8FAP3/AQABAP7/AgD+/wMA/f8CAP7/AwD+/wEA//8BAP//AQAAAP7/BQD5/wcA+v8FAPz/AwD+/wIA/v8BAAAA//8DAPv/BQD8/wMA/////wEAAAAAAAAAAAD//wIA/f8DAP7/AQAAAP//AQAAAP//AgD+/wIA/v8BAAEA/f8EAPz/AwD+/wEA//8CAP7/AQD//wEA//8CAP7/AQAAAP//AgD+/wEAAAAAAAAAAAAAAAAAAAD//wIA/f8EAPz/AwD+/wEA//8CAP7/AgD+/wEAAQD+/wEAAQD+/wIA/////wIA//8AAAAAAAAAAAAAAAD//wEAAAAAAP//AgD9/wMA/v8BAP//AQAAAP//AQD//wEA//8BAP//AQD//wEA//8BAP//AQAAAP7/AwD9/wMA/v8BAP7/AwD9/wMA/v8BAP//AAABAP//AQD//wAAAAABAP//AAAAAAAAAQD//wEA/v8CAAAA/v8EAPv/BAD9/wIAAAD+/wMA/P8DAP//AAAAAP//AQD//wIA/f8DAP3/AwD9/wMA/v8BAAAA//8BAAAA//8CAP3/AwD9/wQA+/8FAPv/BQD8/wMA/v8BAAAA//8BAP//AgD+/wEAAAD//wIA/v8BAAEA/f8DAP3/AgAAAP//AQD//wAAAQD//wEA//8BAP//AQD//wEA/v8DAP3/AgAAAP7/AwD9/wIAAAD//wEAAAD//wIA/f8DAP7/AgD9/wQA+/8FAPz/AgAAAP//AgD9/wIA//8BAP//AQD//wEA//8BAP//AQD//wIA/f8DAP3/AgD//wAAAQD+/wIA/v8BAAEA/v8CAP7/AgD+/wMA/P8DAP//AAABAP7/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA/v8CAP3/BAD8/wMA/v8BAAAAAAD//wEAAAAAAAAAAAD//wEAAAAAAAAA//8BAP//AgD+/wEA//8CAP3/AwD9/wMA/f8EAPv/BAD+/wAAAQD//wEA//8BAP//AAABAP//AQD//wEAAAD//wEA//8BAP//AgD9/wMA/v8AAAIA/f8DAP7/AAACAP3/AwD+/wEA//8BAP//AQAAAP//AQAAAP7/AwD9/wMA/v8AAAEA//8BAP//AAAAAAEA//8AAAEA/v8CAP//AAAAAAEA/v8DAPz/BAD9/wEAAQD+/wEAAQD9/wQA/P8DAP7/AQAAAAAAAAAAAAAAAAAAAAAAAQD+/wIA/////wIA/v8BAAAA//8BAP//AQD//wEA//8BAAAA/v8EAPz/AwD///7/BAD8/wMA/////wIA/v8CAP////8CAP7/AgD+/wIA/v8CAP////8CAP7/AwD9/wIA/v8CAP//AAABAP7/AwD9/wEAAQD+/wMA/f8CAP//AAAAAAEA/v8DAPz/BAD9/wIA/v8CAP7/AgD//wAAAAD//wIA/v8CAP7/AQAAAAAA//8CAP7/AgD+/wIA/v8CAP7/AwD8/wUA+v8GAPv/AwD//wAAAAAAAAAA//8DAPv/BQD9/wAAAgD9/wMA/v8BAP//AQAAAP//AgD9/wMA/v8BAAAA//8BAAAAAAAAAP//AQAAAAAAAAD//wEA//8CAP3/AwD+/wAAAgD+/wEAAAD//wIA/v8CAP7/AgD/////AwD8/wUA/P8CAP//AQD//wIA/f8DAP3/AwD+/wAAAQD+/wMA/f8DAP3/AgD//wAAAQD//wEA//8BAP7/AwD+/wEA//8AAAEA//8CAPz/BAD9/wIA//8AAAEA/v8DAPz/BAD9/wIA//8AAAEA/v8CAP7/AgD//wEA/f8EAPz/BAD+////AgD//wAAAQD//wAAAQD//wEA//8BAP7/AwD+/wEA"}}catch(o){return void addTest("audiopreload",!1)}n.setAttribute("preload","auto"),n.style.cssText="display:none",docElement.appendChild(n),setTimeout(function(){n.addEventListener("loadeddata",A,!1),e=setTimeout(A,t)},0)}),/*!
	{
	  "name": "Web Audio API",
	  "property": "webaudio",
	  "caniuse": "audio-api",
	  "polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
	  "tags": ["audio", "media"],
	  "builderAliases": ["audio_webaudio_api"],
	  "authors": ["Addy Osmani"],
	  "notes": [{
	    "name": "W3 Specification",
	    "href": "https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html"
	  }]
	}
	!*/
Modernizr.addTest("webaudio",function(){var A="webkitAudioContext"in window,e="AudioContext"in window;return Modernizr._config.usePrefixes?A||e:e}),/*!
	{
	  "name": "Battery API",
	  "property": "batteryapi",
	  "aliases": ["battery-api"],
	  "builderAliases": ["battery_api"],
	  "tags": ["device", "media"],
	  "authors": ["Paul Sayre"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozBattery"
	  }]
	}
	!*/
Modernizr.addTest("batteryapi",!!prefixed("battery",navigator),{aliases:["battery-api"]}),/*!
	{
	  "name": "Low Battery Level",
	  "property": "lowbattery",
	  "tags": ["hardware", "mobile"],
	  "builderAliases": ["battery_level"],
	  "authors": ["Paul Sayre"],
	  "notes": [{
	    "name": "MDN Docs",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/battery"
	  }]
	}
	!*/
Modernizr.addTest("lowbattery",function(){var A=.2,e=prefixed("battery",navigator);return!!(e&&!e.charging&&e.level<=A)}),/*!
	{
	  "name": "Blob constructor",
	  "property": "blobconstructor",
	  "aliases": ["blob-constructor"],
	  "builderAliases": ["blob_constructor"],
	  "caniuse": "blobbuilder",
	  "notes": [{
	    "name": "W3C spec",
	    "href": "https://w3c.github.io/FileAPI/#constructorBlob"
	  }],
	  "polyfills": ["blobjs"]
	}
	!*/
Modernizr.addTest("blobconstructor",function(){try{return!!new Blob}catch(A){return!1}},{aliases:["blob-constructor"]}),/*!
	{
	  "name": "Canvas",
	  "property": "canvas",
	  "caniuse": "canvas",
	  "tags": ["canvas", "graphics"],
	  "polyfills": ["flashcanvas", "excanvas", "slcanvas", "fxcanvas"]
	}
	!*/
Modernizr.addTest("canvas",function(){var A=createElement("canvas");return!(!A.getContext||!A.getContext("2d"))}),/*!
	{
	  "name": "canvas blending support",
	  "property": "canvasblending",
	  "tags": ["canvas"],
	  "async" : false,
	  "notes": [{
	      "name": "HTML5 Spec",
	      "href": "https://dvcs.w3.org/hg/FXTF/rawfile/tip/compositing/index.html#blending"
	    },
	    {
	      "name": "Article",
	      "href": "https://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas"
	    }]
	}
	!*/
Modernizr.addTest("canvasblending",function(){if(Modernizr.canvas===!1)return!1;var A=createElement("canvas").getContext("2d");try{A.globalCompositeOperation="screen"}catch(e){}return"screen"===A.globalCompositeOperation});/*!
	{
	  "name": "canvas.toDataURL type support",
	  "property": ["todataurljpeg", "todataurlpng", "todataurlwebp"],
	  "tags": ["canvas"],
	  "builderAliases": ["canvas_todataurl_type"],
	  "async" : false,
	  "notes": [{
	    "name": "MDN article",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement.toDataURL"
	  }]
	}
	!*/
var canvas=createElement("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&0===canvas.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&0===canvas.toDataURL("image/png").indexOf("data:image/png")}),Modernizr.addTest("todataurlwebp",function(){var A=!1;try{A=!!Modernizr.canvas&&0===canvas.toDataURL("image/webp").indexOf("data:image/webp")}catch(e){}return A}),/*!
	{
	  "name": "canvas winding support",
	  "property": ["canvaswinding"],
	  "tags": ["canvas"],
	  "async" : false,
	  "notes": [{
	    "name": "Article",
	    "href": "https://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/"
	  }]
	}
	!*/
Modernizr.addTest("canvaswinding",function(){if(Modernizr.canvas===!1)return!1;var A=createElement("canvas").getContext("2d");return A.rect(0,0,10,10),A.rect(2,2,6,6),A.isPointInPath(5,5,"evenodd")===!1}),/*!
	{
	  "name": "Canvas text",
	  "property": "canvastext",
	  "caniuse": "canvas-text",
	  "tags": ["canvas", "graphics"],
	  "polyfills": ["canvastext"]
	}
	!*/
Modernizr.addTest("canvastext",function(){return Modernizr.canvas!==!1&&"function"==typeof createElement("canvas").getContext("2d").fillText}),/*!
	{
	  "name": "Content Editable",
	  "property": "contenteditable",
	  "caniuse": "contenteditable",
	  "notes": [{
	    "name": "WHATWG spec",
	    "href": "https://html.spec.whatwg.org/multipage/interaction.html#contenteditable"
	  }]
	}
	!*/
Modernizr.addTest("contenteditable",function(){if("contentEditable"in docElement){var A=createElement("div");return A.contentEditable=!0,"true"===A.contentEditable}}),/*!
	{
	  "name": "Context menus",
	  "property": "contextmenu",
	  "caniuse": "menu",
	  "notes": [{
	    "name": "W3C spec",
	    "href": "http://www.w3.org/TR/html5/interactive-elements.html#context-menus"
	  },{
	    "name": "thewebrocks.com Demo",
	    "href": "http://thewebrocks.com/demos/context-menu/"
	  }],
	  "polyfills": ["jquery-contextmenu"]
	}
	!*/
Modernizr.addTest("contextmenu","contextMenu"in docElement&&"HTMLMenuItemElement"in window),/*!
	{
	  "name": "Cookies",
	  "property": "cookies",
	  "tags": ["storage"],
	  "authors": ["tauren"]
	}
	!*/
Modernizr.addTest("cookies",function(){try{document.cookie="cookietest=1";var A=document.cookie.indexOf("cookietest=")!=-1;return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",A}catch(e){return!1}}),/*!
	{
	  "name": "Cross-Origin Resource Sharing",
	  "property": "cors",
	  "caniuse": "cors",
	  "authors": ["Theodoor van Donge"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/HTTP/Access_control_CORS"
	  }],
	  "polyfills": ["pmxdr", "ppx", "flxhr"]
	}
	!*/
Modernizr.addTest("cors","XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest);/*!
	{
	  "name": "Web Cryptography",
	  "property": "cryptography",
	  "caniuse": "cryptography",
	  "tags": ["crypto"],
	  "authors": ["roblarsen"],
	  "notes": [{
	    "name": "W3C Editor's Draft",
	    "href": "https://www.w3.org/TR/WebCryptoAPI/"
	  }],
	  "polyfills": [
	    "polycrypt"
	  ]
	}
	!*/
var crypto=prefixed("crypto",window);Modernizr.addTest("crypto",!!prefixed("subtle",crypto));/*!
	{
	  "name": "getRandomValues",
	  "property": "getrandomvalues",
	  "caniuse": "window.crypto.getRandomValues",
	  "tags": ["crypto"],
	  "authors": ["komachi"],
	  "notes": [{
	    "name": "W3C Editor’s Draft",
	    "href": "https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#RandomSource-method-getRandomValues"
	  }],
	  "polyfills": [
	    "polycrypt"
	  ]
	}
	!*/
var crypto=prefixed("crypto",window),supportsGetRandomValues;if(crypto&&"getRandomValues"in crypto&&"Uint32Array"in window){var array=new Uint32Array(10),values=crypto.getRandomValues(array);supportsGetRandomValues=values&&is(values[0],"number")}Modernizr.addTest("getrandomvalues",!!supportsGetRandomValues),/*!
	{
	  "name": "cssall",
	  "property": "cssall",
	  "notes": [{
	    "name": "Spec",
	    "href": "https://drafts.csswg.org/css-cascade/#all-shorthand"
	  }]
	}
	!*/
Modernizr.addTest("cssall","all"in docElement.style),/*!
	{
	  "name": "CSS Animations",
	  "property": "cssanimations",
	  "caniuse": "css-animation",
	  "polyfills": ["transformie", "csssandpaper"],
	  "tags": ["css"],
	  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
	  "notes": [{
	    "name" : "Article: 'Dispelling the Android CSS animation myths'",
	    "href": "https://goo.gl/OGw5Gm"
	  }]
	}
	!*/
Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),/*!
	{
	  "name": "Appearance",
	  "property": "appearance",
	  "caniuse": "css-appearance",
	  "tags": ["css"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance"
	  },{
	    "name": "CSS-Tricks CSS Almanac: appearance",
	    "href": "https://css-tricks.com/almanac/properties/a/appearance/"
	  }]
	}
	!*/
Modernizr.addTest("appearance",testAllProps("appearance")),/*!
	{
	  "name": "Backdrop Filter",
	  "property": "backdropfilter",
	  "authors": ["Brian Seward"],
	  "tags": ["css"],
	  "notes": [
	    {
	      "name": "W3C Editor’s Draft specification",
	      "href": "https://drafts.fxtf.org/filters-2/#BackdropFilterProperty"
	    },
	    {
	      "name": "Caniuse for CSS Backdrop Filter",
	      "href": "http://caniuse.com/#feat=css-backdrop-filter"
	    },
	    {
	      "name": "WebKit Blog introduction + Demo",
	      "href": "https://www.webkit.org/blog/3632/introducing-backdrop-filters/"
	    }
	  ]
	}
	!*/
Modernizr.addTest("backdropfilter",testAllProps("backdropFilter")),/*!
	{
	  "name": "CSS Background Blend Mode",
	  "property": "backgroundblendmode",
	  "caniuse": "css-backgroundblendmode",
	  "tags": ["css"],
	  "notes": [
	    {
	      "name": "CSS Blend Modes could be the next big thing in Web Design",
	      "href": " https://medium.com/@bennettfeely/css-blend-modes-could-be-the-next-big-thing-in-web-design-6b51bf53743a"
	    }, {
	      "name": "Demo",
	      "href": "http://bennettfeely.com/gradients/"
	    }
	  ]
	}
	!*/
Modernizr.addTest("backgroundblendmode",prefixed("backgroundBlendMode","text")),/*!
	{
	  "name": "CSS Background Clip Text",
	  "property": "backgroundcliptext",
	  "authors": ["ausi"],
	  "tags": ["css"],
	  "notes": [
	    {
	      "name": "CSS Tricks Article",
	      "href": "https://css-tricks.com/image-under-text/"
	    },
	    {
	      "name": "MDN Docs",
	      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip"
	    },
	    {
	      "name": "Related Github Issue",
	      "href": "https://github.com/Modernizr/Modernizr/issues/199"
	    }
	  ]
	}
	!*/
Modernizr.addTest("backgroundcliptext",function(){return testAllProps("backgroundClip","text")}),/*!
	{
	  "name": "Background Position Shorthand",
	  "property": "bgpositionshorthand",
	  "tags": ["css"],
	  "builderAliases": ["css_backgroundposition_shorthand"],
	  "notes": [{
	    "name": "MDN Docs",
	    "href": "https://developer.mozilla.org/en/CSS/background-position"
	  }, {
	    "name": "W3 Spec",
	    "href": "https://www.w3.org/TR/css3-background/#background-position"
	  }, {
	    "name": "Demo",
	    "href": "https://jsfiddle.net/Blink/bBXvt/"
	  }]
	}
	!*/
Modernizr.addTest("bgpositionshorthand",function(){var A=createElement("a"),e=A.style,t="right 10px bottom 10px";return e.cssText="background-position: "+t+";",e.backgroundPosition===t}),/*!
	{
	  "name": "Background Position XY",
	  "property": "bgpositionxy",
	  "tags": ["css"],
	  "builderAliases": ["css_backgroundposition_xy"],
	  "authors": ["Allan Lei", "Brandom Aaron"],
	  "notes": [{
	    "name": "Demo",
	    "href": "https://jsfiddle.net/allanlei/R8AYS/"
	  }, {
	    "name": "Adapted From",
	    "href": "https://github.com/brandonaaron/jquery-cssHooks/blob/master/bgpos.js"
	  }]
	}
	!*/
Modernizr.addTest("bgpositionxy",function(){return testAllProps("backgroundPositionX","3px",!0)&&testAllProps("backgroundPositionY","5px",!0)}),/*!
	{
	  "name": "Background Repeat",
	  "property": ["bgrepeatspace", "bgrepeatround"],
	  "tags": ["css"],
	  "builderAliases": ["css_backgroundrepeat"],
	  "authors": ["Ryan Seddon"],
	  "notes": [{
	    "name": "MDN Docs",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat"
	  }, {
	    "name": "Test Page",
	    "href": "https://jsbin.com/uzesun/"
	  }, {
	    "name": "Demo",
	    "href": "https://jsfiddle.net/ryanseddon/yMLTQ/6/"
	  }]
	}
	!*/
Modernizr.addTest("bgrepeatround",testAllProps("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",testAllProps("backgroundRepeat","space")),/*!
	{
	  "name": "Background Size",
	  "property": "backgroundsize",
	  "tags": ["css"],
	  "knownBugs": ["This will false positive in Opera Mini - https://github.com/Modernizr/Modernizr/issues/396"],
	  "notes": [{
	    "name": "Related Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/396"
	  }]
	}
	!*/
Modernizr.addTest("backgroundsize",testAllProps("backgroundSize","100%",!0)),/*!
	{
	  "name": "Background Size Cover",
	  "property": "bgsizecover",
	  "tags": ["css"],
	  "builderAliases": ["css_backgroundsizecover"],
	  "notes": [{
	    "name" : "MDN Docs",
	    "href": "https://developer.mozilla.org/en/CSS/background-size"
	  }]
	}
	!*/
Modernizr.addTest("bgsizecover",testAllProps("backgroundSize","cover")),/*!
	{
	  "name": "Border Image",
	  "property": "borderimage",
	  "caniuse": "border-image",
	  "polyfills": ["css3pie"],
	   "knownBugs": ["Android < 2.0 is true, but has a broken implementation"],
	  "tags": ["css"]
	}
	!*/
Modernizr.addTest("borderimage",testAllProps("borderImage","url() 1",!0)),/*!
	{
	  "name": "Border Radius",
	  "property": "borderradius",
	  "caniuse": "border-radius",
	  "polyfills": ["css3pie"],
	  "tags": ["css"],
	  "notes": [{
	    "name": "Comprehensive Compat Chart",
	    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
	  }]
	}
	!*/
Modernizr.addTest("borderradius",testAllProps("borderRadius","0px",!0)),/*!
	{
	  "name": "Box Shadow",
	  "property": "boxshadow",
	  "caniuse": "css-boxshadow",
	  "tags": ["css"],
	  "knownBugs": [
	    "WebOS false positives on this test.",
	    "The Kindle Silk browser false positives"
	  ]
	}
	!*/
Modernizr.addTest("boxshadow",testAllProps("boxShadow","1px 1px",!0)),/*!
	{
	  "name": "Box Sizing",
	  "property": "boxsizing",
	  "caniuse": "css3-boxsizing",
	  "polyfills": ["borderboxmodel", "boxsizingpolyfill", "borderbox"],
	  "tags": ["css"],
	  "builderAliases": ["css_boxsizing"],
	  "notes": [{
	    "name": "MDN Docs",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
	  },{
	    "name": "Related Github Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/248"
	  }]
	}
	!*/
Modernizr.addTest("boxsizing",testAllProps("boxSizing","border-box",!0)&&(document.documentMode===undefined||document.documentMode>7)),/*!
	{
	  "name": "CSS Calc",
	  "property": "csscalc",
	  "caniuse": "calc",
	  "tags": ["css"],
	  "builderAliases": ["css_calc"],
	  "authors": ["@calvein"]
	}
	!*/
Modernizr.addTest("csscalc",function(){var A="width:",e="calc(10px);",t=createElement("a");return t.style.cssText=A+prefixes.join(e+A),!!t.style.length}),/*!
	{
	  "name": "CSS :checked pseudo-selector",
	  "caniuse": "css-sel3",
	  "property": "checked",
	  "tags": ["css"],
	  "notes": [{
	    "name": "Related Github Issue",
	    "href": "https://github.com/Modernizr/Modernizr/pull/879"
	  }]
	}
	!*/
Modernizr.addTest("checked",function(){return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(A){var e=createElement("input");return e.setAttribute("type","checkbox"),e.setAttribute("checked","checked"),A.appendChild(e),20===e.offsetLeft})}),/*!
	{
	  "name": "CSS Font ch Units",
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "property": "csschunit",
	  "tags": ["css"],
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "https://www.w3.org/TR/css3-values/#font-relative-lengths"
	  }]
	}
	!*/
Modernizr.addTest("csschunit",function(){var A,e=modElem.elem.style;try{e.fontSize="3ch",A=e.fontSize.indexOf("ch")!==-1}catch(t){A=!1}return A}),/*!
	{
	  "name": "CSS Columns",
	  "property": "csscolumns",
	  "caniuse": "multicolumn",
	  "polyfills": ["css3multicolumnjs"],
	  "tags": ["css"]
	}
	!*/
function(){Modernizr.addTest("csscolumns",function(){var A=!1,e=testAllProps("columnCount");try{(A=!!e)&&(A=new Boolean(A))}catch(t){}return A});for(var A,e,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],n=0;n<t.length;n++)A=t[n].toLowerCase(),e=testAllProps("column"+t[n]),"breakbefore"!==A&&"breakafter"!==A&&"breakinside"!=A||(e=e||testAllProps(t[n])),Modernizr.addTest("csscolumns."+A,e)}(),/*!
	{
	  "name": "CSS Cubic Bezier Range",
	  "property": "cubicbezierrange",
	  "tags": ["css"],
	  "builderAliases": ["css_cubicbezierrange"],
	  "doc" : null,
	  "authors": ["@calvein"],
	  "warnings": ["cubic-bezier values can't be > 1 for Webkit until [bug #45761](https://bugs.webkit.org/show_bug.cgi?id=45761) is fixed"],
	  "notes": [{
	    "name": "Comprehensive Compat Chart",
	    "href": "http://muddledramblings.com/table-of-css3-border-radius-compliance"
	  }]
	}
	!*/
Modernizr.addTest("cubicbezierrange",function(){var A=createElement("a");return A.style.cssText=prefixes.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!A.style.length}),/*!
	{
	  "name": "CSS Display run-in",
	  "property": "display-runin",
	  "authors": ["alanhogan"],
	  "tags": ["css"],
	  "builderAliases": ["css_displayrunin"],
	  "notes": [{
	    "name": "CSS Tricks Article",
	    "href": "https://css-tricks.com/596-run-in/"
	  },{
	    "name": "Related Github Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/198"
	  }]
	}
	!*/
Modernizr.addTest("displayrunin",testAllProps("display","run-in"),{aliases:["display-runin"]}),/*!
	{
	  "name": "CSS Display table",
	  "property": "displaytable",
	  "caniuse": "css-table",
	  "authors": ["scottjehl"],
	  "tags": ["css"],
	  "builderAliases": ["css_displaytable"],
	  "notes": [{
	    "name": "Detects for all additional table display values",
	    "href": "http://pastebin.com/Gk9PeVaQ"
	  }]
	}
	!*/
testStyles("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(A){var e,t=A.childNodes;e=t[0].offsetLeft<t[1].offsetLeft,Modernizr.addTest("displaytable",e,{aliases:["display-table"]})},2),/*!
	{
	  "name": "CSS text-overflow ellipsis",
	  "property": "ellipsis",
	  "caniuse": "text-overflow",
	  "polyfills": [
	    "text-overflow"
	  ],
	  "tags": ["css"]
	}
	!*/
Modernizr.addTest("ellipsis",testAllProps("textOverflow","ellipsis"));/*!
	{
	  "name": "CSS.escape()",
	  "property": "cssescape",
	  "polyfills": [
	    "css-escape"
	  ],
	  "tags": [
	    "css",
	    "cssom"
	  ]
	}
	!*/
var CSS=window.CSS;Modernizr.addTest("cssescape",!!CSS&&"function"==typeof CSS.escape),/*!
	{
	  "name": "CSS Font ex Units",
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "property": "cssexunit",
	  "tags": ["css"],
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "https://www.w3.org/TR/css3-values/#font-relative-lengths"
	  }]
	}
	!*/
Modernizr.addTest("cssexunit",function(){var A,e=modElem.elem.style;try{e.fontSize="3ex",A=e.fontSize.indexOf("ex")!==-1}catch(t){A=!1}return A});/*!
	{
	  "name": "CSS Supports",
	  "property": "supports",
	  "caniuse": "css-featurequeries",
	  "tags": ["css"],
	  "builderAliases": ["css_supports"],
	  "notes": [{
	    "name": "W3 Spec",
	    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
	  },{
	    "name": "Related Github Issue",
	    "href": "github.com/Modernizr/Modernizr/issues/648"
	  },{
	    "name": "W3 Info",
	    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
	  }]
	}
	!*/
var newSyntax="CSS"in window&&"supports"in window.CSS,oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax),/*!
	{
	  "name": "CSS Filters",
	  "property": "cssfilters",
	  "caniuse": "css-filters",
	  "polyfills": ["polyfilter"],
	  "tags": ["css"],
	  "builderAliases": ["css_filters"],
	  "notes": [{
	    "name": "MDN article on CSS filters",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/filter"
	  }]
	}
	!*/
Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return testAllProps("filter","blur(2px)");var A=createElement("a");return A.style.cssText=prefixes.join("filter:blur(2px); "),!!A.style.length&&(document.documentMode===undefined||document.documentMode>9)}),/*!
	{
	  "name": "Flexbox",
	  "property": "flexbox",
	  "caniuse": "flexbox",
	  "tags": ["css"],
	  "notes": [{
	    "name": "The _new_ flexbox",
	    "href": "http://dev.w3.org/csswg/css3-flexbox"
	  }],
	  "warnings": [
	    "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
	  ]
	}
	!*/
Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0)),/*!
	{
	  "name": "Flexbox (legacy)",
	  "property": "flexboxlegacy",
	  "tags": ["css"],
	  "polyfills": ["flexie"],
	  "notes": [{
	    "name": "The _old_ flexbox",
	    "href": "https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/"
	  }]
	}
	!*/
Modernizr.addTest("flexboxlegacy",testAllProps("boxDirection","reverse",!0)),/*!
	{
	  "name": "Flexbox (tweener)",
	  "property": "flexboxtweener",
	  "tags": ["css"],
	  "polyfills": ["flexie"],
	  "notes": [{
	    "name": "The _inbetween_ flexbox",
	    "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
	  }],
	  "warnings": ["This represents an old syntax, not the latest standard syntax."]
	}
	!*/
Modernizr.addTest("flexboxtweener",testAllProps("flexAlign","end",!0)),/*!
	{
	  "name": "Flex Line Wrapping",
	  "property": "flexwrap",
	  "tags": ["css", "flexbox"],
	  "notes": [{
	    "name": "W3C Flexible Box Layout spec",
	    "href": "http://dev.w3.org/csswg/css3-flexbox"
	  }],
	  "warnings": [
	    "Does not imply a modern implementation – see documentation."
	  ]
	}
	!*/
Modernizr.addTest("flexwrap",testAllProps("flexWrap","wrap",!0));/*!
	{
	  "name": "@font-face",
	  "property": "fontface",
	  "authors": ["Diego Perini", "Mat Marquis"],
	  "tags": ["css"],
	  "knownBugs": [
	    "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
	    "False Postive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
	  ],
	  "notes": [{
	    "name": "@font-face detection routine by Diego Perini",
	    "href": "http://javascript.nwbox.com/CSSSupport/"
	  },{
	    "name": "Filament Group @font-face compatibility research",
	    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
	  },{
	    "name": "Filament Grunticon/@font-face device testing results",
	    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
	  },{
	    "name": "CSS fonts on Android",
	    "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
	  },{
	    "name": "@font-face and Android",
	    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
	  }]
	}
	!*/
var blacklist=function(){var A=navigator.userAgent,e=A.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),t=A.match(/w(eb)?osbrowser/gi),n=A.match(/windows phone/gi)&&A.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,r=e<533&&A.match(/android/gi);return t||r||n}();blacklist?Modernizr.addTest("fontface",!1):testStyles('@font-face {font-family:"font";src:url("https://")}',function(A,e){var t=document.getElementById("smodernizr"),n=t.sheet||t.styleSheet,r=n?n.cssRules&&n.cssRules[0]?n.cssRules[0].cssText:n.cssText||"":"",o=/src/i.test(r)&&0===r.indexOf(e.split(" ")[0]);Modernizr.addTest("fontface",o)}),/*!
	{
	  "name": "CSS Generated Content",
	  "property": "generatedcontent",
	  "tags": ["css"],
	  "warnings": ["Android won't return correct height for anything below 7px #738"],
	  "notes": [{
	    "name": "W3C CSS Selectors Level 3 spec",
	    "href": "https://www.w3.org/TR/css3-selectors/#gen-content"
	  },{
	    "name": "MDN article on :before",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
	  },{
	    "name": "MDN article on :after",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
	  }]
	}
	!*/
testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(A){Modernizr.addTest("generatedcontent",A.offsetHeight>=7)}),/*!
	{
	  "name": "CSS Gradients",
	  "caniuse": "css-gradients",
	  "property": "cssgradients",
	  "tags": ["css"],
	  "knownBugs": ["False-positives on webOS (https://github.com/Modernizr/Modernizr/issues/202)"],
	  "notes": [{
	    "name": "Webkit Gradient Syntax",
	    "href": "https://webkit.org/blog/175/introducing-css-gradients/"
	  },{
	    "name": "Linear Gradient Syntax",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"
	  },{
	    "name": "W3C Gradient Spec",
	    "href": "https://drafts.csswg.org/css-images-3/#gradients"
	  }]
	}
	!*/
Modernizr.addTest("cssgradients",function(){for(var A,e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="",r=0,o=prefixes.length-1;r<o;r++)A=0===r?"to ":"",n+=e+prefixes[r]+"linear-gradient("+A+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(n+=e+"-webkit-"+t);var i=createElement("a"),d=i.style;return d.cssText=n,(""+d.backgroundImage).indexOf("gradient")>-1}),/*! {
	  "name": "hairline",
	  "property": "csshairline",
	  "tags": ["css"],
	  "authors": ["strarsis"],
	  "notes": [{
	    "name": "Blog post about CSS retina hairlines",
	    "href": "http://dieulot.net/css-retina-hairline"
	  },{
	    "name": "Derived from",
	    "href": "https://gist.github.com/dieulot/520a49463f6058fbc8d1"
	  }]
	}
	!*/
Modernizr.addTest("hairline",function(){return testStyles("#modernizr {border:.5px solid transparent}",function(A){return 1===A.offsetHeight})}),/*!
	{
	  "name": "CSS HSLA Colors",
	  "caniuse": "css3-colors",
	  "property": "hsla",
	  "tags": ["css"]
	}
	!*/
Modernizr.addTest("hsla",function(){var A=createElement("a").style;return A.cssText="background-color:hsla(120,40%,100%,.5)",contains(A.backgroundColor,"rgba")||contains(A.backgroundColor,"hsla")}),/*!
	{
	  "name": "CSS Hyphens",
	  "caniuse": "css-hyphens",
	  "property": ["csshyphens", "softhyphens", "softhyphensfind"],
	  "tags": ["css"],
	  "builderAliases": ["css_hyphens"],
	  "async" : true,
	  "authors": ["David Newton"],
	  "warnings": [
	    "These tests currently require document.body to be present",
	    "If loading Hyphenator.js via yepnope, be cautious of issue 158: http://code.google.com/p/hyphenator/issues/detail?id=158",
	    "This is very large – only include it if you absolutely need it"
	    ],
	  "notes": [{
	    "name": "The Current State of Hyphenation on the Web.",
	    "href": "http://davidnewton.ca/the-current-state-of-hyphenation-on-the-web"
	  },{
	    "name": "Hyphenation Test Page",
	    "href": "http://davidnewton.ca/demos/hyphenation/test.html"
	  },{
	    "name": "Hyphenation is Language Specific",
	    "href": " http://code.google.com/p/hyphenator/source/diff?spec=svn975&r=975&format=side&path=/trunk/Hyphenator.js#sc_svn975_313"
	  },{
	    "name": "Related Modernizr Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/312"
	  }]
	}
	!*/
Modernizr.addAsyncTest(function(){function A(){function t(){try{var A=createElement("div"),e=createElement("span"),t=A.style,n=0,r=0,o=!1,i=document.body.firstElementChild||document.body.firstChild;return A.appendChild(e),e.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",document.body.insertBefore(A,i),t.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",n=e.offsetHeight,r=e.offsetWidth,t.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+prefixes.join("hyphens:auto; "),o=e.offsetHeight!=n||e.offsetWidth!=r,document.body.removeChild(A),A.removeChild(e),o}catch(d){return!1}}function n(A,e){try{var t=createElement("div"),n=createElement("span"),r=t.style,o=0,i=!1,d=!1,a=!1,s=document.body.firstElementChild||document.body.firstChild;return r.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",t.appendChild(n),document.body.insertBefore(t,s),n.innerHTML="mm",o=n.offsetHeight,n.innerHTML="m"+A+"m",d=n.offsetHeight>o,e?(n.innerHTML="m<br />m",o=n.offsetWidth,n.innerHTML="m"+A+"m",a=n.offsetWidth>o):a=!0,d===!0&&a===!0&&(i=!0),document.body.removeChild(t),t.removeChild(n),i}catch(l){return!1}}function r(A){try{var e,t=createElement("input"),n=createElement("div"),r="lebowski",o=!1,i=document.body.firstElementChild||document.body.firstChild;n.innerHTML=r+A+r,document.body.insertBefore(n,i),document.body.insertBefore(t,n),t.setSelectionRange?(t.focus(),t.setSelectionRange(0,0)):t.createTextRange&&(e=t.createTextRange(),e.collapse(!0),e.moveEnd("character",0),e.moveStart("character",0),e.select());try{window.find?o=window.find(r+r):(e=window.self.document.body.createTextRange(),o=e.findText(r+r))}catch(d){o=!1}return document.body.removeChild(n),document.body.removeChild(t),o}catch(d){return!1}}return document.body||document.getElementsByTagName("body")[0]?(addTest("csshyphens",function(){if(!testAllProps("hyphens","auto",!0))return!1;try{return t()}catch(A){return!1}}),addTest("softhyphens",function(){try{return n("&#173;",!0)&&n("&#8203;",!1)}catch(A){return!1}}),void addTest("softhyphensfind",function(){try{return r("&#173;")&&r("&#8203;")}catch(A){return!1}})):void setTimeout(A,e)}var e=300;setTimeout(A,e)}),/*!
	{
	  "name": "CSS :invalid pseudo-class",
	  "property": "cssinvalid",
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid"
	  }]
	}
	!*/
Modernizr.addTest("cssinvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(A){var e=createElement("input");return e.required=!0,A.appendChild(e),e.clientWidth>10})}),/*!
	{
	  "name": "CSS :last-child pseudo-selector",
	  "caniuse": "css-sel3",
	  "property": "lastchild",
	  "tags": ["css"],
	  "builderAliases": ["css_lastchild"],
	  "notes": [{
	    "name": "Related Github Issue",
	    "href": "https://github.com/Modernizr/Modernizr/pull/304"
	  }]
	}
	!*/
testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(A){Modernizr.addTest("lastchild",A.lastChild.offsetWidth>A.firstChild.offsetWidth)},2),/*!
	{
	  "name": "CSS Mask",
	  "caniuse": "css-masks",
	  "property": "cssmask",
	  "tags": ["css"],
	  "builderAliases": ["css_mask"],
	  "notes": [
	    {
	      "name": "Webkit blog on CSS Masks",
	      "href": "https://webkit.org/blog/181/css-masks/"
	    },
	    {
	      "name": "Safari Docs",
	      "href": "https://developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html"
	    },
	    {
	      "name": "CSS SVG mask",
	      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/mask"
	    },
	    {
	      "name": "Combine with clippaths for awesomeness",
	      "href": "https://generic.cx/for/webkit/test.html"
	    }
	  ]
	}
	!*/
Modernizr.addTest("cssmask",testAllProps("maskRepeat","repeat-x",!0)),/*!
	{
	  "name": "CSS Media Queries",
	  "caniuse": "css-mediaqueries",
	  "property": "mediaqueries",
	  "tags": ["css"],
	  "builderAliases": ["css_mediaqueries"]
	}
	!*/
Modernizr.addTest("mediaqueries",mq("only all")),/*!
	{
	  "name": "CSS Multiple Backgrounds",
	  "caniuse": "multibackgrounds",
	  "property": "multiplebgs",
	  "tags": ["css"]
	}
	!*/
Modernizr.addTest("multiplebgs",function(){var A=createElement("a").style;return A.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(A.background)}),/*!
	{
	  "name": "CSS :nth-child pseudo-selector",
	  "caniuse": "css-sel3",
	  "property": "nthchild",
	  "tags": ["css"],
	  "notes": [
	    {
	      "name": "Related Github Issue",
	      "href": "https://github.com/Modernizr/Modernizr/pull/685"
	    },
	    {
	      "name": "Sitepoint :nth-child documentation",
	      "href": "http://reference.sitepoint.com/css/pseudoclass-nthchild"
	    }
	  ],
	  "authors": ["@emilchristensen"],
	  "warnings": ["Known false negative in Safari 3.1 and Safari 3.2.2"]
	}
	!*/
testStyles("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(A){for(var e=A.getElementsByTagName("div"),t=!0,n=0;n<5;n++)t=t&&e[n].offsetWidth===n%2+1;Modernizr.addTest("nthchild",t)},5),/*!
	{
	  "name": "CSS Object Fit",
	  "caniuse": "object-fit",
	  "property": "objectfit",
	  "tags": ["css"],
	  "builderAliases": ["css_objectfit"],
	  "notes": [{
	    "name": "Opera Article on Object Fit",
	    "href": "https://dev.opera.com/articles/css3-object-fit-object-position/"
	  }]
	}
	!*/
Modernizr.addTest("objectfit",!!prefixed("objectFit"),{aliases:["object-fit"]}),/*!
	{
	  "name": "CSS Opacity",
	  "caniuse": "css-opacity",
	  "property": "opacity",
	  "tags": ["css"]
	}
	!*/
Modernizr.addTest("opacity",function(){var A=createElement("a").style;return A.cssText=prefixes.join("opacity:.55;"),/^0.55$/.test(A.opacity)}),/*!
	{
	  "name": "CSS Overflow Scrolling",
	  "property": "overflowscrolling",
	  "tags": ["css"],
	  "builderAliases": ["css_overflow_scrolling"],
	  "warnings": ["Introduced in iOS5b2. API is subject to change."],
	  "notes": [{
	    "name": "Article on iOS overflow scrolling",
	    "href": "https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/"
	  }]
	}
	!*/
Modernizr.addTest("overflowscrolling",testAllProps("overflowScrolling","touch",!0)),/*!
	{
	  "name": "CSS Pointer Events",
	  "caniuse": "pointer-events",
	  "property": "csspointerevents",
	  "authors": ["ausi"],
	  "tags": ["css"],
	  "builderAliases": ["css_pointerevents"],
	  "notes": [
	    {
	      "name": "MDN Docs",
	      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events"
	    },{
	      "name": "Test Project Page",
	      "href": "https://ausi.github.com/Feature-detection-technique-for-pointer-events/"
	    },{
	      "name": "Test Project Wiki",
	      "href": "https://github.com/ausi/Feature-detection-technique-for-pointer-events/wiki"
	    },
	    {
	      "name": "Related Github Issue",
	      "href": "https://github.com/Modernizr/Modernizr/issues/80"
	    }
	  ]
	}
	!*/
Modernizr.addTest("csspointerevents",function(){var A=createElement("a").style;return A.cssText="pointer-events:auto","auto"===A.pointerEvents}),/*!
	{
	  "name": "CSS position: sticky",
	  "property": "csspositionsticky",
	  "tags": ["css"],
	  "builderAliases": ["css_positionsticky"],
	  "notes": [{
	    "name": "Chrome bug report",
	    "href":"https://code.google.com/p/chromium/issues/detail?id=322972"
	  }],
	  "warnings": [ "using position:sticky on anything but top aligned elements is buggy in Chrome < 37 and iOS <=7+" ]
	}
	!*/
Modernizr.addTest("csspositionsticky",function(){var A="position:",e="sticky",t=createElement("a"),n=t.style;return n.cssText=A+prefixes.join(e+";"+A).slice(0,-A.length),n.position.indexOf(e)!==-1}),/*!
	{
	  "name": "CSS Generated Content Animations",
	  "property": "csspseudoanimations",
	  "tags": ["css"]
	}
	!*/
Modernizr.addTest("csspseudoanimations",function(){var A=!1;if(!Modernizr.cssanimations||!window.getComputedStyle)return A;var e=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; } }@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"}"].join("");return Modernizr.testStyles(e,function(e){A="10px"===window.getComputedStyle(e,":before").getPropertyValue("font-size")}),A}),/*!
	{
	  "name": "CSS Transitions",
	  "property": "csstransitions",
	  "caniuse": "css-transitions",
	  "tags": ["css"]
	}
	!*/
Modernizr.addTest("csstransitions",testAllProps("transition","all",!0)),/*!
	{
	  "name": "CSS Generated Content Transitions",
	  "property": "csspseudotransitions",
	  "tags": ["css"]
	}
	!*/
Modernizr.addTest("csspseudotransitions",function(){var A=!1;if(!Modernizr.csstransitions||!window.getComputedStyle)return A;var e='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(e,function(e){window.getComputedStyle(e,":before").getPropertyValue("font-size"),e.className+="trigger",A="5px"===window.getComputedStyle(e,":before").getPropertyValue("font-size")}),A}),/*!
	{
	  "name": "CSS Reflections",
	  "caniuse": "css-reflections",
	  "property": "cssreflections",
	  "tags": ["css"]
	}
	!*/
Modernizr.addTest("cssreflections",testAllProps("boxReflect","above",!0)),/*!
	{
	  "name": "CSS Regions",
	  "caniuse": "css-regions",
	  "authors": ["Mihai Balan"],
	  "property": "regions",
	  "tags": ["css"],
	  "builderAliases": ["css_regions"],
	  "notes": [{
	    "name": "W3C Specification",
	    "href": "https://www.w3.org/TR/css3-regions/"
	  }]
	}
	!*/
Modernizr.addTest("regions",function(){if(isSVG)return!1;var A=Modernizr.prefixed("flowFrom"),e=Modernizr.prefixed("flowInto"),t=!1;if(!A||!e)return t;var n=createElement("iframe"),r=createElement("div"),o=createElement("div"),i=createElement("div"),d="modernizr_flow_for_regions_check";o.innerText="M",r.style.cssText="top: 150px; left: 150px; padding: 0px;",i.style.cssText="width: 50px; height: 50px; padding: 42px;",i.style[A]=d,r.appendChild(o),r.appendChild(i),docElement.appendChild(r);var a,s,l=o.getBoundingClientRect();return o.style[e]=d,a=o.getBoundingClientRect(),s=parseInt(a.left-l.left,10),docElement.removeChild(r),42==s?t=!0:(docElement.appendChild(n),l=n.getBoundingClientRect(),n.style[e]=d,a=n.getBoundingClientRect(),l.height>0&&l.height!==a.height&&0===a.height&&(t=!0)),o=i=r=n=undefined,t}),/*!
	{
	  "name": "CSS Font rem Units",
	  "caniuse": "rem",
	  "authors": ["nsfmc"],
	  "property": "cssremunit",
	  "tags": ["css"],
	  "builderAliases": ["css_remunit"],
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "https://www.w3.org/TR/css3-values/#relative0"
	  },{
	    "name": "Font Size with rem by Jonathan Snook",
	    "href": "http://snook.ca/archives/html_and_css/font-size-with-rem"
	  }]
	}
	!*/
Modernizr.addTest("cssremunit",function(){var A=createElement("a").style;try{A.fontSize="3rem"}catch(e){}return/rem/.test(A.fontSize)}),/*!
	{
	  "name": "CSS UI Resize",
	  "property": "cssresize",
	  "caniuse": "css-resize",
	  "tags": ["css"],
	  "builderAliases": ["css_resize"],
	  "notes": [{
	    "name": "W3C Specification",
	    "href": "https://www.w3.org/TR/css3-ui/#resize"
	  },{
	    "name": "MDN Docs",
	    "href": "https://developer.mozilla.org/en/CSS/resize"
	  }]
	}
	!*/
Modernizr.addTest("cssresize",testAllProps("resize","both",!0)),/*!
	{
	  "name": "CSS rgba",
	  "caniuse": "css3-colors",
	  "property": "rgba",
	  "tags": ["css"],
	  "notes": [{
	    "name": "CSSTricks Tutorial",
	    "href": "https://css-tricks.com/rgba-browser-support/"
	  }]
	}
	!*/
Modernizr.addTest("rgba",function(){var A=createElement("a").style;return A.cssText="background-color:rgba(150,255,150,.5)",(""+A.backgroundColor).indexOf("rgba")>-1}),/*!
	{
	  "name": "CSS Stylable Scrollbars",
	  "property": "cssscrollbar",
	  "tags": ["css"],
	  "builderAliases": ["css_scrollbars"]
	}
	!*/
testStyles("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+prefixes.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(A){Modernizr.addTest("cssscrollbar",40==A.scrollWidth)}),/*!
	{
	  "name": "CSS Shapes",
	  "property": "shapes",
	  "tags": ["css"],
	  "notes": [{
	    "name": "CSS Shapes W3C specification",
	    "href": "https://www.w3.org/TR/css-shapes"
	  },{
	    "name": "Examples from Adobe",
	    "href": "http://webplatform.adobe.com/shapes/"
	  }, {
	    "name": "Samples showcasing uses of Shapes",
	    "href": "http://codepen.io/collection/qFesk"
	  }]
	}
	!*/
Modernizr.addTest("shapes",testAllProps("shapeOutside","content-box",!0)),/*!
	{
	  "name": "CSS general sibling selector",
	  "caniuse": "css-sel3",
	  "property": "siblinggeneral",
	  "tags": ["css"],
	  "notes": [{
	    "name": "Related Github Issue",
	    "href": "https://github.com/Modernizr/Modernizr/pull/889"
	  }]
	}
	!*/
Modernizr.addTest("siblinggeneral",function(){return testStyles("#modernizr div {width:100px} #modernizr div ~ div {width:200px;display:block}",function(A){return 200==A.lastChild.offsetWidth},2)}),/*!
	{
	  "name": "CSS Subpixel Fonts",
	  "property": "subpixelfont",
	  "tags": ["css"],
	  "builderAliases": ["css_subpixelfont"],
	  "authors": [
	    "@derSchepp",
	    "@gerritvanaaken",
	    "@rodneyrehm",
	    "@yatil",
	    "@ryanseddon"
	  ],
	  "notes": [{
	    "name": "Origin Test",
	    "href": "https://github.com/gerritvanaaken/subpixeldetect"
	  }]
	}
	!*/
testStyles("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;}#subpixel{float: left; font-size: 33.3333%;}",function(A){var e=A.firstChild;e.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",!!window.getComputedStyle&&"44px"!==window.getComputedStyle(e,null).getPropertyValue("width"))},1,["subpixel"]),/*!
	{
	  "name": "CSS :target pseudo-class",
	  "caniuse": "css-sel3",
	  "property": "target",
	  "tags": ["css"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:target"
	  }],
	  "authors": ["@zachleat"],
	  "warnings": ["Opera Mini supports :target but doesn't update the hash for anchor links."]
	}
	!*/
Modernizr.addTest("target",function(){var A=window.document;if(!("querySelectorAll"in A))return!1;try{return A.querySelectorAll(":target"),!0}catch(e){return!1}}),/*!
	{
	  "name": "CSS text-align-last",
	  "property": "textalignlast",
	  "tags": ["css"],
	  "knownBugs": ["IE does not support the 'start' or 'end' values."],
	  "notes": [{
	      "name": "Quicksmode",
	      "href": "http://www.quirksmode.org/css/text/textalignlast.html"
	    },{
	      "name": "MDN",
	      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last"
	    }]
	}
	!*/
Modernizr.addTest("textalignlast",testAllProps("textAlignLast")),/*!
	{
	  "name": "CSS textshadow",
	  "property": "textshadow",
	  "caniuse": "css-textshadow",
	  "tags": ["css"],
	  "knownBugs": ["FF3.0 will false positive on this test"]
	}
	!*/
Modernizr.addTest("textshadow",testProp("textShadow","1px 1px")),/*!
	{
	  "name": "CSS Transforms",
	  "property": "csstransforms",
	  "caniuse": "transforms2d",
	  "tags": ["css"]
	}
	!*/
Modernizr.addTest("csstransforms",function(){return navigator.userAgent.indexOf("Android 2.")===-1&&testAllProps("transform","scale(1)",!0)}),/*!
	{
	  "name": "CSS Transforms 3D",
	  "property": "csstransforms3d",
	  "caniuse": "transforms3d",
	  "tags": ["css"],
	  "warnings": [
	    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
	  ]
	}
	!*/
Modernizr.addTest("csstransforms3d",function(){var A=!!testAllProps("perspective","1px",!0),e=Modernizr._config.usePrefixes;if(A&&(!e||"webkitPerspective"in docElement.style)){var t,n="#modernizr{width:0;height:0}";Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",e&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",testStyles(n+t,function(e){A=7===e.offsetWidth&&18===e.offsetHeight})}return A}),/*!
	{
	  "name": "CSS Transform Style preserve-3d",
	  "property": "preserve3d",
	  "authors": ["edmellum"],
	  "tags": ["css"],
	  "notes": [{
	    "name": "MDN Docs",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
	  },{
	    "name": "Related Github Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/762"
	  }]
	}
	!*/
Modernizr.addTest("preserve3d",testAllProps("transformStyle","preserve-3d")),/*!
	{
	  "name": "CSS user-select",
	  "property": "userselect",
	  "caniuse": "user-select-none",
	  "authors": ["ryan seddon"],
	  "tags": ["css"],
	  "builderAliases": ["css_userselect"],
	  "notes": [{
	    "name": "Related Modernizr Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/250"
	  }]
	}
	!*/
Modernizr.addTest("userselect",testAllProps("userSelect","none",!0)),/*!
	{
	  "name": "CSS :valid pseudo-class",
	  "property": "cssvalid",
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid"
	  }]
	}
	!*/
Modernizr.addTest("cssvalid",function(){return testStyles("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}",function(A){var e=createElement("input");return A.appendChild(e),e.clientWidth>10})}),/*!
	{
	  "name": "CSS vh unit",
	  "property": "cssvhunit",
	  "caniuse": "viewport-units",
	  "tags": ["css"],
	  "builderAliases": ["css_vhunit"],
	  "notes": [{
	    "name": "Related Modernizr Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/572"
	  },{
	    "name": "Similar JSFiddle",
	    "href": "https://jsfiddle.net/FWeinb/etnYC/"
	  }]
	}
	!*/
testStyles("#modernizr { height: 50vh; }",function(A){var e=parseInt(window.innerHeight/2,10),t=parseInt((window.getComputedStyle?getComputedStyle(A,null):A.currentStyle).height,10);Modernizr.addTest("cssvhunit",t==e)}),/*!
	{
	  "name": "CSS vmax unit",
	  "property": "cssvmaxunit",
	  "caniuse": "viewport-units",
	  "tags": ["css"],
	  "builderAliases": ["css_vmaxunit"],
	  "notes": [{
	    "name": "Related Modernizr Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/572"
	  },{
	    "name": "JSFiddle Example",
	    "href": "https://jsfiddle.net/glsee/JDsWQ/4/"
	  }]
	}
	!*/
testStyles("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(A){var e=A.childNodes[2],t=A.childNodes[1],n=A.childNodes[0],r=parseInt((t.offsetWidth-t.clientWidth)/2,10),o=n.clientWidth/100,i=n.clientHeight/100,d=parseInt(50*Math.max(o,i),10),a=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);Modernizr.addTest("cssvmaxunit",roundedEquals(d,a)||roundedEquals(d,a-r))},3),/*!
	{
	  "name": "CSS vmin unit",
	  "property": "cssvminunit",
	  "caniuse": "viewport-units",
	  "tags": ["css"],
	  "builderAliases": ["css_vminunit"],
	  "notes": [{
	    "name": "Related Modernizr Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/572"
	  },{
	    "name": "JSFiddle Example",
	    "href": "https://jsfiddle.net/glsee/JRmdq/8/"
	  }]
	}
	!*/
testStyles("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(A){var e=A.childNodes[2],t=A.childNodes[1],n=A.childNodes[0],r=parseInt((t.offsetWidth-t.clientWidth)/2,10),o=n.clientWidth/100,i=n.clientHeight/100,d=parseInt(50*Math.min(o,i),10),a=parseInt((window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).width,10);Modernizr.addTest("cssvminunit",roundedEquals(d,a)||roundedEquals(d,a-r))},3),/*!
	{
	  "name": "CSS vw unit",
	  "property": "cssvwunit",
	  "caniuse": "viewport-units",
	  "tags": ["css"],
	  "builderAliases": ["css_vwunit"],
	  "notes": [{
	    "name": "Related Modernizr Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/572"
	  },{
	    "name": "JSFiddle Example",
	    "href": "https://jsfiddle.net/FWeinb/etnYC/"
	  }]
	}
	!*/
testStyles("#modernizr { width: 50vw; }",function(A){var e=parseInt(window.innerWidth/2,10),t=parseInt((window.getComputedStyle?getComputedStyle(A,null):A.currentStyle).width,10);Modernizr.addTest("cssvwunit",t==e)}),/*!
	{
	  "name": "will-change",
	  "property": "willchange",
	  "notes": [{
	    "name": "Spec",
	    "href": "https://drafts.csswg.org/css-will-change/"
	  }]
	}
	!*/
Modernizr.addTest("willchange","willChange"in docElement.style),/*!
	{
	  "name": "CSS wrap-flow",
	  "property": "wrapflow",
	  "tags": ["css"],
	  "notes": [
	    {
	      "name": "W3C Exclusions spec",
	      "href": "https://www.w3.org/TR/css3-exclusions"
	    },
	    {
	      "name": "Example by Adobe",
	      "href": "http://html.adobe.com/webstandards/cssexclusions"
	    }
	  ]
	}
	!*/
Modernizr.addTest("wrapflow",function(){var A=prefixed("wrapFlow");if(!A||isSVG)return!1;var e=A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-"),t=createElement("div"),n=createElement("div"),r=createElement("span");n.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+e+":end;",r.innerText="X",t.appendChild(n),t.appendChild(r),docElement.appendChild(t);var o=r.offsetLeft;return docElement.removeChild(t),n=r=t=undefined,150==o}),/*!
	{
	  "name": "Custom protocol handler",
	  "property": "customprotocolhandler",
	  "authors": ["Ben Schwarz"],
	  "builderAliases": ["custom_protocol_handler"],
	  "notes": [{
	    "name": "WHATWG overview",
	    "href": "https://developers.whatwg.org/timers.html#custom-handlers"
	  },{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/API/navigator.registerProtocolHandler"
	  }],
	  "warnings": [],
	  "polyfills": []
	}
	!*/
Modernizr.addTest("customprotocolhandler",function(){if(!navigator.registerProtocolHandler)return!1;try{navigator.registerProtocolHandler("thisShouldFail")}catch(A){return A instanceof TypeError}return!1}),/*!
	{
	  "name": "CustomEvent",
	  "property": "customevent",
	  "tags": ["customevent"],
	  "authors": ["Alberto Elias"],
	  "notes": [{
	    "name": "W3C DOM reference",
	    "href": "https://www.w3.org/TR/DOM-Level-3-Events/#interface-CustomEvent"
	  }, {
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en/docs/Web/API/CustomEvent"
	  }],
	  "polyfills": ["eventlistener"]
	}
	!*/
Modernizr.addTest("customevent","CustomEvent"in window&&"function"==typeof window.CustomEvent),/*!
	{
	  "name": "Dart",
	  "property": "dart",
	  "authors": ["Theodoor van Donge"],
	  "notes": [{
	    "name": "Language website",
	    "href": "https://www.dartlang.org/"
	  }]
	}
	!*/
Modernizr.addTest("dart",!!prefixed("startDart",navigator)),/*!
	{
	  "name": "DataView",
	  "property": "dataview",
	  "authors": ["Addy Osmani"],
	  "builderAliases": ["dataview_api"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en/JavaScript_typed_arrays/DataView"
	  }],
	  "polyfills": ["jdataview"]
	}
	!*/
Modernizr.addTest("dataview","undefined"!=typeof DataView&&"getFloat64"in DataView.prototype),/*!
	{
	  "name": "classList",
	  "caniuse": "classlist",
	  "property": "classlist",
	  "tags": ["dom"],
	  "builderAliases": ["dataview_api"],
	  "notes": [{
	    "name": "MDN Docs",
	    "href": "https://developer.mozilla.org/en/DOM/element.classList"
	  }]
	}
	!*/
Modernizr.addTest("classlist","classList"in docElement),/*!
	{
	  "name": "createElement with Attributes",
	  "property": ["createelementattrs", "createelement-attrs"],
	  "tags": ["dom"],
	  "builderAliases": ["dom_createElement_attrs"],
	  "authors": ["James A. Rosen"],
	  "notes": [{
	    "name": "Related Github Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/258"
	  }]
	}
	!*/
Modernizr.addTest("createelementattrs",function(){try{return"test"==createElement('<input name="test" />').getAttribute("name")}catch(A){return!1}},{aliases:["createelement-attrs"]}),/*!
	{
	  "name": "dataset API",
	  "caniuse": "dataset",
	  "property": "dataset",
	  "tags": ["dom"],
	  "builderAliases": ["dom_dataset"],
	  "authors": ["@phiggins42"]
	}
	!*/
Modernizr.addTest("dataset",function(){var A=createElement("div");return A.setAttribute("data-a-b","c"),!(!A.dataset||"c"!==A.dataset.aB)}),/*!
	{
	  "name": "Document Fragment",
	  "property": "documentfragment",
	  "notes": [{
	    "name": "W3C DOM Level 1 Reference",
	    "href": "https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-B63ED1A3"
	  }, {
	    "name": "SitePoint Reference",
	    "href": "http://reference.sitepoint.com/javascript/DocumentFragment"
	  }, {
	    "name": "QuirksMode Compatibility Tables",
	    "href": "http://www.quirksmode.org/m/w3c_core.html#t112"
	  }],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "knownBugs": ["false-positive on Blackberry 9500, see QuirksMode note"],
	  "tags": []
	}
	!*/
Modernizr.addTest("documentfragment",function(){return"createDocumentFragment"in document&&"appendChild"in docElement}),/*!
	{
	  "name": "[hidden] Attribute",
	  "property": "hidden",
	  "tags": ["dom"],
	  "notes": [{
	    "name": "WHATWG: The hidden attribute",
	    "href": "https://developers.whatwg.org/editing.html#the-hidden-attribute"
	  }, {
	    "name": "original implementation of detect code",
	    "href": "https://github.com/aFarkas/html5shiv/blob/bf4fcc4/src/html5shiv.js#L38"
	  }],
	  "polyfills": ["html5shiv"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"]
	}
	!*/
Modernizr.addTest("hidden","hidden"in createElement("a")),/*!
	{
	  "name": "microdata",
	  "property": "microdata",
	  "tags": ["dom"],
	  "builderAliases": ["dom_microdata"],
	  "notes": [{
	    "name": "W3 Spec",
	    "href": "https://www.w3.org/TR/microdata/"
	  }]
	}
	!*/
Modernizr.addTest("microdata","getItems"in document),/*!
	{
	  "name": "DOM4 MutationObserver",
	  "property": "mutationobserver",
	  "caniuse": "mutationobserver",
	  "tags": ["dom"],
	  "authors": ["Karel Sedláček (@ksdlck)"],
	  "polyfills": ["mutationobservers"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver"
	  }]
	}
	!*/
Modernizr.addTest("mutationobserver",!!window.MutationObserver||!!window.WebKitMutationObserver);var inputElem=createElement("input"),inputattrs="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),attrs={};Modernizr.input=function(A){for(var e=0,t=A.length;e<t;e++)attrs[A[e]]=!!(A[e]in inputElem);return attrs.list&&(attrs.list=!(!createElement("datalist")||!window.HTMLDataListElement)),attrs}(inputattrs),/*!
	{
	  "name": "datalist Element",
	  "caniuse": "datalist",
	  "property": "datalistelem",
	  "tags": ["elem"],
	  "builderAliases": ["elem_datalist"],
	  "warnings": ["This test is a dupe of Modernizr.input.list. Only around for legacy reasons."],
	  "notes": [{
	    "name": "CSS Tricks Article",
	    "href": "https://css-tricks.com/15346-relevant-dropdowns-polyfill-for-datalist/"
	  },{
	    "name": "Mike Taylor Code",
	    "href": "https://miketaylr.com/code/datalist.html"
	  }]
	}
	!*/
Modernizr.addTest("datalistelem",Modernizr.input.list),/*!
	{
	  "name": "details Element",
	  "caniuse": "details",
	  "property": "details",
	  "tags": ["elem"],
	  "builderAliases": ["elem_details"],
	  "authors": ["@mathias"],
	  "notes": [{
	    "name": "Mathias' Original",
	    "href": "https://mathiasbynens.be/notes/html5-details-jquery#comment-35"
	  }]
	}
	!*/
Modernizr.addTest("details",function(){var A,e=createElement("details");return"open"in e&&(testStyles("#modernizr details{display:block}",function(t){t.appendChild(e),e.innerHTML="<summary>a</summary>b",A=e.offsetHeight,e.open=!0,A=A!=e.offsetHeight}),A)}),/*!
	{
	  "name": "output Element",
	  "property": "outputelem",
	  "tags": ["elem"],
	  "builderAliases": ["elem_output"],
	  "notes": [{
	    "name": "WhatWG Spec",
	    "href": "https://html.spec.whatwg.org/multipage/forms.html#the-output-element"
	  }]
	}
	!*/
Modernizr.addTest("outputelem","value"in createElement("output")),/*!
	{
	  "name": "picture Element",
	  "property": "picture",
	  "tags": ["elem"],
	  "authors": ["Scott Jehl", "Mat Marquis"],
	  "notes": [{
	    "name": "Specification",
	    "href": "http://picture.responsiveimages.org"
	  },{
	    "name": "Relevant spec issue",
	    "href": "https://github.com/ResponsiveImagesCG/picture-element/issues/87"
	  }]
	}
	!*/
Modernizr.addTest("picture","HTMLPictureElement"in window),/*!
	{
	  "name": "progress Element",
	  "caniuse": "progress",
	  "property": ["progressbar", "meter"],
	  "tags": ["elem"],
	  "builderAliases": ["elem_progress_meter"],
	  "authors": ["Stefan Wallin"]
	}
	!*/
Modernizr.addTest("progressbar",createElement("progress").max!==undefined),Modernizr.addTest("meter",createElement("meter").max!==undefined),/*!
	{
	  "name": "ruby, rp, rt Elements",
	  "caniuse": "ruby",
	  "property": "ruby",
	  "tags": ["elem"],
	  "builderAliases": ["elem_ruby"],
	  "authors": ["Cătălin Mariș"],
	  "notes": [{
	    "name": "WHATWG Specification",
	    "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-ruby-element"
	  }]
	}
	!*/
Modernizr.addTest("ruby",function(){function A(A,e){var t;return window.getComputedStyle?t=document.defaultView.getComputedStyle(A,null).getPropertyValue(e):A.currentStyle&&(t=A.currentStyle[e]),t}function e(){docElement.removeChild(t),t=null,n=null,r=null}var t=createElement("ruby"),n=createElement("rt"),r=createElement("rp"),o="display",i="fontSize";return t.appendChild(r),t.appendChild(n),docElement.appendChild(t),"none"==A(r,o)||"ruby"==A(t,o)&&"ruby-text"==A(n,o)||"6pt"==A(r,i)&&"6pt"==A(n,i)?(e(),!0):(e(),!1)}),/*!
	{
	  "name": "Template Tag",
	  "property": "template",
	  "tags": ["elem"],
	  "notes": [{
	    "name": "HTML5Rocks Article",
	    "href": "http://www.html5rocks.com/en/tutorials/webcomponents/template/"
	  },{
	    "name": "W3 Spec",
	    "href": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html"
	  }]
	}
	!*/
Modernizr.addTest("template","content"in createElement("template")),/*!
	{
	  "name": "time Element",
	  "property": "time",
	  "tags": ["elem"],
	  "builderAliases": ["elem_time"],
	  "notes": [{
	    "name": "WhatWG Spec",
	    "href": "https://html.spec.whatwg.org/multipage/semantics.html#the-time-element"
	  }]
	}
	!*/
Modernizr.addTest("time","valueAsDate"in createElement("time")),/*!
	{
	  "name": "Track element and Timed Text Track",
	  "property": ["texttrackapi", "track"],
	  "tags": ["elem"],
	  "builderAliases": ["elem_track"],
	  "authors": ["Addy Osmani"],
	  "notes": [{
	    "name": "W3 track Element Spec",
	    "href": "http://www.w3.org/TR/html5/video.html#the-track-element"
	  },{
	    "name": "W3 track API Spec",
	    "href": "http://www.w3.org/TR/html5/media-elements.html#text-track-api"
	  }],
	  "warnings": ["While IE10 has implemented the track element, IE10 does not expose the underlying APIs to create timed text tracks by JS (really sad)"]
	}
	!*/
Modernizr.addTest("texttrackapi","function"==typeof createElement("video").addTextTrack),Modernizr.addTest("track","kind"in createElement("track")),/*!
	{
	  "name": "Unknown Elements",
	  "property": "unknownelements",
	  "tags": ["elem"],
	  "notes": [{
	    "name": "The Story of the HTML5 Shiv",
	    "href": "https://www.paulirish.com/2011/the-history-of-the-html5-shiv/"
	  }, {
	    "name": "original implementation of detect code",
	    "href": "https://github.com/aFarkas/html5shiv/blob/bf4fcc4/src/html5shiv.js#L36"
	  }],
	  "polyfills": ["html5shiv"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"]
	}
	!*/
Modernizr.addTest("unknownelements",function(){var A=createElement("a");return A.innerHTML="<xyz></xyz>",1===A.childNodes.length}),/*!
	{
	  "name": "Emoji",
	  "property": "emoji"
	}
	!*/
Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var A=window.devicePixelRatio||1,e=12*A,t=createElement("canvas"),n=t.getContext("2d");return n.fillStyle="#f00",n.textBaseline="top",n.font="32px Arial",n.fillText("🐨",0,0),0!==n.getImageData(e,e,1,1).data[0]}),/*!
	{
	  "name": "ES5 Array",
	  "property": "es5array",
	  "notes": [{
	    "name": "ECMAScript 5.1 Language Specification",
	    "href": "http://www.ecma-international.org/ecma-262/5.1/"
	  }],
	  "polyfills": ["es5shim"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "tags": ["es5"]
	}
	!*/
Modernizr.addTest("es5array",function(){return!!(Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray)}),/*!
	{
	  "name": "ES5 Date",
	  "property": "es5date",
	  "notes": [{
	    "name": "ECMAScript 5.1 Language Specification",
	    "href": "http://www.ecma-international.org/ecma-262/5.1/"
	  }],
	  "polyfills": ["es5shim"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "tags": ["es5"]
	}
	!*/
Modernizr.addTest("es5date",function(){var A="2013-04-12T06:06:37.307Z",e=!1;try{e=!!Date.parse(A)}catch(t){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&e)}),/*!
	{
	  "name": "ES5 Function",
	  "property": "es5function",
	  "notes": [{
	    "name": "ECMAScript 5.1 Language Specification",
	    "href": "http://www.ecma-international.org/ecma-262/5.1/"
	  }],
	  "polyfills": ["es5shim"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "tags": ["es5"]
	}
	!*/
Modernizr.addTest("es5function",function(){return!(!Function.prototype||!Function.prototype.bind)}),/*!
	{
	  "name": "ES5 Object",
	  "property": "es5object",
	  "notes": [{
	    "name": "ECMAScript 5.1 Language Specification",
	    "href": "http://www.ecma-international.org/ecma-262/5.1/"
	  }],
	  "polyfills": ["es5shim", "es5sham"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "tags": ["es5"]
	}
	!*/
Modernizr.addTest("es5object",function(){return!!(Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions)}),/*!
	{
	  "name": "ES5 Strict Mode",
	  "property": "strictmode",
	  "caniuse": "sctrict-mode",
	  "notes": [{
	    "name": "ECMAScript 5.1 Language Specification",
	    "href": "http://www.ecma-international.org/ecma-262/5.1/"
	  }],
	  "authors": ["@kangax"],
	  "tags": ["es5"],
	  "builderAliases": ["es5_strictmode"]
	}
	!*/
Modernizr.addTest("strictmode",function(){"use strict";return!this}()),/*!
	{
	  "name": "ES5 String",
	  "property": "es5string",
	  "notes": [{
	    "name": "ECMAScript 5.1 Language Specification",
	    "href": "http://www.ecma-international.org/ecma-262/5.1/"
	  }],
	  "polyfills": ["es5shim"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "tags": ["es5"]
	}
	!*/
Modernizr.addTest("es5string",function(){return!(!String.prototype||!String.prototype.trim)}),/*!
	{
	  "name": "JSON",
	  "property": "json",
	  "caniuse": "json",
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Glossary/JSON"
	  }],
	  "polyfills": ["json2"]
	}
	!*/
Modernizr.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON),/*!
	{
	  "name": "ES5 Syntax",
	  "property": "es5syntax",
	  "notes": [{
	    "name": "ECMAScript 5.1 Language Specification",
	    "href": "http://www.ecma-international.org/ecma-262/5.1/"
	  }, {
	    "name": "original implementation of detect code",
	    "href": "http://kangax.github.io/es5-compat-table/"
	  }],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "warnings": ["This detect uses `eval()`, so CSP may be a problem."],
	  "tags": ["es5"]
	}
	!*/
Modernizr.addTest("es5syntax",function(){var value,obj,stringAccess,getter,setter,reservedWords,zeroWidthChars;try{return stringAccess=eval('"foobar"[3] === "b"'),getter=eval("({ get x(){ return 1 } }).x === 1"),eval("({ set x(v){ value = v; } }).x = 1"),setter=1===value,eval("obj = ({ if: 1 })"),reservedWords=1===obj["if"],zeroWidthChars=eval("_‌‍ = true"),stringAccess&&getter&&setter&&reservedWords&&zeroWidthChars}catch(ignore){return!1}}),/*!
	{
	  "name": "ES5 Immutable Undefined",
	  "property": "es5undefined",
	  "notes": [{
	    "name": "ECMAScript 5.1 Language Specification",
	    "href": "http://www.ecma-international.org/ecma-262/5.1/"
	  }, {
	    "name": "original implementation of detect code",
	    "href": "http://kangax.github.io/es5-compat-table/"
	  }],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "tags": ["es5"]
	}
	!*/
Modernizr.addTest("es5undefined",function(){var A,e;try{e=window.undefined,window.undefined=12345,A="undefined"==typeof window.undefined,window.undefined=e}catch(t){return!1}return A}),/*!
	{
	  "name": "ES5",
	  "property": "es5",
	  "notes": [{
	    "name": "ECMAScript 5.1 Language Specification",
	    "href": "http://www.ecma-international.org/ecma-262/5.1/"
	  }],
	  "polyfills": ["es5shim", "es5sham"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "tags": ["es5"]
	}
	!*/
Modernizr.addTest("es5",function(){return!!(Modernizr.es5array&&Modernizr.es5date&&Modernizr.es5function&&Modernizr.es5object&&Modernizr.strictmode&&Modernizr.es5string&&Modernizr.json&&Modernizr.es5syntax&&Modernizr.es5undefined)}),/*!
	{
	  "name": "ES6 Array",
	  "property": "es6array",
	  "notes": [{
	    "name": "unofficial ECMAScript 6 draft specification",
	    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
	  }],
	  "polyfills": ["es6shim"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
	  "tags": ["es6"]
	}
	!*/
Modernizr.addTest("es6array",!!(Array.prototype&&Array.prototype.copyWithin&&Array.prototype.fill&&Array.prototype.find&&Array.prototype.findIndex&&Array.prototype.keys&&Array.prototype.entries&&Array.prototype.values&&Array.from&&Array.of)),/*!
	{
	  "name": "ES6 Collections",
	  "property": "es6collections",
	  "notes": [{
	    "name": "unofficial ECMAScript 6 draft specification",
	    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
	  }],
	  "polyfills": ["es6shim", "weakmap"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
	  "tags": ["es6"]
	}
	!*/
Modernizr.addTest("es6collections",!!(window.Map&&window.Set&&window.WeakMap&&window.WeakSet)),/*!
	{
	  "name": "ES5 String.prototype.contains",
	  "property": "contains",
	  "authors": ["Robert Kowalski"],
	  "tags": ["es6"]
	}
	!*/
Modernizr.addTest("contains",is(String.prototype.contains,"function")),/*!
	{
	  "name": "ES6 Generators",
	  "property": "generators",
	  "authors": ["Michael Kachanovskyi"],
	  "tags": ["es6"]
	}
	!*/
Modernizr.addTest("generators",function(){try{new Function("function* test() {}")()}catch(A){return!1}return!0}),/*!
	{
	  "name": "ES6 Math",
	  "property": "es6math",
	  "notes": [{
	    "name": "unofficial ECMAScript 6 draft specification",
	    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
	  }],
	  "polyfills": ["es6shim"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
	  "tags": ["es6"]
	}
	!*/
Modernizr.addTest("es6math",!!(Math&&Math.clz32&&Math.cbrt&&Math.imul&&Math.sign&&Math.log10&&Math.log2&&Math.log1p&&Math.expm1&&Math.cosh&&Math.sinh&&Math.tanh&&Math.acosh&&Math.asinh&&Math.atanh&&Math.hypot&&Math.trunc&&Math.fround)),/*!
	{
	  "name": "ES6 Number",
	  "property": "es6number",
	  "notes": [{
	    "name": "unofficial ECMAScript 6 draft specification",
	    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
	  }],
	  "polyfills": ["es6shim"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
	  "tags": ["es6"]
	}
	!*/
Modernizr.addTest("es6number",!!(Number.isFinite&&Number.isInteger&&Number.isSafeInteger&&Number.isNaN&&Number.parseInt&&Number.parseFloat&&Number.isInteger(Number.MAX_SAFE_INTEGER)&&Number.isInteger(Number.MIN_SAFE_INTEGER)&&Number.isFinite(Number.EPSILON))),/*!
	{
	  "name": "ES6 Object",
	  "property": "es6object",
	  "notes": [{
	    "name": "unofficial ECMAScript 6 draft specification",
	    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
	  }],
	  "polyfills": ["es6shim"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
	  "tags": ["es6"]
	}
	!*/
Modernizr.addTest("es6object",!!(Object.assign&&Object.is&&Object.setPrototypeOf)),/*!
	{
	  "name": "ES6 Promises",
	  "property": "promises",
	  "caniuse": "promises",
	  "polyfills": ["es6promises"],
	  "authors": ["Krister Kari", "Jake Archibald"],
	  "tags": ["es6"],
	  "notes": [{
	    "name": "The ES6 promises spec",
	    "href": "https://github.com/domenic/promises-unwrapping"
	  },{
	    "name": "Chromium dashboard - ES6 Promises",
	    "href": "https://www.chromestatus.com/features/5681726336532480"
	  },{
	    "name": "JavaScript Promises: There and back again - HTML5 Rocks",
	    "href": "http://www.html5rocks.com/en/tutorials/es6/promises/"
	  }]
	}
	!*/
Modernizr.addTest("promises",function(){return"Promise"in window&&"resolve"in window.Promise&&"reject"in window.Promise&&"all"in window.Promise&&"race"in window.Promise&&function(){var A;return new window.Promise(function(e){A=e}),"function"==typeof A}()}),/*!
	{
	  "name": "ES6 String",
	  "property": "es6string",
	  "notes": [{
	    "name": "unofficial ECMAScript 6 draft specification",
	    "href": "https://people.mozilla.org/~jorendorff/es6-draft.html"
	  }],
	  "polyfills": ["es6shim"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "warnings": ["ECMAScript 6 is still a only a draft, so this detect may not match the final specification or implementations."],
	  "tags": ["es6"]
	}
	!*/
Modernizr.addTest("es6string",!!(String.fromCodePoint&&String.raw&&String.prototype.codePointAt&&String.prototype.repeat&&String.prototype.startsWith&&String.prototype.endsWith&&String.prototype.contains)),/*!
	{
	  "name": "Orientation and Motion Events",
	  "property": ["devicemotion", "deviceorientation"],
	  "caniuse": "deviceorientation",
	  "notes": [{
	    "name": "W3C Editor's Draft",
	    "href": "http://w3c.github.io/deviceorientation/spec-source-orientation.html"
	  },{
	    "name": "Implementation by iOS Safari (Orientation)",
	    "href": "http://goo.gl/fhce3"
	  },{
	    "name": "Implementation by iOS Safari (Motion)",
	    "href": "http://goo.gl/rLKz8"
	  }],
	  "authors": ["Shi Chuan"],
	  "tags": ["event"],
	  "builderAliases": ["event_deviceorientation_motion"]
	}
	!*/
Modernizr.addTest("devicemotion","DeviceMotionEvent"in window),Modernizr.addTest("deviceorientation","DeviceOrientationEvent"in window),/*!
	{
	  "name": "onInput Event",
	  "property": "oninput",
	  "notes": [{
	    "name": "MDN article",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.oninput"
	  },{
	    "name": "WHATWG spec",
	    "href": "https://html.spec.whatwg.org/multipage/forms.html#common-input-element-attributes"
	  },{
	    "name": "Detecting onInput support",
	    "href": "http://danielfriesen.name/blog/2010/02/16/html5-browser-maze-oninput-support"
	  }],
	  "authors": ["Patrick Kettner"],
	  "tags": ["event"]
	}
	!*/
Modernizr.addTest("oninput",function(){var A,e=createElement("input");if(e.setAttribute("oninput","return"),hasEvent("oninput",docElement)||"function"==typeof e.oninput)return!0;try{var t=document.createEvent("KeyboardEvent");A=!1;var n=function(e){A=!0,e.preventDefault(),e.stopPropagation()};t.initKeyEvent("keypress",!0,!0,window,!1,!1,!1,!1,0,"e".charCodeAt(0)),docElement.appendChild(e),e.addEventListener("input",n,!1),e.focus(),e.dispatchEvent(t),e.removeEventListener("input",n,!1),docElement.removeChild(e)}catch(r){A=!1}return A}),/*!
	{
	  "name": "Event Listener",
	  "property": "eventlistener",
	  "authors": ["Andrew Betts (@triblondon)"],
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Registration-interfaces"
	  }],
	  "polyfills": ["eventlistener"]
	}
	!*/
Modernizr.addTest("eventlistener","addEventListener"in window),/*!
	{
	  "name": "EXIF Orientation",
	  "property": "exiforientation",
	  "tags": ["image"],
	  "builderAliases": ["exif_orientation"],
	  "async": true,
	  "authors": ["Paul Sayre"],
	  "notes": [{
	    "name": "Article by Dave Perrett",
	    "href": "http://recursive-design.com/blog/2012/07/28/exif-orientation-handling-is-a-ghetto/"
	  },{
	    "name": "Article by Calvin Hass",
	    "href": "http://www.impulseadventure.com/photo/exif-orientation.html"
	  }]
	}
	!*/
Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){addTest("exiforientation",!1,{aliases:["exif-orientation"]})},A.onload=function(){addTest("exiforientation",2!==A.width,{aliases:["exif-orientation"]})},A.src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="}),/*!
	{
	  "name": "File API",
	  "property": "filereader",
	  "caniuse": "fileapi",
	  "notes": [{
	    "name": "W3C Working Draft",
	    "href": "https://www.w3.org/TR/FileAPI/"
	  }],
	  "tags": ["file"],
	  "builderAliases": ["file_api"],
	  "knownBugs": ["Will fail in Safari 5 due to its lack of support for the standards defined FileReader object"]
	}
	!*/
Modernizr.addTest("filereader",!!(window.File&&window.FileList&&window.FileReader)),/*!
	{
	  "name": "Filesystem API",
	  "property": "filesystem",
	  "caniuse": "filesystem",
	  "notes": [{
	    "name": "W3 Draft",
	    "href": "http://dev.w3.org/2009/dap/file-system/file-dir-sys.html"
	  }],
	  "authors": ["Eric Bidelman (@ebidel)"],
	  "tags": ["file"],
	  "builderAliases": ["file_filesystem"],
	  "knownBugs": ["The API will be present in Chrome incognito, but will throw an exception. See crbug.com/93417"]
	}
	!*/
Modernizr.addTest("filesystem",!!prefixed("requestFileSystem",window)),/*!
	  {
	  "name": "Flash",
	  "property": "flash",
	  "tags": ["flash"],
	  "polyfills": ["shumway"]
	  }
	  !*/
Modernizr.addAsyncTest(function(){var A,e,t=function(A){docElement.contains(A)||docElement.appendChild(A)},n=function(A){A.fake&&A.parentNode&&A.parentNode.removeChild(A)},r=function(A,e){var t=!!A;if(t&&(t=new Boolean(t),t.blocked="blocked"===A),addTest("flash",function(){return t}),e&&s.contains(e)){for(;e.parentNode!==s;)e=e.parentNode;s.removeChild(e)}};try{e="ActiveXObject"in window&&"Pan"in new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(o){}if(A=!("plugins"in navigator&&"Shockwave Flash"in navigator.plugins||e),A||isSVG)r(!1);else{var i,d,a=createElement("embed"),s=getBody();if(a.type="application/x-shockwave-flash",s.appendChild(a),!("Pan"in a||e))return t(s),r("blocked",a),void n(s);i=function(){return t(s),docElement.contains(s)?(docElement.contains(a)?(d=a.style.cssText,""!==d?r("blocked",a):r(!0,a)):r("blocked"),void n(s)):(s=document.body||s,a=createElement("embed"),a.type="application/x-shockwave-flash",s.appendChild(a),setTimeout(i,1e3))},setTimeout(i,10)}}),/*!
	{
	  "name": "input[capture] Attribute",
	  "property": "capture",
	  "tags": ["video", "image", "audio", "media", "attribute"],
	  "notes": [{
	    "name": "W3C draft: HTML Media Capture",
	    "href": "https://www.w3.org/TR/html-media-capture/"
	  }]
	}
	!*/
Modernizr.addTest("capture","capture"in createElement("input")),/*!
	{
	  "name": "input[file] Attribute",
	  "property": "fileinput",
	  "caniuse" : "forms",
	  "tags": ["file", "forms", "input"],
	  "builderAliases": ["forms_fileinput"]
	}
	!*/
Modernizr.addTest("fileinput",function(){if(navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))return!1;var A=createElement("input");return A.type="file",!A.disabled}),/*!
	{
	  "name": "input[directory] Attribute",
	  "property": "directory",
	  "authors": ["silverwind"],
	  "tags": ["file", "input", "attribute"]
	}
	!*/
Modernizr.addTest("fileinputdirectory",function(){var A=createElement("input"),e="directory";if(A.type="file",e in A)return!0;for(var t=0,n=domPrefixes.length;t<n;t++)if(domPrefixes[t]+e in A)return!0;return!1}),/*!
	{
	  "name": "input[form] Attribute",
	  "property": "formattribute",
	  "tags": ["attribute", "forms", "input"],
	  "builderAliases": ["forms_formattribute"]
	}
	!*/
Modernizr.addTest("formattribute",function(){var A,e=createElement("form"),t=createElement("input"),n=createElement("div"),r="formtest"+(new Date).getTime(),o=!1;e.id=r;try{t.setAttribute("form",r)}catch(i){document.createAttribute&&(A=document.createAttribute("form"),A.nodeValue=r,t.setAttributeNode(A))}return n.appendChild(e),n.appendChild(t),docElement.appendChild(n),o=e.elements&&1===e.elements.length&&t.form==e,n.parentNode.removeChild(n),o});/*!
	{
	  "name": "Form input types",
	  "property": "inputtypes",
	  "caniuse": "forms",
	  "tags": ["forms"],
	  "authors": ["Mike Taylor"],
	  "polyfills": [
	    "jquerytools",
	    "webshims",
	    "h5f",
	    "webforms2",
	    "nwxforms",
	    "fdslider",
	    "html5slider",
	    "galleryhtml5forms",
	    "jscolor",
	    "html5formshim",
	    "selectedoptionsjs",
	    "formvalidationjs"
	  ]
	}
	!*/
var inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" "),inputs={};Modernizr.inputtypes=function(A){for(var e,t,n,r=A.length,o="1)",i=0;i<r;i++)inputElem.setAttribute("type",e=A[i]),n="text"!==inputElem.type&&"style"in inputElem,n&&(inputElem.value=o,inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),t=document.defaultView,n=t.getComputedStyle&&"textfield"!==t.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(e)||(n=/^(url|email)$/.test(e)?inputElem.checkValidity&&inputElem.checkValidity()===!1:inputElem.value!=o)),inputs[A[i]]=!!n;return inputs}(inputtypes),/*!
	{
	  "name": "Form Validation",
	  "property": "formvalidation",
	  "tags": ["forms", "validation", "attribute"],
	  "builderAliases": ["forms_validation"]
	}
	!*/
Modernizr.addTest("formvalidation",function(){var A=createElement("form");if(!("checkValidity"in A&&"addEventListener"in A))return!1;if("reportValidity"in A)return!0;var e,t=!1;return Modernizr.formvalidationapi=!0,A.addEventListener("submit",function(A){window.opera&&!window.operamini||A.preventDefault(),A.stopPropagation()},!1),A.innerHTML='<input name="modTest" required="required" /><button></button>',testStyles("#modernizr form{position:absolute;top:-99999em}",function(n){n.appendChild(A),e=A.getElementsByTagName("input")[0],e.addEventListener("invalid",function(A){t=!0,A.preventDefault(),A.stopPropagation()},!1),Modernizr.formvalidationmessage=!!e.validationMessage,A.getElementsByTagName("button")[0].click()}),t}),/*!
	{
	  "name": "input[type=\"number\"] Localization",
	  "property": "localizednumber",
	  "tags": ["forms", "localization", "attribute"],
	  "authors": ["Peter Janes"],
	  "notes": [{
	    "name": "Webkit Bug Tracker Listing",
	    "href": "https://bugs.webkit.org/show_bug.cgi?id=42484"
	  },{
	    "name": "Based on This",
	    "href": "https://trac.webkit.org/browser/trunk/LayoutTests/fast/forms/script-tests/input-number-keyoperation.js?rev=80096#L9"
	  }],
	  "knownBugs": ["Only ever returns true if the browser/OS is configured to use comma as a decimal separator. This is probably fine for most use cases."]
	}
	!*/
Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var A,e=createElement("div"),t=getBody(),n=function(){return docElement.insertBefore(t,docElement.firstElementChild||docElement.firstChild)}();e.innerHTML='<input type="number" value="1.0" step="0.1"/>';var r=e.childNodes[0];n.appendChild(e),r.focus();try{document.execCommand("InsertText",!1,"1,1")}catch(o){}return A="number"===r.type&&1.1===r.valueAsNumber&&r.checkValidity(),n.removeChild(e),t.fake&&n.parentNode.removeChild(n),A}),/*!
	{
	  "name": "placeholder attribute",
	  "property": "placeholder",
	  "tags": ["forms", "attribute"],
	  "builderAliases": ["forms_placeholder"]
	}
	!*/
Modernizr.addTest("placeholder","placeholder"in createElement("input")&&"placeholder"in createElement("textarea")),/*!
	{
	  "name": "form#requestAutocomplete()",
	  "property": "requestautocomplete",
	  "tags": ["form", "forms", "requestAutocomplete", "payments"],
	  "notes": [{
	    "name": "WHATWG proposed spec",
	    "href": "https://wiki.whatwg.org/wiki/RequestAutocomplete"
	  }]
	}
	!*/
Modernizr.addTest("requestautocomplete",!!prefixed("requestAutocomplete",createElement("form"))),/*!
	{
	  "name": "Fullscreen API",
	  "property": "fullscreen",
	  "caniuse": "fullscreen",
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en/API/Fullscreen"
	  }],
	  "polyfills": ["screenfulljs"],
	  "builderAliases": ["fullscreen_api"]
	}
	!*/
Modernizr.addTest("fullscreen",!(!prefixed("exitFullscreen",document,!1)&&!prefixed("cancelFullScreen",document,!1))),/*!
	{
	  "name": "GamePad API",
	  "property": "gamepads",
	  "authors": ["Eric Bidelman"],
	  "tags": ["media"],
	  "notes": [{
	    "name": "W3C spec",
	    "href": "https://www.w3.org/TR/gamepad/"
	  },{
	    "name": "HTML5 Rocks tutorial",
	    "href": "http://www.html5rocks.com/en/tutorials/doodles/gamepad/#toc-featuredetect"
	  }],
	  "warnings": [],
	  "polyfills": []
	}
	!*/
Modernizr.addTest("gamepads",!!prefixed("getGamepads",navigator)),/*!
	{
	  "name": "Geolocation API",
	  "property": "geolocation",
	  "caniuse": "geolocation",
	  "tags": ["media"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
	  }],
	  "polyfills": [
	    "joshuabell-polyfill",
	    "webshims",
	    "geo-location-javascript",
	    "geolocation-api-polyfill"
	  ]
	}
	!*/
Modernizr.addTest("geolocation","geolocation"in navigator),/*!
	{
	  "name": "Hashchange event",
	  "property": "hashchange",
	  "caniuse": "hashchange",
	  "tags": ["history"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.onhashchange"
	  }],
	  "polyfills": [
	    "jquery-hashchange",
	    "moo-historymanager",
	    "jquery-ajaxy",
	    "hasher",
	    "shistory"
	  ]
	}
	!*/
Modernizr.addTest("hashchange",function(){return hasEvent("hashchange",window)!==!1&&(document.documentMode===undefined||document.documentMode>7)}),/*!
	{
	  "name": "Hidden Scrollbar",
	  "property": "hiddenscroll",
	  "authors": ["Oleg Korsunsky"],
	  "tags": ["overlay"],
	  "notes": [{
	    "name": "Overlay Scrollbar description",
	    "href": "https://developer.apple.com/library/mac/releasenotes/MacOSX/WhatsNewInOSX/Articles/MacOSX10_7.html#//apple_ref/doc/uid/TP40010355-SW39"
	  },{
	    "name": "Video example of overlay scrollbars",
	    "href": "https://gfycat.com/FoolishMeaslyAtlanticsharpnosepuffer"
	  }]
	}
	!*/
Modernizr.addTest("hiddenscroll",function(){return testStyles("#modernizr {width:100px;height:100px;overflow:scroll}",function(A){return A.offsetWidth===A.clientWidth})}),/*!
	{
	  "name": "History API",
	  "property": "history",
	  "caniuse": "history",
	  "tags": ["history"],
	  "authors": ["Hay Kranen", "Alexander Farkas"],
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "https://www.w3.org/TR/html51/browsers.html#the-history-interface"
	  }, {
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/API/window.history"
	  }],
	  "polyfills": ["historyjs", "html5historyapi"]
	}
	!*/
Modernizr.addTest("history",function(){var A=navigator.userAgent;return(A.indexOf("Android 2.")===-1&&A.indexOf("Android 4.0")===-1||A.indexOf("Mobile Safari")===-1||A.indexOf("Chrome")!==-1||A.indexOf("Windows Phone")!==-1)&&window.history&&"pushState"in window.history}),/*!
	{
	  "name": "HTML Imports",
	  "notes": [
	    {
	      "name": "W3C HTML Imports Specification",
	      "href": "https://w3c.github.io/webcomponents/spec/imports/"
	    },
	    {
	      "name": "HTML Imports - #include for the web",
	      "href": "http://www.html5rocks.com/en/tutorials/webcomponents/imports/"
	    }
	  ],
	  "polyfills": ["polymer-htmlimports"],
	  "property": "htmlimports",
	  "tags": ["html", "import"]
	}
	!*/
addTest("htmlimports","import"in createElement("link")),/*!
	{
	  "name": "IE8 compat mode",
	  "property": "ie8compat",
	  "authors": ["Erich Ocean"]
	}
	!*/
Modernizr.addTest("ie8compat",!window.addEventListener&&!!document.documentMode&&7===document.documentMode),/*!
	{
	  "name": "iframe[sandbox] Attribute",
	  "property": "sandbox",
	  "tags": ["iframe"],
	  "builderAliases": ["iframe_sandbox"],
	  "notes": [
	  {
	    "name": "WhatWG Spec",
	    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-sandbox"
	  }],
	  "knownBugs": [ "False-positive on Firefox < 29" ]
	}
	!*/
Modernizr.addTest("sandbox","sandbox"in createElement("iframe")),/*!
	{
	  "name": "iframe[seamless] Attribute",
	  "property": "seamless",
	  "tags": ["iframe"],
	  "builderAliases": ["iframe_seamless"],
	  "notes": [{
	    "name": "WhatWG Spec",
	    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-seamless"
	  }]
	}
	!*/
Modernizr.addTest("seamless","seamless"in createElement("iframe")),/*!
	{
	  "name": "iframe[srcdoc] Attribute",
	  "property": "srcdoc",
	  "tags": ["iframe"],
	  "builderAliases": ["iframe_srcdoc"],
	  "notes": [{
	    "name": "WhatWG Spec",
	    "href": "https://html.spec.whatwg.org/multipage/embedded-content.html#attr-iframe-srcdoc"
	  }]
	}
	!*/
Modernizr.addTest("srcdoc","srcdoc"in createElement("iframe")),/*!
	{
	  "name": "Animated PNG",
	  "async": true,
	  "property": "apng",
	  "tags": ["image"],
	  "builderAliases": ["img_apng"],
	  "notes": [{
	    "name": "Wikipedia Article",
	    "href": "https://en.wikipedia.org/wiki/APNG"
	  }]
	}
	!*/
Modernizr.addAsyncTest(function(){if(!Modernizr.canvas)return!1;var A=new Image,e=createElement("canvas"),t=e.getContext("2d");A.onload=function(){addTest("apng",function(){return"undefined"!=typeof e.getContext&&(t.drawImage(A,0,0),0===t.getImageData(0,0,1,1).data[3])})},A.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}),/*!
	{
	  "name": "JPEG 2000",
	  "async": true,
	  "aliases": ["jpeg-2000", "jpg2"],
	  "property": "jpeg2000",
	  "tags": ["image"],
	  "authors": ["@eric_wvgg"],
	  "notes": [{
	    "name": "Wikipedia Article",
	    "href": "https://en.wikipedia.org/wiki/JPEG_2000"
	  }]
	}
	!*/
Modernizr.addAsyncTest(function(){var A=new Image;A.onload=A.onerror=function(){addTest("jpeg2000",1==A.width)},A.src="data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="}),/*!
	{
	  "name": "JPEG XR (extended range)",
	  "async": true,
	  "aliases": ["jpeg-xr"],
	  "property": "jpegxr",
	  "tags": ["image"],
	  "notes": [{
	    "name": "Wikipedia Article",
	    "href": "https://en.wikipedia.org/wiki/JPEG_XR"
	  }]
	}
	!*/
Modernizr.addAsyncTest(function(){var A=new Image;A.onload=A.onerror=function(){addTest("jpegxr",1==A.width,{aliases:["jpeg-xr"]})},A.src="data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="}),/*!
	{
	  "name": "sizes attribute",
	  "async": true,
	  "property": "sizes",
	  "tags": ["image"],
	  "authors": ["Mat Marquis"],
	  "notes": [{
	    "name": "Spec",
	    "href": "http://picture.responsiveimages.org/#parse-sizes-attr"
	    },{
	    "name": "Usage Details",
	    "href": "http://ericportis.com/posts/2014/srcset-sizes/"
	    }]
	}
	!*/
Modernizr.addAsyncTest(function(){var A,e,t,n=createElement("img"),r="sizes"in n;!r&&"srcset"in n?(e="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",A="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=function(){addTest("sizes",2==n.width)},n.onload=t,n.onerror=t,n.setAttribute("sizes","9px"),n.srcset=A+" 1w,"+e+" 8w",n.src=A):addTest("sizes",r)}),/*!
	{
	  "name": "srcset attribute",
	  "property": "srcset",
	  "tags": ["image"],
	  "notes": [{
	    "name": "Smashing Magazine Article",
	    "href": "https://en.wikipedia.org/wiki/APNG"
	    },{
	    "name": "Generate multi-resolution images for srcset with Grunt",
	    "href": "https://addyosmani.com/blog/generate-multi-resolution-images-for-srcset-with-grunt/"
	    }]
	}
	!*/
Modernizr.addTest("srcset","srcset"in createElement("img")),/*!
	{
	  "name": "Webp",
	  "async": true,
	  "property": "webp",
	  "tags": ["image"],
	  "builderAliases": ["img_webp"],
	  "authors": ["Krister Kari", "@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
	  "notes": [{
	    "name": "Webp Info",
	    "href": "https://developers.google.com/speed/webp/"
	  }, {
	    "name": "Chormium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
	    "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
	  }, {
	    "name": "Webp Lossless Spec",
	    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
	  }, {
	    "name": "Article about WebP support on Android browsers",
	    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
	  }, {
	    "name": "Chormium WebP announcement",
	    "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
	  }]
	}
	!*/
Modernizr.addAsyncTest(function(){function A(A,e,t){function n(e){var n=!(!e||"load"!==e.type)&&1==r.width,o="webp"===A;addTest(A,o?new Boolean(n):n),t&&t(e)}var r=new Image;r.onerror=n,r.onload=n,r.src=e}var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=e.shift();A(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var n=0;n<e.length;n++)A(e[n].name,e[n].uri)})}),/*!
	{
	  "name": "Webp Alpha",
	  "async": true,
	  "property": "webpalpha",
	  "aliases": ["webp-alpha"],
	  "tags": ["image"],
	  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
	  "notes": [{
	    "name": "WebP Info",
	    "href": "https://developers.google.com/speed/webp/"
	  },{
	    "name": "Article about WebP support on Android browsers",
	    "href": "http://www.wope-framework.com/en/2013/06/24/webp-support-on-android-browsers/"
	  },{
	    "name": "Chromium WebP announcement",
	    "href": "https://blog.chromium.org/2011/11/lossless-and-transparency-encoding-in.html?m=1"
	  }]
	}
	!*/
Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){addTest("webpalpha",!1,{aliases:["webp-alpha"]})},A.onload=function(){addTest("webpalpha",1==A.width,{aliases:["webp-alpha"]})},A.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),/*!
	{
	  "name": "Webp Animation",
	  "async": true,
	  "property": "webpanimation",
	  "aliases": ["webp-animation"],
	  "tags": ["image"],
	  "authors": ["Krister Kari", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
	  "notes": [{
	    "name": "WebP Info",
	    "href": "https://developers.google.com/speed/webp/"
	  },{
	    "name": "Chromium blog - Chrome 32 Beta: Animated WebP images and faster Chrome for Android touch input",
	    "href": "https://blog.chromium.org/2013/11/chrome-32-beta-animated-webp-images-and.html"
	  }]
	}
	!*/
Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){addTest("webpanimation",!1,{aliases:["webp-animation"]})},A.onload=function(){addTest("webpanimation",1==A.width,{aliases:["webp-animation"]})},A.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}),/*!
	{
	  "name": "Webp Lossless",
	  "async": true,
	  "property": ["webplossless", "webp-lossless"],
	  "tags": ["image"],
	  "authors": ["@amandeep", "Rich Bradshaw", "Ryan Seddon", "Paul Irish"],
	  "notes": [{
	    "name": "Webp Info",
	    "href": "https://developers.google.com/speed/webp/"
	  },{
	    "name": "Webp Lossless Spec",
	    "href": "https://developers.google.com/speed/webp/docs/webp_lossless_bitstream_specification"
	  }]
	}
	!*/
Modernizr.addAsyncTest(function(){var A=new Image;A.onerror=function(){addTest("webplossless",!1,{aliases:["webp-lossless"]})},A.onload=function(){addTest("webplossless",1==A.width,{aliases:["webp-lossless"]})},A.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="});/*!
	{
	  "name": "IndexedDB",
	  "property": "indexeddb",
	  "caniuse": "indexeddb",
	  "tags": ["storage"],
	  "polyfills": ["indexeddb"]
	}
	!*/
var indexeddb;try{indexeddb=prefixed("indexedDB",window)}catch(e){}Modernizr.addTest("indexeddb",!!indexeddb),indexeddb&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in indexeddb),/*!
	{
	  "name": "IndexedDB Blob",
	  "property": "indexeddbblob"
	}
	!*/
Modernizr.addAsyncTest(function(){var A,e,t,n="detect-blob-support",r=!1;try{A=prefixed("indexedDB",window)}catch(o){}if(!Modernizr.indexeddb||!Modernizr.indexeddb.deletedatabase)return!1;try{A.deleteDatabase(n).onsuccess=function(){e=A.open(n,1),e.onupgradeneeded=function(){e.result.createObjectStore("store")},e.onsuccess=function(){t=e.result;try{t.transaction("store","readwrite").objectStore("store").put(new Blob,"key"),r=!0}catch(o){r=!1}finally{addTest("indexeddbblob",r),t.close(),A.deleteDatabase(n)}}}}catch(o){addTest("indexeddbblob",!1)}}),/*!
	{
	  "name": "input formaction",
	  "property": "inputformaction",
	  "aliases": ["input-formaction"],
	  "notes": [{
	    "name": "WHATWG Spec",
	    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formaction"
	  }, {
	    "name": "Wufoo demo",
	    "href": "https://www.wufoo.com/html5/attributes/13-formaction.html"
	  }],
	  "polyfills": [
	    "webshims"
	  ]
	}
	!*/
Modernizr.addTest("inputformaction",!!("formAction"in createElement("input")),{aliases:["input-formaction"]}),/*!
	{
	  "name": "input formenctype",
	  "property": "inputformenctype",
	  "aliases": ["input-formenctype"],
	  "notes": [{
	    "name": "WHATWG Spec",
	    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formenctype"
	  }, {
	    "name": "Wufoo demo",
	    "href": "https://www.wufoo.com/html5/attributes/16-formenctype.html"
	  }],
	  "polyfills": [
	    "html5formshim"
	  ]
	}
	!*/
Modernizr.addTest("inputformenctype",!!("formEnctype"in createElement("input")),{aliases:["input-formenctype"]}),/*!
	{
	  "name": "input formmethod",
	  "property": "inputformmethod",
	  "notes": [{
	    "name": "WHATWG Spec",
	    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formmethod"
	  }, {
	    "name": "Wufoo demo",
	    "href": "https://www.wufoo.com/html5/attributes/14-formmethod.html"
	  }],
	  "polyfills": [
	    "webshims"
	  ]
	}
	!*/
Modernizr.addTest("inputformmethod",!!("formMethod"in createElement("input"))),/*!
	{
	  "name": "input formtarget",
	  "property": "inputformtarget",
	  "aliases": ["input-formtarget"],
	  "notes": [{
	    "name": "WHATWG Spec",
	    "href": "https://html.spec.whatwg.org/multipage/forms.html#attr-fs-formtarget"
	  }, {
	    "name": "Wufoo demo",
	    "href": "https://www.wufoo.com/html5/attributes/15-formtarget.html"
	  }],
	  "polyfills": [
	    "html5formshim"
	  ]
	}
	!*/
Modernizr.addTest("inputformtarget",!!("formtarget"in createElement("input")),{aliases:["input-formtarget"]}),/*!
	{
	  "name": "input[search] search event",
	  "property": "search",
	  "tags": ["input","search"],
	  "authors": ["Calvin Webster"],
	  "notes": [{
	    "name": "Wufoo demo",
	    "href": "https://www.wufoo.com/html5/types/5-search.html?"
	  }, {
	    "name": "CSS Tricks",
	    "href": "https://css-tricks.com/webkit-html5-search-inputs/"
	  }]
	}
	!*/
Modernizr.addTest("inputsearchevent",hasEvent("search")),/*!
	 {
	 "name": "Internationalization API",
	 "property": "intl",
	 "notes": [{
	 "name": "MDN documentation",
	 "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"
	 },{
	 "name": "ECMAScript spec",
	 "href": "http://www.ecma-international.org/ecma-402/1.0/"
	 }]
	 }
	 !*/
Modernizr.addTest("intl",!!prefixed("Intl",window)),/*!
	{
	  "name": "Reverse Ordered Lists",
	  "property": "olreversed",
	  "notes": [{
	    "name": "Impressive Webs article",
	    "href": "http://impressivewebs.com/reverse-ordered-lists-html5"
	  }],
	  "builderAliases": ["lists_reversed"]
	}
	!*/
Modernizr.addTest("olreversed","reversed"in createElement("ol")),/*!
	{
	  "name": "MathML",
	  "property": "mathml",
	  "caniuse": "mathml",
	  "authors": ["Addy Osmani", "Davide P. Cervone", "David Carlisle"],
	  "knownBugs": ["Firefox < 4 will likely return a false, however it does support MathML inside XHTML documents"],
	  "notes": [{
	    "name": "W3C spec",
	    "href": "https://www.w3.org/Math/"
	  }],
	  "polyfills": ["mathjax"]
	}
	!*/
Modernizr.addTest("mathml",function(){var A;return testStyles("#modernizr{position:absolute;display:inline-block}",function(e){e.innerHTML+="<math><mfrac><mi>xx</mi><mi>yy</mi></mfrac></math>",A=e.offsetHeight>e.offsetWidth}),A}),/*!
	{
	  "name": "Beacon API",
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon"
	  },{
	    "name": "W3C specification",
	    "href": "https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/Beacon/Overview.html"
	  }],
	  "property": "beacon",
	  "tags": ["beacon", "network"],
	  "authors": ["Cătălin Mariș"]
	}
	!*/
Modernizr.addTest("beacon","sendBeacon"in navigator),/*!
	{
	  "name": "Low Bandwidth Connection",
	  "property": "lowbandwidth",
	  "tags": ["network"],
	  "builderAliases": ["network_connection"]
	}
	!*/
Modernizr.addTest("lowbandwidth",function(){var A=navigator.connection||{type:0};return 3==A.type||4==A.type||/^[23]g$/.test(A.type)}),/*!
	{
	  "name": "Server Sent Events",
	  "property": "eventsource",
	  "tags": ["network"],
	  "builderAliases": ["network_eventsource"],
	  "notes": [{
	    "name": "WHATWG Spec",
	    "href": "https://html.spec.whatwg.org/multipage/comms.html#server-sent-events"
	  }]
	}
	!*/
Modernizr.addTest("eventsource","EventSource"in window),/*!
	{
	  "name": "Fetch API",
	  "property": "fetch",
	  "tags": ["network"],
	  "caniuse": "fetch",
	  "notes": [{
	    "name": "Fetch Living Standard",
	    "href": "https://fetch.spec.whatwg.org/"
	  }],
	  "polyfills": ["fetch"]
	}
	!*/
Modernizr.addTest("fetch","fetch"in window),/*!
	{
	  "name": "XHR responseType",
	  "property": "xhrresponsetype",
	  "tags": ["network"],
	  "notes": [{
	    "name": "XMLHttpRequest Living Standard",
	    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
	  }]
	}
	!*/
Modernizr.addTest("xhrresponsetype",function(){if("undefined"==typeof XMLHttpRequest)return!1;var A=new XMLHttpRequest;return A.open("get","/",!0),"response"in A}());var testXhrType=function(A){if("undefined"==typeof XMLHttpRequest)return!1;var e=new XMLHttpRequest;e.open("get","/",!0);try{e.responseType=A}catch(t){return!1}return"response"in e&&e.responseType==A};/*!
	{
	  "name": "XHR responseType='arraybuffer'",
	  "property": "xhrresponsetypearraybuffer",
	  "tags": ["network"],
	  "notes": [{
	    "name": "XMLHttpRequest Living Standard",
	    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
	  }]
	}
	!*/
Modernizr.addTest("xhrresponsetypearraybuffer",testXhrType("arraybuffer")),/*!
	{
	  "name": "XHR responseType='blob'",
	  "property": "xhrresponsetypeblob",
	  "tags": ["network"],
	  "notes": [{
	    "name": "XMLHttpRequest Living Standard",
	    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
	  }]
	}
	!*/
Modernizr.addTest("xhrresponsetypeblob",testXhrType("blob")),/*!
	{
	  "name": "XHR responseType='document'",
	  "property": "xhrresponsetypedocument",
	  "tags": ["network"],
	  "notes": [{
	    "name": "XMLHttpRequest Living Standard",
	    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
	  }]
	}
	!*/
Modernizr.addTest("xhrresponsetypedocument",testXhrType("document")),/*!
	{
	  "name": "XHR responseType='json'",
	  "property": "xhrresponsetypejson",
	  "tags": ["network"],
	  "notes": [{
	    "name": "XMLHttpRequest Living Standard",
	    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
	  },{
	    "name": "Explanation of xhr.responseType='json'",
	    "href": "https://mathiasbynens.be/notes/xhr-responsetype-json"
	  }]
	}
	!*/
Modernizr.addTest("xhrresponsetypejson",testXhrType("json")),/*!
	{
	  "name": "XHR responseType='text'",
	  "property": "xhrresponsetypetext",
	  "tags": ["network"],
	  "notes": [{
	    "name": "XMLHttpRequest Living Standard",
	    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
	  }]
	}
	!*/
Modernizr.addTest("xhrresponsetypetext",testXhrType("text")),/*!
	{
	  "name": "XML HTTP Request Level 2 XHR2",
	  "property": "xhr2",
	  "tags": ["network"],
	  "builderAliases": ["network_xhr2"],
	  "notes": [{
	    "name": "W3 Spec",
	    "href": "https://www.w3.org/TR/XMLHttpRequest2/"
	  },{
	    "name": "Details on Related Github Issue",
	    "href": "https://github.com/Modernizr/Modernizr/issues/385"
	  }]
	}
	!*/
Modernizr.addTest("xhr2","XMLHttpRequest"in window&&"withCredentials"in new XMLHttpRequest),/*!
	{
	  "name": "Notification",
	  "property": "notification",
	  "caniuse": "notifications",
	  "authors": ["Theodoor van Donge", "Hendrik Beskow"],
	  "notes": [{
	    "name": "HTML5 Rocks tutorial",
	    "href": "http://www.html5rocks.com/en/tutorials/notifications/quick/"
	  },{
	    "name": "W3C spec",
	    "href": "https://www.w3.org/TR/notifications/"
	  }, {
	    "name": "Changes in Chrome to Notifications API due to Service Worker Push Notifications",
	    "href": "https://developers.google.com/web/updates/2015/05/Notifying-you-of-notificiation-changes"
	  }],
	  "knownBugs": [
	    "Possibility of false-positive on Chrome for Android if permissions we're granted for a website prior to Chrome 44."
	  ],
	  "polyfills": ["desktop-notify", "html5-notifications"]
	}
	!*/
Modernizr.addTest("notification",function(){if(!window.Notification||!window.Notification.requestPermission)return!1;if("granted"===window.Notification.permission)return!0;try{new window.Notification("")}catch(A){if("TypeError"===A.name)return!1}return!0}),/*!
	{
	  "name": "Page Visibility API",
	  "property": "pagevisibility",
	  "caniuse": "pagevisibility",
	  "tags": ["performance"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/DOM/Using_the_Page_Visibility_API"
	  },{
	    "name": "W3C spec",
	    "href": "https://www.w3.org/TR/2011/WD-page-visibility-20110602/"
	  },{
	    "name": "HTML5 Rocks tutorial",
	    "href": "http://www.html5rocks.com/en/tutorials/pagevisibility/intro/"
	  }],
	  "polyfills": ["visibilityjs", "visiblyjs", "jquery-visibility"]
	}
	!*/
Modernizr.addTest("pagevisibility",!!prefixed("hidden",document,!1)),/*!
	{
	  "name": "Navigation Timing API",
	  "property": "performance",
	  "caniuse": "nav-timing",
	  "tags": ["performance"],
	  "authors": ["Scott Murphy (@uxder)"],
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "https://www.w3.org/TR/navigation-timing/"
	  },{
	    "name": "HTML5 Rocks article",
	    "href": "http://www.html5rocks.com/en/tutorials/webperformance/basics/"
	  }],
	  "polyfills": ["perfnow"]
	}
	!*/
Modernizr.addTest("performance",!!prefixed("performance",window)),/*!
	{
	  "name": "DOM Pointer Events API",
	  "property": "pointerevents",
	  "tags": ["input"],
	  "authors": ["Stu Cox"],
	  "notes": [
	    {
	      "name": "W3C spec",
	      "href": "https://www.w3.org/TR/pointerevents/"
	    }
	  ],
	  "warnings": ["This property name now refers to W3C DOM PointerEvents: https://github.com/Modernizr/Modernizr/issues/548#issuecomment-12812099"],
	  "polyfills": ["handjs"]
	}
	!*/
Modernizr.addTest("pointerevents",function(){var A=!1,e=domPrefixes.length;for(A=Modernizr.hasEvent("pointerdown");e--&&!A;)hasEvent(domPrefixes[e]+"pointerdown")&&(A=!0);return A}),/*!
	{
	  "name": "Pointer Lock API",
	  "property": "pointerlock",
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/API/Pointer_Lock_API"
	  }],
	  "builderAliases": ["pointerlock_api"]
	}
	!*/
Modernizr.addTest("pointerlock",!!prefixed("exitPointerLock",document)),/*!
	{
	  "name": "postMessage",
	  "property": "postmessage",
	  "caniuse": "x-doc-messaging",
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "http://www.w3.org/TR/html5/comms.html#posting-messages"
	  }],
	  "polyfills": ["easyxdm", "postmessage-jquery"]
	}
	!*/
Modernizr.addTest("postmessage","postMessage"in window),/*!
	{
	  "authors": ["Cătălin Mariș"],
	  "caniuse": "proximity",
	  "name": "Proximity API",
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/API/Proximity_Events"
	  },{
	    "name": "W3C specification",
	    "href": "https://www.w3.org/TR/proximity/"
	  }],
	  "property": "proximity",
	  "tags": ["events", "proximity"]
	}
	!*/
Modernizr.addAsyncTest(function(){function A(){clearTimeout(e),window.removeEventListener("deviceproximity",A),addTest("proximity",!0)}var e,t=300;"ondeviceproximity"in window&&"onuserproximity"in window?(window.addEventListener("deviceproximity",A),e=setTimeout(function(){window.removeEventListener("deviceproximity",A),addTest("proximity",!1)},t)):addTest("proximity",!1)}),/*!
	{
	  "name": "QuerySelector",
	  "property": "queryselector",
	  "caniuse": "queryselector",
	  "tags": ["queryselector"],
	  "authors": ["Andrew Betts (@triblondon)"],
	  "notes": [{
	    "name" : "W3C Selectors reference",
	    "href": "https://www.w3.org/TR/selectors-api/#queryselectorall"
	  }],
	  "polyfills": ["css-selector-engine"]
	}
	!*/
Modernizr.addTest("queryselector","querySelector"in document&&"querySelectorAll"in document),/*!
	{
	  "name": "Quota Storage Management API",
	  "property": "quotamanagement",
	  "tags": ["storage"],
	  "builderAliases": ["quota_management_api"],
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "https://www.w3.org/TR/quota-api/"
	  }]
	}
	!*/
Modernizr.addTest("quotamanagement",function(){var A=prefixed("temporaryStorage",navigator),e=prefixed("persistentStorage",navigator);return!(!A||!e)}),/*!
	{
	  "name": "requestAnimationFrame",
	  "property": "requestanimationframe",
	  "aliases": ["raf"],
	  "caniuse": "requestanimationframe",
	  "tags": ["animation"],
	  "authors": ["Addy Osmani"],
	  "notes": [{
	    "name": "W3C spec",
	    "href": "https://www.w3.org/TR/animation-timing/"
	  }],
	  "polyfills": ["raf"]
	}
	!*/
Modernizr.addTest("requestanimationframe",!!prefixed("requestAnimationFrame",window),{aliases:["raf"]}),/*!
	{
	  "name": "script[async]",
	  "property": "scriptasync",
	  "caniuse": "script-async",
	  "tags": ["script"],
	  "builderAliases": ["script_async"],
	  "authors": ["Theodoor van Donge"]
	}
	!*/
Modernizr.addTest("scriptasync","async"in createElement("script")),/*!
	{
	  "name": "script[defer]",
	  "property": "scriptdefer",
	  "caniuse": "script-defer",
	  "tags": ["script"],
	  "builderAliases": ["script_defer"],
	  "authors": ["Theodoor van Donge"],
	  "warnings": ["Browser implementation of the `defer` attribute vary: https://stackoverflow.com/questions/3952009/defer-attribute-chrome#answer-3982619"],
	  "knownBugs": ["False positive in Opera 12"]
	}
	!*/
Modernizr.addTest("scriptdefer","defer"in createElement("script")),/*!
	{
	  "name": "ServiceWorker API",
	  "property": "serviceworker",
	  "notes": [{
	    "name": "ServiceWorkers Explained",
	    "href": "https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md"
	  }]
	}
	!*/
Modernizr.addTest("serviceworker","serviceWorker"in navigator),/*!
	{
	  "authors": ["Cătălin Mariș"],
	  "name": "Speech Recognition API",
	  "notes": [
	    {
	      "name": "W3C Web Speech API Specification - The SpeechRecognition Interface",
	      "href": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#speechreco-section"
	    },
	    {
	      "name": "Introduction to the Web Speech API",
	      "href": "http://updates.html5rocks.com/2013/01/Voice-Driven-Web-Apps-Introduction-to-the-Web-Speech-API"
	    }
	  ],
	  "property": "speechrecognition",
	  "tags": ["input", "speech"]
	}
	!*/
Modernizr.addTest("speechrecognition",!!prefixed("SpeechRecognition",window)),/*!
	{
	  "authors": ["Cătălin Mariș"],
	  "name": "Speech Synthesis API",
	  "notes": [
	    {
	      "name": "W3C Web Speech API Specification - The SpeechSynthesis Interface",
	      "href": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html#tts-section"
	    }
	  ],
	  "property": "speechsynthesis",
	  "tags": ["input", "speech"]
	}
	!*/
Modernizr.addTest("speechsynthesis","SpeechSynthesisUtterance"in window),/*!
	{
	  "name": "Local Storage",
	  "property": "localstorage",
	  "caniuse": "namevalue-storage",
	  "tags": ["storage"],
	  "knownBugs": [],
	  "notes": [],
	  "warnings": [],
	  "polyfills": [
	    "joshuabell-polyfill",
	    "cupcake",
	    "storagepolyfill",
	    "amplifyjs",
	    "yui-cacheoffline"
	  ]
	}
	!*/
Modernizr.addTest("localstorage",function(){var A="modernizr";try{return localStorage.setItem(A,A),localStorage.removeItem(A),!0}catch(e){return!1}}),/*!
	{
	  "name": "Session Storage",
	  "property": "sessionstorage",
	  "tags": ["storage"],
	  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
	}
	!*/
Modernizr.addTest("sessionstorage",function(){var A="modernizr";try{return sessionStorage.setItem(A,A),sessionStorage.removeItem(A),!0}catch(e){return!1}}),/*!
	{
	  "name": "Web SQL Database",
	  "property": "websqldatabase",
	  "caniuse": "sql-storage",
	  "tags": ["storage"]
	}
	!*/
Modernizr.addTest("websqldatabase","openDatabase"in window),/*!
	{
	  "name": "style[scoped]",
	  "property": "stylescoped",
	  "caniuse": "style-scoped",
	  "tags": ["dom"],
	  "builderAliases": ["style_scoped"],
	  "authors": ["Cătălin Mariș"],
	  "notes": [{
	    "name": "WHATWG Specification",
	    "href": "https://html.spec.whatwg.org/multipage/semantics.html#attr-style-scoped"
	  }],
	  "polyfills": ["scoped-styles"]
	}
	!*/
Modernizr.addTest("stylescoped","scoped"in createElement("style")),/*!
	{
	  "name": "SVG",
	  "property": "svg",
	  "caniuse": "svg",
	  "tags": ["svg"],
	  "authors": ["Erik Dahlstrom"],
	  "polyfills": [
	    "svgweb",
	    "raphael",
	    "amplesdk",
	    "canvg",
	    "svg-boilerplate",
	    "sie",
	    "dojogfx",
	    "fabricjs"
	  ]
	}
	!*/
Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),/*!
	{
	  "name": "SVG as an <img> tag source",
	  "property": "svgasimg",
	  "caniuse" : "svg-img",
	  "tags": ["svg"],
	  "authors": ["Chris Coyier"],
	  "notes": [{
	    "name": "HTML5 Spec",
	    "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
	  }]
	}
	!*/
Modernizr.addTest("svgasimg",document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var toStringFn={}.toString;/*!
	{
	  "name": "SVG clip paths",
	  "property": "svgclippaths",
	  "tags": ["svg"],
	  "notes": [{
	    "name": "Demo",
	    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
	  }]
	}
	!*/
Modernizr.addTest("svgclippaths",function(){return!!document.createElementNS&&/SVGClipPath/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),/*!
	{
	  "name": "SVG filters",
	  "property": "svgfilters",
	  "caniuse": "svg-filters",
	  "tags": ["svg"],
	  "builderAliases": ["svg_filters"],
	  "authors": ["Erik Dahlstrom"],
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "https://www.w3.org/TR/SVG11/filters.html"
	  }]
	}
	!*/
Modernizr.addTest("svgfilters",function(){var A=!1;try{A="SVGFEColorMatrixElement"in window&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(e){}return A}),/*!
	{
	  "name": "SVG foreignObject",
	  "property": "svgforeignobject",
	  "tags": ["svg"],
	  "notes": [{
	    "name": "W3C Spec",
	    "href": "https://www.w3.org/TR/SVG11/extend.html"
	  }]
	}
	!*/
Modernizr.addTest("svgforeignobject",function(){return!!document.createElementNS&&/SVGForeignObject/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")))}),/*!
	{
	  "name": "Inline SVG",
	  "property": "inlinesvg",
	  "caniuse": "svg-html5",
	  "tags": ["svg"],
	  "notes": [{
	    "name": "Test page",
	    "href": "https://paulirish.com/demo/inline-svg"
	  }, {
	    "name": "Test page and results",
	    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
	  }],
	  "polyfills": ["inline-svg-polyfill"],
	  "knownBugs": ["False negative on some Chromia browsers."]
	}
	!*/
Modernizr.addTest("inlinesvg",function(){var A=createElement("div");return A.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&A.firstChild&&A.firstChild.namespaceURI)}),/*!
	{
	  "name": "SVG SMIL animation",
	  "property": "smil",
	  "caniuse": "svg-smil",
	  "tags": ["svg"],
	  "notes": [{
	  "name": "W3C Synchronised Multimedia spec",
	  "href": "https://www.w3.org/AudioVideo/"
	  }]
	}
	!*/
Modernizr.addTest("smil",function(){return!!document.createElementNS&&/SVGAnimate/.test(toStringFn.call(document.createElementNS("http://www.w3.org/2000/svg","animate")))}),/*!
	{
	  "name": "Template strings",
	  "property": "templatestrings",
	  "notes": [{
	    "name": "MDN Reference",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings#Browser_compatibility"
	  }]
	}
	!*/
Modernizr.addTest("templatestrings",function(){var supports;try{eval("``"),supports=!0}catch(e){}return!!supports}),/*!
	{
	  "name": "Scroll Snap Points",
	  "property": "scrollsnappoints",
	  "notes": [{
	    "name": "Setting native-like scrolling offsets in CSS with Scrolling Snap Points",
	    "href": "http://generatedcontent.org/post/66817675443/setting-native-like-scrolling-offsets-in-css-with"
	  },{
	    "name": "MDN Article",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap_Points"
	  }],
	  "polyfills": ["scrollsnap"]
	}
	!*/
Modernizr.addTest("scrollsnappoints",testAllProps("scrollSnapType")),/*!
	{
	  "name": "bdi Element",
	  "property": "bdi",
	  "notes": [{
	    "name": "MDN Overview",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"
	  }]
	}
	!*/
Modernizr.addTest("bdi",function(){var A=createElement("div"),e=createElement("bdi");e.innerHTML="&#1573;",A.appendChild(e),docElement.appendChild(A);var t="rtl"===(window.getComputedStyle?getComputedStyle(e,null):e.currentStyle).direction;return docElement.removeChild(A),t}),/*!
	{
	  "name": "Image crossOrigin",
	  "property": "imgcrossorigin",
	  "notes": [{
	    "name": "Cross Domain Images and the Tainted Canvas",
	    "href": "https://blog.codepen.io/2013/10/08/cross-domain-images-tainted-canvas/"
	  }]
	}
	!*/
Modernizr.addTest("imgcrossorigin","crossOrigin"in createElement("img")),/*!
	{
	  "name": "Font Ligatures",
	  "property": "ligatures",
	  "caniuse": "font-feature",
	  "notes": [{
	    "name": "Cross-browser Web Fonts",
	    "href": "http://www.sitepoint.com/cross-browser-web-fonts-part-3/"
	  }]
	}
	!*/
Modernizr.addTest("ligatures",testAllProps("fontFeatureSettings",'"liga" 1')),/*!
	{
	  "name": "textarea maxlength",
	  "property": "textareamaxlength",
	  "aliases": ["textarea-maxlength"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"
	  }],
	  "polyfills": [
	    "maxlength"
	  ]
	}
	!*/
Modernizr.addTest("textareamaxlength",!!("maxLength"in createElement("textarea"))),/*!
	{
	  "name": "Touch Events",
	  "property": "touchevents",
	  "caniuse" : "touch",
	  "tags": ["media", "attribute"],
	  "notes": [{
	    "name": "Touch Events spec",
	    "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
	  }],
	  "warnings": [
	    "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
	  ],
	  "knownBugs": [
	    "False-positive on some configurations of Nokia N900",
	    "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
	  ]
	}
	!*/
Modernizr.addTest("touchevents",function(){var A;if("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)A=!0;else{var e=["@media (",prefixes.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");testStyles(e,function(e){A=9===e.offsetTop})}return A}),/*!
	{
	  "name": "Typed arrays",
	  "property": "typedarrays",
	  "caniuse": "typedarrays",
	  "tags": ["js"],
	  "authors": ["Stanley Stuart (@fivetanley)"],
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/JavaScript_typed_arrays"
	  },{
	    "name": "Kronos spec",
	    "href": "https://www.khronos.org/registry/typedarray/specs/latest/"
	  }],
	  "polyfills": ["joshuabell-polyfill"]
	}
	!*/
Modernizr.addTest("typedarrays","ArrayBuffer"in window),/*!
	{
	  "name": "Unicode characters",
	  "property": "unicode",
	  "tags": ["encoding"],
	  "warnings": [
	    "positive Unicode support doesn't mean you can use it inside <title>, this seems more related to OS & Language packs"
	  ]
	}
	!*/
Modernizr.addTest("unicode",function(){var A,e=createElement("span"),t=createElement("span");return testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}",function(n){e.innerHTML=isSVG?"妇":"&#5987",t.innerHTML=isSVG?"☆":"&#9734",n.appendChild(e),n.appendChild(t),A="offsetWidth"in e&&e.offsetWidth!==t.offsetWidth}),A}),/*!
	{
	  "name": "Unicode Range",
	  "property": "unicoderange",
	  "notes": [{
	    "name" : "W3C reference",
	    "href": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#descdef-unicode-range"
	  }, {
	    "name" : "24 Way article",
	    "href": "https://24ways.org/2011/creating-custom-font-stacks-with-unicode-range"
	  }]
	}
	!*/
Modernizr.addTest("unicoderange",function(){return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+0020,U+002E}#modernizr span{font-size:20px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}',function(A){for(var e=[".",".","m","m"],t=0;t<e.length;t++){var n=createElement("span");n.innerHTML=e[t],n.className=t%2?"mono":"",A.appendChild(n),e[t]=n.clientWidth}return e[0]!==e[1]&&e[2]===e[3]})});/*!
	{
	  "name": "Blob URLs",
	  "property": "bloburls",
	  "caniuse": "bloburls",
	  "notes": [{
	    "name": "W3C Working Draft",
	    "href": "https://www.w3.org/TR/FileAPI/#creating-revoking"
	  }],
	  "tags": ["file", "url"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"]
	}
	!*/
var url=prefixed("URL",window,!1);url=url&&window[url],Modernizr.addTest("bloburls",url&&"revokeObjectURL"in url&&"createObjectURL"in url),/*!
	{
	  "name": "Data URI",
	  "property": "datauri",
	  "caniuse": "datauri",
	  "tags": ["url"],
	  "builderAliases": ["url_data_uri"],
	  "async": true,
	  "notes": [{
	    "name": "Wikipedia article",
	    "href": "https://en.wikipedia.org/wiki/Data_URI_scheme"
	  }],
	  "warnings": ["Support in Internet Explorer 8 is limited to images and linked resources like CSS files, not HTML files"]
	}
	!*/
Modernizr.addAsyncTest(function(){function A(){var A=new Image;A.onerror=function(){addTest("datauri",!0),Modernizr.datauri=new Boolean((!0)),Modernizr.datauri.over32kb=!1},A.onload=function(){addTest("datauri",!0),Modernizr.datauri=new Boolean((!0)),Modernizr.datauri.over32kb=1==A.width&&1==A.height};for(var e="R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e.length<33e3;)e="\r\n"+e;A.src="data:image/gif;base64,"+e}navigator.userAgent.indexOf("MSIE 7.")!==-1&&setTimeout(function(){addTest("datauri",!1)},10);var e=new Image;e.onerror=function(){addTest("datauri",!1)},e.onload=function(){1==e.width&&1==e.height?A():addTest("datauri",!1)},e.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}),/*!
	{
	  "name": "URL parser",
	  "property": "urlparser",
	  "notes": [{
	    "name": "URL",
	    "href": "https://dvcs.w3.org/hg/url/raw-file/tip/Overview.html"
	  }],
	  "polyfills": ["urlparser"],
	  "authors": ["Ron Waldon (@jokeyrhyme)"],
	  "tags": ["url"]
	}
	!*/
Modernizr.addTest("urlparser",function(){var A;try{return A=new URL("http://modernizr.com/"),"http://modernizr.com/"===A.href}catch(e){return!1}}),/*!
	{
	  "name": "IE User Data API",
	  "property": "userdata",
	  "tags": ["storage"],
	  "authors": ["@stereobooster"],
	  "notes": [{
	    "name": "MSDN Documentation",
	    "href": "https://msdn.microsoft.com/en-us/library/ms531424.aspx"
	  }]
	}
	!*/
Modernizr.addTest("userdata",!!createElement("div").addBehavior),/*!
	{
	  "name": "Vibration API",
	  "property": "vibrate",
	  "notes": [{
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en/DOM/window.navigator.mozVibrate"
	  },{
	    "name": "W3C spec",
	    "href": "https://www.w3.org/TR/vibration/"
	  }]
	}
	!*/
Modernizr.addTest("vibrate",!!prefixed("vibrate",navigator)),/*!
	{
	  "name": "HTML5 Video",
	  "property": "video",
	  "caniuse": "video",
	  "tags": ["html5"],
	  "knownBugs": [
	    "Without QuickTime, `Modernizr.video.h264` will be `undefined`; https://github.com/Modernizr/Modernizr/issues/546"
	  ],
	  "polyfills": [
	    "html5media",
	    "mediaelementjs",
	    "sublimevideo",
	    "videojs",
	    "leanbackplayer",
	    "videoforeverybody"
	  ]
	}
	!*/
Modernizr.addTest("video",function(){var A=createElement("video"),e=!1;try{(e=!!A.canPlayType)&&(e=new Boolean(e),e.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),e.vp9=A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),e.hls=A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return e}),/*!
	{
	  "name": "Video Autoplay",
	  "property": "videoautoplay",
	  "tags": ["video"],
	  "async" : true,
	  "warnings": ["This test is very large – only include it if you absolutely need it"],
	  "knownBugs": ["crashes with an alert on iOS7 when added to homescreen"]
	}
	!*/
Modernizr.addAsyncTest(function(){function A(t){clearTimeout(e),n.removeEventListener("playing",A,!1),addTest("videoautoplay",t&&"playing"===t.type||0!==n.currentTime),n.parentNode.removeChild(n)}var e,t=300,n=createElement("video"),r=n.style;if(!(Modernizr.video&&"autoplay"in n))return void addTest("videoautoplay",!1);r.position="absolute",r.height=0,r.width=0;try{if(Modernizr.video.ogg)n.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void addTest("videoautoplay",!1);n.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(o){return void addTest("videoautoplay",!1)}n.setAttribute("autoplay",""),n.style.cssText="display:none",docElement.appendChild(n),setTimeout(function(){n.addEventListener("playing",A,!1),e=setTimeout(A,t)},0)}),/*!
	{
	  "name": "Video Loop Attribute",
	  "property": "videoloop",
	  "tags": ["video", "media"]
	}
	!*/
Modernizr.addTest("videoloop","loop"in createElement("video")),/*!
	{
	  "name": "Video Preload Attribute",
	  "property": "videopreload",
	  "tags": ["video", "media"]
	}
	!*/
Modernizr.addTest("videopreload","preload"in createElement("video")),/*!
	{
	  "name": "VML",
	  "property": "vml",
	  "caniuse": "vml",
	  "tags": ["vml"],
	  "authors": ["Craig Andrews (@candrews)"],
	  "notes": [{
	    "name" : "W3C VML reference",
	    "href": "https://www.w3.org/TR/NOTE-VML"
	  },{
	    "name" : "Microsoft VML reference",
	    "href": "https://msdn.microsoft.com/en-us/library/bb263898.aspx"
	  }]
	}
	!*/
Modernizr.addTest("vml",function(){var A,e=createElement("div"),t=!1;return isSVG||(e.innerHTML='<v:shape id="vml_flag1" adj="1" />',A=e.firstChild,A.style.behavior="url(#default#VML)",t=!A||"object"==typeof A.adj),t}),/*!
	{
	  "name": "Web Intents",
	  "property": "webintents",
	  "authors": ["Eric Bidelman"],
	  "notes": [{
	    "name": "Web Intents project site",
	    "href": "http://webintents.org/"
	  }],
	  "polyfills": ["webintents"],
	  "builderAliases": ["web_intents"]
	}
	!*/
Modernizr.addTest("webintents",!!prefixed("startActivity",navigator)),/*!
	{
	  "name": "Web Animation API",
	  "property": "animation",
	  "tags": ["webanimations"],
	  "polyfills": ["webanimationsjs"],
	  "notes": [{
	    "name": "Introducing Web Animations",
	    "href": "http://brian.sol1.net/svg/2013/06/26/introducing-web-animations/"
	  }]
	}
	!*/
Modernizr.addTest("webanimations","animate"in createElement("div")),/*!
	{
	  "name": "WebGL",
	  "property": "webgl",
	  "caniuse": "webgl",
	  "tags": ["webgl", "graphics"],
	  "polyfills": ["jebgl", "cwebgl", "iewebgl"]
	}
	!*/
Modernizr.addTest("webgl",function(){var A=createElement("canvas"),e="probablySupportsContext"in A?"probablySupportsContext":"supportsContext";return e in A?A[e]("webgl")||A[e]("experimental-webgl"):"WebGLRenderingContext"in window}),/*!
	{
	  "name": "WebGL Extensions",
	  "property": "webglextensions",
	  "tags": ["webgl", "graphics"],
	  "builderAliases": ["webgl_extensions"],
	  "async" : true,
	  "authors": ["Ilmari Heikkinen"],
	  "knownBugs": [],
	  "notes": [{
	    "name": "Kronos extensions registry",
	    "href": "http://www.khronos.org/registry/webgl/extensions/"
	  }]
	}
	!*/
Modernizr.addAsyncTest(function(){if(Modernizr.webglextensions=new Boolean((!1)),Modernizr.webgl){var A,e,t;try{A=createElement("canvas"),e=A.getContext("webgl")||A.getContext("experimental-webgl"),t=e.getSupportedExtensions()}catch(n){return}e!==undefined&&(Modernizr.webglextensions=new Boolean((!0)));for(var r=-1,o=t.length;++r<o;)Modernizr.webglextensions[t[r]]=!0;A=undefined}}),/*!
	{
	  "name": "RTC Peer Connection",
	  "property": "peerconnection",
	  "tags": ["webrtc"],
	  "authors": ["Ankur Oberoi"],
	  "notes": [{
	    "name": "W3C Web RTC spec",
	    "href": "https://www.w3.org/TR/webrtc/"
	  }]
	}
	!*/
Modernizr.addTest("peerconnection",!!prefixed("RTCPeerConnection",window)),/*!
	{
	  "name": "RTC Data Channel",
	  "property": "datachannel",
	  "notes": [{
	    "name": "HTML5 Rocks! Article",
	    "href": "http://www.html5rocks.com/en/tutorials/webrtc/datachannels/"
	  }]
	}
	!*/
Modernizr.addTest("datachannel",function(){if(!Modernizr.peerconnection)return!1;for(var A=0,e=domPrefixes.length;A<e;A++){var t=window[domPrefixes[A]+"RTCPeerConnection"];if(t){var n=new t({iceServers:[{url:"stun:0"}]});return"createDataChannel"in n}}return!1}),/*!
	{
	  "name": "getUserMedia",
	  "property": "getusermedia",
	  "caniuse": "stream",
	  "tags": ["webrtc"],
	  "authors": ["Eric Bidelman"],
	  "notes": [{
	    "name": "W3C Media Capture and Streams spec",
	    "href": "https://www.w3.org/TR/mediacapture-streams/"
	  }],
	  "polyfills": ["getusermedia"]
	}
	!*/
Modernizr.addTest("getusermedia",!!prefixed("getUserMedia",navigator)),/*!
	{
	  "name": "WebSockets Support",
	  "property": "websockets",
	  "authors": ["Phread [fearphage]", "Mike Sherov [mikesherov]", "Burak Yigit Kaya [BYK]"],
	  "caniuse": "websockets",
	  "tags": ["html5"],
	  "warnings": [
	    "This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"
	  ],
	  "notes": [{
	    "name": "CLOSING State and Spec",
	    "href": "https://www.w3.org/TR/websockets/#the-websocket-interface"
	  }],
	  "polyfills": [
	    "sockjs",
	    "socketio",
	    "kaazing-websocket-gateway",
	    "websocketjs",
	    "atmosphere",
	    "graceful-websocket",
	    "portal",
	    "datachannel"
	  ]
	}
	!*/
Modernizr.addTest("websockets","WebSocket"in window&&2===window.WebSocket.CLOSING),/*!
	{
	  "name": "Binary WebSockets",
	  "property": "websocketsbinary",
	  "tags": ["websockets"],
	  "builderAliases": ["websockets_binary"]
	}
	!*/
Modernizr.addTest("websocketsbinary",function(){var A,e="https:"==location.protocol?"wss":"ws";if("WebSocket"in window){if(A="binaryType"in WebSocket.prototype)return A;try{return!!new WebSocket(e+"://.").binaryType}catch(t){}}return!1}),/*!
	{
	  "name": "Framed window",
	  "property": "framed",
	  "tags": ["window"],
	  "builderAliases": ["window_framed"]
	}
	!*/
Modernizr.addTest("framed",window.location!=top.location),/*!
	{
	  "name": "Workers from Blob URIs",
	  "property": "blobworkers",
	  "tags": ["performance", "workers"],
	  "builderAliases": ["workers_blobworkers"],
	  "notes": [{
	    "name": "W3C Reference",
	    "href": "https://www.w3.org/TR/workers/"
	  }],
	  "knownBugs": ["This test may output garbage to console."],
	  "authors": ["Jussi Kalliokoski"],
	  "async": true
	}
	!*/
Modernizr.addAsyncTest(function(){function A(){addTest("blobworkers",!1),e()}function e(){d&&n.revokeObjectURL(d),i&&i.terminate(),a&&clearTimeout(a)}try{var t=window.BlobBuilder,n=window.URL;Modernizr._config.usePrefix&&(t=t||window.MozBlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.OBlobBuilder,n=n||window.MozURL||window.webkitURL||window.MSURL||window.OURL);var r,o,i,d,a,s="Modernizr",l="this.onmessage=function(e){postMessage(e.data)}";try{r=new Blob([l],{type:"text/javascript"})}catch(c){}r||(o=new t,o.append(l),r=o.getBlob()),d=n.createObjectURL(r),i=new Worker(d),i.onmessage=function(A){addTest("blobworkers",s===A.data),e()},i.onerror=A,a=setTimeout(A,200),i.postMessage(s)}catch(c){A()}}),/*!
	{
	  "name": "Workers from Data URIs",
	  "property": "dataworkers",
	  "tags": ["performance", "workers"],
	  "builderAliases": ["workers_dataworkers"],
	  "notes": [{
	    "name": "W3C Reference",
	    "href": "https://www.w3.org/TR/workers/"
	  }],
	  "knownBugs": ["This test may output garbage to console."],
	  "authors": ["Jussi Kalliokoski"],
	  "async": true
	}
	!*/
Modernizr.addAsyncTest(function(){try{var A="Modernizr",e=new Worker("data:text/javascript;base64,dGhpcy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7cG9zdE1lc3NhZ2UoZS5kYXRhKX0=");e.onmessage=function(t){e.terminate(),addTest("dataworkers",A===t.data),e=null},e.onerror=function(){addTest("dataworkers",!1),e=null},setTimeout(function(){addTest("dataworkers",!1)},200),e.postMessage(A)}catch(t){setTimeout(function(){addTest("dataworkers",!1)},0)}}),/*!
	{
	  "name": "Shared Workers",
	  "property": "sharedworkers",
	  "caniuse" : "sharedworkers",
	  "tags": ["performance", "workers"],
	  "builderAliases": ["workers_sharedworkers"],
	  "notes": [{
	    "name": "W3C Reference",
	    "href": "https://www.w3.org/TR/workers/"
	  }]
	}
	!*/
Modernizr.addTest("sharedworkers","SharedWorker"in window),/*!
	{
	  "name": "Web Workers",
	  "property": "webworkers",
	  "caniuse" : "webworkers",
	  "tags": ["performance", "workers"],
	  "notes": [{
	    "name": "W3C Reference",
	    "href": "https://www.w3.org/TR/workers/"
	  }, {
	    "name": "HTML5 Rocks article",
	    "href": "http://www.html5rocks.com/en/tutorials/workers/basics/"
	  }, {
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"
	  }],
	  "polyfills": ["fakeworker", "html5shims"]
	}
	!*/
Modernizr.addTest("webworkers","Worker"in window),/*!
	{
	  "name": "Transferables Objects",
	  "property": "transferables",
	  "tags": ["performance", "workers"],
	  "builderAliases": ["transferables"],
	  "notes": [{
	    "name": "HTML5 Rocks article",
	    "href": "http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast"
	  }],
	  "async": true
	}
	!*/
Modernizr.addAsyncTest(function(){function A(){addTest("transferables",!1),e()}function e(){d&&URL.revokeObjectURL(d),a&&a.terminate(),r&&clearTimeout(r)}var t=!!(Modernizr.blobconstructor&&Modernizr.bloburls&&Modernizr.webworkers&&Modernizr.typedarrays);if(!t)return addTest("transferables",!1);try{var n,r,o='var hello = "world"',i=new Blob([o],{type:"text/javascript"}),d=URL.createObjectURL(i),a=new Worker(d);a.onerror=A,r=setTimeout(A,200),n=new ArrayBuffer(1),a.postMessage(n,[n]),addTest("transferables",0===n.byteLength),e()}catch(s){A()}}),/*!
	{
	  "name": "XDomainRequest",
	  "property": "xdomainrequest",
	  "tags": ["cors", "xdomainrequest", "ie9", "ie8"],
	  "authors": ["Ivan Pan (@hypotenuse)"],
	  "notes": [
	  {
	    "name": "MDN documentation",
	    "href": "https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest"
	  },
	  {
	    "name": "MSDN documentation",
	    "href": "https://msdn.microsoft.com/library/ie/cc288060.aspx/"
	  }]
	}
	!*/
Modernizr.addTest("xdomainrequest","XDomainRequest"in window),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document)},function(A,e){},function(A,e){},function(A,e,t){A.exports=t.p+"205cc6e697917a94362ed6ed99febe71.mp3"}]);