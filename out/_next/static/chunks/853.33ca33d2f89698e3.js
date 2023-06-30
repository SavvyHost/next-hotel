(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{276:function(e,t,r){"use strict";r.d(t,{H:function(){return o}});var n=r(72),i=r(2898),a=r(2349);let o={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"};var l=(0,n.k)((e,{spacing:t,position:r,noWrap:n,grow:l,align:s,count:c})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:"row",alignItems:s||"center",flexWrap:n?"nowrap":"wrap",justifyContent:o[r],gap:(0,i.a)({size:t,sizes:e.spacing}),"& > *":{boxSizing:"border-box",maxWidth:l?`calc(${100/c}% - (${(0,a.h)((0,i.a)({size:t,sizes:e.spacing}))} - ${(0,i.a)({size:t,sizes:e.spacing})} / ${c}))`:void 0,flexGrow:l?1:0}}}));t.Z=l},5506:function(e,t,r){"use strict";r.d(t,{I:function(){return a}});var n=r(5302),i=r(2898);function a(e,t){if(0===t.length)return t;let r="maxWidth"in t[0]?"maxWidth":"minWidth",a=[...t].sort((t,a)=>(0,n.oI)((0,i.a)({size:a[r],sizes:e.breakpoints}))-(0,n.oI)((0,i.a)({size:t[r],sizes:e.breakpoints})));return"minWidth"===r?a.reverse():a}},8971:function(e,t,r){"use strict";r.d(t,{x:function(){return N}});var n=r(6006),i=r(9244),a=r(1307),o=r(72),l=r(2898),s=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))A.call(t,r)&&p(e,r,t[r]);if(d)for(var r of d(t))f.call(t,r)&&p(e,r,t[r]);return e},g=(e,t)=>c(e,u(t)),b=(0,o.k)((e,{color:t,lineClamp:r,truncate:n,inline:i,inherit:a,underline:o,gradient:s,weight:c,transform:u,align:d,strikethrough:A,italic:f},{size:p})=>{let b=e.fn.variant({variant:"gradient",gradient:s});return{root:g(m(m(m(m({},e.fn.fontStyles()),e.fn.focusStyles()),"number"==typeof r?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:r,WebkitBoxOrient:"vertical"}:null),function({theme:e,truncate:t}){return"start"===t?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",direction:"ltr"===e.dir?"rtl":"ltr",textAlign:"ltr"===e.dir?"right":"left"}:t?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null}({theme:e,truncate:n})),{color:function({theme:e,color:t}){return"dimmed"===t?e.fn.dimmed():"string"==typeof t&&(t in e.colors||t.split(".")[0]in e.colors)?e.fn.variant({variant:"filled",color:t}).background:t||"inherit"}({color:t,theme:e}),fontFamily:a?"inherit":e.fontFamily,fontSize:a||void 0===p?"inherit":(0,l.a)({size:p,sizes:e.fontSizes}),lineHeight:a?"inherit":i?1:e.lineHeight,textDecoration:function({underline:e,strikethrough:t}){let r=[];return e&&r.push("underline"),t&&r.push("line-through"),r.length>0?r.join(" "):"none"}({underline:o,strikethrough:A}),WebkitTapHighlightColor:"transparent",fontWeight:a?"inherit":c,textTransform:u,textAlign:d,fontStyle:f?"italic":void 0}),gradient:{backgroundImage:b.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}}),h=r(1600),y=Object.defineProperty,x=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,j=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&O(e,r,t[r]);if(x)for(var r of x(t))w.call(t,r)&&O(e,r,t[r]);return e},k=(e,t)=>{var r={};for(var n in e)v.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&x)for(var n of x(e))0>t.indexOf(n)&&w.call(e,n)&&(r[n]=e[n]);return r};let E={variant:"text"},S=(0,n.forwardRef)((e,t)=>{let r=(0,i.N4)("Text",E,e),{className:a,size:o,weight:l,transform:s,color:c,align:u,variant:d,lineClamp:A,truncate:f,gradient:p,inline:m,inherit:g,underline:y,strikethrough:x,italic:v,classNames:w,styles:O,unstyled:S,span:N,__staticSelector:z}=r,P=k(r,["className","size","weight","transform","color","align","variant","lineClamp","truncate","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span","__staticSelector"]),{classes:C,cx:I}=b({color:c,lineClamp:A,truncate:f,inline:m,inherit:g,underline:y,strikethrough:x,italic:v,weight:l,transform:s,align:u,gradient:p},{unstyled:S,name:z||"Text",variant:d,size:o});return n.createElement(h.x,j({ref:t,className:I(C.root,{[C.gradient]:"gradient"===d},a),component:N?"span":"div"},P))});S.displayName="@mantine/core/Text";let N=(0,a.F)(S)},7205:function(e,t,r){"use strict";r.d(t,{k:function(){return z}});var n=r(6006),i=r(9244),a=r(2349),o=r(72),l=r(2898),s=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))A.call(t,r)&&p(e,r,t[r]);if(d)for(var r of d(t))f.call(t,r)&&p(e,r,t[r]);return e},g=(e,t)=>c(e,u(t));let b={xs:(0,a.h)(16),sm:(0,a.h)(20),md:(0,a.h)(26),lg:(0,a.h)(32),xl:(0,a.h)(40)},h=["filled","light","gradient","outline","default"];var y=(0,o.k)((e,{color:t,radius:r,gradient:n},{variant:i,size:o})=>{let s=(0,l.a)({size:o,sizes:b});return{root:m(g(m({},e.fn.fontStyles()),{display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",width:s,height:s,minWidth:s,minHeight:s,borderRadius:e.fn.radius(r)}),function({theme:e,variant:t,color:r,gradient:n}){if(!h.includes(t))return null;let i=e.fn.variant({variant:t,color:r||e.primaryColor,gradient:n,primaryFallback:!1});return{backgroundColor:i.background,color:i.color,backgroundImage:"gradient"===t?i.background:void 0,border:`${(0,a.h)("gradient"===t?0:1)} solid ${i.border}`}}({theme:e,variant:i,gradient:n,color:t}))}}),x=r(1600),v=Object.defineProperty,w=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,k=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&k(e,r,t[r]);if(w)for(var r of w(t))j.call(t,r)&&k(e,r,t[r]);return e},S=(e,t)=>{var r={};for(var n in e)O.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&w)for(var n of w(e))0>t.indexOf(n)&&j.call(e,n)&&(r[n]=e[n]);return r};let N={size:"md",variant:"filled"},z=(0,n.forwardRef)((e,t)=>{let r=(0,i.N4)("ThemeIcon",N,e),{className:a,size:o,radius:l,variant:s,color:c,children:u,gradient:d,unstyled:A}=r,f=S(r,["className","size","radius","variant","color","children","gradient","unstyled"]),{classes:p,cx:m}=y({variant:s,radius:l,color:c,gradient:d},{name:"ThemeIcon",unstyled:A,variant:s,size:o});return n.createElement(x.x,E({className:m(p.root,a),ref:t},f),u)});z.displayName="@mantine/core/ThemeIcon"},1983:function(e,t,r){"use strict";r.d(t,{k:function(){return E}});var n=r(6006),i=r(9244),a=r(1307),o=r(72),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))A.call(t,r)&&f(e,r,t[r]);return e},m=(e,t)=>s(e,c(t)),g=(0,o.k)(e=>({root:m(p(p({},e.fn.focusStyles()),e.fn.fontStyles()),{cursor:"pointer",border:0,padding:0,appearance:"none",fontSize:e.fontSizes.md,backgroundColor:"transparent",textAlign:"left",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,textDecoration:"none",boxSizing:"border-box"})})),b=r(1600),h=Object.defineProperty,y=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&w(e,r,t[r]);if(y)for(var r of y(t))v.call(t,r)&&w(e,r,t[r]);return e},j=(e,t)=>{var r={};for(var n in e)x.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&y)for(var n of y(e))0>t.indexOf(n)&&v.call(e,n)&&(r[n]=e[n]);return r};let k=(0,n.forwardRef)((e,t)=>{let r=(0,i.N4)("UnstyledButton",{},e),{className:a,component:o="button",unstyled:l,variant:s}=r,c=j(r,["className","component","unstyled","variant"]),{classes:u,cx:d}=g(null,{name:"UnstyledButton",unstyled:l,variant:s});return n.createElement(b.x,O({component:o,ref:t,className:d(u.root,a),type:"button"===o?"button":void 0},c))});k.displayName="@mantine/core/UnstyledButton";let E=(0,a.F)(k)},721:function(e,t,r){"use strict";r.d(t,{M:function(){return l}});var n=r(6006),i=r(1238);let a=n["useId".toString()]||(()=>void 0);var o=r(3613);function l(e){let t=function(){let e=a();return e?`mantine-${e.replace(/:/g,"")}`:""}(),[r,l]=(0,n.useState)(t);return((0,i.Y)(()=>{l((0,o.k)())},[]),"string"==typeof e)?e:"undefined"==typeof window?t:r}},1238:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var n=r(6006);let i="undefined"!=typeof document?n.useLayoutEffect:n.useEffect},4676:function(e,t,r){"use strict";r.d(t,{C:function(){return i}});var n=r(6006);function i({value:e,defaultValue:t,finalValue:r,onChange:i=()=>{}}){let[a,o]=(0,n.useState)(void 0!==t?t:r);return void 0!==e?[e,i,!0]:[a,e=>{o(e),null==i||i(e)},!1]}},3613:function(e,t,r){"use strict";function n(){return`mantine-${Math.random().toString(36).slice(2,11)}`}r.d(t,{k:function(){return n}})},72:function(e,t,r){"use strict";r.d(t,{k:function(){return f}});var n=r(9551),i=r(9244),a=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&c(e,r,t[r]);return e};function d(e,t){return t&&Object.keys(t).forEach(r=>{e[r]?e[r]=u(u({},e[r]),t[r]):e[r]=u({},t[r])}),e}function A(e,t,r,n){let i=e=>"function"==typeof e?e(t,r||{},n):e||{};return Array.isArray(e)?e.map(e=>i(e.styles)).reduce((e,t)=>d(e,t),{}):i(e)}function f(e){let t="function"==typeof e?e:()=>e;return function(e,r){let a=(0,i.rZ)(),o=(0,i.O2)(null==r?void 0:r.name),l=(0,i.T1)(),s={variant:null==r?void 0:r.variant,size:null==r?void 0:r.size},{css:c,cx:u}=(0,n.Z)(),f=t(a,e,s),p=A(null==r?void 0:r.styles,a,e,s),m=A(o,a,e,s),g=function({ctx:e,theme:t,params:r,variant:n,size:i}){return e.reduce((e,a)=>(a.variants&&n in a.variants&&d(e,a.variants[n](t,r,{variant:n,size:i})),a.sizes&&i in a.sizes&&d(e,a.sizes[i](t,r,{variant:n,size:i})),e),{})}({ctx:o,theme:a,params:e,variant:null==r?void 0:r.variant,size:null==r?void 0:r.size}),b=Object.fromEntries(Object.keys(f).map(e=>{let t=u({[c(f[e])]:!(null==r?void 0:r.unstyled)},c(g[e]),c(m[e]),c(p[e]));return[e,t]}));return{classes:function({cx:e,classes:t,context:r,classNames:n,name:i,cache:a}){let o=r.reduce((e,t)=>(Object.keys(t.classNames).forEach(r=>{"string"!=typeof e[r]?e[r]=`${t.classNames[r]}`:e[r]=`${e[r]} ${t.classNames[r]}`}),e),{});return Object.keys(t).reduce((r,l)=>(r[l]=e(t[l],o[l],null!=n&&n[l],Array.isArray(i)?i.filter(Boolean).map(e=>`${(null==a?void 0:a.key)||"mantine"}-${e}-${l}`).join(" "):i?`${(null==a?void 0:a.key)||"mantine"}-${i}-${l}`:null),r),{})}({cx:u,classes:b,context:o,classNames:null==r?void 0:r.classNames,name:null==r?void 0:r.name,cache:l}),cx:u,theme:a}}}},1621:function(e,t,r){"use strict";r.d(t,{R:function(){return i}});var n=r(6006);function i(e){let t=(0,n.createContext)(null);return[({children:e,value:r})=>n.createElement(t.Provider,{value:r},e),()=>{let r=(0,n.useContext)(t);if(null===r)throw Error(e);return r}]}},4089:function(e,t,r){"use strict";r.d(t,{R:function(){return i}});var n=r(9313);function i({parentSelector:e,siblingSelector:t,onKeyDown:r,loop:i=!0,activateOnFocus:a=!1,dir:o="rtl",orientation:l}){return s=>{var c;null==r||r(s);let u=Array.from((null==(c=(0,n.p)(s.currentTarget,e))?void 0:c.querySelectorAll(t))||[]).filter(t=>{var r;return r=s.currentTarget,(0,n.p)(r,e)===(0,n.p)(t,e)}),d=u.findIndex(e=>s.currentTarget===e),A=function(e,t,r){for(let r=e+1;r<t.length;r+=1)if(!t[r].disabled)return r;if(r){for(let e=0;e<t.length;e+=1)if(!t[e].disabled)return e}return e}(d,u,i),f=function(e,t,r){for(let r=e-1;r>=0;r-=1)if(!t[r].disabled)return r;if(r){for(let e=t.length-1;e>-1;e-=1)if(!t[e].disabled)return e}return e}(d,u,i),p="rtl"===o?f:A,m="rtl"===o?A:f;switch(s.key){case"ArrowRight":"horizontal"===l&&(s.stopPropagation(),s.preventDefault(),u[p].focus(),a&&u[p].click());break;case"ArrowLeft":"horizontal"===l&&(s.stopPropagation(),s.preventDefault(),u[m].focus(),a&&u[m].click());break;case"ArrowUp":"vertical"===l&&(s.stopPropagation(),s.preventDefault(),u[f].focus(),a&&u[f].click());break;case"ArrowDown":"vertical"===l&&(s.stopPropagation(),s.preventDefault(),u[A].focus(),a&&u[A].click());break;case"Home":s.stopPropagation(),s.preventDefault(),u[0].disabled||u[0].focus();break;case"End":{s.stopPropagation(),s.preventDefault();let e=u.length-1;u[e].disabled||u[e].focus()}}}}},9313:function(e,t,r){"use strict";function n(e,t){let r=e;for(;(r=r.parentElement)&&!r.matches(t););return r}r.d(t,{p:function(){return n}})},1186:function(e,t,r){"use strict";function n(e){return Array.isArray(e)?e:[e]}r.d(t,{R:function(){return n}})},777:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(6006),i=r(9497),a=r.n(i),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&f(e,r,t[r]);if(u)for(var r of u(t))A.call(t,r)&&f(e,r,t[r]);return e},m=(e,t)=>s(e,c(t)),g=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))0>t.indexOf(n)&&A.call(e,n)&&(r[n]=e[n]);return r},b=(e,t,r)=>{let i=(0,n.forwardRef)((t,i)=>{var{color:a="currentColor",size:l=24,stroke:s=2,children:c}=t,u=g(t,["color","size","stroke","children"]);return(0,n.createElement)("svg",p(m(p({ref:i},o),{width:l,height:l,stroke:a,strokeWidth:s,className:`tabler-icon tabler-icon-${e}`}),u),[...r.map(([e,t])=>(0,n.createElement)(e,t)),...c||[]])});return i.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),stroke:a().oneOfType([a().string,a().number])},i.displayName=`${t}`,i}},7909:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ej}});var n=r(9268),i=r(72),a=r(2349),o=r(8971),l=r(7205),s=r(6006),c=r(9244),u=r(1621);let[d,A]=(0,u.R)("Grid component was not found in tree");var f=r(2898),p=r(8334),m=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&y(e,r,t[r]);if(g)for(var r of g(t))h.call(t,r)&&y(e,r,t[r]);return e};let v=(e,t)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(t/e)}%`:void 0,w=(e,t,r)=>r||"auto"===e||"content"===e?"unset":v(e,t),O=(e,t)=>{if(e)return"auto"===e||t?1:0},j=(e,t)=>0===e?0:e?`${100/(t/e)}%`:void 0,k=(e,t)=>void 0!==e?`calc(${(0,f.a)({size:e,sizes:t.spacing})} / 2)`:void 0;var E=(0,i.k)((e,{gutter:t,gutterXs:r,gutterSm:n,gutterMd:i,gutterLg:o,gutterXl:l,grow:s,offset:c,offsetXs:u,offsetSm:d,offsetMd:A,offsetLg:f,offsetXl:m,columns:g,span:b,xs:h,sm:y,md:E,lg:S,xl:N,order:z,orderXs:P,orderSm:C,orderMd:I,orderLg:R,orderXl:W})=>({col:x({boxSizing:"border-box",flexGrow:O(b,s),order:z,padding:k(t,e),marginLeft:j(c,g),flexBasis:v(b,g),flexShrink:0,width:"content"===b?"auto":void 0,maxWidth:w(b,g,s)},function({sizes:e,offsets:t,orders:r,theme:n,columns:i,gutters:o,grow:l}){return p.j1.reduce((s,c)=>(s[`@media (min-width: ${(0,a.em)(n.breakpoints[c])})`]={order:r[c],flexBasis:v(e[c],i),padding:k(o[c],n),flexShrink:0,width:"content"===e[c]?"auto":void 0,maxWidth:w(e[c],i,l),marginLeft:j(t[c],i),flexGrow:O(e[c],l)},s),{})}({sizes:{xs:h,sm:y,md:E,lg:S,xl:N},offsets:{xs:u,sm:d,md:A,lg:f,xl:m},orders:{xs:P,sm:C,md:I,lg:R,xl:W},gutters:{xs:r,sm:n,md:i,lg:o,xl:l},theme:e,columns:g,grow:s}))})),S=r(1600),N=Object.defineProperty,z=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,I=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,R=(e,t)=>{for(var r in t||(t={}))P.call(t,r)&&I(e,r,t[r]);if(z)for(var r of z(t))C.call(t,r)&&I(e,r,t[r]);return e},W=(e,t)=>{var r={};for(var n in e)P.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&z)for(var n of z(e))0>t.indexOf(n)&&C.call(e,n)&&(r[n]=e[n]);return r};let B={},M=(0,s.forwardRef)((e,t)=>{let r=(0,c.N4)("GridCol",B,e),{children:n,span:i,offset:a,offsetXs:o,offsetSm:l,offsetMd:u,offsetLg:d,offsetXl:f,xs:p,sm:m,md:g,lg:b,xl:h,order:y,orderXs:x,orderSm:v,orderMd:w,orderLg:O,orderXl:j,className:k,id:N,unstyled:z,variant:P}=r,C=W(r,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","order","orderXs","orderSm","orderMd","orderLg","orderXl","className","id","unstyled","variant"]),I=A(),M=i||I.columns,{classes:T,cx:U}=E({gutter:I.gutter,gutterXs:I.gutterXs,gutterSm:I.gutterSm,gutterMd:I.gutterMd,gutterLg:I.gutterLg,gutterXl:I.gutterXl,offset:a,offsetXs:o,offsetSm:l,offsetMd:u,offsetLg:d,offsetXl:f,xs:p,sm:m,md:g,lg:b,xl:h,order:y,orderXs:x,orderSm:v,orderMd:w,orderLg:O,orderXl:j,grow:I.grow,columns:I.columns,span:M},{unstyled:z,name:"Grid",variant:P});return!("auto"===M||"content"===M||"number"==typeof M&&M>0&&M%1==0)||M>I.columns?null:s.createElement(S.x,R({className:U(T.col,k),ref:t},C),n)});M.displayName="@mantine/core/Col";var T=Object.defineProperty,U=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,X=(e,t)=>{for(var r in t||(t={}))V.call(t,r)&&D(e,r,t[r]);if(U)for(var r of U(t))G.call(t,r)&&D(e,r,t[r]);return e},H=(0,i.k)((e,{justify:t,align:r,gutter:n,gutterXs:i,gutterSm:a,gutterMd:o,gutterLg:l,gutterXl:s})=>{var c;return{root:X({margin:`calc(-${(0,f.a)({size:n,sizes:e.spacing})} / 2)`,display:"flex",flexWrap:"wrap",justifyContent:t,alignItems:r},(c={xs:i,sm:a,md:o,lg:l,xl:s},p.j1.reduce((t,r)=>(void 0!==c[r]&&(t[`@media (min-width: ${e.breakpoints[r]})`]={margin:`calc(-${(0,f.a)({size:c[r],sizes:e.spacing})} / 2)`}),t),{})))}}),L=Object.defineProperty,F=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Y=(e,t)=>{for(var r in t||(t={}))K.call(t,r)&&Q(e,r,t[r]);if(F)for(var r of F(t))J.call(t,r)&&Q(e,r,t[r]);return e},Z=(e,t)=>{var r={};for(var n in e)K.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&F)for(var n of F(e))0>t.indexOf(n)&&J.call(e,n)&&(r[n]=e[n]);return r};let $={gutter:"md",justify:"flex-start",align:"stretch",columns:12},q=(0,s.forwardRef)((e,t)=>{let r=(0,c.N4)("Grid",$,e),{gutter:n,gutterXs:i,gutterSm:a,gutterMd:o,gutterLg:l,gutterXl:u,children:A,grow:f,justify:p,align:m,columns:g,className:b,id:h,unstyled:y,variant:x}=r,v=Z(r,["gutter","gutterXs","gutterSm","gutterMd","gutterLg","gutterXl","children","grow","justify","align","columns","className","id","unstyled","variant"]),{classes:w,cx:O}=H({gutter:n,justify:p,align:m,gutterXs:i,gutterSm:a,gutterMd:o,gutterLg:l,gutterXl:u},{unstyled:y,name:"Grid",variant:x});return s.createElement(d,{value:{gutter:n,gutterXs:i,gutterSm:a,gutterMd:o,gutterLg:l,gutterXl:u,grow:f,columns:g}},s.createElement(S.x,Y({className:O(w.root,b),ref:t},v),A))});q.Col=M,q.displayName="@mantine/core/Grid";var _=r(4782),ee=r(5302),et=r(5506),er=Object.defineProperty,en=Object.getOwnPropertySymbols,ei=Object.prototype.hasOwnProperty,ea=Object.prototype.propertyIsEnumerable,eo=(e,t,r)=>t in e?er(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,el=(e,t)=>{for(var r in t||(t={}))ei.call(t,r)&&eo(e,r,t[r]);if(en)for(var r of en(t))ea.call(t,r)&&eo(e,r,t[r]);return e},es=(0,i.k)((e,{spacing:t,breakpoints:r,cols:n,verticalSpacing:i})=>{let o=null!=i,l=(0,et.I)(e,r).reduce((r,n)=>{var l,s;let c="maxWidth"in n?"max-width":"min-width",u=(0,f.a)({size:"max-width"===c?n.maxWidth:n.minWidth,sizes:e.breakpoints,units:"em"}),d=(0,ee.oI)(u)-("max-width"===c?1:0);return r[`@media (${c}: ${(0,a.em)(d)})`]={gridTemplateColumns:`repeat(${n.cols}, minmax(0, 1fr))`,gap:`${(0,f.a)({size:null!=(l=n.verticalSpacing)?l:o?i:t,sizes:e.spacing})} ${(0,f.a)({size:null!=(s=n.spacing)?s:t,sizes:e.spacing})}`},r},{});return{root:el({boxSizing:"border-box",display:"grid",gridTemplateColumns:`repeat(${n}, minmax(0, 1fr))`,gap:`${(0,f.a)({size:o?i:t,sizes:e.spacing})} ${(0,f.a)({size:t,sizes:e.spacing})}`},l)}}),ec=Object.defineProperty,eu=Object.getOwnPropertySymbols,ed=Object.prototype.hasOwnProperty,eA=Object.prototype.propertyIsEnumerable,ef=(e,t,r)=>t in e?ec(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ep=(e,t)=>{for(var r in t||(t={}))ed.call(t,r)&&ef(e,r,t[r]);if(eu)for(var r of eu(t))eA.call(t,r)&&ef(e,r,t[r]);return e},em=(e,t)=>{var r={};for(var n in e)ed.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&eu)for(var n of eu(e))0>t.indexOf(n)&&eA.call(e,n)&&(r[n]=e[n]);return r};let eg={breakpoints:[],cols:1,spacing:"md"},eb=(0,s.forwardRef)((e,t)=>{let r=(0,c.N4)("SimpleGrid",eg,e),{className:n,breakpoints:i,cols:a,spacing:o,verticalSpacing:l,children:u,unstyled:d,variant:A}=r,f=em(r,["className","breakpoints","cols","spacing","verticalSpacing","children","unstyled","variant"]),{classes:p,cx:m}=es({breakpoints:i,cols:a,spacing:o,verticalSpacing:l},{name:"SimpleGrid",unstyled:d,variant:A});return s.createElement(S.x,ep({className:m(p.root,n),ref:t},f),u)});eb.displayName="@mantine/core/SimpleGrid";var eh=(0,r(777).Z)("package","IconPackage",[["path",{d:"M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5",key:"svg-0"}],["path",{d:"M12 12l8 -4.5",key:"svg-1"}],["path",{d:"M12 12l0 9",key:"svg-2"}],["path",{d:"M12 12l-8 -4.5",key:"svg-3"}],["path",{d:"M16 5.25l-8 4.5",key:"svg-4"}]]),ey=r(6394),ex=r.n(ey);let ev=(0,i.k)(e=>({wrapper:{padding:"calc(".concat(e.spacing.xl," * 2) ").concat(e.spacing.xl)},title:{fontFamily:"Greycliff CF, ".concat(e.fontFamily),fontSize:(0,a.h)(36),fontWeight:900,lineHeight:1.1,marginBottom:e.spacing.md,color:"dark"===e.colorScheme?e.white:e.black}})),ew=[{img:{src:"/_next/static/media/hotels-icon.4b1ab225.png",height:46,width:47,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEXIx8eIiIezt69FRj/CwcG4uLiDgIKura1MaXFtbGqDg3/AwMCamJhmY2V3dnUeIxiurq6UkpMPDw8AAACUlJS9vb28vLyTk5OKh4qsqK+xor9/RdO4ldaGQurBjeyWdcJYWFhoONhzAAAAIXRSTlMtgRZNO3I+agCIUSRGbnAwk5FEEllpWINgUL5qfvfzhiShxZHwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nAXBBwIAEQwEwCVIdK53///lzUCiAYwWAJWoPjfMPG0nfS+c96v114DblbVKBYRemEsPcC2nlJuGxIN50fIDYjoC0GhOXXQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},title:"Huge choice of inventory",description:"Get access to the best hotel, flight and travel deals."},{img:{src:"/_next/static/media/cloud-icon.f2ba548b.png",height:48,width:45,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEWrkse9ur2RZ9O1n8u9vbuje+WOVdXJ2be//395QNiVYNvAu7uGR+BpKdbg9beARNejceKcb9yjZtqqjM94PdV7St6HV9+af8jHz7dSCN5pKtipatmYWtufY9idXOejKElMAAAAHnRSTlMJPYM5OxNWLAFARBj9WBnzUaPiZlenIDggH4VZ7MaK6d1NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nAXBBQLAIAwEsCvWFp37+P8zSZAIAlACAeZ/hcCl9W+JDH5yyz0wnOimQRy43kXVWnhjwrnOE4491gveD1mGAq41qcMxAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},title:"Exclusive Hotels Offers",description:"Take advantage of exclusive discounts and offers from top brands."},{img:{src:"/_next/static/media/loyalty-program-icon.bee8f794.png",height:47,width:47,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEW7urpgYJAsKCsrKSksKCooJSc0MTFMaXG7u7srKSmvdeJGP0a+n8yVbc56QtZ6POWWWtixav7pXfTkAAAAEXRSTlM+A2lzUKIuACZBUiRLP5LO23jDzXEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5SURBVHicJYtJEsAgEISIW0+bxeT/n7U0JzgACuB6HwId6t8AOeez36BkJwEqtbYtdivij7WwdkITOFoBZ13HMagAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},title:"Great value Loyalty Program",description:" Earn points and use them to pay for bookings.."},{img:{src:"/_next/static/media/pricecomparison-icon.39074ab0.png",height:19,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAMFBMVEVaWVuYlZGFS99oZGhubW1jYGAXFxdgKbdvQMagnaAAAADBh+2PVdqocNekZ9bFmP9tVXDaAAAAD3RSTlNeSNhpeDZBb4deKerybYr0wyyEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGPg4+FgYGZmYWXg5mdiYGHgYmPgZWJn5GRkZAUACB0Aif4ZYtwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},title:" Exclusive precheck",description:"You will get manual prechecks of all your bookings. We will manually pre-check all bookings and booking details with the hotel directly."}],eO=[{img:{src:"/_next/static/media/support-icon.1d0ed272.png",height:37,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAS1BMVEXDwsR0SaOiacp+RNoTEBWqp6cAEQCRm45MaXHg49qhaNe/t78AAAAADABmK9FrKuRQM16iZdRmK9VzKdWSXcqyiOGkaei1ceuQWuNP/D3JAAAAFnRSTlMuNXP+MjQIEQAbtiAjO4fjI+N1H0T5T/jxfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwVxlkWQDAQRcGbgdcdQ0gI+1+po74K4c7VDbQeZaTGlOf43G/9E86RdlDeYgmG8AWZfTCeAaynt1VfAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},title:"Reliable Customer Support",description:"All your issues will be resolved by our 24/7 multi-lingual support service"},{img:{src:"/_next/static/media/user-level-icon.39837553.png",height:47,width:47,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEXQz83///8eHBytra2XlJatbeJzNt0XGRDFxsJMaXEAAAAnJSVpQphraWp7d3waGg71+uanbNe0ocp0OdeUYMNrOb+xcuZ0NeUbHRj5wqmkAAAAGXRSTlMiLltJUV9gjDkADXCNjm8qGVBNUoSFiop81cWUfQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwFwYcBwCAMwDAzk1A2Hf9/WgnDqToMoi/FRwhy1XpJIEpKOUuky73OI5023nW+0Zg7meU9MVRVsR9FdAJGgEseEgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},title:"For different user levels",description:"You can assign user roles and limit access for safety and transparency."},{img:{src:"/_next/static/media/richcontent-icon.eb1a2adc.png",height:25,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEVTTk+keNGOjo5/VVVVUlKXkoiVX96EWc/T28/Byrazs7OuiNTS1sp/VqLU1NSAS92kbeIADpkHAAAAEXRSTlM1STIGexj2ShUeL19/XmH0999ncboAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAoSURBVHicBcGHAQAgCAOwokCp+/9rTSCzANDAfNvdAd6c65QgskZ0fQzPANV5uQNEAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},title:"High-quality Back-office",description:"All information about orders, invoices, vouchers, and reports is available to you in real-time"},{img:{src:"/_next/static/media/rich-features-icon.80f877ef.png",height:41,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAP1BMVEVMaXEHBwcAAAB2dXWSkZEjHR+yqb6+s8W8vLzKzMWATdB9QNeUgL+xsbGWWNicaNVpZ2eHSdeZXdija9Ozs7PjJ+TCAAAAFXRSTlMAMQlgTEgrDho0QacGOKpidIhqgEHAmVlUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nB3KSQ7AIAzAQAOBBChLy///itLbWDKYJKkKNnKIrIYHzE57HFror8sK3yGG/N81bVEuJrIBSLWH12kAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},title:"Rich functionality",description:"In a single system with a user-friendly interface, you can quickly book hotels and other travel-related services at great prices."}];function ej(){let{classes:e}=ev(),t=ew.map(e=>(0,n.jsxs)("div",{className:"p-3 m-2 shadow-sm",children:[(0,n.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,n.jsx)(o.x,{fz:"lg",mt:"sm",fw:500,children:e.title}),(0,n.jsx)(l.k,{size:44,radius:"md",className:"bg-transparent",children:(0,n.jsx)(ex(),{src:null==e?void 0:e.img,alt:"clud"})})]}),(0,n.jsx)(o.x,{c:"dimmed",fz:"sm",children:e.description})]},e.title)),r=eO.map(e=>(0,n.jsxs)("div",{className:"p-3 m-2 shadow-sm",children:[(0,n.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,n.jsx)(o.x,{fz:"lg",mt:"sm",fw:500,children:e.title}),(0,n.jsx)(l.k,{size:44,radius:"md",className:"bg-transparent",children:(0,n.jsx)(ex(),{src:e.img,alt:"clud"})})]}),(0,n.jsx)(o.x,{c:"dimmed",fz:"sm",children:e.description})]},null==e?void 0:e.title));return(0,n.jsx)("div",{className:"".concat(e.wrapper," mt-20 container p-20 m-auto"),children:(0,n.jsxs)(q,{gutter:80,children:[(0,n.jsxs)("div",{className:"m-auto text-center",children:[(0,n.jsx)("h1",{className:"m-auto mt-5 text-3xl font-bold text-center",children:"Save time and money"}),(0,n.jsx)("p",{className:"text-gray-500",children:"comfort and the best prices for your business and Events"})]}),(0,n.jsx)(M,{span:12,md:12,className:"p-4",children:(0,n.jsxs)(_.m,{defaultValue:"gallery",orientation:"vertical",className:"flex-col md:flex-row",children:[(0,n.jsxs)(_.m.List,{className:"w-full text-xl font-bold border-r-0 md:w-1/4 text-neutral-950",children:[(0,n.jsxs)(_.m.Tab,{value:"gallery",className:"border-r-0 border-black ",children:[(0,n.jsxs)("h5",{className:"flex items-center gap-2",children:[(0,n.jsx)(eh,{className:"text-blue-600"}),"Futures"]}),(0,n.jsx)("p",{className:"py-1 text-sm font-normal text-gray-500",children:"20+ input components"})]}),(0,n.jsxs)(_.m.Tab,{value:"messages",className:"border-r-0 border-black",children:[(0,n.jsxs)("h5",{className:"flex items-center gap-2",children:[(0,n.jsx)(eh,{className:"text-blue-600"}),"Futures"]}),(0,n.jsx)("p",{className:"py-1 text-sm font-normal text-gray-500",children:"20+ input components"})]}),(0,n.jsxs)(_.m.Tab,{value:"settings",className:"border-r-0 border-black",children:[(0,n.jsxs)("h5",{className:"flex items-center gap-2",children:[(0,n.jsx)(eh,{className:"text-blue-600"}),"Futures"]}),(0,n.jsx)("p",{className:"py-1 text-sm font-normal text-gray-500",children:"20+ input components"})]})]}),(0,n.jsx)(_.m.Panel,{value:"gallery",children:(0,n.jsx)(eb,{cols:2,spacing:20,breakpoints:[{maxWidth:"md",cols:1}],className:"p-0 md:px-20",children:t})}),(0,n.jsxs)(_.m.Panel,{value:"messages",children:[" ",(0,n.jsx)(eb,{cols:2,spacing:20,breakpoints:[{maxWidth:"md",cols:1}],className:"p-0 md:px-20",children:r})]}),(0,n.jsxs)(_.m.Panel,{value:"settings",children:[" ",(0,n.jsx)(eb,{cols:2,spacing:20,breakpoints:[{maxWidth:"md",cols:1}],className:"p-0 md:px-20",children:t})]})]})})]})})}},7611:function(e,t,r){"use strict";var n=r(6054);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,a,o){if(o!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return r.PropTypes=r,r}},9497:function(e,t,r){e.exports=r(7611)()},6054:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);