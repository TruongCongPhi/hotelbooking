import{as as L,ar as F,aq as y,a as D,ah as r}from"./index-DoO1pKsL.js";import{ab as u,B as j,V as I,ac as P,F as l}from"./IdurarOs-BcmAwRXL.js";import"./index-D2ercg9E.js";import{s as b,E as w}from"./selectors-Ch2k4QLo.js";import{P as N}from"./index-B7KlZ1fN.js";import{e as g}from"./actions-BWh9NvWn.js";import{s as x}from"./index-KrFx5yLV.js";import{T as $}from"./index-Bfkk9iju.js";import{C as O}from"./CloseCircleOutlined-BLORAeny.js";import{A as _}from"./ArrowLeftOutlined-DORYZ0lz.js";import{P as B}from"./PlusOutlined-DhhQ1J65.js";import{R}from"./RoomForm-CGopnP9A.js";import"./dayjs.min-YK213jjY.js";import"./ErpApp-B4fPxVLc.js";import"./index-BY1odwjY.js";import"./useDebounce-dlfA3rSp.js";import"./index-Bs_b6m1D.js";import"./index-C_rTtv9W.js";import"./index-Ckf0y72T.js";import"./UploadOutlined-CCoOCGv6.js";import"./fade-GnnGHS_x.js";import"./DeleteOutlined-BBEpjx_2.js";import"./progress-BwZiYf_w.js";function S({form:t}){const e=l(),n=()=>{t.submit()};return r.jsx(j,{onClick:n,type:"primary",icon:r.jsx(B,{}),children:e("Thêm")})}function M({config:t,CreateForm:e,withUpload:n}){const a=l(),f=L(),p=F();let{entity:m}=t;const{isLoading:E,isSuccess:h,result:T}=y(b),[d]=u.useForm();D.useEffect(()=>(h&&(d.resetFields(),f(g.resetAction({actionType:"create"})),p(`/${m.toLowerCase()}/read/${T.id}`)),()=>{}),[h]);const A=c=>{const i=new FormData;Object.entries(c).forEach(([o,s])=>{o!=="files"&&s!==void 0&&s!=="undefined"&&s!==null&&s!=="null"&&(Array.isArray(s)&&(o==="amenityIds"||o==="serviceIds")?s.forEach(C=>{i.append(o,C)}):i.append(o,s))}),c.files&&Array.isArray(c.files)&&c.files.forEach(o=>{i.append("files",o.originFileObj||o)}),console.log("🚀 FormData gửi đi:",Array.from(i.entries())),f(g.createAndUpload({entity:m,jsonData:i}))};return r.jsxs(r.Fragment,{children:[r.jsx(N,{onBack:()=>{p(`/${m.toLowerCase()}`)},backIcon:r.jsx(_,{}),title:a("Thêm mới"),ghost:!1,tags:r.jsx($,{children:a("Phòng")}),extra:[r.jsx(j,{onClick:()=>p(`/${m.toLowerCase()}`),icon:r.jsx(O,{}),children:a("Đóng")},`${x.generate()}`),r.jsx(S,{form:d},`${x.generate()}`)],style:{padding:"20px 0px"}}),r.jsx(I,{dashed:!0}),r.jsx(P,{isLoading:E,children:r.jsx(u,{form:d,layout:"vertical",onFinish:A,children:r.jsx(e,{})})})]})}function U({config:t,withUpload:e=!0}){return r.jsx(w,{children:r.jsx(M,{config:t,withUpload:e,CreateForm:R})})}function cr(){const t=l(),e="room",n={PANEL_TITLE:t("Phòng"),DATATABLE_TITLE:t("Danh sách phòng"),ADD_NEW_ENTITY:t("Thêm mới phòng"),ENTITY_NAME:t("room")},a={entity:e,...n};return r.jsx(U,{config:a})}export{cr as default};