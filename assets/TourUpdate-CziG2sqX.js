import{as as n,aR as c,ar as T,a as s,aq as d,ah as r,ay as f}from"./index-CIj5hYV2.js";import{ae as E,F as l}from"./IdurarOs-WAmMcj9g.js";import"./index-BbNeih3m.js";import{a as L,E as i}from"./selectors-BejxoUSi.js";import{U as x}from"./UpdateItem-C89sfAe2.js";import{T as y}from"./TourForm-CgTRwQZY.js";import{e as u}from"./actions-CYbjwKLg.js";import"./index-qRxrIp-c.js";import"./dayjs.min-Dklab4Fo.js";import"./ErpApp-C-2FDLT4.js";import"./index-KrFx5yLV.js";import"./CloseCircleOutlined-BOwqTg4r.js";import"./PlusOutlined-CWCq2ylO.js";import"./index-CsCQJsro.js";import"./index-C2-6UxCK.js";import"./UploadOutlined-B0vW9QeW.js";import"./fade-CRPdljLo.js";import"./DeleteOutlined--uFv7klz.js";import"./progress-5w2SBPjO.js";function h({config:t}){const e=n(),{id:a}=c();T(),s.useLayoutEffect(()=>{e(u.read({entity:t.entity,id:a}))},[a]);const{result:o,isSuccess:m,isLoading:p=!0}=d(L);return s.useLayoutEffect(()=>{o&&e(u.currentAction({actionType:"update",data:o}))},[o]),p?r.jsx(i,{children:r.jsx(f,{})}):r.jsx(i,{children:m?r.jsx(x,{config:t,UpdateForm:y}):r.jsx(E,{entity:t.entity})})}function k(){const t=l(),e="Tour",a={PANEL_TITLE:t("Tour"),DATATABLE_TITLE:t("Danh sách tour"),ADD_NEW_ENTITY:t("Thêm mới tour"),ENTITY_NAME:t("Tour")},o={entity:e,...a};return r.jsx(h,{config:o})}export{k as default};