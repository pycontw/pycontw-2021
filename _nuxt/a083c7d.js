(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{342:function(t,e,o){var content=o(344);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("0261960a",content,!0,{sourceMap:!1})},343:function(t,e,o){"use strict";o(342)},344:function(t,e,o){(e=o(17)(!1)).push([t.i,"h1[data-v-e3b20022]{font-size:1.875rem;margin-top:2rem;margin-bottom:2rem;text-align:center}h1[data-v-e3b20022],h2[data-v-e3b20022]{width:100%}h2[data-v-e3b20022]{font-size:1.5rem;margin-top:5rem;margin-bottom:1.5rem}h3[data-v-e3b20022]{font-size:1.25rem;margin-top:2.5rem}.paragraph[data-v-e3b20022],h3[data-v-e3b20022],p[data-v-e3b20022]{width:100%;margin-bottom:1rem}.paragraph[data-v-e3b20022],p[data-v-e3b20022]{margin-top:.25rem;text-align:justify}span.text-2s[data-v-e3b20022]{font-size:.625rem}ul[data-v-e3b20022]{margin-bottom:1.5rem}ul.list-disc[data-v-e3b20022]{padding-left:3rem}li[data-v-e3b20022]{margin-top:.25rem;margin-bottom:.25rem}",""]),t.exports=e},345:function(t,e,o){"use strict";var n={name:"I18nPageWrapper",props:{customY:{type:Boolean,default:!1}},computed:{classObject:function(){return{"w-full":!0,"px-8":!0,"py-24":!this.customY,"sm:px-20":!0,"md:px-32":!0,"lg:px-32":!0}}}},r=(o(343),o(4)),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classObject},[this._t("default")],2)}),[],!1,null,"e3b20022",null);e.a=component.exports},346:function(t,e,o){"use strict";o.r(e);var n=o(23),r={name:"CoreTextButton",components:{ExtLink:n.a,LocaleLink:n.b},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},rounded:{type:Boolean,default:!0},block:{type:Boolean,default:!1},href:{type:String,default:void 0},to:{type:String,default:void 0}},computed:{coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--rounded":this.rounded,"--block":this.block,"--is-link":this.isLink}},isLink:function(){return this.href||this.to}}},l=(o(351),o(4)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.coreButtonClasses},[t.href?o("ext-link",{attrs:{href:t.href}},[t._t("default")],2):t.to?o("locale-link",{attrs:{to:t.to,customized:""}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"991fe97a",null);e.default=component.exports;installComponents(component,{ExtLink:o(37).default,LocaleLink:o(32).default})},348:function(t,e,o){var content=o(352);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("72cf1ee8",content,!0,{sourceMap:!1})},350:function(t,e,o){"use strict";o.r(e);o(376);var n={name:"SponsorCard",props:{logoUrl:{type:String,default:""},tag:{type:String,default:""},small:{type:Boolean,default:!1}},computed:{classObject:function(){return{sponsorCard:!0,"-small":this.small}}}},r=(o(379),o(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:!!t.logoUrl,expression:"!!logoUrl"}],class:t.classObject},[o("img",{attrs:{src:t.logoUrl,alt:""}}),t._v(" "),t.tag?o("div",{staticClass:"sponsorCard__tag"},[t._v("\n        "+t._s(t.tag)+"\n    ")]):t._e()])}),[],!1,null,"21cb91d0",null);e.default=component.exports},351:function(t,e,o){"use strict";o(348)},352:function(t,e,o){(e=o(17)(!1)).push([t.i,".core-button[data-v-991fe97a]{outline:none;background-color:transparent}.core-button.--is-link>a[data-v-991fe97a],.core-button[data-v-991fe97a]:not(.--is-link){display:inline-flex;align-items:center;justify-content:center;min-width:88px;height:2.25rem;padding:24px 40px;line-height:1.25rem;border-radius:5px;text-transform:uppercase;outline:none;font-weight:700;font-size:1rem}.core-button.--rounded.--is-link>a[data-v-991fe97a],.core-button.--rounded[data-v-991fe97a]:not(.--is-link){border-radius:9999px}.core-button.--primary.--is-link>a[data-v-991fe97a],.core-button.--primary[data-v-991fe97a]:not(.--is-link){color:#c2a53a;border:.25rem solid #c2a53a}.core-button.--secondary.--is-link>a[data-v-991fe97a],.core-button.--secondary[data-v-991fe97a]:not(.--is-link){color:#c7c7c7;border:.25rem solid #c7c7c7}.core-button.--is-link>a[data-v-991fe97a]:hover,.core-button[data-v-991fe97a]:not(.--is-link):hover{color:#7568f6;border-color:#7568f6}",""]),t.exports=e},355:function(t,e,o){"use strict";o.r(e);var n=o(44),r={i18n:Object(n.a)({"en-us":{diamond:"Diamond",platinum:"Platinum",gold:"Gold",silver:"Silver",bronze:"Bronze",special:"Special Sponsorship","co-organizer":"Co-organizer",organizer:"Organizer"},"zh-hant":{diamond:"鑽石級贊助",platinum:"白金級贊助",gold:"金級贊助",silver:"銀級贊助",bronze:"銅級贊助",special:"特別贊助","co-organizer":"協辦單位",organizer:"主辦單位"}}),name:"SponsorCardCollection",props:{levelName:{type:String,default:""}}},l=(o(381),o(4)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col w-full"},[e("h3",{staticClass:"mt-12 mb-8 mx-1 text-xl"},[this._v(this._s(this.$t(this.levelName)))]),this._v(" "),e("div",{staticClass:"sponsorCardCollection__cardContainer justify-center md:justify-start"},[this._t("default")],2)])}),[],!1,null,"9172f448",null);e.default=component.exports},356:function(t,e,o){"use strict";o.r(e);o(33);var n=o(44),r=Object(n.a)({"en-us":{website:"Website",about:"About"},"zh-hant":{website:"官方網站",about:"關於"}}),l=o(350),c=o(346),d={i18n:r,name:"SponsorModal",components:{SponsorCard:l.default,TextButton:c.default},props:{value:{type:Boolean,default:!1},context:{type:Object,default:function(){return{}}}},data:function(){return{shouldShowModal:this.value}},watch:{value:function(t){this.shouldShowModal=t}},methods:{close:function(){this.shouldShowModal=!1,this.$emit("input",!1)},getAttributeByLocale:function(t){var e="".concat(t,"_").concat({"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale]);return this.context[e]}}},f=(o(383),o(4)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowModal,expression:"shouldShowModal"}],staticClass:"sponsorModal"},[o("div",{staticClass:"lightBox"},[o("div",{staticClass:"lightBox__closeButton",on:{click:t.close}},[t._v("✕")]),t._v(" "),o("div",{staticClass:"lightBox__title"},[o("sponsor-card",{attrs:{"logo-url":t.context.logo_url,small:""}}),t._v(" "),o("h1",{staticClass:"text-xl mx-8 border-b-8 border-solid"},[t._v("\n                "+t._s(t.context.name)+"\n            ")])],1),t._v(" "),o("h2",{staticClass:"text-xl text-yellow-500 mt-4"},[t._v(t._s(t.$t("about")))]),t._v(" "),o("div",{staticClass:"lightBox__intro"},[o("p",{staticClass:"text-sm"},[t._v(t._s(t.getAttributeByLocale("intro")))])]),t._v(" "),o("div",{staticClass:"lightBox__buttons"},[o("text-button",{attrs:{href:t.context.website_url}},[t._v(t._s(t.$t("website")))])],1)])])}),[],!1,null,"53d91cd3",null);e.default=component.exports;installComponents(component,{SponsorCard:o(350).default,TextButton:o(346).default})},357:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center"},[e("pre",{staticClass:"text-xs mr-4"},[e("code",[this._v("with")]),this._v(" Pythonistas() "),e("code",[this._v("as")]),this._v(" us:"),e("br"),this._v("  Python.TW.reunion()\n    ")]),this._v(" "),e("div",{staticClass:"w-10 md:w-16 lg:w-20"},[e("img",{staticClass:"object-contain",attrs:{src:o(385),alt:""}})])])}],r={name:"LandingFocusSlogan"},l=(o(386),o(4)),component=Object(l.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),n,!1,null,"2c74679f",null);e.default=component.exports},358:function(t,e,o){"use strict";o.r(e);var n={name:"LandingFocusInfo"},r=(o(388),o(4)),component=Object(r.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"landingFocusInfo flex flex-col items-center font-serif"},[e("div",{staticClass:"landingFocusInfo__temporal"},[this._v("8/21")]),this._v(" "),e("div",{staticClass:"landingFocusInfo__till"}),this._v(" "),e("div",{staticClass:"landingFocusInfo__temporal"},[this._v("8/22")]),this._v(" "),e("div",{staticClass:"landingFocusInfo__locale mt-4"},[this._v("NTU")])])}],!1,null,"24d3b637",null);e.default=component.exports},363:function(t,e,o){var content=o(380);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("16a2066e",content,!0,{sourceMap:!1})},364:function(t,e,o){var content=o(382);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("e817889e",content,!0,{sourceMap:!1})},365:function(t,e,o){var content=o(384);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("80b99aa4",content,!0,{sourceMap:!1})},366:function(t,e,o){var content=o(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("7c8021fb",content,!0,{sourceMap:!1})},367:function(t,e,o){var content=o(389);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("4c8c1468",content,!0,{sourceMap:!1})},368:function(t,e,o){var content=o(391);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("1b7833da",content,!0,{sourceMap:!1})},376:function(t,e,o){"use strict";var n=o(5),r=o(377);n({target:"String",proto:!0,forced:o(378)("small")},{small:function(){return r(this,"small","","")}})},377:function(t,e,o){var n=o(27),r=/"/g;t.exports=function(t,e,o,l){var c=String(n(t)),d="<"+e;return""!==o&&(d+=" "+o+'="'+String(l).replace(r,"&quot;")+'"'),d+">"+c+"</"+e+">"}},378:function(t,e,o){var n=o(7);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},379:function(t,e,o){"use strict";o(363)},380:function(t,e,o){(e=o(17)(!1)).push([t.i,".sponsorCard[data-v-21cb91d0]{width:10rem;height:10rem;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));border-radius:1rem}.sponsorCard>img[data-v-21cb91d0]{-o-object-fit:contain;object-fit:contain;width:100%;border-radius:inherit}.sponsorCard.-small[data-v-21cb91d0]{width:5rem;height:5rem;min-width:100px}.sponsorCard__tag[data-v-21cb91d0]{height:1.5rem;width:100%;position:absolute;display:flex;justify-content:center;align-items:center;font-size:.75rem;--bg-opacity:1;background-color:#4c51bf;background-color:rgba(76,81,191,var(--bg-opacity));bottom:20px}",""]),t.exports=e},381:function(t,e,o){"use strict";o(364)},382:function(t,e,o){(e=o(17)(!1)).push([t.i,".sponsorCardCollection__cardContainer[data-v-9172f448]{display:flex;flex-wrap:wrap}.sponsorCardCollection__cardContainer>.sponsorCard[data-v-9172f448]{margin:0 0 60px;padding:5px}@media (min-width:415px){.sponsorCardCollection__cardContainer>.sponsorCard[data-v-9172f448]{margin:5px 15px 65px 5px}}.sponsorCardCollection__cardContainer>.sponsorCard[data-v-9172f448]:hover{cursor:pointer;box-sizing:content-box;margin:0 10px 60px 0}",""]),t.exports=e},383:function(t,e,o){"use strict";o(365)},384:function(t,e,o){(e=o(17)(!1)).push([t.i,".sponsorModal[data-v-53d91cd3]{display:flex;justify-content:center;align-items:center;position:fixed;top:0;left:0;width:100%;height:100vh;background-color:rgba(18,16,35,.6);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);z-index:10000}.lightBox[data-v-53d91cd3]{display:flex;flex-direction:column;padding:1rem 2rem;border-radius:1rem;border-width:4px;--border-opacity:1;border-color:#ecc94b;border-color:rgba(236,201,75,var(--border-opacity));width:95%;padding:32px 28px 28px 32px}@media (min-width:415px){.lightBox[data-v-53d91cd3]{width:66%;padding:60px 48px 48px 60px}}.lightBox[data-v-53d91cd3]{height:80%;background-color:#121023}.lightBox__closeButton[data-v-53d91cd3]{position:relative;display:flex;justify-content:flex-end;--text-opacity:1;color:#ecc94b;color:rgba(236,201,75,var(--text-opacity));cursor:pointer;top:-24px;right:-12px}@media (min-width:415px){.lightBox__closeButton[data-v-53d91cd3]{top:-40px;right:-20px}}.lightBox__title[data-v-53d91cd3]{display:flex;align-items:center}.lightBox__intro[data-v-53d91cd3]{display:flex;margin-bottom:1rem;overflow-y:scroll;white-space:pre-line}.lightBox__buttons[data-v-53d91cd3]{display:flex}",""]),t.exports=e},385:function(t,e,o){t.exports=o.p+"img/page-home-slogan.80b4714.png"},386:function(t,e,o){"use strict";o(366)},387:function(t,e,o){(e=o(17)(!1)).push([t.i,"code[data-v-2c74679f]{color:#7568f6}",""]),t.exports=e},388:function(t,e,o){"use strict";o(367)},389:function(t,e,o){(e=o(17)(!1)).push([t.i,".landingFocusInfo__till[data-v-24d3b637]{height:1.25rem;margin-top:.5rem;margin-bottom:.5rem;border-left:2px solid #c2a53a}.landingFocusInfo__temporal[data-v-24d3b637]{display:inline-flex;width:3rem;height:3rem;padding:.5rem;justify-content:center;align-items:center;border-radius:9999px;border-width:1px;border:4px solid #c2a53a}",""]),t.exports=e},390:function(t,e,o){"use strict";o(368)},391:function(t,e,o){var n=o(17),r=o(392),l=o(393);e=n(!1);var c=r(l);e.push([t.i,'.page-home .page-homeLandingFocus,.page-home .page-homeLandingFocus:after{position:relative;top:48px;width:100vw;height:calc(100vh - 48px)}.page-home .page-homeLandingFocus:after{position:absolute;top:0;z-index:-10;content:"";background-image:url('+c+');background-position:50%;background-size:cover}.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.text-golden{color:#c2a53a}.bg-golden-primary{background:#c2a53a}.bg-dark-primary{background:#212121}.bg-dark-secondary{background-color:#2b2b2b}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},392:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},393:function(t,e,o){t.exports=o.p+"img/page-home-background.21f6e2c.png"},409:function(t,e,o){"use strict";o.r(e);o(33);var n=o(19),r=o(86),l=o(44),c=Object(l.a)({"en-us":{pyconWelcome:"Welcome to PyCon TW 2021",sponsor:"Sponsor Us",sponsorList:"Sponsors",sponsorUs:"Be a Sponsor"},"zh-hant":{pyconWelcome:"歡迎來到 PyCon TW 2021",sponsor:"贊助我們",sponsorList:"贊助夥伴",sponsorUs:"成為贊助夥伴"}}),d=o(345),f=o(346),h=o(350),m=o(355),v=o(356),x=o(357),_=o(358);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var C={i18n:c,name:"PageIndex",components:{TextButton:f.default,I18nPageWrapper:d.a,LandingFocusSlogan:x.default,LandingFocusInfo:_.default,SponsorCard:h.default,SponsorCardCollection:m.default,SponsorModal:v.default},data:function(){return{isOpened:!1,selectedSponsor:{},volunteerFormUrl:"https://forms.gle/wuG2w42cbhamyGdv9"}},fetchOnServer:!1,computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["sponsorsData"])),created:function(){this.$store.dispatch("$getSponsorsData")},methods:{showModal:function(t){this.isOpened=!0,this.selectedSponsor=t},getAttributeByLocale:function(data,t){return data["".concat(t,"_").concat({"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale])]}}},w=(o(390),o(4)),component=Object(w.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page-home"},[o("div",{staticClass:"page-homeLandingFocus flex py-8 md:py-12"},[o("div",{staticClass:"w-full flex flex-col items-start text-golden mx-4 sm:mx-8 md:mx-16"},[t._m(0),t._v(" "),o("landing-focus-info",{staticClass:"my-12 md:my-8"}),t._v(" "),o("div",{staticClass:"w-full flex flex-col justify-between items-center md:flex-row"},[o("text-button",{staticClass:"mb-8 ml-12 self-start md:mb-0 md:self-center",attrs:{to:"/sponsor"}},[t._v("\n                    "+t._s(t.$t("sponsor"))+"\n                ")]),t._v(" "),o("landing-focus-slogan")],1)],1)]),t._v(" "),o("i18n-page-wrapper",{staticClass:"pt-12"},[o("h1",{staticClass:"text-yellow-500"},[t._v(t._s(t.$t("sponsorList")))]),t._v(" "),t._l(t.sponsorsData,(function(e,i){return o("sponsor-card-collection",{key:"index_sponsor_level_"+i,attrs:{"level-name":e.level_name}},t._l(e.sponsors,(function(e,n){return o("sponsor-card",{key:"index_sponsor_level_"+i+"_sponsor_"+n,attrs:{"logo-url":e.logo_url,tag:t.getAttributeByLocale(e,"subtitle")},nativeOn:{click:function(o){return t.showModal(e)}}})})),1)})),t._v(" "),o("div",{staticClass:"text-center"},[o("text-button",{attrs:{to:"/sponsor"}},[t._v(t._s(t.$t("sponsorUs")))])],1)],2),t._v(" "),o("sponsor-modal",{attrs:{context:t.selectedSponsor},model:{value:t.isOpened,callback:function(e){t.isOpened=e},expression:"isOpened"}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font-serif text-3xl lg:text-5xl"},[this._v("\n                PyCon Taiwan "),e("br"),this._v("\n                10th Anniversary\n            ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{LandingFocusInfo:o(358).default,TextButton:o(346).default,LandingFocusSlogan:o(357).default,SponsorCard:o(350).default,SponsorCardCollection:o(355).default,SponsorModal:o(356).default})}}]);