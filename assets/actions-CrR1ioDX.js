import{aK as o,aL as n,aM as S,aN as c,aO as r,aP as u,aQ as p}from"./index-C5Hw-WH9.js";import{O as s}from"./IdurarOs-DZCQDfqB.js";const f={resetState:(l={})=>async e=>{e({type:o})},resetAction:({actionType:l})=>async e=>{e({type:n,keyState:l,payload:null})},currentItem:({data:l})=>async e=>{e({type:S,payload:{...l}})},currentAction:({actionType:l,data:e})=>async a=>{a({type:c,keyState:l,payload:{...e}})},list:({entity:l,options:e={page:1,items:10}})=>async a=>{a({type:r,keyState:"list",payload:null});let t=await s.list({entity:l,options:e});if(t.success===!0){const y={items:t.result.pageItems,pagination:{current:parseInt(t.result.page,10),pageSize:e==null?void 0:e.items,total:parseInt(t.result.count,10)}};console.log(JSON.stringify(t.result.pageItems)),a({type:u,keyState:"list",payload:y})}else a({type:p,keyState:"list",payload:null})},create:({entity:l,jsonData:e,withUpload:a=!1})=>async t=>{t({type:r,keyState:"create",payload:null});let y=null;a?y=await s.createAndUpload({entity:l,jsonData:e}):y=await s.create({entity:l,jsonData:e}),y.success===!0?(t({type:u,keyState:"create",payload:y.result}),t({type:S,payload:y.result})):t({type:p,keyState:"create",payload:null})},read:({entity:l,id:e})=>async a=>{a({type:r,keyState:"read",payload:null});let t=await s.read({entity:l,id:e});t.success===!0?(a({type:S,payload:t.result}),a({type:u,keyState:"read",payload:t.result})):a({type:p,keyState:"read",payload:null})},update:({entity:l,id:e,jsonData:a,withUpload:t=!1})=>async y=>{y({type:r,keyState:"update",payload:null});let d=null;t?d=await s.updateAndUpload({entity:l,id:e,jsonData:a}):d=await s.update({entity:l,id:e,jsonData:a}),d.success===!0?(y({type:u,keyState:"update",payload:d.result}),y({type:S,payload:d.result})):y({type:p,keyState:"update",payload:null})},delete:({entity:l,id:e})=>async a=>{a({type:n,keyState:"delete"}),a({type:r,keyState:"delete",payload:null});let t=await s.delete({entity:l,id:e});t.success===!0?a({type:u,keyState:"delete",payload:t.result}):a({type:p,keyState:"delete",payload:null})},search:({entity:l,options:e={}})=>async a=>{a({type:r,keyState:"search",payload:null});let t=await s.search({entity:l,options:e});t.success===!0?a({type:u,keyState:"search",payload:t.result}):a({type:p,keyState:"search",payload:null})}};export{f as c};