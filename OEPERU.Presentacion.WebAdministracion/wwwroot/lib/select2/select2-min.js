!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","react","react-dom"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Select2={},e.React,e.ReactDOM)}(this,function(e,t,r){"use strict";function n(r){if(r&&r.__esModule)return r;var n=Object.create(null);return r&&Object.keys(r).forEach(function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(r,e),Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}}))}),n.default=r,Object.freeze(n)}var i=n(t),o=n(r),s=function(e,t){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function d(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return{value:(e=e&&n>=e.length?void 0:e)&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var a=[{l:"a",s:/[ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ]/gi},{l:"aa",s:/ꜳ/gi},{l:"ae",s:/[æǽǣ]/gi},{l:"ao",s:/ꜵ/gi},{l:"au",s:/ꜷ/gi},{l:"av",s:/[ꜹꜻ]/gi},{l:"ay",s:/ꜽ/gi},{l:"b",s:/[ⓑｂḃḅḇƀƃɓ]/gi},{l:"c",s:/[ⓒｃćĉċčçḉƈȼꜿↄ]/gi},{l:"d",s:/[ⓓｄḋďḍḑḓḏđƌɖɗꝺ]/gi},{l:"dz",s:/[ǳǆ]/gi},{l:"e",s:/[ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ]/gi},{l:"f",s:/[ⓕｆḟƒꝼ]/gi},{l:"g",s:/[ⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ]/gi},{l:"h",s:/[ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ]/gi},{l:"hv",s:/ƕ/gi},{l:"i",s:/[ⓘｉìíîĩīĭİïḯỉǐȉȋịįḭɨı]/gi},{l:"j",s:/[ⓙｊĵǰɉ]/gi},{l:"k",s:/[ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ]/gi},{l:"l",s:/[ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇꝆ]/gi},{l:"lj",s:/ǉ/gi},{l:"m",s:/[ⓜｍḿṁṃɱɯ]/gi},{l:"n",s:/[ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ]/gi},{l:"nj",s:/ǌ/gi},{l:"o",s:/[ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔƟꝋꝍɵ]/gi},{l:"oi",s:/ƣ/gi},{l:"oe",s:/œ/gi},{l:"oo",s:/ꝏ/gi},{l:"ou",s:/ȣ/gi},{l:"p",s:/[ⓟｐṕṗƥᵽꝑꝓꝕ]/gi},{l:"q",s:/[ⓠｑɋꝗꝙ]/gi},{l:"r",s:/[ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ]/gi},{l:"s",s:/[ⓢｓßẞśṥŝṡšṧṣṩșşȿꞩꞅẛ]/gi},{l:"t",s:/[ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ]/gi},{l:"tz",s:/ꜩ/gi},{l:"u",s:/[ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ]/gi},{l:"v",s:/[ⓥｖṽṿʋꝟʌ]/gi},{l:"vy",s:/ꝡ/gi},{l:"w",s:/[ⓦｗẁẃŵẇẅẘẉⱳ]/gi},{l:"x",s:/[ⓧｘẋẍ]/gi},{l:"y",s:/[ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ]/gi},{l:"z",s:/[ⓩｚźẑżžẓẕƶȥɀⱬꝣ]/gi}];function u(e,t){var r,n,o,i;try{for(var s=d(e),l=s.next();!l.done;l=s.next()){var a=l.value,u=a.options;if(u)try{for(var c=(o=void 0,d(u)),p=c.next();!p.done;p=c.next()){var h=p.value;if(h.value===t)return h}}catch(e){o={error:e}}finally{try{p&&!p.done&&(i=c.return)&&i.call(c)}finally{if(o)throw o.error}}else if(a.value===t)return a}}catch(e){r={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return null}function c(e,t,r){var n,o;if(r){var r=Array.isArray(t)?t:[],i=[];try{for(var s=d(r),l=s.next();!l.done;l=s.next()){var a=u(e,l.value);a&&i.push(a)}}catch(e){n={error:e}}finally{try{l&&!l.done&&(o=s.return)&&o.call(s)}finally{if(n)throw n.error}}return i}return u(e,t)}function p(e){var t,r,n,o;try{for(var i=d(e),s=i.next();!s.done;s=i.next()){var l=s.value,a=l.options;if(a)try{for(var u,c=(n=void 0,d(a)),p=c.next();!p.done;p=c.next())if(!(u=p.value).disabled)return u.value}catch(e){n={error:e}}finally{try{p&&!p.done&&(o=c.return)&&o.call(c)}finally{if(n)throw n.error}}else if(!(u=l).disabled)return u.value}}catch(e){t={error:e}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return null}function h(e,t){var r,n,o,i;if(m(t))return!0;try{for(var s=d(e),l=s.next();!l.done;l=s.next()){var a=l.value,u=a.options;if(u)try{for(var c=(o=void 0,d(u)),p=c.next();!p.done;p=c.next())if(p.value.value===t)return!1}catch(e){o={error:e}}finally{try{p&&!p.done&&(i=c.return)&&i.call(c)}finally{if(o)throw o.error}}else if(a.value===t)return!1}}catch(e){r={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return!0}function f(e,t){for(var r=m(t),n=e.length-1;0<=n;n--){var o=e[n],i=o.options;if(i)for(var s=i.length-1;0<=s;s--){var l=i[s];if(r&&!l.disabled)return l.value;r=l.value===t}else{l=o;if(r&&!l.disabled)return l.value;r=l.value===t}}return r?t:null}function v(e,t){var r,n,o,i,s=m(t);try{for(var l=d(e),a=l.next();!a.done;a=l.next()){var u=a.value,c=u.options;if(c)try{for(var p=(o=void 0,d(c)),h=p.next();!h.done;h=p.next()){var f=h.value;if(s){if(!f.disabled)return f.value}else s=f.value===t}}catch(e){o={error:e}}finally{try{h&&!h.done&&(i=p.return)&&i.call(p)}finally{if(o)throw o.error}}else{f=u;if(s){if(!f.disabled)return f.value}else s=f.value===t}}}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return s?t:null}function m(e){return null==e}function y(e,t,r,n){if(m(e))return t.scrollTop=0;var o,e=function(e,t){var r,n,o=0;try{for(var i=d(e),s=i.next();!s.done;s=i.next()){var l=s.value,a=l.options;if(a){o++;var u=a.findIndex(function(e){return e.value===t});if(-1!==u)return o+u;o+=a.length}else{if(l.value===t)return o;o++}}}catch(e){r={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return 0}(r,e);return 5<e-n?(n+=e-n-5,(o=t.querySelectorAll("li").item(e))&&(t.scrollTop=o.offsetTop-t.offsetHeight),n):0<n-e?(n-=n-e,(o=t.querySelectorAll("li").item(n-1))&&(t.scrollTop=o.offsetTop),n):null}function g(e,t,r){return!t||null!==S(e).match(new RegExp(function(e,t){e=S(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")),t&&"function"==typeof t&&(e=t(e));return e}(t,r),"i"))}function S(e){var t,r;try{for(var n=d(a),o=n.next();!o.done;o=n.next()){var i=o.value;e=e.replace(i.s,i.l)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}return e}function b(e,t,r){var n,o;if(t){var i=[];try{for(var s=d(e),l=s.next();!l.done;l=s.next()){var a,u=l.value,c=u.options;c?c.some(function(e){return g(e.label,t,r)})&&(a=c.filter(function(e){return g(e.label,t,r)}),i.push({label:u.label,options:a})):g(u.label,t,r)&&i.push(u)}}catch(e){n={error:e}}finally{try{l&&!l.done&&(o=s.return)&&o.call(s)}finally{if(n)throw n.error}}return i}return e}function x(e,t){var r=e.classes?" "+e.classes:"";return e.value===t?"select2-results__option select2-results__option--highlighted"+r:"select2-results__option"+r}function E(e){return e?"select2-container select2-container--default select2-container-dropdown select2-container--open":"select2-container select2-container--default select2-container-dropdown"}function T(e,t){return"select2 select2-container select2-container--default "+((e=void 0===e?void 0:e)?"select2-container--disabled":"")+" "+(t?"select2-container--open":"")+" select2-container--below select2-container--focus"}function O(e){return"select2-selection select2-selection--"+((e=void 0===e?void 0:e)?"multiple":"single")}function k(e,t){return"number"!=typeof t&&(t=6),function(e){var t,r,n=0;try{for(var o=d(e),i=o.next();!i.done;i=o.next()){var s=i.value.options;s?n+=s.length:n++}}catch(e){t={error:e}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return n}(e)<t}function _(e){return e?"select2-search select2-search--dropdown select2-search--hide":"select2-search select2-search--dropdown"}function w(e,t,r){return r?e&&e.some(function(e){return e.value===t.value})?"true":"false":e&&t.value===e.value?"true":"false"}function V(e,t){for(var r=0;r<e.length;r++)if(e[r].value===t.value)return void e.splice(r,1)}var N,t=(l(D,N=i.PureComponent),Object.defineProperty(D.prototype,"searchText",{get:function(){return this.innerSearchText},set:function(e){this.props.customSearchEnabled&&this.props.search&&this.props.search(e),this.innerSearchText=e},enumerable:!1,configurable:!0}),Object.defineProperty(D.prototype,"dropdownStyle",{get:function(){return E(this.isOpen)},enumerable:!1,configurable:!0}),Object.defineProperty(D.prototype,"containerStyle",{get:function(){return T(this.props.disabled,this.isOpen)},enumerable:!1,configurable:!0}),Object.defineProperty(D.prototype,"selectionStyle",{get:function(){return O(this.props.multiple)},enumerable:!1,configurable:!0}),Object.defineProperty(D.prototype,"isSearchboxHidden",{get:function(){return!this.props.customSearchEnabled&&k(this.props.data,this.props.minCountForSearch)},enumerable:!1,configurable:!0}),Object.defineProperty(D.prototype,"searchStyle",{get:function(){return _(this.isSearchboxHidden)},enumerable:!1,configurable:!0}),D.prototype.UNSAFE_componentWillReceiveProps=function(e){var t=this;e.value!==this.value&&(this.value=e.value,this.setState({value:e.value},function(){t.updateOptionAndHoveringValue()}))},D.prototype.updateOptionAndHoveringValue=function(){var e=c(this.props.data,this.value,this.props.multiple);null!==e&&(this.option=e,this.setState({option:this.option})),Array.isArray(e)||(this.hoveringValue=this.value),this.setState({hoveringValue:this.hoveringValue})},D.prototype.UNSAFE_componentWillMount=function(){this.updateOptionAndHoveringValue()},D.prototype.componentDidMount=function(){var e=o.findDOMNode(this);this.searchInputElement=e.childNodes[1].childNodes[0].childNodes[0].childNodes[0],this.resultsElement=e.childNodes[1].childNodes[0].childNodes[1].childNodes[0],this.mounted=!0,this.value=this.props.value},D.prototype.componentWillUnmount=function(){this.mounted=!1,this.cancelFocusoutTimer()},D.prototype.render=function(){var t=this,e=this.renderResult(),r=this.renderSelection();return i.createElement("div",{className:this.containerStyle},i.createElement("div",{className:"selection",onClick:function(){return t.toggleOpenAndClose()}},i.createElement("div",{className:this.selectionStyle,role:"combobox"},r)),i.createElement("div",{className:this.dropdownStyle},i.createElement("div",{className:"select2-dropdown select2-dropdown--below"},i.createElement("div",{className:this.searchStyle},i.createElement("input",{value:this.searchText,onChange:this.onChange,onKeyDown:function(e){return t.keyDown(e)},onKeyUp:function(e){return t.keyUp(e)},onKeyPress:function(e){return t.keyPress(e)},onFocus:function(){return t.cancelFocusoutTimer()},onBlur:function(){return t.focusout()},className:"select2-search__field",type:"search",role:"textbox",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",maxLength:this.props.maximumInputLength,spellCheck:!1})),i.createElement("div",{className:"select2-results"},i.createElement("ul",{className:"select2-results__options",role:"tree",tabIndex:-1,onKeyDown:function(e){return t.keyDown(e)},onFocus:function(){return t.cancelFocusoutTimer()},onBlur:function(){return t.focusout()}},e)))))},D.prototype.renderSelection=function(){var r=this;if(this.props.multiple){var e=this.option.map(function(t,e){return i.createElement("li",{className:"select2-selection__choice",title:t.label,key:e},i.createElement("span",{onClick:function(e){return r.removeSelection(e,t)},className:"select2-selection__choice__remove",role:"presentation"},"×"),t.label)});return i.createElement("ul",{className:"select2-selection__rendered"},e)}var t=this.option,e=t?t.component?i.createElement(t.component,{option:t}):t.label:i.createElement("span",{className:"select2-selection__placeholder"},this.props.placeholder);return[i.createElement("span",{key:"label",className:"select2-selection__rendered",title:t?t.label:""},e),i.createElement("span",{key:"arrow",className:"select2-selection__arrow",role:"presentation"},i.createElement("b",{role:"presentation"}))]},D.prototype.renderResult=function(){var o=this;return this.getFilteredData(!1).map(function(e,t){var r=e.options;if(r){r=r.map(function(e,t){var r=e.component?i.createElement(e.component,{option:e}):e.label;return i.createElement("li",{className:o.getOptionStyle(e),key:t,role:"treeitem","aria-selected":o.isSelected(e),"aria-disabled":o.isDisabled(e),onMouseEnter:function(){return o.mouseenter(e)},onClick:function(){return o.click(e)}},r)});return i.createElement("li",{className:"select2-results__option",role:"group",key:t},i.createElement("strong",{className:"select2-results__group"},e.label),i.createElement("ul",{className:"select2-results__options select2-results__options--nested"},r))}var n=e,e=n.component?i.createElement(n.component,{option:n}):n.label;return i.createElement("li",{className:o.getOptionStyle(n),key:t,role:"treeitem","aria-selected":o.isSelected(n),"aria-disabled":o.isDisabled(n),onMouseEnter:function(){return o.mouseenter(n)},onClick:function(){return o.click(n)}},e)})},D.prototype.getFilteredData=function(e){var t,r=this.props.customSearchEnabled||this.props.minimumInputLength&&this.props.minimumInputLength>this.searchText.length?this.props.data:b(this.props.data,this.searchText);return h(r,this.hoveringValue)&&(this.hoveringValue=p(r),e&&this.setState({hoveringValue:this.hoveringValue}),!this.resultsElement||null!==(t=y(this.hoveringValue,this.resultsElement,r,this.lastScrollTopIndex))&&(this.lastScrollTopIndex=t,e&&this.setState({lastScrollTopIndex:this.lastScrollTopIndex}))),r},D.prototype.getOptionStyle=function(e){return x(e,this.hoveringValue)},D.prototype.mouseenter=function(e){e.disabled||(this.hoveringValue=e.value,this.setState({hoveringValue:this.hoveringValue}))},D.prototype.click=function(e){e.disabled||this.select(e),this.focusoutTimer&&clearTimeout(this.focusoutTimer)},D.prototype.toggleOpenAndClose=function(){var t=this;this.props.disabled||(this.isOpen=!this.isOpen,this.setState({isOpen:this.isOpen}),this.isOpen&&(this.props.keepSearchText||(this.innerSearchText=""),this.setState({searchText:this.searchText},function(){var e;t.focusSearchboxOrResultsElement(),!t.resultsElement||null!==(e=y(t.hoveringValue,t.resultsElement,t.props.data,t.lastScrollTopIndex))&&(t.lastScrollTopIndex=e)}),this.props.open&&this.props.open()),this.focusoutTimer&&clearTimeout(this.focusoutTimer))},D.prototype.focusout=function(){var e=this;this.focusoutTimer=setTimeout(function(){e.isOpen=!1,e.mounted&&e.setState({isOpen:e.isOpen}),e.focusoutTimer=void 0},200)},D.prototype.moveUp=function(){var e;this.hoveringValue=f(this.getFilteredData(!0),this.hoveringValue),this.setState({hoveringValue:this.hoveringValue}),!this.resultsElement||null!==(e=y(this.hoveringValue,this.resultsElement,this.getFilteredData(!0),this.lastScrollTopIndex))&&(this.lastScrollTopIndex=e,this.setState({lastScrollTopIndex:this.lastScrollTopIndex}))},D.prototype.moveDown=function(){var e;this.hoveringValue=v(this.getFilteredData(!0),this.hoveringValue),this.setState({hoveringValue:this.hoveringValue}),!this.resultsElement||null!==(e=y(this.hoveringValue,this.resultsElement,this.getFilteredData(!0),this.lastScrollTopIndex))&&(this.lastScrollTopIndex=e,this.setState({lastScrollTopIndex:this.lastScrollTopIndex}))},D.prototype.selectByEnter=function(){var e;this.hoveringValue&&(e=u(this.props.data,this.hoveringValue),this.select(e))},D.prototype.select=function(t){var e,r;null!==t&&(this.props.multiple?(-1===(r=(e=this.option).findIndex(function(e){return e.value===t.value}))?e.push(t):e.splice(r,1),this.setState({option:this.option})):(this.option=t,this.isOpen=!1,this.setState({option:this.option,isOpen:this.isOpen}))),this.props.update&&this.props.update(this.props.multiple?this.option.map(function(e){return e.value}):this.option.value)},D.prototype.keyDown=function(e){this.props.keydown&&this.props.keydown(e),40===e.keyCode?(this.moveDown(),e.preventDefault()):38===e.keyCode?(this.moveUp(),e.preventDefault()):13===e.keyCode&&(this.selectByEnter(),e.preventDefault())},D.prototype.keyUp=function(e){this.props.keyup&&this.props.keyup(e)},D.prototype.keyPress=function(e){this.props.keypress&&this.props.keypress(e)},D.prototype.isSelected=function(e){return w(this.option,e,this.props.multiple)},D.prototype.isDisabled=function(e){return e.disabled?"true":"false"},D.prototype.focusSearchboxOrResultsElement=function(){this.isSearchboxHidden?this.resultsElement&&this.resultsElement.focus():this.searchInputElement&&this.searchInputElement.focus()},D.prototype.removeSelection=function(e,t){var r=this;V(this.option,t),this.props.update&&this.props.update(this.option.map(function(e){return e.value})),e.preventDefault(),e.stopPropagation(),this.isOpen&&this.setState({option:this.option},function(){r.focusSearchboxOrResultsElement()}),this.focusoutTimer&&clearTimeout(this.focusoutTimer)},D.prototype.cancelFocusoutTimer=function(){this.focusoutTimer&&clearTimeout(this.focusoutTimer)},D);function D(){var t=null!==N&&N.apply(this,arguments)||this;return t.hoveringValue=null,t.option=null,t.isOpen=!1,t.innerSearchText="",t.lastScrollTopIndex=0,t.value=t.props.value,t.onChange=function(e){t.searchText=e.currentTarget.value,t.setState({searchText:t.searchText})},t}var I,r=(l(C,I=i.PureComponent),Object.defineProperty(C.prototype,"dropdownStyle",{get:function(){return E(this.isOpen&&0<this.props.data.length)},enumerable:!1,configurable:!0}),Object.defineProperty(C.prototype,"containerStyle",{get:function(){return T(!1,this.isOpen&&0<this.props.data.length)},enumerable:!1,configurable:!0}),C.prototype.UNSAFE_componentWillMount=function(){var e=c(this.props.data,this.props.value,!1);null!==e&&(this.option=e,this.setState({option:this.option})),Array.isArray(e)||(this.hoveringValue=this.props.value),this.setState({hoveringValue:this.hoveringValue})},C.prototype.componentDidMount=function(){var e=o.findDOMNode(this);this.searchInputElement=e.childNodes[0].childNodes[0].childNodes[0].childNodes[0],this.resultsElement=e.childNodes[1].childNodes[0].childNodes[0].childNodes[0]},C.prototype.render=function(){var t=this,e=this.renderResult();return i.createElement("div",{className:this.containerStyle},i.createElement("div",{className:"selection"},i.createElement("div",{className:"select2-search select2-search--dropdown"},i.createElement("input",{value:this.props.value,onChange:this.onChange,onKeyDown:function(e){return t.keyDown(e)},onKeyUp:function(e){return t.keyUp(e)},onKeyPress:function(e){return t.keyPress(e)},onBlur:function(){return t.focusout()},onClick:function(){return t.toggleOpenAndClose()},className:"select2-search__field",type:"search",role:"textbox",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1}))),i.createElement("div",{className:this.dropdownStyle},i.createElement("div",{className:"select2-dropdown"},i.createElement("div",{className:"select2-results"},i.createElement("ul",{className:"select2-results__options",role:"tree",tabIndex:-1,onKeyDown:function(e){return t.keyDown(e)}},e)))))},C.prototype.renderResult=function(){var o=this;return this.getFilteredData(!1).map(function(e,t){var r=e.options;if(r){r=r.map(function(e,t){var r=e.component?i.createElement(e.component,{option:e}):e.label;return i.createElement("li",{className:o.getOptionStyle(e),key:t,role:"treeitem","aria-selected":o.isSelected(e),"aria-disabled":o.isDisabled(e),onMouseEnter:function(){return o.mouseenter(e)},onClick:function(){return o.click(e)}},r)});return i.createElement("li",{className:"select2-results__option",role:"group",key:t},i.createElement("strong",{className:"select2-results__group"},e.label),i.createElement("ul",{className:"select2-results__options select2-results__options--nested"},r))}var n=e,e=n.component?i.createElement(n.component,{option:n}):n.label;return i.createElement("li",{className:o.getOptionStyle(n),key:t,role:"treeitem","aria-selected":o.isSelected(n),"aria-disabled":o.isDisabled(n),onMouseEnter:function(){return o.mouseenter(n)},onClick:function(){return o.click(n)}},e)})},C.prototype.getFilteredData=function(e){var t,r=this.props.data;return h(r,this.hoveringValue)&&(this.hoveringValue=p(r),e&&this.setState({hoveringValue:this.hoveringValue}),!this.resultsElement||null!==(t=y(this.hoveringValue,this.resultsElement,r,this.lastScrollTopIndex))&&(this.lastScrollTopIndex=t,e&&this.setState({lastScrollTopIndex:this.lastScrollTopIndex}))),r},C.prototype.getOptionStyle=function(e){return x(e,this.hoveringValue)},C.prototype.mouseenter=function(e){e.disabled||(this.hoveringValue=e.value,this.setState({hoveringValue:this.hoveringValue}))},C.prototype.click=function(e){e.disabled||this.select(e),this.focusoutTimer&&clearTimeout(this.focusoutTimer)},C.prototype.toggleOpenAndClose=function(){var e;this.isOpen=!this.isOpen,this.setState({isOpen:this.isOpen}),this.isOpen&&(this.focusSearchboxOrResultsElement(),!this.resultsElement||null!==(e=y(this.hoveringValue,this.resultsElement,this.props.data,this.lastScrollTopIndex))&&(this.lastScrollTopIndex=e)),this.focusoutTimer&&clearTimeout(this.focusoutTimer)},C.prototype.focusout=function(){var e=this;this.focusoutTimer=setTimeout(function(){e.isOpen=!1,e.setState({isOpen:e.isOpen}),e.focusoutTimer=void 0},200)},C.prototype.moveUp=function(){var e;this.hoveringValue=f(this.getFilteredData(!0),this.hoveringValue),this.setState({hoveringValue:this.hoveringValue}),!this.resultsElement||null!==(e=y(this.hoveringValue,this.resultsElement,this.getFilteredData(!0),this.lastScrollTopIndex))&&(this.lastScrollTopIndex=e,this.setState({lastScrollTopIndex:this.lastScrollTopIndex}))},C.prototype.moveDown=function(){var e;this.hoveringValue=v(this.getFilteredData(!0),this.hoveringValue),this.setState({hoveringValue:this.hoveringValue}),!this.resultsElement||null!==(e=y(this.hoveringValue,this.resultsElement,this.getFilteredData(!0),this.lastScrollTopIndex))&&(this.lastScrollTopIndex=e,this.setState({lastScrollTopIndex:this.lastScrollTopIndex}))},C.prototype.selectByEnter=function(){var e;this.hoveringValue&&(e=u(this.props.data,this.hoveringValue),this.select(e))},C.prototype.select=function(e){null!==e&&(this.option=e,this.isOpen=!1,this.setState({option:this.option,isOpen:this.isOpen})),this.props.select&&this.props.select(this.option.value),this.props.update&&this.props.update(this.option.value)},C.prototype.keyDown=function(e){this.props.keydown&&this.props.keydown(e),40===e.keyCode?(this.moveDown(),e.preventDefault()):38===e.keyCode?(this.moveUp(),e.preventDefault()):13===e.keyCode&&(this.selectByEnter(),e.preventDefault())},C.prototype.keyUp=function(e){this.props.keyup&&this.props.keyup(e)},C.prototype.keyPress=function(e){this.props.keypress&&this.props.keypress(e)},C.prototype.isSelected=function(e){return w(this.option,e,!1)},C.prototype.isDisabled=function(e){return e.disabled?"true":"false"},C.prototype.focusSearchboxOrResultsElement=function(){this.searchInputElement&&this.searchInputElement.focus()},C);function C(){var t=null!==I&&I.apply(this,arguments)||this;return t.hoveringValue=null,t.option=null,t.isOpen=!1,t.lastScrollTopIndex=0,t.onChange=function(e){t.props.search&&t.props.search(e.currentTarget.value),t.props.update&&t.props.update(e.currentTarget.value)},t}e.AutoComplete=r,e.Select2=t,e.getContainerStyle=T,e.getDropdownStyle=E,e.getFilteredData=b,e.getFirstAvailableOption=p,e.getLastScrollTopIndex=y,e.getNextOption=v,e.getOptionByValue=u,e.getOptionStyle=x,e.getOptionsByValue=c,e.getPreviousOption=f,e.getSearchStyle=_,e.getSelectionStyle=O,e.isSearchboxHiddex=k,e.isSelected=w,e.removeSelection=V,e.timeout=200,e.valueIsNotInFilteredData=h,Object.defineProperty(e,"__esModule",{value:!0})});
