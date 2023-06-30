"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{4782:function(e,r,t){t.d(r,{m:function(){return eE}});var o=t(6006),a=t(9244),n=t(1621);let l={context:"Tabs component was not found in the tree",value:"Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value"},[i,c]=(0,n.R)(l.context);var s=t(2349),d=t(72),b=t(276),f=Object.defineProperty,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,v=(e,r,t)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&v(e,t,r[t]);if(p)for(var t of p(r))m.call(r,t)&&v(e,t,r[t]);return e},g=(0,d.k)((e,r,{variant:t})=>{let o="vertical"===r.orientation;return{tabsList:y({display:"flex",flexWrap:"wrap",flexDirection:o?"column":"row",justifyContent:b.H[r.position],'& [role="tab"]':{flex:r.grow?1:void 0}},function({orientation:e,inverted:r,placement:t},o,a){let n="vertical"===e;return"default"===a?{[n?"left"===t?"borderRight":"borderLeft":r?"borderTop":"borderBottom"]:`${(0,s.h)(2)} solid ${"dark"===o.colorScheme?o.colors.dark[4]:o.colors.gray[3]}`}:"outline"===a?{[n?"left"===t?"borderRight":"borderLeft":r?"borderTop":"borderBottom"]:`${(0,s.h)(1)} solid ${"dark"===o.colorScheme?o.colors.dark[4]:o.colors.gray[3]}`}:"pills"===a?{gap:`calc(${o.spacing.sm} / 2)`}:{}}(r,e,t))}}),h=t(1600),O=Object.defineProperty,w=Object.defineProperties,k=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,x=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,N=(e,r)=>{for(var t in r||(r={}))j.call(r,t)&&x(e,t,r[t]);if(P)for(var t of P(r))T.call(r,t)&&x(e,t,r[t]);return e},I=(e,r)=>w(e,k(r)),S=(e,r)=>{var t={};for(var o in e)j.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&P)for(var o of P(e))0>r.indexOf(o)&&T.call(e,o)&&(t[o]=e[o]);return t};let C={grow:!1,position:"left"},$=(0,o.forwardRef)((e,r)=>{let t=(0,a.N4)("TabsList",C,e),{children:n,className:l,grow:i,position:s}=t,d=S(t,["children","className","grow","position"]),{orientation:b,variant:f,color:p,radius:u,inverted:m,placement:v,classNames:y,styles:O,unstyled:w}=c(),{classes:k,cx:P}=g({orientation:b,grow:i,color:p,position:s,radius:u,inverted:m,placement:v},{name:"Tabs",unstyled:w,classNames:y,styles:O,variant:f});return o.createElement(h.x,I(N({},d),{className:P(k.tabsList,l),ref:r,role:"tablist","aria-orientation":b}),n)});$.displayName="@mantine/core/TabsList";var E=t(1186),R=(0,d.k)((e,{orientation:r})=>({panel:{flex:"vertical"===r?1:void 0}})),L=Object.defineProperty,D=Object.defineProperties,z=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,W=(e,r,t)=>r in e?L(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))K.call(r,t)&&W(e,t,r[t]);if(B)for(var t of B(r))M.call(r,t)&&W(e,t,r[t]);return e},H=(e,r)=>D(e,z(r)),V=(e,r)=>{var t={};for(var o in e)K.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&B)for(var o of B(e))0>r.indexOf(o)&&M.call(e,o)&&(t[o]=e[o]);return t};let F={},q=(0,o.forwardRef)((e,r)=>{let t=(0,a.N4)("TabsPanel",F,e),{value:n,children:l,sx:i,className:s}=t,d=V(t,["value","children","sx","className"]),b=c(),{classes:f,cx:p}=R({orientation:b.orientation,color:b.color,radius:b.radius,inverted:b.inverted,placement:b.placement},{name:"Tabs",unstyled:b.unstyled,classNames:b.classNames,styles:b.styles,variant:b.variant}),u=b.getPanelId(n),m=b.value===n,v=b.keepMounted?l:m?l:null;return(0,o.useEffect)(()=>(b.setMountedPanelIds(e=>[...e,u]),b.setMountedPanelIds(e=>e.filter(e=>e!==u))),[u]),o.createElement(h.x,H(_({},d),{ref:r,sx:[{display:m?void 0:"none"},...(0,E.R)(i)],className:p(f.panel,s),role:"tabpanel",id:u,"aria-labelledby":b.getTabId(n)}),v)});q.displayName="@mantine/core/TabsPanel";var A=t(4089),G=Object.defineProperty,J=Object.defineProperties,Q=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,Z=(e,r,t)=>r in e?G(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,ee=(e,r)=>{for(var t in r||(r={}))X.call(r,t)&&Z(e,t,r[t]);if(U)for(var t of U(r))Y.call(r,t)&&Z(e,t,r[t]);return e},er=(e,r)=>J(e,Q(r)),et=(0,d.k)((e,r,{variant:t})=>({tabLabel:{},tab:ee({position:"relative",padding:`${e.spacing.xs} ${e.spacing.md}`,paddingLeft:r.withIcon?e.spacing.xs:void 0,paddingRight:r.withRightSection?e.spacing.xs:void 0,fontSize:e.fontSizes.sm,whiteSpace:"nowrap",zIndex:0,display:"flex",alignItems:"center",justifyContent:"horizontal"===r.orientation?"center":void 0,lineHeight:1,"&:disabled":ee({opacity:.5,cursor:"not-allowed"},e.fn.hover({backgroundColor:"transparent"})),"&:focus":{zIndex:1}},function(e,{orientation:r,color:t,radius:o,inverted:a,placement:n},l){let i="vertical"===r,c=e.fn.variant({color:t,variant:"filled"}),d=(0,s.h)(e.fn.radius(o)),b="vertical"===r?"left"===n?`${d} 0 0 ${d}`:` 0 ${d} ${d} 0`:a?`0 0 ${d} ${d}`:`${d} ${d} 0 0`;return"default"===l?er(ee({[i?"left"===n?"borderRight":"borderLeft":a?"borderTop":"borderBottom"]:`${(0,s.h)(2)} solid transparent`,[i?"left"===n?"marginRight":"marginLeft":a?"marginTop":"marginBottom"]:(0,s.h)(-2),borderRadius:b},e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0],borderColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3]})),{"&[data-active]":ee({borderColor:c.background,color:"dark"===e.colorScheme?e.white:e.black},e.fn.hover({borderColor:c.background}))}):"outline"===l?{borderRadius:b,border:`${(0,s.h)(1)} solid transparent`,[i?"left"===n?"borderRight":"borderLeft":a?"borderTop":"borderBottom"]:"none","&[data-active]":{borderColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[3],"&::before":{content:'""',backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,position:"absolute",bottom:i?0:a?"unset":(0,s.h)(-1),top:i?0:a?(0,s.h)(-1):"unset",[i?"width":"height"]:(0,s.h)(1),right:i?"left"===n?(0,s.h)(-1):"unset":0,left:i?"left"===n?"unset":(0,s.h)(-1):0}}}:"pills"===l?er(ee({borderRadius:e.fn.radius(o)},e.fn.hover({backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]})),{"&[data-active]":ee({backgroundColor:c.background,color:e.white},e.fn.hover({backgroundColor:c.background}))}):{}}(e,r,t)),tabRightSection:{display:"flex",justifyContent:"center",alignItems:"center","&:not(:only-child)":{marginLeft:(0,s.h)(7)}},tabIcon:{display:"flex",justifyContent:"center",alignItems:"center","&:not(:only-child)":{marginRight:(0,s.h)(7)}}})),eo=t(1983),ea=Object.defineProperty,en=Object.defineProperties,el=Object.getOwnPropertyDescriptors,ei=Object.getOwnPropertySymbols,ec=Object.prototype.hasOwnProperty,es=Object.prototype.propertyIsEnumerable,ed=(e,r,t)=>r in e?ea(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eb=(e,r)=>{for(var t in r||(r={}))ec.call(r,t)&&ed(e,t,r[t]);if(ei)for(var t of ei(r))es.call(r,t)&&ed(e,t,r[t]);return e},ef=(e,r)=>en(e,el(r)),ep=(e,r)=>{var t={};for(var o in e)ec.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&ei)for(var o of ei(e))0>r.indexOf(o)&&es.call(e,o)&&(t[o]=e[o]);return t};let eu={},em=(0,o.forwardRef)((e,r)=>{let t=(0,a.N4)("TabsTab",eu,e),{value:n,children:l,onKeyDown:i,onClick:s,className:d,icon:b,rightSection:f,color:p}=t,u=ep(t,["value","children","onKeyDown","onClick","className","icon","rightSection","color"]),m=c(),v=!!b,y=!!f,{theme:g,classes:h,cx:O}=et({withIcon:v||y&&!l,withRightSection:y||v&&!l,orientation:m.orientation,color:p||m.color,radius:m.radius,inverted:m.inverted,placement:m.placement},{name:"Tabs",unstyled:m.unstyled,classNames:m.classNames,styles:m.styles,variant:m.variant}),w=n===m.value,k=m.getPanelId(n),P=m.mountedPanelIds.includes(n)?k:void 0;return o.createElement(eo.k,ef(eb({},u),{unstyled:m.unstyled,className:O(h.tab,d),"data-active":w||void 0,ref:r,type:"button",role:"tab",id:m.getTabId(n),"aria-selected":w,tabIndex:w||null===m.value?0:-1,"aria-controls":P,onClick:e=>{m.onTabChange(m.allowTabDeactivation&&n===m.value?null:n),null==s||s(e)},onKeyDown:(0,A.R)({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:m.activateTabWithKeyboard,loop:m.loop,dir:g.dir,orientation:m.orientation,onKeyDown:i})}),b&&o.createElement("span",{className:h.tabIcon},b),l&&o.createElement("span",{className:h.tabLabel},l),f&&o.createElement("span",{className:h.tabRightSection},f))});function ev(e,r){return t=>{if("string"!=typeof t||0===t.trim().length)throw Error(r);return`${e}-${t}`}}em.displayName="@mantine/core/Tab";var ey=t(721),eg=t(4676);function eh({defaultValue:e,value:r,onTabChange:t,orientation:a,children:n,loop:c,id:s,activateTabWithKeyboard:d,allowTabDeactivation:b,variant:f,color:p,radius:u,inverted:m,placement:v,keepMounted:y=!0,classNames:g,styles:h,unstyled:O}){let w=(0,ey.M)(s),[k,P]=(0,o.useState)([]),[j,T]=(0,eg.C)({value:r,defaultValue:e,finalValue:null,onChange:t});return o.createElement(i,{value:{placement:v,value:j,orientation:a,id:w,loop:c,activateTabWithKeyboard:d,getTabId:ev(`${w}-tab`,l.value),getPanelId:ev(`${w}-panel`,l.value),onTabChange:T,setMountedPanelIds:P,mountedPanelIds:k,allowTabDeactivation:b,variant:f,color:p,radius:u,inverted:m,keepMounted:y,classNames:g,styles:h,unstyled:O}},n)}eh.displayName="@mantine/core/TabsProvider";var eO=(0,d.k)((e,{orientation:r,placement:t})=>({root:{display:"vertical"===r?"flex":void 0,flexDirection:"right"===t?"row-reverse":"row"}})),ew=Object.defineProperty,ek=Object.defineProperties,eP=Object.getOwnPropertyDescriptors,ej=Object.getOwnPropertySymbols,eT=Object.prototype.hasOwnProperty,ex=Object.prototype.propertyIsEnumerable,eN=(e,r,t)=>r in e?ew(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eI=(e,r)=>{for(var t in r||(r={}))eT.call(r,t)&&eN(e,t,r[t]);if(ej)for(var t of ej(r))ex.call(r,t)&&eN(e,t,r[t]);return e},eS=(e,r)=>ek(e,eP(r)),eC=(e,r)=>{var t={};for(var o in e)eT.call(e,o)&&0>r.indexOf(o)&&(t[o]=e[o]);if(null!=e&&ej)for(var o of ej(e))0>r.indexOf(o)&&ex.call(e,o)&&(t[o]=e[o]);return t};let e$={orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,allowTabDeactivation:!1,unstyled:!1,inverted:!1,variant:"default",placement:"left"},eE=(0,o.forwardRef)((e,r)=>{let t=(0,a.N4)("Tabs",e$,e),{defaultValue:n,value:l,orientation:i,loop:c,activateTabWithKeyboard:s,allowTabDeactivation:d,children:b,id:f,onTabChange:p,variant:u,color:m,className:v,unstyled:y,classNames:g,styles:O,radius:w,inverted:k,keepMounted:P,placement:j}=t,T=eC(t,["defaultValue","value","orientation","loop","activateTabWithKeyboard","allowTabDeactivation","children","id","onTabChange","variant","color","className","unstyled","classNames","styles","radius","inverted","keepMounted","placement"]),{classes:x,cx:N}=eO({orientation:i,color:m,radius:w,inverted:k,placement:j},{unstyled:y,name:"Tabs",classNames:g,styles:O,variant:u});return o.createElement(eh,{activateTabWithKeyboard:s,defaultValue:n,orientation:i,onTabChange:p,value:l,id:f,loop:c,allowTabDeactivation:d,color:m,variant:u,radius:w,inverted:k,keepMounted:P,placement:j,classNames:g,styles:O,unstyled:y},o.createElement(h.x,eS(eI({},T),{className:N(x.root,v),id:f,ref:r}),b))});eE.List=$,eE.Tab=em,eE.Panel=q,eE.displayName="@mantine/core/Tabs"}}]);