import{ah as e}from"./index-D6WBlErs.js";import"./dayjs.min-eHadUs2o.js";import"./index-BQxEISuk.js";import{aa as i,C as a,F as h}from"./IdurarOs-DdOogxid.js";import{E as x}from"./selectors-16PZPDKc.js";import{E as g}from"./index-CR556IR5.js";import{u as C}from"./useMoney-BBp4rSzQ.js";import{S as s}from"./index-OVKKj6yh.js";import"./index-qzLSgcGn.js";import"./ErpApp-Djv73qIS.js";import"./actions-CNVCXyW_.js";import"./index-KrFx5yLV.js";import"./Table-BcN6U5sB.js";import"./addEventListener-CESzIjm6.js";import"./index-sIeLcHRr.js";import"./Pagination-Buh6bWEe.js";import"./DeleteOutlined-C-zKBYK9.js";import"./ArrowLeftOutlined-SaXB54Zn.js";import"./helpers-ltwvEodn.js";import"./PlusOutlined-DbOdGD9A.js";import"./index-BGzJ8oWg.js";import"./index-Dd1egqYd.js";import"./fade-KKQQgm4U.js";function f({config:t}){return e.jsx(x,{children:e.jsx(g,{config:t})})}function K(){const t=h(),l="room",{formatCurrency:o}=C(),d={entity:"room",displayLabels:["roomNumber"],searchFields:"roomNumber"},c=["roomNumber"],m=[{title:t("Tên phòng"),dataIndex:"roomNumber"},{title:t("Loại phòng"),dataIndex:"roomTypeName"},{title:t("Số người tối đa"),dataIndex:"numberOfPeople"},{title:t("Được hủy"),dataIndex:"isCancelable",key:"isCancelable",onCell:(n,r)=>({props:{style:{width:"60px"}}}),render:(n,r)=>e.jsx(s,{checked:r.isCancelable,checkedChildren:e.jsx(i,{}),unCheckedChildren:e.jsx(a,{})})},{title:t("Được hoàn tiền"),dataIndex:"isRefundable",key:"isRefundable",onCell:(n,r)=>({props:{style:{width:"60px"}}}),render:(n,r)=>e.jsx(s,{checked:r.isRefundable,checkedChildren:e.jsx(i,{}),unCheckedChildren:e.jsx(a,{})})},{title:t("Giá gốc"),dataIndex:"originalPrice",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(n,r)=>e.jsx(e.Fragment,{children:o(r.originalPrice)})},{title:t("Giá đã giảm"),dataIndex:"discountedPrice",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(n,r)=>e.jsx(e.Fragment,{children:r.discountedPrice?o(r.discountedPrice):""})},{title:t("Trạng thái"),dataIndex:"status",render:(n,r)=>e.jsx(e.Fragment,{children:r.status==="Available"?"Hoạt động":"Khóa"})}],p={PANEL_TITLE:t("Phòng"),DATATABLE_TITLE:t("Danh sách phòng"),ADD_NEW_ENTITY:t("Thêm phòng"),ENTITY_NAME:t("room")},u={...{entity:l,...p},dataTableColumns:m,searchConfig:d,deleteModalLabels:c};return e.jsx(f,{config:u})}export{K as default};