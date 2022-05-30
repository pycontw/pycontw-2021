(window.webpackJsonp=window.webpackJsonp||[]).push([[55,6,7,9,12,17,22,23],{1001:function(e,t,r){"use strict";r.r(t);var o=r(3),n=r(87),c=(r(43),r(45),r(44),r(23),r(870),r(38),r(871),r(873),r(874),r(875),r(876),r(877),r(878),r(879),r(880),r(881),r(882),r(883),r(884),r(885),r(886),r(887),r(48),r(51),r(52),r(597)),l=r(489),d=r(492),h=r(564),f=r(625),m=r(660),v=r(656),C=r(661),x={i18n:c.a,name:"PageConferenceSpeeches",components:{I18nPageWrapper:l.default,CoreH1:d.default,CoreHr:h.default,CoreCheckbox:f.default,CheckboxCollection:m.default,SpeechCard:v.default,SpeechCardCollection:C.default},asyncData:function(e){var t=e.redirect,r=e.params.eventType;["talks","tutorials"].includes(r)||t("/")},data:function(){return{eventType:"",speechesData:[],checkedCategories:[]}},computed:{title:function(){return this.$i18n.t("".concat(this.$route.params.eventType,".title"))},intro:function(){return this.$i18n.t("".concat(this.$route.params.eventType,".intro"))},speechCategories:function(){var e=this.speechesData.map((function(e){return e.category}));return Object(n.a)(new Set(e))},filteredSpeechesData:function(){var e=this;return this.speechesData.filter((function(t){return e.checkedCategories.includes(t.category)}))},selectedSpeechesData:function(){return"talks"===this.eventType&&this.checkedCategories.length>0?this.filteredSpeechesData:this.speechesData},isAllCategoriesSelected:function(){return this.speechCategories.length>0&&this.checkedCategories.length===this.speechCategories.length}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.eventType=e.$route.params.eventType,t.next=3,e.$store.dispatch("$getSpeechesData",e.eventType);case 3:e.speechesData=e.$store.state.speechesData;case 4:case"end":return t.stop()}}),t)})))()},methods:{metaInfo:function(){return{title:this.title,meta:[{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.intro},{hid:"description",name:"description",content:this.intro}]}},selectAllCategories:function(){this.isAllCategoriesSelected?this.checkedCategories=[]:this.checkedCategories=this.speechCategories},isCategoriesChecked:function(e){return this.checkedCategories.includes(e)}},head:function(){return this.metaInfo()}},y=(r(888),r(4)),component=Object(y.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("i18n-page-wrapper",{staticClass:"pt-24 pb-4",attrs:{"custom-y":""}},[r("core-h1",{attrs:{title:e.title}}),e._v(" "),r("p",{staticClass:"intro"},[e._v(e._s(e.intro))])],1),e._v(" "),"talks"===e.eventType?r("i18n-page-wrapper",{staticClass:"px-4 sm:px-8 md:px-16 lg:px-32 pb-6 lg:pb-12",attrs:{"custom-x":"","custom-y":""}},[r("p",{staticClass:"filterTitle"},[e._v("Filter")]),e._v(" "),r("core-hr",{staticClass:"filterHr",attrs:{"custom-margin-y":"","custom-color":""}}),e._v(" "),r("checkbox-collection",[r("core-checkbox",{key:"category_ALL",attrs:{id:"ALL",value:e.isAllCategoriesSelected,"is-checked":e.isAllCategoriesSelected,label:e.$t("categories.ALL")},on:{input:function(t){return e.selectAllCategories()}}}),e._v(" "),e._l(e.speechCategories,(function(t){return r("core-checkbox",{key:"category_"+t,attrs:{id:t,label:e.$t("categories."+t),"is-checked":e.isCategoriesChecked(t)},model:{value:e.checkedCategories,callback:function(t){e.checkedCategories=t},expression:"checkedCategories"}})}))],2)],1):e._e(),e._v(" "),r("i18n-page-wrapper",{staticClass:"px-2 sm:px-8 md:px-16 lg:px-32 pb-24",attrs:{"custom-x":"","custom-y":""}},[r("speech-card-collection",e._l(e.selectedSpeechesData,(function(e){return r("speech-card",{key:"speech_"+e.id,attrs:{id:e.id,title:e.title,category:e.category,speakers:e.speakers,lang:e.language,level:e.python_level,to:"/conference/"+e.event_type+"/"+e.id+"/"}})})),1)],1)],1)}),[],!1,null,"6e337dce",null);t.default=component.exports;installComponents(component,{CoreCheckbox:r(625).default})},485:function(e,t,r){var content=r(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("098c8dc7",content,!0,{sourceMap:!1})},486:function(e,t,r){var content=r(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("5996145e",content,!0,{sourceMap:!1})},487:function(e,t,r){"use strict";r(485)},488:function(e,t,r){var o=r(15),n=r(270),c=r(271),l=r(272),d=r(273),h=r(274),f=r(275),m=r(276),v=o((function(i){return i[1]})),C=n(c),x=n(l),y=n(d),_=n(h),M=n(f),I=n(m);v.push([e.i,"h1[data-v-cb0ee938]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-cb0ee938]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-cb0ee938]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-cb0ee938], p[data-v-cb0ee938]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-cb0ee938]{font-size:.625rem}ul[data-v-cb0ee938]{margin-bottom:1.5rem}ul.list-disc[data-v-cb0ee938]{padding-left:3rem}li[data-v-cb0ee938]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-cb0ee938]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:4% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}@media (min-width: 1194px){.page-wrapper[data-v-cb0ee938]{background-image:url("+C+"), url("+x+"), url("+y+"), url("+_+"), url("+M+"), url("+I+"), url("+C+"), url("+x+"), url("+y+"), url("+_+"), url("+M+"), url("+I+")}}",""]),v.locals={},e.exports=v},489:function(e,t,r){"use strict";r.r(t);var o={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1}},computed:{classObject:function(){return{"py-8":!0,"md:py-20":!0,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}}}},n=(r(487),r(4)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-wrapper"},[r("div",{class:e.classObject},[e._t("default")],2)])}),[],!1,null,"cb0ee938",null);t.default=component.exports},490:function(e,t,r){"use strict";r(486)},491:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,"h1[data-v-a99942b0]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;margin-bottom:0px}@media (min-width: 834px){h1[data-v-a99942b0]{margin-bottom:2.25rem}h1[data-v-a99942b0]{font-size:1.5rem;line-height:2rem}}h1[data-v-a99942b0]{color:#c386ae}",""]),o.locals={},e.exports=o},492:function(e,t,r){"use strict";r.r(t);var o={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},n=(r(490),r(4)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center font-serif"},[r("h1",{class:e.classObject},[e._v(e._s(e.title))])])}),[],!1,null,"a99942b0",null);t.default=component.exports},511:function(e,t,r){var content=r(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("5c4dd9ee",content,!0,{sourceMap:!1})},515:function(e,t,r){e.exports=r.p+"img/ENEN.26dc887.svg"},516:function(e,t,r){e.exports=r.p+"img/ZHEN.61dbcf2.svg"},517:function(e,t,r){e.exports=r.p+"img/ZHZH.35289a5.svg"},518:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bTEuMDg4IDMuNzNsLTEuNjUxLTIuNzNINy4zNDNMNS42OSAxNC4zMWgxMi41MTR6TTEwLjUwMyAzLjI2N2wuMDEzLS4wMmMuNjU5LS45OTcgMi4yMDUtLjk5NyAyLjg3Ny4wMmwzLjc3MyA2LjMzOEg2LjczbDMuNzczLTYuMzM4em0yLjA0My41MzFjLS4yNjItLjM5Ni0uOTIzLS4zOTktMS4xOS0uMDA4TDguNDg4IDguNjA2aDYuOTE4TDEyLjU0NyAzLjh6bTguMjY0IDEyLjkwNmwxLjc2NCAyLjM3YTEgMSAwIDAgMS0uODAyIDEuNTk3SDIuMThhMSAxIDAgMCAxLS44MS0xLjU4NWwxLjcxOC0yLjM4MkgyMC44MXoiIC8+Cjwvc3ZnPg=="},519:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptMS4xOTYuNTUyYy0uMDY0LS4wOTctLjI4MS0uMS0uMzU1LS4wMUw5LjM2OSA4LjEwN2g1LjE1OWwtMi4zOTktNC4wMzF6bTguNjggMTIuNjNsMS43NjUgMi4zN2ExIDEgMCAwIDEtLjgwMiAxLjU5N0gyLjE4YTEgMSAwIDAgMS0uODEtMS41ODVsMS43MTgtMi4zODJIMjAuODF6IiAvPgo8L3N2Zz4="},520:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptOS44NzcgMTMuMTgybDEuNzY0IDIuMzdhMSAxIDAgMCAxLS44MDIgMS41OTdIMi4xOGExIDEgMCAwIDEtLjgxLTEuNTg1bDEuNzE4LTIuMzgySDIwLjgxeiIgLz4KPC9zdmc+"},521:function(e,t){e.exports=function(e){return Set.prototype.values.call(e)}},524:function(e,t,r){"use strict";r(511)},525:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".hr[data-v-30d9ce9f]{width:100%;border:1px solid}.defaultColor[data-v-30d9ce9f]{color:#868686}",""]),o.locals={},e.exports=o},552:function(e,t,r){var content=r(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("0db2bc18",content,!0,{sourceMap:!1})},553:function(e,t,r){var content=r(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("2acbca10",content,!0,{sourceMap:!1})},554:function(e,t,r){var content=r(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("7aa5e93d",content,!0,{sourceMap:!1})},555:function(e,t,r){var content=r(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("8b06c87c",content,!0,{sourceMap:!1})},564:function(e,t,r){"use strict";r.r(t);var o={name:"CoreHr",props:{customColor:{type:Boolean,default:!1},customMarginY:{type:Boolean,default:!1}},computed:{classObject:function(){return{hr:!0,"mx-auto":!0,"my-8":!this.customMarginY,defaultColor:!this.customColor}}}},n=(r(524),r(4)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.classObject})}),[],!1,null,"30d9ce9f",null);t.default=component.exports},597:function(e,t,r){"use strict";var o=r(64);t.a=Object(o.a)({"en-us":{talks:{title:"Talks",intro:"The two conference days are packed with talks about Python by speakers from Taiwan and around the world. The talks will be either 15-, 30-, or 45-minute long. Three tracks of talks will be delivered simultaneously, all with different topics and difficulties. We suggest you to make a schedule beforehand, and choose what you want ot listen based on your interests. Many people take notes on the program schedule before the meeting so they don’t run to wrong places."},tutorials:{title:"Tutorials",intro:"Tutorial are events held as part of the main conference. They are 1.5 hours events held to help participants better understand talks during the conference, or get their hands on more Python applications."},languages:{ENEN:"English talk",ZHEN:"Chinese talk w. English slides",ZHZH:"Chinese talk w. Chinese slides",TAI:"Taiwanese Hokkien"},levels:{EXPERIENCED:"Experienced",INTERMEDIATE:"Intermediate",NOVICE:"Novice"},categories:{APPL:"Application",PRAC:"Best Practices & Patterns",COM:"Community",DB:"Databases",DATA:"Data Analysis",EDU:"Education",EMBED:"Embedded Systems",FIN:"FinTech",IOT:"Internet of Things",GAME:"Gaming",GRAPH:"Graphics",ML:"Machine Learning",NLP:"Natural Language Processing",CORE:"Python Core",TOOL:"Project Tooling",SCI:"Science",SEC:"Security",ADMIN:"Systems Administration",TEST:"Testing",WEB:"Web Frameworks",OTHER:"Other",ALL:"All"},terms:{day1:"Day 1",day2:"Day 2",bio:"Bio",note:"Note",intro:"Intro",abstract:"Abstract",description:"Description",video:"Video"}},"zh-hant":{talks:{title:"一般演講",intro:"演講為會期兩天最主要的活動，屆時將會有來自台灣各地與全球的講者分享他們在 Python 相關的發現。演講有 15、30、45 分鐘三種長度，每天都將有三軌議程同步進行，配合各個演講的難易度與類型，選擇自己有興趣的主題聆聽。許多人都會事先筆記想聽的議程，才不會跑錯地點。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。"},tutorials:{title:"專業課程",intro:"專業課程（Tutotiral）是 PyCon Taiwan 的一部分，只要有購票都有資格參與；專業課程的時間為 90 分鐘。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。"},languages:{ENEN:"英文演講",ZHEN:"中文演講/英文投影片",ZHZH:"中文演講/中文投影片",TAI:"臺灣閩南語"},levels:{EXPERIENCED:"進階",INTERMEDIATE:"中階",NOVICE:"入門"},categories:{APPL:"應用",PRAC:"最佳實踐與慣例",COM:"社群",DB:"資料庫",DATA:"資料分析",EDU:"教育",EMBED:"嵌入式系統",FIN:"金融科技",IOT:"物聯網",GAME:"遊戲",GRAPH:"圖像處理",ML:"機器學習",NLP:"自然語言處理",CORE:"Python 核心",TOOL:"專案建置工具",SCI:"科學",SEC:"資訊安全",ADMIN:"系統管理",TEST:"測試",WEB:"網站框架",OTHER:"其他",ALL:"全選"},terms:{day1:"第一天",day2:"第二天",bio:"講者",note:"共筆",intro:"介紹",abstract:"摘要",description:"說明",video:"影片"}}})},598:function(e,t,r){"use strict";r(552)},599:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".checkbox[data-v-5c049842]{border-color:#c386ae;color:#c386ae}.checkbox.checked[data-v-5c049842]{background:#c386ae;color:#121023}",""]),o.locals={},e.exports=o},600:function(e,t,r){"use strict";r(553)},601:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".checkboxCollection[data-v-04a7b8cf]{display:flex;flex-wrap:wrap}",""]),o.locals={},e.exports=o},602:function(e,t,r){"use strict";r(554)},603:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".speechCard[data-v-28065123]{position:relative;display:inline-flex;width:100%;flex-direction:column;overflow-wrap:break-word;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;min-height:180px;border-radius:24px;border:2px solid #c386ae;box-shadow:6px 6px 0 #c386ae;padding:15px}@media (min-width:415px){.speechCard[data-v-28065123]{min-height:362px;padding-left:30px;padding-bottom:38px;padding-right:30px;padding-top:34px}}.speechCard[data-v-28065123]:hover{background-color:#e6ba17}.speechCard__speakerThumbnails[data-v-28065123]{display:flex}.speechCard__speakerThumbnail[data-v-28065123]{height:1.5rem;width:1.5rem}@media (min-width: 600px){.speechCard__speakerThumbnail[data-v-28065123]{height:2.75rem}.speechCard__speakerThumbnail[data-v-28065123]{width:2.75rem}}.speechCard__speakerThumbnail[data-v-28065123]{margin-top:0.125rem;margin-bottom:0.125rem;margin-right:0.25rem}@media (min-width: 600px){.speechCard__speakerThumbnail[data-v-28065123]{margin-top:0.5rem;margin-bottom:0.5rem}}.speechCard__speakerThumbnail img[data-v-28065123]{border-radius:9999px;-o-object-fit:cover;object-fit:cover;height:100%}.speechCard__sub[data-v-28065123]{display:flex;flex-direction:column;justify-content:space-between}@media (min-width: 834px){.speechCard__sub[data-v-28065123]{flex-direction:row}}.speechCard__sub[data-v-28065123]{margin-top:0.125rem;margin-bottom:0.125rem}@media (min-width: 600px){.speechCard__sub[data-v-28065123]{margin-top:0.5rem;margin-bottom:0.5rem}}.speechCard__sub[data-v-28065123]{color:#c386ae}.speechCard__sub .speechCard__icon[data-v-28065123]{flex-direction:row;height:13px}@media (min-width:415px){.speechCard__sub .speechCard__icon[data-v-28065123]{height:26px}}.speechCard__sub .speechCard__icon[data-v-28065123]{filter:invert(65%) sepia(76%) saturate(366%) hue-rotate(9deg) brightness(87%) contrast(88%)}.speechCard__sub img[data-v-28065123]{position:relative;top:-0.5rem;display:inline;height:100%}@media (min-width: 600px){.speechCard__sub img[data-v-28065123]{top:0px}}.speechCard:hover>.speechCard__sub[data-v-28065123]{color:#000}.speechCard:hover>.speechCard__sub .speechCard__icon[data-v-28065123]{filter:brightness(0)}.speechCard__speakerNames[data-v-28065123]{font-family:Noto Serif TC, -apple-system, serif;font-weight:700;transform-origin:top left;--tw-scale-x:.75;--tw-scale-y:.75;transform:var(--tw-transform);font-size:12px}@media (min-width:415px){.speechCard__speakerNames[data-v-28065123]{--tw-scale-x:1;--tw-scale-y:1;transform:var(--tw-transform)}.speechCard__speakerNames[data-v-28065123]{font-size:14px}}.speechCard__title[data-v-28065123]{margin-top:0.5rem;margin-bottom:2rem;font-family:Noto Serif TC, -apple-system, serif;font-weight:700;font-size:14px;line-height:30px;color:#c386ae}@media (min-width:415px){.speechCard__title[data-v-28065123]{overflow-wrap:normal;word-break:normal}.speechCard__title[data-v-28065123]{font-size:24px;line-height:36px}}.speechCard:hover>.speechCard__title[data-v-28065123]{color:#000}.speechCard__category[data-v-28065123]{position:absolute;text-align:center;font-family:Noto Serif TC, -apple-system, serif;transform-origin:bottom left;--tw-scale-x:.75;--tw-scale-y:.75;transform:var(--tw-transform);color:#c386ae;border:2px solid #c386ae;border-radius:8px;font-weight:600;font-size:12px;padding:4px 8px;min-width:60px;bottom:10px}@media (min-width:415px){.speechCard__category[data-v-28065123]{--tw-scale-x:1;--tw-scale-y:1;transform:var(--tw-transform)}.speechCard__category[data-v-28065123]{border-radius:12px;font-size:12px;padding-left:14px;padding-bottom:7px;padding-right:14px;padding-top:7px;min-width:100px;bottom:30px}}.speechCard:hover>.speechCard__category[data-v-28065123]{color:#000;border:2px solid #000}",""]),o.locals={},e.exports=o},604:function(e,t,r){"use strict";r(555)},605:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".speechCardCollection[data-v-26b174b2]{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));justify-items:center}@media (min-width: 600px){.speechCardCollection[data-v-26b174b2]{grid-template-columns:repeat(3, minmax(0, 1fr))}}.speechCardCollection[data-v-26b174b2]{margin:0 12px;-moz-column-gap:24px;column-gap:24px;row-gap:32px}@media (min-width:415px){.speechCardCollection[data-v-26b174b2]{-moz-column-gap:20px;column-gap:20px;row-gap:44px}}",""]),o.locals={},e.exports=o},625:function(e,t,r){"use strict";r.r(t);var o=r(87),n=(r(45),r(52),r(51),r(35),{name:"CoreCheckbox",props:{id:{type:String,default:""},label:{type:String,default:""},value:{type:[Array,Boolean],default:function(){return[]}},isChecked:{type:Boolean,default:!1}},methods:{toggleCheckbox:function(){var e=this;if("boolean"==typeof this.value)this.$emit("input",!this.value);else{var t=[];t=this.value.includes(this.id)?Object(o.a)(this.value.filter((function(t){return t!==e.id}))):[].concat(Object(o.a)(this.value),[this.id]),this.$emit("input",Object(o.a)(t))}}}}),c=(r(598),r(4)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"\n        checkbox\n        mt-3\n        ml-2\n        py-2\n        px-3\n        border\n        rounded-lg\n        transition-all\n        cursor-pointer\n        text-xs\n        lg:text-base\n    ",class:{checked:e.isChecked}},[r("input",{staticClass:"hidden",attrs:{id:e.id,type:"checkbox"},domProps:{value:e.id,checked:e.isChecked},on:{change:function(t){return e.toggleCheckbox()}}}),e._v(" "),r("fa",{staticClass:"mr-2 lg:mr-6",attrs:{icon:e.isChecked?["far","check-square"]:["far","square"],"aria-hidden":"true"}}),e._v("\n    "+e._s(e.label)+"\n")],1)}),[],!1,null,"5c049842",null);t.default=component.exports},647:function(e,t,r){var content=r(889);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("e7864cd4",content,!0,{sourceMap:!1})},656:function(e,t,r){"use strict";r.r(t);r(172);var o=r(64),n={i18n:Object(o.a)({"en-us":{category:{APPL:"Application",PRAC:"Best Practices & Patterns",COM:"Community",DB:"Databases",DATA:"Data Analysis",EDU:"Education",EMBED:"Embedded Systems",FIN:"FinTech",IOT:"Internet of Things",GAME:"Gaming",GRAPH:"Graphics",ML:"Machine Learning",NLP:"Natural Language Processing",CORE:"Python Core",TOOL:"Project Tooling",SCI:"Science",SEC:"Security",ADMIN:"Systems Administration",TEST:"Testing",WEB:"Web Frameworks",OTHER:"Other"}},"zh-hant":{category:{APPL:"應用",PRAC:"最佳實踐與慣例",COM:"社群",DB:"資料庫",DATA:"資料分析",EDU:"教育",EMBED:"嵌入式系統",FIN:"金融科技",IOT:"物聯網",GAME:"遊戲",GRAPH:"圖像處理",ML:"機器學習",NLP:"自然語言處理",CORE:"Python 核心",TOOL:"專案建置工具",SCI:"科學",SEC:"資訊安全",ADMIN:"系統管理",TEST:"測試",WEB:"網站框架",OTHER:"其他"}}}),name:"SpeechCard",components:{LocaleLink:r(32).b},props:{id:{type:Number,default:null},title:{type:String,default:""},category:{type:String,default:""},speakers:{type:Array,default:function(){return[]}},shouldShow:{type:Boolean,default:!0},level:{type:String,default:null},lang:{type:String,default:null},to:{type:String,default:"/"}},data:function(){return{icon:{lang:{ENEN:r(515),ZHEN:r(516),ZHZH:r(517)},level:{NOVICE:r(518),INTERMEDIATE:r(519),EXPERIENCED:r(520)}}}}},c=(r(602),r(4)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("locale-link",{directives:[{name:"show",rawName:"v-show",value:e.shouldShow,expression:"shouldShow"}],staticClass:"speechCard",attrs:{to:e.to}},[r("div",{staticClass:"speechCard__speakerThumbnails"},e._l(e.speakers,(function(e,i){return r("div",{key:"speech_card_speaker_thumbnail_"+i,staticClass:"speechCard__speakerThumbnail"},[r("img",{attrs:{src:e.thumbnail_url,alt:e.name}})])})),0),e._v(" "),r("div",{staticClass:"speechCard__sub"},[r("p",{staticClass:"speechCard__speakerNames"},[e._v("\n            "+e._s(e.speakers.map((function(e){return e.name})).join(" • "))+"\n        ")]),e._v(" "),r("div",{staticClass:"speechCard__icon"},[r("img",{attrs:{src:e.icon.level[e.level]}}),e._v(" "),r("img",{attrs:{src:e.icon.lang[e.lang]}})])]),e._v(" "),r("div",{staticClass:"speechCard__title"},[e._v(e._s(e.title))]),e._v(" "),r("div",{staticClass:"speechCard__category"},[e._v(e._s(e.$t("category."+e.category)))])])}),[],!1,null,"28065123",null);t.default=component.exports},660:function(e,t,r){"use strict";r.r(t);var o={name:"CheckboxCollection"},n=(r(600),r(4)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"checkboxCollection"},[e._t("default")],2)}),[],!1,null,"04a7b8cf",null);t.default=component.exports},661:function(e,t,r){"use strict";r.r(t);var o={name:"SpeechCardCollection"},n=(r(604),r(4)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"speechCardCollection"},[e._t("default")],2)}),[],!1,null,"26b174b2",null);t.default=component.exports},870:function(e,t,r){"use strict";var o=r(278),n=r(279);e.exports=o("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},871:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(872);o({target:"Set",proto:!0,real:!0,forced:n},{addAll:function(){return c.apply(this,arguments)}})},872:function(e,t,r){"use strict";var o=r(7),n=r(25);e.exports=function(){for(var e=o(this),t=n(e.add),r=0,c=arguments.length;r<c;r++)t.call(e,arguments[r]);return e}},873:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(280);o({target:"Set",proto:!0,real:!0,forced:n},{deleteAll:function(){return c.apply(this,arguments)}})},874:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(36),l=r(7),d=r(25),h=r(65),f=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{difference:function(e){var t=l(this),r=new(h(t,c("Set")))(t),o=d(r.delete);return f(e,(function(e){o.call(r,e)})),r}})},875:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(7),l=r(33),d=r(521),h=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{every:function(e){var t=c(this),r=d(t),o=l(e,arguments.length>1?arguments[1]:void 0,3);return!h(r,(function(e,r){if(!o(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},876:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(36),l=r(7),d=r(25),h=r(33),f=r(65),m=r(521),v=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{filter:function(e){var t=l(this),r=m(t),o=h(e,arguments.length>1?arguments[1]:void 0,3),n=new(f(t,c("Set"))),C=d(n.add);return v(r,(function(e){o(e,e,t)&&C.call(n,e)}),{IS_ITERATOR:!0}),n}})},877:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(7),l=r(33),d=r(521),h=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{find:function(e){var t=c(this),r=d(t),o=l(e,arguments.length>1?arguments[1]:void 0,3);return h(r,(function(e,r){if(o(e,e,t))return r(e)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},878:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(36),l=r(7),d=r(25),h=r(65),f=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{intersection:function(e){var t=l(this),r=new(h(t,c("Set"))),o=d(t.has),n=d(r.add);return f(e,(function(e){o.call(t,e)&&n.call(r,e)})),r}})},879:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(7),l=r(25),d=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{isDisjointFrom:function(e){var t=c(this),r=l(t.has);return!d(e,(function(e,o){if(!0===r.call(t,e))return o()}),{INTERRUPTED:!0}).stopped}})},880:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(36),l=r(7),d=r(25),h=r(277),f=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{isSubsetOf:function(e){var t=h(this),r=l(e),o=r.has;return"function"!=typeof o&&(r=new(c("Set"))(e),o=d(r.has)),!f(t,(function(e,t){if(!1===o.call(r,e))return t()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},881:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(7),l=r(25),d=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{isSupersetOf:function(e){var t=c(this),r=l(t.has);return!d(e,(function(e,o){if(!1===r.call(t,e))return o()}),{INTERRUPTED:!0}).stopped}})},882:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(7),l=r(521),d=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{join:function(e){var t=c(this),r=l(t),o=void 0===e?",":String(e),n=[];return d(r,n.push,{that:n,IS_ITERATOR:!0}),n.join(o)}})},883:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(36),l=r(7),d=r(25),h=r(33),f=r(65),m=r(521),v=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{map:function(e){var t=l(this),r=m(t),o=h(e,arguments.length>1?arguments[1]:void 0,3),n=new(f(t,c("Set"))),C=d(n.add);return v(r,(function(e){C.call(n,o(e,e,t))}),{IS_ITERATOR:!0}),n}})},884:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(7),l=r(25),d=r(521),h=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{reduce:function(e){var t=c(this),r=d(t),o=arguments.length<2,n=o?void 0:arguments[1];if(l(e),h(r,(function(r){o?(o=!1,n=r):n=e(n,r,r,t)}),{IS_ITERATOR:!0}),o)throw TypeError("Reduce of empty set with no initial value");return n}})},885:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(7),l=r(33),d=r(521),h=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{some:function(e){var t=c(this),r=d(t),o=l(e,arguments.length>1?arguments[1]:void 0,3);return h(r,(function(e,r){if(o(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},886:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(36),l=r(7),d=r(25),h=r(65),f=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{symmetricDifference:function(e){var t=l(this),r=new(h(t,c("Set")))(t),o=d(r.delete),n=d(r.add);return f(e,(function(e){o.call(r,e)||n.call(r,e)})),r}})},887:function(e,t,r){"use strict";var o=r(2),n=r(17),c=r(36),l=r(7),d=r(25),h=r(65),f=r(29);o({target:"Set",proto:!0,real:!0,forced:n},{union:function(e){var t=l(this),r=new(h(t,c("Set")))(t);return f(e,d(r.add),{that:r}),r}})},888:function(e,t,r){"use strict";r(647)},889:function(e,t,r){var o=r(15)((function(i){return i[1]}));o.push([e.i,".intro[data-v-6e337dce]{margin-bottom:2rem;font-size:0.75rem;line-height:1rem}@media (min-width: 834px){.intro[data-v-6e337dce]{font-size:0.875rem;line-height:1.25rem}}.intro[data-v-6e337dce]{line-height:33px}.filterTitle[data-v-6e337dce]{margin-left:0.5rem;font-size:0.875rem;line-height:1.25rem}@media (min-width: 834px){.filterTitle[data-v-6e337dce]{font-size:1rem;line-height:1.5rem}}.filterTitle[data-v-6e337dce]{color:#c386ae}.filterHr[data-v-6e337dce]{margin-top:0.5rem;margin-bottom:0.5rem;color:#c386ae}",""]),o.locals={},e.exports=o}}]);