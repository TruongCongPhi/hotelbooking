import{ah as o}from"./index-D6WBlErs.js";import{ab as r,a9 as n,F as p}from"./IdurarOs-DdOogxid.js";import{C as u}from"./CrudModule-CSoY5hpU.js";import{T as h}from"./index-zJ29dT22.js";import"./actions-DmhpMcN4.js";import"./index-BQxEISuk.js";import"./dayjs.min-eHadUs2o.js";import"./helpers-ltwvEodn.js";import"./index-BGzJ8oWg.js";import"./index-Dd1egqYd.js";import"./ErpApp-Djv73qIS.js";import"./fade-KKQQgm4U.js";import"./index-KrFx5yLV.js";import"./index-OVKKj6yh.js";import"./useDebounce-D5d9vYKb.js";import"./index-sIeLcHRr.js";import"./index-qzLSgcGn.js";import"./useMoney-DQcan5Br.js";import"./DeleteOutlined-C-zKBYK9.js";import"./ArrowLeftOutlined-SaXB54Zn.js";import"./Table-BcN6U5sB.js";import"./addEventListener-CESzIjm6.js";import"./Pagination-Buh6bWEe.js";import"./PlusOutlined-DbOdGD9A.js";function s({isUpdateForm:e=!1,withUpload:a=!1}){const t=p();return o.jsxs(o.Fragment,{children:[o.jsx(r.Item,{label:t("Tên loại phòng"),name:"roomTypeName",rules:[{required:!0,message:"Vui lòng nhập Tên loại phòng!"}],children:o.jsx(n,{})}),o.jsx(r.Item,{label:t("Mô tả"),name:"description",children:o.jsx(n,{})}),o.jsx(r.Item,{label:t("Màu nhãn"),name:"colorHex",children:o.jsx(n,{})})]})}function v(){const e=p(),a="roomtype",t={displayLabels:["roomTypeName"],searchFields:"roomTypeName"},l=["roomTypeName"],c=[{title:e("Tên"),dataIndex:"roomTypeName"},{title:e("Mô tả"),dataIndex:"description"},{title:e("Màu nhãn"),dataIndex:"colorHex"}],d=[{title:e("Tên"),dataIndex:"roomTypeName"},{title:e("Mô tả"),dataIndex:"description"},{title:e("Nhãn"),dataIndex:"colorHex",key:"colorHex",render:(y,m)=>{const i=m.colorHex?m.colorHex:"cyan";return o.jsx(h,{color:i,children:i})}}],x={PANEL_TITLE:e("Loại phòng"),DATATABLE_TITLE:e("Danh sách loại phòng"),ADD_NEW_ENTITY:e("Thêm loại phòng"),ENTITY_NAME:e("roomtype")},T={...{entity:a,...x},readColumns:c,dataTableColumns:d,searchConfig:t,deleteModalLabels:l};return o.jsx(u,{createForm:o.jsx(s,{}),updateForm:o.jsx(s,{isUpdateForm:!0}),config:T})}export{v as default};