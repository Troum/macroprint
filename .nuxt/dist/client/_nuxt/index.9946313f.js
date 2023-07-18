import{u as b}from"./fetch.f2efcad8.js";import{u as k}from"./header.9f80e697.js";import{t as T}from"./truncate.es.05a5e278.js";import{_ as g,c as h,o as s,a as n,b as e,d as t,g as L,a1 as v,l as R,f as c,a2 as w,k as F,e as m,m as x,F as y}from"./entry.1e47a0ae.js";import{c as V,a as q,V as C}from"./VCard.1be8a828.js";import{i as H,V as $}from"./index.44baeaf8.js";import{V as B}from"./VBtn.d5ec683f.js";import{V as M,a as f}from"./VRow.374036aa.js";import{V as o}from"./VCol.054d5d6d.js";import"./asyncData.e2e12906.js";import"./tag.0bd229d7.js";const A={__name:"RequirementCard",props:{requirement:{type:Object,default:{title:null,image:null,description:null}}},setup(r){const a=r,l=h(()=>T(a.requirement.description,20,{byWords:!0}));return(u,_)=>(s(),n(C,{elevation:0,height:175,class:"pa-0",color:"transparent",style:{position:"relative"}},{default:e(()=>[t(V,{class:"requirement--title text-primary px-0"},{default:e(()=>[L(v(r.requirement.title),1)]),_:1}),t(q,{class:"requirement--description px-0",innerHTML:l.value},null,8,["innerHTML"])]),_:1}))}},I=g(A,[["__scopeId","data-v-11985d1e"]]);const N={class:"file--title"},S={__name:"FileCard",props:{file:{type:Object,default:{title:null,file:null}}},setup(r){const l=w().public.baseURL;return(u,_)=>(s(),n(C,{elevation:0,height:120,class:"pa-0",color:"transparent",style:{position:"relative"}},{default:e(()=>[t(q,{class:"file__container"},{default:e(()=>[t(H,{class:"rounded-circle bg-primary",size:93},{default:e(()=>[t($,{"max-width":"27",src:"/assets/images/vectors/file.svg"})]),_:1}),t(V,{class:"px-0"},{default:e(()=>[t(B,{href:`${R(l)}${r.file.link}`,ripple:!1,variant:"plain",style:{width:"max-content",opacity:"1"},class:"text-primary px-0"},{default:e(()=>[c("span",N,v(r.file.title),1)]),_:1},8,["href"])]),_:1})]),_:1})]),_:1}))}},j=g(S,[["__scopeId","data-v-104e5327"]]),z=["innerHTML"],D=c("h2",{class:"text-center"},"Библиотека файлов",-1),E=c("h3",{class:"text-center",style:{"font-size":"10px","line-height":"13px"}}," мануалы и учебники с техническими требованиями ",-1),ae={__name:"index",async setup(r){let a,l;const u=k(),{data:_}=([a,l]=F(()=>b("/api/requirements",{baseURL:"https://proxy.macroprint.site",method:"GET"},"$00aZ8P9xAD")),a=await a,l(),a),i=h(()=>_.value);return u.setHeader(i.value.title),(O,U)=>(s(),n(M,{fluid:!0,class:"d-block pa-0 ma-0"},{default:e(()=>[t(f,{class:"pa-0 page__padding"},{default:e(()=>[t(o,{cols:"12",class:"py-16"},{default:e(()=>[c("article",{class:"requirement__container",innerHTML:i.value.description},null,8,z)]),_:1})]),_:1}),t(f,{class:"pa-0 page__padding",style:{"background-color":"#f7f7f7"}},{default:e(()=>[t(o,{cols:"12",class:"py-16 requirements__container"},{default:e(()=>[(s(!0),m(y,null,x(i.value.requirements,(p,d)=>(s(),n(I,{key:d,requirement:p},null,8,["requirement"]))),128))]),_:1})]),_:1}),t(f,{class:"pa-0 page__padding py-16",style:{"background-color":"#fff"}},{default:e(()=>[t(o,{cols:"12"},{default:e(()=>[D,E]),_:1}),t(o,{cols:"12",class:"requirement__files__container"},{default:e(()=>[(s(!0),m(y,null,x(i.value.files,(p,d)=>(s(),n(j,{key:d,file:p},null,8,["file"]))),128))]),_:1})]),_:1})]),_:1}))}};export{ae as default};