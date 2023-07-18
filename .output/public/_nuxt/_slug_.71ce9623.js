import{u as H}from"./asyncData.e2e12906.js";import{S as f}from"./svg-icon.c859c434.js";import{b as g,Z as y}from"./vueperslides.es.bae6ed27.js";import{m as V,a as $}from"./mdi.a3ba41ab.js";import{A as h}from"./ArticleCard.aee46080.js";import{j as L,k as R,c as v,a as c,b as s,o as l,d as t,f as a,l as e,e as o,h as j,F as _,m as x,u as T,p as A}from"./entry.1e47a0ae.js";import{u as D}from"./header.9f80e697.js";import{V as N,a as w}from"./VRow.374036aa.js";import{V as b}from"./VCol.054d5d6d.js";import{V as m}from"./VBtn.d5ec683f.js";import"./nuxt-img.44d0f2c3.js";import"./defu.573334b8.js";import"./truncate.es.05a5e278.js";import"./VCard.1be8a828.js";import"./tag.0bd229d7.js";import"./index.44baeaf8.js";const F=["innerHTML"],M={class:"title__container"},E=a("h3",{class:"text-center text-white",style:{width:"100%"}},"Новости компании",-1),I={key:0,class:"d-flex justify-space-between align-center px-4",style:{width:"100%"}},U=a("span",null,"Предыдущие",-1),Z=a("span",null,"Следующие",-1),q={key:0,style:{position:"relative"},class:"w-full"},z={style:{position:"absolute",width:"200%",left:"-50%"}},G={key:1,style:{position:"relative"},class:"w-full"},J={key:2,style:{position:"relative"},class:"d-flex justify-center align-center w-full mt-8"},K={class:"title__container"},O=a("span",null,"Предыдущие",-1),P=a("h3",{class:"text-center text-white"},"Новости компании",-1),Q=a("span",null,"Следующие",-1),_e={__name:"[slug]",async setup(W){let p,k;L();const{data:B}=([p,k]=R(()=>H("result",()=>$fetch(`https://proxy.macroprint.site/api/articles/${T().params.slug}`))),p=await p,k(),p),i=v(()=>B.value),C=v(()=>A().xlAndUp.value),S=v(()=>A().mdAndDown.value);return D().setHeader(i.value.article.title),(d,n)=>(l(),c(N,{fluid:!0,class:"d-block pa-0 ma-0"},{default:s(()=>[t(w,{class:"pa-0 ma-0"},{default:s(()=>[t(b,{cols:"12",class:"single-product__container page__padding"},{default:s(()=>[a("article",{innerHTML:e(i).article.description},null,8,F)]),_:1})]),_:1}),e(i).others.length?(l(),o(_,{key:0},[e(S)?(l(),c(w,{key:0,class:"index-page__articles-container page__padding bg-primary"},{default:s(()=>[t(b,{cols:"12",class:"d-flex justify-start flex-column d-lg-block",style:{position:"relative","min-height":"770px"}},{default:s(()=>[a("div",M,[E,e(i).others.length>1?(l(),o("div",I,[t(m,{flat:!0,ripple:!1,class:"article--button d-flex justify-start align-center px-0",variant:"plain",style:{width:"fit-content",height:"fit-content"},onClick:n[0]||(n[0]=r=>d.$refs.articlesCarousel.previous())},{default:s(()=>[t(e(f),{path:e(V),type:"mdi"},null,8,["path"]),U]),_:1}),t(m,{flat:!0,ripple:!1,class:"article--button d-flex justify-start align-center px-0",style:{width:"fit-content",height:"fit-content"},variant:"plain",onClick:n[1]||(n[1]=r=>d.$refs.articlesCarousel.next())},{default:s(()=>[Z,t(e(f),{path:e($),type:"mdi"},null,8,["path"])]),_:1})])):j("",!0)]),e(i).others.length>2?(l(),o("div",q,[a("div",z,[t(e(g),{ref:"articlesCarousel",arrows:!1,bullets:!1,"dragging-distance":70,gap:3,"slide-ratio":1/4,"visible-slides":3,class:"no-shadow mt-6","fixed-height":"600px","slide-multiple":""},{default:s(()=>[(l(!0),o(_,null,x(d.page.articles,(r,u)=>(l(),c(e(y),{key:u,class:"pa-0"},{content:s(()=>[t(h,{article:r},null,8,["article"])]),_:2},1024))),128))]),_:1},512)])])):e(i).others.length===2?(l(),o("div",G,[t(e(g),{ref:"articlesCarousel",arrows:!1,bullets:!1,"dragging-distance":70,class:"no-shadow","visible-slides":2,"slide-ratio":1/4,gap:5,"arrows-outside":!1,"fixed-height":"600px","slide-multiple":""},{default:s(()=>[(l(!0),o(_,null,x(e(i).others,(r,u)=>(l(),c(e(y),{key:u,class:"pa-0"},{content:s(()=>[t(h,{article:r},null,8,["article"])]),_:2},1024))),128))]),_:1},512)])):(l(),o("div",J,[t(h,{article:e(i).others[0]},null,8,["article"])]))]),_:1})]),_:1})):(l(),c(w,{key:1,class:"index-page__articles-container page__padding bg-primary"},{default:s(()=>[t(b,{cols:"12",class:"d-flex justify-start flex-column d-lg-block"},{default:s(()=>[a("div",K,[t(m,{flat:!0,height:13,ripple:!1,class:"article--button d-flex justify-start align-center",variant:"plain",onClick:n[2]||(n[2]=r=>d.$refs.articlesCarousel.previous())},{default:s(()=>[t(e(f),{path:e(V),type:"mdi"},null,8,["path"]),O]),_:1}),P,t(m,{flat:!0,height:13,ripple:!1,class:"article--button d-flex justify-start align-center",variant:"plain",onClick:n[3]||(n[3]=r=>d.$refs.articlesCarousel.next())},{default:s(()=>[Q,t(e(f),{path:e($),type:"mdi"},null,8,["path"])]),_:1})]),t(e(g),{ref:"articlesCarousel",arrows:!1,bullets:!1,"dragging-distance":30,gap:e(C)?1:3,"slide-ratio":1/4,"visible-slides":e(C)?7:3,class:"no-shadow mt-6","fixed-height":"567px","slide-multiple":""},{default:s(()=>[(l(!0),o(_,null,x(e(i).others,(r,u)=>(l(),c(e(y),{key:u,class:"pa-0"},{content:s(()=>[t(h,{article:r},null,8,["article"])]),_:2},1024))),128))]),_:1},8,["gap","visible-slides"])]),_:1})]),_:1}))],64)):j("",!0)]),_:1}))}};export{_e as default};
