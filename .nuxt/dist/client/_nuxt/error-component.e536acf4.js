import{u as g,c as r,r as v,w as k,o as c,a as w,b as o,d as t,n as C,e as x,F as b,f as y,g as s,i as H}from"./entry.1e47a0ae.js";import{H as N,V as B,_ as M,a as S}from"./VMain.3e8a4ed6.js";import{u as j}from"./forwardRefs.c24160f9.js";import{u as E}from"./header.9f80e697.js";import{V as F,a as O}from"./VRow.374036aa.js";import{V as P}from"./VCol.054d5d6d.js";import{V as R}from"./VBtn.d5ec683f.js";import{V as $}from"./index.44baeaf8.js";import"./VDivider.069a8897.js";import"./tag.0bd229d7.js";import"./svg-icon.c859c434.js";import"./mdi.a3ba41ab.js";import"./lazy.42ea8ac8.js";import"./index.4cf84f34.js";import"./asyncData.e2e12906.js";const z={__name:"error",props:{error:Object},setup(m){E().setHeader("Страница не найдена");const n=g(),p=r(()=>n.name),d=r(()=>n.fullPath),a=j(),u=v({});a.getHeader().then(e=>{u.value=e.data.value}),k(d,e=>{a.getHeader()},{immediate:!0});const i=r(()=>p.value==="index"?"":"pa-0"),l=r(()=>a.getPhones),f=r(()=>a.getHeaderMenu.map(e=>e.key?{title:e.title,submenu:u.value.products_links}:Object.hasOwn(e,"submenu")?{title:e.title,submenu:e.submenu}:{title:e.title,route:e.route})),_=r(()=>a.getFooterMenu),h=r(()=>a.getNetworks),V=()=>H({redirect:"/"});return(e,I)=>(c(),w(S,{class:"default__layout"},{default:o(()=>[t(N,{menu:f.value,phones:l.value},null,8,["menu","phones"]),t(B,{class:C(i.value)},{default:o(()=>[t(F,{fluid:!0,class:"d-block pa-0 ma-0"},{default:o(()=>[t(O,{class:"pa-0 ma-0"},{default:o(()=>[t(P,{cols:"12",class:"d-flex flex-column align-center justify-center page__padding py-16",style:{"row-gap":"40px"}},{default:o(()=>[(m.error.statusCode,c(),x(b,{key:0},[y("p",null,[s("Страница, на которую вы перешли была удалена, либо отсутствует. Возможно ссылка устарела либо введена неверно. Вернитесь на "),t(R,{variant:"plain",ripple:!1,color:"secondary",class:"px-0",onClick:V},{default:o(()=>[s("главную страницу ")]),_:1}),s(" либо свяжитесь с нами по телефонам в шапке сайта. ")]),t($,{"max-width":"75%",src:"/404.svg"})],64))]),_:1})]),_:1})]),_:1})]),_:1},8,["class"]),t(M,{menu:_.value,networks:h.value,phones:l.value},null,8,["menu","networks","phones"])]),_:1}))}},ae=z;export{ae as default};
