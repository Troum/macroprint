import{_ as u}from"./nuxt-img.44d0f2c3.js";import{S as p}from"./svg-icon.c859c434.js";import{d as m}from"./mdi.a3ba41ab.js";import{t as _}from"./truncate.es.05a5e278.js";import{_ as f,c as l,p as g,o as v,a as x,b as a,d as e,l as s,f as y,a1 as c,g as h}from"./entry.1e47a0ae.js";import{d as C,c as V,a as b,V as A}from"./VCard.1be8a828.js";const T={__name:"ArticleCard",props:{article:{type:Object,default:{title:null,date:null,image:null,description:null,slug:null}}},setup(t){const i=t,o=l(()=>g().mdAndDown.value),n=l(()=>{const r=o?10:20;return _(i.article.description,r,{byWords:!0})});return(r,S)=>{const d=u;return v(),x(A,{to:`/company/articles/${t.article.slug}`,elevation:0,height:567,class:"pa-0",color:"white",style:{position:"relative"}},{default:a(()=>[e(d,{provider:"strapi",height:274,src:t.article.image,fit:"cover"},null,8,["src"]),e(C,{class:"article--subtitle"},{default:a(()=>[e(s(p),{path:s(m),size:16,type:"mdi"},null,8,["path"]),y("span",null,c(t.article.date),1)]),_:1}),e(V,{class:"article--title text-secondary"},{default:a(()=>[h(c(t.article.title),1)]),_:1}),e(b,{class:"article--description",innerHTML:n.value},null,8,["innerHTML"])]),_:1},8,["to"])}}},I=f(T,[["__scopeId","data-v-60556e97"]]);export{I as A};