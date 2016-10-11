/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-boxsizing-cssanimations-es5-flexbox-ie8compat-opacity-placeholder-strictmode-svg-setclasses !*/
!function(window,document,undefined){function is(e,t){return typeof e===t}function testRunner(){var e,t,r,n,o,s,i;for(var d in tests)if(tests.hasOwnProperty(d)){if(e=[],t=tests[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(r=0;r<t.options.aliases.length;r++)e.push(t.options.aliases[r].toLowerCase());for(n=is(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)s=e[o],i=s.split("."),1===i.length?Modernizr[i[0]]=n:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=n),classes.push((n?"":"no-")+i.join("-"))}}function setClasses(e){var t=docElement.className,r=Modernizr._config.classPrefix||"";if(isSVG&&(t=t.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+r+"no-js(\\s|$)");t=t.replace(n,"$1"+r+"js$2")}Modernizr._config.enableClasses&&(t+=" "+r+e.join(" "+r),isSVG?docElement.className.baseVal=t:docElement.className=t)}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function contains(e,t){return!!~(""+e).indexOf(t)}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,r){return t+r.toUpperCase()}).replace(/^-/,"")}function fnBind(e,t){return function(){return e.apply(t,arguments)}}function testDOMProps(e,t,r){var n;for(var o in e)if(e[o]in t)return r===!1?e[o]:(n=t[e[o]],is(n,"function")?fnBind(n,r||t):n);return!1}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function getBody(){var e=document.body;return e||(e=createElement(isSVG?"svg":"body"),e.fake=!0),e}function injectElementWithStyles(e,t,r,n){var o,s,i,d,a="modernizr",l=createElement("div"),c=getBody();if(parseInt(r,10))for(;r--;)i=createElement("div"),i.id=n?n[r]:a+(r+1),l.appendChild(i);return o=createElement("style"),o.type="text/css",o.id="s"+a,(c.fake?c:l).appendChild(o),c.appendChild(l),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),l.id=a,c.fake&&(c.style.background="",c.style.overflow="hidden",d=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(c)),s=t(l,e),c.fake?(c.parentNode.removeChild(c),docElement.style.overflow=d,docElement.offsetHeight):l.parentNode.removeChild(l),!!s}function nativeTestProps(e,t){var r=e.length;if("CSS"in window&&"supports"in window.CSS){for(;r--;)if(window.CSS.supports(domToCSS(e[r]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var n=[];r--;)n.push("("+domToCSS(e[r])+":"+t+")");return n=n.join(" or "),injectElementWithStyles("@supports ("+n+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return undefined}function testProps(e,t,r,n){function o(){i&&(delete mStyle.style,delete mStyle.modElem)}if(n=is(n,"undefined")?!1:n,!is(r,"undefined")){var s=nativeTestProps(e,r);if(!is(s,"undefined"))return s}for(var i,d,a,l,c,u=["modernizr","tspan","samp"];!mStyle.style&&u.length;)i=!0,mStyle.modElem=createElement(u.shift()),mStyle.style=mStyle.modElem.style;for(a=e.length,d=0;a>d;d++)if(l=e[d],c=mStyle.style[l],contains(l,"-")&&(l=cssToDOM(l)),mStyle.style[l]!==undefined){if(n||is(r,"undefined"))return o(),"pfx"==t?l:!0;try{mStyle.style[l]=r}catch(f){}if(mStyle.style[l]!=c)return o(),"pfx"==t?l:!0}return o(),!1}function testPropsAll(e,t,r,n,o){var s=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+cssomPrefixes.join(s+" ")+s).split(" ");return is(t,"string")||is(t,"undefined")?testProps(i,t,n,o):(i=(e+" "+domPrefixes.join(s+" ")+s).split(" "),testDOMProps(i,t,r))}function testAllProps(e,t,r){return testPropsAll(e,undefined,undefined,t,r)}var classes=[],tests=[],ModernizrProto={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var r=this;setTimeout(function(){t(r[e])},0)},addTest:function(e,t,r){tests.push({name:e,fn:t,options:r})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr,Modernizr.addTest("ie8compat",!window.addEventListener&&!!document.documentMode&&7===document.documentMode),Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("strictmode",function(){"use strict";return!this}());var docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase();Modernizr.addTest("placeholder","placeholder"in createElement("input")&&"placeholder"in createElement("textarea"));var prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];ModernizrProto._prefixes=prefixes,Modernizr.addTest("opacity",function(){var e=createElement("a").style;return e.cssText=prefixes.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("es5array",function(){return!!(Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray)}),Modernizr.addTest("es5date",function(){var e="2013-04-12T06:06:37.307Z",t=!1;try{t=!!Date.parse(e)}catch(r){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&t)}),Modernizr.addTest("es5function",function(){return!(!Function.prototype||!Function.prototype.bind)}),Modernizr.addTest("es5object",function(){return!!(Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions)}),Modernizr.addTest("es5string",function(){return!(!String.prototype||!String.prototype.trim)}),Modernizr.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("es5syntax",function(){var value,obj,stringAccess,getter,setter,reservedWords,zeroWidthChars;try{return stringAccess=eval('"foobar"[3] === "b"'),getter=eval("({ get x(){ return 1 } }).x === 1"),eval("({ set x(v){ value = v; } }).x = 1"),setter=1===value,eval("obj = ({ if: 1 })"),reservedWords=1===obj["if"],zeroWidthChars=eval("_‌‍ = true"),stringAccess&&getter&&setter&&reservedWords&&zeroWidthChars}catch(ignore){return!1}}),Modernizr.addTest("es5undefined",function(){var e,t;try{t=window.undefined,window.undefined=12345,e="undefined"==typeof window.undefined,window.undefined=t}catch(r){return!1}return e}),Modernizr.addTest("es5",function(){return!!(Modernizr.es5array&&Modernizr.es5date&&Modernizr.es5function&&Modernizr.es5object&&Modernizr.strictmode&&Modernizr.es5string&&Modernizr.json&&Modernizr.es5syntax&&Modernizr.es5undefined)});var omPrefixes="Moz O ms Webkit",cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style}),ModernizrProto.testAllProps=testPropsAll,ModernizrProto.testAllProps=testAllProps,Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),Modernizr.addTest("boxsizing",testAllProps("boxSizing","border-box",!0)&&(document.documentMode===undefined||document.documentMode>7)),Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0)),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document);