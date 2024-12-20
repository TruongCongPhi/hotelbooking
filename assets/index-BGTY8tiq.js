import{a as l,D as z,E as D,a2 as R,z as F,n as I,B as P}from"./index-DoO1pKsL.js";import{p as H,h as M}from"./ErpApp-B4fPxVLc.js";import{S as _}from"./Skeleton-ebtB5I2L.js";const L=t=>{const{value:n,formatter:r,precision:e,decimalSeparator:o,groupSeparator:i="",prefixCls:u}=t;let a;if(typeof r=="function")a=r(n);else{const c=String(n),m=c.match(/^(-?)(\d*)(\.(\d+))?$/);if(!m||c==="-")a=c;else{const p=m[1];let f=m[2]||"0",s=m[4]||"";f=f.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof e=="number"&&(s=s.padEnd(e,"0").slice(0,e>0?e:0)),s&&(s=`${o}${s}`),a=[l.createElement("span",{key:"int",className:`${u}-content-value-int`},p,f),s&&l.createElement("span",{key:"decimal",className:`${u}-content-value-decimal`},s)]}}return l.createElement("span",{className:`${u}-content-value`},a)},B=t=>{const{componentCls:n,marginXXS:r,padding:e,colorTextDescription:o,titleFontSize:i,colorTextHeading:u,contentFontSize:a,fontFamily:c}=t;return{[`${n}`]:Object.assign(Object.assign({},R(t)),{[`${n}-title`]:{marginBottom:r,color:o,fontSize:i},[`${n}-skeleton`]:{paddingTop:e},[`${n}-content`]:{color:u,fontSize:a,fontFamily:c,[`${n}-content-value`]:{display:"inline-block",direction:"ltr"},[`${n}-content-prefix, ${n}-content-suffix`]:{display:"inline-block"},[`${n}-content-prefix`]:{marginInlineEnd:r},[`${n}-content-suffix`]:{marginInlineStart:r}}})}},U=t=>{const{fontSizeHeading3:n,fontSize:r}=t;return{titleFontSize:r,contentFontSize:n}},V=z("Statistic",t=>{const n=D(t,{});return[B(n)]},U);var A=function(t,n){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(r[e[o]]=t[e[o]]);return r};const x=t=>{const{prefixCls:n,className:r,rootClassName:e,style:o,valueStyle:i,value:u=0,title:a,valueRender:c,prefix:m,suffix:p,loading:f=!1,formatter:s,precision:v,decimalSeparator:S=".",groupSeparator:b=",",onMouseEnter:O,onMouseLeave:E}=t,$=A(t,["prefixCls","className","rootClassName","style","valueStyle","value","title","valueRender","prefix","suffix","loading","formatter","precision","decimalSeparator","groupSeparator","onMouseEnter","onMouseLeave"]),{getPrefixCls:C,direction:w,statistic:g}=l.useContext(F),d=C("statistic",n),[N,h,j]=V(d),y=l.createElement(L,{decimalSeparator:S,groupSeparator:b,prefixCls:d,formatter:s,precision:v,value:u}),T=I(d,{[`${d}-rtl`]:w==="rtl"},g==null?void 0:g.className,r,e,h,j),k=H($,{aria:!0,data:!0});return N(l.createElement("div",Object.assign({},k,{className:T,style:Object.assign(Object.assign({},g==null?void 0:g.style),o),onMouseEnter:O,onMouseLeave:E}),a&&l.createElement("div",{className:`${d}-title`},a),l.createElement(_,{paragraph:!1,loading:f,className:`${d}-skeleton`},l.createElement("div",{style:i,className:`${d}-content`},m&&l.createElement("span",{className:`${d}-content-prefix`},m),c?c(y):y,p&&l.createElement("span",{className:`${d}-content-suffix`},p)))))},X=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function Y(t,n){let r=t;const e=/\[[^\]]*]/g,o=(n.match(e)||[]).map(c=>c.slice(1,-1)),i=n.replace(e,"[]"),u=X.reduce((c,m)=>{let[p,f]=m;if(c.includes(p)){const s=Math.floor(r/f);return r-=s*f,c.replace(new RegExp(`${p}+`,"g"),v=>{const S=v.length;return s.toString().padStart(S,"0")})}return c},i);let a=0;return u.replace(e,()=>{const c=o[a];return a+=1,c})}function q(t,n){const{format:r=""}=n,e=new Date(t).getTime(),o=Date.now(),i=Math.max(e-o,0);return Y(i,r)}var G=function(t,n){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(r[e[o]]=t[e[o]]);return r};const J=1e3/30;function K(t){return new Date(t).getTime()}const Q=t=>{const{value:n,format:r="HH:mm:ss",onChange:e,onFinish:o}=t,i=G(t,["value","format","onChange","onFinish"]),u=M(),a=l.useRef(null),c=()=>{o==null||o(),a.current&&(clearInterval(a.current),a.current=null)},m=()=>{const s=K(n);s>=Date.now()&&(a.current=setInterval(()=>{u(),e==null||e(s-Date.now()),s<Date.now()&&c()},J))};l.useEffect(()=>(m(),()=>{a.current&&(clearInterval(a.current),a.current=null)}),[n]);const p=(s,v)=>q(s,Object.assign(Object.assign({},v),{format:r})),f=s=>P(s,{title:void 0});return l.createElement(x,Object.assign({},i,{value:n,valueRender:f,formatter:p}))},W=l.memo(Q);x.Countdown=W;export{x as S};