"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[571],{4697:function(e,r,t){t.d(r,{I:function(){return eD}});var n=t(6006),o=t(9244),a=t(2349),i=t(1307),l=t(72),c=t(2898),s=(0,l.k)((e,r,{size:t})=>({label:{display:"inline-block",fontSize:(0,c.a)({size:t,sizes:e.fontSizes}),fontWeight:500,color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[9],wordBreak:"break-word",cursor:"default",WebkitTapHighlightColor:"transparent"},required:{color:e.fn.variant({variant:"filled",color:"red"}).background}})),p=t(1600),u=Object.defineProperty,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,r,t)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&y(e,t,r[t]);if(d)for(var t of d(r))b.call(r,t)&&y(e,t,r[t]);return e},v=(e,r)=>{var t={};for(var n in e)f.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&d)for(var n of d(e))0>r.indexOf(n)&&b.call(e,n)&&(t[n]=e[n]);return t};let O={labelElement:"label",size:"sm"},h=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("InputLabel",O,e),{labelElement:a,children:i,required:l,size:c,classNames:u,styles:d,unstyled:f,className:b,htmlFor:y,__staticSelector:h,variant:g,onMouseDown:w}=t,k=v(t,["labelElement","children","required","size","classNames","styles","unstyled","className","htmlFor","__staticSelector","variant","onMouseDown"]),{classes:j,cx:P}=s(null,{name:["InputWrapper",h],classNames:u,styles:d,unstyled:f,variant:g,size:c});return n.createElement(p.x,m({component:a,ref:r,className:P(j.label,b),htmlFor:"label"===a?y:void 0,onMouseDown:e=>{null==w||w(e),!e.defaultPrevented&&e.detail>1&&e.preventDefault()}},k),i,l&&n.createElement("span",{className:j.required,"aria-hidden":!0}," *"))});h.displayName="@mantine/core/InputLabel";var g=(0,l.k)((e,r,{size:t})=>({error:{wordBreak:"break-word",color:e.fn.variant({variant:"filled",color:"red"}).background,fontSize:`calc(${(0,c.a)({size:t,sizes:e.fontSizes})} - ${(0,a.h)(2)})`,lineHeight:1.2,display:"block"}})),w=t(8971),k=Object.defineProperty,j=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,S=(e,r,t)=>r in e?k(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,E=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&S(e,t,r[t]);if(j)for(var t of j(r))x.call(r,t)&&S(e,t,r[t]);return e},N=(e,r)=>{var t={};for(var n in e)P.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&j)for(var n of j(e))0>r.indexOf(n)&&x.call(e,n)&&(t[n]=e[n]);return t};let z={size:"sm"},I=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("InputError",z,e),{children:a,className:i,classNames:l,styles:c,unstyled:s,size:p,__staticSelector:u,variant:d}=t,f=N(t,["children","className","classNames","styles","unstyled","size","__staticSelector","variant"]),{classes:b,cx:y}=g(null,{name:["InputWrapper",u],classNames:l,styles:c,unstyled:s,variant:d,size:p});return n.createElement(w.x,E({className:y(b.error,i),ref:r},f),a)});I.displayName="@mantine/core/InputError";var $=(0,l.k)((e,r,{size:t})=>({description:{wordBreak:"break-word",color:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[6],fontSize:`calc(${(0,c.a)({size:t,sizes:e.fontSizes})} - ${(0,a.h)(2)})`,lineHeight:1.2,display:"block"}})),C=Object.defineProperty,W=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,D=(e,r,t)=>r in e?C(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,T=(e,r)=>{for(var t in r||(r={}))_.call(r,t)&&D(e,t,r[t]);if(W)for(var t of W(r))R.call(r,t)&&D(e,t,r[t]);return e},A=(e,r)=>{var t={};for(var n in e)_.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&W)for(var n of W(e))0>r.indexOf(n)&&R.call(e,n)&&(t[n]=e[n]);return t};let B={size:"sm"},H=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("InputDescription",B,e),{children:a,className:i,classNames:l,styles:c,unstyled:s,size:p,__staticSelector:u,variant:d}=t,f=A(t,["children","className","classNames","styles","unstyled","size","__staticSelector","variant"]),{classes:b,cx:y}=$(null,{name:["InputWrapper",u],classNames:l,styles:c,unstyled:s,variant:d,size:p});return n.createElement(w.x,T({color:"dimmed",className:y(b.description,i),ref:r,unstyled:s},f),a)});H.displayName="@mantine/core/InputDescription";let F=(0,n.createContext)({offsetBottom:!1,offsetTop:!1,describedBy:void 0}),q=F.Provider,L=()=>(0,n.useContext)(F);var M=Object.defineProperty,Z=Object.defineProperties,U=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,K=(e,r,t)=>r in e?M(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Q=(e,r)=>{for(var t in r||(r={}))J.call(r,t)&&K(e,t,r[t]);if(Y)for(var t of Y(r))G.call(r,t)&&K(e,t,r[t]);return e},V=(e,r)=>Z(e,U(r)),X=(0,l.k)(e=>({root:V(Q({},e.fn.fontStyles()),{lineHeight:e.lineHeight})})),ee=Object.defineProperty,er=Object.defineProperties,et=Object.getOwnPropertyDescriptors,en=Object.getOwnPropertySymbols,eo=Object.prototype.hasOwnProperty,ea=Object.prototype.propertyIsEnumerable,ei=(e,r,t)=>r in e?ee(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,el=(e,r)=>{for(var t in r||(r={}))eo.call(r,t)&&ei(e,t,r[t]);if(en)for(var t of en(r))ea.call(r,t)&&ei(e,t,r[t]);return e},ec=(e,r)=>er(e,et(r)),es=(e,r)=>{var t={};for(var n in e)eo.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&en)for(var n of en(e))0>r.indexOf(n)&&ea.call(e,n)&&(t[n]=e[n]);return t};let ep={labelElement:"label",size:"sm",inputContainer:e=>e,inputWrapperOrder:["label","description","input","error"]},eu=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("InputWrapper",ep,e),{className:a,label:i,children:l,required:c,id:s,error:u,description:d,labelElement:f,labelProps:b,descriptionProps:y,errorProps:m,classNames:v,styles:O,size:g,inputContainer:w,__staticSelector:k,unstyled:j,inputWrapperOrder:P,withAsterisk:x,variant:S}=t,E=es(t,["className","label","children","required","id","error","description","labelElement","labelProps","descriptionProps","errorProps","classNames","styles","size","inputContainer","__staticSelector","unstyled","inputWrapperOrder","withAsterisk","variant"]),{classes:N,cx:z}=X(null,{classNames:v,styles:O,name:["InputWrapper",k],unstyled:j,variant:S,size:g}),$={classNames:v,styles:O,unstyled:j,size:g,variant:S,__staticSelector:k},C=s?`${s}-error`:null==m?void 0:m.id,W=s?`${s}-description`:null==y?void 0:y.id,_=!!u&&"boolean"!=typeof u,R=`${_?C:""} ${d?W:""}`,D=R.trim().length>0?R.trim():void 0,T=i&&n.createElement(h,el(el({key:"label",labelElement:f,id:s?`${s}-label`:void 0,htmlFor:s,required:"boolean"==typeof x?x:c},$),b),i),A=d&&n.createElement(H,ec(el(el({key:"description"},y),$),{size:(null==y?void 0:y.size)||$.size,id:(null==y?void 0:y.id)||W}),d),B=n.createElement(n.Fragment,{key:"input"},w(l)),F="boolean"!=typeof u&&u&&n.createElement(I,ec(el(el({},m),$),{size:(null==m?void 0:m.size)||$.size,key:"error",id:(null==m?void 0:m.id)||C}),u),L=P.map(e=>{switch(e){case"label":return T;case"input":return B;case"description":return A;case"error":return F;default:return null}});return n.createElement(q,{value:el({describedBy:D},function(e,{hasDescription:r,hasError:t}){let n=e.findIndex(e=>"input"===e),o=e[n-1],a=e[n+1];return{offsetBottom:r&&"description"===a||t&&"error"===a,offsetTop:r&&"description"===o||t&&"error"===o}}(P,{hasDescription:!!A,hasError:!!F}))},n.createElement(p.x,el({className:z(N.root,a),ref:r},E),L))});eu.displayName="@mantine/core/InputWrapper";var ed=t(1186),ef=Object.defineProperty,eb=Object.getOwnPropertySymbols,ey=Object.prototype.hasOwnProperty,em=Object.prototype.propertyIsEnumerable,ev=(e,r,t)=>r in e?ef(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,eO=(e,r)=>{for(var t in r||(r={}))ey.call(r,t)&&ev(e,t,r[t]);if(eb)for(var t of eb(r))em.call(r,t)&&ev(e,t,r[t]);return e},eh=(e,r)=>{var t={};for(var n in e)ey.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&eb)for(var n of eb(e))0>r.indexOf(n)&&em.call(e,n)&&(t[n]=e[n]);return t};let eg={},ew=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("InputPlaceholder",eg,e),{sx:a}=t,i=eh(t,["sx"]);return n.createElement(p.x,eO({component:"span",sx:[e=>e.fn.placeholderStyles(),...(0,ed.R)(a)],ref:r},i))});ew.displayName="@mantine/core/InputPlaceholder";var ek=t(2866),ej=t(269),eP=Object.defineProperty,ex=Object.defineProperties,eS=Object.getOwnPropertyDescriptors,eE=Object.getOwnPropertySymbols,eN=Object.prototype.hasOwnProperty,ez=Object.prototype.propertyIsEnumerable,eI=(e,r,t)=>r in e?eP(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,e$=(e,r)=>{for(var t in r||(r={}))eN.call(r,t)&&eI(e,t,r[t]);if(eE)for(var t of eE(r))ez.call(r,t)&&eI(e,t,r[t]);return e},eC=(e,r)=>ex(e,eS(r)),eW=(e,r)=>{var t={};for(var n in e)eN.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&eE)for(var n of eE(e))0>r.indexOf(n)&&ez.call(e,n)&&(t[n]=e[n]);return t};let e_={size:"sm",variant:"default"},eR=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("Input",e_,e),{className:i,error:l,required:c,disabled:s,variant:u,icon:d,style:f,rightSectionWidth:b,iconWidth:y,rightSection:m,rightSectionProps:v,radius:O,size:h,wrapperProps:g,classNames:w,styles:k,__staticSelector:j,multiline:P,sx:x,unstyled:S,pointer:E}=t,N=eW(t,["className","error","required","disabled","variant","icon","style","rightSectionWidth","iconWidth","rightSection","rightSectionProps","radius","size","wrapperProps","classNames","styles","__staticSelector","multiline","sx","unstyled","pointer"]),{offsetBottom:z,offsetTop:I,describedBy:$}=L(),{classes:C,cx:W}=(0,ek.Z)({radius:O,multiline:P,invalid:!!l,rightSectionWidth:b?(0,a.h)(b):void 0,iconWidth:y,withRightSection:!!m,offsetBottom:z,offsetTop:I,pointer:E},{classNames:w,styles:k,name:["Input",j],unstyled:S,variant:u,size:h}),{systemStyles:_,rest:R}=(0,ej.x)(N);return n.createElement(p.x,e$(e$({className:W(C.wrapper,i),sx:x,style:f},_),g),d&&n.createElement("div",{className:C.icon},d),n.createElement(p.x,eC(e$({component:"input"},R),{ref:r,required:c,"aria-invalid":!!l,"aria-describedby":$,disabled:s,"data-disabled":s||void 0,"data-with-icon":!!d||void 0,"data-invalid":!!l||void 0,className:C.input})),m&&n.createElement("div",eC(e$({},v),{className:C.rightSection}),m))});eR.displayName="@mantine/core/Input",eR.Wrapper=eu,eR.Label=h,eR.Description=H,eR.Error=I,eR.Placeholder=ew;let eD=(0,i.F)(eR)},2866:function(e,r,t){t.d(r,{J:function(){return y}});var n=t(2349),o=t(72),a=t(2898),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&d(e,t,r[t]);if(s)for(var t of s(r))u.call(r,t)&&d(e,t,r[t]);return e},b=(e,r)=>l(e,c(r));let y={xs:(0,n.h)(30),sm:(0,n.h)(36),md:(0,n.h)(42),lg:(0,n.h)(50),xl:(0,n.h)(60)},m=["default","filled","unstyled"];var v=(0,o.k)((e,{multiline:r,radius:t,invalid:o,rightSectionWidth:i,withRightSection:l,iconWidth:c,offsetBottom:s,offsetTop:p,pointer:u},{variant:d,size:v})=>{let O=e.fn.variant({variant:"filled",color:"red"}).background,h="default"===d||"filled"===d?{minHeight:(0,a.a)({size:v,sizes:y}),paddingLeft:`calc(${(0,a.a)({size:v,sizes:y})}  / 3)`,paddingRight:l?i||(0,a.a)({size:v,sizes:y}):`calc(${(0,a.a)({size:v,sizes:y})}  / 3)`,borderRadius:e.fn.radius(t)}:"unstyled"===d&&l?{paddingRight:i||(0,a.a)({size:v,sizes:y})}:null;return{wrapper:{position:"relative",marginTop:p?`calc(${e.spacing.xs} / 2)`:void 0,marginBottom:s?`calc(${e.spacing.xs} / 2)`:void 0,"&:has(input:disabled)":{"& .mantine-Input-rightSection":{display:"none"}}},input:b(f(f(b(f({},e.fn.fontStyles()),{height:r?"unstyled"===d?void 0:"auto":(0,a.a)({size:v,sizes:y}),WebkitTapHighlightColor:"transparent",lineHeight:r?e.lineHeight:`calc(${(0,a.a)({size:v,sizes:y})} - ${(0,n.h)(2)})`,appearance:"none",resize:"none",boxSizing:"border-box",fontSize:(0,a.a)({size:v,sizes:e.fontSizes}),width:"100%",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,display:"block",textAlign:"left",cursor:u?"pointer":void 0}),function({theme:e,variant:r}){return m.includes(r)?"default"===r?{border:`${(0,n.h)(1)} solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,transition:"border-color 100ms ease","&:focus, &:focus-within":e.focusRingStyles.inputStyles(e)}:"filled"===r?{border:`${(0,n.h)(1)} solid transparent`,backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1],"&:focus, &:focus-within":e.focusRingStyles.inputStyles(e)}:{borderWidth:0,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"transparent",minHeight:(0,n.h)(28),outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}}:null}({theme:e,variant:d})),h),{"&:disabled, &[data-disabled]":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,cursor:"not-allowed",pointerEvents:"none","&::placeholder":{color:e.colors.dark[2]}},"&[data-invalid]":{color:O,borderColor:O,"&::placeholder":{opacity:1,color:O}},"&[data-with-icon]":{paddingLeft:"number"==typeof c?(0,n.h)(c):(0,a.a)({size:v,sizes:y})},"&::placeholder":b(f({},e.fn.placeholderStyles()),{opacity:1}),"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:c?(0,n.h)(c):(0,a.a)({size:v,sizes:y}),color:o?e.colors.red["dark"===e.colorScheme?6:7]:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[5]},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:i||(0,a.a)({size:v,sizes:y})}}});r.Z=v},4482:function(e,r,t){t.d(r,{k:function(){return m}});var n=t(9244),o=t(721),a=t(269),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&d(e,t,r[t]);if(s)for(var t of s(r))u.call(r,t)&&d(e,t,r[t]);return e},b=(e,r)=>l(e,c(r)),y=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))0>r.indexOf(n)&&u.call(e,n)&&(t[n]=e[n]);return t};function m(e,r,t){let i=(0,n.N4)(e,r,t),{label:l,description:c,error:s,required:p,classNames:u,styles:d,className:m,unstyled:v,__staticSelector:O,sx:h,errorProps:g,labelProps:w,descriptionProps:k,wrapperProps:j,id:P,size:x,style:S,inputContainer:E,inputWrapperOrder:N,withAsterisk:z,variant:I}=i,$=y(i,["label","description","error","required","classNames","styles","className","unstyled","__staticSelector","sx","errorProps","labelProps","descriptionProps","wrapperProps","id","size","style","inputContainer","inputWrapperOrder","withAsterisk","variant"]),C=(0,o.M)(P),{systemStyles:W,rest:_}=(0,a.x)($),R=f({label:l,description:c,error:s,required:p,classNames:u,className:m,__staticSelector:O,sx:h,errorProps:g,labelProps:w,descriptionProps:k,unstyled:v,styles:d,id:C,size:x,style:S,inputContainer:E,inputWrapperOrder:N,withAsterisk:z,variant:I},j);return b(f({},_),{classNames:u,styles:d,unstyled:v,wrapperProps:f(f({},R),W),inputProps:{required:p,classNames:u,styles:d,unstyled:v,id:C,size:x,__staticSelector:O,error:s,variant:I}})}},6283:function(e,r,t){t.d(r,{o:function(){return v}});var n=t(6006),o=t(4482),a=t(4697),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&d(e,t,r[t]);if(s)for(var t of s(r))u.call(r,t)&&d(e,t,r[t]);return e},b=(e,r)=>l(e,c(r)),y=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))0>r.indexOf(n)&&u.call(e,n)&&(t[n]=e[n]);return t};let m={type:"text",size:"sm",__staticSelector:"TextInput"},v=(0,n.forwardRef)((e,r)=>{let t=(0,o.k)("TextInput",m,e),{inputProps:i,wrapperProps:l}=t,c=y(t,["inputProps","wrapperProps"]);return n.createElement(a.I.Wrapper,f({},l),n.createElement(a.I,b(f(f({},i),c),{ref:r})))});v.displayName="@mantine/core/TextInput"},8971:function(e,r,t){t.d(r,{x:function(){return N}});var n=t(6006),o=t(9244),a=t(1307),i=t(72),l=t(2898),c=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,b=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))d.call(r,t)&&b(e,t,r[t]);if(u)for(var t of u(r))f.call(r,t)&&b(e,t,r[t]);return e},m=(e,r)=>s(e,p(r)),v=(0,i.k)((e,{color:r,lineClamp:t,truncate:n,inline:o,inherit:a,underline:i,gradient:c,weight:s,transform:p,align:u,strikethrough:d,italic:f},{size:b})=>{let v=e.fn.variant({variant:"gradient",gradient:c});return{root:m(y(y(y(y({},e.fn.fontStyles()),e.fn.focusStyles()),"number"==typeof t?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:t,WebkitBoxOrient:"vertical"}:null),function({theme:e,truncate:r}){return"start"===r?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",direction:"ltr"===e.dir?"rtl":"ltr",textAlign:"ltr"===e.dir?"right":"left"}:r?{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}:null}({theme:e,truncate:n})),{color:function({theme:e,color:r}){return"dimmed"===r?e.fn.dimmed():"string"==typeof r&&(r in e.colors||r.split(".")[0]in e.colors)?e.fn.variant({variant:"filled",color:r}).background:r||"inherit"}({color:r,theme:e}),fontFamily:a?"inherit":e.fontFamily,fontSize:a||void 0===b?"inherit":(0,l.a)({size:b,sizes:e.fontSizes}),lineHeight:a?"inherit":o?1:e.lineHeight,textDecoration:function({underline:e,strikethrough:r}){let t=[];return e&&t.push("underline"),r&&t.push("line-through"),t.length>0?t.join(" "):"none"}({underline:i,strikethrough:d}),WebkitTapHighlightColor:"transparent",fontWeight:a?"inherit":s,textTransform:p,textAlign:u,fontStyle:f?"italic":void 0}),gradient:{backgroundImage:v.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}}),O=t(1600),h=Object.defineProperty,g=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,j=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,P=(e,r)=>{for(var t in r||(r={}))w.call(r,t)&&j(e,t,r[t]);if(g)for(var t of g(r))k.call(r,t)&&j(e,t,r[t]);return e},x=(e,r)=>{var t={};for(var n in e)w.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&g)for(var n of g(e))0>r.indexOf(n)&&k.call(e,n)&&(t[n]=e[n]);return t};let S={variant:"text"},E=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("Text",S,e),{className:a,size:i,weight:l,transform:c,color:s,align:p,variant:u,lineClamp:d,truncate:f,gradient:b,inline:y,inherit:m,underline:h,strikethrough:g,italic:w,classNames:k,styles:j,unstyled:E,span:N,__staticSelector:z}=t,I=x(t,["className","size","weight","transform","color","align","variant","lineClamp","truncate","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span","__staticSelector"]),{classes:$,cx:C}=v({color:s,lineClamp:d,truncate:f,inline:y,inherit:m,underline:h,strikethrough:g,italic:w,weight:l,transform:c,align:p,gradient:b},{unstyled:E,name:z||"Text",variant:u,size:i});return n.createElement(O.x,P({ref:r,className:C($.root,{[$.gradient]:"gradient"===u},a),component:N?"span":"div"},I))});E.displayName="@mantine/core/Text";let N=(0,a.F)(E)},1983:function(e,r,t){t.d(r,{k:function(){return S}});var n=t(6006),o=t(9244),a=t(1307),i=t(72),l=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&f(e,t,r[t]);if(p)for(var t of p(r))d.call(r,t)&&f(e,t,r[t]);return e},y=(e,r)=>c(e,s(r)),m=(0,i.k)(e=>({root:y(b(b({},e.fn.focusStyles()),e.fn.fontStyles()),{cursor:"pointer",border:0,padding:0,appearance:"none",fontSize:e.fontSizes.md,backgroundColor:"transparent",textAlign:"left",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,textDecoration:"none",boxSizing:"border-box"})})),v=t(1600),O=Object.defineProperty,h=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,k=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,j=(e,r)=>{for(var t in r||(r={}))g.call(r,t)&&k(e,t,r[t]);if(h)for(var t of h(r))w.call(r,t)&&k(e,t,r[t]);return e},P=(e,r)=>{var t={};for(var n in e)g.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&h)for(var n of h(e))0>r.indexOf(n)&&w.call(e,n)&&(t[n]=e[n]);return t};let x=(0,n.forwardRef)((e,r)=>{let t=(0,o.N4)("UnstyledButton",{},e),{className:a,component:i="button",unstyled:l,variant:c}=t,s=P(t,["className","component","unstyled","variant"]),{classes:p,cx:u}=m(null,{name:"UnstyledButton",unstyled:l,variant:c});return n.createElement(v.x,j({component:i,ref:r,className:u(p.root,a),type:"button"===i?"button":void 0},s))});x.displayName="@mantine/core/UnstyledButton";let S=(0,a.F)(x)},6820:function(e,r,t){t.d(r,{l:function(){return o}});var n=t(6006);function o(e,r){let t=(0,n.useRef)(!1);(0,n.useEffect)(()=>()=>{t.current=!1},[]),(0,n.useEffect)(()=>{if(t.current)return e();t.current=!0},r)}},721:function(e,r,t){t.d(r,{M:function(){return l}});var n=t(6006),o=t(1238);let a=n["useId".toString()]||(()=>void 0);var i=t(3613);function l(e){let r=function(){let e=a();return e?`mantine-${e.replace(/:/g,"")}`:""}(),[t,l]=(0,n.useState)(r);return((0,o.Y)(()=>{l((0,i.k)())},[]),"string"==typeof e)?e:"undefined"==typeof window?r:t}},1238:function(e,r,t){t.d(r,{Y:function(){return o}});var n=t(6006);let o="undefined"!=typeof document?n.useLayoutEffect:n.useEffect},3613:function(e,r,t){t.d(r,{k:function(){return n}});function n(){return`mantine-${Math.random().toString(36).slice(2,11)}`}},72:function(e,r,t){t.d(r,{k:function(){return f}});var n=t(9551),o=t(9244),a=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&s(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&s(e,t,r[t]);return e};function u(e,r){return r&&Object.keys(r).forEach(t=>{e[t]?e[t]=p(p({},e[t]),r[t]):e[t]=p({},r[t])}),e}function d(e,r,t,n){let o=e=>"function"==typeof e?e(r,t||{},n):e||{};return Array.isArray(e)?e.map(e=>o(e.styles)).reduce((e,r)=>u(e,r),{}):o(e)}function f(e){let r="function"==typeof e?e:()=>e;return function(e,t){let a=(0,o.rZ)(),i=(0,o.O2)(null==t?void 0:t.name),l=(0,o.T1)(),c={variant:null==t?void 0:t.variant,size:null==t?void 0:t.size},{css:s,cx:p}=(0,n.Z)(),f=r(a,e,c),b=d(null==t?void 0:t.styles,a,e,c),y=d(i,a,e,c),m=function({ctx:e,theme:r,params:t,variant:n,size:o}){return e.reduce((e,a)=>(a.variants&&n in a.variants&&u(e,a.variants[n](r,t,{variant:n,size:o})),a.sizes&&o in a.sizes&&u(e,a.sizes[o](r,t,{variant:n,size:o})),e),{})}({ctx:i,theme:a,params:e,variant:null==t?void 0:t.variant,size:null==t?void 0:t.size}),v=Object.fromEntries(Object.keys(f).map(e=>{let r=p({[s(f[e])]:!(null==t?void 0:t.unstyled)},s(m[e]),s(y[e]),s(b[e]));return[e,r]}));return{classes:function({cx:e,classes:r,context:t,classNames:n,name:o,cache:a}){let i=t.reduce((e,r)=>(Object.keys(r.classNames).forEach(t=>{"string"!=typeof e[t]?e[t]=`${r.classNames[t]}`:e[t]=`${e[t]} ${r.classNames[t]}`}),e),{});return Object.keys(r).reduce((t,l)=>(t[l]=e(r[l],i[l],null!=n&&n[l],Array.isArray(o)?o.filter(Boolean).map(e=>`${(null==a?void 0:a.key)||"mantine"}-${e}-${l}`).join(" "):o?`${(null==a?void 0:a.key)||"mantine"}-${o}-${l}`:null),t),{})}({cx:p,classes:v,context:i,classNames:null==t?void 0:t.classNames,name:null==t?void 0:t.name,cache:l}),cx:p,theme:a}}}},1186:function(e,r,t){t.d(r,{R:function(){return n}});function n(e){return Array.isArray(e)?e:[e]}}}]);