import{ah as o}from"./index-D6WBlErs.js";import{d as a}from"./dayjs.min-eHadUs2o.js";import"./index-BQxEISuk.js";import{F as g}from"./IdurarOs-DdOogxid.js";import{E as f}from"./selectors-16PZPDKc.js";import{E as x}from"./index-CR556IR5.js";import{u as T}from"./useMoney-BBp4rSzQ.js";import{T as i}from"./index-zJ29dT22.js";import"./index-qzLSgcGn.js";import"./ErpApp-Djv73qIS.js";import"./actions-CNVCXyW_.js";import"./index-KrFx5yLV.js";import"./Table-BcN6U5sB.js";import"./addEventListener-CESzIjm6.js";import"./index-sIeLcHRr.js";import"./Pagination-Buh6bWEe.js";import"./DeleteOutlined-C-zKBYK9.js";import"./ArrowLeftOutlined-SaXB54Zn.js";import"./helpers-ltwvEodn.js";import"./PlusOutlined-DbOdGD9A.js";import"./index-BGzJ8oWg.js";import"./index-Dd1egqYd.js";import"./fade-KKQQgm4U.js";function y({config:e}){return o.jsx(f,{children:o.jsx(x,{config:e})})}function v(){const e=g(),s="roombooking",{formatCurrency:c}=T(),d={entity:"roombooking",displayLabels:["paymentReference"],searchFields:"paymentReference"},l=["paymentReference"],m=[{title:e("Mã"),dataIndex:"bookingReference",render:t=>"#"+t},{title:e("Tên khách"),dataIndex:"fullName"},{title:e("Phòng"),dataIndex:"roomNumber"},{title:e("Thời gian lưu trú"),dataIndex:"checkInDate",onCell:()=>({style:{whiteSpace:"nowrap"}}),render:(t,n)=>{const r=a(n.checkInDate).format("DD/MM/YY"),h=a(n.checkOutDate).format("DD/MM/YY");return`${r} - ${h}`}},{title:e("Số người"),dataIndex:"numberOfPeople"},{title:e("Trạng thái đặt"),dataIndex:"bookingStatus",key:"bookingStatus",render:t=>{const n={Cancelled:"red",Pending:"orange",Success:"green"},r={Cancelled:"Đã hủy",Pending:"Đang chờ",Success:"Đã đặt"};return o.jsx(i,{color:n[t]||"default",children:r[t]||"Không xác định"})}},{title:e("Thanh toán"),dataIndex:"paymentStatus",key:"paymentStatus",render:t=>{const n={Failed:"red",Pending:"orange",Success:"green",Refunded:"primary",NotRefunded:"secondary",PendingRefund:"yellow"},r={Pending:"Đang chờ",Success:"Đã thanh toán",Failed:"Thất bại",Refunded:"Đã hoàn tiền",NotRefunded:"Không hoàn tiền",PendingRefund:"Chờ hoàn tiền"};return o.jsx(i,{color:n[t]||"default",children:r[t]||"Không xác định"})}},{title:e("Số tiền"),dataIndex:"price",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(t,n)=>o.jsx(o.Fragment,{children:c(n.price)})}],p={PANEL_TITLE:e("Đặt phòng"),DATATABLE_TITLE:e("Danh sách đặt phòng"),ADD_NEW_ENTITY:e("Tạo đặt phòng"),ENTITY_NAME:e("roombooking")},u={...{entity:s,...p},dataTableColumns:m,searchConfig:d,deleteModalLabels:l};return o.jsx(y,{config:u})}export{v as default};