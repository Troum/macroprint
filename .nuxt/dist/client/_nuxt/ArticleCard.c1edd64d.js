import{_ as u}from"./nuxt-img.1c1dfe06.js";import{S as p}from"./svg-icon.bd449fa8.js";import{d as m}from"./mdi.a3ba41ab.js";import{t as _}from"./truncate.es.8a2e234e.js";import{a2 as f,a as s,a0 as v,o as x,c as g,b as a,e,u as l,Z as h,a1 as c,$ as y}from"./entry.9732c54d.js";import{d as C,c as V,a as b,V as A}from"./VCard.ac826a51.js";const T={__name:"ArticleCard",props:{article:{type:Object,default:{title:null,date:null,image:null,description:null,slug:null}}},setup(t){const i=t,n=s(()=>v().mdAndDown.value),o=s(()=>{const r=n?10:20;return _(i.article.description,r,{byWords:!0})});return(r,S)=>{const d=u;return x(),g(A,{elevation:0,height:567,class:"pa-0",color:"white",style:{position:"relative"}},{default:a(()=>[e(d,{provider:"strapi",height:274,src:t.article.image,fit:"cover"},null,8,["src"]),e(C,{class:"article--subtitle"},{default:a(()=>[e(l(p),{path:l(m),size:16,type:"mdi"},null,8,["path"]),h("span",null,c(t.article.date),1)]),_:1}),e(V,{class:"article--title text-secondary"},{default:a(()=>[y(c(t.article.title),1)]),_:1}),e(b,{class:"article--description",innerHTML:o.value},null,8,["innerHTML"])]),_:1})}}},I=f(T,[["__scopeId","data-v-de80ace7"]]);export{I as A};