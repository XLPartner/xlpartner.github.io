import{ab as Pe,h as mt,ac as fn,a as re,w as Ie,ad as _t,m as gn,o as En,V as dn,ae as Nn,g as ft,r as bn,af as Tn,ag as In,a1 as On,ah as pn}from"./index-DBfiVSnF.js";/*!
  * shared v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const ue=typeof window<"u",Y=(e,t=!1)=>t?Symbol.for(e):Symbol(e),Ln=(e,t,n)=>vn({l:e,k:t,s:n}),vn=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),U=e=>typeof e=="number"&&isFinite(e),Cn=e=>Et(e)==="[object Date]",me=e=>Et(e)==="[object RegExp]",Ee=e=>I(e)&&Object.keys(e).length===0,V=Object.assign;function Ve(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const An=Object.prototype.hasOwnProperty;function _e(e,t){return An.call(e,t)}const y=Array.isArray,R=e=>typeof e=="function",g=e=>typeof e=="string",P=e=>typeof e=="boolean",p=e=>e!==null&&typeof e=="object",hn=e=>p(e)&&R(e.then)&&R(e.catch),gt=Object.prototype.toString,Et=e=>gt.call(e),I=e=>{if(!p(e))return!1;const t=Object.getPrototypeOf(e);return t===null||t.constructor===Object},Sn=e=>e==null?"":y(e)||I(e)&&e.toString===gt?JSON.stringify(e,null,2):String(e);function Rn(e,t=""){return e.reduce((n,r,a)=>a===0?n+r:n+t+r,"")}function de(e){let t=e;return()=>++t}function Pn(e,t){typeof console<"u"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}function dt(){const e=new Map;return{events:e,on(n,r){const a=e.get(n);a&&a.push(r)||e.set(n,[r])},off(n,r){const a=e.get(n);a&&a.splice(a.indexOf(r)>>>0,1)},emit(n,r){(e.get(n)||[]).slice().map(a=>a(r)),(e.get("*")||[]).slice().map(a=>a(n,r))}}}const ce=e=>!p(e)||y(e);function ie(e,t){if(ce(e)||ce(t))throw new Error("Invalid value");const n=[{src:e,des:t}];for(;n.length;){const{src:r,des:a}=n.pop();Object.keys(r).forEach(s=>{ce(r[s])||ce(a[s])?a[s]=r[s]:n.push({src:r[s],des:a[s]})})}}/*!
  * message-compiler v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const Dn=/\{([0-9a-zA-Z]+)\}/g;function Fn(e,...t){return t.length===1&&yn(t[0])&&(t=t[0]),(!t||!t.hasOwnProperty)&&(t={}),e.replace(Dn,(n,r)=>t.hasOwnProperty(r)?t[r]:"")}const yn=e=>e!==null&&typeof e=="object",Mn={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},k={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},Un={[k.EXPECTED_TOKEN]:"Expected token: '{0}'",[k.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[k.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[k.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[k.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[k.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[k.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[k.EMPTY_PLACEHOLDER]:"Empty placeholder",[k.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[k.INVALID_LINKED_FORMAT]:"Invalid linked format",[k.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[k.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[k.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[k.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[k.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[k.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Nt(e,t,n={}){const{domain:r,messages:a,args:s}=n,l=Fn((a||Un)[e]||"",...s||[]),i=new SyntaxError(String(l));return i.code=e,i.domain=r,i}/*!
  * core-base v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const Q=[];Q[0]={w:[0],i:[3,0],"[":[4],o:[7]};Q[1]={w:[1],".":[2],"[":[4],o:[7]};Q[2]={w:[2],i:[3,0],0:[3,0]};Q[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Q[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Q[5]={"'":[4,0],o:8,l:[5,0]};Q[6]={'"':[4,0],o:8,l:[6,0]};const kn=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function wn(e){return kn.test(e)}function Vn(e){const t=e.charCodeAt(0),n=e.charCodeAt(e.length-1);return t===n&&(t===34||t===39)?e.slice(1,-1):e}function Wn(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function xn(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:wn(t)?Vn(t):"*"+t}function Gn(e){const t=[];let n=-1,r=0,a=0,s,l,i,c,u,E,f;const _=[];_[0]=()=>{l===void 0?l=i:l+=i},_[1]=()=>{l!==void 0&&(t.push(l),l=void 0)},_[2]=()=>{_[0](),a++},_[3]=()=>{if(a>0)a--,r=4,_[0]();else{if(a=0,l===void 0||(l=xn(l),l===!1))return!1;_[1]()}};function d(){const T=e[n+1];if(r===5&&T==="'"||r===6&&T==='"')return n++,i="\\"+T,_[0](),!0}for(;r!==null;)if(n++,s=e[n],!(s==="\\"&&d())){if(c=Wn(s),f=Q[r],u=f[c]||f.l||8,u===8||(r=u[0],u[1]!==void 0&&(E=_[u[1]],E&&(i=s,E()===!1))))return;if(r===7)return t}}const We=new Map;function $n(e,t){return p(e)?e[t]:null}function jn(e,t){if(!p(e))return null;let n=We.get(t);if(n||(n=Gn(t),n&&We.set(t,n)),!n)return null;const r=n.length;let a=e,s=0;for(;s<r;){const l=a[n[s]];if(l===void 0||R(a))return null;a=l,s++}return a}const Yn=e=>e,Hn=e=>"",Xn="text",Bn=e=>e.length===0?"":Rn(e),Kn=Sn;function xe(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function Jn(e){const t=U(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(U(e.named.count)||U(e.named.n))?U(e.named.count)?e.named.count:U(e.named.n)?e.named.n:t:t}function Qn(e,t){t.count||(t.count=e),t.n||(t.n=e)}function zn(e={}){const t=e.locale,n=Jn(e),r=p(e.pluralRules)&&g(t)&&R(e.pluralRules[t])?e.pluralRules[t]:xe,a=p(e.pluralRules)&&g(t)&&R(e.pluralRules[t])?xe:void 0,s=N=>N[r(n,N.length,a)],l=e.list||[],i=N=>l[N],c=e.named||{};U(e.pluralIndex)&&Qn(n,c);const u=N=>c[N];function E(N){const v=R(e.messages)?e.messages(N):p(e.messages)?e.messages[N]:!1;return v||(e.parent?e.parent.message(N):Hn)}const f=N=>e.modifiers?e.modifiers[N]:Yn,_=I(e.processor)&&R(e.processor.normalize)?e.processor.normalize:Bn,d=I(e.processor)&&R(e.processor.interpolate)?e.processor.interpolate:Kn,T=I(e.processor)&&g(e.processor.type)?e.processor.type:Xn,h={list:i,named:u,plural:s,linked:(N,...v)=>{const[F,O]=v;let C="text",S="";v.length===1?p(F)?(S=F.modifier||S,C=F.type||C):g(F)&&(S=F||S):v.length===2&&(g(F)&&(S=F||S),g(O)&&(C=O||C));const $=E(N)(h),w=C==="vnode"&&y($)&&S?$[0]:$;return S?f(S)(w,C):w},message:E,type:T,interpolate:d,normalize:_,values:V({},l,c)};return h}const bt=Mn.__EXTEND_POINT__,q=de(bt),qn={NOT_FOUND_KEY:bt,FALLBACK_TO_TRANSLATE:q(),CANNOT_FORMAT_NUMBER:q(),FALLBACK_TO_NUMBER_FORMAT:q(),CANNOT_FORMAT_DATE:q(),FALLBACK_TO_DATE_FORMAT:q(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:q(),__EXTEND_POINT__:q()},Tt=k.__EXTEND_POINT__,Z=de(Tt),j={INVALID_ARGUMENT:Tt,INVALID_DATE_ARGUMENT:Z(),INVALID_ISO_DATE_ARGUMENT:Z(),NOT_SUPPORT_NON_STRING_MESSAGE:Z(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Z(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Z(),NOT_SUPPORT_LOCALE_TYPE:Z(),__EXTEND_POINT__:Z()};function X(e){return Nt(e,null,void 0)}function De(e,t){return t.locale!=null?Ge(t.locale):Ge(e.locale)}let be;function Ge(e){if(g(e))return e;if(R(e)){if(e.resolvedOnce&&be!=null)return be;if(e.constructor.name==="Function"){const t=e();if(hn(t))throw X(j.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return be=t}else throw X(j.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw X(j.NOT_SUPPORT_LOCALE_TYPE)}function Zn(e,t,n){return[...new Set([n,...y(t)?t:p(t)?Object.keys(t):g(t)?[t]:[n]])]}function It(e,t,n){const r=g(n)?n:fe,a=e;a.__localeChainCache||(a.__localeChainCache=new Map);let s=a.__localeChainCache.get(r);if(!s){s=[];let l=[n];for(;y(l);)l=$e(s,l,t);const i=y(t)||!I(t)?t:t.default?t.default:null;l=g(i)?[i]:i,y(l)&&$e(s,l,!1),a.__localeChainCache.set(r,s)}return s}function $e(e,t,n){let r=!0;for(let a=0;a<t.length&&P(r);a++){const s=t[a];g(s)&&(r=er(e,t[a],n))}return r}function er(e,t,n){let r;const a=t.split("-");do{const s=a.join("-");r=tr(e,s,n),a.splice(-1,1)}while(a.length&&r===!0);return r}function tr(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r=t[t.length-1]!=="!";const a=t.replace(/!/g,"");e.push(a),(y(n)||I(n))&&n[a]&&(r=n[a])}return r}const nr="9.14.0",Ne=-1,fe="en-US",je="",Ye=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function rr(){return{upper:(e,t)=>t==="text"&&g(e)?e.toUpperCase():t==="vnode"&&p(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&g(e)?e.toLowerCase():t==="vnode"&&p(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&g(e)?Ye(e):t==="vnode"&&p(e)&&"__v_isVNode"in e?Ye(e.children):e}}let ar,Ot;function lr(e){Ot=e}let pt;function sr(e){pt=e}let Lt=null;const He=e=>{Lt=e},or=()=>Lt;let Xe=0;function cr(e={}){const t=R(e.onWarn)?e.onWarn:Pn,n=g(e.version)?e.version:nr,r=g(e.locale)||R(e.locale)?e.locale:fe,a=R(r)?fe:r,s=y(e.fallbackLocale)||I(e.fallbackLocale)||g(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:a,l=I(e.messages)?e.messages:{[a]:{}},i=I(e.datetimeFormats)?e.datetimeFormats:{[a]:{}},c=I(e.numberFormats)?e.numberFormats:{[a]:{}},u=V({},e.modifiers||{},rr()),E=e.pluralRules||{},f=R(e.missing)?e.missing:null,_=P(e.missingWarn)||me(e.missingWarn)?e.missingWarn:!0,d=P(e.fallbackWarn)||me(e.fallbackWarn)?e.fallbackWarn:!0,T=!!e.fallbackFormat,L=!!e.unresolving,h=R(e.postTranslation)?e.postTranslation:null,N=I(e.processor)?e.processor:null,v=P(e.warnHtmlMessage)?e.warnHtmlMessage:!0,F=!!e.escapeParameter,O=R(e.messageCompiler)?e.messageCompiler:ar,C=R(e.messageResolver)?e.messageResolver:Ot||$n,S=R(e.localeFallbacker)?e.localeFallbacker:pt||Zn,$=p(e.fallbackContext)?e.fallbackContext:void 0,w=e,b=p(w.__datetimeFormatters)?w.__datetimeFormatters:new Map,se=p(w.__numberFormatters)?w.__numberFormatters:new Map,te=p(w.__meta)?w.__meta:{};Xe++;const K={version:n,cid:Xe,locale:r,fallbackLocale:s,messages:l,modifiers:u,pluralRules:E,missing:f,missingWarn:_,fallbackWarn:d,fallbackFormat:T,unresolving:L,postTranslation:h,processor:N,warnHtmlMessage:v,escapeParameter:F,messageCompiler:O,messageResolver:C,localeFallbacker:S,fallbackContext:$,onWarn:t,__meta:te};return K.datetimeFormats=i,K.numberFormats=c,K.__datetimeFormatters=b,K.__numberFormatters=se,K}function Fe(e,t,n,r,a){const{missing:s,onWarn:l}=e;if(s!==null){const i=s(e,n,t,a);return g(i)?i:t}else return t}function ae(e,t,n){const r=e;r.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function ir(e,t){return e===t?!1:e.split("-")[0]===t.split("-")[0]}function ur(e,t){const n=t.indexOf(e);if(n===-1)return!1;for(let r=n+1;r<t.length;r++)if(ir(e,t[r]))return!0;return!1}const ee=e=>p(e)&&(e.t===0||e.type===0)&&("b"in e||"body"in e),Be=()=>"",B=e=>R(e);function Ke(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:a,messageCompiler:s,fallbackLocale:l,messages:i}=e,[c,u]=Oe(...t),E=P(u.missingWarn)?u.missingWarn:e.missingWarn,f=P(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn,_=P(u.escapeParameter)?u.escapeParameter:e.escapeParameter,d=!!u.resolvedMessage,T=g(u.default)||P(u.default)?P(u.default)?s?c:()=>c:u.default:n?s?c:()=>c:"",L=n||T!=="",h=De(e,u);_&&mr(u);let[N,v,F]=d?[c,h,i[h]||{}]:vt(e,c,h,l,f,E),O=N,C=c;if(!d&&!(g(O)||ee(O)||B(O))&&L&&(O=T,C=O),!d&&(!(g(O)||ee(O)||B(O))||!g(v)))return a?Ne:c;let S=!1;const $=()=>{S=!0},w=B(O)?O:Ct(e,c,v,O,C,$);if(S)return O;const b=gr(e,v,F,u),se=zn(b),te=_r(e,w,se);return r?r(te,c):te}function mr(e){y(e.list)?e.list=e.list.map(t=>g(t)?Ve(t):t):p(e.named)&&Object.keys(e.named).forEach(t=>{g(e.named[t])&&(e.named[t]=Ve(e.named[t]))})}function vt(e,t,n,r,a,s){const{messages:l,onWarn:i,messageResolver:c,localeFallbacker:u}=e,E=u(e,r,n);let f={},_,d=null;const T="translate";for(let L=0;L<E.length&&(_=E[L],f=l[_]||{},(d=c(f,t))===null&&(d=f[t]),!(g(d)||ee(d)||B(d)));L++)if(!ur(_,E)){const h=Fe(e,t,_,s,T);h!==t&&(d=h)}return[d,_,f]}function Ct(e,t,n,r,a,s){const{messageCompiler:l,warnHtmlMessage:i}=e;if(B(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||t,u}if(l==null){const u=()=>r;return u.locale=n,u.key=t,u}const c=l(r,fr(e,n,a,r,i,s));return c.locale=n,c.key=t,c.source=r,c}function _r(e,t,n){return t(n)}function Oe(...e){const[t,n,r]=e,a={};if(!g(t)&&!U(t)&&!B(t)&&!ee(t))throw X(j.INVALID_ARGUMENT);const s=U(t)?String(t):(B(t),t);return U(n)?a.plural=n:g(n)?a.default=n:I(n)&&!Ee(n)?a.named=n:y(n)&&(a.list=n),U(r)?a.plural=r:g(r)?a.default=r:I(r)&&V(a,r),[s,a]}function fr(e,t,n,r,a,s){return{locale:t,key:n,warnHtmlMessage:a,onError:l=>{throw s&&s(l),l},onCacheKey:l=>Ln(t,n,l)}}function gr(e,t,n,r){const{modifiers:a,pluralRules:s,messageResolver:l,fallbackLocale:i,fallbackWarn:c,missingWarn:u,fallbackContext:E}=e,_={locale:t,modifiers:a,pluralRules:s,messages:d=>{let T=l(n,d);if(T==null&&E){const[,,L]=vt(E,d,t,i,c,u);T=l(L,d)}if(g(T)||ee(T)){let L=!1;const N=Ct(e,d,t,T,d,()=>{L=!0});return L?Be:N}else return B(T)?T:Be}};return e.processor&&(_.processor=e.processor),r.list&&(_.list=r.list),r.named&&(_.named=r.named),U(r.plural)&&(_.pluralIndex=r.plural),_}function Je(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:a,onWarn:s,localeFallbacker:l}=e,{__datetimeFormatters:i}=e,[c,u,E,f]=pe(...t),_=P(E.missingWarn)?E.missingWarn:e.missingWarn;P(E.fallbackWarn)?E.fallbackWarn:e.fallbackWarn;const d=!!E.part,T=De(e,E),L=l(e,a,T);if(!g(c)||c==="")return new Intl.DateTimeFormat(T,f).format(u);let h={},N,v=null;const F="datetime format";for(let S=0;S<L.length&&(N=L[S],h=n[N]||{},v=h[c],!I(v));S++)Fe(e,c,N,_,F);if(!I(v)||!g(N))return r?Ne:c;let O=`${N}__${c}`;Ee(f)||(O=`${O}__${JSON.stringify(f)}`);let C=i.get(O);return C||(C=new Intl.DateTimeFormat(N,V({},v,f)),i.set(O,C)),d?C.formatToParts(u):C.format(u)}const At=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function pe(...e){const[t,n,r,a]=e,s={};let l={},i;if(g(t)){const c=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!c)throw X(j.INVALID_ISO_DATE_ARGUMENT);const u=c[3]?c[3].trim().startsWith("T")?`${c[1].trim()}${c[3].trim()}`:`${c[1].trim()}T${c[3].trim()}`:c[1].trim();i=new Date(u);try{i.toISOString()}catch{throw X(j.INVALID_ISO_DATE_ARGUMENT)}}else if(Cn(t)){if(isNaN(t.getTime()))throw X(j.INVALID_DATE_ARGUMENT);i=t}else if(U(t))i=t;else throw X(j.INVALID_ARGUMENT);return g(n)?s.key=n:I(n)&&Object.keys(n).forEach(c=>{At.includes(c)?l[c]=n[c]:s[c]=n[c]}),g(r)?s.locale=r:I(r)&&(l=r),I(a)&&(l=a),[s.key||"",i,s,l]}function Qe(e,t,n){const r=e;for(const a in n){const s=`${t}__${a}`;r.__datetimeFormatters.has(s)&&r.__datetimeFormatters.delete(s)}}function ze(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:a,onWarn:s,localeFallbacker:l}=e,{__numberFormatters:i}=e,[c,u,E,f]=Le(...t),_=P(E.missingWarn)?E.missingWarn:e.missingWarn;P(E.fallbackWarn)?E.fallbackWarn:e.fallbackWarn;const d=!!E.part,T=De(e,E),L=l(e,a,T);if(!g(c)||c==="")return new Intl.NumberFormat(T,f).format(u);let h={},N,v=null;const F="number format";for(let S=0;S<L.length&&(N=L[S],h=n[N]||{},v=h[c],!I(v));S++)Fe(e,c,N,_,F);if(!I(v)||!g(N))return r?Ne:c;let O=`${N}__${c}`;Ee(f)||(O=`${O}__${JSON.stringify(f)}`);let C=i.get(O);return C||(C=new Intl.NumberFormat(N,V({},v,f)),i.set(O,C)),d?C.formatToParts(u):C.format(u)}const ht=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Le(...e){const[t,n,r,a]=e,s={};let l={};if(!U(t))throw X(j.INVALID_ARGUMENT);const i=t;return g(n)?s.key=n:I(n)&&Object.keys(n).forEach(c=>{ht.includes(c)?l[c]=n[c]:s[c]=n[c]}),g(r)?s.locale=r:I(r)&&(l=r),I(a)&&(l=a),[s.key||"",i,s,l]}function qe(e,t,n){const r=e;for(const a in n){const s=`${t}__${a}`;r.__numberFormatters.has(s)&&r.__numberFormatters.delete(s)}}/*!
  * vue-i18n v9.14.0
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const Er="9.14.0",St=qn.__EXTEND_POINT__,H=de(St);H(),H(),H(),H(),H(),H(),H(),H(),H();const Rt=j.__EXTEND_POINT__,W=de(Rt),x={UNEXPECTED_RETURN_TYPE:Rt,INVALID_ARGUMENT:W(),MUST_BE_CALL_SETUP_TOP:W(),NOT_INSTALLED:W(),NOT_AVAILABLE_IN_LEGACY_MODE:W(),REQUIRED_VALUE:W(),INVALID_VALUE:W(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:W(),NOT_INSTALLED_WITH_PROVIDE:W(),UNEXPECTED_ERROR:W(),NOT_COMPATIBLE_LEGACY_VUE_I18N:W(),BRIDGE_SUPPORT_VUE_2_ONLY:W(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:W(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:W(),__EXTEND_POINT__:W()};function G(e,...t){return Nt(e,null,void 0)}const ve=Y("__translateVNode"),Ce=Y("__datetimeParts"),Ae=Y("__numberParts"),ge=Y("__enableEmitter"),Ze=Y("__disableEmitter"),dr=Y("__setPluralRules"),Nr=Y("__injectWithOption"),he=Y("__dispose");function le(e){if(!p(e))return e;for(const t in e)if(_e(e,t))if(!t.includes("."))p(e[t])&&le(e[t]);else{const n=t.split("."),r=n.length-1;let a=e,s=!1;for(let l=0;l<r;l++){if(n[l]in a||(a[n[l]]={}),!p(a[n[l]])){s=!0;break}a=a[n[l]]}s||(a[n[r]]=e[t],delete e[t]),p(a[n[r]])&&le(a[n[r]])}return e}function Pt(e,t){const{messages:n,__i18n:r,messageResolver:a,flatJson:s}=t,l=I(n)?n:y(r)?{}:{[e]:{}};if(y(r)&&r.forEach(i=>{if("locale"in i&&"resource"in i){const{locale:c,resource:u}=i;c?(l[c]=l[c]||{},ie(u,l[c])):ie(u,l)}else g(i)&&ie(JSON.parse(i),l)}),a==null&&s)for(const i in l)_e(l,i)&&le(l[i]);return l}function br(e){return e.type}function Tr(e,t,n){let r=p(t.messages)?t.messages:{};"__i18nGlobal"in n&&(r=Pt(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const a=Object.keys(r);a.length&&a.forEach(s=>{e.mergeLocaleMessage(s,r[s])});{if(p(t.datetimeFormats)){const s=Object.keys(t.datetimeFormats);s.length&&s.forEach(l=>{e.mergeDateTimeFormat(l,t.datetimeFormats[l])})}if(p(t.numberFormats)){const s=Object.keys(t.numberFormats);s.length&&s.forEach(l=>{e.mergeNumberFormat(l,t.numberFormats[l])})}}}function et(e){return On(pn,null,e,0)}const tt=()=>[],Ir=()=>!1;let nt=0;function rt(e){return(t,n,r,a)=>e(n,r,ft()||void 0,a)}function Dt(e={},t){const{__root:n,__injectWithOption:r}=e,a=n===void 0,s=e.flatJson,l=ue?bn:Tn,i=!!e.translateExistCompatible;let c=P(e.inheritLocale)?e.inheritLocale:!0;const u=l(n&&c?n.locale.value:g(e.locale)?e.locale:fe),E=l(n&&c?n.fallbackLocale.value:g(e.fallbackLocale)||y(e.fallbackLocale)||I(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:u.value),f=l(Pt(u.value,e)),_=l(I(e.datetimeFormats)?e.datetimeFormats:{[u.value]:{}}),d=l(I(e.numberFormats)?e.numberFormats:{[u.value]:{}});let T=n?n.missingWarn:P(e.missingWarn)||me(e.missingWarn)?e.missingWarn:!0,L=n?n.fallbackWarn:P(e.fallbackWarn)||me(e.fallbackWarn)?e.fallbackWarn:!0,h=n?n.fallbackRoot:P(e.fallbackRoot)?e.fallbackRoot:!0,N=!!e.fallbackFormat,v=R(e.missing)?e.missing:null,F=R(e.missing)?rt(e.missing):null,O=R(e.postTranslation)?e.postTranslation:null,C=n?n.warnHtmlMessage:P(e.warnHtmlMessage)?e.warnHtmlMessage:!0,S=!!e.escapeParameter;const $=n?n.modifiers:I(e.modifiers)?e.modifiers:{};let w=e.pluralRules||n&&n.pluralRules,b;b=(()=>{a&&He(null);const o={version:Er,locale:u.value,fallbackLocale:E.value,messages:f.value,modifiers:$,pluralRules:w,missing:F===null?void 0:F,missingWarn:T,fallbackWarn:L,fallbackFormat:N,unresolving:!0,postTranslation:O===null?void 0:O,warnHtmlMessage:C,escapeParameter:S,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};o.datetimeFormats=_.value,o.numberFormats=d.value,o.__datetimeFormatters=I(b)?b.__datetimeFormatters:void 0,o.__numberFormatters=I(b)?b.__numberFormatters:void 0;const m=cr(o);return a&&He(m),m})(),ae(b,u.value,E.value);function te(){return[u.value,E.value,f.value,_.value,d.value]}const K=re({get:()=>u.value,set:o=>{u.value=o,b.locale=u.value}}),wt=re({get:()=>E.value,set:o=>{E.value=o,b.fallbackLocale=E.value,ae(b,u.value,o)}}),Vt=re(()=>f.value),Wt=re(()=>_.value),xt=re(()=>d.value);function Gt(){return R(O)?O:null}function $t(o){O=o,b.postTranslation=o}function jt(){return v}function Yt(o){o!==null&&(F=rt(o)),v=o,b.missing=F}const z=(o,m,A,D,J,oe)=>{te();let ne;try{a||(b.fallbackContext=n?or():void 0),ne=o(b)}finally{a||(b.fallbackContext=void 0)}if(A!=="translate exists"&&U(ne)&&ne===Ne||A==="translate exists"&&!ne){const[_n,Zr]=m();return n&&h?D(n):J(_n)}else{if(oe(ne))return ne;throw G(x.UNEXPECTED_RETURN_TYPE)}};function ke(...o){return z(m=>Reflect.apply(Ke,null,[m,...o]),()=>Oe(...o),"translate",m=>Reflect.apply(m.t,m,[...o]),m=>m,m=>g(m))}function Ht(...o){const[m,A,D]=o;if(D&&!p(D))throw G(x.INVALID_ARGUMENT);return ke(m,A,V({resolvedMessage:!0},D||{}))}function Xt(...o){return z(m=>Reflect.apply(Je,null,[m,...o]),()=>pe(...o),"datetime format",m=>Reflect.apply(m.d,m,[...o]),()=>je,m=>g(m))}function Bt(...o){return z(m=>Reflect.apply(ze,null,[m,...o]),()=>Le(...o),"number format",m=>Reflect.apply(m.n,m,[...o]),()=>je,m=>g(m))}function Kt(o){return o.map(m=>g(m)||U(m)||P(m)?et(String(m)):m)}const Jt={normalize:Kt,interpolate:o=>o,type:"vnode"};function Qt(...o){return z(m=>{let A;const D=m;try{D.processor=Jt,A=Reflect.apply(Ke,null,[D,...o])}finally{D.processor=null}return A},()=>Oe(...o),"translate",m=>m[ve](...o),m=>[et(m)],m=>y(m))}function zt(...o){return z(m=>Reflect.apply(ze,null,[m,...o]),()=>Le(...o),"number format",m=>m[Ae](...o),tt,m=>g(m)||y(m))}function qt(...o){return z(m=>Reflect.apply(Je,null,[m,...o]),()=>pe(...o),"datetime format",m=>m[Ce](...o),tt,m=>g(m)||y(m))}function Zt(o){w=o,b.pluralRules=w}function en(o,m){return z(()=>{if(!o)return!1;const A=g(m)?m:u.value,D=we(A),J=b.messageResolver(D,o);return i?J!=null:ee(J)||B(J)||g(J)},()=>[o],"translate exists",A=>Reflect.apply(A.te,A,[o,m]),Ir,A=>P(A))}function tn(o){let m=null;const A=It(b,E.value,u.value);for(let D=0;D<A.length;D++){const J=f.value[A[D]]||{},oe=b.messageResolver(J,o);if(oe!=null){m=oe;break}}return m}function nn(o){const m=tn(o);return m??(n?n.tm(o)||{}:{})}function we(o){return f.value[o]||{}}function rn(o,m){if(s){const A={[o]:m};for(const D in A)_e(A,D)&&le(A[D]);m=A[o]}f.value[o]=m,b.messages=f.value}function an(o,m){f.value[o]=f.value[o]||{};const A={[o]:m};if(s)for(const D in A)_e(A,D)&&le(A[D]);m=A[o],ie(m,f.value[o]),b.messages=f.value}function ln(o){return _.value[o]||{}}function sn(o,m){_.value[o]=m,b.datetimeFormats=_.value,Qe(b,o,m)}function on(o,m){_.value[o]=V(_.value[o]||{},m),b.datetimeFormats=_.value,Qe(b,o,m)}function cn(o){return d.value[o]||{}}function un(o,m){d.value[o]=m,b.numberFormats=d.value,qe(b,o,m)}function mn(o,m){d.value[o]=V(d.value[o]||{},m),b.numberFormats=d.value,qe(b,o,m)}nt++,n&&ue&&(Ie(n.locale,o=>{c&&(u.value=o,b.locale=o,ae(b,u.value,E.value))}),Ie(n.fallbackLocale,o=>{c&&(E.value=o,b.fallbackLocale=o,ae(b,u.value,E.value))}));const M={id:nt,locale:K,fallbackLocale:wt,get inheritLocale(){return c},set inheritLocale(o){c=o,o&&n&&(u.value=n.locale.value,E.value=n.fallbackLocale.value,ae(b,u.value,E.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:Vt,get modifiers(){return $},get pluralRules(){return w||{}},get isGlobal(){return a},get missingWarn(){return T},set missingWarn(o){T=o,b.missingWarn=T},get fallbackWarn(){return L},set fallbackWarn(o){L=o,b.fallbackWarn=L},get fallbackRoot(){return h},set fallbackRoot(o){h=o},get fallbackFormat(){return N},set fallbackFormat(o){N=o,b.fallbackFormat=N},get warnHtmlMessage(){return C},set warnHtmlMessage(o){C=o,b.warnHtmlMessage=o},get escapeParameter(){return S},set escapeParameter(o){S=o,b.escapeParameter=o},t:ke,getLocaleMessage:we,setLocaleMessage:rn,mergeLocaleMessage:an,getPostTranslationHandler:Gt,setPostTranslationHandler:$t,getMissingHandler:jt,setMissingHandler:Yt,[dr]:Zt};return M.datetimeFormats=Wt,M.numberFormats=xt,M.rt=Ht,M.te=en,M.tm=nn,M.d=Xt,M.n=Bt,M.getDateTimeFormat=ln,M.setDateTimeFormat=sn,M.mergeDateTimeFormat=on,M.getNumberFormat=cn,M.setNumberFormat=un,M.mergeNumberFormat=mn,M[Nr]=r,M[ve]=Qt,M[Ce]=qt,M[Ae]=zt,M}const ye={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Or({slots:e},t){return t.length===1&&t[0]==="default"?(e.default?e.default():[]).reduce((r,a)=>[...r,...a.type===_t?a.children:[a]],[]):t.reduce((n,r)=>{const a=e[r];return a&&(n[r]=a()),n},{})}function Ft(e){return _t}const pr=Pe({name:"i18n-t",props:V({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>U(e)||!isNaN(e)}},ye),setup(e,t){const{slots:n,attrs:r}=t,a=e.i18n||Ue({useScope:e.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f!=="_"),l={};e.locale&&(l.locale=e.locale),e.plural!==void 0&&(l.plural=g(e.plural)?+e.plural:e.plural);const i=Or(t,s),c=a[ve](e.keypath,i,l),u=V({},r),E=g(e.tag)||p(e.tag)?e.tag:Ft();return mt(E,u,c)}}}),at=pr;function Lr(e){return y(e)&&!g(e[0])}function yt(e,t,n,r){const{slots:a,attrs:s}=t;return()=>{const l={part:!0};let i={};e.locale&&(l.locale=e.locale),g(e.format)?l.key=e.format:p(e.format)&&(g(e.format.key)&&(l.key=e.format.key),i=Object.keys(e.format).reduce((_,d)=>n.includes(d)?V({},_,{[d]:e.format[d]}):_,{}));const c=r(e.value,l,i);let u=[l.key];y(c)?u=c.map((_,d)=>{const T=a[_.type],L=T?T({[_.type]:_.value,index:d,parts:c}):[_.value];return Lr(L)&&(L[0].key=`${_.type}-${d}`),L}):g(c)&&(u=[c]);const E=V({},s),f=g(e.tag)||p(e.tag)?e.tag:Ft();return mt(f,E,u)}}const vr=Pe({name:"i18n-n",props:V({value:{type:Number,required:!0},format:{type:[String,Object]}},ye),setup(e,t){const n=e.i18n||Ue({useScope:e.scope,__useComponent:!0});return yt(e,t,ht,(...r)=>n[Ae](...r))}}),lt=vr,Cr=Pe({name:"i18n-d",props:V({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},ye),setup(e,t){const n=e.i18n||Ue({useScope:e.scope,__useComponent:!0});return yt(e,t,At,(...r)=>n[Ce](...r))}}),st=Cr;function Ar(e,t){const n=e;if(e.mode==="composition")return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return r!=null?r.__composer:e.global.__composer}}function hr(e){const t=l=>{const{instance:i,modifiers:c,value:u}=l;if(!i||!i.$)throw G(x.UNEXPECTED_ERROR);const E=Ar(e,i.$),f=ot(u);return[Reflect.apply(E.t,E,[...ct(f)]),E]};return{created:(l,i)=>{const[c,u]=t(i);ue&&e.global===u&&(l.__i18nWatcher=Ie(u.locale,()=>{i.instance&&i.instance.$forceUpdate()})),l.__composer=u,l.textContent=c},unmounted:l=>{ue&&l.__i18nWatcher&&(l.__i18nWatcher(),l.__i18nWatcher=void 0,delete l.__i18nWatcher),l.__composer&&(l.__composer=void 0,delete l.__composer)},beforeUpdate:(l,{value:i})=>{if(l.__composer){const c=l.__composer,u=ot(i);l.textContent=Reflect.apply(c.t,c,[...ct(u)])}},getSSRProps:l=>{const[i]=t(l);return{textContent:i}}}}function ot(e){if(g(e))return{path:e};if(I(e)){if(!("path"in e))throw G(x.REQUIRED_VALUE,"path");return e}else throw G(x.INVALID_VALUE)}function ct(e){const{path:t,locale:n,args:r,choice:a,plural:s}=e,l={},i=r||{};return g(n)&&(l.locale=n),U(a)&&(l.plural=a),U(s)&&(l.plural=s),[t,i,l]}function Sr(e,t,...n){const r=I(n[0])?n[0]:{},a=!!r.useI18nComponentName;(P(r.globalInstall)?r.globalInstall:!0)&&([a?"i18n":at.name,"I18nT"].forEach(l=>e.component(l,at)),[lt.name,"I18nN"].forEach(l=>e.component(l,lt)),[st.name,"I18nD"].forEach(l=>e.component(l,st))),e.directive("t",hr(t))}const Te={"vue-devtools-plugin-vue-i18n":"Vue I18n devtools","vue-i18n-resource-inspector":"I18n Resources","vue-i18n-timeline":"Vue I18n"},Rr={"vue-i18n-resource-inspector":"Search for scopes ..."},Pr={"vue-i18n-timeline":16764185},Mt="vue-i18n: composer properties";let Se;async function Dr(e,t){return new Promise((n,r)=>{try{In({id:"vue-devtools-plugin-vue-i18n",label:Te["vue-devtools-plugin-vue-i18n"],packageName:"vue-i18n",homepage:"https://vue-i18n.intlify.dev",logo:"https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",componentStateTypes:[Mt],app:e},a=>{Se=a,a.on.visitComponentTree(({componentInstance:l,treeNode:i})=>{Fr(l,i,t)}),a.on.inspectComponent(({componentInstance:l,instanceData:i})=>{l.vnode.el&&l.vnode.el.__VUE_I18N__&&i&&(t.mode==="legacy"?l.vnode.el.__VUE_I18N__!==t.global.__composer&&it(i,l.vnode.el.__VUE_I18N__):it(i,l.vnode.el.__VUE_I18N__))}),a.addInspector({id:"vue-i18n-resource-inspector",label:Te["vue-i18n-resource-inspector"],icon:"language",treeFilterPlaceholder:Rr["vue-i18n-resource-inspector"]}),a.on.getInspectorTree(l=>{l.app===e&&l.inspectorId==="vue-i18n-resource-inspector"&&wr(l,t)});const s=new Map;a.on.getInspectorState(async l=>{if(l.app===e&&l.inspectorId==="vue-i18n-resource-inspector")if(a.unhighlightElement(),Wr(l,t),l.nodeId==="global"){if(!s.has(l.app)){const[i]=await a.getComponentInstances(l.app);s.set(l.app,i)}a.highlightElement(s.get(l.app))}else{const i=Vr(l.nodeId,t);i&&a.highlightElement(i)}}),a.on.editInspectorState(l=>{l.app===e&&l.inspectorId==="vue-i18n-resource-inspector"&&Gr(l,t)}),a.addTimelineLayer({id:"vue-i18n-timeline",label:Te["vue-i18n-timeline"],color:Pr["vue-i18n-timeline"]}),n(!0)})}catch(a){console.error(a),r(!1)}})}function Ut(e){return e.type.name||e.type.displayName||e.type.__file||"Anonymous"}function Fr(e,t,n){const r=n.mode==="composition"?n.global:n.global.__composer;if(e&&e.vnode.el&&e.vnode.el.__VUE_I18N__&&e.vnode.el.__VUE_I18N__!==r){const a={label:`i18n (${Ut(e)} Scope)`,textColor:0,backgroundColor:16764185};t.tags.push(a)}}function it(e,t){const n=Mt;e.state.push({type:n,key:"locale",editable:!0,value:t.locale.value}),e.state.push({type:n,key:"availableLocales",editable:!1,value:t.availableLocales}),e.state.push({type:n,key:"fallbackLocale",editable:!0,value:t.fallbackLocale.value}),e.state.push({type:n,key:"inheritLocale",editable:!0,value:t.inheritLocale}),e.state.push({type:n,key:"messages",editable:!1,value:Me(t.messages.value)}),e.state.push({type:n,key:"datetimeFormats",editable:!1,value:t.datetimeFormats.value}),e.state.push({type:n,key:"numberFormats",editable:!1,value:t.numberFormats.value})}function Me(e){const t={};return Object.keys(e).forEach(n=>{const r=e[n];R(r)&&"source"in r?t[n]=kr(r):ee(r)&&r.loc&&r.loc.source?t[n]=r.loc.source:p(r)?t[n]=Me(r):t[n]=r}),t}const yr={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"};function Mr(e){return e.replace(/[<>"&]/g,Ur)}function Ur(e){return yr[e]||e}function kr(e){return{_custom:{type:"function",display:`<span>ƒ</span> ${e.source?`("${Mr(e.source)}")`:"(?)"}`}}}function wr(e,t){e.rootNodes.push({id:"global",label:"Global Scope"});const n=t.mode==="composition"?t.global:t.global.__composer;for(const[r,a]of t.__instances){const s=t.mode==="composition"?a:a.__composer;n!==s&&e.rootNodes.push({id:s.id.toString(),label:`${Ut(r)} Scope`})}}function Vr(e,t){let n=null;if(e!=="global"){for(const[r,a]of t.__instances.entries())if(a.id.toString()===e){n=r;break}}return n}function kt(e,t){if(e==="global")return t.mode==="composition"?t.global:t.global.__composer;{const n=Array.from(t.__instances.values()).find(r=>r.id.toString()===e);return n?t.mode==="composition"?n:n.__composer:null}}function Wr(e,t){const n=kt(e.nodeId,t);return n&&(e.state=xr(n)),null}function xr(e){const t={},n="Locale related info",r=[{type:n,key:"locale",editable:!0,value:e.locale.value},{type:n,key:"fallbackLocale",editable:!0,value:e.fallbackLocale.value},{type:n,key:"availableLocales",editable:!1,value:e.availableLocales},{type:n,key:"inheritLocale",editable:!0,value:e.inheritLocale}];t[n]=r;const a="Locale messages info",s=[{type:a,key:"messages",editable:!1,value:Me(e.messages.value)}];t[a]=s;{const l="Datetime formats info",i=[{type:l,key:"datetimeFormats",editable:!1,value:e.datetimeFormats.value}];t[l]=i;const c="Datetime formats info",u=[{type:c,key:"numberFormats",editable:!1,value:e.numberFormats.value}];t[c]=u}return t}function Re(e,t){if(Se){let n;t&&"groupId"in t&&(n=t.groupId,delete t.groupId),Se.addTimelineEvent({layerId:"vue-i18n-timeline",event:{title:e,groupId:n,time:Date.now(),meta:{},data:t||{},logType:e==="compile-error"?"error":e==="fallback"||e==="missing"?"warning":"default"}})}}function Gr(e,t){const n=kt(e.nodeId,t);if(n){const[r]=e.path;r==="locale"&&g(e.state.value)?n.locale.value=e.state.value:r==="fallbackLocale"&&(g(e.state.value)||y(e.state.value)||p(e.state.value))?n.fallbackLocale.value=e.state.value:r==="inheritLocale"&&P(e.state.value)&&(n.inheritLocale=e.state.value)}}const $r=Y("global-vue-i18n");function ta(e={},t){const n=P(e.globalInjection)?e.globalInjection:!0,r=!0,a=new Map,[s,l]=jr(e),i=Y("");function c(f){return a.get(f)||null}function u(f,_){a.set(f,_)}function E(f){a.delete(f)}{const f={get mode(){return"composition"},get allowComposition(){return r},async install(_,...d){if(_.__VUE_I18N__=f,_.__VUE_I18N_SYMBOL__=i,_.provide(_.__VUE_I18N_SYMBOL__,f),I(d[0])){const h=d[0];f.__composerExtend=h.__composerExtend,f.__vueI18nExtend=h.__vueI18nExtend}let T=null;n&&(T=zr(_,f.global)),Sr(_,f,...d);const L=_.unmount;_.unmount=()=>{T&&T(),f.dispose(),L()};{if(!await Dr(_,f))throw G(x.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);const N=dt();{const v=l;v[ge]&&v[ge](N)}N.on("*",Re)}},get global(){return l},dispose(){s.stop()},__instances:a,__getInstance:c,__setInstance:u,__deleteInstance:E};return f}}function Ue(e={}){const t=ft();if(t==null)throw G(x.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&t.appContext.app!=null&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw G(x.NOT_INSTALLED);const n=Yr(t),r=Xr(n),a=br(t),s=Hr(e,a);if(s==="global")return Tr(r,e,a),r;if(s==="parent"){let c=Br(n,t,e.__useComponent);return c==null&&(c=r),c}const l=n;let i=l.__getInstance(t);if(i==null){const c=V({},e);"__i18n"in a&&(c.__i18n=a.__i18n),r&&(c.__root=r),i=Dt(c),l.__composerExtend&&(i[he]=l.__composerExtend(i)),Jr(l,t,i),l.__setInstance(t,i)}return i}function jr(e,t,n){const r=fn();{const a=r.run(()=>Dt(e));if(a==null)throw G(x.UNEXPECTED_ERROR);return[r,a]}}function Yr(e){{const t=gn(e.isCE?$r:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw G(e.isCE?x.NOT_INSTALLED_WITH_PROVIDE:x.UNEXPECTED_ERROR);return t}}function Hr(e,t){return Ee(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}function Xr(e){return e.mode==="composition"?e.global:e.global.__composer}function Br(e,t,n=!1){let r=null;const a=t.root;let s=Kr(t,n);for(;s!=null;){const l=e;if(e.mode==="composition"&&(r=l.__getInstance(s)),r!=null||a===s)break;s=s.parent}return r}function Kr(e,t=!1){return e==null?null:t&&e.vnode.ctx||e.parent}function Jr(e,t,n){let r=null;En(()=>{if(t.vnode.el){t.vnode.el.__VUE_I18N__=n,r=dt();const a=n;a[ge]&&a[ge](r),r.on("*",Re)}},t),dn(()=>{const a=n;t.vnode.el&&t.vnode.el.__VUE_I18N__&&(r&&r.off("*",Re),a[Ze]&&a[Ze](),delete t.vnode.el.__VUE_I18N__),e.__deleteInstance(t);const s=a[he];s&&(s(),delete a[he])},t)}const Qr=["locale","fallbackLocale","availableLocales"],ut=["t","rt","d","n","tm","te"];function zr(e,t){const n=Object.create(null);return Qr.forEach(a=>{const s=Object.getOwnPropertyDescriptor(t,a);if(!s)throw G(x.UNEXPECTED_ERROR);const l=Nn(s.value)?{get(){return s.value.value},set(i){s.value.value=i}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,a,l)}),e.config.globalProperties.$i18n=n,ut.forEach(a=>{const s=Object.getOwnPropertyDescriptor(t,a);if(!s||!s.value)throw G(x.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${a}`,s)}),()=>{delete e.config.globalProperties.$i18n,ut.forEach(a=>{delete e.config.globalProperties[`$${a}`]})}}lr(jn);sr(It);export{ta as c,Ue as u};
