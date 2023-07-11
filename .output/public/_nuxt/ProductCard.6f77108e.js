import{o as n,c as k,b as y,f as o,F as w,H as $,h as r,$ as D,a1 as C,a5 as S,v as M,a7 as f,Z as p,x as I,a8 as x,a9 as j,aa as P,ab as L,e as g,ac as b,r as E,a2 as V,a as z,ad as H,ae as N}from"./entry.9732c54d.js";import{_ as A}from"./nuxt-img.1c1dfe06.js";import{t as R}from"./truncate.es.8a2e234e.js";import{c as X,a as W,b as Y,V as F}from"./VCard.ac826a51.js";import{V as q}from"./VBtn.83ffeb03.js";import{i as K}from"./index.3e1dcfe0.js";const U=["src"],Z=["src"],G=["src"],J=["src"],Q=["src"],ee={key:2},te={class:"vueperslide__content-wrapper"},ie=["innerHTML"],se=["innerHTML"],le={class:"vueperslide__content-wrapper"},ne=["innerHTML"],oe=["innerHTML"],ae={key:4,class:"vueperslide__loader"};function re(e,i,s,l,d,t){return n(),k(j(s.link?"a":"div"),{class:x(["vueperslide",t.slideClasses]),href:s.link&&!t.justDragged?s.link:!1,target:s.link&&s.openInNew?typeof s.openInNew=="boolean"?"_blank":s.openInNew:"_self",face:t.slideFace3d,style:S(t.slideStyles),"aria-hidden":t.slides.activeId===e._.uid||t.isSlideVisible?"false":"true",onMouseenter:i[0]||(i[0]=u=>e.$emit("mouse-enter",{slideIndex:t.slideIndex,title:s.title,content:s.content,image:s.image,link:s.link},e.$el)),onMouseleave:i[1]||(i[1]=u=>e.$emit("mouse-leave"))},{default:y(()=>[t.videoObj?(n(),o(w,{key:0},[t.videoObj.webm||t.videoObj.mp4?(n(),o("video",$({key:0,class:"vueperslide__video",width:"100%",height:"100%"},t.videoObj.props||{}),[t.videoObj.webm?(n(),o("source",{key:0,src:t.videoObj.webm,type:"video/webm"},null,8,U)):r("",!0),t.videoObj.mp4?(n(),o("source",{key:1,src:t.videoObj.mp4,type:"video/mp4"},null,8,Z)):r("",!0),t.videoObj.ogv?(n(),o("source",{key:2,src:t.videoObj.ogv,type:"video/ogg"},null,8,G)):r("",!0),t.videoObj.avi?(n(),o("source",{key:3,src:t.videoObj.avi,type:"video/avi"},null,8,J)):r("",!0),D(C(t.videoObj.alt||"Sorry, your browser doesn't support embedded videos."),1)],16)):t.videoObj.url?(n(),o("iframe",$({key:1,class:"vueperslide__video",src:t.videoObj.url,type:"text/html",frameborder:"0",width:"100%",height:"100%"},t.videoObj.props||{}),null,16,Q)):r("",!0)],64)):r("",!0),e.imageSrc&&t.conf.slideImageInside?(n(),o("div",{key:1,class:"vueperslide__image",style:S(t.imageStyles)},null,4)):r("",!0),t.conf.slideContentOutside?M((n(),o("div",ee,[f(e.$slots,"content",{},()=>[p("div",te,[s.title?(n(),o("div",{key:0,class:"vueperslide__title",innerHTML:s.title},null,8,ie)):r("",!0),s.content?(n(),o("div",{key:1,class:"vueperslide__content",innerHTML:s.content},null,8,se)):r("",!0)])])],512)),[[I,!1]]):f(e.$slots,"content",{key:3},()=>[p("div",le,[s.title?(n(),o("div",{key:0,class:"vueperslide__title",innerHTML:s.title},null,8,ne)):r("",!0),s.content?(n(),o("div",{key:1,class:"vueperslide__content",innerHTML:s.content},null,8,oe)):r("",!0)])]),t.conf.lazy&&!e.loaded?(n(),o("div",ae,[f(e.$slots,"loader")])):r("",!0)]),_:3},40,["href","target","class","face","style","aria-hidden"])}const B=(e,i)=>{const s=e.__vccOpts||e;for(const[l,d]of i)s[l]=d;return s},de={inject:["slides","touch","updateSlide","addClone","addSlide","removeSlide"],props:{clone:{type:Boolean},image:{type:String,default:""},video:{type:[String,Object],default:""},title:{type:String,default:""},content:{type:String,default:""},link:{type:String,default:""},duration:{type:Number,default:0},lazyloaded:{type:Boolean},openInNew:{type:[Boolean,String]}},emits:["mouse-enter","mouse-leave"],data:()=>({imageSrc:"",loading:!1,loaded:!1}),computed:{conf(){return this.$parent.conf},slideClasses(){return{"vueperslide--active":this.slides.activeId===this._.uid,"vueperslide--previous-slide":this.isPreviousSlide,"vueperslide--next-slide":this.isNextSlide,"vueperslide--visible":this.isSlideVisible,"vueperslide--loading":this.conf.lazy&&!this.loaded,"vueperslide--has-video":this.videoObj,"vueperslide--has-image-inside":this.conf.slideImageInside,"vueperslide--no-pointer-events":this.videoObj&&this.videoObj.pointerEvents===!1}},slideStyles(){const{visibleSlides:e,fade:i,slideImageInside:s,gap:l,gapPx:d}=this.conf;return{...!s&&this.imageSrc&&{backgroundImage:`url("${this.imageSrc}")`},...e>1&&{width:(100-(l?l*(e-1):0))/e+"%"},...e>1&&i&&{[this.conf.rtl?"right":"left"]:this.slideIndex%e/e*100+"%"},...l&&{[this.conf.rtl?"marginLeft":"marginRight"]:l+(d?"px":"%")}}},videoObj(){if(!this.video)return null;let e={url:"",alt:"",props:{controls:!0}};return typeof this.video=="object"?e=Object.assign(e,this.video):typeof this.video=="string"&&(e.url=this.video),e},youtubeVideo(){return/youtube\.|youtu\.be/.test(this.videoObj.url)},imageStyles(){return{...this.conf.slideImageInside&&this.imageSrc&&{backgroundImage:`url("${this.imageSrc}")`}}},slideFace3d(){if(!this.conf["3d"])return!1;const e=["front","right","back","left"],i=(this.slides.current-1+this.slidesCount)%this.slidesCount,s=(this.slides.current+1)%this.slidesCount;let l="front";return this.slideIndex===i?l=e[(4+this.slides.current-1)%4]:this.slideIndex===s&&(l=e[(this.slides.current+1)%4]),l=e[this.slideIndex%4],this.conf.rtl&&l==="left"?l="right":this.conf.rtl&&l==="right"&&(l="left"),l},isPreviousSlide(){if(!this.conf["3d"])return!1;const e=(this.slides.current-1+this.slidesCount)%this.slidesCount;return this._.uid===this.slides.list[e].id},isNextSlide(){if(!this.conf["3d"])return!1;const e=(this.slides.current+1)%this.slidesCount;return this._.uid===this.slides.list[e].id},isSlideVisible(){return this.slideIndex>=this.slides.firstVisible&&this.slideIndex<this.slides.firstVisible+this.conf.visibleSlides},slidesList(){return this.slides.list.map(e=>e.id)},slidesCount(){return this.slidesList.length},slideIndex(){return this.slidesList.indexOf(this._.uid)},justDragged(){return this.touch.justDragged}},methods:{updateThisSlide(e){this.updateSlide(this._.uid,e)},loadImage(){if(!(this.loading||this.loaded))return this.loading=!0,new Promise((e,i)=>{const s=document.createElement("img");s.onload=()=>{this.imageSrc=this.image,this.loading=!1,this.loaded=!0,this.$nextTick(()=>{e({image:this.imageSrc,style:((this.$el.attributes||{}).style||{}).value})})},s.onerror=(this.loading=!1)||i,s.src=this.image})},playVideo(){!this.videoObj||(this.videoObj.url?this.$el.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):this.$el.querySelector("video").play())},pauseVideo(){!this.videoObj||(this.videoObj.url?this.$el.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"):this.$el.querySelector("video").pause())}},created(){if(this.imageSrc=this.conf.lazy?"":this.image,this.clone)return this.addClone();this.addSlide({id:this._.uid,image:this.imageSrc,video:this.videoObj&&{...this.videoObj,play:this.playVideo,pause:this.pauseVideo},title:this.title,content:this.content,contentSlot:this.$slots.content,loaderSlot:this.$slots.loader,link:this.link,style:"",loadImage:this.loadImage,duration:this.duration})},mounted(){this.clone||this.updateThisSlide({contentSlot:this.$slots.content,loaderSlot:this.$slots.loader,style:((this.$el.attributes||{}).style||{}).value})},beforeUnmount(){this.clone||this.removeSlide(this._.uid)},watch:{image(){this.imageSrc=this.conf.lazy&&!this.isSlideVisible?"":this.image,this.clone||this.updateThisSlide({image:this.imageSrc,...!this.conf.slideImageInside&&{style:this.slideStyles}})},title(){this.clone||this.updateThisSlide({title:this.title})},content(){this.clone||this.updateThisSlide({content:this.content})},link(){this.clone||this.updateThisSlide({link:this.link})},lazyloaded(){this.clone&&(this.loaded=this.lazyloaded)}}},ue=B(de,[["render",re]]),he=["innerHTML"],ce=["innerHTML"],pe={class:"vueperslides__inner"},fe={key:0,class:"vueperslides__paused"},ve={key:1,class:"vueperslides__progress"},ge={key:2,class:"vueperslides__fractions"},me={viewBox:"0 0 9 18"},Se=["d"],ye={viewBox:"0 0 9 18"},be=["d"],xe={key:4,class:"vueperslides__bullets",ref:"bullets",role:"tablist","aria-label":"Slideshow navigation"},_e=["aria-label","onClick"],ke={class:"default"},we={key:1,class:"vueperslides__bullets vueperslides__bullets--outside",ref:"bullets",role:"tablist","aria-label":"Slideshow navigation"},Ce=["aria-label","onClick"],Te={class:"default"},Oe=["innerHTML"],Me=["innerHTML"];function Ie(e,i,s,l,d,t){const u=P("vnodes"),m=P("vueper-slide");return n(),o("div",{class:x(["vueperslides",t.vueperslidesClasses]),ref:"vueperslides","aria-label":"Slideshow",style:S(t.vueperslidesStyles)},[t.slidesCount&&t.conf.slideContentOutside==="top"?(n(),o("div",{key:0,class:x(["vueperslide__content-wrapper vueperslide__content-wrapper--outside-top",t.conf.slideContentOutsideClass])},[t.currentSlide.contentSlot?(n(),k(u,{key:0,vnodes:t.currentSlide.contentSlot()},null,8,["vnodes"])):(n(),o(w,{key:1},[t.currentSlide.title?(n(),o("div",{key:0,class:"vueperslide__title",innerHTML:t.currentSlide.title},null,8,he)):r("",!0),t.currentSlide.content?(n(),o("div",{key:1,class:"vueperslide__content",innerHTML:t.currentSlide.content},null,8,ce)):r("",!0)],64))],2)):r("",!0),p("div",pe,[p("div",{class:"vueperslides__parallax-wrapper",style:S(`padding-bottom: ${t.conf.slideRatio*100}%`),"aria-live":"polite"},[p("div",{class:x(["vueperslides__track",{"vueperslides__track--dragging":e.touch.dragging,"vueperslides__track--mousedown":e.mouseDown}]),ref:"track",style:S(t.trackStyles)},[p("div",{class:"vueperslides__track-inner",style:S(t.trackInnerStyles)},[f(e.$slots,"default"),e.isReady&&t.conf.infinite&&t.canSlide&&t.lastSlide?(n(),k(m,{key:0,class:"vueperslide--clone vueperslide--clone-1",clone:"",title:t.lastSlide.title,content:t.lastSlide.content,image:t.lastSlide.image,link:t.lastSlide.link,style:S(t.lastSlide.style),lazyloaded:t.lastSlide.loaded,"aria-hidden":"true"},L({_:2},[t.lastSlide.contentSlot?{name:"content",fn:y(()=>[g(u,{vnodes:t.lastSlide.contentSlot()},null,8,["vnodes"])]),key:"0"}:void 0,t.conf.lazy&&!t.lastSlide.loaded&&t.lastSlide.loaderSlot?{name:"loader",fn:y(()=>[g(u,{vnodes:t.lastSlide.loaderSlot()},null,8,["vnodes"])]),key:"1"}:void 0]),1032,["title","content","image","link","style","lazyloaded"])):r("",!0),e.isReady&&t.conf.infinite&&t.canSlide&&t.firstSlide?(n(),k(m,{key:1,class:"vueperslide--clone vueperslide--clone-2",clone:"",title:t.firstSlide.title,content:t.firstSlide.content,image:t.firstSlide.image,link:t.firstSlide.link,style:S(t.firstSlide.style),lazyloaded:t.firstSlide.loaded,"aria-hidden":"true"},L({_:2},[t.firstSlide.contentSlot?{name:"content",fn:y(()=>[g(u,{vnodes:t.firstSlide.contentSlot()},null,8,["vnodes"])]),key:"0"}:void 0,t.conf.lazy&&!t.firstSlide.loaded&&t.firstSlide.loaderSlot?{name:"loader",fn:y(()=>[g(u,{vnodes:t.firstSlide.loaderSlot()},null,8,["vnodes"])]),key:"1"}:void 0]),1032,["title","content","image","link","style","lazyloaded"])):r("",!0)],4)],6)],4),(t.conf.pauseOnHover||t.conf.pauseOnTouch)&&e.$slots.pause?(n(),o("div",fe,[f(e.$slots,"pause")])):r("",!0),t.conf.progress?(n(),o("div",ve,[f(e.$slots,"progress",{current:e.slides.current+1,total:t.slidesCount},()=>[p("div",{style:S(`width: ${(e.slides.current+1)*100/t.slidesCount}%`)},null,4)])])):r("",!0),t.conf.fractions?(n(),o("div",ge,[f(e.$slots,"fraction",{current:e.slides.current+1,total:t.slidesCount},()=>[D(C(`${e.slides.current+1} / ${t.slidesCount}`),1)])])):r("",!0),t.conf.arrows&&t.canSlide&&!s.disable?(n(),o("div",{key:3,class:x(["vueperslides__arrows",{"vueperslides__arrows--outside":t.conf.arrowsOutside}])},[M(p("button",{class:"vueperslides__arrow vueperslides__arrow--prev",type:"button",onClick:i[0]||(i[0]=c=>t.previous()),"aria-label":"Previous",onKeyup:[i[1]||(i[1]=b(c=>t.conf.rtl?t.next():t.previous(),["left"])),i[2]||(i[2]=b(c=>t.conf.rtl?t.previous():t.next(),["right"]))]},[f(e.$slots,`arrow-${t.conf.rtl?"right":"left"}`,{},()=>[(n(),o("svg",me,[p("path",{"stroke-linecap":"round",d:t.conf.rtl?"m1 1 l7 8 -7 8":"m8 1 l-7 8 7 8"},null,8,Se)]))])],544),[[I,!t.arrowPrevDisabled]]),M(p("button",{class:"vueperslides__arrow vueperslides__arrow--next",type:"button",onClick:i[3]||(i[3]=c=>t.next()),"aria-label":"Next",onKeyup:[i[4]||(i[4]=b(c=>t.conf.rtl?t.next():t.previous(),["left"])),i[5]||(i[5]=b(c=>t.conf.rtl?t.previous():t.next(),["right"]))]},[f(e.$slots,`arrow-${t.conf.rtl?"left":"right"}`,{},()=>[(n(),o("svg",ye,[p("path",{"stroke-linecap":"round",d:t.conf.rtl?"m8 1 l-7 8 7 8":"m1 1 l7 8 -7 8"},null,8,be)]))])],544),[[I,!t.arrowNextDisabled]])],2)):r("",!0),t.conf.bullets&&t.canSlide&&!s.disable&&!t.conf.bulletsOutside?(n(),o("div",xe,[f(e.$slots,"bullets",{currentSlide:e.slides.current,bulletIndexes:t.bulletIndexes,goToSlide:t.goToSlide,previous:t.previous,next:t.next},()=>[(n(!0),o(w,null,E(t.bulletIndexes,(c,a)=>(n(),o("button",{class:x(["vueperslides__bullet",{"vueperslides__bullet--active":e.slides.current===c}]),type:"button",key:a,role:"tab","aria-label":`Slide ${a+1}`,onClick:h=>t.goToSlide(c),onKeyup:[i[6]||(i[6]=b(h=>t.conf.rtl?t.next():t.previous(),["left"])),i[7]||(i[7]=b(h=>t.conf.rtl?t.previous():t.next(),["right"]))]},[f(e.$slots,"bullet",{active:e.slides.current===c,slideIndex:c,index:a+1},()=>[p("div",ke,[p("span",null,C(a+1),1)])])],42,_e))),128))])],512)):r("",!0)]),t.conf.bullets&&t.canSlide&&!s.disable&&t.conf.bulletsOutside?(n(),o("div",we,[f(e.$slots,"bullets",{currentSlide:e.slides.current,bulletIndexes:t.bulletIndexes,goToSlide:t.goToSlide,previous:t.previous,next:t.next},()=>[(n(!0),o(w,null,E(t.bulletIndexes,(c,a)=>(n(),o("button",{class:x(["vueperslides__bullet",{"vueperslides__bullet--active":e.slides.current===c}]),type:"button",key:a,role:"tab","aria-label":`Slide ${a+1}`,onClick:h=>t.goToSlide(c),onKeyup:[i[8]||(i[8]=b(h=>t.conf.rtl?t.next():t.previous(),["left"])),i[9]||(i[9]=b(h=>t.conf.rtl?t.previous():t.next(),["right"]))]},[f(e.$slots,"bullet",{active:e.slides.current===c,slideIndex:c,index:a+1},()=>[p("div",Te,[p("span",null,C(a+1),1)])])],42,Ce))),128))])],512)):r("",!0),t.slidesCount&&t.conf.slideContentOutside==="bottom"?(n(),o("div",{key:2,class:x(["vueperslide__content-wrapper vueperslide__content-wrapper--outside-bottom",t.conf.slideContentOutsideClass])},[t.currentSlide.contentSlot?(n(),k(u,{key:0,vnodes:t.currentSlide.contentSlot()},null,8,["vnodes"])):(n(),o(w,{key:1},[t.currentSlide.title?(n(),o("div",{key:0,class:"vueperslide__title",innerHTML:t.currentSlide.title},null,8,Oe)):r("",!0),t.currentSlide.content?(n(),o("div",{key:1,class:"vueperslide__content",innerHTML:t.currentSlide.content},null,8,Me)):r("",!0)],64))],2)):r("",!0)],6)}const De={name:"vueper-slides",components:{VueperSlide:ue,vnodes:{render(){return this.$attrs.vnodes}}},provide(){return{conf:this.conf,slides:this.slides,touch:this.touch,updateSlide:this.updateSlide,addClone:this.addClone,addSlide:this.addSlide,removeSlide:this.removeSlide}},props:{alwaysRefreshClones:{type:Boolean,default:!1},arrows:{type:Boolean,default:!0},arrowsOutside:{type:Boolean,default:null},autoplay:{type:Boolean,default:!1},breakpoints:{type:Object,default:()=>({})},bullets:{type:Boolean,default:!0},bulletsOutside:{type:Boolean,default:null},disable:{type:Boolean,default:!1},disableArrowsOnEdges:{type:[Boolean,String],default:!1},draggingDistance:{type:Number,default:null},duration:{type:[Number,String],default:4e3},infinite:{type:Boolean,default:!0},fade:{type:Boolean,default:!1},fixedHeight:{type:[Boolean,String],default:!1},fractions:{type:Boolean,default:!1},gap:{type:Number,default:0},initSlide:{type:Number,default:1},lazy:{type:Boolean,default:!1},lazyLoadOnDrag:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},pauseOnTouch:{type:Boolean,default:!0},parallax:{type:[Boolean,Number],default:!1},pageScrollingElement:{type:String,default:""},parallaxFixedContent:{type:Boolean,default:!1},preventYScroll:{type:Boolean,default:!1},progress:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},slideContentOutside:{type:[Boolean,String],default:!1},slideContentOutsideClass:{type:String,default:""},slideImageInside:{type:Boolean,default:!1},slideMultiple:{type:[Boolean,Number],default:!1},slideRatio:{type:Number,default:1/3},touchable:{type:Boolean,default:!0},transitionSpeed:{type:[Number,String],default:600},visibleSlides:{type:Number,default:1},"3d":{type:Boolean,default:!1}},emits:["ready","next","previous","autoplay-pause","autoplay-resume","before-slide","slide","image-loaded","image-failed"],data:()=>({isReady:!1,isPaused:!1,container:null,slides:{list:[],activeId:null,current:0,focus:0,firstVisible:0},mouseDown:!1,mouseOver:!1,touch:{enabled:!0,dragging:!1,lazyloadTriggered:!1,justDragged:!1,dragStartX:0,dragNowX:0,dragAmount:0},transition:{currentTranslation:0,speed:0,animated:!1},autoplayTimer:null,nextSlideIsClone:!1,breakpointsData:{list:[],current:null},parallaxData:{translation:0,slideshowOffsetTop:null,isVisible:!1}}),computed:{conf(){const e={...this.$props,...this.$props.breakpoints&&this.$props.breakpoints[this.breakpointsData.current]||{}};return e.slideMultiple=e.slideMultiple?e.visibleSlides:1,e.gap=this.gap&&parseInt(this.gap)||0,e.visibleSlides>1&&(e["3d"]=!1),(e.fade||e.disableArrowsOnEdges||e.visibleSlides>1||e["3d"])&&(e.infinite=!1),e.visibleSlides>1&&e.arrowsOutside===null&&(e.arrowsOutside=!0),e.visibleSlides>1&&e.bulletsOutside===null&&(e.bulletsOutside=!0),this.touch.enabled!==e.touchable&&this.toggleTouchableOption(e.touchable),e.parallax&&e.parallaxFixedContent&&(e.slideContentOutside="top",e.slideContentOutsideClass="parallax-fixed-content"),e},slidesCount(){return this.slides.list.length},gapsCount(){const{fade:e,"3d":i,slideMultiple:s,gap:l}=this.conf;if(!l||e||i||this.multipleSlides1by1&&this.slides.current<this.preferredPosition)return 0;if(!this.slides.current&&this.nextSlideIsClone)return this.slidesCount;if(this.nextSlideIsClone===0)return-1;let d=this.slides.current/s-this.preferredPosition;return this.multipleSlides1by1&&this.slidePosAfterPreferred>0&&(d-=this.slidePosAfterPreferred),d},slidesAfterCurrent(){return this.slidesCount-(this.slides.current+1)},preferredPosition(){return this.multipleSlides1by1?Math.ceil(this.conf.visibleSlides/2)-1:0},slidePosAfterPreferred(){return this.conf.visibleSlides-this.preferredPosition-this.slidesAfterCurrent-1},multipleSlides1by1(){return this.conf.visibleSlides>1&&this.conf.slideMultiple===1},touchEnabled:{get(){return this.slidesCount>1&&this.touch.enabled},set(e){this.touch.enabled=e}},canSlide(){return this.slidesCount/this.conf.visibleSlides>1},firstSlide(){const e=this.slidesCount?this.slides.list[0]:{};return e.style&&typeof e.style=="string"&&(e.style=e.style.replace(/width: ?\d+.*?;?/,"")),e},lastSlide(){const e=this.slidesCount?this.slides.list[this.slidesCount-1]:{};return e.style&&typeof e.style=="string"&&(e.style=e.style.replace(/width: ?\d+.*?;?/,"")),e},currentSlide(){const e=this.slidesCount&&this.slides.list[this.slides.current]||{};return this.slides.current<this.slidesCount&&e.id!==this.slides.activeId&&this.goToSlide(this.slides.current,{animation:!1,autoPlaying:!0}),e},vueperslidesClasses(){return{"vueperslides--ready":this.isReady,"vueperslides--rtl":this.conf.rtl,"vueperslides--fade":this.conf.fade,"vueperslides--parallax":this.conf.parallax,"vueperslides--slide-image-inside":this.conf.slideImageInside,"vueperslides--touchable":this.touchEnabled&&!this.disable,"vueperslides--fixed-height":this.conf.fixedHeight,"vueperslides--3d":this.conf["3d"],"vueperslides--slide-multiple":this.conf.slideMultiple>1,"vueperslides--bullets-outside":this.conf.bulletsOutside,"vueperslides--animated":this.transition.animated,"vueperslides--no-animation":!this.isReady}},vueperslidesStyles(){return/^-?\d/.test(this.conf.fixedHeight)?`height: ${this.conf.fixedHeight}`:null},trackStyles(){const e={};return this.conf.parallax&&(e.transform=`translate3d(0, ${this.parallaxData.translation}%, 0)`,e.willChange=this.parallaxData.isVisible?"transform":"auto"),e},trackInnerStyles(){const e={},{fade:i,"3d":s}=this.conf;if(e.transitionDuration=`${this.transition.speed}ms`,s){const l=this.transition.currentTranslation*90/100;e.transform=`rotateY(-90deg) translateX(-50%) rotateY(90deg) rotateY(${l}deg)`}else i||(e.transform=`translate3d(${this.transition.currentTranslation}%, 0, 0)`,e.willChange=this.touch.dragging||this.transition.animated?"transform":"auto");return e},bulletIndexes(){return Array(Math.ceil(this.slidesCount/this.conf.slideMultiple)).fill().map((e,i)=>i*this.conf.slideMultiple)},arrowPrevDisabled(){return!this.slides.current&&this.conf.disableArrowsOnEdges},arrowNextDisabled(){const{disableArrowsOnEdges:e,visibleSlides:i,slideMultiple:s}=this.conf;return this.slides.current+(s>1&&i>1?i-1:0)===this.slidesCount-1&&e}},methods:{init(){this.container=this.$refs.vueperslides,this.touchEnabled=this.conf.touchable,this.transition.speed=this.conf.transitionSpeed,Object.keys(this.breakpoints).length&&(this.setBreakpointsList(),this.setBreakpointConfig(this.getCurrentBreakpoint()));const e={animation:!1,autoPlaying:this.conf.autoplay};this.goToSlide(this.conf.initSlide-1,e),this.bindEvents(),this.$nextTick(()=>{this.isReady=!0,this.emit("ready")})},emit(e,i=!0,s=!1){let l=null;if((i||typeof s=="number")&&(l={},i&&this.slides.activeId&&this.slidesCount&&(l.currentSlide=this.getSlideData(this.slides.current)),typeof s=="number"&&this.slidesCount)){const{nextSlide:d}=this.getSlideInRange(s);l.nextSlide=this.getSlideData(d)}this.$emit(...l?[e,l]:[e])},getSlideData(e){const i=this.slides.list[e];let s={};return i&&(s={index:e,title:i.title,content:i.content,contentSlot:i.contentSlot,image:i.image,link:i.link}),s},setBreakpointsList(){this.breakpointsData.list=[99999,...Object.keys(this.breakpoints)].map(e=>parseInt(e)).sort((e,i)=>parseInt(i)-parseInt(e))},getCurrentBreakpoint(){const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,i=[e,...this.breakpointsData.list].sort((s,l)=>parseInt(l)-parseInt(s));return this.breakpointsData.list[i.indexOf(e)-1]},hasBreakpointChanged(e){return this.breakpointsData.current!==parseInt(e)},setBreakpointConfig(e){const i=this.breakpoints&&this.breakpoints[e]||{},s=i.slideMultiple&&i.slideMultiple!==this.conf.slideMultiple,l=i.visibleSlides&&i.visibleSlides!==this.conf.visibleSlides;this.breakpointsData.current=e,this.slides.current=this.getFirstVisibleSlide(this.slides.focus),s||l?this.goToSlide(this.slides.current,{breakpointChange:!0}):this.updateTrackTranslation()},bindEvents(){const e="ontouchstart"in window;this.touchEnabled&&this.toggleTouchableOption(!0),this.conf.autoplay&&(this.conf.pauseOnHover&&!e?(this.container.addEventListener("mouseenter",this.onMouseEnter),this.container.addEventListener("mouseleave",this.onMouseLeave)):this.conf.pauseOnTouch&&e&&document.addEventListener("touchstart",i=>{this[this.$el.contains(i.target)?"onSlideshowTouch":"onOustideTouch"]()})),(this.breakpointsData.list.length||this.conf.parallax)&&window.addEventListener("resize",this.onResize),this.conf.parallax&&this.enableParallax()},getSlideshowOffsetTop(e=!1){if(this.parallaxData.slideshowOffsetTop===null||e){let i=this.container,s=i.offsetTop;for(;i=i.offsetParent;)s+=i.offsetTop;this.parallaxData.slideshowOffsetTop=s}return this.parallaxData.slideshowOffsetTop},enableParallax(){this.refreshParallax(),this.pageScrollingElement?(this.parallaxData.scrollingEl=document.querySelector(this.pageScrollingElement),this.parallaxData.scrollingEl.addEventListener("scroll",this.onScroll)):document.addEventListener("scroll",this.onScroll)},disableParallax(){(this.pageScrollingElement?document.querySelector(this.pageScrollingElement):document).removeEventListener("scroll",this.onScroll),this.parallaxData.scrollingEl=null,this.parallaxData.isVisible=!1,this.parallaxData.translation=0,this.parallaxData.slideshowOffsetTop=null},onScroll(){const{scrollingEl:e}=this.parallaxData,i=document.documentElement;let s=0;e?s=e.scrollTop:s=(window.pageYOffset||i.scrollTop)-(i.clientTop||0);const l=window.innerHeight||i.clientHeight||document.body.clientHeight,d=this.container.clientHeight,t=this.getSlideshowOffsetTop(),u=t+d-s,m=l+s-t;if(this.parallaxData.isVisible=u>0&&m>0,this.parallaxData.isVisible){const c=l+d,a=u*100/c,h=this.conf.parallax===-1?100-a:a;this.parallaxData.translation=-h/2}},onResize(){if(this.breakpointsData.list.length){const e=this.getCurrentBreakpoint();this.hasBreakpointChanged(e)&&this.setBreakpointConfig(e)}this.conf.parallax&&this.getSlideshowOffsetTop(!0)},onMouseEnter(){this.mouseOver=!0,this.conf.pauseOnHover&&this.conf.autoplay&&(this.isPaused=!0)},onMouseLeave(){this.mouseOver=!1,this.conf.pauseOnHover&&this.conf.autoplay&&(this.isPaused=!1)},onMouseDown(e){!this.touchEnabled||this.disable||(!e.touches&&this.preventYScroll&&e.preventDefault(),this.mouseDown=!0,this.touch.dragStartX=this.getCurrentMouseX(e),this.conf.draggingDistance||this.updateTrackTranslation(this.touch.dragStartX))},onMouseMove(e){if(this.mouseDown||this.touch.dragging)if(this.conf.autoplay&&(this.isPaused=!0),this.preventYScroll&&e.preventDefault(),this.mouseDown=!1,this.touch.dragging=!0,this.touch.dragNowX=this.getCurrentMouseX(e),this.conf.draggingDistance){this.touch.dragAmount=this.touch.dragNowX-this.touch.dragStartX;const i=this.touch.dragAmount/this.container.clientWidth;this.updateTrackTranslation(),this.transition.currentTranslation+=100*i}else this.updateTrackTranslation(this.touch.dragNowX)},onMouseUp(e){if(this.mouseDown=!1,this.touch.dragging)this.conf.autoplay&&(!("ontouchstart"in window)&&!this.mouseOver?this.isPaused=!1:this.conf.pauseOnTouch||(this.isPaused=!1));else return this.cancelSlideChange();this.touch.dragging=!1;const i=this.conf.draggingDistance?-this.touch.dragAmount:0,s=(this.touch.dragStartX-this.container.offsetLeft)/this.container.clientWidth,l=(this.touch.dragNowX-this.container.offsetLeft)/this.container.clientWidth,d=((s<.5?0:1)-l)*100;let t=(i||d)>0;if(this.conf.rtl&&(t=!t),[Math.abs(i)<this.conf.draggingDistance,!this.conf.draggingDistance&&Math.abs(d)<50,this.arrowPrevDisabled&&!this.slides.current&&!t,this.arrowNextDisabled&&this.slides.current===this.slidesCount-1&&t].includes(!0))this.cancelSlideChange();else{const u=this.slides.current+this.conf.slideMultiple*(t?1:-1);this.emit(t?"next":"previous"),this.goToSlide(u)}this.touch.dragStartX=null,this.touch.dragNowX=null,this.touch.dragAmount=null,this.touch.justDragged=!0,setTimeout(()=>this.touch.justDragged=!1,50),this.touch.lazyloadTriggered=!1},onSlideshowTouch(){this.isPaused=!0},onOustideTouch(){this.isPaused=!1},justDragged(){return this.touch.justDragged},cancelSlideChange(){this.conf.fade||this.updateTrackTranslation()},getCurrentMouseX(e){return"ontouchstart"in window?e.touches[0].clientX:e.clientX},getBasicTranslation(){return this.slides.current/this.conf.visibleSlides},updateTrackTranslation(e=null){let i=this.getBasicTranslation();const{infinite:s,visibleSlides:l,slideMultiple:d,gap:t,"3d":u,lazy:m,lazyLoadOnDrag:c}=this.conf;if(s&&this.nextSlideIsClone!==!1&&(i=(this.nextSlideIsClone?this.slidesCount:-1)/l),t&&(i+=this.gapsCount/(l/d)*t/100),this.touch.dragStartX&&e&&!(s&&this.nextSlideIsClone!==!1)){let a=0;const h=(this.touch.dragStartX-this.container.offsetLeft)/this.container.clientWidth;let _=(e-this.container.offsetLeft)/this.container.clientWidth;if(u){const v=Math.round(h)?[0,2]:[-1,1];_=Math.min(Math.max(_,v[0]),v[1])}if(a=(h<.5?0:1)-_,i+=a*(this.conf.rtl?-1:1),m&&c&&!this.touch.lazyloadTriggered){this.touch.lazyloadTriggered=!0;let v=this.slides.current+(a>0?1:-1)*l;s&&v===-1?v=this.slidesCount-1:s&&v===this.slidesCount&&(v=0);for(let T=0;T<l;T++){const O=this.slides.list[v+T];O&&!O.loaded&&this.loadSlide(O,v+T)}}}if(this.multipleSlides1by1&&!s){const a=this.slidePosAfterPreferred>0;let h=Math.min(this.preferredPosition,this.slides.current);a&&(h+=this.slidePosAfterPreferred),i-=h/l}this.transition.currentTranslation=-i*100*(this.conf.rtl?-1:1)},pauseAutoplay(){this.isPaused=!0,clearTimeout(this.autoplayTimer),this.autoplayTimer=0,this.emit("autoplay-pause")},resumeAutoplay(){this.isPaused=!1,this.doAutoplay(),this.emit("autoplay-resume")},doAutoplay(){clearTimeout(this.autoplayTimer),this.autoplayTimer=setTimeout(()=>{this.goToSlide(this.slides.current+this.conf.slideMultiple,{autoPlaying:!0})},this.currentSlide.duration||this.conf.duration)},previous(e=!0){e&&this.emit("previous"),this.goToSlide(this.slides.current-this.conf.slideMultiple)},next(e=!0){e&&this.emit("next"),this.goToSlide(this.slides.current+this.conf.slideMultiple)},refreshParallax(){setTimeout(()=>{this.onResize(),this.onScroll()},100)},getFirstVisibleSlide(e){const{slideMultiple:i,visibleSlides:s}=this.conf;let l=this.slides.current;return s>1&&i===s?l=Math.floor(e/s)*s:this.multipleSlides1by1&&(l=e-Math.min(e,this.preferredPosition)-Math.max(this.slidePosAfterPreferred,0)),l},getSlideInRange(e,i){let s=!1;this.conf.infinite&&e===-1?s=0:this.conf.infinite&&e===this.slidesCount&&(s=1);let l=(e+this.slidesCount)%this.slidesCount;if(this.conf.slideMultiple>1){const d=this.slidesCount%this.conf.slideMultiple||this.conf.slideMultiple,t=this.conf.slideMultiple-d;l+=e<0?t:0,l=this.getFirstVisibleSlide(l)}return this.conf.disableArrowsOnEdges&&(e<0||e>this.slidesCount-1)&&!i&&(l=this.slides.current),{nextSlide:l,clone:s}},goToSlide(e,{animation:i=!0,autoPlaying:s=!1,jumping:l=!1,breakpointChange:d=!1,emit:t=!0}={}){if(!this.slidesCount||this.disable)return;this.conf.autoplay&&!s&&!this.isPaused&&(this.isPaused=!0,this.$nextTick(()=>this.isPaused=!1)),this.transition.animated=i,setTimeout(()=>this.transition.animated=!1,this.transitionSpeed);const{nextSlide:u,clone:m}=this.getSlideInRange(e,s);if(this.nextSlideIsClone=m,!this.slides.list[u])return;if(this.conf.lazy)for(let a=0;a<this.conf.visibleSlides;a++){const h=this.slides.list[u+a];h&&!h.loaded&&this.loadSlide(h,u+a)}this.isReady&&!l&&t&&this.emit("before-slide",!0,u);const c=this.slides.list[u];if(this.isReady&&c.video){const a=this.slides.list[this.slides.current];a.video&&a.video.pause(),c.video.play()}if(m!==!1&&setTimeout(()=>{const a=e===-1&&this.slides.current!==this.slidesCount-1,h=e===this.slidesCount&&this.slides.current!==0;a||h||(this.transition.speed=0,this.goToSlide(m?0:this.slidesCount-1,{animation:!1,jumping:!0}),setTimeout(()=>this.transition.speed=this.conf.transitionSpeed,50))},this.transition.speed-50),this.slides.current=u,this.slides.firstVisible=this.getFirstVisibleSlide(u),d||(this.slides.focus=u),this.conf.fade||this.updateTrackTranslation(),this.slides.activeId=this.slides.list[this.slides.current].id,this.conf.autoplay&&s&&!this.isPaused&&this.doAutoplay(),this.slidesCount&&(this.isReady&&!l&&t&&this.emit("slide"),this.isReady&&this.conf.bullets&&!s&&!l&&this.$refs.bullets)){const a=this.$refs.bullets.children,h=a&&a[this.slides.current/this.conf.slideMultiple];if(h&&h.nodeName.toLowerCase()==="button"){let _=document.documentElement;this.pageScrollingElement&&(_=document.querySelector(this.pageScrollingElement));const v=_.scrollTop;h.focus({preventScroll:!0}),_.scrollTop=v}}},addSlide(e){return this.slides.list.push(e),this.isReady&&this.slidesCount===1&&this.conf.autoplay&&this.isPaused&&(this.isPaused=!1),this.slidesCount},addClone(){return this.updateTrackTranslation(),this.slidesCount},updateSlide(e,i){let s=this.slides.list.find(l=>l.id===e);s&&(s=Object.assign(s,i))},removeSlide(e){const i=this.slides.list.findIndex(s=>s.id===e);i>-1&&(this.slides.list.splice(i,1),this.slidesCount&&e===this.slides.activeId&&this.goToSlide(i-1,{autoPlaying:!0})),this.slides.current>=this.slidesCount&&this.goToSlide(0,{autoPlaying:!0})},loadSlide(e,i){e.loadImage().then(s=>{const{image:l,style:d}=s;e.loaded=!0,e.image=l,e.style=d,this.$emit("image-loaded",this.getSlideData(i))},()=>{e.loaded=!1,this.$emit("image-failed",this.getSlideData(i))})},toggleTouchableOption(e){const{track:i}=this.$refs;if(!i)return;this.touchEnabled=e;const s="ontouchstart"in window;e?(this.$refs.track.addEventListener(s?"touchstart":"mousedown",this.onMouseDown,{passive:!this.preventYScroll}),document.addEventListener(s?"touchmove":"mousemove",this.onMouseMove,{passive:!this.preventYScroll}),document.addEventListener(s?"touchend":"mouseup",this.onMouseUp,{passive:!0})):this.removeEventListeners()},removeEventListeners(){const e="ontouchstart"in window;this.$refs.track.removeEventListener(e?"touchstart":"mousedown",this.onMouseDown,{passive:!this.preventYScroll}),document.removeEventListener(e?"touchmove":"mousemove",this.onMouseMove,{passive:!this.preventYScroll}),document.removeEventListener(e?"touchend":"mouseup",this.onMouseUp,{passive:!0})}},watch:{isPaused(e){this[e?"pauseAutoplay":"resumeAutoplay"]()},parallax(e){this[e?"enableParallax":"disableParallax"]()}},mounted(){this.init()},beforeUnmount(){this.removeEventListeners(),this.conf.parallax&&this.disableParallax(),window.removeEventListener("resize",this.onResize),document.removeEventListener("touchstart",e=>{this[this.$el.contains(e.target)?"onSlideshowTouch":"onOustideTouch"]()}),this.container.removeEventListener("mouseenter",this.onMouseEnter),this.container.removeEventListener("mouseleave",this.onMouseLeave)}},Ae=B(De,[["render",Ie]]);const $e=e=>(H("data-v-bbc13de1"),e=e(),N(),e),Pe={class:"product--icon__wrapper bg-secondary"},Le=$e(()=>p("span",{class:"text-secondary"},"Подробнее",-1)),Ee={__name:"ProductCard",props:{product:{type:Object,default:{title:null,icon:null,image:null,description:null,slug:null}}},setup(e){const i=e,s=z(()=>R(i.product.shortDescription,4,{byWords:!0}));return(l,d)=>{const t=A;return n(),k(F,{elevation:0,class:"pa-0",color:"white",style:{position:"relative"}},{default:y(()=>[g(t,{provider:"strapi",src:e.product.image,fit:"fill"},null,8,["src"]),p("div",Pe,[g(t,{provider:"strapi",width:60,src:e.product.icon},null,8,["src"])]),g(X,{class:"product--title primary--text"},{default:y(()=>[D(C(e.product.title),1)]),_:1}),g(W,{class:"product--description",innerHTML:s.value},null,8,["innerHTML"]),g(Y,{class:"product--actions"},{default:y(()=>[g(q,{flat:!0,height:13,ripple:!1,to:`/products/${e.product.slug}`,class:"product--actions__detailed-button",variant:"plain"},{default:y(()=>[Le]),_:1},8,["to"]),g(K,{"max-width":104,src:"/images/vectors/horizontal.svg"})]),_:1})]),_:1})}}},Re=V(Ee,[["__scopeId","data-v-bbc13de1"]]);export{Re as P,ue as Z,Ae as b};
