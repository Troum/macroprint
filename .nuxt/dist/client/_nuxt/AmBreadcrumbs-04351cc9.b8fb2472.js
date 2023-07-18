import{aa as _,o as s,e as t,f as d,F as o,m as p,a8 as h,h as c,a1 as m,a as f,b as y,g as k}from"./entry.1e47a0ae.js";var u={name:"AmBreadcrumbs",props:{showCurrentCrumb:{type:Boolean,default:!0}}};const v={key:0,class:"am-breadcrumbs"},C={class:"am-breadcrumbs__list"},g={key:0,class:"am-breadcrumbs__item"},B={class:"am-breadcrumbs__link-wrapper"},x={key:0,class:"am-breadcrumbs__link am-breadcrumbs__link_current"},$=d("div",{class:"am-breadcrumbs__separator"}," / ",-1);function w(e,l,i,a,r,S){const b=_("router-link");return e.$breadcrumbs&&e.$breadcrumbs.value&&e.$breadcrumbs.value.length&&(i.showCurrentCrumb||!e.$breadcrumbs.value[0].current)?(s(),t("nav",v,[d("ol",C,[(s(!0),t(o,null,p(e.$breadcrumbs.value,(n,T)=>(s(),t(o,null,[i.showCurrentCrumb||!n.current?(s(),t("li",g,[h(e.$slots,"crumb",{crumb:n},()=>[d("div",B,[n.current?(s(),t("span",x,m(n.label),1)):(s(),f(b,{key:1,class:"am-breadcrumbs__link",to:n.link},{default:y(()=>[k(m(n.label),1)]),_:2},1032,["to"]))]),$])])):c("v-if",!0)],64))),256))])])):c("v-if",!0)}function N(e,l){l===void 0&&(l={});var i=l.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",i==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var A=`
.am-breadcrumbs {
  display: flex;
  margin: 16px 16px;
}
.am-breadcrumbs__list {
  display: block;
  padding: 0;
  margin: 0;
  text-align: left;
}
.am-breadcrumbs__item {
  display: inline;
}
.am-breadcrumbs__separator {
  display: inline;
  padding: 0 4px;
  color: rgb(150, 159, 175);
}
.am-breadcrumbs__link-wrapper {
  display: inline;
}
.am-breadcrumbs__link {
  display: inline;
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.2s;
}
.am-breadcrumbs__link:hover {
  color: #3eaf7c;
}
.am-breadcrumbs__link.am-breadcrumbs__link_current {
  color: rgb(150, 159, 175);
}
.am-breadcrumbs__item:last-child .am-breadcrumbs__separator {
  display: none;
}
`;N(A);u.render=w;u.__file="src/AmBreadcrumbs.vue";export{u as default};
