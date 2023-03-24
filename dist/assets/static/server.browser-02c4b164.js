import{o as Ce,r as _e}from"./index-56529fb8.js";var Ne={exports:{}},z={};/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=Ce,C=_e.exports;function p(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q=60106,U=60107,G=60108,K=60114,q=60109,J=60110,ee=60112,A=60113,te=60120,re=60115,ne=60116,me=60121,ye=60117,ve=60119,we=60129,xe=60131;if(typeof Symbol=="function"&&Symbol.for){var y=Symbol.for;Q=y("react.portal"),U=y("react.fragment"),G=y("react.strict_mode"),K=y("react.profiler"),q=y("react.provider"),J=y("react.context"),ee=y("react.forward_ref"),A=y("react.suspense"),te=y("react.suspense_list"),re=y("react.memo"),ne=y("react.lazy"),me=y("react.block"),ye=y("react.fundamental"),ve=y("react.scope"),we=y("react.debug_trace_mode"),xe=y("react.legacy_hidden")}function R(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case Q:return"Portal";case K:return"Profiler";case G:return"StrictMode";case A:return"Suspense";case te:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case J:return(e.displayName||"Context")+".Consumer";case q:return(e._context.displayName||"Context")+".Provider";case ee:var r=e.render;return r=r.displayName||r.name||"",e.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case re:return R(e.type);case me:return R(e._render);case ne:r=e._payload,e=e._init;try{return R(e(r))}catch{}}return null}var Me=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ge={};function L(e,r){for(var t=e._threadCount|0;t<=r;t++)e[t]=e._currentValue2,e._threadCount=t+1}function Oe(e,r,t,o){if(o&&(o=e.contextType,typeof o=="object"&&o!==null))return L(o,t),o[t];if(e=e.contextTypes){t={};for(var u in e)t[u]=r[u];r=t}else r=ge;return r}for(var v=new Uint16Array(16),W=0;15>W;W++)v[W]=W+1;v[15]=0;var be=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ue=Object.prototype.hasOwnProperty,se={},ae={};function Se(e){return ue.call(ae,e)?!0:ue.call(se,e)?!1:be.test(e)?ae[e]=!0:(se[e]=!0,!1)}function Pe(e,r,t,o){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ze(e,r,t,o){if(r===null||typeof r>"u"||Pe(e,r,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function x(e,r,t,o,u,l,i){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=u,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=l,this.removeEmptyString=i}var d={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){d[e]=new x(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];d[r]=new x(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){d[e]=new x(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){d[e]=new x(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){d[e]=new x(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){d[e]=new x(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){d[e]=new x(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){d[e]=new x(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){d[e]=new x(e,5,!1,e.toLowerCase(),null,!1,!1)});var oe=/[\-:]([a-z])/g;function ie(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(oe,ie);d[r]=new x(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(oe,ie);d[r]=new x(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(oe,ie);d[r]=new x(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){d[e]=new x(e,1,!1,e.toLowerCase(),null,!1,!1)});d.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){d[e]=new x(e,1,!1,e.toLowerCase(),null,!0,!0)});var Te=/["'&<>]/;function O(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var r=Te.exec(e);if(r){var t="",o,u=0;for(o=r.index;o<e.length;o++){switch(e.charCodeAt(o)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#x27;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}u!==o&&(t+=e.substring(u,o)),u=o+1,t+=r}e=u!==o?t+e.substring(u,o):t}return e}function Re(e,r){var t=d.hasOwnProperty(e)?d[e]:null,o;return(o=e!=="style")&&(o=t!==null?t.type===0:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")),o||ze(e,r,t,!1)?"":t!==null?(e=t.attributeName,o=t.type,o===3||o===4&&r===!0?e+'=""':(t.sanitizeURL&&(r=""+r),e+'="'+(O(r)+'"'))):Se(e)?e+'="'+(O(r)+'"'):""}function Ve(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Le=typeof Object.is=="function"?Object.is:Ve,D=null,j=null,c=null,T=!1,$=!1,M=null,H=0;function b(){if(D===null)throw Error(p(321));return D}function ce(){if(0<H)throw Error(p(312));return{memoizedState:null,queue:null,next:null}}function le(){return c===null?j===null?(T=!1,j=c=ce()):(T=!0,c=j):c.next===null?(T=!1,c=c.next=ce()):(T=!0,c=c.next),c}function ke(e,r,t,o){for(;$;)$=!1,H+=1,c=null,t=e(r,o);return Fe(),t}function Fe(){D=null,$=!1,j=null,H=0,c=M=null}function Ie(e,r){return typeof r=="function"?r(e):r}function fe(e,r,t){if(D=b(),c=le(),T){var o=c.queue;if(r=o.dispatch,M!==null&&(t=M.get(o),t!==void 0)){M.delete(o),o=c.memoizedState;do o=e(o,t.action),t=t.next;while(t!==null);return c.memoizedState=o,[o,r]}return[c.memoizedState,r]}return e=e===Ie?typeof r=="function"?r():r:t!==void 0?t(r):r,c.memoizedState=e,e=c.queue={last:null,dispatch:null},e=e.dispatch=We.bind(null,D,e),[c.memoizedState,e]}function pe(e,r){if(D=b(),c=le(),r=r===void 0?null:r,c!==null){var t=c.memoizedState;if(t!==null&&r!==null){var o=t[1];e:if(o===null)o=!1;else{for(var u=0;u<o.length&&u<r.length;u++)if(!Le(r[u],o[u])){o=!1;break e}o=!0}if(o)return t[0]}}return e=e(),c.memoizedState=[e,r],e}function We(e,r,t){if(!(25>H))throw Error(p(301));if(e===D)if($=!0,e={action:t,next:null},M===null&&(M=new Map),t=M.get(r),t===void 0)M.set(r,e);else{for(r=t;r.next!==null;)r=r.next;r.next=e}}function B(){}var P=null,je={readContext:function(e){var r=P.threadID;return L(e,r),e[r]},useContext:function(e){b();var r=P.threadID;return L(e,r),e[r]},useMemo:pe,useReducer:fe,useRef:function(e){D=b(),c=le();var r=c.memoizedState;return r===null?(e={current:e},c.memoizedState=e):r},useState:function(e){return fe(Ie,e)},useLayoutEffect:function(){},useCallback:function(e,r){return pe(function(){return e},r)},useImperativeHandle:B,useEffect:B,useDebugValue:B,useDeferredValue:function(e){return b(),e},useTransition:function(){return b(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(P.identifierPrefix||"")+"R:"+(P.uniqueID++).toString(36)},useMutableSource:function(e,r){return b(),r(e._source)}},Ue={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function qe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var Ee={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Ae=E({menuitem:!0},Ee),V={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(V).forEach(function(e){$e.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),V[r]=V[e]})});var He=/([A-Z])/g,Ze=/^ms-/,N=C.Children.toArray,X=Me.ReactCurrentDispatcher,Be={listing:!0,pre:!0,textarea:!0},Xe=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,he={},Y={};function Ye(e){if(e==null)return e;var r="";return C.Children.forEach(e,function(t){t!=null&&(r+=t)}),r}var Qe=Object.prototype.hasOwnProperty,Ge={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function de(e,r){if(e===void 0)throw Error(p(152,R(r)||"Component"))}function Ke(e,r,t){function o(i,s){var n=s.prototype&&s.prototype.isReactComponent,S=Oe(s,r,t,n),h=[],g=!1,f={isMounted:function(){return!1},enqueueForceUpdate:function(){if(h===null)return null},enqueueReplaceState:function(Z,m){g=!0,h=[m]},enqueueSetState:function(Z,m){if(h===null)return null;h.push(m)}};if(n){if(n=new s(i.props,S,f),typeof s.getDerivedStateFromProps=="function"){var a=s.getDerivedStateFromProps.call(null,i.props,n.state);a!=null&&(n.state=E({},n.state,a))}}else if(D={},n=s(i.props,S,f),n=ke(s,i.props,n,S),n==null||n.render==null){e=n,de(e,s);return}if(n.props=i.props,n.context=S,n.updater=f,f=n.state,f===void 0&&(n.state=f=null),typeof n.UNSAFE_componentWillMount=="function"||typeof n.componentWillMount=="function")if(typeof n.componentWillMount=="function"&&typeof s.getDerivedStateFromProps!="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&typeof s.getDerivedStateFromProps!="function"&&n.UNSAFE_componentWillMount(),h.length){f=h;var w=g;if(h=null,g=!1,w&&f.length===1)n.state=f[0];else{a=w?f[0]:n.state;var _=!0;for(w=w?1:0;w<f.length;w++){var k=f[w];k=typeof k=="function"?k.call(n,a,i.props,S):k,k!=null&&(_?(_=!1,a=E({},a,k)):E(a,k))}n.state=a}}else h=null;if(e=n.render(),de(e,s),typeof n.getChildContext=="function"&&(i=s.childContextTypes,typeof i=="object")){var F=n.getChildContext();for(var I in F)if(!(I in i))throw Error(p(108,R(s)||"Unknown",I))}F&&(r=E({},r,F))}for(;C.isValidElement(e);){var u=e,l=u.type;if(typeof l!="function")break;o(u,l)}return{child:e,context:r}}var De=function(){function e(t,o,u){C.isValidElement(t)?t.type!==U?t=[t]:(t=t.props.children,t=C.isValidElement(t)?[t]:N(t)):t=N(t),t={type:null,domNamespace:Ue.html,children:t,childIndex:0,context:ge,footer:""};var l=v[0];if(l===0){var i=v;l=i.length;var s=2*l;if(!(65536>=s))throw Error(p(304));var n=new Uint16Array(s);for(n.set(i),v=n,v[0]=l+1,i=l;i<s-1;i++)v[i]=i+1;v[s-1]=0}else v[0]=v[l];this.threadID=l,this.stack=[t],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=o,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=u&&u.identifierPrefix||""}var r=e.prototype;return r.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var t=this.threadID;v[t]=v[0],v[0]=t}},r.pushProvider=function(t){var o=++this.contextIndex,u=t.type._context,l=this.threadID;L(u,l);var i=u[l];this.contextStack[o]=u,this.contextValueStack[o]=i,u[l]=t.props.value},r.popProvider=function(){var t=this.contextIndex,o=this.contextStack[t],u=this.contextValueStack[t];this.contextStack[t]=null,this.contextValueStack[t]=null,this.contextIndex--,o[this.threadID]=u},r.clearProviders=function(){for(var t=this.contextIndex;0<=t;t--)this.contextStack[t][this.threadID]=this.contextValueStack[t]},r.read=function(t){if(this.exhausted)return null;var o=P;P=this;var u=X.current;X.current=je;try{for(var l=[""],i=!1;l[0].length<t;){if(this.stack.length===0){this.exhausted=!0;var s=this.threadID;v[s]=v[0],v[0]=s;break}var n=this.stack[this.stack.length-1];if(i||n.childIndex>=n.children.length){var S=n.footer;if(S!==""&&(this.previousWasTextNode=!1),this.stack.pop(),n.type==="select")this.currentSelectValue=null;else if(n.type!=null&&n.type.type!=null&&n.type.type.$$typeof===q)this.popProvider(n.type);else if(n.type===A){this.suspenseDepth--;var h=l.pop();if(i){i=!1;var g=n.fallbackFrame;if(!g)throw Error(p(303));this.stack.push(g),l[this.suspenseDepth]+="<!--$!-->";continue}else l[this.suspenseDepth]+=h}l[this.suspenseDepth]+=S}else{var f=n.children[n.childIndex++],a="";try{a+=this.render(f,n.context,n.domNamespace)}catch(w){throw w!=null&&typeof w.then=="function"?Error(p(294)):w}finally{}l.length<=this.suspenseDepth&&l.push(""),l[this.suspenseDepth]+=a}}return l[0]}finally{X.current=u,P=o,Fe()}},r.render=function(t,o,u){if(typeof t=="string"||typeof t=="number")return u=""+t,u===""?"":this.makeStaticMarkup?O(u):this.previousWasTextNode?"<!-- -->"+O(u):(this.previousWasTextNode=!0,O(u));if(o=Ke(t,o,this.threadID),t=o.child,o=o.context,t===null||t===!1)return"";if(!C.isValidElement(t)){if(t!=null&&t.$$typeof!=null)throw u=t.$$typeof,Error(u===Q?p(257):p(258,u.toString()));return t=N(t),this.stack.push({type:null,domNamespace:u,children:t,childIndex:0,context:o,footer:""}),""}var l=t.type;if(typeof l=="string")return this.renderDOM(t,o,u);switch(l){case xe:case we:case G:case K:case te:case U:return t=N(t.props.children),this.stack.push({type:null,domNamespace:u,children:t,childIndex:0,context:o,footer:""}),"";case A:throw Error(p(294));case ve:throw Error(p(343))}if(typeof l=="object"&&l!==null)switch(l.$$typeof){case ee:D={};var i=l.render(t.props,t.ref);return i=ke(l.render,t.props,i,t.ref),i=N(i),this.stack.push({type:null,domNamespace:u,children:i,childIndex:0,context:o,footer:""}),"";case re:return t=[C.createElement(l.type,E({ref:t.ref},t.props))],this.stack.push({type:null,domNamespace:u,children:t,childIndex:0,context:o,footer:""}),"";case q:return l=N(t.props.children),u={type:t,domNamespace:u,children:l,childIndex:0,context:o,footer:""},this.pushProvider(t),this.stack.push(u),"";case J:l=t.type,i=t.props;var s=this.threadID;return L(l,s),l=N(i.children(l[s])),this.stack.push({type:t,domNamespace:u,children:l,childIndex:0,context:o,footer:""}),"";case ye:throw Error(p(338));case ne:return l=t.type,i=l._init,l=i(l._payload),t=[C.createElement(l,E({ref:t.ref},t.props))],this.stack.push({type:null,domNamespace:u,children:t,childIndex:0,context:o,footer:""}),""}throw Error(p(130,l==null?l:typeof l,""))},r.renderDOM=function(t,o,u){var l=t.type.toLowerCase();if(!he.hasOwnProperty(l)){if(!Xe.test(l))throw Error(p(65,l));he[l]=!0}var i=t.props;if(l==="input")i=E({type:void 0},i,{defaultChecked:void 0,defaultValue:void 0,value:i.value!=null?i.value:i.defaultValue,checked:i.checked!=null?i.checked:i.defaultChecked});else if(l==="textarea"){var s=i.value;if(s==null){s=i.defaultValue;var n=i.children;if(n!=null){if(s!=null)throw Error(p(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(p(93));n=n[0]}s=""+n}s==null&&(s="")}i=E({},i,{value:void 0,children:""+s})}else if(l==="select")this.currentSelectValue=i.value!=null?i.value:i.defaultValue,i=E({},i,{value:void 0});else if(l==="option"){n=this.currentSelectValue;var S=Ye(i.children);if(n!=null){var h=i.value!=null?i.value+"":S;if(s=!1,Array.isArray(n)){for(var g=0;g<n.length;g++)if(""+n[g]===h){s=!0;break}}else s=""+n===h;i=E({selected:void 0,children:void 0},i,{selected:s,children:S})}}if(s=i){if(Ae[l]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(p(137,l));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(p(60));if(!(typeof s.dangerouslySetInnerHTML=="object"&&"__html"in s.dangerouslySetInnerHTML))throw Error(p(61))}if(s.style!=null&&typeof s.style!="object")throw Error(p(62))}s=i,n=this.makeStaticMarkup,S=this.stack.length===1,h="<"+t.type;e:if(l.indexOf("-")===-1)g=typeof s.is=="string";else switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":g=!1;break e;default:g=!0}for(m in s)if(Qe.call(s,m)){var f=s[m];if(f!=null){if(m==="style"){var a=void 0,w="",_="";for(a in f)if(f.hasOwnProperty(a)){var k=a.indexOf("--")===0,F=f[a];if(F!=null){if(k)var I=a;else if(I=a,Y.hasOwnProperty(I))I=Y[I];else{var Z=I.replace(He,"-$1").toLowerCase().replace(Ze,"-ms-");I=Y[I]=Z}w+=_+I+":",_=a,k=F==null||typeof F=="boolean"||F===""?"":k||typeof F!="number"||F===0||V.hasOwnProperty(_)&&V[_]?(""+F).trim():F+"px",w+=k,_=";"}}f=w||null}a=null,g?Ge.hasOwnProperty(m)||(a=m,a=Se(a)&&f!=null?a+'="'+(O(f)+'"'):""):a=Re(m,f),a&&(h+=" "+a)}}n||S&&(h+=' data-reactroot=""');var m=h;s="",Ee.hasOwnProperty(l)?m+="/>":(m+=">",s="</"+t.type+">");e:{if(n=i.dangerouslySetInnerHTML,n!=null){if(n.__html!=null){n=n.__html;break e}}else if(n=i.children,typeof n=="string"||typeof n=="number"){n=O(n);break e}n=null}return n!=null?(i=[],Be.hasOwnProperty(l)&&n.charAt(0)===`
`&&(m+=`
`),m+=n):i=N(i.children),t=t.type,u=u==null||u==="http://www.w3.org/1999/xhtml"?qe(t):u==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":u,this.stack.push({domNamespace:u,type:l,children:i,childIndex:0,context:o,footer:s}),this.previousWasTextNode=!1,m},e}();z.renderToNodeStream=function(){throw Error(p(207))};z.renderToStaticMarkup=function(e,r){e=new De(e,!0,r);try{return e.read(1/0)}finally{e.destroy()}};z.renderToStaticNodeStream=function(){throw Error(p(208))};z.renderToString=function(e,r){e=new De(e,!1,r);try{return e.read(1/0)}finally{e.destroy()}};z.version="17.0.2";(function(e){e.exports=z})(Ne);export{Ne as s};
