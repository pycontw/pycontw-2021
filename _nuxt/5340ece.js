(window.webpackJsonp=window.webpackJsonp||[]).push([[66,9,10,12,17,25,26,31,32],{1036:function(e,t,r){"use strict";r.r(t);var o=r(16),n=r(6),c=r(93),l=(r(51),r(46),r(52),r(22),r(977),r(36),r(978),r(980),r(981),r(982),r(983),r(984),r(985),r(986),r(987),r(988),r(989),r(990),r(991),r(992),r(993),r(994),r(41),r(34),r(53),r(30),r(35),r(58),r(28),r(59),r(523)),d=r(585),f=r(541),h=r.n(f),m=r(540),v=r(520),y=r(584),x=r(710),C=r(746),w=r(586),k=r(747);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var T={i18n:d.a,name:"PageConferenceSpeeches",components:{I18nPageWrapper:l.default,CoreH1:v.default,CoreH2:y.default,CoreCheckbox:x.default,CheckboxCollection:C.default,SpeechCard:w.default,SpeechCardCollection:k.default,Banner:m.default},asyncData:function(e){var t=e.redirect,r=e.params.eventType;["talks","tutorials"].includes(r)||t("/")},data:function(){return{eventType:"",speechesData:[],checkedCategories:[],aboutBanner:h.a}},computed:{bannerStyle:function(){return{"background-image":"url(".concat(this.aboutBanner,")"),"background-repeat":"no-repeat","background-position":"center"}},title:function(){return this.$i18n.t("".concat(this.$route.params.eventType,".title"))},intro:function(){return this.$i18n.t("".concat(this.$route.params.eventType,".intro"))},speechCategories:function(){var e=this.speechesData.map((function(e){return e.category}));return Object(c.a)(new Set(e))},filteredSpeechesData:function(){var e=this;return this.speechesData.filter((function(t){return e.checkedCategories.includes(t.category)}))},selectedSpeechesData:function(){return"talks"===this.eventType&&this.checkedCategories.length>0?this.filteredSpeechesData:this.speechesData},isAllCategoriesSelected:function(){return this.speechCategories.length>0&&this.checkedCategories.length===this.speechCategories.length}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.eventType=e.$route.params.eventType,t.next=3,e.$store.dispatch("$getSpeechesData",e.eventType);case 3:e.speechesData=e.$store.state.speechesData.map((function(e){return E(E({},e),{},{begin_time:e.begin_time?new Date(e.begin_time):null})}));case 4:case"end":return t.stop()}}),t)})))()},methods:{metaInfo:function(){return{title:this.title,meta:[{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.intro},{hid:"description",name:"description",content:this.intro}]}},selectAllCategories:function(){this.isAllCategoriesSelected?this.checkedCategories=[]:this.checkedCategories=this.speechCategories},isCategoriesChecked:function(e){return this.checkedCategories.includes(e)}},head:function(){return this.metaInfo()}},S=(r(995),r(7)),component=Object(S.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lg:py24 py-10 md:py-24"},[r("banner",[r("core-h1",{attrs:{title:e.title}}),e._v(" "),r("p",{staticClass:"leading-6"},[e._v("\n            "+e._s(e.intro)+"\n        ")])],1),e._v(" "),r("i18n-page-wrapper",{staticClass:"px-2 sm:px-8 md:px-16 lg:px-32",attrs:{"custom-x":""}},["talks"===e.eventType?r("div",[r("core-h2",{attrs:{title:e.$t("talks.categoryFilter")}}),e._v(" "),r("checkbox-collection",[e._l(e.speechCategories,(function(t){return r("core-checkbox",{key:"category_"+t,attrs:{id:t,label:e.$t("categories."+t),"is-checked":e.isCategoriesChecked(t)},model:{value:e.checkedCategories,callback:function(t){e.checkedCategories=t},expression:"checkedCategories"}})})),e._v(" "),r("core-checkbox",{key:"category_ALL",attrs:{id:"ALL",value:e.isAllCategoriesSelected,"is-checked":e.isAllCategoriesSelected,label:e.$t("categories.ALL")},on:{input:function(t){return e.selectAllCategories()}}})],2)],1):e._e(),e._v(" "),r("speech-card-collection",e._l(e.selectedSpeechesData,(function(e){return r("speech-card",{key:"speech_"+e.id,attrs:{id:e.id,level:e.python_level,"begin-time":e.begin_time,location:e.location,title:e.title,speakers:e.speakers,lang:e.language,category:e.category,to:"/conference/"+e.event_type+"/"+e.id+"/"}})})),1)],1)],1)}),[],!1,null,"5798e2ee",null);t.default=component.exports;installComponents(component,{CoreCheckbox:r(710).default})},516:function(e,t,r){var content=r(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("3cda5dc8",content,!0,{sourceMap:!1})},517:function(e,t,r){var content=r(522);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("042ecdbe",content,!0,{sourceMap:!1})},518:function(e,t,r){"use strict";r(516)},519:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,"h1[data-v-feb57f82]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 768px){h1[data-v-feb57f82]{margin-bottom:2.25rem}h1[data-v-feb57f82]{font-size:1.5rem;line-height:2rem}}h1[data-v-feb57f82]{text-shadow:#3643b5 2px 1px 0}",""]),o.locals={},e.exports=o},520:function(e,t,r){"use strict";r.r(t);var o={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},n=(r(518),r(7)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex justify-center font-serif"},[r("h1",{class:e.classObject},[e._v(e._s(e.title))])])}),[],!1,null,"feb57f82",null);t.default=component.exports},521:function(e,t,r){"use strict";r(517)},522:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,"h1[data-v-9ddb4acc]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-9ddb4acc]{margin-bottom:1.5rem;margin-top:5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:2.5rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-9ddb4acc], p[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:0.25rem;width:100%;text-align:justify}span.text-2s[data-v-9ddb4acc]{font-size:.625rem}ul[data-v-9ddb4acc]{margin-bottom:1.5rem}ul.list-disc[data-v-9ddb4acc]{padding-left:3rem}li[data-v-9ddb4acc]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-9ddb4acc]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}",""]),o.locals={},e.exports=o},523:function(e,t,r){"use strict";r.r(t);var o={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1},useBgDecoration:{type:Boolean,default:!0}},computed:{classObject:function(){return{"py-8":!this.customY,"md:py-20":!this.customY,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}},pageWrapperClass:function(){return this.useBgDecoration?"bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size":"bg-none"}}},n=(r(521),r(7)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.pageWrapperClass},[r("div",{class:e.classObject},[e._t("default")],2)])}),[],!1,null,"9ddb4acc",null);t.default=component.exports},526:function(e,t,r){var content=r(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("6a8641ef",content,!0,{sourceMap:!1})},538:function(e,t,r){"use strict";r(526)},539:function(e,t,r){var o=r(18),n=r(184),c=r(285),l=r(286),d=r(287),f=r(288),h=o((function(i){return i[1]})),m=n(c),v=n(l),y=n(d),x=n(f);h.push([e.i,".banner[data-v-58eb5a27]{display:flex;width:100%;align-items:center;justify-content:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:600;background-image:url("+m+"),url("+v+"),url("+y+"),url("+x+");background-repeat:no-repeat;background-position:5% 135px, 50% 50%, 94% 99px, 85% 70%}@media (min-width: 768px){.banner[data-v-58eb5a27]{background-position:16% 37%, 50% 50%, 77% 30%, 72% 490px}}@media (min-width: 1194px){.banner[data-v-58eb5a27]{background-position:16% 37%, 50% 100%, 77% 30%, 72% 490px}}.banner[data-v-58eb5a27]{background-size:11%,72%,22%,7%}@media (min-width: 768px){.banner[data-v-58eb5a27]{background-size:6%,36%,9%,4%}}.banner[data-v-58eb5a27]{height:calc(100vh - 320px);min-height:560px}.banner-texts[data-v-58eb5a27]{margin-left:0.375rem;margin-right:0.375rem;text-align:center}@media (min-width: 768px){.banner-texts[data-v-58eb5a27]{margin-left:3.5rem;margin-right:3.5rem}}.banner-texts[data-v-58eb5a27]{max-width:920px}",""]),h.locals={},e.exports=h},540:function(e,t,r){"use strict";r.r(t);var o={name:"Banner"},n=(r(538),r(7)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"banner"},[r("div",{staticClass:"banner-texts"},[e._t("default")],2)])}),[],!1,null,"58eb5a27",null);t.default=component.exports},541:function(e,t,r){e.exports=r.p+"img/Banner.62ce754.svg"},546:function(e,t,r){e.exports=r.p+"img/ZHZH.38617ef.svg"},548:function(e,t,r){var content=r(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("3f408362",content,!0,{sourceMap:!1})},551:function(e,t,r){e.exports=r.p+"img/ENEN.5a408d1.svg"},552:function(e,t,r){e.exports=r.p+"img/ZHEN.371966e.svg"},553:function(e,t,r){e.exports=r.p+"img/JPEN.638520e.svg"},554:function(e,t,r){var content=r(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("43382af1",content,!0,{sourceMap:!1})},573:function(e,t,r){e.exports=r.p+"img/heading-bullet.7ae9e31.svg"},574:function(e,t,r){"use strict";r(548)},575:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,".container[data-v-f253525c]{display:flex;align-items:center}@media (min-width: 768px){.container[data-v-f253525c]{margin-bottom:1.75rem}}h2[data-v-f253525c]{font-family:Noto Serif TC, -apple-system, serif;font-weight:700;font-size:26px}@media (min-width:768px){h2[data-v-f253525c]{font-size:32px}}h2[data-v-f253525c]{background:linear-gradient(302.44deg,#8be1c2 .18%,#5b69e2 43.9%,#a764c9 53.21%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.bulletin-color[data-v-f253525c]{--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity))}.bullet[data-v-f253525c]{width:2.5rem}@media (min-width: 768px){.bullet[data-v-f253525c]{width:4rem}}",""]),o.locals={},e.exports=o},581:function(e,t){e.exports=function(e){return Set.prototype.values.call(e)}},582:function(e,t,r){"use strict";r(554)},583:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,'.speechCard[data-v-5ea503e3]{position:relative;border-radius:12px;--tw-bg-opacity:1;background-color:rgba(31, 28, 59, var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-bottom:1rem;padding-top:12px;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border-width:1px;border-style:solid;border-color:transparent;overflow:hidden;overflow-wrap:anywhere}.speechCard[data-v-5ea503e3]:hover{--tw-bg-opacity:1;background-color:rgba(53, 45, 102, var(--tw-bg-opacity));border-color:#746bb8;box-shadow:0 0 10px 7px #403778}.speechCard:hover .speechCard__title[data-v-5ea503e3]{--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity))}.speechCard__levelTriangle[data-v-5ea503e3]{position:absolute;left:0px;top:0px;height:3.5rem;width:4rem;content:"";-webkit-clip-path:polygon(0 0,0 100%,100% 0);clip-path:polygon(0 0,0 100%,100% 0);border-top-left-radius:12px}.speechCard__level[data-v-5ea503e3]{position:absolute;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;--tw-text-opacity:1;color:rgba(31, 28, 59, var(--tw-text-opacity))}.speechCard__date[data-v-5ea503e3], .speechCard__location[data-v-5ea503e3]{height:1.25rem;font-size:16px;font-weight:600;--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}.speechCard__location[data-v-5ea503e3]{text-align:right}.speechCard__title[data-v-5ea503e3]{margin-bottom:1rem;font-size:27px;font-weight:700;font-family:"Noto Serif TC",serif;line-height:46px;letter-spacing:1px;color:#cecbff}.speechCard__title-overflow[data-v-5ea503e3]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;height:138px}.speechCard__speakerThumbnails[data-v-5ea503e3]{overflow:hidden;display:grid;grid-auto-flow:column;grid-template-columns:repeat(auto-fill,32px);width:70%;mask-image:linear-gradient(90deg,#000 90%,transparent);-webkit-mask-image:linear-gradient(90deg,#000 90%,transparent)}.speechCard__speakerThumbnail[data-v-5ea503e3]{height:2rem;width:2rem;overflow:hidden;border-radius:9999px}.speechCard__speakerThumbnail img[data-v-5ea503e3]{min-height:100%;-o-object-fit:cover;object-fit:cover}.speechCard__lang[data-v-5ea503e3]{height:1.25rem;width:3rem;--tw-bg-opacity:1;background-color:rgba(205, 210, 226, var(--tw-bg-opacity));-webkit-mask-position:right;mask-position:right;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.speechCard__speakerNames[data-v-5ea503e3]{margin-bottom:36px;margin-top:7px;font-size:18px;color:#bb75bc;line-height:24px;letter-spacing:.1px}.speechCard__category[data-v-5ea503e3]{display:inline-block;padding-left:1rem;padding-right:1rem;padding-top:7px;padding-bottom:7px;font-size:12px;font-weight:600;--tw-text-opacity:1;color:rgba(31, 28, 59, var(--tw-text-opacity));border-radius:8px;border-width:1px;border-style:solid;border-color:#000;background-color:#bb75bc}',""]),o.locals={},e.exports=o},584:function(e,t,r){"use strict";r.r(t);var o={name:"CoreH2",props:{title:{type:String,required:!0},bulletinColor:{type:Boolean,default:!1},isBulleted:{type:Boolean,default:!0}},computed:{classObject:function(){return{"tracking-wider":"en-us"!==this.$i18n.locale,"bulletin-color":this.bulletinColor}}}},n=(r(574),r(7)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[e.isBulleted?o("div",[o("img",{staticClass:"bullet",attrs:{src:r(573),alt:"heading-bullet"}})]):e._e(),e._v(" "),o("h2",{class:e.classObject},[e._v(e._s(e.title))])])}),[],!1,null,"f253525c",null);t.default=component.exports},585:function(e,t,r){"use strict";var o=r(81);t.a=Object(o.a)({"en-us":{talks:{title:"Talks",intro:"The two conference days are packed with talks about Python by speakers from Taiwan and around the world. The talks will be either 15-, 30-, or 45-minute long. Three tracks of talks will be delivered simultaneously, all with different topics and difficulties. We suggest you to make a schedule beforehand, and choose what you want ot listen based on your interests. Many people take notes on the program schedule before the meeting so they don’t run to wrong places.",categoryFilter:"Category"},tutorials:{title:"Tutorials",intro:"Tutorials are events held as part of the main conference. They are 1.5 hours events held to help participants better understand talks during the conference, or get their hands on more Python applications."},related:{title:"Related Speeches"},languages:{ENEN:"English talk",ZHEN:"Chinese talk w. English slides",JPEN:"Japanese talk w. English slides",ZHZH:"Chinese talk w. Chinese slides",TAI:"Taiwanese Hokkien"},levels:{EXPERIENCED:"Experienced",INTERMEDIATE:"Intermediate",NOVICE:"Novice"},categories:{APPL:"Application",PRAC:"Best Practices & Patterns",COM:"Community",DB:"Databases",DATA:"Data Analysis",EDU:"Education",EMBED:"Embedded Systems",FIN:"FinTech",IOT:"Internet of Things",GAME:"Gaming",GRAPH:"Graphics",ML:"Machine Learning",NLP:"Natural Language Processing",CORE:"Python Core",TOOL:"Project Tooling",SCI:"Science",SEC:"Security",ADMIN:"Systems Administration",TEST:"Testing",WEB:"Web Frameworks",OTHER:"Other",ALL:"All"},terms:{day1:"Day 1",day2:"Day 2",bio:"Bio",note:"Note",intro:"Intro",abstract:"Abstract",description:"Description",video:"Video",else:"More Info",location:"Location",language:"Language",date:"Date",level:"Level",category:"Category",TBA:"TBA"}},"zh-hant":{talks:{title:"一般演講",intro:"演講為會期兩天最主要的活動，屆時將會有來自台灣各地與全球的講者分享他們在 Python 相關的發現。演講有 15、30、45 分鐘三種長度，每天都將有三軌議程同步進行，配合各個演講的難易度與類型，選擇自己有興趣的主題聆聽。許多人都會事先筆記想聽的議程，才不會跑錯地點。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。",categoryFilter:"演講類別"},tutorials:{title:"專業課程",intro:"專業課程（Tutotiral）是 PyCon Taiwan 的一部分，只要有購票都有資格參與；專業課程的時間為 90 分鐘。議程可能隨時更改，請頻繁確認本頁資訊，以獲得最新訊息。"},related:{title:"相關的演講"},languages:{ENEN:"英文演講",ZHEN:"中文演講/英文投影片",JPEN:"日文演講/英文投影片",ZHZH:"中文演講/中文投影片",TAI:"臺灣閩南語"},levels:{EXPERIENCED:"進階",INTERMEDIATE:"中階",NOVICE:"入門"},categories:{APPL:"應用",PRAC:"最佳實踐與慣例",COM:"社群",DB:"資料庫",DATA:"資料分析",EDU:"教育",EMBED:"嵌入式系統",FIN:"金融科技",IOT:"物聯網",GAME:"遊戲",GRAPH:"圖像處理",ML:"機器學習",NLP:"自然語言處理",CORE:"Python 核心",TOOL:"專案建置工具",SCI:"科學",SEC:"資訊安全",ADMIN:"系統管理",TEST:"測試",WEB:"網站框架",OTHER:"其他",ALL:"全選"},terms:{day1:"第一天",day2:"第二天",bio:"講者",note:"共筆",intro:"介紹",abstract:"摘要",description:"說明",video:"影片",else:"其他資訊",location:"地點",language:"語言",date:"時間",level:"層級",category:"分類",TBA:"待公布"}}})},586:function(e,t,r){"use strict";r.r(t);r(185),r(47),r(33);var o=r(81),n={i18n:Object(o.a)({"en-us":{levels:{EXPERIENCED:"Expert",INTERMEDIATE:"Medium",NOVICE:"Novice"},levelStyle:{fontSize:"10px",left:"5px"},category:{APPL:"Application",PRAC:"Best Practices & Patterns",COM:"Community",DB:"Databases",DATA:"Data Analysis",EDU:"Education",EMBED:"Embedded Systems",FIN:"FinTech",IOT:"Internet of Things",GAME:"Gaming",GRAPH:"Graphics",ML:"Machine Learning",NLP:"Natural Language Processing",CORE:"Python Core",TOOL:"Project Tooling",SCI:"Science",SEC:"Security",ADMIN:"Systems Administration",TEST:"Testing",WEB:"Web Frameworks",OTHER:"Other"}},"zh-hant":{levels:{EXPERIENCED:"高",INTERMEDIATE:"中",NOVICE:"初"},levelStyle:{fontSize:"16px",left:"10px"},category:{APPL:"應用",PRAC:"最佳實踐與慣例",COM:"社群",DB:"資料庫",DATA:"資料分析",EDU:"教育",EMBED:"嵌入式系統",FIN:"金融科技",IOT:"物聯網",GAME:"遊戲",GRAPH:"圖像處理",ML:"機器學習",NLP:"自然語言處理",CORE:"Python 核心",TOOL:"專案建置工具",SCI:"科學",SEC:"資訊安全",ADMIN:"系統管理",TEST:"測試",WEB:"網站框架",OTHER:"其他"}}}),name:"SpeechCard",components:{LocaleLink:r(44).b},props:{id:{type:Number,default:null},level:{type:String,default:null},beginTime:{type:Date,default:null},location:{type:String,default:null},title:{type:String,default:""},speakers:{type:Array,default:function(){return[]}},lang:{type:String,default:null},category:{type:String,default:""},to:{type:String,default:"/"},shouldShow:{type:Boolean,default:!0}},data:function(){return{icon:{lang:{ENEN:r(551),ZHEN:r(552),JPEN:r(553),ZHZH:r(546)}},locationMapping:{"4-r0":"R0","5-r1":"R1","6-r2":"R2","1-r3":"R3"},levelBgColorMapping:{EXPERIENCED:"#ca7795",INTERMEDIATE:"#6580dc",NOVICE:"#65b1b7"}}},computed:{dayOneMidnight:function(){return new Date("".concat(this.$store.state.configs.conferenceDate,"T16:00:00Z"))}},methods:{getDateTag:function(e){return e?e<this.dayOneMidnight?"Day 1":"Day 2":""},getTime:function(e){if(!e)return"";var t=("0"+e.getHours()).slice(-2),r=("0"+e.getMinutes()).slice(-2);return"".concat(t,":").concat(r)},getLevelTriangleStyle:function(e){return{"background-color":this.levelBgColorMapping[e]}},getLevelStyle:function(){return{"font-size":this.$t("levelStyle.fontSize"),left:this.$t("levelStyle.left")}},getMaskImgStyle:function(img){return{"-webkit-mask-image":"url(".concat(img,")"),"mask-image":"url(".concat(img,")")}}}},c=(r(582),r(7)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("locale-link",{directives:[{name:"show",rawName:"v-show",value:e.shouldShow,expression:"shouldShow"}],staticClass:"speechCard flex flex-col",attrs:{to:e.to}},[r("div",[r("figure",{staticClass:"speechCard__levelTriangle",style:e.getLevelTriangleStyle(e.level)}),e._v(" "),r("div",{staticClass:"speechCard__level",style:e.getLevelStyle()},[e._v("\n            "+e._s(e.$t("levels."+e.level))+"\n        ")]),e._v(" "),r("div",{staticClass:"text-right"},[r("div",{staticClass:"speechCard__date"},[e._v("\n                "+e._s(e.getDateTag(e.beginTime)+" "+e.getTime(e.beginTime))+"\n            ")]),e._v(" "),r("div",{staticClass:"speechCard__location"},[e._v("\n                "+e._s(e.locationMapping[e.location])+"\n            ")])])]),e._v(" "),r("div",{staticClass:"speechCard__title speechCard__title-overflow"},[e._v("\n        "+e._s(e.title)+"\n    ")]),e._v(" "),r("div",{staticClass:"flex items-center justify-between"},[r("div",{staticClass:"speechCard__speakerThumbnails"},e._l(e.speakers,(function(e,i){return r("div",{key:"speech_card_speaker_thumbnail_"+i,staticClass:"speechCard__speakerThumbnail"},[r("img",{attrs:{src:e.thumbnail_url,alt:e.name}})])})),0),e._v(" "),r("div",{staticClass:"speechCard__lang",style:e.getMaskImgStyle(e.icon.lang[e.lang])})]),e._v(" "),r("div",{staticClass:"speechCard__speakerNames flex-1"},[e._v("\n        "+e._s(e.speakers.map((function(e){return e.name})).join(", "))+"\n    ")]),e._v(" "),r("div",{staticClass:"speechCard__category self-start"},[e._v("\n        "+e._s(e.$t("category."+e.category))+"\n    ")])])}),[],!1,null,"5ea503e3",null);t.default=component.exports},629:function(e,t,r){var content=r(681);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("1a4edb0a",content,!0,{sourceMap:!1})},630:function(e,t,r){var content=r(683);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("063d2594",content,!0,{sourceMap:!1})},631:function(e,t,r){var content=r(685);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("5636416d",content,!0,{sourceMap:!1})},680:function(e,t,r){"use strict";r(629)},681:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,".checkbox[data-v-2b748bdc]{margin-left:0.5rem;margin-top:0.75rem;cursor:pointer;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;padding-left:1rem;padding-right:1rem;padding-top:8px;padding-bottom:8px}@media (min-width: 768px){.checkbox[data-v-2b748bdc]{padding-left:36px;padding-right:36px}.checkbox[data-v-2b748bdc]{padding-top:12px;padding-bottom:12px}}.checkbox[data-v-2b748bdc]{border-radius:40px;border-width:2px;border-style:solid;--tw-border-opacity:1;border-color:rgba(218, 139, 220, var(--tw-border-opacity));font-size:16px;font-weight:600;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity))}@media (min-width: 768px){.checkbox[data-v-2b748bdc]{font-size:18px}}.checkbox.checked[data-v-2b748bdc]{--tw-bg-opacity:1;background-color:rgba(218, 139, 220, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(26, 26, 48, var(--tw-text-opacity))}.checkbox[data-v-2b748bdc]:hover{--tw-bg-opacity:1;background-color:rgba(218, 139, 220, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(26, 26, 48, var(--tw-text-opacity));opacity:0.9}",""]),o.locals={},e.exports=o},682:function(e,t,r){"use strict";r(630)},683:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,".checkboxCollection[data-v-f44603ca]{display:flex;flex-wrap:wrap;justify-content:center}",""]),o.locals={},e.exports=o},684:function(e,t,r){"use strict";r(631)},685:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,".speechCardCollection[data-v-e5b7573a]{display:grid}@media (min-width: 640px){.speechCardCollection[data-v-e5b7573a]{grid-template-columns:repeat(2, minmax(0, 1fr))}}@media (min-width: 768px){.speechCardCollection[data-v-e5b7573a]{grid-template-columns:repeat(3, minmax(0, 1fr))}}.speechCardCollection[data-v-e5b7573a]{-moz-column-gap:1rem;column-gap:1rem;row-gap:1rem}@media (min-width: 768px){.speechCardCollection[data-v-e5b7573a]{row-gap:1.5rem}}.speechCardCollection[data-v-e5b7573a]{margin-top:1.5rem;margin-bottom:1.5rem}@media (min-width: 768px){.speechCardCollection[data-v-e5b7573a]{margin-top:4rem;margin-bottom:4rem}}",""]),o.locals={},e.exports=o},710:function(e,t,r){"use strict";r.r(t);var o=r(93),n=(r(46),r(53),r(34),r(33),{name:"CoreCheckbox",props:{id:{type:String,default:""},label:{type:String,default:""},value:{type:[Array,Boolean],default:function(){return[]}},isChecked:{type:Boolean,default:!1}},methods:{toggleCheckbox:function(){var e=this;if("boolean"==typeof this.value)this.$emit("input",!this.value);else{var t=[];t=this.value.includes(this.id)?Object(o.a)(this.value.filter((function(t){return t!==e.id}))):[].concat(Object(o.a)(this.value),[this.id]),this.$emit("input",Object(o.a)(t))}}}}),c=(r(680),r(7)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"checkbox",class:{checked:e.isChecked}},[r("input",{staticClass:"hidden",attrs:{id:e.id,type:"checkbox"},domProps:{value:e.id,checked:e.isChecked},on:{change:function(t){return e.toggleCheckbox()}}}),e._v(" "),r("fa",{directives:[{name:"show",rawName:"v-show",value:e.isChecked,expression:"isChecked"}],staticClass:"mr-2",attrs:{icon:["fa","check"],"aria-hidden":"true"}}),e._v("\n    "+e._s(e.label)+"\n")],1)}),[],!1,null,"2b748bdc",null);t.default=component.exports},736:function(e,t,r){var content=r(996);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("7cbc7c34",content,!0,{sourceMap:!1})},746:function(e,t,r){"use strict";r.r(t);var o={name:"CheckboxCollection"},n=(r(682),r(7)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"checkboxCollection"},[e._t("default")],2)}),[],!1,null,"f44603ca",null);t.default=component.exports},747:function(e,t,r){"use strict";r.r(t);var o={name:"SpeechCardCollection"},n=(r(684),r(7)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"speechCardCollection"},[e._t("default")],2)}),[],!1,null,"e5b7573a",null);t.default=component.exports},977:function(e,t,r){"use strict";var o=r(293),n=r(294);e.exports=o("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n)},978:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(979);o({target:"Set",proto:!0,real:!0,forced:n},{addAll:function(){return c.apply(this,arguments)}})},979:function(e,t,r){"use strict";var o=r(10),n=r(29);e.exports=function(){for(var e=o(this),t=n(e.add),r=0,c=arguments.length;r<c;r++)t.call(e,arguments[r]);return e}},980:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(295);o({target:"Set",proto:!0,real:!0,forced:n},{deleteAll:function(){return c.apply(this,arguments)}})},981:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(45),l=r(10),d=r(29),f=r(69),h=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{difference:function(e){var t=l(this),r=new(f(t,c("Set")))(t),o=d(r.delete);return h(e,(function(e){o.call(r,e)})),r}})},982:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(10),l=r(40),d=r(581),f=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{every:function(e){var t=c(this),r=d(t),o=l(e,arguments.length>1?arguments[1]:void 0,3);return!f(r,(function(e,r){if(!o(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},983:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(45),l=r(10),d=r(29),f=r(40),h=r(69),m=r(581),v=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{filter:function(e){var t=l(this),r=m(t),o=f(e,arguments.length>1?arguments[1]:void 0,3),n=new(h(t,c("Set"))),y=d(n.add);return v(r,(function(e){o(e,e,t)&&y.call(n,e)}),{IS_ITERATOR:!0}),n}})},984:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(10),l=r(40),d=r(581),f=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{find:function(e){var t=c(this),r=d(t),o=l(e,arguments.length>1?arguments[1]:void 0,3);return f(r,(function(e,r){if(o(e,e,t))return r(e)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},985:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(45),l=r(10),d=r(29),f=r(69),h=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{intersection:function(e){var t=l(this),r=new(f(t,c("Set"))),o=d(t.has),n=d(r.add);return h(e,(function(e){o.call(t,e)&&n.call(r,e)})),r}})},986:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(10),l=r(29),d=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{isDisjointFrom:function(e){var t=c(this),r=l(t.has);return!d(e,(function(e,o){if(!0===r.call(t,e))return o()}),{INTERRUPTED:!0}).stopped}})},987:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(45),l=r(10),d=r(29),f=r(291),h=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{isSubsetOf:function(e){var t=f(this),r=l(e),o=r.has;return"function"!=typeof o&&(r=new(c("Set"))(e),o=d(r.has)),!h(t,(function(e,t){if(!1===o.call(r,e))return t()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},988:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(10),l=r(29),d=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{isSupersetOf:function(e){var t=c(this),r=l(t.has);return!d(e,(function(e,o){if(!1===r.call(t,e))return o()}),{INTERRUPTED:!0}).stopped}})},989:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(10),l=r(581),d=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{join:function(e){var t=c(this),r=l(t),o=void 0===e?",":String(e),n=[];return d(r,n.push,{that:n,IS_ITERATOR:!0}),n.join(o)}})},990:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(45),l=r(10),d=r(29),f=r(40),h=r(69),m=r(581),v=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{map:function(e){var t=l(this),r=m(t),o=f(e,arguments.length>1?arguments[1]:void 0,3),n=new(h(t,c("Set"))),y=d(n.add);return v(r,(function(e){y.call(n,o(e,e,t))}),{IS_ITERATOR:!0}),n}})},991:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(10),l=r(29),d=r(581),f=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{reduce:function(e){var t=c(this),r=d(t),o=arguments.length<2,n=o?void 0:arguments[1];if(l(e),f(r,(function(r){o?(o=!1,n=r):n=e(n,r,r,t)}),{IS_ITERATOR:!0}),o)throw TypeError("Reduce of empty set with no initial value");return n}})},992:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(10),l=r(40),d=r(581),f=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{some:function(e){var t=c(this),r=d(t),o=l(e,arguments.length>1?arguments[1]:void 0,3);return f(r,(function(e,r){if(o(e,e,t))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},993:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(45),l=r(10),d=r(29),f=r(69),h=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{symmetricDifference:function(e){var t=l(this),r=new(f(t,c("Set")))(t),o=d(r.delete),n=d(r.add);return h(e,(function(e){o.call(r,e)||n.call(r,e)})),r}})},994:function(e,t,r){"use strict";var o=r(5),n=r(20),c=r(45),l=r(10),d=r(29),f=r(69),h=r(39);o({target:"Set",proto:!0,real:!0,forced:n},{union:function(e){var t=l(this),r=new(f(t,c("Set")))(t);return h(e,d(r.add),{that:r}),r}})},995:function(e,t,r){"use strict";r(736)},996:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,".intro[data-v-5798e2ee]{margin-bottom:2rem;font-size:0.75rem;line-height:1rem}@media (min-width: 768px){.intro[data-v-5798e2ee]{font-size:0.875rem;line-height:1.25rem}}.intro[data-v-5798e2ee]{line-height:33px}",""]),o.locals={},e.exports=o}}]);