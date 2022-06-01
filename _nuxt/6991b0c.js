(window.webpackJsonp=window.webpackJsonp||[]).push([[59,9,15,16,17],{1008:function(e,t,n){"use strict";n.r(t);var r=n(544),o=n(491),c=n(492),l=n(507),d=n(508),m=n(75),h={i18n:r.a,name:"PageConferenceWarmupsPyhug",components:{I18nPageWrapper:o.default,CoreH1:c.default,Tab:l.default,Tabs:d.default,ExtLink:m.default},data:function(){return{title:"PyCon TW x PyHug Meetup",schedules:[["13:30 - 13:35","活動開場"],["13:35 - 13:50","主持人開場與社群介紹－PyHUG"],["13:50 - 14:30","講者分享: Inès"],["14:30 - 14:35","休息時間"],["14:35 - 15:05","講者分享: Tina Hsu"],["15:05 - 15:10","休息時間"],["15:10 - 15:40","講者分享: 林明憲"],["15:40 - 15:45","休息時間"],["15:45 - 16:30","講者分享: Chin-Yun Yu"],["16:30 - 16:35","活動結尾"],["16:35 - 17:45","自由交流 at Gather.Town"]],speeches:[{title:"How deep learning helps astronomers on observation data - \nCNN for classifying galaxy spectra",speakers:[{name:"Inès",bio:"Ciao, I am a PhD student in the University of Rome La Sapienza and I will get my PhD degree soon.",photo:n(644)}],description:"了解不同類型的西佛星系的可以幫助我們更了解星系的演化與形成，然而這類星系光譜型態很複雜，造成天文學家花費很多時間在光譜的分類上，我們利用 pytorch 建立一個一維 Convolution Neural Network (CNN) 模型作為光譜分類器，使用西佛 1.9 與 2.0 星系的光譜給模型學習辨認兩者光譜的差異，訓練後的模型可以分辨出西佛 1.9 星系的精確率高達八成，也能從西佛 2.0 星系的樣本裡挑出額外的西佛 1.9 星系，這額外的西佛 1.9 星系可以增加訓練模型的樣本數，再次訓練後的模型分辨出西佛1.9星系的精確率提高至九成。\n\n使用CNN模型可以比傳統的方法更快更準確地區分出這兩種類型的西佛星系，也能收集到比以前多的西佛 1.9 星系的光譜，這些西佛 1.9 星系可以提供天文學家關於宿主星系型態、黑洞吸積 (accretion) 的環境以及黑洞質量，進而了解星系形成演化與其黑洞的關係。"},{title:"Machine Learning Applied to Stock Index Performance Enhancement",speakers:[{name:"Tina Hsu",bio:"Tina， 喜愛使用 Python 來解決金融問題，目前經營 blog 以及 YouTube 頻道 pyinvest。",photo:n(871)}],description:'近年來，指數化投資愈來愈盛行，策略型投資如 Smart Beta 更是受到市場青睞。國內外機構法人不再安於傳統 Top down 的投資方式。將部分資產從以往重視區域曝險、國家曝險或產業別曝險，推進為因子曝險!為 Smart Beta 投資燃起一股旋風!\n\n然而，從回測數據中清楚顯示，這些聰明因子雖然長期而言能夠帶來風險溢酬，但在不同的市場環境表現卻有相當大的差異。比方說動能因子在牛市表現很好，在熊市中表現卻非常差。 究竟什麼時候該採用什麼因子，一直是一個深受重視的議題。另外，在量化投資領域中，除了基本面外，技術面與籌碼面也都相當受到投資人的重視，然而不同的訊號時常會帶來矛盾。股價的複雜度及非線性造成股價難以預測，讓我們不禁想到，既然AI這麼聰明，是否能夠幫我們解決投資上的難題?\n\n很榮幸本篇文章今年初被刊登在 Journal of Banking and Financial Technology，本次演講將與大家詳細分享裡頭的內容，包含特徵建構、模型建構、回測以及績效評估等等。希望本次的演講能夠摒除大家對"機器學習好複雜"的刻板印象，並且激發各位動手打造屬於自己的 AI 選股系統。',link:"https://link.springer.com/article/10.1007%2Fs42786-021-00025-6"},{title:"The 2020 CVPR Workshop of Low-Power Computer Vision Challenge 參加經驗分享",speakers:[{name:"林明憲",bio:"wiki: 林明憲，前台灣棒球選手…(誤).正確:專長為軟硬體共同設計，目前專注於Deep Learning和Machine Learning於影像加速的應用並用FPGA實現",photo:n(644)}],description:"CVPR 被認為是計算機視覺領域最重要的會議之一的年度會議。與這些會議對應的還有很多計算機視覺演算法比賽，這些比賽代表著新興、或實用、或有趣的、或被忽略的研究方向。當中 Low Power Computer Vision (LPCV) Challenge 是一項年度競賽，旨在提高計算機視覺的能效，以便在資源緊張的系統上運行。將分享如何這些比賽過程的策略及技巧，甚至失敗經驗過程中，提升個人能力"},{title:"Implementing NMF in PyTorch Framework: An Autograd Approach",speakers:[{name:"Chin-Yun Yu",bio:"I’m a Software/Algorithm Engineer, and an independent Researcher. I’m interesting in Deep Learnin/Machine Learning/DSP/MIR.",photo:n(872)}],description:"NMF (Non-negative Matrix Factorization, 又稱非負矩陣分解)，是在機器學習中，對資料做降維相當有用的一種方式，也常用在資料分析、聲源分離等應用。隨著近年來深度學習的興起，開始有研究試圖將類似的概念應用到 NMF，做出類似的多層深度模型。但因為 NMF 參數非負的特性，將 NMF 的參數更新方式推廣到多層且結構複雜的模型並非易事。本演講將會分享，如何運用深度學習套件 PyTorch 的自動微分機制，重新解析 NMF 的目標函數，將NMF的乘法參數更新方式，推廣應用到任意的 NMF 模型。"}]}},head:function(){return{title:this.title,meta:[{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.intro},{hid:"description",name:"description",content:this.intro}]}}},f=(n(873),n(4)),component=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i18n-page-wrapper",{staticClass:"px-8 sm:px-10 md:px-32 lg:px-60",attrs:{"custom-x":""}},[n("core-h1",{attrs:{title:"PyCon TW x PyHug Meetup",center:""}}),e._v(" "),n("p",{staticClass:"font-serif font-black"},[n("ext-link",{attrs:{href:"https://www.meetup.com/pythonhug/",highlight:""}},[e._v("PyHUG")])],1),e._v(" "),n("p",{staticClass:"intro"},[e._v("\n        歡迎來到\n        "),n("ext-link",{attrs:{href:"https://www.meetup.com/pythonhug/",highlight:"",underline:""}},[e._v("PyHUG")]),e._v("。我們是一群活動於新竹周邊的 Python 程式員。\n        我們會定期舉辦技術討論與程式設計的聚會。非常歡迎你加入我們！\n    ")],1),e._v(" "),n("ul",{staticClass:"list-disc"},[n("li",{staticClass:"listTitle"},[e._v("活動時間：")]),e._v(" "),n("li",{staticClass:"list-none"},[e._v("2021/09/25 13:30-17:45")]),e._v(" "),n("li",{staticClass:"listTitle"},[e._v("活動形式：")]),e._v(" "),n("li",{staticClass:"list-none"},[e._v("\n            於 Gather Town 中進行活動：\n            "),n("ext-link",{attrs:{href:"https://gather.town/app/pp5WuaEQ2CChMMxy/PyCon%20TW%20x%20Local%20Meetup",highlight:"",underline:""}},[e._v("點我進入空間")])],1),e._v(" "),n("li",{staticClass:"list-none"},[e._v("\n            線上共同筆記：\n            "),n("ext-link",{attrs:{href:"https://hackmd.io/7TY3-Z-VRGi50C5sC7ONqg",highlight:"",underline:""}},[e._v("點我看共筆")])],1),e._v(" "),n("li",{staticClass:"list-none"},[e._v("YouTube 活動錄影： 將於活動後釋出")])]),e._v(" "),n("div",{staticClass:"scheduleSection"},[n("h2",[e._v("活動流程")]),e._v(" "),n("div",{staticClass:"table w-full mt-4"},[n("div",{staticClass:"table-row-group w-full"},e._l(e.schedules,(function(t,r){return n("div",{key:"item_"+r,staticClass:"table-row font-serif"},[n("div",{staticClass:"table-cell w-5/12 text-right pb-4"},[e._v("\n                        "+e._s(t[0])+"\n                    ")]),e._v(" "),n("div",{staticClass:"table-cell w-1/12"}),e._v(" "),n("div",{staticClass:"table-cell w-6/12"},[e._v("\n                        "+e._s(t[1])+"\n                    ")])])})),0)])]),e._v(" "),n("h2",[e._v("講者介紹")]),e._v(" "),e._l(e.speeches,(function(t,i){return n("div",{key:"pyhug_speech_"+i},[n("div",{staticClass:"speakers"},e._l(t.speakers,(function(t,r){return n("div",{key:"pyhug_details_speaker_"+r,staticClass:"speakerContainer"},[n("div",{staticClass:"speakerThumbnail"},[n("img",{attrs:{src:t.photo,alt:t.name}})]),e._v(" "),n("p",{staticClass:"speakerName"},[e._v(e._s(t.name))])])})),0),e._v(" "),n("p",{staticClass:"speechTitle"},[e._v(e._s(t.title))]),e._v(" "),n("tabs",{staticClass:"tabs"},[n("tab",{attrs:{title:e.$t("terms.speech")}},[n("div",{staticClass:"whitespace-pre-line break-words"},[n("p",{staticClass:"tabParagraph"},[e._v("\n                        "+e._s(t.description)+"\n                    ")]),e._v(" "),t.link?n("ext-link",{attrs:{href:t.link,highlight:""}},[e._v("文章連結")]):e._e()],1)]),e._v(" "),n("tab",{attrs:{title:e.$t("terms.bio")}},e._l(t.speakers,(function(t,r){return n("div",{key:"pyhug_tab_speaker_"+r,staticClass:"mb-4 whitespace-pre-line"},[n("div",{staticClass:"whitespace-pre-line"},[n("p",{staticClass:"tabParagraphTitle"},[e._v("\n                            "+e._s(t.name)+"\n                        ")]),e._v(" "),n("p",{staticClass:"tabParagraph"},[e._v(e._s(t.bio))])])])})),0)],1)],1)}))],2)}),[],!1,null,"c3e79c52",null);t.default=component.exports},485:function(e,t,n){var content=n(488);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("098c8dc7",content,!0,{sourceMap:!1})},486:function(e,t,n){var content=n(490);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("6ad87c5b",content,!0,{sourceMap:!1})},487:function(e,t,n){"use strict";n(485)},488:function(e,t,n){var r=n(15),o=n(270),c=n(271),l=n(272),d=n(273),m=n(274),h=n(275),f=n(276),v=r((function(i){return i[1]})),x=o(c),_=o(l),w=o(d),y=o(m),C=o(h),k=o(f);v.push([e.i,"h1[data-v-cb0ee938]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-cb0ee938]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-cb0ee938]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-cb0ee938], p[data-v-cb0ee938]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-cb0ee938]{font-size:.625rem}ul[data-v-cb0ee938]{margin-bottom:1.5rem}ul.list-disc[data-v-cb0ee938]{padding-left:3rem}li[data-v-cb0ee938]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-cb0ee938]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:4% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}@media (min-width: 1194px){.page-wrapper[data-v-cb0ee938]{background-image:url("+x+"), url("+_+"), url("+w+"), url("+y+"), url("+C+"), url("+k+"), url("+x+"), url("+_+"), url("+w+"), url("+y+"), url("+C+"), url("+k+")}}",""]),v.locals={},e.exports=v},489:function(e,t,n){"use strict";n(486)},490:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,"h1[data-v-7492a823]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;margin-bottom:0px}@media (min-width: 834px){h1[data-v-7492a823]{margin-bottom:2.25rem}h1[data-v-7492a823]{font-size:1.5rem;line-height:2rem}}h1[data-v-7492a823]{color:#e099e1}",""]),r.locals={},e.exports=r},491:function(e,t,n){"use strict";n.r(t);var r={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1}},computed:{classObject:function(){return{"py-8":!0,"md:py-20":!0,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}}}},o=(n(487),n(4)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-wrapper"},[n("div",{class:e.classObject},[e._t("default")],2)])}),[],!1,null,"cb0ee938",null);t.default=component.exports},492:function(e,t,n){"use strict";n.r(t);var r={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},o=(n(489),n(4)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex justify-center font-serif"},[n("h1",{class:e.classObject},[e._v(e._s(e.title))])])}),[],!1,null,"7492a823",null);t.default=component.exports},501:function(e,t,n){var content=n(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("e23b811c",content,!0,{sourceMap:!1})},505:function(e,t,n){"use strict";n(501)},506:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,".tabs__headers[data-v-92bbc552]{margin-left:0.75rem;font-family:Noto Serif TC, -apple-system, serif}.tabs__headers>.header[data-v-92bbc552]{margin-left:0.25rem;display:inline-block;padding-top:0.5rem;padding-bottom:0.5rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;font-size:0.875rem;line-height:1.25rem;font-weight:900}@media (min-width: 834px){.tabs__headers>.header[data-v-92bbc552]{font-size:1rem;line-height:1.5rem}}.tabs__headers>.header[data-v-92bbc552]{cursor:pointer;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;border-width:1px;background-color:transparent;color:#e6ba17;border-color:#c386ae;min-width:20%}@media (min-width:767px){.tabs__headers>.header[data-v-92bbc552]{min-width:110px}}.tabs__headers>.header.-selected[data-v-92bbc552]{background:#e6ba17;color:#121023}.tab[data-v-92bbc552]{display:inline-block;width:100%;border-radius:1rem;border-width:2px;--tw-bg-opacity:0;font-size:0.75rem;line-height:1rem}@media (min-width: 834px){.tab[data-v-92bbc552]{font-size:0.875rem;line-height:1.25rem}}.tab[data-v-92bbc552]{line-height:29px;color:#c7c7c7;border-color:#c386ae;box-shadow:6px 6px 0 #c386ae;padding:20px}",""]),r.locals={},e.exports=r},507:function(e,t,n){"use strict";n.r(t);var r={props:{title:{type:String,default:"Tab"}},data:function(){return{isActive:!0}}},o=n(4),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"tab"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},508:function(e,t,n){"use strict";n.r(t);n(28);var r={data:function(){return{selectedIndex:0,tabs:[]}},created:function(){this.tabs=this.$children},mounted:function(){var e=this;this.selectTab(0),this.$root.$on("initTabs",(function(){e.selectTab(0)}))},methods:{selectTab:function(i){this.selectedIndex=i,this.tabs.forEach((function(e,t){e.isActive=t===i}))},isSelectedIndex:function(i){return i===this.selectedIndex}}},o=(n(505),n(4)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"tabs__headers"},e._l(e.tabs,(function(t,r){return n("li",{key:t.title,class:{header:!0,"-selected":e.isSelectedIndex(r)},on:{click:function(t){return e.selectTab(r)}}},[e._v("\n            "+e._s(t.title)+"\n        ")])})),0),e._v(" "),e._t("default")],2)}),[],!1,null,"92bbc552",null);t.default=component.exports},544:function(e,t,n){"use strict";var r=n(64);t.a=Object(r.a)({"en-us":{terms:{bio:"Bio",speech:"Speech"}},"zh-hant":{terms:{bio:"講者介紹",speech:"演講"}}})},644:function(e,t,n){e.exports=n.p+"img/dummy.b84a3b2.svg"},645:function(e,t,n){var content=n(874);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("a3cce70a",content,!0,{sourceMap:!1})},871:function(e,t,n){e.exports=n.p+"img/tina.cd485db.png"},872:function(e,t,n){e.exports=n.p+"img/chun-yun-yu.5fb04ec.png"},873:function(e,t,n){"use strict";n(645)},874:function(e,t,n){var r=n(15)((function(i){return i[1]}));r.push([e.i,".intro[data-v-c3e79c52]{margin-bottom:2rem;font-family:Noto Serif TC, -apple-system, serif;font-size:0.75rem;line-height:1rem}@media (min-width: 834px){.intro[data-v-c3e79c52]{font-size:0.875rem;line-height:1.25rem}}.intro[data-v-c3e79c52]{line-height:33px}ul.list-disc[data-v-c3e79c52]{font-family:Noto Serif TC, -apple-system, serif;font-size:0.75rem;line-height:1rem}@media (min-width: 834px){ul.list-disc[data-v-c3e79c52]{font-size:0.875rem;line-height:1.25rem}}ul.list-disc[data-v-c3e79c52]{padding-left:20px!important}.listTitle[data-v-c3e79c52]{font-size:1rem;line-height:1.5rem;font-weight:700;color:#c386ae}h2[data-v-c3e79c52]{margin-left:auto;margin-right:auto;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;margin-top:.5rem!important;margin-bottom:0!important;font-size:24px;color:#c386ae}.scheduleSection[data-v-c3e79c52]{margin-bottom:3rem;display:inline-block;font-size:0.75rem;line-height:1rem}@media (min-width: 834px){.scheduleSection[data-v-c3e79c52]{margin-bottom:6rem}.scheduleSection[data-v-c3e79c52]{font-size:0.875rem;line-height:1.25rem}}.scheduleSection[data-v-c3e79c52]{padding-left:0.25rem;padding-right:0.25rem;padding-top:0.5rem;padding-bottom:0.5rem}@media (min-width: 600px){.scheduleSection[data-v-c3e79c52]{padding-left:0.5rem;padding-right:0.5rem}.scheduleSection[data-v-c3e79c52]{padding-top:1rem;padding-bottom:1rem}}@media (min-width: 834px){.scheduleSection[data-v-c3e79c52]{padding-left:1rem;padding-right:1rem}}.scheduleSection[data-v-c3e79c52]{width:100%;border-radius:1rem;border-width:2px;--tw-bg-opacity:0;line-height:29px;color:#c7c7c7;border-color:#c386ae;box-shadow:6px 6px 0 #c386ae}.speakers[data-v-c3e79c52]{margin-top:4rem;display:flex;justify-content:center}.speakerContainer[data-v-c3e79c52]{display:flex;flex-direction:column}.speakerThumbnail[data-v-c3e79c52]{margin-left:0.75rem;margin-right:0.75rem;margin-bottom:1rem;height:6rem;width:6rem}@media (min-width: 600px){.speakerThumbnail[data-v-c3e79c52]{height:8rem}.speakerThumbnail[data-v-c3e79c52]{width:8rem}}.speakerThumbnail img[data-v-c3e79c52]{border-radius:9999px;-o-object-fit:cover;object-fit:cover;height:100%}.speakerName[data-v-c3e79c52]{margin-bottom:1rem;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;color:#c386ae}.speechTitle[data-v-c3e79c52]{margin-bottom:1.75rem;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;color:#c386ae}.tabs[data-v-c3e79c52]{margin-bottom:1rem;width:100%}@media (min-width: 834px){.tabs[data-v-c3e79c52]{margin-bottom:4rem}}.tabParagraphTitle[data-v-c3e79c52]{margin-bottom:0.5rem;font-family:Noto Serif TC, -apple-system, serif;font-weight:700;color:#e6ba17}.tabParagraph[data-v-c3e79c52]{margin-bottom:0.5rem;font-family:Noto Serif TC, -apple-system, serif}",""]),r.locals={},e.exports=r}}]);